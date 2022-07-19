# INFO Technology Radar - Content

The INFO Technology Radar static site generator based on the [AOE tech radar implementation](https://github.com/AOEpeople/techradar).

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
export PUBLIC_URL=/build && export REACT_APP_RADAR_NAME='INFO Technology Radar' &&  npm run start:static
```

Then open here: http://localhost:8080/build

### Regenerate the json file based on your changes on md files
```
npm run generateJson
```

You can do this while the server is running.
You can find the newly created rd.json in "/build/rd.json". 
