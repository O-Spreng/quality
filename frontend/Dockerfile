FROM node:20 AS build

WORKDIR /app

ARG VITE_ENDPOINT_API
ENV VITE_ENDPOINT_API=${VITE_ENDPOINT_API}

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
