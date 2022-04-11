module.exports.random = function myFunction() {
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("generate").innerHTML = x;
  }
  
  
  const startingminutes = 60;
  var time = startingminutes * 60;
  
  const countdownEl = document.getElementById('countdown');
  //  console.log(countdownEl)
  let ram = setInterval(() => {
      
      if (time==0) {clearInterval(ram)
          
      }
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ?  '0' + seconds : seconds;
  
      countdownEl.innerHTML =  `${minutes}:${seconds}`;
      time--;
      // console.log(time)
  }, 1000);
  
  // Sidebar Setup
  
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let mainsection = document.querySelector(".main-section");
  
  btn.onclick = function(){
    sidebar.classList.toggle("active");
    mainsection.classList.toggle("active");
  }
  
  // Modal Setup
  
  const open = document.getElementById('open');
  const modal_container = document.getElementById('modal-container');
  const close = document.getElementById('close');
  
  open.addEventListener('click',()=>{
    modal_container.classList.add('show');
  });
  close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
  });
  
  // Page Navigation
  
  var que_img = document.querySelector('.que-nav');
  let next = document.getElementById('next');
  let back = document.getElementById('back');
  let page_navli = document.querySelectorAll(".page-nav");
  let count = 1;
  
  next.addEventListener('click',()=>{
    if (count == 12) count = 0
    count++
  
    que_img.src = `../temp/item-${count}.png`; 
  })
  
  
  
  back.addEventListener('click',()=>{
      if (count == 1) count = 13
      count--
  
      que_img.src = `../temp/item-${count}.png`;
  })
  
  Array.from(page_navli).forEach(link=>{
    link.addEventListener('click',()=>{
      count = parseInt(link.innerText);
      console.log(count);
      que_img.src = `../temp/item-${count}.png`;
      
    })
  })
  
  