
     let amount = 500;
    (async function()
    {

        function useMoney(purpose, amountLoss, delay) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    console.log(purpose);
                    amount = amount - amountLoss;
                       res(amount);
                }, delay)
            })
        }

        await useMoney("thịnh mua rau", 100, 2000);
        await useMoney("thịch mua cá", 100, 2000);
        await useMoney("thịnh mua gà ", 100, 2000);
        await useMoney("thịnh mua thịt lơn ", 100, 2000);
      console.log(`số tiền còn lại là ${amount}`);
    })();