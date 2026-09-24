const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, fig, mcq, cell, brd } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Header, HeightRule, BorderStyle, VerticalAlign } = d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });

// Recurrent A2 box: common writing mistakes
function mistakes(rows) {
  const W = [1500, 2600, 3200, 2338];
  const trs = [new TableRow({ cantSplit: true, children: [cell('**GREȘELI FRECVENTE LA SCRIS  /  COMMON WRITING MISTAKES**', { w: FULL, span: 4, shade: 'B71C1C', color: 'FFFFFF', size: 19, borders: brd('B71C1C') })] }),
    new TableRow({ cantSplit: true, children: ['WRITE', 'WHAT IT IS', 'EXAMPLE', 'THE TEST'].map((h, i) => cell(`**${h}**`, { w: W[i], shade: 'FDECEA', size: 17 })) })];
  rows.forEach(r => trs.push(new TableRow({ cantSplit: true, children: r.map((t, i) => cell(i === 0 ? `**${t}**` : t, { w: W[i], size: 18, shade: 'FFFFFF' })) })));
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows: trs }), spacer(80)];
}
const fotoGrid = (items) => {
  const W = [1500, 3319, 1500, 3319]; const rows = [];
  const fc = (t) => new L.d.TableCell({ width: { size: 1500, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, borders: brd('999999', 8, BorderStyle.DASHED), children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'FOTO:', bold: true, color: '777777', size: 16 })] }), new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, color: '777777', size: 16 })] })] });
  for (let i = 0; i < items.length; i += 2) {
    const a = items[i], b = items[i + 1];
    rows.push(new TableRow({ cantSplit: true, height: { value: 1150, rule: HeightRule.ATLEAST }, children: [fc(a[0]), cell(a[1], { w: W[1], size: 17, sp: 10 }), fc(b[0]), cell(b[1], { w: W[3], size: 17, sp: 10 })] }));
  }
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), spacer(80)];
};

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 10  —  POLITENESS, EDUCATION, BANKING AND ROMANIA TODAY', { bold: true, color: C.gr, size: 30 }, 100),
  cov('MODULUL 10  —  POLITEȚE, EDUCAȚIE, BANCA ȘI ROMÂNIA DE AZI', { bold: true, color: C.dk, size: 28 }, 100),
  cov('Începutul Nivelului A2 / The start of Level A2', { italics: true, color: C.gr, size: 22 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'], ['A2 — after Module 9', '12 hours · Sessions 37–40 · Weeks 19–20', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with ONE cumulative multiple-choice test (20 questions), signed and dated by the student and kept on file as proof of completion.*']));
add(pageBreak());

// ================= BEFORE YOU START =================
add(H1('Before you start'),
  P('With Module 10 you start **Level A2**. You will write and speak more politely — in an email, on the phone, at an office counter — with the only new grammar of the module, the **polite conditional** (*aș vrea, ați putea*). You will learn how Romanian schools work, how to open a bank account, and what Romania is today: its coat of arms and anthem, its recent history and some famous Romanians.'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**tu / dumneavoastră** · politeness', 'Lessons 2.6, 5.3', 'the polite forms'],
  ['**să + verb** · **pot, vreau**', 'Lesson 3.11', 'Aș vrea să deschid un cont.'],
  ['**short pronouns** — îmi, vă, mi-e', 'Lesson 2.10', 'mi-ar plăcea, v-ar deranja'],
  ['**Aș dori** (fixed phrase)', 'Lesson 4.4', 'now you learn how it is built'],
  ['**institutions, the town hall, 112**', 'Lesson 5.2', 'at the counter'],
  ['**Romania: symbols, regions, holidays**', 'Lessons 5.1, 5.6', 'do not repeat — only what is new'],
  ['**payslip, salary card**', 'Lesson 8.7', 'your bank account']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 37**', '3 hours', 'Lesson 10.1 Polite formulas: in writing, on the phone, at the counter · 10.2 The polite conditional'],
  ['**Session 38**', '3 hours', 'Lesson 10.3 The education system · 10.4 Enrolling a child at school'],
  ['**Session 39**', '3 hours', 'Lesson 10.5 Opening a bank account · 10.6 Card, PIN, ATM, statement'],
  ['**Session 40**', '3 hours', 'Lesson 10.7 Coat of arms and anthem · 10.8 Recent history · 10.9 Famous Romanians · 10.10 Recap · **Module 10 test**']], { size: 19 }));
add(box('recap', 'ONE NEW GRAMMAR POINT — AND A NEW BOX', [
  'The only new grammar is the **polite conditional** (Lesson 10.2). From now on every session also has a red box **Greșeli frecvente la scris / Common writing mistakes**: words that sound the same but are written differently (*să / s-a*, *la / l-a*...). Two pairs per session.']));
add(pageBreak());

// ================= S37 =================
add(banner('SESSION 37  —  POLITENESS AND THE CONDITIONAL', 'SESIUNEA 37 — POLITEȚE ȘI CONDIȚIONALUL  ·  3 hours'));
add(objectives(['write a short polite email or request', 'make and answer a phone call politely', 'ask for something at an office counter', 'use the polite conditional: **aș vrea, ați putea, mi-ar plăcea**']));
add(H1('Lesson 10.1  —  Polite formulas / Formule de politețe'));
add(tbl([4819, 4819], [['IN WRITING — AN EMAIL', 'ENGLISH'],
  ['**Stimată doamnă Popescu,** / **Stimate domnule Ionescu,** / **Bună ziua,**', 'Dear Mrs Popescu, / Dear Mr Ionescu, / Hello,'],
  ['**Vă scriu în legătură cu** programarea de marți.', 'I am writing about Tuesday\'s appointment.'],
  ['**Aș dori să** schimb ora. **Vă rog să-mi spuneți** dacă e posibil.', 'I would like to change the time. Please tell me if it is possible.'],
  ['**Vă mulțumesc anticipat.**', 'Thank you in advance.'],
  ['**Cu stimă,** / **Cu respect,** Ravi Kumar', 'Yours sincerely, / Respectfully, Ravi Kumar']], { size: 18 }));
add(P('**A written request** (*o cerere*) usually starts: **Subsemnatul / Subsemnata** Ravi Kumar, cu domiciliul în..., **vă rog să-mi aprobați**... and ends with **Data** and **Semnătura**. It is addressed to the person in charge: *Doamnei Director / Domnului Director*.', { size: 19 }));
add(tbl([2450, 2369, 2450, 2369], [['ON THE PHONE', 'ENGLISH', 'AT THE COUNTER', 'ENGLISH'],
  ['**Alo, bună ziua! Sunt Ravi Kumar, de la firma...**', 'Hello! This is Ravi Kumar, from...', '**Bună ziua, am o programare la ora 10.**', 'Hello, I have an appointment at 10.'],
  ['**Aș putea vorbi cu doamna Popescu?**', 'Could I speak to Mrs Popescu?', '**Aș avea nevoie de o adeverință.**', 'I would need a certificate.'],
  ['**Un moment, vă rog. Vă fac legătura.**', 'One moment, please. I\'ll put you through.', '**Ați putea să-mi spuneți ce acte trebuie?**', 'Could you tell me which documents I need?'],
  ['**Puteți vorbi mai rar, vă rog?**', 'Could you speak more slowly, please?', '**Unde semnez?** (Lesson 5.2)', 'Where do I sign?'],
  ['**Vă sun eu înapoi.**', 'I\'ll call you back.', '**Vă mulțumesc pentru ajutor.**', 'Thank you for your help.']], { size: 17 }));
add(exercise('10.1', 'Put the email in order', 'Write 1–5.'));
add(ex2([['___  Cu stimă, Ana Rao', '___  Stimată doamnă Marin,'], ['___  Vă scriu în legătură cu permisul de ședere.', '___  Vă mulțumesc anticipat.'], ['___  Aș dori o programare săptămâna viitoare.', '']]));
add(useful([['în legătură cu', 'about, regarding'], ['anticipat', 'in advance'], ['atașat', 'attached'], ['subsemnatul', 'I, the undersigned'], ['a face legătura', 'to put through'], ['a reveni', 'to come back to, get back to']]));

add(H1('Lesson 10.2  —  The polite conditional / Condiționalul de politețe'));
add(P('In Lesson 4.4 you learned **Aș dori** as a fixed phrase. Now you see how it is built. The conditional makes a request **softer and more polite**: *Vreau o cafea.* → **Aș vrea o cafea.**', { size: 19 }));
add(tipar('TIPAR — the polite conditional', ['aș · ai · ar · am · ați · ar', '+', 'VERB (no a): vrea, dori, putea', '=', 'Aș vrea. · Ați putea...?']));
add(tbl([1500, 1800, 2100, 4238], [['PERSON', 'AUXILIARY', 'A VREA', 'EXAMPLE'],
  ['eu', '**aș**', 'aș vrea', 'Aș vrea să deschid un cont. — I\'d like to open an account.'],
  ['tu', '**ai**', 'ai vrea', 'Ai vrea să vii la noi? — Would you like to come to us?'],
  ['el / ea', '**ar**', 'ar vrea', 'Ar vrea o programare. — He\'d like an appointment.'],
  ['noi', '**am**', 'am vrea', 'Am vrea să plătim separat. — We\'d like to pay separately.'],
  ['voi / dvs.', '**ați**', 'ați vrea', 'Ați putea repeta, vă rog? — Could you repeat, please?'],
  ['ei / ele', '**ar**', 'ar vrea', 'Ar vrea să vină mâine. — They\'d like to come tomorrow.']], { size: 18 }));
add(tbl([4819, 4819], [['USEFUL FORMS', 'ENGLISH'],
  ['**Aș dori... · Aș avea nevoie de...**', 'I would like... · I would need...'],
  ['**Ați putea să...?** · **Ar fi posibil să...?**', 'Could you...? · Would it be possible to...?'],
  ['**Mi-ar plăcea să...** (îmi + ar, Lesson 2.10)', 'I would like to... (I would enjoy...)'],
  ['**V-ar deranja dacă...?** · **V-aș ruga să...**', 'Would you mind if...? · I would ask you to...'],
  ['**N-aș vrea să vă deranjez.**', 'I wouldn\'t want to disturb you.']], { size: 18 }));
add(exercise('10.2', 'Make it polite', 'Rewrite with the conditional.'));
add(ex2([['1.  Vreau un formular. → ______________________', '2.  Puteți repeta? → ______________________'], ['3.  Vrem o masă pentru doi. → ______________________', '4.  Îmi place să lucrez aici. → Mi-______ plăcea ______________'], ['5.  Vreți o cafea? → ______________________', '6.  Am nevoie de ajutor. → ______________________']]));
add(useful([['aș vrea · aș dori', 'I would like'], ['ați putea', 'could you'], ['mi-ar plăcea', 'I would like / enjoy'], ['ar fi bine', 'it would be good'], ['v-ar deranja', 'would you mind'], ['cu plăcere', 'with pleasure']]));
add(mistakes([
  ['să', 'the little word before a verb (Lesson 3.11)', 'Vreau **să** plec. · Trebuie **să** semnez.', 'a verb comes after it'],
  ['s-a', 'se + a — the past: *it has / he has...*', 'S-a terminat. · **S-a** dus acasă.', 'you can say **s-au** for many: *s-au dus*'],
  ['la', 'at, to (a place, a time)', 'Merg **la** bancă. · **La** ora 8.', 'no verb in *la*'],
  ['l-a', 'îl + a — *he / she has ... him / it*', 'Șeful **l-a** sunat. · **L-a** văzut.', 'you can say **l-am**: *l-am sunat*']]));
add(hw(37, ['**H37.1**  Write a short email to your manager: you would like a day off next Friday. Use *Stimate domnule / Stimată doamnă, Aș dori..., Cu stimă*.', '**H37.2**  Write five polite questions with *Ați putea...?* for the bank, the doctor, the town hall.']));

// ================= S38 =================
add(spacer(160));
add(banner('SESSION 38  —  EDUCATION', 'SESIUNEA 38 — EDUCAȚIA  ·  3 hours'));
add(objectives(['describe the levels of the Romanian school system', 'understand school words: marks, the class teacher, the school year', 'know how to enrol a child at school']));
add(H1('Lesson 10.3  —  The education system / Sistemul de educație'));
add(fig('educatie', 560, 'Fig. 10.1 — Sistemul de educație din România (vârste aproximative) / The Romanian education system (approximate ages)'));
add(P('Pre-university education is regulated by **Law no. 198/2023**. Public education is **free** in state schools. After **clasa a VIII-a** pupils take the **Evaluarea Națională**; after the **liceu**, the **Bacalaureatul**, which gives access to university. Instead of a liceu, pupils can go to a **școală profesională** (vocational school, also **dual**, with training at a company).', { size: 19 }));
add(tbl([2450, 2369, 2450, 2369], [['AT SCHOOL', 'ENGLISH', 'AT SCHOOL', 'ENGLISH'],
  ['**elevul · eleva**', 'pupil', '**studentul · studenta**', 'university student'],
  ['**învățătoarea**', 'primary school teacher', '**profesorul · profesoara**', 'teacher'],
  ['**dirigintele · diriginta**', 'class teacher (form tutor)', '**ședința cu părinții**', 'parents\' meeting'],
  ['**nota** (1–10) · **media**', 'mark (1–10) · average', '**calificativul** (FB, B, S, I)', 'mark in primary school'],
  ['**anul școlar · vacanța**', 'school year · holiday', '**catalogul**', 'the class register']], { size: 17 }));
add(P('*In gymnasium and high school marks go from **1 to 10**; **5** is the minimum to pass. In primary school pupils get **calificative**: Foarte bine, Bine, Suficient, Insuficient.*', { size: 17 }));
add(exercise('10.3', 'Which level?', 'Write: grădiniță · școala primară · gimnaziu · liceu · universitate.'));
add(ex2([['1.  Un copil de 4 ani merge la ______________.', '2.  Clasele V – VIII sunt la ______________.'], ['3.  Bacalaureatul se dă la sfârșitul ______________.', '4.  Clasa pregătitoare e la ______________.']]));
add(useful([['a învăța · a preda', 'to learn · to teach'], ['temele', 'homework'], ['a trece clasa', 'to pass the year'], ['absențele', 'absences'], ['uniforma școlară', 'school uniform'], ['after-school', 'after-school club']]));

add(H1('Lesson 10.4  —  Enrolling a child at school / Înscrierea la școală'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', 'afli **școala de circumscripție** (the school for your address) și **calendarul înscrierilor**', 'find the school for your address and the enrolment dates'],
  ['2', 'mergi la **secretariatul** școlii și ceri lista de **acte**', 'go to the school office and ask for the list of documents'],
  ['3', 'de obicei: **cererea**, **certificatul de naștere** al copilului, **actele părinților** (pașaportul, permisul de ședere)', 'usually: the application, the child\'s birth certificate, the parents\' documents'],
  ['4', 'dacă copilul a învățat în altă țară: **documentele școlare** și **evaluarea** pentru a stabili clasa', 'if the child studied abroad: school documents and an assessment to decide the class'],
  ['5', 'dacă nu vorbește română: un **curs de inițiere în limba română**, gratuit, organizat de **inspectoratul școlar**', 'if the child does not speak Romanian: a free Romanian initiation course organised by the county school inspectorate']], { size: 17 }));
add(box('attn', 'ATTENTION — THE RIGHT TO EDUCATION', [
  'Children of foreigners who live legally in Romania have access to the Romanian state schools; the county **inspectoratul școlar (ISJ / ISMB)** decides the class after studies abroad and organises the free Romanian language course (Ministry of Education; IGI — „Acces la educație”). The exact documents and dates change every year — **ask the school office**.']));
add(tbl([4819, 4819], [['AT THE SCHOOL OFFICE', 'ENGLISH'],
  ['Bună ziua! Aș dori să-mi înscriu fiul în clasa a II-a.', 'Hello! I would like to enrol my son in year 2.'],
  ['Ce acte ar trebui să aduc?', 'Which documents should I bring?'],
  ['A învățat doi ani în Nepal. Ați putea să-mi spuneți cum se recunoaște?', 'He studied two years in Nepal. Could you tell me how it is recognised?'],
  ['Nu vorbește încă bine românește. Există un curs de limba română?', 'He doesn\'t speak Romanian well yet. Is there a Romanian course?']], { size: 18 }));
add(exercise('10.4', 'Correct order', 'Write 1–4.'));
add(ex2([['___  Aduc actele la secretariat.', '___  Aflu care e școala de circumscripție.'], ['___  Copilul începe școala.', '___  Cer lista de acte.']]));
add(useful([['secretariatul', 'school office'], ['a înscrie', 'to enrol'], ['circumscripția școlară', 'school catchment area'], ['inspectoratul școlar', 'county school inspectorate'], ['echivalarea studiilor', 'recognition of studies'], ['certificatul de naștere', 'birth certificate']]));
add(mistakes([
  ['ia', 'from *a lua*: he / she takes · Take!', 'Maria **ia** autobuzul. · **Ia** o foaie!', 'you can say **iau**: *eu iau*'],
  ['i-a', 'îi + a — *to him / her + has*', 'Profesorul **i-a** dat o notă. · **I-a** spus.', 'you can say **i-am**: *i-am dat*'],
  ['sau', 'or', 'Cash **sau** cu cardul?', 'you can say **ori**'],
  ['s-au', 'se + au — the past, many people', 'Copiii **s-au** înscris. · **S-au** dus.', 'singular: **s-a** înscris']]));
add(hw(38, ['**H38.1**  Write five sentences about school in your country and compare with Romania: *În țara mea, școala începe la... În România...*', '**H38.2**  Write the questions you would ask at the school office (four questions with the conditional).']));

// ================= S39 =================
add(spacer(160));
add(banner('SESSION 39  —  THE BANK', 'SESIUNEA 39 — BANCA  ·  3 hours'));
add(objectives(['open a bank account: what to bring, what to ask', 'name the types of accounts and bank words', 'use the card, the PIN, the ATM and read a statement', 'protect your money: never give your PIN or codes']));
add(H1('Lesson 10.5  —  Opening a bank account / Deschiderea unui cont'));
add(tbl([4819, 4819], [['WHAT TO BRING (usually)', 'WHY'],
  ['**pașaportul** și **permisul de ședere**', 'the bank must identify you; the permit has your personal number (**CNP**)'],
  ['uneori: **contractul de muncă** sau o **adeverință de salariu**', 'some banks ask where your money comes from'],
  ['uneori: o **dovadă a adresei**', 'e.g. a rental contract or a bill'],
  ['**telefonul** și **adresa de e-mail**', 'for the codes and the mobile app']], { size: 18 }));
add(box('attn', 'ATTENTION — YOUR RIGHT TO A BASIC ACCOUNT', [
  'Every bank has its own list of documents — ask before you go. By law, consumers who live legally in the European Union have the right to a **cont de plăți cu servicii de bază** (basic payment account) and banks may not discriminate on grounds of **nationality** or **place of residence** (Law no. 258/2017). Read the fees (**comisioanele**) before you sign.']));
add(tbl([2450, 2369, 2450, 2369], [['BANK WORD', 'ENGLISH', 'BANK WORD', 'ENGLISH'],
  ['**contul curent**', 'current account', '**contul de economii**', 'savings account'],
  ['**contul de salariu**', 'salary account', '**depozitul**', 'term deposit'],
  ['**IBAN-ul** (RO + 22 caractere)', 'account number (24 characters)', '**transferul · plata**', 'transfer · payment'],
  ['**comisionul**', 'fee', '**soldul**', 'balance'],
  ['**creditul · împrumutul**', 'loan', '**dobânda**', 'interest']], { size: 17 }));
add(tbl([4819, 4819], [['AT THE BANK', 'ENGLISH'],
  ['C: Bună ziua! Aș dori să deschid un cont curent.', 'Hello! I would like to open a current account.'],
  ['B: Sigur. Aveți pașaportul și permisul de ședere?', 'Of course. Do you have your passport and residence permit?'],
  ['C: Da, poftiți. Ați putea să-mi spuneți ce comisioane are contul?', 'Yes, here you are. Could you tell me what fees the account has?'],
  ['B: Administrarea costă ... lei pe lună. Vă dăm și un card de debit.', 'The account fee is ... lei a month. We\'ll also give you a debit card.'],
  ['C: Aș vrea și aplicația pe telefon. Pot să primesc salariul în acest cont?', 'I\'d also like the phone app. Can I receive my salary in this account?'],
  ['B: Da. Dați-i angajatorului IBAN-ul, pe care îl găsiți în contract și în aplicație.', 'Yes. Give your employer the IBAN, which you find in the contract and in the app.']], { size: 18 }));
add(exercise('10.5', 'At the bank', 'Complete with: cont · IBAN-ul · comisioane · pașaportul.'));
add(ex2([['1.  Aș dori să deschid un ______________.', '2.  Am adus ______________ și permisul.'], ['3.  Ce ______________ are contul?', '4.  Îi dau angajatorului ______________.']]));
add(useful([['a deschide · a închide un cont', 'to open · close an account'], ['titularul contului', 'account holder'], ['a semna contractul', 'to sign the contract'], ['ghișeul · consilierul bancar', 'counter · bank adviser'], ['programarea online', 'online appointment'], ['sucursala · agenția', 'branch']]));

add(H1('Lesson 10.6  —  Card, PIN, ATM, statement / Cardul, PIN-ul, bancomatul, extrasul'));
add(tbl([4819, 4819], [['AT THE ATM / LA BANCOMAT', 'ENGLISH'],
  ['Introduceți cardul. · Introduceți codul PIN.', 'Insert your card. · Enter your PIN.'],
  ['Retragere numerar · Interogare sold', 'Cash withdrawal · Balance enquiry'],
  ['Alegeți suma. · Doriți chitanță?', 'Choose the amount. · Would you like a receipt?'],
  ['Ridicați cardul. · Ridicați banii.', 'Take your card. · Take your money.']], { size: 18 }));
add(P('**Extrasul de cont** (the statement) shows every payment: the date, the amount, **încasare** (money in) or **plată** (money out), and the **sold** (balance). You see it in the app or ask for it at the bank.', { size: 19 }));
add(box('attn', 'ATTENTION — PROTECT YOUR MONEY', [
  'Never tell anyone your **PIN** or the **codes** you receive by SMS — not even someone who says they are from the bank. The bank never asks for them by phone, SMS or e-mail. If you lose your card, **block it at once** in the app or by calling the bank (the number is on the back of the card and on the bank\'s website). More about scams in Module 11.']));
add(exercise('10.6', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  Vrei să scoți 200 de lei. → ______________________', '2.  Ai pierdut cardul. → ______________________'], ['3.  Cineva te sună și îți cere codul PIN. → ______________________', '4.  Vrei să vezi cât ai în cont. → ______________________']]));
add(useful([['a retrage bani · a depune bani', 'to withdraw · to deposit money'], ['a bloca cardul', 'to block the card'], ['cardul contactless', 'contactless card'], ['plata a fost respinsă', 'the payment was declined'], ['codul de confirmare', 'confirmation code'], ['furtul · frauda', 'theft · fraud']]));
add(mistakes([
  ['va', 'the future: he / she **will** (Lesson 3.16)', 'Banca **va** fi deschisă. · **Va** veni mâine.', 'a verb follows: *va veni*'],
  ['v-a', 'vă + a — *to you + has*', 'Banca **v-a** trimis codul. · **V-a** sunat.', 'you can say **v-am**: *v-am trimis*'],
  ['numai', 'only (= doar)', 'Am **numai** 50 de lei.', 'you can say **doar**'],
  ['nu mai', 'not ... any more / no more', '**Nu mai** am bani. · **Nu mai** lucrez acolo.', 'it is **nu** + **mai**: the negative']]));
add(hw(39, ['**H39.1**  Write the list of documents you would bring to open an account, and three questions for the bank.', '**H39.2**  Look at a statement in your bank app. Write in Romanian: the date, one payment, the balance.']));

// ================= S40 =================
add(spacer(160));
add(banner('SESSION 40  —  ROMANIA TODAY, RECAP AND TEST', 'SESIUNEA 40 — ROMÂNIA DE AZI, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['describe the coat of arms and its five fields', 'name the anthem and the days of the flag and the anthem', 'tell briefly about communism, the 1989 Revolution and Schengen', 'recognise six famous Romanians']));
add(box('recap', 'RECAP — ALREADY IN MODULE 5  (Lessons 5.1 and 5.6)', [
  'The **flag**, the **currency (leu)**, the **capital**, the **regions**, **24 January 1859** (the Union of the Principalities), **1 December 1918** (the Great Union), **NATO (2004)** and the **EU (2007)**. They are not repeated here — see them on the timeline in Fig. 10.3.']));
add(H1('Lesson 10.7  —  The coat of arms and the anthem / Stema și imnul'));
add(fig('stema', 600, 'Fig. 10.2 — Cele cinci câmpuri ale stemei și regiunile lor / The five fields of the coat of arms and their regions'));
add(P('The coat of arms (**stema**) shows a **golden eagle** on blue, with a **crown**, holding an Orthodox cross, a sword and a sceptre. On its chest is a small shield with **five fields**, one for each group of historical regions (Law no. 102/1992, amended by Law no. 146/2016).', { size: 19 }));
add(tbl([2400, 2419, 2400, 2419], [['SYMBOL', 'WHAT / WHEN', 'SYMBOL', 'WHAT / WHEN'],
  ['**Imnul național**', '„Deșteaptă-te, române!” — versuri **Andrei Mureșanu**, muzica **Anton Pann**, 1848', '**Ziua Imnului**', '**29 iulie** (Law 99/1998)'],
  ['**Ziua Drapelului**', '**26 iunie** (Law 96/1998) — the tricolour adopted in 1848', '**Stema**', 'eagle + 5 fields (Fig. 10.2)']], { size: 17 }));
add(exercise('10.7', 'Which field?', 'Look at Fig. 10.2 and write the region.'));
add(ex2([['1.  capul de bour → ______________', '2.  cei doi delfini → ______________'], ['3.  podul și leul → ______________', '4.  acvila cu crucea (câmpul 1) → ______________']]));
add(useful([['stema · scutul', 'coat of arms · shield'], ['acvila · coroana', 'eagle · crown'], ['imnul național', 'national anthem'], ['versurile · muzica', 'the lyrics · the music']]));

add(H1('Lesson 10.8  —  Recent history / Istoria recentă'));
add(P('**Communism (1947–1989).** On **30 December 1947** King Mihai I was forced to abdicate and the **Republica Populară Română** was proclaimed. For more than 40 years one party ruled; there were no free elections, no free press and no free travel. From 1965 the leader was **Nicolae Ceaușescu**; in the 1980s food and energy were rationed.', { size: 19 }));
add(P('**The Revolution (December 1989).** The protests began on **16 December 1989** in **Timișoara** and reached Bucharest; on **22 December** the communist regime fell. More than a thousand people were killed. In **1990** Romania held its first free elections, and in **1991** it adopted a democratic Constitution.', { size: 19 }));
add(P('**Schengen.** Romania joined the Schengen area in two steps: controls at **air and sea borders** ended on **31 March 2024**, and at **land borders** on **1 January 2025** (Romanian Border Police). You still need a valid document to travel — for you, the passport and the residence permit.', { size: 19 }));
add(fig('axa', 440, 'Fig. 10.3 — Axa timpului: istoria României / Timeline of Romanian history'));
add(exercise('10.8', 'Which year?', 'Write the year.'));
add(ex2([['1.  Revoluția din decembrie → ______', '2.  Schengen aerian și maritim → ______'], ['3.  Începe regimul comunist → ______', '4.  Marea Unire (recap) → ______']]));
add(useful([['regimul comunist', 'communist regime'], ['dictatura · libertatea', 'dictatorship · freedom'], ['alegerile libere', 'free elections'], ['frontiera · controlul', 'border · check']]));

add(H1('Lesson 10.9  —  Famous Romanians / Personalități românești'));
add(fotoGrid([
  ['Mihai Eminescu', '**Mihai Eminescu** (1850–1889) — the national poet. His poem *Luceafărul* is read in every school. — *poetul național*'],
  ['Constantin Brâncuși', '**Constantin Brâncuși** (1876–1957) — sculptor, a founder of modern sculpture; *Coloana fără sfârșit* is in Târgu Jiu. — *sculptor*'],
  ['George Enescu', '**George Enescu** (1881–1955) — composer and violinist; the *Romanian Rhapsodies*. The Enescu Festival is held in Bucharest. — *compozitor*'],
  ['Nadia Comăneci', '**Nadia Comăneci** (b. 1961) — gymnast, the first **perfect 10** in Olympic history, Montreal 1976. — *gimnastă*'],
  ['Henri Coandă', '**Henri Coandă** (1886–1972) — engineer and inventor, pioneer of aerodynamics (the *Coandă effect*); Bucharest airport bears his name. — *inventator*'],
  ['Gheorghe Hagi', '**Gheorghe Hagi** (b. 1965) — footballer, captain of the national team, called *Regele* (the King). — *fotbalist*']]));
add(exercise('10.9', 'Who is it?', 'Write the name.'));
add(ex2([['1.  primul 10 la Olimpiadă → ______________', '2.  Coloana fără sfârșit → ______________'], ['3.  poetul național → ______________', '4.  aeroportul din București → ______________']]));
add(useful([['celebru · cunoscut', 'famous · well known'], ['s-a născut în', 'he / she was born in'], ['opera', 'the work (of art)'], ['campion · campioană', 'champion']]));

add(H1('Lesson 10.10  —  Recap / Recapitulare'));
add(tbl([3600, 3800, 2238], [['PATTERN · TOPIC', 'EXAMPLE', 'LESSON'],
  ['aș / ai / ar / am / ați / ar + verb', 'Aș vrea. Ați putea repeta?', '10.2'],
  ['email: Stimată doamnă... Cu stimă', 'Vă scriu în legătură cu...', '10.1'],
  ['grădiniță → primar → gimnaziu → liceu → universitate', 'Evaluarea Națională · Bacalaureatul', '10.3'],
  ['cont · IBAN · card · PIN · extras', 'Nu dau niciodată PIN-ul.', '10.5–10.6'],
  ['stema: 5 câmpuri · imnul: 1848 · 26 iunie · 29 iulie', 'Deșteaptă-te, române!', '10.7'],
  ['1947 · 1989 · 2024–2025 Schengen', 'Revoluția a început la Timișoara.', '10.8']], { size: 17 }));
add(mistakes([
  ['odată', 'once (in the past), at some time · *odată cu* = together with', 'Am fost **odată** la Cluj. · **Odată** cu salariul...', 'it is not a number'],
  ['o dată', 'one time (a number) · also: a date', 'Merg la bancă **o dată** pe lună.', 'you can say **de două ori**'],
  ['niciun', 'no, not a (masculine / neuter) — **one word**', 'Nu am **niciun** frate. · **niciun** document', 'always together'],
  ['nicio', 'no, not a (feminine) — **one word**', 'Nu e **nicio** problemă.', 'always together']]));
add(exercise('10.10', 'Everything together', 'Circle the correct form.'));
add(ex2([['1.  ( Aș  /  Am ) vrea o programare.', '2.  Nu e ( nicio  /  nici o ) problemă.'], ['3.  Trebuie ( să  /  s-a ) semnez.', '4.  Banca ( va  /  v-a ) trimis codul.'], ['5.  Merg ( o dată  /  odată ) pe săptămână.', '6.  ( Nu mai  /  Numai ) am bani.']]));
add(hw(40, ['**H40.1**  Write five sentences about Romania today with the new facts from Lessons 10.7–10.8.', '**H40.2**  Choose one famous person from your country and write three sentences about them, like in Lesson 10.9.']));

// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 40, fișa de evidență a Modulului 10, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — MODULUL 10', 'MODULE 10 — CUMULATIVE TEST  ·  grilă, 20 de întrebări, 20 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  ['Care formulă este potrivită la începutul unui e-mail oficial?', ['Salut, frate!', 'Stimată doamnă Popescu,', 'Hei!', 'Pa!'], 'b'],
  ['„Cu stimă” se scrie:', ['la începutul e-mailului', 'la sfârșitul e-mailului, înainte de nume', 'în subiect', 'nicăieri'], 'b'],
  ['Completează: „Eu ___ vrea o programare.”', ['aș', 'ar', 'ați', 'am'], 'a'],
  ['Completează: „___ putea repeta, vă rog?” (dumneavoastră)', ['Aș', 'Ați', 'Ar', 'Ai'], 'b'],
  ['„Mi-ar plăcea” înseamnă:', ['I liked', 'I would like', 'I like', 'I will like'], 'b'],
  ['Care cerere este cea mai politicoasă?', ['Vreau un formular!', 'Dă-mi un formular!', 'Aș avea nevoie de un formular, vă rog.', 'Formular!'], 'c'],
  ['Clasele V – VIII formează:', ['grădinița', 'gimnaziul', 'liceul', 'universitatea'], 'b'],
  ['Examenul de la sfârșitul liceului este:', ['Evaluarea Națională', 'Bacalaureatul', 'licența', 'masteratul'], 'b'],
  ['În gimnaziu, nota minimă de trecere este:', ['1', '3', '5', '10'], 'c'],
  ['Pentru un copil care nu vorbește româna, inspectoratul școlar organizează:', ['un curs gratuit de inițiere în limba română', 'un examen de admitere plătit', 'nimic', 'un curs obligatoriu de engleză'], 'a'],
  ['Pentru a deschide un cont, un cetățean străin aduce de obicei:', ['numai telefonul', 'pașaportul și permisul de ședere', 'certificatul de naștere', 'diploma de liceu'], 'b'],
  ['IBAN-ul este:', ['codul PIN', 'numărul contului', 'parola aplicației', 'soldul'], 'b'],
  ['Cineva te sună și îți cere codul PIN. Ce faci?', ['i-l spui', 'nu i-l spui niciodată', 'i-l trimiți pe SMS', 'i-l scrii pe e-mail'], 'b'],
  ['„Retragere numerar” la bancomat înseamnă:', ['cash withdrawal', 'balance enquiry', 'deposit', 'transfer'], 'a'],
  ['Câte câmpuri are scutul mic al stemei?', ['3', '4', '5', '7'], 'c'],
  ['Cei doi delfini de pe stemă reprezintă:', ['Moldova', 'Dobrogea', 'Banatul', 'Transilvania'], 'b'],
  ['Ziua Imnului Național este:', ['1 decembrie', '26 iunie', '29 iulie', '24 ianuarie'], 'c'],
  ['Revoluția din 1989 a început la:', ['Iași', 'Timișoara', 'Constanța', 'Cluj'], 'b'],
  ['România a intrat complet în Schengen (și la frontierele terestre) pe:', ['1 ianuarie 2007', '31 martie 2024', '1 ianuarie 2025', '1 decembrie 1918'], 'c'],
  ['Care propoziție este scrisă corect?', ['Nu e nici o problemă.', 'Nu e nicio problemă.', 'Nu e nicioproblemă.', 'Nu e niciun problemă.'], 'b'],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 20'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(80));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [['Module / Modul', 'Modulul 10 — Politețe, educație, banca și România de azi (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 40 — România de azi, recapitulare. TEST CUMULATIV MODULUL 10'], ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'],
  ['Student name / Nume și prenume cursant', ''], ['Score / Punctaj obținut', '_______ / 20'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(120));
add(banner('MODULE 10 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 10 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''], ['Modul / Module', 'Modulul 10 — Politețe, educație, banca și România de azi (12 ore, Sesiunile 37–40)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['37', 'Sesiunea 37 — Formule de politețe, condiționalul de politețe (3 ore)', '', '—', ''],
  ['38', 'Sesiunea 38 — Sistemul educațional, înscrierea la școală (3 ore)', '', '—', ''],
  ['39', 'Sesiunea 39 — Contul bancar, cardul, bancomatul, extrasul (3 ore)', '', '—', ''],
  ['40', 'Sesiunea 40 — România de azi, recapitulare + TEST CUMULATIV (3 ore)', '', '___ / 20', '']], { size: 18 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 10 — Politețe, educație, banca și România de azi, în total 12 ore de curs, și a susținut testul de evaluare consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 10 — Politeness, Education, Banking and Romania Today, 12 course hours in total, and sat the assessment recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(120));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(key('**10.1**   5 · 1 · 2 · 4 · 3'),
  key('**10.2**   Aș vrea un formular. · Ați putea repeta? · Am vrea o masă pentru doi. · Mi-ar plăcea să lucrez aici. · Ați vrea o cafea? · Aș avea nevoie de ajutor.'),
  key('**10.3**   grădiniță · gimnaziu · liceului · școala primară      **10.4**   3 · 1 · 4 · 2'),
  key('**10.5**   cont · pașaportul · comisioane · IBAN-ul'),
  key('**10.6**   e.g. Merg la bancomat, introduc cardul și PIN-ul, aleg 200 de lei. · Blochez cardul în aplicație / sun la bancă. · Nu i-l spun. Închid. · Mă uit în aplicație / cer extrasul.'),
  key('**10.7**   Moldova · Dobrogea · Banat și Oltenia · Țara Românească      **10.8**   1989 · 2024 · 1947 · 1918'),
  key('**10.9**   Nadia Comăneci · Constantin Brâncuși · Mihai Eminescu · Henri Coandă'),
  key('**10.10**   Aș · nicio · să · v-a · o dată · Nu mai'),
  H2('Cumulative test — grilă answer key'), P('**TOTAL: 20 de puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
const ans = Q.map(q => q[2]);
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), [ans.slice(0, 10).map((a, i) => `**${i + 1}** – ${a}`), ans.slice(10).map((a, i) => `**${i + 11}** – ${a}`)], { header: false, size: 18 }));
add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile factuale și legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The factual and legal information was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Structura învățământului preuniversitar; gratuitatea învățământului de stat', 'Legea nr. 198/2023 a învățământului preuniversitar — legislatie.just.ro/public/DetaliiDocument/271896; edu.ro', 'Lesson 10.3'],
  ['Accesul la educație al copiilor străini; curs gratuit de inițiere în limba română; evaluarea pentru stabilirea clasei (ISJ/ISMB)', 'IGI — „Acces la educație” (igi.mai.gov.ro); Ministerul Educației — „Elevi non-UE” (edu.ro)', 'Lesson 10.4, test q. 10'],
  ['Dreptul la cont de plăți cu servicii de bază; nediscriminarea pe criteriul cetățeniei sau al reședinței', 'Legea nr. 258/2017 — legislatie.just.ro/Public/DetaliiDocumentAfis/196233; ANPC', 'Lesson 10.5'],
  ['Stema României: acvila, scutul mic cu cinci câmpuri; coroana (2016)', 'Legea nr. 102/1992 privind stema țării și sigiliul statului — .../DetaliiDocument/2381; Legea nr. 146/2016', 'Lesson 10.7, test q. 15–16'],
  ['Imnul: versuri Andrei Mureșanu, muzica Anton Pann, 1848; Ziua Imnului 29 iulie', 'Administrația Prezidențială — „Imnul României” (presidency.ro); Legea nr. 99/1998', 'Lesson 10.7, test q. 17'],
  ['Ziua Drapelului 26 iunie (tricolorul decretat în 1848)', 'Legea nr. 96/1998; MApN, MAE', 'Lesson 10.7'],
  ['Revoluția: 16 decembrie 1989 Timișoara, 22 decembrie căderea regimului; peste o mie de morți; regimul comunist', 'Administrația Prezidențială; Guvernul României; Raportul final CPADCR (iiccmer.ro)', 'Lesson 10.8, test q. 18'],
  ['Schengen: frontiere aeriene și maritime 31.03.2024; terestre 01.01.2025', 'Poliția de Frontieră Română (politiadefrontiera.ro); MAI — schengen.mai.gov.ro', 'Lesson 10.8, test q. 19'],
  ['Scrierea „niciun / nicio”', 'DOOM2 — normele ortografice ale Academiei Române', 'Lesson 10.10, test q. 20'],
  ['Lecțiile anterioare citate', 'Modulele 2–8: 2.6, 2.10, 3.11, 3.16, 4.4, 5.1, 5.2, 5.6, 8.7', 'whole module']], { size: 15 }));
add(P('*Datele despre personalități (ani de naștere, opere cunoscute) sunt informații culturale generale. Lista de acte pentru școală și bancă diferă de la o instituție la alta — cursantul întreabă înainte. / Facts about famous people are general cultural information; document lists differ between schools and banks.*', { size: 15, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 10 — Politețe, educație, banca și România de azi',
  styles: { default: { document: { run: { font: 'Arial', size: 20 } } }, paragraphStyles: [
    { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
    { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 10 — POLITEȚE, EDUCAȚIE, BANCA ȘI ROMÂNIA DE AZI', color: '777777', size: 16 })] })] }) },
    children: S }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm10.docx', b); console.log('written'); });
