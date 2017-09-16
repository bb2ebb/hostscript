!function(t){
  var e=function(t,e){
    return Object.assign({},t,e)
  };
  t.Fr=t.Fr||{},t.Fr.CryptoDonate=function(t){
    this.config={
      coin:"bitcoin",
         address:"3Q2zmZA3LsW5JdxkJEPDRbsXu2YzzMQmBQ",
         qr:!0,getQrImage:function(t){
            return "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+t
         },
         strings:{
           button:"Donate",buttonTitle:"Donate {coinName}",
           coins:{
             bitcoin:"Bitcoin",
             ethereum:"Ethereum"
           },
           dialogHeader:"Donate {coinName}",
           dialogHelper:"Please use this {coin} address to donate.<br/>Thanks for your contribution !",
           openInWallet:"Click here to send this address to your wallet."},
           baseURL:"//lab.subinsb.com/projects/francium/cryptodonate",
           buttonLarge:!1,
           buttonClass:"",
           dialogClass:""
    },
    this.getString=function(t){
      var e=this.config.strings[t],n={coin:this.config.coin,coinName:this.config.strings.coins[this.config.coin]},
      o=Object.keys(n);
      for(i=0;i<o.length;i++)e=e.replace("{"+o[i]+"}",n[o[i]]);return e
    },
    this.appendTo=function(t){
      var e=document.createElement("a");
      e.className="cryptodonate-btn "+this.config.buttonClass,e.innerHTML='<img src="'+this.config.baseURL+"/img/icon_"+this.config.coin+'.png" /><span>'+this.config.strings.button+"</span>",e.title=this.getString("buttonTitle"),this.config.buttonLarge&&(e.className+=" large");
      var n=this;
      e.addEventListener("click",function(){n.showDialog()}),t.appendChild(e),this.makeDialog()},this.makeDialog=function(){
        null===document.getElementById("cryptodonate-dialog")&&(dialog=document.createElement("div"),
        dialog.id="cryptodonate-dialog",
        dialog.innerHTML='<div id="cryptodonate-action"></div>',
        dialog.innerHTML+='<p id="cryptodonate-helper"></p>',
        dialog.innerHTML+='<div id="cryptodonate-addressHolder"><img id="cryptodonate-coin" /><input type="text" id="cryptodonate-address" readonly="readonly" onclick="this.select();" /><a id="cryptodonate-wallet" target="_blank" href="" title="'+this.config.strings.openInWallet+'"><img src="'+this.config.baseURL+'/img/wallet.png" /></a></div>',
        dialog.innerHTML+='<div id="cryptodonate-qrHolder"><img id="cryptodonate-qr"></img></div>',
        dialog.innerHTML+='<a id="cryptodonate-credit" href="https://subinsb.com/cryptodonate" target="_blank">CryptoDonate</a>',
        dialog.innerHTML+='<a id="cryptodonate-close">x</a>',
        document.body.appendChild(dialog),
        dialogOverlay=document.createElement("div"),
        dialogOverlay.id="cryptodonate-overlay",
        document.body.appendChild(dialogOverlay),
        $this=this,document.addEventListener("keyup",function(t){27===t.keyCode&&$this.hideDialog()}),
        document.getElementById("cryptodonate-close").addEventListener("click",$this.hideDialog),
        document.getElementById("cryptodonate-overlay").addEventListener("click",$this.hideDialog))},
        this.showDialog=function(){document.getElementById("cryptodonate-action").innerHTML=this.getString("dialogHeader"),
        document.getElementById("cryptodonate-coin").src=this.config.baseURL+"/img/icon_"+this.config.coin+".png",
        document.getElementById("cryptodonate-coin").title=this.config.coin,
        document.getElementById("cryptodonate-address").value=this.config.address,
        document.getElementById("cryptodonate-helper").innerHTML=this.getString("dialogHelper"),
        document.getElementById("cryptodonate-wallet").href=this.config.coin+":"+this.config.address,
        document.getElementById("cryptodonate-qr").src=this.config.getQrImage(this.config.address);
        
        var t=document.getElementById("cryptodonate-dialog");
        t.className=this.config.dialogClass,
          t.style.display="block",
          document.getElementById("cryptodonate-overlay").style.display="block"},
          this.hideDialog=function(){document.getElementById("cryptodonate-dialog").style.display="none",
          document.getElementById("cryptodonate-overlay").style.display="none"},this.config=e(this.config,t)
  }
}(window);
