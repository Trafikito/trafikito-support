#!/usr/bin/env bash
echo "Hello from Travis! $TRAVIS_BUILD_DIR"
echo "$(tail -n 50 .travis/encryption_test.txt)"