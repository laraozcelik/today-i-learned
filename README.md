# Today I Learned

I did this  project as a part of a full stack app development crash course. I added additional functionalities on top of the course project. 

## Database

This project uses supabase as its database and utilizes its API.

## Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository to your local machine:
```shell
git clone https://github.com/VickSuresh/Notes.git
```

2. Install Dependencies:
```shell
npm install
```

3. Set up the Supabase environment variables for your Supabase database:
  Create a .env file in the root directory of the project.
  Add the following environment variables to the .env file:

```.env
REACT_APP_SUPABASE_URL=<your-supabase-url>
REACT_APP_SUPABASE_KEY=<your-supabase-key>
```
Replace <your-supabase-url> and <your-supabase-key> with your actual Supabase URL and API key.
  
4. Start the development server:
  ```shell
  npm start
  ```
  The app will run in development mode at http://localhost:3000.

## Deployment with Netlify
This app has been deployed with Netlify. You can access the deployed version of the app at the following link:
https://today-i-learned-fact-list.netlify.app/
