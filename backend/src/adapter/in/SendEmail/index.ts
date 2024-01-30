import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'send_email',
        memorySize: 128,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
