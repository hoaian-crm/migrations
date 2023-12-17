FROM node:18

WORKDIR /migration

COPY ./package*.json .

RUN yarn

COPY . .

CMD [ "yarn", 'seeder:up' ]