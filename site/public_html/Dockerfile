FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y ruby ruby-dev build-essential
RUN gem install public_suffix --version 3.0.2
RUN gem install jekyll bundler
RUN gem install jekyll-feed -v 0.10.0
RUN gem install jekyll-paginate
RUN gem install minima
RUN gem install sass -v 3.5.6
RUN gem install rouge -v 3.1.1
RUN gem install jekyll-livereload -v 0.2.1

RUN bundle -v
RUN gem -v
RUN jekyll -v

COPY ./ /srv/support
WORKDIR /srv/support
CMD ["bundle", "exec", "jekyll", "serve",  "--host", "0.0.0.0", "--force_polling"]
