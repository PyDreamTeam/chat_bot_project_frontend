pipeline {
  agent any

  environment {
    IMAGE_NAME = 'nextjs-app'
    DOCKER_REGISTRY_URL = 'https://hub.docker.com/repositories/mamicheck'
    DOCKERHUB_USERNAME = credentials('DOCKERHUB_CREDENTIALS').username
    DOCKERHUB_PASSWORD = credentials('DOCKERHUB_CREDENTIALS').password
    CONTAINER_PORT = '3000'
    HOST_PORT = '3000'
    // TELEGRAM_BOT_TOKEN = credentials('5964679894:AAHWYbBdQGcfi3N6kPIva9eMGgoFiihZm_E')
    // TELEGRAM_CHAT_ID = '498456131'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Docker build') {
      steps {
        
        sh "docker build -t ${env.IMAGE_NAME} ."
      }
    }

    stage('Docker push') {
      steps {
        
        sh "echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin"
        
        sh "docker push ${env.DOCKER_REGISTRY_URL}/${env.IMAGE_NAME}"
      }
    }

    stage('Deploy') {
      steps {
        
        sh "docker run -d -p ${env.HOST_PORT}:${env.CONTAINER_PORT} ${env.DOCKER_REGISTRY_URL}/${env.IMAGE_NAME}"
      }
    }
  }
}
