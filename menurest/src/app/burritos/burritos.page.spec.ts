import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurritosPage } from './burritos.page';

describe('BurritosPage', () => {
  let component: BurritosPage;
  let fixture: ComponentFixture<BurritosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurritosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
