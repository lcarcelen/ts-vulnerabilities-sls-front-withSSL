import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsConfig from '../conf-aws/config'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: awsConfig.cognito.REGION,
    userPoolId: awsConfig.cognito.USER_POOL_ID,
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: awsConfig.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: 'testAPI',
        endpoint: awsConfig.apiGateway.URL,
        region: awsConfig.apiGateway.REGION
      }
    ]
  }
})

Vue.use(AmplifyPlugin, AmplifyModules)
