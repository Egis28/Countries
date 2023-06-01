import {useState,useEffect} from "react";
import getAllCountriesInfo from "../services/countriesServices";
import Country from "./Country";

const Main = () => {
    //state visada top level-virsuje
    const [countries, setCountries] = useState ([]);
    const getData = () => {
        //gauti duomenis is services aprasyto axios metodo
            getAllCountriesInfo()
              .then(response => setCountries(response.data))

    }


    //kada pakviesti daryti req-uzklausa - pasako mums useEFFECT
    useEffect(() => {
        getData();


}, []);

// console.log(countries)
  return (
    <div>
        <Country allCountries={countries}/>
    </div>
  )
}

export default Main