
var slideIndex = 1;
showSlides(slideIndex);
        
function plusSlides(n) {
    showSlides(slideIndex += n);
}
        
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}


const btn = document.querySelectorAll(".shop button");
// console.log(btn);
btn.forEach(function(button,index){
button.addEventListener( 'click',function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector(".namePC").innerText
    var productPrice = product.querySelector("span").innerHTML
    // console.log(productImg,productName,productPrice);
    addcart(productImg,productName,productPrice)
})
})
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="color: #000;display: flex;align-items: center;"><img width="80px" src="'+productImg+'" alt=""><span class="title" style="color: #000;">'+productName+'</span></td><td><p><span class="price" style="color: #000;">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="color: #000;width: 30px;overflow: none;" type="number" value="1" min="1"></td><td style="color: #000;cursor: pointer;"><span class="delete" style="color: #000;">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector('tbody')
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    Deletecart()
}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem.legth)
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
        // console.log(totalD)
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartTotalB = document.querySelector(".icons span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE');
    cartTotalB.innerHTML = totalC.toLocaleString('de-DE');
}

function Deletecart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for( var $i=0;$i<cartItem.length;$i++ ){
    var productT = document.querySelectorAll(".delete")
    productT[$i].addEventListener('click', function (event){
        var cartDelete =  event.target
        var cartitemR = cartDelete.parentElement.parentElement
        cartitemR.remove();
        carttotal()
    })

    }
}

function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i=0;i<cartItem.length;i++) {
        var inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener( "change", function () {
            carttotal()
        })
    }
}

const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector (".fa-basket-shopping")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right="-100%"
})
