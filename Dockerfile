FROM node:10.15-slim

ENV DOCKERIZE_VERSION v0.6.1

# Update image and install dependencies
RUN set -x \
    && apt-get update && apt-get install -y git python g++ build-essential procps --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get install \
    unzip \
    && \
    DL=https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && curl -sL "$DL" > /tmp/chrome.deb \
    && apt install --no-install-recommends --no-install-suggests -y \
    /tmp/chrome.deb \
    && CHROMIUM_FLAGS='--headless --no-sandbox --disable-dev-shm-usage --verbose' \
    # Patch Chrome launch script and append CHROMIUM_FLAGS to the last line:
    && sed -i '${s/$/'" $CHROMIUM_FLAGS"'/}' /opt/google/chrome/google-chrome \
    && BASE_URL=https://chromedriver.storage.googleapis.com \
    && VERSION=$(curl -sL "$BASE_URL/LATEST_RELEASE") \
    && curl -sL "$BASE_URL/$VERSION/chromedriver_linux64.zip" -o /tmp/driver.zip \
    && unzip /tmp/driver.zip \
    && chmod 755 chromedriver \
    && mv chromedriver /usr/local/bin/ \
    # Remove obsolete files:
    && apt-get autoremove --purge -y \
    unzip \
    && apt-get clean \
    && rm -rf \
    /tmp/* \
    /usr/share/doc/* \
    /var/cache/* \
    /var/lib/apt/lists/* \
    /var/tmp/*

# Prepare workdir with application code
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Setup environment
ARG NODE_ENV

ENV NODE_ENV $NODE_ENV

# Install application
RUN set -x \
    && yarn install
