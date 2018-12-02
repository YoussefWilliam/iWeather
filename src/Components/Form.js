import React from 'react';
import Input from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';

const Form = props =>( 
        <form >  
            <br/><br/><br/><br/><br/>
            <Input  
                type ="text"
                name="city"
                onChange={props.changeHandler('city')}
                placeholder="City.."/>
            <Input 
                type ="text" 
                name="country" 
                onChange={props.changeHandler('country')}
                placeholder="Country.."/>
            <Button
                color="primary"
                variant='contained'
                onClick={props.getWeather}
            >
            Get Weather</Button><br/><br/>
            <Button
             variant="contained" color="secondary"
             onClick={props.addWeather}>Save Location's Weather</Button>
        </form>
);

export default Form;