import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlitasPage } from './alitas.page';

describe('AlitasPage', () => {
  let component: AlitasPage;
  let fixture: ComponentFixture<AlitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
