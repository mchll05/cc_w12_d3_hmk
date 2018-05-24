const PubSub = require('../helpers/pub_sub.js')

const FactView = function(form){
  this.form = form;
}

FactView.prototype.setupListener = function () {
  PubSub.subscribe('Number:number-info',(evt)=>{
    this.render(evt.detail);
    console.log(evt.detail)
  })
};

FactView.prototype.render = function (numberFact) {
  this.form.innerHTML ='';
  const number = document.createElement('h3');
  number.textContent = `Number: ${numberFact.number}`;

  const text = document.createElement('h3');
  text.textContent = `Fact: ${numberFact.text}`


  this.form.appendChild(number);
  this.form.appendChild(text);
};


FactView.prototype.bindEvents = function () {
  this.setupListener();
};


module.exports = FactView;
