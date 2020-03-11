import React,{useState, useEffect} from 'react'
import axios from 'axios';

export default function Planet({id}) {
    const [planet, setPlanet] = useState({})
    useEffect(() => {
        axios
          .get("https://swapi.co/api/planets/"+id)
          .then(res => setPlanet(res.data))
        //   .then(res=>console.log(res))
          .catch(err => alert("These aren't the droids you're looking for🌚"));
    }, [id])
    return (
        <div>
           <h1>{planet.name}</h1>
           <h3>Climate: {planet.climate}</h3>
           <h3>Terrain: {planet.terrain}</h3>
           <h3>Population: {planet.population}</h3>
           <h3>Surface Water: {planet.surface_water}</h3>
        </div>
    )
}
