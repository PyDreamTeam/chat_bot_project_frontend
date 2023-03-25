pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Docker build') {
      steps {
        // Build Docker image with the Next.js application
        sh 'docker build -t nextapp .'
      }
    }

    stage('Deploy') {
      steps {
        // Deploy Docker container to a server
        sh 'docker run -d -p 3000:3000 nextapp'
      }
    }
  }
}