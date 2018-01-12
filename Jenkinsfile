pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''echo $(pwd)
npm install
npm install -g pm2'''
      }
    }
    stage('Deliver') {
      steps {
        sh '''pwd
ls jenkins
pm2 kill
pm2 start gekko.js -- -ui
pm2 monitor'''
      }
    }
  }
}