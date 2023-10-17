let expression=''

let appendValue=(value)=> {
    expression += value;
    document.getElementById('display').value = expression;
  }

  

const one=document.querySelector('.one')
const zero=document.querySelector('.zero')
const two=document.querySelector('.two')
const three=document.querySelector('.three')
const four=document.querySelector('.four')
const five=document.querySelector('.five')
const six=document.querySelector('.six')
const seven=document.querySelector('.seven')
const eight=document.querySelector('.eight')
const nine=document.querySelector('.nine')
const period=document.querySelector('.period')
const delet=document.querySelector('.delete')
const slash=document.querySelector('.slash')
const plus=document.querySelector('.plus')
const minus=document.querySelector('.minus')
const times=document.querySelector('.times')
const reset=document.querySelector('.reset')
const equals=document.querySelector('.equals')



one.addEventListener('click',()=>{
    appendValue('1')
})
two.addEventListener('click',()=>{
    appendValue('2')
})
three.addEventListener('click',()=>{
    appendValue('3')
})
four.addEventListener('click',()=>{
    appendValue('4')
})
zero.addEventListener('click',()=>{
    appendValue('0')
})
five.addEventListener('click',()=>{
    appendValue('5')
})
six.addEventListener('click',()=>{
    appendValue('6')
})
seven.addEventListener('click',()=>{
    appendValue('7')
})
eight.addEventListener('click',()=>{
    appendValue('8')
})
nine.addEventListener('click',()=>{
    appendValue('9')
})
plus.addEventListener('click',()=>appendValue('+'));
times.addEventListener('click',()=>appendValue('*'))
minus.addEventListener('click',()=>appendValue('-'))
period.addEventListener('click',()=>appendValue('.'))
slash.addEventListener('click',()=>appendValue('/'))


  function calculate() {
    try {
      const result = eval(expression);
      document.getElementById('display').value = result;
      expression = '';
    } catch (error) {
      document.getElementById('display').value = 'Syntax ERROR';
      expression = '';
    }
  }
equals.addEventListener('click',()=>calculate())

let clearScreen=()=> {
  const display = document.getElementById('display');
  display.value = '';
}
reset.addEventListener('click',()=>clearScreen());

let deleteLastInput=()=> {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
delet.addEventListener('click',()=>deleteLastInput())