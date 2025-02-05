FROM nginx
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
