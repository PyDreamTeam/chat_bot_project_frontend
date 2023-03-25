pipeline {
  agent any
  environment {
    TELEGRAM_BOT_TOKEN = credentials('5964679894:AAHWYbBdQGcfi3N6kPIva9eMGgoFiihZm_E')
    TELEGRAM_CHAT_ID = '5964679894' // replace with your chat ID
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Stop and delete old containers') {
      steps {
        
        sh 'docker stop $(docker ps -aq) && docker rm $(docker ps -aq)'
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
      post {
        success {
          script {
            def success_message = "Deployment succeeded for ${env.JOB_NAME} (${env.BUILD_NUMBER}) on ${env.NODE_NAME}"
            sendTelegramMessage(success_message)
          }
        }
        failure {
          script {
            def error_message = "Deployment failed for ${env.JOB_NAME} (${env.BUILD_NUMBER}) on ${env.NODE_NAME}\n\n${currentBuild.currentResult.description}"
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