export default function shortestWord(sentence2){
    var words2=sentence2.split(" ")
    //result2 initialized to the 1st index of the new split words2 array index "The"
    var result2=words2[0]
    for(var i=0;i<words2.length;i++){
    if(words2[i].length<=result2.length){
    //minWord=words2[i].length
    result2=words2[i]}
    }return result2
    }