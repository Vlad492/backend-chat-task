Heroku deploy : https://job-task-messenger.herokuapp.com

Documentation : https://www.getpostman.com/collections/bf8b07920e923719cf62

Routes : 
1. /api/messages/list/:number - GET request which take 10 messages from db. Require number in route string . 
        Example : /api/messages/list/1

2. /api/messages/single/:id - GET request whick take message by id. Require id in route string.
        Example : /api/messages/single/5f8ac0e95092db26c06afb87 

3. /api/messages/create -POST request which create message. Require email and text fields in body.
         Example body : {email : 'example@gmail.com', text : 'Hello world'}

4. /api/messages/update - PUT request which update message.Require id and text fields in body.
        Example body : {id : '5f8ac0e95092db26c06afb87', text : 'Changed message'}

5. /api/users/create -POST request which create user in collection . Require name and email in body.
        Example body : {name: 'ExampleUser', email : 'exampleuser@gmail.com'}