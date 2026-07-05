# ---------- Base Image ----------

FROM node:22-alpine

# ---------- Working Directory ----------

WORKDIR /app

# ---------- Copy Package Files ----------

COPY package*.json ./

# ---------- Install Dependencies ----------

RUN npm install

# ---------- Copy Application ----------

COPY . .

# ---------- Expose Port ----------

EXPOSE 5000

# ---------- Start Server ----------

CMD ["npm", "start"]