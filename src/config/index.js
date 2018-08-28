import { config as testingConfig } from './testing';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'developement';
}

const env = process.env.NODE_ENV;

const baseConfig = {
  port: 3000,
  db: {
    url: 'mongodb://localhost/tmwy',
  },
};

let envConfig = {};

switch (env) {
  case 'development':
  case 'dev':
    envConfig = {};
    break;
  case 'test':
  case 'testing':
    envConfig = testingConfig;
    break;
  default:
    envConfig = {};
}

export default Object.assign(baseConfig, envConfig);
