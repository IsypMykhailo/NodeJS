let crypto = require('crypto')
const tokenKey = '1a2b-3c4d-5e6f-7g8h'

const users = require('../models/user')

exports.middlewareAuth = async function (req, res, next) {
    if (req.headers.authorization) {
        let tokenParts = req.headers.authorization
            //.split(' ')[1]
            .split('.')
        let signature = crypto
            .createHmac('SHA256', tokenKey)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64')

        if (signature === tokenParts[2])
            req.user = JSON.parse(
                Buffer.from(tokenParts[1], 'base64').toString(
                    'utf8'
                )
            )

        next()
    }

    next()
}

exports.authByLogin = async function(req, res) {
    for (let user of users) {
        if (
            req.body.email === user.email &&
            req.body.password === user.password
        ) {
            let head = Buffer.from(
                JSON.stringify({alg: 'HS256', typ: 'jwt'})
            ).toString('base64')
            // TODO: Может не всего пользователя
            let body = Buffer.from(JSON.stringify(user)).toString(
                'base64'
            )
            let signature = crypto
                .createHmac('SHA256', tokenKey)
                .update(`${head}.${body}`)
                .digest('base64')

            return res.status(200).json({
                id: user._id,
                email: user.email,
                token: `${head}.${body}.${signature}`,
            })
        }
    }
}

exports.tryCreateUser = async function (req, res){
    const email = req.body.email
    const password = req.body.password

    // TODO: Организовать проверки

    const newUser = new users()
    newUser.email = email
    newUser.password = password
    newUser.IsVerified = false

    newUser.save(function(err){
        if(err){
            console.log(err)
            return err
        }
        // TODO: отослать письмо на почту что бы проверить валидность
        res.sendStatus(201)
    })
}