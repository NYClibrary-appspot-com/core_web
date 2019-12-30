import { Component, Input, AfterViewInit } from "@angular/core";

export interface Node {
  id: string;
  top?: number;
  left?: number
}

@Component({
  selector: "node",
  template: `
  <div class="node" id="{{node.id}}" [style.top.px]="node.top || 0" [style.left.px]="node.left || 20">{{node.id}}</div>`,
  styles: [`.node {position: absolute;width: 150px;height: 50px;
  padding: 4px;box-shadow: 0 10px 40px 0 #B0C1D9;text-align: center;}`]
})
export class NodeComponent implements AfterViewInit {

  @Input() node: Node;
  @Input() jsPlumbInstance;

  ngAfterViewInit() {
    const exampleDropOptions = {
      tolerance: "touch",
      hoverClass: "dropHover",
      activeClass: "dragActive"
    };


    let Endpoint1 = {
      endpoint: ["Dot", { radius: 7 }],
      paintStyle: { fill: "#99cb3a" },
      isSource: true,
      scope: "jsPlumb_DefaultScope",
      connectorStyle: { stroke: "#99cb3a", strokeWidth: 3 },
      connector: ["Bezier", { curviness: 63 }],
      maxConnections: 30,
      isTarget: false,
      connectorOverlays: [["Arrow", { location: 1 }]],
      dropOptions: exampleDropOptions
    };


    let Endpoint2 = {
      endpoint: ["Dot", { radius: 4 }],
      paintStyle: { fill: "#ffcb3a" },
      isSource: false,
      scope: "jsPlumb_DefaultScope",
      maxConnections: 1,
      isTarget: true,
      dropOptions: exampleDropOptions
    };


    const { id } = this.node;
    this.jsPlumbInstance.addEndpoint(id, { anchor: "Bottom", uuid: id + "_bottom" }, Endpoint1);
    this.jsPlumbInstance.addEndpoint(id, { anchor: "Top", uuid: id + "_top" }, Endpoint2);
    this.jsPlumbInstance.draggable(id);
  }

}
