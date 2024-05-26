// // setInterval(functionName,millisecond)
//                         // 1000 millisecond = 1 second
// // clearInterval()
//  var mrgn = 0;
//   var id = setInterval(anim,100)

//   function anim(){
//     // console.log('hello')
//     // var mrgn = mrgn + 200;
//      mrgn = mrgn + 5;
//      if( mrgn == 100){
//         clearInterval(id)
//      }

//      else{

//          var target = document.getElementById("test")
//         target.style.marginLeft = mrgn + 'px';
//      }
//   }

mrgn = 0;
var y;
// var y;

function start() {
  y = setInterval(run, 100);
  function run() {
    document.getElementById("btn").style.display = "none";
    if (mrgn == 1000) {
      clearInterval(x);
      mrgn = 0;
    } else {
      mrgn += 5;
      var x = document.getElementById("car");
      // console.log('hello')
      x.style.marginLeft = mrgn + "px";
    }
  }
}

function stop() {
  clearInterval(y);
  document.getElementById("btn").style.display = "block";

  // mrgn=0
}
