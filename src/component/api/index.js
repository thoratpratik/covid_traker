import axios from 'axios'
import Cards from '../cards/Cards';


const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changableurl = url;

    if(country)
    {
        changableurl = `${url}/countries/${country}`
    }
try
{
    const {data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(changableurl)
    return { confirmed,recovered,deaths,lastUpdate }
}
catch(error)
{
console.log(error)
}
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((i)=>({
            confirmed:i.confirmed.total,
            deaths:i.deaths.total,
            date:i.reportDate
        }));
        return modifiedData
    }
    catch(error)
    {

    }
    
}

export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch(error)
    {
        console.log(error)
    }
}