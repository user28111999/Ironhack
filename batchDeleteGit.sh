#!/bin/bash

for folder in $(find . -mindepth 2 -name ".git" -type d)
  do rm -rf "$folder"
done
