#!/usr/bin/env sh
# Find all the .env.* files in the current directory
env_files=$(ls environments/.env*)

# Iterate through each .env.* file
for env_file in $env_files; do
  # Check if the corresponding .env.*.local file already exists and does not end with .local
  local_file=$env_file.local
  if [ ! -f $local_file ] && [ "${env_file: -6}" != ".local" ]; then
    # If the .env.*.local file doesn't exist and does not end with .local, create it by copying the contents of the .env.* file
    cp $env_file $local_file
  fi
done
