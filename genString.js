function generateUniqueString(lenght)
{
    var result = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0 ; i < lenght ; i++ )
    {  
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
}

console.log(generateUniqueString(110));