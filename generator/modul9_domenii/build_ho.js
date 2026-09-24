const fs = require('fs');
const L = require('./lib');
const Cm = require('./common9');
const { P, spacer, pageBreak, H1, H2, tbl, box, banner, tipar, objectives, exercise, useful, fig } = L;
const { Packer } = L.d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });
const dom = { ro: 'HoReCa (hoteluri și restaurante)', en: 'Hotels and restaurants' };

Cm.cover(add, dom);
add(H1('Before you start'),
  P('You have finished **Level A1**. Module 9 uses everything you know in the **kitchen**, the **restaurant** and the **hotel**. You will name the kitchen tools and appliances, work with grams, litres, portions and temperatures, read a recipe and an order, describe the work step by step — cooking, serving, washing up, cleaning a room — and know the rules of **hygiene** and **safety at work** (SSM).'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers · de** after 20 · decimals', 'Lesson 2.5', '250 de grame, 0,5 l, masa 12'],
  ['**orders and requests**', 'Lesson 3.13', 'Adu! Taie! Serviți, vă rog!'],
  ['**the time**', 'Lesson 5.4', 'comanda de la ora 13:20'],
  ['**the menu, dishes, ordering, the bill, the tip**', 'Lessons 7.3, 7.4', 'the guest\'s side of the restaurant'],
  ['**restaurant jobs** — ospătar, bucătar', 'Lessons 3.2, 7.4', 'your job and your colleagues'],
  ['**food and quantities**', 'Lessons 8.1, 8.2', 'legume, carne, un kilogram de...'],
  ['**the body · Mă doare · M-am tăiat**', 'Lessons 8.4, 8.5', 'accidents in the kitchen'],
  ['**the room, furniture**', 'Lessons 6.4, 6.5', 'cleaning a hotel room']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 33**', '3 hours', 'Lesson 9.1 The kitchen · 9.2 The dining room and the hotel room · 9.3 Uniform and hygiene'],
  ['**Session 34**', '3 hours', 'Lesson 9.4 Units and temperatures · 9.5 Reading a recipe · 9.6 Reading an order'],
  ['**Session 35**', '3 hours', 'Lesson 9.7 Cooking · 9.8 Food safety · 9.9 Serving · 9.10 Washing up · 9.11 Cleaning a hotel room'],
  ['**Session 36**', '3 hours', 'Lesson 9.12 Orders at work · 9.13 Safety and hygiene · 9.14 Expressions and recap · **Module 9 cumulative test**']], { size: 19 }));
Cm.recapNoGrammar(add, 'In one kitchen they say **cratiță**, in another **tigaie mare**; in a hotel **cameristă** or **menajeră**.');
add(pageBreak());

// ---------- S33
add(banner('SESSION 33  —  KITCHEN, DINING ROOM, HOTEL ROOM, HYGIENE', 'SESIUNEA 33 — BUCĂTĂRIA, SALA, CAMERA DE HOTEL, IGIENA  ·  3 hours'));
add(objectives(['name 20 kitchen tools and appliances', 'name the objects of the dining room and of a hotel room', 'name your uniform and wash your hands correctly', 'know the hygiene papers you need for a job with food']));
add(H1('Lesson 9.1  —  The kitchen / Bucătăria'));
add(fig('ho_bucatarie', 640, 'Fig. 9.1 — Ustensile și aparate de bucătărie / Kitchen tools and appliances'));
add(tbl([2400, 2419, 2400, 2419], [['ONE', 'MORE', 'ONE', 'MORE'],
  ['un cuțit', 'cuțite', 'un tocător', 'tocătoare'], ['o oală', 'oale', 'o tigaie', 'tigăi'],
  ['o cratiță', 'cratițe', 'un polonic', 'polonice'], ['un cuptor', 'cuptoare', 'un frigider', 'frigidere'],
  ['o tavă', 'tăvi', 'un bol', 'boluri']], { size: 18 }));
add(P('Kitchen people: **bucătarul-șef** (head chef) · **bucătarul** · **ajutorul de bucătar** (kitchen assistant) · **spălătorul de vase** (dishwasher) · **patiserul** (pastry cook).', { size: 19 }));
add(exercise('9.1', 'Which tool?', 'Write the tool or the appliance.'));
add(ex2([['1.  Tai ceapa cu ______________ pe ______________.', '2.  Prăjesc ouăle în ______________.'], ['3.  Fierb supa într-o ______________.', '4.  Coc pâinea în ______________.'], ['5.  Țin carnea proaspătă în ______________.', '6.  Verific temperatura cu ______________.']]));
add(useful([['Unde e tocătorul?', 'Where is the chopping board?'], ['Dă-mi un cuțit ascuțit.', 'Give me a sharp knife.'], ['Pornește cuptorul la 180 de grade.', 'Turn the oven on at 180 degrees.'], ['Oala e fierbinte!', 'The pot is hot!'],
  ['ascuțit · tocit', 'sharp · blunt'], ['curat · murdar', 'clean · dirty']]));

add(H1('Lesson 9.2  —  The dining room and the hotel room / Sala și camera de hotel'));
add(fig('ho_sala', 600, 'Fig. 9.2 — Sala de restaurant și camera de hotel / The dining room and the hotel room'));
add(tbl([2400, 2419, 2400, 2419], [['RESTAURANT', 'ENGLISH', 'HOTEL', 'ENGLISH'],
  ['**sala** · **terasa**', 'dining room · terrace', '**recepția**', 'reception'],
  ['**barul** · **bucătăria**', 'bar · kitchen', '**camera single / dublă**', 'single / double room'],
  ['**masa 5** · **o masă liberă**', 'table 5 · a free table', '**camera eliberată / ocupată**', 'checked-out / occupied room'],
  ['**ospătarul · barmanul**', 'waiter · bartender (Lesson 7.4)', '**camerista · recepționerul**', 'room attendant · receptionist']], { size: 18 }));
add(exercise('9.2', 'Restaurant or hotel?', 'Write R (restaurant) or H (hotel).'));
add(ex2([['1.  patul ___', '2.  tava de servire ___'], ['3.  lenjeria ___', '4.  carnetul de comenzi ___'], ['5.  recepția ___', '6.  fața de masă ___']]));
add(useful([['Masa 3 e liberă?', 'Is table 3 free?'], ['Camera 204 e gata.', 'Room 204 is ready.'], ['„Nu deranjați”', '"Do not disturb"'], ['check-in · check-out', 'arrival · departure'],
  ['Schimb prosoapele.', 'I change the towels.'], ['Lipsește un pahar.', 'A glass is missing.']]));

add(H1('Lesson 9.3  —  Uniform and hygiene / Uniforma și igiena'));
add(fig('ho_echipament', 450, 'Fig. 9.3 — Echipamentul de bucătărie / Kitchen uniform'));
add(fig('ho_maini', 620, 'Fig. 9.4 — Spălarea mâinilor / Washing your hands'));
add(tbl([4819, 4819], [['WASH YOUR HANDS / Spălați-vă pe mâini...', 'THE RULES OF HYGIENE'],
  ['înainte de lucru și după pauză', 'părul acoperit, unghii scurte, fără bijuterii'],
  ['după toaletă', 'uniformă curată; nu lucrezi cu ea pe stradă'],
  ['după carne crudă, ouă, pește', 'o rană la mână — o acoperi și porți mănuși'],
  ['după gunoi și după bani', 'dacă ești bolnav (febră, diaree) — anunți șeful']], { size: 18 }));
add(box('attn', 'ATTENTION — PAPERS FOR A JOB WITH FOOD', [
  'People who produce, handle or serve food must have a certificate from a course on the **basic notions of hygiene** (**atestatul / cursul de igienă**, Order of the Ministry of Health no. 1225/2003). Your employer tells you where and when you do it. You also have a **medical check** at the occupational doctor (**medicina muncii**) when you are hired (HG 355/2007).']));
add(exercise('9.3', 'Hygiene — yes or no?', 'Write DA or NU.'));
add(ex2([['1.  Lucrez cu inele și brățări. ___', '2.  Mă spăl pe mâini după pauză. ___'], ['3.  Tai legume pe tocătorul pentru carne crudă. ___', '4.  Am diaree și nu spun nimănui. ___']]));
add(useful([['Mă spăl pe mâini.', 'I wash my hands.'], ['Îmi pun boneta.', 'I put on my cap.'], ['mănuși de unică folosință', 'disposable gloves'], ['dezinfectantul', 'the disinfectant'],
  ['atestatul de igienă', 'the hygiene certificate'], ['Am o rană la deget.', 'I have a cut on my finger.']]));
add(hw(33, ['**H33.1**  Write the ten tools you use most at work, with un / o and the plural.', '**H33.2**  Write five hygiene rules of your workplace with *trebuie să...* (Lesson 3.11).']));

// ---------- S34
add(spacer(160));
add(banner('SESSION 34  —  UNITS, TEMPERATURES, RECIPES, ORDERS', 'SESIUNEA 34 — UNITĂȚI, TEMPERATURI, REȚETE, COMENZI  ·  3 hours'));
add(objectives(['read grams, litres, portions and temperatures', 'read the temperature of a fridge and a freezer', 'read a recipe and change it for more portions', 'read an order: **masa 5, două ciorbe...**']));
add(H1('Lesson 9.4  —  Units and temperatures / Unități și temperaturi'));
add(tbl([1500, 2600, 2000, 3538], [['WRITTEN', 'YOU SAY', 'ENGLISH', 'EXAMPLE'],
  ['**g · kg**', 'gram · kilogram', 'gram · kilo', '250 de grame de unt'],
  ['**ml · l**', 'mililitru · litru', 'millilitre · litre', '500 ml de lapte = jumătate de litru'],
  ['**buc.**', 'bucată · bucăți', 'piece(s)', '3 bucăți de ouă = 3 ouă'],
  ['**porție**', 'o porție · porții', 'portion', 'o porție de 350 de grame (Lesson 7.3)'],
  ['**lingură · linguriță**', 'o lingură · o linguriță', 'tablespoon · teaspoon', 'o linguriță de sare'],
  ['**°C**', 'grade (Celsius)', 'degrees', 'cuptorul la 180 de grade'],
  ['**min.**', 'minut · minute', 'minute(s)', 'fierbe 20 de minute']], { size: 18 }));
add(fig('ho_temp', 620, 'Fig. 9.5 — Temperaturi în bucătărie / Temperatures in the kitchen'));
add(P('*The exact temperatures are written in your workplace\'s food safety plan (**planul HACCP**). Check them every day and write them on the **fișa de temperaturi**.*', { size: 17, color: '555555' }));
add(exercise('9.4', 'Say it', 'Write the words, then read them out loud.'));
add(ex2([['1.  250 g = ______________________', '2.  0,5 l = ______________________'], ['3.  −18 °C = ______________________', '4.  1 kg = ______ g']]));
add(useful([['după gust', 'to taste'], ['un vârf de cuțit', 'a pinch'], ['la foc mic / mare', 'on a low / high heat'], ['a preîncălzi', 'to preheat'],
  ['E rece. Mai încălzește.', 'It\'s cold. Heat it more.'], ['s-a stricat frigiderul', 'the fridge is broken']]));

add(H1('Lesson 9.5  —  Reading a recipe / Cum citești o rețetă'));
add(tbl([3300, 3169, 3169], [['CIORBĂ DE LEGUME — rețeta', 'PENTRU 4 PORȚII', 'PENTRU 12 PORȚII (× 3)'],
  ['cartofi', '400 g', '1 200 g = 1,2 kg'], ['morcovi', '2 buc.', '6 buc.'], ['ceapă', '1 buc.', '3 buc.'],
  ['ardei · roșii', '1 buc. · 2 buc.', '3 buc. · 6 buc.'], ['apă', '2 l', '6 l'], ['sare, borș, verdeață', 'după gust', 'după gust']], { size: 18 }));
add(P('**Mod de preparare** (method): **Curăță și taie** legumele. **Fierbe** apa. **Pune** legumele și **fierbe** 25 de minute. **Adaugă** borșul și sarea. **Presară** verdeață. — Clean and cut the vegetables. Boil the water. Add the vegetables and boil for 25 minutes. Add the borș and the salt. Sprinkle the herbs.', { size: 19 }));
add(exercise('9.5', 'Change the recipe', 'Calculate for 8 portions (× 2).'));
add(ex2([['1.  cartofi: 400 g × 2 = ______ g', '2.  morcovi: ______ buc.'], ['3.  apă: ______ l', '4.  ceapă: ______ buc.']]));
add(useful([['ingredientele', 'the ingredients'], ['modul de preparare', 'the method'], ['a adăuga', 'to add'], ['a presăra', 'to sprinkle'],
  ['a dubla · a tripla', 'to double · to triple'], ['Ajunge pentru 12 porții?', 'Is it enough for 12 portions?']]));

add(H1('Lesson 9.6  —  Reading an order / Cum citești o comandă'));
add(tbl([4819, 4819], [['BON DE COMANDĂ — the order ticket', 'HOW YOU READ IT'],
  ['**Masa 5 · 2 pers. · 13:20**', 'masa cinci, două persoane, ora unu și douăzeci'],
  ['**1 × Ciorbă perișoare**', 'o ciorbă de perișoare'],
  ['**2 × Sarmale + mămăligă**', 'două porții de sarmale cu mămăligă'],
  ['**1 × Apă plată 0,5**', 'o apă plată de jumătate de litru'],
  ['**Obs.: fără ceapă**', 'observație: without onion (Lesson 7.3)']], { size: 18 }));
add(tbl([4819, 4819], [['IN THE KITCHEN', 'ENGLISH'],
  ['O: Comandă nouă! Masa 5: o ciorbă de perișoare și două sarmale.', 'New order! Table 5: one meatball soup and two sarmale.'],
  ['B: Am înțeles. Ciorba e gata în cinci minute.', 'Understood. The soup is ready in five minutes.'],
  ['O: La sarmale, fără smântână, vă rog. Clientul e alergic.', 'The sarmale without sour cream, please. The guest is allergic.'],
  ['B: Bine, fără smântână. ... Masa 5, servește!', 'OK, no sour cream. ... Table 5, service!']], { size: 19 }));
add(exercise('9.6', 'Read the ticket', 'Write the order in words.'));
add(ex2([['1.  Masa 12 · 3 pers. → ______________________', '2.  3 × Papanași → ______________________'], ['3.  2 × Bere 0,5 → ______________________', '4.  Obs.: fără gheață → ______________________']]));
add(useful([['comanda · bonul de comandă', 'the order · the order ticket'], ['Servește!', 'Service! (the dish is ready)'], ['E gata masa 5?', 'Is table 5 ready?'], ['în cinci minute', 'in five minutes'],
  ['observația', 'the note on the order'], ['a anulat comanda', 'cancelled the order']]));
add(hw(34, ['**H34.1**  Write a recipe you know from your country in Romanian: ingredients with quantities and three steps.', '**H34.2**  Write two order tickets for two tables, then read them out loud.']));

// ---------- S35
add(spacer(160));
add(banner('SESSION 35  —  THE WORK STEP BY STEP', 'SESIUNEA 35 — LUCRUL PAS CU PAS  ·  3 hours'));
add(objectives(['name the cooking actions: **a curăța, a tăia, a fierbe, a prăji...**', 'keep food safe: storage, labels, clean and raw food apart', 'set a table and serve the guests', 'wash up and clean the kitchen', 'clean a hotel room step by step']));
add(H1('Lesson 9.7  —  Cooking / Gătitul'));
add(tbl([2200, 2200, 2200, 3038], [['VERB', 'I DO IT (eu)', 'ORDER (tu)', 'ENGLISH'],
  ['a curăța', 'curăț', 'Curăță!', 'to peel, to clean'], ['a spăla', 'spăl', 'Spală!', 'to wash'],
  ['a tăia · a toca', 'tai · toc', 'Taie! · Toacă!', 'to cut · to chop, to mince'], ['a fierbe', 'fierb', 'Fierbe!', 'to boil'],
  ['a prăji', 'prăjesc', 'Prăjește!', 'to fry'], ['a coace', 'coc', 'Coace!', 'to bake'],
  ['a face la grătar', 'fac la grătar', 'Fă la grătar!', 'to grill'], ['a amesteca', 'amestec', 'Amestecă!', 'to stir, to mix'],
  ['a gusta', 'gust', 'Gustă!', 'to taste'], ['a porționa · a servi', 'porționez · servesc', 'Porționează! · Servește!', 'to portion · to serve']], { size: 18 }));
add(P('Say what you do in order (Lesson 9.5): **Întâi** spăl legumele, **apoi** le curăț și le tai, **după aceea** le fierb, **la sfârșit** gust și servesc.', { size: 19 }));
add(exercise('9.7', 'What do you do?', 'Complete with: tai · prăjesc · fierb · coc · amestec · gust.'));
add(ex2([['1.  ______________ cartofii în ulei.', '2.  ______________ ceapa pe tocător.'], ['3.  ______________ pâinea în cuptor.', '4.  ______________ apa pentru paste.'], ['5.  ______________ sosul cu lingura.', '6.  ______________ ciorba: mai trebuie sare?']]));
add(useful([['crud · gătit', 'raw · cooked'], ['s-a ars', 'it\'s burnt'], ['e prea sărat', 'it\'s too salty'], ['feliat · tocat · ras', 'sliced · chopped · grated'], ['la cuptor · la grătar', 'baked · grilled'], ['decongelat', 'defrosted']]));

add(H1('Lesson 9.8  —  Food safety / Siguranța alimentelor'));
add(tbl([4819, 4819], [['THE RULE', 'WHY'],
  ['**Crud separat de gătit** — alte tocătoare, alte cuțite, alt raft', 'raw meat can make cooked food dangerous'],
  ['**Eticheta**: produsul, data deschiderii, data expirării', 'you know what it is and until when it is good'],
  ['**Primul intrat, primul ieșit** (FIFO): vechiul în față', 'old products are used first'],
  ['**Nu decongelezi pe masă**, ci în frigider', 'bacteria grow at room temperature'],
  ['**Alergenii**: întrebi, verifici, spui (Lesson 7.3)', 'an allergy can be dangerous for the guest']], { size: 18 }));
add(box('recap', 'RECAP — ALLERGENS AND DATES  (Lessons 7.3 and 8.2)', [
  'The guest asks: *Conține lapte? Conține nuci?* You do not guess — you ask the chef: **Șefu\', masa 3 întreabă dacă are gluten.** On every product read **data expirării**: *Expiră pe 12 octombrie.*']));
add(exercise('9.8', 'Correct or not?', 'Write DA or NU.'));
add(ex2([['1.  Tai pâinea pe tocătorul pentru carne crudă. ___', '2.  Pun eticheta cu data pe caserolă. ___'], ['3.  Folosesc întâi produsele vechi. ___', '4.  Decongelez carnea pe masă, peste noapte. ___']]));
add(useful([['caserola', 'food container'], ['eticheta', 'the label'], ['data expirării', 'the expiry date'], ['a arunca', 'to throw away'], ['a expirat', 'it has expired'], ['camera frigorifică', 'the cold room']]));

add(H1('Lesson 9.9  —  Serving / Servirea'));
add(fig('ho_masa', 560, 'Fig. 9.6 — Masa aranjată / A table set for one'));
add(fig('ho_serviciu', 620, 'Fig. 9.7 — Pașii serviciului / The steps of table service'));
add(tbl([1500, 4100, 4038], [['WHEN', 'THE WAITER SAYS', 'ENGLISH'],
  ['at the door', 'Bună seara! Aveți rezervare? Poftiți, vă rog.', 'Good evening! Do you have a booking? This way, please.'],
  ['the order', 'Ce doriți să comandați? · Și de băut?', 'What would you like to order? · And to drink?'],
  ['serving', 'Poftă bună! · Aveți nevoie de ceva?', 'Enjoy your meal! · Do you need anything?'],
  ['clearing', 'Pot să iau farfuria? · A fost bine?', 'May I take the plate? · Was everything all right?'],
  ['the bill', 'Imediat vă aduc nota. · Cash sau cu cardul?', 'I\'ll bring the bill right away. · Cash or card?']], { size: 18 }));
add(exercise('9.9', 'What does the waiter say?', 'Write a sentence for each moment.'));
add(ex2([['1.  Guests arrive: ______________________', '2.  You bring the food: ______________________'], ['3.  You want to take the plate: ______________________', '4.  They ask for the bill: ______________________']]));
add(useful([['a debarasa', 'to clear the table'], ['a aranja masa', 'to set the table'], ['din dreapta · din stânga', 'from the right · from the left'], ['rezervarea', 'the booking']]));

add(H1('Lesson 9.10  —  Washing up and cleaning / Spălatul vaselor și curățenia'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', '**debarasarea**: aduci vasele la spălător', 'bring the dishes to the washing area'],
  ['2', '**resturile** la gunoi, **pre-spălarea** sub duș', 'scrape the leftovers, pre-rinse'],
  ['3', 'vasele în **coșuri**, în **mașina de spălat vase**', 'dishes in the racks, in the dishwasher'],
  ['4', '**uscarea** și **verificarea** (pete, ciobituri)', 'drying and checking (stains, chips)'],
  ['5', '**depozitarea**: pe raft, la locul lor', 'put them away in their place'],
  ['6', 'la sfârșit: **suprafețele, podeaua, gunoiul**', 'at the end: surfaces, floor, rubbish']], { size: 18 }));
add(box('attn', 'ATTENTION — CLEANING PRODUCTS', [
  '**Never mix** cleaning products (for example chlorine with other products): they can make toxic gas. Use gloves, read the label and use the quantity written on it. Keep products in their own bottles, with the label, away from food.']));
add(exercise('9.10', 'Put the steps in order', 'Write 1–4.'));
add(ex2([['___  Pun vasele în mașină.', '___  Arunc resturile.'], ['___  Pun farfuriile pe raft.', '___  Aduc vasele de la mese.']]));
add(useful([['detergentul · dezinfectantul', 'detergent · disinfectant'], ['buretele · laveta', 'sponge · cloth'], ['mopul · găleata', 'mop · bucket'], ['o farfurie ciobită', 'a chipped plate']]));

add(H1('Lesson 9.11  —  Cleaning a hotel room / Curățenia camerei de hotel'));
add(fig('ho_camera', 620, 'Fig. 9.8 — Pașii curățeniei unei camere / Cleaning a room step by step'));
add(tbl([2450, 2369, 2450, 2369], [['ROMANIAN', 'ENGLISH', 'ROMANIAN', 'ENGLISH'],
  ['**a schimba lenjeria**', 'to change the sheets', '**a face patul**', 'to make the bed'],
  ['**a șterge praful**', 'to dust', '**a aspira · a spăla pe jos**', 'to vacuum · to mop'],
  ['**obiecte uitate**', 'lost property', '**a completa minibarul**', 'to restock the minibar']], { size: 18 }));
add(P('Something is broken or forgotten in the room? Tell the reception: **Camera 305: nu merge televizorul. · Clientul a uitat un telefon.** Never keep an object you find.', { size: 19 }));
add(exercise('9.11', 'Complete', 'Use: lenjeria · praful · prosoapele · fereastra.'));
add(ex2([['1.  Deschid ______________ ca să aerisesc.', '2.  Schimb ______________ de pe pat.'], ['3.  Pun ______________ curate în baie.', '4.  Șterg ______________ de pe mobilă.']]));
add(useful([['camera e liberă · ocupată', 'the room is free · occupied'], ['Bună ziua, room service!', 'knock and say it before you go in'], ['Am terminat camera 208.', 'I\'ve finished room 208.'], ['obiectele pierdute', 'lost and found']]));
add(hw(35, ['**H35.1**  Choose your main job (kitchen, service, washing up, rooms). Write its steps in order with *întâi, apoi, după aceea, la sfârșit*.', '**H35.2**  Write five food safety rules of your workplace.']));

// ---------- S36
add(spacer(160));
add(banner('SESSION 36  —  ORDERS, SAFETY AND HYGIENE, EXPRESSIONS, RECAP AND TEST', 'SESIUNEA 36 — COMENZI, SSM ȘI IGIENĂ, EXPRESII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['understand the orders in the kitchen and in the dining room', 'know the risks of your job and your safety duties', 'know what to do after a cut or a burn', 'recognise the expressions you hear at work and in the street']));
add(H1('Lesson 9.12  —  Orders at work / Comenzi la lucru'));
add(box('recap', 'RECAP — ORDERS  (Lesson 3.13)', ['In the kitchen people say **tu**: **Adu! Taie! Spală!** To a group or politely: **Aduceți! Tăiați!** With a short pronoun: **Dă-mi-l! · Pune-le aici!**']));
add(tbl([2200, 2300, 5138], [['DIRECT (tu)', 'TO A GROUP / POLITE', 'ENGLISH — EXAMPLE'],
  ['**Adu!**', '**Aduceți!**', 'Bring! — *Adu farfurii curate!*'],
  ['**Du!**', '**Duceți!**', 'Take (there)! — *Du comanda la masa 4!*'],
  ['**Taie! · Curăță!**', '**Tăiați! · Curățați!**', 'Cut! · Peel! — *Taie ceapa mărunt!*'],
  ['**Scoate!**', '**Scoateți!**', 'Take out! — *Scoate tava din cuptor!*'],
  ['**Servește!**', '**Serviți!**', 'Serve! — *Servește masa 5!*'],
  ['**Debarasează!**', '**Debarasați!**', 'Clear! — *Debarasează masa 3!*'],
  ['**Spală! · Șterge!**', '**Spălați! · Ștergeți!**', 'Wash! · Wipe! — *Șterge masa!*'],
  ['**Atenție, fierbinte!**', '**Atenție, trec!**', 'Careful, hot! · Careful, coming through!']], { size: 18 }));
add(P('Answer: **Am înțeles. · Gata! · Imediat. · Da, șefu\'.** — and if you have not understood: **Mai spuneți o dată, vă rog.**', { size: 19 }));
add(exercise('9.12', 'Say the order', 'Write the direct order (tu).'));
add(ex2([['1.  (a aduce) ______________ două pahare!', '2.  (a scoate) ______________ pâinea din cuptor!'], ['3.  (a debarasa) ______________ masa 7!', '4.  (a spăla) ______________ tigaia!']]));
add(useful([['Da, șefu\'!', 'Yes, chef!'], ['Comanda e gata!', 'The order is ready!'], ['Ce fac acum?', 'What do I do now?'], ['Mi s-a terminat...', 'I\'ve run out of...']]));

add(H1('Lesson 9.13  —  Safety and hygiene at work / SSM și igiena'));
Cm.ssmCore(add);
add(tbl([2600, 7038], [['THE RISK', 'WHAT YOU DO'],
  ['**tăieturi** — cuts', 'knife on the board, blade away from you; wash knives separately; never catch a falling knife'],
  ['**arsuri** — burns', 'dry oven gloves; handles of pots inward; say **Atenție, fierbinte!**'],
  ['**podeaua udă** — wet floor', 'wipe it at once; non-slip shoes; the sign **Atenție, pardoseală udă**'],
  ['**greutăți** — heavy loads', 'lift with your legs, not your back; ask for help (HG 1051/2006)'],
  ['**substanțe** — chemicals', 'gloves; never mix; keep them in the labelled bottle']], { size: 18 }));
add(box('attn', 'ATTENTION — AFTER A CUT OR A BURN', [
  '**A cut:** stop, wash, cover it with a plaster and a glove, tell the chef. **A burn:** cool it under cool running water for several minutes; do not put butter, oil or ice on it. If it is serious — a deep cut, a big burn — call **112** (Lesson 5.2). Always tell your manager — also a small accident (Law 319/2006, art. 23).']));
add(fig('semne2', 300, 'Fig. 9.9 — Prim ajutor, ieșire de urgență, stingător / First aid, emergency exit, extinguisher'));
add(exercise('9.13', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  Podeaua e udă. → ______________________', '2.  M-am tăiat la deget. → ______________________'], ['3.  Oala e foarte grea. → ______________________', '4.  Am febră și diaree. → ______________________']]));
add(useful([['M-am ars.', 'I burnt myself.'], ['M-am tăiat.', 'I cut myself.'], ['trusa de prim ajutor', 'first-aid kit'], ['stingătorul · pătura antifoc', 'extinguisher · fire blanket']]));

add(H1('Lesson 9.14  —  Expressions and recap / Expresii și recapitulare'));
Cm.expressions(add, 'IN THE KITCHEN', [
  ['**Dă-i bice!**', 'grăbește-te, mai repede', 'Hurry up! · Speed up!'],
  ['**E jale!**', 'e foarte rău, e haos (de ex. prea multe comenzi)', 'It\'s a disaster! · It\'s chaos!']],
  'meat left out of the fridge, a cut hand without a glove, a wet floor');
add(H2('Module 9 in one table'));
add(tbl([2410, 2410, 2410, 2408], [['KITCHEN', 'SERVICE & HOTEL', 'NUMBERS', 'SAFETY & HYGIENE'],
  ['cuțit · tocător · oală · tigaie', 'farfurie · pahar · tacâmuri', 'g · kg · ml · l', 'mâinile spălate · boneta'],
  ['cuptor · plită · frigider', 'tavă · meniu · comandă · notă', 'porții · linguri · °C', 'crud separat de gătit'],
  ['a tăia · a fierbe · a prăji', 'pat · lenjerie · prosoape', 'rețeta × 3', 'eticheta · data expirării'],
  ['a coace · a gusta · a servi', 'a debarasa · a aspira', 'Masa 5, 2 pers.', 'tăieturi · arsuri · 112']], { size: 16 }));
add(exercise('9.14', 'Everything together', 'Circle the correct word.'));
add(ex2([['1.  Prăjesc în ( tigaie  /  frigider ).', '2.  250 ( de  /  din ) grame'], ['3.  Congelatorul: ( −18  /  +18 ) °C', '4.  ( Debarasează  /  Debarasați ) masa 3! (to one person)'], ['5.  Carnea crudă pe alt ( tocător  /  pahar ).', '6.  O arsură: apă ( rece  /  fierbinte ).']]));
add(hw(36, ['**H36.1**  Write five orders you hear every day at work and what they mean.', '**H36.2**  Write what you do if a colleague cuts his hand in the kitchen.']));

const Q = [
  ['Cu ce tai legumele?', ['cu polonicul', 'cu cuțitul, pe tocător', 'cu telul', 'cu tava'], 'b'],
  ['Unde prăjești ouăle?', ['în tigaie', 'în frigider', 'în congelator', 'în bol'], 'a'],
  ['Unde ții carnea proaspătă?', ['pe masă', 'în cuptor', 'în frigider', 'pe raft, la cald'], 'c'],
  ['Pluralul lui „oală” este:', ['oali', 'oale', 'oaluri', 'oală'], 'b'],
  ['Camerista lucrează:', ['în bucătărie', 'la bar', 'în camerele de hotel', 'la casă'], 'c'],
  ['Când te speli pe mâini?', ['numai seara', 'după toaletă și după carne crudă', 'numai după pauză', 'niciodată cu săpun'], 'b'],
  ['Pentru un job cu alimente ai nevoie de:', ['atestatul de igienă', 'permisul de conducere', 'atestatul ISCIR', 'nimic'], 'a'],
  ['„0,5 l” se citește:', ['cinci litri', 'jumătate de litru', 'cincizeci de litri', 'un litru'], 'b'],
  ['Temperatura congelatorului este de obicei:', ['+20 °C', '0 °C', '−18 °C', '+4 °C'], 'c'],
  ['Rețeta e pentru 4 porții. Pentru 12 porții înmulțești cu:', ['2', '3', '4', '12'], 'b'],
  ['„Masa 5 · 2 pers.” înseamnă:', ['masa 5, două persoane', 'masa 2, cinci persoane', 'cinci mese', 'două mese'], 'a'],
  ['„Obs.: fără ceapă” înseamnă:', ['cu multă ceapă', 'fără ceapă', 'numai ceapă', 'ceapă prăjită'], 'b'],
  ['„a fierbe” înseamnă:', ['to fry', 'to bake', 'to boil', 'to cut'], 'c'],
  ['„a coace” înseamnă:', ['to bake', 'to peel', 'to taste', 'to wash'], 'a'],
  ['Carnea crudă și pâinea:', ['pe același tocător', 'pe tocătoare diferite', 'în aceeași caserolă', 'pe masă, împreună'], 'b'],
  ['FIFO — „primul intrat, primul ieșit” înseamnă:', ['folosești întâi produsele noi', 'folosești întâi produsele vechi', 'arunci tot', 'cumperi mai mult'], 'b'],
  ['Unde decongelezi carnea?', ['pe masă', 'în frigider', 'la soare', 'în chiuvetă, peste noapte'], 'b'],
  ['Furculița se pune:', ['în stânga farfuriei', 'în dreapta farfuriei', 'în pahar', 'sub farfurie'], 'a'],
  ['„a debarasa” înseamnă:', ['to set the table', 'to clear the table', 'to book a table', 'to pay'], 'b'],
  ['Produsele de curățenie:', ['le amesteci ca să curețe mai bine', 'nu le amesteci niciodată', 'le ții lângă mâncare', 'le pui în sticle de apă'], 'b'],
  ['Găsești un telefon uitat în cameră. Ce faci?', ['îl păstrezi', 'îl duci la recepție', 'îl arunci', 'îl lași în cameră și nu spui'], 'b'],
  ['Ordinul direct „Scoate tava din cuptor!” vine de la:', ['a scoate', 'a scrie', 'a sta', 'a spune'], 'a'],
  ['Te-ai ars ușor la mână. Ce faci?', ['pui unt', 'pui gheață direct', 'ții mâna sub apă rece câteva minute și anunți șeful', 'nu faci nimic'], 'c'],
  ['Podeaua din bucătărie e udă. Ce faci?', ['o ștergi imediat', 'o lași așa', 'alergi mai repede', 'pui ulei'], 'a'],
  ['„N-ai grijă!” înseamnă:', ['Be careful!', 'Don\'t worry!', 'Hurry up!', 'Leave it!'], 'b'],
];
Cm.detachable(add, dom, Q, [
  '**9.1**   cuțitul, tocător · tigaie · oală · cuptor · frigider · termometrul',
  '**9.2**   H · R · H · R · H · R      **9.3**   NU · DA · NU · NU',
  '**9.4**   două sute cincizeci de grame · jumătate de litru · minus optsprezece grade · 1 000',
  '**9.5**   800 · 4 · 4 · 2      **9.6**   masa doisprezece, trei persoane · trei porții de papanași · două beri de jumătate de litru · fără gheață',
  '**9.7**   prăjesc · tai · coc · fierb · amestec · gust      **9.8**   NU · DA · DA · NU',
  '**9.9**   e.g. Bună seara, poftiți! · Poftă bună! · Pot să iau farfuria? · Imediat vă aduc nota.',
  '**9.10**   3 · 2 · 4 · 1      **9.11**   fereastra · lenjeria · prosoapele · praful',
  '**9.12**   Adu · Scoate · Debarasează · Spală      **9.13**   e.g. O șterg imediat. · Spăl, acopăr, pun mănușă, anunț șeful. · Cer ajutor. · Anunț șeful, nu lucrez cu alimente.',
  '**9.14**   tigaie · de · −18 · Debarasează · tocător · rece',
], [
  ['Atestat de instruire privind noțiunile fundamentale de igienă pentru personalul din sectorul alimentar', 'Ordinul ministrului sănătății nr. 1225/2003 (metodologia de instruire) — legislatie.just.ro; INSP', 'Lesson 9.3, test q. 7'],
  ['Controlul medical la angajare (medicina muncii)', 'HG nr. 355/2007 privind supravegherea sănătății lucrătorilor — legislatie.just.ro/Public/DetaliiDocumentAfis/82130', 'Lesson 9.3'],
  ['Manipularea manuală a maselor — riscuri dorso-lombare', 'HG nr. 1051/2006 — legislatie.just.ro/Public/DetaliiDocument/74429', 'Lesson 9.13'],
], ['Bucătăria, sala și camera de hotel, uniforma și igiena', 'Unități și temperaturi, rețeta, bonul de comandă', 'Gătitul, siguranța alimentelor, servirea, spălatul vaselor, camera de hotel', 'Comenzi, SSM și igienă, expresii, recapitulare + TEST CUMULATIV']);
Packer.toBuffer(Cm.makeDoc(dom, S)).then(b => { fs.writeFileSync(process.argv[2] || 'm9_horeca.docx', b); console.log('written'); });
