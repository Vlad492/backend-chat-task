FROM node:12

ENV TZ=Europe/Kiev

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

EXPOSE 8000

CMD ["npm", "start"]