FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm --silent

RUN pnpm install --silent

COPY . .

CMD ["pnpm", "run", "dev"]
