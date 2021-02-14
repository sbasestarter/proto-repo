#!/bin/bash

GIT_DOMAIN=https://github.com/sbasestarter/proto-repo
GIT_NAMESPACE=gen/protorepo-user-go

IMAGE=lalapapa/protoc-all:latest
REPOPATH=$PWD/gen


function buildDir {
  currentDir="$1"
  echo "Building directory $currentDir"

  pushd $currentDir

  for file in *.proto
  do
    if [ ! -z ${GIT_DOMAIN} ];then
      sed -i "s#<domain>#${GIT_DOMAIN}#g" $file
    fi
    if [ ! -z ${GIT_NAMESPACE} ];then
      sed -i "s#<namespace>#${GIT_NAMESPACE}#g" $file
    fi
  done

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

      rm -rf $REPOPATH/$reponame

      mkdir -p "$REPOPATH/$reponame"
      echo "@@@@@@@@ reponame is $REPOPATH/$reponame"

      echo "- $OPTS"
      OPTS="-l $lang -i /inc"
      echo "-- $OPTS"
      [[ "$lang" =~ ^go ]] && OPTS="$OPTS --with-gateway"
      echo "--- $OPTS"
      echo "-------------------------"

      image_name=$IMAGE
      echo "############### docker run --rm -u $(id -u) -v $PWD:/defs -v $(dirname $PWD):/inc $image_name -d /inc/$target $OPTS"
      docker run --rm -u $(id -u) -v $PWD:/defs -v $(dirname $PWD):/inc $image_name -d /inc/$target $OPTS

      # Clone the repository down and set the branch to the automated one


      # Copy the generated files out of the pb-* path into the repository
      # that we care about
      # cp -R gen/pb*$lang/* $REPOPATH/$reponame/
      find gen/pb*$lang/ -type f -exec cp -a {} $REPOPATH/$reponame/ \;

      pushd "$REPOPATH/$reponame"
      for f in *.js; do [ -f "$f" ] || break; if [[ `awk 'NR==1{print}' "$f"` == "/* eslint-disable */"  ]]; then echo "y"; else `echo '/* eslint-disable */' | cat - "$f" > temp && mv -f temp "$f"`; fi; done
      popd

      if [ "$lang" = "js" ]; then
        cat > $REPOPATH/$reponame/package.json <<_EOF
{ "name": "$target", "version": "$GITSHA" }
_EOF
      fi

    done < .protolangs
  fi
}


SHELL_FOLDER=$(dirname $(readlink -f "$0"))
[ -d ${SHELL_FOLDER}/../.tmp/ ] && rm -rf ${SHELL_FOLDER}/../.tmp/
mkdir -p ${SHELL_FOLDER}/../.tmp/
cp -rf ${SHELL_FOLDER}/../proto ${SHELL_FOLDER}/../.tmp/

pushd ${SHELL_FOLDER}/../.tmp/proto

echo "pwd $(pwd)"

function buildAll {
  echo "Buidling service's protocol buffers"

  for d in */; do
    echo "start building $d ..."
    buildDir $d
    echo "finish building $d ..."
  done
}

buildAll

[ -d ${SHELL_FOLDER}/../.tmp/ ] && rm -rf ${SHELL_FOLDER}/../.tmp/

popd

