# TastyBites Bern - Restaurant Website

## Projektübersicht

Moderne, elegante Restaurant-Website für **TastyBites Bern** – ein urbanes Burger-Restaurant in Bern, das für seine saftigen Smashed Burgers, hausgemachte Saucen und knusprige Pommes bekannt ist. Die Website soll Appetit machen und die lässige, aber qualitätsbewusste Atmosphäre transportieren.

**Wichtig**: Das Design soll NICHT wie typische KI-generierte Websites aussehen. Keine generischen Gradients, keine Standard-Layouts, keine langweiligen Farbschemata.

---

## 🎨 Design-Philosophie

### Ästhetische Richtung: "Urban Street Food Meets Quality"
Eine Fusion aus Street-Food-Energie, urbaner Coolness und handwerklicher Qualität. Denke an: mutige Typografie, warme Burger-Farben (Senfgelb, Ketchup-Rot, gegrilltes Braun), aber mit cleaner Ausführung.

### Was wir VERMEIDEN:
- ❌ Inter, Roboto, Arial, System-Fonts
- ❌ Generische lila/blaue Gradients auf weissem Hintergrund
- ❌ Standard Hero-Sections mit zentriertem Text
- ❌ Vorhersehbare Grid-Layouts ohne Spannung
- ❌ Überstrapazierte Glasmorphism-Effekte
- ❌ Stock-Photo-Ästhetik
- ❌ Cookie-Cutter Restaurant-Templates

### Was wir ANSTREBEN:
- ✅ Unerwartete, charaktervolle Typography
- ✅ Mutige Farbentscheidungen mit klarem Konzept
- ✅ Asymmetrische Layouts mit Spannung
- ✅ Subtile aber wirkungsvolle Micro-Interactions
- ✅ Atmosphärische Hintergründe und Texturen
- ✅ Ein Element, das unvergesslich ist

---

## 🖋️ Typography

### Empfohlene Font-Paarungen (wähle EINE Kombination):

**Option A - Editorial Elegance:**
- Display: `Playfair Display` oder `Cormorant Garamond`
- Body: `Source Serif Pro` oder `Lora`

**Option B - Modern Swiss:**
- Display: `DM Serif Display` oder `Fraunces`
- Body: `DM Sans` oder `Outfit`

**Option C - Contemporary Contrast:**
- Display: `Syne` oder `Space Grotesk` (sparsam verwenden)
- Body: `Satoshi` oder `General Sans`

**Option D - Artisanal Character:**
- Display: `Reckless Neue` oder `Editorial New`
- Body: `Manrope` oder `Plus Jakarta Sans`

### Typography-Regeln:
- Überschriften: Grosszügiger Letter-Spacing für Display-Fonts
- Body: Optimale Zeilenhöhe (1.6-1.8) für Lesbarkeit
- Kontrast zwischen Display und Body bewusst einsetzen
- Schweizer Typografie-Tradition respektieren: Klarheit, Präzision, Hierarchie

---

## 🎨 Farbpalette

### Primäre Richtung: Bold, Appetitlich & Urban

```css
:root {
  /* Basis - Wähle EINE Richtung */
  
  /* Option A: Dark & Bold (empfohlen für Burger) */
  --color-bg-primary: #1a1714;      /* Geröstetes Schwarz */
  --color-bg-secondary: #2a2520;    /* Grill-Dunkel */
  --color-text-primary: #f5f2ed;    /* Cremiges Weiss */
  --color-text-secondary: #a89f94;  /* Warmes Grau */
  --color-accent: #e85d04;          /* Burger Orange */
  --color-accent-secondary: #ffc233; /* Senf Gelb */
  --color-accent-hover: #ff7b2e;
  
  /* Option B: Light & Fresh */
  --color-bg-primary: #faf7f2;      /* Warmes Off-White */
  --color-bg-secondary: #f0ebe3;    /* Sesam-Beige */
  --color-text-primary: #1a1714;    /* Grill-Dunkel */
  --color-text-secondary: #5c534a;  /* Warmes Braun */
  --color-accent: #c92a2a;          /* Ketchup Rot */
  --color-accent-secondary: #e8b923; /* Käse Gelb */
  --color-accent-hover: #e03131;
  
  /* Option C: Retro Diner */
  --color-bg-primary: #fefae0;      /* Vintage Cream */
  --color-bg-secondary: #e9edc9;    /* Salat Grün-Beige */
  --color-text-primary: #283618;    /* Dunkles Grün */
  --color-text-secondary: #606c38;  /* Avocado */
  --color-accent: #bc6c25;          /* Gegrilltes Orange */
  --color-accent-hover: #dda15e;
}
```

### Farbregeln:
- Maximal 3-4 Farben aktiv verwenden
- Akzentfarbe sparsam aber wirkungsvoll einsetzen
- Kontrast für Accessibility sicherstellen (WCAG AA)
- Farben sollen Appetit anregen (warme Töne bevorzugen)

---

## 📐 Layout & Composition

### Prinzipien:

1. **Asymmetrie mit Absicht**
   - Nicht alles zentrieren
   - Bewusste Off-Center Platzierungen
   - Spannung durch ungleiche Spalten (z.B. 1:2, 2:3 Ratios)

2. **Grosszügiger Weissraum**
   - Elemente atmen lassen
   - Wichtiges durch Raum betonen
   - Schweizer Design-Tradition: "Weniger ist mehr"

3. **Grid-Breaking Momente**
   - Ein oder zwei Elemente pro Section, die das Grid brechen
   - Überlappende Bilder/Texte wo sinnvoll
   - Diagonale Elemente für Dynamik

4. **Scrollytelling**
   - Jede Section erzählt einen Teil der Geschichte
   - Natürlicher Flow von oben nach unten
   - Reveal-Animationen beim Scrollen

---

## 🏗️ Website-Struktur

### Seiten:

```
/
├── index.html          # Homepage
├── menu.html           # Speisekarte
├── about.html          # Über uns / Geschichte
├── contact.html        # Kontakt & Reservierung
└── impressum.html      # Rechtliches
```

### Homepage Sections (in dieser Reihenfolge):

1. **Hero** 
   - Fullscreen oder Near-Fullscreen
   - Appetitliches Hero-Bild eines Burgers (dampfend, saftig)
   - Restaurant-Name prominent: "TastyBites"
   - Tagline: "Smashed to Perfection"
   - CTA: "Jetzt bestellen" oder "Menü entdecken"
   - Subtle Scroll-Indicator

2. **Signature Burgers**
   - Die 3 beliebtesten Burger prominent zeigen
   - Grosse, appetitliche Bilder
   - Kurze, verlockende Beschreibungen
   - Preise sichtbar
   - Hover-Effekte mit Zutaten-Details

3. **Das TastyBites Erlebnis**
   - Was macht unsere Burger besonders?
   - Frische Zutaten, hausgemachte Saucen, Smashed-Technik
   - Kann mit Icons oder kurzen Bullet-Points arbeiten
   - Authentisch, nicht übertrieben

4. **Vollständige Speisekarte**
   - Übersichtliche Darstellung aller Burger
   - Getränke-Sektion
   - Filterbar nach vegetarisch/scharf wenn gewünscht
   - Preise klar ersichtlich

5. **Atmosphäre / Gallery** (optional)
   - Bilder vom Lokal
   - Behind-the-scenes (Burger-Zubereitung)
   - Kann als horizontaler Scroll oder Grid

6. **Standort & Öffnungszeiten**
   - Klar und übersichtlich
   - Karte oder stilisierte Adresse
   - Liefergebiet wenn relevant

7. **CTA / Bestellen**
   - Klarer Call-to-Action
   - Online-Bestellung, Telefon, oder Lieferdienst-Links
   - "Hunger? Bestell jetzt!"

8. **Footer**
   - Social Media (Instagram wichtig für Food!)
   - Kontakt
   - Rechtliche Links

---

## ✨ Interactions & Animations

### Grundprinzipien:
- **Subtilität vor Spektakel**: Elegante, zurückhaltende Animationen
- **Performance**: CSS-Animationen bevorzugen
- **Purposeful**: Jede Animation hat einen Grund

### Empfohlene Effekte:

```css
/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* Fade-In on Scroll (via Intersection Observer) */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Elegant Hover für Links */
a {
  position: relative;
}
a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
}
a:hover::after {
  width: 100%;
}

/* Image Hover - Subtle Zoom */
.image-container img {
  transition: transform 0.5s ease;
}
.image-container:hover img {
  transform: scale(1.03);
}

/* Staggered Reveal */
.stagger-item {
  opacity: 0;
  transform: translateY(30px);
}
.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }
```

### Navigation:
- Sticky Header mit Transparenz-zu-Solid Übergang
- Hamburger Menu auf Mobile (elegant animiert)
- Aktiver Link-State klar erkennbar

---

## 📱 Responsive Design

### Breakpoints:

```css
/* Mobile First */
/* Base: < 640px */

/* Tablet */
@media (min-width: 640px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1280px) { }
```

### Mobile-Prioritäten:
- Touch-freundliche Tap-Targets (min 44x44px)
- Lesbare Schriftgrössen (min 16px body)
- Schnelle Ladezeiten
- Wichtigste Infos sofort sichtbar (Öffnungszeiten, Telefon)

---

## 🛠️ Tech Stack

### Empfohlen:
- **HTML5** semantisch korrekt
- **CSS3** mit Custom Properties
- **Vanilla JavaScript** für Interaktionen
- Optional: **GSAP** für komplexere Animationen
- **Keine Frameworks notwendig** für eine Restaurant-Website

### Alternativen:
- React/Next.js wenn CMS-Integration geplant
- Astro für optimale Performance
- Tailwind CSS wenn gewünscht

### Performance-Ziele:
- Lighthouse Score > 90
- First Contentful Paint < 1.5s
- Bilder optimiert (WebP, lazy loading)

---

## 📝 Content-Platzhalter

### Speisekarte / Menü

#### 🍔 Burger Menüs
*Unsere Spezialität – Alle Burger Menüs werden mit Pommes Frites und hausgemachter Sauce serviert.*

| Gericht | Beschreibung | Preis |
|---------|--------------|-------|
| **Tasty Habibi Burger** | Smashed Rindfleisch-Patty, Salat, Tomaten, Zwiebeln, Cheddar, Tasty Sauce | 24,90 CHF |
| **Tasty Juicy Burger** | Rindfleisch-Patty, grillierte Zwiebeln, Bacon, Röstzwiebeln, 2× Cheddar, Tasty-Mayo | 26,90 CHF |
| **Tasty Veggie Burger** 🌱 | Vegi-Patty, Salat, Tomaten, Zwiebeln, Gewürzgurken, Tasty Sauce | 21,90 CHF |
| **Tasty Cheese Burger** | Rindfleisch-Patty, Zwiebeln, Gewürzgurken, Cheddar, Ketchup, Tasty Sauce | 23,90 CHF |
| **Tasty Bacon Burger** | Rindfleisch-Patty, Zwiebeln, Gewürzgurken, Cheddar, Bacon, Röstzwiebeln, Ketchup, BBQ-Sauce | 25,90 CHF |
| **Tasty Classic Burger** | Rindfleisch-Patty, Salat, Tomaten, Zwiebeln, Gewürzgurken, Tasty Sauce | 24,90 CHF |
| **Tasty Spicy Burger** 🌶️ | Rindfleisch-Patty, Salat, Tomaten, Zwiebeln, Jalapeños, Cheddar, Chili-Mayo, Chilisauce | 24,90 CHF |

#### 🥤 Alkoholfreie Getränke

| Getränk | Grösse | Preis |
|---------|--------|-------|
| Coca-Cola | 0,33l | 4,00 CHF |
| Coca-Cola Zero | 0,33l | 4,00 CHF |
| Fanta Orange | 0,33l | 4,00 CHF |
| Sprite | 0,33l | 4,00 CHF |
| Pepsi | 0,33l | 4,00 CHF |
| Fusetea Peach | 0,33l | 4,00 CHF |
| Fusetea Lemon | 0,33l | 4,00 CHF |
| Uludağ Grün | 0,33l | 4,00 CHF |
| Uludağ Orange | 0,33l | 4,00 CHF |
| Valser Mineralwasser Prickelnd | 0,5l | 4,00 CHF |
| Wasser ohne Kohlensäure | 0,5l | 4,00 CHF |
| Mate | 0,25l | 4,00 CHF |
| Red Bull | 0,33l | 5,00 CHF |

---

### Texte:

**Tagline:**
> "Smashed to Perfection – Burger wie sie sein sollten."

**About (kurz):**
> Im Herzen von Bern servieren wir Burger, die süchtig machen. Saftige Patties, knusprige Pommes und unsere legendäre Tasty Sauce – alles frisch zubereitet, mit Liebe gemacht.

**Öffnungszeiten:**
```
Dienstag - Freitag: 11:30 - 14:00 | 18:00 - 23:00
Samstag: 18:00 - 23:00
Sonntag & Montag: Ruhetag
```

**Adresse:**
```
TastyBites Bern
Murtenstrasse 66
3008 Bern
+41 31 XXX XX XX
```

### Bilder:
- Platzhalter mit korrekten Aspect Ratios verwenden
- Empfohlene Grössen:
  - Hero: 1920x1080 (16:9)
  - Gerichte: 800x600 (4:3) oder 1:1
  - Ambiente: Verschiedene Ratios für Dynamik

---

## 🚨 Kritische Regeln

1. **NIEMALS generische Templates kopieren** - Jede Section individuell gestalten
2. **IMMER mobile-first denken** - Desktop ist Enhancement
3. **Typography ist 80% des Designs** - Zeit investieren
4. **Weniger Farben, mehr Wirkung** - Disziplin bei der Palette
5. **Performance über Effekte** - Schnelle Seite schlägt fancy Animationen
6. **Accessibility nicht vergessen** - Alt-Texte, Kontraste, Keyboard-Navigation
7. **Testen, testen, testen** - Verschiedene Devices und Browser

---

## 📋 Workflow

### Phase 1: Foundation
1. HTML-Struktur für alle Seiten
2. CSS Reset und Basis-Variablen
3. Typography einrichten
4. Farbschema implementieren

### Phase 2: Components
1. Navigation (Desktop + Mobile)
2. Buttons und Links
3. Karten für Gerichte
4. Footer

### Phase 3: Sections
1. Hero Section
2. Restliche Sections der Homepage
3. Unterseiten

### Phase 4: Polish
1. Animationen hinzufügen
2. Hover-States verfeinern
3. Responsive Feintuning
4. Performance-Optimierung

### Phase 5: Finalisierung
1. Cross-Browser Testing
2. Accessibility Check
3. Lighthouse Audit
4. Finale Anpassungen

---

## 🎯 Erfolgskriterien

Eine erfolgreiche TastyBites Website:
- [ ] Macht beim ersten Besuch einen bleibenden Eindruck
- [ ] Vermittelt die Atmosphäre des Restaurants
- [ ] Lädt innerhalb von 2 Sekunden
- [ ] Funktioniert einwandfrei auf allen Geräten
- [ ] Hat einen "WOW-Moment" (ein unvergessliches Detail)
- [ ] Sieht NICHT aus wie jede andere Restaurant-Website
- [ ] Macht Appetit auf einen Besuch

---

*Erstellt für die Entwicklung mit Claude Code. Bei Fragen zur Interpretation dieser Guidelines: Mutige Entscheidungen treffen, die zum Konzept passen.*
