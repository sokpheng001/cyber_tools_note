git add .
echo -n "Commit message: "
read user_message
git commit -m "$user_message"


echo "Pushing changes to remote repository..."
echo -n "Branch name: "
read branch_name
git push origin "$branch_name"

