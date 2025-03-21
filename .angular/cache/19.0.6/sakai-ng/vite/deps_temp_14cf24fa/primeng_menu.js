import {
  zindexutils
} from "./chunk-6222G4ZR.js";
import {
  Badge,
  BadgeModule
} from "./chunk-TWBETGEY.js";
import {
  Ripple
} from "./chunk-6QFOYRFQ.js";
import {
  ConnectedOverlayScrollHandler
} from "./chunk-5G7WYC4N.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-GQITGLQ3.js";
import {
  BaseComponent
} from "./chunk-LNOR2KLV.js";
import "./chunk-AVHUMZLK.js";
import {
  BaseStyle,
  OverlayService,
  PrimeTemplate,
  SharedModule
} from "./chunk-7LS7DYBM.js";
import {
  absolutePosition,
  appendChild,
  fadeIn,
  find,
  findSingle,
  focus,
  getOuterHeight,
  getOuterWidth,
  getViewport,
  getWindowScrollLeft,
  getWindowScrollTop,
  hasClass,
  isTouchDevice,
  relativePosition,
  removeChild,
  uuid
} from "./chunk-GG4QQIVH.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-J2347JD2.js";
import {
  DomSanitizer
} from "./chunk-4MZE5ERV.js";
import "./chunk-EWYPZBPJ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-UMAXZX7C.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Pipe,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-SAS3ZIMR.js";
import "./chunk-5OPE3T2R.js";
import "./chunk-4N4GOYJH.js";
import "./chunk-FHTVLBLO.js";
import "./chunk-5OGPSL7A.js";
import "./chunk-X6H3JEIU.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var theme = ({
  dt
}) => `
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${dt("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${dt("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${dt("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${dt("tooltip.background")};
    color: ${dt("tooltip.color")};
    padding: ${dt("tooltip.padding")};
    box-shadow: ${dt("tooltip.shadow")};
    border-radius: ${dt("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${dt("tooltip.gutter")});
    border-width: ${dt("tooltip.gutter")} ${dt("tooltip.gutter")} ${dt("tooltip.gutter")} 0;
    border-right-color: ${dt("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${dt("tooltip.gutter")});
    border-width: ${dt("tooltip.gutter")} 0 ${dt("tooltip.gutter")} ${dt("tooltip.gutter")};
    border-left-color: ${dt("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${dt("tooltip.gutter")});
    border-width: ${dt("tooltip.gutter")} ${dt("tooltip.gutter")} 0 ${dt("tooltip.gutter")};
    border-top-color: ${dt("tooltip.background")};
    border-bottom-color: ${dt("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${dt("tooltip.gutter")});
    border-width: 0 ${dt("tooltip.gutter")} ${dt("tooltip.gutter")} ${dt("tooltip.gutter")};
    border-top-color: ${dt("tooltip.background")};
    border-bottom-color: ${dt("tooltip.background")};
}
`;
var classes = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var TooltipStyle = class _TooltipStyle extends BaseStyle {
  name = "tooltip";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTooltipStyle_BaseFactory;
    return function TooltipStyle_Factory(__ngFactoryType__) {
      return (ɵTooltipStyle_BaseFactory || (ɵTooltipStyle_BaseFactory = ɵɵgetInheritedFactory(_TooltipStyle)))(__ngFactoryType__ || _TooltipStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TooltipStyle,
    factory: _TooltipStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipStyle, [{
    type: Injectable
  }], null, null);
})();
var TooltipClasses;
(function(TooltipClasses2) {
  TooltipClasses2["root"] = "p-tooltip";
  TooltipClasses2["arrow"] = "p-tooltip-arrow";
  TooltipClasses2["text"] = "p-tooltip-text";
})(TooltipClasses || (TooltipClasses = {}));
var Tooltip = class _Tooltip extends BaseComponent {
  zone;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: uuid("pn_id_") + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  documentEscapeListener;
  scrollHandler;
  resizeListener;
  _componentStyle = inject(TooltipStyle);
  interactionInProgress = false;
  constructor(zone, viewContainer) {
    super();
    this.zone = zone;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        const tooltipEvent = this.getOption("tooltipEvent");
        if (tooltipEvent === "hover" || tooltipEvent === "both") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        }
        if (tooltipEvent === "focus" || tooltipEvent === "both") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.el.nativeElement.querySelector(".p-component");
          if (!target) {
            target = this.getTarget(this.el.nativeElement);
          }
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = hasClass(e.relatedTarget, "p-tooltip") || hasClass(e.relatedTarget, "p-tooltip-text") || hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  activate() {
    if (!this.interactionInProgress) {
      this.active = true;
      this.clearHideTimeout();
      if (this.getOption("showDelay")) this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
      else this.show();
      if (this.getOption("life")) {
        let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
        this.hideTimeout = setTimeout(() => {
          this.hide();
        }, duration);
      }
      if (this.getOption("hideOnEscape")) {
        this.documentEscapeListener = this.renderer.listen("document", "keydown.escape", () => {
          this.deactivate();
          this.documentEscapeListener();
        });
      }
      this.interactionInProgress = true;
    }
  }
  deactivate() {
    this.interactionInProgress = false;
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body") document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target") appendChild(this.container, this.el.nativeElement);
    else appendChild(this.getOption("appendTo"), this.container);
    this.container.style.display = "none";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    const nativeElement = this.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (pDialogWrapper) {
      setTimeout(() => {
        this.container && (this.container.style.display = "inline-block");
        this.container && this.align();
      }, 100);
    } else {
      this.container.style.display = "inline-block";
      this.align();
    }
    fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto") zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    const positionPriority = {
      top: [this.alignTop, this.alignBottom, this.alignRight, this.alignLeft],
      bottom: [this.alignBottom, this.alignTop, this.alignRight, this.alignLeft],
      left: [this.alignLeft, this.alignRight, this.alignTop, this.alignBottom],
      right: [this.alignRight, this.alignLeft, this.alignTop, this.alignBottom]
    };
    for (let [index, alignmentFn] of positionPriority[position].entries()) {
      if (index === 0) alignmentFn.call(this);
      else if (this.isOutOfBounds()) alignmentFn.call(this);
      else break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + getWindowScrollLeft();
      let targetTop = offset.top + getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  get activeElement() {
    return this.el.nativeElement.nodeName.includes("P-") ? findSingle(this.el.nativeElement, ".p-component") : this.el.nativeElement;
  }
  alignRight() {
    this.preAlign("right");
    const el = this.activeElement;
    const offsetLeft = getOuterWidth(el);
    const offsetTop = (getOuterHeight(el) - getOuterHeight(this.container)) / 2;
    this.alignTooltip(offsetLeft, offsetTop);
  }
  alignLeft() {
    this.preAlign("left");
    let offsetLeft = getOuterWidth(this.container);
    let offsetTop = (getOuterHeight(this.el.nativeElement) - getOuterHeight(this.container)) / 2;
    this.alignTooltip(-offsetLeft, offsetTop);
  }
  alignTop() {
    this.preAlign("top");
    let offsetLeft = (getOuterWidth(this.el.nativeElement) - getOuterWidth(this.container)) / 2;
    let offsetTop = getOuterHeight(this.container);
    this.alignTooltip(offsetLeft, -offsetTop);
  }
  alignBottom() {
    this.preAlign("bottom");
    let offsetLeft = (getOuterWidth(this.el.nativeElement) - getOuterWidth(this.container)) / 2;
    let offsetTop = getOuterHeight(this.el.nativeElement);
    this.alignTooltip(offsetLeft, offsetTop);
  }
  alignTooltip(offsetLeft, offsetTop) {
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + offsetLeft;
    let top = hostOffset.top + offsetTop;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return hasClass(el, "p-inputwrapper") ? findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = getOuterWidth(this.container);
    let height = getOuterHeight(this.container);
    let viewport = getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    const tooltipEvent = this.getOption("tooltipEvent");
    if (tooltipEvent === "hover" || tooltipEvent === "both") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    }
    if (tooltipEvent === "focus" || tooltipEvent === "both") {
      let target = this.el.nativeElement.querySelector(".p-component");
      if (!target) {
        target = this.getTarget(this.el.nativeElement);
      }
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body") document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target") this.el.nativeElement.removeChild(this.container);
      else removeChild(this.getOption("appendTo"), this.container);
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    super.ngOnDestroy();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  static ɵfac = function Tooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tooltip)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [2, "escape", "escape", booleanAttribute],
      showDelay: [2, "showDelay", "showDelay", numberAttribute],
      hideDelay: [2, "hideDelay", "hideDelay", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      positionTop: [2, "positionTop", "positionTop", numberAttribute],
      positionLeft: [2, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [2, "autoHide", "autoHide", booleanAttribute],
      fitContent: [2, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [0, "pTooltip", "content"],
      disabled: [0, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵProvidersFeature([TooltipStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      standalone: true,
      providers: [TooltipStyle]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    imports: [Tooltip],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [Tooltip],
      exports: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c0 = ["pMenuItemContent", ""];
var _c1 = (a0) => ({
  "p-disabled": a0
});
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = () => ({
  exact: false
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 6);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const itemContent_r3 = ɵɵreference(4);
    ɵɵproperty("target", ctx_r1.item.target)("ngClass", ɵɵpureFunction1(9, _c1, ctx_r1.item.disabled));
    ɵɵattribute("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, ɵɵsanitizeUrl)("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const itemContent_r3 = ɵɵreference(4);
    ɵɵproperty("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || ɵɵpureFunction0(17, _c3))("target", ctx_r1.item.target)("ngClass", ɵɵpureFunction1(18, _c1, ctx_r1.item.disabled))("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state);
    ɵɵattribute("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action")("title", ctx_r1.item.title);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", ɵɵpureFunction1(20, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_1_Template, 2, 13, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 22, "a", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.item.iconClass);
    ɵɵproperty("ngClass", ctx_r1.item.icon)("ngStyle", ctx_r1.item.iconStyle);
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r1.item.label), ɵɵsanitizeHtml);
  }
}
function MenuItemContent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("styleClass", ctx_r1.item.badgeStyleClass)("value", ctx_r1.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenuItemContent_ng_template_3_span_0_Template, 1, 4, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 1, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, MenuItemContent_ng_template_3_p_badge_4_Template, 1, 2, "p-badge", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.item.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.item.badge);
  }
}
var _c4 = ["start"];
var _c5 = ["end"];
var _c6 = ["header"];
var _c7 = ["item"];
var _c8 = ["submenuheader"];
var _c9 = ["list"];
var _c10 = ["container"];
var _c11 = (a0) => ({
  "p-menu p-component": true,
  "p-menu-overlay": a0
});
var _c12 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c13 = (a0) => ({
  value: "visible",
  params: a0
});
var _c14 = (a0, a1) => ({
  "p-hidden": a0,
  flex: a1
});
var _c15 = (a0, a1) => ({
  "p-focus": a0,
  "p-disabled": a1
});
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (tmp_5_0 = ctx_r1.startTemplate) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : ctx_r1._startTemplate);
  }
}
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 14);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r3 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(submenu_r3.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r3 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, submenu_r3.label), ɵɵsanitizeHtml);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 17)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r4 = ɵɵreference(3);
    const submenu_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", submenu_r3.escape !== false)("ngIfElse", htmlSubmenuLabel_r4);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵtemplate(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 7)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r4 = ɵɵnextContext();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c14, submenu_r3.visible === false, submenu_r3.visible))("tooltipOptions", submenu_r3.tooltipOptions);
    ɵɵattribute("data-automationid", submenu_r3.automationId)("id", ctx_r1.menuitemId(submenu_r3, ctx_r1.id, i_r6));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.submenuHeaderTemplate && !ctx_r1._submenuHeaderTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (tmp_13_0 = ctx_r1.submenuHeaderTemplate) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ctx_r1._submenuHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c2, submenu_r3));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 14);
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r7 = ɵɵnextContext();
      const item_r9 = ctx_r7.$implicit;
      const j_r10 = ctx_r7.index;
      const i_r6 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r7 = ɵɵnextContext();
    const item_r9 = ctx_r7.$implicit;
    const j_r10 = ctx_r7.index;
    const i_r6 = ɵɵnextContext().index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(item_r9.styleClass);
    ɵɵproperty("pMenuItemContent", item_r9)("itemTemplate", (tmp_13_0 = ctx_r1.itemTemplate) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ctx_r1._itemTemplate)("ngClass", ɵɵpureFunction2(13, _c15, ctx_r1.focusedOptionId() && ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10) === ctx_r1.focusedOptionId(), ctx_r1.disabled(item_r9.disabled)))("ngStyle", item_r9.style)("tooltipOptions", item_r9.tooltipOptions);
    ɵɵattribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r9.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)))("data-p-disabled", ctx_r1.disabled(item_r9.disabled))("aria-disabled", ctx_r1.disabled(item_r9.disabled))("id", ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 0, "li", 12)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 16, "li", 19);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const submenu_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngIf", item_r9.separator && (item_r9.visible !== false || submenu_r3.visible !== false));
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r9.separator && item_r9.visible !== false && (item_r9.visible !== void 0 || submenu_r3.visible !== false));
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 0, "li", 12)(1, Menu_div_0_5_ng_template_0_li_1_Template, 3, 12, "li", 13)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 11);
  }
  if (rf & 2) {
    const submenu_r3 = ctx.$implicit;
    ɵɵproperty("ngIf", submenu_r3.separator && submenu_r3.visible !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", !submenu_r3.separator);
    ɵɵadvance();
    ɵɵproperty("ngForOf", submenu_r3.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 14);
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵlistener("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r11 = ɵɵnextContext();
      const item_r13 = ctx_r11.$implicit;
      const i_r14 = ctx_r11.index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r11 = ɵɵnextContext();
    const item_r13 = ctx_r11.$implicit;
    const i_r14 = ctx_r11.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(item_r13.styleClass);
    ɵɵproperty("pMenuItemContent", item_r13)("itemTemplate", (tmp_10_0 = ctx_r1.itemTemplate) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : ctx_r1._itemTemplate)("ngClass", ɵɵpureFunction2(13, _c15, ctx_r1.focusedOptionId() && ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14) === ctx_r1.focusedOptionId(), ctx_r1.disabled(item_r13.disabled)))("ngStyle", item_r13.style)("tooltipOptions", item_r13.tooltipOptions);
    ɵɵattribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r13.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)))("data-p-disabled", ctx_r1.disabled(item_r13.disabled))("aria-disabled", ctx_r1.disabled(item_r13.disabled))("id", ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 0, "li", 12)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 16, "li", 19);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    ɵɵproperty("ngIf", item_r13.separator && item_r13.visible !== false);
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r13.separator && item_r13.visible !== false);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (tmp_5_0 = ctx_r1.endTemplate) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : ctx_r1._endTemplate);
  }
}
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4, 0);
    ɵɵlistener("click", function Menu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    ɵɵtemplate(2, Menu_div_0_div_2_Template, 2, 2, "div", 5);
    ɵɵelementStart(3, "ul", 6, 1);
    ɵɵlistener("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListKeyDown($event));
    });
    ɵɵtemplate(5, Menu_div_0_5_Template, 1, 1, null, 7)(6, Menu_div_0_6_Template, 1, 1, null, 7);
    ɵɵelementEnd();
    ɵɵtemplate(7, Menu_div_0_div_7_Template, 2, 2, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_19_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(18, _c11, ctx_r1.popup))("ngStyle", ctx_r1.style)("@overlayAnimation", ɵɵpureFunction1(23, _c13, ɵɵpureFunction2(20, _c12, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    ɵɵattribute("data-pc-name", "menu")("id", ctx_r1.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (tmp_10_0 = ctx_r1.startTemplate) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : ctx_r1._startTemplate);
    ɵɵadvance();
    ɵɵattribute("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.hasSubMenu());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.hasSubMenu());
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_19_0 = ctx_r1.endTemplate) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : ctx_r1._endTemplate);
  }
}
var theme2 = ({
  dt
}) => `
.p-menu {
    background: ${dt("menu.background")};
    color: ${dt("menu.color")};
    border: 1px solid ${dt("menu.border.color")};
    border-radius: ${dt("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${dt("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${dt("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${dt("menu.transition.duration")}, color ${dt("menu.transition.duration")};
    border-radius: ${dt("menu.item.border.radius")};
    color: ${dt("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt("menu.item.padding")};
    gap: ${dt("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${dt("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${dt("menu.item.focus.color")};
    background: ${dt("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${dt("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${dt("menu.item.focus.color")};
    background: ${dt("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${dt("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${dt("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${dt("menu.submenu.label.background")};
    padding: ${dt("menu.submenu.label.padding")};
    color: ${dt("menu.submenu.label.color")};
    font-weight: ${dt("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-top: 1px solid ${dt("menu.separator.border.color")};
}

/* For PrimeNG */
.p-menu-overlay {
    position: absolute;
}
`;
var classes2 = {
  root: ({
    props
  }) => ["p-menu p-component", {
    "p-menu-overlay": props.popup
  }],
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: ({
    instance
  }) => ["p-menu-item", {
    "p-focus": instance.id === instance.focusedOptionId,
    "p-disabled": instance.disabled()
  }],
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: "p-menu-item-icon",
  itemLabel: "p-menu-item-label"
};
var MenuStyle = class _MenuStyle extends BaseStyle {
  name = "menu";
  theme = theme2;
  classes = classes2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMenuStyle_BaseFactory;
    return function MenuStyle_Factory(__ngFactoryType__) {
      return (ɵMenuStyle_BaseFactory || (ɵMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_MenuStyle)))(__ngFactoryType__ || _MenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _MenuStyle,
    factory: _MenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MenuClasses;
(function(MenuClasses2) {
  MenuClasses2["root"] = "p-menu";
  MenuClasses2["start"] = "p-menu-start";
  MenuClasses2["list"] = "p-menu-list";
  MenuClasses2["submenuItem"] = "p-menu-submenu-item";
  MenuClasses2["separator"] = "p-menu-separator";
  MenuClasses2["end"] = "p-menu-end";
  MenuClasses2["item"] = "p-menu-item";
  MenuClasses2["itemContent"] = "p-menu-item-content";
  MenuClasses2["itemLink"] = "p-menu-item-link";
  MenuClasses2["itemIcon"] = "p-menu-item-icon";
  MenuClasses2["itemLabel"] = "p-menu-item-label";
})(MenuClasses || (MenuClasses = {}));
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(ɵɵdirectiveInject(PLATFORM_ID, 16), ɵɵdirectiveInject(DomSanitizer, 16));
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var MenuItemContent = class _MenuItemContent {
  item;
  itemTemplate;
  onMenuItemClick = new EventEmitter();
  menu;
  constructor(menu) {
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item
    });
  }
  static ɵfac = function MenuItemContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemContent)(ɵɵdirectiveInject(forwardRef(() => Menu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    inputs: {
      item: [0, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate"
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    attrs: _c0,
    decls: 5,
    vars: 3,
    consts: [["itemContent", ""], ["htmlLabel", ""], [1, "p-menu-item-content", 3, "click"], [4, "ngIf"], ["class", "p-menu-item-link", "pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["routerLinkActive", "p-menu-item-link-active", "class", "p-menu-item-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 1, "p-menu-item-link", 3, "target", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 1, "p-menu-item-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-menu-item-icon", 3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-menu-item-label", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", 4, "ngIf"], [1, "p-menu-item-icon", 3, "ngClass", "ngStyle"], [1, "p-menu-item-label"], [1, "p-menu-item-label", 3, "innerHTML"], [3, "styleClass", "value"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 2);
        ɵɵlistener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemClick($event, ctx.item));
        });
        ɵɵtemplate(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, BadgeModule, Badge, SharedModule, SafeHtmlPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe],
      template: `
        <div [attr.data-pc-section]="'content'" class="p-menu-item-content" (click)="onItemClick($event, item)">
            <ng-container *ngIf="!itemTemplate">
                <a
                    *ngIf="!item?.routerLink"
                    [attr.title]="item.title"
                    [attr.href]="item.url || null"
                    [attr.data-automationid]="item.automationId"
                    [attr.tabindex]="-1"
                    [attr.data-pc-section]="'action'"
                    class="p-menu-item-link"
                    [target]="item.target"
                    [ngClass]="{ 'p-disabled': item.disabled }"
                    pRipple
                >
                    <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
                </a>
                <a
                    *ngIf="item?.routerLink"
                    [routerLink]="item.routerLink"
                    [attr.data-automationid]="item.automationId"
                    [attr.tabindex]="-1"
                    [attr.data-pc-section]="'action'"
                    [attr.title]="item.title"
                    [queryParams]="item.queryParams"
                    routerLinkActive="p-menu-item-link-active"
                    [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                    class="p-menu-item-link"
                    [target]="item.target"
                    [ngClass]="{ 'p-disabled': item.disabled }"
                    [fragment]="item.fragment"
                    [queryParamsHandling]="item.queryParamsHandling"
                    [preserveFragment]="item.preserveFragment"
                    [skipLocationChange]="item.skipLocationChange"
                    [replaceUrl]="item.replaceUrl"
                    [state]="item.state"
                    pRipple
                >
                    <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
                </a>
            </ng-container>

            <ng-container *ngIf="itemTemplate">
                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
            </ng-container>

            <ng-template #itemContent>
                <span class="p-menu-item-icon" *ngIf="item.icon" [ngClass]="item.icon" [class]="item.iconClass" [ngStyle]="item.iconStyle"></span>
                <span class="p-menu-item-label" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                <ng-template #htmlLabel><span class="p-menu-item-label" [innerHTML]="item.label | safeHtml"></span></ng-template>
                <p-badge *ngIf="item.badge" [styleClass]="item.badgeStyleClass" [value]="item.badge" />
            </ng-template>
        </div>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Menu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Menu)]
    }]
  }], {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild;
  containerViewChild;
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  });
  focusedOptionIndex = signal(-1);
  selectedOptionIndex = signal(-1);
  focused = false;
  overlayVisible = false;
  relativeAlign;
  _componentStyle = inject(MenuStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    this.id = this.id || uuid("pn_id_");
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible) this.hide();
    else this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    this.target = event.currentTarget;
    this.relativeAlign = event.relativeAlign;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  _startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  _endTemplate;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  submenuHeaderTemplate;
  _submenuHeaderTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "submenuheader":
          this._submenuHeaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getTabIndexValue() {
    return this.tabindex !== void 0 ? this.tabindex.toString() : null;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          focus(this.listViewChild.nativeElement);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) relativePosition(this.container, this.target);
    else absolutePosition(this.container, this.target);
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else appendChild(this.appendTo, this.container);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.relativeAlign = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !isTouchDevice()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit(event);
    }
  }
  onListBlur(event) {
    if (this.focused) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
      case "Tab":
        if (this.popup) {
          focus(this.target);
          this.hide();
        }
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      focus(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = findSingle(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && findSingle(element, 'a[data-pc-section="action"]');
    this.popup && focus(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event, id) {
    const {
      originalEvent,
      item
    } = event;
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit();
    }
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== id) {
      this.focusedOptionIndex.set(id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild?.nativeElement && !this.containerViewChild?.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
    super.ngOnDestroy();
  }
  hasSubMenu() {
    return this.model?.some((item) => item.items) ?? false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  static ɵfac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)(ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c9, 5);
        ɵɵviewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    features: [ɵɵProvidersFeature([MenuStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], [3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "click", "ngClass", "ngStyle"], ["class", "p-menu-start", 4, "ngIf"], ["role", "menu", 1, "p-menu-list", "p-reset", 3, "focus", "blur", "keydown"], [4, "ngIf"], ["class", "p-menu-end", 4, "ngIf"], [1, "p-menu-start"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menu-submenu-label", "pTooltip", "", "role", "none", 3, "ngClass", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], ["pTooltip", "", "role", "none", 1, "p-menu-submenu-label", 3, "ngClass", "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["class", "p-menu-item", "pTooltip", "", "role", "menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "class", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 1, "p-menu-item", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "tooltipOptions"], [1, "p-menu-end"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Menu_div_0_Template, 8, 25, "div", 3);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MenuItemContent, TooltipModule, Tooltip, BadgeModule, SharedModule, SafeHtmlPipe],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MenuItemContent, TooltipModule, BadgeModule, SharedModule, SafeHtmlPipe],
      template: `
        <div
            #container
            [ngClass]="{ 'p-menu p-component': true, 'p-menu-overlay': popup }"
            [class]="styleClass"
            [ngStyle]="style"
            *ngIf="!popup || visible"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-name]="'menu'"
            [attr.id]="id"
        >
            <div *ngIf="startTemplate ?? _startTemplate" class="p-menu-start" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate ?? _startTemplate"></ng-container>
            </div>
            <ul
                #list
                class="p-menu-list p-reset"
                role="menu"
                [attr.id]="id + '_list'"
                [attr.tabindex]="getTabIndexValue()"
                [attr.data-pc-section]="'menu'"
                [attr.aria-activedescendant]="activedescendant()"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                (focus)="onListFocus($event)"
                (blur)="onListBlur($event)"
                (keydown)="onListKeyDown($event)"
            >
                <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li class="p-menu-separator" *ngIf="submenu.separator && submenu.visible !== false" role="separator"></li>
                    <li
                        class="p-menu-submenu-label"
                        [attr.data-automationid]="submenu.automationId"
                        *ngIf="!submenu.separator"
                        [ngClass]="{ 'p-hidden': submenu.visible === false, flex: submenu.visible }"
                        pTooltip
                        [tooltipOptions]="submenu.tooltipOptions"
                        role="none"
                        [attr.id]="menuitemId(submenu, id, i)"
                    >
                        <ng-container *ngIf="!submenuHeaderTemplate && !_submenuHeaderTemplate">
                            <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                            <ng-template #htmlSubmenuLabel><span [innerHTML]="submenu.label | safeHtml"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="submenuHeaderTemplate ?? _submenuHeaderTemplate; context: { $implicit: submenu }"></ng-container>
                    </li>
                    <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                        <li class="p-menu-separator" *ngIf="item.separator && (item.visible !== false || submenu.visible !== false)" role="separator"></li>
                        <li
                            class="p-menu-item"
                            *ngIf="!item.separator && item.visible !== false && (item.visible !== undefined || submenu.visible !== false)"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate ?? _itemTemplate"
                            [ngClass]="{
                                'p-focus': focusedOptionId() && menuitemId(item, id, i, j) === focusedOptionId(),
                                'p-disabled': disabled(item.disabled)
                            }"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            (onMenuItemClick)="itemClick($event, menuitemId(item, id, i, j))"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            role="menuitem"
                            [attr.data-pc-section]="'menuitem'"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i, j)"
                        ></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li class="p-menu-separator" *ngIf="item.separator && item.visible !== false" role="separator"></li>
                    <li
                        class="p-menu-item"
                        *ngIf="!item.separator && item.visible !== false"
                        [pMenuItemContent]="item"
                        [itemTemplate]="itemTemplate ?? _itemTemplate"
                        [ngClass]="{
                            'p-focus': focusedOptionId() && menuitemId(item, id, i) === focusedOptionId(),
                            'p-disabled': disabled(item.disabled)
                        }"
                        [ngStyle]="item.style"
                        [class]="item.styleClass"
                        (onMenuItemClick)="itemClick($event, menuitemId(item, id, i))"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        role="menuitem"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.aria-label]="label(item.label)"
                        [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                        [attr.data-p-disabled]="disabled(item.disabled)"
                        [attr.aria-disabled]="disabled(item.disabled)"
                        [attr.id]="menuitemId(item, id, i)"
                    ></li>
                </ng-template>
            </ul>
            <div *ngIf="endTemplate ?? _endTemplate" class="p-menu-end" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate ?? _endTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuHeaderTemplate: [{
      type: ContentChild,
      args: ["submenuheader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static ɵfac = function MenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MenuModule,
    imports: [Menu, SharedModule, SafeHtmlPipe],
    exports: [Menu, SharedModule, SafeHtmlPipe]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Menu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [Menu, SharedModule, SafeHtmlPipe],
      exports: [Menu, SharedModule, SafeHtmlPipe]
    }]
  }], null, null);
})();
export {
  Menu,
  MenuClasses,
  MenuItemContent,
  MenuModule,
  MenuStyle,
  SafeHtmlPipe
};
//# sourceMappingURL=primeng_menu.js.map
