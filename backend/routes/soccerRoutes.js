import { 
    addNewPlayer,
    getPlayers,
    getPlayerWithId 
} from '../controllers/playerControllers'

const routes = (app) => {
    app.route('/players')
    .get(getPlayers) // Get endpoint
    .post(addNewPlayer) // POST endpoint

    app.route('/player/:PlayerId')
    .get(getPlayerWithId) // Get specific player
}

export default routes
