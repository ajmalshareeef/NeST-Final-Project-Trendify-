import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitsComponent } from './outfits.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../ui/navbar/navbar.component';

describe('OutfitsComponent', () => {
  let component: OutfitsComponent;
  let fixture: ComponentFixture<OutfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutfitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
