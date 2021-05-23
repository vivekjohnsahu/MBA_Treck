import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarnPointsPage } from './earn-points.page';

describe('EarnPointsPage', () => {
  let component: EarnPointsPage;
  let fixture: ComponentFixture<EarnPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnPointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarnPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
