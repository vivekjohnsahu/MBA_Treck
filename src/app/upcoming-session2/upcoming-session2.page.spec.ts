import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpcomingSession2Page } from './upcoming-session2.page';

describe('UpcomingSession2Page', () => {
  let component: UpcomingSession2Page;
  let fixture: ComponentFixture<UpcomingSession2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSession2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingSession2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
