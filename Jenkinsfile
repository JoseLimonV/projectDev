pipeline {
    agent any
    options {
        timeout(time: 2, unit: 'MINUTES')
    }
    environment {
        ARTIFACT_ID = "lemontr33/app:${env.BUILD_NUMBER}"
    }
    stages {
        stage("Build"){
            steps{
                script {
                    dockerImage = docker.build "${env.ARTIFACT_ID}"
                }
            }
        }
        stage('Run Test'){
            steps {
                sh "docker run ${env.ARTIFACT_ID} npm test"
            }
    }
        stage('Code Coverage'){
            steps{
                cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'docker', conditionalCoverageTargets: '70, 0, 0', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '80, 0, 0', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 0, 0', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false
            }
        }
    }
    
}