const fs = require('fs');
const path = require('path');
const webp=require('webp-converter');
//const requestImageSize = require('request-image-size');
const im = require('imagemagick');

/**
 * Единая точка перевода изображения в формат WEBP
 * @param request - передаю запрос, в котором будет файл
 * @returns - пока не сообщаю
 */
function convertWEBP(request){
    let file = request.file;

    console.log("File: ")
    console.log(file);

    if(!file) {
        return 422
    }

    let fromFile = path.join(__dirname, '../../public/uploads/', file.filename);
    console.log("FromFile: " + fromFile);

    /*im.resize({
        srcPath: fromFile,
        dstPath: fromFile + 'resize',
        width:256
    }, function(err, stdout, stderr){
        if(err){
            console.log("Resize error: ")
            console.log(err);
        }
        console.log('resized to fit within 256x256px');
    });*/

    const result = webp.cwebp(fromFile, fromFile+".webp","-q 80", logging="-v");
    result.then(function(result) {
        // you access the value from the promise here
        console.log(result)
    });
}

exports.avatar = function(request, response){
    convertWEBP(request);
}

exports.postThumbnail = function(request, response){

}

exports.postImages = function(request, response){

}