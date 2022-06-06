const translations = require('../models/translation')

exports.saveTranslation = async function(req,res){
    console.log("saving translation")
    const email = req.body.email
    const firstWord = req.body.firstWord
    const secondWord = req.body.secondWord
    const firstLanguage = req.body.firstLanguage
    const secondLanguage = req.body.secondLanguage

    const newTranslation = new translations()
    newTranslation.email = email
    newTranslation.firstWord = firstWord
    newTranslation.secondWord = secondWord
    newTranslation.firstLanguage = firstLanguage
    newTranslation.secondLanguage = secondLanguage
    newTranslation.updated_at = Date.now()

    console.log(newTranslation)

    newTranslation.save( function (err) {
        if(err) {
            console.error(err)
            return err
        }
        // TODO: отослать письмо на почту, что бы проверить валидность
        res.status(201).json(newTranslation)
    })
}