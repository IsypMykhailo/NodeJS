let crypto = require('crypto')
const tokenKey = '1a2b-3c4d-5e6f-7g8h'

const users = require('../models/user')

const nodemailer = require('nodemailer')

exports.middlewareAuth = function (req, response, next) {
    // console.log(req.headers.authorization)
    if (req.headers.authorization) {
        // console.log('Get Token')
        // console.log(req.headers.authorization)
        let tokenParts = req.headers.authorization
            .split('.')
        //.split('.')
        let signature = crypto
            .createHmac('SHA256', tokenKey)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64')

        // console.log('in Auth')
        // console.log(JSON.parse(
        //     Buffer.from(tokenParts[1], 'base64').toString(
        //         'utf8'
        //     )))
        // console.log(tokenParts[0])
        // console.log(tokenParts[1])
        // console.log('Signature:')
        // console.log(signature)
        // console.log(tokenParts[2])

        if (signature === tokenParts[2])
            req.user = JSON.parse(
                Buffer.from(tokenParts[1], 'base64').toString(
                    'utf8'
                )
            )
        return next()
    }
    // req.user = {name: 'Guest'}
    // console.log('Next')
    return next()
}

exports.authByLogin = async function (req, res){
    console.log('authByLogin')

    const email = req.body.email
    const password = req.body.password


    users.findOne( {email: email, password: password},
        function(err, user) {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: 'DB Error' })
            }

            if(!user || !user.isVerify) {
                return res.status(404).json({ message: 'User Not Find' })
            }

            user.password = null // Обнулим пароль

            let head = Buffer.from(
                JSON.stringify({ alg: 'HS256', typ: 'jwt' })
            ).toString('base64')
            // todo: Может не всего пользователя
            let body = Buffer.from(JSON.stringify(user)).toString(
                'base64'
            )
            let signature = crypto
                .createHmac('SHA256', tokenKey)
                .update(`${head}.${body}`)
                .digest('base64')

            // console.log('head body:')
            // console.log(`${head}.${body}`)
            // console.log('Get User:')
            // console.log(user)
            // console.log('Send Token:')
            // console.log(`${head}.${body}.${signature}`)
            return res.status(200).json({
                user: user,
                token: `${head}.${body}.${signature}`,
            })

        })

    // return res.status(404).json({ message: 'User not found' })
}


exports.tryCreateUser = async function (req, res ){
    console.log('tryCreateUser')
    const email = req.body.email
    const password = req.body.password

    // TODO: Организовать проверки

    const newUser = new users()
    newUser.email = email
    newUser.password = password
    newUser.isVerify = false
    newUser.updated_at = Date.now()

    console.log(newUser)

    newUser.save( function (err) {
        if(err) {
            console.error(err)
            return err
        }
        // TODO: отослать письмо на почту, что бы проверить валидность
        res.status(201).json(newUser)
    })
}

exports.sendEmailVerification = async function (req, res){
    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "amazonkanameforme@gmail.com",
            pass: "alerkybgtlmbvsnc",
        },
    });

    let email = req.body.email
    console.log("Check");
    transport.sendMail({
        from: "mikeisisyp@gmail.com",
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
        <h2>Hello User</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:5000/api/auth/confirm/${email}> Click here</a>
        </div>`,
    }).catch(err => console.log(err));
    console.log(res.status);
}

exports.verifyUser = function(req,res,next) {
    users.findOne({
        email: req.params.email,
    })
        .then((user) => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            user.isVerify = true;
            user.save((err) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            });
        })
        .catch((e) => console.log("error", e));
}