import React, { useEffect, useState } from 'react';

const useProjectDetails = () => {
    const [projectDetails, setProjectDetails] = useState([]);
    useEffect(() =>{
        fetch('Project.json')
        .then(res => res.json())
        .then(data => setProjectDetails(data))
    }, [projectDetails])
    return [projectDetails]
};

export default useProjectDetails;