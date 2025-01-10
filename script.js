let greeting='Welcome To My Page';
// alert(greeting);

console.log('Hello World', greeting);

// function showPopup(){
//     document.getElementById('heere').style.textDecoration = 'underlined'
// }

const Main_cred = document.getElementById('main-cred');
const Cred = document.getElementById('cred');
const hcred = document.getElementsByClassName('h-cred')[0];
const Hi = document.getElementById('fran-hi');
const popup = document.getElementById('popup');
const container = document.getElementsByClassName('container')[0];

//Display Main_Cred when Cred is clicked
    Cred.addEventListener('click', () => {
        Main_cred.style.display = 'block';
        hcred.style.display= 'block';
        Cred.style.display= 'none';
    });

    hcred.addEventListener('click', () => {
        Cred.style.display= 'block';
        hcred.style.display= 'none';
        Main_cred.style.display= 'none';
    });

    Hi.addEventListener('click', () => {
        container.style.display= 'none';
        popup.style.display= 'block';
    });

    function closePopup(){
        container.style.display= 'block';
        popup.style.display= 'none';
    }



    
        
    