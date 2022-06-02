const jwt = require("jsonwebtoken")
exports.refresh = async (req,res,next) => {
    const token_refresh =
        req.body.token_refresh ||
        req.query.token_refresh ||
        req.headers["x-access-token"] ||
        req.headers["token_refresh"];

    if (!token_refresh) {
        // Если нужно вываливать 403 ошибку
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const jwtUser = jwt.verify(token_refresh, config.TOKEN_KEY)
        let user = {user_id: jwtUser._id, email: jwtUser.email};
        user.token = jwt.sign(
            {user_id: jwtUser._id, email: jwtUser.email},
            process.env.TOKEN_KEY,
            {
                expiresIn: 60,
            }
        )

        user.token_refresh = jwt.sign(
            {user_id: jwtUser._id, email: jwtUser.email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            },
            null
        )
        console.log(user)
        return res.status(200).json(user)
        //req.user = jwt.verify(token, config.TOKEN_KEY);
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}