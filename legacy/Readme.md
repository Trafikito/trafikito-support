# Run locally:

```
docker-compose up --build
```

# Build site for production:

Login to docker and run:

```
cd /srv/support
JEKYLL_ENV=production bundle exec jekyll build -d ./public_html/
```



# Migration
Site is migrating to gatsby.