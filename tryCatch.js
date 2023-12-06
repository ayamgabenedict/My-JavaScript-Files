// Use Object.freeze()
function freezeObj(){
    'use strict'
    const MATH_CONSTANT = {
        'PI':3.14
    };
    //Make object immutable
    Object.freeze(MATH_CONSTANT)
    try{
        MATH_CONSTANT.PI = 25;
    }catch(err){
        console.log(err)
    }
    return MATH_CONSTANT.PI;
}
freezeObj();
console.log(freezeObj())
