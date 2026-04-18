/* import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(initialCoffees);


    return (
        <div className='mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee=><CoffeeCard coffee={coffee} key={coffee._id}
                    coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
            <div className='text-center mt-12 '>
                <div>
                    <Link  to="/signup" className="btn gap-x-5 btn-primary mr-5 bg-purple-600 border-0">
                    Signup
                </Link>

                 <Link to="/signin" className="btn border-0 btn-primary bg-green-600">
                    SignIn
                </Link>

                <Link to="/users" className="btn border-0 btn-primary bg-blue-600 ml-5">
                    Users
                </Link>
                <Link to="/addcoffee" className="btn border-0 btn-primary bg-slate-600 ml-5">
                    Add Coffee
                </Link>
                </div>
            </div>

        </div>
    );
};

export default Home; */


import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        // Added pb-12 to keep space between content and footer
        <div className='mt-12 mb-12 pb-12 px-4'>
            <h2 className="text-4xl text-center font-bold mb-8 text-white">Our Coffee Collection</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => (
                        <CoffeeCard 
                            coffee={coffee} 
                            key={coffee._id}
                            coffees={coffees} 
                            setCoffees={setCoffees} 
                        />
                    ))
                }
            </div>
            {/* Navigation buttons removed from here because they are in the Header now! */}
        </div>
    );
};

export default Home;