import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RewardPage } from './reward.page';

describe('RewardPage', () => {
  let component: RewardPage;
  let fixture: ComponentFixture<RewardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
