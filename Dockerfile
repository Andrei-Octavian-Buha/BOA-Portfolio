# Pasul 1: Construim aplicația
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --prod

# Pasul 2: Servim aplicația cu Nginx
FROM nginx:alpine
# Aici este cheia: copiăm fișierele build-uite în folderul Nginx
COPY --from=build /app/dist/BOA-Portfolio /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
