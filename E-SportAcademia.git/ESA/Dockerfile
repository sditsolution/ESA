# Verwende das offizielle Node.js 14-Image als Basis
FROM node:14-alpine

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /app

# Kopiere nur die Dateien, die für die Installation der Abhängigkeiten benötigt werden
COPY package.json package-lock.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest der Anwendung
COPY . .

# Baue die Anwendung (Vite-Anwendungen müssen möglicherweise erst gebaut werden)
RUN npm run build

# Exponiere den Port, auf dem die Anwendung läuft (wenn deine Vite-Anwendung einen anderen Port verwendet, ändere dies entsprechend)
EXPOSE 3000

# Definiere den Befehl zum Starten der Anwendung
CMD ["npm", "run", "dev"]
