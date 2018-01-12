pipeline {
  agent {
    docker {
      image 'docker'
      args '-p 3000:3000'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''echo $(pwd)
npm install'''
      }
    }
  }
}