# AOE Technology Radar

## Development
### Host the application under a sub path
To host the application under a sub path, set the environment variable `PUBLIC_URL`, e.g. "/techradar". The default is "/techradar".
For local development I recommend using "/build" and use this for the following steps. 

### Build the radar
```
yarn build
python3 -m http.server 8080
```

Then open here: http://localhost:8080/build

### Build the radar with static files
```
yarn build:static
python3 -m http.server 8080
```

Then open here: http://localhost:8080/build

### Regenerate the json file based on your changes on md files
```
yarn generateJson
```

You can do this while the server is running. You can find the newly created rd.json in "/build/rd.json". 
