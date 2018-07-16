# Run locally:

```
cd ./src/
jekyll serve --livereload
```
or
```
cd ./src/
bundle exec jekyll serve --livereload
```

# Build site for production:

```
cd ./src/
JEKYLL_ENV=production bundle exec jekyll build -d ../public_html/faq
```
