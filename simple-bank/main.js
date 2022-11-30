document.getElementById("login").addEventListener('click', function () {
    const loginArea = document.getElementById("login-area")
    const transactionArea = document.getElementById("transaction-area")
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block'
})

// Deposit area

const depositBtn = document.getElementById('addDeposit')

depositBtn.addEventListener("click", function () {
    calculation('depositAmount', 'currentDeposit', 'd')

    // const depositAmount = document.getElementById('depositAmount').value;
    // const currentDeposit = document.getElementById('currentDeposit')
    // const currentBalance = document.getElementById('currentBalance');

    // const totalDeposit = parseInt(depositAmount) + parseInt(currentDeposit.innerText);
    // const currentTotalBalance = parseInt(currentBalance.innerText) + parseInt(depositAmount);

    // currentDeposit.innerText = totalDeposit;
    // currentBalance.innerText = currentTotalBalance;

})

// Withdraw area

const withdrawBtn = document.getElementById('addWithdraw')

withdrawBtn.addEventListener("click", function () {
    calculation('withdrawAmount', 'currentWithdraw', 'w')

    // const withdrawAmount = document.getElementById('withdrawAmount').value;
    // const currentWithdraw = document.getElementById('currentWithdraw');
    // const currentBalance = document.getElementById('currentBalance');

    // const totalWithdraw = parseInt(withdrawAmount) + parseInt(currentWithdraw.innerText);
    // const totalCurrentBalance = parseInt(currentBalance.innerText) - parseInt(withdrawAmount)

    // currentWithdraw.innerText = totalWithdraw;
    // currentBalance.innerText = totalCurrentBalance;

})

// with function

const calculation = (id1, id2, method) => {
    const inputValue = document.getElementById(`${id1}`).value;
    const amount = document.getElementById(`${id2}`);
    const currentBalance = document.getElementById('currentBalance');
    const totalBalance = parseInt(inputValue) + parseInt(amount.innerText);

    let totalCurrentBalance = 0;

    if (method == 'w') {
        totalCurrentBalance = parseInt(currentBalance.innerText) - parseInt(inputValue)
    }
    if (method == 'd') {
        totalCurrentBalance = parseInt(currentBalance.innerText) + parseInt(inputValue)
    }

    amount.innerText = totalBalance;
    currentBalance.innerText = totalCurrentBalance;
}