document.querySelector('.card-number-in').oninput = () => {
    document.querySelector('.card-num-box').innerText =document.querySelector('.card-number-in').value;
}
document.querySelector('.card-holder-in').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-in').value;
}
document.querySelector('.month-in').oninput = () =>{
    document.querySelector('.exp-month').innerText =  document.querySelector('.month-in').value;
}
document.querySelector('.year-in').oninput = () =>{
    document.querySelector('.exp-year').innerText=document.querySelector('.year-in').value;
}

document.querySelector('.cvv-in').onmouseenter = () => {
    document.querySelector('.card-front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.card-back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvv-in').onmouseleave = () => {
    document.querySelector('.card-front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.card-back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvv-in').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-in').value;
}