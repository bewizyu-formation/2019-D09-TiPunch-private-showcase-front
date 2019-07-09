import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { passwordMatchValidator } from './password.validator';



describe('passwordMatchValidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [passwordMatchValidator],
    });
  });
});
