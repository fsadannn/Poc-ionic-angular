import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TODOPage } from './todo.page';

describe('TODOPage', () => {
  let component: TODOPage;
  let fixture: ComponentFixture<TODOPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TODOPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TODOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
