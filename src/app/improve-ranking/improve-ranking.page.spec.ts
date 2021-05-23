import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImproveRankingPage } from './improve-ranking.page';

describe('ImproveRankingPage', () => {
  let component: ImproveRankingPage;
  let fixture: ComponentFixture<ImproveRankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImproveRankingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImproveRankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
