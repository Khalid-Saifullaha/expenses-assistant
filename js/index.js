document.getElementById('calculate').addEventListener('click', function(){
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    

    document.getElementById('balance').innerText = balance.toFixed(2);
    
   document.getElementById('results').classList.remove('hidden')
})

const calculateSavingsButton = document.getElementById('calculate-savings').addEventListener('click', function(){
    const savingPercentace = parseFloat(document.getElementById('savings').value);
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount =(savingPercentace * balance) / 100;
   
    document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount;
    
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2)
})
