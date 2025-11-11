FROM node:24 AS angular

# mkdir /src, cd /src
WORKDIR /src

RUN npm i -g @angular/cli

COPY *.json .
COPY src src
COPY public public

RUN npm ci && ng build

FROM caddy:2.10

WORKDIR /app

COPY caddy/Caddyfile .

RUN mkdir html
COPY caddy/error.html html
COPY --from=angular /src/dist/angular/browser/ html

ENV CADDY_PORT=3000

EXPOSE ${CADDY_PORT}

ENTRYPOINT caddy run --config=/app/Caddyfile
