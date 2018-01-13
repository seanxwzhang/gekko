pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''sudo su ubuntu
npm install --only=production'''
      }
    }
    stage('Deliver') {
      steps {
        sh '''sudo su ubuntu
npm install -g pm2
pm2 kill
pm2 start gekko.js -- --ui
curl localhost:3000'''
      }
    }
  }
}