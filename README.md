# React Starterkit (Tasky)

React web project starter kit including modern tools and workflow, best practices from the community, a scalable base template and a good learning base.

## Prerequisites

1. Install Node.js LTS version ([from here](https://nodejs.org/en/)).

2. For package manager, Install Yarn v1 ([from here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)).

```sh
  npm install --global yarn
```

3. Check that Yarn is successfully installed by running: `yarn --version`

4. For better development experience install all recommened extensions for this project in VSCode (if using). VS Code prompts a user to install the recommended extensions when a workspace is opened for the first time. The user can also review the list with the Extensions: Show Recommended Extensions command.

## Setup

Please follow all below steps to setup the project correctly on your local machine.

#### Clone the project repo

```sh
git clone https://github.com/abhiagrawal9/react-boilerplate.git
```

#### Change current directory to project root folder

```sh
cd react-starterkit
```

#### Install project dependencies

```sh
yarn install
```

#### Environment variables setup (Important)

In the project root dir, [environments](https://github.com/abhiagrawal9/react-boilerplate/tree/main/environments) folder contains template environment files for below modes

| Mode        | Env File        |
| ----------- | --------------- |
| local       | .env            |
| development | .env.dev        |
| qa          | .env.qa         |
| staging     | .env.staging    |
| production  | .env.production |

`.env.*.local` files created contain sensitive variables and as these files are local only and are .local they are ignored by git.

```
.env # loaded in all cases
.env.local # loaded in all cases, ignored by git
.env.[mode] # only loaded in specified mode
.env.[mode].local # only loaded in specified mode, ignored by git
```

> Note: The .local files for each mode will be created automatically after running 'yarn / yarn install' command using postinstall script.

_For local development server_, Change the `VITE_API_BASE_URL` value to `"https://api.chucknorris.io"` in `.env.local` file.

_For other modes_, You must update the environment variables in `.env.[mode].local` file.

> Note: You must create custom environment variables beginning with VITE\_

#### Launch local development server

Run below cammand in root directory, and open `localhost:3000` in your browser:

```sh
yarn start
```

#### Build for Production

```sh
yarn build
```

> Note: To update the build's (patch) version, use 'yarn bumpversion:patch' command before running 'yarn build', you can also use 'yarn bumpversion:major' / ' yarn bumpversion:minor' commands respectively to update the respective parts of the version.

```sh
yarn bumpversion:patch
```

#### Preview of Production build

Run below cammand in root directory, and open `localhost:8080` in your browser:

```sh
yarn serve
```

---

<sup>Made by Abhishek Agrawal.</sup>
