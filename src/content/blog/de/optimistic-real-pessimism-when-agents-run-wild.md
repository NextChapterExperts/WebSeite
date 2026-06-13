---
title: "Wenn Agenten Amok laufen – Kontrolle autonomer Systeme"
date: "June 8, 2026"
excerpt: "Blog 03 hat gezeigt, wie ein KI-Agent die richtigen Informationen findet: Durch gezielte Vorauswahl und ein Beziehungsnetz zwischen Geschäftsobjekten bekommt das Modell genau das, was für diesen Kunden und diesen Fall…"
cover: "/blog/optimistic-real-pessimism-when-agents-run-wild/Bild-Blog-04.png"
series: optimistic-real-pessimism
seriesOrder: 4
---

Blog 03 hat gezeigt, wie ein KI-Agent die richtigen Informationen findet: Durch gezielte Vorauswahl und ein Beziehungsnetz zwischen Geschäftsobjekten bekommt das Modell genau das, was für diesen Kunden und diesen Fall gilt. Der nächste Schritt ist die eigentliche Ausführung — und genau hier entsteht eine neue Klasse von Problemen.

## Das Problem: Wenn ein Agent nicht aufhören kann

Autonome KI-Agenten arbeiten in einem Zyklus: Sie formulieren einen Plan, führen eine Aktion aus, beobachten das Ergebnis und entscheiden, was als Nächstes zu tun ist. Das funktioniert gut, solange jede Aktion zu einem Fortschritt führt.

> _„Korrekte Informationen und ein validiertes Schema sind die Voraussetzung — nicht die Garantie für fehlerfreie Ausführung."_

Das Problem entsteht, wenn eine Aktion wiederholt scheitert und der Agent das Scheitern falsch interpretiert. Ohne klare Abbruchbedingungen versucht er dieselbe Aktion immer wieder — weil er nicht unterscheiden kann, ob ein Fehler vorübergehend oder durch eine Geschäftsregel bedingt ist.

## Das Beispiel: Der Garantiefall Markus Meier

Blog 03 hat den Fall vollständig vorbereitet: **Markus Meier** (Meier IT-Services, Gold-Kunde) hat drei defekte Smart-Hubs (9942-X, Bestellung DE-2026-8831) reklamiert. Der Agent kennt die korrekte Antwort: Express-Austausch gemäß Gold-Vertrag — aber erst nach Freigabe des Regionalleiters, weil ein internes Memo für diesen Artikel einen Chip-Engpass meldet.

Der Agent soll nun die Ersatzlieferung im ERP-System anlegen. Dabei scheitert er — und das auf zwei typische Arten:

**Fall 1 — Wiederholungsschleife:** Der Agent versucht, den Lieferauftrag anzulegen. Das ERP-System lehnt den Vorgang ab, weil die Freigabe des Regionalleiters noch aussteht. Der Agent wertet das als vorübergehenden Fehler und versucht es erneut. Dann noch einmal. In zwei Minuten stellt er vierzig identische Anfragen. Das ERP-System bleibt gesperrt, der Kunde erhält kein Update, der Regionalleiter wird nicht benachrichtigt.

**Fall 2 — Falsche Reihenfolge:** Der Agent bucht die Rücksendung, bevor die Ersatzlieferung freigegeben ist. Jeder Folgeschritt scheitert, weil die Voraussetzungen fehlen. Der Prozess dreht sich im Kreis.

In beiden Fällen entsteht kein sichtbarer Systemfehler — der Agent arbeitet, produziert aber keinen Nutzen.

## Die Lösung: Vier Kontrollmechanismen

Damit ein Agent sicher in der Ausführung arbeitet, braucht er vier ergänzende Mechanismen:

**Zustandsspeicher:** Der Agent protokolliert jeden Versuch mit seinem Ergebnis. Er weiß nach dem zweiten Fehlschlag, dass er bereits zweimal versucht hat — und dass derselbe Fehler weiter besteht.

**Versuchslimit:** Eine klare Obergrenze legt fest, wie oft derselbe Schritt wiederholt werden darf. Nach drei Fehlversuchen stoppt der Agent und wartet auf ein Signal von außen.

**Kostenlimit:** Unabhängig vom Versuchslimit gibt es ein maximales Budget pro Vorgang. Wenn ein Verarbeitungsschritt mehr Ressourcen verbraucht als vorgesehen, wird der Prozess angehalten.

**Protokollierung:** Jeder Schritt wird mit Entscheidung, Aktion und Ergebnis aufgezeichnet — vollständig nachvollziehbar für interne Prüfzwecke.

## Praxis: Mit und ohne Kontrolle

**Ohne Kontrolle:** Der Agent stellt vierzig Anfragen an das ERP-System in zwei Minuten. Die Kosten steigen. Die Anfragen werden alle abgelehnt. Der Kunde erhält keine Rückmeldung. Der Regionalleiter weiß nicht, dass seine Freigabe benötigt wird.

**Mit Kontrolle:** Der Agent stellt die erste Anfrage — sie wird abgelehnt. Er protokolliert das Ergebnis und versucht es ein zweites Mal, um vorübergehende Fehler auszuschließen. Die zweite Anfrage wird ebenfalls abgelehnt. Der Agent erkennt, dass eine Geschäftsregel greift, stoppt den Prozess und legt eine Aufgabe für den Regionalleiter an: *„Ersatzlieferung für Bestellung DE-2026-8831 benötigt Ihre Freigabe — Artikel 9942-X, Chip-Engpass."*

Der Prozess ist geordnet beendet. Der Mensch greift genau an der Stelle ein, an der eine Geschäftsentscheidung erforderlich ist.

## Einordnung: Autonomie und Verantwortung

Die beschriebenen Mechanismen sind kein technisches Detail — sie sind die Voraussetzung dafür, dass ein Unternehmen einem KI-Agenten überhaupt Ausführungsrechte geben kann. Ohne Versuchslimit, Kostenkontrolle und Eskalationsweg ist ein autonomer Agent ein unkontrolliertes Risiko, unabhängig davon, wie gut er den Kontext versteht.

Blog 05 beschäftigt sich mit der nächsten Frage: Während der Agent all diese Schritte ausführt — welche Daten verlassen dabei das Unternehmen?

## Fazit

Autonomie ohne Aufsicht ist kein Fortschritt. Ein KI-Agent, der nicht weiß, wann er aufhören soll, verursacht mehr Aufwand als er spart. Zustandsspeicher, Versuchslimit, Kostenkontrolle und Protokollierung sind die vier Mechanismen, die einen ausführenden Agenten beherrschbar machen.

Der Prompt ist erst der Anfang. **Kontrollmechanismen machen den Unterschied zwischen Demonstration und Produktionsbetrieb.**
