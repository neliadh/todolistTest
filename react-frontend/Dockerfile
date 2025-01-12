FROM node:20
WORKDIR /usr/src/frontend/app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

