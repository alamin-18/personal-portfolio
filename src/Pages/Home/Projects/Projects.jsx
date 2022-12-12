import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';


const Projects = () => {
    const [projects,setProjects] =useState([])
    useEffect(()=>{
        fetch("portfolio.json")
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    console.log(projects);
    return (
        <div className=' mt-10 lg:w-3/4 mx-auto' id='project'>
            <h1 className='text-4xl font-bold text-center mb-10'>Projects</h1>
            <div className='grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2'>
               {
                projects.map(project =><Project key={project._id} project={project}></Project>)
               }
            </div>
        </div>
    );
};

export default Projects;