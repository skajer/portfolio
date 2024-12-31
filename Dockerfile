# Wybierz oficjalny obraz Node.js
FROM node:16

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json do katalogu roboczego
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików projektu
COPY . .

# Expose port 8080
EXPOSE 8080

# Uruchom aplikację (można to zmienić na npm run start w zależności od twojego setupu)
CMD ["npm", "start"]