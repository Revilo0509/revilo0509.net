FROM node:22-alpine AS builder
WORKDIR /app

ARG DISCORD_BOT_TOKEN
ARG USER_ID
ARG GUILD_ID

ENV DISCORD_BOT_TOKEN=$DISCORD_BOT_TOKEN
ENV USER_ID=$USER_ID
ENV GUILD_ID=$GUILD_ID

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build && \
    pnpm prune --prod

FROM gcr.io/distroless/nodejs22-debian13
WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
ENTRYPOINT ["/nodejs/bin/node", "build/index.js"]
