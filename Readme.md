[![Build Status](https://travis-ci.org/Trafikito/trafikito-support.svg?branch=master)](https://travis-ci.org/Trafikito/trafikito-support)

# How to run & build

1. fork the repo
2. clone forked repo
3. install gatsby `npm i -g gatsby`
4. install local dependencies `cd ./trafikito-support && npm i`
5. Develop: `npm run develop` http://localhost:8000/
6. Send pull request

# Production

1. Login to server
2. `git pull`
3. `npm i`
4. `npm run build` This will build to public folder and then move everything to `public_production` to avoid downtime during the build.
