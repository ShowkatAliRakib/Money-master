
function getIputValue(){
    
    return incomeAmount;
}








document.getElementById("calculator").addEventListener("click", function(){

   
 
    const foodInput = document.getElementById("foodInput");
    const foodCost = foodInput.value;
    const foodAmount = parseFloat(foodCost);
 
 
    const rentInput = document.getElementById("rentInput");
    const rentCost = rentInput.value;
    const rentAmount =  parseFloat(rentCost)
  

    const colthes = document.getElementById("clothesInput");
    const colthesCost = colthes.value;
    const colthesAmount = parseFloat(colthesCost)
 
    const incomeInput = document.getElementById("incomeInput");
    const incomeField = incomeInput.value;
    const incomeAmount = parseFloat(incomeField);


    //update Total Expanses

    const totalInput = document.getElementById("totalInput");

    const totalText = totalInput.value;
    
    const totalExpanses = parseFloat(totalText);

    

    const totalAmount = totalInput.value = foodAmount + rentAmount + colthesAmount;


    //update Total Balance 
    const balanceInput = document.getElementById("balanceInput");

   

    const balanceText = balanceInput.value;

    const balanceAmount = parseFloat(balanceText);


    const balanceUpdate = balanceInput.value = incomeAmount - totalAmount;


 
    
    


});



document.getElementById("saveBtn").addEventListener("click", function(){

    const incomeInput = document.getElementById("incomeInput");
    const incomeField = incomeInput.value;
    const incomeAmount = parseFloat(incomeField);
       
    const saveInput = document.getElementById("saveInput");
    const saveText = saveInput.value;
    const saveParsent = parseFloat(saveText);
    console.log(saveText);

    const saveAmountInput = document.getElementById("savingAmountInput");
    const saveAmountText = saveAmountInput.value;
    const saveAmount = parseFloat(saveAmountText);
    

     
    const  saveAmountValue = saveAmountInput.value = incomeAmount / saveInput.value;


      
    const balanceInput = document.getElementById("balanceInput");
    const balanceText = balanceInput.value;

    const balanceAmount = parseFloat(balanceText);


    const remainingInput = document.getElementById("remainingInput");
    const remainingText = remainingInput.value;
    const remainingAmount = parseFloat(remainingText);


    remainingInput.value =balanceInput.value - saveAmountInput.value;
});



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Porgramming-Hero-web-course/money-master-ShowkatAliRakib.git
// git push -u origin main



