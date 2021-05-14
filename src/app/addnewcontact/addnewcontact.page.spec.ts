import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnewcontactPage } from './addnewcontact.page';

describe('AddnewcontactPage', () => {
  let component: AddnewcontactPage;
  let fixture: ComponentFixture<AddnewcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcontactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
