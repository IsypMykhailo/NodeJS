# @author Mykhailo Isyp

# image
FROM node:16.14.2

# setting a work directory
WORKDIR /usr/src/app

# copy package file to work directory
COPY package*.json ./

# copy the whole project to the work directory
COPY . .

# run code at the server
RUN npm install

# open port for usage
EXPOSE $PORT

# run server
CMD ["npm", "start"]