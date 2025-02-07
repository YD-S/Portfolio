pipeline {
    agent any

    environment {
        // Define registry URL separately
        REGISTRY_URL = 'https://dck.koltserver.net'  // Replace with your actual registry URL
        // Get registry credentials
        DOCKER_REGISTRY = credentials('docker-registry')
        // Use REGISTRY_URL in image name
        DOCKER_IMAGE = "${REGISTRY_URL}/portfolio:latest"
        PORTAINER_WEBHOOK = 'https://portainer.koltserver.net/api/stacks/webhooks/29da2db5-3bb1-4f8e-925a-9524f327ba65'
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/YD-S/Portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE, '.')
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    // Use REGISTRY_URL here instead of DOCKER_REGISTRY_URL
                    docker.withRegistry("https://${REGISTRY_URL}", 'docker-registry') {
                        docker.image(DOCKER_IMAGE).push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh """
                        curl -X POST ${PORTAINER_WEBHOOK}
                    """
                }
            }
        }
    }
}