const logger = require('../helpers/logger');
// const { authorizeUserByToken } = require('../middlewares');

const getHome = (req, res) => {
// middleware - require token
    const token = req.get("Token");
    if(token) {
        logger.info(`Exercise completed! Token: ${token} Returning flag`)
        return res.send("FLAG!")
    }
    else{
        logger.info(`Unauthorized token access - token`)
        return res.send("UNAUTHORIZED PAGE TODO")
    }
}

module.exports = getHome;


// const homeController = {
//     getHome,
// }
// const homeController = require()
// homeController.get(Home)
