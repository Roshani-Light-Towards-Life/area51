FROM node:10-alpine

USER root
ADD ./api ./api
ADD ./components ./components
ADD ./config ./config
ADD ./extensions ./extensions
ADD ./public ./public
ADD ./package.json ./package.json
RUN npm config set unsafe-perm true 
RUN apk add python make gcc g++
RUN npm install
RUN yarn build

EXPOSE 3000
CMD yarn start