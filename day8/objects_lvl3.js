const personAccount = {
    firstName: "Ramiro", 
    lastName: "Seltzer",
    incomes: { 
        uxDev: 582374,
        backendDev: 203402
    },
    expenses: { 
        data: 500,
        food: 200,
        groceries : 100
    },
    totalIncome: function(){
        let totalIncome = 0;
        let values = Object.values(this.incomes)
        for(let i = 0 ; i < values.length; i++){
            totalIncome += values[i]
        }
        return totalIncome;
    },
    totalExpense: function(){
        let totalExpense = 0;
        let values = Object.values(this.expenses)
        for(let i = 0 ; i < values.length ; i++) {
            totalExpense += values[i];
        }
        return totalExpense;
    },
    accInfo: function(){
        let info = `
        First name: ${this.firstName}, 
        Last Name: ${this.lastName}, 
        Incomes: ${Object.values(this.incomes)}, 
        Expenses: ${Object.values(this.expenses)}
        `;
        return info;
    },
    addIncome: function(){
        
    },
    addExpense: function(){

    },
    accountBalance: function(){

    },
}


console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accInfo())
