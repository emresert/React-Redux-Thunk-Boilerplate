#node block
FROM node:17-alpine AS build
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run production

#nginx block
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker build -t reactapp .
# docker images
# docker run --name reactContainer -d -p 3000:80 reactapp
# docker ps
# docker stop container id
# docker rmi -f image id