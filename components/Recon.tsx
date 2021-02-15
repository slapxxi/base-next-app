// @ts-nocheck
import Reconciler, { HostConfig } from 'react-reconciler';

let hostConfig: HostConfig<
  unknown,
  unknown,
  CanvasRenderingContext2D,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown,
  unknown
> = {
  now: Date.now,
  isPrimaryRenderer: false,
  supportsMutation: true,
  // create
  createInstance(type, props, rootContainerInstance, hostContext, internalInstance) {
    console.log('createInstance', { type, props });
    return { type, props };
  },
  createTextInstance(text) {
    console.log('createTextInstance', { text });
    return { type: 'text', text };
  },
  // append
  appendChildToContainer(container, child) {
    console.log('appendChildToContainer', { container, child });

    if (child.type === 'rect') {
      let { width, height, fill } = child.props;
      container.fillStyle = fill;
      container.fillRect(0, 0, width, height);
    }
  },
  appendChild(parent, child) {
    console.log('appendChild', { parent, child });
  },
  appendInitialChild(parent, child) {
    console.log('appendInitialChild', { parent, child });
  },
  // remove
  removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer');
  },
  removeChild(parent, child) {
    console.log('removeChild');
  },
  // insert
  insertInContainerBefore(container, child, before) {
    console.log('insertInContainerBefore');
  },
  insertBefore(parent, child, before) {
    console.log('insertBefore');
  },
  // update
  prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext) {
    console.log('prepareUpdate', { instance, type, oldProps, newProps });
    return {};
  },
  commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork) {
    console.log('commitUpdate', { instance, type, oldProps, newProps });
    if (type === 'rect') {
    }
  },
  commitTextUpdate() {
    console.log('commitTextUpdate');
  },
  // etc
  finalizeInitialChildren(parent, type, props) {
    console.log('finalizeInitialChildren', { parent, type, props });
    return false;
  },
  getRootHostContext() {},
  getChildHostContext() {},
  prepareForCommit() {
    console.log('prepareForCommit');
  },
  getPublicInstance(instance) {
    console.log('getPublicInstance', { instance });
    return instance;
  },
  resetAfterCommit() {
    console.log('resetAfterCommit');
  },
  shouldSetTextContent() {
    return false;
  },
  // @ts-ignore
  clearContainer() {
    console.log('clearContainer');
    return false;
  },
};

const reconcilerInstance = Reconciler(hostConfig);

export let Renderer = {
  render(element: any, root: any) {
    let container = reconcilerInstance.createContainer(root, false, false);
    reconcilerInstance.updateContainer(element, container, null, null);
  },
};
