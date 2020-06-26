import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalItemPage } from './modal-item.page';

describe('ModalItemPage', () => {
  let component: ModalItemPage;
  let fixture: ComponentFixture<ModalItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
