FILES=$(shell find . -not -path "./vendor/*" -type f -name "*.proto")
WORK_PATH=$(shell pwd)

# Install Dependencies
lint:
	protolint lint -fix .

# https://github.com/envoyproxy/protoc-gen-validate/issues/498
.PHONY: protoc
protoc:
	@for file in $(FILES); do \
		protoc \
			-I . \
			-I ${GOPATH}/proto \
			-I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.7 \
			--go_out=. --go_opt=paths=source_relative \
			--go-grpc_out=. --go-grpc_opt=paths=source_relative \
			--validate_out="lang=go,paths=source_relative:." \
			$$file; \
	done

doc:
	protoc \
		-I . \
		-I ${GOPATH}/src \
		-I ${GOPATH}/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v0.6.1 \
		--doc_out=./docs --doc_opt=html,index.html \
		message/*/*.proto service/*.proto

build: protoc doc

lint_in_docker:
	/usr/local/bin/docker run --volume "$(WORK_PATH):/workspace" --workdir /workspace yoheimuta/protolint lint ./proto

compile_in_docker: lint_in_docker
	/usr/local/bin/docker run --rm -v $(WORK_PATH):/hare -w /hare thethingsindustries/protoc \
		--proto_path=. \
		--proto_path=/usr/include/github.com/envoyproxy/protoc-gen-validate \
		--go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		--doc_out=./docs --doc_opt=html,index.html \
		--validate_out="lang=go,paths=source_relative:." \
		$(shell find ./proto -name '*.proto')

build_in_docker: compile_in_docker
	$(shell cp -r proto/message go && cp -r proto/service go && find go -depth -name '*.proto' | xargs rm)
	$(shell find proto -depth -name '*.go' | xargs rm)
#	$(shell cp -r message go && cp -r service go && find go -depth -name '*.proto' | xargs rm)
#	$(shell find service -depth -name '*.go' | xargs rm && find message -depth -name '*.go' | xargs rm)

m1_compile_in_docker:
	/usr/local/bin/docker run --rm -v $(WORK_PATH):/hare -w /hare protoc \
		--proto_path=. \
		--proto_path=/usr/include \
		--proto_path=/usr/include/github.com/envoyproxy/protoc-gen-validate \
		--go_out=. --go_opt=paths=source_relative \
		--go-grpc_out=. --go-grpc_opt=paths=source_relative \
		--doc_out=./docs --doc_opt=html,index.html \
		--validate_out="lang=go,paths=source_relative:." \
		$(shell find ./proto -name '*.proto')

m1_build_in_docker: m1_compile_in_docker
	$(shell cp -r proto/service go && cp -r proto/hokey go && cp -r proto/message go && find go -depth -name '*.proto' | xargs rm)
	$(shell find proto -depth -name '*.go' | xargs rm)
