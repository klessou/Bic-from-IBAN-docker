FROM node:boron

RUN mkdir /code

WORKDIR /code
ADD . /code

CMD ["node", "iban.js"]
