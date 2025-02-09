pipeline {
      agent {
              docker {
                  image 'docker:latest'
              }
          }
    environment {
        // Define registry URL separately
        REGISTRY_URL = 'dck.koltserver.net'  // Replace with your actual registry URL
        // Get registry credentials
        DOCKER_REGISTRY = credentials('docker-registry')
        // Use REGISTRY_URL in image name
        DOCKER_IMAGE = "yash/portfolio"
        VERSION = "${env.BUILD_ID}-${env.GIT_COMMIT}"
        PORTAINER_WEBHOOK = 'https://portainer.koltserver.net/api/stacks/webhooks/29da2db5-3bb1-4f8e-925a-9524f327ba65'
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
					sh "docker tag ${DOCKER_IMAGE} ${REGISTRY_URL}/${DOCKER_IMAGE}:latest"
					sh "docker tag ${DOCKER_IMAGE} ${REGISTRY_URL}/${DOCKER_IMAGE}:${VERSION}"
				}
			}
		}

        stage('Build & push to Registry') {
            steps {
				script {
					withCredentials([usernamePassword(credentialsId: 'docker-registry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
						sh "curl https://${REGISTRY_URL}/v2/_catalog"
						sh "docker login -u $USERNAME -p $PASSWORD https://${REGISTRY_URL}"
						sh "docker push ${REGISTRY_URL}/${DOCKER_IMAGE}"
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