import React, { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (!weather) return <div>No weather data available.</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Weather for {weather.latitude}°N, {weather.longitude}°E
      </h1>
      <div>Elevation: {weather.elevation}m</div>
      <div>Timezone offset: {weather.utcOffsetSeconds}s</div>
      <h2 className="text-xl mt-6 mb-2">Hourly Temperatures</h2>
      <ul>
        {weather.hourly.time.map((t: string, i: number) => (
          <li key={i}>
            {new Date(t).toLocaleString()}: {weather.hourly.temperature_2m[i]}°C
          </li>
        ))}
      </ul>
    </main>
  );
}
