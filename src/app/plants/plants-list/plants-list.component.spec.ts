/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantsListComponent } from './plants-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Plants } from 'src/app/plants';

describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListComponent);
    component = fixture.componentInstance;
    component.plants = [
      new Plants(1,"plantaTest1","plantaTest1C","Interior", 3,"Frio","abono"),
      new Plants(2,"plantaTest2","plantaTest2C","Exterior", 2,"Frio","abono"),
      new Plants(3,"plantaTest3","plantaTest3C","Interior", 6,"cálido","abono"),
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tbody.tr> elements', () => {
    const tbody = debug.query(By.css('tbody'));
    expect(tbody.queryAll(By.css('tr'))).toHaveSize(3)
  });

  it('should have 1 <thead.tr> elements', () => {
    const thead = debug.query(By.css('thead'));
    expect(thead.queryAll(By.css('tr'))).toHaveSize(1)
  });

});
