import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChanges, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy
{
  @Input() number = 10;

  constructor() {
    console.log('chamou o construtor');
   }
  
   ngOnChanges(): void { //usando quando tem alteração no Input
    console.log('chamou o on changes');
   }

  ngOnInit(): void {
    console.log('chamou o on init'); //chamado quando o component é inicializado
  }

  ngDoCheck(): void {
    console.log('chamou o do check');
  }

   ngAfterContentInit(): void {
    console.log('chamou o After content init');
   }

   ngAfterContentChecked(): void {
    console.log('chamou o After Content Checked');
   }

   ngAfterViewInit(): void {
    console.log('chamou o After View Init');
   }

   ngAfterViewChecked(): void {
    console.log('chamou o After View Checked');
   }

   ngOnDestroy(): void { //chamado quando o component é destruido
    console.log('chamou o On Destroy')
   }
}
