Credit where you found the images

Credit where you found the favicon

# Whether Weather App - David O' Connor

This weather app was built for the Web Development 1 module of SETU's HDip in Computer Science. It uses Bulma, Nunjucks, JavaScript, and Eleventy to dynamically display weather data for a variety of cities.

## Dependencies
Node.js and npm are required. Package dependencies are found in package.json.

## Getting Started

Git clone to a directory of your choice.
```
npm install
eleventy --serve
```
Next, go to the URL provided in the output. This will display a list of cities, which when clicked will lead to a specific City Focus page. This page will display the weekly forecast for a city.

- If on the current day, the header will display the current temperature and wind.
- The middle will show an image illustrating the current weather, the chance of rain, max temperature, and max wind speed of that day.
- The bottom portion will show the min and max temps for each day, along with an image illustrating the expected weather.

Each day is clickable, and will show the expected weather, chance of rain, max temp, and max wind of that day.

## Credits

Weather icons and the site favicon were taken from [flaticon.com.](www.flaticon.com)

Code was taken from "Lab-11b - Dates" of the Web Development 1 Module in SETU's HDip program.

Other useful pages are included below:

- https://builtin.com/software-engineering-perspectives/javascript-question-mark-operator
- https://www.digitalocean.com/community/tutorials/js-object-entries-values
- https://stackoverflow.com/questions/38056887/javascript-object-find-a-key-value-when-in-range