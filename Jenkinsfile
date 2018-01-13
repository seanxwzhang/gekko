pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '/bin/bash ./jenkins/scripts/build.sh'
      }
    }
    stage('Deliver') {
      steps {
        sh '/bin/bash ./jenkins/scripts/deliver.sh'
      }
    }
  }
}