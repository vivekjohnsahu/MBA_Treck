import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImproveRankProductPage } from './improve-rank-product.page';

describe('ImproveRankProductPage', () => {
  let component: ImproveRankProductPage;
  let fixture: ComponentFixture<ImproveRankProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImproveRankProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImproveRankProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
