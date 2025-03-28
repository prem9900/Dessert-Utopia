pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'prem094/my-project:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    cd client-main
                    npm install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                    cd client-main
                    npm test
                '''
            }
        }

        stage('Build Project') {
            steps {
                sh '''
                    cd client-main
                    npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $DOCKER_IMAGE ./client-main
                '''
            }
        }

        stage('Push to Docker Hub') {
            environment {
                DOCKER_CLI_AUTH = 'yes'
            }
            steps {
                withDockerRegistry([ credentialsId: 'docker-hub-credentials', url: 'https://index.docker.io/v1/' ]) {
                    sh '''
                        docker push $DOCKER_IMAGE
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed! Check the logs for details.'
        }
    }
}
