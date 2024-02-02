import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';

import schema from './schema';

const sendEmail: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  console.log("event", event);

  if (!event.body.email || !event.body.name || !event.body.message) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Parameters are undefined.',
        event,
      })
    }
  }

  try {

    console.log(`sendEmail email: ${event.body.email}, name: ${event.body.name}, message: ${event.body.message}`);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Email was sent successfully.',
        event,
      })
    }
  } catch {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Email failed to send.',
        event,
      })
    }
  }
  
  
};

export const main = sendEmail;
