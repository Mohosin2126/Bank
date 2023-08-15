// added event listener to the deposit button 

document.getElementById("deposit-btn").addEventListener('click',function(){
//   deposit amount taken (input field)
    const depositAmount=document.getElementById('deposit-amount')
  const newDepositAmountString=depositAmount.value;
  // convert the string into the number 
  const newDepositAmount=parseFloat(newDepositAmountString)
//  get the deposit total amount 
const totalDepositAmount=document.getElementById('total-deposit')
const previousDepositTotalString=totalDepositAmount.innerText;
// converted string to a number 
const previousDepositTotal=parseFloat(previousDepositTotalString)
const currentDepositTotal=previousDepositTotal + newDepositAmount ;

totalDepositAmount.innerText=currentDepositTotal;
// clear the deposit field
 depositAmount.value='';

 
//  get the balance property 
const balanceTotalElement=document.getElementById('balance-total')
const previousBalanceString=balanceTotalElement.innerText;
const previousBalance=parseFloat(previousBalanceString)
// calculate current balance total 
const currentBalanceTotal=previousBalance+newDepositAmount;
balanceTotalElement.innerText= currentBalanceTotal 
})



// withdraw button part 
document.getElementById('withdraw-btn').addEventListener('click',function(){
  const withdrawField= document.getElementById('withdraw-field')
  const newWithdrawAmountString =  withdrawField.value;
  const newWithdrawAmount=parseFloat(newWithdrawAmountString)
  // clear the input field 
withdrawField.value=''
  
  if (isNaN(newWithdrawAmount)){
    alert('Provide a number please ')
    return;
  }


// get previous withdraw total 
const WithdrawAmount = document.getElementById('withdraw-total')

const previousWithdrawTotalString=WithdrawAmount.innerText 

const previousWithdrawTotal=parseFloat(previousWithdrawTotalString)



// get the previous balance total 
const blncTotalElement=document.getElementById('balance-total')
const previousblncstring=blncTotalElement.innerText;
const previousBlncTotal=parseFloat(previousblncstring)
if(newWithdrawAmount>previousBlncTotal){
  alert("Dont't have enough money ")
  return;
}
//  calculate totalwithdraw amount 
const currentWithdrawTotal= previousWithdrawTotal + 
newWithdrawAmount


WithdrawAmount.innerText= currentWithdrawTotal;

// calculate new balance total 
const newBlncTotal=previousBlncTotal - newWithdrawAmount;
blncTotalElement.innerText=newBlncTotal

})