
FROM nginx:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y npm openssl
RUN mkdir -p /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj "/CN=ysingh.42.fr/C=ES/L=Malaga" -keyout /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.crt

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY . /app
WORKDIR /app

# change the VITE_GITHUB_ACCESS_TOKEN value to the one you want to use from stack.env
RUN echo "VITE_GITHUB_ACCESS_TOKEN=$VITE_GITHUB_ACCESS_TOKEN" > .env

RUN npm install

RUN npm run build

RUN cp -r dist/* /usr/share/nginx/html/

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]