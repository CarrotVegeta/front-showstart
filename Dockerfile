FROM node:alpine  AS build
WORKDIR /usr/src/
COPY . .
ARG PROJECT=showstart
#ARG OUTPUT=dist
ARG DEPENDENCIES=nginx-conf/conf
ARG MANUALA=dist/static/config.json
RUN npm install cnpm -g --registry=https://registry.npm.taobao.org \
&& cnpm install \
&& cnpm run build


FROM nginx:latest AS products
ARG DEPENDENCIES=nginx-conf/conf
ARG ADDON=view/dist
ENV LANG=C.UTF-8 TZ=Asia/Shanghai
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/dist .
COPY --from=build /usr/src/${DEPENDENCIES} /etc/nginx/
#COPY --from=build /usr/src/${ADDON} ./privm
EXPOSE 8100
VOLUME ["/etc/nginx"]
