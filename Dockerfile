FROM node:latest

WORKDIR /siva

COPY . .

RUN npm init -y
