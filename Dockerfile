
FROM node:22-alpine AS builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build


FROM python:3.13-alpine

RUN apk update && apk upgrade
RUN apk add --no-cache nginx
WORKDIR /app
COPY ./backend /app/backend
COPY entrypoint.sh /app/entrypoint.sh
COPY ./nginx.conf /etc/nginx/http.d/default.conf
RUN pip install -r backend/requirements.txt --break-system-packages
COPY --from=builder /app/dist/ /app/dist
EXPOSE 8080
ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]