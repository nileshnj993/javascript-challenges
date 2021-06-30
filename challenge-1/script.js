var result = document.getElementById('flex-box-result')

function ageCalculator(){
    var birthYear = prompt('What year were you born in?')
    var ageInDays = (2021-birthYear)*365
    result.innerHTML = '<h1>You are '+ageInDays+' days old</h1>'
}
    
function reset(){
    result.innerHTML=''
}
