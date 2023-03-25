pipeline{
    agent any
    environment{
        APP_NAME = "nextjs_app"
        NODE_VERSION = 18
        NPM_VERSION = 8
    }
    stages{
        stage("Chekout"){
            steps{
                checkout scm
            }
        }
        stage("Install&&Build"){
            steps{
                sh "nvm install $NODE_VERSION"
                sh "npm install -g npm@$NPM_VERSION"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /var/www/nextjs-app"
                sh "cp -r ${WORKSPACE}/build/ /var/www/nextjs-app/"
            }
        }
}
}