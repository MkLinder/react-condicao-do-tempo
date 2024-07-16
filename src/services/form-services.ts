import { useEffect } from "react";

export function FormServices(refForm: any, refInput:any) {

    useEffect(() => {
        console.log(refForm);
        console.log(refInput);
        
    })
    /* form?.addEventListener('submit', (event) => {
        event.preventDefault()
       
    
        if (!input) return

        const inputValue = input.value

        if (inputValue.length < 3){
            alert('O nome da cidade deve ter pelo menos 3 caracteres.')
            return
        }

        const apiResponse = ApiConnection('florianopolis')
        
    });
    */
};