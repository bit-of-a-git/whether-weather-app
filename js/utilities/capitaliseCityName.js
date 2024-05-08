const capitaliseCityName = (city) => {

  const cityName = city.replace("_daily", "");

  // First splits the city value into words using '_', then capitalises the first letter of each word
  const cityNameSplit = cityName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Returns the words as a single string joined by spaces
  return cityNameSplit.join(" ");
}