import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QRCodeModule } from 'angularx-qrcode';
import { CardComponent } from './card/card.component';
import { ComponentsRouteRoutes } from './components-route.routing';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { QrComponent } from './qr/qr.component';


@NgModule({
  declarations: [
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    QrComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRouteRoutes,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    QRCodeModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class ComponentsModule {}
