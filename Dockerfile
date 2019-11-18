FROM node
WORKDIR /app
COPY . . 
EXPOSE 4300
CMD node server.js