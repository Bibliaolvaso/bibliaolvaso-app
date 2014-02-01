#!/bin/bash

log() {
  echo -e "\033[32m$1\033[0m"
}

log "cleaning dist/"
rm -rf dist/tests dist/vendor dist/assets/app.js* dist/assets/templates.js

export AWS_DEFAULT_REGION=eu-west-1

log "uploading js and css with 1 year TTL"
aws s3 sync dist/ s3://bibliaolvaso.hu/ \
  --acl public-read \
  --exclude '*' --include '*.js' --include '*.css' \
  --cache-control max-age=31536000

log "uploading other files with 1 hour TTL"
aws s3 sync dist/ s3://bibliaolvaso.hu/ \
  --acl public-read \
  --exclude '*.js' --exclude '*.css' --exclude '*.html' \
  --cache-control max-age=3600

log "uploading index.html with 5 minutes TTL"
aws s3 sync dist/ s3://bibliaolvaso.hu/ \
  --acl public-read \
  --exclude '*' --include '*.html' \
  --cache-control max-age=300

log "done."
