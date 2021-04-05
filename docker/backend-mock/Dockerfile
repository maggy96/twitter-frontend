FROM node:12.18.2-alpine3.12
WORKDIR /home/node/deps
COPY * ./
RUN yarn
EXPOSE 9001
CMD ["node", "index.js"]
