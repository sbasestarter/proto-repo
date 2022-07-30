#!/bin/bash

GIT_DOMAIN=github.com/sbasestarter/proto-repo
GIT_NAMESPACE=gen

IMAGE=lalapapa/protoc-all:latest
REPOPATH=$PWD/gen

function preBuildDir {
  currentDir="$1"
  echo "PreBuilding directory $currentDir"

  pushd $currentDir

  prototarget="protorepo-${1%/}"

  for file in *.proto
  do
    if [ ! -z ${GIT_DOMAIN} ];then
      sed -i "" "s#<domain>#${GIT_DOMAIN}#g" $file
    fi
    if [ ! -z ${GIT_NAMESPACE} ];then
      sed -i "" "s#<namespace>#${GIT_NAMESPACE}#g" $file
    fi
    sed -i "" "s#<proto-target>#${prototarget}#g" $file
  done

  popd
}

function buildDir {
  currentDir="$1"
  echo "Building directory $currentDir"

  pushd $currentDir

  buildProtoForTypes $currentDir

  popd
}

function buildProtoForTypes {
  target=${1%/}

  rm -rf gen

  if [ -f .protolangs ]; then
    while read lang; do
      [ -z "$lang" ] && continue

      reponame="protorepo-$target-$lang"

      repotarget=$REPOPATH/$reponame
      rm -rf "${repotarget}"

      mkdir -p "${repotarget}"


      OPTS="-l $lang -i /inc --with-docs"

      [[ "$lang" =~ ^go ]] && OPTS="$OPTS --with-gateway"
      [[ "$lang" =~ ^web ]] && OPTS="$OPTS --grpc-web-out import_style=commonjs"

      image_name=$IMAGE
      docker run --rm -u $(id -u) -v $PWD:/defs -v $(dirname $PWD):/inc $image_name -d . $OPTS

      # Clone the repository down and set the branch to the automated one


      # Copy the generated files out of the pb-* path into the repository
      # that we care about
      # cp -R gen/pb*$lang/* $REPOPATH/$reponame/
      find gen/pb*$lang/ -type f -exec cp -a {} ${repotarget}/ \;

      pushd "${repotarget}"
      for f in *.js; do [ -f "$f" ] || break; if [[ `awk 'NR==1{print}' "$f"` == "/* eslint-disable */"  ]]; then echo "y"; else `echo '/* eslint-disable */' | cat - "$f" > temp && mv -f temp "$f"`; fi; done
      popd

      if [ "$lang" = "js" ]; then
        cat > ${repotarget}/package.json <<_EOF
{ "name": "$target", "version": "$GITSHA" }
_EOF
      fi

    done < .protolangs
  fi
}


# SHELL_FOLDER=$(dirname $(readlink -f "$0"))
SHELL_FOLDER=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

[ -d ${SHELL_FOLDER}/../.tmp/ ] && rm -rf ${SHELL_FOLDER}/../.tmp/
mkdir -p ${SHELL_FOLDER}/../.tmp/
cp -rf ${SHELL_FOLDER}/../proto ${SHELL_FOLDER}/../.tmp/

pushd ${SHELL_FOLDER}/../.tmp/proto

echo "pwd $(pwd)"

function buildAll {
  echo "Buidling service's protocol buffers"

  for d in */; do
    echo "start pre building $d ..."
    preBuildDir $d
    echo "finish pre building $d ..."
  done

  for d in */; do
    echo "start building $d ..."
    buildDir $d
    echo "finish building $d ..."
  done
}

buildAll

[ -d ${SHELL_FOLDER}/../.tmp/ ] && rm -rf ${SHELL_FOLDER}/../.tmp/

popd

