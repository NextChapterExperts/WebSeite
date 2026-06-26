---
title: "Privacy by Design – KI und Datenschutz im Unternehmen"
date: "June 15, 2026"
excerpt: "Die leistungsfähigsten Sprachmodelle laufen in der Cloud. Die sensibelsten Unternehmensdaten — Kundennamen, Vertragskonditionen, interne Geschäftsinformationen — dürfen nicht ohne weiteres externe Dienste erreichen.…"
cover: "/blog/optimistic-real-pessimism-privacy-by-design/AI_Privacy_Shield_Architecture.png"
series: optimistic-real-pessimism
seriesOrder: 5
---

Die leistungsfähigsten Sprachmodelle laufen in der Cloud. Die sensibelsten Unternehmensdaten — Kundennamen, Vertragskonditionen, interne Geschäftsinformationen — dürfen nicht ohne weiteres externe Dienste erreichen. Das scheint ein Widerspruch zu sein. Er ist es nicht, wenn die Architektur stimmt.

Dieser Beitrag erklärt, wie Unternehmen KI-Agenten mit Cloud-Modellen betreiben können, ohne personenbezogene oder vertrauliche Daten preiszugeben.

## Das Problem: Wo verarbeitet der Agent die Daten?

Wenn ein KI-Agent eine Kundenanfrage bearbeitet, verarbeitet er Daten: Namen, Adressen, Bestellnummern, Vertragsinformationen, interne Preislisten und möglicherweise Produktprobleme, die noch nicht öffentlich bekannt sind. All das ungefiltert an ein Cloud-Sprachmodell zu übermitteln ist mit erheblichen Datenschutzrisiken verbunden — und in vielen Unternehmen durch die eigene Compliance-Abteilung schlicht nicht erlaubt.

> _„Der Einwand, Daten seien zu sensibel für KI, ist kein technisches Urteil — es ist ein Hinweis auf fehlende Architektur."_

Die Lösung liegt nicht im Verzicht auf leistungsfähige Cloud-Modelle, sondern in der Trennung: Was wird wo verarbeitet?

## Die Lösung: Drei Verarbeitungsstufen

Eine hybride Architektur teilt die Verarbeitung in drei klar abgegrenzte Stufen auf.

**Stufe 1 — Lokale Vorverarbeitung:** Ein lokal betriebenes Modell analysiert die eingehende Anfrage und extrahiert die sachlich relevanten Informationen. Alles Persönliche — Name, Adresse, Kundennummer — wird durch abstrakte Kennzeichen ersetzt. Diese Verarbeitung findet vollständig im Unternehmensnetz statt. Kein personenbezogenes Datum verlässt die eigene Infrastruktur.

**Stufe 2 — Cloud-Entscheidung:** Das vorbereitete Paket mit den abstrakten Kennzeichen wird an das Cloud-Modell übergeben. Das Modell trifft die Prozessentscheidung auf Basis der sachlichen Informationen — Kundensegment, Produktkategorie, Art des Anliegens. Es sieht keine echten Personen, keine echten Adressen.

**Stufe 3 — Rückanreicherung:** Ein lokaler Dienst im Unternehmensnetz ersetzt die abstrakten Kennzeichen wieder durch die tatsächlichen Daten und stellt die fertige Antwort zusammen. Die personalisierte Antwort an den Kunden entsteht vollständig intern.

## Praxis: Der Garantiefall Markus Meier

**Markus Meier** (Meier IT-Services, Gold-Kunde) hat drei defekte Smart-Hubs reklamiert. Seine E-Mail enthält seinen Namen, die Firmenadresse, die Bestellnummer und interne Vertragsdaten.

In Stufe 1 extrahiert das lokale Modell die sachlichen Kerninformationen: ein Gold-Kunde, ein defektes Produkt der Kategorie 9942-X, ein Garantieanliegen. Alles Persönliche wird intern durch ein neutrales Kundenkennzeichen ersetzt. Das, was an das Cloud-Modell geht, enthält keinen echten Namen und keine echte Adresse.

Das Cloud-Modell in Stufe 2 trifft die Entscheidung: Express-Austausch gemäß Gold-Vertrag, Freigabe des Regionalleiters erforderlich wegen eines gemeldeten Lieferengpasses für diesen Artikel.

In Stufe 3 füllt der lokale Dienst die Antwortvorlage mit den tatsächlichen Daten aus. Markus Meier erhält eine personalisierte, korrekte Antwort — obwohl sein Name das Cloud-Modell nie erreicht hat.

## Einordnung: Wer im Unternehmen diese Entscheidung trifft

Die Frage, welche Daten in die Cloud dürfen und welche lokal verbleiben, ist keine technische Fußnote. Sie ist eine geschäftliche und rechtliche Grundsatzentscheidung, die vor dem ersten Produktionseinsatz eines Agenten getroffen sein muss.

Im Unternehmenskontext ist das die Aufgabe eines KI-Governance- und Compliance-Beauftragten: die Klassifikation von Datenkategorien, die Definition der Verarbeitungsgrenzen und die Sicherstellung der Konformität mit der DSGVO sowie internen Richtlinien.

## Fazit

Der Einwand „unsere Daten sind zu sensibel für KI" ist berechtigt, wenn er sich auf unkontrollierte Cloud-Übertragung bezieht. Er verliert seine Grundlage, wenn die Architektur von Anfang an zwischen lokaler Vorverarbeitung und Cloud-Entscheidungslogik trennt.

Blog 06 stellt die nächste Frage: Was passiert, wenn sich das Cloud-Modell ändert — ohne dass jemand etwas angerührt hat?

Der Prompt ist erst der Anfang. **Architektur entscheidet, welche Daten die Cloud nie sehen.**
