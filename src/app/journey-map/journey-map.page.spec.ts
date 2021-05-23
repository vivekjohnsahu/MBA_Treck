import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourneyMapPage } from './journey-map.page';

describe('JourneyMapPage', () => {
  let component: JourneyMapPage;
  let fixture: ComponentFixture<JourneyMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
