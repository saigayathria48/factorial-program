pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        IMAGE = "factorial-program:jenkins-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run tests') {
            steps {
                bat '''
                    set "PATH=C:/Program Files/nodejs;%PATH%"
                    call "C:/Program Files/nodejs/npm.cmd" test
                '''
            }
        }

        stage('Execute factorial program') {
            steps {
                bat '''
                    set "PATH=C:/Program Files/nodejs;%PATH%"
                    call "C:/Program Files/nodejs/node.exe" factorial.js 5
                '''
            }
        }

        stage('Build Docker image') {
            steps {
                bat '''
                    set "DOCKER_EXE="
                    if exist "C:/Users/SaiGayathri/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" set "DOCKER_EXE=C:/Users/SaiGayathri/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe"
                    if not defined DOCKER_EXE set "DOCKER_EXE=docker"
                    "%DOCKER_EXE%" version
                    "%DOCKER_EXE%" build -t "%IMAGE%" .
                '''
            }
        }

        stage('Run Docker image') {
            steps {
                bat '''
                    set "DOCKER_EXE="
                    if exist "C:/Users/SaiGayathri/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" set "DOCKER_EXE=C:/Users/SaiGayathri/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe"
                    if not defined DOCKER_EXE set "DOCKER_EXE=docker"
                    "%DOCKER_EXE%" run --rm "%IMAGE%"
                '''
            }
        }
    }
}
