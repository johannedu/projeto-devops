FROM nginx:alpine

COPY ./devops/ /usr/share/nginx/html/

EXPOSE 80