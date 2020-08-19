import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  title = "BebeFeliz";

  sideNavQuery: MediaQueryList;

  private _sideNavQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.sideNavQuery = media.matchMedia('(max-width: 950px)');
    this._sideNavQueryListener = () => changeDetectorRef.detectChanges();
    this.sideNavQuery.addListener(this._sideNavQueryListener);
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sideNavQuery.removeListener(this._sideNavQueryListener);
  }

}
