import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyListModule } from '@alyle/ui/list';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyIconModule } from '@alyle/ui/icon';
import { ResponsiveModule } from '@alyle/ui/responsive';
import { LyGridModule } from '@alyle/ui/grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyHammerGestureConfig, LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2, LyOverlayModule } from '@alyle/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinimaDeepDark } from '@alyle/ui/themes/minima';
import { LyDialogModule } from '@alyle/ui/dialog';
import { CustomMinimaDeepDark } from './theme';
import { DrawerComponent } from './drawer/drawer.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogMapResult, RandomMapComponent } from './random-map/random-map.component';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    RandomMapComponent,
    DialogMapResult
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    CommonModule,
    LyDrawerModule,
    LyDialogModule,
    LyToolbarModule,
    LyListModule,
    LyRadioModule,
    LyTypographyModule,
    LyIconModule,
    LyOverlayModule,
    LyGridModule,
    LyButtonModule,
    LyCheckboxModule,
    ResponsiveModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ 
    DrawerComponent,
    RandomMapComponent
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
      StyleRenderer,
      LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-deep-dark' },
    { provide: LY_THEME, useClass: MinimaDeepDark, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDeepDark, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export type AppThemeVariables = MinimaDeepDark & CustomMinimaDeepDark;