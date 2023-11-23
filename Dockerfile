FROM node
COPY . /app
WORKDIR /app
RUN npm install --legacy-peer-deps
CMD ["npm", "run", "dev"]
EXPOSE 8080
