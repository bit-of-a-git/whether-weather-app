  // Function to set the weather image from the code
  function getImageSource(weatherCode) {
    for (const key in weatherImageMap) {
      const [start, end] = key.split("-").map(Number);
      if (start <= weatherCode && weatherCode <= end) {
        return weatherImageMap[key];
      }
    }
  // Default to sun image if no match found
  return "/images/sun.png";
  }

const weatherImageMap = {
    0: "/images/sun.png",
    "1-3": "/images/clear-sky.png",
    "45-48": "/images/fog.png",
    "51-55": "/images/drizzle.png",
    "56-57": "/images/freezingDrizzle.png",
    "61-65": "/images/rainHeavy.png",
    "66-67": "/images/freezingRain.png",
    "71-75": "/images/snowfall.png",
    77: "/images/snowGrains.png",
    "80-82": "/images/heavyRain.png",
    "85-86": "/images/snowShowers.png",
    95: "/images/thunderstorm.png",
    "96-99": "/images/thunderAndHail.png"
  };