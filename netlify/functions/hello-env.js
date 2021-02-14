const GREETING = 'howdy';

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GREETING
  };
};