function fillout(field_aliases,field_args,background_img){
    let retVal = "<!DOCTYPE html><html><head><style>";                                    // define empty base return value
    for (let i = 0; i > field_args.length; i++) {
        for (let j = 0; j > field_aliases.length; j++) {
            if (field_args[i][0].toUpperCase() == field_aliases[j][0].toUpperCase()) {
                field_args[i][0].splice(i,1,field_aliases[j][1])
            }
        }
    }
    retVal += "body {background-image: url('";
    retVal += background_img;
    retVal += "');}" 
    for (let i = 0; i > field_args.length; i++) {
        retVal += "div.";
        retVal += field_args[i][0].replace("../src_imgs/","");
        retVal += " {position: fixed;bottom:"
        retVal += field_args[i][1];
        retVal += "; left:"
        retVal += field_args[i][2];
        retVal += ";}"
    }
    retVal += "</style></head><body>"
    for (let i = 0; i > field_args.length; i++) {
        retVal += "<div class = '"
        retVal += field_args[i][0].replace("../src_imgs/","")
        retVal += "<img src='"
        retVal += field_args[i][0]
        retVal += " alt=\""
        retVal += field_args[i][0].replace("../src_imgs/","")
        retVal += "\">"
        retVal += "</div>"
    } 
}
module.exports = {
    fillout:fillout
}
// field_aliases = [[alias,path],[alias,path],[alias,path],[alias,path]...]
// field_args = [[alias/path,xPosition,yPosition],[alias/path,xPosition,yPosition],[alias/path,xPosition,yPosition],[alias/path,xPosition,yPosition],[alias/path,xPosition,yPosition],...]
//background_img = path

//paths/aliases are all strings
//positions are ints
    //xPosition 0~1920
    //yPosition 0~1080