(function init() {
  function getItems() {
    setTimeout(() => {
      const ids = [120, 4117, 1890, 2114];
      console.log(ids);

      setTimeout(
        id => {
          const details = {
            title: 'Bicycle',
            rate: '1000',
            shopOwner: 'Jonas'
          };
          console.table(details);

          setTimeout(
            names => {
              const otherProducts = {
                title: 'Guitar',
                rate: '1500',
                shopOwner: 'Jonas'
              };
              console.table(otherProducts);
            },
            1500,
            details.shopOwner
          );
        },
        1500,
        ids[2]
      );
    }, 1500);
  }

  getItems();
})();
//So as we see here,if the code gets more and more complex,it becomes a problem for us to nest multiple setTimeouts inside each other,which can also be called as callback hell as we are calling too many items at onc.One thing that ES6 did to prevent this was the introduction of promises.
//This is the example of callback hell and why it is not used nowadays