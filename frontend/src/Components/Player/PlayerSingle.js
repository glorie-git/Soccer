import React from 'react';


const PlayerSingle = (props) => {
    return ( 
        <div className="row">
            <div className="col s12">{/* add "m7" to make it smaller*/}
                <div className="card">
                    <div className="card-image">
                    <img src="soccer.jpeg" alt="Image of a ball about to be kicked"/>
                    <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                    <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
                    <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {props.player.team} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PlayerSingle;