pipeline {
  agent any

  environment {
    IMAGE_NAME = 'nextjs-app'
    DOCKER_REGISTRY_URL = 'https://hub.docker.com/repositories/mamicheck'
    DOCKER_REGISTRY_CREDENTIALS_ID = credentials('DOCKERHUB_CREDENTIALS')
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

    // stage('Docker push') {
    //   steps {
        
    //     withCredentials([string(credentialsId: env.DOCKER_REGISTRY_CREDENTIALS_ID, variable: 'DOCKER_REGISTRY_CREDENTIALS')]) {
    //       sh "docker login -u ${withCredentials([string(credentialsId: env.DOCKER_REGISTRY_CREDENTIALS_ID, variable: 'USERNAME')]) { return USERNAME }} -p '$DOCKER_REGISTRY_CREDENTIALS' ${env.DOCKER_REGISTRY_URL}"
    //     }
    //     sh "docker push ${env.DOCKER_REGISTRY_URL}/${env.IMAGE_NAME}"
    //   }
    // }

    // stage('Deploy') {
    //   steps {
        
    //     sh "docker run -d -p ${env.HOST_PORT}:${env.CONTAINER_PORT} ${env.DOCKER_REGISTRY_URL}/${env.IMAGE_NAME}"
    //   }
    // }
  }
}
