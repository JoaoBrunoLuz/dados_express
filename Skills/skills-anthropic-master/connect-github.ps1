# Connect and push to GitHub remote repository
# Run this script from the skills directory

$RepoUrl = "https://github.com/fabiotoniati/skills-anthropic.git"
$Branch = "main"

Write-Host "Connecting local repository to GitHub remote..."

git remote add origin $RepoUrl

Write-Host "Pushing to GitHub..."

git push -u origin $Branch

Write-Host "Done! Repository connected to: $RepoUrl"
Write-Host "Branch: $Branch"