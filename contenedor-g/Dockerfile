FROM node:latest
RUN mkdir /src
WORKDIR /src
ADD . ./
RUN npm install
CMD [ "node", "index.js" ]
EXPOSE 1338