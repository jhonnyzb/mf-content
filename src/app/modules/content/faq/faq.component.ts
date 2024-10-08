import { Component, OnInit } from "@angular/core";
import { ConfigUtil } from "src/app/core/utils/ConfigUtil";
import { UtilsTitle } from "src/app/core/utils/UtilsTitle";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  savedData!: {
    url: string;
    name: string;
  };

  constructor(
    private configUtil: ConfigUtil,
    private utilsTitle: UtilsTitle
  ) {
    document.addEventListener('urlChangeEmit', (event: any) => {
      this.loadUrl();
      this.configUtil.contentChangeEmit();
    });
    this.utilsTitle.suscribeRoutesTitle();
  }
  ngOnInit(): void {
    this.loadUrl();
  }

  loadUrl() {
    this.savedData = this.configUtil.getUrl();
  }
}

