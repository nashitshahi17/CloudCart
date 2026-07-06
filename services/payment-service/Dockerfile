# -----------------------------
# Stage 1 - Dependencies
# -----------------------------
FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci


# -----------------------------
# Stage 2 - Production
# -----------------------------
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN addgroup -S cloudcart && \
    adduser -S cloudcart -G cloudcart

USER cloudcart

EXPOSE 8004

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
CMD wget --spider http://localhost:8004/health || exit 1

CMD ["npm","start"]