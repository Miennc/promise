let arr = [];
(async()=>{
    function add(delay){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                 const rand =  Math.floor(Math.random() * 101);
                  arr.push(rand);
                  console.log(arr);
                resolve(rand);
            }, delay);
        })
    }
    await add(2000);
    await add(3000);
    await add(4000);
    await add(5000);
  await new Promise((resolve, reject) =>{
      setTimeout(() => {
          const array = arr.map(function(item){
               if (item>5) {
                   console.log('các số lớn hơn 5 là:'+item);
               }
          })
          resolve();
      }, 3000);
  })
 await new Promise((resolve, reject) =>{
     setTimeout(() => {
        let max = Math.max.apply(Math, arr); 
        let min = Math.min.apply(Math, arr); 
         console.log('số lớn nhất trong mảng là:'+max);
         console.log('số nhỏ trong mảng là:'+min);
          resolve();
     }, 3000);
 })
await new Promise((resolve, reject) =>{
    setTimeout(() => {
        const sum = arr.reduce((total,currentVal)=>total+=currentVal);
        const avg = sum/arr.length;
        console.log('trung bình công của mảng là:'+avg);
          resolve();
    }, 3000);
})
})();