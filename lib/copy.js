// lib/copy.js — Cała widoczna treść tekstowa na stronie docelowej (landing page). 
// Każdą zmianę tekstu wprowadza się tutaj.

export const copy = {
  metadata: {
    title: "365 Zdrowych Przepisów — Bez cukru i bez glutenu",
    description:
      "1000 przepisów bez cukru i glutenu na 365 dni. Jedz bez wyrzutów sumienia, bez komplikacji i bez wyrzeczeń. Oferta specjalna: 30 zł + 8 prezentów.",
  },

  hero: {
    banner: "OFERTA WAŻNA TYLKO DZIŚ!",
    timerLabels: { days: "Dni", hours: "Godz", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dni pysznych przepisów bez cukru i glutenu, abyś mógł jeść bez wyrzutów sumienia!",
    bullets: [
      "Uczyń swoje posiłki zdrowszymi i przyjemniejszymi, nie rezygnując z doskonałego smaku",
      "BEZ KOMPLIKACJI",
      "BEZ WYRZECZEŃ",
      "BEZ WYRZUTÓW SUMIENIA",
    ],
    cta: "CHCĘ JEŚĆ BEZ WYRZUTÓW SUMIENIA",
    kicker: "365 dni · 1000 przepisów",
    imageAlt: "Książka z przepisami na 365 dni bez cukru i glutenu",
    trustChips: [
      { icon: "⭐", text: "Ponad 5 000 rodzin" },
      { icon: "🎁", text: "8 darmowych bonusów" },
      { icon: "🛡️", text: "75% rabatu tylko dziś" },
    ],
  },

  story: {
    headline: "Cukier to cichy wróg, który niszczy Twoje zdrowie",
    intro:
      "Jest obecny w jedzeniu, po które sięgasz każdego dnia, ukryty w produktach, które z pozoru wydają się całkowicie nieszkodliwe.",
    problemsLead:
      "Oto główne problemy powodowane przez cukier i to, jak mogą one wpływać na Ciebie w tym momencie:",
    problems: [
      "Ciągłe zmęczenie i niewyjaśniony brak energii",
      "Przybieranie na wadze i gromadzenie się tkanki tłuszczowej na brzuchu",
      "Zaburzenia hormonalne i metaboliczne",
      "Większe ryzyko chorób przewlekłych (cukrzyca, nadciśnienie, otyłość itp.)",
      "Gwałtowne wahania nastroju i stany lękowe",
      "Przyspieszone starzenie się organizmu",
      "Silne łaknienie i uzależnienie od jedzenia",
    ],
    solutionHeadline:
      "Wreszcie pojawiło się proste i skuteczne rozwiązanie, które odmieni Twoje nawyki żywieniowe – bez rezygnowania z tego, co kochasz.",
  },

  benefits: {
    stepsHeadline: "Wystarczą tylko 3 kroki do Twojej transformacji",
    steps: [
      {
        number: "1",
        title: "Jedz zgodnie z planem, bez poczucia winy",
        desc: "Zyskujesz dostęp do gotowego jadłospisu na każdy dzień roku – wszystko bez cukru i glutenu. Zero uciążliwego planowania!",
      },
      {
        number: "2",
        title: "Gotuj proste i pyszne posiłki",
        desc: "Postępuj zgodnie z łatwymi instrukcjami i przygotowuj niesamowite dania, które całkowicie odmienią Twoją dietę.",
      },
      {
        number: "3",
        title: "Poczuj prawdziwą zmianę",
        desc: "Gotując z naszych przepisów, szybko zauważysz różnicę w swoim ciele i samopoczuciu: zyskasz więcej energii, łatwiej zapanujesz nad wagą i zmniejszysz ryzyko chorób.",
      },
    ],
    ctaMid: "CHCĘ JEŚĆ BEZ WYRZUTÓW SUMIENIA",
    headline: "POZNAJ KORZYŚCI, KTÓRE ZMIENIĄ TWOJE ŻYCIE",
    items: [
      {
        icon: "HeartPulse",
        title: "Kontrola poziomu cukru",
        desc: "Ustabilizuj poziom cukru we krwi i zmniejsz ryzyko cukrzycy dzięki pożywnym i pysznym posiłkom.",
      },
      {
        icon: "Utensils",
        title: "Żywieniowa wolność",
        desc: "Ciesz się zniewalającymi daniami bez wyrzutów sumienia i buduj zdrową relację z jedzeniem.",
      },
      {
        icon: "CalendarDays",
        title: "Codzienna różnorodność",
        desc: "Dzięki 1000 przepisów każdego dnia w roku możesz spróbować czegoś zupełnie nowego.",
      },
      {
        icon: "Timer",
        title: "Wygoda w kuchni",
        desc: "Przygotowuj przepyszne posiłki w 30 minut lub krócej – oszczędzaj czas i wyeliminuj codzienny stres.",
      },
      {
        icon: "GraduationCap",
        title: "Świadome odżywianie",
        desc: "Naucz się świadomie wybierać produkty i zbuduj zdrowe nawyki na całe życie.",
      },
      {
        icon: "Scale",
        title: "Kontrola wagi",
        desc: "Utrzymuj zdrową wagę dzięki przepisom, które sycą i odżywiają, bez rezygnacji z doskonałego smaku.",
      },
    ],
  },

  features: {
    headline: "Otrzymujesz gotowy jadłospis na 365 dni – po jednym na każdy dzień roku",
    subheadline: "Poprowadzimy Cię krok po kroku na drodze do zdrowego odżywiania",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Śniadania i przekąski",
        desc: "Przepisy na śniadania, jakich NIGDY wcześniej nie widziałeś. Szybkie metody przygotowania z użyciem łatwo dostępnych produktów!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Obiady i kolacje",
        desc: "Zaserwuj na stół najróżniejsze, pyszne dania na co dzień i na specjalne okazje! Przygotowane z produktów, które na pewno masz w swojej kuchni.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Ciasta i desery",
        desc: "MNÓSTWO propozycji na ciasta i desery bez glutenu i cukru, dzięki którym przygotujesz słodkości bez wyrzutów sumienia.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Sosy i pasty",
        desc: "Sosy i kremy, które błyskawicznie i bez trudu nadadzą Twoim potrawom wyjątkowy smak!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Zdrowe zupy i kremy",
        desc: "Zupy, zupy kremy i buliony – wszystkie oparte na odżywczych składnikach i starannie dobranych przyprawach.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternatywy dla mąki",
        desc: "Wszystko w wersji bezglutenowej i z niskim indeksem glikemicznym, abyś mógł wypiekać ciasta, chleb i ciasteczka bez cienia obaw.",
      },
    ],
    ctaMid: "CHCĘ JEŚĆ BEZ WYRZUTÓW SUMIENIA",
    badgesHeadline: "Najpyszniejsze dania w wersjach:",
    badges: ["BEZ CUKRU", "BEZ GLUTENU", "NISKOKALORYCZNE", "BEZ LAKTOZY"],
    audienceHeadline: "„Jedzenie bez wyrzutów sumienia” jest stworzone dla Ciebie, jeśli:",
    audience: [
      {
        title: "Masz ograniczenia dietetyczne:",
        desc: "Osoby, które z powodów zdrowotnych, takich jak cukrzyca czy nietolerancje, muszą unikać cukru i glutenu.",
      },
      {
        title: "Zależy Ci na zdrowiu rodziny:",
        desc: "Rodzice, którzy chcą zapewnić swoim dzieciom pożywne i smaczne posiłki, kształtując w nich zdrowe nawyki od najmłodszych lat.",
      },
      {
        title: "Prowadzisz zdrowy styl życia:",
        desc: "Osoby, które na co dzień przestrzegają konkretnych diet – niskowęglowodanowych, keto czy wegańskich – i szukają dopasowanych przepisów.",
      },
      {
        title: "Chcesz kontrolować swoją wagę:",
        desc: "Osoby, które chcą zrzucić wagę lub ją utrzymać i potrzebują sycących dań ułatwiających kontrolę kalorii.",
      },
    ],
  },

  testimonials: {
    headline: "Zobacz opinie osób, które już korzystają z naszych przepisów",
    cta: "CHCĘ JEŚĆ BEZ WYRZUTÓW SUMIENIA",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Chciałam tylko powiedzieć, że ta książka kucharska to prawdziwe błogosławieństwo. Z trójką małych dzieci wiecznie brakuje mi czasu, a to, że mam mnóstwo przepisów w jednym miejscu, niesamowicie wszystko ułatwiło. Teraz jemy w domu pysznie i zdrowo 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Co za świetna książka kucharska! Odkąd zdiagnozowano u mnie nietolerancję glutenu, myślałam, że już nigdy nie będę czerpać przyjemności z jedzenia. Dzięki waszym przepisom mogę jeść bez obaw. Dziękuję, że tak bardzo ułatwiliście mi życie! 🙏",
        time: "19:57",
      },
      {
        text: "Chcę wam podziękować z całego serca, bo te przepisy zmieniły moje życie. Jestem diabetyczką i zawsze miałam problem ze znalezieniem smacznych i zdrowych opcji. Teraz cieszę się każdym posiłkiem bez strachu. Naprawdę wam dziękuję! 🙏",
        time: "19:49",
      },
      {
        text: "Tysiąckrotne dzięki za te przepisy! Uwielbiam słodycze i zawsze miałam problem z odstawieniem cukru, ale wasze desery to pyszne i banalnie proste w przygotowaniu alternatywy.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Zdrowy przepis 1" },
      { src: "/carousel/categoria-8.webp", alt: "Zdrowy przepis 2" },
      { src: "/carousel/categoria-9.webp", alt: "Zdrowy przepis 3" },
      { src: "/carousel/categoria-10.webp", alt: "Zdrowy przepis 4" },
      { src: "/carousel/categoria-11.webp", alt: "Zdrowy przepis 5" },
      { src: "/carousel/categoria-1.webp", alt: "Zdrowy przepis 6" },
    ],
  },

  bonuses: {
    badge: "Specjalnie dla Ciebie, za to, że dotarłaś aż tutaj",
    headline: "KUPUJĄC 1000 PRZEPISÓW DZIŚ, OTRZYMASZ 8 EKSKLUZYWNYCH PREZENTÓW 🎁",
    valueLabel: "Wartość:",
    freeLabel: "ZA DARMO",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "PREZENT 1", title: "Przepisy na desery bez cukru", value: "49,00 zł" },
      { image: "/bonuses/bono-2.webp", tag: "PREZENT 2", title: "Przepisy na sosy i pasty", value: "35,00 zł" },
      { image: "/bonuses/bono-3.webp", tag: "PREZENT 3", title: "Przepisy na zupy i zupy kremy", value: "29,00 zł" },
      { image: "/bonuses/bono-4.webp", tag: "PREZENT 4", title: "Przepisy z mąkami bezglutenowymi", value: "19,00 zł" },
      { image: "/bonuses/bono-5.webp", tag: "PREZENT 5", title: "Przepisy na bezglutenowy chleb", value: "45,00 zł" },
      { image: "/bonuses/bono-6.webp", tag: "PREZENT 6", title: "Przepisy na zdrowe tortille", value: "45,00 zł" },
      { image: "/bonuses/bono-7.webp", tag: "PREZENT 7", title: "Zdrowe pizze", value: "45,00 zł" },
      { image: "/bonuses/bono-8.webp", tag: "PREZENT 8", title: "500 pysznych przepisów stworzonych dla diabetyków", value: "45,00 zł" },
    ],
    totalLabel: "Wartość wszystkiego, co otrzymasz, przekracza 150 zł",
    footer: "Ale dziś nie zapłacisz tej kwoty... chociaż ten pakiet jest wart każdej złotówki.",
  },

  finalCta: {
    preHeadline: "Twoja całkowita inwestycja w 1000 przepisów i wszystkie bonusy...",
    urgencyTop: "Oferta ograniczona czasowo!",
    subUrgency:
      "Nie przegap okazji, by zdobyć tę książkę kucharską z 75% rabatem. Odmień swoje zdrowie już teraz dzięki pełnemu jadłospisowi na 365 dni.",
    headline: "365 DNI Z PRZEPISAMI BEZ CUKRU I GLUTENU + DODATKOWE BONUSY",
    bundleList: [
      "1000 przepisów bez cukru i glutenu",
      "Bonus 1: Przepisy na desery bez cukru",
      "Bonus 2: Przepisy na sosy i pasty",
      "Bonus 3: Przepisy na zupy i zupy kremy",
      "Bonus 4: Przepisy z mąkami bezglutenowymi",
      "Bonus 5: Przepisy na bezglutenowy chleb",
      "Bonus 6: Przepisy na zdrowe tortille",
      "Bonus 7: Przepisy na zdrowe pizze",
      "Bonus 8: 500 pysznych przepisów dla diabetyków",
    ],
    guaranteeText:
      "Uwaga: Jeśli jesteś osobą, która naprawdę chce zadbać o swoje zdrowie lub zdrowie swojej rodziny, nasze przepisy bez cukru i glutenu z pewnością mogą Ci w tym pomóc od zaraz. Nie przegap tej wyjątkowej okazji!",
    regularPriceLabel: "ZAMIAST:",
    regularPrice: "120,00 zł",
    urgencyText: "OFERTA WAŻNA TYLKO DZIŚ!",
    offerPrice: "30 zł",
    bottomUrgency: "Ostatnie dostępne pakiety",
    discountBadge: "75% RABATU",
    button: "TAK, CHCĘ PRZEPISY + BONUSY JUŻ TERAZ",
    trustRow: "🔒 100% bezpieczna płatność • ⚡ Natychmiastowy dostęp • ✅ Dożywotnia gwarancja",
    imageAlt: "365 Zdrowych Przepisów + 8 Bonusów",
  },

  faq: {
    authorHeadline: "Kim jest Magdalena Kowalska?",
    authorBio:
      "Magdalena Kowalska to ekspertka do spraw zdrowego odżywiania, która zmienia nawyki żywieniowe dzięki swojemu innowacyjnemu programowi „Jedzenie bez wyrzutów sumienia”. Posiadając bogate doświadczenie jako dietetyczka kliniczna, Magdalena dzieli się 1000 prostych i przystępnych przepisów, stworzonych z myślą o wsparciu Cię na każdym etapie drogi do zdrowszego życia. Jako absolwentka kierunku Dietetyka, Magdalena łączy profesjonalną wiedzę z praktycznym podejściem, oferując smaczne i zbilansowane posiłki dopasowane do różnych potrzeb, wraz z cennymi wskazówkami, które pomogą Ci cieszyć się jedzeniem bez uciążliwych wyrzeczeń i poczucia winy.",
    authorRole: "Dietetyk",
    authorImageAlt: "Magdalena Kowalska — Dietetyk",
    worksHeadline: "CO TAK NAPRAWDĘ DZIAŁA?",
    doesntWork: [
      "JEDZENIE MAŁYCH PORCJI I GŁODÓWKI",
      "PRZESTRZEGANIE SKOMPLIKOWANYCH DIET",
      "REZYGNOWANIE Z TEGO, CO KOCHASZ",
    ],
    worksText:
      "To, co naprawdę działa, to zaplanowane posiłki bazujące na łatwych i praktycznych przepisach bez cukru i glutenu. Dzięki naszemu 365-dniowemu jadłospisowi nie będziesz musiał martwić się frustrującymi czy restrykcyjnymi dietami.",
    headline: "Często zadawane pytania (FAQ)",
    subheadline: "Odpowiedzi na najczęściej zadawane pytania",
    items: [
      { q: "JAK OTRZYMAM PRZEPISY?", a: "Całą zawartość otrzymasz bezpośrednio na swój adres e-mail." },
      { q: "CZY MOGĘ KORZYSTAĆ Z NICH NA TELEFONIE?", a: "Tak, uzyskasz dostęp z telefonu, tabletu lub komputera." },
      { q: "MASZ WIĘCEJ PYTAŃ?", a: "Tak, w trakcie korzystania z programu możesz kierować do mnie wszystkie swoje pytania bezpośrednio." },
      { q: "NA JAK DŁUGO OTRZYMAM DOSTĘP?", a: "Dostęp do wszystkich materiałów jest dożywotni." },
    ],
  },

  closing: {
    kicker: "OSTATNIA SZANSA! ⚡ Ta oferta wkrótce wygasa",
    headline:
      "Odmień swoje zdrowie już teraz dzięki kompletnemu jadłospisowi na 365 dni.",
    subheadline:
      "1000 przepisów bez cukru i glutenu + 8 darmowych bonusów. Wszystko to w cenie jednego obiadu na mieście.",
    regularPrice: "120,00 zł",
    offerPrice: "30 zł",
    ctaLabel: "TAK, CHCĘ PRZEPISY + BONUSY JUŻ TERAZ",
    trustRow:
      "🔒 100% bezpieczna płatność • ⚡ Natychmiastowy i dożywotni dostęp • ✅ Ostatnie dostępne pakiety",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Wszelkie prawa zastrzeżone. Zapoznaj się z naszą Polityką prywatności.",
  },
};