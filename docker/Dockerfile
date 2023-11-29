FROM unit:1.31.1-node20

COPY docker/unit.json  /docker-entrypoint.d/

#COPY --chown=unit . /var/www/


RUN mkdir -p /builder
COPY . /builder
WORKDIR /builder
RUN npm i --progress=false
RUN npm link unit-http
RUN npm run build
RUN mkdir -p build && cp -r .output/server build/
RUN npm run generate
RUN cp -r .output/public build/
RUN cp -r build /var/www/
RUN chown -R unit:unit /var/www

RUN chmod +x /var/www/server/index.mjs

WORKDIR /var/www/server

RUN npm link unit-http

