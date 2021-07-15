# 🐶 Hutello 

> Find all dog daycare places in town

Hutello helps the user find all dog daycare places in town. The user can create a detailed profile for them and their dog(s) and search for "HuTas" ("Hundetagesstätten" in German) by city name. Detailed info for each HuTa can be viewed and it is planned to send a direct request for a free place.

🚧 Hutello is still under construction...

Screenshot of the Login page:

![Hutello_LoginPage](https://user-images.githubusercontent.com/82370319/124361484-be58db00-dc2f-11eb-805c-a24261c88c15.png)

Screenshot of the Search page:

![Hutello_SearchPage](https://user-images.githubusercontent.com/82370319/124361509-ce70ba80-dc2f-11eb-9ccd-cec2d9426460.png)

## 💻 Demo

This app was programmed for mobile view. For a better view in your browser, open the development tools and switch to mobile view, preferably in the format of iPhone 6/7/8.
Try the demo of my app at [Heroko](https://hutello.herokuapp.com/). Don't worry, loading of the page will take a while because servers go to sleep when using the free version.

## 🎇 Installing/Getting started 

1) To start the project install all dependencies first:
```ts
npm install
````
2) You can run the project (server and/or client) in development mode:
````ts
npm run server:dev
npm run client:dev
````
Thanks to the package ts-node-dev the webserver refreshes automatically when you make changes to the code.

3) You can have a look at components and pages in Storybook:
```ts
npm run storybook
````
4) If you want to deploy your project you can create a production build and run the start script:
````ts
npm run build
npm run start
````
Get more information here: 
https://vitejs.dev/guide/build.html
https://storybook.js.org/docs/react/workflows/publish-storybook#build-storybook-as-a-static-web-application
https://expressjs.com/en/starter/static-files.html

### 🔒 .env 

You have to define environment variables to connect a MongoDB, as well as the Cloudinary cloud name and Cloudinary upload preset for successful image upload. If you wish, you can also set a specific PORT (default is PORT 3000). For this, create a .env file inside the main folder. The file should look like this:
```ts
PORT=<enter specific PORT>
MONGO_URL=<enter a MongoDB connection string>
VITE_CLOUDINARY_PRESET_NAME=<enter Cloudinary upload preset name>
VITE_CLOUDINARY_CLOUD_NAME=<enter Cloudinary cloud name>
````
Please confirm that the `.env` file is included in `.gitignore`🙈 to ensure that your keys are not included when pushing to GitHub!

## 🧰 Development 

### This App was build with...

HTML5, CSS3, JavaScript, React, TypeScript, MongoDB, Cloudinary, Express, Node.js, Git Workflow, Adobe XD, Storybook, Vite, Visual Studio Code and a lot of 💜

## Database

All user data is stored in a MongoDB collection `users` upon registration. I didn't use an external API but created a dummy collection `hutas` in MongoDB from which the search results are fetched during search. For demo purposes, it is possible to search for the cities "Köln" and "Bonn".
