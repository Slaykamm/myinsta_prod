//  var get = require('lodash');


var push = require('web-push')

//  import { web-push } from 
  let vapidKeys = {
    publicKey: 'BHSmG74ohnQBTaew7auhHQTFAfV088ddMeu4A4h0rUHCzKJAlMAceYVamAKkOvWLzxR-S3vSlAQpjpmUpa7bmwk',
      privateKey: 'SGeikQ4GvV7faWQY8AKjAwlJdttw7-EWx7F-7m2MCRY'
    }


  push.setVapidDetails('mailto:destpoch@mail.ru', vapidKeys.publicKey, vapidKeys.privateKey)


  // const local = window.localStorage.getItem('userWebPush')
  // const test = JSON.parse(window.localStorage.getItem('userWebPush'))
  // const endpoint = get(test, ['endpoint'])
  // const p256dh = get(test, ['endpoint', 'keys', 'p256dh'])
  // const auth = get(test, ['endpoint', 'keys', 'auth'])

  // console.log('test', test)
  // console.log('endpoint', endpoint)
  // console.log('p256dh', p256dh)
  // console.log('auth', auth)

  let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/eZDRAEgm8Tw:APA91bHJG1zUMhqd3jcD7OseJxRX2adVn36f8LoCAR3IEneq9weRt9FtLk9irmJ7aqsvaFN2-4cOj6szdRoiOT-gCxuM274NTI1lc7pbRXgslKN-Zkx92y6S7--XrAJvp7eqvXlmZTej",
    expirationTime:null,
    keys: {
      p256dh:"BKPEnFvnlZW82JY8bzHf-WqDovj6rJTPiDzjrI6ETz1_ehjQ3JS1VLAuphpkYKkVYr02FIYrWEgXMfmg5DsDz4w",
      auth:"avW-TQCcf9ufrQtmWIybhg"
    }
  }
  push.sendNotification(sub, 'test message')



  // {
    //   "endpoint":"https://fcm.googleapis.com/fcm/send/eZDRAEgm8Tw:APA91bHJG1zUMhqd3jcD7OseJxRX2adVn36f8LoCAR3IEneq9weRt9FtLk9irmJ7aqsvaFN2-4cOj6szdRoiOT-gCxuM274NTI1lc7pbRXgslKN-Zkx92y6S7--XrAJvp7eqvXlmZTej",
    //   "expirationTime":null,
    //   "keys":
    //     {
      //       "p256dh":"BKPEnFvnlZW82JY8bzHf-WqDovj6rJTPiDzjrI6ETz1_ehjQ3JS1VLAuphpkYKkVYr02FIYrWEgXMfmg5DsDz4w",
      //       "auth":"avW-TQCcf9ufrQtmWIybhg"
      //     }
      // }
      
      