import express from "express";

import longestWord from "./bootcamp/longestWord.js";
import shortestWord from "./bootcamp/shortestWord.js";
import wordLengths from "./bootcamp/wordLengths.js";
import totalPhoneBill from "./bootcamp/TotalPhoneBill.js";
import enoughAirtime from "./bootcamp/enoughAirtime.js";

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function(req,res){

    const sentence = req.query.sentence;
    
    if(!sentence){
        res.json({
            error:'Please type in a sentence to analyze'
        })
    }
    
    res.json({
        "message":sentence,
        "longestWord":longestWord(sentence),
        "shortestWord":shortestWord(sentence),
        "sum": wordLengths(sentence)
    });
});
app.get("/api/phonebill/total", function (req, res) {
  const bill = req.query.myBill;
  res.json({
    //   call : 2.75,
    //   sms : 0.65
    "bill": totalPhoneBill(bill)
  })
})
//Get the bill object from API
app.get('/api/phonebill/price', (req, res) => {
  //     // res.json({
  //     //     'total' :totalPhoneBill(myBill)
  //     // })
});
      
   //  let available = 0
app.post("/api/enoughAirtime", function (req, res) {
  const { airtimeUsage, availableAmount } = req.body;
  // const airtimeUsage = req.query.airtimeUsage
  // const available = req.query.available
  // console.log(reg.body)
  console.log(enoughAirtime(airtimeUsage, availableAmount))
  res.json({
    result: enoughAirtime(airtimeUsage, availableAmount)
  });
});
   
const PORT=6007;
app.listen(PORT, function(){
    console.log("api started on port ",PORT)
})