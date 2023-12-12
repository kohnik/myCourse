//Дана строка. Показать номера символов, совпадающих с последним символом строки.
let str = "asdessEfheAe";
let lastSymbol = str[str.length - 1];
let tempArr = [];

for (let index = 0; index < str.length; index++) {
    if(lastSymbol.toLocaleLowerCase() === str[index].toLocaleLowerCase()) {
        tempArr.push(index);
    }
}
tempArr.pop();

console.log(tempArr);




let arrTest = [1,5,6,8,4,5,7,4,3,6,8,5,6,4,6];
let objIndex = {};

function startEndAveregEl() {
    let count = Math.floor(arrTest.length / 2);
    objIndex['avereg'] = count;
    objIndex['start'] = 0;
    objIndex['end'] = arrTest.length - 1;
    console.log(objIndex);

    setArr();
}

function setArr() {
    arrTest = arrTest.map((item, index) => {
        if(index == objIndex.avereg || index == objIndex.start || index == objIndex.end) {
            return item = 1;
        }
        return item = 0;
    });
    console.log(arrTest);
}

startEndAveregEl();