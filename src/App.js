import React, { Component } from 'react';
import './App.css';
import Cards from './component/cards/Cards'
import Charts from './component/charts/Charts'
import CountryPicker from './component/countryPicker/CountryPicker'
import  { fetchData } from './component/api'

class App extends Component {

state = {
  data: {},
  country:''
}

 async componentDidMount(){
    const fetcheddata = await fetchData()
    this.setState({data:fetcheddata})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
      
    this.setState({ data:fetchedData, country:country })
  }
  render() {
    const {data,country} = this.state 

    return (
      <div className="Container">
          <img className="img" src='https://i.ibb.co/7QpKsCX/image.png' alt="covid 19" />
          <Cards data ={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Charts data={data} country={country} />
          
      </div>
    );
  }
}

export default App;
