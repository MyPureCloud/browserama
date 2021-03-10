@Library('pipeline-library@post-release-step-creds-for-github') _

webappPipeline {
    slaveLabel = 'dev_v2'
    nodeVersion = '14.8.0'
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

    shouldTagOnRelease = { true }
}
