pipeline {
    agent any

    stages {

        stage('git clone feature') {
            when {
               branch 'feature'
            }
            steps {
                git branch: 'feature', credentialsId: '05397554-60cc-442a-8d6c-bd74e31af744', url: 'https://gitee.com/colgateyhj/testjekins'
            }
        }

        stage('pretest install') {
            when {
               branch 'test'
            }
            steps {
                // sh "./ci/pre-install.sh"
                nodejs('nodejs12.13.1') {
                sh 'node --version'
                sh 'npm install -g yarn --registry=https://registry.npm.taobao.org'
                sh 'yarn install'
                // sh 'yarn dll'
                // sh 'yarn build:pretest'
               }
            }
        }
        // stage('pretest deploy') {
        //     when {
        //        branch 'test'
        //     }
        //     steps {
        //         sshPublisher(publishers: [sshPublisherDesc(configName: 'QQ Server', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/home/ubuntu/web/pretest', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/admin/**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
        //     }
        // }

        stage('git clone dev') {
            when {
               branch 'develop'
            }
            steps {
                 git branch: 'develop', credentialsId: '05397554-60cc-442a-8d6c-bd74e31af744', url: 'https://gitee.com/colgateyhj/testjekins'
            }
        }

        // stage('dev install') {
        //     when {
        //        branch 'development'
        //     }
        //     steps {
        //         // sh "./ci/pro-install.sh"
        //         nodejs('nodejs12.13.1') {
        //             sh 'node --version'
        //             sh 'npm install -g yarn --registry=https://registry.npm.taobao.org'
        //             sh 'yarn install'
        //             sh 'yarn dll'
        //             sh 'yarn build:pro'
        //        }
        //     }
        // }

        // stage('dev deploy') {
        //     when {
        //        branch 'development'
        //     }
        //     steps {
        //         sshPublisher(publishers: [sshPublisherDesc(configName: 'QQ Server', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/home/ubuntu/web', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**/admin/**/*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
        //     }
        // }
        stage('delete all'){
            steps {
                cleanWs()
            }
        }
    }
}