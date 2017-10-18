FROM mhart/alpine-node:8
RUN mkdir -p /usr/src

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /usr/src
COPY package.json /usr/src
RUN npm install
ENV PATH /usr/src/node_modules/.bin:$PATH

WORKDIR /usr/src/app
COPY ./dist /usr/src/app

CMD [ "node", "index.js" ]