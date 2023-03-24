// Utils
const getPosition = async () => {
  const promiseCallback = (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  };
  return new Promise(promiseCallback).catch(console.log);
};

const getApiKey = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const { apiKey } = Object.fromEntries(urlSearchParams.entries());
  return apiKey;
};

const getUrl = (apiKey, { coords: { latitude, longitude } }) => {
  const baseUrl = 'http://api.weatherapi.com/v1/current.json';
  return `${baseUrl}?key=${apiKey}&q=${latitude},${longitude}`;
};

const handleFetch = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
};

// Dom manipulation
const setLocationHeading = ({ name: city, region: state }) => {
  const locationElement = document.querySelector('#location');
  locationElement.textContent = `${city}, ${state}`;
};

const setWeatherConditionElements = ({ text, icon }) => {
  const locationElement = document.querySelector('#condition-description');
  const weatherIcon = document.querySelector('#weather-icon');

  locationElement.textContent = text;
  weatherIcon.src = `http:${icon}`;
  weatherIcon.alt = text;
};

// Notice how we use closures here to isolate state and logic to one function
const handleTemperatureToggleButton = (degreesC, degreesF) => {
  const getFormattedTemperatures = (cOrF) => {
    const temperatures = { C: degreesC, F: degreesF };
    return `${temperatures[cOrF]} °${cOrF}`;
  };

  let temperatureUnit = 'C';
  const button = document.querySelector('#degrees-button');
  button.textContent = getFormattedTemperatures(temperatureUnit);

  const toggleTemp = () => {
    temperatureUnit = (temperatureUnit === 'C') ? 'F' : 'C';
    button.textContent = getFormattedTemperatures(temperatureUnit);
  };

  button.addEventListener('click', toggleTemp);
};

// eslint-disable-next-line consistent-return
const main = async () => {
  if (!navigator.geolocation) return alert('Geolocation is not supported by this browser.');

  const position = await getPosition();
  if (!position) return alert('There was an issue finding your location. Try again later.');

  const apiKey = getApiKey();
  if (!apiKey) return alert('No apiKey query param provided.');

  const url = getUrl(apiKey, position);
  const { location, current, error } = await handleFetch(url);
  if (error) return alert('Something went wrong. Try again later.');

  setLocationHeading(location);
  setWeatherConditionElements(current.condition);

  handleTemperatureToggleButton(current.temp_c, current.temp_f);
};

window.addEventListener('DOMContentLoaded', main);
