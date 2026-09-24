const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, objectives, exercise, useful, fig, mcq, cell, brd, fotoCell } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Header, HeightRule } = d;
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
// three photo placeholders in one row, with captions
const fotoRow = (items) => {
  const w = Math.floor(FULL / 3);
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: [w, w, FULL - 2 * w], rows: [
    new TableRow({ cantSplit: true, height: { value: 1500, rule: HeightRule.ATLEAST }, children: items.map((it, i) => fotoCell(it[0], i === 2 ? FULL - 2 * w : w)) }),
    new TableRow({ cantSplit: true, children: items.map((it, i) => cell(it[1], { w: i === 2 ? FULL - 2 * w : w, size: 16, align: AlignmentType.CENTER })) })] }), spacer(80)];
};
// one-page summary sheet
const sheet = (n, title, modules) => [new Paragraph({ pageBreakBefore: true, keepNext: true, spacing: { before: 0, after: 60 }, shading: { fill: C.dk, type: 'clear', color: 'auto' },
  children: [new TextRun({ text: `  FIȘA ${n}  —  ${title}`, bold: true, color: 'FFFFFF', size: 26 })] }),
  P(`*${modules}*`, { size: 17, after: 80, color: '555555' })];

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 14  —  EMOTIONS, SOCIAL LIFE, THE ROMANIAN STATE AND FINAL TEST', { bold: true, color: C.gr, size: 30 }, 100),
  cov('MODULUL 14  —  EMOȚII, VIAȚA SOCIALĂ, STATUL ROMÂN ȘI TEST FINAL', { bold: true, color: C.dk, size: 28 }, 100),
  cov('Nivelul A2 — modulul final / Level A2 — final module', { italics: true, color: C.gr, size: 22 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'], ['A2 — after Module 13', '9 hours · Sessions 50–52 · Weeks 25–26', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends the course with the FINAL CUMULATIVE TEST (Modules 1–14, 56 questions), signed and dated by the student and kept on file with the course closure record.*']));
add(pageBreak());
add(H1('Before you start'),
  P('This is the **last module**. In Session 50 you learn to talk about **feelings and opinions** and the **social customs** of Romanians: visits, flowers, name days, a polite „no”. In Session 51 you meet the **Romanian state**: the Constitution and the institutions, and you review the **whole course** with six one-page summary sheets. Session 52 is the **final test**.'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**How do you feel?** — basic emotions', 'Lesson 7.5', 'now: more feelings, opinions'],
  ['**the polite conditional**', 'Lesson 10.2', 'Mi-ar plăcea, dar... · Aș zice că...'],
  ['**holidays, name days of Ion and Ioana**', 'Lesson 5.6', 'name days, wishes'],
  ['**basic rights and obligations, art. 18**', 'Lesson 8.8', 'not repeated — only new rights'],
  ['**institutions: town hall, ITM, IGI**', 'Lesson 5.2', 'now: the central state'],
  ['**all the course**', 'Modules 1–13', 'summary sheets, final test']], { size: 19 }));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 50**', '3 hours', 'Lesson 14.1 Moods and feelings · 14.2 Opinions, agreement, comfort, congratulations · 14.3 Social customs'],
  ['**Session 51**', '3 hours', 'Lesson 14.4 The Constitution · 14.5 The institutions of the state · 14.6 Course recap: six summary sheets'],
  ['**Session 52**', '3 hours', '**Final cumulative test** — Modules 1–14 · closing of the student file']], { size: 19 }));
add(pageBreak());

// ================= S50 =================
add(banner('SESSION 50  —  EMOTIONS AND SOCIAL CUSTOMS', 'SESIUNEA 50 — EMOȚII ȘI OBICEIURI SOCIALE  ·  3 hours'));
add(objectives(['say how you feel with more exact words', 'give an opinion, agree and disagree politely', 'comfort someone and congratulate someone', 'behave well as a guest, on name days, and say no politely']));
add(H1('Lesson 14.1  —  Moods and feelings / Stări și emoții'));
add(P('In Lesson 7.5 you learned *fericit, trist, obosit, supărat*. Now: more exact feelings. Remember: a woman adds **-ă** (*mândră, stresată*), many people **-i** (*mândri, stresați*).', { size: 19 }));
add(fig('emotii', 600, 'Fig. 14.1 — Stări și emoții / Moods and feelings'));
add(tbl([4819, 4819], [['SAYING HOW YOU FEEL', 'ENGLISH'],
  ['**Sunt mândru de** fiul meu. · **Sunt dezamăgit de** rezultat.', 'I\'m proud of my son. · I\'m disappointed with the result.'],
  ['**Mă bucur că** ai venit! · **Îmi pare rău că** n-am putut veni.', 'I\'m glad you came! · I\'m sorry I couldn\'t come.'],
  ['**Mi-e dor de** familie. · **Mi-e teamă că** nu reușesc.', 'I miss my family. · I\'m afraid I won\'t make it.'],
  ['**Mă enervează** zgomotul. · **M-am speriat!**', 'The noise gets on my nerves. · I got scared!'],
  ['**Sunt ușurat**: am primit permisul! · **Mulțumesc din suflet!**', 'I\'m relieved: I got the permit! · Thank you from my heart!']], { size: 17 }));
add(exercise('14.1', 'How do they feel?', 'Write the feeling: mândru · ușurat · plictisit · dezamăgit · stresat.'));
add(ex2([['1.  Fiica mea a luat nota 10. Sunt ______________.', '2.  Am pierdut trenul. Sunt ______________.'], ['3.  N-am nimic de făcut. Sunt ______________.', '4.  Am mult de lucru și puțin timp. Sunt ______________.'], ['5.  Testul a fost ușor! Sunt ______________.', '']]));
add(useful([['starea de spirit', 'mood'], ['a se simți', 'to feel'], ['a se bucura', 'to be glad'], ['a-i fi dor de', 'to miss'], ['a se enerva', 'to get angry'], ['a se liniști', 'to calm down']]));

add(H1('Lesson 14.2  —  Opinions, comfort, congratulations / Păreri, consolare, felicitări'));
add(tbl([2450, 2369, 2450, 2369], [['OPINION', 'ENGLISH', 'AGREE · DISAGREE', 'ENGLISH'],
  ['**Cred că...**', 'I think that...', '**Sunt de acord.** · **Ai dreptate.**', 'I agree. · You\'re right.'],
  ['**După părerea mea...**', 'In my opinion...', '**Exact!** · **Așa e.**', 'Exactly! · That\'s true.'],
  ['**Din punctul meu de vedere...**', 'From my point of view...', '**Nu prea sunt de acord.**', 'I don\'t really agree.'],
  ['**Mi se pare că...**', 'It seems to me that...', '**Înțeleg, dar...** · **Da, totuși...**', 'I understand, but... · Yes, however...'],
  ['**Ce părere aveți?**', 'What do you think?', '**Nu sunt sigur.** · **Depinde.**', 'I\'m not sure. · It depends.']], { size: 17 }));
add(P('*Polite disagreement in Romania is soft: first agree with something, then add **dar / totuși** — „Aveți dreptate, dar eu aș face altfel.” (Lesson 10.2)*', { size: 17 }));
add(tbl([2450, 2369, 2450, 2369], [['TO COMFORT', 'ENGLISH', 'TO CONGRATULATE', 'ENGLISH'],
  ['**Îmi pare foarte rău.**', 'I\'m very sorry.', '**Felicitări!** · **Bravo!**', 'Congratulations! · Well done!'],
  ['**Nu-ți face griji, o să fie bine.**', 'Don\'t worry, it will be fine.', '**La mulți ani!**', 'birthday, name day, New Year'],
  ['**Sănătate!** · **Multă sănătate!**', 'Get well! · Good health!', '**Casă de piatră!**', 'to a newly married couple'],
  ['**Condoleanțe.** · **Dumnezeu să-l ierte.**', 'My condolences. · God rest his soul.', '**Să vă trăiască!**', 'for a new baby'],
  ['**Sunt aici dacă ai nevoie.**', 'I\'m here if you need me.', '**Mult succes!** · **Baftă!**', 'Good luck! · Good luck! (informal)']], { size: 17 }));
add(exercise('14.2', 'What do you say?', 'Write one phrase.'));
add(ex2([['1.  Un coleg se căsătorește. → ______________', '2.  E ziua vecinei. → ______________'], ['3.  Tatăl unui prieten a murit. → ______________', '4.  Colegul are un test mâine. → ______________']]));
add(useful([['părerea · opinia', 'opinion'], ['a fi de acord', 'to agree'], ['a consola', 'to comfort'], ['a felicita', 'to congratulate'], ['nunta · botezul', 'wedding · christening'], ['înmormântarea', 'funeral']]));

add(H1('Lesson 14.3  —  Social customs / Obiceiuri sociale'));
add(tbl([2600, 7038], [['A VISIT HOME', 'WHAT ROMANIANS USUALLY DO'],
  ['**invitația**', 'people invite you *la o cafea*, *la masă* (to a meal), *la ziua mea*; answer **yes or no** in time'],
  ['**ce aduci**', 'flowers for the hostess, a box of chocolates, a cake or a bottle of wine; for children, a small toy or sweets'],
  ['**florile**', 'an **odd number** (3, 5, 7...) — an **even number** is only for **funerals** and graves (Fig. 14.2)'],
  ['**la ușă**', 'many families take off their shoes at the door — ask **„Să mă descalț?”**'],
  ['**la masă**', 'the host offers again and again: *Mai luați! Mai serviți!* You can say **„Mulțumesc, am mâncat foarte bine!”** · a toast: **„Noroc!”**']], { size: 17 }));
add(fig('flori', 440, 'Fig. 14.2 — Număr impar de flori la vizită, număr par la înmormântare / Odd number for a visit, even for a funeral'));
add(tbl([2400, 2419, 2400, 2419], [['NAME DAY / ZIUA NUMELUI', 'FOR', 'NAME DAY', 'FOR'],
  ['**7 ianuarie** · Sf. Ioan', 'Ion, Ioana, Ionuț (Lesson 5.6)', '**15 august** · Sfânta Maria', 'Maria, Marian, Mariana'],
  ['**23 aprilie** · Sf. Gheorghe', 'Gheorghe, George, Georgiana', '**8 noiembrie** · Sf. Mihail și Gavriil', 'Mihai, Mihaela, Gabriel, Gabriela'],
  ['**21 mai** · Sf. Constantin și Elena', 'Constantin, Elena, Ilinca', '**30 noiembrie** · Sf. Andrei', 'Andrei, Andreea'],
  ['**29 iunie** · Sf. Petru și Pavel', 'Petru, Petra, Pavel', '**6 decembrie** · Sf. Nicolae', 'Nicolae, Nicoleta']], { size: 17 }));
add(P('Romanians celebrate the **ziua numelui** (name day) almost like a birthday: you say **„La mulți ani de ziua numelui!”**, and the person often brings sweets to work.', { size: 18 }));
add(tbl([4819, 4819], [['SAYING NO POLITELY / REFUZUL POLITICOS', 'ENGLISH'],
  ['**Vă mulțumesc pentru invitație, dar din păcate nu pot.**', 'Thank you for the invitation, but unfortunately I can\'t.'],
  ['**Mi-ar fi plăcut, dar lucrez în tura de noapte.**', 'I would have liked to, but I work the night shift.'],
  ['**Poate altă dată?** · **Nu beau alcool, dar un suc, cu plăcere.**', 'Maybe another time? · I don\'t drink alcohol, but a juice, with pleasure.']], { size: 17 }));
add(exercise('14.3', 'True or false?', 'Write A (adevărat) or F (fals).'));
add(ex2([['1.  La o vizită duci patru flori. ___', '2.  Pe 23 aprilie e ziua lui Gheorghe. ___'], ['3.  „Noroc!” se spune când ciocnești paharul. ___', '4.  Nu poți refuza niciodată o invitație. ___']]));
add(useful([['a invita · invitația', 'to invite · invitation'], ['gazda', 'host, hostess'], ['musafirul', 'guest'], ['a se descălța', 'to take off one\'s shoes'], ['ziua numelui', 'name day'], ['Noroc!', 'Cheers!']]));
add(mistakes([
  ['ți-e', 'îți + e = *îți este* (feelings, with **tu**)', '**Ți-e** dor de casă? · **Ți-e** foame?', 'you can say **îți este**'],
  ['ție', 'to you (strong form)', '**Ție** îți place? · Asta e pentru **ție**.', 'answers *Cui?* (like *mie*, Lesson 11.3)'],
  ['ne-am', 'ne + am — *we (have) ... ourselves / us*', '**Ne-am** bucurat mult. · **Ne-am** întâlnit la nuntă.', 'you can say **ne-a** for one person'],
  ['neam', 'relatives, family (colloquial) · nation', 'Tot **neamul** a venit la botez.', 'it is a noun']]));
add(hw(50, ['**H50.1**  Write a short message to a Romanian colleague for his or her name day and one to refuse an invitation politely.', '**H50.2**  Write your opinion (five sentences) about life in Romania with *Cred că... / După părerea mea... / Sunt de acord că...*']));

// ================= S51 =================
add(spacer(160));
add(banner('SESSION 51  —  THE ROMANIAN STATE AND COURSE RECAP', 'SESIUNEA 51 — STATUL ROMÂN ȘI RECAPITULARE  ·  3 hours'));
add(objectives(['name more rights and obligations from the Constitution', 'explain who makes, applies and judges the laws', 'recognise the buildings of the President, the Parliament and the Government', 'review the whole course with six summary sheets']));
add(H1('Lesson 14.4  —  The Constitution / Constituția României'));
add(P('The **Constitution** was adopted in **1991** (referendum of **8 December 1991**) and revised in **2003**. Lesson 8.8 gave you the basic rights (life, religion, expression, health, work) and obligations (respect the laws, pay taxes, good faith). Here are **more rights**. Some belong to **everyone** who lives in Romania; others only to **Romanian citizens**.', { size: 19 }));
add(tbl([3100, 3600, 1300, 1638], [['RIGHT / DREPTUL', 'WHAT IT MEANS', 'ART.', 'FOR'],
  ['**accesul liber la justiție**', 'anyone can go to court to defend their rights', '21', 'everyone'],
  ['**libertatea individuală**', 'nobody can be arrested without the conditions of the law', '23', 'everyone'],
  ['**viața intimă și privată**', 'your private and family life is protected', '26', 'everyone'],
  ['**inviolabilitatea domiciliului**', 'nobody can enter your home without your consent, except as the law says', '27', 'everyone'],
  ['**secretul corespondenței**', 'letters, phone calls, messages are secret', '28', 'everyone'],
  ['**dreptul la informație**', 'access to information of public interest', '31', 'everyone'],
  ['**dreptul la învățătură**', 'education — also for your children (Lesson 10.4)', '32', 'everyone'],
  ['**libertatea întrunirilor**', 'peaceful meetings and demonstrations, without weapons', '39', 'everyone'],
  ['**dreptul la grevă**', 'employees can strike to defend their professional interests', '43', 'employees'],
  ['**dreptul de vot · de a fi ales**', 'to vote and to be elected in national elections', '36, 37', 'citizens'],
  ['**dreptul de petiționare**', 'petitions to the authorities (for you: complaints to ITM, IGI — Lesson 11.9)', '51', 'citizens']], { size: 16 }));
add(P('**Obligations for everyone** (Lesson 8.8): respect the Constitution and the laws (art. 1), pay taxes (art. 56), use your rights in **good faith** (art. 57). **Only for citizens**: loyalty to the country (art. 54) and its defence (art. 55). For foreigners there are also the rules of **residence** (IGI, Lesson 11.8). If an authority does not respect your rights, you can write to the **Avocatul Poporului** (the Ombudsman, art. 58).', { size: 18 }));
add(exercise('14.4', 'Everyone or only citizens?', 'Write T (toți / everyone) or C (cetățeni / citizens).'));
add(ex2([['1.  dreptul de vot ___', '2.  accesul la justiție ___'], ['3.  secretul corespondenței ___', '4.  dreptul de a fi ales ___']]));
add(useful([['Constituția', 'the Constitution'], ['cetățeanul', 'the citizen'], ['drepturile · libertățile', 'rights · freedoms'], ['instanța · judecătorul', 'the court · the judge'], ['a vota · alegerile', 'to vote · elections'], ['Avocatul Poporului', 'the Ombudsman']]));

add(H1('Lesson 14.5  —  The institutions of the state / Instituțiile statului'));
add(P('**Art. 1 (4)** of the Constitution: the state is organised on the principle of the **separation and balance of powers** — **legislative, executive and judicial**.', { size: 19 }));
add(fig('puteri', 600, 'Fig. 14.3 — Separația puterilor în stat / The separation of powers'));
add(tbl([2400, 4238, 3000], [['INSTITUTION', 'WHAT IT DOES', 'CONSTITUTION'],
  ['**Parlamentul**', 'the only law-making authority; **Camera Deputaților** + **Senatul**; elected for **4 years**', 'art. 61, 63'],
  ['**Președintele României**', 'elected by direct vote for **5 years**, **at most two** mandates; names the candidate for Prime Minister', 'art. 81, 83, 103'],
  ['**Guvernul**', 'the Prime Minister and the ministers; carries out the policy of the country; needs the **vote of confidence** of Parliament', 'art. 102, 103'],
  ['**Justiția**', 'the courts and the **Înalta Curte de Casație și Justiție**; judges are independent; the **CSM** guarantees the independence of justice', 'art. 124, 126, 133'],
  ['**Curtea Constituțională**', 'checks that laws respect the Constitution', 'art. 142, 146']], { size: 17 }));
add(fotoRow([['Palatul Cotroceni', '**Palatul Cotroceni** — the Presidential Administration'], ['Palatul Parlamentului', '**Palatul Parlamentului** — the Chamber of Deputies and the Senate'], ['Palatul Victoria', '**Palatul Victoria** — the Government, Piața Victoriei']]));
add(exercise('14.5', 'Who does it?', 'Write: Parlamentul · Președintele · Guvernul · instanțele · Curtea Constituțională.'));
add(ex2([['1.  Face legile. → ______________', '2.  Judecă procesele. → ______________'], ['3.  Aplică legile, are miniștri. → ______________', '4.  Verifică dacă legile respectă Constituția. → ______________'], ['5.  Are un mandat de 5 ani. → ______________', '']]));
add(useful([['puterea legislativă', 'legislative power'], ['puterea executivă', 'executive power'], ['puterea judecătorească', 'judicial power'], ['mandatul', 'term of office'], ['prim-ministrul · ministrul', 'prime minister · minister'], ['deputatul · senatorul', 'MP · senator']]));

// ---------- summary sheets ----------
add(H1('Lesson 14.6  —  Course recap: six summary sheets / Recapitularea cursului'));
add(P('One page for each big theme of the course. Read them before the final test; the lesson numbers show you where to look back.', { size: 19 }));

add(sheet(1, 'CITIM ȘI SCRIEM CORECT / READING AND WRITING', 'Module 1 (alphabet, pronunciation, writing) · Modules 10–14 (common writing mistakes)'));
add(tbl([2400, 3600, 3638], [['TOPIC', 'THE RULE', 'EXAMPLE · LESSON'],
  ['**ă, â / î, ș, ț**', 'five Romanian letters; â and î sound the same (â inside a word, î at the start and end)', 'mână, început, școală, țară — 1.3'],
  ['**read as written**', 'every letter is read; **ce, ci** as in *church* · **che, chi** = [ke, ki] · **ge, gi** as in *gin* · **ghe, ghi** as in *get*', 'cer, ceai · cheie · ger · ghete — 2.2–2.4'],
  ['**diphthongs**', 'two vowels in one syllable', 'doi, mai, seară, iarnă — 2.6'],
  ['**stress · capitals**', 'stress has no written mark; days and months with a **small** letter', 'luni, 1 decembrie — 3.2, 3.3'],
  ['**the cratima (-)**', 'joins two words said together', 'într-o, mi-e, s-a, dă-mi — 4.1'],
  ['**-i, -ii, -iii**', 'one i: plural; ii: the plural + the; iii: *fiii*', 'copii · copiii — 4.2, 11'],
  ['**forms, dates**', 'name in capitals, date as day.month.year', 'KUMAR RAVI · 24.09.2026 — 4.3']], { size: 19 }));
add(tbl([1600, 3219, 1600, 3219], [['PAIR', 'THE TEST', 'PAIR', 'THE TEST'],
  ['**să / s-a**', 'verb after să · s-au for many', '**la / l-a**', 'l-am possible → l-a'],
  ['**ia / i-a**', 'i-am possible → i-a', '**sau / s-au**', 'ori → sau · s-a → s-au'],
  ['**va / v-a**', 'future → va · v-am → v-a', '**numai / nu mai**', 'doar → numai'],
  ['**odată / o dată**', 'de două ori → o dată', '**niciun / nicio**', 'always one word'],
  ['**fi / fii**', 'a fi → fi · tu → fii', '**mi-e / mie**', 'îmi este → mi-e'],
  ['**copii / copiii**', 'the children → copiii', '**cea / ce-a**', 'ce a → ce-a'],
  ['**n-ai / nai**', 'nu ai → n-ai', '**altfel / alt fel**', 'alt fel **de**'],
  ['**mi-a / mia**', 'mi-au possible → mi-a', '**deloc / de loc**', 'de loc **din**'],
  ['**ne-a / nea**', 'ne-au possible → ne-a', '**întruna / într-una**', 'mereu → întruna'],
  ['**decât / de cât**', 'doar → decât', '**câteodată / câte o dată**', 'uneori → câteodată'],
  ['**dea / de-a**', 'să dea · de-a lungul', '**s-ar / sar**', 'verb after it → s-ar'],
  ['**ce-ai / ceai**', 'ce ai → ce-ai', '**iau / i-au**', 'eu iau · i-a → i-au'],
  ['**mai / m-ai**', 'încă → mai', '**cel / ce-l**', 'ce îl → ce-l'],
  ['**ți-e / ție**', 'îți este → ți-e', '**ne-am / neam**', 'ne-a → ne-am']], { size: 19 }));

add(box('recap', 'VERIFICĂ-TE / CHECK YOURSELF', ['1. Scrie corect: *( într-o / întro ) zi*.   2. Citește: *cheie, ceai, ghete, ger*.   3. Alege: *Nu e ( nicio / nici o ) problemă.*']));
add(sheet(2, 'SUBSTANTIVUL ȘI PRIETENII LUI / NOUNS AND THEIR FRIENDS', 'Module 2 (the basics of grammar) · Module 4 (plurals, colours, shapes)'));
add(tbl([2400, 3800, 3438], [['TOPIC', 'THE RULE', 'EXAMPLE · LESSON'],
  ['**gender**', 'masculine (un / doi), feminine (o / două), neuter (un / două)', 'un pom · o casă · un tren, două trenuri — 2.1'],
  ['**plural**', 'learn the plural with the word; some change inside', 'masă → mese · carte → cărți — 2.2, 4.2'],
  ['**the article**', 'a / some: **un, o, niște**; the: at the end of the word', 'trenul · casa · trenurile · casele — 2.3'],
  ['**the adjective**', 'after the noun, agrees with it', 'o mașină roșie · pantofi negri — 2.4, 4.4'],
  ['**numbers**', 'from 20 on: **de** before the noun', 'cinci lei · douăzeci de lei — 2.5'],
  ['**personal pronouns**', 'eu, tu, el, ea, noi, voi, ei, ele · polite: **dumneavoastră**', 'Dumneavoastră sunteți...? — 2.6'],
  ['**my, your...**', 'agrees with the thing, not the owner', 'casa mea · telefonul meu · actele mele — 2.7'],
  ['**this, that**', 'acesta / aceasta · acela / aceea (spoken: ăsta, asta)', 'Aceasta e fișa mea. — 2.8'],
  ['**whose**', 'al, a, ai, ale + name / possessive', 'A cui e geanta? A Anei. — 2.9'],
  ['**short pronouns**', 'îmi, îți, îi, ne, vă, le · mă, te, îl, o', 'Îmi place. · Te sun. · L-am văzut. — 2.10'],
  ['**building words**', 'endings make new words', 'a lucra → lucrător · a citi → cititor — 2.11']], { size: 19 }));
add(tbl([2450, 2369, 2450, 2369], [['IN THE CLASSROOM', 'ENGLISH', 'AT THE SHOP', 'ENGLISH'],
  ['**caietul · pixul**', 'notebook · pen', '**Cât costă?**', 'How much is it?'],
  ['**Nu înțeleg. Repetați, vă rog.**', 'I don\'t understand. Repeat, please.', '**Aș dori...** · **O iau.**', 'I\'d like... · I\'ll take it.'],
  ['**Cum se spune...?**', 'How do you say...?', '**cartela SIM · a reîncărca**', 'SIM card · to top up'],
  ['**Ce înseamnă...?**', 'What does ... mean?', '**roșu, galben, albastru, verde**', 'colours — 4.4']], { size: 19 }));

add(box('recap', 'VERIFICĂ-TE / CHECK YOURSELF', ['1. un tren → două ______.   2. 20 + lei → ______.   3. telefonul (my) → telefonul ______.   4. o mașină (red) → o mașină ______.']));
add(sheet(3, 'VERBUL / THE VERB', 'Module 3 (the verb and the first conversation) · Module 10 (the conditional) · Module 12 (the imperfect)'));
add(tbl([2200, 2800, 2438, 2200], [['TENSE / FORM', 'HOW IT IS BUILT', 'EXAMPLE', 'LESSON'],
  ['**present**', 'four patterns + **-ez / -esc** verbs', 'lucrez · muncesc · merg', '3.3–3.5'],
  ['**a fi · a avea**', 'irregular', 'sunt, ești, e... · am, ai, are...', '2.6'],
  ['**negative**', '**nu** + verb', 'Nu lucrez azi.', '3.6'],
  ['**questions**', 'question word + verb', 'Unde lucrați? Când plecați?', '3.7–3.9'],
  ['**să + verb**', 'after vreau, trebuie, pot, aș vrea', 'Trebuie să semnez.', '3.11'],
  ['**reflexive**', 'mă, te, se, ne, vă, se + verb', 'Mă trezesc la 6.', '3.12'],
  ['**orders**', 'imperative; negative: nu + infinitive', 'Semnați aici! · Nu atinge!', '3.13'],
  ['**past (perfect compus)**', 'am, ai, a, am, ați, au + participle', 'Am lucrat. N-am înțeles.', '3.14, 3.15'],
  ['**future**', 'o să + verb · voi + infinitive', 'O să plec. · Voi pleca.', '3.16'],
  ['**polite conditional**', 'aș, ai, ar, am, ați, ar + infinitive', 'Aș vrea. Ați putea...?', '10.2'],
  ['**imperfect**', 'stem + -am / -eam...; a fi: eram', 'Când eram copil, locuiam la țară.', '12.5']], { size: 19 }));
add(tbl([4819, 4819], [['THE SAME VERB IN ALL FORMS — A LUCRA', 'ENGLISH'],
  ['**Lucrez** în construcții. · **Nu lucrez** duminica.', 'I work in construction. · I don\'t work on Sundays.'],
  ['**Vreau să lucrez** mai aproape de casă.', 'I want to work closer to home.'],
  ['**Am lucrat** ieri 10 ore. · **O să lucrez** mâine.', 'I worked 10 hours yesterday. · I will work tomorrow.'],
  ['**Aș lucra** în tura de zi. · **Când eram în Nepal, lucram** la fermă.', 'I would work the day shift. · When I was in Nepal, I worked on a farm.']], { size: 19 }));
add(box('recap', 'WHAT YOU HEAR ON THE STREET (Lesson 3.17)', ['*Unde-i gara?* = Unde este gara? · *Ce-i asta?* · *Nu-i acasă.* · *Hai!* · *Gata!* · *Stai puțin!* — short spoken forms; you understand them, and you write the full form.']));

add(box('recap', 'VERIFICĂ-TE / CHECK YOURSELF', ['Say *a merge* in all forms: *merg · să merg · am mers · o să merg · aș merge · mergeam*. Then do the same with *a avea*.']));
add(sheet(4, 'VIAȚA DE ZI CU ZI ȘI SĂNĂTATEA / EVERYDAY LIFE AND HEALTH', 'Modules 4, 6, 7, 8, 11, 12, 13'));
add(tbl([2200, 4238, 3200], [['SITUATION', 'KEY PHRASES', 'LESSON'],
  ['**introducing yourself**', 'Mă numesc... Sunt din... Lucrez ca... Am ... ani.', '3.2, 3.18'],
  ['**clothes, sizes**', 'Port mărimea M. Pot să-l probez? E prea mare.', '6.1–6.3'],
  ['**my home**', 'Locuiesc la bloc, într-un apartament cu două camere.', '6.4–6.6'],
  ['**family**', 'Sunt căsătorit, am doi copii. Fratele soției = cumnatul.', '7.1, 7.2'],
  ['**restaurant**', 'Aș dori... Ce ne recomandați? Nota, vă rog!', '7.3–7.6'],
  ['**shopping for food**', 'Un kilogram de roșii. Cât costă kilogramul?', '8.1–8.3'],
  ['**travel, free time**', 'Un bilet dus-întors la Brașov. Hai la o plimbare!', '11.1–11.5'],
  ['**renting, the block**', 'Chiria include utilitățile? Îmi pare rău, o dau mai încet.', '12.1, 12.2'],
  ['**services**', 'Adaug în coș. Plata ramburs. Unde schimb spre M4?', '13.1–13.3']], { size: 19 }));
add(tbl([2200, 4238, 3200], [['HEALTH', 'KEY PHRASES', 'LESSON'],
  ['**the body, symptoms**', 'Mă doare capul. Mă dor picioarele. Am febră.', '8.4, 8.5'],
  ['**pharmacy, doctor**', 'Aveți ceva pentru durere de cap? Sunt alergic la...', '8.5, 8.6'],
  ['**family doctor, card**', 'medicul de familie · cardul de sănătate · concediul medical', '8.7'],
  ['**specialist, tests**', 'Aș dori o programare. Am bilet de trimitere. Vin pe nemâncate.', '13.4'],
  ['**prescription**', 'Am o rețetă compensată. Cât plătesc eu?', '13.5'],
  ['**medical history**', 'Am diabet de cinci ani. Am fost operat în 2019.', '13.6'],
  ['**emergency**', '**112** — ambulanța, pompierii, poliția. Spui adresa exactă.', '5.2']], { size: 19 }));

add(box('recap', 'VERIFICĂ-TE / CHECK YOURSELF', ['Say in Romanian: 1. I would like an appointment.  2. How much is a kilogram?  3. My head hurts.  4. I\'d like a return ticket.']));
add(sheet(5, 'MUNCA ȘI DREPTURILE TALE / WORK AND YOUR RIGHTS', 'Modules 5, 9, 10, 11, 12'));
add(tbl([2400, 4838, 2400], [['TOPIC', 'WHAT TO REMEMBER', 'LESSON'],
  ['**at work**', 'tools, materials, units, orders; **Nu am înțeles. Puteți să-mi explicați?**', '9.1–9.12'],
  ['**safety (SSM)**', '**EIP** free of charge; **instructajul**; never remove a protection; accident → **112**, tell the boss', '9.13'],
  ['**the contract**', 'written, in Romanian, **before** you start; your copy; REGES-ONLINE', '11.6'],
  ['**working time**', 'probation max **90 days** · **8 h / 40 h** · max **48 h** with overtime · leave min **20 working days**', '11.6'],
  ['**the payslip**', 'gross − **CAS 25%** − **CASS 10%** − **tax 10%** = net', '11.7'],
  ['**the bank**', 'account, IBAN, card; **never** give the PIN or codes', '10.5, 10.6'],
  ['**residence permit**', 'renew at **IGI** at least **30 days** before it expires; CNP on the permit; changes → IGI', '5.2, 11.8'],
  ['**lost documents**', 'police → embassy → IGI; card: block it', '11.9'],
  ['**problems at work**', 'not paid, no contract → petition to **ITM**, answer in 30 days', '5.2, 11.9'],
  ['**scams**', 'no money for a job; no codes by phone; do not sign what you do not understand; **DNSC 1911**', '11.10'],
  ['**O.U.G. 32/2026**', '6 months: you cannot ask to change employer (except serious breaches); leaving early → costs can be claimed; after the contract ends: max **90 days** to find a new employer', '12.6']], { size: 19 }));
add(box('attn', 'WHERE TO GO / UNDE MERGI', ['**112** emergency · **ITM** work problems · **IGI** residence · **Primăria** local taxes, documents · **Poliția** theft, loss · **ambasada** passport · **CAS** health insurance · **DNSC 1911** online fraud · **ANPC** consumer rights · **Avocatul Poporului** rights vs authorities.']));

add(box('recap', 'VERIFICĂ-TE / CHECK YOURSELF', ['1. Where do you go if you are not paid?  2. How many days before the permit expires do you apply at IGI?  3. What do you do if someone asks for your PIN?']));
add(sheet(6, 'ROMÂNIA / ROMANIA', 'Modules 5, 10, 11, 14'));
add(tbl([2400, 4838, 2400], [['TOPIC', 'WHAT TO REMEMBER', 'LESSON'],
  ['**the country**', 'capital **București**; regions: Muntenia, Moldova, Transilvania, Banat, Oltenia, Dobrogea...; currency **leul**', '5.1'],
  ['**symbols**', 'flag **albastru, galben, roșu**; coat of arms with **5 fields**; anthem **„Deșteaptă-te, române!”** (1848)', '5.1, 10.7'],
  ['**national days**', '**24 ianuarie** (1859) · **1 decembrie** (1918, Ziua Națională) · 26 iunie flag · 29 iulie anthem', '5.6, 10.7'],
  ['**recent history**', '1947–1989 communism · **December 1989** Revolution (Timișoara) · NATO 2004 · EU 2007 · Schengen 2024–2025', '10.8'],
  ['**famous Romanians**', 'Eminescu, Brâncuși, Enescu, Nadia Comăneci, Henri Coandă, Hagi', '10.9'],
  ['**places**', 'Peleș, Bran, Sighișoara, Delta Dunării, Transfăgărășan, Bucovina, the Black Sea...', '11.4'],
  ['**traditions**', 'ia · Christmas, Easter (*Hristos a înviat!*) · name days · odd number of flowers', '5.6, 11.5, 14.3'],
  ['**social rules**', 'dumneavoastră with officials; punctuality; *Bună ziua!* in the lift', '5.3, 12.2'],
  ['**the state**', 'Constitution 1991 / 2003; **Parliament** (laws, 4 years) · **President** (5 years) · **Government** · **courts** · Constitutional Court', '14.4, 14.5']], { size: 19 }));
add(tbl([4819, 4819], [['I CAN NOW... / ACUM POT...', 'KEY PHRASE'],
  ['talk about Romania and my country', '*În România... În țara mea...*'],
  ['explain who does what in the state', '*Parlamentul face legile.*'],
  ['behave well at a Romanian home', '*Să mă descalț? · Noroc! · La mulți ani!*'],
  ['give my opinion politely', '*Cred că... · Înțeleg, dar...*']], { size: 19 }));
add(box('recap', 'VERIFICĂ-TE / CHECK YOURSELF', ['1. Who makes the laws?  2. When is the National Day?  3. How many flowers do you take to a visit: 4 or 5?']));
add(hw(51, ['**H51.1**  Read the six summary sheets. Mark with a pencil what you are not sure about and ask the teacher in Session 52, before the test.', '**H51.2**  Write five sentences: who makes the laws, who applies them, who judges, how long the President and the Parliament stay.']));

// ================= S52 =================
add(pageBreak());
add(banner('SESSION 52  —  THE FINAL TEST', 'SESIUNEA 52 — TESTUL FINAL CUMULATIV  ·  3 hours'));
add(objectives(['show what you learned in Modules 1–14', 'close your course file']));
add(tbl([2800, 6838], [['HOW IT WORKS', ''],
  ['**the test**', '**56 multiple-choice questions**, four from each module (M1–M14); one correct answer each; 1 point per answer'],
  ['**how you answer**', 'mark **one** box with **X**; two marks = 0 points; ask the teacher if you do not understand a word in a question'],
  ['**at the end**', 'you **sign and date** the test; the teacher writes the score and signs; the test goes into your **file** with the **course closure record**'],
  ['**what you bring**', 'a pen, your ID (passport or residence permit)']], { size: 18 }));
add(box('recap', 'BEFORE THE TEST — CHECK YOURSELF', ['Read the six summary sheets of Lesson 14.6. For each theme, can you say three sentences in Romanian? If not, open the lesson shown on the sheet.']));
add(box('green', 'FELICITĂRI! / CONGRATULATIONS!', ['You have reached the end of **156 hours** of Romanian. *Vă mulțumim pentru efort și vă dorim mult succes în România!*']));

// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul final completat, semnat și datat, se păstrează la dosarul cursantului împreună cu fișa de închidere a dosarului. Conține: testul final cumulativ, fișa de confirmare a Sesiunii 52, fișa de evidență a Modulului 14, fișa de închidere a dosarului, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST FINAL CUMULATIV — MODULELE 1–14', 'FINAL CUMULATIVE TEST  ·  grilă, 56 de întrebări (4 din fiecare modul), 56 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Act de identitate / ID document', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
// [question, [correct, distractor, distractor, distractor], module]
const RAW = [
  ['Care literă este specifică limbii române?', ['ș', 'k', 'w', 'y'], 1],
  ['În cuvântul „cer”, litera c se citește ca în cuvântul englezesc:', ['church', 'cat', 'city', 'kilo'], 1],
  ['În cuvântul „chiar”, grupul ch se citește:', ['[k], ca în kilo', '[ch], ca în church', '[s]', '[ș]'], 1],
  ['Care formă este scrisă corect?', ['într-o zi', 'întro zi', 'într o zi', 'în-tro zi'], 1],
  ['Pluralul lui „un tren” este:', ['două trenuri', 'doi treni', 'două trene', 'doi trenuri'], 2],
  ['„Casa” înseamnă:', ['the house', 'a house', 'houses', 'some houses'], 2],
  ['Cum spui corect 20 lei?', ['douăzeci de lei', 'douăzeci lei', 'douăzeci din lei', 'doi zeci lei'], 2],
  ['Completează: „Aceasta este mașina ___.” (my)', ['mea', 'meu', 'mei', 'mele'], 2],
  ['Răspunsul corect la „Cum vă numiți?” este:', ['Mă numesc Ravi.', 'Am 30 de ani.', 'Sunt bine.', 'Din Nepal.'], 3],
  ['Completează: „Vreau ___ plec acasă.”', ['să', 'la', 's-a', 'sa'], 3],
  ['Trecutul pentru „eu lucrez” este:', ['eu am lucrat', 'eu voi lucra', 'eu lucrez ieri', 'eu să lucrez'], 3],
  ['„O să merg mâine” este:', ['viitor', 'trecut', 'prezent', 'imperativ'], 3],
  ['„Caietul” este:', ['a notebook', 'a pen', 'a table', 'a bag'], 4],
  ['Completează: „o mașină ___” (red)', ['roșie', 'roșu', 'roșii', 'roși'], 4],
  ['Pentru telefon cumperi o ___ SIM.', ['cartelă', 'cheie', 'carte', 'cutie'], 4],
  ['„Cât costă?” înseamnă:', ['How much is it?', 'Where is it?', 'What is it?', 'Who is it?'], 4],
  ['Numărul unic de urgență este:', ['112', '911', '1911', '110'], 5],
  ['Nu primești salariul. Unde reclami?', ['la ITM', 'la IGI', 'la CFR', 'la bancă'], 5],
  ['Ziua Națională a României este:', ['1 decembrie', '24 ianuarie', '26 iunie', '9 mai'], 5],
  ['„E frig și ninge.” Ce anotimp este?', ['iarna', 'vara', 'primăvara', 'toamna'], 5],
  ['„Îmi este mare. Aveți o mărime mai mică?” Unde ești?', ['la magazinul de haine', 'la farmacie', 'la bancă', 'la gară'], 6],
  ['„Dormitorul” este camera unde:', ['dormi', 'gătești', 'te speli', 'mănânci'], 6],
  ['Frigiderul este de obicei în:', ['bucătărie', 'baie', 'dormitor', 'hol'], 6],
  ['„Cartea este pe masă.” „Pe” înseamnă:', ['on', 'under', 'next to', 'behind'], 6],
  ['Fratele soției mele este:', ['cumnatul meu', 'socrul meu', 'nepotul meu', 'unchiul meu'], 7],
  ['„Sunt căsătorit” înseamnă:', ['I am married', 'I am single', 'I am divorced', 'I am engaged'], 7],
  ['La restaurant, la final, spui:', ['Nota, vă rog!', 'Bună dimineața!', 'La mulți ani!', 'Casă de piatră!'], 7],
  ['„Am emoții” înainte de un examen înseamnă:', ['I am nervous', 'I am angry', 'I am sick', 'I am bored'], 7],
  ['Completează: „Un kilogram ___ roșii.”', ['de', 'la', 'cu', 'pe'], 8],
  ['„Mă doare capul” înseamnă:', ['I have a headache', 'my head is big', 'I wash my hair', 'I nod'], 8],
  ['Medicul la care ești înscris pentru consultații de bază este:', ['medicul de familie', 'farmacistul', 'dentistul', 'chirurgul'], 8],
  ['Constituția României garantează libertatea:', ['religioasă', 'de a nu plăti taxe', 'de a lucra fără contract', 'de a conduce fără permis'], 8],
  ['EIP înseamnă:', ['echipament individual de protecție', 'o factură', 'un tip de contract', 'o sculă electrică'], 9],
  ['Nu înțelegi o instrucțiune la lucru. Spui:', ['Nu am înțeles. Puteți să-mi explicați, vă rog?', 'Gata!', 'Merge și așa.', 'Lasă-l!'], 9],
  ['La un accident grav de muncă suni la:', ['112', 'bancă', 'curier', 'IGI'], 9],
  ['„Instructajul” la locul de muncă este:', ['training on health and safety', 'a holiday', 'the salary', 'a tool'], 9],
  ['Forma politicoasă este: „___ putea să mă ajutați?”', ['Ați', 'Aș', 'Ar', 'Am'], 10],
  ['Un e-mail oficial se încheie cu:', ['Cu stimă,', 'Pa!', 'Hai!', 'Salut!'], 10],
  ['Ce nu dai niciodată nimănui?', ['PIN-ul cardului', 'numele tău', 'orașul tău', 'IBAN-ul pentru salariu, angajatorului'], 10],
  ['Revoluția din decembrie 1989 a început la:', ['Timișoara', 'Iași', 'Cluj', 'Constanța'], 10],
  ['Perioada de probă pentru un post de execuție este de maximum:', ['90 de zile', '30 de zile', '60 de zile', '1 an'], 11],
  ['Concediul de odihnă este de cel puțin:', ['20 de zile lucrătoare', '10 zile lucrătoare', '5 zile lucrătoare', '60 de zile lucrătoare'], 11],
  ['Salariul net este:', ['suma pe care o primești pe card', 'salariul din contract, înainte de taxe', 'contribuția CAS', 'impozitul'], 11],
  ['Cineva îți cere bani ca să-ți dea un loc de muncă. Este:', ['o înșelătorie', 'normal', 'obligatoriu', 'o taxă de la IGI'], 11],
  ['Orele de liniște sunt:', ['22:00–08:00 și 13:00–14:00', '18:00–20:00', '00:00–05:00', 'numai duminica'], 12],
  ['O sticlă de plastic se pune în containerul:', ['galben', 'albastru', 'verde', 'maro'], 12],
  ['Completează: „Când eram copil, ___ la țară.”', ['locuiam', 'voi locui', 'locuiesc', 'am să locuiesc'], 12],
  ['În primele 6 luni (O.U.G. 32/2026), lucrătorul străin:', ['nu poate cere el schimbarea angajatorului, cu excepția încălcărilor grave', 'poate schimba angajatorul oricând', 'trebuie să schimbe angajatorul', 'nu are nevoie de contract'], 12],
  ['„Plata ramburs” înseamnă:', ['plătești curierului la primire', 'plătești online înainte', 'nu plătești', 'plătești la bancă'], 13],
  ['AWB-ul este:', ['numărul de urmărire a coletului', 'prețul', 'o reducere', 'adresa curierului'], 13],
  ['Biletul de trimitere la specialist ți-l dă:', ['medicul de familie', 'farmacistul', 'curierul', 'banca'], 13],
  ['Rețeta pentru o boală acută este valabilă cel mult:', ['48 de ore', '30 de zile', '1 an', 'nelimitat'], 13],
  ['Cine face legile în România?', ['Parlamentul', 'Guvernul', 'Președintele', 'instanțele'], 14],
  ['Mandatul Președintelui României este de:', ['5 ani', '4 ani', '6 ani', '10 ani'], 14],
  ['La o vizită, flori se duc în număr:', ['impar: 3, 5, 7', 'par: 2, 4, 6', 'oricât, nu contează', 'niciodată flori'], 14],
  ['Cum spui politicos că nu ești de acord?', ['Înțeleg, dar nu sunt de acord.', 'Taci!', 'Nu mă interesează!', 'Pa!'], 14],
];
// place the correct answer in a balanced position: a, b, c, d in turn
const LET = ['a', 'b', 'c', 'd'];
const Q = RAW.map((q, i) => { const o = q[1].slice(); const t = (i * 3 + 1) % 4; [o[0], o[t]] = [o[t], o[0]]; return [q[0], o, LET[t], q[2]]; });
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 56'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(80));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [['Module / Modul', 'Modulul 14 — Emoții, viața socială, statul român și test final (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 52 — TEST FINAL CUMULATIV, Modulele 1–14'], ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'],
  ['Student name / Nume și prenume cursant', ''], ['Score / Punctaj obținut', '_______ / 56'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am susținut testul final.', '*I declare that I attended this course session and sat the final test.*']));
add(spacer(120));
add(banner('MODULE 14 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 14 — se păstrează la dosarul cursantului'));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ', 'SEMNĂTURA CURSANTULUI'],
  ['50', 'Sesiunea 50 — Emoții, păreri, obiceiuri sociale (3 ore)', '', '—', ''],
  ['51', 'Sesiunea 51 — Constituția, instituțiile statului, recapitularea cursului (3 ore)', '', '—', ''],
  ['52', 'Sesiunea 52 — TEST FINAL CUMULATIV M1–M14 (3 ore)', '', '___ / 56', '']], { size: 18 }));

// course closure record
add(new Paragraph({ pageBreakBefore: true, spacing: { before: 0, after: 0, line: 120 }, children: [] }));
add(banner('FIȘA DE ÎNCHIDERE A DOSARULUI CURSANTULUI', 'COURSE CLOSURE RECORD — curs de limbă română cu elemente de integrare culturală și socială, O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g)'));
add(tbl([4200, 5438], [['Nume și prenume cursant · cetățenie / Student · citizenship', ''], ['Act de identitate · CNP / ID document · CNP', ''], ['Angajator / Employer', ''], ['Furnizor · formator / Course provider · teacher', ''], ['Perioada cursului / Course period', 'de la ____ / ____ / 20____  până la ____ / ____ / 20____']], { header: false }));
const MODS = [['1', 'Alfabetul, scrisul și pronunția', '1–4', 12, '/ 20'], ['2', 'Bazele gramaticii', '5–9', 15, '/ 25'], ['3', 'Verbul și prima conversație', '10–15', 18, '/ 40'], ['4', 'La curs și la cumpărături', '16–18', 9, '/ ___'],
  ['5', 'Orientare România și timpul', '19–22', 12, '/ 20'], ['6', 'Haine și casa mea', '23–25', 9, '/ 20'], ['7', 'Familia mea și la restaurant', '26–28', 9, '/ 20'], ['8', 'Supermarket, piață, farmacie și medic (test A1)', '29–32', 12, '/ 50'],
  ['9', 'Domeniul de activitate: ________________', '33–36', 12, '/ 25'], ['10', 'Politețe, educație, banca și România de azi', '37–40', 12, '/ 20'], ['11', 'Călătorii, timp liber, munca și drepturile străinilor', '41–44', 12, '/ 20'], ['12', 'Casa, viața la oraș și la țară, O.U.G. 32/2026', '45–47', 9, '/ 20'],
  ['13', 'Servicii de zi cu zi și sănătate', '48–49', 6, '/ 20'], ['14', 'Emoții, viața socială, statul român și test final', '50–52', 9, 'test final']];
add(tbl([600, 4038, 1100, 900, 1300, 1700], [['M', 'MODULUL', 'SESIUNI', 'ORE', 'TEST MODUL', 'SEMNĂTURA FORMATORULUI'],
  ...MODS.map(m => [m[0], m[1], m[2], String(m[3]), `____ ${m[4]}`, '']),
  ['', '**TOTAL**', '**52**', `**${MODS.reduce((a, m) => a + m[3], 0)}**`, '', '']], { size: 14 }));
add(tbl([4200, 5438], [['**Test final / Final test** · **ore frecventate / hours attended**', '____ / 56  ·  ____ din 156 ore  ·  data __.__.20__']], { header: false, size: 18 }));
add(P('**Documente în dosar:** ☐ fișele de evidență M1–M14  ☐ fișele de confirmare a sesiunilor  ☐ testele modulelor  ☐ testul final  ☐ copia actului de identitate', { size: 16, after: 60 }));
add(box('note', 'CONFIRMARE ÎNCHIDERE DOSAR / CLOSURE CONFIRMATION', [
  'Confirm că cursantul a parcurs cursul de limbă română cu elemente de integrare culturală și socială (O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g)) în perioada menționată și a susținut testul final consemnat mai sus. *I confirm that the student attended the course in the period above and sat the final test recorded above.*',
  'Semnătura cursantului: ______________   Semnătura formatorului: ______________',
  'Reprezentant angajator (nume, semnătură, ștampilă): ______________   Data: __.__.20__']));

// answer key
add(new Paragraph({ pageBreakBefore: true, children: [] }));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(key('**14.1**   mândru · dezamăgit (sau stresat) · plictisit · stresat · ușurat'),
  key('**14.2**   e.g. Casă de piatră! · La mulți ani! · Condoleanțe. / Dumnezeu să-l ierte. · Mult succes! / Baftă!'),
  key('**14.3**   F · A · A · F      **14.4**   C · T · T · C'),
  key('**14.5**   Parlamentul · instanțele · Guvernul · Curtea Constituțională · Președintele'),
  H2('Final test — grilă answer key'), P('**TOTAL: 56 de puncte**, câte 4 din fiecare modul (întrebările 1–4 = M1, 5–8 = M2 ... 53–56 = M14). Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
const ans = Q.map(q => q[2]);
const krows = []; for (let r = 0; r < ans.length; r += 8) krows.push(ans.slice(r, r + 8).map((a, i) => `**${r + i + 1}** – ${a}`));
add(tbl(Array(8).fill(1204).map((w, i) => i === 7 ? 1210 : w), krows, { header: false, size: 18 }));
add(P('*Pragul de promovare nu este stabilit în acest suport — se aplică regula furnizorului de curs. / The pass mark is not set here — the course provider\'s rule applies.*', { size: 16, color: '555555' }));
add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile factuale și legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The factual and legal information was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Constituția: adoptată 21.11.1991, aprobată prin referendum 8.12.1991, revizuită prin Legea nr. 429/2003 (referendum 18–19.10.2003)', 'Constituția României, republicată — legislatie.just.ro/Public/DetaliiDocument/47355; Camera Deputaților (cdep.ro); CCR (ccr.ro)', 'Lesson 14.4'],
  ['Drepturile: art. 21, 23, 26, 27, 28, 31, 32, 39, 43, 36–37, 51; obligațiile: art. 1, 54–57; Avocatul Poporului art. 58', 'Constituția României, Titlul II (cdep.ro, legislatie.just.ro); avp.ro', 'Lesson 14.4'],
  ['Separația și echilibrul puterilor — art. 1 alin. (4)', 'Constituția; CCR — rolul Curții în echilibrul puterilor (ccr.ro)', 'Lesson 14.5'],
  ['Parlamentul: art. 61, mandat 4 ani art. 63; Președintele: art. 81 (max. două mandate), art. 83 (5 ani); Guvernul: art. 102–103 (vot de încredere); Justiția: art. 124, 126, 133', 'Constituția (cdep.ro, senat.ro, presidency.ro); ÎCCJ (scj.ro)', 'Lesson 14.5, test q. 53–54'],
  ['Sediile: Palatul Cotroceni — Administrația Prezidențială; Palatul Parlamentului — Camera Deputaților și Senatul; Palatul Victoria — Guvernul', 'presidency.ro; cic.cdep.ro; gov.ro', 'Lesson 14.5'],
  ['Test final: conținutul Modulelor 1–13', 'Suporturile de curs M1–M13 și sursele lor', 'test final'],
  ['Lecțiile anterioare citate', 'Modulele 1–13', 'whole module']], { size: 15 }));
add(P('*Obiceiurile sociale (florile în număr impar / par, descălțatul, ziua numelui) și datele zilelor de nume din calendarul ortodox sunt informații culturale generale, nu reglementări. / Social customs and name-day dates are general cultural information.*', { size: 15, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 14 — Emoții, viața socială, statul român și test final',
  styles: { default: { document: { run: { font: 'Arial', size: 20 } } }, paragraphStyles: [
    { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
    { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 14 — EMOȚII, VIAȚA SOCIALĂ, STATUL ROMÂN ȘI TEST FINAL', color: '777777', size: 16 })] })] }) },
    children: S }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm14.docx', b); console.log('written'); });
