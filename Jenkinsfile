pipeline {
  agent any

  environment {
    DOCKER_REGISTRY = 'https://hub.docker.com/repositories/mamicheck'
    DOCKER_IMAGE_NAME = 'nextjs'
    DOCKER_IMAGE_TAG = 'latest'
    SSH_KEY = credentials('SERVER_SSH')
    SERVER_HOST = 'jenkins'
    SERVER_USERNAME = 'evgeniy_r92'
    NPM_VERSION = '18.15.0'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      tools {
        nodejs "${NPM_VERSION}"
      }
      steps {
        sh 'npm install'
      }
    }

    stage('Run tests') {
      tools {
        nodejs "${NPM_VERSION}"
      }
      steps {
        sh 'npm run test'
      }
    }

    stage('Build and push Docker image') {
      steps {
        script {
          def dockerImage = docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}", "-f Dockerfile .")
          docker.withRegistry("${DOCKER_REGISTRY}", 'docker-registry-credential-id') {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy to server') {
      steps {
        sshagent(['your-ssh-key-credential-id']) {
          sh '''
            ssh -o StrictHostKeyChecking=no ${SERVER_USERNAME}@${SERVER_HOST} << EOF
            docker stop ${DOCKER_IMAGE_NAME} || true
            docker rm ${DOCKER_IMAGE_NAME} || true
            docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}
            docker run -d --name ${DOCKER_IMAGE_NAME} \
              -p 3000:3000 \
              ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}
            EOF
          '''
        }
      }
    }
  }
}
