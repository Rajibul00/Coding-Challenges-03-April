{
    // Attempt to access the variable before assignment
    console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
  
    let myVar = "I am inside the temporal dead zone";
  }
  
  // Outside the block scope
  console.log(myVar); // ReferenceError: myVar is not defined
  