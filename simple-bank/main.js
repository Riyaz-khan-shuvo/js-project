document.getElementById("login").addEventListener('click', function () {
    const loginArea = document.getElementById("login-area")
    const transactionArea = document.getElementById("transaction-area")
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block'
})

// Deposit area

const depositBtn = document.getElementById('addDeposit')

depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById('depositAmount').value;
    const currentDeposit = document.getElementById('currentDeposit')
    const currentBalance = document.getElementById('currentBalance');

    const totalDeposit = parseInt(depositAmount) + parseInt(currentDeposit.innerText);
    const currentTotalBalance = parseInt(currentBalance.innerText) + parseInt(depositAmount);

    currentDeposit.innerText = totalDeposit;
    currentBalance.innerText = currentTotalBalance;

})