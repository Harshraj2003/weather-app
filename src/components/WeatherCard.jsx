const WeatherCard = ({ weather }) => {
  const icon = weather.weather[0].icon;

  return (
    <div className="mt-10 w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl border border-white/30 text-white p-6 transition duration-300 ease-in-out transform hover:scale-105">

      {/* Location */}
      <h2 className="text-3xl font-bold text-center mb-2">{weather.name}, {weather.sys.country}</h2>

      {/* Icon & Temp */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
          className="w-20 h-20"
        />
        <p className="text-5xl font-semibold">{Math.round(weather.main.temp)}°C</p>
      </div>

      {/* Description */}
      <p className="text-center text-lg capitalize mb-4">
        {weather.weather[0].description}
      </p>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 text-sm text-center">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div>
          <p className="font-semibold">Pressure</p>
          <p>{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
