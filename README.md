### no me acuerdo pero creo que ibamos a usar typescrip con ionic-react jsjajs
Este instructivo detalla los pasos necesarios para instalar Ionic CLI utilizando Node Version Manager (NVM) y Node.js, incluyendo la instalación de Capacitor y la configuración específica para Android.

### Actualización del Sistema

Primero, actualiza tu sistema:

sudo apt-get update 
sudo apt-get upgrade

pruebaprueba
### Requisitos Previos

- *Ionic:* v8
- *React:* v17
- *Node.js:* v20.17.0
- *npm:* v10.8.3

### Paso 1: Instalación de NVM (Node Version Manager)

1. Abre una terminal.
2. Ejecuta el siguiente comando para instalar NVM:

   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
   

3. Cierra y vuelve a abrir la terminal o ejecuta el siguiente comando para cargar NVM:

   source ~/.bashrc
   

### Paso 2: Descarga e Instalación de Node.js

1. Instala Node.js utilizando NVM:

   nvm install 20
   

2. Verifica que la instalación fue exitosa:

   node -v
   

   Debería mostrar: v20.17.0

3. Verifica la versión de npm:

   npm -v
   

   Debería mostrar: 10.8.3

### Paso 3: Instalación de Ionic CLI

1. Con Node.js instalado, procede a instalar la CLI de Ionic:

   npm install -g @ionic/cli
