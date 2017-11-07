FROM mhart/alpine-node:8
RUN mkdir -p /usr/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /usr/app
COPY package.json /usr/app
RUN npm install
ENV PATH /usr/app/node_modules/.bin:$PATH

WORKDIR /usr/app/dist
COPY ./dist /usr/app/dist

CMD [ "node", "index.js" ]