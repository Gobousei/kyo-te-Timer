var timer = document.getElementById('timer');
var base;
var startTime;
var reset;
var n;
function start(){
    base = document.getElementById('base').value;
    if(!base){
        alert('基数を入力してください');
    }else if(base>10){
        alert('基数は10以下にしてください');
    }{
        reset = base**3 -1;
        startTime = Date.now();
        n=0;
    countUp();
    }
}
function countUp() {
    const d = new Date(Date.now()-startTime);
    var time = Number((d.getSeconds()-n).toString(base));
    console.log(d.getSeconds()-n);
    const s=String(time).padStart(3,"0");
    timer.textContent = s;
    console.log(d.getSeconds()-reset-n);

    if(d.getSeconds()<reset+n){
        setTimeout(() => {
            countUp();
        }, 1000);
    }else{
        n=1;
        startTime = Date.now();
      console.log(startTime);
      setTimeout(() => {
        countUp();
    }, 1000);
    }
  }