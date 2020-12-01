FROM node:latest
RUN mkdir /src
WORKDIR /src
ADD . ./
RUN npm install
EXPOSE 1338
CMD [ "node", "index.js" ]