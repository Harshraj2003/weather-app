import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard'; // Assuming you created this

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
  if (!city.trim()) {
    setError('Please enter a city name.');
    setWeather(null);
    return;
  }

  setLoading(true);
  setError('');

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (response.ok && data.cod === 200) {
      setWeather(data);
      setError('');
    } else {
      setWeather(null);
      setError('City not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
    setWeather(null);
    setError('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};




  return (
      <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-animated-gradient">
      <h1 className="text-4xl font-bold text-center mb-10">🌤️ Weather App</h1>

      {/* Input + Weather Box */}
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl">
        
        {/* Input box */}
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 rounded-md shadow w-full md:w-64"
          />
          <button
          onClick={fetchWeather}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
          loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
         >
         {loading ? 'Searching...' : 'Search'}
         </button>

        

        </div>
        {loading && <p className="mt-4 text-blue-700">Loading...</p>}
        {error && <p className="text-red-600 mt-2 text-center font-medium">{error}</p>}

        {/* Conditional Weather Card */}
        {weather && <WeatherCard weather={weather} />}

      </div>
    </div>
  );
};

export default App;
