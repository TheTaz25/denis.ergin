---
title: "Checkliste Projekte 25% Anteil"
tags: 
- "dhbw"
- "web"
- "engineering"
slug: "web-engineering-project-25-checklist"
staticPath: "knowledge-base/dhbw/"
show: true
order: 3
---
# Checkliste für die Benotung von Projektarbeiten
> (Anteil 25% an der Gesamtnote)

Aufgrund der breiten natur aller Punkte, kann ich schlecht auf spezifische "zu erfüllende" Anforderungen eingehen.
Die Nachfolgenden Punkte dienen als Rahmen, nicht jeder Punkt kann auf jede Projektarbeit angewandt werden.

Die Bepunktung geschieht auf Basis der Gruppe. Sollte es ersichtlich sein, dass jemand unzureichend Mitgearbeitet hat so können individuelle Punkte abgezogen werden. Ich gehe auf Personen zu bei denen ich das feststellen sollte um abzuklären, ob die Person an anderweitigen Sachen im Projekt mitgearbeitet hat.

Gewertet werden sowohl Frontend als auch Backend-Code. Viele Gängige Sprachen akzeptiere ich, falls etwas vorkommt was nachfolgend nicht aufgelistet ist, bitte einmal kurz nachfragen:
- JavaScript / TypeScript
- Go
- Java / Kotlin
- Rust
- Python
- C / C++
- Zig

## 10 Punkte: Beurteilung des Codes
- [ ] "Clean Code"
  - Variablen und Funktionsbenamung macht Sinn
  - Verwendung von `let` und `const` anstatt `var`
- [ ] Moderne Features Verwendet
  - HTML-5 Elemente verwendet
  - Moderne CSS-Features verwendet (z.B. CSS-Grid)
  - Auf JavaScript kann man sehr schlecht eingehen. Die Sprache lässt viel zu. Wenn zu viel "BS / Schabernack" getrieben wird würde das zumindest negativ gewertet werden.
- [ ] HTML
  - Korrekte Auszeichnung
- [ ] Lokale Entwicklung
  - Projekt kann gecloned und (ggf mit Readme) gestartet werden.

## 10 Punkte: Beurteilung der eigentlichen Anwendung
- [ ] Allgemeine Funktionsfähigkeit
  - Kann ich die Anwendung normal bedienen?
  - Sind Funktionen und wie sie verwendet werden sollen ersichtlich?
- [ ] Nutzbarkeit abseits des "Happy Paths"
  - z.B. Korrekte Behandlung von Fehleingaben
  - 404 / Error-Seiten
- [ ] Nutzbarkeit
  - Bei komplexer Problemstellung: Hilfestellung für den Nuzter
  - Bei neuen UI-"Paradigmen": Hilfestellung für den Nutzer

## 5 Punkte: Zusatzpunkte
- [ ] Einsatz von Tooling zum Aufrechterhalten von JS-Formattierung
  - Linter
  - Formatter
- [ ] Ästhetik
  - Gutes Design (Nutzbar)
  - Accessibility gewährleistet?
- [ ] TypeScript
  - Vermeidungen von Typen wie `any`
- [ ] Erste Aspekte der Sicherheit
  - SQL-Injection falls DB verwendet wird
- [ ] Bibliotheken / Frameworks
  - Frontend: React, Vue, oder andere
  - Backend: Framework je nach Sprache
- [ ] Infrastruktur
  - Verwendet z.B. Docker um einen Applikations-Container zu bauen und zu starten

<script>
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((box) => box.disabled = false);
</script>