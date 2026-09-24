const fs = require('fs');
const L = require('./lib');
const Cm = require('./common9');
const { P, spacer, pageBreak, H1, H2, tbl, box, banner, objectives, exercise, useful, fig } = L;
const { Packer } = L.d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });
const dom = { ro: 'Transport, logistică și curierat', en: 'Transport, logistics and courier' };

Cm.cover(add, dom);
add(H1('Before you start'),
  P('You have finished **Level A1**. Module 9 uses everything you know in the **warehouse** (**depozitul**), in the **van** and at the **customer\'s door**. You will name the equipment, read labels and addresses, work with kilograms, volumes and kilometres, follow the goods from receiving to delivery, understand road signs, and know your duties for **health and safety at work** (SSM).'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers · de** after 20 · decimals', 'Lesson 2.5', '20 de colete, 2,4 kg, 0,072 mc'],
  ['**orders and requests**', 'Lesson 3.13', 'Descarcă! Semnați aici, vă rog!'],
  ['**the time, the days**', 'Lesson 5.4', 'livrare între 10 și 12, luni'],
  ['**address, floor, block**', 'Lessons 6.4, 6.6', 'bl. B3, sc. 2, et. 4, ap. 17'],
  ['**the phone call, 112**', 'Lesson 5.2', 'calling a customer, an accident'],
  ['**transport, the SIM card**', 'Lessons 4.6, 5.3', 'the app, the phone, the city'],
  ['**shapes, materials**', 'Lesson 4.5', 'cutie de carton, folie de plastic']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 33**', '3 hours', 'Lesson 9.1 The warehouse · 9.2 The vehicle · 9.3 Work clothes and protective equipment'],
  ['**Session 34**', '3 hours', 'Lesson 9.4 Units · 9.5 Reading a label and an address · 9.6 Simple calculations'],
  ['**Session 35**', '3 hours', 'Lesson 9.7 Receiving · 9.8 Storage and picking · 9.9 Packing and dispatch · 9.10 Delivery · 9.11 On the road'],
  ['**Session 36**', '3 hours', 'Lesson 9.12 Orders at work · 9.13 Safety at work · 9.14 Expressions and recap · **Module 9 cumulative test**']], { size: 19 }));
Cm.recapNoGrammar(add, 'One warehouse says **transpalet**, another **liză**; one courier says **colet**, another **pachet**.');
add(pageBreak());

// S33
add(banner('SESSION 33  —  WAREHOUSE, VEHICLE, EQUIPMENT', 'SESIUNEA 33 — DEPOZITUL, VEHICULUL, ECHIPAMENTUL  ·  3 hours'));
add(objectives(['name 16 things in a warehouse and in delivery', 'name the parts of a van and talk at the petrol station', 'name your work clothes and protective equipment']));
add(H1('Lesson 9.1  —  The warehouse / Depozitul'));
add(fig('tl_depozit', 620, 'Fig. 9.1 — În depozit și la livrare / In the warehouse and on delivery'));
add(tbl([2400, 2419, 2400, 2419], [['ONE', 'MORE', 'ONE', 'MORE'],
  ['un palet', 'paleți', 'un colet', 'colete'], ['un raft', 'rafturi', 'o cutie', 'cutii'],
  ['un transpalet', 'transpaleți · also **liza**', 'un stivuitor', 'stivuitoare'],
  ['o etichetă', 'etichete', 'o dubă', 'dube · also **furgonetă**']], { size: 18 }));
add(P('People: **depozitarul / lucrătorul de depozit** (warehouse worker) · **manipulantul de mărfuri** (goods handler) · **stivuitoristul** (forklift driver) · **curierul** · **șoferul de livrare** · **dispecerul** (dispatcher) · **șeful de tură**.', { size: 19 }));
add(exercise('9.1', 'Which one?', 'Write the word.'));
add(ex2([['1.  Mut paletul cu ______________.', '2.  Citesc codul de bare cu ______________.'], ['3.  Închid cutia cu ______________.', '4.  Înfășor paletul în ______________.'], ['5.  Pun cutiile pe ______________.', '6.  Livrez coletele cu ______________.']]));
add(useful([['Unde e transpaletul?', 'Where is the pallet truck?'], ['Paletul e plin.', 'The pallet is full.'], ['a înfolia', 'to stretch-wrap'], ['un colet deteriorat', 'a damaged parcel'], ['Nu merge scannerul.', 'The scanner doesn\'t work.'], ['s-a descărcat bateria', 'the battery is flat']]));

add(H1('Lesson 9.2  —  The vehicle / Vehiculul'));
add(tbl([2450, 2369, 2450, 2369], [['THE VAN', 'ENGLISH', 'THE VAN', 'ENGLISH'],
  ['**volanul**', 'steering wheel', '**oglinda**', 'mirror'],
  ['**farurile · semnalizarea**', 'headlights · indicator', '**frâna · ambreiajul**', 'brake · clutch'],
  ['**roata · anvelopa**', 'wheel · tyre', '**roata de rezervă**', 'spare wheel'],
  ['**ușa din spate · ușa laterală**', 'back door · side door', '**bordul · martorul**', 'dashboard · warning light'],
  ['**rezervorul · motorina · benzina**', 'fuel tank · diesel · petrol', '**actele mașinii**', 'the vehicle papers']], { size: 18 }));
add(tbl([4819, 4819], [['AT THE PETROL STATION / LA BENZINĂRIE', 'ENGLISH'],
  ['Fac plinul cu motorină.', 'I fill up with diesel.'],
  ['Pompa 4, vă rog. Plătesc cu cardul firmei.', 'Pump 4, please. I pay with the company card.'],
  ['Îmi dați factura pe firmă? Codul fiscal este...', 'Can I have an invoice for the company? The tax code is...'],
  ['Am o pană. · Mi s-a aprins un martor pe bord.', 'I have a flat tyre. · A warning light is on.']], { size: 19 }));
add(exercise('9.2', 'Which part?', 'Write the part of the van.'));
add(ex2([['1.  Mă uit în spate în ______________.', '2.  Opresc cu ______________.'], ['3.  Pun motorină în ______________.', '4.  Încarc coletele pe ______________ din spate.']]));
add(useful([['a face plinul', 'to fill up'], ['o pană (de cauciuc)', 'a flat tyre'], ['service-ul', 'the garage (repairs)'], ['foaia de parcurs', 'the trip sheet'], ['kilometrajul', 'the mileage'], ['cheile dubei', 'the van keys']]));

add(H1('Lesson 9.3  —  Work clothes and protective equipment / Echipamentul de lucru'));
add(fig('tl_echipament', 440, 'Fig. 9.2 — Echipamentul în depozit și la livrare / Equipment in the warehouse and on delivery'));
add(P('Your employer must give you the protective equipment **free of charge** (HG 1048/2006) and you must **wear it** (Law 319/2006). In many warehouses the **vesta reflectorizantă** and the **bocancii** are compulsory, and sometimes the **casca**. More in Lesson 9.13.', { size: 19 }));
add(exercise('9.3', 'What do you wear?', 'Complete.'));
add(ex2([['1.  În depozit port ______________ reflectorizantă.', '2.  În picioare port ______________ cu bombeu.'], ['3.  Pe mâini port ______________.', '4.  Pe cap port ______________ sau casca.']]));
add(useful([['vesta · bocancii', 'vest · boots'], ['uniforma firmei', 'company uniform'], ['ecusonul', 'the badge'], ['geaca de iarnă', 'winter jacket']]));
add(hw(33, ['**H33.1**  Write ten things you use at work, with un / o and the plural.', '**H33.2**  Write what you say at the petrol station (four sentences).']));

// S34
add(spacer(160));
add(banner('SESSION 34  —  UNITS, LABELS, ADDRESSES, CALCULATIONS', 'SESIUNEA 34 — UNITĂȚI, ETICHETE, ADRESE, CALCULE  ·  3 hours'));
add(objectives(['read kg, t, m³, cm, km, km/h, litres', 'read a shipping label and a Romanian address', 'calculate the volume of a box and the weight of a load']));
add(H1('Lesson 9.4  —  Units / Unitățile de măsură'));
add(tbl([1500, 2600, 2000, 3538], [['WRITTEN', 'YOU SAY', 'ENGLISH', 'EXAMPLE'],
  ['**kg · t**', 'kilogram · tonă', 'kilo · tonne', 'un palet de 600 de kilograme'],
  ['**cm · m**', 'centimetru · metru', 'centimetre · metre', 'o cutie de 60 de centimetri'],
  ['**m³ · mc**', 'metru cub', 'cubic metre', 'duba are 12 metri cubi'],
  ['**km · km/h**', 'kilometru · kilometri pe oră', 'kilometre · km per hour', 'viteza maximă 50 de km/h'],
  ['**l**', 'litru', 'litre', '40 de litri de motorină'],
  ['**buc. · col. · pal.**', 'bucată · colet · palet', 'piece · parcel · pallet', '120 de colete, 3 paleți']], { size: 18 }));
add(box('recap', 'RECAP — NUMBERS WITH A COMMA  (Lesson 2.5)', ['**2,4 kg** = doi virgulă patru kilograme · **0,5 t** = jumătate de tonă = 500 de kilograme · after 20: **25 de colete, 120 de kilometri**.']));
add(exercise('9.4', 'Say it', 'Write the words.'));
add(ex2([['1.  1 t = ______ kg', '2.  2,5 kg = ______________________'], ['3.  90 km/h = ______________________', '4.  50 l = ______________________']]));
add(useful([['greutatea · volumul', 'weight · volume'], ['dimensiunile', 'the dimensions'], ['e prea greu', 'it\'s too heavy'], ['încape? · nu încape', 'does it fit? · it doesn\'t fit']]));

add(H1('Lesson 9.5  —  Reading a label and an address / Eticheta și adresa'));
add(fig('tl_eticheta', 580, 'Fig. 9.3 — Eticheta de expediere (exemplu) / A shipping label (example)'));
add(tbl([1500, 2300, 1500, 1638, 1300, 1400], [['WRITTEN', 'YOU SAY', 'WRITTEN', 'YOU SAY', 'WRITTEN', 'YOU SAY'],
  ['**str.**', 'strada', '**bl.**', 'blocul', '**et.**', 'etajul'],
  ['**nr.**', 'numărul', '**sc.**', 'scara', '**ap.**', 'apartamentul'],
  ['**bd. · șos.**', 'bulevardul · șoseaua', '**jud.**', 'județul', '**sect.**', 'sectorul (București)']], { size: 18 }));
add(P('A Romanian address goes from small to big: **strada, numărul, blocul, scara, etajul, apartamentul — localitatea, județul, codul poștal**. At a block you ring the **interfon** with the apartment number.', { size: 19 }));
add(exercise('9.5', 'Read the address', 'Look at Fig. 9.3.'));
add(ex2([['1.  Pe ce stradă? — ______________', '2.  Ce bloc și ce scară? — ______________'], ['3.  La ce etaj? — ______________', '4.  Cât plătește clientul? — ______________']]));
add(useful([['destinatarul · expeditorul', 'recipient · sender'], ['AWB-ul', 'the tracking number'], ['ramburs', 'cash on delivery'], ['interfonul', 'the intercom'], ['codul poștal', 'the postcode'], ['adresa e greșită', 'the address is wrong']]));

add(H1('Lesson 9.6  —  Simple calculations / Calcule simple'));
add(fig('tl_colet', 560, 'Fig. 9.4 — Dimensiunile și volumul unui colet / The dimensions and volume of a parcel'));
add(tbl([3000, 3319, 3319], [['QUESTION', 'CALCULATION', 'ANSWER'],
  ['Cât cântărește un palet cu 40 de cutii de 12 kg? Paletul gol: 25 kg.', '40 × 12 = 480 · 480 + 25 = 505', '**505 kg**'],
  ['Câte cutii de 60 × 40 × 30 cm încap într-un metru cub?', '1 : 0,072 ≈ 13,9', '**13 cutii** (round down)'],
  ['Traseul are 120 km. Mergi cu 60 km/h în medie. Cât durează?', '120 : 60 = 2', '**2 ore**'],
  ['Ai 85 de colete. Ai livrat 57. Câte mai ai?', '85 − 57 = 28', '**28 de colete**']], { size: 18 }));
add(exercise('9.6', 'Calculate', 'Write the answer.'));
add(ex2([['1.  20 de cutii × 15 kg = ______ kg', '2.  O cutie 50 × 40 × 50 cm = ______ mc'], ['3.  90 km cu 45 km/h = ______ ore', '4.  60 de colete − 45 livrate = ______']]));
add(useful([['Cât cântărește?', 'How much does it weigh?'], ['Încape în dubă?', 'Does it fit in the van?'], ['în medie', 'on average'], ['Mai am 28 de colete.', 'I have 28 parcels left.']]));
add(hw(34, ['**H34.1**  Write your own address in the Romanian order, with abbreviations.', '**H34.2**  Measure a box at home. Calculate its volume in m³.']));

// S35
add(spacer(160));
add(banner('SESSION 35  —  THE GOODS STEP BY STEP', 'SESIUNEA 35 — MARFA PAS CU PAS  ·  3 hours'));
add(objectives(['receive goods and check them', 'find a location and pick an order', 'pack, label and load', 'deliver a parcel and talk to the customer', 'read the main road signs']));
add(fig('tl_flux', 620, 'Fig. 9.5 — Drumul mărfii / The flow of goods'));
add(H1('Lesson 9.7  —  Receiving / Recepția mărfii'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', 'camionul la **rampă**; **descărcarea** paleților', 'the lorry at the dock; unloading the pallets'],
  ['2', 'verifici **documentul de însoțire** (avizul)', 'check the delivery note'],
  ['3', '**numeri** coletele și **verifici** dacă sunt deteriorate', 'count the parcels and check for damage'],
  ['4', '**scanezi** marfa; o problemă → o **scrii** și **anunți** șeful', 'scan the goods; a problem → write it down, tell the boss'],
  ['5', '**semnezi** recepția', 'sign for the delivery']], { size: 18 }));
add(exercise('9.7', 'Put in order', 'Write 1–4.'));
add(ex2([['___  Scanez marfa.', '___  Descarc paleții.'], ['___  Semnez.', '___  Număr coletele.']]));
add(useful([['avizul de însoțire', 'the delivery note'], ['lipsește un colet', 'a parcel is missing'], ['e în plus', 'there\'s one extra'], ['cutia e udă / spartă', 'the box is wet / broken']]));

add(H1('Lesson 9.8  —  Storage and picking / Depozitarea și picking-ul'));
add(P('Every place on a rack has a **locație** (location), for example **A-03-12** = **culoarul A** (aisle A), **nivelul 3** (level 3), **poziția 12**. The **lista de picking** (or the terminal) tells you what to take and where: *A-03-12 · 4 buc. · cod 50123*.', { size: 19 }));
add(tbl([4819, 4819], [['ON THE TERMINAL', 'ENGLISH'],
  ['Scanați locația! → Scanați produsul! → Cantitate: 4', 'Scan the location! → Scan the product! → Quantity: 4'],
  ['Produs lipsă la locație.', 'Product missing at the location.'],
  ['Comanda completă. Duceți la ambalare.', 'Order complete. Take it to packing.']], { size: 18 }));
add(exercise('9.8', 'Read the location', 'Write the aisle, the level and the position.'));
add(ex2([['1.  B-02-07 → culoarul ___, nivelul ___, poziția ___', '2.  D-01-15 → culoarul ___, nivelul ___, poziția ___']]));
add(useful([['culoarul', 'the aisle'], ['nivelul · poziția', 'level · position'], ['a lua de pe raft', 'to take from the shelf'], ['stocul', 'the stock']]));

add(H1('Lesson 9.9  —  Packing and dispatch / Ambalarea și expedierea'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', 'alegi **cutia** potrivită, pui **umplutură** (hârtie, folie cu bule)', 'choose the right box, add filling'],
  ['2', 'închizi cu **bandă adezivă**', 'close with tape'],
  ['3', 'lipești **eticheta** pe partea de sus', 'stick the label on top'],
  ['4', 'pui coletele pe **palet**, cele grele jos, și **înfoliezi**', 'put the parcels on the pallet, heavy ones at the bottom, and wrap'],
  ['5', '**încarci** în camion după **lista de expediere**', 'load the lorry according to the dispatch list']], { size: 18 }));
add(exercise('9.9', 'Complete', 'Use: bandă · etichetă · jos · înfoliez.'));
add(ex2([['1.  Închid cutia cu ______________.', '2.  Pun ______________ pe cutie.'], ['3.  Cutiile grele le pun ______________.', '4.  La sfârșit ______________ paletul.']]));
add(useful([['fragil', 'fragile'], ['sus · jos', 'this side up · bottom'], ['folia cu bule', 'bubble wrap'], ['a încărca · a descărca', 'to load · to unload']]));

add(H1('Lesson 9.10  —  Delivery / Livrarea'));
add(tbl([4819, 4819], [['ON THE PHONE AND AT THE DOOR', 'ENGLISH'],
  ['C: Bună ziua! Sunt curierul de la... Aveți un colet. Sunteți acasă?', 'Hello! I\'m the courier from... You have a parcel. Are you at home?'],
  ['D: Da, în zece minute. Blocul B3, scara 2, apartamentul 17.', 'Yes, in ten minutes. Block B3, entrance 2, flat 17.'],
  ['C: Coletul e cu ramburs: 120 de lei. Plătiți cash sau cu cardul?', 'The parcel is cash on delivery: 120 lei. Cash or card?'],
  ['D: Cu cardul.  C: Semnați aici, vă rog. O zi bună!', 'By card. — Sign here, please. Have a nice day!']], { size: 19 }));
add(tbl([3000, 6638], [['SITUATION', 'WHAT YOU SAY / DO'],
  ['clientul nu e acasă', '*Nu sunteți acasă. Las coletul la vecin? · Revin mâine.* — the rules of your company decide'],
  ['coletul e deteriorat', '*Coletul e deteriorat. Vreți să-l verificați?* — take a photo, write it in the app'],
  ['clientul refuză coletul', '*Refuzați coletul? Îl notez ca refuzat.*'],
  ['adresa nu e bună', '*Nu găsesc adresa. Puteți să-mi spuneți un reper?* (a landmark)']], { size: 18 }));
add(exercise('9.10', 'What do you say?', 'Write one sentence.'));
add(ex2([['1.  You arrive at the block: ______________________', '2.  The parcel is cash on delivery: ______________________'], ['3.  The customer must sign: ______________________', '4.  The customer is not at home: ______________________']]));
add(useful([['a suna clientul', 'to call the customer'], ['semnătura', 'the signature'], ['reperul', 'the landmark'], ['livrat · nelivrat', 'delivered · not delivered'], ['a lăsa un aviz', 'to leave a notice'], ['Revin mâine.', 'I\'ll come back tomorrow.']]));

add(H1('Lesson 9.11  —  On the road / Pe drum'));
add(fig('tl_indicatoare', 620, 'Fig. 9.6 — Indicatoare rutiere de bază / Basic road signs'));
add(box('attn', 'ATTENTION — THE LAW ON THE ROAD', [
  'In Romania the driver **may not use the phone** while driving, except with a **hands-free** device, and everybody in the vehicle **must wear the seat belt** (OUG 195/2002). Respect the speed limits and park only where it is allowed.',
  'Your **driving licence**: whether you can drive in Romania with a licence from your country, and for how long, depends on the country that issued it. **Check with your employer and the driving licence service (DRPCIV) before you drive.**']));
add(exercise('9.11', 'Which sign?', 'Look at Fig. 9.6 and write the sign.'));
add(ex2([['1.  Trebuie să oprești complet. → ______________', '2.  Nu ai voie să intri. → ______________'], ['3.  Poți merge numai într-o direcție. → ______________', '4.  Poți parca aici. → ______________']]));
add(useful([['centura de siguranță', 'the seat belt'], ['sistemul mâini libere', 'hands-free'], ['limita de viteză', 'the speed limit'], ['am greșit drumul', 'I took the wrong way'], ['ambuteiaj', 'traffic jam'], ['întârzii 15 minute', 'I\'m 15 minutes late']]));
add(hw(35, ['**H35.1**  Write the steps of your work in order with *întâi, apoi, după aceea, la sfârșit*.', '**H35.2**  Write a short phone conversation with a customer (four lines).']));

// S36
add(spacer(160));
add(banner('SESSION 36  —  ORDERS, SAFETY, EXPRESSIONS, RECAP AND TEST', 'SESIUNEA 36 — COMENZI, SSM, EXPRESII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['understand the orders in the warehouse and on the road', 'lift loads correctly and move safely among forklifts', 'know what to do in an accident', 'recognise the expressions you hear at work and in the street']));
add(H1('Lesson 9.12  —  Orders at work / Comenzi la lucru'));
add(box('recap', 'RECAP — ORDERS  (Lesson 3.13)', ['The shift leader says **tu**: **Descarcă! Scanează!** To a group or politely: **Descărcați! Semnați aici, vă rog!**']));
add(tbl([2200, 2300, 5138], [['DIRECT (tu)', 'TO A GROUP / POLITE', 'ENGLISH — EXAMPLE'],
  ['**Descarcă! · Încarcă!**', '**Descărcați! · Încărcați!**', 'Unload! · Load! — *Descarcă camionul de la rampa 3!*'],
  ['**Scanează!**', '**Scanați!**', 'Scan! — *Scanează toate coletele!*'],
  ['**Pune!**', '**Puneți!**', 'Put! — *Pune paletul la locația A-03!*'],
  ['**Înfoliază!**', '**Înfoliați!**', 'Wrap! — *Înfoliază paletul!*'],
  ['**Numără! · Verifică!**', '**Numărați! · Verificați!**', 'Count! · Check! — *Numără cutiile!*'],
  ['**Sună clientul!**', '**Sunați clientul!**', 'Call the customer!'],
  ['**Oprește! · Stai!**', '**Opriți! · Stați!**', 'Stop! — *Stai, vine stivuitorul!*']], { size: 18 }));
add(exercise('9.12', 'Say the order', 'Write the direct order (tu).'));
add(ex2([['1.  (a descărca) ______________ paletul!', '2.  (a scana) ______________ eticheta!'], ['3.  (a înfolia) ______________ paletul!', '4.  (a suna) ______________ clientul!']]));
add(useful([['Am înțeles.', 'Understood.'], ['Gata, am terminat camionul.', 'Done, I\'ve finished the lorry.'], ['Unde îl pun?', 'Where do I put it?'], ['Ce urmează?', 'What\'s next?']]));

add(H1('Lesson 9.13  —  Safety at work / Securitatea și sănătatea în muncă'));
Cm.ssmCore(add);
add(fig('tl_ridicare', 480, 'Fig. 9.7 — Ridicarea corectă a unei greutăți / Lifting a load correctly'));
add(tbl([2600, 7038], [['THE RISK', 'WHAT YOU DO'],
  ['**greutăți** — heavy loads', 'knees bent, back straight, load close to the body; ask for help or use the pallet truck (HG 1051/2006)'],
  ['**stivuitoarele** — forklifts', 'walk only on the marked walkways; make eye contact with the driver; only **authorised** operators drive a forklift (ISCIR, PT R1-2010)'],
  ['**rafturile** — racks', 'do not climb on racks; heavy goods low; report a damaged rack'],
  ['**cutterul** — the knife', 'cut away from your body; close the blade after use'],
  ['**drumul** — the road', 'seat belt, no phone in your hand, rest when you are tired']], { size: 18 }));
add(box('attn', 'ATTENTION — WHAT TO DO IN AN ACCIDENT', [
  '**In the warehouse:** stop the work, make the place safe, call **112** if someone is badly hurt (Lesson 5.2), tell the shift leader **at once**. **On the road:** stop, switch on the hazard lights, put on the reflective vest, call **112** if someone is injured, then call your dispatcher. Always tell your employer about **any** accident — also a small one (Law 319/2006, art. 23).']));
add(fig('semne', 520, 'Fig. 9.8 — Indicatoare de securitate / Safety signs'));
add(exercise('9.13', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  Cutia are 40 kg. → ______________________', '2.  Vine stivuitorul. → ______________________'], ['3.  Raftul e îndoit. → ______________________', '4.  Ai un accident ușor cu duba. → ______________________']]));
add(useful([['M-am lovit la spate.', 'I hurt my back.'], ['aleea pietonală', 'walkway'], ['avariile · triunghiul', 'hazard lights · warning triangle'], ['E periculos.', 'It\'s dangerous.']]));

add(H1('Lesson 9.14  —  Expressions and recap / Expresii și recapitulare'));
Cm.expressions(add, 'IN THE WAREHOUSE, ON THE ROAD', [
  ['**Dă-i bice!**', 'grăbește-te, mai repede', 'Hurry up!'],
  ['**E blocaj.**', 'e trafic mare, nu se mai circulă', 'There\'s a jam.']],
  'a pallet stacked too high, a parcel lifted with a bent back, driving while tired');
add(H2('Module 9 in one table'));
add(tbl([2410, 2410, 2410, 2408], [['WAREHOUSE', 'DELIVERY', 'NUMBERS', 'SAFETY'],
  ['palet · raft · transpalet', 'dubă · colet · AWB', 'kg · t · mc', 'vestă · bocanci · mănuși'],
  ['stivuitor · scanner', 'adresa · bl. · sc. · ap.', 'L × l × h', 'genunchii îndoiți'],
  ['recepție · picking', 'ramburs · semnătura', 'km · km/h · l', 'aleea pietonală'],
  ['ambalare · expediere', 'STOP · Cedează trecerea', 'A-03-12', 'centura · mâini libere · 112']], { size: 16 }));
add(exercise('9.14', 'Everything together', 'Circle the correct word.'));
add(ex2([['1.  Mut paletul cu ( transpaletul  /  cutterul ).', '2.  „et. 4” = ( etajul  /  eticheta ) 4'], ['3.  1 t = ( 100  /  1 000 ) kg', '4.  ( Scanează  /  Scanați ) coletul! (to one person)'], ['5.  Ridic cu ( spatele  /  genunchii ) îndoiți.', '6.  La volan, telefonul numai cu ( mâini libere  /  mâna ).']]));
add(hw(36, ['**H36.1**  Write five orders you hear every day at work and what they mean.', '**H36.2**  Write what you do if a box falls from a rack.']));

const Q = [
  ['Cu ce muți un palet?', ['cu cutterul', 'cu transpaletul', 'cu banda adezivă', 'cu eticheta'], 'b'],
  ['Cu ce citești codul de bare?', ['cu scannerul', 'cu cântarul', 'cu folia', 'cu raftul'], 'a'],
  ['Pluralul lui „colet” este:', ['coleturi', 'coleți', 'colete', 'coletă'], 'c'],
  ['„a face plinul” înseamnă:', ['to fill up the tank', 'to load the van', 'to park', 'to wash the van'], 'a'],
  ['În depozit porți adesea obligatoriu:', ['vesta reflectorizantă', 'cravata', 'sandale', 'boneta'], 'a'],
  ['Cine dă gratuit echipamentul de protecție?', ['lucrătorul', 'clientul', 'angajatorul', 'curierul'], 'c'],
  ['1 t = ___ kg', ['10', '100', '1 000', '10 000'], 'c'],
  ['„mc” înseamnă:', ['metru pătrat', 'metru cub', 'milimetru', 'metru liniar'], 'b'],
  ['În adresă, „sc. 2” înseamnă:', ['strada 2', 'scara 2', 'sectorul 2', 'etajul 2'], 'b'],
  ['„Ramburs” înseamnă:', ['clientul plătește la livrare', 'coletul e gratuit', 'coletul e fragil', 'coletul e returnat'], 'a'],
  ['Volumul unei cutii 1 m × 0,5 m × 0,5 m este:', ['2 mc', '0,25 mc', '1 mc', '0,5 mc'], 'b'],
  ['120 km cu 60 km/h durează:', ['1 oră', '2 ore', '3 ore', '6 ore'], 'b'],
  ['La recepție, un colet e deteriorat. Ce faci?', ['îl ascunzi', 'îl notezi și anunți șeful', 'îl arunci', 'îl semnezi fără să spui'], 'b'],
  ['Locația „A-03-12”: „03” este:', ['culoarul', 'nivelul', 'poziția', 'cantitatea'], 'b'],
  ['Cutiile grele pe palet le pui:', ['sus', 'jos', 'la mijloc, în picioare', 'deasupra celor fragile'], 'b'],
  ['„Fragil” înseamnă:', ['heavy', 'fragile', 'wet', 'urgent'], 'b'],
  ['Clientul trebuie să confirme primirea. Îi spui:', ['Semnați aici, vă rog.', 'Pleacă!', 'Dă-mi banii!', 'Nu știu.'], 'a'],
  ['Indicatorul octogonal roșu „STOP” înseamnă:', ['cedează trecerea', 'oprire obligatorie', 'parcare', 'sens unic'], 'b'],
  ['La volan, telefonul îl folosești:', ['cu mâna', 'numai cu sistem mâini libere', 'numai la semafor', 'oricum'], 'b'],
  ['Centura de siguranță este:', ['opțională', 'obligatorie', 'numai noaptea', 'numai pe autostradă'], 'b'],
  ['Ridici o cutie grea:', ['cu spatele îndoit', 'cu genunchii îndoiți și spatele drept', 'cu o mână', 'repede, răsucindu-te'], 'b'],
  ['Cine are voie să conducă stivuitorul?', ['oricine', 'numai operatorul autorizat', 'clientul', 'șoferul de dubă'], 'b'],
  ['Ordinul „Descarcă camionul!” vine de la:', ['a descărca', 'a desena', 'a deschide', 'a descrie'], 'a'],
  ['Ai un accident rutier cu un rănit. Ce faci întâi?', ['pleci', 'suni la 112', 'suni clientul', 'continui livrările'], 'b'],
  ['„Dă-i bice!” înseamnă:', ['Hit him!', 'Hurry up!', 'Stop!', 'Be careful!'], 'b'],
];
Cm.detachable(add, dom, Q, [
  '**9.1**   transpaletul · scannerul · banda adezivă · folie stretch · raft · duba',
  '**9.2**   oglindă · frână · rezervor · ușa      **9.3**   vesta · bocanci · mănuși · șapca',
  '**9.4**   1 000 · doi virgulă cinci kilograme · nouăzeci de kilometri pe oră · cincizeci de litri',
  '**9.5**   strada Florilor · blocul B3, scara 2 · etajul 4 · 120 de lei (ramburs)',
  '**9.6**   300 · 0,1 · 2 · 15      **9.7**   3 · 1 · 4 · 2      **9.8**   B, 2, 7 · D, 1, 15',
  '**9.9**   bandă · etichetă · jos · înfoliez      **9.10**   e.g. Bună ziua, sunt curierul... · Plătiți cash sau cu cardul? · Semnați aici, vă rog. · Revin mâine.',
  '**9.11**   STOP · Accesul interzis · Sens unic · Parcare      **9.12**   Descarcă · Scanează · Înfoliază · Sună',
  '**9.13**   e.g. Cer ajutor / folosesc transpaletul. · Stau pe alee și aștept. · Anunț șeful. · Opresc, anunț dispecerul și angajatorul.',
  '**9.14**   transpaletul · etajul · 1 000 · Scanează · genunchii · mâini libere',
], [
  ['Manipularea manuală a maselor — riscuri dorso-lombare', 'HG nr. 1051/2006 — legislatie.just.ro/Public/DetaliiDocument/74429', 'Lesson 9.13, test q. 21'],
  ['Autorizarea stivuitoriștilor', 'ISCIR — Prescripția tehnică PT R1-2010 (stivuitoare) — iscir.ro', 'Lesson 9.13, test q. 22'],
  ['Telefonul la volan numai cu mâini libere; centura de siguranță obligatorie', 'OUG nr. 195/2002 (republicată), art. 36 — legislatie.just.ro/Public/DetaliiDocumentAfis/74028; Poliția Română', 'Lesson 9.11, test q. 19–20'],
], ['Depozitul, vehiculul, echipamentul de lucru', 'Unități, eticheta și adresa, calcule simple', 'Recepția, depozitarea și picking-ul, ambalarea și expedierea, livrarea, pe drum', 'Comenzi, SSM, expresii, recapitulare + TEST CUMULATIV']);
Packer.toBuffer(Cm.makeDoc(dom, S)).then(b => { fs.writeFileSync(process.argv[2] || 'm9_logistica.docx', b); console.log('written'); });
