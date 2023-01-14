# Personal Website

My personal website powered by [developerFolio](https://github.com/saadpasta/developerFolio) theme.

## How To Use

```bash
# Clone this repository
git clone git@github.com:MortalHappiness/developerFolio.git

# Go into the repository
cd developerFolio

# Setup upstream
git remote add upstream https://github.com/saadpasta/developerFolio.git
git remote set-url --push upstream no_push

# Setup default environment variables
cp env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Update from upstream and push

```bash
git fetch upstream
git rebase upstream/master
git push origin master
```
