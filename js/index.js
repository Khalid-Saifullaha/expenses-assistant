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

   const historyItem = document.createElement('div');
   historyItem.className = 'bg-white p-3 rounded-md border-indigo-500';

   historyItem.innerHTML=`
   
   <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
   <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
   <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
   <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
   `;

   const historyContainer = document.getElementById('history-list');
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// add event listener for saving button

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

// History
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600', 
        'text-white');

        historyTab.classList.remove('text-gray-600')
        assistantTab.classList.remove(
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600', 
        'text-white'           
        );
        assistantTab.classList.add('text-gray-600')

        document.getElementById('expense-form').classList.add('hidden')
        document.getElementById('history-section').classList.remove('hidden')
})


