pipeline {
    agent {
    	docker {
			image 'docker:latest'
			args '-v /var/run/docker.sock:/var/run/docker.sock --net=intranet'
		}
    }

    environment {
        // Define registry URL separately
        REGISTRY_URL = 'dck.koltserver.net'  // Replace with your actual registry URL
        // Get registry credentials
        DOCKER_REGISTRY = credentials('docker-registry')
        // Use REGISTRY_URL in image name
        DOCKER_IMAGE = "yash/portfolio"
        PORTAINER_WEBHOOK = 'https://portainer.koltserver.net/api/stacks/webhooks/29da2db5-3bb1-4f8e-925a-9524f327ba65'
    }

    stages {
        stage('Install dependencies') {
			steps {
				script {
					sh 'apk add --no-cache curl'
				}
			}
		}

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

        stage('Push to Registry') {
            steps {
				script {
					docker.withRegistry("https://${REGISTRY_URL}", 'docker-registry') {
						sh "curl https://${REGISTRY_URL}/v2/_catalog"
						def app = docker.build("${DOCKER_IMAGE}")
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
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