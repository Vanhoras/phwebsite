export default {
  type: "object",
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    message: { type: 'string' },
  },
  required: ['name', 'email', 'message'],
  memorySize: 128
} as const;
