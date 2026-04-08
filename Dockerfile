# Step 1: Build React App
FROM node:20-alpine AS builder

WORKDIR /sidhu_navdeep_final_site

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /sidhu_navdeep_final_site/dist /usr/share/nginx/html

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]