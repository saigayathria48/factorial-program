FROM node:22.23.2-bookworm-slim

WORKDIR /app

COPY factorial.js package.json ./

USER node

CMD ["node", "factorial.js", "5"]
