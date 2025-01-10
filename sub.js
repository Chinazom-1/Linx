
let greeting='Welcome To My Page';
alert(greeting);

console.log('Hello World', greeting);

// the const statement could be used instead

function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  } 
  
  function more() {
    document.getElementById('hide').style.display='block';
    document.getElementById('extra').style.display='block';
    document.getElementById('cookies').style.display= 'none';
  }
  function shownn() {
    document.getElementById('cookies').style.display='block';
    document.getElementById('hide').style.display='block';
  }
function accepted() {
    document.getElementById('cookies').style.display= 'none';
    document.getElementById('hide').style.display= 'none';
}
 function ace() {
    document.getElementById('extra').style.display='none';
    document.getElementById('hide').style.display= 'none';
 }
