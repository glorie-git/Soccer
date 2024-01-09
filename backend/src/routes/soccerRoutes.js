import { addNewPlayer, getPlayers, getPlayerWithID, updatePlayer, deletePlayer } from '../controllers/playerControllers'

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)

        // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // gets a specific player
        .get(getPlayerWithID)

        // updates a specific players
        .put(updatePlayer)

        // delets a specific player
        .delete(deletePlayer);
}

export default routes;