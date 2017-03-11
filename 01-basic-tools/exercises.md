# Practical part

**Before you start please check if you have all  of the [prerequirements](https://github.com/ng-slo/workshop/tree/master/01-basic-tools#prerequirements) done.**

### Exercise 1
1. set git configs username and email

### Exercise 2
1. Create a new folder for your project (examples: ex_1)
2. Go into this folder and initialise git
3. Create a new text file
4. Add it to you git
5. Create a commit
6. Check if the commit is inside your log
7. Go back to your starting folder

### Exercise 3
1. Create a new repository on GitHub (don't select *Initialize this repository with a README*)
2. Create a new folder for your project (examples: ex_2)
3. Go into this folder and initialise git
3. Add remote repository from GitHub to your remotes
4. Create new markdown file (`README.md`) with h1 title `My repository`
5. Create a commit
6. Push it to your remote repository (GitHub)
7. Check if you see your commit on GitHub
8. Go back to your starting folder

### Exercise 4
1. Create a new folder for your project (examples: ex_3)
2. Go into this folder and clone repository from GitHub that you created in Exercise 2
3. Edit file `README.md`, add some text (maybe use Lorem Ipsum page :))
4. Create a new file `branch.md` and add title `My branch`
5. Now push edited file to your remote master branch
6. Create a new branch with the name `first` and checkout this branch
7. Push the new file to this new branch on GitHub
8. Go back to your starting folder

### Exercise 5
1. Go back to your starting folder
2. Fork this repository [https://github.com/ng-slo/workshop1](https://github.com/ng-slo/workshop1)
3. Clone your fork
4. Checkout branch `pr`
5. Create file `test.md` and add some text
6. Push change to your fork
7. Create pull request(PR) on forked repository

### Exercise 6
1. Stay in the same repository as you were in exercise 5
2. Create two branches `pr2` and `pr3` from the master
3. Checkout branch `pr2`
5. Edit file `index.js` with the following changes (you can try it out with command `node index.js`)
    - change iteration of first `for` to 4
    - change `human` to your name
6. Push this change to your fork
8. Go to your branch `pr2` and try to merge `conflict` branch into this branch
9. Solve a conflict
10. Create a merge commit and push it to your branch
11. Create a pull request(PR) on forked repository


### Exercise 7
1. Stay in the same repository as you were in exercise 6
2. Checkout branch `pr3`
3. Edit file `index.js` with the following change: change iteration of first `for` to 4
4. Commit this file
5. Edit file `index.js` with the following change: change `human` to your name
5. Commit this file
6. Rebase to `conflict` branch
7. Solve a conflict
8. Squash this two commits 
9. Create a pull request(PR) on forked repository

### Exercise 8 (NPM)
1. Initialize npm
2. Add a script that will run your `npm.js` file
3. Install the package `lodash`
4. Use the array `users` in the file `npm.js` and join `firstName` with `lastName` into a new array `fullUsers`
5. End result should be an array with entries like this `Janez Novak`, `Franc Horvat`, etc.
6. Print out this array with script from `package.json`
