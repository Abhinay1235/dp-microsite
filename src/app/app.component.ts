import { Component, Inject, LOCALE_ID, OnInit, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/config/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import { LayoutService } from '../@vex/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { VexConfigName } from '../@vex/config/config-name.model';
import { ColorSchemeName } from '../@vex/config/colorSchemeName';
import { MatIconRegistry, SafeResourceUrlWithIconOptions } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ColorVariable, colorVariables } from '../@vex/components/config-panel/color-variables';
import { StoreSettingsService } from 'src/@vex/services/store-settings.service';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService,
              private readonly matIconRegistry: MatIconRegistry,
              private readonly domSanitizer: DomSanitizer,
              private storeSettingsService: StoreSettingsService,
            ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.matIconRegistry.addSvgIconResolver(
      (
        name: string,
        namespace: string
      ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
        switch (namespace) {
          case 'mat':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/material-design-icons/two-tone/${name}.svg`
            );

          case 'logo':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/logos/${name}.svg`
            );

          case 'flag':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/flags/${name}.svg`
            );
        }
      }
    );

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */
  }

  ngOnInit(): void {

    this.storeSettingsService.StoreServices = [
      { id: 101,label: "Oil Chnage",price: "49.99",icon: "",selected: true},
      { id: 102,label: "Wheel Alignmant",price: "49.99",icon: "",selected: true},
      { id: 103,label: "Factory Service",price: "356.99",icon: "",selected: true},
      { id: 104,label: "Tire Rotation",price: "110.49",icon: "",selected: false},
      { id: 105,label: "Brakes",price: "49.99",icon: "",selected: true},
      { id: 106,label: "Engine Light On",price: "80",icon: "",selected: true},
      { id: 107,label: "Recall",price: "49.99",icon: "",selected: true},
      { id: 108,label: "Entertainment",price: "149.99",icon: "",selected: true},
      { id: 109,label: "Inspection",price: "39.99",icon: "",selected: true},
      { id: 110,label: "Describe Issue",price: "0",icon: "",selected: true}
    ]
  }
}

