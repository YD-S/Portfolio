pipeline {
      agent any
    environment {
        // Define registry URL separately
        REGISTRY_URL = 'dck.koltserver.net'  // Replace with your actual registry URL
        // Get registry credentials
        DOCKER_REGISTRY = credentials('docker-registry')
        // Use REGISTRY_URL in image name
        DOCKER_IMAGE = "yash/portfolio"
        VERSION = "${env.BUILD_ID}-${env.GIT_COMMIT}"
        PORTAINER_WEBHOOK = 'https://portainer.koltserver.net/api/stacks/webhooks/c157f205-6e4a-488e-a9d9-15c6b921efa9'
    }

    stages {

        stage('Verify dependencies') {
		steps {
			script {
				sh 'curl --version'
				sh 'docker --version'
			}
		}
	}

        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/YD-S/Portfolio.git'
            }
        }

        stage('Build') {
		steps {
			script {
				sh "docker build -t ${DOCKER_IMAGE} ."
			}
		}
	}

        stage('Build & push to Registry') {
            steps {
				script {
					withCredentials([usernamePassword(credentialsId: 'docker-registry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
						sh "docker login -u $USERNAME -p $PASSWORD https://${REGISTRY_URL}"
						sh "docker push ${REGISTRY_URL}/${DOCKER_IMAGE}:latest"
						sh "docker push ${REGISTRY_URL}/${DOCKER_IMAGE}:${VERSION}"
					}
				}
			}
        }

        stage('Deploy') {
            steps {
                script {
                    sh "curl -X POST ${PORTAINER_WEBHOOK}"
                }
            }
        }
    }
}
