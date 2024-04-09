import { ValidatorController } from './ErrorController'

export class EmailValidatorController implements ValidatorController {

    private RE : RegExp=new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    public validate(email: string): string {

        if (email == null) {
            return "Email is Empty";
        }

        if (!this.RE.test(email)){
            return "invalid email";
        }
            return "";
    }

}
