import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

 beforeEach(async () => {
   await TestBed.configureTestingModule({
     declarations: [MenuComponent],
     imports: [RouterTestingModule, MatIconModule],
   }).compileComponents();

   fixture = TestBed.createComponent(MenuComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
