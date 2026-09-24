const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, fig, mcq, cell, brd, fotoCell } = L;
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
// two photo placeholders per row, each with a text cell
const fotoGrid = (items, h = 1150) => {
  const W = [1500, 3319, 1500, 3319]; const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    const a = items[i], b = items[i + 1];
    rows.push(new TableRow({ cantSplit: true, height: { value: h, rule: HeightRule.ATLEAST }, children: [fotoCell(a[0], W[0]), cell(a[1], { w: W[1], size: 17, sp: 10 }), fotoCell(b[0], W[2]), cell(b[1], { w: W[3], size: 17, sp: 10 })] }));
  }
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), spacer(80)];
};
// one place per row: photo + what it is / how to get there / what to do
const places = (items) => {
  const W = [1900, 7738];
  const rows = items.map(p => new TableRow({ cantSplit: true, height: { value: 1450, rule: HeightRule.ATLEAST }, children: [fotoCell(p[0], W[0]),
    new d.TableCell({ width: { size: W[1], type: WidthType.DXA }, borders: brd(C.line), margins: { top: 40, bottom: 40, left: 100, right: 100 }, children: [
      new Paragraph({ spacing: { before: 0, after: 30 }, children: [new TextRun({ text: p[1], bold: true, color: C.dk, size: 21 })] }),
      ...[['CE E / WHAT IT IS', p[2]], ['CUM AJUNGI / HOW TO GET THERE', p[3]], ['CE POȚI FACE / WHAT YOU CAN DO', p[4]]].map(([k, v]) =>
        new Paragraph({ spacing: { before: 0, after: 25 }, children: [new TextRun({ text: k + ':  ', bold: true, color: C.gr, size: 15 }), ...L.md(v, { size: 18 })] }))] })] }));
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), spacer(80)];
};

const fotoText = (items) => {
  const W = [2000, 7638];
  const rows = items.map(p => new TableRow({ cantSplit: true, height: { value: 1500, rule: HeightRule.ATLEAST }, children: [fotoCell(p[0], W[0]), cell(p[1], { w: W[1], size: 18 })] }));
  return [new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), spacer(80)];
};

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 11  —  TRAVEL, FREE TIME, WORK AND THE RIGHTS OF FOREIGNERS', { bold: true, color: C.gr, size: 30 }, 100),
  cov('MODULUL 11  —  CĂLĂTORII, TIMP LIBER, MUNCA ȘI DREPTURILE STRĂINILOR', { bold: true, color: C.dk, size: 28 }, 100),
  cov('Nivelul A2 / Level A2', { italics: true, color: C.gr, size: 22 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'], ['A2 — after Module 10', '12 hours · Sessions 41–44 · Weeks 21–22', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with ONE cumulative multiple-choice test (20 questions), signed and dated by the student and kept on file as proof of completion.*']));
add(pageBreak());

// ================= BEFORE YOU START =================
add(H1('Before you start'),
  P('Module 11 is about your life **outside work and at work**. You will travel between cities, spend a free day around Bucharest, talk about animals and visit the places every Romanian knows. Then you will read your **employment contract** and your **payslip**, and learn your **rights as a foreign worker**: the residence permit, the CNP, lost documents, the Labour Inspectorate and how to recognise a scam. There is **no new grammar** — you use what you know.'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**orders and requests** — *Nu te apropia!*', 'Lesson 3.13', 'warnings about animals, safety'],
  ['**the future** — *voi merge, o să merg*', 'Lesson 3.16', 'plans for the weekend, trips'],
  ['**transport in town, tickets, CFR**', 'Lesson 5.3', 'now: between cities'],
  ['**ITM, IGI, the 30-day rule**', 'Lesson 5.2', 'your rights — only what is new'],
  ['**the legal days off**', 'Lesson 5.6', 'not repeated — see the table there'],
  ['**CASS, health insurance**', 'Lesson 8.7', 'the payslip'],
  ['**bank account, card, PIN, scams**', 'Lessons 10.5, 10.6', 'the salary card, fraud'],
  ['**the polite conditional, emails**', 'Lessons 10.1, 10.2', 'at the ticket office, at ITM']], { size: 19 }));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 41**', '3 hours', 'Lesson 11.1 Travelling between cities · 11.2 Free time around Bucharest · 11.3 Animals'],
  ['**Session 42**', '3 hours', 'Lesson 11.4 Tourist sights of Romania · 11.5 The traditional costume and the ia'],
  ['**Session 43**', '3 hours', 'Lesson 11.6 The employment contract and working time · 11.7 The payslip'],
  ['**Session 44**', '3 hours', 'Lesson 11.8 Residence permit and CNP · 11.9 Lost documents, complaints to ITM · 11.10 Scams · 11.11 Recap · **Module 11 test**']], { size: 19 }));
add(box('attn', 'THE LAW IN THIS MODULE', [
  'Sessions 43 and 44 explain rules from the **Labour Code** (Codul muncii, Law no. 53/2003), the **Fiscal Code** and the **foreigners\' law** (O.U.G. 194/2002), checked on official sites (see the last page). Laws change: for your own case, always ask **ITM**, **IGI** or your employer\'s HR office — in writing, and keep a copy.']));
add(pageBreak());

// ================= S41 =================
add(banner('SESSION 41  —  TRAVEL, FREE TIME, ANIMALS', 'SESIUNEA 41 — TRANSPORT, TIMP LIBER, ANIMALE  ·  3 hours'));
add(objectives(['choose a train, a coach or a plane and buy a ticket', 'plan a free day around Bucharest', 'name 16 animals and say simple things about pets and wild animals']));
add(H1('Lesson 11.1  —  Travelling between cities / Călătorii între orașe'));
add(fig('transport', 400, 'Fig. 11.1 — Trei feluri de a călători între orașe / Three ways to travel between cities'));
add(tbl([2000, 2800, 4838], [['', 'WHERE FROM', 'GOOD TO KNOW'],
  ['**trenul**', '**gara** — in Bucharest: **Gara de Nord**', 'CFR Călători and other rail companies. **R** (Regio) stops at every station; **IR** (InterRegio) is faster. Buy online or in the CFR app: the ticket has a **QR code** you show on the train.'],
  ['**autocarul · microbuzul**', '**autogara** (bus station)', 'many private companies; often cheaper and faster to small towns. You buy from the driver, at the counter or online.'],
  ['**avionul**', '**aeroportul** — Bucharest: Henri Coandă (Otopeni)', 'for far cities (Cluj, Iași, Timișoara). Be there early, with your passport or ID and your residence permit.']], { size: 17 }));
add(tbl([4819, 4819], [['AT THE TICKET OFFICE / LA CASA DE BILETE', 'ENGLISH'],
  ['— Bună ziua! Aș vrea **un bilet dus-întors** la Brașov, pentru sâmbătă. (Lesson 10.2)', 'Hello! I\'d like a return ticket to Brasov for Saturday.'],
  ['— Cu trenul de la 8:15? E un IR. **Clasa a doua?**', 'The 8:15 train? It\'s an IR. Second class?'],
  ['— Da. **De la ce linie pleacă?**', 'Yes. Which platform does it leave from?'],
  ['— Linia 5. Aveți **vagonul 3, locul 42**.', 'Platform 5. You have coach 3, seat 42.'],
  ['— **Trebuie să schimb trenul?** — Nu, e direct.', 'Do I have to change trains? — No, it\'s direct.'],
  ['— Anunț: *Trenul IR 1735 are o întârziere de 20 de minute.*', 'Announcement: the train is 20 minutes late.']], { size: 17 }));
add(exercise('11.1', 'Train, coach or plane?', 'Write: gara · autogara · aeroportul · linia · dus-întors · întârziere.'));
add(ex2([['1.  Trenul pleacă din ______________.', '2.  Autocarul pleacă de la ______________.'], ['3.  Avionul pleacă de la ______________.', '4.  Trenul pleacă de la ______________ 5.'], ['5.  Vreau să mă și întorc: un bilet ______________.', '6.  Trenul are 20 de minute ______________.']]));
add(useful([['bilet dus / dus-întors', 'one-way / return ticket'], ['plecări · sosiri', 'departures · arrivals'], ['linia · peronul', 'the track · the platform'], ['vagonul · locul', 'the coach · the seat'], ['a schimba trenul', 'to change trains'], ['întârzierea', 'the delay'], ['direct', 'direct, non-stop'], ['bagajul', 'the luggage']]));

add(H1('Lesson 11.2  —  Free time around Bucharest / Timp liber în jurul Bucureștiului'));
add(P('A free Sunday does not cost much. Many places near Bucharest are free or cheap and easy to reach. Before you go, check the **program de vizitare** (opening hours) and the price of the **bilet de intrare** on the official website.', { size: 19 }));
add(places([
  ['Grădina Zoologică București (Băneasa)', 'Grădina Zoologică București — Băneasa', 'the Bucharest Zoo, in the north of the city, next to the Băneasa forest.', 'inside Bucharest: by bus or by car; plan the route in the STB / Info Trafic app.', 'see the animals of Lesson 11.3, walk in the forest, a day out with children.'],
  ['Palatul Mogoșoaia', 'Palatul Mogoșoaia', 'a palace built by the ruler **Constantin Brâncoveanu** in **1702**, today a **museum** of Brâncovenesc art, with gardens and a lake.', 'about **17 km north** of Bucharest, on the **DN1A** road, in the village of Mogoșoaia.', 'visit the museum, walk in the park and along the lake, take photos.'],
  ['Lacul și Mănăstirea Snagov', 'Snagov', 'a large **lake** in a forest north of Bucharest, with an old **monastery** on an island. Tradition says that Vlad Țepeș (Lesson 11.4) is buried there.', 'north of Bucharest, in Ilfov County — by car, or by train / minibus to the nearby villages.', 'walk, picnic, a boat trip on the lake, visit the monastery.'],
  ['Parcul Natural Comana', 'Parcul Natural Comana', 'a **natural park** of about **25,000 ha** in Giurgiu County: forest, marshes and birds; a protected wetland of international importance (Ramsar).', 'south of Bucharest, in Giurgiu County — by car or with an organised trip.', 'walking trails, bird watching, boat or canoe trips, a picnic in nature.'],
  ['Parcul Regele Mihai I (Herăstrău) / Parcul Tineretului', 'The big parks of Bucharest', '**Parcul Regele Mihai I (Herăstrău)** with its lake, **Cișmigiu** in the centre (Lesson 5.1), **Tineretului**, **Carol**, **IOR (Titan)**.', 'by metro: Aviatorilor (Herăstrău), Izvor (Cișmigiu), Tineretului, Titan (IOR).', 'walk, run, cycle, a boat on the lake, playgrounds, cafés — free entry.']]));
add(tbl([4819, 4819], [['MAKING PLANS / PLANURI', 'ENGLISH'],
  ['**Ce faci duminică?** — **O să merg** la Mogoșoaia. (Lesson 3.16)', 'What are you doing on Sunday? — I\'m going to Mogoșoaia.'],
  ['**Hai la o plimbare în parc!** — **Mi-ar plăcea!** (Lesson 10.2)', 'Let\'s go for a walk in the park! — I\'d love to!'],
  ['**Cât costă intrarea?** · **E deschis lunea?**', 'How much is the entrance? · Is it open on Mondays?'],
  ['**Cum ajung la...?** · **Ce autobuz merge la...?**', 'How do I get to...? · Which bus goes to...?']], { size: 17 }));
add(exercise('11.2', 'Where do they go?', 'Read and write the place.'));
add(ex2([['1.  Ana vrea să vadă un palat din 1702. → ______________', '2.  Ravi vrea să vadă un leu. → ______________'], ['3.  Omar vrea păsări și o plimbare cu canoea. → ______________', '4.  Aziz vrea să alerge lângă un lac, cu metroul. → ______________']]));
add(useful([['timpul liber', 'free time'], ['o excursie · o plimbare', 'a trip · a walk'], ['intrarea gratuită', 'free entry'], ['programul de vizitare', 'opening hours'], ['un picnic', 'a picnic'], ['o plimbare cu barca', 'a boat trip']]));

add(H1('Lesson 11.3  —  Animals / Animalele'));
add(fig('animale', 600, 'Fig. 11.2 — Animale la zoo, animale sălbatice din România, animale de companie / Zoo animals, wild animals in Romania, pets'));
add(tbl([2450, 2369, 2450, 2369], [['PETS / ANIMALE DE COMPANIE', 'ENGLISH', 'WILD ANIMALS / ANIMALE SĂLBATICE', 'ENGLISH'],
  ['**Ai un câine?** — Da, am un câine.', 'Do you have a dog? — Yes, I do.', '**Nu te apropia de urs!**', 'Don\'t go near the bear!'],
  ['**Cum se numește pisica ta?**', 'What is your cat called?', '**Nu hrăni animalele sălbatice!**', 'Don\'t feed wild animals!'],
  ['**Câinele meu nu mușcă.**', 'My dog doesn\'t bite.', '**Atenție, urs în zonă!**', 'Warning, bear in the area!'],
  ['**Îmi plac pisicile.** · **Mi-e frică de câini.**', 'I like cats. · I\'m afraid of dogs.', '**În pădure trăiesc lupi și mistreți.**', 'Wolves and wild boars live in the forest.']], { size: 17 }));
add(box('attn', 'ATTENTION — BEARS IN ROMANIA', [
  'Romania has many **brown bears** (urși bruni), and in mountain areas they sometimes come into villages, near roads and rubbish bins. The authorities warn people by **RO-ALERT** messages on the phone. **Do not** approach a bear, film it or feed it; keep your distance, go inside or leave the area slowly, and **call 112** if a bear is in a village (Romanian Gendarmerie).']));
add(exercise('11.3', 'Which group?', 'Write Z (zoo), S (wild in Romania) or D (pet). Some animals are in two groups.'));
add(ex2([['1.  girafa → ___     2.  pisica → ___', '3.  cerbul → ___     4.  zebra → ___'], ['5.  papagalul → ___     6.  mistrețul → ___', '7.  ursul → ___ / ___     8.  peștele → ___']]));
add(useful([['animalul de companie', 'pet'], ['sălbatic · domestic', 'wild · tame, domestic'], ['a mușca · a lătra', 'to bite · to bark'], ['a hrăni', 'to feed'], ['pădurea', 'the forest'], ['Mi-e frică de...', 'I am afraid of...']]));
add(mistakes([
  ['fi', 'the infinitive: *to be* — after **pot, poți, a, vei, o să**', 'Poți **fi** liniștit. · Vei **fi** acolo?', 'you can say **a fi**'],
  ['fii', '*(you) be!* · *să fii* — for **tu**', '**Fii** atent la tren! · Vreau să **fii** acolo.', 'it goes with **tu**'],
  ['mi-e', 'îmi + e = *îmi este* (feelings)', '**Mi-e** frică de urși. · **Mi-e** dor de casă.', 'you can say **îmi este**'],
  ['mie', 'to me (strong form)', '**Mie** îmi plac pisicile. · Dă-l **mie**!', 'answers *Cui?* (To whom?)']]));
add(hw(41, ['**H41.1**  Plan a free day: write five sentences with *O să merg la... / Hai la...!* and say how you get there.', '**H41.2**  Write about an animal you like (or a pet from your country): what it is, where it lives, what it eats.']));

// ================= S42 =================
add(spacer(160));
add(banner('SESSION 42  —  TOURISM', 'SESIUNEA 42 — TURISM  ·  3 hours'));
add(objectives(['find ten famous places on the map of Romania', 'say where they are and what you can see there', 'know the difference between Vlad Țepeș and Dracula', 'describe the traditional costume and the ia']));
add(H1('Lesson 11.4  —  Tourist sights of Romania / Obiective turistice'));
add(fig('harta', 600, 'Fig. 11.3 — Zece obiective turistice / Ten tourist sights (the regions: Lesson 5.1)'));
add(fotoGrid([
  ['Castelul Peleș', '**1  Castelul Peleș** — Sinaia, Prahova. The royal castle built for **King Carol I** at the end of the 19th century; today a museum in the mountains.'],
  ['Castelul Bran', '**2  Castelul Bran** — near Brașov. A medieval castle on a rock. Famous abroad as „**the castle of Dracula**” — read the box below.'],
  ['Castelul Corvinilor', '**3  Castelul Corvinilor** — Hunedoara. A large Gothic castle of the Corvin (Hunyadi) family, with towers and a bridge.'],
  ['Cetatea Sighișoara', '**4  Sighișoara** — Mureș. A medieval citadel where people still live; the Clock Tower. UNESCO World Heritage since **1999**.'],
  ['Delta Dunării', '**5  Delta Dunării** — Tulcea. Where the Danube meets the Black Sea: channels, lakes, pelicans. UNESCO since **1991**. You travel by boat.'],
  ['Transfăgărășan', '**6  Transfăgărășan (DN7C)** — a mountain road over the Făgăraș Mountains, to Bâlea Lac. The high part is **closed in winter**; check the Police traffic info.'],
  ['Mănăstirea Voroneț', '**7  Mănăstirile pictate din Bucovina** — Suceava. Churches painted **outside**, 15th–16th centuries (Voroneț, Humor, Moldovița, Sucevița...). UNESCO.'],
  ['Salina Turda', '**8  Salina Turda** — Cluj. An old salt mine, now visited deep underground: salt halls, a lake, a wheel.'],
  ['Litoralul, Mamaia', '**9  Litoralul** — the Black Sea coast: Constanța, Mamaia, Eforie, Vama Veche. Beaches in summer.'],
  ['Biserica de lemn, Maramureș', '**10  Bisericile de lemn din Maramureș** — tall wooden churches in the north. UNESCO since **1999**.']], 1100));
add(box('recap', 'VLAD ȚEPEȘ IS NOT DRACULA / VLAD ȚEPEȘ NU ESTE DRACULA', [
  '**Vlad Țepeș** (Vlad the Impaler) was a **real person**: a ruler of **Țara Românească** in the **15th century**, known as a very harsh prince. **Count Dracula** is a **character in a novel**: *Dracula*, written by the Irish writer **Bram Stoker** and published in **1897**. Stoker took the name, but his vampire is **literature, not history**. Bran became „Dracula\'s castle” because it looks like the castle in the book (Bran Castle Museum).']));
add(exercise('11.4', 'Where is it?', 'Look at Fig. 11.3 and write the place.'));
add(ex2([['1.  Castelul regelui Carol I → ______________', '2.  Pelicani, bărci, canale → ______________'], ['3.  Biserici pictate afară → ______________', '4.  Un drum sus pe munte → ______________'], ['5.  O mină de sare → ______________', '6.  Plajă la Marea Neagră → ______________']]));
add(useful([['castelul · cetatea', 'the castle · the citadel'], ['mănăstirea · biserica', 'the monastery · the church'], ['muntele · marea', 'the mountain · the sea'], ['ghidul · excursia', 'the guide · the trip'], ['cazarea', 'accommodation'], ['obiectiv turistic', 'tourist sight']]));

add(H1('Lesson 11.5  —  The traditional costume / Costumul tradițional'));
add(fotoText([
  ['ia românească (bluza cu altiță), de aproape', '**Ia** is the white **embroidered blouse** of the Romanian folk costume, made of cotton, linen, hemp or silk. The embroidery on the shoulder is the **altiță**. In **2022** UNESCO added *the art of the traditional blouse with embroidery on the shoulder (altiță)* of Romania and the Republic of Moldova to the **intangible cultural heritage of humanity**. **24 June** is celebrated as **Ziua Iei** (the Day of the Ia) — a tradition, not a day off.'],
  ['costum popular complet — femeie și bărbat', 'Every region has its own colours and patterns. Romanians wear the costume at **festivals, weddings, national days** (1 December, Lesson 5.6) and to folk shows; many people wear an ia in the city in summer.']]));
add(tbl([2450, 2369, 2450, 2369], [['WOMEN / FEMEI', 'ENGLISH', 'MEN / BĂRBAȚI', 'ENGLISH'],
  ['**ia** (cămașa)', 'embroidered blouse', '**cămașa**', 'the shirt'],
  ['**fota · catrința**', 'wrap-around skirt', '**ițarii**', 'tight white trousers'],
  ['**brâul**', 'woven belt', '**pieptarul · vesta**', 'sheepskin vest · waistcoat'],
  ['**basmaua**', 'headscarf', '**pălăria · căciula**', 'hat · fur cap'],
  ['**opincile**', 'traditional leather shoes', '**opincile**', 'traditional leather shoes']], { size: 17 }));
add(exercise('11.5', 'True or false?', 'Write A (adevărat) or F (fals).'));
add(ex2([['1.  Ia este o bluză brodată. ___', '2.  Altița este pe umăr. ___'], ['3.  24 iunie este zi liberă legală. ___', '4.  Fiecare regiune are costumul ei. ___']]));
add(useful([['costumul popular', 'folk costume'], ['broderia · a broda', 'embroidery · to embroider'], ['modelul · culorile', 'the pattern · the colours'], ['tradițional', 'traditional']]));
add(mistakes([
  ['copii', 'children — **no** article: *doi copii, niște copii*', 'Am doi **copii**.', 'you can say **niște** before it'],
  ['copiii', 'the children — with the article (**-i**)', '**Copiii** mei sunt la școală.', 'you can say **the**: *the children*'],
  ['cea', 'the (feminine) before *mai*, a number or an adjective', '**cea** mai frumoasă mănăstire · **cea** de-a doua', 'no verb after it'],
  ['ce-a', 'ce + a — *what has / what did*', '**Ce-a** spus ghidul? · **Ce-a** văzut?', 'you can say **ce a**']]));
add(hw(42, ['**H42.1**  Choose one sight from Lesson 11.4. Write five sentences: where it is, what you see, how you get there, why you want to go.', '**H42.2**  Describe the traditional costume of your country with five words from Lesson 11.5.']));

// ================= S43 =================
add(spacer(160));
add(banner('SESSION 43  —  WORK: THE CONTRACT AND THE PAYSLIP', 'SESIUNEA 43 — MUNCA: CONTRACTUL ȘI FLUTURAȘUL  ·  3 hours'));
add(objectives(['understand the main parts of your employment contract', 'know the legal rules for probation, working time, overtime and leave', 'read your payslip: gross, contributions, tax, net', 'check your salary every month']));
add(H1('Lesson 11.6  —  The contract and working time / Contractul și timpul de muncă'));
add(P('The **contractul individual de muncă** (CIM) is **written**, in **Romanian**, and signed **before you start work**. You receive **your own copy**. The employer registers it in the electronic register of employees **REGES-ONLINE** (Labour Inspection). No contract = **muncă la negru** (undeclared work) — you have no pension, no health insurance and no proof of your work (Lesson 5.2).', { size: 19 }));
add(tbl([2600, 3700, 3338], [['IN YOUR CONTRACT / ÎN CONTRACT', 'WHAT THE LAW SAYS (Codul muncii)', 'ENGLISH'],
  ['**perioada de probă**', 'maximum **90 calendar days** (execution jobs); 120 days for management jobs', 'probation period'],
  ['**programul de lucru** — durata normală', '**8 hours a day, 40 hours a week**', 'normal working time'],
  ['**orele suplimentare**', 'at the employer\'s request; in total **maximum 48 hours a week**, overtime included', 'overtime'],
  ['— cum se plătesc', 'first **paid time off** in the next **90 days**; if not possible, a **bonus of at least 75%**', 'how overtime is compensated'],
  ['**concediul de odihnă**', 'at least **20 working days** a year, **paid**', 'paid annual leave'],
  ['**sărbătorile legale**', 'days off — the list is in **Lesson 5.6**. If you work that day: **time off in the next 30 days** or a **bonus of at least 100%**', 'public holidays'],
  ['**salariul de bază brut**', 'written in the contract; the payslip shows it every month (Lesson 11.7)', 'gross base salary'],
  ['**felul muncii · locul muncii**', 'your job (funcția) and where you work', 'job title · place of work']], { size: 17 }));
add(tbl([4819, 4819], [['AT WORK / LA LUCRU', 'ENGLISH'],
  ['**Aș putea să văd contractul înainte să semnez?** (Lesson 10.2)', 'Could I see the contract before I sign?'],
  ['**Când se termină perioada de probă?**', 'When does the probation period end?'],
  ['**Cum se plătesc orele suplimentare?**', 'How is overtime paid?'],
  ['**Aș dori să-mi iau concediu în august.** · **Îmi dați o copie, vă rog?**', 'I\'d like to take leave in August. · Can you give me a copy, please?']], { size: 17 }));
add(exercise('11.6', 'Complete with the numbers', 'Write: 8 · 20 · 40 · 48 · 90.'));
add(ex2([['1.  Perioada de probă: maximum ______ de zile.', '2.  Programul normal: ______ ore pe zi.'], ['3.  Pe săptămână: ______ de ore.', '4.  Cu orele suplimentare: maximum ______ de ore.'], ['5.  Concediul de odihnă: minimum ______ de zile lucrătoare.', '']]));
add(useful([['angajatorul · salariatul', 'employer · employee'], ['a semna', 'to sign'], ['tura de zi · de noapte', 'day shift · night shift'], ['pontajul', 'time sheet'], ['cererea de concediu', 'leave request'], ['demisia', 'resignation']]));

add(H1('Lesson 11.7  —  The payslip / Fluturașul de salariu'));
add(fig('fluturas', 560, 'Fig. 11.4 — Un fluturaș de salariu. EXEMPLU cu cifre fictive / A payslip. SAMPLE with invented figures'));
add(tbl([700, 2800, 6138], [['NR.', 'ON THE PAYSLIP', 'WHAT IT MEANS'],
  ['1', '**salariul brut**', 'the salary **before** anything is taken — the one in your contract'],
  ['2', '**CAS — 25%**', 'contribuția de asigurări sociale: for your **pension** (pensia) — also for foreigners who work here'],
  ['3', '**CASS — 10%**', 'contribuția de asigurări sociale de sănătate: your **health insurance** (Lesson 8.7)'],
  ['4', '**impozitul pe venit — 10%**', 'the income tax: **10%** of the gross minus CAS, CASS and the **personal deduction** (deducerea personală), if you have one'],
  ['5', '**salariul net**', 'what **you receive on your card** (Lesson 10.5): gross − CAS − CASS − tax']], { size: 17 }));
add(P('*Example (Fig. 11.4): 7,000 − 1,750 (CAS) − 700 (CASS) = 4,550; tax 10% = 455; net = 4,550 − 455 = 4,095 lei. The figures are invented. Your own payslip may also show a personal deduction, bonuses (sporuri), meal vouchers (tichete de masă) or leave.*', { size: 17 }));
add(box('attn', 'CHECK YOUR PAYSLIP EVERY MONTH / VERIFICĂ FLUTURAȘUL', [
  '☐ your **name** and **CNP** are correct   ☐ the **month** and the **days / hours worked**   ☐ the **overtime** you worked is there   ☐ the **gross** is the one in your contract   ☐ the **net** is the amount that arrived in your **bank account**. Keep all your payslips. If something is wrong, ask the HR office (**resurse umane**) in writing; if it is not solved: **ITM** (Lesson 11.9).']));
add(exercise('11.7', 'Read the payslip', 'Look at Fig. 11.4 and answer.'));
add(ex2([['1.  Cât este salariul brut? → ______________', '2.  Cât plătește pentru pensie? → ______________'], ['3.  Cât este impozitul? → ______________', '4.  Cât primește pe card? → ______________']]));
add(useful([['salariul brut · net', 'gross · net salary'], ['contribuțiile', 'contributions'], ['impozitul', 'the tax'], ['sporul', 'bonus, allowance'], ['tichetele de masă', 'meal vouchers'], ['resursele umane (HR)', 'human resources']]));
add(mistakes([
  ['n-ai', 'nu + ai — *you don\'t have / you haven\'t*', '**N-ai** primit salariul? · **N-ai** semnat?', 'you can say **nu ai**'],
  ['nai', 'the pan flute — a Romanian instrument', 'Cântă la **nai**.', 'it is a thing'],
  ['altfel', 'otherwise · differently — **one word**', 'Semnează azi, **altfel** nu primești banii. · Lucrez **altfel**.', 'you can say **în alt mod**'],
  ['alt fel', 'another kind — **de** comes after it', 'Am un **alt fel** de contract.', 'followed by **de**']]));
add(hw(43, ['**H43.1**  Find in your contract (or ask HR): your probation period, your working hours, your leave days. Write them in Romanian.', '**H43.2**  Look at your last payslip. Write: brut ___, CAS ___, CASS ___, impozit ___, net ___. Is the net the same as in your bank app?']));

// ================= S44 =================
add(pageBreak());
add(banner('SESSION 44  —  THE RIGHTS OF FOREIGNERS, RECAP AND TEST', 'SESIUNEA 44 — DREPTURILE STRĂINILOR, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['explain how the residence permit for work is extended', 'use your CNP', 'know what to do if you lose your documents', 'complain to ITM', 'recognise a scam']));
add(H1('Lesson 11.8  —  The residence permit and the CNP / Permisul de ședere și CNP-ul'));
add(tbl([2800, 6838], [['THE PRINCIPLE', 'WHAT IT MEANS FOR YOU (IGI)'],
  ['**the chain of documents**', 'the employer gets the **aviz de muncă** (work permit) → you get the **long-stay visa for work** → in Romania, **IGI** gives you the **permis de ședere** (residence permit) for work'],
  ['**the extension (prelungirea)**', 'you apply at IGI **at least 30 days before the permit expires** (Lesson 5.2). A late application is a **fine** (100–500 lei)'],
  ['**the conditions**', 'a **full-time** contract, **registered** in the employee register, with a salary **at least the national minimum gross salary**; plus the documents on IGI\'s list'],
  ['**changes**', 'a new **address**, a new **employer**, a new **passport**, marriage — **inform IGI**; ask IGI before you change employer'],
  ['**always**', 'carry the permit, check the **expiry date**, keep copies; appointments and forms: **portaligi.mai.gov.ro**']], { size: 17 }));
add(P('**The CNP** (*codul numeric personal*) has **13 digits**. For foreigners it is given by **IGI** and it is written **on your residence permit**. You need it at the bank (Lesson 10.5), the doctor (Lesson 8.7), your employer, ANAF and the town hall. Do not publish it online and give it only to institutions.', { size: 19 }));
add(tbl([4819, 4819], [['AT IGI / LA IGI', 'ENGLISH'],
  ['**Aș dori să-mi prelungesc dreptul de ședere.**', 'I would like to extend my right of residence.'],
  ['**Permisul meu expiră pe 15 noiembrie.** · **Ce acte trebuie?**', 'My permit expires on 15 November. · Which documents are needed?'],
  ['**Mi-am schimbat adresa / angajatorul.**', 'I have changed my address / my employer.'],
  ['**Care este CNP-ul dumneavoastră?** — E pe permis.', 'What is your CNP? — It\'s on the permit.']], { size: 17 }));
add(exercise('11.8', 'True or false?', 'Write A or F.'));
add(ex2([['1.  Cer prelungirea cu cel puțin 30 de zile înainte. ___', '2.  CNP-ul are 10 cifre. ___'], ['3.  CNP-ul este scris pe permisul de ședere. ___', '4.  Dacă schimb adresa, nu spun nimănui. ___']]));
add(useful([['permisul de ședere', 'residence permit'], ['prelungirea', 'the extension'], ['avizul de muncă', 'work permit'], ['expiră pe...', 'it expires on...'], ['programarea online', 'online appointment'], ['CNP-ul', 'personal numeric code']]));

add(H1('Lesson 11.9  —  Lost documents and complaints / Acte pierdute și reclamații'));
add(fig('acte', 600, 'Fig. 11.5 — Ce faci dacă pierzi actele / What to do if you lose your documents'));
add(P('**Passport lost or stolen?** Declare it to the **Police** — IGI says within **48 hours**. With the police paper go to your **embassy** for a new passport, then to **IGI**. **Residence permit lost?** Declare it and ask IGI for a new one — not declaring it in time is also a **fine**. **Bank card?** Block it at once (Lesson 10.6).', { size: 19 }));
add(tbl([2800, 6838], [['PROBLEM AT WORK', 'WHERE TO GO — ITM (Inspectoratul Teritorial de Muncă)'],
  ['you are **not paid**, or paid less', 'send a **petiție** (complaint) to the **ITM of the county** where you work'],
  ['you work **without a contract**', 'the same — undeclared work is illegal for the employer'],
  ['too many hours, no leave, unsafe work', 'the same — also an email to HR first, and keep a copy'],
  ['**how**', 'online on **inspectiamuncii.ro** („Petiții și sesizări”), by post, by e-mail or at the ITM office; write in Romanian (Lesson 10.1)'],
  ['**what happens**', 'ITM must answer in **30 days**; the inspectors must keep your **identity confidential**']], { size: 17 }));
add(tbl([9638], [['**A COMPLAINT TO ITM — MODEL**'], ['Către Inspectoratul Teritorial de Muncă ________.  **Subsemnatul** Ravi Kumar, cetățean nepalez, angajat la SC ________ SRL, **vă aduc la cunoștință** că **nu am primit salariul** pe lunile iulie și august 2026. **Vă rog să verificați** situația. Atașez contractul și fluturașii. Data ________   Semnătura ________']], { size: 17 }));
add(exercise('11.9', 'Where do you go?', 'Write: Poliția · ambasada · IGI · ITM · banca.'));
add(ex2([['1.  Nu am primit salariul. → ______________', '2.  Mi-au furat pașaportul. → ______________ (first)'], ['3.  Vreau un pașaport nou. → ______________', '4.  Am pierdut cardul. → ______________'], ['5.  Vreau un permis de ședere nou. → ______________', '6.  Lucrez fără contract. → ______________']]));
add(useful([['am pierdut · mi-au furat', 'I lost · they stole'], ['dovada', 'the proof, certificate'], ['petiția · reclamația', 'complaint'], ['a depune', 'to submit'], ['vă aduc la cunoștință', 'I inform you'], ['munca la negru', 'undeclared work']]));

add(H1('Lesson 11.10  —  Scams / Înșelătoriile'));
add(fig('alarme', 560, 'Fig. 11.6 — Trei semnale de alarmă / Three warning signs'));
add(tbl([2400, 3700, 3538], [['THE SCAM', 'WHAT YOU SEE', 'WHAT YOU DO'],
  ['**a false job agency**', 'someone asks you for **money** for a job, a contract, a „permit”, a visa. The Labour Code says a **temporary work agency may not charge workers** for recruitment or for the contract', '**do not pay**; ask for the company\'s name and check it; ask **ITM**'],
  ['**calls and messages**', 'a „bank”, „police”, „IGI” or „courier” asks for your **PIN, card code, SMS code, password**, or sends a link', 'banks and institutions **never** ask for codes (Lesson 10.6); hang up, call the bank on its own number; report to **DNSC — 1911**'],
  ['**papers you do not understand**', 'a paper in Romanian you cannot read; a **blank page** to sign; a „resignation” without a date', '**do not sign**; ask for time and a translation; show it to someone you trust'],
  ['**your passport**', 'someone wants to **keep** your original passport or permit', 'your documents are **yours** — give a copy, keep the original']], { size: 17 }));
add(tbl([4819, 4819], [['SAY NO / SPUNE NU', 'ENGLISH'],
  ['**Nu plătesc pentru un loc de muncă.**', 'I don\'t pay for a job.'],
  ['**Nu dau codul nimănui.** · **Închid și sun eu la bancă.**', 'I don\'t give the code to anyone. · I\'ll hang up and call the bank.'],
  ['**Nu semnez acum. Aș vrea să citesc acasă.**', 'I won\'t sign now. I\'d like to read it at home.'],
  ['**Vă dau o copie, originalul rămâne la mine.**', 'I\'ll give you a copy; the original stays with me.']], { size: 17 }));
add(exercise('11.10', 'Scam or not?', 'Write DA (a scam) or NU.'));
add(ex2([['1.  „Plătești 500 de euro și primești contract.” ___', '2.  Banca îți cere codul primit pe SMS. ___'], ['3.  HR îți dă contractul să-l citești acasă. ___', '4.  „Semnează aici, pe foaia goală.” ___']]));
add(useful([['înșelătoria · frauda', 'scam · fraud'], ['a înșela', 'to cheat'], ['un link suspect', 'a suspicious link'], ['a raporta', 'to report'], ['foaia goală', 'blank page'], ['originalul · copia', 'the original · the copy']]));

add(H1('Lesson 11.11  —  Recap / Recapitulare'));
add(tbl([3600, 3800, 2238], [['TOPIC', 'EXAMPLE', 'LESSON'],
  ['gara · autogara · aeroportul · bilet dus-întors', 'Aș vrea un bilet dus-întors.', '11.1'],
  ['Mogoșoaia 1702 · Comana · Snagov · parcurile', 'O să merg duminică la Mogoșoaia.', '11.2'],
  ['16 animale · Nu te apropia de urs! · 112', 'Mi-e frică de urși.', '11.3'],
  ['10 obiective · Vlad Țepeș ≠ Dracula (Stoker, 1897)', 'Vreau să văd Delta Dunării.', '11.4'],
  ['ia · altița · 24 iunie', 'Ia este o bluză brodată.', '11.5'],
  ['probă 90 · 8 / 40 · max 48 · 20 zile · 75% · 100%', 'Cum se plătesc orele suplimentare?', '11.6'],
  ['brut − CAS 25% − CASS 10% − impozit 10% = net', 'Salariul net vine pe card.', '11.7'],
  ['prelungirea: 30 de zile înainte · CNP pe permis', 'Aș dori să-mi prelungesc dreptul de ședere.', '11.8'],
  ['Poliția · ambasada · IGI · ITM', 'Nu am primit salariul.', '11.9'],
  ['nu plătesc · nu dau codul · nu semnez · DNSC 1911', 'Nu semnez acum.', '11.10']], { size: 17 }));
add(mistakes([
  ['mi-a', 'îmi + a — *(he / she) has ... me*', 'Șeful **mi-a** dat salariul. · Cine **mi-a** cerut codul?', 'you can say **mi-au** for many'],
  ['mia', 'the thousand · *a mia* = the thousandth', '**Mia** de lei a dispărut. · pentru **a mia** oară', 'it is a number'],
  ['deloc', 'not at all — **one word**', 'Nu e **deloc** greu. · Nu dorm **deloc**.', 'after **nu**'],
  ['de loc', 'from (a place) — *where you were born*', 'Sunt **de loc** din Nepal.', 'followed by **din**']]));
add(exercise('11.11', 'Everything together', 'Circle the correct form.'));
add(ex2([['1.  ( Fi  /  Fii ) atent la bagaje!', '2.  Am doi ( copii  /  copiii ).'], ['3.  ( Mie  /  Mi-e ) frică de câini.', '4.  ( N-ai  /  Nai ) primit fluturașul?'], ['5.  Nu e ( deloc  /  de loc ) greu.', '6.  ( Ce-a  /  Cea ) spus inspectorul?']]));
add(hw(44, ['**H44.1**  Write the dates of your documents: when your passport and your permit expire, and the date by which you must ask for the extension.', '**H44.2**  Write three sentences you would say to a scammer on the phone, with *Nu...*.']));

// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 44, fișa de evidență a Modulului 11, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — MODULUL 11', 'MODULE 11 — CUMULATIVE TEST  ·  grilă, 20 de întrebări, 20 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  ['Trenul pleacă din:', ['autogară', 'gară', 'aeroport', 'port'], 'b'],
  ['„Un bilet dus-întors” înseamnă:', ['a one-way ticket', 'a return ticket', 'a seat', 'a delay'], 'b'],
  ['Palatul Mogoșoaia a fost construit de Constantin Brâncoveanu în:', ['1602', '1702', '1859', '1918'], 'b'],
  ['Parcul Natural Comana este în județul:', ['Ilfov', 'Prahova', 'Giurgiu', 'Tulcea'], 'c'],
  ['Vezi un urs în sat. Ce faci?', ['îl hrănești', 'îl filmezi de aproape', 'te apropii', 'păstrezi distanța și suni la 112'], 'd'],
  ['Care animal este de companie?', ['mistrețul', 'papagalul', 'lupul', 'cerbul'], 'b'],
  ['Castelul Peleș este la:', ['Sinaia', 'Hunedoara', 'Sighișoara', 'Turda'], 'a'],
  ['Dracula este:', ['un rege al României', 'un personaj dintr-un roman de Bram Stoker', 'Vlad Țepeș', 'un castel'], 'b'],
  ['Unde sunt mănăstirile pictate pe dinafară?', ['în Delta Dunării', 'în Bucovina', 'la Constanța', 'la Turda'], 'b'],
  ['Altița este:', ['o fustă', 'broderia de pe umărul iei', 'o pălărie', 'un pantof'], 'b'],
  ['Perioada de probă pentru un post de execuție este de maximum:', ['30 de zile', '60 de zile', '90 de zile', '1 an'], 'c'],
  ['Durata normală a timpului de muncă este:', ['6 ore pe zi', '8 ore pe zi, 40 pe săptămână', '10 ore pe zi', '12 ore pe zi'], 'b'],
  ['Concediul de odihnă este de cel puțin:', ['10 zile lucrătoare', '15 zile lucrătoare', '20 de zile lucrătoare', '30 de zile lucrătoare'], 'c'],
  ['CAS (25%) este contribuția pentru:', ['sănătate', 'pensie', 'impozit', 'bancă'], 'b'],
  ['Salariul net este:', ['salariul din contract, înainte de taxe', 'suma pe care o primești pe card', 'impozitul', 'CASS'], 'b'],
  ['Prelungirea dreptului de ședere se cere la IGI:', ['cu cel puțin 30 de zile înainte să expire', 'după ce expiră', 'o dată la 10 ani', 'la ITM'], 'a'],
  ['CNP-ul unui străin este scris:', ['pe pașaport', 'pe permisul de ședere', 'pe card', 'pe fluturaș, numai'], 'b'],
  ['Nu ai primit salariul. Unde depui o petiție?', ['la IGI', 'la ITM', 'la ambasadă', 'la gară'], 'b'],
  ['O „agenție” îți cere bani ca să-ți dea un contract. Este:', ['normal', 'o înșelătorie — nu plătești', 'obligatoriu', 'o taxă de la IGI'], 'b'],
  ['Care propoziție este scrisă corect?', ['Mie frică de urși.', 'Mi-e frică de urși.', 'Mi e frică de urși.', 'Mi-ie frică de urși.'], 'b'],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 20'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(80));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [['Module / Modul', 'Modulul 11 — Călătorii, timp liber, munca și drepturile străinilor (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 44 — Drepturile străinilor, recapitulare. TEST CUMULATIV MODULUL 11'], ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'],
  ['Student name / Nume și prenume cursant', ''], ['Score / Punctaj obținut', '_______ / 20'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(120));
add(banner('MODULE 11 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 11 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''], ['Modul / Module', 'Modulul 11 — Călătorii, timp liber, munca și drepturile străinilor (12 ore, Sesiunile 41–44)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['41', 'Sesiunea 41 — Transport între orașe, timp liber, animale (3 ore)', '', '—', ''],
  ['42', 'Sesiunea 42 — Obiective turistice, costumul tradițional (3 ore)', '', '—', ''],
  ['43', 'Sesiunea 43 — Contractul de muncă, timpul de muncă, fluturașul (3 ore)', '', '—', ''],
  ['44', 'Sesiunea 44 — Drepturile străinilor, recapitulare + TEST CUMULATIV (3 ore)', '', '___ / 20', '']], { size: 18 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 11 — Călătorii, timp liber, munca și drepturile străinilor, în total 12 ore de curs, și a susținut testul de evaluare consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 11 — Travel, Free Time, Work and the Rights of Foreigners, 12 course hours in total, and sat the assessment recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(120));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(key('**11.1**   gara · autogara · aeroportul · linia · dus-întors · întârziere'),
  key('**11.2**   Palatul Mogoșoaia · Grădina Zoologică (Băneasa) · Parcul Natural Comana · Parcul Regele Mihai I (Herăstrău) / Tineretului'),
  key('**11.3**   Z · D · S · Z · D · S · S / Z · D'),
  key('**11.4**   Castelul Peleș · Delta Dunării · Mănăstirile din Bucovina · Transfăgărășan · Salina Turda · Litoralul'),
  key('**11.5**   A · A · F · A      **11.6**   90 · 8 · 40 · 48 · 20'),
  key('**11.7**   7.000 lei · 1.750 lei · 455 lei · 4.095 lei      **11.8**   A · F · A · F'),
  key('**11.9**   ITM · Poliția · ambasada · banca · IGI · ITM      **11.10**   DA · DA · NU · DA'),
  key('**11.11**   Fii · copii · Mi-e · N-ai · deloc · Ce-a'),
  H2('Cumulative test — grilă answer key'), P('**TOTAL: 20 de puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
const ans = Q.map(q => q[2]);
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), [ans.slice(0, 10).map((a, i) => `**${i + 1}** – ${a}`), ans.slice(10).map((a, i) => `**${i + 11}** – ${a}`)], { header: false, size: 18 }));
add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile factuale și legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The factual and legal information was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Bilete CFR online / în aplicație, cu cod QR', 'CFR Călători — „Cum cumpăr bilete online”, Condiții generale de transport (cfrcalatori.ro)', 'Lesson 11.1'],
  ['Palatul Mogoșoaia: Constantin Brâncoveanu, 1702; muzeu; 17 km nord de București, DN1A', 'Institutul Național al Patrimoniului (patrimoniu.ro); Muzeul Național al Palatelor Brâncovenești (palatebrancovenesti.ro)', 'Lesson 11.2, test q. 3'],
  ['Parcul Natural Comana: jud. Giurgiu, 24.963 ha, sit Ramsar din 2011', 'ANANP — Parcul Natural Comana (ananp.gov.ro)', 'Lesson 11.2, test q. 4'],
  ['Urși în localități: nu vă apropiați, nu hrăniți, sunați la 112; RO-ALERT', 'Jandarmeria Română; IGSU — ISU județene (igsu.ro)', 'Lesson 11.3, test q. 5'],
  ['UNESCO: Delta Dunării (1991), Bisericile din Moldova (1993, 2010), Sighișoara (1999), Bisericile de lemn din Maramureș (1999)', 'UNESCO World Heritage Centre (whc.unesco.org/en/statesparties/ro); Ministerul Culturii', 'Lesson 11.4, test q. 9'],
  ['Transfăgărășan: sectorul înalt închis iarna', 'Poliția Română — Info trafic (politiaromana.ro)', 'Lesson 11.4'],
  ['Dracula — romanul lui Bram Stoker, 1897; diferența față de Vlad Țepeș', 'Muzeul Castelul Bran (bran-castle.com)', 'Lesson 11.4, test q. 8'],
  ['Ia cu altiță — UNESCO 2022; 24 iunie, Ziua Iei', 'UNESCO Intangible Cultural Heritage (ich.unesco.org); Ministerul Culturii (cultura.ro)', 'Lesson 11.5, test q. 10'],
  ['Probă 90/120 zile; 8 h/zi, 40 h/săpt.; max. 48 h; ore suplimentare: timp liber în 90 de zile sau spor min. 75%; concediu min. 20 zile lucrătoare; sărbători lucrate: timp liber în 30 de zile sau spor min. 100%', 'Legea nr. 53/2003 — Codul muncii, republicată (legislatie.just.ro/Public/DetaliiDocument/128647); Inspecția Muncii — „Timpul de muncă și de odihnă”', 'Lesson 11.6, test q. 11–13'],
  ['Registrul REGES-ONLINE (înlocuiește REVISAL)', 'H.G. nr. 295/2025; Inspecția Muncii (reges.inspectiamuncii.ro)', 'Lesson 11.6'],
  ['CAS 25%, CASS 10%, impozit pe venit 10%', 'Legea nr. 227/2015 — Codul fiscal, art. 138 și urm.; Ministerul Finanțelor / ANAF (mfinante.gov.ro, anaf.ro)', 'Lesson 11.7, test q. 14–15'],
  ['Prelungirea dreptului de ședere în scop de muncă: cu cel puțin 30 de zile înainte; amendă 100–500 lei; condiții (normă întreagă, salariu minim)', 'IGI — „Informare privind prelungirea dreptului de ședere temporară în scop de muncă”, „Sancționarea contravențională” (igi.mai.gov.ro); O.U.G. nr. 194/2002', 'Lesson 11.8, test q. 16'],
  ['CNP atribuit străinilor de IGI; 13 cifre', 'IGI (igi.mai.gov.ro); MAI — structura CNP (mai.gov.ro)', 'Lesson 11.8, test q. 17'],
  ['Pierderea documentelor de trecere a frontierei: declarare la poliție în 48 de ore; amendă pentru nedeclararea pierderii permisului', 'IGI — „Sancționarea contravențională” (igi.mai.gov.ro)', 'Lesson 11.9'],
  ['Petiții la ITM: online, poștă, e-mail, ghișeu; răspuns în 30 de zile; confidențialitate', 'Inspecția Muncii — „Petiții și sesizări” (inspectiamuncii.ro)', 'Lesson 11.9, test q. 18'],
  ['Agentul de muncă temporară nu percepe taxe de la salariați', 'Codul muncii — munca prin agent de muncă temporară; Inspecția Muncii (reges.inspectiamuncii.ro)', 'Lesson 11.10, test q. 19'],
  ['DNSC — numărul 1911 pentru raportarea fraudelor informatice', 'Directoratul Național de Securitate Cibernetică (dnsc.ro)', 'Lesson 11.10'],
  ['Lecțiile anterioare citate', 'Modulele 3–10: 3.13, 3.16, 5.1, 5.2, 5.3, 5.6, 8.7, 10.1, 10.2, 10.5, 10.6', 'whole module']], { size: 15 }));
add(P('*Informații culturale generale, nu verificate pe surse oficiale: descrierile scurte pentru Peleș, Bran, Castelul Corvinilor, Salina Turda, litoral, Grădina Zoologică Băneasa și Snagov (inclusiv tradiția despre Vlad Țepeș). Stațiile de metrou sunt cele cunoscute; traseele se verifică în aplicațiile de transport. Cifrele din fluturaș sunt fictive. / General cultural information; figures on the payslip are invented.*', { size: 15, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 11 — Călătorii, timp liber, munca și drepturile străinilor',
  styles: { default: { document: { run: { font: 'Arial', size: 20 } } }, paragraphStyles: [
    { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
    { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 11 — CĂLĂTORII, TIMP LIBER, MUNCA ȘI DREPTURILE STRĂINILOR', color: '777777', size: 16 })] })] }) },
    children: S }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm11.docx', b); console.log('written'); });
