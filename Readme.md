# AOE Technology Radar - Content

This is the location of AOE techradar content - published under: https://techradar.aoe.com/

If you want to build your own techradar you may want to have a look at https://github.com/AOEpeople/aoe_technology_radar instead.

## Content Guidelines

New blips should be tagged. The following tags are currently established:

* architecture
* security
* devops
* frontend
* agile
* coding
* quality assurance
* ci/cd
* ux/ui
* documentation

e.g. use like this:

```md
tags: [devops, security]
```

## Development

### Build the radar
```
npm i
npm run serve
```

Then open here: http://localhost:3000/techradar

### Build the radar with static files
```
npm i
npm run build
```