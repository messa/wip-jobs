FROM node:latest

ENV NODE_ENV production

WORKDIR app
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
