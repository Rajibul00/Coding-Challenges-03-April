{
    // Using let (not hoisted)
    console.log(letVarBefore); // ReferenceError: letVarBefore is not defined
    let letVarBefore = "I am a let variable (before)";
  
    // Using var (hoisted)
    console.log(varVarBefore); // Outputs: undefined
    var varVarBefore = "I am a var variable (before)";
  
    // Using const (not hoisted)
    console.log(constVarBefore); // ReferenceError: constVarBefore is not defined
    const constVarBefore = "I am a const variable (before)";
  
    // Logging variables after declaration
    console.log(letVarBefore); // Outputs: I am a let variable (before)
    console.log(varVarBefore); // Outputs: I am a var variable (before)
    console.log(constVarBefore); // Outputs: I am a const variable (before)
  }
  
  // Outside the block scope
  console.log(letVarBefore); // ReferenceError: letVarBefore is not defined
  console.log(varVarBefore); // Outputs: undefined
  console.log(constVarBefore); // ReferenceError: constVarBefore is not defined
  