FROM node:20

RUN apt-get update && apt-get install -y telnet

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
