import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import Router from "lambda-router-typescript";

type LambdaFunctionUrlResult = APIGatewayProxyStructuredResultV2
type LambdaFunctionUrlEvent = APIGatewayProxyEventV2

export async function handler(event: LambdaFunctionUrlEvent): Promise<LambdaFunctionUrlResult> {

    const router = new Router();

    router.get('/', async (event) => ({}));

    try {
        const response = await router.call(event);
        return response
    } catch (error: any) {
        return {
            statusCode: error.statusCode || 500,
            body: JSON.stringify(error.body) || 'Internal error.',
        }
    }
}
