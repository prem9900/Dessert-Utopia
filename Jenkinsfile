pipeline {
    agent {
        docker {
            image 'node:20' // Using Node.js with Docker installed
        }
    }
    environment {
        DOCKER_IMAGE = 'prem094/my-project:latest'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker Image..."
                    sh "docker build -t ${env.DOCKER_IMAGE} ."
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                script {
                    echo "Logging into Docker Hub..."
                    withDockerRegistry([credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/']) {
                        echo "Successfully logged in to Docker Hub"
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    echo "Pushing Docker Image to Docker Hub..."
                    sh "docker push ${env.DOCKER_IMAGE}"
                }
            }
        }
    }
}
