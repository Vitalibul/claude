const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, tbl, box, mcq, cell, brd } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType } = d;
const S = []; const add = (...xs) => xs.forEach(x => Array.isArray(x) ? S.push(...x) : S.push(x));
const mark = n => add(new Paragraph({ children: [new TextRun(`@@SNIP:${n}@@`)] }));
const V3 = [3300, 3000, 3338];
const vocab = (rows) => tbl(V3, [['ROMANIAN (cu un / o)', 'PLURAL', 'ENGLISH'], ...rows.map(r => [`**${r[0]}**`, r[1], `*${r[2]}*`])], { size: 18 });
// grouped vocabulary table: groups = [[title, rows]]
const vocabG = (groups, W = V3, head = ['ROMANIAN (cu un / o)', 'PLURAL', 'ENGLISH'], bold0 = true) => {
  const trs = [new TableRow({ cantSplit: true, children: head.map((h, i) => cell(`**${h}**`, { w: W[i], shade: C.hd, size: 18 })) })];
  groups.forEach(([g, rows]) => {
    if (g) trs.push(new TableRow({ cantSplit: true, children: [cell(`**${g}**`, { w: FULL, span: W.length, shade: C.gr, color: 'FFFFFF', size: 18, borders: brd(C.gr) })] }));
    rows.forEach(r => trs.push(new TableRow({ cantSplit: true, children: r.map((t, i) => cell(i === 0 && bold0 ? `**${t}**` : (i === 2 ? `*${t}*` : t), { w: W[i], size: 18 })) })));
  });
  return [new Table({ width: { size: W.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: W, rows: trs }), L.spacer(80)];
};
const keyTbl = (ans) => { const rows = []; for (let r = 0; r < ans.length; r += 10) { const row = ans.slice(r, r + 10).map((a, i) => `**${r + i + 1}** – ${a}`); while (row.length < 10) row.push(''); rows.push(row); }
  return tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), rows, { header: false, size: 18 }); };

// ---- M8 fruit / vegetables
mark('m8_fruit'); add(vocab([['un măr', 'mere', 'an apple'], ['o pară', 'pere', 'a pear'], ['o banană', 'banane', 'a banana'], ['o portocală', 'portocale', 'an orange'],
  ['o mandarină', 'mandarine', 'a mandarin'], ['o lămâie', 'lămâi', 'a lemon'], ['un strugure', 'struguri', 'a grape · grapes'], ['o căpșună', 'căpșuni', 'a strawberry'],
  ['o cireașă', 'cireșe', 'a cherry'], ['o piersică', 'piersici', 'a peach'], ['o caisă', 'caise', 'an apricot'], ['o prună', 'prune', 'a plum'],
  ['un pepene verde', 'pepeni verzi', 'a watermelon'], ['un pepene galben', 'pepeni galbeni', 'a melon'], ['un kiwi', 'kiwi', 'a kiwi'], ['un ananas', 'ananași', 'a pineapple']]));
mark('m8_veg'); add(vocab([['o roșie', 'roșii', 'a tomato'], ['un castravete', 'castraveți', 'a cucumber'], ['un cartof', 'cartofi', 'a potato'], ['o ceapă', 'cepe', 'an onion'],
  ['un cățel de usturoi', 'căței de usturoi', 'a clove of garlic (usturoi = garlic)'], ['un morcov', 'morcovi', 'a carrot'], ['un ardei', 'ardei', 'a pepper'], ['un ardei iute', 'ardei iuți', 'a chilli'],
  ['o varză', 'verze', 'a cabbage'], ['o vânătă', 'vinete', 'an aubergine'], ['un dovlecel', 'dovlecei', 'a courgette'], ['o salată verde', 'salate verzi', 'a lettuce'],
  ['o conopidă', 'conopide', 'a cauliflower'], ['o ciupercă', 'ciuperci', 'a mushroom'], ['mazăre', '— (no plural)', 'peas'], ['o ridiche', 'ridichi', 'a radish']]));
// ---- M10 coat of arms
mark('m10_stema'); add(vocabG([[null, [
  ['o acvilă cu o cruce în cioc', 'acvile', 'an eagle with a cross in its beak', '1 — Țara Românească'],
  ['un cap de bour', 'capete de bour', 'the head of an aurochs (wild ox)', '2 — Moldova'],
  ['un pod · un leu', 'poduri · lei', 'a bridge · a lion', '3 — Banat și Oltenia'],
  ['o acvilă · o cetate', 'acvile · cetăți (șapte cetăți)', 'an eagle · a fortress (seven fortresses)', '4 — Transilvania'],
  ['un delfin', 'delfini (doi delfini)', 'a dolphin (two dolphins)', '5 — Dobrogea']]]], [2700, 2100, 2800, 2038], ['ROMANIAN (cu un / o)', 'PLURAL', 'ENGLISH', 'CÂMPUL / FIELD']));
// ---- M11 animals
mark('m11_animals'); add(vocabG([
  ['LA ZOO / AT THE ZOO', [['un leu', 'lei', 'a lion'], ['un tigru', 'tigri', 'a tiger'], ['un urs', 'urși', 'a bear'], ['un elefant', 'elefanți', 'an elephant'], ['o girafă', 'girafe', 'a giraffe'],
    ['o zebră', 'zebre', 'a zebra'], ['o maimuță', 'maimuțe', 'a monkey'], ['o gorilă', 'gorile', 'a gorilla'], ['un hipopotam', 'hipopotami', 'a hippo'], ['un crocodil', 'crocodili', 'a crocodile'],
    ['un șarpe', 'șerpi', 'a snake'], ['un pinguin', 'pinguini', 'a penguin'], ['un papagal', 'papagali', 'a parrot']]],
  ['SĂLBATICE DIN ROMÂNIA / WILD ANIMALS IN ROMANIA', [['un urs', 'urși', 'a (brown) bear'], ['un lup', 'lupi', 'a wolf'], ['o vulpe', 'vulpi', 'a fox'], ['un cerb', 'cerbi', 'a red deer'],
    ['o căprioară', 'căprioare', 'a roe deer'], ['un mistreț', 'mistreți', 'a wild boar'], ['un iepure', 'iepuri', 'a hare'], ['o veveriță', 'veverițe', 'a squirrel']]],
  ['DE COMPANIE / PETS', [['un câine', 'câini', 'a dog'], ['o pisică', 'pisici', 'a cat'], ['un papagal', 'papagali', 'a parrot'], ['un pește', 'pești', 'a fish'], ['un hamster', 'hamsteri', 'a hamster']]]]));
mark('m11_dialog'); add(tbl([4819, 4819], [['AT THE ZOO / LA GRĂDINA ZOOLOGICĂ', 'ENGLISH'],
  ['— Tată, **unde sunt leii**? — **Lângă tigri**, în stânga.', 'Dad, where are the lions? — Next to the tigers, on the left.'],
  ['— **Pot să dau mâncare** maimuțelor? — **Nu, e interzis!** Scrie pe tăbliță.', 'Can I give the monkeys food? — No, it\'s forbidden! It says so on the sign.'],
  ['— **Uite, un hipopotam** în apă! **E uriaș!**', 'Look, a hippo in the water! It\'s huge!'],
  ['— **La ce oră mănâncă pinguinii?** — **La ora trei.**', 'What time do the penguins eat? — At three o\'clock.'],
  ['— **Mi-e frică de șerpi.** Hai la girafe! — **Bine, hai!**', 'I\'m afraid of snakes. Let\'s go to the giraffes! — OK, let\'s go!']], { size: 17 }));
mark('m11_q21'); add(mcq(21, 'Veverița este:', ['o pasăre de apă', 'un animal de companie', 'un animal sălbatic din România', 'un pește']));
mark('m11_q22'); add(mcq(22, 'Pluralul lui „un urs” este:', ['două urse', 'doi ursuri', 'doi ursei', 'doi urși']));
mark('m11_key'); add(keyTbl(['b','b','b','c','d','b','a','b','b','b','c','b','c','b','b','a','b','b','b','b','c','d']));
// ---- M12 farm animals
mark('m12_farm'); add(vocabG([[null, [
  ['o vacă', 'vaci', 'a cow', 'lapte, carne'], ['un taur', 'tauri', 'a bull', 'carne'], ['un vițel', 'viței', 'a calf', 'carne'], ['un porc', 'porci', 'a pig', 'carne'],
  ['o oaie', 'oi', 'a sheep', 'lapte, lână, carne'], ['un berbec', 'berbeci', 'a ram', 'lână, carne'], ['o capră', 'capre', 'a goat', 'lapte, carne'], ['un cal', 'cai', 'a horse', 'munca la câmp, transport'],
  ['un măgar', 'măgari', 'a donkey', 'munca, transport'], ['o găină', 'găini', 'a hen', 'ouă, carne'], ['un cocoș', 'cocoși', 'a rooster', 'carne'], ['un pui', 'pui', 'a chick · a chicken', 'carne'],
  ['o rață', 'rațe', 'a duck', 'ouă, carne'], ['o gâscă', 'gâște', 'a goose', 'ouă, carne'], ['un curcan', 'curcani', 'a turkey', 'carne'], ['un iepure', 'iepuri', 'a rabbit', 'carne']]]],
  [2600, 2100, 2500, 2438], ['ROMANIAN (cu un / o)', 'PLURAL', 'ENGLISH', 'CE NE DĂ / WHAT IT GIVES US']));
mark('m12_q21'); add(mcq(21, 'Ce ne dă oaia?', ['ouă', 'miere', 'pene', 'lână și lapte']));
mark('m12_q22'); add(mcq(22, 'Pluralul lui „o găină” este:', ['două găine', 'doi găini', 'două găini', 'două găinuri']));
mark('m12_key'); add(keyTbl(['b','b','b','b','b','c','a','b','b','b','b','b','a','a','b','b','a','b','c','b','d','c']));
// ---- M13 metro
mark('m13_metro'); add(tbl([1100, 3700, 4838], [['LINIA', 'CAPETE DE LINIE / TERMINI', 'STAȚII DE LEGĂTURĂ / WHERE YOU CHANGE'],
  ['**M1**', 'Dristor 2 – Pantelimon', 'Piața Victoriei (M2) · Gara de Nord, Basarab (M4) · Eroilor (M3, M5) · Piața Unirii (M2, M3) · Nicolae Grigorescu (M3)'],
  ['**M2**', 'Pipera – Tudor Arghezi', 'Piața Victoriei (M1) · Piața Unirii (M1, M3)'],
  ['**M3**', 'Preciziei – Anghel Saligny', 'Eroilor (M1, M5) · Piața Unirii (M1, M2) · from Eroilor to Nicolae Grigorescu on the same track as M1'],
  ['**M4**', 'Gara de Nord – Străulești', 'Gara de Nord, Basarab (M1)'],
  ['**M5**', 'Eroilor – Râul Doamnei / Valea Ialomiței', 'Eroilor (M1, M3)']], { size: 17 }));
// ---- M1 attention box
mark('m1_attn'); add(box('attn', 'ATTENTION — HOLIDAY NAMES / NUMELE SĂRBĂTORILOR', [
  'Months are written with a **small letter**: *1 decembrie, 24 ianuarie*. But when the date **is the name of a holiday**, it takes a **capital letter**: **1 Decembrie** (Ziua Națională), **24 Ianuarie** (Ziua Unirii), **1 Mai**, **1 Iunie**.',
  '*Pe 1 decembrie nu lucrez.* — a date (on 1 December).   ·   *Anul acesta, de 1 Decembrie, merg la paradă.* — the holiday.']));
mark('END');
const doc = new Document({ styles: { default: { document: { run: { font: 'Arial', size: 20 } } } }, sections: [{ children: S }] });
Packer.toBuffer(doc).then(b => { fs.writeFileSync('snippets.docx', b); console.log('ok'); });
