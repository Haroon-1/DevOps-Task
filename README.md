# Welcome!

Hello,

We are very happy that you have reached this point in the process.

We believe that you will enjoy this test very much, we are very sure that it is very
different from others you might have made in the past, just as we are at ChainSafe :)

## Introduction

We at ChainSafe always look for alternatives to automate our processes as much as possible.

Being a decentralized development team located in different parts of the world, 
we understand the need to automate processes that allows us a better way to manage a project.

Our projects are mostly based on a microservices architecture, where different teams work under 
their own methodologies within the same repository.

## Getting Start

Please, create a repository and place this source code into it, when you finish this practice, 
feel free to send us your repository url so we can take a look and start the review process.

## Application Details

Take a look at the README in the `app` folder.

## Notes to take into consideration first

### `scripting`

Use [Taskfile](https://taskfile.dev/#/) to create scripts, in our opinion is better than Makefile
since it makes easy to read and understand.

### `documentation`

Use [Markdown](https://guides.github.com/features/mastering-markdown/), you can edit the README.md
file or create a new one if you want/require.

### `configuration`

Use [YAML](https://yaml.org/) if you want to use a configuration file. 
Easy to read and understand.

## Tasks

We want to integrate a CI / CD service to be able to carry out scripts depending on the events 
that occur in our repository.

You are free to choose the service you want, however, we recommend GitHub Actions 
as it is our main provider.

Please work on the following assignments ordered by priority.

### When a Pull Request is created - Run unit testing - `required`

As you may read in the `app` documentation, we have a script in the project application to run 
unit testing by running the following command.

```sh
npm test
```

The Pull Request requires this workflow to be successfully passed in order to merged into the 
`main` branch.

### When a Pull Request is merged - Deploy a docker image under the `main` tag - `required`

If a Pull Request has been merged into the `main` branch, we would like to create/update a 
docker image under the tag `main`, e.g: `chainsafe/devops:main`.

### When a new Release is published - Deploy a docker image with the tag created - `required`

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

### When a new Pull Request is created - Set the right team label - `optional`

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

## FAQ

#### `Can I store my own secrets on this repository?`

This repo is yours, you are the owner and can configure it in the way that you desire.
After your test, this repository will be permanently deleted, feel free to store any secrets in
the repository settings.

#### `There are tasks that require to deploy a docker image, where can I do that?`

Feel free to use the service that you want, this is part of the review, we would like you to take
ownership of this task and perform the best and secure way to establish a communication between
GitHub and your chosen Docker image repository.

#### `There are tasks that require me to change the folder structure, can I do that?`

Sure, feel free to change the repository folder structure in the way that you desire. 

## Review

Part of the things we will review are the following:

- `security`: we want you to make sure to use rightly secrets and any other particular value
- `clarity`: we want you to make sure to create a clear workflow per indication, instead of 
combing everything in a single file that makes everything hard to read
- `documentation`: please try to document all the things you are doing as possible
- `etc`: feel free to impress us with things you usually do in your projects, we want to know the 
way you work


