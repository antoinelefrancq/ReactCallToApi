import PropTypes from 'prop-types'
const CityWeather = ({city,zip})=>{
  return(
    <article className='cityWeather'>
        <h1 className='city'>{city}</h1>
        <h2 className='zip'>{zip}</h2>
        <p className='temperature'>29°C</p>
    </article>
  )
};
CityWeather.propTypes={
    city:PropTypes.string.isRequired,
    zip:PropTypes.string.isRequired,
}
export default CityWeather