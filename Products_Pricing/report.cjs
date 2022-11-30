
// Make sure we got a filename on the command line.





  // Read the file and print its contents.
  let fs = require('fs');
  let filename = process.argv[2];
  let data = {};

  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      throw err;
    } 
    //console.log(data);
   // console.log(data.split('\r\n'))
    parseData(data.split('\r\n'));
  });

  const parseData = (dataFile) => {
     for (let line of dataFile) {
       let lineArry = line.split(',');
       if (lineArry.includes("Type")) {
        let type = lineArry[1];
        data[type] ? data[type][count]++ : data[type] = {"display_name": "", "count": 1, "high_price": null, "low_price": null }
       }
    } 
    console.log(data);
  }

  
/* 
  {
    normal: {"Display Name": "Normal Price", "count": 2 , "high_price": null , "low_price": null },
    clearance: {"Display Name": "Clearnce Price", "count": 2 , "high_price": null , "low_price": null },
    price_in_cart: {"Display Name": "Price in cart", "count": 2 , "high_price": null , "low_price": null },
  } 
*/

/* 
  Clearance Price: 2 products @ $39.98-$49.98
  Normal Price: 1 product @ $49.99
  Price In Cart: 0 products 
*/


/*
 I - Data.text
 O - Ouput a report to console about Designer Brands' products and pricing sorted in descending order 
 E -  
	 If normal price is same as clearance price then it's normal price,
	 If normal price is higher than clearance then product is on clearance,
	 If a price type have more than 1 product then we must display a range (low to high)
	 If a product with less than 3 in stock dont add to price type 
	 If any product that has a true value then it is a PRICE IN CART 
	 If file is empty
	 If total price type is less than 3 
	 If price type and no product 
	 If total product and no price type 
	 If product comes before price type 
 C -  
*/