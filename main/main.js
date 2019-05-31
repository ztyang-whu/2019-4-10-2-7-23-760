module.exports = function main(inputs) {
    // write your code here...
    var result=6;
    if(inputs.distance>2&&inputs.distance<=8){
        result+=0.8*(inputs.distance-2);
    }
    if(inputs.distance>8){
        result+=1.2*(inputs.distance-8)+0.8*6;
    }
    result+=inputs.parkTime*0.25;
    result=Math.round(result);
    return result;
};
