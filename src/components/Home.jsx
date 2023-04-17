import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            this is home page
        </div>
    );
};

export default Home;