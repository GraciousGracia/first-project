let btn1 = document.querySelector('#basic');
let btn2 = document.querySelector('#pharm');
let btn3 = document.querySelector('#mid');
let btn4 = document.querySelector('#nurs');
let btn5 = document.querySelector('#physio');
let btn6 = document.querySelector('#bio');
let btn7 = document.querySelector('#lab');


const details1 = document.querySelector('#details1');
const details2 = document.querySelector('#details2');
const details3 = document.querySelector('#details3');
const details4 = document.querySelector('#details4');
const details5 = document.querySelector('#details5');
const details6 = document.querySelector('#details6');
const details7 = document.querySelector('#details7');



btn1.addEventListener('click',function(){
    details1.style.display = 'block';
    details2.style.display = 'none'
    details3.style.display = 'none'
    details4.style.display = 'none'
    details5.style.display = 'none'
    details6.style.display = 'none'
    details7.style.display = 'none'
});
        btn2.addEventListener('click',function(){
            details2.style.display =' block'
             details1.style.display = 'none';
             details3.style.display = 'none';
             details4.style.display = 'none';
             details5.style.display = 'none';
             details6.style.display = 'none';
             details7.style.display = 'none';
        });
            btn3.addEventListener('click',function(){
                details3.style.display = 'block';
                details1.style.display = 'none';
                details2.style.display = 'none';
                details4.style.display = 'none';
                details5.style.display = 'none';
                details6.style.display = 'none';
                details7.style.display = 'none';
            });
                 btn4.addEventListener('click',function(){
                    details4.style.display= 'block';
                    details1.style.display = 'none';
                    details2.style.display = 'none';
                    details3.style.display = 'none';
                    details5.style.display = 'none';
                    details6.style.display = 'none';
                    details7.style.display = 'none';
                 });
                   btn5.addEventListener('click',function(){
                     details5.style.display = 'block';
                     details1.style.display = 'none';
                     details2.style.display = 'none';
                     details3.style.display = 'none';
                     details4.style.display = 'none';
                     details6.style.display = 'none';
                     details7.style.display = 'none';
                   });
                     btn6.addEventListener('click',function(){
                     details6.style.display = 'block';
                     details1.style.display = 'none';
                     details2.style.display = 'none';
                     details3.style.display = 'none';
                     details4.style.display = 'none';
                     details5.style.display = 'none';
                     details7.style.display = 'none';
                       });
                       btn7.addEventListener('click',function(){
                        details7.style.display = 'block';
                        details1.style.display = 'none';
                        details2.style.display = 'none';
                        details3.style.display = 'none';
                        details4.style.display = 'none';
                        details5.style.display = 'none';
                        details6.style.display = 'none';
                       });