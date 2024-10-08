import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConfigUtil } from 'src/app/core/utils/ConfigUtil';

@Component({
  selector: 'app-embed-main',
  templateUrl: './embed-main.component.html',
  styleUrls: ['./embed-main.component.scss']
})
export class EmbedMainComponent implements OnInit {
  private _url: string | SafeResourceUrl;

  @Input()
  set url(value: string | SafeResourceUrl) {
    if (typeof value === 'string') {
      this._url = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    } else {
      this._url = value;
    }
  }

  get url(): string | SafeResourceUrl {
    return this._url;
  }

  constructor(
    private configUtil: ConfigUtil,
    private sanitizer: DomSanitizer
  ) {
    document.addEventListener('contentChangeEmit', (event: any) => {
      this.url = this.configUtil.getUrl().url;
      this.resize();
    });
  }

  ngOnInit(): void {
    this.resize();
  }

  resize() {
    function resizeIFrameToFitContent(iFrame: any) {
      iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
      iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    }

    window.addEventListener('DOMContentLoaded', function (e) {
      let iFrame = document.getElementById('iFrame1');
      resizeIFrameToFitContent(iFrame);
      let iframes = document.querySelectorAll("iframe");
      for (let i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent(iframes[i]);
      }
    });
  }
}
