for ( let i = 1; i<=20; i++){
    if (i%3===0 && i%5===0){
        document.writeln("FizzBuzz");
        document.writeln("<br>");
    }else if(i%5===0){
        document.writeln("Buzz");
        document.writeln("<br>");
    }else if (i%3===0){
        document.writeln("Fizz");
        document.writeln("<br>");
    }else{
        document.writeln(""+i);
        document.writeln("<br>");
    }
}