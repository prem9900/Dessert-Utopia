pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh '  stage(\'Build\')'
          }
        }

        stage('') {
          steps {
            sh ''' echo \'Building...
'''
          }
        }

      }
    }

    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            sh ' stage(\'Test\')'
          }
        }

        stage('') {
          steps {
            sh 'echo \'Running tests...'
          }
        }

      }
    }

    stage('Deploy') {
      parallel {
        stage('Deploy') {
          steps {
            sh ''' stage(\'Deploy\')
'''
          }
        }

        stage('') {
          steps {
            sh 'echo \'Deploying to server...'
          }
        }

      }
    }

  }
}