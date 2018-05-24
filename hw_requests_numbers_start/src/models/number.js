const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Number = function(){
  this.numberData = {
    number: null,
    text: null
  };
}

Number.prototype.getNumberInput = function(){
  PubSub.subscribe('NumberFormView:submit',(evt)=>{
    this.getData(evt.detail);
    // console.log(evt.detail)
  })
}

Number.prototype.getData = function(number){
  const request = new Request(`http://numbersapi.com/${number}?json`)
  // console.log(request)
  request.get((data)=>{
    this.numberData.number = data.number;
    this.numberData.text = data.text;
    PubSub.publish('Number:number-info',this.numberData)
  })

}

Number.prototype.bindEvents = function () {
  this.getNumberInput();
};

module.exports = Number;
