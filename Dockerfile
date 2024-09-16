FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn build-storybook
FROM nginx:stable-alpine

COPY --from=builder /app/storybook-static /usr/share/nginx/html

EXPOSE 80

