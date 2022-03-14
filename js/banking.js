// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    console.log("Clicked");
    const depositInput = document.getElementById('depositInput');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //console.log(newDepositAmount);

    // showing the value in h3 tag 
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Update Account balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
})

// Withdraw amount handler; 

document.getElementById('withdraw-button').addEventListener("click", function () {
    console.log("Withdraw Button Clicked");
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseInt(previousWithdrawText);


    const newWithdrawTotal = previousWithdraw + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //Clear withdrawInput
    withdrawInput.value = '';


    //  Update Account balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';


})