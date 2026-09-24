const fs = require('fs');
const L = require('./lib');
const { d, C, P, tbl, box } = L;
const { Document, Packer, Paragraph, TextRun, AlignmentType } = d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(new Paragraph({ spacing: { before: 0, after: 900 }, children: [] }));
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 48 }, 120),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 26 }, 500),
  cov('SUPORT DE CURS COMPLET', { bold: true, size: 32 }, 120),
  cov('Modulele 1–14  ·  Nivelurile A1–A2  ·  52 de sesiuni  ·  156 de ore', { bold: true, color: C.gr, size: 26 }, 120),
  cov('Complete course book — Modules 1–14 · Levels A1–A2 · 52 sessions · 156 hours', { italics: true, color: '555555', size: 22 }, 500));
add(box('note', 'TEMEI LEGAL / LEGAL BASIS', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*']));
add(P('**CUPRINS / CONTENTS**', { size: 22, after: 60 }));
const M = [['1', 'Alfabetul, scrisul și pronunția', 'A1', '1–4', 12], ['2', 'Bazele gramaticii', 'A1', '5–9', 15], ['3', 'Verbul și prima conversație', 'A1', '10–15', 18],
  ['4', 'La curs și la cumpărături', 'A1', '16–18', 9], ['5', 'Orientare România și timpul', 'A1', '19–22', 12], ['6', 'Haine și casa mea', 'A1', '23–25', 9],
  ['7', 'Familia mea și la restaurant', 'A1', '26–28', 9], ['8', 'Supermarket, piață, farmacie și medic · test A1', 'A1', '29–32', 12],
  ['9', 'Domeniul de activitate — 5 variante: Construcții · HoReCa · Transport, logistică, curierat · Comerț (retail) · Producție, industrie', 'A1–A2', '33–36', 12],
  ['10', 'Politețe, educație, banca și România de azi', 'A2', '37–40', 12], ['11', 'Călătorii, timp liber, munca și drepturile străinilor', 'A2', '41–44', 12],
  ['12', 'Casa, viața la oraș și la țară, O.U.G. 32/2026', 'A2', '45–47', 9], ['13', 'Servicii de zi cu zi și sănătate', 'A2', '48–49', 6],
  ['14', 'Emoții, viața socială, statul român și test final', 'A2', '50–52', 9]];
add(tbl([700, 5638, 900, 1300, 1100], [['M', 'MODULUL / MODULE', 'NIVEL', 'SESIUNI', 'ORE'], ...M.map(m => [m[0], m[1], m[2], m[3], String(m[4])]),
  ['', '**TOTAL**', '', '**52**', `**${M.reduce((a, m) => a + m[4], 0)}**`]], { size: 18 }));
add(P('*Modulul 9 apare în cinci variante, câte una pentru fiecare domeniu de activitate; cursantul parcurge doar varianta domeniului în care lucrează. Fiecare modul are propria copertă, propriul test cumulativ și propria secțiune detașabilă pentru formator. / Module 9 comes in five versions, one per field of work; each student studies only the version for their own field.*', { size: 17, color: '555555' }));
const doc = new Document({ styles: { default: { document: { run: { font: 'Arial', size: 20 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } }, children: S }] });
Packer.toBuffer(doc).then(b => { fs.writeFileSync('cover.docx', b); console.log('cover ok'); });
