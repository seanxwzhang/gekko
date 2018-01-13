pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''whoami
docker-compose build'''
      }
    }
    stage('Deliver') {
      steps {
        sh '''docker-compose down
HOST=trade.seanxiaowenzhang.com PORT=3000 docker-compose up -d'''
      }
    }
  }
}