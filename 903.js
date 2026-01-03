"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[903],{

/***/ 9981:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_tenant_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/tenant-config.service */ 5449);



let LogoComponent = /*#__PURE__*/(() => {
  class LogoComponent {
    constructor(configService) {
      this.configService = configService;
      this.size = 'medium';
      this.logoPath = 'assets/logo.png'; // Will be replaced by build process
      const config = this.configService.getConfig();
      this.clientName = config?.name || 'Company';
    }
    get sizeClass() {
      return `logo-${this.size}`;
    }
    onImageError() {
      console.error('Logo failed to load');
      // Fallback if needed, or just let it be broken if strictly required
      // this.logoPath = 'assets/fallback-logo.png'; 
    }
    static {
      this.ɵfac = function LogoComponent_Factory(t) {
        return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_tenant_config_service__WEBPACK_IMPORTED_MODULE_0__.TenantConfigService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LogoComponent,
        selectors: [["app-logo"]],
        inputs: {
          size: "size"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 1,
        vars: 4,
        consts: [[3, "error", "src", "alt"]],
        template: function LogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function LogoComponent_Template_img_error_0_listener() {
              return ctx.onImageError();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sizeClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.clientName + " Logo");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        styles: [".logo-small[_ngcontent-%COMP%] { height: 2rem; width: auto; }\n    .logo-medium[_ngcontent-%COMP%] { height: 3rem; width: auto; }\n    .logo-large[_ngcontent-%COMP%] { height: 4rem; width: auto; }"]
      });
    }
  }
  return LogoComponent;
})();

/***/ }),

/***/ 903:
/*!*********************************************************!*\
  !*** ./src/app/tenant-dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/logo/logo.component */ 9981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_tenant_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/tenant-config.service */ 5449);





function DashboardComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r1);
  }
}
function DashboardComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No features available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(configService) {
      this.configService = configService;
      this.tenantName = '';
      this.clientId = '';
      this.features = [];
      const config = this.configService.getConfig();
      if (config) {
        this.tenantName = config.name;
        this.features = config.features;
      }
      this.clientId = this.configService.getClientId();
    }
    static {
      this.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_tenant_config_service__WEBPACK_IMPORTED_MODULE_1__.TenantConfigService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
        decls: 35,
        vars: 4,
        consts: [[1, "min-h-screen", "bg-gray-50", "p-6"], [1, "max-w-6xl", "mx-auto"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6", "mb-6"], ["size", "large"], [1, "text-3xl", "font-bold", "text-primary", "mt-4"], [1, "text-gray-600", "mt-2"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-6"], [1, "bg-primary", "text-white", "p-6", "rounded-lg", "shadow-lg"], [1, "text-xl", "font-bold", "mb-2"], [1, "bg-secondary", "text-white", "p-6", "rounded-lg", "shadow-lg"], [1, "bg-accent", "text-white", "p-6", "rounded-lg", "shadow-lg"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6"], [1, "text-xl", "font-bold", "text-primary", "mb-4"], [1, "space-y-2"], ["class", "flex items-center p-3 bg-primary-light rounded", 4, "ngFor", "ngForOf"], ["class", "text-gray-500 text-center py-4", 4, "ngIf"], [1, "mt-6", "flex", "gap-4"], [1, "btn-primary"], [1, "btn-secondary"], [1, "flex", "items-center", "p-3", "bg-primary-light", "rounded"], [1, "w-3", "h-3", "bg-primary", "rounded-full", "mr-3"], [1, "font-medium", "capitalize"], [1, "text-gray-500", "text-center", "py-4"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-logo", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Primary Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "This uses the primary brand color");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Secondary Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "This uses the secondary brand color");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Accent Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "This uses the accent brand color");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11)(25, "h3", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Available Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DashboardComponent_div_28_Template, 4, 1, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DashboardComponent_div_29_Template, 2, 0, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16)(31, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Primary Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Secondary Action");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Welcome to ", ctx.tenantName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Client ID: ", ctx.clientId, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.features);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.features.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
        encapsulation: 2
      });
    }
  }
  return DashboardComponent;
})();

/***/ })

}]);