// /functions/hello.js
exports.handler = async function (event, context) {
  const name = event.queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${name}!`
  };
};