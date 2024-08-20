#!/bin/bash

# Add all changes to the staging area
git add .

# Prompt for commit message
echo -n "[+] Commit message: "
read user_message

# Set default commit message if none is provided
if [ -z "$user_message" ]; then
    user_message="No message"
fi

# Commit changes with the provided or default message
git commit -m "$user_message"

# Prompt for branch name
echo "=> Pushing changes to remote repository..."
#list all available branch
echo "================================"
git branch -a
echo "================================"

echo -n "[+] Branch name: "
read branch_name



# Set default branch name if none is provided
if [ -z "$branch_name" ]; then
    branch_name="master"
fi

# Push changes to the specified branch
git push origin "$branch_name"
