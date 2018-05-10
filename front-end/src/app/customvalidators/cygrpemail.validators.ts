import {AbstractControl,ValidationErrors} from '@angular/forms';

export class CygrpEmailValidator
{     
	static onlycygrpallowed(control:AbstractControl) :ValidationErrors | null {
		{
			if(control.value)
			{
			if(!control.value.endsWith('@cygrp.com'))
			   
				return {
			    	onlycygrpallowed:true
			    }
			}
			
		      return null;

	    
	}
}
}