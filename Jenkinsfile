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

    stage('Docker push') {
      steps {
        // Push Docker image to Docker Hub or other Docker registry
        withCredentials([string(credentialsId: 'DOCKERHUB_CREDENTIALS', variable: 'DOCKER_HUB_CREDENTIALS')]) {
          sh 'docker login -u mamicheck -p "$DOCKER_HUB_CREDENTIALS"'
        }
        sh 'docker push nextapp'
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