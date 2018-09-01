// export * as EventType from './event.graphql'; <-- Not sopported by Babel? Maybe preset-stage-0 support is needed, but not compatible with preset-env
import * as eventType from './event.graphql';

export { eventType };
export { default as eventResolvers } from './event.resolvers';
