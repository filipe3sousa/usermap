import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';
import { RouterTestingModule } from '@angular/router/testing';

import { LeafletMapComponent } from './leaflet-map.component';

describe('LeafletMapComponent', () => {
  let component: LeafletMapComponent;
  let fixture: ComponentFixture<LeafletMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletMapComponent ],
      imports: [ LeafletModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
