import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    this.loadScript('https://apps.elfsight.com/p/platform.js');
    this.loadScript('https://widget.honeybook.com/assets_users_production/companies/5525abff5a4146552b000151/widgets/honeybook_widget.html');

  }
 

 public loadScript(url: string) {
   const body = <HTMLDivElement> document.body;
   const script = document.createElement('script');
   script.innerHTML = '';
   script.src = url;
   script.async = false;
   script.defer = true;
   body.appendChild(script);
 }
}
