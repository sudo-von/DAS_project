FROM node
MAINTAINER daguirrez2000@gmail.com

COPY . .

RUN npm install --production

ENTRYPOINT ["node", "scraper.js"]