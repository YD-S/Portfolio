
FROM nginx:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y npm openssl python3-pip python3
RUN mkdir -p /etc/nginx/ssl

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY . /app

WORKDIR /app

RUN pip install -r backend/requirements.txt --break-system-packages

RUN npm install

RUN npm run build

RUN cp -r dist/* /usr/share/nginx/html/

EXPOSE 8080

ENTRYPOINT ["/bin/bash", "entrypoint.sh"]