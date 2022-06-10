import React, { useEffect, useState } from 'react';

const UseProject = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() =>{
        fetch('Project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [projects])
    return [projects]
};

export default UseProject;