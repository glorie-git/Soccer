import React from 'react';
import axios from 'axios';

const PlayerSingle = (props) => {

    const deletePlayer = (id) => {
        axios.delete(`http://localhost:4000/player/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

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
                    <a className="waves-effect waves-light btn" onClick={() => deletePlayer(props.player._id)}>Delete</a>
                </div>
            </div>
        </div>
    );
}
 
export default PlayerSingle;