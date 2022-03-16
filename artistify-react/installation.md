$ git clone https://github.com/Kostra0ne/artistify-react

###########################
# server config 
###########################

$ cd server
$ npm install
$ touch .env
$ nano

# set .env like so :
# CLIENT_URL = http://localhost:3000
# CLOUDINARY_NAME = your-name
# CLOUDINARY_KEY = your-cloudinary-key
# CLOUDINARY_SECRET = your-cloudinary-secret
# MONGO_URI = mongodb://localhost/your-db-name
# PORT = 4000
# SECRET_SESSION = a-long-string-that-should-be-hard-to-crack

# seed the database
$ npm run seed:all   

# then you're ready to launch the backend
$ npm run dev

###########################
# client config
###########################

$ cd client
$ npm install
$ touch .env
$ nano .env

# set .env like so :
# REACT_APP_BACKEND_URL = http://localhost:4000

$ npm start


First step signup, the process is provided.
Then, change the user role via Compass and set it as "admin"
You will now have access to the admin nav-bar, to manage/create artists/albums/labels/styles