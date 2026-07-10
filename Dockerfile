# Pasul 1: Build Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Pasul 2: Servire cu Nginx
FROM nginx:alpine
COPY --from=build /app/dist/numele-proiectului-tau /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
