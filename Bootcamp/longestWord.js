export default function longestWord(sentence){
    var words=sentence.split(" ")
    var maxWord=0
    var result=""
    for(var i=0; i<words.length;i++){
    if(words[i].length>=maxWord){
    maxWord=words[i].length
    result=words[i]}  
    }return result}