import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnItemPage } from './learn-item.page';

describe('LearnItemPage', () => {
  let component: LearnItemPage;
  let fixture: ComponentFixture<LearnItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
