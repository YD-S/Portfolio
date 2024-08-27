
FROM nginx:latest

RUN apt-get update -y
RUN apt-get install -y npm openssl python3-pip python3
RUN mkdir -p /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj "/CN=ysingh.42.fr/C=ES/L=Malaga" -keyout /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.crt

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY . /app

WORKDIR /app

RUN pip install -r backend/requirements.txt --break-system-packages

RUN npm install

RUN npm run build

RUN cp -r dist/* /usr/share/nginx/html/

EXPOSE 443

ENTRYPOINT ["/bin/bash", "entrypoint.sh"]