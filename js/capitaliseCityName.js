const capitaliseCityName = (city) => {

  const cityName = city.replace("_daily", "");

  const cityNameSplit = cityName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));

  return cityNameSplit.join(" ");
}