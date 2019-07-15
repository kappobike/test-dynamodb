'use strict';

const { createApolloFetch } = require('apollo-fetch');

const SM_GRAPHQL_API = process.env.SM_GRAPHQL_API;

const apolloFetch = createApolloFetch({ uri: SM_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  options.headers = {
    "Content-Type": "application/json",
    "X-Api-Key": process.env.API_KEY
  };
  next();
});

module.exports.triggerStream = (event, context, callback) => {
  console.log('trigger stream was called');
  const eventData = event.Records[0];
  var key = eventData.dynamodb.Keys.id.S;
  var eventName = eventData.eventName;
  console.log('Dynamodb Event: ' + eventName + '. Key: '+ key);
 
};
