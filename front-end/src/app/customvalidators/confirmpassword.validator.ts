import {AbstractControl,ValidationErrors} from '@angular/forms';

export class ConfirmPasswordValidators
{
	static shouldmatchwithpassword(control:AbstractControl) :ValidationErrors | null {

		if(control.parent){
			
			if(!(control.value == control.parent.value['password'])){
				return {
			    	shouldmatchwithpassword:true
			    }
			}
		}

	    return null;
	}

}
