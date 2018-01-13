pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''export PATH=/root/.nvm/versions/node/v9.4.0/bin:$PATH
npm install
npm install -g pm2'''
      }
    }
    stage('Deliver') {
      steps {
        sh '''pwd
ls jenkins
pm2 kill
pm2 start gekko.js -- -ui'''
      }
    }
  }
}