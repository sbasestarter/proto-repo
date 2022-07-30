#!/bin/bash

# /usr/sbin/softwareupdate --install-rosetta --agree-to-license
export DOCKER_DEFAULT_PLATFORM=linux/amd64
SHELL_FOLDER=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
${SHELL_FOLDER}/gen.sh
