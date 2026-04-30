#!/bin/bash
# Connect and push to GitHub remote repository
# Run this script from the skills directory

REPO_URL="https://github.com/fabiotoniati/skills-anthropic.git"
BRANCH="main"

echo "Connecting local repository to GitHub remote..."

git remote add origin $REPO_URL

echo "Pushing to GitHub..."

git push -u origin $BRANCH

echo "Done! Repository connected to: $REPO_URL"
echo "Branch: $BRANCH"