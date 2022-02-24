const json = '[ { "id": 1, "name": "Refurbished Samsung Guru 1200", "price": 13.15, "cat": "Cellphone", "image": "images/cellphone7", "brand": "Samsung", "type":1 }, { "id": 2, "name": "Nokia 1600 Black", "price": 21.71, "cat": "Cellphone", "image": "images/cellphone6.jpg", "brand": "Nokia", "type":1 }, { "id": 3, "name": "I Kall K22", "price": 7.41, "cat": "Cellphone", "image": "images/cellphone3.jpg", "brand": "I kal", "type":1 }, { "id": 4, "name": "I Kall K20 Multimedia Mobile Phone", "price": 11.97, "cat": "Cellphone", "image": "images/cellphone1.jpg", "brand": "I kal", "type":1 }, { "id": 5, "name": "Apple iPhone 12 Pro Max 256 GB, Pacific Blue", "price": 228.63, "cat": "Smartphone", "image": "images/smartphone1.jpg", "brand": "Apple", "type":1 }, { "id": 6, "name": "Oppo A53s 5G 128 GB, 8 GB RAM, Ink Black", "price": 301.67, "cat": "Smartphone", "image": "images/smartphone2.jpg", "brand": "Oppo", "type":1 }, { "id": 7, "name": "OnePlus Nord CE 5G 256 GB, 12 GB RAM, Charcoal Ink", "price": 469.50, "cat": "Smartphone", "image": "images/smartphone3.jpg", "Brand": "OnePlus", "type":1 }, { "id": 7, "name": "Apple iPhone 12 Mini 128 GB, Blue", "price": 193.17, "cat": "Smartphone", "image": "images/smartphone11.jpg", "brand": "Apple", "type":1 }, { "id": 8, "name": "Redmi 9 Power 64 GB, 4 GB RAM, Blazing Blue", "price": 184.44, "cat": "Smartphone", "image": "images/smartphone5.jpg", "brand": "Redmi", "type":1 }, { "id": 9, "name": "Realme C25 128 GB, 4 GB RAM, Watery Blue", "price": 184.44, "cat": "Smartphone", "image": "images/smartphone7.jpg", "brand": "Realme", "type":1 }, { "id": 10, "name": "Nokia 3.4 64 GB, 4 GB, Charcoal", "price": 184.44, "cat": "Smartphone", "image": "images/smartphone8.jpg", "brand": "Nokia", "type":1 }, { "id": 11, "name": "Mi 11X 128 GB, 6 GB RAM, Celestial Silver", "price": 503.04, "cat": "Smartphone", "image": "images/smartphone9.jpg", "brand": "Mi", "type":1 }, { "id": 12, "name": "Apple iPad Air 4th Gen Wi-Fi Tablet, Space Grey MYFM2HN/A", "price": 920.60, "cat": "Tablet", "image": "images/tab2.jpg", "brand": "Apple", "type":1 }, { "id": 13, "name": "Lenovo M10 HD Wi-Fi Tablet 2 GB RAM, 32 GB, Black ZA4G0007IN", "price": 184.44, "cat": "Tablet", "image": "images/tab1.jpg", "brand": "Lenevo", "type":1 }, { "id": 14, "name": "Samsung TabS7 6 GB, 128 GB WiFi (Mystic Silver), SM-T870NZSAINU", "price": 939.03, "cat": "Tablet", "image": "images/tab3.jpg", "brand": "Samsung", "type":1 }, { "id": 15, "name": "iBall Bizniz Mini Tablet 2 GB, 32 GB, Coal Black iT-KSA0066", "price": 176.05, "cat": "Tablet", "image": "images/tab4.jpg", "brand": "Samsung", "type":2 } ]';

const p_json = '[{"id": 1, "name": "Anker A8122HA1 1.8 m USB to Lightning PowerLine", "price": 28.70 , "cat": "USB Cable", "image": "images/cable8", "brand": "Anker", "type": 2}, {"id": 2, "name": "Reconnect RAMRB1001 Micro USB Charging Cable", "price": 6.74 , "cat": "USB Cable", "image": "images/cable7", "brand": "Reconnect", "type":2}, {"id": 3, "name": "Reconnect RAACG1001 1 m 3-in-1 USB-A to Micro USB", "price":16.87 , "cat": "USB Cable", "image": "images/cable6", "brand": "Reconnect", "type":2}, {"id": 4, "name": "boAt Rugged 700 V3 1.5 m Tangle Free USB-A to Micro-USB Braided Cable", "price":5.05 , "cat": "USB Cable", "image": "images/cable5", "brand": "boAt", "type":2}, {"id": 5, "name": "Anker A2516H11 5 Watts Wireless Charger", "price":42.21, "cat": "Charger", "image": "images/charger7", "brand": "Anker", "type":2}, {"id": 6, "name": "Skywater SW-260 Travel Charger", "price":21.93 , "cat": "Charger", "image": "images/charger3", "brand": "Skywater", "type":2}, {"id": 7, "name": "Anker A2129Y11 12 Watts Dual USB Port Charger", "price":21.93 , "cat": "Charger", "image": "images/charger5", "brand": "Anker", "type":2}, {"id": 8, "name": "Anker PowerPort+ A2013Y21 Travel Ready Foldable Plug Wall Charger", "price":28.70 , "cat": "Charger", "image": "charger6", "brand": "Anker", "type":2}, {"id": 9, "name": "Inbase Carbon Mobile Case for iPhone XS, Gold 555", "price":5.81 , "cat": "Case", "image": "images/case3", "brand": "In Base", "type":2}, {"id": 10, "name": "Nokia Mobile Case for Nokia One, Pink & Yellow XP-150", "price":5.02 , "cat": "Case", "image": "case7", "brand": "Nokia", "type":2}, {"id": 11, "name": "Inbase Tablet Flip Cover for Lenovo Tab M10, Black IB-833", "price":16.88 , "cat": "Case", "image": "case8", "brand": "In Base", "type":2}, {"id": 12, "name": "Targus VersaVu Classic Tablet Flip Case for iPad", "price":50.66 , "cat": "Case", "image": "images/case12", "brand": "Targus", "type":2}, {"id": 13, "name": "Kushi Screen Guard for Samsung Galaxy A5", "price":0.15 , "cat": "Guard", "image": "guard7", "brand": "Kushi", "type":2}, {"id": 14, "name": "Stuffcool MGGP3DSGS9-BLK 3D Curve Fit Tempered Glass for Samsung Galaxy S9", "price":10.33 , "cat": "Guard", "image": "images/guard1", "brand": "Stuffcool", "type":2},{"id": 15, "name": "Belkin F8W911ZZ ScreenForce Tempered Glass for iPhone XS Max, iPhone 11 Pro Max", "price":13.50 , "cat": "Guard", "image": "guard2", "brand": "Belkin", "type":2}]';

var total = 0;

// let main = document.querySelector("main");
let main = document.getElementById('card-wrapper');

let cart = document.querySelector("cart");
let carttotal = document.querySelector("total");

let products = JSON.parse(json);

if (main) {
  products.forEach((product) => {
    if (product.type == 1) {
      main.innerHTML +=
      `<div class="card">
	    	<div class="card-heading"> 
							${product.name}
			</div>
			<div class="card-image">
				<img src="${product.image}" alt="Avatar">
			</div>
			<div class="card-description">
				<div class="card-price"><b>Price:</b> ${product.price} CAD</div>
					<div class="card-tags">
						
							<button class="btn btn1">${product.brand}</button>
						
							<button class="btn btn1">${product.cat}</button>	
					</div>
				<div class="card-more-info"><a href="product_detail.html?id=${product.id}">Detail Page</a></div>
				</div>
			</div>`
    }    
  });
}

function search(brand, category) {
  let main = document.getElementById('card-wrapper');
  main.innerHTML = "";
  console.log("in search function", category + brand);
  if (category && brand) {
    products = products.filter(x => x.brand === brand && x.cat === category);
  } else if (category) {
    products = products.filter(x => x.cat === category);
  } else if (brand) {
    products = products.filter(x => x.brand === brand);
  } else {

  }
  console.log("after filtering------------",products)
  products.forEach((product) => {
    main.innerHTML +=
      `<div class="card">
	    	<div class="card-heading"> 
							${product.name}
			</div>
			<div class="card-image">
				<img src="${product.image}" alt="Avatar">
			</div>
			<div class="card-description">
				<div class="card-price"><b>Price:</b> ${product.price} CAD</div>
					<div class="card-tags">
          <b>Brand:</b>
          <button class="btn btn1">${product.brand}</button>
          <b>Category:</b>
							<button class="btn btn1">${product.cat}</button>	
					</div>
				<div class="card-more-info"><a href="product_detail.html?id=${product.id}">Detail Page</a></div>
				</div>
			</div>`
  });

}
// function search(input) {
//   console.log("in serach==========", input);
//   let userInput = input.value;
//   let products = document.querySelectorAll(".product");

//   products.forEach((product) => {
//     let name = product.querySelector("h1").innerText;
//     let cat = product.querySelector("span").innerText;
//     let price = product.querySelector("h4").innerText;

//     if ((name + " " + cat + "" + price).includes(userInput)) {
//       product.style.display = "block";
//     } else {
//       product.style.display = "none";
//     }
//   });
// }

function cartData() {
  console.log("in second function =========", p_json);
  console.log(sessionStorage.items);
  
  if (sessionStorage.items !== undefined) {
    JSON.parse(sessionStorage.items).forEach((product) => {
      total += product.price
      cart.innerHTML += `
            <div class = "product-detail">              
                <div class = "product-image">
                  <img src="${product.image}"></img>
                </div>
                <div class="product-info">                  
                  <h1>${product.name}</h1>
                  <span>${product.cat}</span>
                  <h4>$${product.price}</h4>                  
                  <button class = "removeCart" onclick="removeFromCart(${product.id})">Remove From Cart</button>
                </div>                          
            </div>`;            
    });
    carttotal.innerHTML =
      `<h3> your total amount is </h3>` + sessionStorage.total;
  }
}
function showform() {
  $("#form_id").show();
}

// function login() {
//     if (document.getElementById("u_id").value == 'admin' && document.getElementById("p_id").value == 'admin') {
//         sessionStorage.setItem("username", "admin");
//         console.log("session has set as", sessionStorage.getItem("username"));
//         $('#logout_id').show();
//         $('#form_id').hide();
//         $('#login').hide();
//     } else {
//         alert("Something went wrong");
//     }
// }

function login() {
  let sessionData = JSON.parse(localStorage.getItem("users"));
  let enteredName = document.getElementById("u_id").value;
  let password = document.getElementById("p_id").value;
  let flag = false;
  for (let i = 0; i < sessionData.length; i++) {
    if (
      sessionData[i].username == enteredName &&
      sessionData[i].password == password
    ) {
      flag = true;
      sessionStorage.setItem("username", enteredName);
      console.log("session has set as", sessionStorage.getItem("username"));
      window.location.replace("home.html");
      $("#logout_id").show();
      $("#form_id").hide();
      $("#login").hide();
      break;
    }
  }
  if (flag) {
    console.log("session has set as", sessionStorage.getItem("username"));
  } else {
    alert("Something went wrong");
  }
}
function addtocart(data) {
  if(sessionStorage.getItem("username")){
    let cartItems = [];
    if(sessionStorage.items){
      cartItems = JSON.parse(sessionStorage.items);
    }
    products.map(function (obj) {
      if (obj.id == data) {
        cartItems.push(obj);
        total += obj.price;
        sessionStorage.items = JSON.stringify(cartItems);
        sessionStorage.total = total.toString();
      }
    });
    alert("Suceessfully Added to Cart");
  }else{
    alert("please login First");
  }
  
}
function showcart() {
  console.log("hi am in=========");
  if (sessionStorage.getItem("username")) {
    $("#main_id").hide();
    cartData();
    carttotal.innerHTML = `<h3> your total amount will be ${total}</h3>` ;
  } else {
    // alert("Please Login first");
  }
}
function backtoproducts() {
  location.reload();
}

function logout() {
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("items");
  sessionStorage.removeItem("total");
  $("#logout_id").hide();
  $("#login").show();
  alert("successfully loged out");
  window.location.replace("home.html");
}

function removeFromCart(id) {
  console.log("remoce frm cart");
  let i = 0;
  let cartData = JSON.parse(sessionStorage.items);
  cartData.map(function (obj) {
    if (obj.id == id) {
      console.log("in if=========", obj, i, "value of index==========" + i);
      let temp = JSON.parse(sessionStorage.items);
      let tempTotal = +sessionStorage.total;
      console.log(temp);
      temp.splice(i, 1);
      sessionStorage.items = JSON.stringify(temp);
      tempTotal -= obj.price;
      sessionStorage.total = tempTotal.toString();
    }
    i++;
  });
  console.log("cart after remoi==========", p_json);
  cart.innerHTML = "";
  location.reload();
}

function searchfilter(input) {
  $("#total").hide();
  $("#cart_id").hide();
  $(".product").show();
  console.log("in serach==========", input);
  let userInput = input;
  let products = document.querySelectorAll(".product");

  products.forEach((product) => {
    let name = product.querySelector("h1").innerText;
    let cat = product.querySelector("span").innerText;
    let price = product.querySelector("h4").innerText;

    if ((name + " " + cat + "" + price).includes(userInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

$(window).on("load", function () {
  console.log("in onload funtion");
  if (sessionStorage.getItem("username")) {    
    document.getElementById("usersession").innerHTML = `Welcome ${sessionStorage.getItem("username")}`
    $("#usersession").show();
    $("#logoutButton").show();
    $("#cartIconId").show();
  } else {    
    $("#logoutButton").hide();
    $("#cartIconId").hide();
  }
});

function register() {
  let username = document.getElementById("RegUId").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("refPsId").value;
  let userData = localStorage.getItem("users");
  console.log(userData);
  if (!userData) {
    userData = JSON.stringify([
      {
        username: username,
        email: email,
        password: password,
      },
    ]);
    localStorage.setItem("users", userData);
  } else {
    let userObj = {
      username: username,
      email: email,
      password: password,
    };
    let sessionData = JSON.parse(localStorage.getItem("users"));
    sessionData.push(userObj);
    localStorage.setItem("users", JSON.stringify(sessionData));
  }
}

function productDetail() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);  
  let image = document.getElementsByClassName("product-image");
  let info = document.getElementsByClassName("product-info");
  let button = document.getElementById("addCart");
  let allProducts = JSON.parse(json);
  let product_id = urlParams.get("id");
  let obj = allProducts.find((o) => o.id === parseInt(product_id));
  document.querySelector(
    ".product-image"
  ).innerHTML = `<img src = ${obj.image}>`;
  document.querySelector(
    ".product-info"
  ).innerHTML = `<b>Name : </b> ${obj.name} <br> <b>Price :</b> ${obj.price} <br> <b> Category" </b> ${obj.cat} <br> <b>Brand : </b> ${obj.brand}`;
  button.innerHTML = `<input type = "button" class="cart-button" value="Add to Cart" onclick="addtocart(${obj.id})">`;
  console.log(obj);
}
function readySearchbar() {
  let categoryElement = document.getElementById("categorySearch");
  let brandElement = document.getElementById("brandSearch");
  var resArr = [];
  var arryofproducts = JSON.parse(json);

  // setting value of brand dropdown
  arryofproducts.filter(function (item) {
    console.log(item);
    var i = resArr.findIndex(x => (x.brand == item.brand));
    if (i <= -1) {
      resArr.push(item.brand);
    }
    return null;
  });
  console.log("outer");
  var resArr = resArr.filter(onlyUnique);
  let brandHtml = '<select name="brandSearcgh" id="brandSearch1">  <option value="">Select Brand</option>';
  for (let i = 0; i < resArr.length; i++) {
    brandHtml += `<option value="${resArr[i]}">${resArr[i]}</option>`;
  }
  brandHtml += "</select>";
  brandElement.innerHTML = brandHtml;

  // setting value of category dropdown
  resArr = [];
  arryofproducts.filter(function (item) {
    var i = resArr.findIndex(x => (x.cat == item.cat));
    if (i <= -1) {
      resArr.push(item.cat);
    }
    return null;
  });
  var resArr = resArr.filter(onlyUnique);
  let categoyHtml = '<select name="categorySearcgh" id="catSearch">  <option value="">Select Category</option>';
  for (let i = 0; i < resArr.length; i++) {
    categoyHtml += `<option value="${resArr[i]}">${resArr[i]}</option>`;
  }
  brandHtml += "</select>";
  categoryElement.innerHTML = categoyHtml;

}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function searchcatBrand() {  
  let brand = document.getElementById("brandSearch1").value;
  let category = document.getElementById("catSearch").value;
  search(brand, category);
}

function getaccessories() {  
  readySearchbar();
  let main = document.getElementById('card-wrapper');
  main.innerHTML = "";
  products.forEach((product) => {
    console.log(product.type);
    if (product.type == 2) {
      main.innerHTML +=
      `<div class="card">
	    	<div class="card-heading"> 
							${product.name}
			</div>
			<div class="card-image">
				<img src="${product.image}" alt="Avatar">
			</div>
			<div class="card-description">
				<div class="card-price"><b>Price:</b> ${product.price} CAD</div>
					<div class="card-tags">
						<b>Brand:</b>
							<button class="btn btn1">${product.brand}</button>		
              <b>Category:</b>
							<button class="btn btn1">${product.cat}</button>		              
					</div>          
				<div class="card-more-info"><a href="product_detail.html?id=${product.id}">Detail Page</a></div>
				</div>
			</div>`
    }   
  });
}