import { ExpressLambdaServer } from 'lambda-router-typescript'

import { handler } from '../index'

ExpressLambdaServer.start(3000, handler)
