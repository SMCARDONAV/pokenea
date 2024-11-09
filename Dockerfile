# Usa una imagen base de Node.js
FROM node:20

# Crea un directorio de trabajo en la imagen
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 80

# Comando para ejecutar la aplicación
CMD [ "npm", "start" ]
