#!/bin/sh

curl https://developer.spotify.com/reference/web-api/open-api-schema.yaml > ./tools/schema/main/openapi-schema.yaml
curl https://developer.spotify.com/reference/policies.yaml > ./tools/schema/policies.yaml
