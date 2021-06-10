// Bài 3, Viết chuơng trình JS cứ sau hai giây lại trả về một số ngẫu nhiên từ 1-100. 
// Sau đó tìm xem số này có phải số nguyên tố hay không.
(async()=>{
    await new Promise((resolve,reject)=>{
        setInterval(() => {
         const rand =  Math.floor(Math.random() * 101);
         console.log(rand);
         function isPrime(rand) {
            if(rand< 2) {
                console.log('false');
            }
          
            for (let k = 2; k < rand; k++){
              if( rand % k == 0){
                console.log('false');
              }
            }
            console.log('true');
          }
          isPrime();
            resolve();
        }, 1000);
    })
})();