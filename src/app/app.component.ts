import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TopnewsapiService } from './service/topnewsapi.service';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HttpClientModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TopnewsapiService],
})
export class AppComponent {
  title = 'NewsApplication';
}
