// Telegram
const TelegramBot = require('node-telegram-bot-api');
const token = '5704828147:AAGejzJcdO4-dkYHBkHcwerSw3_J19ty2Wk';
const bot = new TelegramBot(token, { polling: true });
// OpenAI
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: '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' 
});
const openai = new OpenAIApi(configuration);




bot.on('message', async message => {
  const text = message.text;
  const chatID = message.chat.id;
  // console.log(text);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      // suffix: "1676385671",
      // stop: ["You:"], 
      temperature: 1,
      top_p: 1.0,
      max_tokens: 4048,
      n: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      // logit_bias: {"1676385842": -100},
    });
    console.log(response.data);
    let rezult = response.data.choices[0]['text'];
    await bot.sendMessage(chatID,rezult);

});



// (async () => {
//     const gptResponse = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "Tell us about openai",
//         max_tokens: 1024,
//         temperature: 0,
//       });

//     console.log(gptResponse.data);
// })();


































// let url = 'https://api.openai.com/v1/models';
// let url2 = 'https://api.openai.com/v1/models/text-davinci-003';

// async function sendRequest (url) {
//     const response = await fetch(url, {
//         headers: {
//             Authorization: 'Bearer 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'
//         },
//         // options: {
//         //     model: "text-davinci-003",
//         //     prompt: "Say this is a test",
//         //     max_tokens: 7,
//         //     temperature: 0,
//         // }
//     });
//     return await response;
// }

// Promise.all([sendRequest(url)]).then(rezult => {
//     console.log(rezult);
// })