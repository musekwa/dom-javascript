//1. set initial count
let count = 0;


//2. select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//3. console.log(btns);

//4. 
/**
 *  btns.forEach(function(btn){
 *   console.log(btn);
 * })
 */

//5.
/**
  btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
   console.log(e.currentTarget);
  })
  })
*/
//6.
/** 
btns.forEach(function(btn){
 btn.addEventListener('click', function(e){
  console.log(e.currentTarget.classList);
 })
 })
 */

 //7.
 /**
  * 
 btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
   const styles = e.currentTarget.classList;
   if (styles.contains('decrease')){
    count--;
   }
   else if (styles.contains('increase')){
    count++;
   }
   else {
    count = 0;
   }
   value.textContent = count;
  })
  })

  */

  btns.forEach(function(btn){
   btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
     count--;
    }
    else if (styles.contains('increase')){
     count++;
    }
    else {
     count = 0;
    }
    if (count > 0){
     value.style.color = "green";
    }
    else if(count < 0) {
     value.style.color = "red";
    }
    else {
     value.style.color = "black";
    }
    value.textContent = count;
   })
   })
