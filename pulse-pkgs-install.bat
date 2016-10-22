@echo ( (( Install Pulse NPM Packages )) )
@echo AngularJS, Express, MongoDB, Nodemon, SocketIO
::npm init

call npm install angular --save
call npm install socket.io --save
call npm install express --save
call npm install mongodb --save
call npm install nodemon --save

:: npm remove nodemon --save