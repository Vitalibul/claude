const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, fig, mcq, cell, brd } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Header } = d;
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
// question / answer block for Lesson 12.6
function qa(items) {
  const W = [3400, 6238];
  const rows = items.map(([q, a]) => new TableRow({ cantSplit: true, children: [cell(`**${q}**`, { w: W[0], size: 18, shade: 'E3EEF8' }), cell(a, { w: W[1], size: 18 })] }));
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), spacer(80)];
}

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 12  —  HOME, LIFE IN THE CITY AND IN THE COUNTRYSIDE, O.U.G. 32/2026', { bold: true, color: C.gr, size: 30 }, 100),
  cov('MODULUL 12  —  CASA, VIAȚA LA ORAȘ ȘI LA ȚARĂ, O.U.G. 32/2026', { bold: true, color: C.dk, size: 28 }, 100),
  cov('Nivelul A2 / Level A2', { italics: true, color: C.gr, size: 22 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'], ['A2 — after Module 11', '9 hours · Sessions 45–47 · Weeks 23–24', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with ONE cumulative multiple-choice test (20 questions), signed and dated by the student and kept on file as proof of completion.*']));
add(pageBreak());

// ================= BEFORE YOU START =================
add(H1('Before you start'),
  P('Module 12 is about **where and how you live**: renting a flat, living in a block of flats with neighbours, and the difference between life in the city and in the village. You learn the **imperfect** (*eram, locuiam, aveam*) — the second new grammar point of Level A2 — to tell stories about your childhood. Finally, you read the rules of **O.U.G. 32/2026** — the law behind this course — that concern **you**: the first 6 months with your employer.'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**the rooms, the furniture, describing a home**', 'Lessons 6.4, 6.5, 6.6', 'not repeated — the flat in the ad'],
  ['**reflexive verbs** — *mă trezesc*', 'Lesson 3.12', 'ne trezeam devreme'],
  ['**the past** — *am lucrat*', 'Lessons 3.14, 3.15', 'past vs imperfect'],
  ['**seasons and months**', 'Lesson 5.4', 'the work in the village'],
  ['**fruit and vegetables**', 'Lesson 8.1', 'the garden, the fruit trees'],
  ['**the polite conditional**', 'Lesson 10.2', 'with the landlord, the neighbours'],
  ['**IGI, ITM, contract, REGES-ONLINE**', 'Lessons 5.2, 11.6, 11.8, 11.9', 'O.U.G. 32/2026']], { size: 19 }));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 45**', '3 hours', 'Lesson 12.1 Renting a flat · 12.2 Life in a block of flats'],
  ['**Session 46**', '3 hours', 'Lesson 12.3 City and countryside, farm animals · 12.4 The garden and the seasons · 12.5 The imperfect'],
  ['**Session 47**', '3 hours', 'Lesson 12.6 O.U.G. 32/2026: your first 6 months · 12.7 Recap · **Module 12 test**']], { size: 19 }));
add(pageBreak());

// ================= S45 =================
add(banner('SESSION 45  —  RENTING AND LIFE IN A BLOCK OF FLATS', 'SESIUNEA 45 — CHIRIA ȘI VIAȚA LA BLOC  ·  3 hours'));
add(objectives(['read a rental ad and ask the right questions at a viewing', 'understand the rental contract, the deposit and the utilities', 'pay the maintenance and respect the rules of the block', 'sort the rubbish and talk politely with a neighbour']));
add(H1('Lesson 12.1  —  Renting a flat / Chiria'));
add(P('The rooms and the furniture are in **Lessons 6.4–6.6** — here you learn how to **rent**. Most foreign workers live in a flat in a **bloc** (block of flats), rented from an owner (*proprietarul*) or given by the employer.', { size: 19 }));
add(fig('anunt', 540, 'Fig. 12.1 — Un anunț de închiriere. EXEMPLU inventat / A rental ad. Invented SAMPLE'));
add(tbl([700, 2300, 6638], [['NR.', 'IN THE AD', 'WHAT IT MEANS'],
  ['2', '**45 mp · etaj 3 / 10**', '45 square metres; 3rd floor of 10. *Bloc 1985* = the year the block was built'],
  ['3', '**mobilat, utilat · centrală proprie**', 'with furniture and appliances (Lesson 6.5); its own gas boiler — you pay your own heating'],
  ['4', '**+ utilități**', 'the rent does **not** include electricity, gas, water, internet, maintenance'],
  ['5', '**garanție**', 'a **deposit**, here equal to one month\'s rent; you get it back at the end if there is no damage or debt'],
  ['7', '**fără comision**', 'no agency fee — you speak directly with the owner']], { size: 17 }));
add(tbl([4819, 4819], [['AT THE VIEWING / LA VIZIONARE', 'ENGLISH'],
  ['**Aș dori să văd apartamentul.** Când ar fi posibil?', 'I\'d like to see the flat. When would it be possible?'],
  ['**Cât vine întreținerea iarna?**', 'How much is the maintenance in winter?'],
  ['**Chiria include utilitățile?** — Nu, se plătesc separat.', 'Does the rent include utilities? — No, they are paid separately.'],
  ['**Facem un contract scris?** · **Îmi dați o chitanță?**', 'Shall we make a written contract? · Will you give me a receipt?'],
  ['**Pot să-mi declar adresa aici?** (for IGI, Lesson 11.8)', 'Can I declare this address as mine?']], { size: 17 }));
add(box('attn', 'ATTENTION — THE RENTAL CONTRACT / CONTRACTUL DE ÎNCHIRIERE', [
  'Ask for a **written contract**: the names, the address, the **rent** and the **date of payment**, the **deposit**, **who pays** the utilities and the maintenance, the **duration** and the **notice** to leave. The owner must **register the contract at ANAF within 30 days** (ANAF). With a contract you can prove your address — IGI asks for it when you change address (Lesson 11.8). **Never pay a deposit before you see the flat and the owner\'s documents.**']));
add(exercise('12.1', 'Read the ad', 'Look at Fig. 12.1 and answer.'));
add(ex2([['1.  Câte camere are apartamentul? → ______________', '2.  Cât este chiria? → ______________'], ['3.  Chiria include utilitățile? → ______________', '4.  Cât este garanția? → ______________']]));
add(useful([['chiria · chiriașul', 'the rent · the tenant'], ['proprietarul', 'the owner, landlord'], ['a închiria', 'to rent'], ['vizionarea', 'the viewing'], ['garanția', 'the deposit'], ['utilitățile', 'utilities'], ['chitanța', 'the receipt'], ['preavizul', 'notice (to leave)']]));

add(H1('Lesson 12.2  —  Life in a block of flats / Viața la bloc'));
add(tbl([2600, 7038], [['AT THE BLOCK', 'WHAT IT IS'],
  ['**asociația de proprietari**', 'the owners\' association of the block (Law no. 196/2018); it pays the common costs: stairs, lift, cleaning, lighting, water for the block'],
  ['**administratorul**', 'the manager: calculates what each flat must pay and posts it'],
  ['**întreținerea**', 'the monthly **maintenance** payment of each flat; your contract says if **you** or the owner pays it'],
  ['**lista de plată · avizierul**', 'the monthly list of payments, posted on the **notice board** at the entrance; the owners can contest it in writing within **10 days**'],
  ['**orele de liniște**', 'quiet hours: **22:00–08:00** and **13:00–14:00** (Law no. 61/1991); loud noise is fined **500–1,500 lei** (Romanian Police)']], { size: 17 }));
add(fig('gunoi', 560, 'Fig. 12.2 — Colectarea separată: culorile containerelor / Separate collection: the colours of the bins'));
add(P('Town halls must organise **separate collection** of paper, plastic, metal and glass. Put **clean** packaging in the right bin; batteries, bulbs and old electronics go to special collection points, not in the bins. Each town has its own **days and places** — ask the administrator.', { size: 18 }));
add(tbl([4819, 4819], [['THE NEIGHBOUR COMPLAINS / VECINUL SE PLÂNGE', 'ENGLISH'],
  ['— Bună seara! Sunt vecinul de la etajul 4. **E trecut de ora zece și se aude muzica foarte tare.**', 'Good evening! I\'m your neighbour from the 4th floor. It\'s after ten and the music is very loud.'],
  ['— **Îmi pare rău, nu mi-am dat seama.** O dau mai încet imediat.', 'I\'m sorry, I didn\'t realise. I\'ll turn it down at once.'],
  ['— Mulțumesc. **Mâine mă scol la cinci.**', 'Thank you. I get up at five tomorrow.'],
  ['— **Nu se mai întâmplă.** Noapte bună!', 'It won\'t happen again. Good night!']], { size: 17 }));
add(tbl([4819, 4819], [['GOOD NEIGHBOURS / VECINI BUNI', 'ENGLISH'],
  ['**Bună ziua!** on the stairs and in the lift — always', 'greeting neighbours is normal in Romania'],
  ['**Ați putea să-mi țineți un colet?** (Lesson 10.2)', 'Could you keep a parcel for me?'],
  ['**Vă deranjează dacă fac o mică petrecere sâmbătă, până la zece?**', 'Do you mind if I have a small party on Saturday, until ten?']], { size: 17 }));
add(exercise('12.2', 'Which bin?', 'Write the colour: albastru · galben · verde · maro · gri.'));
add(ex2([['1.  o sticlă de apă din plastic → ______________', '2.  o cutie de carton → ______________'], ['3.  un borcan de sticlă → ______________', '4.  cojile de cartofi → ______________'], ['5.  o doză de suc → ______________', '6.  un scutec folosit → ______________']]));
add(useful([['vecinul · vecina', 'the neighbour'], ['scara blocului', 'the staircase'], ['liftul · etajul', 'the lift · the floor'], ['avizierul', 'notice board'], ['a face zgomot', 'to make noise'], ['a recicla', 'to recycle'], ['gunoiul menajer', 'household rubbish'], ['ghena', 'the bin area of the block']]));
add(mistakes([
  ['ne-a', 'ne + a — *(he / she) has ... us*', 'Proprietarul **ne-a** dat cheile. · **Ne-a** cerut chiria.', 'you can say **ne-au** for many'],
  ['nea', 'colloquial: *mister, uncle* — before the name of an older man', '**Nea** Vasile, vecinul de la 2, e administrator.', 'a name comes after it'],
  ['întruna', 'all the time, non-stop — **one word**', 'Câinele vecinului latră **întruna**.', 'you can say **mereu**'],
  ['într-una', 'in one (of them)', 'Locuiesc **într-una** din camere.', 'followed by **din / dintre**']]));
add(hw(45, ['**H45.1**  Write a rental ad for your flat (or your dream flat) with the seven parts of Fig. 12.1.', '**H45.2**  Write five questions for a viewing, with *Aș dori... / Ați putea...?*']));

// ================= S46 =================
add(spacer(160));
add(banner('SESSION 46  —  CITY AND COUNTRYSIDE, THE IMPERFECT', 'SESIUNEA 46 — VIAȚA LA ORAȘ ȘI LA ȚARĂ, IMPERFECTUL  ·  3 hours'));
add(objectives(['compare life in the city and in the village', 'name nine farm animals and the work in the garden', 'say what is done in the village in each season', 'tell a story about your childhood with the imperfect: **eram, locuiam, aveam**']));
add(H1('Lesson 12.3  —  City and countryside / Orașul și satul'));
add(tbl([2400, 3619, 3619], [['', 'LA ORAȘ / IN THE CITY', 'LA ȚARĂ / IN THE COUNTRYSIDE'],
  ['**locuința**', 'un apartament la bloc', 'o casă cu curte și grădină'],
  ['**transportul**', 'metrou, autobuz, tramvai', 'mașina, microbuzul, bicicleta'],
  ['**munca**', 'în fabrici, birouri, magazine, pe șantier', 'în agricultură, în gospodărie, la ferma'],
  ['**viața**', 'agitată, zgomot, multe magazine', 'liniștită, aer curat, puține magazine'],
  ['**oamenii**', 'nu se cunosc între ei', 'toți se cunosc'],
  ['**mâncarea**', 'o cumperi de la supermarket (Lesson 8.3)', 'o crești singur: legume, ouă, lapte']], { size: 17 }));
add(fig('ferma', 600, 'Fig. 12.3 — Animalele din gospodărie / Farm animals'));
add(tbl([2450, 2369, 2450, 2369], [['FROM THE ANIMALS', 'ENGLISH', 'IN THE YARD', 'ENGLISH'],
  ['**laptele** — de la vacă, oaie, capră', 'milk', '**grajdul**', 'the stable, the cowshed'],
  ['**ouăle** — de la găină', 'eggs', '**cotețul**', 'the henhouse, pigsty'],
  ['**brânza · lâna**', 'cheese · wool', '**a da de mâncare animalelor**', 'to feed the animals'],
  ['**carnea de porc, de pui**', 'pork, chicken', '**a mulge vaca**', 'to milk the cow']], { size: 17 }));
add(exercise('12.3', 'City or village?', 'Write O (oraș) or S (sat).'));
add(ex2([['1.  Iau metroul la muncă. ___', '2.  Am o vacă și zece găini. ___'], ['3.  Toți vecinii se cunosc. ___', '4.  Locuiesc la etajul 8. ___']]));
add(useful([['satul · orașul', 'village · town'], ['gospodăria', 'the household, small farm'], ['curtea', 'the yard'], ['ferma', 'the farm'], ['aerul curat', 'fresh air'], ['a crește animale', 'to raise animals']]));

add(H1('Lesson 12.4  —  The garden and the seasons / Grădina și anotimpurile'));
add(P('Vegetables and fruit are in **Lesson 8.1**. In the village almost every house has a **grădină** (vegetable garden) and **pomi fructiferi** (fruit trees). The names of many trees come from the fruit: **măr** = apple and apple tree!', { size: 19 }));
add(tbl([2400, 2400, 2400, 2438], [['THE FRUIT', 'THE TREE', 'THE FRUIT', 'THE TREE'],
  ['un măr', '**un măr** (apple tree)', 'o cireașă', '**un cireș** (cherry tree)'],
  ['o pară', '**un păr** (pear tree)', 'o nucă', '**un nuc** (walnut tree)'],
  ['o prună', '**un prun** (plum tree)', 'o piersică · o caisă', '**un piersic · un cais**']], { size: 17 }));
add(tbl([2450, 2369, 2450, 2369], [['IN THE GARDEN', 'ENGLISH', 'IN THE GARDEN', 'ENGLISH'],
  ['**a planta · a semăna**', 'to plant · to sow', '**a uda**', 'to water'],
  ['**a săpa**', 'to dig', '**a culege · recolta**', 'to pick · the harvest'],
  ['**răsadurile**', 'seedlings', '**a cultiva** roșii, ardei, cartofi', 'to grow tomatoes, peppers, potatoes']], { size: 17 }));
add(fig('anotimpuri', 600, 'Fig. 12.4 — Muncile de la țară pe anotimpuri (anotimpurile: Lesson 5.4) / Farm work through the seasons'));
add(P('*Se ară, se seamănă, se udă* — the **se** form means „it is done” (people do it). You already know *se* from Lesson 3.12.*', { size: 17 }));
add(exercise('12.4', 'When?', 'Write the season.'));
add(ex2([['1.  Se culeg strugurii. → ______________', '2.  Se seamănă. → ______________'], ['3.  Se cosește fânul. → ______________', '4.  Se taie lemne pentru foc. → ______________']]));
add(useful([['pomul fructifer', 'fruit tree'], ['livada', 'the orchard'], ['via · strugurii', 'the vineyard · grapes'], ['fânul', 'hay'], ['porumbul · grâul', 'maize · wheat'], ['conservele · murăturile', 'preserves · pickles']]));

add(H1('Lesson 12.5  —  The imperfect: when I was a child / Imperfectul: când eram copil'));
add(P('You know the past **am lucrat** (Lesson 3.14): **one finished action**. The **imperfect** describes **how things were** and **what you used to do** — perfect for memories: *Când eram copil, locuiam la țară.*', { size: 19 }));
add(tipar('TIPAR — the imperfect', ['lucra → lucr-  ·  avea → av-', '+', '-am, -ai, -a...  /  -eam, -eai, -ea...', '=', 'lucram · aveam']));
add(tbl([1500, 2034, 2034, 2035, 2035], [['PERSON', 'A LUCRA', 'A AVEA', 'A MERGE', 'A FI (irregular)'],
  ['eu', 'lucr**am**', 'av**eam**', 'merg**eam**', '**eram**'],
  ['tu', 'lucr**ai**', 'av**eai**', 'merg**eai**', '**erai**'],
  ['el / ea', 'lucr**a**', 'av**ea**', 'merg**ea**', '**era**'],
  ['noi', 'lucr**am**', 'av**eam**', 'merg**eam**', '**eram**'],
  ['voi / dvs.', 'lucr**ați**', 'av**eați**', 'merg**eați**', '**erați**'],
  ['ei / ele', 'lucr**au**', 'av**eau**', 'merg**eau**', '**erau**']], { size: 18 }));
add(P('*Also: a locui → **locuiam**, a scrie → **scriam**, a face → **făceam**, a sta → **stăteam**, a da → **dădeam**. Reflexive: **mă trezeam, ne trezeam** (Lesson 3.12).*', { size: 17 }));
add(tbl([4819, 4819], [['A STORY / O POVESTE', 'ENGLISH'],
  ['**Când eram copil, locuiam la țară**, într-un sat din Nepal.', 'When I was a child, I lived in the countryside, in a village in Nepal.'],
  ['**Bunicul avea vaci** și capre. **Ne trezeam devreme**, la cinci.', 'My grandfather had cows and goats. We used to get up early, at five.'],
  ['Eu **dădeam de mâncare** găinilor, iar sora mea **aducea apă**.', 'I fed the hens, and my sister brought water.'],
  ['**Într-o zi, a venit** o furtună mare. (am venit = one event!)', 'One day a big storm came.']], { size: 17 }));
add(box('recap', 'IMPERFECT OR PAST? / IMPERFECT SAU PERFECT COMPUS?', [
  '**Imperfect** = the background, a habit, a long situation: *eram, locuiam, în fiecare zi mergeam*. **Perfect compus** = one event, finished: *am venit, a plouat, m-am mutat* (Lesson 3.14). In a story: *Locuiam la țară (background) când **a venit** furtuna (event).*']));
add(exercise('12.5', 'Put the verbs in the imperfect', 'Write the correct form.'));
add(ex2([['1.  Când (eu, a fi) ________ copil, (a locui) ________ la țară.', '2.  Bunica (a avea) ________ o grădină mare.'], ['3.  Noi (a merge) ________ la școală pe jos.', '4.  Tata (a lucra) ________ la câmp.'], ['5.  Voi (a fi) ________ fericiți?', '6.  Copiii (a se juca) ________ în curte.']]));
add(useful([['când eram copil', 'when I was a child'], ['pe vremea aceea', 'at that time'], ['în fiecare zi', 'every day'], ['bunicul · bunica', 'grandfather · grandmother'], ['îmi amintesc', 'I remember'], ['de obicei', 'usually']]));
add(mistakes([
  ['decât', 'only (after **nu**) · than — **one word**', 'Nu am **decât** o vacă. · Satul e mai liniștit **decât** orașul.', 'you can say **doar** / **than**'],
  ['de cât', '*how much / how long* — in a question', '**De cât** timp locuiești aici?', 'followed by a noun: **timp, bani**'],
  ['câteodată', 'sometimes — **one word**', '**Câteodată** merg la bunici.', 'you can say **uneori**'],
  ['câte o dată', 'one time each', 'Ud roșiile **câte o dată** pe zi.', 'it means *once each (time)*']]));
add(hw(46, ['**H46.1**  Write eight sentences about your childhood with the imperfect: *Când eram copil, locuiam... Aveam... În fiecare zi...*', '**H46.2**  Compare your village or town at home with a Romanian one: three things that are the same, three that are different.']));

// ================= S47 =================
add(spacer(160));
add(banner('SESSION 47  —  O.U.G. 32/2026, RECAP AND TEST', 'SESIUNEA 47 — O.U.G. 32/2026, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['explain what O.U.G. 32/2026 says about your first 6 months with the employer', 'know what happens if you leave before 6 months', 'know where to ask: IGI, ITM, the placement agency']));
add(H1('Lesson 12.6  —  O.U.G. 32/2026: your first 6 months / Primele 6 luni'));
add(P('**O.U.G. nr. 32 din 23 aprilie 2026** is the Government Emergency Ordinance on the **access of foreigners to the labour market in Romania**. It is also the law behind **this course**. Below are the rules that concern **your job** — in simple words.', { size: 19 }));
add(fig('oug', 560, 'Fig. 12.5 — Primele 6 luni și primii 2 ani la angajator / The first 6 months and the first 2 years'));
add(qa([
  ['Când încep cele 6 luni? / When do the 6 months start?', 'From the **date you start work in Romania**, as it is registered in **REGES-ONLINE** (the employee register, Lesson 11.6).'],
  ['Pot să schimb angajatorul în primele 6 luni? / Can I change employer in the first 6 months?', '**No — you cannot ask for the change yourself** in the first 6 months.'],
  ['Există excepții? / Are there exceptions?', '**Yes**: when the employer **seriously breaks** the contract or the rules of the working relationship. Keep proof (contract, payslips, messages) and complain to **ITM** (Lesson 11.9).'],
  ['Ce se întâmplă dacă plec înainte de 6 luni? / What if I leave before 6 months?', 'If you leave **without such a reason**, the employer **can ask you to pay back** the money spent on your **Romanian course**, your **accommodation** and your **transport**.'],
  ['Și dacă nu vin la lucru? / And if I don\'t come to work?', 'If you are absent **without reason for more than 3 working days in a row**, the employer must tell **IGI** and the **placement agency** within **5 working days**. Your right to stay depends on your work.'],
  ['Ce fac după 6 luni? / After 6 months?', 'Until **2 years** from the start of work, you can change employer **only through the placement agency** that signed your placement contract.'],
  ['Dacă se termină contractul? / If the contract ends?', 'IGI: you can stay in Romania **at most 90 days** to find a new employer. If your right of residence ends, you must **leave Romania**.'],
  ['De ce acest curs? / Why this course?', 'Art. 7 (1) g): the employer must give you a **Romanian course with cultural and social integration**, for **at least 6 months**, **at least 6 hours a week**.']]));
add(box('attn', 'ATTENTION — ASK BEFORE YOU LEAVE / ÎNTREABĂ ÎNAINTE SĂ PLECI', [
  'These rules apply to workers who came under **O.U.G. 32/2026**; some details depend on your visa and your date of arrival. **Before you resign or change job**, ask **in writing** your employer\'s HR office, the **placement agency** and **IGI** (igi.mai.gov.ro, workinromania.gov.ro). Never sign a resignation you do not understand (Lesson 11.10).']));
add(tbl([4819, 4819], [['USEFUL SENTENCES / FRAZE UTILE', 'ENGLISH'],
  ['**De când se calculează cele 6 luni pentru mine?**', 'From when are the 6 months counted for me?'],
  ['**Aș dori să schimb locul de muncă. Ce trebuie să fac?**', 'I would like to change my job. What do I have to do?'],
  ['**Angajatorul nu respectă contractul. Pot face o sesizare la ITM?**', 'The employer does not respect the contract. Can I complain to ITM?'],
  ['**Îmi puteți da răspunsul în scris, vă rog?**', 'Could you give me the answer in writing, please?']], { size: 17 }));
add(exercise('12.6', 'True or false?', 'Write A (adevărat) or F (fals).'));
add(ex2([['1.  Cele 6 luni încep de la data din REGES-ONLINE. ___', '2.  În primele 6 luni pot schimba angajatorul oricând. ___'], ['3.  Dacă plec fără motiv, angajatorul poate cere banii pe curs, cazare și transport. ___', '4.  După ce se termină contractul, pot rămâne cel mult 90 de zile. ___']]));
add(useful([['ordonanța de urgență', 'emergency ordinance'], ['agenția de plasare', 'placement agency'], ['a schimba angajatorul', 'to change employer'], ['a da înapoi banii', 'to pay back'], ['încălcarea gravă', 'serious breach'], ['dreptul de ședere', 'right of residence']]));

add(H1('Lesson 12.7  —  Recap / Recapitulare'));
add(tbl([3600, 3800, 2238], [['TOPIC', 'EXAMPLE', 'LESSON'],
  ['anunț · vizionare · contract · garanție · utilități', 'Chiria include utilitățile?', '12.1'],
  ['asociația · administratorul · întreținerea · liniște 22–8, 13–14', 'Se aude muzica foarte tare.', '12.2'],
  ['albastru hârtie · galben plastic, metal · verde sticlă · maro bio', 'Pun sticla în containerul verde.', '12.2'],
  ['oraș / sat · vaca, porcul, oaia, capra, calul, găina, rața, curcanul, iepurele', 'La țară toți se cunosc.', '12.3'],
  ['măr → măr · se ară, se seamănă, se culege', 'Toamna se culeg strugurii.', '12.4'],
  ['imperfect: eram, locuiam, aveam, mergeam', 'Când eram copil, locuiam la țară.', '12.5'],
  ['6 luni · excepția · costurile · 2 ani prin agenție · 90 de zile', 'Îmi puteți da răspunsul în scris?', '12.6']], { size: 17 }));
add(mistakes([
  ['dea', 'să + dea — *(that) he / she gives*', 'Proprietarul trebuie să-mi **dea** chitanța.', 'after **să**'],
  ['de-a', 'de + a — in fixed phrases', '**de-a** lungul drumului · **de-a** dreapta', 'you can say **de a**'],
  ['s-ar', 'se + ar — *it would* (Lesson 10.2)', '**S-ar** putea să plouă. · **S-ar** muta la țară.', 'a verb comes after it'],
  ['sar', 'I jump / they jump (a sări)', 'Copiii **sar** în curte.', 'it is a verb']]));
add(exercise('12.7', 'Everything together', 'Circle the correct form.'));
add(ex2([['1.  Când ( am fost  /  eram ) copil, locuiam la țară.', '2.  Câinele latră ( întruna  /  într-una ).'], ['3.  Nu am ( decât  /  de cât ) o cameră.', '4.  Proprietarul ( ne-a  /  nea ) dat cheile.'], ['5.  ( S-ar  /  Sar ) putea să ningă.', '6.  ( Câteodată  /  Câte o dată ) merg la sat.']]));
add(hw(47, ['**H47.1**  Write in Romanian: the date you started work (ask HR — it is in REGES-ONLINE) and the date when your first 6 months end.', '**H47.2**  Write a short story (8 sentences) about a day in your village when you were a child.']));

// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 47, fișa de evidență a Modulului 12, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — MODULUL 12', 'MODULE 12 — CUMULATIVE TEST  ·  grilă, 20 de întrebări, 20 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  ['„1.800 lei / lună + utilități” înseamnă:', ['totul este inclus', 'curentul, gazul, apa se plătesc separat', 'nu se plătește nimic', 'chiria e pe an'], 'b'],
  ['Garanția este:', ['un cadou pentru proprietar', 'o sumă pe care o primești înapoi la sfârșit, dacă nu sunt pagube', 'comisionul agenției', 'impozitul'], 'b'],
  ['Contractul de închiriere se înregistrează la ANAF în:', ['3 zile', '30 de zile', '6 luni', 'nu se înregistrează'], 'b'],
  ['Cine calculează întreținerea la bloc?', ['vecinul', 'administratorul', 'poliția', 'IGI'], 'b'],
  ['Orele de liniște sunt:', ['20:00–06:00', '22:00–08:00 și 13:00–14:00', '00:00–05:00', 'numai duminica'], 'b'],
  ['O cutie de carton se pune în containerul:', ['galben', 'verde', 'albastru', 'maro'], 'c'],
  ['O sticlă de plastic se pune în containerul:', ['galben', 'albastru', 'verde', 'maro'], 'a'],
  ['Vecinul spune: „Se aude muzica foarte tare.” Răspunzi:', ['Nu mă interesează.', 'Îmi pare rău, o dau mai încet.', 'Sunați la 112.', 'Pa!'], 'b'],
  ['Care animal dă ouă?', ['vaca', 'găina', 'calul', 'porcul'], 'b'],
  ['„Un măr” poate fi:', ['numai un fruct', 'un fruct sau un pom', 'o legumă', 'un animal'], 'b'],
  ['Primăvara, la țară:', ['se culeg strugurii', 'se ară și se seamănă', 'se taie lemne pentru foc', 'se cosește fânul'], 'b'],
  ['Completează: „Când ___ copil, locuiam la țară.”', ['am fost', 'eram', 'sunt', 'voi fi'], 'b'],
  ['Completează: „Bunicul ___ trei vaci.”', ['avea', 'aveam', 'aveau', 'avem'], 'a'],
  ['Completează: „Noi ___ devreme în fiecare zi.”', ['ne trezeam', 'ne-am trezit mâine', 'ne trezim ieri', 'se trezeau'], 'a'],
  ['Cele 6 luni din O.U.G. 32/2026 încep de la:', ['data vizei', 'data începerii muncii din REGES-ONLINE', '1 ianuarie', 'data cursului'], 'b'],
  ['În primele 6 luni, lucrătorul străin:', ['poate schimba angajatorul oricând', 'nu poate cere el schimbarea angajatorului, cu excepția încălcărilor grave ale angajatorului', 'trebuie să schimbe angajatorul', 'nu are contract'], 'b'],
  ['Dacă pleacă fără motiv înainte de 6 luni, angajatorul poate cere banii pentru:', ['curs, cazare și transport', 'mâncare și haine', 'telefon', 'nimic'], 'a'],
  ['După 6 luni și până la 2 ani, schimbarea angajatorului se face:', ['la primărie', 'numai prin agenția de plasare', 'la bancă', 'fără nicio regulă'], 'b'],
  ['După încetarea contractului, poți rămâne pentru un nou angajator cel mult:', ['10 zile', '30 de zile', '90 de zile', '1 an'], 'c'],
  ['Care propoziție este scrisă corect?', ['Nu am de cât o cameră.', 'Nu am decât o cameră.', 'Nu am decăt o cameră.', 'Nu am deca o cameră.'], 'b'],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 20'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(80));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [['Module / Modul', 'Modulul 12 — Casa, viața la oraș și la țară, O.U.G. 32/2026 (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 47 — O.U.G. 32/2026, recapitulare. TEST CUMULATIV MODULUL 12'], ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'],
  ['Student name / Nume și prenume cursant', ''], ['Score / Punctaj obținut', '_______ / 20'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(120));
add(banner('MODULE 12 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 12 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''], ['Modul / Module', 'Modulul 12 — Casa, viața la oraș și la țară, O.U.G. 32/2026 (9 ore, Sesiunile 45–47)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['45', 'Sesiunea 45 — Chiria și viața la bloc (3 ore)', '', '—', ''],
  ['46', 'Sesiunea 46 — Viața la oraș și la țară, imperfectul (3 ore)', '', '—', ''],
  ['47', 'Sesiunea 47 — O.U.G. 32/2026, recapitulare + TEST CUMULATIV (3 ore)', '', '___ / 20', '']], { size: 18 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 12 — Casa, viața la oraș și la țară, O.U.G. 32/2026, în total 9 ore de curs, și a susținut testul de evaluare consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 12 — Home, Life in the City and in the Countryside, O.U.G. 32/2026, 9 course hours in total, and sat the assessment recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(120));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(key('**12.1**   două · 1.800 lei pe lună · nu · o chirie (1.800 lei)'),
  key('**12.2**   galben · albastru · verde · maro · galben · gri'),
  key('**12.3**   O · S · S · O      **12.4**   toamna · primăvara · vara · iarna'),
  key('**12.5**   eram, locuiam · avea · mergeam · lucra · erați · se jucau'),
  key('**12.6**   A · F · A · A'),
  key('**12.7**   eram · întruna · decât · ne-a · S-ar · Câteodată'),
  H2('Cumulative test — grilă answer key'), P('**TOTAL: 20 de puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
const ans = Q.map(q => q[2]);
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), [ans.slice(0, 10).map((a, i) => `**${i + 1}** – ${a}`), ans.slice(10).map((a, i) => `**${i + 11}** – ${a}`)], { header: false, size: 18 }));
add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile factuale și legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The factual and legal information was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Înregistrarea contractului de închiriere de către proprietar la ANAF în 30 de zile', 'ANAF — ghiduri privind veniturile din cedarea folosinței bunurilor (static.anaf.ro); Codul fiscal', 'Lesson 12.1, test q. 3'],
  ['Asociația de proprietari, administratorul, lista de plată, contestarea în 10 zile', 'Legea nr. 196/2018 — legislatie.just.ro/Public/DetaliiDocument/203233', 'Lesson 12.2, test q. 4'],
  ['Orele de liniște 22:00–08:00 și 13:00–14:00; amendă 500–1.500 lei', 'Legea nr. 61/1991, republicată; Poliția Română — „Care sunt orele de liniște?” (politiaromana.ro)', 'Lesson 12.2, test q. 5'],
  ['Culorile containerelor: albastru hârtie-carton; galben plastic-metal; verde/alb sticlă; maro biodeșeuri; gri/negru rezidual', 'Regulamentele serviciului de salubrizare publicate pe legislatie.just.ro (2025); Ministerul Mediului — întrebări frecvente deșeuri (mmediu.ro)', 'Lesson 12.2, test q. 6–7'],
  ['O.U.G. nr. 32 din 23.04.2026: 6 luni de la începerea activității din REGES-ONLINE; excepția încălcărilor grave; recuperarea cheltuielilor (curs, cazare, transport); schimbarea prin agenția de plasare până la 2 ani; notificarea absenței nejustificate > 3 zile lucrătoare în 5 zile lucrătoare', 'O.U.G. nr. 32/2026 — legislatie.just.ro/Public/DetaliiDocument/309832; textul publicat de IGI (igi.mai.gov.ro); workinromania.gov.ro', 'Lesson 12.6, test q. 15–18'],
  ['Cursul de limba română: minimum 6 luni, cel puțin 6 ore pe săptămână — art. 7 alin. (1) lit. g)', 'O.U.G. nr. 32/2026; Ordinul nr. 655/2026 (legislatie.just.ro/Public/DetaliiDocument/311310)', 'Lesson 12.6'],
  ['Rămânerea cel mult 90 de zile după încetarea contractului, pentru un nou angajator', 'IGI — „Clarificări privind dreptul de ședere al străinilor după încetarea contractului de muncă” (igi.mai.gov.ro); O.U.G. nr. 194/2002', 'Lesson 12.6, test q. 19'],
  ['Lecțiile anterioare citate', 'Modulele 3–11: 3.12, 3.14, 3.15, 5.2, 5.4, 6.4–6.6, 8.1, 8.3, 10.2, 11.6, 11.8–11.10', 'whole module']], { size: 15 }));
add(P('*Anunțul din Fig. 12.1 și sumele din el sunt inventate. Muncile agricole pe anotimpuri sunt informații generale. Accesul direct la textul O.U.G. 32/2026 a fost blocat din mediul de lucru; prevederile au fost verificate prin extrasele oficiale indexate de pe legislatie.just.ro și igi.mai.gov.ro — formatorul confruntă Lecția 12.6 cu textul oficial înainte de predare. / The ad is invented; the O.U.G. provisions were checked through indexed official extracts.*', { size: 15, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 12 — Casa, viața la oraș și la țară, O.U.G. 32/2026',
  styles: { default: { document: { run: { font: 'Arial', size: 20 } } }, paragraphStyles: [
    { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
    { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 12 — CASA, VIAȚA LA ORAȘ ȘI LA ȚARĂ, O.U.G. 32/2026', color: '777777', size: 16 })] })] }) },
    children: S }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm12.docx', b); console.log('written'); });
