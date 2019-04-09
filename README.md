# NGWP

Dockerized Angular Frontend with Headless Wordpress 5.1.1 and Mysql 5.7

## Getting Started

These instructions will get you a copy of the project up and running on your local machine on automatically build Docker containers using docker-compose for automatic container creations for development. 

Pushing production build to github and deploying it to Linux/Ubuntu server using Nginx as web and reverse proxy server.

### How to Install

Clone this repo in /opt folder either local or server (git need to be installed)

```
git clone https://github.com/azrin640/ngwp.git
```

Navigate and install dependency for angular in ngwp/ngwp-ng (node, npm, angular cli must be installed)

```
npm install
npm run start // to start development or
npm run build // to build angular
```

Navigate back to ngwp folder and run docker compose, docker compose will generate 3 containers running nginx, wordpress and mysql. 

If u're in development navigate to localhost:4200 to begin development or u can see the build page at localhost:80 (docker and docker compose need to be installed first)

```
docker-compose up -d 
```

### Pushing to Git

You can use git for version control but first u need to remove git remote origin which is pointed to this repo by running

```
git remote remove origin
```

Create your own repo and follow instruction from git

### Deploying to server

You can pull your repo to your linux/ubuntu server by pulling it from ur repo.

Ssh to ur server and after successful login, create a dir in /opt

```
$ cd /opt
~/opt $ git clone < your git clone with https repo >
```

Navigate to /opt/ngwp and run docker compose

```
~/opt/ngwp $ docker up -d
```

Now u can navigate to your server ip or domain, nginx will be running at domain:80, wordpress at domain:8000

Enjoy ...# ngwp
# ngwp
