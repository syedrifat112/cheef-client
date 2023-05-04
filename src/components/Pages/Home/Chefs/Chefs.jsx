import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Chef from './chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        axios.get("https://chef-server-syedrifat112.vercel.app/home")
        .then(res => setChefs(res.data))
    }, [])

    console.log(chefs)
    return (
        <div className='w-[90%] mx-auto mb-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
           {
            chefs?.map(chef=> <Chef key={chef.id} chef ={chef}></Chef>)
           } 
        </div>
        </div>
    );
};

export default Chefs;