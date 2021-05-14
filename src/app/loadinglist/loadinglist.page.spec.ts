import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadinglistPage } from './loadinglist.page';

describe('LoadinglistPage', () => {
  let component: LoadinglistPage;
  let fixture: ComponentFixture<LoadinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
