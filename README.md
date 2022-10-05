# docker-tutorial

# build
//docker build -t (tagname) .
docker build -t docker-api:1.0.0 .

# history
docker history docker-api:1.0.0

# images
docker images

# run
docker run -p 3000:3000 docker-api:1.0.0

# check image - container
docker ps

# stop
//docker stop (id)
docker stop a12

# check status
docker ps -a

# remove
docker rm a12

# run with new name
docker run --name v1-docker-api -d -p 3000:3000 docker-api:1.0.0

#
docker logs -f v1-docker-api

# exec
docker exec -it v1-docker-api bash
exit

# repository
 docker tag docker-api:1.0.0 lapnguyen12b/docker-api:1.0.0
 docker push lapnguyen12b/docker-api:1.0.0
//1.0.0
 # new tag repository
 docker tag docker-api:1.0.0 lapnguyen12b/docker-api:1.0.1
 docker push lapnguyen12b/docker-api:1.0.1
 //1.0.1

# run 
//docker run --name (new name) -d -p 3000:3000 (repository tag)
docker run --name v2-docker-api -d -p 3000:3000 lapnguyen12b/docker-api:1.0.1