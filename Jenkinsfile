pipeline {
  agent any

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
    }
    
  }
  post {
     success {
        withCredentials([string(credentialsId: 'botSecret', variable: 'TOKEN'), string(credentialsId: 'chatId', variable: 'CHAT_ID')]) {
        sh  ("""
            curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage -d chat_id=${CHAT_ID} -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC *Branch*: ${env.GIT_BRANCH} *Build* : OK *Published* = YES'
        """)
        }
     }

     aborted {
        withCredentials([string(credentialsId: 'botSecret', variable: 'TOKEN'), string(credentialsId: 'chatId', variable: 'CHAT_ID')]) {
        sh  ("""
            curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage -d chat_id=${CHAT_ID} -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC *Branch*: ${env.GIT_BRANCH} *Build* : `Aborted` *Published* = `Aborted`'
        """)
        }

     }
     failure {
        withCredentials([string(credentialsId: 'botSecret', variable: 'TOKEN'), string(credentialsId: 'chatId', variable: 'CHAT_ID')]) {
        sh  ("""
            curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage -d chat_id=${CHAT_ID} -d parse_mode=markdown -d text='*${env.JOB_NAME}* : POC  *Branch*: ${env.GIT_BRANCH} *Build* : `not OK` *Published* = `no`'
        """)
        }
     }

 }
}