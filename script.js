// ===== TRANSLATIONS =====
const translations = {
  hu: {
    "nav.home":     "Főoldal",
    "nav.services": "Szolgáltatások",
    "nav.references": "Referenciák",
    "nav.blog": "Blog",
    "nav.contact":  "Kapcsolat",
    "nav.cta":      "Ajánlatkérés",

    "blog.hero.title": "Blog",
    "blog.hero.sub": "Gyakorlati cikkek weboldal készítés, keresőoptimalizálás, SEO, webshop és digitális fejlesztések témában, hogy könnyebb legyen jó döntést hozni online jelenlétedről.",
    "blog.index.tag": "Tudástár",
    "blog.index.title": "Legfrissebb cikkek",
    "blog.index.sub": "Gyakorlati útmutatók weboldal készítés, SEO és digitális fejlesztések témában.",
    "blog.cat.web": "Weboldal készítés",
    "blog.cat.performance": "Teljesítmény",
    "blog.card.pricing.title": "Mennyibe kerül egy weboldal készítés 2026-ban?",
    "blog.card.pricing.desc": "Részletes útmutató arról, mitől függ a weboldal készítés ár, milyen árkategóriákkal számolj, és mire figyelj ajánlatkérés előtt.",
    "blog.card.speed.title": "Miért lassú a weboldalam? 10 gyakori hiba",
    "blog.card.speed.desc": "A 10 leggyakoribb teljesítményhiba, PageSpeed jelzések és gyakorlati megoldások gyorsabb weboldalakhoz.",
    "blog.card.read": "Tovább olvasom →",

    "article.related.title": "Kapcsolódó cikk",
    "article.links.title": "Hasznos linkek",
    "article.meta.updated": "Frissítve: 2026. július",
    "article.meta.reading": "Olvasási idő: kb. 15 perc",
    "article.meta.author": "Szerző: West Style Kft.",
    "article.pricing.crumb": "Weboldal készítés árak",
    "article.pricing.title": "Mennyibe kerül egy weboldal készítés 2026-ban?",
    "article.pricing.hero": "Átlátható útmutató vállalkozóknak: mitől függ a weboldal készítés ár, milyen költségekkel érdemes számolni, és mire figyelj ajánlatkérés előtt.",
    "article.pricing.cta.title": "Kérj ingyenes konzultációt",
    "article.pricing.cta.desc": "Nem vagy biztos benne, hogy milyen weboldalra lenne szükséged, vagy szeretnéd megtudni, milyen megoldás illene legjobban a vállalkozásodhoz? Egy ingyenes, 30 perces konzultáción átbeszéljük az elképzeléseidet, megválaszoljuk a kérdéseidet, és személyre szabott ajánlatot készítünk.",
    "article.speed.crumb": "Weboldal sebesség",
    "article.speed.title": "Miért lassú a weboldalam? 10 gyakori hiba és megoldásuk",
    "article.speed.hero": "Gyakorlati útmutató arról, mi lassíthatja a weboldaladat, hogyan ellenőrizheted a problémákat, és milyen fejlesztések javíthatják a betöltési sebességet.",
    "article.speed.cta.title": "Kérj ingyenes weboldal-elemzést",
    "article.speed.cta.desc": "Átnézzük weboldalad teljesítményét, technikai állapotát és SEO szempontból is elemezzük. Az előzetes elemzés ingyenes és semmilyen kötelezettséggel nem jár.",
    "article.template.cta.title": "Kérj ingyenes konzultációt",
    "article.template.cta.desc": "Ha weboldal készítésben, SEO-ban vagy digitális fejlesztésben gondolkodsz, segítünk átlátni a lehetőségeket.",
    "article.template.cta.btn": "Konzultáció kérése",

    "hero.badge":  "Digitális Innováció · AI · Automatizáció",
    "hero.title1": "A jövő vállalkozása",
    "hero.title2": "már ma digitális",
    "hero.sub":    "A West Style Kft. komplex digitális megoldásokat nyújt: modern weboldaltól az AI-vezérelt marketingig — hogy vállalkozása ne csak lépést tartson, hanem vezessen.",
    "hero.cta":    "Ingyenes konzultáció",
    "hero.learn":  "Szolgáltatásaink",
    "hero.stat1":  "Fő szakterület",
    "hero.stat2":  "Személyre szabott",
    "hero.stat3":  "Alapú eszközök",

    "trust.label": "Amit kínálunk",
    "trust.i1": "Egyedi weboldal fejlesztés",
    "trust.i2": "SEO & AI monitoring",
    "trust.i3": "Weboldal karbantartás",
    "trust.i4": "Dedikált projektmenedzser",

    "inno.tag":   "Innováció & Digitalizáció",
    "inno.title": "A digitális átalakulás nem opció — elvárás",
    "inno.sub":   "Az ügyfelek online keresnek, online hasonlítanak össze, online döntenek. Aki nincs jelen erősen a digitális térben, az láthatatlan versenytársai mögött.",
    "inno.c1.title": "Valós idejű adatok",
    "inno.c1.desc":  "AI-alapú monitoringunk folyamatosan figyeli vállalkozása digitális teljesítményét — így mindig tudja, hol tart és mit kell tennie.",
    "inno.c2.title": "AI a marketingben",
    "inno.c2.desc":  "A mesterséges intelligencia ma már nem a jövő — hanem a legjobban teljesítő vállalkozások eszköze. Mi ezt elérhetővé tesszük az Ön számára is.",
    "inno.c3.title": "Biztonság & megbízhatóság",
    "inno.c3.desc":  "Minden általunk épített rendszer biztonságos, skálázható és hosszú távú megoldást nyújt — nem kell félni a növekedéstől.",
    "inno.c4.title": "Skálázható rendszerek",
    "inno.c4.desc":  "Amit ma kis vállalkozásként épít fel, holnap is tökéletesen működik — megoldásaink növekednek az Ön vállalkozásával együtt.",
    "inno.c5.title": "Globális elérés",
    "inno.c5.desc":  "Többnyelvű weboldalak, nemzetközi SEO stratégia — ha Ön határon túlra is terjeszkedne, mi készen állunk erre.",
    "inno.c6.title": "Mérhető eredmények",
    "inno.c6.desc":  "Nem sablonokat adunk el — stratégiát. Minden projekthez KPI-okat határozunk meg és rendszeresen riportálunk az eredményekről.",

    "st.tag":   "Szolgáltatásaink",
    "st.title": "Három területen, egy csapattal",
    "st.sub":   "Weboldal készítés, keresőoptimalizálás és weboldal karbantartás egy helyen — átlátható folyamattal és személyre szabott megközelítéssel.",
    "st.s1.title": "Weboldal Készítés",
    "st.s1.desc":  "Modern, gyors, mobilbarát weboldalak — az ötlettől az élesítésig. Egyedi design, CMS integráció, konverzió-fókusz.",
    "st.s2.title": "Keresőoptimalizálás",
    "st.s2.desc":  "Technikai SEO, kulcsszókutatás, on-page optimalizálás, AEO szemlélet és havi riportok.",
    "st.s3.title": "Weboldal karbantartás",
    "st.s3.desc":  "Rendszeres frissítés, hibajavítás, tartalomfrissítés, PageSpeed ellenőrzés és technikai támogatás.",
    "st.more": "Részletek →",
    "st.s1.moreLabel": "Weboldal készítés részletei",
    "st.s2.moreLabel": "Keresőoptimalizálás részletei",
    "st.s3.moreLabel": "Weboldal karbantartás részletei",
    "st.all":  "Összes szolgáltatás megtekintése",

    "co.tag":   "Rólunk",
    "co.title": "West Style Kft. — több mint egy ügynökség",
    "co.desc1": "Nem sablonmegoldásokat értékesítünk. Minden ügyfélhez egyedileg közelítünk: megértjük az üzleti céljait, megvizsgáljuk a piacát, majd egy komplex digitális stratégiát dolgozunk ki — és véghez is visszük.",
    "co.desc2": "Folyamatosan képezzük magunkat a legújabb digitális trendekben és AI-eszközökben, hogy mindig a leghatékonyabb megoldást tudjuk nyújtani.",
    "cv1.t": "Átláthatóság",        "cv1.d": "Folyamatos kommunikáció, nincsenek rejtett költségek.",
    "cv2.t": "Eredményorientált",   "cv2.d": "Mérjük és optimalizáljuk a közös munkánk hatását.",
    "cv3.t": "Hosszú távú partnerség", "cv3.d": "Nem projektet adunk el — valódi partneri kapcsolatot.",
    "co.cta": "Ismerjen meg minket",
    "cvl.web": "Web", "cvl.seo": "SEO", "cvl.ai": "AI", "cvl.mkt": "Marketing",

    "proc.tag":   "Hogyan dolgozunk?",
    "proc.title": "Egyszerű, átlátható folyamat",
    "ps1.t": "Konzultáció",   "ps1.d": "Megismerjük vállalkozását, céljait és jelenlegi helyzetét.",
    "ps2.t": "Stratégia",     "ps2.d": "Egyedi digitális stratégiát dolgozunk ki az Ön céljaihoz.",
    "ps3.t": "Kivitelezés",   "ps3.d": "Megvalósítjuk a tervet — határidőre, teljes átláthatósággal.",
    "ps4.t": "Optimalizálás", "ps4.d": "Mérjük az eredményeket és folyamatosan fejlesztünk.",

    "cta.title": "Készen áll a digitális ugrásra?",
    "cta.sub":   "Kérjen ingyenes konzultációt — 24 órán belül visszahívjuk.",
    "cta.btn":   "Kapcsolatfelvétel",

    "footer.tagline":     "Digitális megoldások, valódi eredmények.",
    "footer.rights":      "Minden jog fenntartva.",
    "footer.nav":         "Navigáció",
    "footer.services":    "Szolgáltatások",
    "footer.contactTitle":"Elérhetőség",
    "legal.terms": "ÁSZF",
    "legal.privacy": "Adatvédelmi tájékoztató",

    // Services page
    "sp.hero.title": "Szolgáltatásaink",
    "sp.hero.sub":   "Komplex digitális megoldások — egy partnertől, teljes körű szakértelemmel.",

    "s1.title": "Weboldal Készítés",
    "s2.title": "Keresőoptimalizálás",
    "s3.title": "Weboldal karbantartás",

    "svc.web.title": "Weboldal, amely dolgozik Önért",
    "svc.web.desc1": "Nem csak szép weboldalakat készítünk — olyan digitális eszközöket, amelyek aktívan hozzájárulnak vállalkozása növekedéséhez.",
    "svc.web.desc2": "A fejlesztés folyamata teljesen átlátható: az ötletelési fázistól a tesztelésen át az élesítésig minden lépésről tájékoztatjuk Önt.",
    "svc.web.f1.t": "Reszponzív design",       "svc.web.f1.d": "Tökéletesen jelenik meg minden eszközön.",
    "svc.web.f2.t": "Kiváló sebesség",          "svc.web.f2.d": "Optimalizált kód és gyorsabb betöltés, amely támogatja a jobb felhasználói élményt.",
    "svc.web.f3.t": "Biztonságos & SSL",        "svc.web.f3.d": "HTTPS, adatvédelmi megfelelőség, rendszeres mentés.",
    "svc.web.f4.t": "Konverzió-fókuszált design","svc.web.f4.d": "Nem csak szép — az oldal támogatja az ajánlatkérést és a kapcsolatfelvételt.",
    "svc.web.f5.t": "SEO-ready alap",           "svc.web.f5.d": "Keresőbarát struktúra, meta-adatok, schema markup.",
    "svc.web.f6.t": "Többnyelvű támogatás",     "svc.web.f6.d": "Magyar és angol nyelven, egy rendszeren belül.",

    "svc.seo.title": "Láthatóság, amelyet az AI vezérel",
    "svc.seo.desc1": "A keresőmotorokon való megjelenéshez átlátható technikai alapokra, releváns tartalomra és folyamatos mérésre van szükség. AI-alapú monitoringgal is követjük a változásokat.",
    "svc.seo.desc2": "A cél a mérhető, hosszú távú javulás. Átlátható riportokkal követjük az eredményeket, és javaslatokat adunk a további fejlesztésre.",
    "svc.seo.f1.t": "Mélyreható kulcsszó-kutatás",    "svc.seo.f1.d": "Feltárjuk, mire keresnek az Ön potenciális ügyfelei.",
    "svc.seo.f2.t": "AI tartalomoptimalizálás",        "svc.seo.f2.d": "Mesterséges intelligencia elemzi és javítja a tartalmait.",
    "svc.seo.f3.t": "Versenytárs monitoring",           "svc.seo.f3.d": "Adatok alapján figyeljük a piaci környezetet és a fejlesztési lehetőségeket.",
    "svc.seo.f4.t": "Havi teljesítmény-riportok",       "svc.seo.f4.d": "Átlátható adatok, trendek, javaslatok havonta.",
    "seo.kw1": "digitális ügynökség",
    "seo.kw2": "weboldal készítés",
    "seo.kw3": "SEO optimalizálás",

    "svc.mkt.title": "Weboldal karbantartás",
    "svc.mkt.desc1": "A weboldal akkor működik jól hosszú távon, ha rendszeresen frissül és ellenőrzés alatt marad.",
    "svc.mkt.desc2": "Segítünk a hibajavításban, tartalomfrissítésben, PageSpeed ellenőrzésben és technikai támogatásban.",
    "svc.mkt.f1.t": "Rendszeres frissítés",      "svc.mkt.f1.d": "Technikai ellenőrzések és szükséges frissítések.",
    "svc.mkt.f2.t": "Hibajavítás",      "svc.mkt.f2.d": "Űrlapok, linkek, megjelenési és működési hibák javítása.",
    "svc.mkt.f3.t": "Tartalomfrissítés",             "svc.mkt.f3.d": "Szövegek, képek és szolgáltatásleírások aktualizálása.",
    "svc.mkt.f4.t": "PageSpeed ellenőrzés",   "svc.mkt.f4.d": "Betöltési problémák és teljesítményjelzések áttekintése.",
    "svc.mkt.f5.t": "Search Console ellenőrzés",        "svc.mkt.f5.d": "Indexelési és technikai SEO jelzések áttekintése.",
    "svc.mkt.f6.t": "Technikai támogatás",             "svc.mkt.f6.d": "Gyors segítség kisebb módosításokhoz és kérdésekhez.",
    "mkt.n1": "Látogató", "mkt.n2": "Lead", "mkt.n3": "E-mail sorozat",
    "mkt.n4": "Social retargeting", "mkt.n5": "Vásárló ✓",

    "svc.cta": "Kérek ajánlatot",

    "why.tag":   "Miért minket?",
    "why.title": "Egy csapat, teljes lefedettség",
    "why.sub":   "Ahelyett, hogy 3 különböző ügynökséggel kellene kommunikálnia, minden digitális szükségletét egy helyen intézheti.",
    "why.c1.t": "Teljeskörű megoldás",  "why.c1.d": "Web, SEO, marketing — egy szerződés, egy kapcsolattartó, egy rendszer.",
    "why.c2.t": "Gyors megvalósítás",   "why.c2.d": "Tartott határidők, hatékony kommunikáció, nincsenek meglepetések.",
    "why.c3.t": "Saját AI eszközök",    "why.c3.d": "Nem külső szoftvereket adunk tovább — saját fejlesztésű AI-folyamataink vannak.",
    "why.c4.t": "Mérhető eredmények",   "why.c4.d": "Minden hónapban riportot kap — számokkal, trendekkel, javaslatokkal.",

    // Contact page
    "cp.hero.title":   "Lépjünk kapcsolatba",
    "cp.hero.sub":     "Két lehetőség: kérjen részletes ajánlatot, vagy egyszerűen csak írjon nekünk.",
    "cp.btn.quote":    "Ajánlatkérés",
    "cp.btn.contact":  "Kapcsolatfelvétel",

    "cp.quote.title":  "Ajánlatkérés",
    "cp.quote.sub":    "Töltse ki az alábbi űrlapot — 24 órán belül személyre szabott ajánlattal keressük meg.",
    "cp.contact.title":"Kapcsolatfelvétel",
    "cp.contact.sub":  "Kérdése van? Küldjön rövid üzenetet — vagy keressen minket közvetlenül.",

    "form.name":       "Neve",
    "form.company":    "Cég neve",
    "form.email":      "E-mail cím",
    "form.phone":      "Telefonszám",
    "form.service":    "Érdeklődés tárgya",
    "form.select":     "— Válasszon szolgáltatást —",
    "form.opt1":       "Weboldal készítés",
    "form.opt2":       "Keresőoptimalizálás / SEO",
    "form.opt3":       "Weboldal karbantartás",
    "form.opt4":       "Komplett csomag",
    "form.opt5":       "Egyéb",
    "form.budget":     "Tervezett büdzsé",
    "form.bselect":    "— Hozzávetőlegesen —",
    "form.b1":         "100 000 – 300 000 Ft",
    "form.b2":         "300 000 – 700 000 Ft",
    "form.b3":         "700 000 Ft felett",
    "form.b4":         "Megbeszélés szerint",
    "form.message":    "Üzenet",
    "form.messagePh":  "Röviden írja le projektjét vagy kérdését…",
    "form.send":       "Üzenet küldése",
    "form.sendQuote":  "Ajánlatkérés küldése",
    "form.sending":    "Küldés…",
    "form.note":       "Az adatait bizalmasan kezeljük, harmadik félnek nem adjuk át.",
    "form.success":    "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.",
    "form.successTitle": "Üzenet elküldve!",
    "form.successDesc":  "Köszönjük megkeresését. Hamarosan felvesszük Önnel a kapcsolatot — egy visszaigazolót is küldtünk az e-mail címére.",
    "form.error":      "Sajnáljuk, hiba történt. Kérjük, próbálja újra, vagy írjon közvetlenül: info@weststylee.hu",

    "modal.tag":   "Ajánlatkérés",
    "modal.title": "Kérjen személyre szabott ajánlatot",
    "modal.sub":   "24 órán belül visszajelzünk — rejtett díjak nélkül.",

    "cs.quoteInfo":    "Mit tartalmaz az ajánlat?",
    "cs.qi1.t": "Személyre szabott",       "cs.qi1.d": "Nem sablonárat küldünk, hanem az Ön igényeihez igazított kalkulációt.",
    "cs.qi2.t": "24 órán belül",           "cs.qi2.d": "Munkanapokon 24 órán belül visszajelzünk a kért ajánlattal.",
    "cs.qi3.t": "Ingyenes konzultáció",    "cs.qi3.d": "Az ajánlathoz egy ingyenes 30 perces online konzultációt is biztosítunk.",
    "cs.qi4.t": "Rejtett díjak nélkül",    "cs.qi4.d": "Az ajánlatban minden tétel részletezve van — nincsenek meglepetések.",

    "cs.direct":       "Közvetlen elérhetőségek",
    "cs.emailLabel":   "E-mail",
    "cs.phoneLabel":   "Telefon",
    "cs.locationLabel":"Székhely",
    "cs.hours":        "Elérhetőségi idő",
    "cs.weekday":      "Hétfő – Péntek",
    "cs.weekend":      "Hétvége",
    "cs.closed":       "Zárva",
    "cs.online":       "Jelenleg online",
    "csp.title":       "24 órás válaszidő",
    "csp.desc":        "Minden megkeresésre munkanapokon 24 órán belül válaszolunk.",

    "faq.tag":   "GYIK",
    "faq.title": "Gyakori kérdések",
    "faq.q1": "Mennyi ideig tart egy weboldal elkészítése?",
    "faq.a1": "Egy standard bemutatkozó oldal általában 2–4 hét alatt elkészül. Komplexebb projekteknél (webshop, egyedi fejlesztés) ez 4–8 hét. A pontos határidőt az első konzultáció után adjuk meg.",
    "faq.q2": "Mennyibe kerülnek a szolgáltatások?",
    "faq.a2": "Az árak a projekt összetettségétől és a kért funkcióktól függenek. Ingyenes konzultáción felmérjük az igényeket és személyre szabott ajánlatot készítünk — rejtett díjak nélkül.",
    "faq.q3": "Kell-e technikai tudás az oldal kezeléséhez?",
    "faq.a3": "Nem. Minden weboldalt úgy készítünk el, hogy Ön önállóan, technikai tudás nélkül tudja frissíteni a tartalmakat. Rövid oktatást is biztosítunk az átadáskor.",
    "faq.q4": "Milyen eredményeket hozhat a keresőoptimalizálás?",
    "faq.a4": "Az eredmények piactól és versenytől függnek, de általánosan 3–6 hónapon belül mérhető javulás tapasztalható a keresési pozíciókban és az organikus forgalomban.",
    "faq.q5": "Vállalnak-e hosszú távú karbantartást?",
    "faq.a5": "Igen — havi karbantartási csomagokat kínálunk, amelyek tartalmaznak technikai frissítéseket, biztonsági mentéseket, kisebb módosításokat és támogatást.",

    "ci.location": "Mosonmagyaróvár, Gulyás Lajos u. 9.",
    "ci.avail":    "Elérhető: H–P, 9:00–16:00",

    // Pricing
    "pr.tag":     "Árazás",
    "pr.title":   "Átlátható szolgáltatási árak",
    "pr.sub":     "Minden szolgáltatást külön árazunk — az alábbi árak tájékoztató jellegűek. Pontos ajánlatot ingyenes konzultáció után adunk.",
    "pr.monthly": "/ hó",
    "pr.popular": "Legtöbbek választása",
    "pr.cta":     "Ajánlatkérés",
    "pr.note":    "Az árak nettó összegek és tájékoztató jellegűek. Minden projekt egyedi — pontos ajánlatért vegye fel velünk a kapcsolatot.",

    "pr.web.rangeLabel": "Ártartomány",
    "pr.web.range":      "150 000 – 800 000 Ft",
    "pr.web.note":       "Az ár az oldalak számától, a kért funkcióktól és az egyedi fejlesztési igényektől függ.",
    "pr.web.f1": "Egyedi design + fejlesztés",
    "pr.web.f2": "Reszponzív, mobilbarát",
    "pr.web.f3": "SSL + tárhelykonfiguráció",
    "pr.web.f4": "CMS integráció",
    "pr.web.f5": "Alap SEO-beállítások",

    "pr.seo.basic.name":  "Basic",
    "pr.seo.basic.price": "54 990 Ft",
    "pr.seo.basic.desc":  "Stabil keresőoptimalizálás — kulcsszóalapú láthatóság és havi riport.",
    "pr.seo.basic.f1": "Kulcsszó-kutatás (10 kw)",
    "pr.seo.basic.f2": "On-page SEO optimalizálás",
    "pr.seo.basic.f3": "Google Analytics & Search Console",
    "pr.seo.basic.f4": "AI tartalomjavaslatok",
    "pr.seo.basic.f5": "Havi teljesítmény-riport",
    "pr.seo.basic.f6": "Webshop SEO",
    "pr.seo.basic.f7": "Prioritás support",

    "pr.seo.growth.name":  "Growth",
    "pr.seo.growth.price": "99 990 Ft",
    "pr.seo.growth.desc":  "Bővebb keresőoptimalizálási támogatás több tartalmi és technikai fejlesztési javaslattal.",
    "pr.seo.growth.f1": "Minden a Basic csomagból",
    "pr.seo.growth.f2": "Részletesebb technikai és tartalmi optimalizálás",
    "pr.seo.growth.f3": "Több landing oldal optimalizálása",
    "pr.seo.growth.f4": "Többnyelvű SEO támogatás",
    "pr.seo.growth.f5": "Webshop SEO",
    "pr.seo.growth.f6": "Prioritás support",
    "pr.seo.growth.f7": "Versenytárs monitoring",

    "pr.mkt.rangeLabel": "Árazás",
    "pr.mkt.range":      "Egyedi ajánlat alapján",
    "pr.mkt.note":       "A weboldal karbantartás díja a weboldal technológiájától, állapotától és a szükséges frissítések gyakoriságától függ.",
    "pr.mkt.f1": "Rendszeres frissítés",
    "pr.mkt.f2": "Hibajavítás",
    "pr.mkt.f3": "Tartalomfrissítés",
    "pr.mkt.f4": "PageSpeed ellenőrzés",
    "pr.mkt.f5": "Search Console ellenőrzés",

    // About page
    "nav.about": "Rólunk",
    "ap.hero.title": "Ismerjük meg egymást",
    "ap.hero.sub":   "A West Style Kft. egy modern digitális ügynökség, ahol az ügyfelek sikere az első. Nem technológiát adunk el — partneri kapcsolatot kínálunk.",

    "ap.mission.tag":   "Küldetésünk",
    "ap.mission.title": "Digitális növekedés, minden vállalkozásnak",
    "ap.mission.p1": "A West Style Kft.-t azzal a céllal hoztuk létre, hogy a legmodernebb digitális eszközöket elérhetővé tegyük minden méretű vállalkozás számára.",
    "ap.mission.p2": "Hisszük, hogy egy jól megtervezett digitális jelenlét képes gyökeresen megváltoztatni egy vállalkozás növekedési pályáját. Ezt bizonyítjuk be minden projektünkben.",
    "ap.mission.p3": "Nem vállalunk minden projektet — de amit elvállalunk, azt 100%-os elkötelezetséggel hajtjuk végre.",
    "ap.s1.label": "Fő szakterület",
    "ap.s2.label": "Alapú eszközök",
    "ap.s3.label": "Válaszidő",
    "ap.s4.label": "Személyre szabott",

    "ap.values.tag":   "Értékeink",
    "ap.values.title": "Amiben hiszünk",
    "ap.values.sub":   "Ezek az alapelvek vezérelnek minden döntésünkben — az első kapcsolatfelvételtől az utolsó riportig.",
    "val.1.t": "Átláthatóság",           "val.1.d": "Nincsenek rejtett díjak, meglepetések. Minden lépésnél pontosan tudja, mi történik, miért és mennyibe kerül.",
    "val.2.t": "Eredményorientáltság",   "val.2.d": "Mérhető eredményeket hozunk. Minden projekthez célokat és KPI-okat határozunk meg és rendszeresen követjük.",
    "val.3.t": "Tartott határidők",      "val.3.d": "A határidő kötelezettség. Hatékony folyamataink biztosítják, hogy projektje időben és a megállapodott keretek közt teljesüljön.",
    "val.4.t": "Hosszú távú gondolkodás","val.4.d": "Nem egyszeri projektekben gondolkodunk. Partnereinkkel hosszú távú kapcsolatot építünk — az Ön növekedése a mi sikerünk.",
    "val.5.t": "Ügyfélközpontúság",      "val.5.d": "Minden döntésünk középpontjában az Ön érdeke áll. Azt javasoljuk, ami az Ön vállalkozásának a legjobb.",
    "val.6.t": "Folyamatos fejlődés",    "val.6.d": "A digitális világ gyorsan változik — mi lépést tartunk. Folyamatosan képezzük magunkat, hogy mindig a legmodernebb megoldásokat kínálhassuk.",

    "ap.approach.tag":   "Megközelítésünk",
    "ap.approach.title": "Nem ügynökség vagyunk — partner",
    "ap.approach.sub":   "A hagyományos ügynökségek projektenként gondolkodnak. Mi az Ön vállalkozásának hosszú távú digitális növekedésében gondolkodunk.",
    "ap.col1.title": "Hagyományos ügynökség",
    "ap.col1.i1": "Sablonmegoldások, copy-paste projektek",
    "ap.col1.i2": "Átadás után nincs támogatás",
    "ap.col1.i3": "Homályos riportok, mérhetetlen eredmények",
    "ap.col1.i4": "Különböző csapat minden projektnél",
    "ap.col1.i5": "Csak a számlázott órákon belül kommunikál",
    "ap.col2.title": "West Style Kft.",
    "ap.col2.i1": "Egyedi stratégia, személyre szabott megoldás",
    "ap.col2.i2": "Hosszú távú karbantartás és fejlesztés",
    "ap.col2.i3": "Részletes havi riportok, mérhető KPI-ok",
    "ap.col2.i4": "Dedikált projektmenedzser végig",
    "ap.col2.i5": "Folyamatos, proaktív kommunikáció",

    "ap.exp.tag":   "Szakterületeink",
    "ap.exp.title": "Miben vagyunk a legjobbak?",
    "exp.l1": "Weboldal fejlesztés",
    "exp.l2": "SEO stratégia",
    "exp.l3": "AI integráció",
    "exp.l4": "Weboldal karbantartás",
    "exp.l5": "UX / Konverzió-optimalizálás",
    "exp.l6": "Tartalom stratégia",

    // References page
    "rp.hero.title": "Referenciáink",
    "rp.hero.sub": "Publikusan elérhető weboldalak, amelyeket a West Style Kft. készített: letisztult felépítés, modern vizuális világ és üzleti célokra hangolt kivitelezés.",
    "rp.tag": "Munkáink",
    "rp.title": "Két elkészült weboldal, gyors előnézettel",
    "rp.sub": "A referencia kártyák statikus előnézetet mutatnak, kattintásra pedig a publikusan elérhető oldalakra vezetnek.",
    "rp.card1.tag": "Weboldal fejlesztés",
    "rp.card1.desc": "Modern, reszponzív weboldal, amely gyorsan áttekinthető struktúrával és erős első benyomással támogatja a márka online jelenlétét.",
    "rp.card1.alt": "DonniQ weboldal előnézet",
    "rp.card1.aria": "Donniq weboldal megnyitása",
    "rp.card2.tag": "Digitális jelenlét",
    "rp.card2.desc": "Publikus, mobilbarát weboldal átgondolt tartalmi szerkezettel, gördülékeny navigációval és a szolgáltatás bemutatását segítő vizuális ritmussal.",
    "rp.card2.alt": "Henka weboldal előnézet",
    "rp.card2.aria": "Henka weboldal megnyitása",
    "rp.open": "Élő oldal megnyitása →",
    "rp.preview.open": "Élő weboldal megnyitása",
    "rp.process.tag": "Amit átadunk",
    "rp.process.title": "Nem csak egy kész oldalt, hanem működő digitális alapot",
    "rp.p1.t": "Reszponzív megjelenés",
    "rp.p1.d": "Az oldalak asztali gépen, tableten és mobilon is professzionálisan használhatók.",
    "rp.p2.t": "Egyedi arculati hangulat",
    "rp.p2.d": "Minden projekt vizuális világa a márkához és az üzleti célhoz igazodik.",
    "rp.p3.t": "Keresőbarát alapok",
    "rp.p3.d": "A struktúra, a sebesség és a meta elemek már az induláskor támogatják a láthatóságot.",
    "rp.p4.t": "Bővíthető rendszer",
    "rp.p4.d": "Az elkészült weboldalak később új aloldalakkal, funkciókkal és kampányokkal bővíthetők.",
    "rp.cta.title": "Szeretne hasonló weboldalt?",
    "rp.cta.sub": "Kérjen ajánlatot, és megtervezzük az Ön vállalkozásához illő digitális jelenlétet.",
  },

  en: {
    "nav.home":     "Home",
    "nav.services": "Services",
    "nav.references": "References",
    "nav.blog": "Blog",
    "nav.contact":  "Contact",
    "nav.cta":      "Get a Quote",

    "blog.hero.title": "Blog",
    "blog.hero.sub": "Practical articles about website development, search engine optimization, SEO, e-commerce and digital development, so you can make better decisions about your online presence.",
    "blog.index.tag": "Knowledge base",
    "blog.index.title": "Latest articles",
    "blog.index.sub": "Practical guides about website development, SEO and digital development.",
    "blog.cat.web": "Website development",
    "blog.cat.performance": "Performance",
    "blog.card.pricing.title": "How much does website development cost in 2026?",
    "blog.card.pricing.desc": "A detailed guide to what affects website development pricing, what price ranges to expect, and what to check before requesting a quote.",
    "blog.card.speed.title": "Why is my website slow? 10 common mistakes",
    "blog.card.speed.desc": "The 10 most common performance issues, PageSpeed signals and practical fixes for faster websites.",
    "blog.card.read": "Read more →",

    "article.related.title": "Related article",
    "article.links.title": "Useful links",
    "article.meta.updated": "Updated: July 2026",
    "article.meta.reading": "Reading time: approx. 15 minutes",
    "article.meta.author": "Author: West Style Kft.",
    "article.pricing.crumb": "Website development prices",
    "article.pricing.title": "How much does website development cost in 2026?",
    "article.pricing.hero": "A transparent guide for business owners: what affects website development pricing, what costs to expect, and what to check before requesting a quote.",
    "article.pricing.cta.title": "Request a free consultation",
    "article.pricing.cta.desc": "Not sure what kind of website you need, or would you like to know which solution would fit your business best? During a free 30-minute consultation, we discuss your ideas, answer your questions and prepare a personalized quote.",
    "article.speed.crumb": "Website speed",
    "article.speed.title": "Why is my website slow? 10 common mistakes and their solutions",
    "article.speed.hero": "A practical guide to what can slow down your website, how to check issues, and which improvements can help loading speed.",
    "article.speed.cta.title": "Request a free website audit",
    "article.speed.cta.desc": "We review your website performance, technical condition and SEO basics. The initial audit is free and comes with no obligation.",
    "article.template.cta.title": "Request a free consultation",
    "article.template.cta.desc": "If you are thinking about website development, SEO or digital development, we help you understand the options.",
    "article.template.cta.btn": "Request consultation",

    "hero.badge":  "Digital Innovation · AI · Automation",
    "hero.title1": "The business of tomorrow",
    "hero.title2": "goes digital today",
    "hero.sub":    "West Style Kft. provides comprehensive digital solutions: from modern websites to AI-powered marketing — so your business doesn't just keep up, it leads.",
    "hero.cta":    "Free Consultation",
    "hero.learn":  "Our Services",
    "hero.stat1":  "Core Specialties",
    "hero.stat2":  "Tailored",
    "hero.stat3":  "Powered Tools",

    "trust.label": "What we offer",
    "trust.i1": "Custom website development",
    "trust.i2": "SEO & AI monitoring",
    "trust.i3": "Website maintenance",
    "trust.i4": "Dedicated project manager",

    "inno.tag":   "Innovation & Digitalisation",
    "inno.title": "Digital transformation is not an option — it's an expectation",
    "inno.sub":   "Customers search online, compare online, decide online. Businesses without a strong digital presence are invisible behind their competitors.",
    "inno.c1.title": "Real-time data",
    "inno.c1.desc":  "Our AI-based monitoring continuously tracks your business's digital performance — so you always know where you stand and what to do next.",
    "inno.c2.title": "AI in marketing",
    "inno.c2.desc":  "Artificial intelligence is no longer the future — it's the tool of today's top-performing businesses. We make it accessible for you.",
    "inno.c3.title": "Security & reliability",
    "inno.c3.desc":  "Every system we build is secure, scalable and provides a long-term solution — no need to fear growth.",
    "inno.c4.title": "Scalable systems",
    "inno.c4.desc":  "What you build today as a small business will work perfectly tomorrow — our solutions grow with your business.",
    "inno.c5.title": "Global reach",
    "inno.c5.desc":  "Multilingual websites, international SEO strategy — if you want to expand beyond borders, we are ready for it.",
    "inno.c6.title": "Measurable results",
    "inno.c6.desc":  "We don't sell templates — we sell strategy. We define KPIs for every project and regularly report on results.",

    "st.tag":   "Our Services",
    "st.title": "Three areas, one partner",
    "st.sub":   "Website development, search engine optimization and website maintenance in one place, with a transparent process and tailored approach.",
    "st.s1.title": "Website Development",
    "st.s1.desc":  "Modern, fast, mobile-friendly websites — from concept to launch. Custom design, CMS integration, conversion focus.",
    "st.s2.title": "Search Engine Optimization",
    "st.s2.desc":  "Technical SEO, keyword research, on-page optimization, AEO-focused structure and monthly reports.",
    "st.s3.title": "Website Maintenance",
    "st.s3.desc":  "Regular updates, bug fixes, content updates, PageSpeed checks and technical support.",
    "st.more": "Learn more →",
    "st.s1.moreLabel": "Website development details",
    "st.s2.moreLabel": "Search engine optimization details",
    "st.s3.moreLabel": "Website maintenance details",
    "st.all":  "View all services",

    "co.tag":   "About Us",
    "co.title": "West Style Kft. — more than an agency",
    "co.desc1": "We don't sell template solutions. We approach each client individually: understand your business goals, analyse your market, then develop and execute a comprehensive digital strategy.",
    "co.desc2": "We continuously train in the latest digital trends and AI tools to always provide the most effective solution.",
    "cv1.t": "Transparency",       "cv1.d": "Continuous communication, no hidden costs.",
    "cv2.t": "Results-oriented",   "cv2.d": "We measure and optimise the impact of our work together.",
    "cv3.t": "Long-term partnership","cv3.d": "We don't sell projects — we sell real partnerships.",
    "co.cta": "Get to know us",
    "cvl.web": "Web", "cvl.seo": "SEO", "cvl.ai": "AI", "cvl.mkt": "Marketing",

    "proc.tag":   "How we work",
    "proc.title": "Simple, transparent process",
    "ps1.t": "Consultation",  "ps1.d": "We get to know your business, goals and current situation.",
    "ps2.t": "Strategy",      "ps2.d": "We develop a custom digital strategy tailored to your goals.",
    "ps3.t": "Execution",     "ps3.d": "We implement the plan — on time, with full transparency.",
    "ps4.t": "Optimisation",  "ps4.d": "We measure results and continuously improve.",

    "cta.title": "Ready to make the digital leap?",
    "cta.sub":   "Request a free consultation — we'll call you back within 24 hours.",
    "cta.btn":   "Get in touch",

    "footer.tagline":      "Digital solutions, real results.",
    "footer.rights":       "All rights reserved.",
    "footer.nav":          "Navigation",
    "footer.services":     "Services",
    "footer.contactTitle": "Contact",
    "legal.terms": "Terms and Conditions",
    "legal.privacy": "Privacy Policy",

    "sp.hero.title": "Our Services",
    "sp.hero.sub":   "Comprehensive digital solutions — from one partner, with full expertise.",

    "s1.title": "Website Development",
    "s2.title": "Search Engine Optimization",
    "s3.title": "Website Maintenance",

    "svc.web.title": "A website that works for you",
    "svc.web.desc1": "We don't just build beautiful websites — we create digital tools that actively contribute to your business growth.",
    "svc.web.desc2": "The development process is fully transparent: we keep you informed at every step from ideation through testing to launch.",
    "svc.web.f1.t": "Responsive design",        "svc.web.f1.d": "Looks perfect on every device.",
    "svc.web.f2.t": "Excellent speed",           "svc.web.f2.d": "Optimised code and faster loading that support a better user experience.",
    "svc.web.f3.t": "Secure & SSL",              "svc.web.f3.d": "HTTPS, data protection compliance, regular backups.",
    "svc.web.f4.t": "Conversion-focused design",  "svc.web.f4.d": "Not just beautiful — the website supports quote requests and contact.",
    "svc.web.f5.t": "SEO-ready foundation",      "svc.web.f5.d": "Search-friendly structure, meta data, schema markup.",
    "svc.web.f6.t": "Multilingual support",      "svc.web.f6.d": "Hungarian and English, in one system.",

    "svc.seo.title": "Visibility driven by AI",
    "svc.seo.desc1": "Search visibility needs clear technical foundations, relevant content and continuous measurement. AI-based monitoring can also help follow changes.",
    "svc.seo.desc2": "The goal is measurable, long-term improvement. We track changes with transparent reports and provide recommendations for further development.",
    "svc.seo.f1.t": "In-depth keyword research",     "svc.seo.f1.d": "We discover what your potential clients are searching for.",
    "svc.seo.f2.t": "AI content optimisation",        "svc.seo.f2.d": "Artificial intelligence analyses and improves your content.",
    "svc.seo.f3.t": "Competitor monitoring",           "svc.seo.f3.d": "We use data to monitor the market environment and identify development opportunities.",
    "svc.seo.f4.t": "Monthly performance reports",    "svc.seo.f4.d": "Clear data, trends and recommendations every month.",
    "seo.kw1": "digital agency",
    "seo.kw2": "website development",
    "seo.kw3": "SEO optimisation",

    "svc.mkt.title": "Website maintenance",
    "svc.mkt.desc1": "A website works best long term when it is regularly updated and monitored.",
    "svc.mkt.desc2": "We help with bug fixes, content updates, PageSpeed checks and technical support.",
    "svc.mkt.f1.t": "Regular updates",          "svc.mkt.f1.d": "Technical checks and necessary updates.",
    "svc.mkt.f2.t": "Bug fixes",  "svc.mkt.f2.d": "Forms, links, visual and functional issues.",
    "svc.mkt.f3.t": "Content updates",            "svc.mkt.f3.d": "Updating texts, images and service descriptions.",
    "svc.mkt.f4.t": "PageSpeed checks",  "svc.mkt.f4.d": "Reviewing loading and performance signals.",
    "svc.mkt.f5.t": "Search Console checks",           "svc.mkt.f5.d": "Reviewing indexing and technical SEO signals.",
    "svc.mkt.f6.t": "Technical support",           "svc.mkt.f6.d": "Help with smaller changes and questions.",
    "mkt.n1": "Visitor", "mkt.n2": "Lead", "mkt.n3": "Email sequence",
    "mkt.n4": "Social retargeting", "mkt.n5": "Customer ✓",

    "svc.cta": "Request a quote",

    "why.tag":   "Why us?",
    "why.title": "One team, complete coverage",
    "why.sub":   "Instead of managing 3 different agencies, handle all your digital needs in one place.",
    "why.c1.t": "End-to-end solution",    "why.c1.d": "Web, SEO, marketing — one contract, one contact, one system.",
    "why.c2.t": "Fast delivery",           "why.c2.d": "Deadlines met, efficient communication, no surprises.",
    "why.c3.t": "Own AI tools",            "why.c3.d": "We don't resell third-party software — we have our own AI processes.",
    "why.c4.t": "Measurable results",      "why.c4.d": "Monthly reports with numbers, trends and recommendations.",

    "cp.hero.title":   "Let's connect",
    "cp.hero.sub":     "Two options: request a detailed quote, or simply send us a message.",
    "cp.btn.quote":    "Get a Quote",
    "cp.btn.contact":  "Send a Message",

    "cp.quote.title":  "Request a Quote",
    "cp.quote.sub":    "Fill in the form below — we'll get back to you with a personalised quote within 24 hours.",
    "cp.contact.title":"Get in Touch",
    "cp.contact.sub":  "Have a question? Send a short message — or reach us directly.",

    "form.name":       "Your Name",
    "form.company":    "Company Name",
    "form.email":      "Email Address",
    "form.phone":      "Phone Number",
    "form.service":    "Area of Interest",
    "form.select":     "— Select a service —",
    "form.opt1":       "Website Development",
    "form.opt2":       "Search Engine Optimization / SEO",
    "form.opt3":       "Website Maintenance",
    "form.opt4":       "Full Package",
    "form.opt5":       "Other",
    "form.budget":     "Estimated budget",
    "form.bselect":    "— Approximately —",
    "form.b1":         "HUF 100k – 300k",
    "form.b2":         "HUF 300k – 700k",
    "form.b3":         "HUF 700k+",
    "form.b4":         "To be discussed",
    "form.message":    "Message",
    "form.messagePh":  "Briefly describe your project or question…",
    "form.send":       "Send Message",
    "form.sendQuote":  "Send Quote Request",
    "form.sending":    "Sending…",
    "form.note":       "Your data is kept confidential and never shared with third parties.",
    "form.success":    "Thank you! We'll be in touch shortly.",
    "form.successTitle": "Message sent!",
    "form.successDesc":  "Thank you for reaching out. We'll be in touch soon — a confirmation has also been sent to your email address.",
    "form.error":      "Sorry, something went wrong. Please try again or email us directly: info@weststylee.hu",

    "modal.tag":   "Get a Quote",
    "modal.title": "Request a personalised quote",
    "modal.sub":   "We'll get back to you within 24 hours — no hidden fees.",

    "cs.quoteInfo":    "What's included in the quote?",
    "cs.qi1.t": "Personalised",            "cs.qi1.d": "We don't send template prices — we calculate based on your specific needs.",
    "cs.qi2.t": "Within 24 hours",         "cs.qi2.d": "We'll get back to you on working days within 24 hours.",
    "cs.qi3.t": "Free consultation",       "cs.qi3.d": "Every quote comes with a free 30-minute online consultation.",
    "cs.qi4.t": "No hidden fees",          "cs.qi4.d": "Every item in the quote is itemised — no surprises.",

    "cs.direct":       "Direct contacts",
    "cs.emailLabel":   "Email",
    "cs.phoneLabel":   "Phone",
    "cs.locationLabel":"Location",
    "cs.hours":        "Office hours",
    "cs.weekday":      "Monday – Friday",
    "cs.weekend":      "Weekend",
    "cs.closed":       "Closed",
    "cs.online":       "Currently online",
    "csp.title":       "24-hour response",
    "csp.desc":        "We respond to every enquiry within 24 hours on working days.",

    "faq.tag":   "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How long does it take to build a website?",
    "faq.a1": "A standard presentation site is typically ready in 2–4 weeks. More complex projects (e-commerce, custom development) take 4–8 weeks. We provide the exact timeline after the first consultation.",
    "faq.q2": "How much do your services cost?",
    "faq.a2": "Prices depend on the complexity of the project and the required features. At a free consultation we assess your needs and prepare a personalised quote — with no hidden fees.",
    "faq.q3": "Do I need technical knowledge to manage the site?",
    "faq.a3": "No. Every website is built so you can update content independently without technical knowledge. We also provide a short training session at handover.",
    "faq.q4": "What results can search engine optimization deliver?",
    "faq.a4": "Results depend on the market and competition, but measurable improvements in search positions and organic traffic are typically seen within 3–6 months.",
    "faq.q5": "Do you offer long-term maintenance?",
    "faq.a5": "Yes — we offer monthly maintenance packages covering technical updates, backups, minor changes and support. We think in terms of long-term partnerships, not one-off projects.",

    "ci.location": "Mosonmagyaróvár, Gulyás Lajos u. 9.",
    "ci.avail":    "Available: Mon–Fri, 9:00–16:00",

    // Pricing
    "pr.tag":     "Pricing",
    "pr.title":   "Transparent service pricing",
    "pr.sub":     "Each service is priced separately — the prices below are indicative. We provide an exact quote after a free consultation.",
    "pr.monthly": "/ mo",
    "pr.popular": "Most popular",
    "pr.cta":     "Get a quote",
    "pr.note":    "Prices are net amounts and indicative. Every project is unique — contact us for an exact quote.",

    "pr.web.rangeLabel": "Price range",
    "pr.web.range":      "HUF 150,000 – 800,000",
    "pr.web.note":       "The price depends on the number of pages, required features and custom development needs.",
    "pr.web.f1": "Custom design + development",
    "pr.web.f2": "Responsive, mobile-friendly",
    "pr.web.f3": "SSL + hosting configuration",
    "pr.web.f4": "CMS integration",
    "pr.web.f5": "Basic SEO setup",

    "pr.seo.basic.name":  "Basic",
    "pr.seo.basic.price": "HUF 54,990",
    "pr.seo.basic.desc":  "Steady SEO — keyword-driven visibility and monthly reporting.",
    "pr.seo.basic.f1": "Keyword research (10 kw)",
    "pr.seo.basic.f2": "On-page SEO optimisation",
    "pr.seo.basic.f3": "Google Analytics & Search Console",
    "pr.seo.basic.f4": "AI content suggestions",
    "pr.seo.basic.f5": "Monthly performance report",
    "pr.seo.basic.f6": "Webshop SEO",
    "pr.seo.basic.f7": "Priority support",

    "pr.seo.growth.name":  "Growth",
    "pr.seo.growth.price": "HUF 99,990",
    "pr.seo.growth.desc":  "Broader SEO support with more content and technical improvement recommendations.",
    "pr.seo.growth.f1": "Everything in Basic",
    "pr.seo.growth.f2": "More detailed technical and content optimization",
    "pr.seo.growth.f3": "More landing pages optimised",
    "pr.seo.growth.f4": "Multilingual SEO support",
    "pr.seo.growth.f5": "Webshop SEO",
    "pr.seo.growth.f6": "Priority support",
    "pr.seo.growth.f7": "Competitor monitoring",

    "pr.mkt.rangeLabel": "Pricing",
    "pr.mkt.range":      "Custom maintenance quote",
    "pr.mkt.note":       "Website maintenance pricing depends on the website technology, current condition and required update frequency.",
    "pr.mkt.f1": "Regular updates",
    "pr.mkt.f2": "Bug fixes",
    "pr.mkt.f3": "Content updates",
    "pr.mkt.f4": "PageSpeed checks",
    "pr.mkt.f5": "Search Console checks",

    // About page
    "nav.about": "About",
    "ap.hero.title": "Let's get to know each other",
    "ap.hero.sub":   "West Style Kft. is a modern digital agency where client success comes first. We don't sell technology — we offer genuine partnership.",

    "ap.mission.tag":   "Our Mission",
    "ap.mission.title": "Digital growth for every business",
    "ap.mission.p1": "West Style Kft. was founded with the goal of making the most modern digital tools — previously available only to large corporations — accessible to businesses of every size.",
    "ap.mission.p2": "We believe a well-designed digital presence can fundamentally change a business's growth trajectory. We prove this in every project.",
    "ap.mission.p3": "We don't take every project — but what we do take on, we deliver with 100% commitment and a focus on results.",
    "ap.s1.label": "Core Specialties",
    "ap.s2.label": "Powered Tools",
    "ap.s3.label": "Response Time",
    "ap.s4.label": "Tailored",

    "ap.values.tag":   "Our Values",
    "ap.values.title": "What we believe in",
    "ap.values.sub":   "These principles guide every decision we make — from first contact to the last report.",
    "val.1.t": "Transparency",          "val.1.d": "No hidden fees or surprises. At every step you know exactly what is happening, why and how much it costs.",
    "val.2.t": "Results-oriented",      "val.2.d": "We deliver measurable results. We define goals and KPIs for every project and track them regularly.",
    "val.3.t": "Deadlines kept",        "val.3.d": "A deadline is a commitment. Our efficient processes ensure your project is delivered on time and within agreed parameters.",
    "val.4.t": "Long-term thinking",    "val.4.d": "We don't think in one-off projects. We build long-term relationships — your growth is our success too.",
    "val.5.t": "Client-first",          "val.5.d": "Your interests are at the centre of every decision we make. We recommend what's best for your business.",
    "val.6.t": "Continuous improvement","val.6.d": "The digital world changes fast — we keep pace. We continuously train to always offer the most modern solutions.",

    "ap.approach.tag":   "Our Approach",
    "ap.approach.title": "We're not an agency — we're a partner",
    "ap.approach.sub":   "Traditional agencies think project by project. We think about your business's long-term digital growth.",
    "ap.col1.title": "Traditional agency",
    "ap.col1.i1": "Template solutions, copy-paste projects",
    "ap.col1.i2": "No support after handover",
    "ap.col1.i3": "Vague reports, unmeasurable results",
    "ap.col1.i4": "Different team for every project",
    "ap.col1.i5": "Communicates only within billed hours",
    "ap.col2.title": "West Style Kft.",
    "ap.col2.i1": "Unique strategy, personalised solution",
    "ap.col2.i2": "Long-term maintenance and development",
    "ap.col2.i3": "Detailed monthly reports, measurable KPIs",
    "ap.col2.i4": "Dedicated project manager throughout",
    "ap.col2.i5": "Continuous, proactive communication",

    "ap.exp.tag":   "Our Expertise",
    "ap.exp.title": "What are we best at?",
    "exp.l1": "Website development",
    "exp.l2": "SEO strategy",
    "exp.l3": "AI integration",
    "exp.l4": "Website maintenance",
    "exp.l5": "UX / Conversion optimisation",
    "exp.l6": "Content strategy",

    "rp.hero.title": "Our References",
    "rp.hero.sub": "Publicly available websites built by West Style Kft.: clean structure, modern visual direction and execution tuned for business goals.",
    "rp.tag": "Our Work",
    "rp.title": "Two completed websites with quick previews",
    "rp.sub": "The reference cards show static previews and open the publicly available websites when clicked.",
    "rp.card1.tag": "Website development",
    "rp.card1.desc": "A modern, responsive website with a clear structure and strong first impression to support the brand's online presence.",
    "rp.card1.alt": "DonniQ website preview",
    "rp.card1.aria": "Open DonniQ website",
    "rp.card2.tag": "Digital presence",
    "rp.card2.desc": "A public, mobile-friendly website with thoughtful content structure, smooth navigation and visual rhythm that helps present the service.",
    "rp.card2.alt": "Henka website preview",
    "rp.card2.aria": "Open Henka website",
    "rp.open": "Open live website →",
    "rp.preview.open": "Open live website",
    "rp.process.tag": "What we deliver",
    "rp.process.title": "Not just a finished website, but a working digital foundation",
    "rp.p1.t": "Responsive layout",
    "rp.p1.d": "The websites work professionally on desktop, tablet and mobile.",
    "rp.p2.t": "Custom brand atmosphere",
    "rp.p2.d": "Every project's visual direction is aligned with the brand and business goal.",
    "rp.p3.t": "SEO-friendly basics",
    "rp.p3.d": "Structure, speed and meta elements support visibility from launch.",
    "rp.p4.t": "Expandable system",
    "rp.p4.d": "Completed websites can later be expanded with new pages, features and campaigns.",
    "rp.cta.title": "Would you like a similar website?",
    "rp.cta.sub": "Request a quote, and we will plan the digital presence that fits your business.",
  }
};

// Static text fallback for newer pages that were added without data-i18n keys.
// Preferred for new content:
// 1. Add data-i18n="page.section.key" to the HTML element.
// 2. Add the same key to translations.hu and translations.en above.
// For legacy/minified static markup, add the exact Hungarian text below.
const staticTextTranslations = {
  en: {
    "Főoldal": "Home",
    "Szolgáltatások": "Services",
    "Rólunk": "About",
    "Referenciák": "References",
    "Kapcsolat": "Contact",
    "Ajánlatkérés": "Request a quote",
    "Kapcsolatfelvétel": "Contact us",
    "Ingyenes konzultáció": "Free consultation",
    "Navigáció": "Navigation",
    "Elérhetőség": "Contact",
    "Minden jog fenntartva.": "All rights reserved.",
    "© 2026 West Style Kft. Minden jog fenntartva.": "© 2026 West Style Kft. All rights reserved.",
    "Digitális megoldások, valódi eredmények.": "Digital solutions, real results.",
    "Weboldal készítés": "Website development",
    "Keresőoptimalizálás": "Search engine optimization",
    "Weboldal karbantartás": "Website maintenance",
    "Adatvédelmi tájékoztató": "Privacy Policy",
    "Általános Szerződési Feltételek": "Terms and Conditions",
    "ÁSZF": "Terms",
    "Blog": "Blog",
    "Részletek": "Details",
    "Tartalom": "Contents",
    "Kapcsolódó cikkek": "Related articles",
    "Kapcsolódó cikk": "Related article",
    "Hasznos linkek": "Useful links",
    "Blogcikkek megnyitása →": "Open blog articles →",
    "További hasznos cikkekért látogass el a blogunkra.": "For more useful articles, visit our blog.",
    "Olvasási idő: kb. 15 perc": "Reading time: approx. 15 minutes",
    "Frissítve: 2026. július": "Updated: July 2026",
    "Szerző: West Style Kft.": "Author: West Style Kft.",
    "Kérj ingyenes konzultációt": "Request a free consultation",
    "Kérjen ingyenes konzultációt": "Request a free consultation",
    "Szolgáltatások áttekintése": "Services overview",
    "Árak és ajánlatkérés": "Prices and quote request",
    "Árazás": "Pricing",
    "Átlátható szolgáltatási árak": "Transparent service pricing",
    "Minden szolgáltatást külön árazunk — az alábbi árak tájékoztató jellegűek. Pontos ajánlatot ingyenes konzultáció után adunk.": "Each service is priced separately — the prices below are indicative. We provide an exact quote after a free consultation.",
    "Weboldal Készítés": "Website Development",
    "Ártartomány": "Price range",
    "150 000 – 800 000 Ft": "HUF 150,000 – 800,000",
    "Az ár az oldalak számától, a kért funkcióktól és az egyedi fejlesztési igényektől függ.": "The price depends on the number of pages, requested features and custom development needs.",
    "Egyedi design + fejlesztés": "Custom design + development",
    "Reszponzív, mobilbarát": "Responsive, mobile-friendly",
    "SSL + tárhelykonfiguráció": "SSL + hosting configuration",
    "CMS integráció": "CMS integration",
    "Alap SEO-beállítások": "Basic SEO setup",
    "Basic": "Basic",
    "Growth": "Growth",
    "54 990 Ft": "HUF 54,990",
    "99 990 Ft": "HUF 99,990",
    "/ hó": "/ month",
    "Legtöbbek választása": "Most popular",
    "Stabil keresőoptimalizálás — kulcsszóalapú láthatóság és havi riport.": "Steady search engine optimization — keyword-based visibility and monthly reporting.",
    "Bővebb keresőoptimalizálási támogatás több tartalmi és technikai fejlesztési javaslattal.": "Broader SEO support with more content and technical improvement recommendations.",
    "Kulcsszó-kutatás (10 kw)": "Keyword research (10 kw)",
    "On-page SEO optimalizálás": "On-page SEO optimization",
    "Google Analytics & Search Console": "Google Analytics & Search Console",
    "AI tartalomjavaslatok": "AI content suggestions",
    "Havi teljesítmény-riport": "Monthly performance report",
    "Minden a Basic csomagból": "Everything in the Basic package",
    "Részletesebb technikai és tartalmi optimalizálás": "More detailed technical and content optimization",
    "Több landing oldal optimalizálása": "More landing pages optimized",
    "Többnyelvű SEO támogatás": "Multilingual SEO support",
    "Webshop SEO": "Webshop SEO",
    "Prioritás support": "Priority support",
    "Versenytárs monitoring": "Competitor monitoring",
    "AEO szemléletű tartalomfejlesztés": "AEO-focused content development",
    "Egyedi ajánlat alapján": "Custom quote",
    "A weboldal karbantartás díja a weboldal technológiájától, állapotától és a szükséges frissítések gyakoriságától függ.": "Website maintenance pricing depends on the website technology, condition and required update frequency.",
    "Rendszeres frissítés": "Regular updates",
    "Hibajavítás": "Bug fixes",
    "Tartalomfrissítés": "Content updates",
    "PageSpeed ellenőrzés": "PageSpeed checks",
    "Search Console ellenőrzés": "Search Console checks",
    "Technikai támogatás": "Technical support",
    "Az árak nettó összegek és tájékoztató jellegűek. Minden projekt egyedi — pontos ajánlatért vegye fel velünk a kapcsolatot.": "Prices are net amounts and indicative. Every project is unique — contact us for an exact quote.",
    "Komplex digitális megoldások — egy partnertől, teljes körű szakértelemmel.": "Comprehensive digital solutions — from one partner, with full expertise.",
    "Weboldal, amely dolgozik Önért": "A website that works for you",
    "Weboldal, amely dolgozik Önért.": "A website that works for you.",
    "Nem csak szép weboldalakat készítünk": "We do not just build beautiful websites",
    "Egy csapat, teljes lefedettség": "One team, complete coverage",
    "Ahelyett, hogy több különböző szolgáltatóval kellene kommunikálnia, több digitális feladatot egy helyen intézhet.": "Instead of coordinating several providers, you can manage multiple digital tasks in one place.",
    "Gyakran ismételt kérdések": "Frequently asked questions",
    "Mennyibe kerül egy weboldal készítés?": "How much does website development cost?",
    "Mennyi idő alatt készül el egy weboldal?": "How long does it take to build a website?",
    "Miért fontos a keresőoptimalizálás (SEO)?": "Why is search engine optimization (SEO) important?",
    "Mennyi idő alatt hoz eredményt a SEO?": "How long does SEO take to show results?",
    "Tudtok meglévő weboldalt is továbbfejleszteni?": "Can you improve an existing website?",
    "Ti intézitek a domaint és a tárhelyet is?": "Can you help with domain and hosting too?",
    "Mobiltelefonon is jól fog működni a weboldal?": "Will the website work well on mobile phones?",
    "Hogyan kezdjünk el együtt dolgozni?": "How do we start working together?",
    "Nem találtad meg a választ a kérdésedre? Vedd fel velünk a kapcsolatot e-mailben az": "Did not find the answer to your question? Contact us by email at",
    "címen, vagy kérj ingyenes konzultációt.": "or request a free consultation.",
    "Weboldal készítés vállalkozásoknak": "Website development for businesses",
    "Weboldal, amely dolgozik Önért: gyors, reszponzív és SEO-barát weboldal cégeknek, szolgáltatóknak és webshopot indító vállalkozásoknak. Nem csak szép weboldalakat készítünk, hanem üzleti célokat szolgáló digitális felületet.": "A website that works for you: a fast, responsive and SEO-friendly website for companies, service providers and businesses starting an online store. We do not just build beautiful websites; we create digital interfaces that serve business goals.",
    "Miért fontos egy modern weboldal?": "Why is a modern website important?",
    "Mit tartalmaz a weboldal készítés?": "What does website development include?",
    "Konverzió-fókuszált design": "Conversion-focused design",
    "Reszponzív design": "Responsive design",
    "Kiváló sebesség": "Excellent speed",
    "Biztonságos & SSL": "Secure & SSL",
    "SEO-ready alap": "SEO-ready foundation",
    "Többnyelvű támogatás": "Multilingual support",
    "Keresőoptimalizálás vállalkozásoknak": "Search engine optimization for businesses",
    "Technikai SEO, on-page optimalizálás, mélyreható kulcsszókutatás, AEO szemlélet és AI-alapú monitoring, hogy a weboldalad gyorsabb, érthetőbb és jobban feldolgozható legyen.": "Technical SEO, on-page optimization, in-depth keyword research, an AEO approach and AI-based monitoring to make your website faster, clearer and easier to process.",
    "Mi az a SEO?": "What is SEO?",
    "Miért fontos?": "Why is it important?",
    "SEO területek": "SEO areas",
    "Mennyi idő?": "How long does it take?",
    "AEO – megjelenés az AI-alapú keresésekben": "AEO – visibility in AI-powered search",
    "AI-alapú monitoring és havi riportok": "AI-based monitoring and monthly reports",
    "Search Console": "Search Console",
    "PageSpeed": "PageSpeed",
    "Kulcsszófigyelés": "Keyword tracking",
    "Tartalmi javaslatok": "Content recommendations",
    "AEO szemlélet": "AEO approach",
    "Technikai SEO": "Technical SEO",
    "Weboldal karbantartás és technikai támogatás": "Website maintenance and technical support",
    "Sebesség és karbantartás": "Speed and maintenance",
    "Blog": "Blog",
    "Weboldal készítés, keresőoptimalizálás, SEO, webshop és digitális fejlesztések témában osztunk meg gyakorlati, közérthető cikkeket.": "We share practical, easy-to-understand articles about website development, search engine optimization, SEO, e-commerce and digital development.",
    "Mennyibe kerül egy weboldal készítés 2026-ban?": "How much does website development cost in 2026?",
    "Miért lassú a weboldalam? 10 gyakori hiba": "Why is my website slow? 10 common mistakes",
    "Miért lassú a weboldalam? 10 gyakori hiba és megoldásuk": "Why is my website slow? 10 common mistakes and their solutions",
    "Átlátható útmutató vállalkozóknak: mitől függ a weboldal készítés ár, milyen költségekkel érdemes számolni, és mire figyelj ajánlatkérés előtt.": "A transparent guide for business owners: what affects website development pricing, what costs to expect, and what to check before requesting a quote.",
    "Gyakorlati útmutató arról, mi lassíthatja a weboldaladat, hogyan ellenőrizheted a problémákat, és milyen fejlesztések javíthatják a betöltési sebességet.": "A practical guide to what can slow down your website, how to check issues, and which improvements can help loading speed.",
    "Ha vállalkozóként új weboldal készítésén gondolkodsz, valószínűleg az egyik első kérdésed az, hogy mennyibe kerül egy weboldal 2026-ban. Erre azonban nincs egyetlen, minden projektre érvényes válasz. Ahogyan egy ház vagy egy autó ára is attól függ, hogy milyen igényeid vannak, úgy a weboldal készítés ára is számos tényezőtől függ.": "If you are a business owner planning a new website, one of your first questions is probably how much a website costs in 2026. There is no single answer that fits every project. Just like the price of a house or car depends on your needs, website development pricing depends on many factors.",
    "Ha egy weboldal lassan tölt be, az nem csupán a látogatók türelmét teszi próbára. A betöltési sebesség hatással lehet a felhasználói élményre, a Google keresési helyezésekre és végső soron arra is, hogy egy érdeklődőből ügyfél lesz-e.": "If a website loads slowly, it does more than test visitors' patience. Loading speed can affect user experience, Google search visibility and ultimately whether an interested visitor becomes a customer.",
    "SEO vagy Google Ads? Melyiket válasszam?": "SEO or Google Ads? Which should you choose?",
    "Mikor érdemes új weboldalt készíteni?": "When is it worth building a new website?",
    "Mire figyelj weboldal készítő választásakor?": "What to look for when choosing a website developer?",
    "Aktív cikk": "Active article",
    "Előkészítve": "Prepared",
    "Weboldal készítés ár": "Website development price",
    "Weboldal készítés árak": "Website development prices",
    "Weboldal sebesség": "Website speed",
    "Teljesítmény": "Performance",
    "Olvasd el": "Read article",
    "Tovább olvasom": "Read more",
    "Mennyibe kerül egy bemutatkozó weboldal?": "How much does a presentation website cost?",
    "Mennyibe kerül egy szolgáltatói weboldal?": "How much does a service website cost?",
    "Mennyibe kerül egy időpontfoglalós weboldal?": "How much does an appointment booking website cost?",
    "Mennyibe kerül egy webshop készítése?": "How much does building an online store cost?",
    "Mennyibe kerül egy egyedi fejlesztés?": "How much does custom development cost?",
    "Összefoglalás": "Summary",
    "Gyakori hiba": "Common mistake",
    "Jó tudni": "Good to know",
    "Tipp": "Tip",
    "Élő oldal megnyitása →": "Open live website →",
    "Referenciáink": "Our references",
    "Munkáink": "Our work",
    "Amit átadunk": "What we deliver",
    "Nem csak egy kész oldalt, hanem működő digitális alapot": "Not just a finished website, but a working digital foundation",
    "Reszponzív megjelenés": "Responsive layout",
    "Egyedi arculati hangulat": "Custom brand atmosphere",
    "Keresőbarát alapok": "Search-friendly foundations",
    "Bővíthető rendszer": "Expandable system",
    "Szeretne hasonló weboldalt?": "Would you like a similar website?",
    "DonniQ": "DonniQ",
    "Henka": "Henka"
  }
};

Object.assign(staticTextTranslations.en, {
  // Service hub and detail pages added after the original i18n setup.
  "Weboldal készítés, keresőoptimalizálás és karbantartás": "Website development, search engine optimization and maintenance",
  "Komplex digitális megoldások — egy partnertől, teljes körű szakértelemmel. Gyors, SEO-barát weboldalak, átgondolt keresőoptimalizálás és megbízható technikai támogatás vállalkozásoknak.": "Comprehensive digital solutions from one partner, with full expertise. Fast, SEO-friendly websites, thoughtful search engine optimization and reliable technical support for businesses.",
  "Ahelyett, hogy több különböző szolgáltatóval kellene kommunikálnod, több digitális feladatot egy helyen intézhetsz. A részletes tartalmak külön aloldalakon érhetők el, itt gyors áttekintést kapsz arról, miben tudunk segíteni.": "Instead of coordinating several providers, you can manage multiple digital tasks in one place. Detailed content is available on separate subpages; here you get a quick overview of how we can help.",
  "Egyedi webdesign és webfejlesztés": "Custom web design and development",
  "Mobilbarát, gyors weboldal": "Mobile-friendly, fast website",
  "Átlátható folyamat az ötlettől az élesítésig": "Transparent process from idea to launch",
  "Irányadóan 150 000 Ft-tól": "Indicatively from HUF 150,000",
  "Technikai SEO, mélyreható kulcsszókutatás, on-page optimalizálás és tartalmi javaslatok, hogy a weboldal ne csak szép legyen, hanem jobban értelmezhető és megtalálható is.": "Technical SEO, in-depth keyword research, on-page optimization and content recommendations so the website is not only attractive, but easier to understand and find.",
  "SEO audit és technikai javítások": "SEO audit and technical fixes",
  "Kulcsszókutatás és tartalomoptimalizálás": "Keyword research and content optimization",
  "AI-alapú monitoring és havi riport": "AI-based monitoring and monthly report",
  "Basic és Growth havi csomagok": "Basic and Growth monthly packages",
  "Rendszeres frissítések, hibajavítás, tartalomfrissítés, PageSpeed optimalizálás és technikai támogatás meglévő weboldalakhoz.": "Regular updates, bug fixes, content updates, PageSpeed optimization and technical support for existing websites.",
  "Biztonsági és technikai ellenőrzés": "Security and technical checks",
  "Tartalmi módosítások és hibajavítás": "Content changes and bug fixes",
  "Search Console és teljesítményfigyelés": "Search Console and performance monitoring",
  "Havi vagy eseti karbantartás": "Monthly or ad hoc maintenance",
  "Nem csomagot erőltetünk, hanem jó megoldást keresünk.": "We do not force packages; we look for the right solution.",
  "Az árak tájékoztató jellegűek. A pontos ajánlatot az igények, funkciók, határidők és a meglévő weboldal állapota alapján adjuk meg.": "Prices are indicative. The exact quote depends on needs, features, deadlines and the condition of the existing website.",
  "Hibajavítás és technikai támogatás": "Bug fixes and technical support",
  "A karbantartás lehet havi vagy eseti. A díj a weboldal technológiájától, állapotától és a szükséges frissítések gyakoriságától függ.": "Maintenance can be monthly or ad hoc. The fee depends on the website technology, condition and required update frequency.",
  "A leggyakoribb kérdések, amelyeket ügyfeleink feltesznek, őszinte és egyenes válaszokkal.": "The most common questions our clients ask, with clear and honest answers.",
  "Készen állsz fejleszteni az online jelenléted?": "Ready to improve your online presence?",
  "Kérj ingyenes konzultációt, és megnézzük, melyik szolgáltatás adja a legtöbb értéket.": "Request a free consultation and we will see which service provides the most value.",
  "Részletek": "Details",

  "Weboldal készítés vállalkozásoknak": "Website development for businesses",
  "Weboldal, amely dolgozik Önért: gyors, reszponzív és SEO-barát weboldal cégeknek, szolgáltatóknak és webshopot indító vállalkozásoknak. Nem csak szép weboldalakat készítünk, hanem üzleti célokat szolgáló digitális felületet.": "A website that works for you: a fast, responsive and SEO-friendly website for companies, service providers and businesses starting an online store. We do not just build beautiful websites; we create a digital interface that serves business goals.",
  "Milyen oldalakat készítünk?": "What types of websites do we build?",
  "Technikai alapok": "Technical foundations",
  "Fejlesztési folyamat": "Development process",
  "Árak": "Prices",
  "Egy céges weboldal ma már nem online névjegy, hanem az első benyomás, az értékesítés előkészítése és a bizalomépítés egyik fontos pontja. A jó weboldal gyorsan betölt, mobilon is könnyen használható, világosan vezeti a látogatót, és támogatja a Google-ben való megjelenést.": "A business website is no longer just an online business card; it is often the first impression, a sales preparation tool and an important trust-building point. A good website loads quickly, is easy to use on mobile, guides visitors clearly and supports Google visibility.",
  "A West Style weboldal készítés során a design, a webfejlesztés, a sebesség és a keresőoptimalizálás együtt készül. A cél egy olyan weboldal, amely segíti az érdeklődők megszerzését, támogatja a kapcsolatfelvételt, és hosszú távon is karbantartható alapot ad.": "At West Style, design, web development, speed and search engine optimization are planned together. The goal is a website that helps attract enquiries, supports contact and provides a maintainable long-term foundation.",
  "Céges bemutatkozó weboldal": "Company presentation website",
  "Letisztult, bizalomépítő céges weboldal szolgáltatások, referenciák és kapcsolatfelvételi pontok bemutatására.": "A clean, trust-building company website for presenting services, references and contact points.",
  "Szolgáltatói weboldal": "Service provider website",
  "Olyan struktúra, amely érthetően mutatja be az ajánlatot, segíti az ajánlatkérést és támogatja a lokális vagy országos SEO-t.": "A structure that presents the offer clearly, supports quote requests and helps local or national SEO.",
  "Egyedi weboldal": "Custom website",
  "Speciális funkciók, egyedi landing oldalak, többnyelvű megoldások vagy összetettebb tartalmi felépítés esetén.": "For special features, custom landing pages, multilingual solutions or more complex content structures.",
  "Meglévő oldal továbbfejlesztése": "Improving an existing website",
  "Ha az alapok jók, teljes újrakezdés helyett designfrissítéssel, sebességjavítással és technikai SEO-val is sokat lehet nyerni.": "If the foundations are good, a design refresh, speed improvement and technical SEO can often achieve a lot without starting from scratch.",
  "Webshop készítés": "Webshop development",
  "A webshop készítés nem külön szolgáltatásként, hanem a weboldal készítés részeként jelenik meg. Webshopnál különösen fontos a gyors betöltés, az átlátható termékstruktúra, a mobilos vásárlási élmény, a biztonságos fizetési folyamat és a SEO-barát kategóriafelépítés.": "Webshop development is handled as part of website development. For online stores, fast loading, clear product structure, mobile shopping experience, secure payment flow and SEO-friendly category structure are especially important.",
  "Induló webshopnál segítünk a technikai alapok, a termékoldal-struktúra és a keresőbarát tartalom kialakításában is.": "For new webshops, we also help set up the technical foundations, product page structure and search-friendly content.",
  "Reszponzív és SEO-barát technikai alapok": "Responsive and SEO-friendly technical foundations",
  "A weboldal mobilon, tableten és desktopon is átlátható, kényelmesen használható felépítést kap.": "The website gets a clear, comfortable structure on mobile, tablet and desktop.",
  "Optimalizált képek, letisztult kód és PageSpeed szemlélet támogatja a gyorsabb betöltést és a jobb felhasználói élményt.": "Optimized images, clean code and a PageSpeed-focused approach support faster loading and a better user experience.",
  "HTTPS működés, alapvető biztonsági beállítások és technikai átadás segíti a megbízható indulást.": "HTTPS, basic security settings and technical handover support a reliable launch.",
  "Keresőbarát címszerkezet, meta adatok, canonical beállítások és strukturált adatok adnak stabil technikai alapot.": "Search-friendly heading structure, metadata, canonical settings and structured data provide a stable technical foundation.",
  "A felépítés nem csak látványos: segíti az ajánlatkérést, a kapcsolatfelvételt és az üzleti célokhoz illeszkedő felhasználói utat.": "The structure is not only visually appealing: it supports quote requests, contact and a user journey aligned with business goals.",
  "Igény esetén többnyelvű oldalstruktúra is kialakítható, hogy a weboldal később bővíthető maradjon.": "If needed, a multilingual page structure can be built so the website remains expandable later.",
  "A cél nem csak az, hogy az oldal jól nézzen ki, hanem az is, hogy könnyen mérhető, karbantartható és fejleszthető legyen.": "The goal is not only for the site to look good, but also to be easy to measure, maintain and improve.",
  "Átbeszéljük a célokat, funkciókat, célcsoportot és a szükséges tartalmakat.": "We discuss goals, features, target audience and required content.",
  "2. Struktúra és design": "2. Structure and design",
  "Megtervezzük az oldalfelépítést, a fő üzeneteket és a vizuális irányt.": "We plan the page structure, main messages and visual direction.",
  "3. Fejlesztés": "3. Development",
  "Elkészül a gyors, reszponzív és SEO-barát weboldal.": "The fast, responsive and SEO-friendly website is built.",
  "4. Tesztelés és élesítés": "4. Testing and launch",
  "Mobil, desktop, űrlap, sebesség és alap SEO ellenőrzés után publikáljuk az oldalt.": "After mobile, desktop, form, speed and basic SEO checks, we publish the website.",
  "Weboldal készítés árak": "Website development prices",
  "Az ár minden esetben a projekt összetettségétől függ. Egy egyszerű céges weboldal jellemzően kedvezőbb, mint egy több aloldalas, egyedi funkciókat vagy webshopot tartalmazó rendszer.": "The price always depends on project complexity. A simple company website is usually more affordable than a multi-page system with custom features or webshop functionality.",
  "Irányadó kezdő ár:": "Indicative starting price:",
  "150 000 Ft-tól. Pontos ajánlatot rövid konzultáció után adunk.": "from HUF 150,000. We provide an exact quote after a short consultation.",
  "Nézzük meg, milyen weboldal szolgálná legjobban a vállalkozásod céljait.": "Let us see what kind of website would best serve your business goals.",

  "Keresőoptimalizálás vállalkozásoknak": "Search engine optimization for businesses",
  "Mi az a keresőoptimalizálás?": "What is search engine optimization?",
  "A keresőoptimalizálás célja, hogy a weboldal technikailag, tartalmilag és szerkezetileg is érthető legyen a Google és a felhasználók számára. A jó SEO nem trükk, hanem következetes munka: gyors weboldal, tiszta struktúra, releváns tartalom és jól mérhető fejlesztések.": "The goal of search engine optimization is to make the website technically, structurally and content-wise understandable for Google and users. Good SEO is not a trick, but consistent work: fast website, clean structure, relevant content and measurable improvements.",
  "Miért fontos a vállalkozásoknak?": "Why is it important for businesses?",
  "A Google-ből érkező látogatók gyakran már konkrét problémára keresnek megoldást. Ha a weboldal jól felépített és releváns keresésekre is értelmezhető, javíthatja a keresőben való láthatóságot, miközben hosszú távon csökkentheti a kizárólag fizetett hirdetésekre épülő működést.": "Visitors arriving from Google often already search for a solution to a specific problem. If the website is well structured and understandable for relevant searches, it can improve search visibility while reducing long-term dependence on paid ads.",
  "A cél a mérhető, hosszú távú javulás. A pontos eredmény függ a piac versenyétől, a weboldal állapotától és a rendszeres tartalmi fejlesztésektől.": "The goal is measurable, long-term improvement. The exact result depends on market competition, the website's condition and regular content development.",
  "Miben segítünk?": "How can we help?",
  "Indexelhetőség, sebesség, strukturált adatok, canonical, sitemap, belső linkelés és technikai hibák javítása.": "Indexability, speed, structured data, canonical settings, sitemap, internal linking and fixing technical issues.",
  "On-page SEO": "On-page SEO",
  "Címek, meta leírások, H1-H2 struktúra, tartalmi hierarchia és keresési szándékhoz igazított oldalfelépítés.": "Titles, meta descriptions, H1-H2 structure, content hierarchy and page structure aligned with search intent.",
  "Mélyreható kulcsszókutatás": "In-depth keyword research",
  "Megnézzük, milyen kifejezésekre keresnek az ügyfeleid, mennyire erős a verseny, és ezekből építünk logikus tartalmi irányt.": "We review what terms your customers search for, how strong the competition is, and build a logical content direction from this.",
  "A meglévő szövegeket pontosítjuk, bővítjük és keresőbarátabbá tesszük, miközben természetesek, szakmaiak és emberiek maradnak.": "We refine, expand and make existing texts more search-friendly while keeping them natural, professional and human.",
  "Adatok alapján figyeljük, milyen tartalmi és technikai irányok működhetnek a piacon, majd ezekből fejlesztési javaslatokat készítünk.": "Based on data, we monitor which content and technical directions may work in the market and turn these into improvement recommendations.",
  "Átlátható riportokkal követjük a változásokat, és javaslatokat adunk a további fejlesztésre.": "We track changes with transparent reports and provide recommendations for further improvement.",
  "A keresés folyamatosan változik: ma már nemcsak a Google hagyományos találati listájában fontos megjelenni, hanem az AI-alapú keresők és válaszmotorok számára is érthetővé kell tenni a weboldal tartalmát. Ezt nevezzük AEO-nak, vagyis Answer Engine Optimizationnek.": "Search is constantly changing: today it is not only important to appear in Google's traditional results, but also to make website content understandable for AI-based search and answer engines. This is called AEO, or Answer Engine Optimization.",
  "Az AEO célja, hogy a weboldal tartalma egyértelmű, jól strukturált és könnyen feldolgozható legyen olyan rendszerek számára is, amelyek közvetlen válaszokat adnak a felhasználóknak. Ide tartozhatnak például az AI keresők, chatbotok és egyéb intelligens keresési megoldások.": "The goal of AEO is to make website content clear, well structured and easy to process for systems that provide direct answers to users, such as AI search tools, chatbots and other intelligent search solutions.",
  "A gyakorlatban ez nem a hagyományos SEO kiváltását jelenti, hanem annak kiegészítését. A jól felépített címstruktúra, a pontos válaszok, a gyakran ismételt kérdések, a strukturált adatok, a belső linkelés és az egyértelmű tartalom mind segíthetnek abban, hogy a weboldal könnyebben értelmezhető legyen a keresőmotorok és az AI-alapú rendszerek számára.": "In practice, this does not replace traditional SEO, but complements it. A clear heading structure, precise answers, FAQs, structured data, internal linking and clear content can all help the website become easier for search engines and AI-based systems to understand.",
  "Nálunk a keresőoptimalizálás része lehet az AEO szemléletű tartalomfejlesztés is: olyan szövegeket, oldalszerkezetet és technikai alapokat alakítunk ki, amelyek a modern keresési környezetben is jobb esélyt adhatnak a láthatóságra.": "Our SEO work can include AEO-focused content development: we create texts, page structure and technical foundations that may give better chances for visibility in the modern search environment.",
  "Az AI monitoring nem önálló fő szolgáltatás, hanem hasznos kiegészítés: segít figyelni a teljesítményváltozásokat, a tartalmi lehetőségeket és a technikai jelzéseket. A havi riportokban nem csak számokat adunk, hanem érthető javaslatokat is.": "AI monitoring is not a standalone main service, but a useful add-on: it helps track performance changes, content opportunities and technical signals. Monthly reports include not only numbers, but clear recommendations as well.",
  "Mennyi idő alatt látható eredmény?": "How long does it take to see results?",
  "A technikai SEO javítások hatása sokszor néhány héten belül érzékelhető, de a jelentősebb keresőbeli láthatóság javulása általában több hónapos folyamat. Az időtáv függ a piac versenyétől, a weboldal jelenlegi állapotától és attól, mennyi tartalmi fejlesztésre van szükség.": "The effect of technical SEO fixes can often be noticeable within a few weeks, but more significant search visibility improvement is usually a multi-month process. The timeline depends on market competition, the current website condition and how much content development is needed.",
  "Kérj SEO konzultációt": "Request an SEO consultation",
  "Megnézzük, milyen technikai és tartalmi lépések támogathatják legjobban a keresőben való láthatóságot.": "We review which technical and content steps can best support search visibility.",

  "Weboldal karbantartás és technikai támogatás": "Website maintenance and technical support",
  "Rendszeres weboldal frissítés, hibajavítás, tartalomfrissítés, PageSpeed optimalizálás és Search Console ellenőrzés, hogy a weboldalad stabilan működjön.": "Regular website updates, bug fixes, content updates, PageSpeed optimization and Search Console checks so your website works reliably.",
  "Mit tartalmazhat?": "What can it include?",
  "Kinek ajánlott?": "Who is it for?",
  "Karbantartási lehetőségek": "Maintenance options",
  "Miért fontos a rendszeres weboldal karbantartás?": "Why is regular website maintenance important?",
  "Egy weboldal akkor működik jól hosszú távon, ha nem csak elkészül, hanem rendszeresen frissül és ellenőrzés alatt marad. A hibás űrlapok, lassuló betöltés, elavult tartalom vagy technikai SEO problémák közvetlenül ronthatják a felhasználói élményt és az ajánlatkérések számát.": "A website works well long term when it is not only built, but also regularly updated and monitored. Broken forms, slower loading, outdated content or technical SEO problems can directly hurt user experience and the number of quote requests.",
  "A weboldal karbantartás célja, hogy a weboldal üzembiztos, gyors, biztonságos és naprakész maradjon. A rendszeres frissítés, a PageSpeed ellenőrzés, a Search Console jelzések áttekintése és a technikai támogatás együtt segíti a biztonságos működést.": "The goal of website maintenance is to keep the website reliable, fast, secure and up to date. Regular updates, PageSpeed checks, Search Console signal reviews and technical support together help maintain safe operation.",
  "Mit tartalmazhat a karbantartás?": "What can maintenance include?",
  "Biztonsági frissítések": "Security updates",
  "Technikai ellenőrzések, mentések és alapvető biztonsági beállítások áttekintése.": "Technical checks, backups and review of basic security settings.",
  "Űrlapok, linkek, megjelenési hibák, mobilos problémák és kisebb működési gondok javítása.": "Fixing forms, links, display issues, mobile problems and smaller functional errors.",
  "Tartalmi módosítások": "Content changes",
  "Szövegek, képek, szolgáltatásleírások, árak vagy kapcsolati információk frissítése.": "Updating texts, images, service descriptions, prices or contact information.",
  "Teljesítményoptimalizálás": "Performance optimization",
  "PageSpeed jelzések, képméretek, CSS/JS működés és betöltési problémák óvatos javítása.": "Careful improvements to PageSpeed signals, image sizes, CSS/JS behavior and loading issues.",
  "SEO ellenőrzés": "SEO check",
  "Search Console jelzések, indexelési hibák, meta adatok és sitemap állapot áttekintése.": "Review of Search Console signals, indexing issues, metadata and sitemap status.",
  "Gyors segítség kisebb módosításokhoz, kérdésekhez és váratlan hibákhoz.": "Fast help with smaller changes, questions and unexpected errors.",
  "Weboldal karbantartást azoknak a vállalkozásoknak ajánlunk, akiknek fontos, hogy az oldaluk naprakész és megbízható maradjon, de nem szeretnének minden kisebb technikai feladattal külön fejlesztőt keresni.": "Website maintenance is recommended for businesses that want their site to stay up to date and reliable, without having to find a developer for every smaller technical task.",
  "Céges weboldallal rendelkező vállalkozásoknak": "For businesses with a company website",
  "Szolgáltatói oldalaknak és landing oldalaknak": "For service pages and landing pages",
  "Webshopoknak, ahol fontos a folyamatos működés": "For webshops where continuous operation matters",
  "Olyan oldalaknak, ahol rendszeresen változik a tartalom": "For websites where content changes regularly",
  "Irányadó karbantartási lehetőségek": "Indicative maintenance options",
  "A karbantartás lehet eseti vagy havi rendszerességű. A pontos díj attól függ, milyen technológiával készült a weboldal, mennyi tartalmi frissítés várható, és szükség van-e rendszeres SEO vagy PageSpeed ellenőrzésre.": "Maintenance can be ad hoc or monthly. The exact fee depends on the website technology, expected content updates and whether regular SEO or PageSpeed checks are needed.",
  "A legtöbb esetben rövid állapotfelmérés után javaslunk havi karbantartási keretet vagy eseti ajánlatot.": "In most cases, after a short review we recommend a monthly maintenance framework or an ad hoc quote.",
  "Kérj karbantartási ajánlatot": "Request a maintenance quote",
  "Átnézzük a weboldalad állapotát, és javaslunk egy reális karbantartási megoldást.": "We review your website's condition and recommend a realistic maintenance solution.",

  "Kapcsolódó cikkek": "Related articles",
  "Miért lassú a weboldalam? 10 gyakori hiba": "Why is my website slow? 10 common mistakes",
  "Sebesség és karbantartás": "Speed and maintenance",
  "Technikai SEO, on-page optimalizálás, mélyreható kulcsszókutatás, AEO szemlélet és AI-alapú monitoring, hogy a weboldalad gyorsabb, érthetőbb és jobban feldolgozható legyen.": "Technical SEO, on-page optimization, in-depth keyword research, an AEO approach and AI-based monitoring so your website becomes faster, clearer and easier to process.",
  "Egy egyszerűbb céges weboldal általában 2-4 hét alatt elkészül, míg egy webshop vagy egyedi fejlesztés ennél hosszabb időt vehet igénybe.": "A simpler company website is usually ready within 2-4 weeks, while a webshop or custom development may take longer.",
  "A fejlesztés megkezdése előtt minden esetben egyeztetjük a várható határidőt, így pontosan tudni fogod, mikor készül el a weboldalad.": "Before development starts, we always agree on the expected deadline, so you will know exactly when your website will be ready.",
  "A weboldal készítés ára mindig az adott projekt igényeitől függ. Egy egyszerű céges bemutatkozó weboldal természetesen kevesebbe kerül, mint egy webshop vagy egyedi fejlesztésű rendszer.": "Website development pricing always depends on the needs of the specific project. A simple company presentation website naturally costs less than a webshop or custom-built system.",
  "Minden projekt előtt átbeszéljük az elképzeléseidet, felmérjük az igényeket, majd ezek alapján készítünk egy személyre szabott, részletes árajánlatot. Nálunk nincsenek rejtett költségek, minden díjról előre tájékoztatunk.": "Before every project, we discuss your ideas, assess the needs and prepare a personalized, detailed quote. There are no hidden costs; we inform you about every fee in advance.",
  "A keresőoptimalizálás (SEO) segít abban, hogy a weboldalad könnyebben megtalálható legyen a Google keresőjében. Egy megfelelően felépített weboldal nemcsak szép, hanem gyors, technikailag is rendben van, és hosszú távon több látogatót, illetve több érdeklődőt hozhat a vállalkozásod számára.": "Search engine optimization (SEO) helps your website become easier to find in Google. A properly built website is not only attractive, but fast, technically sound and can bring more visitors and enquiries over the long term.",
  "A jó SEO nem csak kulcsszavakról szól. Fontos a weboldal sebessége, mobilbarát működése, technikai felépítése, biztonsága és a minőségi tartalom is.": "Good SEO is not only about keywords. Website speed, mobile-friendly behavior, technical structure, security and quality content also matter.",
  "A keresőoptimalizálás hosszú távú folyamat, ezért az eredmények nem egyik napról a másikra jelennek meg. Az, hogy milyen gyorsan látható javulás, függ a piac versenyétől, a weboldal jelenlegi állapotától és a kitűzött céloktól.": "Search engine optimization is a long-term process, so results do not appear overnight. How quickly improvement becomes visible depends on market competition, the website's current condition and the goals.",
  "A technikai optimalizálások hatása sok esetben már néhány héten belül érzékelhető, míg a jelentősebb helyezésjavulás általában több hónapot vesz igénybe.": "The effect of technical optimizations can often be felt within a few weeks, while more significant ranking improvement usually takes several months.",
  "Igen. Nem minden esetben szükséges teljesen új weboldalt készíteni.": "Yes. It is not always necessary to build a completely new website.",
  "Ha a jelenlegi weboldalad megfelelő alapokkal rendelkezik, sokszor elegendő egy designfrissítés, a sebesség optimalizálása, a mobilos megjelenés javítása vagy a technikai SEO fejlesztése. Minden esetben felmérjük a weboldal állapotát, és azt a megoldást javasoljuk, amely hosszú távon a legjobb választás.": "If your current website has solid foundations, a design refresh, speed optimization, mobile improvement or technical SEO work may often be enough. We always assess the website's condition and recommend the solution that makes the most sense long term.",
  "Igen. Igény esetén segítünk a domain regisztrációjában, a tárhely kiválasztásában és a szükséges technikai beállításokban is.": "Yes. If needed, we help with domain registration, choosing hosting and the required technical settings.",
  "A domain és a tárhely díjai minden esetben az ügyfelet terhelik, mivel ezeket külső szolgáltatók biztosítják. Természetesen segítünk a megfelelő szolgáltató kiválasztásában és a teljes beállítási folyamatban.": "Domain and hosting fees are always paid by the client, because these are provided by external providers. Of course, we help choose the right provider and support the full setup process.",
  "Igen. Minden általunk készített weboldal teljesen reszponzív, vagyis számítógépen, tableten és mobiltelefonon is megfelelően jelenik meg.": "Yes. Every website we build is fully responsive, meaning it displays properly on computers, tablets and mobile phones.",
  "A fejlesztés során kiemelt figyelmet fordítunk arra, hogy a weboldal gyors, könnyen kezelhető és minden eszközön kiváló felhasználói élményt nyújtson.": "During development, we pay close attention to making the website fast, easy to use and pleasant on every device.",
  "Az együttműködés egy ingyenes, 30 perces konzultációval kezdődik, ahol átbeszéljük a céljaidat, az elképzeléseidet és a projekt részleteit. Ezt követően egy személyre szabott, részletes árajánlatot készítünk.": "Collaboration starts with a free 30-minute consultation where we discuss your goals, ideas and project details. After that, we prepare a personalized, detailed quote.",
  "A konzultáció semmilyen kötelezettséggel nem jár, és csak akkor fizetsz, ha minden részletben megállapodunk, és elindul a közös munka. Ha szeretnél ajánlatot kérni vagy kérdésed van, írj nekünk üzenetet, küldj e-mailt vagy keress minket telefonon - szívesen segítünk.": "The consultation comes with no obligation, and you only pay if we agree on every detail and the work starts. If you would like a quote or have a question, send us a message, email us or call us - we are happy to help.",
  "Nem találtad meg a választ a kérdésedre? Vedd fel velünk a kapcsolatot e-mailben az": "Did not find the answer to your question? Contact us by email at",
  "címen, vagy kérj ingyenes konzultációt.": "or request a free consultation.",
});

const staticAttributeTranslations = {
  en: {
    "Nyelvváltás": "Language switch",
    "Menü megnyitása": "Open menu",
    "DonniQ weboldal megnyitása": "Open DonniQ website",
    "Henka weboldal megnyitása": "Open Henka website",
    "Blogcikk navigáció": "Blog article navigation"
  }
};

const originalTextNodes = new Map();
const originalAttributes = new Map();
let originalStaticTextCaptured = false;

function getTextTranslation(lang, text) {
  if (lang === 'hu') return text;
  return staticTextTranslations[lang]?.[text] || text;
}

function shouldSkipStaticTextNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (parent.closest('[data-i18n]')) return true;
  return Boolean(parent.closest('script, style, noscript, textarea'));
}

function captureOriginalStaticText() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (shouldSkipStaticTextNode(node)) continue;
    if (node.nodeValue.trim() && !originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }
  }

  document.querySelectorAll('[aria-label], [title], [alt], [placeholder]').forEach(el => {
    const values = originalAttributes.get(el) || {};
    ['aria-label', 'title', 'alt', 'placeholder'].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      if (attr === 'placeholder' && el.hasAttribute('data-i18n-placeholder')) return;
      if (values[attr] === undefined) values[attr] = el.getAttribute(attr);
    });
    if (Object.keys(values).length) originalAttributes.set(el, values);
  });
  originalStaticTextCaptured = true;
}

function applyStaticTextTranslations(lang) {
  captureOriginalStaticText();
  originalTextNodes.forEach((original, node) => {
    if (!node.isConnected || shouldSkipStaticTextNode(node)) return;
    const trimmed = original.trim();
    const translated = getTextTranslation(lang, trimmed);
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + translated + trailing;
  });

  originalAttributes.forEach((attrs, el) => {
    if (!el.isConnected) return;
    Object.entries(attrs).forEach(([attr, original]) => {
      const translated = lang === 'hu'
        ? original
        : (staticAttributeTranslations[lang]?.[original] || staticTextTranslations[lang]?.[original] || original);
      el.setAttribute(attr, translated);
    });
  });
}

// ===== STATE =====
let currentLang = localStorage.getItem('ws-lang') || 'hu';
const I18N_ATTRIBUTE_MAP = {
  'data-i18n-placeholder': 'placeholder',
  'data-i18n-alt': 'alt',
  'data-i18n-title': 'title',
  'data-i18n-aria-label': 'aria-label'
};
let i18nObserver = null;
let i18nObserverQueued = false;
let i18nApplying = false;

// ===== APPLY TRANSLATIONS =====
function applyLang(lang) {
  i18nApplying = true;
  currentLang = lang;
  localStorage.setItem('ws-lang', lang);
  document.documentElement.lang = lang;

  const titleMap = {
    'index.html':        { hu: 'West Style Kft. — Digitális Megoldások', en: 'West Style Kft. — Digital Solutions' },
    'szolgaltatasok.html':{ hu: 'Szolgáltatások — West Style Kft.', en: 'Services — West Style Kft.' },
    'weboldal-keszites.html':{ hu: 'Weboldal készítés vállalkozásoknak | West Style', en: 'Website Development for Businesses | West Style' },
    'keresooptimalizalas.html':{ hu: 'Keresőoptimalizálás vállalkozásoknak | West Style', en: 'Search Engine Optimization for Businesses | West Style' },
    'weboldal-karbantartas.html':{ hu: 'Weboldal karbantartás és technikai támogatás | West Style', en: 'Website Maintenance and Technical Support | West Style' },
    'rolunk.html':        { hu: 'Rólunk — West Style Kft.', en: 'About Us — West Style Kft.' },
    'referenciak.html':   { hu: 'Referenciák — West Style Kft.', en: 'References — West Style Kft.' },
    'blog.html':          { hu: 'Blog — West Style Kft.', en: 'Blog — West Style Kft.' },
    'weboldal-keszites-arak-2026.html': { hu: 'Weboldal készítés ár 2026-ban – Mennyibe kerül egy weboldal?', en: 'Website Development Price in 2026 – How Much Does a Website Cost?' },
    'miert-lassu-a-weboldalam.html': { hu: 'Miért lassú a weboldalam? 10 gyakori hiba és megoldásuk', en: 'Why Is My Website Slow? 10 Common Mistakes and Their Solutions' },
    'minta-cikk.html': { hu: 'Blog cikk sablon — West Style Kft.', en: 'Blog Article Template — West Style Kft.' },
    'aszf.html':          { hu: 'ÁSZF — West Style Kft.', en: 'Terms and Conditions — West Style Kft.' },
    'adatvedelem.html':   { hu: 'Adatvédelmi tájékoztató — West Style Kft.', en: 'Privacy Policy — West Style Kft.' },
    'kapcsolat.html':    { hu: 'Kapcsolat — West Style Kft.', en: 'Contact — West Style Kft.' },
  };
  const page = location.pathname.split('/').pop() || 'index.html';
  if (titleMap[page]) document.title = titleMap[page][lang];

  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  Object.entries(I18N_ATTRIBUTE_MAP).forEach(([dataAttr, targetAttr]) => {
    document.querySelectorAll(`[${dataAttr}]`).forEach(el => {
      const key = el.getAttribute(dataAttr);
      if (t[key] !== undefined) el.setAttribute(targetAttr, t[key]);
    });
  });

  applyStaticTextTranslations(lang);

  document.getElementById('langHU')?.classList.toggle('active', lang === 'hu');
  document.getElementById('langEN')?.classList.toggle('active', lang === 'en');
  if (typeof refreshCookieConsentText === 'function') refreshCookieConsentText();
  window.setTimeout(() => { i18nApplying = false; }, 0);
}

function startI18nObserver() {
  if (i18nObserver || !document.body) return;
  i18nObserver = new MutationObserver(() => {
    if (i18nApplying) return;
    if (i18nObserverQueued) return;
    i18nObserverQueued = true;
    requestAnimationFrame(() => {
      i18nObserverQueued = false;
      applyLang(currentLang);
    });
  });
  i18nObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

// ===== LANG TOGGLE =====
document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLang(currentLang === 'hu' ? 'en' : 'hu');
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
let navbarScrollTicking = false;
function updateNavbarState() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  navbarScrollTicking = false;
}
updateNavbarState();
window.addEventListener('scroll', () => {
  if (navbarScrollTicking) return;
  navbarScrollTicking = true;
  requestAnimationFrame(updateNavbarState);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks?.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(navLinks?.classList.contains('open')));
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===== FADE-IN =====
function initFadeInAnimations() {
  const fadeEls = document.querySelectorAll('.fade-in');
  if (!fadeEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;

      setTimeout(() => {
        entry.target.classList.add('visible');
        // animate expertise bars when their parent .exp-item becomes visible
        const fill = entry.target.querySelector('.exp-fill');
        if (fill) {
          const targetW = fill.style.width;
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = targetW; }, 50);
        }
      }, i * 60);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

  fadeEls.forEach(el => observer.observe(el));
}

// ===== FAQ =====
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== CONTACT FORMS =====
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/info@weststylee.hu';
const MIN_FORM_FILL_TIME = 2500;

document.querySelectorAll('form').forEach(form => {
  form.dataset.formStartedAt = String(Date.now());
});

function collectFormData(form) {
  const data = {};
  new FormData(form).forEach((v, k) => { data[k] = v; });
  return data;
}

function isLikelySpam(form, data) {
  const startedAt = Number(form.dataset.formStartedAt || Date.now());
  const filledTooFast = Date.now() - startedAt < MIN_FORM_FILL_TIME;
  return Boolean((data._honey || '').trim()) || filledTooFast;
}

function setSubmitLoading(btn, loading) {
  btn.disabled = loading;
  btn.textContent = loading
    ? translations[currentLang]['form.sending']
    : (btn.dataset.origText || btn.textContent);
  if (!loading && btn.dataset.origText) btn.textContent = btn.dataset.origText;
}

function showFormSuccess(wrap) {
  const t = translations[currentLang];
  const success = document.createElement('div');
  success.className = 'form-success';

  const icon = document.createElement('div');
  icon.className = 'form-success-icon';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M20 6L9 17l-5-5');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '2.5');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);
  icon.appendChild(svg);

  const title = document.createElement('h3');
  title.textContent = t['form.successTitle'];
  const description = document.createElement('p');
  description.textContent = t['form.successDesc'];

  success.append(icon, title, description);
  wrap.replaceChildren(success);
}

async function submitToFormSubmit(form, payload) {
  const res = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Network error');
  return res.json();
}

// Contact form on kapcsolat.html
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const btn = contactForm.querySelector('[type=submit]');
    btn.dataset.origText = btn.textContent;
    setSubmitLoading(btn, true);
    const data = collectFormData(contactForm);
    if (isLikelySpam(contactForm, data)) {
      showFormSuccess(contactForm.closest('.contact-form-wrap'));
      return;
    }
    try {
      await submitToFormSubmit(contactForm, {
        ...data,
        _captcha: 'false',
        _template: 'table',
        _subject: 'West Style – Kapcsolatfelvétel: ' + (data.name || ''),
        _autoresponse: translations[currentLang]['form.success'],
        _replyto: data.email || ''
      });
      showFormSuccess(contactForm.closest('.contact-form-wrap'));
    } catch {
      setSubmitLoading(btn, false);
      showToast(translations[currentLang]['form.error']);
    }
  });
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
}

// ===== QUOTE MODAL =====
(function () {
  const MODAL_ID = 'quoteModal';

  // Inject modal HTML once
  const modalHTML = `
<div class="modal-overlay" id="${MODAL_ID}" role="dialog" aria-modal="true" aria-labelledby="modalHeading">
  <div class="modal-box">
    <button class="modal-close" id="modalClose" aria-label="Bezárás">
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
    </button>
    <div class="modal-hd">
      <span class="modal-tag" data-i18n="modal.tag">Ajánlatkérés</span>
      <h2 id="modalHeading" data-i18n="modal.title">Kérjen személyre szabott ajánlatot</h2>
      <p data-i18n="modal.sub">24 órán belül visszajelzünk — rejtett díjak nélkül.</p>
    </div>
    <form class="contact-form" id="quoteModalForm" novalidate>
      <div class="form-row">
        <div class="form-group">
          <label for="m-name" data-i18n="form.name">Neve</label>
          <input type="text" id="m-name" name="name" placeholder="Kovács János" required />
        </div>
        <div class="form-group">
          <label for="m-company" data-i18n="form.company">Cég neve</label>
          <input type="text" id="m-company" name="company" placeholder="Példa Kft." />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="m-email" data-i18n="form.email">E-mail cím</label>
          <input type="email" id="m-email" name="email" placeholder="pelda@ceg.hu" required />
        </div>
        <div class="form-group">
          <label for="m-phone" data-i18n="form.phone">Telefonszám</label>
          <input type="tel" id="m-phone" name="phone" placeholder="+36 30 …" />
        </div>
      </div>
      <div class="form-group">
        <label for="m-service" data-i18n="form.service">Érdeklődés tárgya</label>
        <select id="m-service" name="service" required>
          <option value="" data-i18n="form.select">— Válasszon szolgáltatást —</option>
          <option value="web"        data-i18n="form.opt1">Weboldal készítés</option>
          <option value="seo"        data-i18n="form.opt2">Keresőoptimalizálás / SEO</option>
          <option value="maintenance" data-i18n="form.opt3">Weboldal karbantartás</option>
        </select>
      </div>
      <div class="form-group" id="m-budget-group">
        <label for="m-budget" data-i18n="form.budget">Tervezett büdzsé</label>
        <select id="m-budget" name="budget">
          <option value=""       data-i18n="form.bselect">— Hozzávetőlegesen —</option>
          <option value="small"  data-i18n="form.b1">100 000 – 300 000 Ft</option>
          <option value="medium" data-i18n="form.b2">300 000 – 700 000 Ft</option>
          <option value="large"  data-i18n="form.b3">700 000 Ft felett</option>
          <option value="discuss"data-i18n="form.b4">Megbeszélés szerint</option>
        </select>
      </div>
      <div class="form-group">
        <label for="m-message" data-i18n="form.message">Üzenet</label>
        <textarea id="m-message" name="message" rows="4" data-i18n-placeholder="form.messagePh" required></textarea>
      </div>
      <div class="hp-field" aria-hidden="true">
        <label for="m-website">Weboldal</label>
        <input type="text" id="m-website" name="_honey" tabindex="-1" autocomplete="off" />
      </div>
      <button type="submit" class="btn btn-primary btn-full" data-i18n="form.sendQuote">Ajánlatkérés küldése</button>
      <p class="form-note" data-i18n="form.note">Az adatait bizalmasan kezeljük, harmadik félnek nem adjuk át.</p>
    </form>
  </div>
</div>`;
  let overlay;
  let quoteModalForm;

  function ensureModal() {
    if (overlay) return;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    overlay = document.getElementById(MODAL_ID);
    quoteModalForm = document.getElementById('quoteModalForm');
    quoteModalForm.dataset.formStartedAt = String(Date.now());

    document.getElementById('modalClose').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

    const serviceSelect = document.getElementById('m-service');
    const budgetGroup = document.getElementById('m-budget-group');

    function updateBudgetVisibility() {
      const hide = NO_BUDGET_SERVICES.has(serviceSelect.value);
      budgetGroup.style.display = hide ? 'none' : '';
      document.getElementById('m-budget').value = hide ? '' : document.getElementById('m-budget').value;
    }
    serviceSelect.addEventListener('change', updateBudgetVisibility);

    quoteModalForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!quoteModalForm.checkValidity()) {
        quoteModalForm.reportValidity();
        return;
      }
      const btn = quoteModalForm.querySelector('[type=submit]');
      btn.dataset.origText = btn.textContent;
      setSubmitLoading(btn, true);
      const data = collectFormData(quoteModalForm);
      if (isLikelySpam(quoteModalForm, data)) {
        closeModal();
        quoteModalForm.reset();
        setSubmitLoading(btn, false);
        showToast(translations[currentLang]['form.success']);
        return;
      }
      try {
        await submitToFormSubmit(quoteModalForm, {
          ...data,
          _captcha: 'false',
          _template: 'table',
          _subject: 'West Style – Ajánlatkérés: ' + (data.name || ''),
          _autoresponse: translations[currentLang]['form.success'],
          _replyto: data.email || ''
        });
        closeModal();
        quoteModalForm.reset();
        setSubmitLoading(btn, false);
        showToast(translations[currentLang]['form.success']);
      } catch {
        setSubmitLoading(btn, false);
        showToast(translations[currentLang]['form.error']);
      }
    });
  }

  function openModal(preselect) {
    ensureModal();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    quoteModalForm.dataset.formStartedAt = String(Date.now());
    if (preselect) {
      const sel = document.getElementById('m-service');
      if (sel) sel.value = preselect;
    }
    // re-apply translations so injected elements get current lang
    applyLang(currentLang);
    setTimeout(() => overlay.querySelector('input').focus(), 60);
  }

  function closeModal() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Triggers: nav.cta, svc.cta, pr.cta, hero.cta, cp.btn.quote
  const TRIGGER_KEYS = new Set(['nav.cta','svc.cta','pr.cta','hero.cta','cp.btn.quote']);
  // Pre-select map: button i18n key → service value
  const PRESELECT = { 'svc.cta': '' };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-i18n]');
    if (btn && TRIGGER_KEYS.has(btn.getAttribute('data-i18n'))) {
      e.preventDefault();
      openModal(PRESELECT[btn.getAttribute('data-i18n')] || '');
    }
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Budget field: hide for fixed-price services
  const NO_BUDGET_SERVICES = new Set();
})();

// ===== COOKIE CONSENT + META PIXEL =====
const META_PIXEL_ID = '1191049686416317';
const COOKIE_CONSENT_NAME = 'ws_cookie_consent';
const COOKIE_CONSENT_FALLBACK_KEY = 'ws-cookie-consent';

const cookieCopy = {
  hu: {
    title: 'Süti beállítások',
    intro: 'A weboldal működéséhez szükséges sütiket mindig használjuk. A marketing sütik csak akkor aktiválódnak, ha Ön engedélyezi őket.',
    essentialTitle: 'Szükséges sütik',
    essentialDesc: 'Az oldal alapvető működéséhez kellenek, ezért nem kapcsolhatók ki.',
    marketingTitle: 'Marketing sütik',
    marketingDesc: 'Segítenek mérni a kampányok teljesítményét, például a Meta Pixel használatával.',
    settings: 'Beállítások',
    reject: 'Csak szükséges',
    save: 'Mentés',
    acceptAll: 'Összes elfogadása',
    close: 'Süti beállítások bezárása'
  },
  en: {
    title: 'Cookie settings',
    intro: 'We always use cookies required for the website to work. Marketing cookies are activated only if you allow them.',
    essentialTitle: 'Essential cookies',
    essentialDesc: 'Required for core website functionality, so they cannot be disabled.',
    marketingTitle: 'Marketing cookies',
    marketingDesc: 'Help measure campaign performance, including through the Meta Pixel.',
    settings: 'Settings',
    reject: 'Essential only',
    save: 'Save',
    acceptAll: 'Accept all',
    close: 'Close cookie settings'
  }
};

function getStoredCookieConsent() {
  try {
    const stored = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${COOKIE_CONSENT_NAME}=`))
      ?.split('=')[1];
    if (stored) return JSON.parse(decodeURIComponent(stored));
    const fallback = localStorage.getItem(COOKIE_CONSENT_FALLBACK_KEY);
    return fallback ? JSON.parse(fallback) : null;
  } catch {
    return null;
  }
}

function storeCookieConsent(consent) {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${COOKIE_CONSENT_NAME}=${encodeURIComponent(JSON.stringify(consent))}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
  localStorage.setItem(COOKIE_CONSENT_FALLBACK_KEY, JSON.stringify(consent));
}

function saveCookieConsent(preferences) {
  const consent = {
    essential: true,
    marketing: Boolean(preferences.marketing),
    savedAt: new Date().toISOString()
  };
  storeCookieConsent(consent);
  applyCookieConsent(consent);
  hideCookieConsent();
}

function loadMetaPixel() {
  if (window.__wsMetaPixelLoaded) return;
  window.__wsMetaPixelLoaded = true;

  !function(f,b,e,v,n,t,s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

function applyCookieConsent(consent) {
  if (consent && consent.marketing) loadMetaPixel();
}

function hideCookieConsent() {
  const consentEl = document.getElementById('cookieConsent');
  if (consentEl) consentEl.classList.remove('show', 'settings-open');
}

function refreshCookieConsentText() {
  const consentEl = document.getElementById('cookieConsent');
  if (!consentEl) return;

  const t = cookieCopy[currentLang] || cookieCopy.hu;
  consentEl.querySelector('[data-cookie-text="title"]').textContent = t.title;
  consentEl.querySelector('[data-cookie-text="intro"]').textContent = t.intro;
  consentEl.querySelector('[data-cookie-text="essentialTitle"]').textContent = t.essentialTitle;
  consentEl.querySelector('[data-cookie-text="essentialDesc"]').textContent = t.essentialDesc;
  consentEl.querySelector('[data-cookie-text="marketingTitle"]').textContent = t.marketingTitle;
  consentEl.querySelector('[data-cookie-text="marketingDesc"]').textContent = t.marketingDesc;
  consentEl.querySelector('[data-cookie-action="settings"]').textContent = t.settings;
  consentEl.querySelector('[data-cookie-action="reject"]').textContent = t.reject;
  consentEl.querySelector('[data-cookie-action="save"]').textContent = t.save;
  consentEl.querySelector('[data-cookie-action="accept"]').textContent = t.acceptAll;
  consentEl.querySelector('[data-cookie-close]').setAttribute('aria-label', t.close);
}

function initCookieConsent() {
  const existingConsent = getStoredCookieConsent();
  if (existingConsent) {
    applyCookieConsent(existingConsent);
    return;
  }

  const consentHTML = `
    <section class="cookie-consent" id="cookieConsent" aria-live="polite" aria-label="Cookie consent">
      <div class="cookie-card">
        <button class="cookie-close" type="button" data-cookie-action="close" data-cookie-close aria-label="Close cookie settings">
          <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
        </button>
        <div class="cookie-main">
          <h2 data-cookie-text="title">Süti beállítások</h2>
          <p data-cookie-text="intro"></p>
        </div>
        <div class="cookie-settings">
          <div class="cookie-option cookie-option-locked">
            <div>
              <strong data-cookie-text="essentialTitle"></strong>
              <span data-cookie-text="essentialDesc"></span>
            </div>
            <span class="cookie-pill">ON</span>
          </div>
          <label class="cookie-option" for="cookieMarketing">
            <div>
              <strong data-cookie-text="marketingTitle"></strong>
              <span data-cookie-text="marketingDesc"></span>
            </div>
            <input type="checkbox" id="cookieMarketing" />
          </label>
        </div>
        <div class="cookie-actions">
          <button class="btn btn-ghost cookie-secondary" type="button" data-cookie-action="settings"></button>
          <button class="btn btn-outline" type="button" data-cookie-action="reject"></button>
          <button class="btn btn-primary cookie-save" type="button" data-cookie-action="save"></button>
          <button class="btn btn-primary" type="button" data-cookie-action="accept"></button>
        </div>
      </div>
    </section>`;

  document.body.insertAdjacentHTML('beforeend', consentHTML);

  const consentEl = document.getElementById('cookieConsent');
  const marketingCheckbox = document.getElementById('cookieMarketing');
  refreshCookieConsentText();

  consentEl.addEventListener('click', (e) => {
    const action = e.target.closest('[data-cookie-action]')?.getAttribute('data-cookie-action');
    if (!action) return;

    if (action === 'settings') {
      consentEl.classList.add('settings-open');
    }
    if (action === 'reject' || action === 'close') {
      saveCookieConsent({ marketing: false });
    }
    if (action === 'save') {
      saveCookieConsent({ marketing: marketingCheckbox.checked });
    }
    if (action === 'accept') {
      marketingCheckbox.checked = true;
      saveCookieConsent({ marketing: true });
    }
  });

  requestAnimationFrame(() => consentEl.classList.add('show'));
}

// ===== SMOOTH SCROLL to hash on page load =====
window.addEventListener('load', () => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
  }
});

// ===== INIT =====
applyLang(currentLang);
startI18nObserver();
requestAnimationFrame(initFadeInAnimations);

function scheduleAfterFirstRender(cb) {
  const runIdle = () => {
    const requestIdle = window.requestIdleCallback || ((idleCb) => window.setTimeout(idleCb, 1200));
    window.setTimeout(() => requestIdle(cb), 1800);
  };

  if (document.readyState === 'complete') {
    runIdle();
  } else {
    window.addEventListener('load', runIdle, { once: true });
  }
}

scheduleAfterFirstRender(initCookieConsent);





