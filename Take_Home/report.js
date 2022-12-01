let fs = require('fs');
let filename = process.argv[2];
let data = new Map();

if (filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        parseData(data.split('\r\n'));
    });
}

const parseData = (dataFile) => {
    for (let line of dataFile) {
        let lineArry = line.split(',');

        if (lineArry[0] === "Type") {
            setTypeData(lineArry);
        } else if (lineArry[0] === "Product") {
            let normalPrice = Number(lineArry[1]);
            let clearancePrice = Number(lineArry[2]);
            let quantity = Number(lineArry[3]);
            let isPriceHidden = lineArry[4] === "false" ? false : true;

            if (quantity < 3) {
                continue;
            }
            // Check if price is hidden
            let priceInCart = data.get("price_in_cart");
            if (data.has("price_in_cart")) {    
                data.set("price_in_cart", priceInCart)
                parseIsPriceHidden(isPriceHidden, priceInCart, clearancePrice);
            }

            // Check if normal price / store in data 
            let normalProduct;
            if (data.has("normal")) {
                normalProduct = data.get("normal");
                parseNormalData(normalProduct, normalPrice, clearancePrice);
            } 
    
            // Check if clearance price / store in data 
            let clearanceProduct;
            if (data.has("clearance")) {
                clearanceProduct = data.get("clearance");
                parseClearanceData(clearanceProduct, clearancePrice, normalPrice);
            } 
          
        } 
    }
    // Sort in descending order 
    const results = sortData(data);
    // Display report to console 
    return displayResults(results);
    
}

const initializeProductData = (product, price) => {
    product["count"]++;
    product["high_price"] = price;
    product["low_price"] = price;
}

const setHighAndLowPrice = (product, price) => {
    if (price < product["low_price"]) {
        product["low_price"] = price;
    } else if (price > product["high_price"]) {
        product["high_price"] = price;
    }
    product["count"]++;
}

const parseClearanceData = (clearanceProduct, clearancePrice, normalPrice) => {
    if (normalPrice > clearancePrice && clearanceProduct["count"] === 0) {
        initializeProductData(clearanceProduct, clearancePrice);
    } else if (normalPrice > clearancePrice && clearanceProduct["count"] > 0) {
       setHighAndLowPrice(clearanceProduct, clearancePrice);
    }
}

const parseNormalData = (normalProduct, normalPrice, clearancePrice) => {
    if (normalPrice === clearancePrice && normalProduct["count"] === 0) {
        initializeProductData(normalProduct, normalPrice);
    } else if (normalPrice === clearancePrice && normalProduct["count"] > 0) {
        setHighAndLowPrice(normalProduct, normalPrice);
    }
}

const parseIsPriceHidden = (isPriceHidden, priceInCart, normalPrice) => {
    if (isPriceHidden && priceInCart["count"] === 0) {
        initializeProductData(priceInCart, normalPrice);
    } else if (isPriceHidden && priceInCart["count"] > 0) {
        setHighAndLowPrice(priceInCart, normalPrice);
    }
}

const setTypeData = (lineArry) => {
    let type = lineArry[1];
    let display_name = lineArry[2];
    data.set(type, { "display_name": display_name, "count": 0, "high_price": null, "low_price": null })
}


const displayResults = (results) => {
    let displayText = "";
    for (let item of results) {
        let text = `${item[1]["display_name"]}: ${item[1]["count"]} `;
        if (item[1]["count"] > 1) {
            text += ("products @ $" + item[1]["low_price"] + "-" + "$" + item[1]["high_price"]);
        } else if (item[1]["count"] === 1 && item[1]["low_price"] !== null) {
            text += ("product @ $" + item[1]["low_price"]);
        } else {
            text += ("products");
        }
        displayText += text + "\n";
    }
    console.log(displayText.slice(0, displayText.length -1))
    return displayText.slice(0, displayText.length -1);
}

const sortData = (data) => {
    const compare = (a, b) => {
        return b[1]["count"] - a[1]["count"];
    }
    const results = [...data].sort(compare);
    return results
}

module.exports = parseData;



/*
 I - Data.text
 O - Ouput a report to console about Designer Brands' products and pricing sorted in descending order 
 E -  
   If normal price is same as clearance price then it's normal price, $
   If normal price is higher than clearance then product is on clearance, $

   If a price type have more than 1 product then we must display a range (low to high)
   If a product with less than 3 in stock dont add to price type $ 

   If any product that has a true value then it is a PRICE IN CART $
   If file is empty $
   If total price type is less than 3 
   If price type and no product 
   If total product and no price type 
   If product comes before price type 
 C -  
*/