pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker-compose build'
      }
    }
    stage('Deliver') {
      steps {
        sh 'HOST=trade.seanxiaowenzhang.com PORT=3000 docker-compose up -d'
      }
    }
  }
}