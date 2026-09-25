const fs = require('fs');
const L = require('./lib');
const Cm = require('./common9');
const { P, spacer, pageBreak, H1, H2, tbl, box, banner, objectives, exercise, useful, fig } = L;
const { Packer } = L.d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });
const dom = { ro: 'Livrare de mâncare', en: 'Food delivery' };

Cm.cover(add, dom);
add(H1('Before you start'),
  P('You have finished **Level A1**. Module 9 uses everything you know **on the bicycle, the e-scooter or the moped**, at the **restaurant counter** and at the **customer\'s door**. You will name your vehicle and equipment, read an order in the app, work with minutes, kilometres, battery and money, follow a delivery from the restaurant to the door, keep the food safe, know the main traffic rules for your vehicle and your duties for **health and safety at work** (SSM).'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers · de** after 20 · decimals', 'Lesson 2.5', '3,2 km, 48,50 lei, 20 de minute'],
  ['**orders and requests**', 'Lesson 3.13', 'Ia comanda! Sunați-mă, vă rog!'],
  ['**the time**', 'Lesson 5.4', 'ajung la 19:40, în 10 minute'],
  ['**the weather**', 'Lesson 5.5', 'plouă, ninge, e polei'],
  ['**address, floor, block**', 'Lessons 6.4, 6.6', 'bl. B3, sc. 2, et. 4, ap. 17'],
  ['**food, ordering and paying**', 'Lessons 7.3, 7.4', 'the order, the bill, cash or card'],
  ['**the phone call, 112**', 'Lesson 5.2', 'calling a customer, an accident']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 33**', '3 hours', 'Lesson 9.1 The app and the order · 9.2 The vehicle · 9.3 Your equipment'],
  ['**Session 34**', '3 hours', 'Lesson 9.4 Time, distance, battery · 9.5 The address and the customer · 9.6 Money'],
  ['**Session 35**', '3 hours', 'Lesson 9.7 At the restaurant · 9.8 The food in the bag · 9.9 At the door · 9.10 Problems and support · 9.11 On the road'],
  ['**Session 36**', '3 hours', 'Lesson 9.12 Orders and messages · 9.13 Safety at work · 9.14 Expressions and recap · **Module 9 cumulative test**']], { size: 19 }));
Cm.recapNoGrammar(add, 'One courier says **comandă**, another **livrare**; one says **geantă**, another **cutie** or **rucsac**.');
add(pageBreak());

// S33
add(banner('SESSION 33  —  THE APP, THE VEHICLE, THE EQUIPMENT', 'SESIUNEA 33 — APLICAȚIA, VEHICULUL, ECHIPAMENTUL  ·  3 hours'));
add(objectives(['read a new order in the app', 'name the parts of a bicycle, an e-scooter and a moped', 'name your equipment and say what is missing or broken']));
add(H1('Lesson 9.1  —  The app and the order / Aplicația și comanda'));
add(fig('fd_app', 560, 'Fig. 9.1 — O comandă nouă în aplicație (exemplu) / A new order in the app (example)'));
add(tbl([2400, 2419, 2400, 2419], [['IN THE APP', 'ENGLISH', 'IN THE APP', 'ENGLISH'],
  ['**Acceptă · Refuză**', 'accept · decline', '**Ridicare**', 'pickup'],
  ['**Am ajuns la restaurant**', 'I\'m at the restaurant', '**Comanda e gata**', 'the order is ready'],
  ['**Am ridicat comanda**', 'I\'ve picked up the order', '**Livrare**', 'drop-off'],
  ['**Am ajuns la client**', 'I\'m at the customer', '**Livrat**', 'delivered'],
  ['**online · offline**', 'available · not available', '**Istoric**', 'history (your deliveries)']], { size: 18 }));
add(P('People: **curierul / livratorul** (you) · **clientul** · **personalul restaurantului** · **suportul** (the support team in the app) · **coordonatorul** or **șeful** at the company you work for.', { size: 19 }));
add(exercise('9.1', 'Read the order', 'Look at Fig. 9.1.'));
add(ex2([['1.  De unde ridici comanda? — ______________', '2.  Unde livrezi? — ______________'], ['3.  Câți kilometri sunt? — ______________', '4.  Cum plătește clientul? — ______________']]));
add(useful([['a accepta o comandă', 'to accept an order'], ['a refuza', 'to decline'], ['sunt online', 'I\'m available'], ['Nu-mi merge aplicația.', 'My app doesn\'t work.'], ['numărul comenzii', 'the order number'], ['o comandă nouă', 'a new order']]));

add(H1('Lesson 9.2  —  The vehicle / Vehiculul'));
add(fig('fd_echipament', 640, 'Fig. 9.2 — Vehiculul și echipamentul curierului / The courier\'s vehicle and equipment'));
add(tbl([2450, 2369, 2450, 2369], [['THE VEHICLE', 'ENGLISH', 'THE VEHICLE', 'ENGLISH'],
  ['**ghidonul · șaua**', 'handlebar · saddle', '**pedalele · lanțul**', 'pedals · chain'],
  ['**roata · camera · anvelopa**', 'wheel · inner tube · tyre', '**frâna · soneria**', 'brake · bell'],
  ['**farul · stopul**', 'front light · rear light', '**catadioptrii**', 'reflectors'],
  ['**bateria · încărcătorul**', 'battery · charger', '**lacătul**', 'the lock'],
  ['**motorul · rezervorul** (moped)', 'engine · fuel tank', '**plăcuța cu numărul**', 'number plate']], { size: 18 }));
add(exercise('9.2', 'Which part?', 'Write the part.'));
add(ex2([['1.  Opresc cu ______________.', '2.  Noaptea, în față, aprind ______________.'], ['3.  Încarc ______________ trotinetei.', '4.  Leg bicicleta cu ______________.']]));
add(useful([['am făcut pană', 'I have a flat tyre'], ['s-a descărcat bateria', 'the battery is flat'], ['nu merge frâna', 'the brake doesn\'t work'], ['a umfla roata', 'to pump up the tyre'], ['service-ul', 'the repair shop'], ['s-a rupt lanțul', 'the chain broke']]));

add(H1('Lesson 9.3  —  Your equipment / Echipamentul tău'));
add(fig('fd_curier', 440, 'Fig. 9.3 — Curierul echipat / The courier and the equipment'));
add(P('Keep the **geanta termoizolantă** (the insulated bag) **clean and closed**. In the dark and in rain, wear **light-coloured, reflective clothes** — the drivers must see you. Your phone needs a **suport** on the handlebar and a **baterie externă** for the long evenings.', { size: 19 }));
add(exercise('9.3', 'What do you need?', 'Complete.'));
add(ex2([['1.  Pun mâncarea în ______________.', '2.  Pe cap port ______________.'], ['3.  Noaptea port ______________ reflectorizantă.', '4.  Telefonul stă pe ______________.']]));
add(useful([['geanta e murdară', 'the bag is dirty'], ['o pelerină de ploaie', 'a raincoat'], ['Îmi trebuie o vestă nouă.', 'I need a new vest.'], ['Unde pot încărca telefonul?', 'Where can I charge my phone?']]));
add(hw(33, ['**H33.1**  Write ten things you use at work, with un / o and the plural.', '**H33.2**  Write what is not working on your vehicle today — or what could go wrong (three sentences).']));

// S34
add(spacer(160));
add(banner('SESSION 34  —  TIME, DISTANCE, ADDRESS, MONEY', 'SESIUNEA 34 — TIMP, DISTANȚĂ, ADRESĂ, BANI  ·  3 hours'));
add(objectives(['say how far, how long and how much battery', 'read an address and find the right door', 'take cash, give change and say thank you for a tip']));
add(H1('Lesson 9.4  —  Time, distance, battery / Timp, distanță, baterie'));
add(tbl([1500, 2600, 2000, 3538], [['WRITTEN', 'YOU SAY', 'ENGLISH', 'EXAMPLE'],
  ['**km · m**', 'kilometru · metru', 'kilometre · metre', 'mai am 800 de metri'],
  ['**min**', 'minut', 'minute', 'ajung în 5 minute'],
  ['**km/h**', 'kilometri pe oră', 'km per hour', 'trotineta merge cu cel mult 25 km/h'],
  ['**%**', 'la sută', 'per cent', 'bateria are 15 la sută'],
  ['**19:40**', 'ora nouăsprezece și patruzeci', 'at 7.40 pm', 'comanda e gata la 19:40']], { size: 18 }));
add(tbl([3000, 3319, 3319], [['QUESTION', 'CALCULATION', 'ANSWER'],
  ['Ai 6 km cu 18 km/h. Cât durează?', '6 : 18 = 1/3 oră', '**20 de minute**'],
  ['Pleci la 19:45. Drumul durează 15 minute. Când ajungi?', '19:45 + 0:15', '**la 20:00**'],
  ['Bateria are 40%. Consumi 5% pe livrare. Câte livrări mai poți face?', '40 : 5 = 8', '**8 livrări** (better 7: keep a reserve)']], { size: 18 }));
add(exercise('9.4', 'Say it and calculate', 'Write the answer.'));
add(ex2([['1.  12 km cu 24 km/h = ______ minute', '2.  Plec la 20:10 + 25 min = ______'], ['3.  „15%” = ______________________', '4.  „800 m” = ______________________']]));
add(useful([['Cât mai e?', 'How far is it still?'], ['Ajung în cinci minute.', 'I\'ll be there in five minutes.'], ['Întârzii puțin.', 'I\'m a little late.'], ['aproape · departe', 'near · far']]));

add(H1('Lesson 9.5  —  The address and the customer / Adresa și clientul'));
add(box('recap', 'RECAP — THE ADDRESS  (Lessons 6.4, 6.6)', ['**Str. Florilor nr. 12, bl. B3, sc. 2, et. 4, ap. 17** — strada, numărul, blocul, scara, etajul, apartamentul. At a block you ring the **interfon** with the apartment number.']));
add(tbl([3200, 6438], [['IN THE ORDER / YOU HEAR', 'WHAT IT MEANS'],
  ['**interfon 17 · cod 1234**', 'ring 17 on the intercom · the door code is 1234'],
  ['**Lăsați la ușă, vă rog.**', 'leave it at the door (no contact)'],
  ['**Sunați când ajungeți.**', 'call when you arrive'],
  ['**Nu merge interfonul.**', 'the intercom doesn\'t work — call the customer'],
  ['**reperul: lângă farmacie**', 'the landmark: next to the pharmacy'],
  ['**intrarea din spate · poarta verde**', 'the back entrance · the green gate']], { size: 18 }));
add(tbl([4819, 4819], [['ON THE PHONE', 'ENGLISH'],
  ['C: Bună seara! Sunt curierul cu comanda dumneavoastră. Sunt la bloc.', 'Good evening! I\'m the courier with your order. I\'m at the block.'],
  ['D: Scara 2, etajul 4. Vă deschid.', 'Entrance 2, 4th floor. I\'ll open the door for you.'],
  ['C: Nu găsesc scara. Puteți coborî, vă rog?', 'I can\'t find the entrance. Can you come down, please?']], { size: 19 }));
add(exercise('9.5', 'What do you say?', 'Write one sentence.'));
add(ex2([['1.  You are at the block: ______________________', '2.  The intercom doesn\'t work: ______________________'], ['3.  You can\'t find the entrance: ______________________', '4.  You are 5 minutes late: ______________________']]));
add(useful([['Unde e scara 2?', 'Where is entrance 2?'], ['Vă aștept jos.', 'I\'m waiting downstairs.'], ['Deschideți, vă rog.', 'Open the door, please.'], ['clientul nu răspunde', 'the customer doesn\'t answer'], ['codul ușii', 'the door code'], ['un reper', 'a landmark']]));

add(H1('Lesson 9.6  —  Money / Banii'));
add(box('recap', 'RECAP — PAYING  (Lesson 7.4)', ['**Plătiți cash sau cu cardul?** · **Poftiți restul.** · 48,50 lei = patruzeci și opt de lei și cincizeci de bani.']));
add(tbl([3000, 3319, 3319], [['THE CUSTOMER PAYS', 'CALCULATION', 'THE CHANGE / RESTUL'],
  ['Comanda: 48,50 lei. Clientul dă 50 de lei.', '50 − 48,50', '**1,50 lei**'],
  ['Comanda: 73 de lei. Clientul dă 100 de lei.', '100 − 73', '**27 de lei**'],
  ['Comanda: 36,20 lei. Clientul dă 40 de lei.', '40 − 36,20', '**3,80 lei**']], { size: 18 }));
add(tbl([4819, 4819], [['AT THE DOOR', 'ENGLISH'],
  ['Sunt 48,50 lei, vă rog.', 'It\'s 48.50 lei, please.'],
  ['Aveți mărunt? · N-am rest la 200 de lei.', 'Do you have small change? · I have no change for 200 lei.'],
  ['E plătită cu cardul în aplicație.', 'It\'s paid by card in the app.'],
  ['Păstrați restul. — Mulțumesc frumos!', 'Keep the change. — Thank you very much!']], { size: 19 }));
add(P('A **bacșiș** (tip) is never compulsory — do not ask for it. Keep the cash money separate and count it at the end of the day: the app shows what you must **hand in** or what is **yours**, depending on your contract.', { size: 19 }));
add(exercise('9.6', 'Calculate the change', 'Write the answer.'));
add(ex2([['1.  Comanda 42 lei, clientul dă 50 → ______', '2.  Comanda 67,50 lei, clientul dă 70 → ______'], ['3.  Comanda 18,40 lei, clientul dă 20 → ______', '4.  Comanda 91 lei, clientul dă 100 → ______']]));
add(useful([['restul', 'the change'], ['bani mărunți · mărunt', 'small change'], ['bacșișul', 'the tip'], ['o bancnotă de 100', 'a 100-lei note'], ['plătit online', 'paid online'], ['numerar · cash', 'cash']]));
add(hw(34, ['**H34.1**  Write your own address in the Romanian order, with abbreviations and the intercom number.', '**H34.2**  Write three payments with the change, like the table in Lesson 9.6.']));

// S35
add(spacer(160));
add(banner('SESSION 35  —  A DELIVERY STEP BY STEP', 'SESIUNEA 35 — O LIVRARE PAS CU PAS  ·  3 hours'));
add(objectives(['pick up an order at the restaurant and check it', 'keep the food safe and clean in the bag', 'hand over the order and check the age for alcohol', 'explain a problem to support', 'know the main traffic rules for your vehicle']));
add(fig('fd_flux', 620, 'Fig. 9.4 — O livrare pas cu pas / A delivery step by step'));
add(H1('Lesson 9.7  —  At the restaurant / La restaurant'));
add(tbl([4819, 4819], [['AT THE COUNTER', 'ENGLISH'],
  ['C: Bună seara! Am venit pentru comanda 4821.', 'Good evening! I\'m here for order 4821.'],
  ['R: Mai durează cinci minute. Așteptați, vă rog.', 'Five more minutes. Please wait.'],
  ['C: E completă? Sunt două pungi și o băutură.', 'Is it complete? Two bags and a drink.'],
  ['R: Da, totul e aici. Și bonul.  C: Mulțumesc!', 'Yes, everything is here. And the receipt. — Thank you!']], { size: 19 }));
add(P('Check the **numărul comenzii**, the **number of bags** and the **drinks** before you leave. Do not open the sealed bags. Wait where the staff asks you to wait — not in the kitchen.', { size: 19 }));
add(exercise('9.7', 'Put in order', 'Write 1–4.'));
add(ex2([['___  Pun comanda în geantă.', '___  Spun numărul comenzii.'], ['___  Apăs „Am ridicat comanda”.', '___  Verific pungile și băuturile.']]));
add(useful([['Comanda nu e gata.', 'The order isn\'t ready.'], ['Lipsește o băutură.', 'A drink is missing.'], ['punga · bonul', 'the bag · the receipt'], ['sigilat', 'sealed']]));

add(H1('Lesson 9.8  —  The food in the bag / Mâncarea în geantă'));
add(tbl([2600, 7038], [['THE RULE', 'WHY / HOW'],
  ['**geanta curată**', 'wash and dry the inside often; nothing else in the bag — no clothes, no fuel, no animals'],
  ['**cald separat de rece**', 'hot food on one side, cold drinks and desserts on the other side, or in a separate bag'],
  ['**băuturile în picioare**', 'drinks upright, in a holder, so they do not spill'],
  ['**nimic greu deasupra**', 'heavy things at the bottom, light things on top'],
  ['**geanta închisă**', 'close the bag at once — the food stays warm or cold and clean'],
  ['**sigiliul**', 'never open a sealed bag; if it is torn, tell the restaurant and support']], { size: 18 }));
add(P('Anyone who transports food must keep it **protected from dirt** and at the **right temperature** — this is the basic EU food hygiene rule (Regulation (EC) no. 852/2004). Wash your hands, and do not work when you have a stomach illness.', { size: 19 }));
add(exercise('9.8', 'Correct or not?', 'Write C (corect) or G (greșit).'));
add(ex2([['1.  ___ Pun supa lângă înghețată.', '2.  ___ Închid geanta imediat.'], ['3.  ___ Pun băuturile culcat.', '4.  ___ Deschid punga sigilată ca să verific.']]));
add(useful([['s-a vărsat', 'it spilled'], ['cald · rece', 'hot · cold'], ['a spăla geanta', 'to wash the bag'], ['sigiliul e rupt', 'the seal is torn']]));

add(H1('Lesson 9.9  —  At the door / La ușa clientului'));
add(tbl([4819, 4819], [['AT THE DOOR', 'ENGLISH'],
  ['C: Bună seara! Comanda dumneavoastră. Poftă bună!', 'Good evening! Your order. Enjoy your meal!'],
  ['D: Mulțumesc! E totul?', 'Thank you! Is that everything?'],
  ['C: Da: două pungi și o băutură. O seară bună!', 'Yes: two bags and a drink. Have a nice evening!']], { size: 19 }));
add(box('attn', 'ATTENTION — ALCOHOL AND ENERGY DRINKS: ONLY 18+', [
  'In Romania it is forbidden to sell **alcoholic drinks** and **energy drinks** to **minors** (under 18) — Law no. 61/1991. If the order contains alcohol, ask for an ID: **Vă rog, un act de identitate. Comanda conține alcool.** If the customer is under 18, has no ID or is clearly drunk, **do not hand over the drink** and follow the steps in the app for this situation.']));
add(tbl([3000, 6638], [['SITUATION', 'WHAT YOU SAY / DO'],
  ['clientul nu răspunde', '*Sunt la ușă, vă aștept.* — call, write in the chat, wait the time the app says'],
  ['lipsește ceva', '*Îmi pare rău, restaurantul a pregătit comanda.* — the customer reports it in the app'],
  ['clientul vrea să intri', '*Îmi pare rău, las comanda aici.* — you do not need to enter the flat'],
  ['clientul e supărat', '*Înțeleg. Vă rog să scrieți la suport.* — stay calm and polite']], { size: 18 }));
add(exercise('9.9', 'What do you say?', 'Write one sentence.'));
add(ex2([['1.  You hand over the order: ______________________', '2.  The order contains beer: ______________________'], ['3.  The customer doesn\'t answer: ______________________', '4.  The customer is angry: ______________________']]));
add(useful([['Poftă bună!', 'Enjoy your meal!'], ['un act de identitate', 'an ID document'], ['Aveți 18 ani?', 'Are you 18?'], ['Nu pot să vă dau băutura.', 'I can\'t give you the drink.'], ['Las comanda la ușă.', 'I\'ll leave the order at the door.'], ['O seară bună!', 'Have a nice evening!']]));

add(H1('Lesson 9.10  —  Problems and support / Probleme și suportul'));
add(P('When something goes wrong, write to the **suport** in the app. Short, clear sentences work best — **what, where, the order number**:', { size: 19 }));
add(tbl([4819, 4819], [['TO SUPPORT (CHAT)', 'ENGLISH'],
  ['Comanda 4821: restaurantul e închis.', 'Order 4821: the restaurant is closed.'],
  ['Clientul nu răspunde. Aștept de 10 minute.', 'The customer doesn\'t answer. I\'ve been waiting 10 minutes.'],
  ['Adresa e greșită. Clientul nu e aici.', 'The address is wrong. The customer isn\'t here.'],
  ['S-a vărsat băutura. Ce fac?', 'The drink spilled. What do I do?'],
  ['Am făcut pană. Nu pot livra comanda.', 'I have a flat tyre. I can\'t deliver the order.'],
  ['Am avut un accident. Sunt bine / Sunt rănit.', 'I\'ve had an accident. I\'m OK / I\'m hurt.']], { size: 18 }));
add(exercise('9.10', 'Write to support', 'One sentence with the order number 5093.'));
add(ex2([['1.  The restaurant is closed: ______________________', '2.  The address is wrong: ______________________'], ['3.  The customer doesn\'t answer: ______________________', '4.  Your battery is flat: ______________________']]));
add(useful([['Ce fac?', 'What do I do?'], ['Anulați comanda, vă rog.', 'Please cancel the order.'], ['o poză', 'a photo'], ['am trimis o poză', 'I\'ve sent a photo']]));

add(H1('Lesson 9.11  —  On the road / Pe drum'));
add(fig('fd_indicatoare', 620, 'Fig. 9.5 — Indicatoare pentru biciclete și trotinete / Signs for bicycles and e-scooters'));
add(tbl([2000, 7638], [['VEHICLE', 'WHAT THE LAW SAYS (checked with the Romanian Police)'],
  ['**bicicleta**', 'on the **pistă pentru biciclete** if there is one · at night: **white or yellow light in front, red light at the back**, reflectors, working brakes and a bell · reflective vest at night'],
  ['**trotineta electrică**', 'from **14 years** · maximum **25 km/h** · on the cycle lane; if there is none, only on streets with a speed limit of **maximum 50 km/h** · **helmet compulsory under 16** · lights and reflectors at night, brakes, bell'],
  ['**mopedul**', 'maximum **45 km/h**, up to 50 cm³ or 4 kW · from **16 years** · a **driving licence** (category AM, A1 or B1) · **registration, compulsory insurance (RCA), technical inspection** · helmet']], { size: 17 }));
add(box('attn', 'ATTENTION — THE PHONE AND THE ROAD', [
  '**Do not hold the phone in your hand while you ride.** Put it in the holder before you leave; to read or write, **stop at the side**. No headphones in both ears. **Never on the pavement** among pedestrians, and never through a red light — being in a hurry is not a reason.',
  'Your **driving licence** for the moped: whether you can use a licence from your country in Romania, and for how long, depends on the country that issued it. **Check with your employer and the driving licence service (DRPCIV) first.**']));
add(exercise('9.11', 'Which sign?', 'Look at Fig. 9.5 and write the sign.'));
add(ex2([['1.  Aici merg numai bicicletele. → ______________', '2.  Aici nu ai voie cu bicicleta. → ______________'], ['3.  Trebuie să oprești complet. → ______________', '4.  Aici merg numai pietonii. → ______________']]));
add(useful([['pista pentru biciclete', 'the cycle lane'], ['trotuarul', 'the pavement'], ['trecerea de pietoni', 'the pedestrian crossing'], ['semaforul e roșu', 'the light is red'], ['e polei', 'it\'s icy'], ['un sens giratoriu', 'a roundabout']]));
add(hw(35, ['**H35.1**  Write the steps of a delivery in order with *întâi, apoi, după aceea, la sfârșit*.', '**H35.2**  Write three messages to support about three different problems.']));

// S36
add(spacer(160));
add(banner('SESSION 36  —  ORDERS, SAFETY, EXPRESSIONS, RECAP AND TEST', 'SESIUNEA 36 — COMENZI, SSM, EXPRESII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['understand the orders and messages you get at work', 'know the risks of your work and how to stay safe', 'know what to do in an accident', 'recognise the expressions you hear on the street and at the restaurant']));
add(H1('Lesson 9.12  —  Orders and messages / Comenzi și mesaje'));
add(box('recap', 'RECAP — ORDERS  (Lesson 3.13)', ['At the counter they say **tu**: **Așteaptă! Ia comanda!** A customer or support writes politely: **Sunați-mă! Lăsați la ușă, vă rog!**']));
add(tbl([2200, 2300, 5138], [['DIRECT (tu)', 'POLITE (dumneavoastră)', 'ENGLISH — EXAMPLE'],
  ['**Așteaptă!**', '**Așteptați!**', 'Wait! — *Așteaptă afară, te rog!*'],
  ['**Ia comanda!**', '**Luați comanda!**', 'Take the order! — *Ia comanda 4821, e gata!*'],
  ['**Sună-mă!**', '**Sunați-mă!**', 'Call me! — *Sunați-mă când ajungeți.*'],
  ['**Lasă la ușă!**', '**Lăsați la ușă!**', 'Leave it at the door!'],
  ['**Urcă!**', '**Urcați!**', 'Come up! — *Urcați la etajul 4.*'],
  ['**Trimite o poză!**', '**Trimiteți o poză!**', 'Send a photo! (support)'],
  ['**Oprește!**', '**Opriți!**', 'Stop! — the police or a worker on the road']], { size: 18 }));
add(exercise('9.12', 'Understand the message', 'Write in English.'));
add(ex2([['1.  „Lăsați la ușă, vă rog.” → ______________', '2.  „Sunați-mă când ajungeți.” → ______________'], ['3.  „Trimiteți o poză.” → ______________', '4.  „Urcați la etajul 3.” → ______________']]));
add(useful([['Am înțeles.', 'Understood.'], ['Vin imediat.', 'I\'m coming right away.'], ['Sunt pe drum.', 'I\'m on my way.'], ['Am ajuns.', 'I\'ve arrived.']]));

add(H1('Lesson 9.13  —  Safety at work / Securitatea și sănătatea în muncă'));
Cm.ssmCore(add);
add(tbl([2600, 7038], [['THE RISK', 'WHAT YOU DO'],
  ['**traficul** — traffic', 'follow the rules of Lesson 9.11; watch the doors of parked cars; make eye contact with drivers'],
  ['**noaptea** — the dark', 'lights on, reflective vest, light-coloured clothes'],
  ['**vremea** — rain, snow, ice, heat', 'slower, longer braking distance; in heat drink water; you may stop when it is dangerous'],
  ['**oboseala** — tiredness', 'take breaks; tired = slow reactions'],
  ['**geanta grea** — a heavy bag', 'bag on both shoulders, not too full; heavy things at the bottom'],
  ['**scările, câinii** — stairs, dogs', 'use the handrail; keep away from dogs and ask the customer to hold the dog']], { size: 18 }));
add(box('attn', 'ATTENTION — WHAT TO DO IN AN ACCIDENT', [
  'Stop in a safe place. If someone is hurt, call **112** (Lesson 5.2). Do not move an injured person unless there is danger. Write to **support** in the app and tell the company you work for. Always report **any** accident — also a small one (Law 319/2006, art. 23).']));
add(fig('semne', 520, 'Fig. 9.6 — Indicatoare de securitate / Safety signs'));
add(exercise('9.13', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  Plouă tare și e întuneric. → ______________________', '2.  Ești foarte obosit. → ______________________'], ['3.  Un câine latră la ușă. → ______________________', '4.  Ai căzut cu bicicleta. → ______________________']]));
add(useful([['Am căzut.', 'I fell.'], ['M-am lovit la genunchi.', 'I hurt my knee.'], ['E periculos.', 'It\'s dangerous.'], ['Fac o pauză.', 'I\'m taking a break.']]));

add(H1('Lesson 9.14  —  Expressions and recap / Expresii și recapitulare'));
Cm.expressions(add, 'AT THE RESTAURANT, ON THE STREET', [
  ['**Dă-i bice!**', 'grăbește-te, mai repede', 'Hurry up!'],
  ['**Vine acum-acum.**', 'e aproape gata (dar poate mai durează)', 'It\'s coming any minute.'],
  ['**E jale pe drum.**', 'e trafic foarte mare', 'The traffic is terrible.']],
  'riding through a red light because you are late, a torn seal, a dirty bag');
add(H2('Module 9 in one table'));
add(tbl([2410, 2410, 2410, 2408], [['THE APP', 'THE DELIVERY', 'NUMBERS AND MONEY', 'SAFETY'],
  ['Acceptă · Refuză', 'ridicare · livrare', 'km · min · %', 'casca · vesta'],
  ['Am ridicat · Livrat', 'geanta termoizolantă', '19:40 · în 10 minute', 'farul alb · stopul roșu'],
  ['suportul · chatul', 'cald separat de rece', 'restul · bacșișul', 'pista pentru biciclete'],
  ['numărul comenzii', 'alcool → act, 18+', '48,50 lei', 'telefonul în suport · 112']], { size: 16 }));
add(exercise('9.14', 'Everything together', 'Circle the correct word.'));
add(ex2([['1.  Pun mâncarea în ( geanta termoizolantă  /  lacăt ).', '2.  Noaptea, în spate: lumina ( roșie  /  albă ).'], ['3.  50 − 48,50 = ( 1,50  /  2,50 ) lei', '4.  Alcool: clientul trebuie să aibă ( 16  /  18 ) ani.'], ['5.  ( Sunați-mă  /  Sună-mă ) când ajungeți!', '6.  Citesc telefonul ( în mers  /  oprit pe margine ).']]));
add(hw(36, ['**H36.1**  Write five messages you get every day at work and what they mean.', '**H36.2**  Write what you do if it starts to snow in the middle of a delivery.']));

const Q = [
  ['În aplicație, „Acceptă” înseamnă:', ['decline', 'accept', 'deliver', 'cancel'], 'b'],
  ['„Ridicare” este locul unde:', ['iei comanda', 'lași comanda', 'plătești', 'încarci bateria'], 'a'],
  ['Cu ce oprești bicicleta?', ['cu soneria', 'cu frâna', 'cu lacătul', 'cu șaua'], 'b'],
  ['Pluralul lui „comandă” este:', ['comanduri', 'comandi', 'comenzi', 'comande'], 'c'],
  ['Mâncarea caldă o transporți în:', ['rucsacul personal', 'geanta termoizolantă', 'coșul de gunoi', 'mână'], 'b'],
  ['„S-a descărcat bateria” înseamnă:', ['the battery is flat', 'the battery is new', 'I charged the battery', 'the battery is full'], 'a'],
  ['12 km cu 24 km/h durează:', ['12 minute', '24 de minute', '30 de minute', 'o oră'], 'c'],
  ['„15%” se citește:', ['cincisprezece la sută', 'cincisprezece procente la mie', 'cincizeci la sută', 'unu cinci'], 'a'],
  ['„interfon 17” înseamnă:', ['etajul 17', 'suni la interfon la apartamentul 17', 'blocul 17', 'codul ușii e 17'], 'b'],
  ['Clientul dă 50 de lei pentru o comandă de 48,50 lei. Restul este:', ['0,50 lei', '1,50 lei', '2,50 lei', '15 lei'], 'b'],
  ['„Păstrați restul” înseamnă:', ['give me the change', 'keep the change', 'I have no change', 'count the money'], 'b'],
  ['La restaurant spui întâi:', ['numărul comenzii', 'adresa ta', 'parola aplicației', 'numărul de telefon al clientului'], 'a'],
  ['Punga sigilată:', ['o deschizi ca să verifici', 'nu o deschizi', 'o arunci', 'o dai altui curier'], 'b'],
  ['Supa caldă și înghețata le pui:', ['împreună', 'separat', 'supa deasupra', 'în aceeași pungă'], 'b'],
  ['Comanda conține bere. Ce faci?', ['o lași la ușă', 'ceri un act de identitate', 'o bei', 'nu spui nimic'], 'b'],
  ['Băuturile alcoolice nu se vând persoanelor sub:', ['14 ani', '16 ani', '18 ani', '21 de ani'], 'c'],
  ['Clientul nu răspunde. Scrii la suport:', ['Clientul nu răspunde. Aștept de 10 minute.', 'Pleacă!', 'Nu știu.', 'Comanda e bună.'], 'a'],
  ['Noaptea, bicicleta are în spate lumină:', ['albă', 'roșie', 'verde', 'albastră'], 'b'],
  ['Viteza maximă a trotinetei electrice este:', ['15 km/h', '25 km/h', '45 km/h', '50 km/h'], 'b'],
  ['Cu trotineta electrică poți circula de la vârsta de:', ['10 ani', '14 ani', '18 ani', '21 de ani'], 'b'],
  ['Pentru moped ai nevoie de:', ['nimic', 'permis de conducere (AM, A1 sau B1)', 'numai de o cască', 'numai de aplicație'], 'b'],
  ['Telefonul pe drum:', ['în mână, în mers', 'în suport; citești oprit pe margine', 'în buzunar, cu căști în ambele urechi', 'pe ghidon, scriind în mers'], 'b'],
  ['„Lăsați la ușă, vă rog” înseamnă:', ['Come in, please.', 'Leave it at the door, please.', 'Open the door, please.', 'Call me, please.'], 'b'],
  ['Ai căzut cu bicicleta și ești rănit grav. Suni la:', ['112', 'restaurant', 'client', 'nimeni'], 'a'],
  ['„Dă-i bice!” înseamnă:', ['Hit him!', 'Hurry up!', 'Stop!', 'Be careful!'], 'b'],
];
Cm.detachable(add, dom, Q, [
  '**9.1**   Restaurant EXEMPLU, Str. Mare nr. 5 · Str. Florilor nr. 12, bl. B3, sc. 2, ap. 17 · 3,2 km · numerar (48,50 lei)',
  '**9.2**   frâna · farul · bateria · lacătul      **9.3**   geanta termoizolantă · casca · vesta · suport',
  '**9.4**   30 · 20:35 · cincisprezece la sută · opt sute de metri',
  '**9.5**   e.g. Bună seara, sunt curierul, sunt la bloc. · Nu merge interfonul. · Nu găsesc scara. Puteți coborî? · Întârzii cinci minute.',
  '**9.6**   8 lei · 2,50 lei · 1,60 lei · 9 lei      **9.7**   3 · 1 · 4 · 2 (spun numărul → verific → pun în geantă → apăs „Am ridicat comanda”)',
  '**9.8**   G · C · G · G      **9.9**   e.g. Comanda dumneavoastră, poftă bună! · Vă rog, un act de identitate. Comanda conține alcool. · Sunt la ușă, vă aștept. · Înțeleg. Vă rog să scrieți la suport.',
  '**9.10**   e.g. Comanda 5093: restaurantul e închis. · Comanda 5093: adresa e greșită. · Comanda 5093: clientul nu răspunde. · Comanda 5093: s-a descărcat bateria, nu pot livra.',
  '**9.11**   Pistă pentru biciclete · Interzis bicicletelor · STOP · Pentru pietoni      **9.12**   Leave it at the door · Call me when you arrive · Send a photo · Come up to the 3rd floor',
  '**9.13**   e.g. Merg încet, cu luminile aprinse, cu vesta. · Fac o pauză. · Rog clientul să țină câinele. · Opresc, sun la 112 dacă e nevoie, scriu la suport.',
  '**9.14**   geanta termoizolantă · roșie · 1,50 · 18 · Sunați-mă · oprit pe margine',
], [
  ['Trotineta electrică: vârsta minimă 14 ani, viteza max. 25 km/h, pista pentru biciclete / drumuri cu limita max. 50 km/h, casca obligatorie sub 16 ani, lumini și dispozitive reflectorizante', 'OUG nr. 195/2002 (republicată, cu modificările ulterioare); Poliția Română — politiaromana.ro; MAI', 'Lesson 9.11, test q. 19–20'],
  ['Bicicleta: lumină albă sau galbenă în față, roșie în spate, catadioptri, frâne, sonerie; vesta reflectorizantă noaptea', 'OUG nr. 195/2002; Poliția Română — politiaromana.ro (ghidul bicicliștilor)', 'Lessons 9.2, 9.11, test q. 18'],
  ['Mopedul: 25–45 km/h, max. 50 cm³ / 4 kW; permis AM, A1 sau B1; vârsta 16 ani; înmatriculare, RCA, ITP', 'OUG nr. 195/2002; Poliția Română — politiaromana.ro', 'Lesson 9.11, test q. 21'],
  ['Interzicerea vânzării băuturilor alcoolice și energizante către minori', 'Legea nr. 61/1991 (republicată, cu modificările ulterioare)', 'Lesson 9.9, test q. 15–16'],
  ['Igiena transportului alimentelor (protejate de contaminare, la temperatura potrivită)', 'Regulamentul (CE) nr. 852/2004, anexa II — eur-lex.europa.eu', 'Lesson 9.8'],
], ['Aplicația și comanda, vehiculul, echipamentul', 'Timp, distanță, baterie, adresa și clientul, banii', 'La restaurant, mâncarea în geantă, la ușa clientului, probleme și suport, pe drum', 'Comenzi și mesaje, SSM, expresii, recapitulare + TEST CUMULATIV']);
Packer.toBuffer(Cm.makeDoc(dom, S)).then(b => { fs.writeFileSync(process.argv[2] || 'm9_livrare.docx', b); console.log('written'); });
