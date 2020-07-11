import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurgerPage } from './burger.page';

describe('BurgerPage', () => {
  let component: BurgerPage;
  let fixture: ComponentFixture<BurgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
