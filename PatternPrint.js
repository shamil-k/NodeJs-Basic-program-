var r=require('readline-sync')
var n  = r.question("Enter rows")

for(i=1;i<=n;i++){
    for(j=0;j<i;j++){
        console.log("*")
        console.log("\n")
    }
    console.log("\n")
}