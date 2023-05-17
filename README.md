
# DevDash Express Server

This is the backend Express server for the DevDash app. Frontend app can be found here:

https://github.com/NathanThanakone/nathan-thanakone-DevDash-frontend



## Setup

Once a WakaTime account has been created, a personal API key will be generated for you. This can be found in the settings menu at:

https://wakatime.com/settings/account

![Imgur](https://i.imgur.com/kPuOAID.png) 

If you already have an existing API Key, skip the step above.


Clone the repo (see below in Run Locally), then navigate into the root folder of the project directory, 

    nathan-thanakone-DevDash-backend

and create a .env file with variables for PORT and API_KEY inside of the .env file, these are case sensitive. If you choose not to create a variable for PORT it will default to 8080.

    PORT=1234
    API_KEY='?api_key=myAPIkeyGoesHere'

## Run Locally

Clone the project

```bash
  git clone https://github.com/NathanThanakone/nathan-thanakone-DevDash-backend.git
```

Go to the project directory

```bash
  cd nathan-thanakone-DevDash-backend
```

Install dependencies

```bash
  npm install
```

Start the Express server

```bash
  node --watch index.js
```

Now that the server is up and running, go back to the frontend app and run it to start the app!



