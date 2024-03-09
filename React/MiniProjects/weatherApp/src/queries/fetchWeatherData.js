const fetchWeatherData = async ({ queryKey }) => {
  const apiKey = import.meta.env.VITE_API_KEY_WEATHER_APP;
  const city = queryKey[1];
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  if (!response.ok) throw new Error(`Could not find data for ${city}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchWeatherData;
