function printBox (width,height){
  let lign="";
      for (let i=1;i<=height;i++){
              for (let j=1;j<=width;j++){
                   if((i==1 && j<=width) || (i==height && j<=width)) {
                      lign=lign+"*";
                   }
                   if ((i>1 && i < height && j==1) || (i>1 && i < height &&j == width)){
                    lign=lign+"*";
                   }
                   if(i>1 && i < height && j>1 && j<width) {
                      lign=lign+" ";
                  }
              }
              console.log(lign);
               lign="";
       }           
}
printBox(5, 4);
printBox(6, 5);
module.exports = printBox
