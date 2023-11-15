console.log("Hello");


  
function toggleVideoState() {
  let video = document.getElementById("home-bg-video");
  let btn = document.getElementById("home-video-btn");
  
  if (video.paused) { 
    
    video.play();
    btn.classList.remove("isActive");
  } else {
    video.pause();
    btn.classList.add("isActive");
    
  }
}

const modal = document.getElementById('modal-login_register');

function showModal(pageNa) {
  modal.style.display = 'block';
  handleLoginRegisterVisibility(pageNa);
}

function handleLoginRegisterVisibility(pageNa) {
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  
  if(pageNa === 'login') {
    formLogin.style.display = 'block';
    formRegister.style.display = 'none';
  } else if (pageNa === 'register') {
    formLogin.style.display = 'none';
    formRegister.style.display = 'block';
  }
}

function hideModal() {
  modal.style.display = 'none';
}
