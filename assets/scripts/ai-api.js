// const postReq = {
//     method: 'POST',
//     url: 'https://api.play.ht/api/v2/tts',
//     headers: {
//         accept: 'text/event-stream',
//         'content-type': 'application/json',
//         AUTHORIZATION: '4a00b80b5e5449c0a72f297d51326d1c',
//         'X-USER-ID': 'BAuy8nsWHhdKPf83b7rcbTTc9zG2'
//     },
//     data: {
//         text: 'I am Yoda',
//         voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
//         output_format: 'mp3',
//         voice_engine: 'PlayHT2.0'
//     }
// };

// const postText = async () => {
//     axios
//     .request(postReq)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

// postText();

// import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.play.ht/api/v2/tts',
  headers: {
    accept: 'text/event-stream',
    'content-type': 'application/json',
    AUTHORIZATION: '4a00b80b5e5449c0a72f297d51326d1c',
    'X-USER-ID': 'BAuy8nsWHhdKPf83b7rcbTTc9zG2'
  },
  data: {
    text: 'hello',
    voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
    output_format: 'mp3',
    voice_engine: 'PlayHT2.0'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

console.log('hello');