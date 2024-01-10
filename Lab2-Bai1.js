const result = {
    success: ["max-length", "no-amd", "prefer-arrow-funcions"],
    failure: ["no-var", "var-no-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
 };
 
 function makeList(arr){
    return arr.map(item => `<li class="text-warning">${item}</li>`);
 }
 
 const failureList = makeList(result.failure);
 console.log(failureList);
 