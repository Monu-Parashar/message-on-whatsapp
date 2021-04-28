const ln = document.getElementById("link");
const c = document.getElementById("code");
const n = document.getElementById("number");
function lnk(){return "https://wa.me/"+c.value+n.value}
function kyup() { ln.value = lnk();}
function opn() { window.open(lnk());}
function cpy() {
  ln.select();
  ln.setSelectionRange(0, 99);
  document.execCommand("copy");
}