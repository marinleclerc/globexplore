#!/bin/bash
# File: convert.sh

parentdir=$(echo "/{$1" | sed 's|^/[^/]*||')
echo "Module ou template en cours de deploiement..."
yarn hs upload --overwrite --portal=mtg-dev-robin ./$1 globexplorer/$parentdir
