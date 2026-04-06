branch dev
## Auschecken: 

* git clone https://github.com/NextChapterExperts/WebSeite.git
* Authentifizierung: persönliches GitHub-Token (PAT) oder SSH — niemals Token in die Repo-Doku committen.

## Install:
Erstellt den node_modules ordner

```bash
npm install 
```

```bash
npm run dev
```

## Build 
Erzeugt einen /out Ordner 

```bash
npm run build
```

## Testen der Statischen Webseite 
Wechsle in das out Verzeichnis.


```bash
npx serve
```


Neu 14.05

npm run dev	Startet lokalen Dev-Server
npm run dev:clean	Löscht .next & Cache → startet sauberen Dev
npm run build	Baut Next.js
npm run build:clean	Löscht Cache & .next → baut komplett neu
npm run export	Exportiert statische Seiten (/out)
npm run export:clean	Clean → Build → Export
npm run clean	Löscht .next und .cache (auch Turbopack/webpack)
npm run analyze	Optional: Visualisiere Bundle (nur mit next-bundle-analyzer)
npm run lint	Lintet deinen Code
npm run rebuild Kombi aus clean und build

## Manuelles Löschen und Build

rm -rf .next
rm -rf node_modules/.cache
npm run build
