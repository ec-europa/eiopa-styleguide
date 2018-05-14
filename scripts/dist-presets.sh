#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build packages
yarn lerna --concurrency 3 --scope "@ecl/*-preset-*" run dist

# Copy builds
rm -rf ./dist/packages
mkdir -p ./dist/packages
cp -r ./src/systems/eiopa/eiopa-preset/eiopa-preset-base/dist ./dist/packages/eiopa-preset-base
cp -r ./src/systems/eiopa/eiopa-preset/eiopa-preset-full/dist ./dist/packages/eiopa-preset-full
cp -r ./src/systems/eiopa/eiopa-preset/eiopa-preset-website/dist ./dist/packages/eiopa-preset-website
