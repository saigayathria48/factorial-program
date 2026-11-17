# Factorial Program

Small Node.js application used to demonstrate Git/GitHub, Docker and Jenkins.

## Run locally

```powershell
npm install
npm test
node factorial.js 5
```

Expected output:

```text
Factorial of 5 = 120
```

## Build and run with Docker

```powershell
docker build -t factorial-program:latest .
docker run --rm factorial-program:latest
```

## Jenkins

Create a Pipeline job using this public repository, branch `*/main` and script path `Jenkinsfile`. The pipeline runs the tests, executes the program, builds a Docker image and runs that image.
