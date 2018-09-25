import { Component } from '@angular/core';


//Component decorator
@Component({
  selector: 'app-root',					//app-root tag in index.html This view of this component should be display here 
  templateUrl: './app.component.html',	//template that defines the view for this component
  styleUrls: ['./app.component.scss']	//all the css code for the root component
})
export class AppComponent {
  title = 'firstApp';
}
