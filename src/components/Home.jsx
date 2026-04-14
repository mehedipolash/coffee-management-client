import React, { use, useState } from 'react';
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
            <div className='text-center mt-12  '>
                <div>
                    <Link  to="/signup" className="btn gap-x-5 btn-primary mr-5 bg-purple-600 border-0">
                    Signup
                </Link>

                 <Link to="/signin" className="btn border-0 btn-primary bg-green-600">
                    SignIn
                </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;