import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className='header'>
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Title'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header