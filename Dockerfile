FROM mhart/alpine-node:10 as base
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN yarn install --production
COPY /dist /app/dist

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

FROM base as debug

COPY --from=base /app .
RUN yarn
ENV PATH /app/node_modules/.bin:$PATH

FROM debug as test

COPY --from=base /app .
COPY ./tsconfig.json /app
COPY ./tslint.json /app
COPY ./src /app/src

RUN yarn lint
RUN yarn test

FROM mhart/alpine-node:base-10
COPY --from=base /app .

CMD ["node", "dist/index.js"]