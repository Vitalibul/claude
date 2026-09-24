// Shared parts of every Module 9 domain version (same structure as the construction version).
const L = require('./lib');
const { d, C, P, spacer, pageBreak, H1, H2, tbl, box, banner, mcq } = L;
const { Paragraph, TextRun, AlignmentType, Header, Document } = d;

const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });

function cover(add, dom) {
  add(new Paragraph({ spacing: { before: 0, after: 1200, line: 264 }, children: [] }));
  add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
    cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
    cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
    cov('MODULE 9  —  MY FIELD OF WORK', { bold: true, color: C.gr, size: 32 }, 100),
    cov('MODULUL 9  —  DOMENIUL DE ACTIVITATE', { bold: true, color: C.dk, size: 28 }, 200),
    cov(`VARIANTA: ${dom.ro.toUpperCase()}  /  ${dom.en.toUpperCase()}`, { bold: true, color: 'FFFFFF', size: 26, shading: { type: 'clear', fill: C.gr, color: 'auto' } }, 600));
  add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'],
    ['A1+ — after Level A1', '12 hours · Sessions 33–36 · Weeks 17–18', 'English → Romanian']]));
  add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
    'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
    '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
    '*This module ends with ONE cumulative multiple-choice test (25 questions), signed and dated by the student and kept on file as proof of completion.*']));
  add(box('green', 'ONE MODULE, SEVERAL FIELDS / UN MODUL, MAI MULTE DOMENII', [
    `Module 9 is about the Romanian you need **at your own workplace**. It exists in several versions — construction, hotels and restaurants (HoReCa), transport and logistics, retail, manufacturing. All versions have the same four sessions: **tools and equipment · numbers and measurements · the work step by step · instructions, safety and the language of the workplace**. The student follows the version for their own job. **This book is the ${dom.en.toLowerCase()} version (${dom.ro}).**`]));
  add(pageBreak());
}

function recapNoGrammar(add, extra) {
  add(box('recap', 'NO NEW GRAMMAR IN THIS MODULE', [
    'The orders at work are the forms from **Lesson 3.13** — here you only **use** them. Everything else is words and phrases of your job.',
    `**Words differ from workplace to workplace.** ${extra} When you hear a new word, ask: **Cum se numește asta? · Ce înseamnă...?** (Lesson 4.3).`]));
}

// Common SSM rights/duties table + training note
function ssmCore(add) {
  add(H2('Your duties and your rights'));
  add(tbl([4819, 4819], [['YOU MUST (Law 319/2006, art. 22–23)', 'YOUR EMPLOYER MUST'],
    ['work as you were **trained**, without putting yourself or others in danger', 'give you the **protective equipment free of charge** (HG 1048/2006)'],
    ['use **machines, tools and substances correctly** and wear the **EIP**', 'train you in SSM **before you start** work (HG 1425/2006)'],
    ['**never remove or switch off** a safety device', 'explain the risks of your workplace'],
    ['**report at once** any danger you see', 'repeat the training periodically'],
    ['tell your manager / employer about **any accident** you have', 'If there is a problem: **ITM** (Lesson 5.2)']], { size: 18 }));
  add(box('note', 'PRACTICAL NOTE — THE SSM TRAINING / INSTRUCTAJUL SSM', [
    'Before you start work you receive the **instructajul introductiv-general**, then the **instructajul la locul de muncă**, and later the **instructajul periodic** — the interval between two periodic trainings cannot be longer than 6 months (HG 1425/2006). At the end there is a short test and you sign the **fișa individuală de instruire**. Sign only what you have understood: **Nu am înțeles. Puteți să-mi explicați, vă rog?**']));
}

const BASE_EXPR = [
  ['**Hai!**', 'haide — hai să mergem, hai să începem', 'Come on! · Let\'s go!'],
  ['**Gata!**', 'am terminat · e pregătit · ajunge', 'Done! · Ready! · That\'s enough!'],
  ['**Las\' că merge.**', 'nu-i nimic, e bine și așa', 'Never mind, it\'ll work.'],
  ['**Nu-i bai.**', 'nu e nicio problemă (mai ales în Ardeal și Banat)', 'No problem.'],
  ['**Stai puțin!**', 'așteaptă un moment', 'Wait a moment!'],
  ['**Bagă mare!**', 'dă-i drumul, repede, cu toată puterea', 'Go for it! · Full speed!'],
  ['**Merge și așa.**', 'e destul de bine, nu mai reparăm', 'It\'s good enough like that.'],
  ['**N-ai grijă!**', 'nu-ți face griji, mă ocup eu', 'Don\'t worry!'],
  ['**Ce faci, mă?**', 'salut prietenesc (sau: ce tot faci acolo?)', 'Hey, how\'s it going? / What are you doing?'],
  ['**Pe bune?**', 'serios? adevărat?', 'Really? · Seriously?'],
  ['**Lasă-l!**', 'nu-l mai deranja · lasă lucrul acolo', 'Leave him alone! · Leave it!'],
];
function expressions(add, place, extra, safetyExample) {
  add(box('note', `EXPRESSIONS YOU HEAR ${place} AND IN THE STREET — FOR RECOGNITION ONLY`, [
    'Informal. **Understand them**; use them only with colleagues you know well — never with a customer, an official or the police.']));
  add(tbl([2300, 3600, 3738], [['YOU HEAR', 'WHAT IT MEANS', 'ENGLISH'], ...BASE_EXPR, ...extra], { size: 17 }));
  add(box('attn', 'ATTENTION — „LAS\' CĂ MERGE” IS NEVER ABOUT SAFETY OR HYGIENE', [
    `**Las\' că merge** and **merge și așa** (*it is good enough*) are **never** acceptable for safety or hygiene: ${safetyExample}. Answer calmly: **Nu, așa nu e sigur.** — No, it\'s not safe like that. **Mă, măi** is familiar: fine between friends, rude to a stranger.`]));
}

function detachable(add, dom, Q, keyLines, sources, sessions) {
  add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 36, fișa de evidență a Modulului 9, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
  add(banner(`TEST CUMULATIV — MODULUL 9 (${dom.ro.toUpperCase()})`, `MODULE 9 — CUMULATIVE TEST · ${dom.en.toUpperCase()}  ·  grilă, 25 de întrebări, 25 de puncte  ·  semnat și datat de cursant`));
  add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
  add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
  Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
  add(spacer(40));
  add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 25'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
  add(spacer(80));
  add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
  add(tbl([4200, 5438], [
    ['Module / Modul', `Modulul 9 — Domeniul de activitate: ${dom.ro} (finalizat)`],
    ['Session / Sesiunea', 'Sesiunea 36 — Instrucțiuni, SSM, expresii, recapitulare. TEST CUMULATIV MODULUL 9'],
    ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'], ['Student name / Nume și prenume cursant', ''],
    ['Score / Punctaj obținut', '_______ / 25'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
  add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
  add(spacer(120));
  add(banner('MODULE 9 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 9 — se păstrează la dosarul cursantului'));
  add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''],
    ['Modul / Module', `Modulul 9 — Domeniul de activitate: ${dom.ro} (12 ore, Sesiunile 33–36)`]], { header: false }));
  add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
    ...sessions.map((s, i) => [String(33 + i), `Sesiunea ${33 + i} — ${s} (3 ore)`, '', i === 3 ? '___ / 25' : '—', ''])], { size: 18 }));
  add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
    `Confirm că cursantul a parcurs integral conținutul Modulului 9 — Domeniul de activitate: ${dom.ro}, în total 12 ore de curs, și a susținut testul de evaluare consemnat mai sus.`,
    `*I confirm that the student completed the full content of Module 9 — My Field of Work: ${dom.en}, 12 course hours in total, and sat the assessment recorded above.*`,
    'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
  add(spacer(120));
  add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
  keyLines.forEach(t => add(P(t, { size: 18, after: 30 })));
  add(H2('Cumulative test — grilă answer key'), P('**TOTAL: 25 de puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
  const ans = Q.map(q => q[2]); const rows = [];
  for (let r = 0; r < 3; r++) rows.push(Array.from({ length: 10 }, (_, i) => { const n = r * 10 + i; return n < 25 ? `**${n + 1}** – ${ans[n]}` : ''; }));
  add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), rows, { header: false, size: 18 }));
  add(H2('Surse și data verificării / Sources and date of verification'));
  add(P('Informațiile legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The legal information in this module was checked on 24 September 2026 against official sources.*', { size: 18 }));
  const common = [
    ['Obligațiile lucrătorilor (instruire, echipamente, EIP, dispozitive de securitate, pericole, accidente)', 'Legea nr. 319/2006, art. 22–23 — legislatie.just.ro/Public/DetaliiDocumentAfis/73772', 'Lesson 9.13'],
    ['EIP gratuit de la angajator · instructajul (introductiv-general, la locul de muncă, periodic — max. 6 luni)', 'HG nr. 1048/2006, art. 10 — .../74559 · HG nr. 1425/2006 — .../DetaliiDocument/76337', 'Lessons 9.3, 9.13'],
    ['Semnalizarea de securitate: forme și culori', 'HG nr. 971/2006 — .../74127; Directiva 92/58/CEE', 'Lesson 9.13'],
  ];
  add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'], ...common, ...sources,
    ['Lecțiile anterioare citate', 'Modulele 1–8 (see each RECAP box)', 'whole module']], { size: 15 }));
  add(P('*Pașii de lucru și cifrele din exerciții sunt exemple didactice de vocabular, nu instrucțiuni tehnice: la locul de muncă se respectă procedurile firmei și indicațiile șefului. / The work steps and figures are teaching examples for vocabulary, not technical instructions.*', { size: 15, color: '555555' }));
}

function makeDoc(dom, S) {
  return new Document({
    creator: 'Suport de curs', title: `Modulul 9 — Domeniul de activitate: ${dom.ro}`,
    styles: {
      default: { document: { run: { font: 'Arial', size: 20 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }],
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 9 — DOMENIUL DE ACTIVITATE: ${dom.ro.toUpperCase()}`, color: '777777', size: 16 })] })] }) },
      children: S,
    }],
  });
}
module.exports = { cover, recapNoGrammar, ssmCore, expressions, detachable, makeDoc };
