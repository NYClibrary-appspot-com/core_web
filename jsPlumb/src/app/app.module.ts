import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NodeComponent } from "./node.component";

import { NodeService } from "./node.service";
import { NodesContainerComponent } from "./nodes-container.component";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NodeComponent, NodesContainerComponent],
  providers: [NodeService],
  entryComponents: [NodeComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
