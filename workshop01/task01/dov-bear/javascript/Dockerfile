FROM harbor.pks.dsu.ppt.pcf.psa/concourse-stowage/cypress-git-zip-node20.18-chrome130:v1

# mkdir /app, cd /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY main.js .
COPY views views
COPY public public

RUN npm ci

ENV APP_PORT=3000

EXPOSE ${APP_PORT}

ENTRYPOINT node main.js -p ${APP_PORT} -n dov-bear
