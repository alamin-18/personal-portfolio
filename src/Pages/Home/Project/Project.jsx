import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { thumline, name, _id } = project
    return (
        <div>
            <div className="card w-96 rounded-none p-4 bg-base-300 shadow-xl">
                <figure><img src={thumline} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`../${_id}`} className="btn btn-outline">Expolor More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;