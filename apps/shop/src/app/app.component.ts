import { Component, OnInit } from '@angular/core';
import { range } from '@foocompany/utils';

@Component({
  selector: 'foocompany-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  ngOnInit(): void {
    console.log(range(40, 45))
  }
}
