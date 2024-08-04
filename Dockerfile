#node block
FROM node:17-alpine AS nodework
WORKDIR /myapp
COPY package*.json .
RUN npm install --force
COPY  . .
EXPOSE 3000
CMD [ "npm", "run","dev" ]
RUN npm run production


#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /myapp/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]



# docker build -t reactapp .
# docker images
# docker run --name reactContainer -d -p 3000:80 reactapp
# docker ps
# docker stop container id
# docker rmi -f image id