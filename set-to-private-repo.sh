#!/bin/bash

TOKEN="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"
USERNAME="sokpheng001"

# List all repositories
repos=$(gh repo list $USERNAME --limit 100 --json name -q '.[].name')

# Loop through repositories and update visibility to private
for repo in $repos; do
  gh repo edit $USERNAME/$repo --visibility private
done
