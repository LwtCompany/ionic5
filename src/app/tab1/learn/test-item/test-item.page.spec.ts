import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestItemPage } from './test-item.page';

describe('TestItemPage', () => {
  let component: TestItemPage;
  let fixture: ComponentFixture<TestItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
