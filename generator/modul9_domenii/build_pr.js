const fs = require('fs');
const L = require('./lib');
const Cm = require('./common9');
const { P, spacer, pageBreak, H1, H2, tbl, box, banner, objectives, exercise, useful, fig } = L;
const { Packer } = L.d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });
const dom = { ro: 'Producție (industrie)', en: 'Manufacturing' };

Cm.cover(add, dom);
add(H1('Before you start'),
  P('You have finished **Level A1**. Module 9 uses everything you know in the **factory** (**fabrica**): on a production line for **clothes, car parts, wood or food**. You will name machines, tools and parts, read measurements and a work order, follow the product from raw material to packing, check quality, work in shifts, and know your duties for **health and safety at work** (SSM).'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers · de** after 20 · decimals', 'Lesson 2.5', '25,4 mm · 480 de piese · 2%'],
  ['**materials, shapes, colours**', 'Lessons 4.4, 4.5', 'din metal, din lemn · piesa roșie'],
  ['**orders and requests**', 'Lesson 3.13', 'Pornește! Oprește! Verificați!'],
  ['**the time, the days**', 'Lesson 5.4', 'tura de la 6 la 14'],
  ['**the past · the future**', 'Lessons 3.14, 3.16', 'Am terminat lotul. O să schimbăm scula.'],
  ['**the body · Mă doare · M-am tăiat**', 'Lessons 8.4, 8.5', 'accidents at work'],
  ['**112 · ITM**', 'Lesson 5.2', 'an accident, a problem at work']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 33**', '3 hours', 'Lesson 9.1 Machines and tools · 9.2 Materials, parts, products · 9.3 Work clothes and protective equipment'],
  ['**Session 34**', '3 hours', 'Lesson 9.4 Units · 9.5 Measuring and the work order · 9.6 Simple calculations'],
  ['**Session 35**', '3 hours', 'Lesson 9.7 The line and the shifts · 9.8 Quality · 9.9 Textiles · 9.10 Car parts and assembly · 9.11 Wood and food'],
  ['**Session 36**', '3 hours', 'Lesson 9.12 Orders at work · 9.13 Safety at work · 9.14 Expressions and recap · **Module 9 cumulative test**']], { size: 19 }));
Cm.recapNoGrammar(add, 'One factory says **rebut**, another **piesă neconformă**; one says **normă**, another **target**. Many factories also use English words: *setup, check, lot*.');
add(pageBreak());

// S33
add(banner('SESSION 33  —  MACHINES, PARTS, EQUIPMENT', 'SESIUNEA 33 — UTILAJE, PIESE, ECHIPAMENT  ·  3 hours'));
add(objectives(['name 16 machines, tools and things in a factory', 'name materials, parts and products', 'name your work clothes and protective equipment']));
add(H1('Lesson 9.1  —  Machines and tools / Utilaje și scule'));
add(fig('pr_utilaje', 620, 'Fig. 9.1 — În fabrică / In the factory'));
add(P('People: **operatorul** (machine operator) · **muncitorul necalificat** (unskilled worker) · **ajutorul** · **controlorul de calitate** (quality inspector) · **mecanicul / tehnicianul de întreținere** (maintenance) · **șeful de tură / de linie** (shift / line leader) · **maistrul** (foreman).', { size: 19 }));
add(exercise('9.1', 'Which one?', 'Write the word.'));
add(ex2([['1.  Piesele merg pe ______________.', '2.  În caz de pericol apăs ______________.'], ['3.  Măsor piesa cu ______________.', '4.  Cos cu ______________.'], ['5.  Pun piesele bune în ______________.', '6.  Strâng șurubul cu ______________.']]));
add(useful([['Pornesc mașina.', 'I start the machine.'], ['S-a oprit mașina.', 'The machine has stopped.'], ['s-a blocat', 'it\'s jammed'], ['Chem mecanicul.', 'I\'ll call the mechanic.'], ['scula · dispozitivul', 'the tool · the fixture'], ['setarea mașinii', 'the machine setup']]));

add(H1('Lesson 9.2  —  Materials, parts, products / Materiale, piese, produse'));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**materia primă**', 'raw material', '**semifabricatul**', 'semi-finished product'],
  ['**piesa · componenta**', 'part · component', '**produsul finit**', 'finished product'],
  ['**lotul**', 'batch, lot', '**rebutul**', 'reject, scrap part'],
  ['**deșeul**', 'waste', '**ambalajul**', 'packaging']], { size: 18 }));
add(tbl([2410, 2410, 2410, 2408], [['TEXTILE', 'AUTO PARTS', 'WOOD', 'FOOD'],
  ['țesătura · materialul', 'cablul · firul', 'placa · PAL-ul', 'ingredientele'],
  ['ața · nasturii', 'conectorul', 'scândura', 'aluatul (dough)'],
  ['fermoarul', 'cablajul (wiring harness)', 'balamaua (hinge)', 'caserola · punga'],
  ['tiparul (pattern)', 'clema · șurubul', 'lacul · vopseaua', 'eticheta cu lotul']], { size: 17 }));
add(exercise('9.2', 'Which sector?', 'Write: textile · auto · lemn · alimentar.'));
add(ex2([['1.  fermoarul → ______________', '2.  cablajul → ______________'], ['3.  scândura → ______________', '4.  aluatul → ______________']]));
add(useful([['din ce e făcut?', 'what is it made of? (Lesson 4.5)'], ['piesa bună · piesa rea', 'good part · bad part'], ['lotul nr. 245', 'batch no. 245'], ['a terminat materialul', 'the material has run out']]));

add(H1('Lesson 9.3  —  Work clothes and protective equipment / Echipamentul de lucru'));
add(fig('pr_echipament', 440, 'Fig. 9.2 — Echipamentul de protecție în fabrică / Protective equipment in the factory'));
add(P('Your employer must give you the protective equipment **free of charge** (HG 1048/2006) and you must **wear it** (Law 319/2006). What you wear depends on your post: **antifoanele** where it is noisy, **ochelarii** at machines with chips or dust, **boneta** in the food industry. Long hair tied, no rings or loose sleeves near moving machines.', { size: 19 }));
add(exercise('9.3', 'What do you wear?', 'Complete.'));
add(ex2([['1.  E zgomot. Port ______________.', '2.  Sar așchii. Port ______________.'], ['3.  Lucrez cu alimente. Port ______________.', '4.  Lucrez cu tablă. Port ______________.']]));
add(useful([['e zgomot', 'it\'s noisy'], ['așchiile · praful', 'chips · dust'], ['părul legat', 'hair tied back'], ['fără inele', 'no rings']]));
add(hw(33, ['**H33.1**  Write ten things you use at work, with un / o and the plural.', '**H33.2**  Write what you produce and what the raw material is: *Facem... din...*']));

// S34
add(spacer(160));
add(banner('SESSION 34  —  UNITS, MEASURING, WORK ORDER, CALCULATIONS', 'SESIUNEA 34 — UNITĂȚI, MĂSURARE, FIȘA DE LUCRU, CALCULE  ·  3 hours'));
add(objectives(['read mm, tolerances, pieces per hour, percentages', 'read a calliper and a work order', 'calculate the norm, the reject rate and what is left']));
add(H1('Lesson 9.4  —  Units / Unitățile de măsură'));
add(tbl([1700, 2600, 2000, 3338], [['WRITTEN', 'YOU SAY', 'ENGLISH', 'EXAMPLE'],
  ['**mm**', 'milimetru', 'millimetre', 'o gaură de 8 mm'],
  ['**± 0,1 mm**', 'plus-minus o zecime de milimetru', 'tolerance ± 0.1 mm', 'cota 25,4 ± 0,1'],
  ['**buc./oră · buc./tură**', 'bucăți pe oră / pe tură', 'pieces per hour / shift', '60 de bucăți pe oră'],
  ['**%**', 'la sută', 'per cent', '2% rebut'],
  ['**°C · s**', 'grade · secunde', 'degrees · seconds', 'ciclul are 45 de secunde']], { size: 18 }));
add(box('recap', 'RECAP — NUMBERS WITH A COMMA  (Lesson 2.5)', ['**25,4** = douăzeci și cinci virgulă patru · **0,1** = zero virgulă unu (o zecime) · **2%** = doi la sută · after 20: **480 de piese**.']));
add(exercise('9.4', 'Say it', 'Write the words.'));
add(ex2([['1.  12,5 mm = ______________________', '2.  3% = ______________________'], ['3.  60 buc./oră = ______________________', '4.  ± 0,2 mm = ______________________']]));
add(useful([['cota', 'the (drawing) dimension'], ['toleranța', 'the tolerance'], ['norma', 'the target, quota'], ['ciclul', 'the cycle time']]));

add(H1('Lesson 9.5  —  Measuring and the work order / Măsurarea și fișa de lucru'));
add(fig('pr_subler', 600, 'Fig. 9.3 — Măsurarea cu șublerul / Measuring with a calliper'));
add(tbl([4819, 4819], [['FIȘA DE LUCRU — the work order', 'HOW YOU READ IT'],
  ['**Comanda:** 2026/0458 · **Produs:** Suport metalic S-12', 'the order number · the product'],
  ['**Cantitate:** 480 buc. · **Lot:** 245', 'quantity 480 pieces · batch 245'],
  ['**Cota critică:** 25,4 ± 0,1 mm', 'the critical dimension and its tolerance'],
  ['**Control:** 1 piesă / 20 buc.', 'check one part in every 20'],
  ['**Termen:** tura I, 24.09', 'deadline: first shift, 24 September']], { size: 18 }));
add(exercise('9.5', 'Read the work order', 'Answer.'));
add(ex2([['1.  Câte piese trebuie? — ______________', '2.  Ce lot? — ______________'], ['3.  Piesa are 25,55 mm. E conformă? — ______________', '4.  Câte piese controlezi din 100? — ______________']]));
add(useful([['a măsura · măsurătoarea', 'to measure · the measurement'], ['desenul tehnic', 'the technical drawing'], ['conform · neconform', 'within spec · out of spec'], ['a nota în fișă', 'to write it on the sheet']]));

add(H1('Lesson 9.6  —  Simple calculations / Calcule simple'));
add(tbl([3000, 3319, 3319], [['QUESTION', 'CALCULATION', 'ANSWER'],
  ['Norma: 60 buc./oră. Tura are 7,5 ore de lucru. Câte piese pe tură?', '60 × 7,5 = 450', '**450 de piese**'],
  ['Din 500 de piese, 10 sunt rebut. Cât la sută?', '10 : 500 × 100 = 2', '**2% rebut**'],
  ['Comanda: 480 buc. Ai făcut 312. Câte mai sunt?', '480 − 312 = 168', '**168 de piese**'],
  ['O cutie are 24 de piese. Câte cutii pentru 480?', '480 : 24 = 20', '**20 de cutii**']], { size: 18 }));
add(exercise('9.6', 'Calculate', 'Write the answer.'));
add(ex2([['1.  40 buc./oră × 8 ore = ______', '2.  5 rebuturi din 250 = ______ %'], ['3.  600 − 455 = ______ piese', '4.  360 de piese : 30 pe cutie = ______ cutii']]));
add(useful([['Cât am făcut?', 'How many have I done?'], ['Mai am 168.', 'I have 168 left.'], ['am depășit norma', 'I\'ve exceeded the target'], ['n-am atins norma', 'I didn\'t reach the target']]));
add(hw(34, ['**H34.1**  Write the numbers of your job: your norm, your shift, the parts in a box.', '**H34.2**  Measure three things at home in mm and write them.']));

// S35
add(spacer(160));
add(banner('SESSION 35  —  THE WORK STEP BY STEP', 'SESIUNEA 35 — LUCRUL PAS CU PAS  ·  3 hours'));
add(objectives(['follow the product along the line and hand over your shift', 'check quality and report a defect', 'name the steps in textiles, car parts, wood and food']));
add(H1('Lesson 9.7  —  The line and the shifts / Linia și turele'));
add(fig('pr_linie', 620, 'Fig. 9.4 — Linia de producție / The production line'));
add(fig('pr_ture', 560, 'Fig. 9.5 — Turele (exemplu) / Shifts (example)'));
add(tbl([4819, 4819], [['SHIFT HANDOVER / PREDAREA TUREI', 'ENGLISH'],
  ['Am făcut 410 piese din 480. Mai sunt 70.', 'I made 410 parts out of 480. There are 70 left.'],
  ['Mașina 3 a avut o problemă la ora 11. Am chemat mecanicul.', 'Machine 3 had a problem at 11. I called the mechanic.'],
  ['Materialul e pe terminate. Trebuie cerut din depozit.', 'The material is running out. It must be ordered from the store.']], { size: 19 }));
add(exercise('9.7', 'Your shift', 'Answer about yourself.'));
add(ex2([['1.  În ce tură lucrezi? — ______________', '2.  La ce oră începe? — ______________']]));
add(useful([['tura de zi / de noapte', 'day / night shift'], ['pauza de masă', 'meal break'], ['a preda tura', 'to hand over the shift'], ['ore suplimentare', 'overtime']]));

add(H1('Lesson 9.8  —  Quality / Calitatea'));
add(fig('pr_defecte', 600, 'Fig. 9.6 — Piese conforme și neconforme / Good and bad parts'));
add(tbl([700, 3800, 5138], [['NR.', 'WHEN YOU FIND A DEFECT', 'ENGLISH'],
  ['1', '**oprești**: nu pui piesa la cele bune', 'stop: don\'t put the part with the good ones'],
  ['2', 'o pui în **cutia roșie / de rebut**', 'put it in the red / reject box'],
  ['3', '**anunți** șeful de linie sau controlorul', 'tell the line leader or the inspector'],
  ['4', '**notezi** în fișă: ce defect, câte piese, ora', 'write it on the sheet: which defect, how many, the time']], { size: 18 }));
add(exercise('9.8', 'Name the defect', 'Write: zgâriată · fisurată · deformată · incompletă.'));
add(ex2([['1.  Piesa are o crăpătură. → ______________', '2.  Lipsește o componentă. → ______________'], ['3.  Piesa e îndoită. → ______________', '4.  Are o linie pe suprafață. → ______________']]));
add(useful([['defectul', 'the defect'], ['cutia de rebut', 'the reject box'], ['a sorta', 'to sort'], ['e în regulă', 'it\'s OK']]));

add(H1('Lesson 9.9  —  Textiles / Confecții textile'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', '**croitul**: tai materialul după tipar', 'cutting the fabric with the pattern'],
  ['2', '**cusutul** la mașină', 'sewing at the machine'],
  ['3', '**surfilatul** marginilor', 'overlocking the edges'],
  ['4', '**nasturii · fermoarul · etichetele**', 'buttons · zip · labels'],
  ['5', '**călcatul** cu fierul', 'ironing'],
  ['6', '**controlul** și **ambalarea**', 'checking and packing']], { size: 18 }));
add(exercise('9.9', 'Put in order', 'Write 1–4.'));
add(ex2([['___  Calc produsul.', '___  Tai materialul.'], ['___  Cos piesele.', '___  Ambalez.']]));
add(useful([['s-a rupt ața', 'the thread broke'], ['acul', 'the needle'], ['cusătura', 'the seam'], ['mărimea S, M, L (Lesson 6.2)', 'size S, M, L']]));

add(H1('Lesson 9.10  —  Car parts and assembly / Componente auto și asamblare'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', 'iei **componentele** din cutii, după **instrucțiunea de lucru**', 'take the components following the work instruction'],
  ['2', '**asamblezi** / **conectezi**: conectorul face „clic”', 'assemble / connect: the connector clicks'],
  ['3', '**strângi** șuruburile cu înșurubătorul', 'tighten the screws'],
  ['4', '**testezi** (testul electric, vizual)', 'test (electrical, visual)'],
  ['5', '**etichetezi** și pui în **ambalaj**', 'label and pack']], { size: 18 }));
add(exercise('9.10', 'Complete', 'Use: conectorul · testez · strâng · eticheta.'));
add(ex2([['1.  Pun ______________ până face clic.', '2.  ______________ șuruburile.'], ['3.  ______________ piesa la bancul de test.', '4.  Lipesc ______________ pe cutie.']]));
add(useful([['instrucțiunea de lucru', 'work instruction'], ['bancul de test', 'test bench'], ['a asambla', 'to assemble'], ['nu face clic', 'it doesn\'t click']]));

add(H1('Lesson 9.11  —  Wood and food / Lemnul și industria alimentară'));
add(tbl([4819, 4819], [['WOOD / LEMNUL', 'FOOD / ALIMENTAR'],
  ['**debitarea**: tai plăcile la dimensiune', '**igiena**: mâini spălate, boneta, halat curat'],
  ['**găurirea** și **frezarea**', '**prepararea**: amesteci, frămânți, coci'],
  ['**șlefuirea** cu hârtie abrazivă', '**porționarea** și **ambalarea**'],
  ['**asamblarea**: balamale, șuruburi', '**etichetarea**: lotul și data'],
  ['**finisarea**: lac, vopsea', '**curățenia** liniei la sfârșitul turei']], { size: 18 }));
add(P('In the food industry the same hygiene rules as in a kitchen apply: you need the **hygiene course certificate** (Order of the Ministry of Health no. 1225/2003) and you tell the manager if you are ill.', { size: 19 }));
add(exercise('9.11', 'Wood or food?', 'Write L (lemn) or A (alimentar).'));
add(ex2([['1.  șlefuirea ___', '2.  boneta ___'], ['3.  aluatul ___', '4.  balamaua ___']]));
add(useful([['praful de lemn', 'wood dust'], ['a frământa', 'to knead'], ['data fabricației', 'production date'], ['a dezinfecta', 'to disinfect']]));
add(hw(35, ['**H35.1**  Write the steps of your job in order with *întâi, apoi, după aceea, la sfârșit*.', '**H35.2**  Write a shift handover: what you made, what problem there was, what is missing.']));

// S36
add(spacer(160));
add(banner('SESSION 36  —  ORDERS, SAFETY, EXPRESSIONS, RECAP AND TEST', 'SESIUNEA 36 — COMENZI, SSM, EXPRESII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['understand the orders of your line leader', 'work safely at machines, with noise and chemicals', 'read the chemical hazard pictograms', 'recognise the expressions you hear at work and in the street']));
add(H1('Lesson 9.12  —  Orders at work / Comenzi la lucru'));
add(box('recap', 'RECAP — ORDERS  (Lesson 3.13)', ['The line leader says **tu**: **Pornește! Oprește!** To a group or politely: **Porniți! Verificați!**']));
add(tbl([2200, 2300, 5138], [['DIRECT (tu)', 'TO A GROUP / POLITE', 'ENGLISH — EXAMPLE'],
  ['**Pornește! · Oprește!**', '**Porniți! · Opriți!**', 'Start! · Stop! — *Oprește mașina!*'],
  ['**Schimbă!**', '**Schimbați!**', 'Change! — *Schimbă scula!*'],
  ['**Alimentează!**', '**Alimentați!**', 'Feed! — *Alimentează linia cu material!*'],
  ['**Verifică! · Măsoară!**', '**Verificați! · Măsurați!**', 'Check! · Measure! — *Măsoară fiecare a 20-a piesă!*'],
  ['**Scoate!**', '**Scoateți!**', 'Take out! — *Scoate rebutul!*'],
  ['**Etichetează! · Numără!**', '**Etichetați! · Numărați!**', 'Label! · Count! — *Etichetează lotul!*'],
  ['**Curăță!**', '**Curățați!**', 'Clean! — *Curăță mașina la sfârșitul turei!*']], { size: 18 }));
add(exercise('9.12', 'Say the order', 'Write the direct order (tu).'));
add(ex2([['1.  (a opri) ______________ banda!', '2.  (a măsura) ______________ piesa!'], ['3.  (a scoate) ______________ rebutul!', '4.  (a curăța) ______________ mașina!']]));
add(useful([['Am înțeles.', 'Understood.'], ['Gata lotul.', 'The batch is done.'], ['Ce fac acum?', 'What do I do now?'], ['Nu merge.', 'It doesn\'t work.']]));

add(H1('Lesson 9.13  —  Safety at work / Securitatea și sănătatea în muncă'));
Cm.ssmCore(add);
add(tbl([2600, 7038], [['THE RISK', 'WHAT YOU DO'],
  ['**mașina în mișcare**', 'never put your hand in a running machine; never remove a guard (**protecția**)'],
  ['**butonul STOP**', 'know where it is; press it in danger'],
  ['**intervenția la mașină**', 'a jam or a repair: the machine is **stopped and secured** first; only the authorised mechanic repairs'],
  ['**zgomotul** — noise', 'where the noise is high, hearing protection must be worn (from 85 dB(A), HG 493/2006)'],
  ['**substanțele chimice**', 'read the label and the pictograms; gloves, glasses; never eat or drink at the post'],
  ['**stivuitoarele · greutățile**', 'walk on the marked paths; lift with your legs (HG 1051/2006)']], { size: 18 }));
add(fig('pr_clp', 620, 'Fig. 9.7 — Pictogramele de pericol chimic / Chemical hazard pictograms'));
add(P('*Chemical hazard pictograms: a red diamond with a black symbol (Regulation (EC) 1272/2008 — CLP). Simplified drawings.*', { size: 17, color: '555555' }));
add(box('attn', 'ATTENTION — AN ACCIDENT', ['Press **STOP**, make the place safe, call **112** if someone is badly hurt (Lesson 5.2), tell the line leader **at once** — also about a small accident of your own (Law 319/2006, art. 23).']));
add(exercise('9.13', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  O piesă s-a blocat în mașină. → ______________________', '2.  Nu ai antifoane și e zgomot mare. → ______________________']]));
add(useful([['protecția mașinii', 'the machine guard'], ['a bloca · a asigura', 'to lock · to secure'], ['M-am prins la mână.', 'My hand got caught.'], ['E periculos.', 'It\'s dangerous.']]));

add(H1('Lesson 9.14  —  Expressions and recap / Expresii și recapitulare'));
Cm.expressions(add, 'IN THE FACTORY', [
  ['**Dă-i bice!**', 'grăbește-te, mai repede', 'Hurry up!'],
  ['**S-a stricat iar.**', 'mașina nu mai merge din nou', 'It\'s broken again.']],
  'a guard removed "just for a minute", a hand in a machine that is still moving, no ear defenders in the noise');
add(H2('Module 9 in one table'));
add(tbl([2410, 2410, 2410, 2408], [['MACHINES', 'PARTS & QUALITY', 'NUMBERS', 'SAFETY'],
  ['bandă · utilaj · panou', 'materie primă · piesă', 'mm · ± 0,1', 'butonul STOP'],
  ['înșurubător · cheie', 'lot · rebut · produs finit', 'buc./oră · normă', 'protecția mașinii'],
  ['mașină de cusut · presă', 'conform · neconform', '% rebut', 'antifoane · ochelari'],
  ['șubler', 'zgâriată · fisurată', 'tura I, II, III', 'pictograme CLP · 112']], { size: 16 }));
add(exercise('9.14', 'Everything together', 'Circle the correct word.'));
add(ex2([['1.  Măsor piesa cu ( șublerul  /  foarfeca ).', '2.  25,4 ± 0,1: piesa de 25,6 este ( conformă  /  neconformă ).'], ['3.  10 rebuturi din 500 = ( 2%  /  10% )', '4.  ( Oprește  /  Opriți ) mașina! (to one person)'], ['5.  Piesa rea o pun în cutia de ( rebut  /  produse bune ).', '6.  Mâna în mașina pornită: ( niciodată  /  uneori ).']]));
add(hw(36, ['**H36.1**  Write five orders you hear every day at work and what they mean.', '**H36.2**  Write what you do when a machine jams.']));

const Q = [
  ['În caz de pericol la mașină apeși:', ['butonul STOP', 'butonul de pornire', 'ecranul', 'banda'], 'a'],
  ['Cu ce măsori o piesă la zecimi de milimetru?', ['cu ruleta', 'cu șublerul', 'cu cântarul', 'cu foarfeca'], 'b'],
  ['Piesele merg de la un post la altul pe:', ['bandă', 'raft', 'palet', 'scară'], 'a'],
  ['„Rebutul” este:', ['o piesă bună', 'o piesă neconformă', 'materia primă', 'ambalajul'], 'b'],
  ['„Produsul finit” este:', ['materia primă', 'produsul terminat', 'deșeul', 'scula'], 'b'],
  ['Unde e zgomot mare porți:', ['antifoane', 'boneta', 'vesta', 'sandale'], 'a'],
  ['Cine dă gratuit echipamentul de protecție?', ['lucrătorul', 'angajatorul', 'controlorul', 'clientul'], 'b'],
  ['„± 0,1 mm” se citește:', ['plus-minus o zecime de milimetru', 'zero virgulă unu metri', 'zece milimetri', 'unu la sută'], 'a'],
  ['Norma: 50 buc./oră, 8 ore. Câte piese?', ['58', '400', '350', '500'], 'b'],
  ['10 rebuturi din 500 de piese =', ['1%', '2%', '5%', '10%'], 'b'],
  ['Cota 25,4 ± 0,1 mm. Piesa de 25,45 mm este:', ['conformă', 'neconformă', 'rebut sigur', 'fără importanță'], 'a'],
  ['Pe fișa de lucru „Lot: 245” înseamnă:', ['numărul lotului', '245 de piese rebut', 'ora 2:45', 'mașina 245'], 'a'],
  ['Tura a II-a este de obicei:', ['dimineața', 'după-amiaza', 'noaptea', 'duminica'], 'b'],
  ['La predarea turei spui:', ['câte piese ai făcut și ce probleme au fost', 'nimic', 'numai ora', 'numele mașinii'], 'a'],
  ['Găsești o piesă fisurată. Ce faci?', ['o pui la cele bune', 'o pui la rebut, anunți și notezi', 'o arunci pe jos', 'o ascunzi'], 'b'],
  ['„Croitul” înseamnă:', ['tăierea materialului după tipar', 'călcatul', 'ambalarea', 'vopsirea'], 'a'],
  ['Conectorul e bine pus când:', ['face „clic”', 'e cald', 'e ud', 'e îndoit'], 'a'],
  ['În industria alimentară porți:', ['boneta', 'cravata', 'bijuterii', 'mănuși de iarnă'], 'a'],
  ['„Șlefuirea” lemnului se face cu:', ['hârtie abrazivă', 'apă', 'ață', 'aluat'], 'a'],
  ['O piesă s-a blocat în mașina pornită. Ce faci?', ['bagi mâna repede', 'oprești și asiguri mașina, chemi mecanicul', 'scoți protecția', 'lovești mașina'], 'b'],
  ['Protecția mașinii:', ['o scoți dacă te încurcă', 'nu o scoți niciodată', 'o scoți la sfârșitul turei', 'o ții acasă'], 'b'],
  ['Pictograma cu flacără în romb roșu înseamnă:', ['inflamabil', 'toxic', 'coroziv', 'gaz sub presiune'], 'a'],
  ['Ordinul „Scoate rebutul!” vine de la:', ['a scoate', 'a scrie', 'a sta', 'a spune'], 'a'],
  ['Te-ai lovit ușor la mână. Ce faci?', ['nu spui nimic', 'anunți șeful de linie', 'pleci acasă', 'continui fără să spui'], 'b'],
  ['„S-a stricat iar.” înseamnă:', ['It\'s broken again.', 'It\'s finished.', 'It\'s clean.', 'It\'s new.'], 'a'],
];
Cm.detachable(add, dom, Q, [
  '**9.1**   bandă · butonul STOP · șublerul · mașina de cusut · cutie / container · cheia fixă (înșurubătorul)',
  '**9.2**   textile · auto · lemn · alimentar      **9.3**   antifoane · ochelari · boneta · mănuși',
  '**9.4**   doisprezece virgulă cinci milimetri · trei la sută · șaizeci de bucăți pe oră · plus-minus două zecimi de milimetru',
  '**9.5**   480 · 245 · nu (neconformă: max. 25,5) · 5      **9.6**   320 · 2 · 145 · 12',
  '**9.7**   personal answers      **9.8**   fisurată · incompletă · deformată · zgâriată',
  '**9.9**   3 · 1 · 2 · 4      **9.10**   conectorul · Strâng · Testez · eticheta      **9.11**   L · A · A · L',
  '**9.12**   Oprește · Măsoară · Scoate · Curăță      **9.13**   Opresc mașina, o asigur, chem mecanicul. · Cer antifoane, nu lucrez fără ele.',
  '**9.14**   șublerul · neconformă · 2% · Oprește · rebut · niciodată',
], [
  ['Zgomotul: valori de expunere; la valoarea superioară de expunere (85 dB(A)) se poartă protectoare auditive', 'HG nr. 493/2006 — legislatie.just.ro/Public/DetaliiDocument/71198 (Directiva 2003/10/CE)', 'Lesson 9.13'],
  ['Pictogramele de pericol chimic (romb cu margine roșie)', 'Regulamentul (CE) nr. 1272/2008 (CLP) — eur-lex.europa.eu', 'Lesson 9.13, test q. 22'],
  ['Atestatul de igienă în industria alimentară', 'Ordinul ministrului sănătății nr. 1225/2003 — legislatie.just.ro; INSP', 'Lesson 9.11'],
  ['Manipularea manuală a maselor', 'HG nr. 1051/2006 — legislatie.just.ro/Public/DetaliiDocument/74429', 'Lesson 9.13'],
], ['Utilaje și scule, materiale și piese, echipamentul de lucru', 'Unități, măsurarea și fișa de lucru, calcule simple', 'Linia și turele, calitatea, textile, componente auto, lemn și alimentar', 'Comenzi, SSM, expresii, recapitulare + TEST CUMULATIV']);
Packer.toBuffer(Cm.makeDoc(dom, S)).then(b => { fs.writeFileSync(process.argv[2] || 'm9_productie.docx', b); console.log('written'); });
