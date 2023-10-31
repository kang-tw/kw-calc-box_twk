function avg(numbers){

    let s=0;
    for(let i =0;i<numbers.length;i++){
        s+=numbers[i];
    }

    return s/numbers.length;

}

function prime(numbers){
    let denominator = numbers-1;
    while(denominator!== 1){
        if(numbers % denominator==0) return false;
        denominator--;
    }

    return true;
}


function fact(numbers){
    if(numbers === 1) return 1;

    return numbers*fact(numbers-1);
}


module.exports={
    avg,
    prime,
    fact
};