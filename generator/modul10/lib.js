// Layout helpers that reproduce the Module 6 formatting (A4, Arial 10 pt, green palette).
const fs = require('fs');
const d = require('docx');
const { Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  AlignmentType, VerticalAlign, HeadingLevel, ImageRun, PageBreak, HeightRule } = d;

const FULL = 9638;
const C = { dk: '1F5C45', gr: '2E7D55', hd: 'D9E8DF', line: 'B7C7BD', blue: '2F6DA3', grey: '888888', gold: 'C9A227' };

function md(text, base = {}) {
  const out = [];
  String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).forEach(part => {
    if (!part) return;
    if (part.startsWith('**')) out.push(new TextRun({ ...base, text: part.slice(2, -2), bold: true }));
    else if (part.startsWith('*') && part.length > 1) out.push(new TextRun({ ...base, text: part.slice(1, -1), italics: true }));
    else out.push(new TextRun({ ...base, text: part }));
  });
  return out;
}
const sp = (before, after, line) => ({ before, after, ...(line ? { line } : {}) });

const P = (text, o = {}) => new Paragraph({
  children: md(text, { size: o.size, color: o.color, italics: o.i, bold: o.b }),
  spacing: sp(o.before || 0, o.after ?? 100, 264), alignment: o.align, keepNext: o.keepNext,
});
const spacer = (after = 50) => new Paragraph({ children: [], spacing: sp(0, after, 264) });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });
const H1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true, spacing: sp(240, 120),
  children: [new TextRun({ text: t, bold: true, color: C.dk, size: 30 })] });
const H2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, spacing: sp(180, 80),
  children: [new TextRun({ text: t, bold: true, color: C.gr, size: 24 })] });

const brd = (color = C.line, size = 4, style = BorderStyle.SINGLE) =>
  ({ top: { style, size, color }, bottom: { style, size, color }, left: { style, size, color }, right: { style, size, color } });
const NOB = brd('FFFFFF', 0, BorderStyle.NONE);

function cell(content, o = {}) {
  const paras = (Array.isArray(content) ? content : [content]).map(t =>
    t instanceof Paragraph || t instanceof Table ? t :
      new Paragraph({ children: md(t, { size: o.size || 20, bold: o.bold, color: o.color, italics: o.i }), alignment: o.align,
        spacing: sp(o.sp ?? 25, o.sp ?? 25) }));
  return new TableCell({
    children: paras, width: { size: o.w, type: WidthType.DXA }, columnSpan: o.span,
    shading: o.shade ? { fill: o.shade, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    borders: o.borders || brd(), verticalAlign: o.va || VerticalAlign.CENTER,
    margins: o.margins || { top: 40, bottom: 40, left: 100, right: 100 },
  });
}

// Standard table: header row shaded, body text 10 pt (or o.size). Returns [table, spacer].
function tbl(widths, rows, o = {}) {
  const header = o.header !== false;
  const trs = rows.map((r, ri) => new TableRow({
    cantSplit: true, tableHeader: false,
    height: o.height ? { value: o.height, rule: HeightRule.ATLEAST } : undefined,
    children: r.map((c, ci) => {
      const isH = header && ri === 0;
      const bold = isH || (o.boldCol !== undefined && ci === o.boldCol);
      return cell(c, { w: widths[ci], shade: isH ? C.hd : (o.shade || undefined), bold, size: isH ? 18 : (o.size || 20),
        align: o.align, i: !isH && o.italicCol === ci });
    }),
  }));
  return [new Table({ width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, rows: trs }), spacer()];
}

const BOX = {
  recap: { fill: 'E3EEF8', c: C.blue }, note: { fill: 'F0F0F0', c: C.grey },
  attn: { fill: 'FFF4D6', c: C.gold }, green: { fill: 'E3F1E8', c: C.gr },
};
function box(kind, title, paras) {
  const k = BOX[kind];
  const b = { top: { style: BorderStyle.SINGLE, size: 6, color: k.c }, bottom: { style: BorderStyle.SINGLE, size: 6, color: k.c },
    right: { style: BorderStyle.SINGLE, size: 6, color: k.c }, left: { style: BorderStyle.SINGLE, size: 24, color: k.c } };
  const ch = [new Paragraph({ spacing: sp(0, 60), children: md(title, { bold: true, color: k.c, size: 20 }) }),
    ...paras.map(t => new Paragraph({ spacing: sp(0, 50), children: md(t, { size: 20 }) }))];
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: [FULL], rows: [new TableRow({ cantSplit: paras.length < 3, children: [
    new TableCell({ children: ch, width: { size: FULL, type: WidthType.DXA }, borders: b, shading: { fill: k.fill, type: ShadingType.CLEAR, color: 'auto' },
      margins: { top: 100, bottom: 100, left: 180, right: 180 } })] })] }), spacer()];
}

function banner(title, sub, o = {}) {
  const ch = [new Paragraph({ spacing: sp(0, 60), children: [new TextRun({ text: title, bold: true, color: 'FFFFFF', size: 30 })] }),
    new Paragraph({ children: md(sub, { italics: true, color: 'DDEEE4', size: 20 }) })];
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: [FULL], rows: [new TableRow({ children: [
    new TableCell({ children: ch, width: { size: FULL, type: WidthType.DXA }, borders: brd(C.dk), shading: { fill: C.dk, type: ShadingType.CLEAR, color: 'auto' },
      margins: { top: 160, bottom: 160, left: 240, right: 240 } })] })] }), spacer(o.after ?? 100)];
}

// TIPAR: label + boxes joined by operators ('+', '=', '→')
function tipar(label, parts) {
  const ops = parts.filter(p => ['+', '=', '→'].includes(p)).length;
  const bw = Math.floor((FULL - ops * 420) / (parts.length - ops));
  const widths = parts.map(p => ['+', '=', '→'].includes(p) ? 420 : bw);
  widths[widths.length - 1] += FULL - widths.reduce((a, b) => a + b, 0);
  const row = new TableRow({ cantSplit: true, children: parts.map((p, i) => ['+', '=', '→'].includes(p)
    ? cell(`**${p}**`, { w: widths[i], borders: NOB, align: AlignmentType.CENTER, size: 24, color: C.gr })
    : cell(p, { w: widths[i], borders: brd(C.gr, 8), shade: 'E3F1E8', align: AlignmentType.CENTER, bold: true })) });
  return [new Paragraph({ keepNext: true, spacing: sp(80, 60), children: md(label, { bold: true, italics: true, color: C.gr, size: 20 }) }),
    new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: widths, rows: [row] }), spacer()];
}

function objectives(items) {
  return [P('**By the end of this session you will be able to:**', { keepNext: true }),
    ...tbl([500, 9138], items.map(t => ['☐', t]), { header: false })];
}

function exercise(num, title, instr) {
  return [new Paragraph({ keepNext: true, spacing: sp(160, 40), children: [new TextRun({ text: `${num}   ${title}`, bold: true, color: C.dk, size: 22 })] }),
    ...(instr ? [P(`*${instr}*`, { keepNext: true, after: 80 })] : [])];
}

// "Cuvinte și expresii uzuale" box: title bar + pairs (ro, en) in two columns
function useful(pairs) {
  const W = [2750, 2069, 2750, 2069];
  const rows = [new TableRow({ cantSplit: true, tableHeader: false, children: [cell('**CUVINTE ȘI EXPRESII UZUALE  /  USEFUL WORDS AND PHRASES**',
    { w: FULL, span: 4, shade: C.gr, color: 'FFFFFF', size: 19, borders: brd(C.gr) })] })];
  for (let i = 0; i < pairs.length; i += 2) {
    const a = pairs[i], b = pairs[i + 1] || ['', ''];
    rows.push(new TableRow({ cantSplit: true, children: [
      cell(`**${a[0]}**`, { w: W[0], shade: 'F4FAF6', size: 19 }), cell(`*${a[1]}*`, { w: W[1], shade: 'F4FAF6', size: 18 }),
      cell(b[0] ? `**${b[0]}**` : '', { w: W[2], shade: 'F4FAF6', size: 19 }), cell(b[1] ? `*${b[1]}*` : '', { w: W[3], shade: 'F4FAF6', size: 18 })] }));
  }
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), spacer(80)];
}

function foto(desc, caption, height = 1500) {
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: [FULL], rows: [new TableRow({ height: { value: height, rule: HeightRule.ATLEAST }, cantSplit: true, children: [
    new TableCell({ width: { size: FULL, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, borders: brd('999999', 8, BorderStyle.DASHED), children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: sp(0, 100, 264), children: [new TextRun({ text: `FOTO: ${desc}`, bold: true, color: '777777' })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: sp(0, 100, 264), children: [new TextRun({ text: caption, italics: true, color: '777777', size: 18 })] })] })] })] }), spacer(80)];
}
const fotoCell = (desc, w, h) => new TableCell({ width: { size: w, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER,
  borders: brd('999999', 8, BorderStyle.DASHED), children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: sp(0, 0),
    children: [new TextRun({ text: 'FOTO:', bold: true, color: '777777', size: 16 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: desc, color: '777777', size: 16 })] })] });

function fig(name, widthPx, caption) {
  const svg = fs.readFileSync(`figs/${name}.svg`); const png = fs.readFileSync(`figs/${name}.png`);
  const m = String(svg).match(/width="(\d+)" height="(\d+)"/);
  const h = Math.round(widthPx * (+m[2]) / (+m[1]));
  return [new Paragraph({ alignment: AlignmentType.CENTER, keepNext: true, spacing: sp(80, 40), children: [
    new ImageRun({ type: 'svg', data: svg, transformation: { width: widthPx, height: h }, fallback: { type: 'png', data: png },
      altText: { title: caption, description: caption, name } })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: sp(0, 140, 264), children: [new TextRun({ text: caption, italics: true, color: '555555', size: 18 })] })];
}

// Multiple-choice test item, 2x2 grid of options
function mcq(n, q, opts) {
  const L = ['a', 'b', 'c', 'd'];
  const o = opts.map((t, i) => `☐   ${L[i]})  ${t}`);
  const rows = [new TableRow({ cantSplit: true, children: o.map(t => cell(t, { w: 2409, borders: brd('DDDDDD'), size: 19, sp: 10, margins: { top: 20, bottom: 20, left: 100, right: 100 } })) })];
  return [new Paragraph({ keepNext: true, spacing: sp(60, 30), children: [new TextRun({ text: `${n}.  ${q}`, bold: true, size: 20 }),
    new TextRun({ text: '   (1 p)', italics: true, color: '666666', size: 18 })] }),
    new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: [2409, 2409, 2409, 2411], rows })];
}

module.exports = { d, C, FULL, md, P, spacer, pageBreak, H1, H2, brd, NOB, cell, tbl, box, banner, tipar, objectives, exercise, useful, foto, fotoCell, fig, mcq };
