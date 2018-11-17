document.addEventListener('DOMContentLoaded', () => {
  const parentDiv = document.getElementById('graphics')

  function changePicture(){
    if(parentDiv.querySelector("div").id === 'graphics-one'){
      parentDiv.querySelector("div").id = "graphics-two";
    }else{
      parentDiv.querySelector("div").id = "graphics-one";
    }
  }


  //note that setInterval does not like ()
  setInterval(changePicture, 4000);
})
