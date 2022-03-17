# NodejsTelegramBot

This is a telegram bot to read from a Telegram channel using webhook, then post it to another server and also add in local database.



## Setup

1. Create an AWS Lambda with `DynamoDbBasicExecution` policy and a POST REST API trigger.

2. Zip and drop the project folder in Lambda and enter the environment variables in .env file.

3. Create your telegram bot to listen to messages using BotFather in Telegram app itself.

4. Setup a webhook with Telegram using the bot API Key by executing the `telegram_webhook_setup.js` file.

5. Make sure to deploy the new changes in AWS Lambda and you should be able to listen to all the messages being shared by the bot and push them to AWS DynamoDB.





## Helpful resources

1. https://github.com/hosein2398/node-telegram-bot-api-tutorial

2. https://xabaras.medium.com/setting-your-telegram-bot-webhook-the-easy-way-c7577b2d6f72

3. Setup AWS Lambda with REST API triggers in API Gateway. https://www.youtube.com/watch?v=bYkjYojgccY

4. Setup DynamoDB read-write role for AWS Lambda https://www.youtube.com/watch?v=ijyeE-pXFk0

5. Webhook structure in Nodejs, https://stackoverflow.com/questions/35285600/how-to-receive-data-from-telegram-channel-to-webhook

