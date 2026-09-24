const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, foto, fotoCell, fig, mcq, cell, brd } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Header, HeightRule } = d;

const S = [];
const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 7  —  MY FAMILY AND AT THE RESTAURANT', { bold: true, color: C.gr, size: 32 }, 100),
  cov('MODULUL 7  —  FAMILIA MEA ȘI LA RESTAURANT', { bold: true, color: C.dk, size: 28 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'],
  ['A1 — after Module 6', '9 hours · Sessions 26–28 · Weeks 13–14', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with ONE cumulative multiple-choice test (20 questions), signed and dated by the student and kept on file as proof of completion. There is no separate test after each session.*']));
add(pageBreak());

// ================= BEFORE YOU START =================
add(H1('Before you start'),
  P('Module 6 took your Romanian into the clothes shop and into your home. Module 7 is about **the people in your life** and about **eating out**. You will talk about your family — at home and in Romania —, say your marital status, understand how a Romanian family lives, order and pay in a restaurant, and say how you feel.'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 1900, 4438], [['YOU NEED', 'WHERE', 'WHY'],
  ['**the article** · **my, your**', 'Lessons 2.3, 2.7', 'fratele meu, soția mea, părinții mei'],
  ['**whose** — lui Ion, Mariei', 'Lesson 2.9', 'mama lui Suresh, fratele Mariei'],
  ['**short pronouns** — îmi, îi, le · mi-e', 'Lesson 2.10', 'Îi dau cheile. · Mi-e foame.'],
  ['**jobs** · **mă simt** · **orders**', 'Lessons 3.2, 3.12, 3.13', 'ospătar / ospătăriță · Mă simt bine. · Dați-mi..., vă rog.'],
  ['**Aș dori** (fixed phrase)', 'Lesson 4.4', 'Aș dori o ciorbă, vă rog.'],
  ['**Poftă bună! Noroc!** · the meals', 'Lessons 5.3, 5.5', 'micul dejun, prânzul, cina'],
  ['**Este frig / cald** — the weather', 'Lesson 5.5', 'Este frig. is not Mi-e frig.']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 26**', '3 hours', 'Lesson 7.1 My family · Lesson 7.2 Marital status and the Romanian family'],
  ['**Session 27**', '3 hours', 'Lesson 7.3 Food, drinks and the menu · Lesson 7.4 Ordering and paying'],
  ['**Session 28**', '3 hours', 'Lesson 7.5 How do you feel? · Lesson 7.6 A full dialogue at the restaurant · Lesson 7.7 General recap · **Module 7 cumulative test**']]));
add(box('recap', 'NO NEW GRAMMAR IN THIS MODULE', [
  'All the grammar you need was taught in **Modules 2 and 3**. When you see a blue **RECAP** box, it tells you which lesson to look back at — there is nothing new to learn in it.',
  'Forms like **fratele soției** (my wife\'s brother) or **Îi trimit bani mamei** (I send money to my mother) are learned here as **ready-made phrases**, not as a new rule.',
  '**New in this module:** words and phrases only — family and relatives, marital status, the menu, Romanian dishes, ordering and paying, feelings. Every lesson ends with a green box **Useful words and phrases**.']));
add(pageBreak());

// ================= SESSION 26 =================
add(banner('SESSION 26  —  MY FAMILY', 'SESIUNEA 26 — FAMILIA MEA  ·  3 hours'));
add(objectives([
  'name the people in your family and in your wife\'s or husband\'s family',
  'say whose relative someone is: **mama lui Suresh, fratele soției**',
  'say your marital status: **căsătorit, necăsătorit, divorțat, văduv**',
  'talk about the family at home: **Îi trimit bani mamei.**',
  'understand what **nașii**, the christening and the wedding mean in Romania, and compare with your country']));

add(H1('Lesson 7.1  —  My family / Familia mea'));
add(P('**Familia** = the family. Look at Suresh\'s family. Every word is said **from Suresh\'s point of view** — he is **EU** (me).'));
add(fig('family', 450, 'Fig. 7.1 — Familia lui Suresh / Suresh\'s family'));
add(H2('Close family / Familia apropiată'));
add(tbl([1750, 1300, 1768, 1750, 1300, 1770], [['MAN — UN', 'PLURAL', 'ENGLISH', 'WOMAN — O', 'PLURAL', 'ENGLISH'],
  ['**un tată**', 'tați', 'father', '**o mamă**', 'mame', 'mother'],
  ['**un frate**', 'frați', 'brother', '**o soră**', 'surori', 'sister'],
  ['**un soț**', 'soți', 'husband', '**o soție**', 'soții', 'wife'],
  ['**un fiu**', 'fii', 'son', '**o fiică**', 'fiice', 'daughter'],
  ['**un bunic**', 'bunici', 'grandfather', '**o bunică**', 'bunici', 'grandmother'],
  ['**un nepot**', 'nepoți', 'grandson; nephew', '**o nepoată**', 'nepoate', 'granddaughter; niece']], { size: 19 }));
add(P('**părinții** — the parents  ·  **copiii** — the children  ·  **bunicii** — the grandparents  ·  **frații** — brothers and sisters. People often say **băiatul meu / fata mea** (my boy / my girl) for my son / my daughter.', { size: 19 }));
add(H2('The extended family / Familia extinsă'));
add(tbl([1750, 1300, 1768, 1750, 1300, 1770], [['MAN — UN', 'PLURAL', 'ENGLISH', 'WOMAN — O', 'PLURAL', 'ENGLISH'],
  ['**un socru**', 'socri', 'father-in-law', '**o soacră**', 'soacre', 'mother-in-law'],
  ['**un cumnat**', 'cumnați', 'brother-in-law', '**o cumnată**', 'cumnate', 'sister-in-law'],
  ['**un ginere**', 'gineri', 'son-in-law', '**o noră**', 'nurori', 'daughter-in-law'],
  ['**un unchi**', 'unchi', 'uncle', '**o mătușă**', 'mătuși', 'aunt'],
  ['**un văr**', 'veri', 'cousin (man)', '**o verișoară**', 'verișoare', 'cousin (woman)']], { size: 19 }));
add(box('attn', 'FALSE FRIENDS — PĂRINȚI, RUDE, NEPOT', [
  '**părinții** = only mother and father. Relatives = **rudele**: *Am rude în Italia.* · **nepotul** = grandson and nephew; **nepoata** = granddaughter and niece.']));
add(box('recap', 'RECAP — MY AND WHOSE  (Lessons 2.7 and 2.9)', [
  '**fratele meu · sora mea · părinții mei** (never *frate meu* ✗) · **mama lui Suresh · fratele Mariei · fiica lui Lakshmi** (a woman\'s name not in -a takes lui).',
  'The same endings work with family words — learn the phrases below as they are: **-ei** for a woman (soției, mamei — like Mariei), **-ului / -lui** for a man (soțului, fratelui), **-lor** for more (părinților).']));
add(tipar('TIPAR — whose relative? (learn the phrases, not a rule)', ['RELATIVE + the', '+', 'soției · mamei · soțului · fratelui · părinților', '=', 'fratele soției']));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**fratele soției**', 'my wife\'s brother', '**sora soțului**', 'my husband\'s sister'],
  ['**părinții soției**', 'my wife\'s parents', '**mama soțului**', 'my husband\'s mother'],
  ['**soția fratelui meu**', 'my brother\'s wife', '**fiul surorii mele**', 'my sister\'s son'],
  ['**casa părinților**', 'my parents\' house', '**numele copilului**', 'the child\'s name']], { size: 19 }));
add(exercise('7.1', 'Who is it? / Cine este?', 'Use: bunica · cumnatul · socrul · soacra · nepotul · copiii. Then say the sentences about your own family.'));
add(tbl([4819, 4819], [
  ['1.  Mama soției mele este ______________ mea.', '2.  Tatăl soției mele este ______________ meu.'],
  ['3.  Fratele soției mele este ______________ meu.', '4.  Fiul fratelui meu este ______________ meu.'],
  ['5.  Mama mamei mele este ______________ mea.', '6.  Fiul meu și fiica mea sunt ______________ mei.']], { header: false }));
add(useful([
  ['Câți frați ai?', 'How many brothers and sisters do you have?'], ['Am doi frați și o soră.', 'I have two brothers and a sister.'],
  ['Ai copii?', 'Do you have children?'], ['Am un băiat și o fată.', 'I have a boy and a girl.'],
  ['Câți ani are fiul tău?', 'How old is your son?'], ['Are șapte ani.', 'He is seven.'],
  ['fratele cel mare / sora cea mică', 'my older brother / my younger sister'], ['Suntem cinci în familie.', 'There are five of us in the family.']]));

add(H1('Lesson 7.2  —  Marital status and the family / Starea civilă și familia'));
add(fig('status', 400, 'Fig. 7.2 — Starea civilă / Marital status'));
add(P('A woman adds **-ă**: căsătorită, necăsătorită, divorțată, văduvă. **logodit(ă)** = engaged.  ·  *Sunteți căsătorit? — Da, sunt căsătorit. Soția mea e în Nepal.* — Are you married? — Yes, I am. My wife is in Nepal.  ·  *Nu, nu sunt căsătorită.* — No, I am not married.', { size: 19 }));
add(box('attn', 'ATTENTION — STAREA CIVILĂ ON FORMS AND IN LAW', [
  'Official forms — for example the IGI forms for the residence permit — ask for **starea civilă**: **căsătorit(ă), necăsătorit(ă), divorțat(ă), văduv(ă)**. Tick the one that matches your documents.',
  'In Romania a marriage is concluded **at the town hall**, before the civil status officer (**ofițerul de stare civilă**). The religious wedding can take place **only after** the civil one (Constitution, art. 48).',
  '**certificatul de căsătorie** — marriage certificate · **certificatul de naștere** — birth certificate · **reîntregirea familiei** — family reunification (a right of residence; ask IGI for the conditions).']));
add(H2('Sending money and presents home — îi / le + family word'));
add(box('recap', 'RECAP — ÎI AND LE  (Lesson 2.10)', [
  '**Îi dau cheile.** — I give him / her the keys. **îi** = to him / to her · **le** = to them. Romanian says the person twice: **Îi** trimit bani **mamei**. This is normal.']));
add(tipar('TIPAR', ['ÎI / LE', '+', 'VERB + THING', '+', 'mamei · copilului · părinților', '=', 'Îi trimit bani mamei.']));
add(tbl([2600, 2219, 2600, 2219], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**Îi** trimit bani **soției** în fiecare lună.', 'I send money to my wife every month.', '**Le** trimit bani **părinților**.', 'I send money to my parents.'],
  ['**Îi** cumpăr un cadou **fiicei** mele.', 'I buy a present for my daughter.', '**Îi** dau **copilului** o jucărie.', 'I give the child a toy.'],
  ['**Îi** telefonez **fratelui** meu duminica.', 'I phone my brother on Sundays.', '**Le** spun **copiilor** „Noapte bună!”', 'I say "Good night!" to the children.']], { size: 18 }));
add(H2('The family in Romania / Familia la români'));
add(box('note', 'CULTURAL NOTE — PARENTS, NAȘII, THE CHRISTENING AND THE WEDDING', [
  '**Parents.** Family ties are strong. Grown-up children stay close to their parents and visit them on Sundays and holidays; grandparents often help to raise the grandchildren. Many Romanians also work abroad and send money home — like you.',
  '**Nașii** (the godparents) are a married couple chosen by the bride and groom. They lead the couple at the religious wedding (**nașii de cununie**) and often become the godparents of the first child (**nașii de botez**). They stay close to the family for life. The godchild is **finul / fina**.',
  '**Botezul** (the christening): in the Orthodox Church a baby is usually christened in the first months of life; after the church there is a party with family and friends.',
  '**Nunta** (the wedding): first **cununia civilă** at the town hall, then **cununia religioasă** at church, then a big party with music and dancing, often until morning. Guests usually give the couple money in an envelope — **darul**.']));
add(foto('nuntă românească — mirii și nașii la ieșirea din biserică', 'Fig. 7.3 — Mirii și nașii / The bride and groom with the godparents', 800));
add(exercise('7.2', 'Your family and a Romanian family', 'Read the Romanian answer. Write a short answer about your country, then tell a colleague: La noi... (In my country...) / În țara mea...'));
add(tbl([3300, 3169, 3169], [['ÎNTREBARE', 'ÎN ROMÂNIA', 'ÎN ȚARA MEA'],
  ['1.  Cine locuiește împreună?', 'Părinții și copiii; uneori și bunicii.', ''],
  ['2.  Cine ajută la creșterea copiilor?', 'Părinții, adesea și bunicii.', ''],
  ['3.  Unde este nunta?', 'La Primărie, la biserică și la restaurant.', ''],
  ['4.  Există nași?', 'Da, nașii sunt foarte importanți.', ''],
  ['5.  Ce faceți duminica?', 'Mulți merg la părinți.', '']], { size: 18 }));
add(useful([
  ['mirele / mireasa', 'the groom / the bride'], ['nașul / nașa', 'the godfather / the godmother'],
  ['finul / fina', 'the godson / the goddaughter'], ['Felicitări!', 'Congratulations!'],
  ['Casă de piatră!', 'wish to newlyweds ("a house of stone")'], ['Să vă trăiască!', 'wish to parents of a new baby'],
  ['La noi...', 'In my country... / At home...'], ['Aștept un copil.', 'I am expecting a baby.']]));
add(box('green', 'HOMEWORK — AFTER SESSION 26 / TEMĂ PENTRU ACASĂ', [
  '**H26.1**  Draw your family tree like Fig. 7.1. Under every person write the Romanian word: *tatăl meu, soția mea, cumnatul meu...*',
  '**H26.2**  Write five sentences about your family: your marital status, your brothers and sisters, and who you send money or presents to (*Îi trimit... / Le trimit...*).']));
add(spacer(200));

// ================= SESSION 227 =================
add(banner('SESSION 27  —  AT THE RESTAURANT', 'SESIUNEA 27 — LA RESTAURANT  ·  3 hours'));
add(objectives([
  'read a Romanian menu: **ciorbe, fel principal, garnituri, desert, băuturi**',
  'recognise seven Romanian dishes and ask what is in them: **Conține carne de porc?**',
  'ask for a table and order food and drinks politely: **Aș dori..., Aduceți-mi...**',
  'ask for the bill, pay and leave a tip',
  'name the jobs in a restaurant']));
add(H1('Lesson 7.3  —  Food, drinks and the menu / Mâncare, băuturi și meniul'));
add(P('**Meniul** = the menu. A Romanian menu follows the order of the meal: soup first, then the main course with a side dish, then dessert. Next to each dish you see the weight (**gramajul**) and the price.'));
add(fig('menu', 420, 'Fig. 7.4 — Un meniu (exemplu, prețuri orientative) / A menu (example, sample prices)'));
add(P('**aperitive** — starters  ·  **ciorbe și supe** — soups  ·  **fel principal** — main course  ·  **garnituri** — side dishes: cartofi prăjiți (chips), orez (rice), mămăligă  ·  **salate** — salads  ·  **desert** — dessert  ·  **băuturi** — drinks: apă plată (still) / minerală (sparkling), suc, cafea, ceai, bere, vin  ·  **meniul zilei** — a cheaper lunch menu on weekdays, in many restaurants.', { size: 19 }));
add(P('**The meat:** carne de **pui** (chicken) · de **porc** (pork) · de **vită** (beef) · de **miel** (lamb) · **pește** (fish). **De post** = without meat, milk or eggs (Orthodox fasting food) — good for vegetarians, but ask.', { size: 19 }));
add(H2('Seven Romanian dishes / Șapte feluri românești'));
{
  const dish = (name, en, txt) => [`**${name}** — *${en}*`, txt];
  const D = [
    ['ciorbă (de perișoare, de legume)', dish('ciorba', 'sour soup', 'Many kinds: with meatballs (de perișoare), with vegetables (de legume), with beef tripe (de burtă). Often served with **smântână** (sour cream) and **ardei iute** (chilli).')],
    ['sarmale cu mămăligă', dish('sarmalele', 'cabbage rolls', 'Cabbage or vine leaves rolled with minced meat (usually pork) and rice. **Sarmale de post** have no meat.')],
    ['mici cu muștar', dish('micii / mititeii', 'grilled meat rolls', 'Small grilled rolls of minced meat — often beef mixed with pork or lamb. Eaten with **muștar** (mustard). Ask what meat.')],
    ['mămăligă cu brânză și smântână', dish('mămăliga', 'cornmeal porridge', 'Made from **mălai** (cornmeal). A side dish, or a meal with brânză (cheese) and smântână. No meat.')],
    ['tochitură cu mămăligă și ou', dish('tochitura', 'meat stew', 'Pieces of pork (sometimes sausages) in sauce, with mămăligă, cheese and a fried egg.')],
    ['salată de vinete pe pâine', dish('salata de vinete', 'aubergine spread', 'Roasted aubergine mashed with oil and onion, eaten on bread. No meat — close to baingan bharta.')],
    ['papanași cu smântână și dulceață', dish('papanașii', 'cheese doughnuts', 'Fried doughnuts made with fresh cheese, with smântână and **dulceață** (jam). The most popular dessert.')],
  ];
  const W = [1500, 3319, 1500, 3319];
  const rows = [];
  for (let i = 0; i < D.length; i += 2) {
    const a = D[i], b = D[i + 1];
    rows.push(new TableRow({ cantSplit: true, height: { value: 1000, rule: HeightRule.ATLEAST }, children: [
      fotoCell(a[0], W[0]), cell(a[1], { w: W[1], size: 17, sp: 10 }),
      b ? fotoCell(b[0], W[2]) : cell('', { w: W[2] }),
      b ? cell(b[1], { w: W[3], size: 17, sp: 10 }) : cell('*The spaces marked FOTO are for photos of the dishes, added by your teacher.*', { w: W[3], size: 17, color: '777777' })] }));
  }
  add(new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: W, rows }), new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 40, after: 120 }, children: [new TextRun({ text: 'Fig. 7.5 — Feluri românești de bază / Basic Romanian dishes', italics: true, color: '555555', size: 18 })] }));
}
add(box('attn', 'ATTENTION — PORK, BEEF, ALLERGIES: ASK!', [
  'Many Romanian dishes contain **pork**. If you do not eat pork or beef, or if you have an allergy, ask before you order: **Conține carne de porc? · Este cu carne de vită? · Este fără carne? · Sunt alergic la... (alune, lapte...)**.',
  'In the European Union a restaurant must tell you which of the main allergens are in each dish (Regulation (EU) 1169/2011). Ask for **lista de alergeni** — the list of allergens.']));
add(exercise('7.3', 'Read the menu', 'Look at Fig. 7.4. Write the part of the menu for each dish, then answer the two questions.'));
add(tbl([4819, 4819], [
  ['1.  papanași → ____________________', '2.  cartofi prăjiți → ____________________'],
  ['3.  ciorbă de legume → ____________________', '4.  bere → ____________________'],
  ['5.  sarmale → ____________________', '6.  salată de roșii → ____________________'],
  ['7.  Cât costă meniul zilei? — ________ lei.', '8.  Cât costă o apă plată? — ________ lei.']], { header: false }));
add(useful([
  ['Ce ne recomandați?', 'What do you recommend?'], ['Este picant?', 'Is it spicy?'],
  ['Nu mănânc carne de porc.', 'I don\'t eat pork.'], ['Sunt vegetarian / vegetariană.', 'I am vegetarian.'],
  ['fără ceapă, fără gheață', 'without onion, without ice'], ['o porție', 'a portion'],
  ['Pot să iau la pachet?', 'Can I take it away?'], ['tacâmurile: furculița, cuțitul, lingura', 'the cutlery: fork, knife, spoon'],
  ['un șervețel', 'a napkin'], ['Poftă bună! (Lesson 5.3)', 'Enjoy your meal!']]));

add(H1('Lesson 7.4  —  Ordering and paying / A comanda și a plăti'));
add(H2('Who works in a restaurant? / Cine lucrează la restaurant?'));
add(tbl([2500, 2319, 2500, 2319], [['MAN / WOMAN', 'JOB', 'MAN / WOMAN', 'JOB'],
  ['**ospătar / ospătăriță** (Lesson 3.2)', 'waiter / waitress', '**bucătar / bucătăreasă** · **bucătar-șef**', 'cook · chef'],
  ['**ajutor de bucătar**', 'kitchen assistant', '**spălător / spălătoare de vase**', 'dishwasher'],
  ['**barman / barmaniță**', 'bartender', '**livrator / livratoare**', 'delivery driver']], { size: 18 }));
add(P('*Lucrez ca ajutor de bucătar într-un restaurant din Cluj.* — I work as a kitchen assistant in a restaurant in Cluj.', { size: 19 }));
add(box('recap', 'RECAP — POLITE REQUESTS  (Lesson 3.13 and Lesson 4.4)', [
  'A polite request is the **voi / dumneavoastră** form + **-mi** with a hyphen: **Aduceți-mi** o apă, vă rog. · **Dați-mi** meniul, vă rog. · **Spuneți-mi**, vă rog, ce conține?',
  'Even more polite, the fixed phrase **Aș dori** (Lesson 4.4): **Aș dori o ciorbă de legume.** In a group you can also say **Pentru mine...** — For me...']));
add(tbl([1500, 4100, 4038], [['WHO SAYS IT', 'ROMANIAN', 'ENGLISH'],
  ['waiter', 'Bună seara! Câte persoane?', 'Good evening! How many people?'],
  ['you', 'O masă pentru doi, vă rog. / Am o rezervare.', 'A table for two, please. / I have a booking.'],
  ['waiter', 'Poftiți meniul. Ce doriți să comandați?', 'Here is the menu. What would you like to order?'],
  ['you', 'Aș dori o ciorbă de perișoare. Pentru mine, sarmale.', 'I would like meatball soup. For me, cabbage rolls.'],
  ['waiter · you', 'Și de băut? — Aduceți-mi o apă plată, vă rog.', 'And to drink? — Bring me a still water, please.'],
  ['waiter · you', 'Altceva? — Nu, mulțumesc, deocamdată atât.', 'Anything else? — No, thank you, that\'s all for now.'],
  ['you', 'Nota, vă rog! / Ne aduceți nota, vă rog?', 'The bill, please! / Could you bring us the bill?'],
  ['waiter', 'Plătiți împreună sau separat? Cash sau cu cardul?', 'Together or separately? Cash or card?'],
  ['you', 'Separat, vă rog. · Păstrați restul.', 'Separately, please. · Keep the change.']], { size: 19 }));
{
  const bl = fig('bill', 190, 'Fig. 7.6 — Nota de plată / The bill');
  const note = [P('**PRACTICAL NOTE — THE BILL AND THE TIP / NOTA ȘI BACȘIȘUL**', { color: C.grey, size: 19, after: 60 }),
    P('**Nota de plată** shows what you ordered; you then receive the **bon fiscal** (the official receipt). Check the bill and keep the receipt.', { size: 19, after: 60 }),
    P('**Bacșișul** (the tip) is a common habit in Romanian restaurants, but it is **voluntary**: the law describes it as money the customer gives of their own free will (Law 376/2022). There is no fixed amount — people usually leave more when they are happy with the service.', { size: 19, after: 60 }),
    P('You can leave the tip in cash or add it when you pay by card. Since 2023 restaurants and bars must record the tip on the fiscal receipt, however you pay (Law 376/2022).', { size: 19, after: 0 })];
  add(new Table({ width: { size: FULL, type: WidthType.DXA }, columnWidths: [3300, 6338], rows: [new TableRow({ cantSplit: true, children: [
    cell(bl, { w: 3300, borders: L.NOB }), cell(note, { w: 6338, shade: 'F0F0F0', borders: { top: { style: 'single', size: 6, color: '888888' }, bottom: { style: 'single', size: 6, color: '888888' }, right: { style: 'single', size: 6, color: '888888' }, left: { style: 'single', size: 24, color: '888888' } }, margins: { top: 100, bottom: 100, left: 180, right: 180 } })] })] }), spacer());
}
add(exercise('7.4', 'Complete the dialogue', 'Use: O masă · Aș dori · de băut · Aduceți-mi · Nota · Cu cardul. Then act it out with a colleague.'));
add(tbl([FULL], [
  ['O: Bună seara! Câte persoane?'], ['C: ______________________ pentru doi, vă rog.'],
  ['O: Ce doriți să comandați?'], ['C: ______________________ o ciorbă de legume.'],
  ['O: Și ______________________?'], ['C: ______________________ o apă plată, vă rog.'],
  ['C: (mai târziu) ______________________, vă rog!'], ['O: Plătiți cash sau cu cardul?   C: ______________________.']], { header: false }));
add(useful([
  ['Masa asta e liberă?', 'Is this table free?'], ['Mai aduceți o pâine, vă rog.', 'Another bread, please.'],
  ['Mâncarea e rece.', 'The food is cold.'],
  ['Am comandat altceva.', 'I ordered something else.'], ['Totul a fost foarte bun!', 'Everything was very good!'],
  ['Îmi dați și bonul, vă rog?', 'Can I have the receipt too, please?']]));
add(box('green', 'HOMEWORK — AFTER SESSION 27 / TEMĂ PENTRU ACASĂ', [
  '**H27.1**  Choose a lunch from the menu in Fig. 7.4: a soup, a main course, a side dish and a drink. Write your order with *Aș dori... / Aduceți-mi...* and the total price.',
  '**H27.2**  Write four sentences: a Romanian dish you want to try, what you do not eat, a dish from your country, and your job if you work in a restaurant.']));
add(spacer(200));

// ================= SESSION 228 =================
add(banner('SESSION 28  —  FEELINGS, RECAP AND TEST', 'SESIUNEA 28 — EMOȚII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives([
  'say how you feel: **Sunt obosit. Mă simt bine.**',
  'name six basic feelings, for a man and for a woman',
  'say you are hungry, thirsty, cold, hot or sleepy, and that you miss someone: **Mi-e foame. Mi-e dor de copii.**',
  'follow and act out a full dialogue at the restaurant',
  'use every form from Module 7 and pass the Module 7 cumulative test']));
add(H1('Lesson 7.5  —  How do you feel? / Cum te simți?'));
add(fig('faces', 470, 'Fig. 7.7 — Emoții și stări / Feelings'));
add(P('A woman adds **-ă**: fericită, tristă, obosită. More people: **fericiți · triști · obosiți · supărați · îngrijorați · mulțumiți**.', { size: 19 }));
add(box('recap', 'RECAP — THE ADJECTIVE AGREES · MĂ SIMT  (Lessons 2.4 and 3.12)', [
  'The feeling word agrees with the person: **El este obosit. Ea este obosită. Ei sunt obosiți.**',
  'With **mă simt** (I feel) you use the same words, or **bine / rău**: **Mă simt obosită. · Cum vă simțiți? — Mă simt bine, mulțumesc.**']));
add(tipar('TIPAR — how you feel', ['SUNT  /  MĂ SIMT', '+', 'fericit · obosită · îngrijorat...', '=', 'Mă simt obosit.']));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['Sunt fericit, azi e ziua fiului meu.', 'I am happy, today is my son\'s birthday.', 'Sunt tristă, familia mea e departe.', 'I am sad, my family is far away.'],
  ['Sunt obosit după tura de noapte.', 'I am tired after the night shift.', 'Sunt îngrijorat, mama e bolnavă.', 'I am worried, my mother is ill.'],
  ['Șeful e supărat azi.', 'The boss is upset today.', 'Suntem mulțumiți de cazare.', 'We are pleased with the accommodation.']], { size: 18 }));
add(H2('Mi-e foame — I am hungry'));
add(P('Hunger, thirst, cold, heat and sleep are **not** said with sunt. Romanian says *hunger is to me*: **mi-e** = îmi + e (Lesson 2.10). The same pattern gives one of the most important sentences for you: **Mi-e dor de...** — I miss...'));
add(fig('mie', 450, 'Fig. 7.8 — Mi-e... / I am... (hungry, thirsty, cold, hot, sleepy) · I miss...'));
add(tipar('TIPAR', ['MI-E  /  ȚI-E  /  ÎI E  /  VĂ E', '+', 'foame · sete · frig · cald · somn · dor de...', '=', 'Mi-e foame.']));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**Ți-e foame?**', 'Are you hungry?', '**Nu mi-e foame.**', 'I am not hungry.'],
  ['**Vă e sete?**', 'Are you thirsty? (polite)', '**Îi e frig copilului.**', 'The child is cold.'],
  ['**Mi-e dor de copii.**', 'I miss my children.', '**Mi-e dor de casă.**', 'I am homesick.']], { size: 19 }));
add(box('attn', 'ATTENTION — ESTE FRIG IS NOT MI-E FRIG · NERVOS IS NOT NERVOUS', [
  '**Este frig.** — It is cold (the weather, Lesson 5.5).  **Mi-e frig.** — I am cold (my body). Never *Sunt frig* ✗ or *Sunt foame* ✗.',
  '**nervos** means irritated, angry — not nervous. Before an exam or an interview you say **Am emoții.** — I am nervous.']));
add(exercise('7.5', 'Choose the right word', 'Circle the correct form. Then say each sentence about yourself.'));
add(tbl([4819, 4819], [
  ['1.  Ea este ( obosit  /  obosită ).', '2.  ( Mi-e  /  Sunt ) foame.'],
  ['3.  Afară ( este  /  mi-e ) frig.', '4.  Ei sunt ( fericiți  /  fericit ).'],
  ['5.  Nu mă ( simt  /  sunt ) bine.', '6.  ( Mi-e  /  Sunt ) dor de familie.'],
  ['7.  Copilul plânge, e ( trist  /  tristă ).', '8.  Am lucrat 12 ore. Sunt ( obosit  /  sete ).']], { header: false }));
add(useful([
  ['Ce ai?', 'What\'s wrong?'], ['Nimic, sunt doar obosit.', 'Nothing, I\'m just tired.'],
  ['Nu-ți face griji!', 'Don\'t worry!'], ['Totul e bine.', 'Everything is fine.'],
  ['Mă bucur!', 'I\'m glad!'], ['Îmi pare rău.', 'I\'m sorry.'],
  ['Am emoții.', 'I\'m nervous.'], ['Mi-e frică.', 'I\'m scared.']]));

add(H1('Lesson 7.6  —  A full dialogue at the restaurant / Dialog complet la restaurant'));
add(P('Suresh and his Romanian colleague Mihai go out after work. O = ospătărița (the waitress). Read it in groups of three, then act it out.'));
add(tbl([4819, 4819], [['ROMANIAN', 'ENGLISH'],
  ['O: Bună seara! Aveți rezervare?', 'Good evening! Do you have a booking?'],
  ['M: Nu. Aveți o masă liberă pentru două persoane?', 'No. Do you have a free table for two?'],
  ['O: Da, poftiți aici, lângă fereastră. Poftiți meniul.', 'Yes, here, by the window. Here is the menu.'],
  ['M: Ce zici, Suresh, ți-e foame?', 'What do you say, Suresh — are you hungry?'],
  ['S: Da, mi-e foarte foame. Și sunt obosit — am lucrat zece ore azi.', 'Yes, I\'m very hungry. And I\'m tired — I worked ten hours today.'],
  ['O: Ce doriți să comandați?', 'What would you like to order?'],
  ['S: Ce ne recomandați?', 'What do you recommend?'],
  ['O: Sarmalele cu mămăligă sunt foarte bune azi.', 'The cabbage rolls with polenta are very good today.'],
  ['S: Conțin carne de porc?', 'Do they contain pork?'],
  ['O: Da. Dar avem și sarmale de post, fără carne.', 'Yes. But we also have sarmale de post, without meat.'],
  ['S: Atunci aș dori o ciorbă de legume și sarmale de post.', 'Then I would like a vegetable soup and meat-free sarmale.'],
  ['M: Pentru mine, mici cu cartofi prăjiți.', 'For me, mici with chips.'],
  ['O: Și de băut?   M: O bere, vă rog.', 'And to drink? — A beer, please.'],
  ['S: Aduceți-mi o apă plată și o pâine, vă rog.', 'Bring me a still water and some bread, please.'],
  ['(mai târziu)  M: Cum e mâncarea?', '(later) How is the food?'],
  ['S: Foarte bună! Sunt mulțumit. Soția mea gătește ceva asemănător acasă.', 'Very good! I\'m pleased. My wife cooks something similar at home.'],
  ['M: Ți-e dor de familie?', 'Do you miss your family?'],
  ['S: Da, mi-e dor de soție și de copii. Le telefonez în fiecare seară.', 'Yes, I miss my wife and children. I phone them every evening.'],
  ['M: Ne aduceți nota, vă rog?', 'Could you bring us the bill, please?'],
  ['O: Imediat. Plătiți împreună sau separat?', 'Right away. Together or separately?'],
  ['M: Separat. Eu plătesc cu cardul.   S: Eu plătesc cash. Păstrați restul.', 'Separately. I\'m paying by card. — I\'m paying cash. Keep the change.'],
  ['O: Mulțumesc frumos! O seară bună!', 'Thank you very much! Have a nice evening!']], { size: 19 }));
add(box('recap', 'LOOK AT THE DIALOGUE — ONLY THINGS YOU KNOW', [
  '**ți-e foame, mi-e dor de** (Lesson 7.5) · **sunt obosit, sunt mulțumit** (Lesson 7.5) · **Aduceți-mi, Ne aduceți** (Lesson 3.13) · **aș dori** (Lesson 4.4) · **Le telefonez** — to them, the wife and the children (Lesson 7.2) · **am lucrat** (Lesson 3.14).']));
add(exercise('7.6', 'True or false? / Adevărat sau fals?', 'Write A (adevărat) or F (fals).'));
add(tbl([4819, 4819], [
  ['1.  Suresh este obosit.  ____', '2.  Suresh mănâncă sarmale cu carne de porc.  ____'],
  ['3.  Mihai bea o bere.  ____', '4.  Suresh vorbește cu familia în fiecare seară.  ____'],
  ['5.  Suresh și Mihai plătesc împreună.  ____', '6.  Suresh lasă bacșiș.  ____']], { header: false }));
add(useful([
  ['Ce zici?', 'What do you say? / What do you think?'], ['Imediat.', 'Right away.'],
  ['o masă liberă', 'a free table'], ['lângă fereastră', 'by the window'],
  ['asemănător', 'similar'], ['Mulțumesc frumos!', 'Thank you very much!'],
  ['O seară bună!', 'Have a nice evening!'], ['Noroc! (Lesson 5.3)', 'Cheers!']]));

add(H1('Lesson 7.7  —  General recap / Recapitulare generală'));
add(tbl([2410, 2410, 2410, 2408], [['FAMILY', 'MARITAL STATUS & CULTURE', 'AT THE RESTAURANT', 'FEELINGS'],
  ['părinții · frații · copiii', 'căsătorit(ă)', 'meniul · nota', 'fericit(ă)'],
  ['soțul · soția', 'necăsătorit(ă)', 'ciorbe · fel principal', 'trist(ă)'],
  ['socrul · soacra', 'divorțat(ă) · văduv(ă)', 'garnituri · desert · băuturi', 'obosit(ă) · supărat(ă)'],
  ['cumnatul · cumnata', 'nașii · finul / fina', 'ospătar · bucătar · barman', 'îngrijorat(ă) · mulțumit(ă)'],
  ['nepotul · nepoata', 'botezul · nunta · darul', 'bacșișul · bonul fiscal', 'Mi-e foame / sete / dor de...']], { size: 18 }));
add(tbl([3600, 3800, 2238], [['PATTERN', 'EXAMPLE', 'LEARNED IN'],
  ['relative + soției / soțului / părinților', 'fratele soției · mama soțului', 'Lesson 7.1'],
  ['îi / le + verb + mamei / copilului', 'Îi trimit bani mamei. Le telefonez copiilor.', 'Lesson 7.2 (recap 2.10)'],
  ['Sunt căsătorit / căsătorită.', 'Sunteți căsătorit? — Nu, sunt necăsătorit.', 'Lesson 7.2'],
  ['Aș dori... · Pentru mine...', 'Aș dori o ciorbă. Pentru mine, mici.', 'Lesson 7.4 (recap 4.4)'],
  ['Aduceți-mi..., vă rog. · Nota, vă rog!', 'Aduceți-mi o apă, vă rog.', 'recap — Lesson 3.13'],
  ['Sunt / Mă simt + feeling that agrees', 'Ea e obosită. Mă simt bine.', 'Lesson 7.5 (recap 2.4, 3.12)'],
  ['Mi-e + foame / sete / frig / cald / somn', 'Mi-e frig. (≠ Este frig.)', 'Lesson 7.5 (recap 2.10)']], { size: 18 }));
add(exercise('7.7', 'Everything together', 'Circle the correct word.'));
add(tbl([4819, 4819], [
  ['1.  Mama soției este ( soacra  /  cumnata ).', '2.  Aceasta este casa ( lui  /  a ) Suresh.'],
  ['3.  ( Îi  /  Le ) trimit bani părinților.', '4.  Ea este ( căsătorit  /  căsătorită ).'],
  ['5.  ( Aduceți-mi  /  Aduc-mi ) nota, vă rog.', '6.  Sarmalele de post nu conțin ( carne  /  varză ).'],
  ['7.  ( Mi-e  /  Sunt ) sete.', '8.  După tura de noapte suntem ( obosiți  /  obosit ).']], { header: false }));
add(box('green', 'HOMEWORK — AFTER SESSION 28 / TEMĂ PENTRU ACASĂ', [
  '**H28.1**  Write five sentences about how you feel this week and why: *Sunt obosit, pentru că... · Mi-e dor de...*',
  '**H28.2**  Prepare Module 8 (supermarket and market): write five foods you buy every week, in Romanian if you know them.']));
// ================= DETACHABLE SECTION =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 28, fișa de evidență a Modulului 7, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — MODULUL 7', 'MODULE 7 — CUMULATIVE TEST  ·  grilă, 20 de întrebări, 20 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  ['Mama soției mele este:', ['cumnata', 'soacra', 'nepoata', 'bunica']],
  ['Fratele meu are un fiu. Fiul lui este ____ meu.', ['nepotul', 'socrul', 'unchiul', 'ginerele']],
  ['Completează: „Sora mea are doi ____.”', ['copil', 'copiii', 'copii', 'copile']],
  ['Ce înseamnă „părinții”?', ['the relatives', 'the parents', 'the children', 'the grandparents']],
  ['Completează: „Aceasta este casa ____ Suresh.”', ['lui', 'a', 'al', 'ei']],
  ['„Fratele soției” este:', ['socrul', 'ginerele', 'cumnatul', 'nepotul']],
  ['O femeie care are soț spune: „Sunt ____.”', ['căsătorit', 'căsătorită', 'necăsătorită', 'divorțați']],
  ['Completează: „____ trimit bani mamei în fiecare lună.”', ['Îl', 'O', 'Îi', 'Le']],
  ['Completează: „Le telefonez ____ în fiecare seară.”', ['părinților', 'mamei', 'fratelui', 'soției']],
  ['În România, căsătoria religioasă are loc:', ['înainte de căsătoria civilă', 'numai după căsătoria civilă', 'la IGI', 'fără căsătorie civilă']],
  ['Cine sunt „nașii”?', ['the bride\'s parents', 'the godparents', 'the neighbours', 'the grandchildren']],
  ['Ce înseamnă „felul principal”?', ['the main course', 'the dessert', 'the drinks', 'the side dish']],
  ['Mămăliga se face din:', ['orez', 'mălai', 'cartofi', 'carne']],
  ['Nu mănânci carne de porc. Ce întrebi?', ['Conține carne de porc?', 'Cât costă?', 'Unde este toaleta?', 'Aveți o masă liberă?']],
  ['Cum ceri nota politicos?', ['Dă nota!', 'Nota, vă rog!', 'Nota mea!', 'Ai nota?']],
  ['Completează: „____-mi o apă plată, vă rog.”', ['Aduceți', 'Aduc', 'Aducem', 'Adus']],
  ['Cine gătește într-un restaurant?', ['ospătarul', 'casierul', 'bucătarul', 'barmanul']],
  ['În România, bacșișul la restaurant este:', ['obligatoriu', 'interzis', 'voluntar — îl dai dacă vrei', 'inclus în chirie']],
  ['O femeie a lucrat 12 ore. Ea spune: „Sunt ____.”', ['obosit', 'obosită', 'obosiți', 'obosite']],
  ['Care propoziție este corectă?', ['Sunt foame.', 'Mi-e foame.', 'Am foame.', 'Este foame mie.']],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 20'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(200));

add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [
  ['Module / Modul', 'Modulul 7 — Familia mea și la restaurant (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 28 — Emoții, dialog complet la restaurant, recapitulare. TEST CUMULATIV MODULUL 7'],
  ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'], ['Student name / Nume și prenume cursant', ''],
  ['Score / Punctaj obținut', '_______ / 20'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(40));
add(banner('MODULE 7 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 7 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''],
  ['Modul / Module', 'Modulul 7 — Familia mea și la restaurant (9 ore, Sesiunile 26–28)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['26', 'Sesiunea 26 — Familia, rudele, starea civilă, familia la români (3 ore)', '', '—', ''],
  ['27', 'Sesiunea 27 — La restaurant: meniul, feluri românești, a comanda și a plăti, profesiile din restaurant (3 ore)', '', '—', ''],
  ['28', 'Sesiunea 28 — Emoții, dialog complet la restaurant, recapitulare + TEST CUMULATIV (3 ore)', '', '___ / 20', '']], { size: 19 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 7 — Familia mea și la restaurant, în total 9 ore de curs, și a susținut testul de evaluare consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 7 — My Family and at the Restaurant, 9 course hours in total, and sat the assessment recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(120));

add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = (t) => P(t, { size: 19 });
add(H2('Session 26'),
  key('**7.1**   soacra · socrul · cumnatul · nepotul · bunica · copiii'),
  key('**7.2**   personal answers — checked by the teacher (răspunsuri personale). Check that the student starts with *La noi...* / *În țara mea...*'),
  H2('Session 27'),
  key('**7.3**   salate și desert · garnituri · ciorbe și supe · băuturi · fel principal · salate și desert · 40 (de lei) · 9 (lei)'),
  key('**7.4**   O masă · Aș dori · de băut · Aduceți-mi · Nota · Cu cardul'),
  H2('Session 28'),
  key('**7.5**   obosită · Mi-e · este · fericiți · simt · Mi-e · trist · obosit'),
  key('**7.6**   1 A · 2 F (sarmale de post) · 3 A · 4 A · 5 F (separat) · 6 A (Păstrați restul)'),
  key('**7.7**   soacra · lui · Le · căsătorită · Aduceți-mi · carne · Mi-e · obosiți'),
  H2('Cumulative test — grilă answer key'),
  P('Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.'));
const ans = ['b', 'a', 'c', 'b', 'a', 'c', 'b', 'c', 'a', 'b', 'b', 'a', 'b', 'a', 'b', 'a', 'c', 'c', 'b', 'b'];
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), [ans.slice(0, 10).map((a, i) => `**${i + 1}** – ${a}`), ans.slice(10).map((a, i) => `**${i + 11}** – ${a}`)], { header: false }));
add(P('**TOTAL: 20 puncte**'));

add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile legale și administrative din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The legal and administrative information in this module was checked on 24 September 2026 against official sources.*', { size: 19 }));
add(tbl([3000, 3600, 3038], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Căsătoria religioasă numai după cea civilă / religious wedding only after the civil one', 'Constituția României, art. 48 — legislatie.just.ro/Public/DetaliiDocument/47355', 'Lesson 7.2, test q. 10'],
  ['Căsătoria se încheie în fața ofițerului de stare civilă / marriage before the civil status officer', 'Codul civil (Legea nr. 287/2009, rep.), Cartea a II-a „Despre familie”; Legea nr. 119/1996 privind actele de stare civilă — legislatie.just.ro', 'Lesson 7.2'],
  ['Starea civilă pe formulare; reîntregirea familiei / marital status on forms; family reunification', 'Formularele IGI (cereri de prelungire a dreptului de ședere) — igi.mai.gov.ro/en/forms', 'Lesson 7.2'],
  ['Bacșișul: sumă oferită voluntar; evidențiat pe bonul fiscal la restaurante (CAEN 5610) și baruri (CAEN 5630), indiferent de modul de plată, din 2023 / the tip', 'Legea nr. 376/2022 (modifică O.U.G. nr. 28/1999) — legislatie.just.ro/Public/DetaliiDocument/263133; materiale informative ANAF', 'Lesson 7.4, test q. 18'],
  ['Informarea obligatorie despre alergeni, inclusiv la alimentele neambalate din restaurante / allergens', 'Regulamentul (UE) nr. 1169/2011 — eur-lex.europa.eu (CELEX 32011R1169); ANSVSA, pagina „Alergeni” — ansvsa.ro', 'Lesson 7.3'],
  ['Lecțiile anterioare citate / earlier lessons referred to', 'Modulele 2–6 revizuite: 2.3, 2.4, 2.7, 2.9, 2.10, 3.2, 3.12, 3.13, 3.14, 4.4, 5.3, 5.5, 5.6', 'whole module']], { size: 17 }));
add(P('*Descrierile felurilor de mâncare și notele culturale (nași, botez, nuntă, familia) sunt informații culturale generale, nu date oficiale; de aceea sunt formulate cu „de obicei”, „adesea”. Meniul și nota de plată sunt exemple, cu prețuri orientative. / The dish descriptions and cultural notes are general cultural information, not official data; the menu and the bill are examples with sample prices.*', { size: 17, color: '555555' }));

// ================= DOCUMENT =================
const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 7 — Familia mea și la restaurant',
  styles: {
    default: { document: { run: { font: 'Arial', size: 20 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 7 — FAMILIA MEA ȘI LA RESTAURANT', color: '777777', size: 16 })] })] }) },
    children: S,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm7.docx', b); console.log('written'); });
