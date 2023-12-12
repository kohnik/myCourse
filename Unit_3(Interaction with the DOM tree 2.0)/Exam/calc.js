let moneyCount = 1;
let monthCount = 1;

document.querySelector('.top').addEventListener('change' , () => {
    moneyCount = +document.querySelector('.top').value;
    f1();
});

document.querySelector('.bottom').addEventListener('change' , () => {
    monthCount = +document.querySelector('.bottom').value;
    f1();
});

function f1(){
    let result = moneyCount / monthCount;
    document.querySelector('.pay').textContent = Math.floor(result);
    let procCount = document.querySelector('#salary')
    if(procCount.checked){
        document.querySelector('.proc').textContent = '15%';
    }
    else{
        document.querySelector('.proc').textContent = '20%';
    }
}

