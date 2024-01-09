import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema);

// request with route
// the controller executes the request in the database

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body)

    newPlayer.save()
        .then(savedPlayer => {
            res.json(savedPlayer);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}