import { FormControl } from '@angular/forms';

  export function dateValidator(control: FormControl){
    const today = new Date();
    const enteredDate = new Date(control.value)
      if(enteredDate > today){
        return {invalidDate : 
         'Future Date is not allowed'
        }
     }
     else{
       return null
     }

    }
 
    