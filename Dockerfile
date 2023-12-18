FROM node:18

WORKDIR /usr/script

COPY ./package.json ./yarn.lock ./

RUN yarn

COPY . .

RUN chmod +x ./run.sh

ENTRYPOINT ["./run.sh"]