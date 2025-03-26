pipeline {
    agent {
        docker {
            image 'docker:latest' // Use a Docker image with Docker installed
            args '--privileged' // Optional: Allow Docker inside Docker if needed
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
                    sh 'docker build -t $DOCKER_IMAGE .'
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
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
    }
}
