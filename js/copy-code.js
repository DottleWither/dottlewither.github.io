function copyCode(self) {
    var text=self.parentNode.innerText;
    var input=document.getElementById('copy-buffer');
    input.value=text;
    input.select();
    document.execCommand('copy');
    self.innerHTML='<i class="far fa-copy"></i>&nbsp;Succeed!';
    self.setAttribute('style','background:#f99157;transition:0.8s;color:#2d2d2d !important;right:35px;');
    setTimeout(function() {
        self.innerHTML='<i class="far fa-copy"></i>&nbsp;Copy!';
        self.removeAttribute('style');
    }, 1000);
}

function initCopyButton() {
    var buttons=document.getElementsByClassName('copy-button');
    for (var i = 0; i < buttons.length; i ++) {
        buttons[i].setAttribute('onClick', 'copyCode(this)');
        buttons[i].innerHTML = '<i class="far fa-copy"></i>&nbsp;Copy!';
    }
}