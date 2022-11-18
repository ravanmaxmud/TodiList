let inp = document.getElementById('inp')
let count = 1;
inp.addEventListener('change', function () {
    let value = document.getElementById('inp').value;
    let div = document.createElement('div');
    div.setAttribute('draggable', 'true');
    div.setAttribute('id', count);
    div.setAttribute('class', 'text-light bg-dark d-flex justify-content-between align-items-center rounded-2 p-2 mt-3 overflow-hidden');
    let h4 = document.createElement('h4');
    h4.innerHTML = value
    div.appendChild(h4)
    document.querySelector('.content').appendChild(div)
    count++;
    document.getElementById('inp').value =""
    div.ondragstart =function (e){
        e.dataTransfer.setData('param', this.id)
    }

})
 
let carts = document.querySelectorAll('.cart');

let dropArea = document.querySelectorAll('.content');

for(let cart of carts){
    cart.ondragover = function (e) {
        e.preventDefault();
    }
    cart.ondrop = function (e) {
        let id = e.dataTransfer.getData('param');
        let newit = document.getElementById(id);
    
        cart.appendChild(newit);
    }
}



// Drag

// let boxes = document.querySelectorAll('.box');
// for(let box of boxes){
//      box.ondragstart = function(e){
//           e.dataTransfer.setData('param',this.id)
//      }
// }

// let dropArea = document.querySelector('#Dragdown');

// dropArea.ondragover = function(e){
//    e.preventDefault();
// }

// dropArea.ondrop =function(e){
//     let id = e.dataTransfer.getData('param');
//     let newit =document.getElementById(id);

//     dropArea.appendChild(newit); 
// }





// function Add() {
//     var value = document.querySelector('#inp').value


//     if(value.length == 0){
//         alert("You forgot to add a task");
//     }
//     else{
//         var div = document.createElement('div')
//         div.setAttribute('class', 'text-light bg-dark d-flex justify-content-between align-items-center rounded-2 p-2 mt-3');
//         var h2 = document.createElement('h2');
//         var icon = document.createElement('i');
//         icon.setAttribute('class', 'fa-solid fa-trash-can remove');


//         h2.innerHTML = value
//         div.appendChild(h2)
//         div.appendChild(icon)
//         document.getElementById('first').appendChild(div)
//         var remover =document.querySelectorAll('.remove')
//         console.log(remover)
//         for (var i = 0; i <remover.length; i++) {
//                 remover[i].onclick = function () {
//                 this.parentElement.remove()

//             }
//         }
//     }
// }









// function Time() {
//     var zaman = document.getElementById('zaman')
//     var x = new Date();
//     var saat = x.getHours() <   10 ? `0${x.getHours()}` : x.getHours()
//     var deqiqe =  x.getMinutes() <   10 ? `0${x.getMinutes()}` : x.getMinutes()
//     var saniye =  x.getSeconds() <   10 ? `0${x.getSeconds()}` : x.getSeconds()
//     var result = `${saat}:${deqiqe}:${saniye}`;
//     zaman.innerHTML = result;
// }
// setInterval(() => {
//     Time()   
// }, 1000);


// var menu = document.getElementById('icon');
// var sidebar =document.getElementById('side')
// menu.addEventListener('click',function(){
//     sidebar.classList.add('active');

//     // if(sidebar.style.width === '0%'){
//     //     sidebar.style.width ='20%'
//     //     sidebar.style.opacity ='1'
//     //     sidebar.style.visibility='visible'
//     // }
//     // else{
//     //     sidebar.style.width ='0%'
//     // sidebar.style.opacity ='0'
//     // sidebar.style.visibility='hidden'
//     // }
// })
// document.getElementById('x').onclick =() =>{
//     sidebar.classList.remove('active');
// }