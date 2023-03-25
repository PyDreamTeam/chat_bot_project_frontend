pipeline {
    agent any

    tools {
        nodejs "node18.15.0"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install --legacy-peer-deps'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
        }
    }
