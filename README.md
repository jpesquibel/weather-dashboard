# Weather Dashboard

Build a weather dashboard. You can use any web technology. If using React, we suggest bootstrapping the project on codesandbox (https://codesandbox.io/s/) or with create-react-app.

## Goals
* User can add and remove locations to the dashboard by entering zip codes
* Show the current temperature and high/low forecast for each location
* Show the current air quality for each location
* Periodically update the current temperature

## Notes
* Focus on functionality, not on design/UX
* Feel free to search if you need to look things up
* You likely won’t have time to complete all 4 parts. That’s ok!

## Useful APIs
Get the current weather for a zip code

Docs: https://openweathermap.org/current#zip
```
https://api.openweathermap.org/data/2.5/weather?zip=<ZIP_CODE>,us&appid=7b57de9d532d7bcf45ec730e4d56cff3&units=imperial
```

Returns an object like
```
{
  "coord":{
    "lon":-121.4294,
    "lat":38.4081
  },
  "main":{
    "temp":59.85,
    "temp_min":57.2,
    "temp_max":62.01,
    "pressure":1018,
    "humidity":41
  },
  ...
}
```


Get the current air quality for lat/lon

Docs: https://openweathermap.org/api/air-pollution
```
https://api.openweathermap.org/data/2.5/air_pollution?lat=<LAT>&lon=<LON>&appid=7b57de9d532d7bcf45ec730e4d56cff3
```

Returns an object like
```
{
  "coord":{
    "lon":-122,
    "lat":37.3
  },
  "list":[
    {
      "main":{
        "aqi":3
      },
      "dt":1615935600,
      ...
    }
  ]
}
```



