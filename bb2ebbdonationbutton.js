(function(window) {var extend = function(obj1, obj2) {return Object.assign({}, obj1, obj2);}window.Fr = window.Fr || {};window.Fr.CryptoDonate = function(config) {this.config = {coin: 'bitcoin',address: '1ABKSsAQCt9cmeZwtqW7oDAnzwJ4xZ4vS8',qr: true,getQRImage: function(data) {return 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + data;},strings: {button: 'Donasi',buttonTitle: 'Donasi {coinName}',coins: {bitcoin: 'Bitcoin',ethereum: 'Ethereum'},dialogHeader: 'Donasi {coinName}',dialogHelper: 'Para donatur yang ingin berdonasi dimohon menggunakan alamat {coin} ini. <br/>Terima kasih atas kontribusinya !',openInWallet: 'Klik disini untuk membuka aplikasi wallet anda.'},baseURLcoin: 'https://i.imgur.com/lx3Ym1o.png',buttonLarge: false,buttonClass: '',dialogClass: '',};this.getString = function(name) {var string = this.config.strings[name];var substitution = {coin: this.config.coin,coinName: this.config.strings.coins[this.config.coin],};var keys = Object.keys(substitution);for (i = 0; i < keys.length; i++) {string = string.replace('{' + keys[i] + '}', substitution[keys[i]]);}return string;};this.appendTo = function(elem) {var donationButton = document.createElement('a');donationButton.className = 'cryptodonate-btn ' + this.config.buttonClass;donationButton.innerHTML = '<img src="' +this.config.baseURLcoin +'" /><span>' + this.config.strings.button + '</span>';donationButton.title = this.getString('buttonTitle');if (this.config.buttonLarge) {donationButton.className += ' large';}var $this = this;donationButton.addEventListener('click', function() {$this.showDialog();});elem.appendChild(donationButton);this.makeDialog();};this.makeDialog = function() {if (document.getElementById('cryptodonate-dialog') === null) {dialog = document.createElement('div');dialog.id = 'cryptodonate-dialog';dialog.innerHTML = '<div id="cryptodonate-action"></div>';dialog.innerHTML += '<p id="cryptodonate-helper"></p>';dialog.innerHTML += '<div id="cryptodonate-addressHolder"><img id="cryptodonate-coin" /><input type="text" id="cryptodonate-address" readonly="readonly" onclick="this.select();" /><a id="cryptodonate-wallet" target="_blank" href="" title="' + this.config.strings.openInWallet + '"><img src="https://i.imgur.com/GKr1UOi.png" /></a></div>';dialog.innerHTML += '<div id="cryptodonate-qrHolder"><img id="cryptodonate-qr"></img></div>';dialog.innerHTML += '<a id="cryptodonate-credit" href="http://www.bb2ebb.my.id" target="_blank">Terima kasih atas donasinya</a>';                dialog.innerHTML += '<a id="cryptodonate-close">x</a>';document.body.appendChild(dialog);dialogOverlay = document.createElement('div');dialogOverlay.id = 'cryptodonate-overlay';document.body.appendChild(dialogOverlay);$this = this;document.addEventListener('keyup', function(e) {if (e.keyCode === 27) {$this.hideDialog();}});document.getElementById('cryptodonate-close').addEventListener('click', $this.hideDialog);document.getElementById('cryptodonate-overlay').addEventListener('click', $this.hideDialog);}};this.showDialog = function($this) {document.getElementById('cryptodonate-action').innerHTML = this.getString('dialogHeader');document.getElementById('cryptodonate-coin').src = this.config.baseURLcoin;document.getElementById('cryptodonate-coin').title = this.config.coin;document.getElementById('cryptodonate-address').value = this.config.address;document.getElementById('cryptodonate-helper').innerHTML = this.getString('dialogHelper');document.getElementById('cryptodonate-wallet').href = this.config.coin + ':' + this.config.address;document.getElementById('cryptodonate-qr').src = this.config.getQRImage(this.config.address);var dialog = document.getElementById('cryptodonate-dialog');dialog.className = this.config.dialogClass;dialog.style.display = 'block';document.getElementById('cryptodonate-overlay').style.display = 'block';};this.hideDialog = function() {document.getElementById('cryptodonate-dialog').style.display = 'none';document.getElementById('cryptodonate-overlay').style.display = 'none';};this.config = extend(this.config, config);};})(window);

