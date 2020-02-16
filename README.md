# CV template
[![Build Status](https://travis-ci.com/WhoMeNope/cv.svg?branch=master)](https://travis-ci.com/WhoMeNope/cv)

Renders structured JSON as a beautiful dynamic CV.

## Features
1. Automatically render structured CV data (JSON)
2. Auto-organizing events' timeline
3. Minimal pastel-themed design
4. Print-ready

## Available as a Docker image
To run:

1. Create `data.js` according to the template in `public/data.js`
2. Run
  ```sh
  $ docker run --rm \
    --port 3000:80 \
    --mount type=bind,source=$(pwd)/data.js,target=/usr/share/nginx/html/data.js,readonly \
    whomenope/cv:latest
  ```
