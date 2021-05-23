import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupOtpPage } from './signup-otp.page';

describe('SignupOtpPage', () => {
  let component: SignupOtpPage;
  let fixture: ComponentFixture<SignupOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
