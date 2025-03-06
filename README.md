# Git Tutorial

## Git Commands

- `git init`  
  Initialize a local repository

- `git status`  
  Check status of repository

- `git add <fileName>`  
  Add file to staging area

- `git commit -m "comment"`  
  Commit changes

- `git add -A`  
  Add all to staging area

- `git commit -m "comment"`  
  Commit

- `git push origin main`  
  Push changes to remote repository

- `git diff`  
  Show changes made to code

- `git reset`  
  Remove everything from staging area

- `git clone <URL>`  
  Clone remote repository into current directory

- `git pull origin main`  
  Get updates from repository

- `git checkout <branchName>`  
  Switch branch

- `git remote add origin https://github.com/user/repo.git`  
  Set a new remote

- `git remote -v`  
  Verify new remote

- `git log --oneline`  
  Check log of commits

- `git remote set-url origin https://git-repo/new-repository.git`  
  Set new origin

- `git branch -m main`  
  Create a branch called main

- `git branch -m master main`  
  Change name of local branch from master to main

- `git push -u origin main`  
  Push changes to remote repository and set upstream

- `git branch --show-current`  
  Show current branch

- `git branch -D <branchName>`  
  Delete branch (need to get off branch before deleting)

- `rm -rf .git`  
  Delete local repository (must be in current directory of local repo)

- `git config --global init.defaultBranch main`  
  Use to make default branch name as main

## Git Team Collaboration

- `git clone <URL>`  
  Clone the remote repository

- `git pull origin main`  
  Get the latest updates and changes from other devs (make sure you are in main branch on local machine before making a pull)

- `git checkout -b <branchName>`  
  Create a new branch to work on so that the main branch is preserved

- `git add .`  
  Add files to be committed

- `git commit -m "<your comments here>"`  
  Commit the files to be added

- `git push origin <branchName>`  
  Push up your branch to GitHub for review

- Pull request (on GitHub) to merge new branch with main branch
