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
        sh '''env
docker ps --format \'{{.Names}}\' | grep "gekko" | awk \'{print $1}\' | xargs -I {} docker stop {}
HOST=trade.seanxiaowenzhang.com PORT=3000 docker-compose up -d'''
      }
    }
  }
}