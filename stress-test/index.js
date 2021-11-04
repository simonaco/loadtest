const autocannon = require("autocannon");

// async/await
const test = async function (url) {
  const result = await autocannon({
    url: url,
    connections: 10, //default
    duration: 10, // default 10s; in seconds
  });
  return result;
};

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  const url = req.query.url;
  const result = await test(url);
  context.log(result);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: result,
  };
};
