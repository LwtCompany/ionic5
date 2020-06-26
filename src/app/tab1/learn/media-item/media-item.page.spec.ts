import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediaItemPage } from './media-item.page';

describe('MediaItemPage', () => {
  let component: MediaItemPage;
  let fixture: ComponentFixture<MediaItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
