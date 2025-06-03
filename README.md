# Hilfe-Tool

### Erstellen einer Datei für die Projektstruktur-Auflistung

```js
find . -type d -name "node_modules" -prune -o -type d -name ".git" -prune -o -print | sort > Projektstruktur.txt
```