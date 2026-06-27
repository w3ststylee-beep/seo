// ===== TRANSLATIONS =====
const translations = {
  hu: {
    "nav.home":     "Főoldal",
    "nav.services": "Szolgáltatások",
    "nav.references": "Referenciák",
    "nav.contact":  "Kapcsolat",
    "nav.cta":      "Ajánlatkérés",

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
    "trust.i3": "Automatizált marketing",
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
    "st.title": "Három területen, egy kézből",
    "st.sub":   "Weboldal készítéstől a SEO-n át az automatizált marketingig — minden digitális igényét egyetlen helyen, személyre szabott megközelítéssel intézheti. Nincs szükség több ügynökségre, egyetlen kapcsolattartó gondoskodik mindenről.",
    "st.s1.title": "Weboldal Készítés",
    "st.s1.desc":  "Modern, gyors, mobilbarát weboldalak — az ötlettől az élesítésig. Egyedi design, CMS integráció, konverzió-fókusz.",
    "st.s2.title": "SEO + AI Monitoring",
    "st.s2.desc":  "Keresőoptimalizálás és mesterséges intelligencia alapú elemzés — valós idejű adatok, automatikus javaslatok, havi riportok.",
    "st.s3.title": "Automatizált Marketing",
    "st.s3.desc":  "E-mail kampányok, social media ütemezés, lead-generálás AI segítségével — vállalkozása 0–24 dolgozik Önért.",
    "st.more": "Részletek →",
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
    "s2.title": "SEO + AI Monitoring",
    "s3.title": "Automatizált Marketing",

    "svc.web.title": "Weboldal, amely dolgozik Önért",
    "svc.web.desc1": "Nem csak szép weboldalakat készítünk — olyan digitális eszközöket, amelyek aktívan hozzájárulnak vállalkozása növekedéséhez.",
    "svc.web.desc2": "A fejlesztés folyamata teljesen átlátható: az ötletelési fázistól a tesztelésen át az élesítésig minden lépésről tájékoztatjuk Önt.",
    "svc.web.f1.t": "Reszponzív design",       "svc.web.f1.d": "Tökéletesen jelenik meg minden eszközön.",
    "svc.web.f2.t": "Kiváló sebesség",          "svc.web.f2.d": "Optimalizált kód, gyors betöltés, jobb Google-rangsor.",
    "svc.web.f3.t": "Biztonságos & SSL",        "svc.web.f3.d": "HTTPS, adatvédelmi megfelelőség, rendszeres mentés.",
    "svc.web.f4.t": "Konverzió-fókuszált design","svc.web.f4.d": "Nem csak szép — az oldal aktívan hoz ügyfeleket és növeli az értékesítést.",
    "svc.web.f5.t": "SEO-ready alap",           "svc.web.f5.d": "Keresőbarát struktúra, meta-adatok, schema markup.",
    "svc.web.f6.t": "Többnyelvű támogatás",     "svc.web.f6.d": "Magyar és angol nyelven, egy rendszeren belül.",

    "svc.seo.title": "Láthatóság, amelyet az AI vezérel",
    "svc.seo.desc1": "A keresőmotorokon való megjelenés ma már nem elég — az első oldalon kell lenni. AI-alapú monitoringrendszerünk folyamatosan elemzi vállalkozása online jelenlétét.",
    "svc.seo.desc2": "Konkrét kulcsszavakra, konkrét piacokon, konkrét eredményeket hozunk — és ezt minden hónapban riportban dokumentáljuk.",
    "svc.seo.f1.t": "Mélyreható kulcsszó-kutatás",    "svc.seo.f1.d": "Feltárjuk, mire keresnek az Ön potenciális ügyfelei.",
    "svc.seo.f2.t": "AI tartalomoptimalizálás",        "svc.seo.f2.d": "Mesterséges intelligencia elemzi és javítja a tartalmait.",
    "svc.seo.f3.t": "Versenytárs monitoring",           "svc.seo.f3.d": "Figyeljük a konkurenciát és mindig előrébb lépünk.",
    "svc.seo.f4.t": "Havi teljesítmény-riportok",       "svc.seo.f4.d": "Átlátható adatok, trendek, javaslatok havonta.",
    "seo.kw1": "digitális ügynökség",
    "seo.kw2": "weboldal készítés",
    "seo.kw3": "SEO optimalizálás",

    "svc.mkt.title": "Marketing, amely soha nem alszik",
    "svc.mkt.desc1": "Az automatizált marketing lényege, hogy a megfelelő üzenetet a megfelelő embernek a megfelelő időben küldi el — emberi beavatkozás nélkül.",
    "svc.mkt.desc2": "AI-alapú eszközeink folyamatosan elemzik a kampányok teljesítményét és automatikusan optimalizálnak — a konverziók maximalizálása érdekében.",
    "svc.mkt.f1.t": "E-mail automatizáció",      "svc.mkt.f1.d": "Welcome sorozattól az elhagyott kosár e-mailig.",
    "svc.mkt.f2.t": "Social media kezelés",      "svc.mkt.f2.d": "Ütemezett posztok, AI-generált tartalmak, engagement.",
    "svc.mkt.f3.t": "Lead nurturing",             "svc.mkt.f3.d": "Automatikus érdeklődőgondozás a kapcsolatfelvételtől a vásárlásig.",
    "svc.mkt.f4.t": "Konverzió-optimalizálás",   "svc.mkt.f4.d": "A/B tesztek, hőtérkép-elemzés, folyamatos finomhangolás.",
    "svc.mkt.f5.t": "0–24 automatizáció",        "svc.mkt.f5.d": "Rendszerek, amelyek akkor is dolgoznak, amikor Ön nem.",
    "svc.mkt.f6.t": "CRM integráció",             "svc.mkt.f6.d": "Csatlakozás meglévő ügyfélkezelő rendszerekhez.",
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
    "form.opt2b":      "SEO – Basic csomag",
    "form.opt2g":      "SEO – Growth csomag",
    "form.opt3":       "Automatizált Marketing",
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
    "form.error":      "Sajnáljuk, hiba történt. Kérjük, próbálja újra, vagy írjon közvetlenül: info@weststylee.com",

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
    "faq.q4": "Milyen eredményeket hozhat a SEO + AI monitoring?",
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
    "pr.seo.growth.price": "84 990 Ft",
    "pr.seo.growth.desc":  "Agresszív optimalizálás, több csatorna, webshop SEO és prioritás support.",
    "pr.seo.growth.f1": "Minden a Basic csomagból",
    "pr.seo.growth.f2": "Agresszívebb optimalizálás",
    "pr.seo.growth.f3": "Több landing oldal optimalizálása",
    "pr.seo.growth.f4": "Többnyelvű SEO támogatás",
    "pr.seo.growth.f5": "Webshop SEO",
    "pr.seo.growth.f6": "Prioritás support",
    "pr.seo.growth.f7": "Versenytárs monitoring",

    "pr.mkt.rangeLabel": "Árazás",
    "pr.mkt.range":      "Egyedi ajánlat",
    "pr.mkt.note":       "A marketing automatizáció ára a rendszer összetettségétől, az integrációk számától és a kampányok volumenétől függ.",
    "pr.mkt.f1": "E-mail automatizáció",
    "pr.mkt.f2": "Social media kezelés",
    "pr.mkt.f3": "Lead nurturing rendszer",
    "pr.mkt.f4": "CRM integráció",
    "pr.mkt.f5": "Havi kampány-riport",

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
    "exp.l4": "Marketing automatizáció",
    "exp.l5": "UX / Konverzió-optimalizálás",
    "exp.l6": "Tartalom stratégia",

    // References page
    "rp.hero.title": "Referenciáink",
    "rp.hero.sub": "Publikusan elérhető weboldalak, amelyeket a West Style Kft. készített: letisztult felépítés, modern vizuális világ és üzleti célokra hangolt kivitelezés.",
    "rp.tag": "Munkáink",
    "rp.title": "Két elkészült weboldal, élőben megtekinthetően",
    "rp.sub": "A referencia kártyák közvetlenül a publikusan elérhető oldalakra vezetnek.",
    "rp.card1.tag": "Weboldal fejlesztés",
    "rp.card1.desc": "Modern, reszponzív céges weboldal, amely gyorsan áttekinthető struktúrával és erős első benyomással támogatja a márka online jelenlétét.",
    "rp.card2.tag": "Digitális jelenlét",
    "rp.card2.desc": "Publikus, mobilbarát weboldal átgondolt tartalmi szerkezettel, gördülékeny navigációval és a szolgáltatás bemutatását segítő vizuális ritmussal.",
    "rp.open": "Élő oldal megnyitása →",
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
    "nav.contact":  "Contact",
    "nav.cta":      "Get a Quote",

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
    "trust.i3": "Automated marketing",
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
    "st.sub":   "From website development through SEO to automated marketing — handle all your digital needs in one place, with a personalised approach. No need for multiple agencies, a single point of contact takes care of everything.",
    "st.s1.title": "Website Development",
    "st.s1.desc":  "Modern, fast, mobile-friendly websites — from concept to launch. Custom design, CMS integration, conversion focus.",
    "st.s2.title": "SEO + AI Monitoring",
    "st.s2.desc":  "Search engine optimisation and AI-powered analysis — real-time data, automatic suggestions, monthly reports.",
    "st.s3.title": "Automated Marketing",
    "st.s3.desc":  "Email campaigns, social media scheduling, AI-driven lead generation — your business works for you 24/7.",
    "st.more": "Learn more →",
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
    "s2.title": "SEO + AI Monitoring",
    "s3.title": "Automated Marketing",

    "svc.web.title": "A website that works for you",
    "svc.web.desc1": "We don't just build beautiful websites — we create digital tools that actively contribute to your business growth.",
    "svc.web.desc2": "The development process is fully transparent: we keep you informed at every step from ideation through testing to launch.",
    "svc.web.f1.t": "Responsive design",        "svc.web.f1.d": "Looks perfect on every device.",
    "svc.web.f2.t": "Excellent speed",           "svc.web.f2.d": "Optimised code, fast loading, better Google ranking.",
    "svc.web.f3.t": "Secure & SSL",              "svc.web.f3.d": "HTTPS, data protection compliance, regular backups.",
    "svc.web.f4.t": "Conversion-focused design",  "svc.web.f4.d": "Not just beautiful — the site actively drives customers and boosts sales.",
    "svc.web.f5.t": "SEO-ready foundation",      "svc.web.f5.d": "Search-friendly structure, meta data, schema markup.",
    "svc.web.f6.t": "Multilingual support",      "svc.web.f6.d": "Hungarian and English, in one system.",

    "svc.seo.title": "Visibility driven by AI",
    "svc.seo.desc1": "Appearing in search engines is no longer enough — you need to be on the first page. Our AI monitoring system continuously analyses your online presence.",
    "svc.seo.desc2": "We deliver concrete results for concrete keywords in concrete markets — and document this in a monthly report.",
    "svc.seo.f1.t": "In-depth keyword research",     "svc.seo.f1.d": "We discover what your potential clients are searching for.",
    "svc.seo.f2.t": "AI content optimisation",        "svc.seo.f2.d": "Artificial intelligence analyses and improves your content.",
    "svc.seo.f3.t": "Competitor monitoring",           "svc.seo.f3.d": "We watch the competition and always stay one step ahead.",
    "svc.seo.f4.t": "Monthly performance reports",    "svc.seo.f4.d": "Clear data, trends and recommendations every month.",
    "seo.kw1": "digital agency",
    "seo.kw2": "website development",
    "seo.kw3": "SEO optimisation",

    "svc.mkt.title": "Marketing that never sleeps",
    "svc.mkt.desc1": "Automated marketing means sending the right message to the right person at the right time — without human intervention.",
    "svc.mkt.desc2": "Our AI tools continuously analyse campaign performance and automatically optimise — to maximise conversions.",
    "svc.mkt.f1.t": "Email automation",          "svc.mkt.f1.d": "From welcome sequences to abandoned cart emails.",
    "svc.mkt.f2.t": "Social media management",  "svc.mkt.f2.d": "Scheduled posts, AI-generated content, engagement.",
    "svc.mkt.f3.t": "Lead nurturing",            "svc.mkt.f3.d": "Automatic prospect nurturing from first contact to purchase.",
    "svc.mkt.f4.t": "Conversion optimisation",  "svc.mkt.f4.d": "A/B tests, heatmap analysis, continuous fine-tuning.",
    "svc.mkt.f5.t": "24/7 automation",           "svc.mkt.f5.d": "Systems that work even when you don't.",
    "svc.mkt.f6.t": "CRM integration",           "svc.mkt.f6.d": "Connect with your existing customer management systems.",
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
    "form.opt2b":      "SEO – Basic package",
    "form.opt2g":      "SEO – Growth package",
    "form.opt3":       "Automated Marketing",
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
    "form.error":      "Sorry, something went wrong. Please try again or email us directly: info@weststylee.com",

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
    "faq.q4": "What results can SEO + AI monitoring deliver?",
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
    "pr.seo.growth.price": "HUF 84,990",
    "pr.seo.growth.desc":  "Aggressive optimisation, more channels, webshop SEO and priority support.",
    "pr.seo.growth.f1": "Everything in Basic",
    "pr.seo.growth.f2": "More aggressive optimisation",
    "pr.seo.growth.f3": "More landing pages optimised",
    "pr.seo.growth.f4": "Multilingual SEO support",
    "pr.seo.growth.f5": "Webshop SEO",
    "pr.seo.growth.f6": "Priority support",
    "pr.seo.growth.f7": "Competitor monitoring",

    "pr.mkt.rangeLabel": "Pricing",
    "pr.mkt.range":      "Custom quote",
    "pr.mkt.note":       "Marketing automation pricing depends on system complexity, number of integrations and campaign volume.",
    "pr.mkt.f1": "Email automation",
    "pr.mkt.f2": "Social media management",
    "pr.mkt.f3": "Lead nurturing system",
    "pr.mkt.f4": "CRM integration",
    "pr.mkt.f5": "Monthly campaign report",

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
    "exp.l4": "Marketing automation",
    "exp.l5": "UX / Conversion optimisation",
    "exp.l6": "Content strategy",

    "rp.hero.title": "Our References",
    "rp.hero.sub": "Publicly available websites built by West Style Kft.: clean structure, modern visual direction and execution tuned for business goals.",
    "rp.tag": "Our Work",
    "rp.title": "Two completed websites, available live",
    "rp.sub": "Each reference card links directly to the public website.",
    "rp.card1.tag": "Website development",
    "rp.card1.desc": "A modern, responsive company website with a clear structure and strong first impression to support the brand's online presence.",
    "rp.card2.tag": "Digital presence",
    "rp.card2.desc": "A public, mobile-friendly website with thoughtful content structure, smooth navigation and visual rhythm that helps present the service.",
    "rp.open": "Open live website →",
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

// ===== STATE =====
let currentLang = localStorage.getItem('ws-lang') || 'hu';

// ===== APPLY TRANSLATIONS =====
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ws-lang', lang);
  document.documentElement.lang = lang;

  const titleMap = {
    'index.html':        { hu: 'West Style Kft. — Digitális Megoldások', en: 'West Style Kft. — Digital Solutions' },
    'szolgaltatasok.html':{ hu: 'Szolgáltatások — West Style Kft.', en: 'Services — West Style Kft.' },
    'rolunk.html':        { hu: 'Rólunk — West Style Kft.', en: 'About Us — West Style Kft.' },
    'referenciak.html':   { hu: 'Referenciák — West Style Kft.', en: 'References — West Style Kft.' },
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

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.getElementById('langHU').classList.toggle('active', lang === 'hu');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');
  if (typeof refreshCookieConsentText === 'function') refreshCookieConsentText();
}

// ===== LANG TOGGLE =====
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'hu' ? 'en' : 'hu');
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===== FADE-IN =====
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        // animate expertise bars when their parent .exp-item becomes visible
        const fill = entry.target.querySelector('.exp-fill');
        if (fill) {
          const targetW = fill.style.width;
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = targetW; }, 50);
        }
      }, i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

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
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/info@weststylee.com';
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
  wrap.innerHTML = `
    <div class="form-success">
      <div class="form-success-icon">
        <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h3>${t['form.successTitle']}</h3>
      <p>${t['form.successDesc']}</p>
    </div>`;
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
          <option value="seo-basic"  data-i18n="form.opt2b">SEO – Basic csomag</option>
          <option value="seo-growth" data-i18n="form.opt2g">SEO – Growth csomag</option>
          <option value="marketing"  data-i18n="form.opt3">Automatizált Marketing</option>
          <option value="other"      data-i18n="form.opt5">Egyéb</option>
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
          _subject: 'West Style â€“ AjĂˇnlatkĂ©rĂ©s: ' + (data.name || ''),
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
  const NO_BUDGET_SERVICES = new Set(['seo-basic', 'seo-growth', 'marketing']);
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
