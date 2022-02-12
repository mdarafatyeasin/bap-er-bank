document.getElementById('deposit-button').addEventListener('click', function () {
    const input = document.getElementById('deposit-input')
    const inputData = input.value
    const inputFild = document.getElementById('deposit-total')
    const carrantAmount = inputFild.innerText
    const newDeposit = parseFloat(carrantAmount) + parseFloat(inputData)
    inputFild.innerText = newDeposit
    input.value = ''

    // after dopoit totlal balance 
    const balance = document.getElementById('balance-total')
    const balanceText = balance.innerText
    const carrantBalance = balanceText
    const carantBallanceToFlot = parseFloat(carrantBalance)
    const newBalance = carantBallanceToFlot + newDeposit
    balance.innerText = newBalance
})

// widthdrow prosses
document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputWitdrow = document.getElementById('withdraw-input')
    const inputValue = inputWitdrow.value
    // console.log(inputValue)

    const witdrowFild = document.getElementById('withdraw-total')
    const preveousWitdrow = witdrowFild.innerText
    const totlalWitdrow = parseFloat(preveousWitdrow) + parseFloat(inputValue)
    witdrowFild.innerText = totlalWitdrow
    inputWitdrow.value = ''

    //after wotdrow totla balance 
    const balance = document.getElementById('balance-total')
    const balanceText = balance.innerText
    const carrantBalance = balanceText
    const carantBallanceToFlot = parseFloat(carrantBalance)
    const newBalance = carantBallanceToFlot - totlalWitdrow
    balance.innerText = newBalance
})