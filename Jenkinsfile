pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''whoami
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