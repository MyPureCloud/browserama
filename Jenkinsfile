@Library('pipeline-library@COMUI-433_web-app-deploy-6') _

webappPipeline {
    slaveLabel = 'dev_v2'
    nodeVersion = '10.16.2'
    useArtifactoryRepo = false
    projectName = 'browserama'
    manifest = directoryManifest('out')
    buildType = { env.BRANCH_NAME == 'master' ? 'MAINLINE' : 'FEATURE' }
    publishPackage = { 'prod' }
    testJob = 'no-tests'

    buildStep = {
        sh('npm ci && npm test && npm run build')
    }

    snykConfig = {
        return [
            organization: 'genesys-client-media-webrtc',
        ]
    }

    cmConfig = {
        return [
            managerEmail: 'purecloud-client-media@genesys.com',
            rollbackPlan: 'Patch version with fix',
            testResults: 'no-tests'
        ]
    }

    shouldTagOnRelease = { false }

    postReleaseStep = {
        sshagent(credentials: [constants.credentials.github.inin_dev_evangelists]) {
            sh("""
                git tag v${version}
                git push origin --tags
            """)
        }
    }
}
