const fs = require('fs');
const L = require('./lib');
const { d, C, FULL, P, spacer, pageBreak, H1, H2, tbl, box, banner, objectives, exercise, useful, fig, mcq, cell, brd } = L;
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Header } = d;
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

// ================= COVER =================
add(new Paragraph({ spacing: { before: 0, after: 1400, line: 264 }, children: [] }));
const cov = (t, o, after) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after, line: 264 }, children: [new TextRun({ text: t, ...o })] });
add(cov('LIMBA ROMÂNĂ PENTRU STRĂINI', { bold: true, color: C.dk, size: 40 }, 100),
  cov('Romanian Language for Foreign Workers', { italics: true, color: '555555', size: 24 }, 600),
  cov('SUPORT DE CURS', { bold: true, size: 28 }, 300),
  cov('MODULE 13  —  EVERYDAY SERVICES AND HEALTH', { bold: true, color: C.gr, size: 30 }, 100),
  cov('MODULUL 13  —  SERVICII DE ZI CU ZI ȘI SĂNĂTATE', { bold: true, color: C.dk, size: 28 }, 100),
  cov('Nivelul A2 / Level A2', { italics: true, color: C.gr, size: 22 }, 600));
add(tbl([2800, 4038, 2800], [['LEVEL / NIVEL', 'DURATION / DURATĂ', 'LANGUAGE OF TEACHING'], ['A2 — after Module 12', '6 hours · Sessions 48–49 · Weeks 24–25', 'English → Romanian']]));
add(box('note', 'LEGAL BASIS / TEMEI LEGAL', [
  'Curs de limbă română cu elemente de integrare culturală și socială, organizat în conformitate cu O.U.G. nr. 32/2026, art. 7 alin. (1) lit. g) — minimum 6 luni, cel puțin 6 ore pe săptămână.',
  '*Romanian language course with cultural and social integration elements, organised under Government Emergency Ordinance no. 32/2026, art. 7(1)(g) — at least 6 months, at least 6 hours per week.*',
  '*This module ends with ONE cumulative multiple-choice test (20 questions), signed and dated by the student and kept on file as proof of completion.*']));
add(pageBreak());
add(H1('Before you start'),
  P('Module 13 is about the **services you use every week**: ordering online, receiving a parcel, calling a taxi from an app and moving around Bucharest by metro and bus. Then you go **one step further in health**: after Module 8 (the body, symptoms, the pharmacy, the family doctor), you now make an **appointment**, go to a **specialist** with a **referral**, do **tests** and get a **compensated prescription**. No new grammar. App and company names are not given — only generic words.'));
add(tbl([3300, 2100, 4238], [['YOU NEED', 'WHERE', 'WHY'],
  ['**transport in town, tickets, validating**', 'Lesson 5.3', 'now: passes, metro lines'],
  ['**the body, symptoms, pharmacy, doctor**', 'Lessons 8.4–8.6', 'not repeated'],
  ['**health insurance, family doctor, health card**', 'Lesson 8.7', 'referral, prescription'],
  ['**bank card, PIN, scams**', 'Lessons 10.6, 11.10', 'paying online'],
  ['**the polite conditional · the imperfect**', 'Lessons 10.2, 12.5', 'on the phone · your medical history']], { size: 19 }));
add(tbl([1700, 1300, 6638], [['SESSION', 'DURATION', 'CONTENT'],
  ['**Session 48**', '3 hours', 'Lesson 13.1 Ordering online · 13.2 The courier · 13.3 Taxi by app and public transport in Bucharest'],
  ['**Session 49**', '3 hours', 'Lesson 13.4 Appointment, referral, tests · 13.5 The compensated prescription · 13.6 Your medical history · 13.7 Recap · **Module 13 test**']], { size: 19 }));
add(pageBreak());

// ================= S48 =================
add(banner('SESSION 48  —  SERVICES AND APPS', 'SESIUNEA 48 — SERVICII ȘI APLICAȚII  ·  3 hours'));
add(objectives(['order a product online and understand the order e-mail', 'follow a parcel, talk to the courier on the phone, pay cash on delivery', 'order a taxi from an app safely', 'buy a pass and use the Bucharest metro']));
add(H1('Lesson 13.1  —  Ordering online / Comenzile online'));
add(fig('comanda', 600, 'Fig. 13.1 — Pașii unei comenzi online / The steps of an online order'));
add(tbl([2450, 2369, 2450, 2369], [['ON THE WEBSITE', 'ENGLISH', 'ON THE WEBSITE', 'ENGLISH'],
  ['**Adaugă în coș**', 'Add to cart', '**Finalizează comanda**', 'Checkout'],
  ['**Coșul meu · Vezi coșul**', 'My cart · View cart', '**Adresa de livrare**', 'Delivery address'],
  ['**Cont nou · Autentificare**', 'New account · Log in', '**Metoda de plată**', 'Payment method'],
  ['**Plata cu cardul online**', 'Pay by card online', '**Plata la livrare (ramburs)**', 'Cash on delivery'],
  ['**Cod de reducere**', 'Discount code', '**Stoc epuizat**', 'Out of stock'],
  ['**Comanda a fost plasată**', 'Order placed', '**Retur**', 'Return']], { size: 17 }));
add(box('attn', 'ATTENTION — YOUR RIGHTS AND YOUR MONEY', [
  'For most things you buy online you can **change your mind within 14 days** without giving a reason, and the seller must return your money within 14 days (O.U.G. 34/2014, ANPC). Some products are exceptions — read the shop\'s rules. **Pay only on secure sites**; never send card codes by message (Lesson 11.10). Keep the **order confirmation** e-mail.']));
add(exercise('13.1', 'Put the order in the right order', 'Write 1–5.'));
add(ex2([['___  Aleg plata: card sau ramburs.', '___  Adaug produsul în coș.'], ['___  Primesc un e-mail de confirmare.', '___  Scriu adresa de livrare.'], ['___  Curierul aduce coletul.', '']]));
add(useful([['comanda', 'the order'], ['coșul', 'the cart'], ['produsul · cantitatea', 'product · quantity'], ['transportul gratuit', 'free delivery'], ['returul', 'return'], ['factura', 'the invoice']]));

add(H1('Lesson 13.2  —  The courier / Curierul'));
add(fig('awb', 440, 'Fig. 13.2 — Eticheta coletului cu AWB. EXEMPLU inventat / The parcel label with the AWB. Invented SAMPLE'));
add(tbl([2600, 7038], [['WORD', 'WHAT IT MEANS'],
  ['**coletul**', 'the parcel'],
  ['**AWB-ul**', 'the parcel\'s **tracking number**; with it you see on the courier\'s website or in the SMS **where your parcel is**'],
  ['**lockerul · easybox-ul**', 'an automatic parcel **locker**; you get a **code** by SMS or in the app and open your box yourself'],
  ['**rambursul**', 'you **pay the courier** when you receive the parcel — cash or card'],
  ['**destinatarul · expeditorul**', 'the person who receives · the person who sends'],
  ['**avizul · nu am fost acasă**', 'the courier leaves a notice or calls again; you can change the day or the address']], { size: 17 }));
add(tbl([4819, 4819], [['ON THE PHONE WITH THE COURIER', 'ENGLISH'],
  ['— Bună ziua, sunt curierul. **Am un colet pentru dumneavoastră.** Sunteți acasă?', 'Hello, I\'m the courier. I have a parcel for you. Are you at home?'],
  ['— **Nu, sunt la serviciu.** **Ați putea să-l lăsați la vecina** de la apartamentul 12?', 'No, I\'m at work. Could you leave it with my neighbour in flat 12?'],
  ['— Nu pot, e **ramburs**: 149,90 lei. **Vă sun mâine?**', 'I can\'t, it\'s cash on delivery. Shall I call you tomorrow?'],
  ['— Da, **după ora cinci**, vă rog. **Pot plăti cu cardul?** — Da.', 'Yes, after five, please. Can I pay by card? — Yes.']], { size: 17 }));
add(P('*A message says your parcel is „blocked” and you must pay a small fee on a link? It is probably a **scam** — check the AWB only on the courier\'s official website or app (Lesson 11.10).*', { size: 17 }));
add(exercise('13.2', 'Read the label', 'Look at Fig. 13.2 and answer.'));
add(ex2([['1.  Cine primește coletul? → ______________', '2.  Cât plătește la primire? → ______________'], ['3.  Ce este AWB-ul? → ______________', '4.  Cât cântărește coletul? → ______________']]));
add(useful([['a livra · livrarea', 'to deliver · delivery'], ['a urmări coletul', 'to track the parcel'], ['a ridica coletul', 'to pick up the parcel'], ['codul de deschidere', 'opening code'], ['a reprograma', 'to reschedule'], ['plata la livrare', 'cash on delivery']]));

add(H1('Lesson 13.3  —  Taxi by app and public transport / Taxi prin aplicație și transportul în comun'));
add(tbl([4819, 4819], [['TAXI BY APP', 'ENGLISH'],
  ['**Comand o mașină din aplicație.** Scriu **adresa de plecare** și **destinația**.', 'I order a car in the app. I type the pick-up address and the destination.'],
  ['**Verific numărul mașinii și numele șoferului** înainte să urc.', 'I check the number plate and the driver\'s name before I get in.'],
  ['**Mă duceți la Gara de Nord, vă rog?** · **Opriți aici, vă rog.**', 'Will you take me to Gara de Nord, please? · Stop here, please.'],
  ['**Prețul e în aplicație.** · **Plătesc cu cardul din aplicație.**', 'The price is in the app. · I pay by card in the app.']], { size: 17 }));
add(P('In Bucharest (Lesson 5.3) you can pay the **bus, tram** and **metro** directly with a **contactless bank card** (plastic, phone or watch) at the validator or at the metro gate. For every day it is cheaper to buy an **abonament** (pass) on a transport **card** at the ticket office or online. The metro runs about **5:00–23:00**; a new line to the airport (**M6**) is being built.', { size: 19 }));
add(fig('metrou', 640, 'Fig. 13.3 — Liniile de metrou din București, schemă simplificată / The Bucharest metro lines, simplified'));
add(tbl([4819, 4819], [['IN THE METRO', 'ENGLISH'],
  ['**Ce linie merge la Pipera?** — **M2**, direcția Pipera.', 'Which line goes to Pipera? — M2, towards Pipera.'],
  ['**Unde schimb spre M4?** — **La Gara de Nord** sau **la Basarab**.', 'Where do I change for M4? — At Gara de Nord or Basarab.'],
  ['**Aș vrea un abonament lunar pentru metrou.**', 'I\'d like a monthly metro pass.'],
  ['**Următoarea stație: Piața Unirii.** · **Coborâți la...?**', 'Next station: Piața Unirii. · Are you getting off at...?']], { size: 17 }));
add(exercise('13.3', 'Plan the trip', 'Look at Fig. 13.3. Write the line(s) and where you change.'));
add(ex2([['1.  Piața Victoriei → Tudor Arghezi: ______________', '2.  Eroilor → Drumul Taberei: ______________'], ['3.  Pipera → Gara de Nord: ______________', '4.  Piața Unirii → Străulești: ______________']]));
add(useful([['abonamentul lunar', 'monthly pass'], ['a valida · validatorul', 'to validate · reader'], ['direcția', 'towards (direction)'], ['a schimba linia', 'to change lines'], ['șoferul · cursa', 'driver · ride'], ['numărul de înmatriculare', 'number plate']]));
add(mistakes([
  ['ce-ai', 'ce + ai — *what have you / what did you*', '**Ce-ai** comandat? · **Ce-ai** plătit?', 'you can say **ce ai**'],
  ['ceai', 'tea', 'Beau un **ceai** cald.', 'it is a drink'],
  ['iau', 'I take (a lua)', '**Iau** metroul. · **Iau** coletul din locker.', 'you can say **eu iau**'],
  ['i-au', 'îi + au — *they (have) ... him / her*', 'Curierii **i-au** adus coletul.', 'you can say **i-a** for one']]));
add(hw(48, ['**H48.1**  Find a product in an online shop. Write in Romanian: the price, the delivery cost, the payment methods, the return rule.', '**H48.2**  Write your way to work by metro or bus: the line, the direction, where you change.']));

// ================= S49 =================
add(spacer(160));
add(banner('SESSION 49  —  HEALTH A2, RECAP AND TEST', 'SESIUNEA 49 — SĂNĂTATEA A2, RECAPITULARE ȘI TEST  ·  3 hours'));
add(objectives(['make an appointment by phone or online', 'go to a specialist and to the laboratory with a referral', 'use a compensated prescription at the pharmacy', 'explain your medical history']));
add(H1('Lesson 13.4  —  Appointment, referral, tests / Programarea, trimiterea, analizele'));
add(fig('sanatate', 600, 'Fig. 13.4 — Drumul pacientului în sistemul de asigurări / The patient\'s path in the insurance system'));
add(tbl([2600, 7038], [['WORD', 'WHAT IT MEANS (CNAS)'],
  ['**biletul de trimitere**', 'the **referral**: your family doctor (Lesson 8.7) sends you to a **specialist** or to the **laboratory**; with it, the visit or the tests are paid by the health insurance'],
  ['**— pentru analize**', 'valid **30 days**; for **chronic diseases**, up to **90 days**'],
  ['**programarea**', 'the appointment: by **phone**, **online** on the clinic\'s website, or at the **reception**'],
  ['**analizele**', 'blood or urine **tests** at a laboratory **in contract with the health insurance house (CAS)**; ask if you must come **pe nemâncate** (without eating)'],
  ['**rezultatele**', 'the results: on paper, by e-mail or online; you take them to your doctor']], { size: 17 }));
add(tbl([4819, 4819], [['ON THE PHONE — AN APPOINTMENT', 'ENGLISH'],
  ['— Clinica, bună ziua! — **Aș dori o programare la cardiologie.** Am **bilet de trimitere**.', 'Clinic, hello! — I\'d like an appointment with a cardiologist. I have a referral.'],
  ['— **Sunteți asigurat?** — Da, **prin angajator**.', 'Are you insured? — Yes, through my employer.'],
  ['— **Primul loc liber** e pe 14 octombrie, la 9:30. **Vă convine?**', 'The first free slot is on 14 October at 9:30. Is it OK for you?'],
  ['— Da. **Ce trebuie să aduc?** — Biletul, **actul de identitate** și **cardul de sănătate**.', 'Yes. What must I bring? — The referral, your ID and your health card.']], { size: 17 }));
add(exercise('13.4', 'Complete', 'Write: trimitere · programare · analize · pe nemâncate · rezultatele.'));
add(ex2([['1.  Medicul de familie îmi dă bilet de ______________.', '2.  Sun la clinică pentru o ______________.'], ['3.  Mâine fac ______________ de sânge.', '4.  Vin ______________, fără micul dejun.'], ['5.  Duc ______________ la medic.', '']]));
add(useful([['medicul specialist', 'specialist'], ['clinica · policlinica', 'clinic · outpatient clinic'], ['recepția', 'reception'], ['primul loc liber', 'first free slot'], ['a anula programarea', 'to cancel'], ['recoltarea sângelui', 'taking a blood sample']]));

add(H1('Lesson 13.5  —  The compensated prescription / Rețeta compensată'));
add(P('A **compensated** medicine is partly or fully **paid by the health insurance**. The doctor writes an **electronic prescription** (*rețetă electronică*); at the pharmacy you show your **health card** — you do not need to print the prescription. Only pharmacies **in contract with CAS** give compensated medicines.', { size: 19 }));
add(tbl([2400, 2400, 4838], [['LIST / SUBLISTA', 'THE INSURANCE PAYS', 'WHAT IT MEANS FOR YOU'],
  ['**A**', '**90%** of the reference price', 'you pay a small part'],
  ['**B**', '**50%**', 'you pay about half'],
  ['**C** (sections C1, C3)', '**100%**', 'free — for some serious or chronic diseases'],
  ['**D**', '**20%**', 'you pay most of the price']], { size: 17 }));
add(tbl([2600, 7038], [['HOW LONG IS IT VALID?', ''],
  ['**chronic diseases**', 'at most **30 days** from the date of the prescription'],
  ['**acute diseases**', 'at most **48 hours** — go to the pharmacy **the same day**']], { size: 17 }));
add(tbl([4819, 4819], [['AT THE PHARMACY', 'ENGLISH'],
  ['**Am o rețetă compensată.** Poftiți cardul de sănătate.', 'I have a compensated prescription. Here is my health card.'],
  ['**Cât plătesc eu?** · **Există un medicament generic mai ieftin?**', 'How much do I pay? · Is there a cheaper generic medicine?'],
  ['**Nu aveți pe stoc?** · **Când îl primiți?**', 'Don\'t you have it in stock? · When will you get it?']], { size: 17 }));
add(exercise('13.5', 'How much does the insurance pay?', 'Write the percentage.'));
add(ex2([['1.  Sublista A → ______ %', '2.  Sublista B → ______ %'], ['3.  Sublista D → ______ %', '4.  Sublista C1 → ______ %']]));
add(useful([['compensat · gratuit', 'compensated · free'], ['rețeta electronică', 'e-prescription'], ['medicamentul generic', 'generic medicine'], ['prețul de referință', 'reference price'], ['boala cronică · acută', 'chronic · acute disease'], ['pe stoc', 'in stock']]));

add(H1('Lesson 13.6  —  Your medical history / Istoricul medical'));
add(P('A new doctor always asks about your **past**. Use the **past** (*am avut o operație*, Lesson 3.14) for events and the **imperfect** (*când eram copil, aveam astm*, Lesson 12.5) for long situations. Bring **your documents from home** — ideally translated.', { size: 19 }));
add(tbl([4819, 4819], [['THE DOCTOR ASKS · YOU ANSWER', 'ENGLISH'],
  ['**Aveți boli cronice?** — Da, **am diabet** de cinci ani. / **Am tensiune mare.**', 'Do you have chronic diseases? — Yes, I\'ve had diabetes for five years. / I have high blood pressure.'],
  ['**Luați vreun tratament?** — **Iau** un medicament **dimineața**; am adus cutia.', 'Are you taking any treatment? — I take a medicine in the morning; I brought the box.'],
  ['**Ați avut operații?** — **Am fost operat de apendicită** în 2019.', 'Have you had operations? — I had my appendix removed in 2019.'],
  ['**Sunteți alergic la ceva?** — La **penicilină**. (Lesson 8.6)', 'Are you allergic to anything? — To penicillin.'],
  ['**Aveți vaccinurile făcute?** · **Boli în familie?** — Tatăl meu **avea** probleme cu inima.', 'Are your vaccinations up to date? · Illnesses in the family? — My father had heart problems.'],
  ['**Am adus scrisoarea medicală și analizele** din țara mea.', 'I brought my medical letter and test results from my country.']], { size: 17 }));
add(exercise('13.6', 'Your history', 'Answer about yourself (or invent).'));
add(ex2([['1.  Aveți boli cronice? → ______________', '2.  Luați vreun tratament? → ______________'], ['3.  Ați avut operații? → ______________', '4.  Sunteți alergic la ceva? → ______________']]));
add(useful([['istoricul medical', 'medical history'], ['boala cronică', 'chronic disease'], ['tratamentul', 'treatment'], ['operația · a fi operat', 'operation · to be operated on'], ['scrisoarea medicală', 'medical letter'], ['antecedentele în familie', 'family history']]));
add(mistakes([
  ['mai', 'more · still · again', '**Mai** am o programare. · Nu **mai** am rețete.', 'you can say **încă**'],
  ['m-ai', 'mă + ai — *you (have) ... me*', '**M-ai** sunat la clinică? · **M-ai** înțeles?', 'you can say **m-a** for one person'],
  ['cel', 'the (masc.) before *mai*, an adjective or a number', '**cel** mai bun medic · **cel** de-al doilea', 'no verb after it'],
  ['ce-l', 'ce + îl — *what ... him*', '**Ce-l** doare? · **Ce-l** supără?', 'you can say **ce îl**']]));

add(H1('Lesson 13.7  —  Recap / Recapitulare'));
add(tbl([3600, 3800, 2238], [['TOPIC', 'EXAMPLE', 'LESSON'],
  ['coș · adresă · card / ramburs · confirmare · 14 zile', 'Adaug produsul în coș.', '13.1'],
  ['colet · AWB · locker · ramburs · destinatar', 'Ați putea să-l lăsați la vecina?', '13.2'],
  ['taxi din aplicație · contactless · abonament · M1–M5', 'Unde schimb spre M4?', '13.3'],
  ['trimitere · programare · analize 30 / 90 de zile', 'Aș dori o programare la cardiologie.', '13.4'],
  ['rețetă compensată: A 90 · B 50 · C 100 · D 20 · 30 zile / 48 ore', 'Cât plătesc eu?', '13.5'],
  ['boli cronice · tratament · operații · alergii', 'Am fost operat în 2019.', '13.6']], { size: 17 }));
add(exercise('13.7', 'Everything together', 'Circle the correct form.'));
add(ex2([['1.  ( Ce-ai  /  Ceai ) comandat?', '2.  ( Iau  /  I-au ) metroul la 7.'], ['3.  Nu ( mai  /  m-ai ) am bilet de trimitere.', '4.  ( Cel  /  Ce-l ) doare pe Ravi?'], ['5.  Curierii ( iau  /  i-au ) adus coletul.', '6.  E ( cel  /  ce-l ) mai bun medic.']]));
add(hw(49, ['**H49.1**  Write your medical history in Romanian in six sentences: chronic diseases, treatment, operations, allergies, family.', '**H49.2**  Write the dialogue for an appointment at a specialist, with *Aș dori... / Ce trebuie să aduc?*']));

// drop the trailing spacer so it cannot spill onto an empty page
if (!(S[S.length - 1] instanceof Table)) S.pop();
// ================= DETACHABLE =================
add(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { before: 0, after: 100, line: 264 }, children: [new TextRun({ text: 'SECȚIUNE DETAȘABILĂ  —  EXEMPLAR FORMATOR', bold: true, color: C.dk, size: 28 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200, line: 264 }, children: [new TextRun({ text: 'Detachable section — teacher\'s copy. Se detașează din suportul cursantului; testul completat, semnat și datat, se păstrează la dosarul cursantului. Conține: testul cumulativ, fișa de confirmare a Sesiunii 49, fișa de evidență a Modulului 13, cheia răspunsurilor, sursele.', italics: true, size: 18 })] }));
add(banner('TEST CUMULATIV — MODULUL 13', 'MODULE 13 — CUMULATIVE TEST  ·  grilă, 20 de întrebări, 20 de puncte  ·  semnat și datat de cursant'));
add(tbl([4200, 5438], [['Nume și prenume cursant / Student name', ''], ['Data / Date', '_____ / _____ / 20_____'], ['Semnătura cursantului / Student signature', '']], { header: false }));
add(P('**Marcați cu X un singur răspuns la fiecare întrebare.**  *Mark ONE answer with X for each question. Each correct answer = 1 point.*'));
const Q = [
  ['„Adaugă în coș” înseamnă:', ['Pay now', 'Add to cart', 'Log in', 'Return'], 'b'],
  ['„Plata ramburs” înseamnă:', ['plătești online înainte', 'plătești curierului la primire', 'nu plătești', 'plătești la bancă'], 'b'],
  ['Pentru multe produse cumpărate online te poți răzgândi în:', ['3 zile', '7 zile', '14 zile', '1 an'], 'c'],
  ['AWB-ul este:', ['prețul', 'numărul de urmărire a coletului', 'adresa curierului', 'o reducere'], 'b'],
  ['Primești un SMS: „Coletul e blocat, plătește 2 lei pe acest link.” Ce faci?', ['plătești repede', 'verifici AWB-ul doar pe site-ul oficial al curierului', 'trimiți datele cardului', 'răspunzi cu PIN-ul'], 'b'],
  ['Curierul sună, dar ești la serviciu. Spui:', ['Nu mă interesează!', 'Ați putea să-l lăsați la vecina?', 'Pa!', 'Sunați la 112.'], 'b'],
  ['Înainte să urci într-un taxi comandat din aplicație:', ['verifici numărul mașinii și numele șoferului', 'plătești cash dinainte', 'dai telefonul șoferului', 'nu verifici nimic'], 'a'],
  ['În București poți plăti metroul și autobuzul:', ['numai cu bani cash', 'cu cardul bancar contactless', 'numai cu cecuri', 'nu se plătește'], 'b'],
  ['Magistrala M2 merge:', ['Pipera – Tudor Arghezi', 'Gara de Nord – Străulești', 'Preciziei – Anghel Saligny', 'Dristor 2 – Pantelimon'], 'a'],
  ['Metroul circulă aproximativ:', ['0:00–24:00', '5:00–23:00', '8:00–16:00', 'numai ziua, în weekend'], 'b'],
  ['Biletul de trimitere îl primești de la:', ['farmacist', 'medicul de familie', 'curier', 'bancă'], 'b'],
  ['Biletul de trimitere pentru analize este valabil, de regulă:', ['48 de ore', '30 de zile', '1 an', 'nelimitat'], 'b'],
  ['„Pe nemâncate” înseamnă:', ['după masă', 'fără să mănânci înainte', 'cu apă multă', 'seara'], 'b'],
  ['„Primul loc liber” înseamnă:', ['the first free slot', 'the free parking', 'the first floor', 'free medicine'], 'a'],
  ['Pentru sublista A, asigurarea plătește:', ['20%', '50%', '90%', '100%'], 'c'],
  ['Medicamentele compensate le iei:', ['din orice magazin', 'din farmaciile în contract cu CAS', 'de la curier', 'de la clinică'], 'b'],
  ['Rețeta pentru o boală acută este valabilă cel mult:', ['48 de ore', '30 de zile', '90 de zile', '6 luni'], 'a'],
  ['„Am fost operat de apendicită” vorbește despre:', ['alergii', 'o operație', 'un vaccin', 'o rețetă'], 'b'],
  ['Completează: „Când eram copil, ___ astm.”', ['am', 'aveam', 'voi avea', 'avem'], 'b'],
  ['Care propoziție este scrisă corect?', ['Ceai comandat?', 'Ce-ai comandat?', 'Ce ai-comandat?', 'Ce-a-i comandat?'], 'b'],
];
Q.forEach((q, i) => add(mcq(i + 1, q[0], q[1])));
add(spacer(40));
add(tbl([4200, 5438], [['**PUNCTAJ OBȚINUT / SCORE**', '_______ / 20'], ['**Semnătura formatorului / Teacher signature**', '']], { header: false }));
add(spacer(80));
add(banner('SESSION COMPLETION RECORD', 'FIȘĂ DE CONFIRMARE A PARCURGERII SESIUNII — se păstrează la dosar'));
add(tbl([4200, 5438], [['Module / Modul', 'Modulul 13 — Servicii de zi cu zi și sănătate (finalizat)'],
  ['Session / Sesiunea', 'Sesiunea 49 — Sănătatea A2, recapitulare. TEST CUMULATIV MODULUL 13'], ['Duration / Durata', '3 ore'], ['Date / Data', '_____ / _____ / 20_____'],
  ['Student name / Nume și prenume cursant', ''], ['Score / Punctaj obținut', '_______ / 20'], ['Student signature / Semnătura cursantului', ''], ['Teacher signature / Semnătura formatorului', '']], { header: false }));
add(box('note', 'DECLARAȚIE CURSANT / STUDENT DECLARATION', ['Declar că am participat la această sesiune de curs și am parcurs conținutul prezentat mai sus.', '*I declare that I attended this course session and covered the content presented above.*']));
add(spacer(120));
add(banner('MODULE 13 — COMPLETION RECORD', 'FIȘĂ DE EVIDENȚĂ A PARCURGERII MODULULUI 13 — se păstrează la dosarul cursantului'));
add(tbl([4200, 5438], [['Cursant / Student', ''], ['Act de identitate / ID document', ''], ['Angajator / Employer', ''], ['Formator / Teacher', ''], ['Modul / Module', 'Modulul 13 — Servicii de zi cu zi și sănătate (6 ore, Sesiunile 48–49)']], { header: false }));
add(tbl([700, 4338, 1400, 1400, 1800], [['NR.', 'SESIUNE / CONȚINUT', 'DATA', 'PUNCTAJ TEST', 'SEMNĂTURA CURSANTULUI'],
  ['48', 'Sesiunea 48 — Comenzi online, curierul, taxi, transportul în comun (3 ore)', '', '—', ''],
  ['49', 'Sesiunea 49 — Programare, trimitere, analize, rețeta compensată, istoricul medical, recapitulare + TEST CUMULATIV (3 ore)', '', '___ / 20', '']], { size: 18 }));
add(box('note', 'CONFIRMARE FINALIZARE MODUL / MODULE COMPLETION', [
  'Confirm că cursantul a parcurs integral conținutul Modulului 13 — Servicii de zi cu zi și sănătate, în total 6 ore de curs, și a susținut testul de evaluare consemnat mai sus.',
  '*I confirm that the student completed the full content of Module 13 — Everyday Services and Health, 6 course hours in total, and sat the assessment recorded above.*',
  'Data: _____ / _____ / 20_____          Semnătura formatorului: ______________________']));
add(spacer(120));
add(banner('ANSWER KEY  —  TEACHER COPY', 'CHEIA RĂSPUNSURILOR — pentru formator'));
const key = t => P(t, { size: 18, after: 30 });
add(key('**13.1**   row by row: 3 · 1 · 4 · 2 · 5'),
  key('**13.2**   Kumar Ravi · 149,90 lei · numărul de urmărire a coletului · 2,3 kg'),
  key('**13.3**   M2 (direct) · M5 (direct) · M2 până la Piața Victoriei, apoi M1 până la Gara de Nord · M1 până la Gara de Nord (sau Basarab), apoi M4'),
  key('**13.4**   trimitere · programare · analize · pe nemâncate · rezultatele      **13.5**   90 · 50 · 20 · 100'),
  key('**13.6**   free answers      **13.7**   Ce-ai · Iau · mai · Ce-l · i-au · cel'),
  H2('Cumulative test — grilă answer key'), P('**TOTAL: 20 de puncte.** Un răspuns corect = 1 punct. Nemarcat sau dublu marcat = 0 puncte.', { size: 18 }));
const ans = Q.map(q => q[2]);
add(tbl(Array(10).fill(963).map((w, i) => i === 9 ? 971 : w), [ans.slice(0, 10).map((a, i) => `**${i + 1}** – ${a}`), ans.slice(10).map((a, i) => `**${i + 11}** – ${a}`)], { header: false, size: 18 }));
add(H2('Surse și data verificării / Sources and date of verification'));
add(P('Informațiile factuale și legale din acest modul au fost verificate la **24.09.2026** pe surse oficiale. *The factual and legal information was checked on 24 September 2026 against official sources.*', { size: 18 }));
add(tbl([3000, 4000, 2638], [['INFORMAȚIA / INFORMATION', 'SURSA / SOURCE', 'UNDE ÎN MODUL / WHERE'],
  ['Dreptul de retragere în 14 zile la contractele la distanță; rambursarea în 14 zile', 'O.U.G. nr. 34/2014 — legislatie.just.ro/Public/DetaliiDocument/158913; ANPC (anpc.ro)', 'Lesson 13.1, test q. 3'],
  ['Plata contactless cu cardul bancar în vehiculele STB și la porțile de metrou; carduri și abonamente', 'STB — „Modalități de plată” (stbsa.ro); Metrorex — Pagina călătorului (metrorex.ro); TPBI — abonamente integrate (tpbi.ro)', 'Lesson 13.3, test q. 8'],
  ['Magistralele M1–M5 și capetele de linie; program aprox. 5:00–23:00; M6 în construcție', 'Metrorex — program de circulație, harta rețelei, POIM (metrorex.ro)', 'Lesson 13.3, test q. 9–10'],
  ['Valabilitatea biletului de trimitere pentru analize: 30 de zile; 90 de zile pentru boli cronice', 'CNAS — Ordinul nr. 2168/502/2023; informări ale caselor de asigurări (cnas.ro)', 'Lesson 13.4, test q. 12'],
  ['Compensare: sublista A 90%, B 50%, C1 și C3 100%, D 20% din prețul de referință', 'H.G. nr. 720/2008 și modificările ulterioare (legislatie.just.ro)', 'Lesson 13.5, test q. 15'],
  ['Rețeta electronică: cronic max. 30 de zile, acut max. 48 de ore; farmacii în contract cu CAS; fără imprimarea rețetei', 'CNAS — informări privind prescrierea și eliberarea medicamentelor compensate (cnas.ro, 2025)', 'Lesson 13.5, test q. 16–17'],
  ['Lecțiile anterioare citate', 'Modulele 3–12: 3.14, 5.3, 8.4–8.7, 10.2, 10.6, 11.10, 12.5', 'whole module']], { size: 15 }));
add(P('*Culorile liniilor de metrou și poziția stațiilor sunt schematice. Eticheta AWB și sumele sunt inventate. Nu sunt date nume de aplicații sau firme; „easybox” este folosit ca nume comun pentru lockerul de colete. / Metro colours and positions are schematic; the label is invented.*', { size: 15, color: '555555' }));

const doc = new Document({
  creator: 'Suport de curs', title: 'Modulul 13 — Servicii de zi cu zi și sănătate',
  styles: { default: { document: { run: { font: 'Arial', size: 20 } } }, paragraphStyles: [
    { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.dk, font: 'Arial' }, paragraph: { outlineLevel: 0 } },
    { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.gr, font: 'Arial' }, paragraph: { outlineLevel: 1 } }] },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 708, footer: 708 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'LIMBA ROMÂNĂ PENTRU STRĂINI  ·  MODULUL 13 — SERVICII DE ZI CU ZI ȘI SĂNĂTATE', color: '777777', size: 16 })] })] }) },
    children: S }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(process.argv[2] || 'm13.docx', b); console.log('written'); });
