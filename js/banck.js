
// function inputId(money) {
//     const total = document.getElementById(money + '-inut').value;
//     return total;
// }

// document.getElementById('calculate-item').addEventListener('click', function() {
//     const incomeTotal = idInput('income');
//     const foodValue = idInput('food');
//     const rentValue = idInput('rent');
//     const clothValue = idInput('clothes');
//     if (incomeTotal < 0 || foodValue < 0 || rentValue < 0  || clothValue < 0) {

//     } else {
//         const expensesTotal = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue);
        
//         if(expensesTotal > incomeTotal) {
//             window.alert("you have a money to expenses worng")
//         }
//     }

// })

function calculate(food,rent,clothes) {

    const myCost = document.getElementById('my-cost')
    const inComeConvert = parseInt(myCost.value)
    console.log(inComeConvert);

    const foodCost = document.getElementById('food-cost')
    console.log(foodCost);
    const foodConvert = parseInt(foodCost.value)
    console.log(foodConvert, 'food')


// income convert number

    const rentCost = document.getElementById('rent-cost')
    const rentConvert = parseInt(rentCost.value)
    const colthCost = document.getElementById('colth-cost')
    const colthConvert = parseInt(colthCost.value)


    const totalBalence = foodConvert + rentConvert + colthConvert
    console.log(totalBalence)
    document.getElementById("total-balence").innerText = totalBalence 

    const balence = inComeConvert-totalBalence
    console.log(balence, 'balence')

//     // erro case handle

    // if(totalBalence > inComeConvert) {
    //     const errorHandle = document.getElementById('error-handle')
    //     errorHandle.display = 'block'
    // }

    // else{
    //     totalBalence.innerText = balence
    //     const errorHandle = document.getElementById('error-handle')
    //     errorHandle.innerText = '';
    // }

    // foodCost.value = ''
    // rentCost.value = ''
    // colthCost.value = ''
    if (totalBalence < 0 || foodCost < 0 || rentCost < 0  || colthCost < 0) {

    } else {
        const expensesTotal = parseInt(foodCost) + parseInt(rentCost) + parseInt(colthCost);
        
        if(expensesTotal > totalBalence) {
            window.alert("you have a money to expenses worng")
        }
    }


}

 const amount = document.getElementById('calculate-item').addEventListener('click', function () {
    calculate('food-value', 'rent-value', 'colth-value');
   
})

document.getElementById('btn-save').addEventListener('click', function() {
    const saveBalence = myCost('save');
    console.log(saveBalence);

    const saveMoney = parseFloat(saveBalence);
    const fixedBalence = saveMoney.toExponential(2);

    const saving = (totalBalence * fixedBalence / 100) 


    if (saving > totalBalence) {
        window.alert('worng the balence chack')
    }
    else if (saving < 0) {
         window.alert('enter a positive number');
    }
    else {
        document.getElementById('saving-amount').innerText = saving;
    
        document.getElementById('remening-amount').innerText = balenceTotal - saving;
    }
    
})



// function saveBtn() {
//     const myIncome = document.getElementById('income-cost')
//     const inComeConvert = parseInt(myIncome.value)
//     console.log(inComeConvert);
    
//    const savingAmount = document.getElementById('save-catch')
//    const getAmount = parseInt(getAmount.value)


//    const totalAmount = (getAmount*inComeConvert)/100
//    console.log(totalAmount);

//    const entersaving = document.getElementById('saving-amount')
//    entersaving.innerText = totalAmount

//    const myAmount = document.getElementById('saving-info')
//    entersaving.innerText = totalAmount

//     const myBalence = document.getElementById('my-balence')
//    const convertBalence = parseInt(myBalence.innerText)

//    const reanamingBalence = convertBalence-totalAmount

//    const reamin = document.getElementById('rename-amount')
//    reamin.innerText = reanamingBalence
// }