import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { ErrorHandlerService } from './error-handler.service'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
