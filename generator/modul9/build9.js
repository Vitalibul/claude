const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, fig, mcq } = L;
const { Document, Packer, Paragraph, TextRun, AlignmentType, Header } = d;

const S = [];
const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1200, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 9  —  MY FIELD OF WORK', { bold: true, color: C.gr, size: 32 }, 100),
  cov('MODULUL 9  —  DOMENIUL DE ACTIVITATE', { bold: true, color: C.dk, size: 28 }, 200),
  cov('VARIANTA: CONSTRUCȚII  /  CONSTRUCTION', { bold: true, color: 'FFFFFF', size: 26, shading: { type: 'clear', fill: C.gr, color: 'auto' } }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'],
  ['A1+ — after Level A1', '12 hours · Sessions 33–36 · Weeks 17–18', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with ONE cumulative multiple-choice test (25 questions), signed and dated by the student and kept on file as proof of completion.*']));
add(box('green', 'ONE MODULE, SEVERAL FIELDS / UN MODUL, MAI MULTE DOMENII', [
  'Module 9 is about the Romanian you need **at your own workplace**. It exists in several versions — one for each field of work (construction, hotels and restaurants, cleaning, agriculture and others). All versions have the same four sessions: **tools and materials · measurements · the types of work · instructions, safety and the language of the workplace**. The student follows the version for their own job. **This book is the construction version.**']));
add(pageBreak());

// ================= BEFORE YOU START =================
add(H1('Before you start'),
  P('You have finished **Level A1**. Module 9 uses everything you know on the **building site** (**șantierul**). You will name tools, materials and protective equipment, measure and calculate, describe the main types of work step by step, understand the orders of your team leader, and know your rights and duties for **health and safety at work** (**SSM** — securitate și sănătate în muncă).'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers · de** after 20 · decimals with a comma', 'Lesson 2.5', '20 de saci, 2,50 m, 1,20 m'],
  ['**materials, shapes** — din lemn, dreptunghi', 'Lessons 4.5', 'the shape of a wall, what it is made of'],
  ['**short pronouns** — îl, o, le', 'Lesson 2.10', 'Dă-mi-l! Ține-o! Taie-le!'],
  ['**să + verb** · **trebuie să**', 'Lesson 3.11', 'Trebuie să purtăm casca.'],
  ['**orders and requests**', 'Lesson 3.13', 'Adu! Ține! Aduceți, vă rog!'],
  ['**the past · the future**', 'Lessons 3.14, 3.16', 'Am terminat. O să turnăm mâine.'],
  ['**112 · ITM**', 'Lesson 5.2', 'an accident, a problem at work'],
  ['**the body · Mă doare**', 'Lessons 8.4, 8.5', 'M-am lovit la mână. Mă doare spatele.'],
  ['**quantities** — un sac, un palet', 'Lesson 8.2', 'zece saci de adeziv']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 33**', '3 hours', 'Lesson 9.1 Tools · Lesson 9.2 Materials · Lesson 9.3 Work clothes and protective equipment'],
  ['**Session 34**', '3 hours', 'Lesson 9.4 Units of measurement · Lesson 9.5 Reading a tape measure · Lesson 9.6 Simple calculations'],
  ['**Session 35**', '3 hours', 'Lesson 9.7 Masonry · 9.8 Plastering · 9.9 Insulation and facades · 9.10 Floor and wall tiles · 9.11 Painting'],
  ['**Session 36**', '3 hours', 'Lesson 9.12 Orders on site · 9.13 Health and safety · 9.14 Site expressions and recap · **Module 9 cumulative test**']], { size: 19 }));
add(box('recap', 'NO NEW GRAMMAR IN THIS MODULE', [
  'The orders on site are the forms from **Lesson 3.13** — here you only **use** them. Everything else is words and phrases of your job: tools, materials, measurements, the steps of each type of work, safety signs and site expressions.',
  '**Words differ from site to site.** Your team may use another word for the same thing (for example **boloboc** for **nivelă**). When you hear a new word, ask: **Cum se numește asta? · Ce înseamnă...?** (Lesson 4.3).']));
add(pageBreak());

// ================= SESSION 33 =================
add(banner('SESSION 33  —  TOOLS, MATERIALS, EQUIPMENT', 'SESIUNEA 33 — UNELTE, MATERIALE, ECHIPAMENT  ·  3 hours'));
add(objectives(['name 20 hand and power tools', 'name 16 building materials and ask for them', 'name your work clothes and protective equipment', 'ask for a tool or a material: **Adu-mi..., Unde e...?, Mai avem...?**']));
add(H1('Lesson 9.1  —  Tools / Uneltele'));
add(P('**Uneltele de mână** = hand tools · **sculele electrice** = power tools (**scula** is the word used on site). Learn each tool with its article — that is how you hear it: *Unde e ciocanul? Dă-mi șurubelnița!*', { size: 19 }));
add(fig('unelte', 640, 'Fig. 9.1 — Unelte de mână și scule electrice / Hand tools and power tools'));
add(tbl([2400, 2419, 2400, 2419], [['THE TOOL', 'PLURAL · NOTE', 'THE TOOL', 'PLURAL · NOTE'],
  ['un ciocan', 'ciocane', 'o șurubelniță', 'șurubelnițe'],
  ['un clește', 'clești', 'un fierăstrău', 'fierăstraie · also **flexul** cuts'],
  ['o bormașină', 'bormașini · **mașina de găurit**', 'un flex', 'flexuri · = **polizorul unghiular**'],
  ['o nivelă', 'nivele · on site also **boloboc**', 'o ruletă', 'rulete · also **metrul**'],
  ['o mistrie', 'mistrii', 'o drișcă', 'drișce'],
  ['un șpaclu · o gletieră', 'șpacluri · gletiere', 'o pensulă · un trafalet', 'pensule · trafalete']], { size: 18 }));
add(box('attn', 'ATTENTION — FLEX AND POLIZOR', [
  '**Flexul** is the everyday name of the **polizor unghiular** (angle grinder). Many workers simply say **polizorul**. The **polizorul de banc** is the fixed bench grinder. Ask if you are not sure: *Care polizor? Flexul?*']));
add(exercise('9.1', 'Which tool?', 'Write the tool. Then ask a colleague for it: Dă-mi..., te rog!'));
add(ex2([['1.  Bat un cui (a nail) cu ______________.', '2.  Fac o gaură (a hole) cu ______________.'],
  ['3.  Tai o placă de gresie cu ______________.', '4.  Verific dacă e drept cu ______________.'],
  ['5.  Pun mortarul cu ______________.', '6.  Vopsesc peretele cu ______________.']]));
add(useful([['Dă-mi ciocanul!', 'Give me the hammer!'], ['Unde e ruleta?', 'Where is the tape measure?'], ['Nu merge bormașina.', 'The drill doesn\'t work.'], ['S-a descărcat acumulatorul.', 'The battery is flat.'],
  ['burghiul · discul · lama', 'drill bit · (grinder) disc · blade'], ['prelungitorul · priza', 'extension lead · socket']]));

add(H1('Lesson 9.2  —  Materials / Materialele'));
add(fig('materiale', 600, 'Fig. 9.2 — Materiale de construcții / Building materials'));
add(tbl([2400, 2419, 2400, 2419], [['MATERIAL', 'HOW YOU BUY IT', 'MATERIAL', 'HOW YOU BUY IT'],
  ['**cimentul · varul · adezivul**', 'un **sac** de... (25 or 40 kg)', '**nisipul**', 'o **tonă**, un **mc** (m³)'],
  ['**BCA-ul · cărămida**', 'o **bucată**, un **palet** de...', '**polistirenul · vata minerală**', 'o **placă**, un **pachet**, o **rolă**'],
  ['**plasa (din fibră de sticlă)**', 'o **rolă** de plasă', '**diblurile**', 'o **cutie** de dibluri'],
  ['**gips-cartonul**', 'o **placă** de gips-carton', '**gresia · faianța**', 'o **cutie**, un **mp** (m²)'],
  ['**vopseaua · amorsa**', 'o **găleată**, un **bidon** (litri)', '**gletul · mortarul**', 'un **sac** de...']], { size: 18 }));
add(box('recap', 'RECAP — QUANTITY + DE  (Lesson 8.2)', [
  '**un sac de ciment · doi saci de adeziv · 20 de saci de glet · un palet de BCA · o rolă de plasă · o găleată de vopsea**. Read the bag: **Pe sac scrie...** — *It says on the bag...*']));
add(tbl([4819, 4819], [['ON SITE', 'ENGLISH'],
  ['Mai avem ciment?  —  Nu, s-a terminat. Mai trebuie cinci saci.', 'Do we still have cement? — No, it\'s finished. We need five more bags.'],
  ['Unde punem paleții de BCA?  —  Lângă betonieră.', 'Where do we put the pallets of BCA? — Next to the mixer.'],
  ['Amestecă adezivul cu apă, cum scrie pe sac.', 'Mix the adhesive with water, as it says on the bag.']], { size: 19 }));
add(exercise('9.2', 'How do you buy it?', 'Complete with: un sac · un palet · o rolă · o cutie · o găleată · o tonă.'));
add(ex2([['1.  ______________ de ciment', '2.  ______________ de cărămizi'], ['3.  ______________ de plasă', '4.  ______________ de dibluri'], ['5.  ______________ de vopsea', '6.  ______________ de nisip']]));
add(useful([['s-a terminat', 'it\'s finished / run out'], ['mai trebuie...', 'we need more...'], ['materialul a venit', 'the material has arrived'], ['a descărca un camion', 'to unload a lorry'],
  ['a amesteca', 'to mix'], ['uscat · ud', 'dry · wet']]));

add(H1('Lesson 9.3  —  Work clothes and protective equipment / Echipamentul de lucru'));
add(P('**Echipamentul individual de protecție** (**EIP**) is the equipment that protects **you**: helmet, glasses, gloves, boots, harness. Your employer must give it to you **free of charge** (HG 1048/2006), and you must **wear it correctly** (Law 319/2006). More in Lesson 9.13.', { size: 19 }));
add(fig('echipament', 470, 'Fig. 9.3 — Echipamentul de lucru și de protecție / Work and protective equipment'));
add(exercise('9.3', 'What do you wear?', 'Write the equipment.'));
add(ex2([['1.  Pe cap port ______________.', '2.  Pe mâini port ______________.'], ['3.  În picioare port ______________.', '4.  Pentru ochi port ______________.'], ['5.  Când tai cu flexul port ______________ și antifoane.', '6.  Când lucrez la înălțime port ______________.']]));
add(useful([['Mi s-a rupt mănușa.', 'My glove is torn.'], ['Am nevoie de o cască nouă.', 'I need a new helmet.'], ['Ce mărime? — Port 43.', 'What size? — I wear 43 (Lesson 6.2).'], ['la înălțime', 'at height'],
  ['vestiarul', 'the changing room'], ['dulapul', 'the locker']]));
add(hw(33, ['**H33.1**  Write the ten tools and five materials you use most at work, with un / o and the plural.', '**H33.2**  Write what protective equipment you wear every day, and what you wear only for some jobs.']));

// ================= SESSION 34 =================
add(spacer(160));
add(banner('SESSION 34  —  MEASUREMENTS AND CALCULATIONS', 'SESIUNEA 34 — MĂSURĂTORI ȘI CALCULE  ·  3 hours'));
add(objectives(['read and say units of measurement: **mm, cm, m, mp, mc, kg, l**', 'read a tape measure to the millimetre', 'calculate the surface of a wall and how many bags or boxes you need', 'understand and give short measuring instructions: **Cât măsoară? Mai taie doi centimetri.**']));
add(H1('Lesson 9.4  —  Units of measurement / Unitățile de măsură'));
add(tbl([1500, 2400, 2000, 3738], [['WRITTEN', 'YOU SAY', 'ENGLISH', 'EXAMPLE'],
  ['**mm**', 'milimetru · milimetri', 'millimetre', 'o fisură de 2 mm'],
  ['**cm**', 'centimetru · centimetri', 'centimetre', 'polistiren de 10 cm'],
  ['**m** · **ml**', 'metru · metri · metru liniar', 'metre · running metre', '25 de metri de plintă'],
  ['**m²** · **mp**', 'metru pătrat · metri pătrați', 'square metre', '40 de metri pătrați de gresie'],
  ['**m³** · **mc**', 'metru cub · metri cubi', 'cubic metre', '3 metri cubi de beton'],
  ['**kg** · **t**', 'kilogram · tonă', 'kilo · tonne', 'un sac de 40 de kilograme'],
  ['**l**', 'litru · litri', 'litre', 'o găleată de 15 litri'],
  ['**buc.** · **sac** · **palet**', 'bucată · sac · palet', 'piece · bag · pallet', '2 paleți de BCA']], { size: 18 }));
add(P('**1 m = 100 cm = 1 000 mm · 1 m³ = 1 000 l · 1 t = 1 000 kg.** On site people say **mp** (em-pe) and **mc** (em-ce).', { size: 19 }));
add(box('recap', 'RECAP — NUMBERS WITH A COMMA  (Lesson 2.5)', [
  'Romanian writes a **comma**: **2,50 m** = doi metri și cincizeci (de centimetri) · **1,20 m** = un metru douăzeci · **0,5 m** = jumătate de metru · **12,5 mp** = doisprezece virgulă cinci metri pătrați. After 20 add **de**: 25 **de** metri, 40 **de** kilograme.']));
add(exercise('9.4', 'Say it and write it', 'Write the words, then read them out loud.'));
add(ex2([['1.  3 m² = ______________________', '2.  2,5 m = ______________________'], ['3.  40 kg = ______________________', '4.  1 m³ = ______ litri'], ['5.  150 cm = ______ m', '6.  1 m = ______ mm']]));
add(useful([['lungimea · lățimea', 'the length · the width'], ['înălțimea · grosimea', 'the height · the thickness'], ['adâncimea', 'the depth'], ['cam · aproximativ', 'about, roughly'],
  ['exact', 'exactly'], ['în plus · în minus', 'more · less']]));

add(H1('Lesson 9.5  —  Reading a tape measure / Cum citești ruleta'));
add(fig('ruleta', 620, 'Fig. 9.4 — Citirea ruletei / Reading a tape measure'));
add(P('On most tapes the **big numbers are centimetres**; after 100 you read **1 m 20 = 120 cm**. Each small line is **1 mm**; the longer line in the middle is **5 mm**. Say: **un metru douăzeci și doi și jumătate** (122,5 cm) or **un metru, douăzeci și doi de centimetri și cinci milimetri**.', { size: 19 }));
add(tbl([4819, 4819], [['DIALOGUE', 'ENGLISH'],
  ['A: Cât măsoară geamul?', 'How much does the window measure?'],
  ['B: Un metru douăzeci pe un metru.', '1.20 by 1 metre.'],
  ['A: Și placa asta?', 'And this board?'],
  ['B: Un metru douăzeci și opt și patru milimetri. E prea lungă.', '1 m 28 and 4 millimetres. It\'s too long.'],
  ['A: Mai taie doi centimetri. Măsoară de două ori, taie o dată!', 'Cut two more centimetres. Measure twice, cut once!'],
  ['B: Gata. Acum e bună.', 'Done. Now it\'s right.']], { size: 19 }));
add(exercise('9.5', 'Read the tape', 'Look at Fig. 9.4. Write the measurement in cm and in m.'));
add(ex2([['1.  the line between 121 and 122 → ______ cm = ______ m', '2.  3 small lines after 124 → ______ cm'], ['3.  the middle line after 127 → ______ cm', '4.  130 cm = ______ m']]));
add(useful([['Cât măsoară?', 'How long is it? / What does it measure?'], ['... pe ...', '... by ... (1,20 pe 1)'], ['Mai taie doi centimetri.', 'Cut two more centimetres.'], ['E prea lung / scurt.', 'It\'s too long / short.'],
  ['Ține capătul!', 'Hold the end!'], ['Măsoară încă o dată.', 'Measure again.']]));

add(H1('Lesson 9.6  —  Simple calculations / Calcule simple'));
add(P('**Suprafața** (the surface, area) of a wall or a floor = **lungimea × înălțimea** (or × lățimea). A wall is a **dreptunghi** (rectangle, Lesson 4.5). From the surface you take away the doors and the windows.', { size: 19 }));
add(fig('perete', 520, 'Fig. 9.5 — Suprafața unui perete / The surface of a wall'));
add(tbl([3000, 3319, 3319], [['QUESTION', 'CALCULATION', 'ANSWER'],
  ['Câți saci de adeziv pentru 20 mp? Pe sac scrie: **5 kg/mp**, sac de 25 kg.', '20 × 5 = 100 kg · 100 : 25 = 4', '**4 saci** de adeziv'],
  ['Câte cutii de gresie pentru o cameră de 3 × 2 m? O cutie = **1,44 mp**.', '3 × 2 = 6 mp · + tăieturi (cuts) ≈ 6,6 mp · 6,6 : 1,44 ≈ 4,6', '**5 cutii** (you always round up)'],
  ['Câți metri cubi de beton pentru o placă de 3 × 2 m, groasă de 10 cm?', '3 × 2 × 0,10 = 0,6 mc', '**0,6 mc** = 600 de litri'],
  ['Câte găleți de vopsea pentru 7 mp, două straturi? Pe găleată: **10 mp/litru**, 5 l.', '7 × 2 = 14 mp · 14 : 10 = 1,4 l', '**o găleată** de 5 l ajunge']], { size: 18 }));
add(P('*The figures on bags and boxes are examples. Always read the real consumption (**consumul**) on the product and ask your team leader how much to order. For cuts, many teams add about 10% — the team leader decides.*', { size: 17, color: '555555' }));
add(tbl([2450, 2369, 2450, 2369], [['SAY IT', 'ENGLISH', 'SAY IT', 'ENGLISH'],
  ['**ori** · **×**', 'times', '**plus** · **minus**', 'plus · minus'],
  ['**împărțit la** · **:**', 'divided by', '**egal** · **=**', 'equals'],
  ['**Ajunge?**', 'Is it enough?', '**Nu ajunge.**', 'It\'s not enough.']], { size: 18 }));
add(exercise('9.6', 'Calculate', 'Write the calculation and the answer in Romanian.'));
add(ex2([['1.  Un perete de 5 m × 3 m = ______ mp', '2.  Pentru 30 mp, cu 4 kg/mp: ______ kg = ______ saci de 25 kg'], ['3.  O podea de 4 × 3 m = ______ mp', '4.  O placă de 4 × 2 m, groasă de 0,10 m = ______ mc']]));
add(useful([['Cât iese?', 'What does it come to?'], ['Fă socoteala!', 'Do the sum!'], ['Mai comandăm doi saci.', 'We\'ll order two more bags.'], ['rotunjim în sus', 'we round up'],
  ['consumul · pe sac scrie', 'the consumption · it says on the bag'], ['o rezervă', 'a spare, extra']]));
add(hw(34, ['**H34.1**  Measure a wall in your room. Write the length, the height, the window and the door, and calculate the surface to paint.', '**H34.2**  Write four sentences with measurements from your work: *Placa are 1,20 pe 0,60...*']));

// ================= SESSION 35 =================
add(spacer(160));
add(banner('SESSION 35  —  THE TYPES OF WORK', 'SESIUNEA 35 — TIPURILE DE LUCRĂRI  ·  3 hours'));
add(objectives(['say what work you do: **Lucrez la zidărie / la fațade / la finisaje**', 'name the steps of five types of work, in order', 'name the layers of a plaster and of an insulated facade', 'use: **întâi..., apoi..., după aceea..., la sfârșit...**']));
add(P('**Lucrările** (the types of work) on a site go from **structura** (the structure: foundation, walls, floor slabs) to **finisajele** (the finishes: plaster, tiles, paint). Say what you do: **Sunt zidar. · Lucrez la termoizolații. · Fac finisaje.** The order of the steps: **întâi → apoi → după aceea → la sfârșit** (first → then → after that → at the end).', { size: 19 }));
add(tbl([2400, 2419, 2400, 2419], [['THE WORK', 'THE WORKER', 'THE WORK', 'THE WORKER'],
  ['**zidăria** — masonry', '**zidarul**', '**tencuiala** — plastering', '**tencuitorul**'],
  ['**termoizolația, fațada** — insulation', '**fațadistul**', '**gresia și faianța** — tiling', '**faianțarul**'],
  ['**zugrăveala** — painting', '**zugravul**', '**betonul, cofrajul** — concrete, formwork', '**dulgherul · fierarul-betonist**']], { size: 18 }));

add(H1('Lesson 9.7  —  Masonry / Zidăria'));
add(fig('zidarie', 540, 'Fig. 9.6 — Un zid de BCA / A BCA wall'));
add(tbl([700, 3400, 5538], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', '**trasarea** peretelui', 'marking out where the wall goes'],
  ['2', '**primul rând** pe mortar, în nivel', 'the first course, on mortar, level'],
  ['3', '**adezivul / mortarul** pe blocuri, cu mistria', 'adhesive / mortar on the blocks, with the trowel'],
  ['4', 'rândurile următoare, **cu rosturile decalate** (țesere)', 'the next courses, joints staggered'],
  ['5', 'verificarea cu **nivela** și **firul cu plumb**', 'checking with the level and the plumb line'],
  ['6', '**buiandrugul** deasupra ușii și a ferestrei', 'the lintel above the door and the window']], { size: 18 }));
add(exercise('9.7', 'Put the steps in order', 'Write 1–4.'));
add(ex2([['___  Pun al doilea rând, cu rosturile decalate.', '___  Trasez peretele.'], ['___  Verific cu nivela.', '___  Pun primul rând pe mortar.']]));
add(useful([['e în nivel · e pe fir', 'it\'s level · it\'s plumb'], ['e strâmb · e drept', 'it\'s crooked · it\'s straight'], ['un rând de BCA', 'a course of BCA'], ['mortarul e prea moale', 'the mortar is too soft']]));

add(H1('Lesson 9.8  —  Plastering / Tencuielile'));
add(fig('tencuiala', 520, 'Fig. 9.7 — Straturile tencuielii / The layers of plaster'));
add(tbl([700, 3400, 5538], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', 'curățarea și **umezirea** peretelui', 'clean and wet the wall'],
  ['2', 'montarea **profilelor** (ghidajelor) și a **colțarelor**', 'fix the guide profiles and the corner beads'],
  ['3', '**amorsa** sau **șprițul**', 'primer or scratch coat'],
  ['4', '**tencuiala** — manual sau cu mașina — trasă cu **dreptarul**', 'the plaster — by hand or by machine — levelled with the straightedge'],
  ['5', '**drișcuirea** cu drișca', 'floating with the float'],
  ['6', 'după uscare: **gletul** și **șlefuirea**', 'when dry: skim coat and sanding']], { size: 18 }));
add(exercise('9.8', 'Which layer?', 'Complete with: amorsa · tencuiala · gletul · vopseaua.'));
add(ex2([['1.  Pe perete, întâi pun ______________.', '2.  Apoi pun ______________, groasă de 1–2 cm.'], ['3.  După uscare pun ______________ și șlefuiesc.', '4.  La sfârșit, zugravul dă cu ______________.']]));
add(useful([['a tencui · a gletui', 'to plaster · to skim'], ['dreptarul', 'the straightedge'], ['profilele · colțarele', 'guide profiles · corner beads'], ['e uscat? — mai așteaptă', 'is it dry? — wait a bit more']]));

add(H1('Lesson 9.9  —  Insulation and facades / Termoizolația și fațadele'));
add(fig('fatada', 520, 'Fig. 9.8 — Straturile unei fațade termoizolate / The layers of an insulated facade'));
add(tbl([700, 3400, 5538], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', 'montarea **schelei** și pregătirea peretelui', 'put up the scaffolding and prepare the wall'],
  ['2', '**profilul de soclu** jos, în nivel', 'the starter (base) profile at the bottom, level'],
  ['3', '**lipirea plăcilor** de polistiren / vată cu adeziv, decalate', 'glue the boards with adhesive, staggered'],
  ['4', '**diblurile** prin plăci, în perete', 'the anchors through the boards into the wall'],
  ['5', '**masa de șpaclu** cu **plasa** înglobată', 'the base coat with the mesh embedded'],
  ['6', '**amorsa**, apoi **tencuiala decorativă**', 'primer, then the decorative render']], { size: 18 }));
add(box('attn', 'ATTENTION — THE SCAFFOLDING', [
  'Work on the **schelă** (scaffolding) only when it is complete, stable and checked, and with the protection your team leader tells you to use (**hamul**, **balustrada**). If a part is missing, say so and **do not climb**: **Lipsește balustrada. Nu urc.**']));
add(exercise('9.9', 'What comes next?', 'Complete the sentence.'));
add(ex2([['1.  După adeziv, pun ______________.', '2.  După plăci, bat ______________.'], ['3.  În masa de șpaclu pun ______________.', '4.  La sfârșit dau cu ______________.']]));
add(useful([['schela · a urca · a coborî', 'scaffolding · to climb up · to come down'], ['polistiren de 10 (cm)', '10 cm polystyrene'], ['a lipi · a bate diblurile', 'to glue · to put in the anchors'], ['soclul', 'the plinth, base of the wall']]));

add(H1('Lesson 9.10  —  Floor and wall tiles / Gresia și faianța'));
add(P('**Gresia** goes on the floor, **faianța** on the walls (bathroom, kitchen).', { size: 19 }));
add(fig('pasi_gresie', 620, 'Fig. 9.9 — Pașii montajului / The steps of tiling'));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**adezivul pentru gresie**', 'tile adhesive', '**gletiera** (șpaclul dințat)', 'notched trowel'],
  ['**distanțierii** (crucițele)', 'tile spacers', '**chitul de rosturi**', 'grout'],
  ['**mașina de tăiat gresie**', 'tile cutter', '**ciocanul de cauciuc**', 'rubber mallet'],
  ['**rostul** de 2 mm', 'a 2 mm joint', '**plăcile** · **o placă**', 'the tiles · a tile']], { size: 18 }));
add(exercise('9.10', 'Gresie or faianță?', 'Write gresie or faianță.'));
add(ex2([['1.  Pe podeaua din bucătărie pun ______________.', '2.  Pe peretele din baie pun ______________.'], ['3.  Pe terasă (outside) pun ______________ de exterior.', '4.  În spatele chiuvetei pun ______________.']]));
add(useful([['în nivel · pe diagonală', 'level · diagonally'], ['o placă spartă', 'a broken tile'], ['tăietura · a tăia', 'the cut · to cut'], ['Lasă să se usuce 24 de ore.', 'Let it dry for 24 hours.']]));

add(H1('Lesson 9.11  —  Painting / Zugrăvelile'));
add(fig('pasi_zugraveli', 620, 'Fig. 9.10 — Pașii zugrăvelii / The steps of painting'));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**vopseaua lavabilă**', 'emulsion paint (washable)', '**banda de hârtie**', 'masking tape'],
  ['**folia de protecție**', 'protective sheet', '**hârtia abrazivă** · **șmirghel**', 'sandpaper'],
  ['**un strat** · **două straturi**', 'one coat · two coats', '**a dilua** cu apă', 'to thin with water']], { size: 18 }));
add(exercise('9.11', 'Put the steps in order', 'Write 1–5.'));
add(ex2([['___  Dau primul strat de vopsea.', '___  Acopăr mobila cu folie.'], ['___  Pun amorsa.', '___  Repar fisurile cu glet.'], ['___  Dau al doilea strat.', '']]));
add(useful([['a zugrăvi · a vopsi', 'to paint (walls) · to paint (other things)'], ['a acoperi', 'to cover'], ['e pătat · a curs vopseaua', 'it\'s stained · the paint has run'], ['Mai dă o mână.', 'Give it another coat (literally: a hand).']]));
add(hw(35, ['**H35.1**  Choose the type of work you do most. Write its steps in order with *întâi, apoi, după aceea, la sfârșit*.', '**H35.2**  Draw the layers of a facade or of a plaster from memory and write their names.']));

// ================= SESSION 36 =================
add(spacer(160));
add(banner('SESSION 36  —  ORDERS, SAFETY, EXPRESSIONS, RECAP AND TEST', 'SESIUNEA 36 — INSTRUCȚIUNI, SSM, EXPRESII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['understand and give orders on site', 'know the compulsory protective equipment and read the safety signs', 'know what the SSM training is and what you sign', 'know what to do in an accident', 'recognise the expressions you hear on site and in the street']));
add(H1('Lesson 9.12  —  Orders on site / Instrucțiuni și comenzi pe șantier'));
add(box('recap', 'RECAP — ORDERS  (Lesson 3.13)', [
  'On site the team leader usually says **tu**, so you hear the **direct** form: **Adu! Ține! Taie!** To a group or politely you hear the **voi / dumneavoastră** form: **Aduceți! Țineți!** With a short pronoun: **Dă-mi-l! · Ține-o! · Pune-le aici!**']));
add(tbl([2200, 2300, 5138], [['DIRECT (tu)', 'TO A GROUP / POLITE', 'ENGLISH — EXAMPLE'],
  ['**Adu!**', '**Aduceți!**', 'Bring! — *Adu doi saci de adeziv!*'],
  ['**Dă-mi!**', '**Dați-mi!**', 'Give me! — *Dă-mi nivela!*'],
  ['**Ține!**', '**Țineți!**', 'Hold! — *Ține scara!*'],
  ['**Taie!**', '**Tăiați!**', 'Cut! — *Taie placa la 60!*'],
  ['**Măsoară!**', '**Măsurați!**', 'Measure! — *Măsoară geamul!*'],
  ['**Pune!**', '**Puneți!**', 'Put! — *Pune paletul lângă betonieră!*'],
  ['**Ridică! · Coboară!**', '**Ridicați! · Coborâți!**', 'Lift! · Lower / come down!'],
  ['**Amestecă! · Toarnă!**', '**Amestecați! · Turnați!**', 'Mix! · Pour! — *Toarnă betonul!*'],
  ['**Pornește! · Oprește!**', '**Porniți! · Opriți!**', 'Start! · Stop! — *Oprește betoniera!*'],
  ['**Curăță! · Verifică!**', '**Curățați! · Verificați!**', 'Clean! · Check! — *Curăță sculele!*'],
  ['**Stai! · Nu atinge!**', '**Stați! · Nu atingeți!**', 'Stop! Wait! · Don\'t touch!'],
  ['**Ai grijă! · Atenție!**', '**Aveți grijă!**', 'Be careful! · Watch out!']], { size: 18 }));
add(P('Answer: **Am înțeles. · Gata! · Imediat. · Nu am înțeles, mai spuneți o dată, vă rog.** — never do a job you have not understood.', { size: 19 }));
add(exercise('9.12', 'Say the order', 'Write the direct order (tu).'));
add(ex2([['1.  (a aduce) ______________ o găleată de apă!', '2.  (a ține) ______________ scara, te rog!'], ['3.  (a opri) ______________ flexul!', '4.  (a măsura) ______________ peretele!'], ['5.  (a pune) ______________ casca!', '6.  (a curăța) ______________ mistria!']]));
add(useful([['Am înțeles.', 'Understood.'], ['Unde îl pun?', 'Where do I put it?'], ['Cu ce încep?', 'What do I start with?'], ['Am terminat. Ce fac acum?', 'I\'ve finished. What do I do now?']]));

add(H1('Lesson 9.13  —  Health and safety at work / Securitatea și sănătatea în muncă (SSM)'));
add(H2('Your duties and your rights'));
add(tbl([4819, 4819], [['YOU MUST (Law 319/2006, art. 22–23)', 'YOUR EMPLOYER MUST'],
  ['work as you were **trained**, without putting yourself or others in danger', 'give you the **protective equipment free of charge** (HG 1048/2006)'],
  ['use **machines and tools correctly** and wear the **EIP**', 'train you in SSM **before you start** work (HG 1425/2006)'],
  ['**never remove or switch off** a safety device', 'explain the risks of your workplace'],
  ['**report at once** any danger you see', 'repeat the training periodically'],
  ['tell your team leader / employer about **any accident** you have', 'If there is a problem: **ITM** (Lesson 5.2)']], { size: 18 }));
add(box('note', 'PRACTICAL NOTE — THE SSM TRAINING / INSTRUCTAJUL SSM', [
  'Before you start work you receive the **instructajul introductiv-general**, then the **instructajul la locul de muncă** (the risks of your own workplace), and later the **instructajul periodic** — the interval between two periodic trainings cannot be longer than 6 months (HG 1425/2006). At the end there is a short test and you sign the **fișa individuală de instruire**.',
  'Sign only what you have understood. If the training is only in Romanian and you do not understand, say: **Nu am înțeles. Puteți să-mi explicați, vă rog?**']));
add(box('attn', 'ATTENTION — WHAT TO DO IN AN ACCIDENT / CE FACI LA UN ACCIDENT', [
  '**1.** Stop the work and make the place safe (**Opriți! Opriți curentul!**). **2.** If someone is badly hurt, call **112** (Lesson 5.2): *Este un accident pe șantier. Un om a căzut de pe schelă.* **3.** Do not move the injured person unless there is danger; give first aid only if you know how. **4.** Tell the team leader and the employer **at once** — also if **you** are hurt, even a little (Law 319/2006, art. 23).']));
add(H2('Safety signs / Semnele de avertizare'));
add(fig('semne', 580, 'Fig. 9.11 — Indicatoare de securitate: interdicție, avertizare, obligație / Safety signs'));
add(fig('semne2', 320, 'Fig. 9.12 — Salvare și incendiu / Emergency and fire'));
add(P('*Shapes and colours of safety signs: HG 971/2006 (EU Directive 92/58/EEC). The pictograms above are simplified drawings.*', { size: 17, color: '555555' }));
add(exercise('9.13', 'Which sign?', 'Write the type: interdicție · avertizare · obligație · salvare.'));
add(ex2([['1.  un cerc albastru cu o cască → ______________', '2.  un triunghi galben cu un fulger → ______________'], ['3.  un cerc roșu cu o țigară tăiată → ______________', '4.  un pătrat verde cu o cruce albă → ______________']]));
add(useful([['M-am lovit.', 'I hurt myself / I got hit.'], ['M-am tăiat la deget.', 'I cut my finger.'], ['A căzut de pe schelă.', 'He / She fell off the scaffolding.'], ['trusa de prim ajutor', 'the first-aid kit'],
  ['E periculos.', 'It\'s dangerous.'], ['Nu lucrez fără ham.', 'I don\'t work without a harness.']]));

add(H1('Lesson 9.14  —  Site expressions and recap / Expresii de șantier și recapitulare'));
add(box('note', 'EXPRESSIONS YOU HEAR ON SITE AND IN THE STREET — FOR RECOGNITION ONLY', [
  'Informal. **Understand them**; use them only with colleagues you know well — never with a client, an official or the police.']));
add(tbl([2300, 3600, 3738], [['YOU HEAR', 'WHAT IT MEANS', 'ENGLISH'],
  ['**Hai!**', 'haide — hai să mergem, hai să începem', 'Come on! · Let\'s go!'],
  ['**Gata!**', 'am terminat · e pregătit · ajunge', 'Done! · Ready! · That\'s enough!'],
  ['**Las\' că merge.**', 'nu-i nimic, e bine și așa', 'Never mind, it\'ll work.'],
  ['**Nu-i bai.**', 'nu e nicio problemă (mai ales în Ardeal și Banat)', 'No problem.'],
  ['**Stai puțin!**', 'așteaptă un moment', 'Wait a moment!'],
  ['**Bagă mare!**', 'dă-i drumul, cu toată puterea', 'Go for it! · Full speed!'],
  ['**Merge și așa.**', 'e destul de bine, nu mai reparăm', 'It\'s good enough like that.'],
  ['**N-ai grijă!**', 'nu-ți face griji, mă ocup eu', 'Don\'t worry!'],
  ['**Ce faci, mă?**', 'salut prietenesc (sau: ce tot faci acolo?)', 'Hey, how\'s it going? / Hey, what are you doing?'],
  ['**Pe bune?**', 'serios? adevărat?', 'Really? · Seriously?'],
  ['**Lasă-l!**', 'nu-l mai deranja · lasă lucrul acolo', 'Leave him alone! · Leave it!']], { size: 17 }));
add(box('attn', 'ATTENTION — „LAS\' CĂ MERGE” IS NEVER ABOUT SAFETY', [
  '**Las\' că merge** and **merge și așa** (*it is good enough*) are **never** acceptable for safety: a scaffold without a guardrail, a harness not attached, a cable in water. Answer calmly: **Nu, așa nu e sigur.** — No, it\'s not safe like that. **Mă, măi** is familiar: fine between friends, rude to a stranger.']));
add(H2('Module 9 in one table'));
add(tbl([2410, 2410, 2410, 2408], [['TOOLS', 'MATERIALS', 'MEASURING', 'SAFETY'],
  ['ciocan · șurubelniță · clește', 'ciment · nisip · var', 'mm · cm · m', 'cască · ochelari · mănuși'],
  ['bormașină · flex · fierăstrău', 'BCA · cărămidă · mortar', 'mp · mc · ml', 'bocanci · vestă · ham'],
  ['nivelă · ruletă · mistrie · drișcă', 'polistiren · vată · plasă · dibluri', 'kg · t · l · sac · palet', 'instructajul · interdicție · avertizare'],
  ['pensulă · trafalet · găleată', 'gresie · faianță · vopsea', 'Cât măsoară? Mai taie...', 'obligație · salvare · 112']], { size: 16 }));
add(exercise('9.14', 'Everything together', 'Circle the correct word.'));
add(ex2([['1.  Fac o gaură cu ( bormașina  /  mistria ).', '2.  un sac ( de  /  din ) ciment'], ['3.  4 m × 2,5 m = 10 ( mp  /  mc )', '4.  ( Ține  /  Ține-l ) scara, te rog!'], ['5.  Pe cap port ( casca  /  hamul ).', '6.  Un triunghi galben este un semn de ( avertizare  /  obligație ).'], ['7.  La un accident grav sun la ( 112  /  ITM ).', '8.  „Nu-i bai” înseamnă: ( nu e nicio problemă  /  e periculos ).']]));
add(hw(36, ['**H36.1**  Write five orders you hear every day at work and what they mean.', '**H36.2**  Look at the safety signs on your site. Draw three of them and write what they mean.']));

// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 36, fișa de evidență a Modulului 9, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — MODULUL 9 (CONSTRUCȚII)', 'MODULE 9 — CUMULATIVE TEST · CONSTRUCTION  ·  grilă, 25 de întrebări, 25 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  ['Cu ce faci o gaură în perete?', ['cu mistria', 'cu bormașina', 'cu drișca', 'cu pensula'], 'b'],
  ['„Flexul” este:', ['polizorul unghiular', 'nivela', 'ruleta', 'scara'], 'a'],
  ['Cu ce verifici dacă un perete e drept (în nivel)?', ['cu ciocanul', 'cu clește', 'cu nivela', 'cu lopata'], 'c'],
  ['Cu ce vopsești un perete mare?', ['cu trafaletul', 'cu cutterul', 'cu fierăstrăul', 'cu roaba'], 'a'],
  ['Completează: „un sac ___ ciment”', ['din', 'cu', 'la', 'de'], 'd'],
  ['BCA-ul se cumpără de obicei la:', ['litru', 'palet', 'rolă', 'găleată'], 'b'],
  ['Ce pui între plăcile de polistiren și perete?', ['adeziv', 'vopsea', 'glet', 'gresie'], 'a'],
  ['Cine dă gratuit echipamentul individual de protecție?', ['lucrătorul', 'angajatorul', 'ITM', 'magazinul'], 'b'],
  ['Pentru ochi porți:', ['antifoane', 'mănuși', 'ochelari de protecție', 'vestă'], 'c'],
  ['1 m = ___ cm', ['10', '1 000', '100', '50'], 'c'],
  ['„mp” înseamnă:', ['metru pătrat', 'metru cub', 'milimetru', 'metru liniar'], 'a'],
  ['Un perete de 4 m × 2,5 m are:', ['6,5 mp', '10 mp', '10 mc', '8 mp'], 'b'],
  ['„2,50 m” se citește:', ['doi metri cincizeci', 'douăzeci și cinci de metri', 'doi metri cinci', 'două sute cincizeci de metri'], 'a'],
  ['„Mai taie doi centimetri.” înseamnă:', ['Measure two centimetres.', 'Cut two more centimetres.', 'It\'s two centimetres short.', 'Hold two centimetres.'], 'b'],
  ['La o fațadă, după lipirea plăcilor de polistiren pui:', ['gresia', 'diblurile', 'faianța', 'cofrajul'], 'b'],
  ['În masa de șpaclu a fațadei se înglobează:', ['plasa', 'cărămida', 'vata', 'nisipul'], 'a'],
  ['Gresia se pune:', ['pe tavan', 'pe podea', 'pe acoperiș', 'în perete'], 'b'],
  ['Ce pui între plăcile de gresie ca rostul să fie egal?', ['dibluri', 'distanțieri (crucițe)', 'cuie', 'bandă'], 'b'],
  ['La zugrăveală, înainte de vopsea pui:', ['amorsa', 'adezivul de gresie', 'polistirenul', 'mortarul'], 'a'],
  ['Ordinul direct „Ține scara!” vine de la verbul:', ['a lua', 'a ține', 'a tăia', 'a da'], 'b'],
  ['Șeful spune: „Oprește betoniera!” Ce faci?', ['O pornesc.', 'O opresc.', 'O curăț.', 'O mut.'], 'b'],
  ['Un semn rotund, albastru, cu o cască înseamnă:', ['Casca e interzisă.', 'Purtați casca! (obligație)', 'Pericol electric.', 'Prim ajutor.'], 'b'],
  ['Un triunghi galben cu margine neagră este un semn de:', ['interdicție', 'obligație', 'avertizare', 'salvare'], 'c'],
  ['Te-ai lovit ușor la mână pe șantier. Ce faci?', ['Nu spui nimic.', 'Anunți șeful de echipă / angajatorul.', 'Pleci acasă fără să spui.', 'Suni la ITM.'], 'b'],
  ['„Nu-i bai” înseamnă:', ['E periculos.', 'Nu e nicio problemă.', 'Stai puțin.', 'Am terminat.'], 'b'],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 25'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(80));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [
  ['Module / Modul', 'Modulul 9 — Domeniul de activitate: Construcții (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 36 — Instrucțiuni, SSM, expresii, recapitulare. TEST CUMULATIV MODULUL 9'],
  ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'], ['Student name / Nume și prenume cursant', ''],
  ['Score / Punctaj obținut', '_______ / 25'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(120));
add(banner('MODULE 9 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 9 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''],
  ['Modul / Module', 'Modulul 9 — Domeniul de activitate: Construcții (12 ore, Sesiunile 33–36)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['33', 'Sesiunea 33 — Unelte, materiale, echipament de lucru și de protecție (3 ore)', '', '—', ''],
  ['34', 'Sesiunea 34 — Unități de măsură, ruleta, calcule simple (3 ore)', '', '—', ''],
  ['35', 'Sesiunea 35 — Zidărie, tencuieli, termoizolații și fațade, gresie și faianță, zugrăveli (3 ore)', '', '—', ''],
  ['36', 'Sesiunea 36 — Instrucțiuni pe șantier, SSM, expresii, recapitulare + TEST CUMULATIV (3 ore)', '', '___ / 25', '']], { size: 18 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 9 — Domeniul de activitate: Construcții, în total 12 ore de curs, și a susținut testul de evaluare consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 9 — My Field of Work: Construction, 12 course hours in total, and sat the assessment recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(120));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(key('**9.1**   ciocanul · bormașina · flexul (mașina de tăiat gresie) · nivela · mistria · trafaletul / pensula'),
  key('**9.2**   un sac · un palet · o rolă · o cutie · o găleată · o tonă'),
  key('**9.3**   casca · mănușile · bocancii · ochelarii de protecție · masca / ochelarii · hamul'),
  key('**9.4**   trei metri pătrați · doi metri și cincizeci / doi virgulă cinci metri · patruzeci de kilograme · 1 000 · 1,5 · 1 000'),
  key('**9.5**   121,5 cm = 1,215 m · 124,3 cm · 127,5 cm · 1,30 m'),
  key('**9.6**   15 mp · 120 kg = 5 saci (4,8 → rotunjim în sus) · 12 mp · 0,8 mc'),
  key('**9.7**   3 · 1 · 4 · 2      **9.8**   amorsa · tencuiala · gletul · vopseaua'),
  key('**9.9**   plăcile (de polistiren / vată) · diblurile · plasa · amorsa, apoi tencuiala decorativă'),
  key('**9.10**   gresie · faianță · gresie · faianță'),
  key('**9.11**   4 · 1 · 3 · 2 · 5  (order: folie → glet → amorsă → stratul 1 → stratul 2)'),
  key('**9.12**   Adu · Ține · Oprește · Măsoară · Pune · Curăță'),
  key('**9.13**   obligație · avertizare · interdicție · salvare'),
  key('**9.14**   bormașina · de · mp · Ține · casca · avertizare · 112 · nu e nicio problemă'),
  H2('Cumulative test — grilă answer key'),
  P('**TOTAL: 25 de puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
const ans = Q.map(q => q[2]);
const rows = []; for (let r = 0; r < 3; r++) rows.push(Array.from({ length: 10 }, (_, i) => { const n = r * 10 + i; return n < 25 ? `**${n + 1}** – ${ans[n]}` : ''; }));
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), rows, { header: false, size: 18 }));
add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The legal information in this module was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Obligațiile lucrătorilor: activitate conform instruirii; utilizarea corectă a echipamentelor și a EIP; nu se scot dispozitivele de securitate; comunicarea imediată a pericolelor; informarea despre accidente', 'Legea nr. 319/2006 a securității și sănătății în muncă, art. 22–23 — legislatie.just.ro/Public/DetaliiDocumentAfis/73772', 'Lessons 9.3, 9.13, test q. 24'],
  ['EIP se acordă gratuit de angajator', 'HG nr. 1048/2006, art. 10 — legislatie.just.ro/Public/DetaliiDocumentAfis/74559', 'Lessons 9.3, 9.13, test q. 8'],
  ['Instructajul introductiv-general, la locul de muncă, periodic (interval de max. 6 luni); fișa individuală de instruire', 'HG nr. 1425/2006 — Normele metodologice de aplicare a Legii nr. 319/2006 — legislatie.just.ro/Public/DetaliiDocument/76337; ITM', 'Lesson 9.13'],
  ['Semnalizarea de securitate: forme și culori (interdicție, avertizare, obligație, salvare, incendiu)', 'HG nr. 971/2006 — legislatie.just.ro/Public/DetaliiDocumentAfis/74127; Directiva 92/58/CEE — eur-lex.europa.eu', 'Lesson 9.13, test q. 22–23'],
  ['Lecțiile anterioare citate', 'Modulele 1–8: 2.5, 2.10, 3.11, 3.13, 3.14, 3.16, 4.3, 4.5, 5.2, 6.2, 8.2, 8.4, 8.5', 'whole module']], { size: 15 }));
add(P('*Pașii lucrărilor, straturile și cifrele de consum din exerciții sunt exemple didactice de vocabular, nu instrucțiuni tehnice: pe șantier se respectă proiectul, fișa tehnică a produsului și indicațiile șefului de echipă. / The work steps, layers and consumption figures are teaching examples for vocabulary, not technical instructions.*', { size: 15, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 9 — Domeniul de activitate: Construcții',
  styles: {
    default: { document: { run: { font: 'Arial', size: 20 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 9 — DOMENIUL DE ACTIVITATE: CONSTRUCȚII', color: '777777', size: 16 })] })] }) },
    children: S,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm9.docx', b); console.log('written'); });
