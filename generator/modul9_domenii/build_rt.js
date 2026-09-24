const fs = require('fs');
const L = require('./lib');
const Cm = require('./common9');
const { P, spacer, pageBreak, H1, H2, tbl, box, banner, objectives, exercise, useful, fig } = L;
const { Packer } = L.d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const hw = (n, items) => box('green', `HOMEWORK — AFTER SESSION ${n} / TEMĂ PENTRU ACASĂ`, items);
const ex2 = rows => tbl([4819, 4819], rows, { header: false });
const dom = { ro: 'Comerț (retail)', en: 'Retail' };

Cm.cover(add, dom);
add(H1('Before you start'),
  P('You have finished **Level A1**. In Module 8 you were the customer in a supermarket. Now you are **on the other side**: you receive the goods, fill the shelves, put the price labels, work at the checkout and help the customers. You will read labels and expiry dates, count money and give change, and know your duties for **health and safety at work** (SSM).'),
  P('You need these lessons first — look back at them if you are not sure:'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**numbers, money, prices**', 'Lessons 2.5, 6.3', '57,40 lei · 30% reducere'],
  ['**colours, shapes, materials**', 'Lessons 4.4, 4.5', 'describing products'],
  ['**orders and requests**', 'Lesson 3.13', 'Puneți marfa! Poftiți bonul!'],
  ['**places in a room** — pe, sub, lângă', 'Lesson 6.5', 'pe raftul de sus, lângă casă'],
  ['**at the clothes shop**', 'Lesson 6.3', 'mărimi, cabina de probă, schimb'],
  ['**supermarket, market, quantities**', 'Lessons 8.2, 8.3', 'raioanele, bonul, promoțiile'],
  ['**polite forms** — dumneavoastră', 'Lessons 2.6, 5.3', 'talking to customers']]));
add(H2('Where this module sits in the course'));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 33**', '3 hours', 'Lesson 9.1 In the shop · 9.2 Departments and products · 9.3 Uniform and equipment'],
  ['**Session 34**', '3 hours', 'Lesson 9.4 Money and prices · 9.5 Labels and dates · 9.6 Simple calculations'],
  ['**Session 35**', '3 hours', 'Lesson 9.7 Receiving and restocking · 9.8 Prices and offers · 9.9 The checkout · 9.10 Helping customers · 9.11 Stock checks'],
  ['**Session 36**', '3 hours', 'Lesson 9.12 Orders at work · 9.13 Safety at work · 9.14 Expressions and recap · **Module 9 cumulative test**']], { size: 19 }));
Cm.recapNoGrammar(add, 'One shop says **navetă**, another **lădiță**; one says **casier**, another **operator de casă**.');
add(pageBreak());

// S33
add(banner('SESSION 33  —  THE SHOP, DEPARTMENTS, EQUIPMENT', 'SESIUNEA 33 — MAGAZINUL, RAIOANELE, ECHIPAMENTUL  ·  3 hours'));
add(objectives(['name 16 things in a shop', 'name the departments and the product categories', 'name your uniform and equipment']));
add(H1('Lesson 9.1  —  In the shop / În magazin'));
add(fig('rt_magazin', 620, 'Fig. 9.1 — În magazin / In the shop'));
add(P('People: **casierul / casiera** (cashier) · **lucrătorul comercial** (shop assistant, shelf filler) · **gestionarul** (stock keeper) · **șeful de raion** (department manager) · **șeful de magazin / directorul** · **agentul de pază** (security guard).', { size: 19 }));
add(exercise('9.1', 'Which one?', 'Write the word.'));
add(ex2([['1.  Citesc prețul cu ______________.', '2.  Clientul plătește cu cardul la ______________.'], ['3.  Pun etichetele cu ______________.', '4.  Deschid cutiile cu ______________.'], ['5.  Laptele stă în ______________.', '6.  Clientul primește ______________ fiscal.']]));
add(useful([['Deschid casa 3.', 'I\'m opening till 3.'], ['Nu merge scannerul.', 'The scanner doesn\'t work.'], ['Am nevoie de un coleg la casă.', 'I need a colleague at the till.'], ['S-a terminat hârtia la casă.', 'The till roll has run out.'], ['depozitul', 'the stockroom'], ['intrarea marfă', 'goods entrance']]));

add(H1('Lesson 9.2  —  Departments and products / Raioanele și produsele'));
add(tbl([2450, 2369, 2450, 2369], [['DEPARTMENT', 'ENGLISH', 'DEPARTMENT', 'ENGLISH'],
  ['**fructe și legume**', 'fruit and vegetables', '**lactate · brânzeturi**', 'dairy · cheese'],
  ['**carne · mezeluri**', 'meat · cold cuts', '**panificație · patiserie**', 'bakery · pastries'],
  ['**băuturi · alcool**', 'drinks · alcohol', '**dulciuri · snacks**', 'sweets · snacks'],
  ['**conserve · paste · orez**', 'tins · pasta · rice', '**congelate**', 'frozen food'],
  ['**cosmetice · igienă**', 'cosmetics · hygiene', '**detergenți · curățenie**', 'detergents · cleaning'],
  ['**electrocasnice**', 'household appliances', '**îmbrăcăminte · încălțăminte**', 'clothes · shoes (Lesson 6.3)']], { size: 18 }));
add(box('recap', 'RECAP — THE SUPERMARKET  (Lesson 8.3)', ['**raionul de lactate · coșul · căruciorul · casa · bonul fiscal · punga · reducerea · 1 + 1 gratis**. Now you use the same words as a worker.']));
add(exercise('9.2', 'Which department?', 'Write the department.'));
add(ex2([['1.  iaurt → ______________', '2.  șampon → ______________'], ['3.  pâine → ______________', '4.  înghețată → ______________'], ['5.  bere → ______________', '6.  detergent de vase → ______________']]));
add(useful([['Unde găsesc...?', 'Where can I find...?'], ['la raionul de...', 'in the ... department'], ['pe raftul de sus / de jos', 'on the top / bottom shelf'], ['la capătul culoarului', 'at the end of the aisle']]));

add(H1('Lesson 9.3  —  Uniform and equipment / Uniforma și echipamentul'));
add(fig('rt_echipament', 440, 'Fig. 9.2 — Uniforma lucrătorului din comerț / A shop worker\'s uniform'));
add(P('In the stockroom and at the cold room your employer gives you **protective equipment free of charge** (HG 1048/2006): gloves, safety shoes, a warm jacket for the **camera frigorifică**. You must wear it (Law 319/2006). More in Lesson 9.13.', { size: 19 }));
add(exercise('9.3', 'What do you wear?', 'Complete.'));
add(ex2([['1.  Pe piept port ______________ cu numele meu.', '2.  În camera frigorifică port o geacă și ______________.'], ['3.  La descărcat port ______________ de protecție.', '4.  Port tricoul cu ______________ magazinului.']]));
add(useful([['ecusonul', 'the name badge'], ['vestiarul · dulapul', 'changing room · locker'], ['tura de dimineață / de seară', 'morning / evening shift'], ['pauza', 'the break']]));
add(hw(33, ['**H33.1**  Write ten things you use at work, with un / o and the plural.', '**H33.2**  Write the departments of your shop and three products from each.']));

// S34
add(spacer(160));
add(banner('SESSION 34  —  MONEY, LABELS, DATES, CALCULATIONS', 'SESIUNEA 34 — BANI, ETICHETE, DATE, CALCULE  ·  3 hours'));
add(objectives(['recognise the Romanian banknotes and coins and say prices', 'read a price label and an expiry date', 'give change and calculate a discount']));
add(H1('Lesson 9.4  —  Money and prices / Banii și prețurile'));
add(fig('rt_bani', 600, 'Fig. 9.3 — Bancnote și monede (desen schematic) / Banknotes and coins (schematic)'));
add(box('recap', 'RECAP — SAYING A PRICE  (Lessons 2.5 and 6.3)', ['**57,40 lei** = cincizeci și șapte de lei și patruzeci de bani · **9,99 lei** = nouă lei și nouăzeci și nouă de bani · **1 leu = 100 de bani**. From 20 you add **de**: douăzeci **de** lei.']));
add(tbl([4819, 4819], [['AT THE TILL', 'ENGLISH'],
  ['Face 57,40 lei.', 'That\'s 57.40 lei.'],
  ['Aveți mărunt? · Aveți 40 de bani?', 'Do you have change? · Do you have 40 bani?'],
  ['Poftiți restul: 2,60 lei.', 'Here\'s your change: 2.60 lei.'],
  ['Nu am rest la 200 de lei. Aveți o bancnotă mai mică?', 'I have no change for 200 lei. Do you have a smaller note?']], { size: 19 }));
add(exercise('9.4', 'Say the price', 'Write the price in words.'));
add(ex2([['1.  12,50 lei → ______________________', '2.  99 de bani → ______________________'], ['3.  150 lei → ______________________', '4.  3,05 lei → ______________________']]));
add(useful([['bancnota · moneda', 'banknote · coin'], ['mărunțiș', 'small change'], ['restul', 'the change'], ['bonul fiscal', 'the receipt']]));

add(H1('Lesson 9.5  —  Labels and dates / Etichetele și datele'));
add(fig('rt_eticheta', 600, 'Fig. 9.4 — Eticheta de preț (exemplu) / A price label (example)'));
add(fig('rt_date', 580, 'Fig. 9.5 — Două feluri de dată / Two kinds of date'));
add(box('attn', 'ATTENTION — THE TWO DATES', [
  '**A se consuma înainte de** (use by) is on foods that spoil quickly: fresh meat, fish, some dairy. After this date the food is **no longer considered safe** — it must not be sold. **A se consuma de preferință înainte de** (best before) is about **quality** (Regulation (EU) 1169/2011). Your shop has its own rules for products close to the date — ask your manager.']));
add(exercise('9.5', 'Read the label', 'Look at Fig. 9.4.'));
add(ex2([['1.  Ce produs este? — ______________', '2.  Cât costă? — ______________'], ['3.  Ce cantitate are? — ______________', '4.  Ce reducere are? — ______________']]));
add(useful([['data expirării', 'the expiry date'], ['expiră mâine', 'it expires tomorrow'], ['a expirat', 'it has expired'], ['a retrage de la vânzare', 'to take off sale']]));

add(H1('Lesson 9.6  —  Simple calculations / Calcule simple'));
add(tbl([3000, 3319, 3319], [['QUESTION', 'CALCULATION', 'ANSWER'],
  ['Clientul plătește 57,40 lei cu o bancnotă de 100.', '100 − 57,40 = 42,60', '**restul: 42,60 lei**'],
  ['Prețul: 20 de lei. Reducere 25%.', '20 × 25 : 100 = 5 · 20 − 5 = 15', '**prețul nou: 15 lei**'],
  ['1 + 1 gratis: clientul ia 4 bucăți de 6 lei.', 'plătește 2 × 6', '**12 lei**'],
  ['Pe raft sunt 18 bucăți. Au venit 3 baxuri de 12.', '3 × 12 = 36 · 36 + 18 = 54', '**54 de bucăți**']], { size: 18 }));
add(exercise('9.6', 'Calculate', 'Write the answer.'));
add(ex2([['1.  50 − 37,50 = ______ lei rest', '2.  40 lei − 10% = ______ lei'], ['3.  2 baxuri de 6 + 5 bucăți = ______', '4.  1 + 1 gratis, 6 bucăți de 3 lei = ______ lei']]));
add(useful([['baxul', 'a multipack, case (of bottles)'], ['bucata', 'the piece'], ['la sută (%)', 'per cent'], ['a număra', 'to count']]));
add(hw(34, ['**H34.1**  Find three real price labels in a shop. Write the product, the price and the unit price.', '**H34.2**  Find two products at home and write their dates. Which kind of date is it?']));

// S35
add(spacer(160));
add(banner('SESSION 35  —  THE WORK STEP BY STEP', 'SESIUNEA 35 — LUCRUL PAS CU PAS  ·  3 hours'));
add(objectives(['receive goods and fill the shelves with FIFO', 'change prices and put up offers', 'work at the checkout', 'help a customer find a product', 'check the stock and the dates']));
add(H1('Lesson 9.7  —  Receiving and restocking / Recepția și aprovizionarea raftului'));
add(tbl([700, 3800, 5138], [['NR.', 'THE STEP', 'ENGLISH'],
  ['1', '**recepția**: numeri, verifici, semnezi (avizul, factura)', 'receiving: count, check, sign'],
  ['2', 'marfa în **depozit**, la locul ei', 'goods to the stockroom, in their place'],
  ['3', '**aprovizionarea** raftului: scoți marfa din cutii', 'restocking: take the goods out of the boxes'],
  ['4', '**rotația**: vechiul în față, noul în spate (FIFO)', 'rotation: old in front, new behind'],
  ['5', '**fața raftului**: produsele aliniate, cu eticheta în față', 'facing: products lined up, label to the front'],
  ['6', '**cartoanele** la reciclare', 'cardboard to recycling']], { size: 18 }));
add(fig('rt_fifo', 600, 'Fig. 9.6 — Rotația mărfii pe raft / Stock rotation on the shelf'));
add(exercise('9.7', 'Where do you put them?', 'Write ÎN FAȚĂ or ÎN SPATE.'));
add(ex2([['1.  Lapte, data 15.10 (vechi) → ______________', '2.  Lapte, data 22.10 (nou) → ______________']]));
add(useful([['a aproviziona', 'to restock'], ['a alinia', 'to line up'], ['raftul e gol', 'the shelf is empty'], ['s-a terminat stocul', 'out of stock']]));

add(H1('Lesson 9.8  —  Prices and offers / Prețuri și promoții'));
add(P('When a price changes, you change **all** the labels of that product. The price on the shelf must be the same as at the till. Offers: **reducere −30%**, **1 + 1 gratis**, **al doilea la jumătate de preț**, **preț special cu cardul de fidelitate**.', { size: 19 }));
add(tbl([4819, 4819], [['AT WORK', 'ENGLISH'],
  ['Schimbă etichetele la ulei, de mâine e în promoție.', 'Change the labels for oil, it\'s on offer from tomorrow.'],
  ['Eticheta spune 9,99, dar la casă iese 11,49.', 'The label says 9.99, but at the till it comes to 11.49.'],
  ['Scoate etichetele vechi de promoție.', 'Remove the old offer labels.']], { size: 19 }));
add(exercise('9.8', 'Correct or not?', 'Write DA or NU.'));
add(ex2([['1.  Prețul de pe raft e diferit de cel de la casă. ___', '2.  Scot etichetele de promoție când se termină. ___']]));
add(useful([['prețul vechi · prețul nou', 'old price · new price'], ['oferta · promoția', 'the offer'], ['a schimba etichetele', 'to change the labels'], ['cardul de fidelitate', 'loyalty card']]));

add(H1('Lesson 9.9  —  The checkout / La casă'));
add(fig('rt_casa', 620, 'Fig. 9.7 — Pașii la casă / At the checkout step by step'));
add(tbl([4819, 4819], [['DIALOGUE AT THE TILL', 'ENGLISH'],
  ['Bună ziua! Aveți card de fidelitate?', 'Hello! Do you have a loyalty card?'],
  ['Doriți o pungă?', 'Would you like a bag?'],
  ['Face 57,40 lei. Cash sau cu cardul?', 'That\'s 57.40 lei. Cash or card?'],
  ['Introduceți PIN-ul, vă rog. · Plata a fost refuzată.', 'Enter your PIN, please. · The payment was declined.'],
  ['Poftiți bonul și restul. O zi bună!', 'Here\'s your receipt and change. Have a nice day!']], { size: 19 }));
add(box('attn', 'ATTENTION — ALCOHOL AND TOBACCO', [
  'Alcohol and tobacco products may **not** be sold to people **under 18**. If you are not sure, ask politely: **Aveți un act de identitate, vă rog?** (Law 61/1991; Law 349/2002). No ID — no sale.']));
add(exercise('9.9', 'What do you say?', 'Write one sentence.'));
add(ex2([['1.  The customer arrives: ______________________', '2.  You say the total: ______________________'], ['3.  A young customer buys beer: ______________________', '4.  You give the change: ______________________']]));
add(useful([['PIN-ul', 'the PIN'], ['plata a fost refuzată', 'the payment was declined'], ['anularea unui produs', 'cancelling an item'], ['Chem șeful de tură.', 'I\'ll call the shift manager.']]));

add(H1('Lesson 9.10  —  Helping customers / Ajutorul pentru clienți'));
add(tbl([4819, 4819], [['WITH A CUSTOMER', 'ENGLISH'],
  ['Pot să vă ajut? · Căutați ceva anume?', 'Can I help you? · Are you looking for something?'],
  ['Orezul e pe culoarul 5, pe raftul de jos, lângă paste.', 'The rice is in aisle 5, on the bottom shelf, next to the pasta.'],
  ['Nu mai avem. Vine marfă mâine.', 'We have run out. New stock comes tomorrow.'],
  ['Pentru schimb sau retur mergeți la informații, cu bonul.', 'For an exchange or return go to the information desk, with the receipt.'],
  ['Nu știu sigur. Întreb un coleg.', 'I\'m not sure. I\'ll ask a colleague.']], { size: 19 }));
add(P('*Whether a product can be exchanged or returned in the shop depends on the shop\'s rules (Lesson 6.3). You do not decide — send the customer to the information desk or to the manager.*', { size: 17, color: '555555' }));
add(exercise('9.10', 'Show the way', 'Answer the customer. Use: pe raftul de sus / de jos, lângă, la capătul culoarului.'));
add(ex2([['1.  Unde e zahărul? — ______________________', '2.  Unde sunt bateriile? — ______________________']]));
add(useful([['Poftiți pe aici.', 'This way, please.'], ['Vă arăt.', 'I\'ll show you.'], ['informațiile · relații clienți', 'information / customer service'], ['o reclamație', 'a complaint']]));

add(H1('Lesson 9.11  —  Stock checks / Verificarea stocului'));
add(tbl([4819, 4819], [['THE CHECK', 'WHAT YOU DO'],
  ['**datele de expirare**', 'every day, as your shop decides; expired → off the shelf, to the manager'],
  ['**produsele deteriorate**', 'broken, open, dented → you separate them and record them'],
  ['**inventarul**', 'counting all the products — you write the number exactly, you do not guess'],
  ['**raftul gol**', 'you check the stockroom; if there is none, you tell the manager']], { size: 18 }));
add(exercise('9.11', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  Un iaurt a expirat ieri. → ______________________', '2.  O sticlă e spartă. → ______________________']]));
add(useful([['inventarul', 'stocktaking'], ['deteriorat · spart · deschis', 'damaged · broken · open'], ['a separa', 'to set apart'], ['a înregistra', 'to record']]));
add(hw(35, ['**H35.1**  Write the steps of your main task in order with *întâi, apoi, după aceea, la sfârșit*.', '**H35.2**  Write a short dialogue at the till (six lines).']));

// S36
add(spacer(160));
add(banner('SESSION 36  —  ORDERS, SAFETY, EXPRESSIONS, RECAP AND TEST', 'SESIUNEA 36 — COMENZI, SSM, EXPRESII, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['understand the orders of your manager', 'know the risks of your job and your safety duties', 'know what to do with a difficult customer or a theft', 'recognise the expressions you hear at work and in the street']));
add(H1('Lesson 9.12  —  Orders at work / Comenzi la lucru'));
add(box('recap', 'RECAP — ORDERS  (Lesson 3.13)', ['The manager says **tu**: **Pune! Verifică!** To a group or politely: **Puneți! Verificați!** — and to customers always **dumneavoastră**: *Poftiți! Introduceți PIN-ul!*']));
add(tbl([2200, 2300, 5138], [['DIRECT (tu)', 'TO A GROUP / POLITE', 'ENGLISH — EXAMPLE'],
  ['**Pune!**', '**Puneți!**', 'Put! — *Pune laptele în vitrină!*'],
  ['**Verifică!**', '**Verificați!**', 'Check! — *Verifică datele la lactate!*'],
  ['**Etichetează!**', '**Etichetați!**', 'Label! — *Etichetează conservele!*'],
  ['**Deschide casa!**', '**Deschideți casa!**', 'Open the till! — *Deschide casa 3!*'],
  ['**Adu!**', '**Aduceți!**', 'Bring! — *Adu un bax de apă din depozit!*'],
  ['**Curăță! · Strânge!**', '**Curățați! · Strângeți!**', 'Clean! · Tidy up! — *Strânge cartoanele!*']], { size: 18 }));
add(exercise('9.12', 'Say the order', 'Write the direct order (tu).'));
add(ex2([['1.  (a pune) ______________ apa pe raft!', '2.  (a verifica) ______________ prețurile!'], ['3.  (a deschide) ______________ casa 2!', '4.  (a aduce) ______________ pâine din depozit!']]));
add(useful([['Am înțeles.', 'Understood.'], ['Am terminat raionul.', 'I\'ve finished the department.'], ['Ce fac acum?', 'What do I do now?'], ['Imediat.', 'Right away.']]));

add(H1('Lesson 9.13  —  Safety at work / Securitatea și sănătatea în muncă'));
Cm.ssmCore(add);
add(tbl([2600, 7038], [['THE RISK', 'WHAT YOU DO'],
  ['**greutăți** — heavy loads', 'lift with your legs, not your back; use the pallet truck; ask for help (HG 1051/2006)'],
  ['**scara** — the ladder', 'a proper ladder, never a box or a shelf; someone holds it if needed'],
  ['**cutterul** — the knife', 'cut away from your body; close the blade'],
  ['**camera frigorifică** — cold room', 'warm jacket and gloves; the door can be opened from inside'],
  ['**podeaua udă** — wet floor', 'the sign **Atenție, pardoseală udă**; wipe it at once'],
  ['**clientul agresiv, furtul**', 'stay calm, do not fight or run after anyone; call the guard or the manager; 112 if there is violence']], { size: 18 }));
add(box('attn', 'ATTENTION — AN ACCIDENT', ['Stop the work, make the place safe, call **112** if someone is badly hurt — also a customer (Lesson 5.2). Tell your manager **at once**, also about a small accident of your own (Law 319/2006, art. 23).']));
add(fig('semne2', 300, 'Fig. 9.8 — Prim ajutor, ieșire de urgență, stingător / First aid, emergency exit, extinguisher'));
add(exercise('9.13', 'What do you do?', 'Write one sentence.'));
add(ex2([['1.  Raftul de sus e prea înalt. → ______________________', '2.  Un client fură o sticlă. → ______________________']]));
add(useful([['agentul de pază', 'security guard'], ['M-am lovit.', 'I hurt myself.'], ['Chemați paza!', 'Call security!'], ['E periculos.', 'It\'s dangerous.']]));

add(H1('Lesson 9.14  —  Expressions and recap / Expresii și recapitulare'));
Cm.expressions(add, 'IN THE SHOP', [
  ['**Dă-i bice!**', 'grăbește-te, e coadă', 'Hurry up! (there\'s a queue)'],
  ['**E coadă.**', 'sunt mulți clienți care așteaptă', 'There\'s a queue.']],
  'a heavy box on the top shelf, a wet floor without the sign, a box used as a ladder');
add(H2('Module 9 in one table'));
add(tbl([2410, 2410, 2410, 2408], [['THE SHOP', 'PRODUCTS', 'NUMBERS & MONEY', 'SAFETY & RULES'],
  ['raft · casă · scanner', 'lactate · mezeluri · băuturi', 'lei · bani · restul', 'mănuși · încălțăminte'],
  ['cântar · coș · cărucior', 'eticheta · data expirării', '−25% · 1 + 1 gratis', 'scara, nu cutia'],
  ['navetă · transpalet · cutter', 'FIFO: vechiul în față', 'bax · bucată', 'alcool, tutun: 18+'],
  ['POS · bonul fiscal', 'inventarul', 'prețul pe kg / l', 'furt: paza, nu fugi']], { size: 16 }));
add(exercise('9.14', 'Everything together', 'Circle the correct word.'));
add(ex2([['1.  Clientul plătește la ( casă  /  raft ).', '2.  Produsul vechi îl pun în ( față  /  spate ).'], ['3.  20 lei − 25% = ( 15  /  5 ) lei', '4.  ( Pune  /  Puneți ) apa pe raft! (to one person)'], ['5.  Tinerilor sub 18 ani nu le vindem ( alcool  /  apă ).', '6.  Urc pe ( scară  /  o cutie ).']]));
add(hw(36, ['**H36.1**  Write five orders you hear every day at work and what they mean.', '**H36.2**  Write what you say to a customer who cannot find a product.']));

const Q = [
  ['Cu ce citești codul de bare la casă?', ['cu scannerul', 'cu cutterul', 'cu naveta', 'cu coșul'], 'a'],
  ['Clientul plătește cu cardul la:', ['cântar', 'terminalul POS', 'raft', 'depozit'], 'b'],
  ['Iaurtul este la raionul de:', ['băuturi', 'lactate', 'detergenți', 'panificație'], 'b'],
  ['Șamponul este la raionul de:', ['cosmetice și igienă', 'carne', 'congelate', 'fructe'], 'a'],
  ['Cine dă gratuit echipamentul de protecție?', ['clientul', 'lucrătorul', 'angajatorul', 'agentul de pază'], 'c'],
  ['„57,40 lei” se citește:', ['cincizeci și șapte de lei și patruzeci de bani', 'cinci sute șapte lei', 'cincizeci și șapte de bani', 'patruzeci de lei'], 'a'],
  ['1 leu = ___ bani', ['10', '100', '1 000', '50'], 'b'],
  ['Clientul dă 100 de lei pentru 57,40. Restul este:', ['42,60 lei', '47,60 lei', '43,40 lei', '57,40 lei'], 'a'],
  ['20 de lei cu reducere 25% =', ['5 lei', '15 lei', '25 de lei', '18 lei'], 'b'],
  ['„1 + 1 gratis”: clientul ia 2 bucăți și plătește:', ['2', '1', '0', '3'], 'b'],
  ['„A se consuma înainte de” (use by) — după această dată produsul:', ['se vinde mai ieftin oricum', 'nu se mai vinde', 'e mai bun', 'se pune în față'], 'b'],
  ['Prețul pe unitate (kg / l) te ajută să:', ['compari prețurile', 'citești data', 'plătești cu cardul', 'găsești raionul'], 'a'],
  ['FIFO pe raft înseamnă:', ['noul în față', 'vechiul în față, noul în spate', 'toate la întâmplare', 'numai produse noi'], 'b'],
  ['Prețul de pe raft și prețul de la casă trebuie să fie:', ['diferite', 'la fel', 'mai mari la casă', 'fără importanță'], 'b'],
  ['Un tânăr vrea să cumpere țigări. Tu spui:', ['Aveți un act de identitate, vă rog?', 'Poftiți!', 'Luați două!', 'Nu am rest.'], 'a'],
  ['Alcoolul și tutunul nu se vând persoanelor sub:', ['16 ani', '18 ani', '21 de ani', '14 ani'], 'b'],
  ['„Plata a fost refuzată” înseamnă:', ['the payment was declined', 'the payment is complete', 'the change is wrong', 'the receipt is lost'], 'a'],
  ['Clientul întreabă unde e orezul. Răspunzi:', ['Nu știu, pa!', 'Pe culoarul 5, pe raftul de jos.', 'La casă.', 'Mâine.'], 'b'],
  ['Clientul vrea să returneze un produs. Îl trimiți:', ['la informații / la șef, cu bonul', 'acasă', 'la raft', 'la depozit'], 'a'],
  ['Un iaurt a expirat. Ce faci?', ['îl lași pe raft', 'îl scoți de pe raft și anunți șeful', 'îl pui în față', 'îl vinzi la reducere'], 'b'],
  ['Pentru raftul de sus folosești:', ['o cutie', 'o scară potrivită', 'raftul de jos', 'căruciorul'], 'b'],
  ['Un client fură. Ce faci?', ['fugi după el', 'te bați cu el', 'chemi paza sau șeful, rămâi calm', 'nu spui nimic'], 'c'],
  ['Ordinul „Verifică datele!” vine de la:', ['a verifica', 'a veni', 'a vinde', 'a vedea'], 'a'],
  ['Podeaua e udă. Ce faci?', ['pui semnul și o ștergi', 'o lași', 'alergi', 'închizi magazinul'], 'a'],
  ['„E coadă” înseamnă:', ['the shelf is empty', 'there\'s a queue', 'it\'s closed', 'it\'s cheap'], 'b'],
];
Cm.detachable(add, dom, Q, [
  '**9.1**   scannerul · terminalul POS · etichetatorul · cutterul · vitrina frigorifică · bonul',
  '**9.2**   lactate · cosmetice / igienă · panificație · congelate · băuturi · detergenți / curățenie',
  '**9.3**   ecusonul · mănuși · încălțăminte · sigla      **9.4**   doisprezece lei și cincizeci de bani · nouăzeci și nouă de bani · o sută cincizeci de lei · trei lei și cinci bani',
  '**9.5**   lapte de vacă 1,5% · 7,49 lei · 1 l · −20%      **9.6**   12,50 · 36 · 17 · 9',
  '**9.7**   ÎN FAȚĂ · ÎN SPATE      **9.8**   NU · DA      **9.9**   e.g. Bună ziua! · Face ... lei. · Aveți un act de identitate, vă rog? · Poftiți restul.',
  '**9.10**   e.g. Pe culoarul ..., pe raftul de sus, lângă ...      **9.11**   Îl scot de pe raft și anunț șeful. · O separ, o înregistrez, curăț.',
  '**9.12**   Pune · Verifică · Deschide · Adu      **9.13**   Folosesc o scară potrivită. · Chem paza / șeful, nu fug după el.',
  '**9.14**   casă · față · 15 · Pune · alcool · scară',
], [
  ['Data limită de consum („a se consuma înainte de”) și data durabilității minimale („a se consuma de preferință înainte de”)', 'Regulamentul (UE) nr. 1169/2011, art. 24 și anexa X — eur-lex.europa.eu', 'Lesson 9.5, test q. 11'],
  ['Interzicerea vânzării băuturilor alcoolice și a produselor din tutun către persoane sub 18 ani; verificarea vârstei', 'Legea nr. 61/1991 (republicată) — legislatie.just.ro/Public/DetaliiDocument/23832; Legea nr. 349/2002 — .../36778; ANPC', 'Lesson 9.9, test q. 15–16'],
  ['Manipularea manuală a maselor', 'HG nr. 1051/2006 — legislatie.just.ro/Public/DetaliiDocument/74429', 'Lesson 9.13'],
  ['Bancnotele și monedele leului (1–500 lei; 1–50 bani)', 'Banca Națională a României — bnr.ro (desene schematice, nu reproduceri)', 'Lesson 9.4'],
], ['Magazinul, raioanele, uniforma și echipamentul', 'Banii și prețurile, etichetele și datele, calcule simple', 'Recepția și aprovizionarea, prețuri și promoții, casa, clienții, verificarea stocului', 'Comenzi, SSM, expresii, recapitulare + TEST CUMULATIV']);
Packer.toBuffer(Cm.makeDoc(dom, S)).then(b => { fs.writeFileSync(process.argv[2] || 'm9_comert.docx', b); console.log('written'); });
