require("dotenv").config();
const AWS = require("aws-sdk");

// Make sure your Lambda has DynamoDbBasicExecution Policy added to perform DynamoDB operations
const docClient = new AWS.DynamoDB.DocumentClient();

async function push_message_to_dynamo_db(message) {
  try {
    const params = {
      TableName: process.env.DYNAMO_DB_TABLE_NAME,
      /* Item properties will depend on your application concerns */
      Item: {
        id: new Date().toISOString(),
        message: message,
      },
    };
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

exports.handler = async (event, context) => {
  let message;
  try {
    message = event.body;
    await push_message_to_dynamo_db(message);
  } catch(e) {
    console.log("Error Message: " + e.message);
  } 


  const response = {
    statusCode: 200,
    headers: {
      lambda: "custom_aws_lambda",
    },
    body: message,
    isBase64Encoded: false
  };

  return response;
};
