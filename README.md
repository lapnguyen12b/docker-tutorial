# docker-tutorial
# run
```bash
node server.js
```
# Docker build
```bash
docker build -t docker-rest-api:1.0.0 .
```
# history
```bash
docker history docker-rest-api:1.0.0
```
# images
```bash
docker images
```
# container
```bash
docker ps
docker ps -a
```
# run docker (local)
```bash
docker run -p 3000:3000 docker-rest-api:1.0.0
<!-- Server is runner in port 3000 -->
<!-- Hello Docker -->
```
# stop container
docker stop <ID>
```bash
docker stop 301f7eaf6f
```

# remove container
```bash
docker rm <ID>
docker rm 301f7eaf6f
docker rm -f 301f7eaf6f (-f : --force)
```

# run with new name
```bash
docker run --name v1-docker-rest-api -d -p 3000:3000 docker-rest-api:1.0.0
```
# logs
```bash
docker logs -f v1-docker-rest-api
```
# access container
```bash
docker exec -it v1-docker-rest-api bash
//exit
```

# create docker tag
```bash
docker tag <local-image:tagname> <new-repo:tagname>
docker tag docker-rest-api:1.0.0 lapnguyen/docker-rest-api:1.0.0
```
# push repository
```bash
docker push <lapnguyen/docker-rest-api:tagname>
docker push lapnguyen/docker-rest-api:1.0.0
```
# run repository
```bash
docker run --name v2-docker-rest-api -d -p 3000:3000 lapnguyen/docker-rest-api:1.0.0
```