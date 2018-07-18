FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y ruby ruby-dev build-essential
RUN gem install jekyll bundler
RUN gem install jekyll-feed
RUN gem install jekyll-paginate
RUN gem install minima

RUN bundle -v
RUN gem -v
RUN jekyll -v

COPY ./ /srv/faq
WORKDIR /srv/faq
CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--host", "0.0.0.0"]
