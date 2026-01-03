"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[989],{

/***/ 5580:
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRoutingModule: () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/customer-dashboard.component */ 7319);
/* harmony import */ var _pages_policies_customer_policies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/policies/customer-policies.component */ 6743);
/* harmony import */ var _pages_claims_customer_claims_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/claims/customer-claims.component */ 3775);
/* harmony import */ var _pages_quotations_customer_quotations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/quotations/customer-quotations.component */ 3199);
/* harmony import */ var _pages_quotation_details_quotation_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/quotation-details/quotation-details.component */ 5382);
/* harmony import */ var _pages_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/policy-details/policy-details.component */ 5878);
/* harmony import */ var _pages_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/claim-details/claim-details.component */ 9654);
/* harmony import */ var _pages_payments_customer_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/payments/customer-payments.component */ 3863);
/* harmony import */ var _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pages/profile/profile.component */ 1855);
/* harmony import */ var _shared_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/pages/settings/settings.component */ 4879);
/* harmony import */ var _shared_pages_file_claim_file_claim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pages/file-claim/file-claim.component */ 5475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7705);














const routes = [{
  path: '',
  component: _pages_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.CustomerDashboardComponent
}, {
  path: 'policies',
  component: _pages_policies_customer_policies_component__WEBPACK_IMPORTED_MODULE_1__.CustomerPoliciesComponent
}, {
  path: 'policies/:id',
  component: _pages_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_5__.PolicyDetailsComponent
}, {
  path: 'claims',
  component: _pages_claims_customer_claims_component__WEBPACK_IMPORTED_MODULE_2__.CustomerClaimsComponent
}, {
  path: 'claims/:id',
  component: _pages_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_6__.ClaimDetailsComponent
}, {
  path: 'quotations',
  component: _pages_quotations_customer_quotations_component__WEBPACK_IMPORTED_MODULE_3__.CustomerQuotationsComponent
}, {
  path: 'quotations/:id',
  component: _pages_quotation_details_quotation_details_component__WEBPACK_IMPORTED_MODULE_4__.QuotationDetailsComponent
}, {
  path: 'payments',
  component: _pages_payments_customer_payments_component__WEBPACK_IMPORTED_MODULE_7__.CustomerPaymentsComponent
}, {
  path: 'profile',
  component: _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent
}, {
  path: 'settings',
  component: _shared_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__.SettingsComponent
}, {
  path: 'claims/new',
  component: _shared_pages_file_claim_file_claim_component__WEBPACK_IMPORTED_MODULE_10__.FileClaimComponent
}];
let CustomerRoutingModule = /*#__PURE__*/(() => {
  class CustomerRoutingModule {
    static {
      this.ɵfac = function CustomerRoutingModule_Factory(t) {
        return new (t || CustomerRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: CustomerRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
      });
    }
  }
  return CustomerRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CustomerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 8989:
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerModule: () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-routing.module */ 5580);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _pages_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/customer-dashboard.component */ 7319);
/* harmony import */ var _pages_policies_customer_policies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/policies/customer-policies.component */ 6743);
/* harmony import */ var _pages_claims_customer_claims_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/claims/customer-claims.component */ 3775);
/* harmony import */ var _pages_quotations_customer_quotations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/quotations/customer-quotations.component */ 3199);
/* harmony import */ var _pages_quotation_details_quotation_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/quotation-details/quotation-details.component */ 5382);
/* harmony import */ var _pages_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/policy-details/policy-details.component */ 5878);
/* harmony import */ var _pages_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/claim-details/claim-details.component */ 9654);
/* harmony import */ var _pages_payments_customer_payments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/payments/customer-payments.component */ 3863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7705);




// Pages









let CustomerModule = /*#__PURE__*/(() => {
  class CustomerModule {
    static {
      this.ɵfac = function CustomerModule_Factory(t) {
        return new (t || CustomerModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: CustomerModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
      });
    }
  }
  return CustomerModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CustomerModule, {
    declarations: [_pages_dashboard_customer_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDashboardComponent, _pages_policies_customer_policies_component__WEBPACK_IMPORTED_MODULE_3__.CustomerPoliciesComponent, _pages_claims_customer_claims_component__WEBPACK_IMPORTED_MODULE_4__.CustomerClaimsComponent, _pages_quotations_customer_quotations_component__WEBPACK_IMPORTED_MODULE_5__.CustomerQuotationsComponent, _pages_quotation_details_quotation_details_component__WEBPACK_IMPORTED_MODULE_6__.QuotationDetailsComponent, _pages_policy_details_policy_details_component__WEBPACK_IMPORTED_MODULE_7__.PolicyDetailsComponent, _pages_claim_details_claim_details_component__WEBPACK_IMPORTED_MODULE_8__.ClaimDetailsComponent, _pages_payments_customer_payments_component__WEBPACK_IMPORTED_MODULE_9__.CustomerPaymentsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 9654:
/*!*************************************************************************!*\
  !*** ./src/app/customer/pages/claim-details/claim-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClaimDetailsComponent: () => (/* binding */ ClaimDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/claim.service */ 4644);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/chat-box/chat-box.component */ 2911);









function ClaimDetailsComponent_div_1_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Approved Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", ctx_r1.claim.approved_amount, "");
  }
}
function ClaimDetailsComponent_div_1_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " No documents uploaded yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClaimDetailsComponent_div_1_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "path", 42)(4, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](doc_r3.name);
  }
}
function ClaimDetailsComponent_div_1_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 48)(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 50)(5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](event_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](event_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](event_r4.date);
  }
}
function ClaimDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClaimDetailsComponent_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 7)(6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Claim Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "app-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClaimDetailsComponent_div_1_Template_app_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.uploadDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Upload Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12)(15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "circle", 15)(18, "path", 16)(19, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div")(21, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 20)(26, "app-card", 21)(27, "div", 22)(28, "div")(29, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Claim Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div")(34, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Claim Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div")(39, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Date Filed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "app-card", 25)(44, "div", 22)(45, "div")(46, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Policy Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div")(51, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "app-card", 26)(56, "div", 22)(57, "div")(58, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Claimed Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, ClaimDetailsComponent_div_1_div_62_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "app-card", 29)(64, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "app-card", 31)(67, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, ClaimDetailsComponent_div_1_div_68_Template, 2, 0, "div", 32)(69, ClaimDetailsComponent_div_1_div_69_Template, 9, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "app-card", 34)(71, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, ClaimDetailsComponent_div_1_div_72_Template, 11, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "app-chat-box", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.claim_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.getStatusColor(ctx_r1.claim.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Claim Status: ", ctx_r1.claim.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Last updated: ", ctx_r1.claim.updated_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.claim_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.claim_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.claim_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.policy_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", ctx_r1.claim.claim_amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.claim.approved_amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.claim.description || "No description provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.claim.documents || ctx_r1.claim.documents.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.claim.documents);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.claim.timeline);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("modelName", "insurance.claim")("recordId", ctx_r1.claim.id);
  }
}
function ClaimDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading-spinner", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loading", true);
  }
}
let ClaimDetailsComponent = /*#__PURE__*/(() => {
  class ClaimDetailsComponent {
    constructor(route, router, claimService) {
      this.route = route;
      this.router = router;
      this.claimService = claimService;
      this.claimId = '';
      this.claim = null;
      this.loading = true;
    }
    ngOnInit() {
      this.claimId = this.route.snapshot.params['id'];
      this.loadClaim();
    }
    loadClaim() {
      this.claimService.getClaim(parseInt(this.claimId)).subscribe({
        next: response => {
          this.claim = response.data;
          this.loading = false;
        },
        error: err => {
          console.error('Error loading claim:', err);
          this.loading = false;
        }
      });
    }
    goBack() {
      this.router.navigate(['/dashboard/customer/claims']);
    }
    uploadDocument() {
      console.log('Uploading document...');
    }
    getStatusColor(status) {
      const colors = {
        'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        'approved': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'rejected': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        'in_progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      };
      return colors[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
    }
    static {
      this.ɵfac = function ClaimDetailsComponent_Factory(t) {
        return new (t || ClaimDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__.ClaimService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: ClaimDetailsComponent,
        selectors: [["app-claim-details"]],
        decls: 3,
        vars: 2,
        consts: [["class", "space-y-6", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], [1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], [1, "p-2", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-lg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5"], ["d", "m12 19-7-7 7-7"], ["d", "M19 12H5"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400"], ["variant", "primary", 3, "click"], [1, "p-4", "rounded-lg", 3, "ngClass"], [1, "flex", "items-center", "gap-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4"], ["d", "M12 8h.01"], [1, "font-semibold"], [1, "text-sm"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], ["title", "Claim Information"], [1, "space-y-3"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "font-semibold", "text-gray-900", "dark:text-white"], ["title", "Policy Details"], ["title", "Claim Amount"], [1, "text-2xl", "font-bold", "text-primary"], [4, "ngIf"], ["title", "Claim Description"], [1, "text-gray-700", "dark:text-gray-300"], ["title", "Uploaded Documents"], ["class", "text-center py-8 text-gray-500 dark:text-gray-400", 4, "ngIf"], ["class", "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg", 4, "ngFor", "ngForOf"], ["title", "Claim Timeline"], [1, "space-y-4"], ["class", "flex gap-4", 4, "ngFor", "ngForOf"], [3, "modelName", "recordId"], [1, "text-xl", "font-bold", "text-green-600"], [1, "text-center", "py-8", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "justify-between", "p-3", "bg-gray-50", "dark:bg-gray-700", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5", "text-gray-500"], ["d", "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"], ["d", "M14 2v4a2 2 0 0 0 2 2h4"], [1, "text-gray-900", "dark:text-white"], [1, "text-primary", "hover:underline"], [1, "flex", "gap-4"], [1, "flex", "flex-col", "items-center"], [1, "w-3", "h-3", "rounded-full", "bg-primary"], [1, "w-0.5", "h-full", "bg-gray-300", "dark:bg-gray-600"], [1, "pb-4"], [1, "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "text-xs", "text-gray-500", "dark:text-gray-500", "mt-1"], [1, "flex", "items-center", "justify-center", "h-96"], ["message", "Loading claim details...", 3, "loading"]],
        template: function ClaimDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClaimDetailsComponent_div_1_Template, 74, 17, "div", 0)(2, ClaimDetailsComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.claim);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__.ChatBoxComponent]
      });
    }
  }
  return ClaimDetailsComponent;
})();

/***/ }),

/***/ 3775:
/*!********************************************************************!*\
  !*** ./src/app/customer/pages/claims/customer-claims.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerClaimsComponent: () => (/* binding */ CustomerClaimsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/claim.service */ 4644);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3955);











function CustomerClaimsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function CustomerClaimsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerClaimsComponent_app_dynamic_table_with_filters_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("filteredDataChange", function CustomerClaimsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("exportData", function CustomerClaimsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function CustomerClaimsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r0.data)("columns", ctx_r0.columns)("showExport", true)("maxSelectOptions", 10);
  }
}
let CustomerClaimsComponent = /*#__PURE__*/(() => {
  class CustomerClaimsComponent {
    constructor(claimService, authService, router, appTranslate) {
      this.claimService = claimService;
      this.authService = authService;
      this.router = router;
      this.appTranslate = appTranslate;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      this.setupColumns();
      // Re-setup columns on language change
      this.appTranslate.get('CUSTOMER.CLAIMS.COLUMNS').subscribe(() => {
        this.setupColumns();
      });
    }
    ngOnInit() {
      this.loadClaims();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'claimNumber',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.CLAIM_NUMBER'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'policyNumber',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.POLICY'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'vehiclePlate',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.VEHICLE_PLATE'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'vehicleMaker',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.VEHICLE_MAKER'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'type',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.TYPE'),
        filterable: true
      }, {
        key: 'productName',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.PRODUCT'),
        filterable: true
      }, {
        key: 'status',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row.status)
      }, {
        key: 'amount',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.AMOUNT'),
        filterable: false
      }, {
        key: 'date',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.DATE'),
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: this.appTranslate.instant('CUSTOMER.CLAIMS.COLUMNS.ACTIONS'),
        filterable: false,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
    }
    renderStatus(status) {
      const s = status?.toLowerCase() || 'pending';
      let classes = '';
      if (['active', 'approved', 'settled', 'paid'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'submitted', 'in_progress', 'processing', 'intimated', 'draft'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      const translatedStatus = this.appTranslate.instant(`STATUS.${s.toUpperCase()}`);
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${translatedStatus}</span>`;
    }
    loadClaims() {
      this.isLoading = true;
      const user = this.authService.currentUserValue;
      if (!user) return;
      this.claimService.listClaims({
        user_id: user.id,
        user_type: 'customer',
        limit: 100,
        offset: 0
      }).subscribe({
        next: response => {
          // Handle different response structures
          let claimsData = [];
          if (Array.isArray(response)) {
            claimsData = response;
          } else if (Array.isArray(response.data)) {
            claimsData = response.data;
          } else if (response.data?.result?.data) {
            claimsData = response.data.result.data;
          } else if (response.data?.data) {
            claimsData = response.data.data;
          } else {
            claimsData = [];
          }
          // Map to match columns
          this.data = claimsData.map(claim => ({
            id: claim.id || claim.claim_number,
            claimNumber: claim.claim_number || 'N/A',
            policyNumber: claim.policy_number || 'N/A',
            vehiclePlate: claim.vehicle_plate_number || 'N/A',
            vehicleMaker: claim.vehicle_maker || 'N/A',
            type: claim.lob || claim.claim_type || 'N/A',
            productName: claim.product_name ? typeof claim.product_name === 'number' ? `Product ${claim.product_name}` : claim.product_name : 'N/A',
            date: claim.intimation_date || claim.claim_date || 'N/A',
            amount: claim.claim_amount ? `EGP ${claim.claim_amount.toLocaleString()}` : 'N/A',
            status: (claim.status || claim.state || 'pending').toLowerCase().replace(/\s+/g, '_')
          }));
          this.isLoading = false;
        },
        error: err => {
          console.error('Error loading claims:', err);
          this.error = this.appTranslate.instant('CUSTOMER.CLAIMS.ERROR_LOADING');
          this.isLoading = false;
        }
      });
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/customer/claims', event.data.id]);
          break;
      }
    }
    onExport() {
      console.log('Exporting claims...');
    }
    static {
      this.ɵfac = function CustomerClaimsComponent_Factory(t) {
        return new (t || CustomerClaimsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__.ClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: CustomerClaimsComponent,
        selectors: [["app-customer-claims"]],
        decls: 20,
        vars: 12,
        consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], ["variant", "primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "mr-2"], ["d", "M5 12h14"], ["d", "M12 5v14"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "exportData", "action", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"]],
        template: function CustomerClaimsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "path", 6)(13, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CustomerClaimsComponent_div_17_Template, 2, 1, "div", 9)(18, CustomerClaimsComponent_div_18_Template, 2, 0, "div", 10)(19, CustomerClaimsComponent_app_dynamic_table_with_filters_19_Template, 1, 4, "app-dynamic-table-with-filters", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 6, "CUSTOMER.CLAIMS.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 8, "CUSTOMER.CLAIMS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 10, "CUSTOMER.CLAIMS.NEW_CLAIM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableWithFiltersComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe]
      });
    }
  }
  return CustomerClaimsComponent;
})();

/***/ }),

/***/ 7319:
/*!**************************************************************************!*\
  !*** ./src/app/customer/pages/dashboard/customer-dashboard.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerDashboardComponent: () => (/* binding */ CustomerDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_claim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/claim.service */ 4644);
/* harmony import */ var _core_services_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/quote.service */ 7244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3955);











const _c0 = a0 => ({
  name: a0
});
function CustomerDashboardComponent_app_loading_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading-spinner");
  }
}
function CustomerDashboardComponent_div_3_app_card_9__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_3_app_card_9__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 13)(2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_3_app_card_9__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "rect", 19)(2, "line", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_3_app_card_9__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 31)(2, "path", 32)(3, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerDashboardComponent_div_3_app_card_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-card", 23)(1, "div", 24)(2, "div")(3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, CustomerDashboardComponent_div_3_app_card_9__svg_svg_10_Template, 2, 0, "svg", 29)(11, CustomerDashboardComponent_div_3_app_card_9__svg_svg_11_Template, 3, 0, "svg", 29)(12, CustomerDashboardComponent_div_3_app_card_9__svg_svg_12_Template, 3, 0, "svg", 29)(13, CustomerDashboardComponent_div_3_app_card_9__svg_svg_13_Template, 4, 0, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](stat_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](stat_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](stat_r1.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", stat_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", stat_r1.icon === "shield");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", stat_r1.icon === "file-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", stat_r1.icon === "credit-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", stat_r1.icon === "scroll-text");
  }
}
function CustomerDashboardComponent_div_3_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "circle", 37)(4, "path", 38)(5, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 40)(7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const activity_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](activity_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](activity_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](activity_r2.time);
  }
}
function CustomerDashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 3)(2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CustomerDashboardComponent_div_3_app_card_9_Template, 14, 9, "app-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9)(13, "button", 10)(14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "path", 13)(17, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 15)(19, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "button", 10)(26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 15)(30, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "button", 10)(37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "rect", 19)(40, "line", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 15)(42, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CustomerDashboardComponent_div_3_div_51_Template, 13, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 12, "CUSTOMER.DASHBOARD.WELCOME", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](33, _c0, (ctx_r2.user == null ? null : ctx_r2.user.name) || "Customer")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 15, "CUSTOMER.DASHBOARD.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.stats);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 17, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 19, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.FILE_CLAIM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 21, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.FILE_CLAIM_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 23, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.VIEW_POLICIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 25, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.VIEW_POLICIES_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](44, 27, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.MAKE_PAYMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 29, "CUSTOMER.DASHBOARD.QUICK_ACTIONS.MAKE_PAYMENT_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 31, "CUSTOMER.DASHBOARD.RECENT_ACTIVITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.recentActivities);
  }
}
let CustomerDashboardComponent = /*#__PURE__*/(() => {
  class CustomerDashboardComponent {
    constructor(authService, policyService, claimService, quoteService) {
      this.authService = authService;
      this.policyService = policyService;
      this.claimService = claimService;
      this.quoteService = quoteService;
      this.user = null;
      this.loading = true;
      this.stats = [{
        title: 'Total Policies',
        value: '0',
        icon: 'shield',
        color: 'bg-blue-500',
        change: '+0%'
      }, {
        title: 'Active Claims',
        value: '0',
        icon: 'file-text',
        color: 'bg-green-500',
        change: '+0%'
      }, {
        title: 'Pending Payments',
        value: '$0',
        icon: 'credit-card',
        color: 'bg-yellow-500',
        change: '+0%'
      }, {
        title: 'Quotations',
        value: '0',
        icon: 'scroll-text',
        color: 'bg-purple-500',
        change: '+0%'
      }];
      this.recentActivities = [{
        title: 'Welcome to Orient Insurance Portal',
        description: 'Get started by exploring your dashboard',
        time: 'Just now',
        type: 'info'
      }];
    }
    ngOnInit() {
      this.authService.currentUser.subscribe(user => {
        this.user = user;
        if (user) {
          this.loadDashboardData(user.id);
        }
      });
    }
    loadDashboardData(userId) {
      this.loading = true;
      // Parallel requests
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)({
        policies: this.policyService.listPolicies({
          user_id: userId,
          user_type: 'customer',
          limit: 100
        }),
        claims: this.claimService.listClaims({
          user_id: userId,
          user_type: 'customer',
          limit: 100
        }),
        quotes: this.quoteService.listQuotations({
          user_id: userId,
          user_type: 'customer',
          limit: 100
        })
      }).subscribe({
        next: results => {
          const policies = results.policies?.result?.data?.policies || [];
          const claims = results.claims?.result?.data?.claims || [];
          const quotes = results.quotes?.result?.data?.quotations || [];
          // Update details
          this.stats[0].value = policies.length.toString();
          this.stats[0].change = `+${policies.filter(p => new Date(p.date).getMonth() === new Date().getMonth()).length} this month`;
          this.stats[1].value = claims.filter(c => c.stage_name !== 'Closed').length.toString();
          // Mocking payments for now as API might be different, but using quotes count
          this.stats[3].value = quotes.length.toString();
          this.stats[3].change = `+${quotes.filter(q => new Date(q.date).getMonth() === new Date().getMonth()).length} this month`;
          // Logic for pending payments could be derived from unpaid policies/quotes, setting to 0 or derived if possible
          const unpaid = policies.filter(p => p.payment_state === 'not_paid').length;
          this.stats[2].value = unpaid.toString();
          this.loading = false;
        },
        error: err => {
          console.error('Error loading dashboard data', err);
          this.loading = false;
        }
      });
    }
    static {
      this.ɵfac = function CustomerDashboardComponent_Factory(t) {
        return new (t || CustomerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_1__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_claim_service__WEBPACK_IMPORTED_MODULE_2__.ClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_quote_service__WEBPACK_IMPORTED_MODULE_3__.QuoteService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: CustomerDashboardComponent,
        selectors: [["app-customer-dashboard"]],
        decls: 4,
        vars: 2,
        consts: [[1, "space-y-6"], [4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [1, "bg-gradient-to-r", "from-primary", "to-primary-dark", "rounded-lg", "p-6", "text-white"], [1, "text-3xl", "font-bold", "mb-2"], [1, "text-blue-100"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [3, "hover", 4, "ngFor", "ngForOf"], [3, "title"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "flex", "items-center", "gap-3", "p-4", "border-2", "border-gray-200", "dark:border-gray-700", "rounded-lg", "hover:border-primary", "hover:bg-primary/5", "transition-all"], [1, "bg-primary/10", "p-2", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5", "text-primary"], ["d", "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"], ["d", "M14 2v4a2 2 0 0 0 2 2h4"], [1, "text-left"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], ["d", "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"], ["width", "20", "height", "14", "x", "2", "y", "5", "rx", "2"], ["x1", "2", "x2", "22", "y1", "10", "y2", "10"], [1, "space-y-4"], ["class", "flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg", 4, "ngFor", "ngForOf"], [3, "hover"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white", "mt-2"], [1, "text-sm", "text-green-600", "dark:text-green-400", "mt-1"], [1, "p-3", "rounded-full", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "class", "h-6 w-6", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6"], ["d", "M15 12h-5"], ["d", "M15 8h-5"], ["d", "M19 17V5a2 2 0 0 0-2-2H4"], [1, "flex", "items-start", "gap-4", "p-4", "bg-gray-50", "dark:bg-gray-700/50", "rounded-lg"], [1, "bg-blue-100", "dark:bg-blue-900/30", "p-2", "rounded-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5", "text-blue-600", "dark:text-blue-400"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4"], ["d", "M12 8h.01"], [1, "flex-1"], [1, "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "text-xs", "text-gray-500", "dark:text-gray-500", "mt-1"]],
        template: function CustomerDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CustomerDashboardComponent_app_loading_spinner_2_Template, 1, 0, "app-loading-spinner", 1)(3, CustomerDashboardComponent_div_3_Template, 52, 35, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__.DashboardLayoutComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe]
      });
    }
  }
  return CustomerDashboardComponent;
})();

/***/ }),

/***/ 3863:
/*!************************************************************************!*\
  !*** ./src/app/customer/pages/payments/customer-payments.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerPaymentsComponent: () => (/* binding */ CustomerPaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/broker.service */ 621);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 3955);













function CustomerPaymentsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function CustomerPaymentsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CustomerPaymentsComponent_app_dynamic_table_with_filters_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filteredDataChange", function CustomerPaymentsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("filterChange", function CustomerPaymentsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onFilterChange($event));
    })("exportData", function CustomerPaymentsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function CustomerPaymentsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r0.getDisplayData())("columns", ctx_r0.columns)("showExport", true)("maxSelectOptions", 10);
  }
}
function CustomerPaymentsComponent_app_pagination_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function CustomerPaymentsComponent_app_pagination_20_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onPageChange($event));
    })("pageSizeChange", function CustomerPaymentsComponent_app_pagination_20_Template_app_pagination_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentPage", ctx_r0.currentPage)("pageSize", ctx_r0.pageSize)("totalRecords", ctx_r0.totalRecords);
  }
}
let CustomerPaymentsComponent = /*#__PURE__*/(() => {
  class CustomerPaymentsComponent {
    constructor(router, brokerService, authService, notificationService, appTranslate) {
      this.router = router;
      this.brokerService = brokerService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.appTranslate = appTranslate;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      // Pagination
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 0;
      this.paymentStatus = 'paid';
      // Caching mechanism
      // Caching mechanism
      this.cachedData = [];
      this.hasActiveFilters = false;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadFirstPage();
    }
    changePaymentStatus(status) {
      if (this.paymentStatus !== status) {
        this.paymentStatus = status;
        this.currentPage = 1;
        this.clearCache();
        this.loadFirstPage();
      }
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'id',
        label: 'Payment ID',
        filterable: true,
        filterType: 'text'
      }, {
        key: 'policyNumber',
        label: 'Policy No',
        filterable: true,
        filterType: 'text'
      }, {
        key: 'partnerName',
        label: 'Customer Name',
        filterable: true,
        filterType: 'text'
      }, {
        key: 'productName',
        label: 'Product',
        filterable: true
      }, {
        key: 'premiumAmount',
        label: 'Amount',
        filterable: false,
        render: row => `<span class="font-medium text-gray-900 dark:text-gray-100">$${row.premiumAmount ? row.premiumAmount.toLocaleString() : '0'}</span>`
      }, {
        key: 'paymentStatus',
        label: 'Status',
        filterable: true,
        render: row => this.renderStatus(row.paymentStatus)
      }, {
        key: 'date',
        label: 'Date',
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: 'Actions',
        filterable: false,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
    }
    renderStatus(status) {
      const s = status?.toLowerCase() || 'outstanding';
      let classes = '';
      if (['completed', 'paid'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'outstanding'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${status}</span>`;
    }
    loadFirstPage() {
      this.isLoading = true;
      this.error = null;
      const currentUser = this.authService.currentUserValue;
      if (!currentUser || !currentUser.id) {
        this.error = 'ERROR.USER_NOT_FOUND';
        this.isLoading = false;
        this.notificationService.error(this.appTranslate.instant('ERROR.USER_NOT_FOUND'));
        return;
      }
      const userId = currentUser.id;
      // Load ONLY first page for fast display
      this.brokerService.getPremiums(userId, this.paymentStatus, this.pageSize, 0).subscribe({
        next: response => {
          if (response.result?.data) {
            const payments = response.result.data;
            const mappedPayments = this.mapPaymentData(payments);
            this.cachedData = [...mappedPayments];
            this.data = mappedPayments;
            console.log(`✓ Page 1 loaded. Starting background loading...`);
            this.loadAllInBackground();
          } else {
            this.data = [];
            this.totalRecords = 0;
          }
          this.isLoading = false;
        },
        error: error => {
          this.handleError(error);
        }
      });
    }
    loadAllInBackground() {
      const currentUser = this.authService.currentUserValue;
      if (!currentUser || !currentUser.id) return;
      const userId = currentUser.id;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      const fetchNextBatch = () => {
        this.brokerService.getPremiums(userId, this.paymentStatus, batchSize, offset).subscribe({
          next: response => {
            const payments = response.result?.data || [];
            const mappedPayments = this.mapPaymentData(payments);
            allData = [...allData, ...mappedPayments];
            // total records might be available in response result, or just infer from accumulation
            if (response.result?.total_count || response.result?.count) {
              this.totalRecords = response.result.total_count || response.result.count;
            }
            if (payments.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              this.cachedData = allData;
              this.totalRecords = allData.length;
              if (this.currentPage === 1 && this.data.length === 0 && allData.length > 0) {
                this.displayCurrentPage();
              }
              console.log(`✓ Cached all ${allData.length} payments recursively.`);
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    clearCache() {
      this.cachedData = [];
    }
    displayCurrentPage() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.data = this.cachedData.slice(startIndex, endIndex).filter(p => p !== undefined);
    }
    getDisplayData() {
      if (this.hasActiveFilters) {
        return this.cachedData.filter(p => p !== undefined);
      }
      return this.data;
    }
    mapPaymentData(apiData) {
      return apiData.map(item => ({
        id: item.id || '',
        policyNumber: item.policy_number || 'N/A',
        partnerName: item.partner_name || 'N/A',
        productName: item.product_name || 'N/A',
        premiumAmount: item.premium_amount || 0,
        paymentStatus: item.payment_status || 'outstanding',
        date: item.date || item.create_date || 'N/A'
      }));
    }
    handleError(error) {
      console.error('Error loading payments:', error);
      // Check if it's a "no data found" error (which is not really an error)
      const errorMessage = error?.error?.error?.message || error?.message || '';
      if (errorMessage.includes('No premiums found') || errorMessage.includes('No payment')) {
        // This is not an error, just no data
        this.data = [];
        this.totalRecords = 0;
        this.isLoading = false;
        return;
      }
      // Real error - show notification
      this.error = 'ERROR.LOADING_DATA';
      this.isLoading = false;
      this.notificationService.error(this.appTranslate.instant('ERROR.LOADING_DATA'), errorMessage || this.appTranslate.instant('ERROR.GENERIC'));
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    onFilterChange(activeFilters) {
      this.hasActiveFilters = Object.keys(activeFilters).length > 0;
    }
    handleTableAction(event) {
      console.log('Action', event.action, event.data);
      // TODO: Implement view payment details
    }
    onExport() {
      console.log('Exporting payments...');
      // TODO: Implement export functionality
    }
    onPageChange(page) {
      this.currentPage = page;
      this.displayCurrentPage();
    }
    onPageSizeChange(size) {
      this.pageSize = size;
      this.currentPage = 1;
      this.displayCurrentPage();
    }
    static {
      this.ɵfac = function CustomerPaymentsComponent_Factory(t) {
        return new (t || CustomerPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_broker_service__WEBPACK_IMPORTED_MODULE_0__.BrokerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_3__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: CustomerPaymentsComponent,
        selectors: [["app-customer-payments"]],
        decls: 21,
        vars: 13,
        consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], ["variant", "primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "mr-2"], ["width", "20", "height", "14", "x", "2", "y", "5", "rx", "2"], ["d", "M2 10h20"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function CustomerPaymentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "app-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "rect", 6)(13, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, CustomerPaymentsComponent_div_17_Template, 2, 1, "div", 9)(18, CustomerPaymentsComponent_div_18_Template, 2, 0, "div", 10)(19, CustomerPaymentsComponent_app_dynamic_table_with_filters_19_Template, 1, 4, "app-dynamic-table-with-filters", 11)(20, CustomerPaymentsComponent_app_pagination_20_Template, 1, 3, "app-pagination", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 7, "CUSTOMER.PAYMENTS.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 9, "CUSTOMER.PAYMENTS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 11, "CUSTOMER.PAYMENTS.MAKE_PAYMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe]
      });
    }
  }
  return CustomerPaymentsComponent;
})();

/***/ }),

/***/ 6743:
/*!************************************************************************!*\
  !*** ./src/app/customer/pages/policies/customer-policies.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerPoliciesComponent: () => (/* binding */ CustomerPoliciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3955);










function CustomerPoliciesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function CustomerPoliciesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CustomerPoliciesComponent_app_dynamic_table_with_filters_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filteredDataChange", function CustomerPoliciesComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("exportData", function CustomerPoliciesComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function CustomerPoliciesComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.data)("columns", ctx_r0.columns)("showExport", true)("maxSelectOptions", 10);
  }
}
let CustomerPoliciesComponent = /*#__PURE__*/(() => {
  class CustomerPoliciesComponent {
    constructor(policyService, authService, router) {
      this.policyService = policyService;
      this.authService = authService;
      this.router = router;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadPolicies();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'policyNumber',
        label: 'Policy No',
        filterable: true,
        filterType: 'text'
      }, {
        key: 'type',
        label: 'Product Type',
        filterable: true
      }, {
        key: 'status',
        label: 'Status',
        filterable: true,
        render: row => this.renderStatus(row.status)
      }, {
        key: 'premium',
        label: 'Premium',
        filterable: false,
        render: row => `<span class="font-medium text-gray-900 dark:text-gray-100">${row.currency || 'EGP'} ${Number(row.premium).toLocaleString()}</span>`
      }, {
        key: 'expiry',
        label: 'Expiry Date',
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: 'Actions',
        filterable: false,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="download" data-id="${row.id}" title="Download Policy">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
    }
    renderStatus(status) {
      const s = status?.toLowerCase() || 'pending';
      let classes = '';
      if (['active', 'approved', 'paid'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'processing'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${status}</span>`;
    }
    loadPolicies() {
      this.isLoading = true;
      const user = this.authService.currentUserValue;
      if (!user) return;
      this.policyService.listPolicies({
        user_id: user.id,
        user_type: 'customer',
        limit: 100,
        offset: 0
      }).subscribe({
        next: response => {
          const policies = response.data || [];
          // Map to match columns
          this.data = policies.map(p => ({
            id: p.id || p.policy_number,
            policyNumber: p.policy_number,
            type: p.product_name || 'Insurance',
            status: (p.state || 'pending').toLowerCase(),
            premium: p.gross_premium || 0,
            currency: p.currency || 'EGP',
            expiry: p.effective_to_date || p.end_date
          }));
          this.isLoading = false;
        },
        error: err => {
          console.error('Error loading policies:', err);
          this.error = 'Failed to load policies';
          this.isLoading = false;
        }
      });
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/customer/policies', event.data.id]);
          break;
        case 'download':
          console.log('Download', event.data.id);
          break;
      }
    }
    onExport() {
      // Implement export logic using this.filteredData
      console.log('Exporting policies...');
    }
    static {
      this.ɵfac = function CustomerPoliciesComponent_Factory(t) {
        return new (t || CustomerPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: CustomerPoliciesComponent,
        selectors: [["app-customer-policies"]],
        decls: 20,
        vars: 12,
        consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], ["variant", "primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "mr-2"], ["d", "M5 12h14"], ["d", "M12 5v14"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "exportData", "action", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"]],
        template: function CustomerPoliciesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "path", 6)(13, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CustomerPoliciesComponent_div_17_Template, 2, 1, "div", 9)(18, CustomerPoliciesComponent_div_18_Template, 2, 0, "div", 10)(19, CustomerPoliciesComponent_app_dynamic_table_with_filters_19_Template, 1, 4, "app-dynamic-table-with-filters", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 6, "CUSTOMER.POLICIES.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 8, "CUSTOMER.POLICIES.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 10, "CUSTOMER.POLICIES.NEW_POLICY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableWithFiltersComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe]
      });
    }
  }
  return CustomerPoliciesComponent;
})();

/***/ }),

/***/ 5878:
/*!***************************************************************************!*\
  !*** ./src/app/customer/pages/policy-details/policy-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PolicyDetailsComponent: () => (/* binding */ PolicyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/chat-box/chat-box.component */ 2911);









function PolicyDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PolicyDetailsComponent_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 7)(6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Policy Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11)(13, "app-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PolicyDetailsComponent_div_1_Template_app_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.downloadPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Download PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "app-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PolicyDetailsComponent_div_1_Template_app_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.renewPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Renew Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14)(18, "app-card", 15)(19, "div", 16)(20, "div")(21, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div")(26, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div")(31, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Policy Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "app-card", 20)(36, "div", 16)(37, "div")(38, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div")(43, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div")(48, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "12 Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "app-card", 21)(53, "div", 16)(54, "div")(55, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Premium Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div")(60, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Payment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "app-card", 23)(65, "div", 24)(66, "div")(67, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Covered Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "ul", 26)(70, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Comprehensive Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Third Party Liability");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Personal Accident");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div")(86, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Policy Holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 26)(89, "p", 30)(90, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "p", 30)(94, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "p", 30)(98, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "app-chat-box", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.policy.policy_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.policy.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.policy.policy_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.policy.start_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.policy.end_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", ctx_r1.policy.premium, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.customer_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.customer_email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.customer_phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("modelName", "insurance.policy")("recordId", ctx_r1.policy.id);
  }
}
function PolicyDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loading", true);
  }
}
let PolicyDetailsComponent = /*#__PURE__*/(() => {
  class PolicyDetailsComponent {
    constructor(route, router, policyService) {
      this.route = route;
      this.router = router;
      this.policyService = policyService;
      this.policyId = '';
      this.policy = null;
      this.loading = true;
    }
    ngOnInit() {
      this.policyId = this.route.snapshot.params['id'];
      this.loadPolicy();
    }
    loadPolicy() {
      this.policyService.getPolicy(parseInt(this.policyId)).subscribe({
        next: response => {
          this.policy = response.data;
          this.loading = false;
        },
        error: err => {
          console.error('Error loading policy:', err);
          this.loading = false;
        }
      });
    }
    goBack() {
      this.router.navigate(['/dashboard/customer/policies']);
    }
    downloadPolicy() {
      console.log('Downloading policy PDF...');
    }
    renewPolicy() {
      console.log('Renewing policy...');
    }
    static {
      this.ɵfac = function PolicyDetailsComponent_Factory(t) {
        return new (t || PolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__.PolicyService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: PolicyDetailsComponent,
        selectors: [["app-policy-details"]],
        decls: 3,
        vars: 2,
        consts: [["class", "space-y-6", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], [1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], [1, "p-2", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-lg", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5"], ["d", "m12 19-7-7 7-7"], ["d", "M19 12H5"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400"], [1, "flex", "gap-3"], ["variant", "outline", 3, "click"], ["variant", "primary", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], ["title", "Policy Information"], [1, "space-y-3"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "inline-flex", "px-2", "py-1", "text-xs", "font-semibold", "rounded-full", "bg-green-100", "text-green-800", "dark:bg-green-900", "dark:text-green-200"], ["title", "Coverage Period"], ["title", "Premium Details"], [1, "text-2xl", "font-bold", "text-primary"], ["title", "Coverage Details"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "font-semibold", "text-gray-900", "dark:text-white", "mb-3"], [1, "space-y-2"], [1, "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5", "text-green-500"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-700", "dark:text-gray-300"], [1, "font-medium"], [3, "modelName", "recordId"], [1, "flex", "items-center", "justify-center", "h-96"], ["message", "Loading policy details...", 3, "loading"]],
        template: function PolicyDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PolicyDetailsComponent_div_1_Template, 102, 12, "div", 0)(2, PolicyDetailsComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.policy);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_5__.ChatBoxComponent]
      });
    }
  }
  return PolicyDetailsComponent;
})();

/***/ }),

/***/ 5382:
/*!*********************************************************************************!*\
  !*** ./src/app/customer/pages/quotation-details/quotation-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuotationDetailsComponent: () => (/* binding */ QuotationDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/selection-modal/selection-modal.component */ 2209);











function QuotationDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.successMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function QuotationDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading quotation details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function QuotationDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Error Loading Quotation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Back to Quotations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.error || "Quotation not found");
  }
}
function QuotationDetailsComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "LOST");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QuotationDetailsComponent_div_4_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_4_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showMarkLostModal = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Mark as Lost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QuotationDetailsComponent_div_4_div_95_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addon_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addon_r6, " ");
  }
}
function QuotationDetailsComponent_div_4_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Coverage Extensions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, QuotationDetailsComponent_div_4_div_95_span_4_Template, 3, 1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.quote.insurance.addons);
  }
}
function QuotationDetailsComponent_div_4_div_143_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 101)(1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Recommended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function QuotationDetailsComponent_div_4_div_143_div_1_div_40_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 109);
  }
}
function QuotationDetailsComponent_div_4_div_143_div_1_div_40_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 110);
  }
}
function QuotationDetailsComponent_div_4_div_143_div_1_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuotationDetailsComponent_div_4_div_143_div_1_div_40_div_1_i_1_Template, 1, 0, "i", 106)(2, QuotationDetailsComponent_div_4_div_143_div_1_div_40_div_1_i_2_Template, 1, 0, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", feature_r7.included);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !feature_r7.included);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", feature_r7.included ? "text-gray-700" : "text-gray-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", feature_r7.name, " ");
  }
}
function QuotationDetailsComponent_div_4_div_143_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuotationDetailsComponent_div_4_div_143_div_1_div_40_div_1_Template, 5, 4, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", plan_r8.features);
  }
}
function QuotationDetailsComponent_div_4_div_143_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuotationDetailsComponent_div_4_div_143_div_1_div_1_Template, 3, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 94)(5, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Gross Premium / Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 97)(10, "div", 98)(11, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Sum Insured");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 98)(16, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Net Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 98)(21, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Net Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 98)(26, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 98)(31, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Stamp Duty");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 98)(36, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Issue Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, QuotationDetailsComponent_div_4_div_143_div_1_div_40_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", plan_r8.recommended ? "border-primary bg-blue-50 dark:bg-blue-900/30 relative" : "border-gray-200 hover:border-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", plan_r8.recommended);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](plan_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" EGP ", (plan_r8.price || 0).toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((plan_r8.details == null ? null : plan_r8.details.sumInsured) || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ((plan_r8.details == null ? null : plan_r8.details.netRate) || 0).toFixed(3), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((plan_r8.details == null ? null : plan_r8.details.netPremium) || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((plan_r8.details == null ? null : plan_r8.details.taxes) || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((plan_r8.details == null ? null : plan_r8.details.stampDuty) || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((plan_r8.details == null ? null : plan_r8.details.fees) || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (plan_r8.features == null ? null : plan_r8.features.length) > 0);
  }
}
function QuotationDetailsComponent_div_4_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuotationDetailsComponent_div_4_div_143_div_1_Template, 41, 11, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.quote.plans);
  }
}
function QuotationDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, QuotationDetailsComponent_div_4_div_3_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Back to Quotations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 23)(8, "div", 24)(9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div")(12, "h1", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 28)(15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 33)(25, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, QuotationDetailsComponent_div_4_button_27_Template, 3, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 36)(29, "div", 37)(30, "div", 38)(31, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " Customer Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 41)(35, "div", 42)(36, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 42)(41, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 42)(47, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 42)(53, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 42)(59, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, " Tax ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 50)(65, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 52)(71, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " Insurance Coverage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 54)(75, "div")(76, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div")(81, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div")(86, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div")(91, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Sum Insured");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, QuotationDetailsComponent_div_4_div_95_Template, 5, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 38)(97, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Subject Matter - Vehicle Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 59)(101, "div", 42)(102, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Make & Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 42)(107, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 42)(112, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "Plate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 42)(117, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 42)(122, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "Chassis Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 42)(127, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div", 50)(132, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "Estimated Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "div", 38)(137, "div", 61)(138, "h3", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, " Compare Plans ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_4_Template_button_click_141_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.showComparison = !ctx_r1.showComparison);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](143, QuotationDetailsComponent_div_4_div_143_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 66)(145, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](146, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, " Comments & Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, " ChatterBox component integration pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 69)(151, "div", 70)(152, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "Total Annual Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 73)(157, "div", 74)(158, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 74)(163, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](164, "Taxes & Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](168, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](169, " Accept & Pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 77)(171, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](172, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](173, " Important Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](174, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, " This quotation is valid for 30 days from the date of creation. Prices and coverage terms are subject to change after the validity period. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.quote == null ? null : ctx_r1.quote.status) === "lost");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Quotation ", ctx_r1.quote.quotationNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.quote.customer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Created ", ctx_r1.quote.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Valid until ", ctx_r1.quote.validUntil, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "bg-" + ctx_r1.statusConfig.color + "-100 text-" + ctx_r1.statusConfig.color + "-800");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.statusConfig.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isBroker && (ctx_r1.quote == null ? null : ctx_r1.quote.status) !== "lost");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.customer.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.customer.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.customer.taxId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.customer.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.insurance.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.insurance.coveragePlan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.insurance.coveragePeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", (ctx_r1.quote.insurance.sumInsured || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.quote.insurance.addons == null ? null : ctx_r1.quote.insurance.addons.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.quote.vehicle.make, " ", ctx_r1.quote.vehicle.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.vehicle.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.vehicle.plateNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.vehicle.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.vehicle.chassisNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.quote.vehicle.usage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", (ctx_r1.quote.vehicle.value || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.showComparison ? "Hide" : "Show", " Comparison ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.showComparison);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((ctx_r1.quote == null ? null : ctx_r1.quote.premium == null ? null : ctx_r1.quote.premium.total) || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", (ctx_r1.calculateSubtotal() || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", ((ctx_r1.quote.premium.total || 0) - (ctx_r1.calculateSubtotal() || 0)).toLocaleString(), "");
  }
}
function QuotationDetailsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 111)(1, "div", 112)(2, "h2", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Mark Quotation as Lost");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 114)(5, "div")(6, "app-selection-modal", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("valueChange", function QuotationDetailsComponent_div_5_Template_app_selection_modal_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.selectedReason, $event) || (ctx_r1.selectedReason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div")(8, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Feedback/Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "textarea", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function QuotationDetailsComponent_div_5_Template_textarea_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.lostFeedback, $event) || (ctx_r1.lostFeedback = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 118)(12, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_5_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.showMarkLostModal = false;
      ctx_r1.selectedReason = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.lostFeedback = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuotationDetailsComponent_div_5_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.handleMarkAsLost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("value", ctx_r1.selectedReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r1.lostReasons)("title", "Select Lost Reason")("subtitle", "Why was this quotation lost?")("placeholder", "Select a reason...")("layout", "list")("displayKey", "name")("valueKey", "id")("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.lostFeedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.submittingLost);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.submittingLost);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.submittingLost ? "Processing..." : "Mark as Lost", " ");
  }
}
let QuotationDetailsComponent = /*#__PURE__*/(() => {
  class QuotationDetailsComponent {
    constructor(route, router, crmService, authService, notificationService) {
      this.route = route;
      this.router = router;
      this.crmService = crmService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.quoteId = '';
      this.quote = null;
      this.loading = true;
      this.error = null;
      this.showComparison = false;
      this.showMarkLostModal = false;
      this.lostReasons = [];
      this.selectedReason = '';
      this.lostFeedback = '';
      this.submittingLost = false;
      this.successMessage = null;
      this.refreshTrigger = 0;
    }
    ngOnInit() {
      this.quoteId = this.route.snapshot.params['id'];
      this.loadQuotation();
      this.loadLostReasons();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    loadQuotation() {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.quoteId) return;
        try {
          _this.loading = true;
          _this.error = null;
          const response = yield _this.crmService.getOpportunity(Number(_this.quoteId)).toPromise();
          const apiData = response?.result?.data || response?.data || response;
          if (apiData && apiData.id) {
            // Map API fields to component structure
            _this.quote = {
              id: apiData.id || _this.quoteId,
              quotationNumber: apiData.opportunity_number || apiData.id || _this.quoteId,
              date: apiData.creation_date || apiData.created_at || 'N/A',
              validUntil: apiData.valid_until || apiData.expiry_date || 'N/A',
              status: (apiData.state || 'draft').toLowerCase(),
              stage: apiData.stage_id ? apiData.stage_id[1] || 'New' : apiData.stage || 'New',
              createdBy: apiData.created_by || apiData.agent_name || 'N/A',
              customer: {
                name: apiData.contact_name || apiData.partner_name || 'N/A',
                phone: apiData.customer_phone || apiData.phone || 'N/A',
                email: apiData.customer_email || apiData.email || 'N/A',
                type: apiData.issuing_type_name || apiData.partner_company || 'N/A',
                taxId: apiData.tax_id || apiData.vat_number || 'N/A',
                address: apiData.customer_address || apiData.address || 'N/A'
              },
              insurance: {
                type: apiData.insurance_type || 'Motor Insurance',
                coveragePlan: apiData.coverage_plan || apiData.product_name || 'Comprehensive',
                coveragePeriod: apiData.coverage_period || '12 Months',
                sumInsured: apiData.sum_insured || 0,
                deductible: apiData.deductible || 0,
                addons: apiData.add_ons || []
              },
              vehicle: {
                make: apiData.vehicle_make || apiData.make || 'N/A',
                model: apiData.vehicle_model || apiData.model || 'N/A',
                year: apiData.vehicle_year || apiData.year || 'N/A',
                value: apiData.vehicle_sum_insured || 0,
                plateNumber: apiData.plate_number || apiData.plate || 'N/A',
                chassisNumber: apiData.chassis_number || apiData.chassis || 'N/A',
                color: apiData.vehicle_color || 'N/A',
                usage: apiData.vehicle_usage || 'Private'
              },
              premium: {
                base: apiData.base_premium || apiData.net_premium || 0,
                riskLoading: apiData.risk_loading || 0,
                discounts: apiData.discounts || [],
                addonCharges: apiData.addon_charges || [],
                subtotal: apiData.subtotal || 0,
                taxes: apiData.taxes || [],
                fees: apiData.fees || 0,
                total: apiData.total_premium || apiData.gross_premium || 0,
                paymentOptions: apiData.payment_options || []
              },
              plans: (apiData.opportunity_proposal || apiData.plans || []).map(p => ({
                id: p.id,
                name: p.proposal_reference || p.product_name || `Option ${p.id}`,
                price: p.proposal_gross_premium || p.price || 0,
                recommended: p.recommended || false,
                details: {
                  reference: p.proposal_reference || 'N/A',
                  sumInsured: p.proposal_sum_insured || 0,
                  netRate: p.proposal_net_rate || 0,
                  netPremium: p.proposal_net_premium || 0,
                  taxes: p.proposal_tax_amount || 0,
                  fees: p.proposal_issue_fees || 0,
                  stampDuty: p.proposal_stamp_duty || 0,
                  grossPremium: p.proposal_gross_premium || 0
                },
                features: p.features || []
              })),
              conditions: apiData.opportunity_conditions || [],
              documents: apiData.opportunity_documents || [],
              activity: apiData.activity_log || []
            };
          } else {
            _this.error = 'Quotation data not found';
          }
        } catch (err) {
          console.error('Error fetching quotation:', err);
          _this.error = err?.message || 'Failed to load quotation';
          _this.notificationService.error(_this.error || 'Failed to load quotation');
        } finally {
          _this.loading = false;
        }
      })();
    }
    loadLostReasons() {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const response = yield _this2.crmService.getLostReasons().toPromise();
          // Handle different response structures
          let reasons = [];
          if (response && response.data) {
            if (Array.isArray(response.data.lost_reasons)) {
              reasons = response.data.lost_reasons;
            } else if (Array.isArray(response.data)) {
              reasons = response.data;
            } else if (response.data.result) {
              if (Array.isArray(response.data.result)) {
                reasons = response.data.result;
              } else if (response.data.result.data && Array.isArray(response.data.result.data)) {
                reasons = response.data.result.data;
              }
            } else if (response.data.data && Array.isArray(response.data.data)) {
              reasons = response.data.data;
            }
          }
          _this2.lostReasons = reasons;
        } catch (err) {
          console.error('Error fetching lost reasons:', err);
          _this2.notificationService.error('Failed to load lost reasons');
        }
      })();
    }
    handleMarkAsLost() {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this3.selectedReason) {
          _this3.notificationService.warning('Please select a reason');
          return;
        }
        try {
          _this3.submittingLost = true;
          const reasonId = _this3.selectedReason.id || _this3.selectedReason;
          yield _this3.crmService.markLost(Number(_this3.quoteId), reasonId, _this3.lostFeedback).toPromise();
          _this3.showMarkLostModal = false;
          _this3.successMessage = 'Quotation marked as lost successfully';
          _this3.notificationService.success('Quotation marked as lost successfully');
          // Auto-hide success message after 5 seconds
          setTimeout(() => _this3.successMessage = null, 5000);
          // Update quote status
          if (_this3.quote) {
            _this3.quote.status = 'lost';
          }
        } catch (err) {
          console.error('Error marking quotation as lost:', err);
          _this3.notificationService.error('Failed to mark quotation as lost: ' + (err?.message || 'Unknown error'));
        } finally {
          _this3.submittingLost = false;
        }
      })();
    }
    calculateSubtotal() {
      if (!this.quote) return 0;
      let subtotal = this.quote.premium.base + this.quote.premium.riskLoading;
      (this.quote.premium.discounts || []).forEach(d => subtotal += d.amount);
      (this.quote.premium.addonCharges || []).forEach(a => subtotal += a.amount);
      return subtotal;
    }
    getStatusConfig(status) {
      const configs = {
        draft: {
          color: 'gray',
          label: 'Draft'
        },
        sent: {
          color: 'blue',
          label: 'Sent'
        },
        viewed: {
          color: 'purple',
          label: 'Viewed'
        },
        accepted: {
          color: 'green',
          label: 'Accepted'
        },
        rejected: {
          color: 'red',
          label: 'Rejected'
        },
        expired: {
          color: 'orange',
          label: 'Expired'
        },
        lost: {
          color: 'red',
          label: 'Lost'
        }
      };
      const config = configs[status] || configs.draft;
      return {
        ...config,
        label: this.quote?.stage || config.label
      };
    }
    goBack() {
      const user = this.authService.currentUserValue;
      const basePath = user?.role === 'broker' ? '/dashboard/broker' : '/dashboard/customer';
      this.router.navigate([`${basePath}/quotations`]);
    }
    get isBroker() {
      return this.authService.currentUserValue?.role === 'broker';
    }
    get statusConfig() {
      return this.getStatusConfig(this.quote?.status || 'draft');
    }
    onMessageSent() {
      this.refreshTrigger++;
    }
    static {
      this.ɵfac = function QuotationDetailsComponent_Factory(t) {
        return new (t || QuotationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_1__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: QuotationDetailsComponent,
        selectors: [["app-quotation-details"]],
        decls: 6,
        vars: 5,
        consts: [["class", "fixed top-0 left-0 right-0 z-40 animate-slideDown", 4, "ngIf"], ["class", "flex items-center justify-center min-h-screen", 4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], ["class", "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "right-0", "z-40", "animate-slideDown"], [1, "bg-gradient-to-r", "from-green-600", "to-green-700", "text-white", "px-6", "py-4", "flex", "items-center", "gap-3", "shadow-lg"], ["data-lucide", "check-circle", 1, "w-5", "h-5", "flex-shrink-0"], [1, "font-medium"], [1, "ml-auto", "text-green-100", "hover:text-white", "transition-colors", 3, "click"], [1, "flex", "items-center", "justify-center", "min-h-screen"], [1, "text-center"], [1, "text-gray-600", "dark:text-gray-300", "mt-4"], ["data-lucide", "alert-circle", 1, "h-12", "w-12", "text-red-500", "mx-auto", "mb-4"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-300", "mb-4"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "transition-colors", "flex", "items-center", "gap-2", "mx-auto", 3, "click"], ["data-lucide", "chevron-left", 1, "w-4", "h-4"], [1, "space-y-8"], [1, "mb-8", "animate-fadeIn"], [1, "relative"], ["class", "corner-ribbon", 4, "ngIf"], [1, "flex", "items-center", "text-gray-500", "dark:text-gray-400", "hover:text-primary", "mb-4", "transition-all", "duration-300", "text-sm", 3, "click"], ["data-lucide", "arrow-left", 1, "w-4", "h-4", "mr-1"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "w-14", "h-14", "bg-gradient-to-br", "from-purple-500", "to-indigo-600", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "shadow-lg"], ["data-lucide", "file-text", 1, "w-7", "h-7"], [1, "text-3xl", "font-bold", "text-navy", "dark:text-white", "mb-1", "flex", "items-center", "gap-3"], [1, "flex", "flex-wrap", "items-center", "gap-3", "text-sm", "text-gray-600", "dark:text-gray-300"], [1, "flex", "items-center", "gap-1"], ["data-lucide", "user", 1, "w-3.5", "h-3.5"], ["data-lucide", "calendar", 1, "w-3.5", "h-3.5"], ["data-lucide", "clock", 1, "w-3.5", "h-3.5"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-semibold", "capitalize", "flex", "items-center", "gap-2", 3, "ngClass"], ["class", "px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors flex items-center gap-2", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300", "animate-fadeIn"], [1, "font-bold", "text-navy", "dark:text-white", "mb-4", "flex", "items-center", "gap-2"], ["data-lucide", "user", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "text-sm"], [1, "space-y-1"], [1, "text-gray-500", "dark:text-gray-400"], [1, "font-medium", "text-navy", "dark:text-white"], [1, "text-gray-500", "dark:text-gray-400", "flex", "items-center", "gap-1"], ["data-lucide", "phone", 1, "w-3.5", "h-3.5"], ["data-lucide", "mail", 1, "w-3.5", "h-3.5"], ["data-lucide", "building", 1, "w-3.5", "h-3.5"], ["data-lucide", "hash", 1, "w-3.5", "h-3.5"], [1, "space-y-1", "md:col-span-2"], ["data-lucide", "map-pin", 1, "w-3.5", "h-3.5"], [1, "bg-gradient-to-br", "from-blue-50", "to-indigo-50", "dark:from-blue-900/20", "dark:to-indigo-900/20", "p-6", "rounded-xl", "border", "border-blue-100", "dark:border-blue-700", "animate-fadeIn"], ["data-lucide", "shield", 1, "w-5", "h-5", "text-blue-600"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "mb-4"], [1, "text-xs", "text-gray-600", "dark:text-gray-300", "mb-1"], [1, "font-semibold", "text-navy", "dark:text-white"], [4, "ngIf"], ["data-lucide", "car", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "text-sm"], [1, "font-medium", "text-navy", "dark:text-white", "font-mono", "text-xs"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "font-bold", "text-navy", "dark:text-white", "flex", "items-center", "gap-2"], ["data-lucide", "award", 1, "w-5", "h-5", "text-primary"], [1, "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", "text-sm", 3, "click"], ["class", "grid grid-cols-1 md:grid-cols-3 gap-4", 4, "ngIf"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], ["data-lucide", "message-square", 1, "w-5", "h-5", "text-primary"], [1, "text-gray-500", "dark:text-gray-400", "text-sm"], [1, "space-y-6"], [1, "bg-gradient-to-br", "from-purple-600", "to-indigo-700", "p-6", "rounded-xl", "text-white", "shadow-lg", "animate-fadeIn"], [1, "text-purple-200", "text-sm", "mb-1"], [1, "text-3xl", "font-bold", "mb-6"], [1, "space-y-2", "text-sm", "text-purple-100", "mb-6"], [1, "flex", "justify-between"], [1, "w-full", "bg-white", "text-purple-600", "hover:bg-purple-50", "dark:bg-purple-900/30", "font-semibold", "px-4", "py-2", "rounded-lg", "transition-colors", "flex", "items-center", "justify-center", "gap-2"], ["data-lucide", "credit-card", 1, "w-4", "h-4"], [1, "bg-blue-50", "dark:bg-blue-900/30", "p-6", "rounded-xl", "border", "border-blue-100", "animate-fadeIn"], [1, "font-bold", "text-blue-900", "mb-2", "flex", "items-center", "gap-2"], ["data-lucide", "alert-circle", 1, "w-5", "h-5"], [1, "text-sm", "text-blue-800", "leading-relaxed"], [1, "corner-ribbon"], [1, "px-4", "py-2", "border", "border-red-200", "text-red-600", "rounded-lg", "hover:bg-red-50", "dark:hover:bg-red-900/30", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["data-lucide", "x-circle", 1, "w-4", "h-4"], [1, "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-3 py-1 bg-white text-blue-700 rounded-full text-xs font-medium flex items-center gap-1", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1", "bg-white", "text-blue-700", "rounded-full", "text-xs", "font-medium", "flex", "items-center", "gap-1"], ["data-lucide", "check", 1, "w-3", "h-3"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], ["class", "border-2 rounded-xl p-6 transition-all hover:shadow-lg", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "border-2", "rounded-xl", "p-6", "transition-all", "hover:shadow-lg", 3, "ngClass"], ["class", "absolute -top-3 left-1/2 transform -translate-x-1/2", 4, "ngIf"], [1, "font-bold", "text-navy", "dark:text-white", "text-lg", "mb-2"], [1, "mb-6"], [1, "text-3xl", "font-bold", "text-primary"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "font-normal"], [1, "space-y-3", "mb-6", "border-t", "border-b", "py-4"], [1, "flex", "justify-between", "text-sm"], [1, "text-gray-500"], ["class", "space-y-3", 4, "ngIf"], [1, "absolute", "-top-3", "left-1/2", "transform", "-translate-x-1/2"], [1, "px-3", "py-1", "bg-primary", "text-white", "rounded-full", "text-xs", "font-bold"], [1, "space-y-3"], ["class", "flex items-center gap-2 text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "text-sm"], ["data-lucide", "check-circle", "class", "w-4 h-4 text-green-600 flex-shrink-0", 4, "ngIf"], ["data-lucide", "x-circle", "class", "w-4 h-4 text-gray-300 flex-shrink-0", 4, "ngIf"], [3, "ngClass"], ["data-lucide", "check-circle", 1, "w-4", "h-4", "text-green-600", "flex-shrink-0"], ["data-lucide", "x-circle", 1, "w-4", "h-4", "text-gray-300", "flex-shrink-0"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-xl", "max-w-md", "w-full", "p-6", "animate-fadeIn"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-4"], [1, "space-y-4"], ["label", "Reason for Losing", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "displayKey", "valueKey", "required"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], ["placeholder", "Enter any additional feedback...", "rows", "4", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "dark:bg-gray-700", "dark:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-primary", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3", "mt-6"], [1, "flex-1", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click", "disabled"], [1, "flex-1", "px-4", "py-2", "bg-red-600", "hover:bg-red-700", "text-white", "rounded-lg", "transition-colors", 3, "click", "disabled"]],
        template: function QuotationDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QuotationDetailsComponent_div_1_Template, 7, 1, "div", 0)(2, QuotationDetailsComponent_div_2_Template, 5, 0, "div", 1)(3, QuotationDetailsComponent_div_3_Template, 10, 1, "div", 1)(4, QuotationDetailsComponent_div_4_Template, 176, 32, "div", 2)(5, QuotationDetailsComponent_div_5_Template, 16, 13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.successMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.quote);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showMarkLostModal);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__.DashboardLayoutComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_6__.SelectionModalComponent],
        styles: ["\n\n.corner-ribbon[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 12px;\n    right: -46px;\n    z-index: 50;\n    background: #c0392b;\n    color: #fff;\n    padding: 8px 80px;\n    transform: rotate(45deg);\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n    font-weight: 700;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    border-radius: 2px;\n}"]
      });
    }
  }
  return QuotationDetailsComponent;
})();

/***/ }),

/***/ 3199:
/*!****************************************************************************!*\
  !*** ./src/app/customer/pages/quotations/customer-quotations.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerQuotationsComponent: () => (/* binding */ CustomerQuotationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3955);










function CustomerQuotationsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function CustomerQuotationsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CustomerQuotationsComponent_app_dynamic_table_with_filters_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filteredDataChange", function CustomerQuotationsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("exportData", function CustomerQuotationsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function CustomerQuotationsComponent_app_dynamic_table_with_filters_19_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.data)("columns", ctx_r0.columns)("showExport", true)("maxSelectOptions", 10);
  }
}
let CustomerQuotationsComponent = /*#__PURE__*/(() => {
  class CustomerQuotationsComponent {
    constructor(crmService, authService, router) {
      this.crmService = crmService;
      this.authService = authService;
      this.router = router;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadQuotations();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'quoteNumber',
        label: 'Quote No',
        filterable: true,
        filterType: 'text'
      }, {
        key: 'product',
        label: 'Product',
        filterable: true
      }, {
        key: 'status',
        label: 'Status',
        filterable: true,
        render: row => this.renderStatus(row.status)
      }, {
        key: 'premium',
        label: 'Premium',
        filterable: false,
        render: row => `<span class="font-medium text-gray-900 dark:text-gray-100">${row.currency || 'EGP'} ${Number(row.premium).toLocaleString()}</span>`
      }, {
        key: 'validUntil',
        label: 'Valid Until',
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: 'Actions',
        filterable: false,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
    }
    renderStatus(status) {
      const s = status?.toLowerCase() || 'draft';
      let classes = '';
      if (['accepted', 'approved', 'won'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['sent', 'pending', 'negotiation'].includes(s)) {
        classes = 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      } else if (['draft'].includes(s)) {
        classes = 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${status}</span>`;
    }
    loadQuotations() {
      this.isLoading = true;
      const user = this.authService.currentUserValue;
      if (!user) return;
      this.crmService.listOpportunities({
        user_id: user.id,
        user_type: 'customer',
        limit: 100,
        offset: 0
      }).subscribe({
        next: response => {
          const quotes = response.data || [];
          // Map to match columns
          this.data = quotes.map(q => ({
            id: q.id || q.quotation_number,
            quoteNumber: q.quotation_number || q.name || 'N/A',
            product: q.product_name || 'General',
            status: (q.stage_id || q.status || 'draft').toLowerCase(),
            premium: q.expected_revenue || 0,
            currency: q.currency || 'EGP',
            validUntil: q.date_deadline || 'N/A'
          }));
          this.isLoading = false;
        },
        error: err => {
          console.error('Error loading quotations:', err);
          this.error = 'Failed to load quotations';
          this.isLoading = false;
        }
      });
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/customer/quotations', event.data.id]);
          break;
      }
    }
    onExport() {
      console.log('Exporting quotations...');
    }
    static {
      this.ɵfac = function CustomerQuotationsComponent_Factory(t) {
        return new (t || CustomerQuotationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_0__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: CustomerQuotationsComponent,
        selectors: [["app-customer-quotations"]],
        decls: 20,
        vars: 12,
        consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], ["variant", "primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "mr-2"], ["d", "M5 12h14"], ["d", "M12 5v14"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "exportData", "action", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"]],
        template: function CustomerQuotationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "path", 6)(13, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CustomerQuotationsComponent_div_17_Template, 2, 1, "div", 9)(18, CustomerQuotationsComponent_div_18_Template, 2, 0, "div", 10)(19, CustomerQuotationsComponent_app_dynamic_table_with_filters_19_Template, 1, 4, "app-dynamic-table-with-filters", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 6, "CUSTOMER.QUOTATIONS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 8, "CUSTOMER.QUOTATIONS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 10, "CUSTOMER.QUOTATIONS.NEW_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableWithFiltersComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe]
      });
    }
  }
  return CustomerQuotationsComponent;
})();

/***/ })

}]);