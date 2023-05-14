from nginx:alpine

copy nginx.conf /etc/nginx/conf.d/default.conf
copy data /usr/share/nginx/html

expose 80

cmd ["nginx", "-g", "daemon off;"]