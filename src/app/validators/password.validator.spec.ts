import { TestBed } from "@angular/core/testing";
import { FormsModule, FormControl } from "@angular/forms";
import { passwordMatchValidator } from "./password.validator";



describe('passwordValidator', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [passwordMatchValidator]
      });
    });

    /*it('should validate', () => {
        expect(passwordValidator(new FormControl('A3'))).toEqual({ 'isGoodPassword': false });
        expect(passwordValidator(new FormControl('A3zzzzzz'))).toEqual(null);
      });*/
    })