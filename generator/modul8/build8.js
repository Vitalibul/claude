const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, foto, fig, mcq, cell } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Header } = d;

const S = [];
const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 8  —  SUPERMARKET, MARKET, PHARMACY AND DOCTOR', { bold: true, color: C.gr, size: 30 }, 100),
  cov('MODULUL 8  —  SUPERMARKET, PIAȚĂ, FARMACIE ȘI MEDIC', { bold: true, color: C.dk, size: 28 }, 100),
  cov('Finalul Nivelului A1 / The end of Level A1', { italics: true, color: C.gr, size: 22 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'],
  ['A1 — after Module 7 · end of A1', '12 hours · Sessions 29–32 · Weeks 15–16', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with the LEVEL A1 CUMULATIVE TEST (50 multiple-choice questions, Modules 1–8), signed and dated by the student and kept on file as proof of completion of Level A1.*']));
add(pageBreak());

// ================= BEFORE YOU START =================
add(H1('Before you start'),
  P('Module 8 is the last module of **Level A1**. It takes your Romanian to four places you cannot avoid: the **supermarket**, the **market**, the **pharmacy** and the **doctor**. You will also learn how health insurance and sick leave work for an employee, and what the Constitution says about your rights, your obligations and freedom of religion. The module ends with the **Level A1 test**.'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers, money · de** after 20', 'Lesson 2.5', '200 de grame, 2,50 lei, 20 de ouă'],
  ['**colours** — the adjective agrees', 'Lessons 2.4, 4.4', 'un măr roșu, o pară verde'],
  ['**îmi place / îmi plac** · short pronouns', 'Lesson 2.10', 'mă doare / mă dor works the same way'],
  ['**orders and requests** · **aș dori**', 'Lessons 3.13, 4.4', 'Îmi dați..., Deschideți gura!'],
  ['**the past** — am lucrat', 'Lesson 3.14', 'Am răcit. Am căzut.'],
  ['**112** · **farmacia de gardă**', 'Lessons 5.2, 5.3', 'emergencies, the pharmacy at night'],
  ['**at the shop** — casa, bonul, reducerea, punga', 'Lesson 6.3', 'the supermarket'],
  ['**mă simt · mi-e** frig / cald', 'Lessons 3.12, 7.5', 'Nu mă simt bine. Mi-e frig.']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 29**', '3 hours', 'Lesson 8.1 Fruit and vegetables · Lesson 8.2 Basic foods and quantities · Lesson 8.3 At the market and at the supermarket'],
  ['**Session 30**', '3 hours', 'Lesson 8.4 The human body · Lesson 8.5 At the pharmacy'],
  ['**Session 31**', '3 hours', 'Lesson 8.6 At the doctor · Lesson 8.7 Health insurance, the family doctor, sick leave'],
  ['**Session 32**', '3 hours', 'Lesson 8.8 Rights, obligations, freedom of religion · Lesson 8.9 Level A1 recap · **Level A1 cumulative test**']], { size: 19 }));
add(box('recap', 'NO NEW GRAMMAR IN THIS MODULE', [
  'All the grammar was taught in **Modules 2 and 3**. Blue **RECAP** boxes tell you where to look back. Two new phrase patterns: **un kilogram de...** (Lesson 8.2) and **mă doare / mă dor** (Lesson 8.5) — they work like patterns you already know.',
  '**New in this module:** words and phrases — fruit, vegetables, food, quantities, the market, the supermarket, the body, symptoms, the pharmacy, the doctor, health papers, rights and religions.']));
add(pageBreak());

// ================= SESSION 29 =================
add(banner('SESSION 29  —  AT THE SUPERMARKET AND AT THE MARKET', 'SESIUNEA 29 — LA SUPERMARKET ȘI LA PIAȚĂ  ·  3 hours'));
add(objectives([
  'name 16 fruits and 16 vegetables, with un / o',
  'name the basic foods and ask for a quantity: **un kilogram de roșii, o sticlă de ulei**',
  'buy at the market: **Cât costă kilogramul? Îmi dați...**',
  'find your way in a supermarket, read the price tags, the promotions and the receipt']));
add(H1('Lesson 8.1  —  Fruit and vegetables / Fructe și legume'));
add(P('**Fructele** = fruit · **legumele** = vegetables. Learn every word with **un** or **o** (Lesson 2.1). **Struguri, cireșe, ciuperci, mazăre** are almost always used in the plural or without un / o.'));
add(fig('fructe', 560, 'Fig. 8.1 — Fructe / Fruit'));
add(fig('legume', 560, 'Fig. 8.2 — Legume / Vegetables'));
add(box('recap', 'RECAP — THE COLOUR AGREES  (Lessons 2.4 and 4.4)', [
  '**un** măr **roșu** · **o** pară **verde** · **o** banană **galbenă** · niște struguri **negri** / **albi** · **roșii** coapte (ripe tomatoes) · ardei **verzi**. Note: **o roșie** = a tomato, **roșie** = red (feminine).']));
add(exercise('8.1', 'What colour is it?', 'Write the colour so that it agrees. Then say: Îmi plac... / Nu-mi plac... (Lesson 2.10).'));
add(tbl([4819, 4819], [
  ['1.  O banană coaptă este ______________.', '2.  Castravetele este ______________.'],
  ['3.  Portocala este ______________.', '4.  Vânăta este ______________ închis (dark).'],
  ['5.  Morcovii sunt ______________.', '6.  Lămâia este ______________.']], { header: false }));
add(useful([
  ['proaspăt / proaspătă', 'fresh'], ['copt / coaptă', 'ripe'],
  ['românesc / din import', 'Romanian / imported'], ['de sezon', 'in season'],
  ['Sunt dulci?', 'Are they sweet?'], ['Pot să gust?', 'Can I taste?'],
  ['o legătură de pătrunjel / mărar', 'a bunch of parsley / dill'], ['verdețuri', 'fresh herbs']]));

add(H1('Lesson 8.2  —  Basic foods and quantities / Alimente de bază și cantități'));
add(tbl([1700, 1512, 1700, 1512, 1700, 1514], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**pâine**', 'bread', '**lapte**', 'milk', '**ouă** (un ou)', 'eggs'],
  ['**brânză**', 'cheese', '**unt**', 'butter', '**iaurt**', 'yoghurt'],
  ['**carne** de pui', 'chicken', '**carne** de porc / vită', 'pork / beef', '**pește**', 'fish'],
  ['**orez**', 'rice', '**făină**', 'flour', '**paste**', 'pasta'],
  ['**ulei**', 'cooking oil', '**zahăr**', 'sugar', '**sare**', 'salt'],
  ['**apă** plată / minerală', 'still / sparkling water', '**cafea · ceai**', 'coffee · tea', '**condimente**', 'spices']], { size: 18 }));
add(fig('cantitati', 560, 'Fig. 8.3 — Cantități / Quantities'));
add(tipar('TIPAR — how much? / cât?', ['QUANTITY', '+', 'de', '+', 'FOOD', '=', 'un kilogram de roșii']));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['un kilogram de cartofi', 'a kilo of potatoes', 'jumătate de kilogram de brânză', 'half a kilo of cheese'],
  ['200 de grame de măsline', '200 g of olives', 'un kilogram și jumătate de mere', '1.5 kg of apples'],
  ['o bucată de pâine', 'a loaf / piece of bread', 'un pachet de unt', 'a packet of butter'],
  ['o sticlă de ulei', 'a bottle of oil', 'o cutie de lapte', 'a carton of milk'],
  ['un ou · zece ouă', 'one egg · ten eggs', 'o legătură de pătrunjel', 'a bunch of parsley']], { size: 18 }));
add(box('recap', 'RECAP — NUMBERS AND MONEY  (Lesson 2.5 and Lesson 6.3)', [
  'From 20 up you add **de**: **200 de grame, 20 de ouă**, but **5 ouă, 500 de grame**. Prices: **5,49 lei** = cinci lei și patruzeci și nouă de bani (comma, not point). **kg** = kilogram (Module 1, Lesson 1.4).']));
add(exercise('8.2', 'Which food?', 'Complete with a food that fits: ulei · unt · lapte · pâine · ouă · pătrunjel.'));
add(tbl([4819, 4819], [
  ['1.  o sticlă de ______________', '2.  un pachet de ______________'],
  ['3.  o cutie de ______________', '4.  o bucată de ______________'],
  ['5.  zece ______________', '6.  o legătură de ______________']], { header: false }));
add(useful([
  ['Cât cântărește?', 'How much does it weigh?'], ['Mai puțin / mai mult', 'a bit less / a bit more'],
  ['Atât, mulțumesc.', 'That\'s all, thank you.'], ['o felie / felii', 'a slice / slices'],
  ['la kilogram · la bucată', 'by the kilo · by the piece'], ['Expiră pe...', 'It expires on...']]));

add(H1('Lesson 8.3  —  At the market and at the supermarket / La piață și la supermarket'));
add(H2('At the market / La piață'));
add(P('**Piața** (the open-air market) sells fruit, vegetables, cheese and meat, often from local farmers. The seller weighs the food on the scale — **cântarul**. Prices are usually **per kilogram**.', { size: 19 }));
add(tbl([4819, 4819], [['ROMANIAN', 'ENGLISH'],
  ['C: Bună ziua! Cât costă kilogramul de roșii?', 'Hello! How much is a kilo of tomatoes?'],
  ['V: Opt lei kilogramul. Sunt românești, de la țară.', 'Eight lei a kilo. They are Romanian, from the countryside.'],
  ['C: Îmi dați un kilogram și jumătate, vă rog.', 'Give me 1.5 kilos, please. (Îmi dați = Dați-mi, Lesson 3.13)'],
  ['V: Poftiți. Un kilogram și șase sute de grame. E bine?', 'Here you are. 1.6 kg. Is that OK?'],
  ['C: Da, e bine. Și o legătură de mărar. Cât fac toate?', 'Yes, fine. And a bunch of dill. How much is it all?'],
  ['V: Paisprezece lei și optzeci de bani.', 'Fourteen lei eighty.'],
  ['C: Poftiți cincisprezece lei. Păstrați restul.', 'Here are fifteen lei. Keep the change.']], { size: 19 }));
add(H2('At the supermarket / La supermarket'));
add(tbl([2600, 2219, 2600, 2219], [['IN THE SHOP', 'ENGLISH', 'IN THE SHOP', 'ENGLISH'],
  ['**raionul** de legume-fructe', 'fruit & veg section', '**raionul** de lactate', 'dairy section'],
  ['**raionul** de carne · de pâine', 'meat · bakery section', '**raionul** de băuturi', 'drinks section'],
  ['**coșul** · **căruciorul**', 'basket · trolley', '**casa** · **casa self-service**', 'checkout · self-checkout'],
  ['**cântarul** (la legume)', 'the scale (weigh it yourself)', '**cardul de fidelitate**', 'loyalty card']], { size: 18 }));
add(fig('bon', 370, 'Fig. 8.4 — Bonul fiscal și etichetele de preț (exemplu) / The receipt and price tags (example)'));
add(box('recap', 'RECAP — IN THE SHOP  (Lesson 6.3)', [
  '**reducerea** — the discount · **bonul (fiscal)** — the receipt · **punga** — the bag: *Doriți o pungă?* · **casa** — the checkout: *Plătiți cash sau cu cardul?*',
  'New on the tags: **preț / kg** — price per kilo · **preț vechi / preț nou** — old / new price · **1 + 1 gratis** — buy one, get one free · **ofertă · promoție** — special offer.']));
add(exercise('8.3', 'Read the receipt and the tags', 'Look at Fig. 8.4 and answer.'));
add(tbl([4819, 4819], [
  ['1.  Cât costă un kilogram de mere? — ______ lei.', '2.  Câte kilograme de roșii sunt pe bon? — ______'],
  ['3.  Cât este reducerea la ulei? — ______ %', '4.  Cât este totalul? — ______ lei.'],
  ['5.  Cum s-a plătit? — cash / cu cardul', '6.  „1 + 1 gratis” = iei ___, plătești ___.']], { header: false }));
add(useful([
  ['Unde găsesc orezul?', 'Where can I find the rice?'], ['Aveți pungă de hârtie?', 'Do you have a paper bag?'],
  ['Mai aveți pâine proaspătă?', 'Do you still have fresh bread?'], ['E în ofertă?', 'Is it on offer?'],
  ['Nu merge cardul.', 'The card doesn\'t work.'], ['Îmi dați bonul, vă rog?', 'Can I have the receipt, please?']]));
add(hw(29, ['**H29.1**  Write your shopping list for the week in Romanian, with quantities: *un kilogram de..., o sticlă de..., zece ouă...*',
  '**H29.2**  Keep a real receipt from a supermarket. Find three products on it and write them in Romanian with the price.']));

// ================= SESSION 30 =================
add(spacer(160));
add(banner('SESSION 30  —  THE HUMAN BODY AND THE PHARMACY', 'SESIUNEA 30 — CORPUL UMAN ȘI FARMACIA  ·  3 hours'));
add(objectives([
  'name the parts of the body',
  'say what hurts: **Mă doare capul. Mă dor dinții.**',
  'describe simple symptoms: **Am febră. Tușesc. Sunt răcit.**',
  'ask for medicine at the pharmacy, with or without a prescription']));
add(H1('Lesson 8.4  —  The human body / Corpul uman'));
add(fig('corp', 420, 'Fig. 8.5 — Corpul uman / The human body'));
add(tbl([1700, 1512, 1700, 1512, 1700, 1514], [['ONE', 'MORE', 'ONE', 'MORE', 'ONE', 'MORE'],
  ['un ochi', '**ochi**', 'o ureche', '**urechi**', 'o mână', '**mâini**'],
  ['un deget', '**degete**', 'un dinte', '**dinți**', 'un picior', '**picioare**'],
  ['un braț', '**brațe**', 'un umăr', '**umeri**', 'un genunchi', '**genunchi**']], { size: 19 }));
add(exercise('8.4', 'Which part of the body?', 'Complete with: ochii · urechile · dinții · picioarele · mâinile · nasul.'));
add(tbl([4819, 4819], [
  ['1.  Văd cu ______________.', '2.  Aud (I hear) cu ______________.'],
  ['3.  Mestec (I chew) cu ______________.', '4.  Merg pe jos cu ______________.'],
  ['5.  Scriu și lucrez cu ______________.', '6.  Miros (I smell) cu ______________.']], { header: false }));
add(useful([
  ['stânga · dreapta', 'left · right'], ['piciorul stâng / drept', 'the left / right leg'],
  ['pielea', 'the skin'], ['inima', 'the heart']]));

add(H1('Lesson 8.5  —  At the pharmacy / La farmacie'));
add(box('recap', 'RECAP — IT WORKS LIKE ÎMI PLACE  (Lesson 2.10)', [
  'In Romanian *the body part hurts me*: **mă** (me, Lesson 2.10) + **doare** for one thing, **dor** for more things — like place / plac. The body part takes **the**: capul, dinții.']));
add(tipar('TIPAR — what hurts?', ['MĂ DOARE  /  MĂ DOR', '+', 'one thing / more things + the', '=', 'Mă doare capul. · Mă dor dinții.']));
add(fig('simptome', 520, 'Fig. 8.6 — Simptome / Symptoms'));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**Am febră.** · **Am temperatură.**', 'I have a fever.', '**Am gripă.**', 'I have the flu.'],
  ['**Am tuse.** · **Tușesc.**', 'I have a cough.', '**Am greață.**', 'I feel sick (nausea).'],
  ['**Sunt răcit / răcită.** · **Am răcit.**', 'I have a cold.', '**Am diaree.**', 'I have diarrhoea.'],
  ['**Mi-e rău.** (Lesson 7.5)', 'I feel unwell.', '**M-am tăiat.** · **M-am ars.**', 'I cut myself. · I burnt myself.'],
  ['**Îl doare spatele.**', 'His back hurts.', '**O dor picioarele.**', 'Her legs hurt.']], { size: 18 }));
add(tbl([4819, 4819], [['AT THE PHARMACY', 'ENGLISH'],
  ['C: Bună ziua! Aveți ceva pentru durere de cap?', 'Hello! Do you have something for a headache?'],
  ['F: Da. Aveți și febră?', 'Yes. Do you also have a fever?'],
  ['C: Puțin. Și mă doare gâtul.', 'A little. And I have a sore throat.'],
  ['F: Vă dau acest medicament. Luați o pastilă de trei ori pe zi, după masă.', 'I\'ll give you this medicine. Take one tablet three times a day, after meals.'],
  ['C: Pot să iau și un antibiotic?', 'Can I take an antibiotic too?'],
  ['F: Antibioticul se dă numai cu rețetă de la medic.', 'Antibiotics are given only with a doctor\'s prescription.'],
  ['C: Înțeleg. Mulțumesc!', 'I understand. Thank you!']], { size: 19 }));
add(box('attn', 'ATTENTION — WITH OR WITHOUT A PRESCRIPTION', [
  'Some medicines are sold **fără rețetă** (over the counter): for pain, fever, a cold. Others only **cu rețetă** (with a doctor\'s prescription) — for example **antibiotics** (Order of the Ministry of Health no. 63/2024).',
  'Read **prospectul** (the leaflet) and tell the pharmacist if you are allergic or take other medicines. At night, look for the **farmacia de gardă** (Lesson 5.3).']));
add(exercise('8.5', 'Mă doare or mă dor?', 'Circle the correct form.'));
add(tbl([4819, 4819], [
  ['1.  Mă ( doare  /  dor ) capul.', '2.  Mă ( doare  /  dor ) dinții.'],
  ['3.  Mă ( doare  /  dor ) ochii.', '4.  Mă ( doare  /  dor ) burta.'],
  ['5.  Am ( febră  /  febril ).', '6.  ( Sunt  /  Am ) răcit.']], { header: false }));
add(useful([
  ['o pastilă · un comprimat', 'a pill · a tablet'], ['un sirop · o cremă', 'a syrup · a cream'],
  ['un plasture · un termometru', 'a plaster · a thermometer'], ['de trei ori pe zi', 'three times a day'],
  ['înainte de / după masă', 'before / after meals'], ['Sunt alergic la...', 'I am allergic to...']]));
add(hw(30, ['**H30.1**  Draw a person and write ten parts of the body in Romanian.',
  '**H30.2**  Write what you say at the pharmacy when you have a cough and a fever (four sentences).']));

// ================= SESSION 31 =================
add(spacer(160));
add(banner('SESSION 31  —  AT THE DOCTOR', 'SESIUNEA 31 — LA MEDIC  ·  3 hours'));
add(objectives([
  'make an appointment and describe your symptoms to the doctor',
  'understand the doctor\'s questions and instructions',
  'know when to call 112',
  'understand health insurance, the family doctor, the health card and sick leave']));
add(H1('Lesson 8.6  —  At the doctor / La medic'));
add(tbl([2450, 2369, 2450, 2369], [['THE DOCTOR ASKS', 'ENGLISH', 'YOU ANSWER', 'ENGLISH'],
  ['Ce vă doare?', 'What hurts?', 'Mă doare gâtul.', 'My throat hurts.'],
  ['De când?', 'Since when?', 'De ieri. · De trei zile.', 'Since yesterday. · For three days.'],
  ['Aveți febră?', 'Do you have a fever?', 'Da, 38 de grade.', 'Yes, 38 degrees.'],
  ['Luați medicamente?', 'Do you take medicines?', 'Nu, nu iau nimic.', 'No, I take nothing.'],
  ['Sunteți alergic la ceva?', 'Are you allergic to anything?', 'Nu știu. / Da, la...', 'I don\'t know. / Yes, to...'],
  ['Ce s-a întâmplat?', 'What happened?', 'Am căzut pe șantier.', 'I fell at the building site.']], { size: 18 }));
add(P('**The doctor\'s instructions** (Lesson 3.13): **Luați loc.** — Sit down. · **Deschideți gura.** — Open your mouth. · **Respirați adânc.** — Breathe deeply. · **Dezbrăcați-vă.** — Get undressed. · **Întindeți-vă aici.** — Lie down here.', { size: 19 }));
add(tbl([4819, 4819], [['AT THE FAMILY DOCTOR', 'ENGLISH'],
  ['A: Aveți programare?  P: Da, la ora zece. Mă numesc Rahul Singh.', 'Do you have an appointment? — Yes, at ten. My name is Rahul Singh.'],
  ['M: Luați loc. Ce vă doare?', 'Take a seat. What hurts?'],
  ['P: Am febră și tușesc de trei zile. Mă doare și pieptul.', 'I have had a fever and a cough for three days. My chest hurts too.'],
  ['M: Deschideți gura... Respirați adânc... Aveți o infecție respiratorie.', 'Open your mouth... Breathe deeply... You have a respiratory infection.'],
  ['P: Pot să merg la muncă?', 'Can I go to work?'],
  ['M: Nu. Vă dau o rețetă și concediu medical cinci zile. Anunțați angajatorul.', 'No. I\'ll give you a prescription and five days\' sick leave. Tell your employer.'],
  ['P: Mulțumesc, domnule doctor!', 'Thank you, doctor!']], { size: 19 }));
add(P('A = asistenta (the nurse) · P = pacientul · M = medicul', { size: 17, color: '555555' }));
add(box('recap', 'RECAP — 112  (Lesson 5.2)', [
  'Call **112** only for a real emergency — someone cannot breathe, is unconscious, is bleeding badly, has had a serious accident. Say: **Este o urgență! · Am nevoie de ambulanță. · Sunt în... · Un om este rănit.** For a cold or a fever, go to your **family doctor**.']));
add(exercise('8.6', 'Answer the doctor', 'Write an answer about yourself or an invented situation.'));
add(tbl([FULL], [
  ['1.  Ce vă doare?  —  ____________________________________________'],
  ['2.  De când?  —  ____________________________________________'],
  ['3.  Aveți febră?  —  ____________________________________________'],
  ['4.  Sunteți alergic la ceva?  —  ____________________________________________']], { header: false }));
add(useful([
  ['programarea', 'the appointment'], ['cabinetul medical', 'the doctor\'s surgery'],
  ['rețeta', 'the prescription'], ['analizele', 'the (blood) tests'],
  ['Mă simt mai bine.', 'I feel better.'], ['Nu mă simt bine. (Lesson 3.12)', 'I don\'t feel well.']]));

add(H1('Lesson 8.7  —  Health insurance, the family doctor, sick leave / Asigurarea, medicul de familie, concediul medical'));
add(box('note', 'PRACTICAL NOTE — YOU ARE INSURED THROUGH YOUR WORK CONTRACT', [
  'Every month your employer withholds the health insurance contribution (**CASS**, 10% of the gross salary, Tax Code art. 156) and pays it to the state. This makes you **asigurat** (insured) in the public health system. Check it on your payslip — **fluturașul de salariu**.',
  '**Medicul de familie** (the family doctor): you choose freely and ask to be put on the doctor\'s list with a **cerere de înscriere** (enrolment form, at the surgery or on the website of the County Health Insurance House — **Casa de Asigurări de Sănătate**). Take your **identity document** (for you: the residence permit) and the **health card**, or proof that you are insured. Ask at the surgery if anything else is needed.',
  '**Cardul de sănătate** (the national health card) is issued by the health insurance system (CNAS) and you show it at the doctor. If you lose it, ask your Health Insurance House for a **duplicate** (application + a fee); until it arrives you receive a temporary certificate.']));
add(box('attn', 'ATTENTION — SICK LEAVE / CONCEDIUL MEDICAL', [
  'If you are ill, **tell your employer** straight away and go to the doctor. The doctor gives you a **certificat de concediu medical** (sick-leave certificate). You must give it to your employer **by the 5th of the next month** at the latest (OUG 158/2005).',
  'To be paid during sick leave you normally need **at least 6 months of contributions in the last 12 months**. The rules for how much you are paid were changed in 2025 (Law 141/2025) — ask your employer or HR how much you receive. Do not work while you are on sick leave.']));
add(fig('sanatate', 640, 'Fig. 8.7 — Sănătatea ta ca angajat / Your health as an employee'));
add(exercise('8.7', 'True or false? / Adevărat sau fals?', 'Write A (adevărat) or F (fals).'));
add(tbl([4819, 4819], [
  ['1.  Angajatorul reține CASS din salariu.  ____', '2.  Medicul de familie îl alege IGI.  ____'],
  ['3.  Pentru înscriere completezi o cerere.  ____', '4.  Certificatul medical îl păstrezi acasă.  ____'],
  ['5.  Anunți angajatorul când ești bolnav.  ____', '6.  Dacă pierzi cardul, poți cere un duplicat.  ____']], { header: false }));
add(useful([
  ['asigurat / asigurată', 'insured'], ['Casa de Asigurări de Sănătate', 'County Health Insurance House'],
  ['cererea de înscriere', 'the enrolment form'], ['certificatul de concediu medical', 'the sick-leave certificate'],
  ['Sunt în concediu medical.', 'I am on sick leave.'], ['Mă întorc la muncă luni.', 'I am back at work on Monday.']]));
add(hw(31, ['**H31.1**  Find the name, address and phone number of a family doctor near your home. Write them in Romanian.',
  '**H31.2**  Write the message you send to your manager when you are ill: *Bună ziua, sunt bolnav. Am febră... Merg la medic...*']));

// ================= SESSION 32 =================
add(spacer(160));
add(banner('SESSION 32  —  RIGHTS, RELIGIONS, A1 RECAP AND TEST', 'SESIUNEA 32 — DREPTURI, RELIGII, RECAPITULARE A1 ȘI TEST  ·  3 hours'));
add(objectives([
  'name some basic rights and obligations from the Romanian Constitution',
  'understand freedom of religion and the religions of Romania',
  'check everything you can do at Level A1',
  'pass the Level A1 cumulative test']));
add(H1('Lesson 8.8  —  Rights, obligations and freedom of religion / Drepturi, obligații și libertatea religioasă'));
add(P('**Constituția României** is the basic law of the country. Foreign citizens who live in Romania enjoy the **general protection of persons and property** given by the Constitution and the laws (art. 18).', { size: 19 }));
add(tbl([3000, 4638, 2000], [['ROMANIAN', 'ENGLISH', 'CONSTITUTION'],
  ['**Dreptul la viață și la integritate fizică**', 'the right to life and to physical integrity', 'art. 22'],
  ['**Libertatea conștiinței** (și religioasă)', 'freedom of conscience and of religion', 'art. 29'],
  ['**Libertatea de exprimare**', 'freedom of expression', 'art. 30'],
  ['**Dreptul la ocrotirea sănătății**', 'the right to health care', 'art. 34'],
  ['**Munca și protecția socială a muncii**', 'work and the protection of workers', 'art. 41'],
  ['**Respectarea Constituției și a legilor este obligatorie.**', 'Respecting the Constitution and the laws is compulsory.', 'art. 1 (5)'],
  ['**Exercitarea drepturilor cu bună-credință**', 'you use your rights in good faith, without harming the rights of others', 'art. 57'],
  ['**Contribuțiile financiare** — taxele și impozitele', 'contributing to public expenses through taxes', 'art. 56']], { size: 17 }));
add(H2('Freedom of religion / Libertatea religioasă'));
add(P('The Constitution guarantees **freedom of conscience**: nobody can be forced to adopt a religious belief, and it must be practised **in a spirit of tolerance and mutual respect**. Religious communities (**cultele**) are **autonomous from the state** (art. 29). Law no. 489/2006 on religious freedom lists **18 recognised religious denominations** in its annex.', { size: 19 }));
add(tbl([3300, 1500, 3338, 1500], [['RELIGION (2021 census)', '%', 'RELIGION', '%'],
  ['**ortodoxă** — Orthodox', '85,3', '**greco-catolică** — Greek Catholic', '0,7'],
  ['**romano-catolică** — Roman Catholic', '4,5', '**baptistă** — Baptist', '0,6'],
  ['**reformată** — Reformed (Calvinist)', '3,0', '**adventistă** — Seventh-day Adventist', '0,4'],
  ['**penticostală** — Pentecostal', '2,5', '**musulmană** — Muslim', '0,4']], { size: 18 }));
add(P('*% of the people who declared a religion, 2021 census (INS); 0,9% declared no religion. **biserica** — church · **moscheea** — mosque · **sinagoga** — synagogue. Religious days off: Lesson 5.6.*', { size: 17 }));
add(exercise('8.8', 'Speak — in my country / în țara mea', 'Complete about your country, then tell a colleague. You decide what you share about your own beliefs.'));
add(tbl([FULL], [
  ['1.  În țara mea, religiile principale sunt ________________________________.'],
  ['2.  Oamenii se roagă la ______________________ (biserică / moschee / templu...).'],
  ['3.  În România, Constituția garantează ________________________________.']], { header: false }));
add(useful([
  ['drepturile · obligațiile', 'the rights · the obligations'], ['legea · legile', 'the law · the laws'],
  ['a respecta', 'to respect'], ['credința', 'the faith, belief'],
  ['a se ruga · rugăciunea', 'to pray · the prayer'], ['Respect credința ta.', 'I respect your faith.']]));

add(H1('Lesson 8.9  —  Level A1 recap / Recapitulare finală Nivel A1'));
add(P('At the end of Level A1 you can do all of this in Romanian. Tick what you can do — go back to the lesson if you are not sure.', { size: 19 }));
add(tbl([500, 5638, 3500], [['☐', 'I CAN...', 'KEY PHRASE · LESSON'],
  ['☐', 'read and write Romanian, with ă, â, î, ș, ț and the cratima', 'M1 — Lessons 1.3, 4.1'],
  ['☐', 'say who I am, where I am from, what work I do', '*Mă numesc... Sunt din... Lucrez ca...* — 3.2'],
  ['☐', 'say what I do, did and will do', '*lucrez · am lucrat · o să lucrez* — 3.3, 3.14, 3.16'],
  ['☐', 'ask questions and ask politely', '*Unde...? Cât costă? Dați-mi..., vă rog.* — 3.8, 3.13'],
  ['☐', 'use numbers, prices, the time and dates', '*20 de lei · la ora opt · pe 1 decembrie* — 2.5, 5.4'],
  ['☐', 'buy things, clothes and food', '*O iau. Port mărimea M. Un kilogram de...* — 4.4, 6.3, 8.2'],
  ['☐', 'talk about my home and my family', '*Locuiesc la bloc. Fratele soției...* — 6.6, 7.1'],
  ['☐', 'order and pay at a restaurant', '*Aș dori... Nota, vă rog!* — 7.4'],
  ['☐', 'say how I feel and what hurts', '*Mi-e foame. Mă doare capul.* — 7.5, 8.5'],
  ['☐', 'handle emergencies and the doctor', '*Este o urgență! Am febră de trei zile.* — 5.2, 8.6'],
  ['☐', 'know the institutions and my basic rights', '*Primăria, ITM, IGI, CAS · Constituția* — 5.2, 8.7, 8.8']], { size: 17 }));
add(exercise('8.9', 'Everything together', 'Circle the correct word.'));
add(tbl([4819, 4819], [
  ['1.  un kilogram ( de  /  din ) mere', '2.  Mă ( doare  /  dor ) picioarele.'],
  ['3.  o sticlă de ( ulei  /  pâine )', '4.  ( Îmi  /  Mă ) dați două pâini, vă rog?'],
  ['5.  Am ( febră  /  frig ), 39 de grade.', '6.  Certificatul medical îl dai la ( angajator  /  farmacie ).'],
  ['7.  Antibioticul se dă ( cu  /  fără ) rețetă.', '8.  Constituția garantează libertatea ( religioasă  /  obligatorie ).']], { header: false }));
add(hw(32, ['**H32.1**  Write ten sentences about your life in Romania with everything from Level A1: who you are, your work, your home, your family, your week.',
  '**H32.2**  Prepare Module 9: write in Romanian five tools or materials you use at work.']));

// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ Nivel A1, fișa de confirmare a Sesiunii 32, fișa de evidență a Modulului 8, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — NIVELUL A1  (Modulele 1–8)', 'LEVEL A1 — CUMULATIVE TEST  ·  grilă, 50 de întrebări, 50 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  // M1
  ['Care literă NU este o literă specifică limbii române?', ['ă', 'ș', 'w', 'ț'], 'c'],
  ['În cuvântul „cinci”, litera c se citește ca:', ['k', 'ch din „church”', 's', 'g'], 'b'],
  ['Care variantă este scrisă corect?', ['Luni, 5 Mai', 'luni, 5 mai', 'Luni, 5 Mai', 'luni 5 Mai'], 'b'],
  ['„N-am” înseamnă:', ['nu am', 'noi am', 'nu are', 'am nu'], 'a'],
  ['Pe un formular, „Nume” înseamnă:', ['first name', 'date of birth', 'address', 'surname / family name'], 'd'],
  // M2
  ['Pluralul cuvântului „copil” este:', ['copili', 'copii', 'copile', 'copiluri'], 'b'],
  ['Completează: „___ carte”', ['un', 'doi', 'o', 'niște'], 'c'],
  ['„Casa” înseamnă:', ['a house', 'the house', 'houses', 'some houses'], 'b'],
  ['Completează: „o mașină ___”', ['nou', 'noi', 'noul', 'nouă'], 'd'],
  ['Care variantă este corectă?', ['25 lei', '25 de lei', '5 de lei', '2 de lei'], 'b'],
  ['Completează: „Telefonul ___ Ion.”', ['lui', 'a', 'ei', 'al'], 'a'],
  ['Completează: „___ place cafeaua.” (eu)', ['Mă', 'Îl', 'Îmi', 'Eu'], 'c'],
  // M3
  ['Ce salut folosești la ora 20:00?', ['Bună dimineața!', 'Bună seara!', 'Bună ziua!', 'Noapte bună!'], 'b'],
  ['Completează: „Eu ___ în Ploiești.” (a locui)', ['locuiesc', 'locuiește', 'locuim', 'locui'], 'a'],
  ['„Nu am timp” se spune de obicei:', ['Nam timp.', 'Nu-m timp.', 'N-am timp.', 'Am nu timp.'], 'c'],
  ['Completează: „Unde ___?” (dumneavoastră, a lucra)', ['lucrezi', 'lucrează', 'lucrăm', 'lucrați'], 'd'],
  ['„I want to sleep.” =', ['Vreau să dorm.', 'Vreau dorm.', 'Vreau să dormi.', 'Vreau a dormi.'], 'a'],
  ['Completează: „Ieri ___ opt ore.” (eu, a lucra)', ['lucrez', 'o să lucrez', 'am lucrat', 'lucram'], 'c'],
  ['Care cerere este politicoasă?', ['Dă-mi pașaportul!', 'Dați-mi pașaportul, vă rog.', 'Pașaport!', 'Tu dai pașaport.'], 'b'],
  ['„Mâine ___ la piață.” — I will go', ['am mers', 'merg ieri', 'o să merg', 'mergeam'], 'c'],
  // M4
  ['Pluralul cuvântului „carte” este:', ['carteuri', 'cărți', 'carte', 'cartii'], 'b'],
  ['Completează: „două căni ___”', ['albe', 'alb', 'albă', 'albi'], 'a'],
  ['Completează: „Masa este ___ lemn.”', ['pe', 'din', 'la', 'cu'], 'b'],
  ['Cartela SIM? „Cum ___ activez?”', ['îl', 'le', 'îi', 'o'], 'd'],
  // M5
  ['Capitala României este:', ['Cluj-Napoca', 'Iași', 'București', 'Brașov'], 'c'],
  ['Numărul unic de urgență în România este:', ['112', '911', '999', '100'], 'a'],
  ['Nu ți-a plătit salariul angajatorul. Unde te plângi?', ['la IGI', 'la ITM', 'la farmacie', 'la 112'], 'b'],
  ['„Este ora opt și jumătate.” =', ['8:15', '7:30', '8:45', '8:30'], 'd'],
  ['Ziua Națională a României este:', ['24 ianuarie', '1 mai', '1 decembrie', '25 decembrie'], 'c'],
  // M6
  ['La pantofi, vânzătorul întreabă:', ['Ce număr purtați?', 'Ce etaj?', 'Ce culoare aveți?', 'Unde locuiți?'], 'a'],
  ['Completează: „Pantofii îmi ___ mici.”', ['vine', 'vii', 'vin', 'vinem'], 'c'],
  ['Completează: „Locuiesc ___ garsonieră.”', ['într-un', 'în o', 'în un', 'într-o'], 'd'],
  ['„Cheile sunt pe masă.” =', ['The keys are on the table.', 'The keys are under the table.', 'The keys are next to the table.', 'The keys are in the table.'], 'a'],
  ['În ce cameră gătești?', ['în dormitor', 'în bucătărie', 'în baie', 'în hol'], 'b'],
  // M7
  ['Mama soției mele este:', ['cumnata', 'bunica', 'nora', 'soacra'], 'd'],
  ['Completează: „___ trimit bani părinților.”', ['Le', 'Îi', 'Îl', 'O'], 'a'],
  ['Nu mănânci carne de porc. Ce întrebi la restaurant?', ['Cât costă?', 'Conține carne de porc?', 'Unde este toaleta?', 'Aveți masă liberă?'], 'b'],
  ['Cum ceri nota politicos?', ['Dă nota!', 'Nota mea!', 'Nota, vă rog!', 'Ai nota?'], 'c'],
  ['O femeie a lucrat 12 ore. Ea spune: „Sunt ___.”', ['obosit', 'obosită', 'obosiți', 'obosite'], 'b'],
  ['Care propoziție este corectă?', ['Sunt sete.', 'Am sete.', 'Este sete mie.', 'Mi-e sete.'], 'd'],
  // M8
  ['Ce înseamnă „castravete”?', ['cucumber', 'carrot', 'cabbage', 'courgette'], 'a'],
  ['Completează: „un kilogram ___ roșii”', ['din', 'de', 'cu', 'la'], 'b'],
  ['Ce cumperi într-o sticlă?', ['pâine', 'ouă', 'ulei', 'varză'], 'c'],
  ['La piață întrebi prețul:', ['Cât costă kilogramul?', 'Ce număr purtați?', 'Unde locuiți?', 'Câți ani aveți?'], 'a'],
  ['Completează: „Mă ___ dinții.”', ['doare', 'doar', 'dori', 'dor'], 'd'],
  ['Completează: „Mă ___ capul.”', ['doare', 'dor', 'dori', 'durea'], 'a'],
  ['Antibioticele se dau la farmacie:', ['fără rețetă', 'numai cu rețetă de la medic', 'numai la supermarket', 'numai la IGI'], 'b'],
  ['Ești bolnav și medicul îți dă concediu medical. Ce faci?', ['Nu spui nimănui.', 'Suni la 112.', 'Mergi la ITM.', 'Anunți angajatorul și îi dai certificatul.'], 'd'],
  ['Contribuția de sănătate a salariatului (CASS) este reținută din salariu de:', ['angajator', 'medic', 'farmacie', 'IGI'], 'a'],
  ['Constituția României garantează:', ['o singură religie obligatorie', 'libertatea conștiinței și a religiei', 'religia aleasă de angajator', 'interzicerea religiilor'], 'b'],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 50'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [
  ['Module / Modul', 'Modulul 8 — Supermarket, piață, farmacie și medic (finalizat) · final Nivel A1'],
  ['Session / Sesiunea', 'Sesiunea 32 — Drepturi, religii, recapitulare finală A1. TEST CUMULATIV NIVEL A1'],
  ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'], ['Student name / Nume și prenume cursant', ''],
  ['Score / Punctaj obținut', '_______ / 50'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(40));
add(banner('MODULE 8 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 8 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''],
  ['Modul / Module', 'Modulul 8 — Supermarket, piață, farmacie și medic (12 ore, Sesiunile 29–32)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['29', 'Sesiunea 29 — Fructe, legume, alimente, cantități; la piață și la supermarket (3 ore)', '', '—', ''],
  ['30', 'Sesiunea 30 — Corpul uman; la farmacie, simptome, rețeta (3 ore)', '', '—', ''],
  ['31', 'Sesiunea 31 — La medic; asigurarea, medicul de familie, cardul de sănătate, concediul medical (3 ore)', '', '—', ''],
  ['32', 'Sesiunea 32 — Drepturi și obligații, libertatea religioasă, recapitulare A1 + TEST CUMULATIV NIVEL A1 (3 ore)', '', '___ / 50', '']], { size: 18 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL ȘI NIVEL A1 / MODULE AND LEVEL A1 COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 8 — Supermarket, piață, farmacie și medic, în total 12 ore de curs, și a susținut testul cumulativ al Nivelului A1 consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 8 — Supermarket, Market, Pharmacy and Doctor, 12 course hours in total, and sat the Level A1 cumulative test recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(40));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(H2('Sessions 29–32'),
  key('**8.1**   galbenă · verde · portocalie · mov (vânătă) · portocalii · galbenă   *(accept any colour that agrees)*'),
  key('**8.2**   ulei · unt · lapte · pâine · ouă · pătrunjel'),
  key('**8.3**   5,49 · 0,500 kg (jumătate de kilogram) · 30 % · 52,93 · cu cardul · 2, 1'),
  key('**8.4**   ochii · urechile · dinții · picioarele · mâinile · nasul'),
  key('**8.5**   doare · dor · dor · doare · febră · Sunt'),
  key('**8.6 · 8.8**   personal answers — checked by the teacher (răspunsuri personale). **8.8**: the student chooses what to share about their beliefs; do not ask more.'),
  key('**8.7**   1 A · 2 F (îl alegi tu) · 3 A · 4 F (îl dai angajatorului) · 5 A · 6 A'),
  key('**8.9**   de · dor · ulei · Îmi · febră · angajator · cu · religioasă'),
  H2('Level A1 test — grilă answer key'),
  P('**TOTAL: 50 puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte. Modules: 1–5 M1 · 6–12 M2 · 13–20 M3 · 21–24 M4 · 25–29 M5 · 30–34 M6 · 35–40 M7 · 41–50 M8.', { size: 18 }));
const ans = Q.map(q => q[2]);
const rows = []; for (let r = 0; r < 5; r++) rows.push(ans.slice(r * 10, r * 10 + 10).map((a, i) => `**${r * 10 + i + 1}** – ${a}`));
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), rows, { header: false, size: 18 }));


add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile legale și administrative din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The legal and administrative information in this module was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Antibioticele se eliberează numai pe bază de prescripție medicală; OTC fără prescripție', 'Ordinul ministrului sănătății nr. 63/2024 — legislatie.just.ro/Public/DetaliiDocument/278215; ms.ro', 'Lesson 8.5, test q. 47'],
  ['CASS 10% reținut la sursă de angajator din salariu', 'Codul fiscal (Legea nr. 227/2015), art. 156; ghid ANAF privind contribuțiile sociale — static.anaf.ro', 'Lesson 8.7, test q. 49'],
  ['Înscrierea la medicul de familie: cerere de înscriere + card / act de identitate și dovada calității de asigurat; alegere liberă', 'CNAS / Casele de Asigurări de Sănătate — „Cum ne înscriem la medicul de familie?” (casan.ro/casar); „Ce trebuie să facă un cetățean străin?” (cas.cnas.ro)', 'Lesson 8.7'],
  ['Cardul național de sănătate; duplicat la CAS, cu cerere și cost; adeverință de înlocuire până la primire', 'CNAS — „Procedura de obținere a cardului național duplicat” (cas.cnas.ro)', 'Lesson 8.7'],
  ['Concediul medical: stagiu minim 6 luni în ultimele 12; certificatul se depune la angajator până la data de 5 a lunii următoare; modificări 2025', 'O.U.G. nr. 158/2005 — legislatie.just.ro/public/DetaliiDocument/66305; Legea nr. 141/2025, art. IX', 'Lesson 8.7, test q. 48'],
  ['Drepturi și obligații: art. 1 alin. (5), 18, 22, 29, 30, 34, 41, 56, 57', 'Constituția României — legislatie.just.ro/Public/DetaliiDocument/47355', 'Lesson 8.8, test q. 50'],
  ['18 culte recunoscute (anexa legii); libertatea religioasă', 'Legea nr. 489/2006 (republicată) — legislatie.just.ro/Public/DetaliiDocument/156588; culte.gov.ro', 'Lesson 8.8'],
  ['Structura după religie (% din persoanele care și-au declarat religia)', 'INS — Recensământul Populației și Locuințelor 2021 — recensamantromania.ro', 'Lesson 8.8'],
  ['Lecțiile anterioare citate', 'Modulele 1–7: 1.4, 2.4, 2.5, 2.10, 3.12–3.14, 4.4, 5.2, 5.3, 5.6, 6.3, 7.5', 'whole module']], { size: 15 }));
add(P('*Prețurile din dialoguri, de pe bon și de pe etichete sunt exemple. Pentru regulile de calcul al indemnizației de concediu medical și pentru actele cerute la înscriere, cursantul verifică la angajator și la medicul de familie, deoarece acestea se pot schimba. / Prices in the dialogues, on the receipt and on the tags are examples.*', { size: 16, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 8 — Supermarket, piață, farmacie și medic',
  styles: {
    default: { document: { run: { font: 'Arial', size: 20 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 8 — SUPERMARKET, PIAȚĂ, FARMACIE ȘI MEDIC', color: '777777', size: 16 })] })] }) },
    children: S,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm8.docx', b); console.log('written'); });
