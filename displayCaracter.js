function displayCaracter(n){
    let lastPair = "B";
    for(let i=1;i<=n;i++){
         if(i % 2 == 0){
            console.log(lastPair);
                if(lastPair == "B")
                lastPair = "C"
                    else
                        lastPair = "B";
         }
         else {
            console.log("A");
         }

    }
}
displayCaracter(20);
module.exports = displayCaracter
