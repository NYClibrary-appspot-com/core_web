import { jsPlumb } from "jsplumb";
import { NodeComponent, Node } from "./node.component";
import {ComponentFactoryResolver,Injectable} from "@angular/core";


@Injectable()
export class NodeService {

  private rootViewContainer: any;
  jsPlumbInstance = jsPlumb.getInstance();

  constructor(private factoryResolver: ComponentFactoryResolver) { }

        public setRootViewContainerRef(viewContainerRef) {
          this.rootViewContainer = viewContainerRef;
        }

        public createNode(node: Node) {
          const factory = this.factoryResolver.resolveComponentFactory(NodeComponent);
          const component = factory.create(this.rootViewContainer.parentInjector);
          (<any>component.instance).node = node;
          (<any>component.instance).jsPlumbInstance = this.jsPlumbInstance;
          this.rootViewContainer.insert(component.hostView);
          console.log("in NodeService.." , component.instance );
        }

        addConnection(connection) {
          this.jsPlumbInstance.connect({ uuids: connection.uuids });
        }

        public clear() {
          this.rootViewContainer.clear();
        }
}

