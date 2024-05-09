  // This function fetches the weather image using a map, and checking whether the weatherCode
  // passed is found in one of the keys in the map

  // https://stackoverflow.com/questions/38056887/javascript-object-find-a-key-value-when-in-range
  
  function getImageSource(weatherCode) {
    for (const key in weatherImageMap) {
      // Gets the start and the end values by splitting the key using "-"
      const [start, end] = key.split("-").map(Number);
      if (start <= weatherCode && weatherCode <= end) {
        return weatherImageMap[key];
      }
    }
  // Defaults to sun image if no match found
  return "/images/sun.png";
  }

// For single numbers, the value is doubled with a dash between it
// so it can serve as the end value too 
const weatherImageMap = {
  "0-0": "/images/sun.png",
  "1-3": "/images/clear-sky.png",
  "45-48": "/images/fog.png",
  "51-55": "/images/drizzle.png",
  "56-57": "/images/freezingDrizzle.png",
  "61-65": "/images/rainHeavy.png",
  "66-67": "/images/freezingRain.png",
  "71-75": "/images/snowfall.png",
  "77-77": "/images/snowGrains.png",
  "80-82": "/images/heavyRain.png",
  "85-86": "/images/snowShowers.png",
  "95-95": "/images/thunderstorm.png",
  "96-99": "/images/thunderAndHail.png"
};