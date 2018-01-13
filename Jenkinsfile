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
rm -rf ./volumes/gekko/history
mkdir -p ./volumes/gekko
mkdir -p ./volumes/redis
ln -s /home/ubuntu/src/gekko/history ./volumes/gekko/
docker ps --format \'{{.Names}}\' | grep "gekko" | awk \'{print $1}\' | xargs -I {} docker stop {}
HOST=trade.seanxiaowenzhang.com PORT=3000 docker-compose up -d'''
      }
    }
  }
}
