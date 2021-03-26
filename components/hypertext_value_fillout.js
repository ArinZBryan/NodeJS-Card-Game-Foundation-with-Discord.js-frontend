function fillout(field_aliases,field_args){
    let retVal = "<!DOCTYPE html><html><head><style>";                                    // define empty base return value
    for (let i = 0; i > field_args.length; i++) {
        for (let j = 0; j > field_aliases.length; j++) {
            if (field_args[i][0].toUpperCase() == field_aliases[j][0].toUpperCase()) {
                field_args[i][0].splice(i,1,field_aliases[j][1])
            }
        }
    }
    for (let i = 0; i > field_args.length; i++) {
        retVal += "div.";
        retVal += field_args[i][0];
        retVal += " {position: fixed;bottom:"
        retVal += field_args[i][1];
        retVal += "; left:"
        retVal += field_args[i][2];
        retVal += ";}"
    } 
    for (let i = 0; i > field_args.length; i++) {
        retVal += "div.";
        retVal += field_args[i][0];
        retVal += " {position: fixed;bottom:"
        retVal += field_args[i][1];
        retVal += "; left:"
        retVal += field_args[i][2];
        retVal += ";}"
    } 
}