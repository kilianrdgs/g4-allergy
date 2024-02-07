# Utilisation de l'image officielle Node.js comme base
FROM node:20

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json /app
COPY tsconfig*.json /app

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Construction de l'application Nuxt
RUN npm run build

EXPOSE 3000

# Commande pour démarrer Nginx lors du lancement du conteneur
CMD ["npm", "start"]