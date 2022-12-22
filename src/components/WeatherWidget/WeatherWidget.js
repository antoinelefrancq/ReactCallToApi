import CityWeather from './CityWeather/CityWeather';
import './WeatherWidget.css';

function WeatherWidget() {
  return (
    <section className="WeatherWidget">
      <CityWeather city="Le Moule" zip='97160' />
      <CityWeather city="Paris" zip="75001" />
    </section>
  );
}

export default WeatherWidget;
