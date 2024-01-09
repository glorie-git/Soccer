import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema);

// request with route
// the controller executes the request in the database
// these are all functions

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
    Player.find()
        .then(foundPlayer => {
            res.json(foundPlayer);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId)
        .then(foundPlayer => {
            res.json(foundPlayer);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new: true})
        .then(foundPlayer => {
            res.json(foundPlayer);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

export const deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.PlayerId})
        .then(removedPlayer => { // we do not need the error function
            // res.json(foundPlayer);
            res.json({ message: 'Successfuly deleted player'});
        })
        .catch(err => {
            res.status(500).send(err);
        });
}