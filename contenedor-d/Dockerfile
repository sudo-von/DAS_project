FROM node:latest
RUN mkdir /src
WORKDIR /src
ADD . ./
RUN npm install
EXPOSE 1337
CMD [ "node", "index.js" ]