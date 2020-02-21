---
title: "Day 1 of⚡️ #30DaysOfWebPerf ⚡️: Lighthouse"
description: Lighthouse is an amazing tool that helps you identify specific speed problems on your website.
date: 2019-11-01
tags:
  - ssg
  - static
  - jamstack
  - shop
---

<h2>1. Optimering af billedestørrelse og opløsning</h2>
<h3>1. Optimering af billedestørrelse og opløsning</h3>
<h4>1. Optimering af billedestørrelse og opløsning</h4>
<h5>1. Optimering af billedestørrelse og opløsning</h5>
<h6>1. Optimering af billedestørrelse og opløsning</h6>
<p>Nok den største og mest oversete faktor når det kommer til hastighedsoptimering. En klassisk fejl er at tage et billede på sin smartphone og lægge det direkte op på hjemmesiden. Sådan et billede fylder måske et par megabyte og har en opløsning der er langt højere end selv de største skærme på markedet.</p>
<p>En hjemmeside kan typiske have følgende fordeling af data:</p>
<ol>
<li>HTML dokument: 50kb</li>
<li>CSS: 100kb</li>
<li>JS: 200kb</li>
<li>Billeder: 500kb-10MB</li>
</ol>
<p>Ligger der 10MB billeder på siden er html+css+js delen på 350kb derfor uvæsentlig og kan vi få halveret datastørrelsen på billeder er vi nede på 5MB hvilket stadig er en del men dog en forbedring.</p>
<blockquote>

<p><span>Manglende cache er den næststørste faktor når det kommer til hastighed</span><span style="color: #5e5e5e;">&nbsp;</span></p>
</blockquote>
<p>Det vi gør er derfor følgende:<span>&nbsp;</span></p>
<ol>
<li>Reducering af opløsning – typisk er max 1200px i bredden fint for billede galleri på desktop og f.eks. 400x px i bredden fint for mobil</li>
<li>Reducering af fil størrelsen. Benyt jpg da dette format fylder mindst og er mest udbredt og her kan vi komme ned på 100-400kb per billede og langt mindre for thumbnails.</li>
</ol>
<p><span>Hvordan dette gøres bedst afhænger af dit system og opsætning. På wordpress f.eks. kan man installere&nbsp;</span><a href="https://premium.wpmudev.org/project/wp-smush-pro/">smush pro</a><span>&nbsp;og ønsker du at gøre det manuelt kan du prøve&nbsp;</span><a href="https://kraken.io/">kraken</a><span>&nbsp;hvor du nemt kan uploade dine billeder og får en zip fil tilbage med de komprimerede.</span></p>

<h2>2. Aktivering af cache på statiske filer</h2>
<p>Manglende cache er den næststørste faktor når det kommer til hastighed. Cache af html betyder at den ikke skal genereres ved hvert request men istedet kan der serveres en cached version. Når serveren generere en ny version skal koden eksekveres, databasen kaldes for data og html bygges. Dette går som sådan hurtigt nok men tager det alligevel 500ms så er det lang tid iforhold til en cached version som tager 50ms. Altså en faktor 10x besparelse. Derudover sparer man serveren for en hel masse resourser hviklet får det hele til at kører lidt hurtigere.<span style="color: #5e5e5e;">&nbsp;</span></p>

<h2>3. CDN til resourse filer</h2>
<p>Dette trick er mest velegnet til sider med meget trafik eller til sider som er meget tunge i forhold til statiske filer. CDN står for Content Delivery Network som er eksterne servere placeret over hele verden som hjælper med at levere dine billede filer frem til slutbrugeren. Disse filer kopieres over på deres netværk så de vil reelt kun blive hentet fra din server een gang og herefter kun fra CDN netværket.</p>
<p>Dette sparer rigtig meget båndbredde på serveren og den kan bruge sine resource på andre ting istedet. Derudover kan et CDN netværk være med til at leverere filer fra servere der er tættere på brugeren. Dvs. at en bruger fra Tyskland vil få billedet fra en tysk server og ikke fra f.eks. en amerikansk server.</p>

<h2>4. Optimering af databasen</h2>
<p>Frontend på hjemmesiden er optimeret men uanset hvor heftig cache der er på og hvor lidt det hele fylder så duer det ikke hvis serveren skal bruge adskillige sekunder på at leverer et HTML dokument til slutbrugeren. Nulstilles cachen så vil serveren blive bragt i knæ fordi den skal genopbygge det hele, det vil gøre setup skrøbeligt. Koden og databasen skal derfor fungere optimalt sammen.</p>
<p>Da omkodening er ret omkostningstung, risikofyldt og som regel slet ikke nødvendigt, så kigger vi på databasen istedet. I relationsdatabaser som MySQL har vi noget der hedder index. Det svarer kort fortalt, til et index i en telefonbog med angivelse af A, B, C osv. Ofte så mangler disse i en database da det er et område mange udviklere slet ikke har fokus på. Et tjek af databasen og angivelser af disse index kan få et meget langsom side til at køre hurtigt igen.</p>

<h2>Afslutning</h2>
<p>Listen er ikke udtømmende, langt fra, men det er de punkter vi altid selv starte med at tjekke når vi hastighedsoptimere hjemmesider uanset om det er wordpress, prestashop, drupal og andre. Principper fungere nemlig på alle typer af hjemmesider.</p>