# Attempt at the DevOps-Task!

Hello,

I quite enjoyed this task. I appreciate the time and effort spent to create this.

## Introduction

I identified there's 4 tasks to be done. For Docker login variables, I used Github Secrets and passed 
them in as part of Actions. There are two secrets to be saved if forking this repo to test it out for
yourself. They're DOCKER_USERNAME and DOCKER_PASSWORD. I've also set the DOCKER_IMAGE_NAME variable in
app/Taskfile.yml to point to my dockerhub repo. This would also be required to set as your own image registry
repo prior to testing this Task submission. 



## Task - 1 - When a Pull Request is created - Run unit testing - `required`

As you may read in the `app` documentation, we have a script in the project application to run 
unit testing by running the following command.

```sh
npm test
```

The Pull Request requires this workflow to be successfully passed in order to merged into the 
`main` branch.

### Task - 1 - Resolution

The resolution to this resides at .github/workflows/unit_test.yml. I ensured prior to running
the npm test, the step runs inside the app folder and prior to running npm testinstalls requirements
using npm install.



## Task - 2 - When a Pull Request is merged - Deploy a docker image under the `main` tag - `required`

If a Pull Request has been merged into the `main` branch, we would like to create/update a 
docker image under the tag `main`, e.g: `chainsafe/devops:main`.

### Task - 2 - Resolution

-- The resolution to this resides at .github/workflows/build_on_merge.yml. The trigger is on type=closed 
but I've added the logic under the build to check if the PR wasn't closed without merging. 

-- For the Taskfile script to run, I added a step of Task installation as well as a step for Docker login. 

-- Finally a step that runs the task of docker:build-to-main, which is a task i created in app/Taskfile.yml 
that tags the image as 'main' and builds as well as pushes to the repository.



## Task - 3 - When a new Release is published - Deploy a docker image with the tag created - `required`

We want to use the [Release feature](https://github.com/ChainSafe/devops-assessments/releases/new)
to create new tags. We want this tag to follow [semver](https://semver.org) convention.

You don't need to make any validation script of the version format, you can assume this is part
of our internal process.

We want you to work in a workflow that gets triggered when you publish a new release, take the 
version of the tag you just created and set this version to a new docker build.

In addition, it's required that you publish this docker image in a image container repository hub,
you can use your favorite one (Docker Hub, Amazon ECR, etc).

Finally, please take into consideration this workflow should NOT be triggered if the release has 
been targeted in the `main` branch, since we don't want to conflict this workflow with the one 
we previously indicated in the first task.

### Task - 3 - Resolution

-- The resolution to this resides at .github/workflows/build_on_release.yml. The trigger is on type=published 
whilst ignoring releases published to main branch. 

-- For the Taskfile script to run, I added a step of Task installation as well as a step for Docker login. 

-- Finally a step that runs the task of docker:build-to-release that passes in the release tag as CLI_ARGS 
to the task command. The task I created for this builds a docker image and pushes to registry using the CLI_ARGS
as the release tag.



## Task - 4 - When a new Pull Request is created - Set the right team label - `optional`

The use of monorepos tends to make difficult to track the tasks that belong to each team.

Fortunately, GitHub offers the possibility of labeling Pull Requests to be able to filter them in 
the most optimal way possible.

We want you to set a new label standard. And assign to a Pull Request a label that displays what
team(s) are required to review it.

Use 4 labels: `team: backend`, `team: qa`, `team: docs`, `team: devops`

Create a workflow that should be triggered when a Pull Request is created or updated, and set
the proper label depending of the following cases:

`team: backend`: Assign this label if in the PR are changes in files located in `app/src` folder

`team: qa`: Assign this label if in the PR are changes in files located in `app/tests` folder

`team: docs`: Assign this label if the file `app/README.md` has been changed

`team: devops`: Assign this label if the file `app/Dockerfile` or `app/Taskfile.yml` has been
changed

### Task - 4 - Resolution

-- The resolution to this resides in .github/workflows/ with 4 yml files for labeler actions. The trigger
is when a PR is created and on the paths listed on the task above. 

-- The trouble I had with this task is the inability to use the more obvious github action called the actions/labeler.
This takes in a configuration yml file that can take as many labels to paths as required. The team: qa is a 
particular format that in itself is a key:value pair. In Yaml files the first element cannot be defined in a 
quoted format. This made it quite impossible to pass in the labels in a more easier way. I'm sure, if its given
more time a resolution could be achieved
