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
npm install'''
      }
    }
    stage('Deliver') {
      steps {
        sh '''pwd
ls'''
      }
    }
  }
}