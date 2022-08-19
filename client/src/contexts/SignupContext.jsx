import React, { createContext, useState } from 'react'

export const SignupProvider = createContext()

function SignupContext({children}) {
    const [currentStep,setCurrentStep] = useState(0);
  return (
    <SignupProvider.Provider value={{currentStep,setCurrentStep}}>
        {children}
    </SignupProvider.Provider>
  )
}

export default SignupContext
