import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { debounce } from 'lodash';
import CommonSearch from '../components/commonSearch/CommonSearch'
import CommonTable from '../components/commonTable/CommonTable';

const Home = () => {

    const [country, setCountry] = useState({
      loader: false,
      countryData: [],
    });
  
    const [limit, setLimit] = useState(3);

    const fetchData = async ({limit, searchData}) => {
        const options = {
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=${limit}&namePrefix=${searchData}`,
            headers: {
              'x-rapidapi-key': 'd41ffcc85emshd67655fb3531e0fp121d01jsn4f6b3d865414', // get your key from https://rapidapi.com/wirefreethought/api/geodb-cities
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
          };

          setCountry({...country, loader: true});
          try {
            const response = await axios.request(options);
            setCountry({...country, loader: false, countryData: response?.data?.data});
        } catch (error) {
            console.error(error);
            setCountry({...country, loader: false});
        }
    }

  useEffect(() => {
    if(limit){
      fetchData({limit: limit, searchData: ""});
    }
  }, []);

  const handleFilterChange = debounce((newValue) => {
    if(newValue) {
      fetchData({searchData: newValue, limit: 10});
      
    } 
    else{
      fetchData({searchData: "", limit: 3}); 
    }
  }, 500);

  const onOptionChangeHandler = (event) => {  
    setLimit(event.target.value);
    if(event.target.value) {
      fetchData({limit: event.target.value, searchData: ""});
    }
  }

  return (
   <>
    <CommonSearch handleFilterChange={handleFilterChange} />
    <CommonTable tableData={country} onOptionChangeHandler={onOptionChangeHandler} limit={limit} />
   </>
  )
}

export default Home