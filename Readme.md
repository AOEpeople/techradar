# AOE Technology Radar - Content

This is the location of AOE techradar content - published under: https://www.aoe.com/techradar/index.html

If you want to build your own techradar you may want to have a look at https://github.com/AOEpeople/aoe_technology_radar instead.

## Development

### Host the application under a sub path
To host the application under a sub path, set the environment variable `PUBLIC_URL`, e.g. "/techradar".
The default is `/build`.

> For local development I recommend using `/build` and use this for the following steps. 

### Build the radar
```
npm i
npm run start
```

Then open here: http://localhost:8080/build

### Build the radar with static files
```
npm i
npm run start:static
```

Then open here: http://localhost:8080/build

### Regenerate the json file based on your changes on md files
```
npm run generateJson
```

You can do this while the server is running.
You can find the newly created rd.json in "/build/rd.json". 
