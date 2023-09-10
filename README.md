# Developer Roadmap Tab
The application is only a very small part based on the great inspiration of [**Developer Roadmaps**](https://roadmap.sh/). Instead of displaying it in diagram form, I have displayed the roadmap with bullet points in a top-to-bottom style.

<div align="center">
<br>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" width="250" height="200">
<br>
<br>

![npx](https://badgen.net/badge/npx/9.6.7?labelColor=blue&color=black)
![npm](https://badgen.net/badge/npm/9.6.7?labelColor=blue&color=black)
![React](https://badgen.net/badge/React/18.2.0?labelColor=blue&color=black)
![json-server](https://badgen.net/badge/json-server/%5E0.17.3?labelColor=blue&color=black)
![Postman](https://badgen.net/badge/Postman/v10.17.4?labelColor=blue&color=black)

</div>

# Prepare
Install libraries that have not been posted to the repository to support the project when you download it.
```
$ npm install
```

**Note: Before running the project, we need to call the API first so that the project can fetch the API and then upload the data to the UI. Otherwise the project will fail and have no data to display.**

First, we move into the **api** folder to **mock api** from the **db.json** file.
```
$ cd api
```

Next, start **json-server** to bring data into the project.
```
$ npm run api
```

Data storage location:
- Home: http://localhost:3001
- http://localhost:3001/introduction
- http://localhost:3001/frontend
- http://localhost:3001/backend
- http://localhost:3001/fullstack

# Start the project
Starts the development server.
```
$ npm start
```

After running the command to start the project, you can access the project at **Local** with address http://localhost:3000 or **On Your Network** with address http://192.168.10.1:3000.

Bundles the app into static files for production.
```
$ npm run build
```

Starts the test runner.
```
$ npm run test
```

Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
```
$ npm run eject
```
