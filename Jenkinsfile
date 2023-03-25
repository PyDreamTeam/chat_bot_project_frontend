pipeline {
  agent any

  environment {
    DOCKER_IMAGE_NAME = 'nextjs-app'
    DOCKER_REGISTRY_URL = 'https://hub.docker.com/repositories/mamicheck'
    DOCKER_REGISTRY_CREDENTIALS = credentials('DOCKERHUB_CREDENTIALS')
    TELEGRAM_BOT_TOKEN = credentials('5964679894:AAHWYbBdQGcfi3N6kPIva9eMGgoFiihZm_E')
    TELEGRAM_CHAT_ID = '498456131'
  }

  stages {
    stage('Build') {
      steps {
        nodejs('18.15.0') {
          sh 'npm install --legacy-peer-deps'
          sh 'npm run build'
        }
        sh 'cp -r .next/ Dockerfile package.json yarn.lock /tmp/build'
      }
      post {
        success {
          script {
            def success_message = "Build succeeded for ${env.JOB_NAME} (${env.BUILD_NUMBER}) on ${env.NODE_NAME}"
            sendTelegramMessage(success_message)
          }
        }
        failure {
          script {
            def error_message = "Build failed for ${env.JOB_NAME} (${env.BUILD_NUMBER}) on ${env.NODE_NAME}\n\n${currentBuild.currentResult.description}"
            sendTelegramMessage(error_message)
          }
        }
      }
    }

    stage('Dockerize') {
      steps {
        withCredentials([dockerRegistry(credentialsId: env.DOCKER_REGISTRY_CREDENTIALS, url: env.DOCKER_REGISTRY_URL)]) {
          sh "docker build -t ${env.DOCKER_REGISTRY_URL}/${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER} /tmp/build"
          sh "docker push ${env.DOCKER_REGISTRY_URL}/${env.DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
        }
      }
      post {
        success {
          script {
            def success_message = "Docker deployment succeeded for ${env.JOB_NAME} (${env.BUILD_NUMBER}) on ${env.NODE_NAME}"
            sendTelegramMessage(success_message)
          }
        }
        failure {
          script {
            def error_message = "Docker deployment failed for ${env.JOB_NAME} (${env.BUILD_NUMBER}) on ${env.NODE_NAME}\n\n${currentBuild.currentResult.description}"
            sendTelegramMessage(error_message)
          }
        }
      }
    }
  }
}

def sendTelegramMessage(String message) {
  def telegramUrl = "https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage"
  def payload = [
    chat_id: env.TELEGRAM_CHAT_ID,
    text: message
  ]
  def jsonPayload = new groovy.json.JsonBuilder(payload).toString()
  sh "curl -s -X POST -H 'Content-Type: application/json' --data '${jsonPayload}' ${telegramUrl}"
}
