// added event listener to the deposit button 

document.getElementById("deposit-btn").addEventListener('click',function(){
//   deposit amount taken (input field)
    const depositAmount=document.getElementById('deposit-amount')
  const amount=depositAmount.value;
//  get the deposit total amount 
const totalDepositAmount=document.getElementById('total-deposit')
const totalDeposit=totalDepositAmount.innerText; 
totalDepositAmount.innerText=amount;
})