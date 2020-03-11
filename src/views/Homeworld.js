import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default function Homeworld({url}) {
    const [homeworld, setHomeworld] = useState({})
    useEffect(() => {
        axios
          .get(url)
          .then(res => setHomeworld(res.data))
          .catch(err => console.error(err));
    }, [url])
    return (
        <div>
            <h3>Home World: 
{/* 
██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗███╗   ██╗████████╗
██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝████╗  ██║╚══██╔══╝
██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██╔██╗ ██║   ██║   
██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║╚██╗██║   ██║   
██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████╗██║ ╚████║   ██║   
╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝   ╚═╝     */}
                
                <Link to={"/planets/"+homeworld.id} >{homeworld.name}</Link>
                </h3>
        </div>
    )
}
