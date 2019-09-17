name=cv

.PHONY:build
build:
	yarn build
	docker image build \
		-t ${name}:latest \
		.

.PHONY:run
run:
	docker container run \
		--rm \
		--name ${name}-dev \
		-p 3000:80 \
		-t ${name}:latest

.PHONY:kill
kill:
	docker kill $$( \
		docker ps -aq \
			--filter="name=${name}-dev" )

