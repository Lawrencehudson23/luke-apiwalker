import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Homeworld from './Homeworld';
import { navigate } from '@reach/router';

export default function People({id}) {
    const [person, setPerson] = useState({})


    useEffect(() => {
        axios
          .get("https://swapi.co/api/people/"+id+"/")
          .then(res => setPerson(res.data))
          .catch(err => navigate("/404"));
    }, [id])

    // function getPlanetName(person.homeworld){
    //     axios
    //     .get("person.homeworld")
    //     .then(res => setPlanet(res.data))
    //     .catch(err => alert("These aren't the droids you're looking for"));
    // }


    return (
        <div>
            <h1>{person.name}</h1>
            <h3>Gender: {person.gender}</h3>
            <h3>Height: {person.height}</h3>
            <h3>Hair Color: { person.hair_color}</h3>
            <h3>Skin Color: { person.skin_color}</h3>
            <h3>Eye Color: { person.eye_color}</h3>
            <Homeworld url={person.homeworld}/>
        </div>
    )
}
