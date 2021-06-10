(async()=>{
 function caculate(a,b,delay){
     return new Promise((resolve,reject)=>{
         setTimeout(() => {
            const s= a*b;
            const p = (a*b)/2;
            console.log('diện tích hình chữ nhật là:'+s);
            console.log('chu vi hình chữ nhật là:'+p);
            resolve();
         }, delay);
     })
 }
await caculate(5,5,2000);
})();