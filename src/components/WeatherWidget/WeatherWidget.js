import CityWeather from './CityWeather/CityWeather';
import './WeatherWidget.css';

function WeatherWidget() {
  return (
    <section className="WeatherWidget">
      <CityWeather city="Le Moule" zip='97160' country="gp"/>
      <CityWeather city="Paris" zip="75001" country="FR"/>
      <CityWeather city="L'Isle-sur-la-Sorgue" zip='84800' country='FR' />
      <CityWeather city="New York City" zip='10001' country='US' />
    </section>
  );
}

export default WeatherWidget;
