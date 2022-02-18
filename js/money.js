



         //calculator button

        
document.getElementById("calculator").addEventListener("click", function(){

            //Food Input 

    const foodInput = document.getElementById("foodInput");
    const foodCost = foodInput.value;
    const foodAmount = parseFloat(foodCost);
 
        // Rent Input 
    const rentInput = document.getElementById("rentInput");
    const rentCost = rentInput.value;
    const rentAmount =  parseFloat(rentCost)
  
            //colthes Input
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

    
                //total calculation 

    const totalAmount = totalInput.value = foodAmount + rentAmount + colthesAmount;


    //update Total Balance 
    const balanceInput = document.getElementById("balanceInput");

   

    const balanceText = balanceInput.value;

    const balanceAmount = parseFloat(balanceText);

            //balance and income calculation

    const balanceUpdate = balanceInput.value = incomeAmount - totalAmount;


 
    
    


});

        //save button

document.getElementById("saveBtn").addEventListener("click", function(){
            //income Input 

    const incomeInput = document.getElementById("incomeInput");
    const incomeField = incomeInput.value;
    const incomeAmount = parseFloat(incomeField);

       //save Input 

    const saveInput = document.getElementById("saveInput");
    const saveText = saveInput.value;
    const saveParsent = parseFloat(saveText);

        //saving Input
    
    const saveAmountInput =document.getElementById("savingAmountInput");
    const saveAmountText = saveAmountInput.value;
    const saveAmount = parseFloat(saveAmountText);
    
            //income and save calculation
     
    const  saveAmountValue = saveAmountInput.value = incomeAmount / saveInput.value;

                //balanceInput
      
    const balanceInput = document.getElementById("balanceInput");
    const balanceText = balanceInput.value;

    const balanceAmount = parseFloat(balanceText);

            //remainingInput

    const remainingInput = document.getElementById("remainingInput");
    const remainingText = remainingInput.value;
    const remainingAmount = parseFloat(remainingText);

        //remaining balance calculation                                                                                                 
    remainingInput.value =balanceInput.value - saveAmountInput.value;
});






