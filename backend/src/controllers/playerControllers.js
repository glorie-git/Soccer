import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema);

// request with route
// the controller executes the request in the database

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body)

    // Model.prototype.save() method with a callback is no longer supported in Mongoose version []
    newPlayer.save()
        .then(savedPlayer => {
            res.json(savedPlayer);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

export const getPlayers = (req, res) => {
    // Player.find({}, (err, Player) => {
    //     if(err) {

    //     }
    //     res.json(Player);
    // });
    Player.find()
        .then(foundPlayer => {
            res.json(foundPlayer);
        })
        .catch(err => {
            res.status(500).send(err);
        });
        // .then(savedPlayer => {
        //     res.json(savedPlayer);
        // })
        // .catch(err => {
        //     res.status(500).send(err);
        // });
}