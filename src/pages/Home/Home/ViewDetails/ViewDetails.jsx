import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const classes = useLoaderData();
    const {collage_name,image,event,admission_date , _id} = classes
    return (
        <div>
            <h1>hello {collage_name}</h1>
            
        </div>
    );
};

export default ViewDetails;