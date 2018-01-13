pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''export PATH=/root/.nvm/versions/node/v9.4.0/bin:$PATH
npm install --only=production'''
      }
    }
    stage('Deliver') {
      steps {
        sh '''export PATH=/root/.nvm/versions/node/v9.4.0/bin:$PATH
npm install -g pm2
pm2 kill
pm2 start gekko.js -- --ui
curl localhost:3000'''
      }
    }
  }
}