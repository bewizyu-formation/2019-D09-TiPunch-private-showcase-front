import { TestBed } from "@angular/core/testing";
import { FormsModule, FormControl } from "@angular/forms";
import { passwordMatchValidator } from "./password.validator";



describe('passwordMatchValidator', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [passwordMatchValidator]
      });
    });

    /*it('should validate', () => {
<<<<<<< HEAD
      expect(passwordMatchValidator(new FormControl('A3'))).toEqual({ 'isGoodPassword': false });
      expect(passwordMatchValidator(new FormControl('A3zzzzzz'))).toEqual(null);
=======
        expect(passwordValidator(new FormControl('A3'))).toEqual({ 'isGoodPassword': false });
        expect(passwordValidator(new FormControl('A3zzzzzz'))).toEqual(null);
>>>>>>> 4a69ce9675611a61f21a460a03bb7e89ded69153
      });*/
    })