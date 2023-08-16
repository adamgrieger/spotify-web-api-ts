#!/bin/sh

mv ./src/openapi/core/request.ts ./request.ts

openapi \
	--input ./tools/schema/main/openapi-schema.yaml \
	--output ./src/openapi \
	--client axios \
	--indent 2

mv ./src/openapi/core/request.ts ./src/openapi/core/_request.ts

mv ./request.ts ./src/openapi/core/request.ts 
