pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sudo docker-compose build'
      }
    }
    stage('Deliver') {
      steps {
        sh 'HOST=trade.seanxiaowenzhang.com PORT=3000 sudo docker-compose up -d'
      }
    }
  }
}