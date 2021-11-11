# Node.js Application

This is a small dockerized application written in Node.js that contains 4 sample endpoints.

`/`: Displays a welcome message with the list of registered routes, returns 200 OK.

`/ip`: Displays your IP address, returns 200 OK.

`/password`: Displays a randomized password string, it should be renewed when you refresh, returns
200 OK.

`/healthcheck`: Simple healthcheck that returns empty 200 OK status code.

## Docker

The application can be built using Docker, in order to do that you can run the commands we have in
the `Taskfile.yml` file.

```sh
# to build a new docker image
task docker:build

# to run an existing docker image
task docker:run
```

The docker image will be tagged as `chainsafe/devops`.

## Unit Testing

Unit testing can be performed by running the command:

```sh
npm test
```

