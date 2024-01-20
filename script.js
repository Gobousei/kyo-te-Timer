var timer = document.getElementById('timer');
var base;
var startTime;
var reset;
var n=0;
var count=0;
var pause=false;
var repeat;
function start(){
    base = document.getElementById('base').value;
    if(!pause){
        document.getElementById('button').innerText='停止';
    if(!base){
        alert('基数を入力してください');
    }else if(base > 10||base < 2){
        alert('基数は2以上10以下の整数にしてください');
    }else{
        pause=true;
        startTime = Date.now();
        n=0;
        document.getElementById('t-number').innerText="T"+base;
    countUp();
    }
}else{
    document.getElementById('button').innerText='スタート';
    pause=false;
    clearTimeout(repeat);
}
}
function countUp() {
    document.getElementById('cout').innerText='リセット回数:'+count;
    const d = new Date(Date.now()-startTime);
    reset = base**3 -2 + n;
    var time = Number((d.getSeconds()-n).toString(base));
    console.log(d.getSeconds()-n);
    const s=String(time).padStart(3,"0");
    timer.textContent = s;

    if(d.getSeconds()>reset){
        count+=1;
        n=1;
        startTime = Date.now();
    }
      repeat = setTimeout(() => {
        countUp();
    }, 1000);
  }