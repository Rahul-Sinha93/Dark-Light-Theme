const lightColor = ['#FF9999','#E0E0E0','#FF99CC','#FF99FF','#99CCFF','#99FF99'];
const darkColor = ['#54410E','#540E4B','#31540E','#540E3A','#541A0E','#52540E'];

const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change' ,(e)=>{
    let random = Math.floor(Math.random()*6);
    if(e.target.checked){
    document.body.style.background = darkColor[random];  
    document.getElementById('themeName').innerHTML = 'Dark';
    document.getElementById('para').style.color = '#fff'
    }
    else{
    document.body.style.background = lightColor[random];  
    document.getElementById('themeName').innerHTML = 'Light';
    document.getElementById('para').style.color = 'black'


    }
})


