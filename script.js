let doge = document.getElementById("dogecoin");
let eth = document.getElementById("ethereum");
let bit = document.getElementById("bitcoin");
var setting = {
    // 'async': true,
    // 'scrossDomain': true,
    'url': "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    // 'method':"GET",
    // "headers":{}
    
}

$.ajax(setting).done(function(res){
    doge.innerHTML = res.dogecoin.usd;
    eth.innerHTML = res.ethereum.usd;
    bit.innerHTML = res.bitcoin.usd;
});