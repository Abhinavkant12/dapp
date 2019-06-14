import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ElectionComponent } from './component/election/election.component';
import { CounterComponent } from './component/counter/counter.component';
import { ElectionService } from 'src/app/service/election.service';
import { MetaCoinComponent } from './component/meta-coin/meta-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectionComponent,
    CounterComponent,
    MetaCoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ElectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
