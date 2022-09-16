export default function wordLengths(sentence3){
    var words3=sentence3.split(" ")
    var sumWords=0
    for(var i=0; i<words3.length;i++){
    sumWords +=words3[i].length}
    console.log(sumWords)
    return sumWords}