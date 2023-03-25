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
        
        sh "docker build -t ${env.IMAGE_NAME} ."
      }
    }

    stage('Build Docker image') {
      steps {
        script {
          docker.build("nextapp:${env.BUILD_ID}")
          docker.withRegistry('https://hub.docker.com/repositories/mamicheck', 'DOCKERHUB_CREDENTIALS') {
            docker.image("myapp:${env.BUILD_ID}").push()
          }
        }
      }
    }
    
    stage('Deploy using Docker Compose') {
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}
