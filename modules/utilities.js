export const formatNumber = number => {
    let rawNumber = number.toFixed(2);    
    
    let formattedNumber = [];    
    for (let i = (rawNumber.length - 3); i > 0; i-=3) {
        formattedNumber.unshift(rawNumber.substring(i,i-3));
    }    
    return `${formattedNumber.join(',')}${rawNumber.substring(rawNumber.length,rawNumber.length-3)}`;    
}