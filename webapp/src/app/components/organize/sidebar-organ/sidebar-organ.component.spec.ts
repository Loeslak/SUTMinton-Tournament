import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOrganComponent } from './sidebar-organ.component';

describe('SidebarOrganComponent', () => {
  let component: SidebarOrganComponent;
  let fixture: ComponentFixture<SidebarOrganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOrganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarOrganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
