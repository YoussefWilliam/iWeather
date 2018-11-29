import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import './App.css';
import './view.css';
import Weather from './Components/Weather';
import Database from './Components/Database';
import SelectedListItem from './Components/Lists';
import SuccessBar from './Containers/SuccessMsg';
import ErrorBar from './Containers/ErrorMsg';


const API_KEY = "7f179db624ffef7d2ca8439e0c01651c";



class App extends React.Component {

  constructor(props){
    super(props);
    this.addWeather = this.addWeather.bind(this);
    this.hideBar = this.hideBar.bind(this);


    this.state = {
      temprature:'',
      status:'',
      location:{
         city:'',
         country:'',
      },
      city:'',
      country:'',
      wind:'',
      description:'',
      humidity:'',
      array:[],
      elementsIn:'',
      openS:false,
      openF:false,
    }
  }
  // getCurrentLocation (){
  //   var output = document.getElementById("out");
  //   var x;
  //   var y;
    
  //   if (!navigator.geolocation){
  //     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
  //     return;
  //   }
  //   function success(position) {
  //     const latitude  = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     x=latitude;
  //     y=longitude;
  //     console.log(x,y);
  //   }
  //   console.log(x,y);

  //   navigator.geolocation.getCurrentPosition(success);
  // }

  componentDidMount(){
    this.getSavedWeather(); 
  }

  getSavedWeather = _ =>{
    fetch('http://localhost:4000/data')
    .then(response =>response.json())
    .then(response =>this.setState({
      array:response.data
    }))
    .catch(err => console.error(err))
  }

  addWeather = _=>{
    const city =this.state.city;
    const country=this.state.country;
    const temprature=this.state.temprature;
    if(city&&country&&temprature){
      fetch(`http://localhost:4000/data/add?city=${city}&country=${country}&temprature=${temprature}`)
      .then(response => response.json())
      .then(this.componentDidMount())
      .catch(err => console.error(err))
      this.setState({
        openS:true
      })

    }else{
      this.setState({
        openF:true
      })
    }
  }


  getWeather = async (e) => {
      e.preventDefault();
      const city= this.state.location.city;
      const country=this.state.location.country;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);
      if(city&&country){
        this.setState({
          temprature:data.main.temp,
          //status:"Success! Here are the results",
          city:data.name,
          country:data.sys.country,
          wind:data.wind.speed,
          description:data.weather[0].description,
          humidity:data.main.humidity,
          openS:true,
          openF:false
        })        
    }else{
      this.setState({
        temprature:'',
        status:"Sorry,There was a mistake, Make sure data is right",
        city:'',
        country:'',
        wind:'',
        humidity:'',
        description:'',
        openS:false,
        openF:true
      })

    }
  }
  changeHandler= (field) => (event) => {
    const { target } = event;
    this.setState((prevState) => {
      const locationCopy = {...prevState.location};
      locationCopy[field]=target.value;
      return ({
        ...prevState,
        location: locationCopy
    });
  });
}
  
  hideBar(){
    this.setState({
      openS:false,openF:false
    })
  }

  renderWeather = ({_id,city,country,temprature})  =>
    
  <div key={_id}>
  <SelectedListItem
    primary={`${city},${country},${temprature}`}
  />
  </div>

  render() {
    return (

      <div>
        <SuccessBar
          open={this.state.openS}
          status="Done! Weather is here"
          onClose={this.hideBar}
          />
          <ErrorBar
          open={this.state.openF}
          status="Sorry,There was a mistake, Make sure data is right"
          onClose={this.hideBar}
          />


    <div className="wrapper">
      <div className="main">
          <Title/>
        <div className="container">
          <div className="row">
           <div className="column">
                <Form
                  getWeather={this.getWeather} 
                  addWeather={this.addWeather}
                  changeHandler={this.changeHandler}
                  />
            </div>
          <div className="column">
                <Weather
                  temprature={this.state.temprature}
                  status={this.state.status}
                  humidity={this.state.humidity}
                  wind={this.state.wind}
                  description={this.state.description}
                  city={this.state.city}
                  country={this.state.country}
                />
          </div>
          <div className="column">
                <Database 
                  check={this.state.elementsIn}
                />
                {this.state.array.map(this.renderWeather)}
            </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    );
  }
}

export default App;
