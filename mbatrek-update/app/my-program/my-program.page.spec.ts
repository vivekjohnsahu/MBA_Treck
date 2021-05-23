import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyProgramPage } from './my-program.page';

describe('MyProgramPage', () => {
  let component: MyProgramPage;
  let fixture: ComponentFixture<MyProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
