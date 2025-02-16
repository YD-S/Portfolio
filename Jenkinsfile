pipeline {
      agent any
    environment {
        // Define registry URL separately
        REGISTRY_URL = 'docker.io'  // Replace with your actual registry URL
        // Get registry credentials
        DOCKER_REGISTRY = credentials('dockerhub')
        // Use REGISTRY_URL in image name
        DOCKER_IMAGE = "yashds03/portfolio"
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
					// add latest and build number tags
					sh "docker tag ${DOCKER_IMAGE} ${DOCKER_IMAGE}:latest"
					sh "docker tag ${DOCKER_IMAGE} ${DOCKER_IMAGE}:${VERSION}"
			}
		}
	}

        stage('Build & push to Registry') {
            steps {
				script {
					withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
						sh "docker login -u $USERNAME -p $PASSWORD https://${REGISTRY_URL}"
						sh "docker push ${DOCKER_IMAGE}:latest"
						sh "docker push ${DOCKER_IMAGE}:${VERSION}"
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
