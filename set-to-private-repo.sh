#!/bin/bash

TOKEN="yourgithub_token"
USERNAME="github_username"

# List all repositories
repos=$(gh repo list $USERNAME --limit 100 --json name -q '.[].name')

# Loop through repositories and update visibility to private
for repo in $repos; do
  gh repo edit $USERNAME/$repo --visibility private
done
