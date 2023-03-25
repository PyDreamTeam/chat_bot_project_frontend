pipeline {
  agent {
    label 'docker'
    } 
  environment {
    DOCKER_IMAGE = 'next-app-image'
    DOCKER_CONTAINER_NAME = 'next-app'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
     stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build and Test') {
      steps {
        sh 'npm run build'
        sh 'npm run lint'
      }
    }
    stage('Docker Build and Run') {
      steps {
        sh "docker build -t ${DOCKER_IMAGE}:latest ."
        sh "docker stop ${DOCKER_CONTAINER_NAME} || true && docker rm ${DOCKER_CONTAINER_NAME} || true"
        sh "docker run -d --name ${DOCKER_CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE}:latest"
      }
    }
  }
}