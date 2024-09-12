pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Your build steps here
                sh 'echo "Building the project"'
            }
        }
        stage('Test') {
            steps {
                // Your test steps here
                sh 'echo "Running tests"'
            }
        }
    }
    post {
        success {
            script {
                // Make the script executable (in case it isn't already)
                sh 'chmod +x ./telegram-nitification.sh'
                
                // Execute the script
                sh './telegram-nitification.sh'
            }
        }
    }
}