function action1(){
  hideAll();
    var img1 = document.getElementById('img1');
    img1.style.display = "block";

}

function action2(){
  hideAll();
    var img2 = document.getElementById('img2');
    img2.style.display = "block";

}
function action3(){
  hideAll();
    var img3 = document.getElementById('img3');
    img3.style.display = "block";
}

function action4(){
  hideAll();
    var img4 = document.getElementById('img4');
    img4.style.display = "block";
}

function action5(){
  hideAll();
    var img5 = document.getElementById('img5');
    img5.style.display = "block";
}

function action6(){
  hideAll();
    var img6 = document.getElementById('img6');
    img6.style.display = "block";
}

function action7(){
  hideAll();
    var img7 = document.getElementById('img7');
    img7.style.display = "block";
}

function action8(){
  hideAll();
    var img8 = document.getElementById('img8');
    img8.style.display = "block";
}


function hideAll() {
  var images = document.querySelectorAll('#slider_polosa>img');
  for (var i = 0; i < images.length; ++i) {
    images[i].style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
   action1() 
})