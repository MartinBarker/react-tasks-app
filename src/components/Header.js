import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {

    /*
    const onClickFunction1 = (e) => {
        console.log('onClickFunction1 e=',e)
    }
    */

    return (
        <header className='header'> 
            <h1 style={{color:'pink', backgroundColor:'green'}}>Task Tracker Header. title={props.title}</h1>
            <h2 style={dynamicHeadingStyle}>heading style method 2</h2>
            <Button 
                color={props.showAdd ? 'red' : 'green'}
                text={props.showAdd ? 'Close' : 'Add'}
                onClick={props.onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title Text'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const dynamicHeadingStyle = {
    color:'red', 
    backgroundColor:'black'
}

export default Header