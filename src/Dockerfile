# base image
FROM nginx:alpine
FROM node:latest as node

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install
RUN npm run build --prod


COPY --from=node /app/dist/testForm /usr/share/ngnix/html

# sudo docker build -t testForm .
# sudo docker run --rm -d -p 4205.:4205 testForm:latest