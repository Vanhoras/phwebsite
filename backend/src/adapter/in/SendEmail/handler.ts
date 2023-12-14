import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const sendEmail: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  try {

    event.body.email;

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email was sent successfully.',
        event,
      })
    }
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Email failed to send.',
        event,
      })
    }
  }
  
  
};

export const main = middyfy(sendEmail);
