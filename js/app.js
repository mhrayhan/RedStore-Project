function add(a, b){

    function sum(){
        return a+b;
    }

    function minus(){
        return a-b;
    }

    function times(){
        return a*b;
    }

    function div(){
        return a/b;
    }

    return sum() + minus() + times() + div();
}

var result = add(20, 5);
console.log(result);

