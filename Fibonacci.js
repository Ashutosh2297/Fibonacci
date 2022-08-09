const isFibonacci= () =>{
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    var first, sec, nextTerm;

    first = parseInt(one);
    sec = parseInt(two);

    var Pnum = [first,sec];
  
        for (let i = 2; i < 10; i++) {

            nextTerm = parseInt(first + sec);
            Pnum[i] = nextTerm;
            first = sec;
            sec = nextTerm;
            
        }
        document.getElementById('showData').innerHTML = `The Fibonacci numbers are ${Pnum},
    `
   
  }

