pipeline {
    agent any

    tools {
        nodejs "node18.15.0"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'npm prune --production'
                sh 'docker build -t my-next-app .'
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'DOCKERHUB_CREDENTIALS', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    sh 'docker tag my-next-app:latest mamicheck/my-next-app:latest'
                    sh 'docker push mamicheck/my-next-app:latest'
                }
            }
        }
    }
}
