import React from 'react';
import data from '../data.json';

const Creations = ({ viewport }) => {
    return (
        <div className="creations">
            <div className="creations__header">
                <h3>Our Creations</h3>
                <button className="btn btn--desktop" >See all</button> 
            </div>
            <div className="creations__grid">
                {data.map((creation) => (
                    <button className="grid__item">
                        <img 
                            src={require(`../images/${viewport > 768 ? 'desktop' : 'mobile'}/${creation.image}`).default} 
                            alt={`${creation.title} thumbnail`}
                        />
                        <h4>{creation.title}</h4>
                    </button>
                ))}
            </div>
            <button className="btn btn--mobile">See all</button>
        </div>
    )
}

export default Creations;