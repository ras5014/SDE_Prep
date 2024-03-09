import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchWeatherData from "../queries/fetchWeatherData";
import ShowWeather from "./ShowWeather";

const InputCity = () => {
  const [city, setCity] = useState("Seattle");

  const weatherData = useQuery(["weather", city], fetchWeatherData);
  const data = weatherData?.data ?? null;
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const city = formData.get("city") ?? "";
          setCity(city);
        }}
      >
        <input type="text" name="city" placeholder="Enter City..." />
        <button className="input_btn" type="submit">
          Submit
        </button>
      </form>
      {weatherData.isLoading && (
        <h1>
          <strong>
            Please wait...
            <br />
            <img
              style={{ width: "100px" }}
              src="https://gifdb.com/images/high/continuous-loading-bar-qrx2pxfimsavp1yv.gif"
              alt=""
            />
          </strong>
        </h1>
      )}
      {weatherData.isError && (
        <h1>
          <strong>{`Couldn't find city ${city}`}</strong>
        </h1>
      )}
      {weatherData.data && <ShowWeather data={data} />}
    </div>
  );
};

export default InputCity;
