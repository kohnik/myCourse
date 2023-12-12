function switchActiveInput () {
    let obj = [{"inputOne": ' ', "inputTwo": ' ', "inputThree": ' ', "inputFour": ' '}];

    let inputs = document.querySelectorAll(".js_reg_confirmation_code");
    inputs.forEach(currentItem => {
            currentItem.addEventListener('change', () => {
                obj.forEach(item => {
                    for(let i in item){
                        if (i == currentItem.id) {
                            item[i] = currentItem.value;
                            result(obj);
                        }
                    }
                })
            })
    });
}

function result(obj) {
    let result = ''
    obj.forEach(item => {
        for(let i in item){
            result += item[i];
        }
    })
    console.log(result);
}

switchActiveInput();
