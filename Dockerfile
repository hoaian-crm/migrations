FROM node:18

WORKDIR /migration

COPY ./package*.json .

RUN yarn

COPY . .

RUN chmod +x ./run.sh

ENTRYPOINT ["./run.sh"]