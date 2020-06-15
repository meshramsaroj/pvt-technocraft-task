# pvt-technocraft-task
Customer MEAN stack app

Customer MEAN stack app

Setup Required:

Angular CLI -  9.1.8 
MongoDB - V4.2.7 
Node - 12.4.8

Steps need to follow: 
1.
 1.1 Install MongoDB into your system- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
 
 1.2 Start MongoDB service - sudo service mongod start
 
2. install Angular Cli - npm install -g @angular/cli
 
3. Clone project - git clone https://github.com/meshramsaroj/pvt-technocraft-task.git
 
4. To start the project server
 -> cd project-server
 -> npm install
 ->npm run dev - It will start an express server which gives you API
 
5. To start User View 
 ->cd project-client 
 -> npm install
 -> ng server - It will run on localhost:4200
 
Note: Follow all instructions given above if you get any issue then tell me or try to resolve by yourself if it is possible. You can find a solution on StackOverflow.

If you find an error like : if you find error like : Unhandled 'error' event

then: do {
  ->app.js
  -> change app.listen(3000)  
and also do 
  -> go to service/service.ts
  ->change baseUrl = "http://localhost:3000/..."
