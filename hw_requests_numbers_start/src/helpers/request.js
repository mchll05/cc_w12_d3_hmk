const Request = function(url){
  this.url = url
}

Request.prototype.get = function(callback){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    if(xhr.status !== 200){return;}
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    callback(data);
  })


  xhr.open('GET',this.url);
  xhr.setRequestHeader('Accept','application/json')
  xhr.send();
}

module.exports = Request;
