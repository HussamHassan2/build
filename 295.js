"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[295],{

/***/ 9526:
/*!*************************************************!*\
  !*** ./src/app/broker/broker-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerRoutingModule: () => (/* binding */ BrokerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_dashboard_broker_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/broker-dashboard.component */ 3949);
/* harmony import */ var _pages_clients_broker_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/clients/broker-clients.component */ 4637);
/* harmony import */ var _pages_policies_broker_policies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/policies/broker-policies.component */ 5491);
/* harmony import */ var _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/quotations/broker-quotations.component */ 2119);
/* harmony import */ var _pages_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/client-details/client-details.component */ 857);
/* harmony import */ var _pages_policy_details_broker_policy_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/policy-details/broker-policy-details.component */ 1439);
/* harmony import */ var _pages_quote_flow_quote_flow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/quote-flow/quote-flow.component */ 3067);
/* harmony import */ var _pages_commissions_commissions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/commissions/commissions.component */ 2011);
/* harmony import */ var _pages_claims_broker_claims_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/claims/broker-claims.component */ 915);
/* harmony import */ var _pages_claim_details_broker_claim_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/claim-details/broker-claim-details.component */ 2199);
/* harmony import */ var _shared_pages_file_claim_file_claim_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pages/file-claim/file-claim.component */ 5475);
/* harmony import */ var _pages_premiums_broker_premiums_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/premiums/broker-premiums.component */ 5527);
/* harmony import */ var _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/pages/profile/profile.component */ 1855);
/* harmony import */ var _shared_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/pages/settings/settings.component */ 4879);
/* harmony import */ var _pages_quotation_details_broker_quotation_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/quotation-details/broker-quotation-details.component */ 1815);
/* harmony import */ var _pages_endorsement_broker_endorsement_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/endorsement/broker-endorsement.component */ 7829);
/* harmony import */ var _pages_due_renewal_policies_due_renewal_policies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/due-renewal-policies/due-renewal-policies.component */ 409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7705);




















const routes = [{
  path: '',
  component: _pages_dashboard_broker_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.BrokerDashboardComponent
}, {
  path: 'clients',
  component: _pages_clients_broker_clients_component__WEBPACK_IMPORTED_MODULE_1__.BrokerClientsComponent
}, {
  path: 'clients/:id',
  component: _pages_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_4__.ClientDetailsComponent
}, {
  path: 'policies',
  component: _pages_policies_broker_policies_component__WEBPACK_IMPORTED_MODULE_2__.BrokerPoliciesComponent
}, {
  path: 'due-renewal-policies',
  component: _pages_due_renewal_policies_due_renewal_policies_component__WEBPACK_IMPORTED_MODULE_16__.DueRenewalPoliciesComponent
}, {
  path: 'policies/:id',
  component: _pages_policy_details_broker_policy_details_component__WEBPACK_IMPORTED_MODULE_5__.BrokerPolicyDetailsComponent
}, {
  path: 'endorsement/:id',
  component: _pages_endorsement_broker_endorsement_component__WEBPACK_IMPORTED_MODULE_15__.BrokerEndorsementComponent
}, {
  path: 'quotations',
  component: _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_3__.BrokerQuotationsComponent
}, {
  path: 'quotations/renewal-requests',
  component: _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_3__.BrokerQuotationsComponent,
  data: {
    filterType: 'renewal'
  }
}, {
  path: 'quotations/endorsement-requests',
  component: _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_3__.BrokerQuotationsComponent,
  data: {
    filterType: 'endorsement'
  }
}, {
  path: 'quotations/lost-requests',
  component: _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_3__.BrokerQuotationsComponent,
  data: {
    filterType: 'lost'
  }
}, {
  path: 'quotations/:id',
  component: _pages_quotation_details_broker_quotation_details_component__WEBPACK_IMPORTED_MODULE_14__.BrokerQuotationDetailsComponent
}, {
  path: 'quote/new',
  component: _pages_quote_flow_quote_flow_component__WEBPACK_IMPORTED_MODULE_6__.QuoteFlowComponent
}, {
  path: 'commissions',
  component: _pages_commissions_commissions_component__WEBPACK_IMPORTED_MODULE_7__.CommissionsComponent
}, {
  path: 'claims',
  component: _pages_claims_broker_claims_component__WEBPACK_IMPORTED_MODULE_8__.BrokerClaimsComponent
}, {
  path: 'claims/new',
  component: _shared_pages_file_claim_file_claim_component__WEBPACK_IMPORTED_MODULE_10__.FileClaimComponent
}, {
  path: 'claims/:id',
  component: _pages_claim_details_broker_claim_details_component__WEBPACK_IMPORTED_MODULE_9__.BrokerClaimDetailsComponent
}, {
  path: 'premiums',
  component: _pages_premiums_broker_premiums_component__WEBPACK_IMPORTED_MODULE_11__.BrokerPremiumsComponent
}, {
  path: 'profile',
  component: _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__.ProfileComponent
}, {
  path: 'settings',
  component: _shared_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__.SettingsComponent
}];
let BrokerRoutingModule = /*#__PURE__*/(() => {
  class BrokerRoutingModule {
    static {
      this.ɵfac = function BrokerRoutingModule_Factory(t) {
        return new (t || BrokerRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: BrokerRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
      });
    }
  }
  return BrokerRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](BrokerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 3295:
/*!*****************************************!*\
  !*** ./src/app/broker/broker.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerModule: () => (/* binding */ BrokerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _broker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker-routing.module */ 9526);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _components_program_selector_program_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/program-selector/program-selector.component */ 5187);
/* harmony import */ var _pages_dashboard_broker_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/broker-dashboard.component */ 3949);
/* harmony import */ var _pages_clients_broker_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/clients/broker-clients.component */ 4637);
/* harmony import */ var _pages_policies_broker_policies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/policies/broker-policies.component */ 5491);
/* harmony import */ var _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/quotations/broker-quotations.component */ 2119);
/* harmony import */ var _pages_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/client-details/client-details.component */ 857);
/* harmony import */ var _pages_policy_details_broker_policy_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/policy-details/broker-policy-details.component */ 1439);
/* harmony import */ var _pages_quote_flow_quote_flow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/quote-flow/quote-flow.component */ 3067);
/* harmony import */ var _pages_commissions_commissions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/commissions/commissions.component */ 2011);
/* harmony import */ var _pages_claims_broker_claims_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/claims/broker-claims.component */ 915);
/* harmony import */ var _pages_claim_details_broker_claim_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/claim-details/broker-claim-details.component */ 2199);
/* harmony import */ var _pages_premiums_broker_premiums_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/premiums/broker-premiums.component */ 5527);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _pages_quotation_details_broker_quotation_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/quotation-details/broker-quotation-details.component */ 1815);
/* harmony import */ var _pages_endorsement_broker_endorsement_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/endorsement/broker-endorsement.component */ 7829);
/* harmony import */ var _pages_due_renewal_policies_due_renewal_policies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/due-renewal-policies/due-renewal-policies.component */ 409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7705);






















let BrokerModule = /*#__PURE__*/(() => {
  class BrokerModule {
    static {
      this.ɵfac = function BrokerModule_Factory(t) {
        return new (t || BrokerModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: BrokerModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _broker_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrokerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _components_program_selector_program_selector_component__WEBPACK_IMPORTED_MODULE_2__.ProgramSelectorComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_20__.LucideAngularModule.pick({
          Shield: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Shield,
          User: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.User,
          FileText: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.FileText,
          Calendar: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Calendar,
          CheckCircle: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.CheckCircle,
          Download: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Download,
          ChevronRight: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.ChevronRight,
          DollarSign: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.DollarSign,
          CreditCard: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.CreditCard,
          Phone: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Phone,
          Mail: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Mail,
          MapPin: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.MapPin,
          Car: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Car,
          Award: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Award,
          TrendingUp: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.TrendingUp,
          History: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.History,
          Clock: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Clock,
          AlertCircle: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.AlertCircle,
          ChevronLeft: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.ChevronLeft,
          Plus: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Plus,
          Search: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Search,
          Filter: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Filter,
          ArrowRight: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.ArrowRight,
          Trash2: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Trash2,
          Edit: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Edit,
          Eye: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Eye,
          X: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.X,
          UploadCloud: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.UploadCloud,
          File: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.File,
          RefreshCw: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.RefreshCw,
          Home: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Home,
          Settings: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Settings,
          LogOut: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.LogOut,
          Menu: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Menu,
          Bell: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Bell,
          AlertTriangle: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.AlertTriangle,
          Paperclip: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Paperclip,
          Loader2: lucide_angular__WEBPACK_IMPORTED_MODULE_20__.Loader2
        })]
      });
    }
  }
  return BrokerModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](BrokerModule, {
    declarations: [_pages_dashboard_broker_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.BrokerDashboardComponent, _pages_clients_broker_clients_component__WEBPACK_IMPORTED_MODULE_4__.BrokerClientsComponent, _pages_policies_broker_policies_component__WEBPACK_IMPORTED_MODULE_5__.BrokerPoliciesComponent, _pages_quotations_broker_quotations_component__WEBPACK_IMPORTED_MODULE_6__.BrokerQuotationsComponent, _pages_quotation_details_broker_quotation_details_component__WEBPACK_IMPORTED_MODULE_14__.BrokerQuotationDetailsComponent, _pages_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_7__.ClientDetailsComponent, _pages_policy_details_broker_policy_details_component__WEBPACK_IMPORTED_MODULE_8__.BrokerPolicyDetailsComponent, _pages_quote_flow_quote_flow_component__WEBPACK_IMPORTED_MODULE_9__.QuoteFlowComponent, _pages_commissions_commissions_component__WEBPACK_IMPORTED_MODULE_10__.CommissionsComponent, _pages_claims_broker_claims_component__WEBPACK_IMPORTED_MODULE_11__.BrokerClaimsComponent, _pages_claim_details_broker_claim_details_component__WEBPACK_IMPORTED_MODULE_12__.BrokerClaimDetailsComponent, _pages_premiums_broker_premiums_component__WEBPACK_IMPORTED_MODULE_13__.BrokerPremiumsComponent, _pages_endorsement_broker_endorsement_component__WEBPACK_IMPORTED_MODULE_15__.BrokerEndorsementComponent, _pages_due_renewal_policies_due_renewal_policies_component__WEBPACK_IMPORTED_MODULE_16__.DueRenewalPoliciesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _broker_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrokerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _components_program_selector_program_selector_component__WEBPACK_IMPORTED_MODULE_2__.ProgramSelectorComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_20__.LucideAngularModule]
  });
})();

/***/ }),

/***/ 2199:
/*!******************************************************************************!*\
  !*** ./src/app/broker/pages/claim-details/broker-claim-details.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerClaimDetailsComponent: () => (/* binding */ BrokerClaimDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/claim.service */ 4644);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/chat-box/chat-box.component */ 2911);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3955);












const _c0 = a0 => ({
  "rotate-180": a0
});
function BrokerClaimDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 14)(4, "div", 15)(5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i-lucide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 19)(12, "div", 20)(13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i-lucide", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div")(16, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 25)(22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i-lucide", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i-lucide", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 30)(31, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i-lucide", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, "CLAIMS.DETAILS.BACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.claimNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 12, "CLAIMS.DETAILS.TITLE"), "", ctx_r1.claim.claimNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.claimType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.claim.state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Incident: ", ctx_r1.claim.lossDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.claim.policy.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.getStatusClass(ctx_r1.claim.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.claim.state, " ");
  }
}
function BrokerClaimDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 33);
  }
}
function BrokerClaimDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 33);
  }
}
function BrokerClaimDetailsComponent_div_15_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i-lucide", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, "CLAIMS.DETAILS.OBLIGATION_PROCESSING"), " ");
  }
}
function BrokerClaimDetailsComponent_div_15_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 82)(9, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82)(15, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 82)(21, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 9, "CLAIMS.DETAILS.CLAIMANT.NAME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", ctx_r1.claim.claimant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.claimant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 11, "CLAIMS.DETAILS.CLAIMANT.CODE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.claimant.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 13, "CLAIMS.DETAILS.CLAIMANT.MOBILE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.claimant.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 15, "CLAIMS.DETAILS.CLAIMANT.BENEFICIARY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.claimant.beneficiary, " ");
  }
}
function BrokerClaimDetailsComponent_div_15_div_114_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 82)(9, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82)(15, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 6, "CLAIMS.DETAILS.INTIMATOR.NAME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.intimator.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 8, "CLAIMS.DETAILS.INTIMATOR.CONTACT"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.intimator.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 10, "CLAIMS.DETAILS.INTIMATOR.RELATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.intimator.relation, " ");
  }
}
function BrokerClaimDetailsComponent_div_15_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_div_114_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isIntimatorExpanded = !ctx_r1.isIntimatorExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i-lucide", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, BrokerClaimDetailsComponent_div_15_div_114_div_7_Template, 20, 12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "CLAIMS.DETAILS.INTIMATOR.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx_r1.isIntimatorExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isIntimatorExpanded);
  }
}
function BrokerClaimDetailsComponent_div_15_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 82)(9, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82)(15, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 82)(21, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 82)(27, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 82)(33, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 15, "CLAIMS.DETAILS.POLICY.NUMBER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.policy.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 17, "CLAIMS.DETAILS.POLICY.PRODUCT_LOB"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.policy.type, " / ", ctx_r1.claim.policy.lob, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 19, "CLAIMS.DETAILS.POLICY.BROKER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.policy.brokerName, " (", ctx_r1.claim.policy.brokerCode, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 21, "CLAIMS.DETAILS.POLICY.PAYMENT_STATUS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.policy.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 23, "CLAIMS.DETAILS.POLICY.EFFECTIVE_DATES"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.policy.effectiveFrom, " - ", ctx_r1.claim.policy.effectiveTo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 25, "CLAIMS.DETAILS.POLICY.SOURCE_BUSINESS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.policy.sourceOfBusiness);
  }
}
function BrokerClaimDetailsComponent_div_15_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 82)(9, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82)(15, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 82)(21, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 9, "CLAIMS.DETAILS.DRIVER.NAME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.driver.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 11, "CLAIMS.DETAILS.DRIVER.BIRTH_DATE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.driver.birthDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 13, "CLAIMS.DETAILS.DRIVER.LICENSE_TYPE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.driver.licenceType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 15, "CLAIMS.DETAILS.DRIVER.LICENSE_PERIOD"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.driver.licenceStart, " - ", ctx_r1.claim.driver.licenceExpiry, "");
  }
}
function BrokerClaimDetailsComponent_div_15_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 90)(2, "div", 82)(3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 82)(9, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82)(15, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 82)(21, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 82)(27, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 82)(33, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 82)(39, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 16, "CLAIMS.DETAILS.VEHICLE.MAKE_MODEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.vehicle.make, " ", ctx_r1.claim.vehicle.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 18, "CLAIMS.DETAILS.VEHICLE.PLATE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.claim.vehicle.plateNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 20, "CLAIMS.DETAILS.VEHICLE.YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.vehicle.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 22, "CLAIMS.DETAILS.VEHICLE.CHASSIS_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.vehicle.chassisNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 24, "CLAIMS.DETAILS.VEHICLE.MOTOR_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.vehicle.motorNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 26, "CLAIMS.DETAILS.VEHICLE.CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.vehicle.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 28, "CLAIMS.DETAILS.VEHICLE.LICENSE_VALIDITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.vehicle.licenceStart, " - ", ctx_r1.claim.vehicle.licenceExpiry, "");
  }
}
function BrokerClaimDetailsComponent_div_15_div_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 95)(2, "div", 96)(3, "div", 97)(4, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 97)(10, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 97)(16, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 97)(22, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div")(28, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 102)(34, "h4", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 104)(38, "div")(39, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div")(45, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div")(51, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 17, "CLAIMS.DETAILS.INCIDENT_REPORT.LOCATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 19, "CLAIMS.DETAILS.INCIDENT_REPORT.NATURE_OF_LOSS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.natureOfLoss);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 21, "CLAIMS.DETAILS.INCIDENT_REPORT.CAUSE_OF_LOSS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.causeOfLoss);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 23, "CLAIMS.DETAILS.INCIDENT_REPORT.SEVERITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 25, "CLAIMS.DETAILS.INCIDENT_REPORT.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.claim.incident.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 27, "CLAIMS.DETAILS.POLICE_REPORT.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 29, "CLAIMS.DETAILS.POLICE_REPORT.NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.policeReportNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 31, "CLAIMS.DETAILS.POLICE_REPORT.CITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.policeReportCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](53, 33, "CLAIMS.DETAILS.POLICE_REPORT.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.incident.policeReportDescription, " ");
  }
}
function BrokerClaimDetailsComponent_div_15_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80)(1, "div", 106)(2, "div", 107)(3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 82)(9, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82)(15, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 6, "CLAIMS.DETAILS.WORKSHOP.ASSIGNED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.workshop.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 8, "CLAIMS.DETAILS.WORKSHOP.ADDRESS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.claim.workshop.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 10, "CLAIMS.DETAILS.WORKSHOP.CONTACT"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.workshop.phone);
  }
}
function BrokerClaimDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "details", 36)(3, "summary", 37)(4, "div", 38)(5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i-lucide", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div")(8, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i-lucide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 44)(16, "div", 45)(17, "div", 46)(18, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 48)(22, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 48)(28, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 52)(34, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 55)(37, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 56)(41, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 56)(48, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 56)(55, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 55)(61, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 56)(65, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 56)(71, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 56)(77, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 55)(83, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 56)(87, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 56)(93, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 56)(99, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](104, BrokerClaimDetailsComponent_div_15_div_104_Template, 6, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 62)(106, "div", 63)(107, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_Template_div_click_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isClaimantExpanded = !ctx_r1.isClaimantExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](109, "i-lucide", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](111, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, BrokerClaimDetailsComponent_div_15_div_113_Template, 26, 17, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, BrokerClaimDetailsComponent_div_15_div_114_Template, 8, 7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 63)(116, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_Template_div_click_116_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isPolicyExpanded = !ctx_r1.isPolicyExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "i-lucide", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](120, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](121, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, BrokerClaimDetailsComponent_div_15_div_122_Template, 38, 27, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 63)(124, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_Template_div_click_124_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isDriverExpanded = !ctx_r1.isDriverExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](126, "i-lucide", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](128, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, BrokerClaimDetailsComponent_div_15_div_130_Template, 26, 17, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div", 63)(132, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_Template_div_click_132_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isVehicleExpanded = !ctx_r1.isVehicleExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](134, "i-lucide", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](136, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](137, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](138, BrokerClaimDetailsComponent_div_15_div_138_Template, 44, 30, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "div", 72)(140, "div", 73)(141, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_Template_div_click_141_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isIncidentExpanded = !ctx_r1.isIncidentExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](143, "i-lucide", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](145, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](146, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](147, BrokerClaimDetailsComponent_div_15_div_147_Template, 56, 35, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 63)(149, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_15_Template_div_click_149_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isWorkshopExpanded = !ctx_r1.isWorkshopExpanded);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](151, "i-lucide", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](153, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](154, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](155, BrokerClaimDetailsComponent_div_15_div_155_Template, 20, 12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](156, "app-chat-box", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("open", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 54, "CLAIMS.DETAILS.HIGHLIGHTS.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 56, "CLAIMS.DETAILS.HIGHLIGHTS.DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 58, "CLAIMS.DETAILS.HIGHLIGHTS.STATUS_PAYMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 60, "CLAIMS.DETAILS.HIGHLIGHTS.CURRENT_STATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.getStatusClass(ctx_r1.claim.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.claim.state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 62, "CLAIMS.DETAILS.HIGHLIGHTS.PAID_ON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.paidOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 64, "CLAIMS.DETAILS.HIGHLIGHTS.FINANCIALS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](43, 66, "CLAIMS.DETAILS.HIGHLIGHTS.SUM_INSURED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 68, ctx_r1.claim.policy.sumInsured), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 70, "CLAIMS.DETAILS.HIGHLIGHTS.ESTIMATED_COST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.claim.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](53, 72, ctx_r1.claim.incident.estimatedCost), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 74, "CLAIMS.DETAILS.HIGHLIGHTS.CALCULATION_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.calculationType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](63, 76, "CLAIMS.DETAILS.HIGHLIGHTS.IMPORTANT_DATES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](67, 78, "CLAIMS.DETAILS.HIGHLIGHTS.INTIMATED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.claimDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](73, 80, "CLAIMS.DETAILS.HIGHLIGHTS.LOSS_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.lossDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](79, 82, "CLAIMS.DETAILS.HIGHLIGHTS.SURVEY_REQUESTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.incident.surveyDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](85, 84, "CLAIMS.DETAILS.HIGHLIGHTS.CLAIM_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](89, 86, "CLAIMS.DETAILS.HIGHLIGHTS.SOURCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](95, 88, "CLAIMS.DETAILS.HIGHLIGHTS.RECEIVED_INV"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.invoiceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](101, 90, "CLAIMS.DETAILS.HIGHLIGHTS.INTIMATION_MODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.claim.intimationMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.claim.withoutObligation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](111, 92, "CLAIMS.DETAILS.CLAIMANT.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](104, _c0, ctx_r1.isClaimantExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isClaimantExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.claim.intimator.isInsured);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](120, 94, "CLAIMS.DETAILS.POLICY.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](106, _c0, ctx_r1.isPolicyExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isPolicyExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](128, 96, "CLAIMS.DETAILS.DRIVER.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](108, _c0, ctx_r1.isDriverExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isDriverExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](136, 98, "CLAIMS.DETAILS.VEHICLE.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](110, _c0, ctx_r1.isVehicleExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isVehicleExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](145, 100, "CLAIMS.DETAILS.INCIDENT_REPORT.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](112, _c0, ctx_r1.isIncidentExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isIncidentExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](153, 102, "CLAIMS.DETAILS.WORKSHOP.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](114, _c0, ctx_r1.isWorkshopExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isWorkshopExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modelName", "insurance.claim")("recordId", ctx_r1.claim.id);
  }
}
function BrokerClaimDetailsComponent_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 115)(1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i-lucide", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 118)(4, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i-lucide", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", doc_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", doc_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 4, "CLAIMS.DETAILS.ATTACHED_DOCUMENTS.LAST_UPDATED"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, doc_r5.lastUpdated), "");
  }
}
function BrokerClaimDetailsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "h3", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i-lucide", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, BrokerClaimDetailsComponent_div_16_div_7_Template, 12, 8, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "CLAIMS.DETAILS.ATTACHED_DOCUMENTS.TITLE"), " (", ctx_r1.claim.documents.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.claim.documents);
  }
}
function BrokerClaimDetailsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading-spinner", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", true)("message", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "CLAIMS.DETAILS.LOADING"));
  }
}
function BrokerClaimDetailsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 122)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i-lucide", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_div_18_Template_app_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i-lucide", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "CLAIMS.DETAILS.ERROR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 5, "CLAIMS.DETAILS.BACK_TO_CLAIMS"), " ");
  }
}
let BrokerClaimDetailsComponent = /*#__PURE__*/(() => {
  class BrokerClaimDetailsComponent {
    constructor(route, router, claimService, authService, notificationService) {
      this.route = route;
      this.router = router;
      this.claimService = claimService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.claimId = null;
      this.claim = null;
      this.loading = true;
      this.error = null;
      this.status = 'under_assessment';
      this.activeTab = 'overview';
      // Section collapse states
      this.isClaimantExpanded = false;
      this.isIntimatorExpanded = false;
      this.isPolicyExpanded = false;
      this.isDriverExpanded = false;
      this.isVehicleExpanded = false;
      this.isIncidentExpanded = false;
      this.isWorkshopExpanded = false;
    }
    ngOnInit() {
      this.claimId = this.route.snapshot.paramMap.get('id');
      this.loadClaimDetails();
    }
    setActiveTab(tab) {
      this.activeTab = tab;
    }
    loadClaimDetails() {
      if (!this.claimId) return;
      this.loading = true;
      // Convert claimId to number if possible, as API expects number
      const numericId = parseInt(this.claimId, 10);
      if (isNaN(numericId)) {
        this.error = 'Invalid Claim ID';
        this.loading = false;
        return;
      }
      this.claimService.getClaim(numericId).subscribe({
        next: response => {
          console.log('Claim details response:', response);
          const apiData = response.result || response.data || response;
          if (apiData) {
            this.mapClaimData(apiData);
          } else {
            this.error = 'No claim data found';
          }
          this.loading = false;
        },
        error: err => {
          console.error('Error fetching claim details:', err);
          this.error = 'Failed to load claim details';
          this.notificationService.error('Failed to load claim details');
          this.loading = false;
        }
      });
    }
    mapClaimData(apiData) {
      this.claim = {
        id: apiData.id || this.claimId,
        claimNumber: apiData.claim_number || 'N/A',
        claimType: apiData.product_name || 'Motor Insurance',
        claimDate: apiData.intimation_date || 'N/A',
        receivedDate: apiData.received_date || 'N/A',
        deliveredDate: apiData.delivered_date || 'N/A',
        reportedDate: apiData.intimation_date || 'N/A',
        lossDate: apiData.date_of_loss || 'N/A',
        status: (apiData.state || 'draft').toLowerCase().replace(/\s+/g, '_'),
        state: apiData.state || 'Intimated',
        priority: apiData.severity ? apiData.severity.toLowerCase() === 'high' ? 'high' : 'medium' : 'medium',
        paidOn: apiData.claim_paid_on || 'Not Paid',
        source: apiData.claim_source || 'N/A',
        intimationMode: apiData.intimation_mode || 'N/A',
        calculationType: apiData.calculation_type || 'N/A',
        withoutObligation: apiData.without_obligation || false,
        invoiceDate: apiData.received_invoice_date || 'N/A',
        intimator: {
          isInsured: apiData.intimator_is_insured,
          name: apiData.intimator_name || 'N/A',
          phone: apiData.intimator_phone || 'N/A',
          address: apiData.intimator_address || 'N/A',
          relation: apiData.relative || 'N/A'
        },
        claimant: {
          name: apiData.customer_name || 'N/A',
          code: apiData.customer_code || 'N/A',
          phone: apiData.customer_mobile || 'N/A',
          email: 'N/A',
          beneficiary: apiData.beneficiary_name || 'N/A'
        },
        policy: {
          id: apiData.policy_number || 'N/A',
          applicationNumber: apiData.application_number || 'N/A',
          type: apiData.product_name || 'Motor Insurance',
          productCode: apiData.product_code || 'N/A',
          lob: apiData.lob || 'N/A',
          transactionType: apiData.policy_transaction_type || 'N/A',
          status: apiData.policy_payment_status || 'Active',
          effectiveFrom: apiData.policy_effective_from || 'N/A',
          effectiveTo: apiData.policy_effective_to || 'N/A',
          approveDate: apiData.policy_approve_date || 'N/A',
          paymentDate: apiData.policy_payment_date || 'N/A',
          sumInsured: apiData.risk_sum_insured || 0,
          currency: apiData.currency || 'EGP',
          brokerName: apiData.broker_name || 'Direct',
          brokerCode: apiData.broker_code || 'N/A',
          branch: apiData.branch || 'Head Office',
          paymentStatus: apiData.policy_payment_status || 'N/A',
          sourceOfBusiness: apiData.source_of_business || 'broker'
        },
        vehicle: {
          plateNumber: apiData.vehicle_plate_number || 'N/A',
          chassisNumber: apiData.vehicle_chassis_number || 'N/A',
          motorNumber: apiData.vehicle_motor_number || 'N/A',
          make: apiData.vehicle_make || 'N/A',
          model: apiData.vehicle_model || 'N/A',
          category: apiData.vehicle_category || 'N/A',
          cc: apiData.vehicle_cc || 'N/A',
          year: apiData.vehicle_manufacturing_year || 'N/A',
          marketValue: apiData.vehicle_market_value || 'N/A',
          bodyType: apiData.vehicle_body_type || 'N/A',
          licenceStart: apiData.vehicle_licence_start_date || 'N/A',
          licenceExpiry: apiData.vehicle_licence_expiration_date || 'N/A'
        },
        incident: {
          date: apiData.date_of_loss || 'N/A',
          location: apiData.accident_address || [apiData.accident_city, apiData.accident_governorate].filter(Boolean).join(', ') || 'N/A',
          city: apiData.accident_city || 'N/A',
          governorate: apiData.accident_governorate || 'N/A',
          description: apiData.accident_description || apiData.initial_damage_description || 'N/A',
          initialDamage: apiData.initial_damage_description || 'N/A',
          causeOfLoss: apiData.cause_of_loss || 'N/A',
          natureOfLoss: apiData.nature_of_loss || 'N/A',
          severity: apiData.severity || 'Normal',
          surveyDate: apiData.requested_survey_date || 'N/A',
          estimatedCost: 0,
          /* Police Report */
          policeReportNumber: apiData.police_report_number || 'N/A',
          policeReportCity: apiData.police_report_city || 'N/A',
          policeReportDescription: apiData.police_report_description || 'N/A'
        },
        driver: {
          name: apiData.driver_name || 'N/A',
          birthDate: apiData.driver_birth_date || 'N/A',
          gender: apiData.driver_gender || 'N/A',
          licenceType: apiData.driver_licence_type || 'N/A',
          licenceStart: apiData.driver_licence_start_date || 'N/A',
          licenceExpiry: apiData.driver_licence_expiration_date || 'N/A'
        },
        workshop: {
          name: apiData.workshop || 'N/A',
          address: apiData.workshop_address || 'N/A',
          phone: apiData.workshop_number || 'N/A'
        },
        documents: (apiData.claim_documents || []).map(doc => ({
          id: doc.id,
          name: doc.document_name,
          type: 'Document',
          size: 'N/A',
          lastUpdated: doc.last_updated_on,
          updatedBy: doc.last_updated_by,
          hasFiles: doc.documents_base64 && doc.documents_base64.length > 0
        })),
        timeline: [{
          event: 'Claim Intimated',
          date: apiData.intimation_date || 'N/A',
          status: 'completed',
          icon: 'file-text'
        }, {
          event: 'Under Assessment',
          date: 'Pending',
          status: 'current',
          icon: 'clock'
        }, {
          event: 'Decision Made',
          date: '-',
          status: 'pending',
          icon: 'check-circle'
        }]
      };
      this.status = this.claim.status;
    }
    getStatusClass(status) {
      const lowerStatus = status?.toLowerCase() || '';
      if (lowerStatus.includes('paid') || lowerStatus.includes('approved') || lowerStatus.includes('settled')) {
        return 'bg-green-100 text-green-800';
      }
      if (lowerStatus.includes('reject') || lowerStatus.includes('declined')) {
        return 'bg-red-100 text-red-800';
      }
      if (lowerStatus.includes('new') || lowerStatus.includes('intimated')) {
        return 'bg-blue-100 text-blue-800';
      }
      return 'bg-yellow-100 text-yellow-800';
    }
    goBack() {
      this.router.navigate(['/dashboard/broker/claims']);
    }
    isBroker() {
      const user = this.authService.currentUserValue;
      return user?.role === 'broker' || user?.role === 'admin';
    }
    approveClaim() {
      if (!this.claimId) return;
      this.loading = true;
      // In a real app, this would call a service method
      setTimeout(() => {
        this.notificationService.success('Claim approved successfully!');
        this.loadClaimDetails(); // Reload to get updated status
        this.loading = false;
      }, 1000);
    }
    rejectClaim() {
      if (!this.claimId) return;
      this.loading = true;
      // In a real app, this would call a service method
      setTimeout(() => {
        this.notificationService.error('Claim rejected.');
        this.loadClaimDetails(); // Reload to get updated status
        this.loading = false;
      }, 1000);
    }
    static {
      this.ɵfac = function BrokerClaimDetailsComponent_Factory(t) {
        return new (t || BrokerClaimDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__.ClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: BrokerClaimDetailsComponent,
        selectors: [["app-broker-claim-details"]],
        decls: 19,
        vars: 16,
        consts: [["class", "space-y-6", 4, "ngIf"], [1, "border-b", "border-gray-200", "mb-6", "animate-fadeIn", 2, "animation-delay", "100ms"], [1, "flex", "gap-8", "overflow-x-auto"], [1, "pb-4", "px-2", "text-sm", "font-medium", "capitalize", "transition-all", "relative", "whitespace-nowrap", "flex", "items-center", "gap-2", 3, "click", "ngClass"], ["name", "file-text", 1, "w-4", "h-4"], ["class", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-full animate-slideIn", 4, "ngIf"], ["name", "paperclip", 1, "w-4", "h-4"], [1, "space-y-8"], ["class", "space-y-6 animate-fadeIn", 4, "ngIf"], ["class", "animate-fadeIn", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], [1, "space-y-6"], [1, "mb-8", "animate-fadeIn", "relative", "overflow-hidden", "rounded-2xl", "p-4", "-m-4"], [1, "absolute", "inset-0", "pointer-events-none", "z-0", 2, "background-image", "url('assets/img/backgrounds/claim-header.svg')", "background-repeat", "no-repeat", "background-position", "center", "background-size", "cover"], [1, "relative", "z-10"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-200", "mb-4"], [1, "hover:text-white", "transition-all", "duration-300", 3, "click"], ["name", "chevron-right", 1, "w-4", "h-4"], [1, "text-white", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "w-14", "h-14", "bg-white/10", "backdrop-blur-sm", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "shadow-lg", "border", "border-white/20"], ["name", "alert-triangle", 1, "w-7", "h-7"], [1, "text-3xl", "font-bold", "text-white", "mb-1"], [1, "text-lg", "text-gray-200", "font-medium", "mb-2"], [1, "flex", "flex-wrap", "items-center", "gap-3", "text-sm", "text-gray-200"], [1, "flex", "items-center", "gap-1", "bg-white/20", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", "uppercase", "text-white"], [1, "flex", "items-center", "gap-1"], ["name", "calendar", 1, "w-3.5", "h-3.5"], ["name", "shield", 1, "w-3.5", "h-3.5"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-semibold", "capitalize", "flex", "items-center", "gap-2", "animate-slideIn", 3, "ngClass"], ["name", "info", 1, "w-4", "h-4"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-0.5", "bg-gradient-to-r", "from-blue-500", "to-blue-600", "rounded-t-full", "animate-slideIn"], [1, "space-y-6", "animate-fadeIn"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "group", 3, "open"], [1, "flex", "items-center", "justify-between", "p-6", "cursor-pointer", "hover:bg-gray-50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "bg-indigo-100", "dark:bg-indigo-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-indigo-600"], ["name", "info", 1, "w-5", "h-5"], [1, "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500"], ["name", "chevron-down", 1, "w-5", "h-5", "text-gray-400", "transition-transform", "group-open:rotate-180"], [1, "px-6", "pb-6", "pt-0", "border-t", "border-gray-100", "dark:border-gray-700"], [1, "mt-6", "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "space-y-4", "p-4", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg"], [1, "font-bold", "text-sm", "text-gray-900", "dark:text-white", "mb-2"], [1, "flex", "items-center", "justify-between"], [1, "text-gray-600", "dark:text-gray-300", "text-xs"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "font-medium", "text-xs"], [1, "relative", "pt-1"], [1, "overflow-hidden", "h-1.5", "mb-1", "text-xs", "flex", "rounded", "bg-blue-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-primary", 2, "width", "30%"], [1, "space-y-3", "p-4", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg"], [1, "flex", "justify-between", "text-xs"], [1, "text-gray-600", "dark:text-gray-300"], [1, "font-medium"], [1, "font-medium", "text-red-600"], [1, "font-medium", "text-primary"], ["class", "bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg flex items-center gap-3", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300", "group", "overflow-hidden"], [1, "p-6", "cursor-pointer", "flex", "items-center", "justify-between", "hover:bg-gray-50", "dark:hover:bg-gray-700/50", "transition-colors", 3, "click"], [1, "font-bold", "text-gray-900", "dark:text-white", "flex", "items-center", "gap-2"], ["name", "user", 1, "w-5", "h-5", "text-primary"], ["name", "chevron-down", 1, "w-5", "h-5", "text-gray-400", "transition-transform", "duration-200", 3, "ngClass"], ["class", "p-6 pt-0 border-t border-gray-100 dark:border-gray-700 animate-fadeIn", 4, "ngIf"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 group overflow-hidden", 4, "ngIf"], ["name", "shield", 1, "w-5", "h-5", "text-primary"], ["name", "car", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300", "group", "overflow-hidden"], ["name", "alert-circle", 1, "w-5", "h-5", "text-primary"], ["name", "tool", 1, "w-5", "h-5", "text-primary"], [3, "modelName", "recordId"], [1, "bg-yellow-50", "dark:bg-yellow-900/20", "p-4", "rounded-lg", "flex", "items-center", "gap-3"], ["name", "alert-circle", 1, "w-5", "h-5", "text-yellow-600"], [1, "font-semibold", "text-yellow-800", "dark:text-yellow-200"], [1, "p-6", "pt-0", "border-t", "border-gray-100", "dark:border-gray-700", "animate-fadeIn"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "text-sm", "pt-6"], [1, "space-y-1"], [1, "text-xs", "font-semibold", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wider"], [1, "font-medium", "text-gray-900", "dark:text-white", "truncate", 3, "title"], [1, "font-medium", "text-gray-900", "dark:text-white"], ["name", "user-check", 1, "w-5", "h-5", "text-primary"], [1, "font-medium", "text-gray-900", "dark:text-white", "truncate"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-green-100", "text-green-800"], [1, "font-medium", "text-gray-900", "dark:text-white", "capitalize"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "xl:grid-cols-5", "gap-6", "text-sm", "pt-6"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "font-bold", "text-gray-900", "dark:text-white", "bg-gray-50", "px-2", "py-0.5", "rounded", "inline-block", "border", "border-gray-200"], [1, "font-mono", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-4", "pt-6"], [1, "space-y-3", "p-4", "bg-gray-50", "dark:bg-gray-700/50", "rounded-lg"], [1, "flex", "justify-between"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "font-medium", "text-navy", "dark:text-white"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "mb-2"], [1, "p-3", "bg-amber-50", "dark:bg-amber-900/30", "border", "border-amber-100", "dark:border-amber-700", "rounded-lg", "text-sm", "text-gray-700", "dark:text-gray-300", "leading-relaxed", "min-h-[100px]"], [1, "md:col-span-2", "mt-4", "border-t", "border-gray-100", "pt-4"], [1, "font-semibold", "text-sm", "text-navy", "dark:text-white", "mb-2"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "text-sm"], [1, "font-medium", "truncate"], [1, "space-y-4", "text-sm", "pt-6"], [1, "p-3", "bg-blue-50", "dark:bg-blue-900/20", "rounded-lg", "border", "border-blue-100", "dark:border-blue-800"], [1, "font-bold", "text-navy", "dark:text-white", "text-lg"], [1, "animate-fadeIn"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "font-bold", "text-navy", "dark:text-white", "mb-4", "flex", "items-center", "gap-2"], ["name", "paperclip", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4"], ["class", "flex items-center gap-3 p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer group", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3", "p-4", "border", "border-gray-200", "rounded-lg", "bg-gray-50", "dark:bg-gray-700/50", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-all", "duration-300", "cursor-pointer", "group"], [1, "w-12", "h-12", "bg-blue-50", "dark:bg-blue-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-primary", "group-hover:bg-primary", "group-hover:text-white", "transition-all", "duration-300"], ["name", "file-text", 1, "w-6", "h-6"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-semibold", "text-navy", "dark:text-white", "truncate", 3, "title"], [1, "p-2", "hover:bg-white", "rounded-full", "transition-colors"], ["name", "download", 1, "w-4", "h-4", "text-gray-400", "group-hover:text-primary"], [1, "flex", "items-center", "justify-center", "h-96"], [3, "loading", "message"], [1, "text-center"], ["name", "alert-circle", 1, "h-12", "w-12", "text-red-500", "mx-auto", "mb-4"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-300", "mb-4"], [3, "click"], ["name", "chevron-left", 1, "w-4", "h-4", "mr-2"]],
        template: function BrokerClaimDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BrokerClaimDetailsComponent_div_1_Template, 34, 14, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2)(4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_Template_button_click_4_listener() {
              return ctx.setActiveTab("overview");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i-lucide", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, BrokerClaimDetailsComponent_div_8_Template, 1, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BrokerClaimDetailsComponent_Template_button_click_9_listener() {
              return ctx.setActiveTab("documents");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i-lucide", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, BrokerClaimDetailsComponent_div_13_Template, 1, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, BrokerClaimDetailsComponent_div_15_Template, 157, 116, "div", 8)(16, BrokerClaimDetailsComponent_div_16_Template, 8, 5, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, BrokerClaimDetailsComponent_div_17_Template, 3, 4, "div", 10)(18, BrokerClaimDetailsComponent_div_18_Template, 12, 7, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.claim);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.activeTab === "overview" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 12, "CLAIMS.DETAILS.OVERVIEW"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeTab === "overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.activeTab === "documents" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 14, "CLAIMS.DETAILS.DOCUMENTS"), " (", ctx.claim.documents.length, ") ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeTab === "documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeTab === "overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.activeTab === "documents");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_10__.LucideAngularComponent, _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_6__.ChatBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerClaimDetailsComponent;
})();

/***/ }),

/***/ 915:
/*!****************************************************************!*\
  !*** ./src/app/broker/pages/claims/broker-claims.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerClaimsComponent: () => (/* binding */ BrokerClaimsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/claim.service */ 4644);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_chassis_validation_modal_chassis_validation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/chassis-validation-modal/chassis-validation-modal.component */ 1283);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/column-toggle/column-toggle.component */ 6117);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3955);














const _c0 = () => ["week", "month", "year"];
function BrokerClaimsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerClaimsComponent_button_16_Template_button_click_0_listener() {
      const period_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.setSelectedPeriod(period_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-teal-600", ctx_r2.selectedPeriod === period_r2)("text-white", ctx_r2.selectedPeriod === period_r2)("bg-white", ctx_r2.selectedPeriod !== period_r2)("text-gray-600", ctx_r2.selectedPeriod !== period_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 9, "BROKER.DASHBOARD.PERFORMANCE." + period_r2.toUpperCase()), " ");
  }
}
function BrokerClaimsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r2.error), " ");
  }
}
function BrokerClaimsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BrokerClaimsComponent_app_dynamic_table_with_filters_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filteredDataChange", function BrokerClaimsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onFilteredDataChange($event));
    })("filterChange", function BrokerClaimsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onFilterChange($event));
    })("exportData", function BrokerClaimsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onExport());
    })("action", function BrokerClaimsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r2.getDisplayData())("columns", ctx_r2.visibleColumns)("showExport", true)("maxSelectOptions", 10)("pageSize", ctx_r2.pageSize)("currentPage", ctx_r2.currentPage);
  }
}
function BrokerClaimsComponent_app_pagination_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function BrokerClaimsComponent_app_pagination_27_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onPageChange($event));
    })("pageSizeChange", function BrokerClaimsComponent_app_pagination_27_Template_app_pagination_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentPage", ctx_r2.currentPage)("pageSize", ctx_r2.pageSize)("totalRecords", ctx_r2.totalRecords);
  }
}
let BrokerClaimsComponent = /*#__PURE__*/(() => {
  class BrokerClaimsComponent {
    constructor(claimService, authService, router, appTranslate) {
      this.claimService = claimService;
      this.authService = authService;
      this.router = router;
      this.appTranslate = appTranslate;
      this.allColumns = [];
      this.visibleColumns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      this.isChassisModalOpen = false;
      // Pagination
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 1000; // Initial estimate, will be updated after fetch
      // Caching mechanism
      // Caching mechanism
      this.cachedData = [];
      this.hasActiveFilters = false;
      // Date Filter Logic
      this.selectedPeriod = 'month';
      this.lastActivePage = 1;
      this.setupColumns();
      // Re-setup columns on language change to translate headers
      this.appTranslate.get('BROKER.CLAIMS.COLUMNS').subscribe(() => {
        this.setupColumns();
      });
    }
    ngOnInit() {
      this.fetchTotalCount();
      this.loadFirstPage();
    }
    fetchTotalCount() {
      const currentUser = this.authService.currentUserValue;
      if (!currentUser) return;
      this.claimService.listClaims({
        user_id: currentUser.id,
        user_type: 'broker',
        limit: 10000,
        offset: 0,
        domain: []
      }).subscribe({
        next: response => {
          let claimsData = [];
          if (Array.isArray(response)) {
            claimsData = response;
          } else if (Array.isArray(response.data)) {
            claimsData = response.data;
          } else if (response.data?.result?.data) {
            claimsData = response.data.result.data;
          } else if (response.data?.data) {
            claimsData = response.data.data;
          }
          this.totalRecords = claimsData.length;
        },
        error: err => {
          console.error('Error fetching total claims count', err);
        }
      });
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.allColumns = [{
        key: 'claimNumber',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.CLAIM_NO'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'policyNumber',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.POLICY_NO'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'client',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.CLIENT_NAME'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'vehiclePlate',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.VEHICLE_PLATE'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'vehicleMaker',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.VEHICLE_MAKER'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'type',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.LOB'),
        filterable: true,
        sortable: true
      }, {
        key: 'productName',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.PRODUCT'),
        filterable: true,
        sortable: true
      }, {
        key: 'status',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row.status)
      }, {
        key: 'amount',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.AMOUNT'),
        filterable: false,
        sortable: true
      }, {
        key: 'date',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.INTIMATION_DATE'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.CLAIMS.COLUMNS.ACTIONS'),
        filterable: false,
        mandatory: true,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="download" data-id="${row.id}" title="Download Documents">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
      this.visibleColumns = [...this.allColumns];
      console.log('=== CLAIMS COLUMNS SETUP ===');
      console.log('Configured columns:', this.allColumns.map(c => ({
        key: c.key,
        label: c.label
      })));
      console.log('=== END COLUMNS ===');
    }
    onVisibleColumnsChange(columns) {
      this.visibleColumns = columns;
    }
    renderStatus(status) {
      const s = status?.toLowerCase() || 'pending';
      let classes = '';
      if (['active', 'approved', 'settled', 'paid', 'fully paid', 'closed'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'submitted', 'draft', 'processing', 'intimated', 'claim request', 'surveying', 'partially paid', 'reopen'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else if (['rejected', 'cancelled', 'canceled', 'declined'].includes(s)) {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      } else {
        classes = 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
      }
      // Just show the status string as is, it's already mapped to readable format.
      // Or if we really want translation keys, we would have done it earlier.
      // Given existing code used translation keys, but now we map 'open' -> 'Intimated' (English).
      // If the user wants Arabic, this hardcoded English might be an issue.
      // Ideally we should return KEYS from mapClaimState and translate here.
      // But user provided English names: "Intimated", "Fully Paid".
      // Let's treat them as the value to display.
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${status}</span>`;
    }
    extractClaimsData(response) {
      if (Array.isArray(response)) return response;
      if (Array.isArray(response.data)) return response.data;
      if (response.data?.result?.data) return response.data.result.data;
      if (response.data?.data) return response.data.data;
      return [];
    }
    // Old methods removed
    mapClaimState(rawState) {
      const s = (rawState || '').toLowerCase();
      const mapping = {
        'claim_request': 'Claim Request',
        'draft': 'Draft',
        'open': 'Intimated',
        'surveying': 'Surveying',
        'partial': 'Partially Paid',
        'full': 'Fully Paid',
        'closed': 'Closed',
        'reopen': 'Reopen'
      };
      const pretty = mapping[s] || rawState.charAt(0).toUpperCase() + rawState.slice(1).toLowerCase();
      // Replace spaces with underscores for translation key match if needed, but for display we want readable text
      // If we want translation keys, we should probably return keys. 
      // Based on dashboard, we are displaying the string directly. But here we have translation logic in renderStatus.
      // renderStatus expects 'pending', 'active', etc.
      // Let's normalize it to a key-friendly format or keep it simple.
      // The renderStatus checks for specific keywords like 'intimated', 'active', 'paid'. 
      // Our new mapped values: 'Claim Request', 'Intimated', 'Partially Paid'.
      // These might fail specific checks in renderStatus if not added.
      return pretty;
    }
    mapClaims(claimsData) {
      return claimsData.map(claim => {
        const rawStatus = claim.state || 'pending';
        const mappedStatus = this.mapClaimState(rawStatus);
        return {
          id: claim.id || claim.claim_id || (typeof claim.id === 'number' ? claim.id : null) || claim.claim_number || 'N/A',
          claimNumber: claim.claim_number || 'N/A',
          client: claim.customer_name || claim.partner_name || claim.partner_id?.[1] || 'N/A',
          policyNumber: claim.policy_number || claim.policy_id?.[1] || 'N/A',
          vehiclePlate: claim.vehicle_plate_number || 'N/A',
          vehicleMaker: claim.vehicle_maker || 'N/A',
          type: claim.lob || claim.claim_type || 'N/A',
          productName: claim.product_name ? typeof claim.product_name === 'number' ? `Product ${claim.product_name}` : claim.product_name : 'N/A',
          status: mappedStatus,
          date: claim.intimation_date || claim.claim_date || claim.create_date || 'N/A',
          dateOfLoss: claim.date_of_loss || claim.create_date,
          amount: claim.claim_amount ? `EGP ${claim.claim_amount.toLocaleString()}` : 'N/A'
        };
      });
    }
    clearCache() {
      this.cachedData = [];
    }
    setSelectedPeriod(period) {
      if (this.selectedPeriod === period) {
        this.selectedPeriod = 'all';
        // Restore previous page if valid
        const validCount = this.cachedData.filter(p => p !== undefined).length;
        const maxPage = Math.ceil(validCount / this.pageSize) || 1;
        if (this.lastActivePage > maxPage) {
          this.currentPage = 1;
        } else {
          this.currentPage = this.lastActivePage;
        }
      } else {
        // Store current page before switching filter
        this.lastActivePage = this.currentPage;
        this.selectedPeriod = period;
        this.currentPage = 1;
      }
      this.displayCurrentPage();
    }
    displayCurrentPage() {
      let validItems = this.cachedData.filter(p => p !== undefined);
      // Apply Date Filter Client-Side
      if (this.selectedPeriod !== 'all') {
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        if (this.selectedPeriod === 'week') {
          const day = start.getDay();
          const diff = (day + 1) % 7;
          start.setDate(now.getDate() - diff);
        } else if (this.selectedPeriod === 'month') {
          start.setDate(1);
        } else if (this.selectedPeriod === 'year') {
          start.setMonth(0, 1);
        }
        validItems = validItems.filter(c => {
          const dateStr = c.dateOfLoss || c.date; // Use specific field
          if (!dateStr || dateStr === 'N/A') return false;
          const d = new Date(dateStr);
          return d >= start && d <= now;
        });
      }
      this.totalRecords = validItems.length;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.data = validItems.slice(startIndex, endIndex);
      this.isLoading = false;
    }
    getDisplayData() {
      let validItems = this.cachedData.filter(p => p !== undefined);
      if (this.selectedPeriod !== 'all') {
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        if (this.selectedPeriod === 'week') {
          const day = start.getDay();
          const diff = (day + 1) % 7;
          start.setDate(now.getDate() - diff);
        } else if (this.selectedPeriod === 'month') {
          start.setDate(1);
        } else if (this.selectedPeriod === 'year') {
          start.setMonth(0, 1);
        }
        validItems = validItems.filter(c => {
          const dateStr = c.dateOfLoss || c.date;
          if (!dateStr || dateStr === 'N/A') return false;
          const d = new Date(dateStr);
          return d >= start && d <= now;
        });
      }
      return validItems;
    }
    // formatDate removed
    // getDateDomain removed
    loadFirstPage() {
      this.isLoading = true;
      const currentUser = this.authService.currentUserValue;
      if (!currentUser) return;
      // No date domain - fetch ALL
      this.claimService.listClaims({
        user_id: currentUser.id,
        user_type: 'broker',
        limit: this.pageSize,
        offset: 0,
        domain: []
      }).subscribe({
        next: response => {
          const claimsData = this.extractClaimsData(response);
          if (response.data?.total_count || response.data?.count) {
            this.totalRecords = response.data.total_count || response.data.count;
          } else {
            this.totalRecords = 0;
          }
          const mappedClaims = this.mapClaims(claimsData);
          this.cachedData = [...mappedClaims];
          // Apply initial filter
          this.displayCurrentPage();
          console.log(`✓ Page 1 loaded. Starting background loading...`);
          this.loadAllInBackground();
        },
        error: err => {
          console.error('Error loading claims:', err);
          this.error = 'BROKER.CLAIMS.ERROR_LOADING';
          this.isLoading = false;
        }
      });
    }
    loadAllInBackground() {
      const currentUser = this.authService.currentUserValue;
      if (!currentUser) return;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      const fetchNextBatch = () => {
        this.claimService.listClaims({
          user_id: currentUser.id,
          user_type: 'broker',
          limit: batchSize,
          offset: offset,
          domain: []
        }).subscribe({
          next: response => {
            const claimsData = this.extractClaimsData(response);
            const mappedClaims = this.mapClaims(claimsData);
            allData = [...allData, ...mappedClaims];
            if (response.data?.total_count || response.data?.count) {
              this.totalRecords = response.data.total_count || response.data.count;
            }
            if (claimsData.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              // Finished
              this.cachedData = allData;
              this.totalRecords = allData.length;
              // Refresh view
              this.displayCurrentPage();
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    onFilterChange(activeFilters) {
      this.hasActiveFilters = Object.keys(activeFilters).length > 0;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/broker/claims', event.data.id]);
          break;
        case 'download':
          console.log('Download for', event.data.id);
          break;
      }
    }
    onExport() {
      console.log('Exporting claims...');
    }
    openChassisModal() {
      this.isChassisModalOpen = true;
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
      this.ɵfac = function BrokerClaimsComponent_Factory(t) {
        return new (t || BrokerClaimsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__.ClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: BrokerClaimsComponent,
        selectors: [["app-broker-claims"]],
        decls: 29,
        vars: 18,
        consts: [[1, "space-y-6"], [1, "bg-teal-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-teal-500", "to-teal-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "clipboard-check", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "flex", "gap-2"], ["class", "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize border border-gray-200 hover:bg-gray-50 shadow-sm", 3, "bg-teal-600", "text-white", "bg-white", "text-gray-600", "click", 4, "ngFor", "ngForOf"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "flex", "items-center", "gap-2", "transition-all", 3, "click"], ["name", "plus", 1, "w-4", "h-4"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-end"], [3, "visibleColumnsChange", "columns", "pageId"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "pageSize", "currentPage", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [3, "close", "isOpen"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-all", "duration-300", "capitalize", "border", "border-gray-200", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions", "pageSize", "currentPage"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function BrokerClaimsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6)(8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, BrokerClaimsComponent_button_16_Template, 3, 11, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerClaimsComponent_Template_button_click_17_listener() {
              return ctx.isChassisModalOpen = true;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "i-lucide", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "app-column-toggle", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("visibleColumnsChange", function BrokerClaimsComponent_Template_app_column_toggle_visibleColumnsChange_23_listener($event) {
              return ctx.onVisibleColumnsChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, BrokerClaimsComponent_div_24_Template, 3, 3, "div", 17)(25, BrokerClaimsComponent_div_25_Template, 2, 0, "div", 18)(26, BrokerClaimsComponent_app_dynamic_table_with_filters_26_Template, 1, 6, "app-dynamic-table-with-filters", 19)(27, BrokerClaimsComponent_app_pagination_27_Template, 1, 3, "app-pagination", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "app-chassis-validation-modal", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("close", function BrokerClaimsComponent_Template_app_chassis_validation_modal_close_28_listener() {
              return ctx.isChassisModalOpen = false;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 11, "BROKER.CLAIMS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 13, "BROKER.CLAIMS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 15, "BROKER.CLAIMS.INTIMATE_CLAIM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("columns", ctx.allColumns)("pageId", "broker-claims-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isOpen", ctx.isChassisModalOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_chassis_validation_modal_chassis_validation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ChassisValidationModalComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_8__.ColumnToggleComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_12__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerClaimsComponent;
})();

/***/ }),

/***/ 857:
/*!*************************************************************************!*\
  !*** ./src/app/broker/pages/client-details/client-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientDetailsComponent: () => (/* binding */ ClientDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/customer.service */ 5680);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/customer-selection-modal/customer-selection-modal.component */ 3861);
/* harmony import */ var _shared_components_chassis_validation_modal_chassis_validation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/chassis-validation-modal/chassis-validation-modal.component */ 1283);
/* harmony import */ var _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/chat-box/chat-box.component */ 2911);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3955);











const _c0 = () => ["/dashboard/broker/clients"];
const _c1 = () => ["overview", "policies", "claims", "documents"];
const _c2 = (a0, a1) => ({
  "text-primary": a0,
  "text-gray-500 dark:text-gray-400 hover:text-gray-700": a1
});
const _c3 = a0 => ["/dashboard/broker/policies", a0];
const _c4 = a0 => ["/dashboard/broker/claims", a0];
function ClientDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientDetailsComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Back to Clients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ClientDetailsComponent_div_3_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.arabicName);
  }
}
function ClientDetailsComponent_div_3_button_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 41);
  }
}
function ClientDetailsComponent_div_3_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientDetailsComponent_div_3_button_36_Template_button_click_0_listener() {
      const tab_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setActiveTab(tab_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientDetailsComponent_div_3_button_36_div_2_Template, 1, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](3, _c2, ctx_r1.activeTab === tab_r5, ctx_r1.activeTab !== tab_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tab_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === tab_r5);
  }
}
function ClientDetailsComponent_div_3_div_38_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Arabic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.arabicName);
  }
}
function ClientDetailsComponent_div_3_div_38_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Client ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.id);
  }
}
function ClientDetailsComponent_div_3_div_38_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Is Passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ClientDetailsComponent_div_3_div_38_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Passport Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.passportId);
  }
}
function ClientDetailsComponent_div_3_div_38_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.dateOfBirth);
  }
}
function ClientDetailsComponent_div_3_div_38_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.gender);
  }
}
function ClientDetailsComponent_div_3_div_38_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](", ", ctx_r1.client.city, "");
  }
}
function ClientDetailsComponent_div_3_div_38_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](", ", ctx_r1.client.stateName, "");
  }
}
function ClientDetailsComponent_div_3_div_38_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](", ", ctx_r1.client.countryName, "");
  }
}
function ClientDetailsComponent_div_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Client Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 44)(5, "div")(6, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ClientDetailsComponent_div_3_div_38_div_10_Template, 5, 1, "div", 47)(11, ClientDetailsComponent_div_3_div_38_div_11_Template, 5, 1, "div", 47)(12, ClientDetailsComponent_div_3_div_38_div_12_Template, 5, 0, "div", 47)(13, ClientDetailsComponent_div_3_div_38_div_13_Template, 5, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div")(15, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div")(20, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ClientDetailsComponent_div_3_div_38_div_24_Template, 5, 1, "div", 47)(25, ClientDetailsComponent_div_3_div_38_div_25_Template, 5, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 48)(27, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ClientDetailsComponent_div_3_div_38_span_31_Template, 2, 1, "span", 47)(32, ClientDetailsComponent_div_3_div_38_span_32_Template, 2, 1, "span", 47)(33, ClientDetailsComponent_div_3_div_38_span_33_Template, 2, 1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.arabicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.client.isForeignCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.isForeignCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.isForeignCustomer && ctx_r1.client.passportId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.stateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.countryName);
  }
}
function ClientDetailsComponent_div_3_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No policies found for this client.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ClientDetailsComponent_div_3_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "div", 17)(2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "h4", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 61)(12, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const policy_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", policy_r6.type, " Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policy_r6.vehicle || policy_r6.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policy_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](policy_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("EGP ", policy_r6.premium == null ? null : policy_r6.premium.toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, policy_r6.id));
  }
}
function ClientDetailsComponent_div_3_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientDetailsComponent_div_3_div_39_div_1_Template, 4, 0, "div", 51)(2, ClientDetailsComponent_div_3_div_39_div_2_Template, 18, 8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.policies.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.client.policies);
  }
}
function ClientDetailsComponent_div_3_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No claims found for this client.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ClientDetailsComponent_div_3_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "div", 17)(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "h4", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 61)(12, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const claim_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](claim_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Policy: ", claim_r7.policyId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](claim_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](claim_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Est. EGP ", claim_r7.amount == null ? null : claim_r7.amount.toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c4, claim_r7.id));
  }
}
function ClientDetailsComponent_div_3_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientDetailsComponent_div_3_div_40_div_1_Template, 4, 0, "div", 51)(2, ClientDetailsComponent_div_3_div_40_div_2_Template, 18, 8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.claims.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.client.claims);
  }
}
function ClientDetailsComponent_div_3_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "No documents available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ClientDetailsComponent_div_3_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-chat-box", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modelName", "res.partner")("recordId", ctx_r1.client.dbId);
  }
}
function ClientDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12)(4, "div", 13)(5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 16)(13, "div", 17)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div")(17, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ClientDetailsComponent_div_3_p_19_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 22)(21, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 26)(28, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientDetailsComponent_div_3_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.createClaim());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Intimate Claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientDetailsComponent_div_3_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.createQuote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " New Quote ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 31)(35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ClientDetailsComponent_div_3_button_36_Template, 3, 6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ClientDetailsComponent_div_3_div_38_Template, 34, 13, "div", 35)(39, ClientDetailsComponent_div_3_div_39_Template, 3, 2, "div", 36)(40, ClientDetailsComponent_div_3_div_40_Template, 3, 2, "div", 36)(41, ClientDetailsComponent_div_3_div_41_Template, 5, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ClientDetailsComponent_div_3_div_42_Template, 2, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 13, "DETAILS.CLIENT.BREADCRUMB"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.client.arabicName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.client.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.client.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.error && ctx_r1.client);
  }
}
function ClientDetailsComponent_app_customer_selection_modal_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-customer-selection-modal", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("close", function ClientDetailsComponent_app_customer_selection_modal_4_Template_app_customer_selection_modal_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.isCustomerModalOpen = false);
    })("selectCustomer", function ClientDetailsComponent_app_customer_selection_modal_4_Template_app_customer_selection_modal_selectCustomer_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onCustomerSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r1.isCustomerModalOpen)("prefilledNationalId", (ctx_r1.client == null ? null : ctx_r1.client.nationalId) || (ctx_r1.client == null ? null : ctx_r1.client.id) || "");
  }
}
let ClientDetailsComponent = /*#__PURE__*/(() => {
  class ClientDetailsComponent {
    constructor(route, router, customerService, authService) {
      this.route = route;
      this.router = router;
      this.customerService = customerService;
      this.authService = authService;
      this.clientId = '';
      this.client = null;
      this.loading = true;
      this.error = null;
      this.activeTab = 'overview';
      this.isCustomerModalOpen = false;
      this.isChassisModalOpen = false;
    }
    ngOnInit() {
      this.clientId = this.route.snapshot.params['id'];
      this.loadClientDetails();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    loadClientDetails() {
      this.loading = true;
      this.error = null;
      const currentUser = this.authService.currentUserValue;
      if (!currentUser) {
        this.error = 'User not authenticated';
        this.loading = false;
        return;
      }
      // Use searchPartners API with identification_number
      this.customerService.searchPartners({
        identification_number: this.clientId,
        user_id: currentUser.id,
        user_type: 'broker'
      }).subscribe({
        next: response => {
          const rawData = response.result?.data || response.data || response;
          // Extract customer data from various response structures
          let customerData;
          if (rawData.contacts && Array.isArray(rawData.contacts)) {
            customerData = rawData.contacts[0];
          } else if (Array.isArray(rawData)) {
            customerData = rawData[0];
          } else if (rawData.national_id || rawData.english_name) {
            customerData = rawData;
          } else {
            customerData = null;
          }
          if (!customerData) {
            this.error = 'No customer data found for this ID';
            this.loading = false;
            return;
          }
          // Map customer data
          this.client = {
            dbId: customerData.id,
            id: customerData.national_id || customerData.id || this.clientId,
            name: customerData.english_name || customerData.name || customerData.partner_name || 'Unknown Name',
            arabicName: customerData.arabic_name || '',
            email: customerData.email || customerData.partner_email || 'N/A',
            phone: customerData.phone || customerData.phone_number || customerData.mobile || 'N/A',
            mobile: customerData.mobile || '',
            address: customerData.street || customerData.address || 'N/A',
            city: customerData.city || '',
            dateOfBirth: customerData.date_of_birth || '',
            gender: customerData.gender || '',
            nationalId: customerData.national_id || '',
            passportId: customerData.passport_id || '',
            isForeignCustomer: customerData.is_foreign_customer || false,
            countryName: customerData.country_name || '',
            stateName: customerData.state_name || '',
            joinDate: customerData.created_at || customerData.create_date || new Date().toISOString().split('T')[0],
            status: customerData.is_customer || customerData.is_active || customerData.active ? 'Active' : 'Inactive',
            // Policies and claims - will be empty arrays for now
            // In a real implementation, these would come from separate API calls
            policies: customerData.policies || [],
            claims: customerData.claims || []
          };
          this.loading = false;
        },
        error: err => {
          console.error('Error loading client details:', err);
          this.error = err?.error?.result?.error || err?.error?.message || err?.message || 'Failed to load client details';
          this.loading = false;
        }
      });
    }
    goBack() {
      this.router.navigate(['/dashboard/broker/clients']);
    }
    setActiveTab(tab) {
      this.activeTab = tab;
      setTimeout(() => {
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }, 100);
    }
    createQuote() {
      // Open customer selection modal like in quotations page
      this.isCustomerModalOpen = true;
    }
    createClaim() {
      // Open chassis validation modal like in claims page
      this.isChassisModalOpen = true;
    }
    onCustomerSelected(customer) {
      this.isCustomerModalOpen = false;
      this.router.navigate(['/dashboard/broker/quote/new'], {
        state: {
          customer: customer
        }
      });
    }
    onChassisValidated(chassisData) {
      this.isChassisModalOpen = false;
      // Navigate to file claim with chassis data
      this.router.navigate(['/dashboard/broker/claims/new'], {
        state: {
          chassisData: chassisData,
          clientId: this.clientId
        }
      });
    }
    getTotalPoliciesValue() {
      if (!this.client || !this.client.policies) return 0;
      return this.client.policies.reduce((acc, curr) => acc + (curr.premium || 0), 0);
    }
    static {
      this.ɵfac = function ClientDetailsComponent_Factory(t) {
        return new (t || ClientDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: ClientDetailsComponent,
        selectors: [["app-client-details"]],
        decls: 6,
        vars: 5,
        consts: [["class", "p-8 flex justify-center", 4, "ngIf"], ["class", "p-8 text-center", 4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], [3, "isOpen", "prefilledNationalId", "close", "selectCustomer", 4, "ngIf"], [3, "close", "isOpen"], [1, "p-8", "flex", "justify-center"], [1, "p-8", "text-center"], [1, "text-red-500", "mb-4"], [1, "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click"], [1, "space-y-8"], [1, "relative", "overflow-hidden", "rounded-2xl", "p-4", "-m-4"], [1, "absolute", "inset-0", "pointer-events-none", "z-0", 2, "background-image", "url('assets/img/backgrounds/clients-header.svg')", "background-repeat", "no-repeat", "background-position", "center", "background-size", "cover"], [1, "relative", "z-10", "flex", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-200"], [1, "hover:text-white", "transition-colors", 3, "routerLink"], [1, "text-white", "font-medium"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-4"], [1, "w-16", "h-16", "bg-white/10", "backdrop-blur-sm", "rounded-full", "flex", "items-center", "justify-center", "text-white", "border-2", "border-white/20", "shadow-sm"], ["data-lucide", "user", 1, "w-8", "h-8"], [1, "text-2xl", "font-bold", "text-white"], ["class", "text-lg text-gray-200 mt-1", 4, "ngIf"], [1, "flex", "items-center", "gap-4", "text-sm", "text-gray-200", "mt-1"], [1, "flex", "items-center", "gap-1"], ["data-lucide", "mail", 1, "w-3", "h-3"], ["data-lucide", "phone", 1, "w-3", "h-3"], [1, "flex", "items-center", "gap-3"], [1, "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["data-lucide", "alert-circle", 1, "w-4", "h-4"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["data-lucide", "plus", 1, "w-4", "h-4"], [1, "border-b", "border-gray-200", "dark:border-gray-700"], [1, "flex", "gap-8"], ["class", "pb-4 text-sm font-medium capitalize transition-all duration-300 relative", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "space-y-6"], ["class", "space-y-6", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "mt-8", 4, "ngIf"], [1, "text-lg", "text-gray-200", "mt-1"], [1, "pb-4", "text-sm", "font-medium", "capitalize", "transition-all", "duration-300", "relative", 3, "click", "ngClass"], ["class", "absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full", 4, "ngIf"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-0.5", "bg-primary", "rounded-t-full"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300"], [1, "font-bold", "text-navy", "dark:text-white", "mb-4"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-y-4", "text-sm"], [1, "text-gray-500", "dark:text-gray-400"], [1, "font-medium", "text-navy", "dark:text-white"], [4, "ngIf"], [1, "col-span-2", "md:col-span-3", "lg:col-span-4"], [1, "font-medium", "text-navy", "dark:text-white", "capitalize"], [1, "space-y-4"], ["class", "text-center py-12", 4, "ngIf"], ["class", "bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between hover:shadow-md transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "text-center", "py-12"], ["data-lucide", "shield", 1, "mx-auto", "h-12", "w-12", "text-gray-400", "mb-4"], [1, "bg-white", "dark:bg-gray-800", "p-4", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "flex", "items-center", "justify-between", "hover:shadow-md", "transition-all", "duration-300"], [1, "w-10", "h-10", "bg-blue-50", "dark:bg-blue-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-primary"], ["data-lucide", "shield", 1, "w-5", "h-5"], [1, "font-bold", "text-navy", "dark:text-white"], [1, "text-sm", "text-gray-600", "dark:text-gray-300"], [1, "text-xs", "text-gray-400"], [1, "text-right"], [1, "px-2", "py-1", "bg-green-100", "text-green-800", "rounded", "text-xs", "font-bold", "uppercase"], [1, "text-sm", "font-bold", "text-navy", "dark:text-white", "mt-1"], [1, "text-xs", "text-primary", "hover:underline", "block", "mt-1", 3, "routerLink"], ["data-lucide", "alert-circle", 1, "mx-auto", "h-12", "w-12", "text-gray-400", "mb-4"], [1, "w-10", "h-10", "bg-red-50", "dark:bg-red-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-red-500"], ["data-lucide", "alert-circle", 1, "w-5", "h-5"], [1, "px-2", "py-1", "bg-yellow-100", "text-yellow-800", "rounded", "text-xs", "font-bold", "uppercase"], [1, "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "mt-1"], ["data-lucide", "file-text", 1, "mx-auto", "h-12", "w-12", "text-gray-400", "mb-4"], [1, "mt-8"], [3, "modelName", "recordId"], [3, "close", "selectCustomer", "isOpen", "prefilledNationalId"]],
        template: function ClientDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientDetailsComponent_div_1_Template, 2, 0, "div", 0)(2, ClientDetailsComponent_div_2_Template, 5, 1, "div", 1)(3, ClientDetailsComponent_div_3_Template, 43, 17, "div", 2)(4, ClientDetailsComponent_app_customer_selection_modal_4_Template, 1, 2, "app-customer-selection-modal", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-chassis-validation-modal", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("close", function ClientDetailsComponent_Template_app_chassis_validation_modal_close_5_listener() {
              return ctx.isChassisModalOpen = false;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.client);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isCustomerModalOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx.isChassisModalOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__.DashboardLayoutComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent, _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_4__.CustomerSelectionModalComponent, _shared_components_chassis_validation_modal_chassis_validation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ChassisValidationModalComponent, _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_6__.ChatBoxComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe]
      });
    }
  }
  return ClientDetailsComponent;
})();

/***/ }),

/***/ 4637:
/*!******************************************************************!*\
  !*** ./src/app/broker/pages/clients/broker-clients.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerClientsComponent: () => (/* binding */ BrokerClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/customer.service */ 5680);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/customer-selection-modal/customer-selection-modal.component */ 3861);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3955);












function BrokerClientsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.error), " ");
  }
}
function BrokerClientsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BrokerClientsComponent_app_dynamic_table_with_filters_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filteredDataChange", function BrokerClientsComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("filterChange", function BrokerClientsComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onFilterChange($event));
    })("exportData", function BrokerClientsComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function BrokerClientsComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r0.getDisplayData())("columns", ctx_r0.columns)("showExport", true)("maxSelectOptions", 10);
  }
}
function BrokerClientsComponent_app_pagination_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function BrokerClientsComponent_app_pagination_17_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onPageChange($event));
    })("pageSizeChange", function BrokerClientsComponent_app_pagination_17_Template_app_pagination_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentPage", ctx_r0.currentPage)("pageSize", ctx_r0.pageSize)("totalRecords", ctx_r0.totalRecords);
  }
}
let BrokerClientsComponent = /*#__PURE__*/(() => {
  class BrokerClientsComponent {
    constructor(customerService, authService, router, appTranslate) {
      this.customerService = customerService;
      this.authService = authService;
      this.router = router;
      this.appTranslate = appTranslate;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      this.isCustomerModalOpen = false;
      this.hasActiveFilters = false; // Track if user is filtering
      // Pagination
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 1000; // Initial estimate, will be updated after fetch
      // Caching mechanism
      // Caching mechanism
      this.cachedData = []; // All loaded clients in memory
      this.isBackgroundLoading = false;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadFirstPage();
    }
    loadFirstPage() {
      this.isLoading = true;
      const user = this.authService.currentUserValue;
      if (!user) return;
      // Load ONLY first page for fast display
      this.customerService.getCustomers(user.id, 'broker', {
        limit: this.pageSize,
        offset: 0
      }).subscribe({
        next: res => {
          const rawData = res.result?.data || res.data || res;
          let contactsArray = [];
          if (rawData.contacts && Array.isArray(rawData.contacts)) {
            contactsArray = rawData.contacts;
            if (rawData.total_count) this.totalRecords = rawData.total_count;
          } else if (Array.isArray(rawData)) {
            contactsArray = rawData;
          } else if (rawData.data && Array.isArray(rawData.data)) {
            contactsArray = rawData.data;
          }
          if (this.totalRecords === 1000 && contactsArray.length < this.pageSize) {
            this.totalRecords = contactsArray.length;
          }
          // Map and cache first page
          const mappedClients = contactsArray.map(c => this.mapClient(c));
          this.cachedData = [...mappedClients];
          this.data = mappedClients;
          this.isLoading = false;
          console.log(`✓ Page 1 loaded. Starting background loading...`);
          // Start background loading
          this.loadAllInBackground();
        },
        error: err => {
          console.error('Error loading clients', err);
          this.error = 'BROKER.CLIENTS.ERROR_LOADING';
          this.isLoading = false;
        }
      });
    }
    loadAllInBackground() {
      const user = this.authService.currentUserValue;
      if (!user) return;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      const fetchNextBatch = () => {
        this.customerService.getCustomers(user.id, 'broker', {
          limit: batchSize,
          offset: offset
        }).subscribe({
          next: res => {
            const rawData = res.result?.data || res.data || res;
            let contactsArray = [];
            if (rawData.contacts && Array.isArray(rawData.contacts)) {
              contactsArray = rawData.contacts;
            } else if (Array.isArray(rawData)) {
              contactsArray = rawData;
            } else if (rawData.data && Array.isArray(rawData.data)) {
              contactsArray = rawData.data;
            }
            const mappedClients = contactsArray.map(c => this.mapClient(c));
            allData = [...allData, ...mappedClients];
            if (rawData.total_count) this.totalRecords = rawData.total_count;
            if (contactsArray.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              this.cachedData = allData;
              this.totalRecords = allData.length;
              if (this.currentPage === 1 && this.data.length === 0 && allData.length > 0) {
                this.displayCurrentPage();
              }
              console.log(`✓ Cached all ${allData.length} clients recursively.`);
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    displayCurrentPage() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.data = this.cachedData.slice(startIndex, endIndex).filter(c => c !== undefined);
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'clientId',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.CLIENT_ID'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'name',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.FULL_NAME'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'email',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.EMAIL'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'phone',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.PHONE'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'status',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row.status)
      }, {
        key: 'totalPolicies',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.POLICIES'),
        filterable: false
      }, {
        key: 'joinDate',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.JOIN_DATE'),
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.CLIENTS.COLUMNS.ACTIONS'),
        filterable: false,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="edit" data-id="${row.id}" title="Edit Client">
                            <i data-lucide="edit" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
    }
    renderStatus(status) {
      const s = status?.toLowerCase() || 'inactive';
      let classes = '';
      if (['active'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else {
        classes = 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
      }
      const translatedStatus = this.appTranslate.instant(`STATUS.${s.toUpperCase()}`);
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${translatedStatus}</span>`;
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
    mapClient(c) {
      return {
        id: c.national_id || c.id,
        clientId: c.national_id || c.id || 'N/A',
        name: c.english_name || c.arabic_name || 'Unknown Name',
        email: c.email || 'N/A',
        phone: c.phone || c.mobile || 'N/A',
        status: c.is_customer ? 'active' : 'inactive',
        totalPolicies: c.policy_count || 0,
        joinDate: c.create_date || 'N/A'
      };
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    onFilterChange(activeFilters) {
      // Properly detect if filters are active based on the filter object from table
      this.hasActiveFilters = Object.keys(activeFilters).length > 0;
    }
    /**
     * Get the data to display in the table
     * If filtering is active, return ALL cached data (we have everything!)
     * Otherwise, return only the current page
     */
    getDisplayData() {
      if (this.hasActiveFilters) {
        // Return all cached data for filtering (instant search!)
        return this.cachedData;
      }
      // Return current page data
      return this.data;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/broker/clients', event.data.id]);
          break;
        case 'edit':
          console.log('Edit client', event.data.id);
          // Navigate to edit page if implemented
          break;
      }
    }
    onExport() {
      console.log('Exporting clients...');
    }
    onCustomerSelected(customerData) {
      this.router.navigate(['/dashboard/broker/quote/new'], {
        state: {
          customer: customerData
        }
      });
      this.isCustomerModalOpen = false;
    }
    static {
      this.ɵfac = function BrokerClientsComponent_Factory(t) {
        return new (t || BrokerClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: BrokerClientsComponent,
        selectors: [["app-broker-clients"]],
        decls: 19,
        vars: 11,
        consts: [[1, "space-y-6"], [1, "bg-purple-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-purple-500", "to-purple-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "users", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [3, "close", "selectCustomer", "isOpen"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function BrokerClientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, BrokerClientsComponent_div_14_Template, 3, 3, "div", 9)(15, BrokerClientsComponent_div_15_Template, 2, 0, "div", 10)(16, BrokerClientsComponent_app_dynamic_table_with_filters_16_Template, 1, 4, "app-dynamic-table-with-filters", 11)(17, BrokerClientsComponent_app_pagination_17_Template, 1, 3, "app-pagination", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "app-customer-selection-modal", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("close", function BrokerClientsComponent_Template_app_customer_selection_modal_close_18_listener() {
              return ctx.isCustomerModalOpen = false;
            })("selectCustomer", function BrokerClientsComponent_Template_app_customer_selection_modal_selectCustomer_18_listener($event) {
              return ctx.onCustomerSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 7, "BROKER.CLIENTS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 9, "BROKER.CLIENTS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isOpen", ctx.isCustomerModalOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_5__.CustomerSelectionModalComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerClientsComponent;
})();

/***/ }),

/***/ 2011:
/*!*******************************************************************!*\
  !*** ./src/app/broker/pages/commissions/commissions.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommissionsComponent: () => (/* binding */ CommissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/broker.service */ 621);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3955);












function CommissionsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r0.error), " ");
  }
}
function CommissionsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CommissionsComponent_app_dynamic_table_with_filters_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filteredDataChange", function CommissionsComponent_app_dynamic_table_with_filters_29_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("filterChange", function CommissionsComponent_app_dynamic_table_with_filters_29_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onFilterChange($event));
    })("exportData", function CommissionsComponent_app_dynamic_table_with_filters_29_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function CommissionsComponent_app_dynamic_table_with_filters_29_Template_app_dynamic_table_with_filters_action_0_listener($event) {
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
function CommissionsComponent_app_pagination_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-pagination", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function CommissionsComponent_app_pagination_30_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onPageChange($event));
    })("pageSizeChange", function CommissionsComponent_app_pagination_30_Template_app_pagination_pageSizeChange_0_listener($event) {
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
let CommissionsComponent = /*#__PURE__*/(() => {
  class CommissionsComponent {
    constructor(appTranslate, brokerService, authService, notificationService) {
      this.appTranslate = appTranslate;
      this.brokerService = brokerService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.totalCommissions = 0;
      this.paidCommissions = 0;
      this.pendingCommissions = 0;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      // Pagination (server-side)
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 0;
      this.paymentStatus = 'paid';
      // Caching mechanism
      this.cachedData = [];
      this.loadedPages = new Set();
      this.hasActiveFilters = false;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadFirstPage();
      this.loadAllInBackground();
      this.loadCommissionSummary();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'id',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.COMMISSION_ID'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'policyNumber',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.POLICY_NO'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'partnerName',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.CLIENT_NAME'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'productName',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.PRODUCT'),
        filterable: true
      }, {
        key: 'commissionRate',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.RATE'),
        filterable: false,
        render: row => row.commissionRate ? `${row.commissionRate}%` : 'N/A'
      }, {
        key: 'commissionAmount',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.COMMISSION'),
        filterable: false,
        render: row => row.commissionAmount ? `$${row.commissionAmount.toLocaleString()}` : '$0'
      }, {
        key: 'paymentStatus',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row.paymentStatus)
      }, {
        key: 'date',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.DATE'),
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.COMMISSIONS.COLUMNS.ACTIONS'),
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
      if (['paid'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['outstanding', 'pending'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      const translatedStatus = this.appTranslate.instant(`STATUS.${s.toUpperCase()}`);
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${translatedStatus}</span>`;
    }
    loadFirstPage() {
      this.isLoading = true;
      this.error = null;
      const currentUser = this.authService.currentUserValue;
      if (!currentUser || !currentUser.id) {
        this.handleUserError();
        return;
      }
      const agentId = currentUser.id;
      // Load page 1 immediately
      this.brokerService.getCommissions(agentId, this.paymentStatus, this.pageSize, 0).subscribe({
        next: response => {
          if (response.result?.data) {
            const mappedData = this.mapCommissionData(response.result.data);
            // Populate first page cache
            mappedData.forEach((item, index) => {
              this.cachedData[index] = item;
            });
            this.data = mappedData;
            // Initial total estimate
            if (this.totalRecords === 0) {
              this.totalRecords = response.result.total_count || 100;
            }
          } else {
            this.data = [];
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
      const agentId = currentUser.id;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      const fetchNextBatch = () => {
        this.brokerService.getCommissions(agentId, this.paymentStatus, batchSize, offset).subscribe({
          next: response => {
            const batchData = response.result?.data || [];
            const mappedBatch = this.mapCommissionData(batchData);
            allData = [...allData, ...mappedBatch];
            // If we received a full batch, assume there's more and fetch next
            if (batchData.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              // Finished loading all data
              this.cachedData = allData;
              this.totalRecords = allData.length;
              // Refresh view if needed
              if (this.currentPage === 1 && this.data.length === 0 && allData.length > 0) {
                this.displayCurrentPage();
              }
              console.log(`✓ Cached all ${allData.length} commissions recursively.`);
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    handleUserError() {
      this.error = 'ERROR.USER_NOT_FOUND';
      this.isLoading = false;
      this.notificationService.error(this.appTranslate.instant('ERROR.USER_NOT_FOUND'));
    }
    loadCommissionSummary() {
      const currentUser = this.authService.currentUserValue;
      if (!currentUser || !currentUser.id) return;
      const agentId = currentUser.id;
      // Load paid commissions
      this.brokerService.getCommissions(agentId, 'paid').subscribe({
        next: response => {
          if (response.result?.data) {
            this.paidCommissions = response.result.data.reduce((sum, item) => sum + (item.commission_amount || 0), 0);
          }
        }
      });
      // Load outstanding commissions
      this.brokerService.getCommissions(agentId, 'outstanding').subscribe({
        next: response => {
          if (response.result?.data) {
            this.pendingCommissions = response.result.data.reduce((sum, item) => sum + (item.commission_amount || 0), 0);
          }
          this.totalCommissions = this.paidCommissions + this.pendingCommissions;
        }
      });
    }
    mapCommissionData(apiData) {
      return apiData.map(item => ({
        id: item.id || '',
        policyNumber: item.policy_number || 'N/A',
        partnerName: item.partner_name || 'N/A',
        productName: item.product_name || 'N/A',
        commissionRate: item.commission_rate || 0,
        commissionAmount: item.commission_amount || 0,
        paymentStatus: item.payment_status || 'outstanding',
        date: item.date || item.create_date || 'N/A'
      }));
    }
    handleError(error) {
      console.error('Error loading commissions:', error);
      // Check if it's a "no data found" error (which is not really an error)
      const errorMessage = error?.error?.error?.message || error?.message || '';
      if (errorMessage.includes('No commission lines found')) {
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
      // TODO: Implement view commission details
    }
    onExport() {
      console.log('Exporting commissions...');
      // TODO: Implement export functionality
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
      this.ɵfac = function CommissionsComponent_Factory(t) {
        return new (t || CommissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_0__.AppTranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__.BrokerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: CommissionsComponent,
        selectors: [["app-commissions"]],
        decls: 31,
        vars: 22,
        consts: [[1, "space-y-6"], [1, "bg-green-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-green-500", "to-green-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "trending-up", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [3, "title"], [1, "text-3xl", "font-bold", "text-primary"], [1, "text-3xl", "font-bold", "text-green-600"], [1, "text-3xl", "font-bold", "text-yellow-600"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function CommissionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8)(14, "app-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "app-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "app-card", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, CommissionsComponent_div_27_Template, 3, 3, "div", 14)(28, CommissionsComponent_div_28_Template, 2, 0, "div", 15)(29, CommissionsComponent_app_dynamic_table_with_filters_29_Template, 1, 4, "app-dynamic-table-with-filters", 16)(30, CommissionsComponent_app_pagination_30_Template, 1, 3, "app-pagination", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 12, "BROKER.COMMISSIONS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 14, "BROKER.COMMISSIONS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 16, "BROKER.COMMISSIONS.CARDS.TOTAL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx.totalCommissions.toLocaleString(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 18, "BROKER.COMMISSIONS.CARDS.PAID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx.paidCommissions.toLocaleString(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 20, "BROKER.COMMISSIONS.CARDS.PENDING"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx.pendingCommissions.toLocaleString(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__.DashboardLayoutComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe]
      });
    }
  }
  return CommissionsComponent;
})();

/***/ }),

/***/ 3949:
/*!**********************************************************************!*\
  !*** ./src/app/broker/pages/dashboard/broker-dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerDashboardComponent: () => (/* binding */ BrokerDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 7468);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 8010);
/* harmony import */ var src_app_core_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/policy.service */ 2166);
/* harmony import */ var src_app_core_services_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/crm.service */ 5740);
/* harmony import */ var src_app_core_services_claim_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/claim.service */ 4644);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/customer-selection-modal/customer-selection-modal.component */ 3861);
/* harmony import */ var _shared_components_chassis_validation_modal_chassis_validation_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/chassis-validation-modal/chassis-validation-modal.component */ 1283);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3955);














const _c0 = () => ["week", "month", "year"];
function BrokerDashboardComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrokerDashboardComponent_button_11_Template_button_click_0_listener() {
      const period_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.setSelectedPeriod(period_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-primary", ctx_r2.selectedPeriod === period_r2)("text-white", ctx_r2.selectedPeriod === period_r2)("bg-white", ctx_r2.selectedPeriod !== period_r2)("text-gray-600", ctx_r2.selectedPeriod !== period_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 9, "BROKER.DASHBOARD.PERFORMANCE." + period_r2.toUpperCase()), " ");
  }
}
function BrokerDashboardComponent_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "BROKER.DASHBOARD.PERFORMANCE.NO_DATA"));
  }
}
function BrokerDashboardComponent_table_197_tr_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 88)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](row_r4.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", row_r4.product.policies, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 4, "BROKER.DASHBOARD.PERFORMANCE.POLICIES"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r4.product.revenue, " ");
  }
}
function BrokerDashboardComponent_table_197_tr_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BrokerDashboardComponent_table_197_tr_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 88)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 ", row_r4.claimStat.config.bg, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("w-5 h-5 ", row_r4.claimStat.config.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-lucide", row_r4.claimStat.config.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](row_r4.claimStat.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", row_r4.claimStat.count, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 11, "BROKER.DASHBOARD.SECTION.CLAIMS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 13, row_r4.claimStat.amount), " ");
  }
}
function BrokerDashboardComponent_table_197_tr_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BrokerDashboardComponent_table_197_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 83)(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, BrokerDashboardComponent_table_197_tr_10_div_2_Template, 12, 6, "div", 85)(3, BrokerDashboardComponent_table_197_tr_10_div_3_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BrokerDashboardComponent_table_197_tr_10_div_5_Template, 12, 15, "div", 85)(6, BrokerDashboardComponent_table_197_tr_10_div_6_Template, 2, 0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r4.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !row_r4.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r4.claimStat);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !row_r4.claimStat);
  }
}
function BrokerDashboardComponent_table_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "table", 78)(1, "thead")(2, "tr", 79)(3, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "tbody", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, BrokerDashboardComponent_table_197_tr_10_Template, 7, 4, "tr", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, "BROKER.DASHBOARD.PERFORMANCE.PRODUCTION_PERFORMANCE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 5, "BROKER.DASHBOARD.PERFORMANCE.CLAIM_PERFORMANCE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.performanceRows);
  }
}
let BrokerDashboardComponent = /*#__PURE__*/(() => {
  class BrokerDashboardComponent {
    constructor(authService, policyService, crmService, claimService, router) {
      this.authService = authService;
      this.policyService = policyService;
      this.crmService = crmService;
      this.claimService = claimService;
      this.router = router;
      this.user = null;
      this.loading = false;
      this.selectedPeriod = 'month';
      this.policies = [];
      this.claims = [];
      this.opportunities = [];
      this.analytics = {
        activePolicies: 0,
        activePoliciesAmount: 0,
        paidPolicies: 0,
        paidPoliciesAmount: 0,
        notPaidPolicies: 0,
        notPaidPoliciesAmount: 0,
        canceledPolicies: 0,
        canceledPoliciesAmount: 0,
        cancellationRate: 0,
        totalClients: 0,
        totalOpportunities: 0,
        totalOpportunitiesAmount: 0,
        openOpportunities: 0,
        conversionRate: 0,
        totalPremium: 0,
        totalCommissions: 0,
        totalClaims: 0,
        activeClaims: 0,
        totalClaimAmount: 0
      };
      this.topPerformers = [];
      this.performanceRows = [];
      // Flag to ensure icons re-render only when needed or periodically
      this.iconsRendered = false;
      this.showChassisModal = false;
      this.isCustomerModalOpen = false;
    }
    ngOnInit() {
      this.authService.currentUser.subscribe(user => {
        if (user) {
          this.user = user;
          this.fetchDashboardData();
        }
      });
    }
    ngAfterViewChecked() {
      // Re-run Lucide icons creation if DOM changes
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    fetchDashboardData() {
      if (!this.user) return;
      this.loading = true;
      const userId = this.user.id || 2;
      const userType = this.user.role || 'broker';
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
        policies: this.fetchAllPolicies(userId, userType),
        opportunities: this.fetchAllOpportunities(userId, userType),
        claims: this.fetchAllClaims(userId, userType)
      }).subscribe({
        next: res => {
          this.policies = res.policies;
          // User requested to exclude 'Draft' from ALL cards
          this.policies = this.policies.filter(p => (p.state || '').toLowerCase() !== 'draft');
          this.opportunities = res.opportunities;
          this.claims = res.claims;
          this.calculateAnalytics();
          this.calculateTopPerformers();
          this.loading = false;
          console.log(`Loaded Dashboard Data: ${this.policies.length} Policies (Non-Draft), ${this.opportunities.length} Opportunities, ${this.claims.length} Claims`);
        },
        error: err => {
          console.error('Error fetching dashboard data', err);
          this.loading = false;
        }
      });
    }
    fetchAllPolicies(userId, userType, offset = 0, accrued = []) {
      return this.policyService.listPolicies({
        user_id: userId,
        user_type: userType,
        limit: 1000,
        offset: offset,
        domain: []
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
        const data = res.result?.data || res.data || res || [];
        const items = Array.isArray(data) ? data : [];
        const all = [...accrued, ...items];
        if (items.length < 1000) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(all);
        }
        return this.fetchAllPolicies(userId, userType, offset + 1000, all);
      }));
    }
    fetchAllOpportunities(userId, userType, offset = 0, accrued = []) {
      return this.crmService.listOpportunities({
        user_id: userId,
        user_type: userType,
        limit: 1000,
        offset: offset,
        domain: []
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
        const data = res.result?.data || res.data || res || [];
        const items = Array.isArray(data) ? data : [];
        const all = [...accrued, ...items];
        if (items.length < 1000) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(all);
        }
        return this.fetchAllOpportunities(userId, userType, offset + 1000, all);
      }));
    }
    fetchAllClaims(userId, userType, offset = 0, accrued = []) {
      return this.claimService.listClaims({
        user_id: userId,
        user_type: userType,
        limit: 1000,
        offset: offset,
        domain: []
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(res => {
        // Robust extraction matching BrokerClaimsComponent
        let items = [];
        if (Array.isArray(res)) items = res;else if (Array.isArray(res.data)) items = res.data;else if (res.data?.result?.data) items = res.data.result.data;else if (res.data?.data) items = res.data.data;else if (res.result?.data) items = res.result.data; // Also check standard Odoo wrapper
        const all = [...accrued, ...items];
        if (items.length < 1000) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(all);
        }
        return this.fetchAllClaims(userId, userType, offset + 1000, all);
      }));
    }
    calculateAnalytics() {
      // 1. Determine Date Range
      const now = new Date();
      let daysToFilter = 36500; // Default: All time (approx 100 years)
      if (this.selectedPeriod === 'week') daysToFilter = 7;
      if (this.selectedPeriod === 'month') daysToFilter = 30;
      if (this.selectedPeriod === 'year') daysToFilter = 365;
      const startDate = new Date(now.getTime() - daysToFilter * 24 * 60 * 60 * 1000);
      // 2. Filter Data Helper
      const isWithinPeriod = dateStr => {
        if (!dateStr) return false;
        const d = new Date(dateStr);
        return d >= startDate && d <= now;
      };
      // 3. Apply Filters
      // Policies (use issue_date)
      const filteredPolicies = this.policies.filter(p => isWithinPeriod(p.issue_date || p.start_date || p.create_date));
      // Opportunities (use create_date or date_deadline or write_date)
      const filteredOpportunities = this.opportunities.filter(o => isWithinPeriod(o.create_date || o.date_deadline));
      // Claims (use intimation_date, claim_date, etc - matching BrokerClaims)
      const filteredClaims = this.claims.filter(c => isWithinPeriod(c.intimation_date || c.claim_date || c.create_date || c.date || c.date_of_loss));
      // 4. Calculate Stats using Filtered Data
      // Active/Approved Policies
      // User requested: state 'Approved' only
      const activePolicies = filteredPolicies.filter(p => p.state === 'Approved');
      const active = activePolicies.length;
      const activePoliciesAmount = activePolicies.reduce((sum, p) => sum + (Number(p.net_premium) || 0), 0);
      // Paid Policies
      const paidPolicies = filteredPolicies.filter(p => ['paid', 'completed'].includes((p.payment_status || '').toLowerCase()));
      const paid = paidPolicies.length;
      const paidPoliciesAmount = paidPolicies.reduce((sum, p) => sum + (Number(p.net_premium) || 0), 0);
      // Not Paid Policies
      const notPaidPolicies = filteredPolicies.filter(p => !['paid', 'completed'].includes((p.payment_status || '').toLowerCase()));
      const notPaid = notPaidPolicies.length;
      const notPaidPoliciesAmount = notPaidPolicies.reduce((sum, p) => sum + (Number(p.net_premium) || 0), 0);
      // Canceled Policies
      const canceledPolicies = filteredPolicies.filter(p => ['Cancelled', 'Cancel', 'Canceled'].includes(p.state));
      const canceled = canceledPolicies.length;
      const canceledPoliciesAmount = canceledPolicies.reduce((sum, p) => sum + (Number(p.net_premium) || 0), 0);
      // Cancellation Rate
      const rate = filteredPolicies.length > 0 ? (canceled / filteredPolicies.length * 100).toFixed(1) : '0';
      // Unique Clients (Map customer_name)
      const uniqueClients = new Set(filteredPolicies.map(p => p.customer_name || p.customer_id).filter(Boolean)).size;
      // Won Opportunities
      const won = filteredOpportunities.filter(o => o.stage_name === 'Won').length;
      // Conversion Rate
      const convRate = filteredOpportunities.length > 0 ? (won / filteredOpportunities.length * 100).toFixed(1) : '0';
      // Total Premium
      const premium = activePoliciesAmount;
      // Open Opportunities
      const open = filteredOpportunities.filter(o => o.stage_name !== 'Won' && o.stage_name !== 'Lost').length;
      // Opportunities Amount
      const opportunitiesAmount = filteredOpportunities.reduce((sum, o) => sum + (Number(o.expected_revenue) || Number(o.planned_revenue) || 0), 0);
      // Claims Analytics
      const totalClaims = filteredClaims.length;
      const activeClaims = filteredClaims.filter(c => !['Settled', 'Closed', 'Rejected'].includes(c.status || c.state)).length;
      const totalClaimAmount = filteredClaims.reduce((sum, c) => sum + (Number(c.amount) || Number(c.estimated_amount) || Number(c.claim_amount) || 0), 0);
      this.analytics = {
        activePolicies: active,
        activePoliciesAmount: Math.round(activePoliciesAmount),
        paidPolicies: paid,
        paidPoliciesAmount: Math.round(paidPoliciesAmount),
        notPaidPolicies: notPaid,
        notPaidPoliciesAmount: Math.round(notPaidPoliciesAmount),
        canceledPolicies: canceled,
        canceledPoliciesAmount: Math.round(canceledPoliciesAmount),
        cancellationRate: Number(rate),
        totalClients: uniqueClients,
        totalOpportunities: filteredOpportunities.length,
        totalOpportunitiesAmount: Math.round(opportunitiesAmount),
        openOpportunities: open,
        conversionRate: Number(convRate),
        totalPremium: Math.round(premium),
        totalCommissions: 0,
        totalClaims: totalClaims,
        activeClaims: activeClaims,
        totalClaimAmount: Math.round(totalClaimAmount)
      };
    }
    calculateTopPerformers() {
      if (!this.policies.length && !this.claims.length) {
        this.performanceRows = [];
        return;
      }
      console.log('Calculating Performance...');
      const now = new Date();
      let daysToFilter = 36500;
      if (this.selectedPeriod === 'week') daysToFilter = 7;
      if (this.selectedPeriod === 'month') daysToFilter = 30;
      if (this.selectedPeriod === 'year') daysToFilter = 365;
      const startDate = new Date(now.getTime() - daysToFilter * 24 * 60 * 60 * 1000);
      const extractName = field => {
        if (Array.isArray(field) && field.length > 1) {
          return field[1];
        }
        return field || null;
      };
      // 1. Production Performance (Top Products)
      // Filter policies
      const filteredPolicies = this.policies.filter(p => {
        if (!p.issue_date) return true;
        const d = new Date(p.issue_date);
        return d >= startDate && d <= now;
      });
      const productGroups = {};
      filteredPolicies.forEach(p => {
        const name = extractName(p.product_id || p.product_name) || 'Unknown Product';
        if (!productGroups[name]) {
          productGroups[name] = {
            name,
            policies: 0,
            totalPremium: 0
          };
        }
        productGroups[name].policies++;
        productGroups[name].totalPremium += Number(p.net_premium) || 0;
      });
      const topProducts = Object.values(productGroups).map(g => ({
        name: g.name,
        policies: g.policies,
        revenue: `EGP ${Math.round(g.totalPremium).toLocaleString()}`,
        rawRevenue: g.totalPremium
      })).sort((a, b) => b.rawRevenue - a.rawRevenue).slice(0, 5);
      // 2. Claim Performance (Grouped by State)
      const filteredClaims = this.claims.filter(c => {
        const claimDate = c.intimation_date || c.claim_date || c.create_date || c.date || c.date_of_loss;
        if (!claimDate) return false;
        const d = new Date(claimDate);
        return d >= startDate && d <= now;
      });
      // Helper for state icons/colors
      const getStateConfig = state => {
        const s = state.toLowerCase();
        if (['new', 'draft', 'open', 'intimated', 'claim request'].includes(s)) return {
          icon: 'file-plus',
          color: 'text-blue-500',
          bg: 'bg-blue-50'
        };
        if (['in progress', 'review', 'under review', 'processing', 'pending', 'surveying'].includes(s)) return {
          icon: 'clock',
          color: 'text-orange-500',
          bg: 'bg-orange-50'
        };
        if (['paid', 'approved', 'settled', 'closed', 'active', 'fully paid', 'partially paid'].includes(s)) return {
          icon: 'check-circle',
          color: 'text-green-500',
          bg: 'bg-green-50'
        };
        if (['rejected', 'cancelled', 'canceled', 'declined', 'reopen'].includes(s)) return {
          icon: 'x-circle',
          color: 'text-red-500',
          bg: 'bg-red-50'
        };
        return {
          icon: 'help-circle',
          color: 'text-gray-400',
          bg: 'bg-gray-50'
        };
      };
      // Helper for state mapping
      const mapClaimState = rawState => {
        const s = rawState.toLowerCase();
        const mapping = {
          'claim_request': 'Claim Request',
          'draft': 'Draft',
          'open': 'Intimated',
          'surveying': 'Surveying',
          'partial': 'Partially Paid',
          'full': 'Fully Paid',
          'closed': 'Closed',
          'reopen': 'Reopen'
        };
        return mapping[s] || rawState.charAt(0).toUpperCase() + rawState.slice(1).toLowerCase();
      };
      const stateGroups = {};
      filteredClaims.forEach(c => {
        const rawState = extractName(c.stage_id) || c.state || c.status || 'Unknown';
        const state = mapClaimState(rawState);
        if (!stateGroups[state]) {
          stateGroups[state] = {
            state,
            count: 0,
            amount: 0,
            config: getStateConfig(state)
          };
        }
        stateGroups[state].count++;
        stateGroups[state].amount += Number(c.amount) || Number(c.estimated_amount) || Number(c.claim_amount) || 0;
      });
      const topStates = Object.values(stateGroups).sort((a, b) => b.count - a.count).slice(0, 5);
      // 3. Merge for Table Rows
      const maxRows = Math.max(topProducts.length, topStates.length);
      this.performanceRows = [];
      for (let i = 0; i < maxRows; i++) {
        this.performanceRows.push({
          product: topProducts[i] || null,
          claimStat: topStates[i] || null
        });
      }
      // For compliance with template (will update template to use performanceRows)
      this.topPerformers = this.performanceRows;
      console.log('Performance Rows:', this.performanceRows);
    }
    setSelectedPeriod(period) {
      if (this.selectedPeriod === period) {
        this.selectedPeriod = 'all'; // Deselect if clicked again
      } else {
        this.selectedPeriod = period;
      }
      this.calculateAnalytics();
      this.calculateTopPerformers();
    }
    toggleChassisModal() {
      this.showChassisModal = !this.showChassisModal;
    }
    openCustomerModal() {
      this.isCustomerModalOpen = true;
    }
    onCustomerSelected(customer) {
      this.isCustomerModalOpen = false;
      this.router.navigate(['/dashboard/broker/quote/new'], {
        state: {
          customer: customer
        }
      });
    }
    // Helper to get keys of an object (for template)
    objectKeys(obj) {
      return Object.keys(obj);
    }
    static {
      this.ɵfac = function BrokerDashboardComponent_Factory(t) {
        return new (t || BrokerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_policy_service__WEBPACK_IMPORTED_MODULE_1__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_crm_service__WEBPACK_IMPORTED_MODULE_2__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_claim_service__WEBPACK_IMPORTED_MODULE_3__.ClaimService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: BrokerDashboardComponent,
        selectors: [["app-broker-dashboard"]],
        decls: 231,
        vars: 131,
        consts: [[1, "space-y-8"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "text-3xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-300"], [1, "flex", "gap-2"], ["class", "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize border border-gray-200 hover:bg-gray-50 shadow-sm", 3, "bg-primary", "text-white", "bg-white", "text-gray-600", "click", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], [1, "space-y-4"], [1, "text-lg", "font-semibold", "text-navy", "flex", "items-center", "gap-2"], ["data-lucide", "shield", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "group", 3, "hover"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-medium", "text-gray-500"], [1, "text-2xl", "font-bold", "text-navy", "mt-1"], [1, "flex", "items-center", "mt-1", "text-xs", "font-medium", "text-green-600"], ["data-lucide", "arrow-up-right", 1, "w-3", "h-3", "mr-1"], [1, "p-3", "rounded-xl", "bg-gradient-to-br", "from-blue-500", "to-blue-600", "group-hover:scale-110", "transition-transform", "duration-300"], ["data-lucide", "shield", 1, "h-5", "w-5", "text-white"], [1, "flex", "items-center", "mt-1", "text-xs", "font-medium", "text-red-600"], ["data-lucide", "arrow-down-right", 1, "w-3", "h-3", "mr-1"], [1, "p-3", "rounded-xl", "bg-gradient-to-br", "from-red-500", "to-red-600", "group-hover:scale-110", "transition-transform", "duration-300"], ["data-lucide", "alert-circle", 1, "h-5", "w-5", "text-white"], [1, "flex", "items-center", "mt-1", "text-xs", "font-medium", "text-blue-600"], ["data-lucide", "dollar-sign", 1, "h-5", "w-5", "text-white"], ["data-lucide", "banknote", 1, "w-5", "h-5", "text-teal-500"], [1, "flex", "items-center", "mt-1", "text-xs", "font-medium", "text-teal-600"], ["data-lucide", "check-circle", 1, "w-3", "h-3", "mr-1"], [1, "p-3", "rounded-xl", "bg-gradient-to-br", "from-teal-500", "to-teal-600", "group-hover:scale-110", "transition-transform", "duration-300"], ["data-lucide", "credit-card", 1, "h-5", "w-5", "text-white"], [1, "flex", "items-center", "mt-1", "text-xs", "font-medium", "text-orange-600"], ["data-lucide", "alert-circle", 1, "w-3", "h-3", "mr-1"], [1, "p-3", "rounded-xl", "bg-gradient-to-br", "from-orange-500", "to-orange-600", "group-hover:scale-110", "transition-transform", "duration-300"], ["data-lucide", "clock", 1, "h-5", "w-5", "text-white"], [1, "flex", "items-center", "mt-1", "text-xs", "font-medium", "text-purple-600"], [1, "p-3", "rounded-xl", "bg-gradient-to-br", "from-purple-500", "to-purple-600", "group-hover:scale-110", "transition-transform", "duration-300"], ["data-lucide", "award", 1, "h-5", "w-5", "text-white"], ["data-lucide", "target", 1, "w-5", "h-5", "text-orange-500"], ["data-lucide", "target", 1, "h-5", "w-5", "text-white"], ["data-lucide", "trending-up", 1, "w-3", "h-3", "mr-1"], [1, "p-3", "rounded-xl", "bg-gradient-to-br", "from-green-500", "to-green-600", "group-hover:scale-110", "transition-transform", "duration-300"], ["data-lucide", "trending-up", 1, "h-5", "w-5", "text-white"], ["data-lucide", "file-text", 1, "w-5", "h-5", "text-teal-500"], ["data-lucide", "file-text", 1, "h-5", "w-5", "text-white"], ["data-lucide", "users", 1, "w-5", "h-5", "text-purple-500"], ["data-lucide", "users", 1, "h-5", "w-5", "text-white"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "lg:col-span-2", "bg-white", "rounded-xl", "shadow-sm", "border", "border-gray-100", "p-6"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-lg", "font-bold", "text-navy"], [1, "text-sm", "text-gray-500"], ["class", "text-center py-8", 4, "ngIf"], ["class", "w-full text-left", 4, "ngIf"], [1, "space-y-6"], [1, "bg-white", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "hover:shadow-md", "transition-all", "duration-300", "group"], [1, "font-bold", "text-navy", "mb-4", "flex", "items-center", "gap-2"], ["data-lucide", "zap", 1, "w-5", "h-5", "text-primary"], [1, "space-y-3"], [1, "w-full", "flex", "items-center", "justify-between", "p-4", "rounded-lg", "border-2", "border-gray-200", "hover:border-primary", "hover:bg-blue-50", "transition-all", "group", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "p-2", "bg-blue-100", "text-primary", "rounded-lg", "group-hover:bg-primary", "group-hover:text-white", "transition-all", "duration-300"], ["data-lucide", "plus", 1, "w-5", "h-5"], [1, "font-medium", "text-gray-700"], ["data-lucide", "arrow-up-right", 1, "w-4", "h-4", "text-gray-400", "group-hover:text-primary"], ["routerLink", "/dashboard/broker/clients", 1, "w-full", "flex", "items-center", "justify-between", "p-4", "rounded-lg", "border-2", "border-gray-200", "hover:border-purple-500", "hover:bg-purple-50", "transition-all", "group"], [1, "p-2", "bg-purple-100", "text-purple-600", "rounded-lg", "group-hover:bg-purple-600", "group-hover:text-white", "transition-all", "duration-300"], ["data-lucide", "users", 1, "w-5", "h-5"], ["data-lucide", "arrow-up-right", 1, "w-4", "h-4", "text-gray-400", "group-hover:text-purple-600"], [1, "w-full", "flex", "items-center", "justify-between", "p-4", "rounded-lg", "border-2", "border-gray-200", "hover:border-orange-500", "hover:bg-orange-50", "transition-all", "group", "text-left", 3, "click"], [1, "p-2", "bg-orange-100", "text-orange-600", "rounded-lg", "group-hover:bg-orange-600", "group-hover:text-white", "transition-all", "duration-300"], ["data-lucide", "file-text", 1, "w-5", "h-5"], ["data-lucide", "arrow-up-right", 1, "w-4", "h-4", "text-gray-400", "group-hover:text-orange-600"], [3, "close", "isOpen"], [3, "close", "selectCustomer", "isOpen"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-all", "duration-300", "capitalize", "border", "border-gray-200", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "text-center", "py-8"], ["data-lucide", "shield", 1, "w-12", "h-12", "text-gray-300", "mx-auto", "mb-3"], [1, "text-gray-500"], [1, "w-full", "text-left"], [1, "border-b", "border-gray-100"], [1, "pb-3", "font-semibold", "text-gray-600", "text-sm", "w-1/2"], [1, "divide-y", "divide-gray-50"], ["class", "hover:bg-gray-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-gray-50", "transition-colors"], [1, "py-4", "pr-4", "align-top"], ["class", "flex items-start gap-4", 4, "ngIf"], ["class", "text-sm text-gray-400 italic", 4, "ngIf"], [1, "py-4", "pl-4", "align-top"], [1, "flex", "items-start", "gap-4"], [1, "w-10", "h-10", "bg-primary/10", "rounded-lg", "flex-shrink-0", "flex", "items-center", "justify-center", "mt-1"], [1, "font-semibold", "text-navy"], [1, "mt-2", "text-sm", "text-green-600", "flex", "items-center"], [1, "text-sm", "text-gray-400", "italic"], [1, "mt-2", "text-sm", "text-gray-600", "flex", "items-center"]],
        template: function BrokerDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, BrokerDashboardComponent_button_11_Template, 3, 11, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 10)(19, "app-card", 11)(20, "div", 12)(21, "div")(22, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "app-card", 11)(34, "div", 12)(35, "div")(36, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "app-card", 11)(48, "div", 12)(49, "div")(50, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 7)(63, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 10)(68, "app-card", 11)(69, "div", 12)(70, "div")(71, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](79, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "app-card", 11)(83, "div", 12)(84, "div")(85, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](87, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](93, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "app-card", 11)(97, "div", 12)(98, "div")(99, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](101, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](104, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](106, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](108, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](110, "i", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "div", 7)(112, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](113, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](115, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 10)(117, "app-card", 11)(118, "div", 12)(119, "div")(120, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](122, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](126, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](128, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](130, "i", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "app-card", 11)(132, "div", 12)(133, "div")(134, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](136, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](140, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](142, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](144, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 7)(146, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](147, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](149, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div", 10)(151, "app-card", 11)(152, "div", 12)(153, "div")(154, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](156, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](160, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](162, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](164, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 7)(166, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](167, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](168);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](169, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "div", 10)(171, "app-card", 11)(172, "div", 12)(173, "div")(174, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](176, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](180, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](182, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](184, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "div", 46)(186, "div", 47)(187, "div", 48)(188, "div")(189, "h2", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](191, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "p", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](194, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](196, BrokerDashboardComponent_div_196_Template, 5, 3, "div", 51)(197, BrokerDashboardComponent_table_197_Template, 11, 7, "table", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "div", 53)(199, "div", 54)(200, "h3", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](201, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](203, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "div", 57)(205, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrokerDashboardComponent_Template_button_click_205_listener() {
              return ctx.openCustomerModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](206, "div", 59)(207, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](208, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](211, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](212, "i", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "button", 64)(214, "div", 59)(215, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](216, "i", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](219, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](220, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "button", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrokerDashboardComponent_Template_button_click_221_listener() {
              return ctx.toggleChassisModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "div", 59)(223, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](224, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](227, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](228, "i", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "app-chassis-validation-modal", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("close", function BrokerDashboardComponent_Template_app_chassis_validation_modal_close_229_listener() {
              return ctx.toggleChassisModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "app-customer-selection-modal", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("close", function BrokerDashboardComponent_Template_app_customer_selection_modal_close_230_listener() {
              return ctx.isCustomerModalOpen = false;
            })("selectCustomer", function BrokerDashboardComponent_Template_app_customer_selection_modal_selectCustomer_230_listener($event) {
              return ctx.onCustomerSelected($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 60, "BROKER.DASHBOARD.WELCOME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 62, "BROKER.DASHBOARD.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](130, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 64, "BROKER.DASHBOARD.SECTION.POLICIES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 66, "BROKER.DASHBOARD.STATS.ACTIVE_POLICIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.activePolicies);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 68, ctx.analytics.activePoliciesAmount), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 70, "BROKER.DASHBOARD.STATS.CANCELED_POLICIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.canceledPolicies);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 72, ctx.analytics.canceledPoliciesAmount), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](52, 74, "BROKER.DASHBOARD.STATS.TOTAL_PREMIUM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](55, 76, ctx.analytics.totalPremium), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](59, 78, "BROKER.DASHBOARD.STATS.NET_PREMIUM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 80, "BROKER.DASHBOARD.SECTION.PREMIUM_TRACKING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 82, "BROKER.DASHBOARD.STATS.PAID_POLICIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.paidPolicies);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](79, 84, ctx.analytics.paidPoliciesAmount), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](87, 86, "BROKER.DASHBOARD.STATS.NOT_PAID_POLICIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.notPaidPolicies);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](93, 88, ctx.analytics.notPaidPoliciesAmount), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](101, 90, "BROKER.DASHBOARD.STATS.TOTAL_COMMISSIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](104, 92, ctx.analytics.totalCommissions), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](108, 94, "BROKER.DASHBOARD.STATS.COMMISSION_EARNINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](115, 96, "BROKER.DASHBOARD.SECTION.QUOTATIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](122, 98, "BROKER.DASHBOARD.STATS.TOTAL_OPPORTUNITIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.totalOpportunities);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](128, 100, ctx.analytics.totalOpportunitiesAmount), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](136, 102, "BROKER.DASHBOARD.STATS.CONVERSION_RATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.analytics.conversionRate, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx.analytics.conversionRate, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](142, 104, "BROKER.DASHBOARD.STATS.OPPORTUNITIES_WON"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](149, 106, "BROKER.DASHBOARD.SECTION.CLAIMS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](156, 108, "BROKER.DASHBOARD.STATS.TOTAL_CLAIMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.totalClaims);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" EGP ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](162, 110, ctx.analytics.totalClaimAmount), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](169, 112, "BROKER.DASHBOARD.SECTION.CLIENTS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](176, 114, "BROKER.DASHBOARD.STATS.TOTAL_CLIENTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.analytics.totalClients);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx.analytics.totalClients, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](182, 116, "BROKER.DASHBOARD.STATS.UNIQUE_CLIENTS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](191, 118, "BROKER.DASHBOARD.PERFORMANCE.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](194, 120, "BROKER.DASHBOARD.PERFORMANCE.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.performanceRows.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.performanceRows.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](203, 122, "BROKER.DASHBOARD.QUICK_TOOLS.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](211, 124, "BROKER.DASHBOARD.QUICK_TOOLS.GET_QUOTE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](219, 126, "BROKER.DASHBOARD.QUICK_TOOLS.MANAGE_CLIENTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](227, 128, "BROKER.DASHBOARD.QUICK_TOOLS.CREATE_CLAIM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isOpen", ctx.showChassisModal);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isOpen", ctx.isCustomerModalOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__.DashboardLayoutComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_5__.CardComponent, _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_6__.CustomerSelectionModalComponent, _shared_components_chassis_validation_modal_chassis_validation_modal_component__WEBPACK_IMPORTED_MODULE_7__.ChassisValidationModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerDashboardComponent;
})();

/***/ }),

/***/ 409:
/*!*************************************************************************************!*\
  !*** ./src/app/broker/pages/due-renewal-policies/due-renewal-policies.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DueRenewalPoliciesComponent: () => (/* binding */ DueRenewalPoliciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/column-toggle/column-toggle.component */ 6117);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3955);












function DueRenewalPoliciesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r0.error), " ");
  }
}
function DueRenewalPoliciesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function DueRenewalPoliciesComponent_app_dynamic_table_with_filters_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filteredDataChange", function DueRenewalPoliciesComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("filterChange", function DueRenewalPoliciesComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onFilterChange($event));
    })("exportData", function DueRenewalPoliciesComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function DueRenewalPoliciesComponent_app_dynamic_table_with_filters_16_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r0.getDisplayData())("columns", ctx_r0.visibleColumns)("showExport", true)("maxSelectOptions", 10);
  }
}
function DueRenewalPoliciesComponent_app_pagination_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-pagination", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function DueRenewalPoliciesComponent_app_pagination_17_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onPageChange($event));
    })("pageSizeChange", function DueRenewalPoliciesComponent_app_pagination_17_Template_app_pagination_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentPage", ctx_r0.currentPage)("pageSize", ctx_r0.pageSize)("totalRecords", ctx_r0.totalRecords);
  }
}
let DueRenewalPoliciesComponent = /*#__PURE__*/(() => {
  class DueRenewalPoliciesComponent {
    constructor(policyService, authService, router, appTranslate) {
      this.policyService = policyService;
      this.authService = authService;
      this.router = router;
      this.appTranslate = appTranslate;
      this.allColumns = [];
      this.visibleColumns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      // Pagination
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 0;
      // Caching mechanism
      // Caching mechanism
      this.cachedData = [];
      this.hasActiveFilters = false;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadFirstPage();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.allColumns = [{
        key: 'riskImage',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.CAR_IMAGE'),
        filterable: false,
        render: row => this.renderBoolean(row.riskImage)
      }, {
        key: 'policyNumber',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.POLICY_NO'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'transactionType',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.TRANSACTION_TYPE'),
        filterable: true,
        render: row => this.renderTransactionType(row)
      }, {
        key: 'productName',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.PRODUCT'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'customerName',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.CUSTOMER'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'status',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row)
      }, {
        key: 'approveDate',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.APPROVE_DATE'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'issueDate',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.ISSUE_DATE'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'effectiveFrom',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.EFFECTIVE_FROM'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'effectiveTo',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.EFFECTIVE_TO'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'grossPremium',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.GROSS_PREMIUM'),
        filterable: false,
        render: row => this.renderCurrency(row.grossPremium, row.currency)
      }, {
        key: 'netPremium',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.NET_PREMIUM'),
        filterable: false,
        render: row => this.renderCurrency(row.netPremium, row.currency)
      }, {
        key: 'currency',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.CURRENCY'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'paymentStatus',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.PAYMENT_STATUS'),
        filterable: true,
        render: row => this.renderPaymentStatus(row.paymentStatus)
      }, {
        key: 'issuingBranch',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.ISSUING_BRANCH'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.ACTIONS'),
        filterable: false,
        mandatory: true,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="px-3 py-1 bg-primary text-white text-xs font-medium rounded hover:bg-primary-dark transition-colors" data-action="createRenewal" data-id="${row.id}" title="Create Renewal">
                            Create Renewal
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
      this.visibleColumns = [...this.allColumns];
    }
    onVisibleColumnsChange(columns) {
      this.visibleColumns = columns;
    }
    renderStatus(row) {
      const s = row.rawStatus || 'pending';
      let classes = '';
      if (['active', 'approved', 'paid'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'processing', 'review'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${row.status}</span>`;
    }
    renderTransactionType(row) {
      const t = row.rawTransactionType || 'new';
      let classes = 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      if (t === 'endorsement' || t === 'end') {
        classes = 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      } else if (t === 'renewal') {
        classes = 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300';
      } else if (t === 'cancellation' || t === 'cancel') {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      } else if (['non_technical', 'technical_refund', 'technical_add', 'technical_borndead'].includes(t)) {
        classes = 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${row.transactionType}</span>`;
    }
    renderPaymentStatus(status) {
      const s = status?.toLowerCase() || 'outstanding';
      let classes = '';
      if (['paid', 'completed'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'outstanding'].includes(s)) {
        classes = 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      const translatedStatus = this.appTranslate.instant(`STATUS.${s.toUpperCase()}`);
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${translatedStatus}</span>`;
    }
    renderBoolean(value) {
      return value ? '<i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mx-auto"></i>' : '<i data-lucide="x-circle" class="w-5 h-5 text-gray-300 mx-auto"></i>';
    }
    renderCurrency(amount, currency) {
      return `<span class="font-medium text-gray-900 dark:text-gray-100">${currency || 'EGP'} ${Number(amount).toLocaleString()}</span>`;
    }
    extractPoliciesData(response) {
      return response.data?.data || response.data?.result?.data || response.data || [];
    }
    loadFirstPage() {
      this.isLoading = true;
      const currentUser = this.authService.currentUserValue;
      if (!currentUser) return;
      const domain = `[("current", "=", True),("not_renewed", "!=", True),("is_renewal", "!=", True),("lob_names", "=", "سيارات"),("state", "=", "approved"),("renewal_request", "=", False),("renewal_difference", "<=", 60),("renewal_difference", ">=", -60),('invoice_paid', '=', True)]`;
      this.policyService.listPolicies({
        user_id: currentUser.id,
        user_type: 'broker',
        limit: this.pageSize,
        offset: 0,
        domain: domain
      }).subscribe({
        next: response => {
          const policiesData = this.extractPoliciesData(response);
          if (response.data?.total_count || response.data?.count) {
            this.totalRecords = response.data.total_count || response.data.count;
          } else {
            this.totalRecords = 1000;
          }
          const mappedData = this.mapPolicies(policiesData);
          this.cachedData = [...mappedData];
          this.data = mappedData;
          this.isLoading = false;
          console.log(`✓ Page 1 loaded. Starting background loading...`);
          this.loadAllInBackground(domain);
        },
        error: err => {
          console.error('Error loading policies:', err);
          this.error = 'BROKER.POLICIES.ERROR_LOADING';
          this.isLoading = false;
        }
      });
    }
    loadAllInBackground(domain) {
      const currentUser = this.authService.currentUserValue;
      if (!currentUser) return;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      const fetchNextBatch = () => {
        this.policyService.listPolicies({
          user_id: currentUser.id,
          user_type: 'broker',
          limit: batchSize,
          offset: offset,
          domain: domain
        }).subscribe({
          next: response => {
            const policiesData = this.extractPoliciesData(response);
            const mappedData = this.mapPolicies(policiesData);
            allData = [...allData, ...mappedData];
            if (response.data?.total_count || response.data?.count) {
              this.totalRecords = response.data.total_count || response.data.count;
            }
            if (policiesData.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              this.cachedData = allData;
              this.totalRecords = allData.length;
              // Refresh view ensuring consistency
              if (this.currentPage === 1 && this.data.length === 0 && allData.length > 0) {
                this.displayCurrentPage();
              }
              console.log(`✓ Cached all ${allData.length} due renewal policies recursively.`);
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    mapPolicies(policiesData) {
      return policiesData.map(p => {
        const rawStatus = (p.state || 'Draft').replace(/^STATUS\./i, '').toLowerCase();
        const statusDisplay = this.appTranslate.instant(`STATUS.${rawStatus.toUpperCase()}`);
        const rawTransactionType = (p.transaction_type || 'New').replace(/^TYPES\./i, '').toLowerCase();
        const typeDisplay = this.appTranslate.instant(`TYPES.${rawTransactionType.toUpperCase()}`);
        return {
          id: p.id || p.policy_number,
          policyNumber: p.policy_number || 'Draft',
          riskImage: p.risk_image,
          transactionType: typeDisplay,
          rawTransactionType: rawTransactionType,
          productName: p.product_name || 'Motor Private Section',
          customerName: p.customer_name || 'Customer',
          status: statusDisplay,
          rawStatus: rawStatus,
          approveDate: p.approve_date || '-',
          issueDate: p.issue_date || '-',
          effectiveFrom: p.effective_from_date || '-',
          effectiveTo: p.effective_to_date || '-',
          grossPremium: p.gross_premium || 0,
          netPremium: p.net_premium || 0,
          currency: p.currency || 'EGP',
          paymentStatus: p.payment_status || 'outstanding',
          issuingBranch: p.issuing_branch || 'Head office'
        };
      });
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    onFilterChange(activeFilters) {
      this.hasActiveFilters = Object.keys(activeFilters).length > 0;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'createRenewal':
          console.log('Create renewal for', event.data.id);
          break;
        case 'view':
          this.router.navigate(['/dashboard/broker/policies', event.data.id]);
          break;
        case 'download':
          console.log('Download policy', event.data.id);
          break;
        case 'more':
          console.log('More actions for', event.data.id);
          break;
      }
    }
    onExport() {
      console.log('Exporting policies...');
    }
    displayCurrentPage() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.data = this.cachedData.slice(startIndex, endIndex).filter(p => p !== undefined);
      this.isLoading = false;
    }
    getDisplayData() {
      if (this.hasActiveFilters) {
        return this.cachedData.filter(p => p !== undefined);
      }
      return this.data;
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
      this.ɵfac = function DueRenewalPoliciesComponent_Factory(t) {
        return new (t || DueRenewalPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: DueRenewalPoliciesComponent,
        selectors: [["app-due-renewal-policies"]],
        decls: 18,
        vars: 6,
        consts: [[1, "space-y-6"], [1, "bg-indigo-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-indigo-500", "to-indigo-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "refresh-cw", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-end"], [3, "visibleColumnsChange", "columns", "pageId"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function DueRenewalPoliciesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Due Renewal Policies");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Manage and renew policies that are due for renewal");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "app-column-toggle", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("visibleColumnsChange", function DueRenewalPoliciesComponent_Template_app_column_toggle_visibleColumnsChange_13_listener($event) {
              return ctx.onVisibleColumnsChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, DueRenewalPoliciesComponent_div_14_Template, 3, 3, "div", 11)(15, DueRenewalPoliciesComponent_div_15_Template, 2, 0, "div", 12)(16, DueRenewalPoliciesComponent_app_dynamic_table_with_filters_16_Template, 1, 4, "app-dynamic-table-with-filters", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, DueRenewalPoliciesComponent_app_pagination_17_Template, 1, 3, "app-pagination", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("columns", ctx.allColumns)("pageId", "due-renewal-policies-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_7__.ColumnToggleComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return DueRenewalPoliciesComponent;
})();

/***/ }),

/***/ 7829:
/*!**************************************************************************!*\
  !*** ./src/app/broker/pages/endorsement/broker-endorsement.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerEndorsementComponent: () => (/* binding */ BrokerEndorsementComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_endorsement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/endorsement.service */ 2540);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_form_inputs_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/form-inputs/date-picker/date-picker.component */ 3374);
/* harmony import */ var _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/selection-modal/selection-modal.component */ 2209);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3955);














function BrokerEndorsementComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "BROKER.ENDORSEMENT.POLICY_NUM"), "", ctx_r0.policyNumber, " ");
  }
}
function BrokerEndorsementComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 13);
  }
}
function BrokerEndorsementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "BROKER.ENDORSEMENT.LOADING_OPTIONS"), " ");
  }
}
function BrokerEndorsementComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, ctx_r0.error), " ");
  }
}
function BrokerEndorsementComponent_div_17_i_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 30);
  }
}
function BrokerEndorsementComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BrokerEndorsementComponent_div_17_div_1_Template, 4, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 17)(3, "div")(4, "app-selection-modal", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function BrokerEndorsementComponent_div_17_Template_app_selection_modal_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r0.formData.end_sub_type_code, $event) || (ctx_r0.formData.end_sub_type_code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function BrokerEndorsementComponent_div_17_Template_app_selection_modal_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onTypeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div")(10, "app-date-picker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BrokerEndorsementComponent_div_17_Template_app_date_picker_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r0.formData.effective_from_date, $event) || (ctx_r0.formData.effective_from_date = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "app-selection-modal", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("valueChange", function BrokerEndorsementComponent_div_17_Template_app_selection_modal_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r0.formData.endorsement_reason_id, $event) || (ctx_r0.formData.endorsement_reason_id = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function BrokerEndorsementComponent_div_17_Template_app_selection_modal_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onReasonChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div")(19, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BrokerEndorsementComponent_div_17_Template_textarea_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r0.formData.remarks, $event) || (ctx_r0.formData.remarks = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 24)(28, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerEndorsementComponent_div_17_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerEndorsementComponent_div_17_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, BrokerEndorsementComponent_div_17_i_32_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 27, "BROKER.ENDORSEMENT.SELECT_TYPE.LABEL"))("options", ctx_r0.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r0.formData.end_sub_type_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 29, "BROKER.ENDORSEMENT.SELECT_TYPE.TITLE"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 31, "BROKER.ENDORSEMENT.SELECT_TYPE.SUBTITLE"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 33, "BROKER.ENDORSEMENT.SELECT_TYPE.PLACEHOLDER"))("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 35, "BROKER.ENDORSEMENT.EFFECTIVE_DATE.LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.formData.effective_from_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 37, "BROKER.ENDORSEMENT.SELECT_REASON.LABEL"))("options", ctx_r0.reasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("value", ctx_r0.formData.endorsement_reason_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 39, "BROKER.ENDORSEMENT.SELECT_REASON.TITLE"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 41, "BROKER.ENDORSEMENT.SELECT_REASON.SUBTITLE"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 43, "BROKER.ENDORSEMENT.SELECT_REASON.PLACEHOLDER"))("disabled", !ctx_r0.formData.end_sub_type_code)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 45, "BROKER.ENDORSEMENT.REMARKS.LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 47, "BROKER.ENDORSEMENT.REMARKS.OPTIONAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 49, "BROKER.ENDORSEMENT.REMARKS.PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.formData.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 51, "BUTTON.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.submitting || !ctx_r0.formData.end_sub_type_code || !ctx_r0.formData.endorsement_reason_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.submitting ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 53, "BROKER.ENDORSEMENT.SUBMITTING") : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 55, "BROKER.ENDORSEMENT.SUBMIT"), " ");
  }
}
let BrokerEndorsementComponent = /*#__PURE__*/(() => {
  class BrokerEndorsementComponent {
    constructor(route, router, endorsementService, policyService, notificationService, appTranslate) {
      this.route = route;
      this.router = router;
      this.endorsementService = endorsementService;
      this.policyService = policyService;
      this.notificationService = notificationService;
      this.appTranslate = appTranslate;
      this.policyId = '';
      this.policyNumber = '';
      this.loading = false;
      this.submitting = false;
      this.error = null;
      this.pageLoading = true;
      this.types = [];
      this.reasons = [];
      this.formData = {
        end_sub_type_code: '',
        endorsement_reason_id: '',
        effective_from_date: new Date().toISOString().split('T')[0],
        remarks: ''
      };
    }
    ngOnInit() {
      this.policyId = this.route.snapshot.params['id'];
      if (this.policyId) {
        this.loadInitialData();
      } else {
        this.error = 'BROKER.ENDORSEMENT.ERROR.POLICY_MISSING';
        this.pageLoading = false;
      }
    }
    loadInitialData() {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          // Fetch policy details to get the real policy number
          const policyRes = yield _this.policyService.getPolicy(Number(_this.policyId)).toPromise();
          const policyData = policyRes?.result?.data || policyRes?.data || policyRes || {};
          _this.policyNumber = policyData.policy_number || policyData.name || policyData.policyId || _this.policyId;
          // Fetch endorsement types
          const types = yield _this.endorsementService.getEndorsementTypes().toPromise();
          _this.types = types || [];
          _this.pageLoading = false;
        } catch (err) {
          console.error('Failed to load initial data', err);
          _this.error = 'BROKER.ENDORSEMENT.ERROR.LOAD_FAILED';
          _this.pageLoading = false;
        }
      })();
    }
    onTypeChange(typeCode) {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.formData.end_sub_type_code = typeCode;
        _this2.formData.endorsement_reason_id = '';
        _this2.formData.remarks = '';
        _this2.reasons = [];
        if (!typeCode) return;
        try {
          const reasons = yield _this2.endorsementService.getEndorsementReasons(typeCode).toPromise();
          _this2.reasons = reasons || [];
        } catch (err) {
          console.error('Failed to load reasons', err);
        }
      })();
    }
    onReasonChange(reasonId) {
      this.formData.endorsement_reason_id = String(reasonId);
      const selectedReason = this.reasons.find(r => String(r.id) === String(reasonId));
      if (selectedReason) {
        this.formData.remarks = selectedReason.title || selectedReason.name || '';
      }
    }
    submit() {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this3.formData.end_sub_type_code || !_this3.formData.endorsement_reason_id || !_this3.formData.effective_from_date) {
          _this3.error = 'BROKER.ENDORSEMENT.ERROR.REQUIRED_FIELDS';
          _this3.notificationService.warning(_this3.appTranslate.instant('BROKER.ENDORSEMENT.ERROR.REQUIRED_FIELDS'));
          return;
        }
        _this3.submitting = true;
        _this3.error = null;
        try {
          const endorsementData = {
            end_sub_type_code: _this3.formData.end_sub_type_code,
            endorsement_reason_id: Number(_this3.formData.endorsement_reason_id),
            effective_from_date: _this3.formData.effective_from_date,
            remarks: _this3.formData.remarks || ''
          };
          // Only send calculation_type if NOT Wataniya
          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.clientId !== 'wataniya') {
            endorsementData.calculation_type = 'prorata';
          }
          const payload = {
            params: {
              data: {
                policy_number: _this3.policyNumber,
                lead_source: 'Web Portal',
                endorsement_data: endorsementData
              }
            }
          };
          const response = yield _this3.endorsementService.createEndorsement(payload).toPromise();
          // Check for JSON-RPC error in 200 OK response
          if (response?.error) {
            const specificMsg = response.error.data?.message || response.error.message;
            throw new Error(specificMsg || 'BROKER.ENDORSEMENT.ERROR.CREATION_FAILED');
          }
          _this3.notificationService.success(_this3.appTranslate.instant('BROKER.ENDORSEMENT.SUCCESS_MSG'));
          _this3.router.navigate(['/dashboard/broker/quotations']);
        } catch (err) {
          console.error('Failed to submit endorsement', err);
          // Try to extract the specific Odoo error message
          let errorMsg = 'BROKER.ENDORSEMENT.ERROR.SUBMISSION_FAILED';
          if (err?.error?.error?.data?.message) {
            errorMsg = err.error.error.data.message;
          } else if (err?.error?.data?.message) {
            errorMsg = err.error.data.message;
          } else if (err?.error?.message) {
            errorMsg = err.error.message;
          } else if (err?.message) {
            errorMsg = err.message;
          }
          _this3.error = errorMsg;
          // If the error message is our key, translate it. Otherwise use as is.
          const translatedError = errorMsg === 'BROKER.ENDORSEMENT.ERROR.SUBMISSION_FAILED' ? _this3.appTranslate.instant(errorMsg) : errorMsg;
          _this3.notificationService.error(translatedError);
        } finally {
          _this3.submitting = false;
        }
      })();
    }
    goBack() {
      this.router.navigate(['/dashboard/broker/policies', this.policyId]);
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    static {
      this.ɵfac = function BrokerEndorsementComponent_Factory(t) {
        return new (t || BrokerEndorsementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_endorsement_service__WEBPACK_IMPORTED_MODULE_2__.EndorsementService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_3__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_5__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: BrokerEndorsementComponent,
        selectors: [["app-broker-endorsement"]],
        decls: 18,
        vars: 10,
        consts: [[1, "max-w-5xl", "mx-auto", "px-4", "py-8"], [1, "inline-flex", "items-center", "text-sm", "text-gray-500", "hover:text-primary", "mb-6", "transition-colors", 3, "click"], ["data-lucide", "chevron-left", 1, "w-4", "h-4", "mr-1"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "p-6", "mb-6"], [1, "flex", "items-center", "gap-4", "mb-6"], [1, "w-12", "h-12", "bg-blue-50", "dark:bg-blue-900/30", "rounded-xl", "flex", "items-center", "justify-center", "text-primary"], ["data-lucide", "file-text", 1, "w-6", "h-6"], [1, "text-2xl", "font-bold", "text-navy-900", "dark:text-white"], ["class", "text-gray-600 dark:text-gray-400", 4, "ngIf"], ["class", "h-4 w-32 bg-gray-200 animate-pulse rounded mt-1", 4, "ngIf"], ["class", "p-8 text-center text-gray-500", 4, "ngIf"], [4, "ngIf"], [1, "text-gray-600", "dark:text-gray-400"], [1, "h-4", "w-32", "bg-gray-200", "animate-pulse", "rounded", "mt-1"], [1, "p-8", "text-center", "text-gray-500"], ["data-lucide", "loader-2", 1, "w-8", "h-8", "animate-spin", "mx-auto", "mb-2"], ["class", "mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2", 4, "ngIf"], [1, "space-y-6"], ["valueKey", "code", "displayKey", "name", 3, "valueChange", "label", "options", "value", "title", "subtitle", "placeholder", "required"], [3, "ngModelChange", "label", "ngModel", "disabled"], ["valueKey", "id", "displayKey", "name", 3, "valueChange", "label", "options", "value", "title", "subtitle", "placeholder", "disabled", "required"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], [1, "text-gray-400", "font-normal"], [1, "w-full", "rounded-lg", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-white", "focus:ring-primary", "focus:border-primary", "py-2", "px-3", "min-h-[100px]", "transition-colors", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex", "justify-end", "gap-3", "pt-6", "border-t", "border-gray-100", "dark:border-gray-700"], [1, "px-4", "py-2", "text-gray-600", "dark:text-gray-400", "hover:bg-gray-50", "dark:hover:bg-gray-700", "rounded-lg", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-primary", "text-white", "rounded-lg", "font-medium", "shadow-sm", "hover:bg-primary/90", "transition-all", "flex", "items-center", "gap-2", "disabled:opacity-70", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["data-lucide", "loader-2", "class", "w-4 h-4 animate-spin", 4, "ngIf"], [1, "mb-6", "p-4", "bg-red-50", "dark:bg-red-900/20", "text-red-700", "dark:text-red-300", "rounded-lg", "flex", "items-center", "gap-2"], ["data-lucide", "alert-circle", 1, "w-5", "h-5"], ["data-lucide", "loader-2", 1, "w-4", "h-4", "animate-spin"]],
        template: function BrokerEndorsementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerEndorsementComponent_Template_button_click_2_listener() {
              return ctx.goBack();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div")(11, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, BrokerEndorsementComponent_p_14_Template, 3, 4, "p", 8)(15, BrokerEndorsementComponent_div_15_Template, 1, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, BrokerEndorsementComponent_div_16_Template, 4, 3, "div", 10)(17, BrokerEndorsementComponent_div_17_Template, 36, 57, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 6, "BROKER.ENDORSEMENT.BACK_TO_POLICY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 8, "BROKER.ENDORSEMENT.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.pageLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.pageLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.pageLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.pageLoading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__.DashboardLayoutComponent, _shared_components_form_inputs_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__.DatePickerComponent, _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_8__.SelectionModalComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerEndorsementComponent;
})();

/***/ }),

/***/ 5491:
/*!********************************************************************!*\
  !*** ./src/app/broker/pages/policies/broker-policies.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerPoliciesComponent: () => (/* binding */ BrokerPoliciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/column-toggle/column-toggle.component */ 6117);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3955);












const _c0 = () => ["week", "month", "year"];
function BrokerPoliciesComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrokerPoliciesComponent_button_15_Template_button_click_0_listener() {
      const period_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.setSelectedPeriod(period_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-indigo-600", ctx_r2.selectedPeriod === period_r2)("text-white", ctx_r2.selectedPeriod === period_r2)("bg-white", ctx_r2.selectedPeriod !== period_r2)("text-gray-600", ctx_r2.selectedPeriod !== period_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 9, "BROKER.DASHBOARD.PERFORMANCE." + period_r2.toUpperCase()), " ");
  }
}
function BrokerPoliciesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r2.error), " ");
  }
}
function BrokerPoliciesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BrokerPoliciesComponent_app_dynamic_table_with_filters_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filteredDataChange", function BrokerPoliciesComponent_app_dynamic_table_with_filters_21_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onFilteredDataChange($event));
    })("filterChange", function BrokerPoliciesComponent_app_dynamic_table_with_filters_21_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onFilterChange($event));
    })("exportData", function BrokerPoliciesComponent_app_dynamic_table_with_filters_21_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onExport());
    })("action", function BrokerPoliciesComponent_app_dynamic_table_with_filters_21_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r2.getDisplayData())("columns", ctx_r2.visibleColumns)("showExport", true)("maxSelectOptions", 10)("pageSize", ctx_r2.pageSize)("currentPage", ctx_r2.currentPage);
  }
}
function BrokerPoliciesComponent_app_pagination_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-pagination", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function BrokerPoliciesComponent_app_pagination_22_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onPageChange($event));
    })("pageSizeChange", function BrokerPoliciesComponent_app_pagination_22_Template_app_pagination_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("currentPage", ctx_r2.currentPage)("pageSize", ctx_r2.pageSize)("totalRecords", ctx_r2.totalRecords);
  }
}
let BrokerPoliciesComponent = /*#__PURE__*/(() => {
  class BrokerPoliciesComponent {
    constructor(policyService, authService, router, appTranslate) {
      this.policyService = policyService;
      this.authService = authService;
      this.router = router;
      this.appTranslate = appTranslate;
      this.allColumns = [];
      this.visibleColumns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      // Pagination
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 0;
      // Caching mechanism
      // Caching mechanism
      this.cachedData = [];
      this.hasActiveFilters = false;
      // Date Filter Logic
      this.selectedPeriod = 'month';
      this.lastActivePage = 1;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadFirstPage();
    }
    // loadFirstPage removed
    // loadTotalCount removed
    mapPolicies(policiesData) {
      return policiesData.map(p => {
        // Pre-process Status
        const rawStatus = (p.state || 'Draft').replace(/^STATUS\./i, '').toLowerCase();
        const statusDisplay = this.appTranslate.instant(`STATUS.${rawStatus.toUpperCase()}`);
        // Pre-process Transaction Type
        const rawTransactionType = (p.transaction_type || 'New').replace(/^TYPES\./i, '').toLowerCase();
        const typeDisplay = this.appTranslate.instant(`TYPES.${rawTransactionType.toUpperCase()}`);
        return {
          id: p.id || p.policy_number,
          policyNumber: p.policy_number || 'Draft',
          riskImage: p.risk_image,
          transactionType: typeDisplay,
          rawTransactionType: rawTransactionType,
          productName: p.product_name || 'Motor Private Section',
          customerName: p.customer_name || 'Customer',
          status: statusDisplay,
          rawStatus: rawStatus,
          approveDate: p.approve_date || '-',
          issueDate: p.issue_date || '-',
          effectiveFrom: p.effective_from_date || '-',
          effectiveTo: p.effective_to_date || '-',
          grossPremium: p.gross_premium || 0,
          netPremium: p.net_premium || 0,
          currency: p.currency || 'EGP',
          paymentStatus: p.payment_status || 'outstanding',
          issuingBranch: p.issuing_branch || 'Head office'
        };
      });
    }
    clearCache() {
      this.cachedData = [];
    }
    setSelectedPeriod(period) {
      if (this.selectedPeriod === period) {
        this.selectedPeriod = 'all';
        // Restore previous page if valid
        const validCount = this.cachedData.filter(p => p !== undefined).length;
        const maxPage = Math.ceil(validCount / this.pageSize) || 1;
        if (this.lastActivePage > maxPage) {
          this.currentPage = 1;
        } else {
          this.currentPage = this.lastActivePage;
        }
      } else {
        // Store current page before switching filter
        this.lastActivePage = this.currentPage;
        this.selectedPeriod = period;
        this.currentPage = 1;
      }
      this.displayCurrentPage();
    }
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    // getDateDomain helper removed as it was for server-side
    displayCurrentPage() {
      let validItems = this.cachedData.filter(p => p !== undefined);
      // Apply Date Filter Client-Side
      if (this.selectedPeriod !== 'all') {
        const now = new Date();
        let daysToFilter = 36500;
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        if (this.selectedPeriod === 'week') {
          const day = start.getDay();
          const diff = (day + 1) % 7;
          start.setDate(now.getDate() - diff);
          // "Week" logic: Start of current week to now
          daysToFilter = 7; // Approximation or use precise date comparison
        } else if (this.selectedPeriod === 'month') {
          start.setDate(1);
        } else if (this.selectedPeriod === 'year') {
          start.setMonth(0, 1);
        }
        // Precise comparison using the calculated 'start' date
        validItems = validItems.filter(p => {
          if (!p.approveDate || p.approveDate === '-') return false;
          const d = new Date(p.approveDate);
          return d >= start && d <= now;
        });
      }
      this.totalRecords = validItems.length;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.data = validItems.slice(startIndex, endIndex);
      this.isLoading = false;
    }
    getDisplayData() {
      // Return full filtered list for table-level search if needed
      let validItems = this.cachedData.filter(p => p !== undefined);
      if (this.selectedPeriod !== 'all') {
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        if (this.selectedPeriod === 'week') {
          const day = start.getDay();
          const diff = (day + 1) % 7;
          start.setDate(now.getDate() - diff);
        } else if (this.selectedPeriod === 'month') {
          start.setDate(1);
        } else if (this.selectedPeriod === 'year') {
          start.setMonth(0, 1);
        }
        validItems = validItems.filter(p => {
          if (!p.approveDate || p.approveDate === '-') return false;
          const d = new Date(p.approveDate);
          return d >= start && d <= now;
        });
      }
      return validItems;
    }
    loadFirstPage() {
      this.isLoading = true;
      const user = this.authService.currentUserValue;
      if (!user) return;
      // No date domain - fetch ALL
      this.policyService.listPolicies({
        user_id: user.id,
        user_type: 'broker',
        limit: this.pageSize,
        offset: 0,
        domain: []
      }).subscribe({
        next: response => {
          const policiesData = response.data?.data || response.data?.result?.data || response.data || [];
          if (response.data?.total_count || response.data?.count) {
            this.totalRecords = response.data.total_count || response.data.count;
          } else {
            this.totalRecords = 0;
          }
          const mappedPolicies = this.mapPolicies(policiesData);
          this.cachedData = [...mappedPolicies];
          // Apply initial filter (if default is month)
          this.displayCurrentPage();
          console.log(`✓ Page 1 loaded. Starting background loading...`);
          this.loadAllInBackground();
        },
        error: err => {
          console.error('Error loading policies:', err);
          this.error = 'BROKER.POLICIES.ERROR_LOADING';
          this.isLoading = false;
        }
      });
    }
    loadAllInBackground() {
      const user = this.authService.currentUserValue;
      if (!user) return;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      // No date domain
      const fetchNextBatch = () => {
        // No duplicate check needed for date filter changes since we don't abort
        this.policyService.listPolicies({
          user_id: user.id,
          user_type: 'broker',
          limit: batchSize,
          offset: offset,
          domain: []
        }).subscribe({
          next: response => {
            const policiesData = response.data?.data || response.data?.result?.data || response.data || [];
            const mappedPolicies = this.mapPolicies(policiesData);
            allData = [...allData, ...mappedPolicies];
            if (response.data?.total_count || response.data?.count) {
              this.totalRecords = response.data.total_count || response.data.count;
            }
            if (policiesData.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              // Finished loading
              this.cachedData = allData;
              this.totalRecords = allData.length;
              // Refresh view to apply filters to full dataset
              this.displayCurrentPage();
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    setupColumns() {
      this.allColumns = [{
        key: 'riskImage',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.CAR_IMAGE'),
        filterable: false,
        render: row => this.renderBoolean(row.riskImage)
      }, {
        key: 'policyNumber',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.POLICY_NO'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'transactionType',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.TRANSACTION_TYPE'),
        filterable: true,
        render: row => this.renderTransactionType(row)
      }, {
        key: 'productName',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.PRODUCT'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'customerName',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.CUSTOMER'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'status',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row)
      }, {
        key: 'approveDate',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.APPROVE_DATE'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'issueDate',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.ISSUE_DATE'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'effectiveFrom',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.EFFECTIVE_FROM'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'effectiveTo',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.EFFECTIVE_TO'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'grossPremium',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.GROSS_PREMIUM'),
        filterable: false,
        render: row => this.renderCurrency(row.grossPremium, row.currency)
      }, {
        key: 'netPremium',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.NET_PREMIUM'),
        filterable: false,
        render: row => this.renderCurrency(row.netPremium, row.currency)
      }, {
        key: 'currency',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.CURRENCY'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'paymentStatus',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.PAYMENT_STATUS'),
        filterable: true,
        render: row => this.renderPaymentStatus(row.paymentStatus)
      }, {
        key: 'issuingBranch',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.ISSUING_BRANCH'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.POLICIES.COLUMNS.ACTIONS'),
        filterable: false,
        mandatory: true,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="download" data-id="${row.id}" title="Download Policy">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="more" data-id="${row.id}" title="More Actions">
                            <i data-lucide="more-horizontal" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
      this.visibleColumns = [...this.allColumns];
    }
    onVisibleColumnsChange(columns) {
      this.visibleColumns = columns;
    }
    renderStatus(row) {
      const s = row.rawStatus || 'pending';
      let classes = '';
      if (['active', 'approved', 'paid'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'processing', 'review'].includes(s)) {
        classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${row.status}</span>`;
    }
    renderTransactionType(row) {
      const t = row.rawTransactionType || 'new';
      let classes = 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      if (t === 'endorsement' || t === 'end') {
        classes = 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      } else if (t === 'renewal') {
        classes = 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300';
      } else if (t === 'cancellation' || t === 'cancel') {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      } else if (['non_technical', 'technical_refund', 'technical_add', 'technical_borndead'].includes(t)) {
        classes = 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300';
      }
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${row.transactionType}</span>`;
    }
    renderPaymentStatus(status) {
      const s = status?.toLowerCase() || 'outstanding';
      let classes = '';
      if (['paid', 'completed'].includes(s)) {
        classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      } else if (['pending', 'outstanding'].includes(s)) {
        classes = 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300';
      } else {
        classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      }
      const translatedStatus = this.appTranslate.instant(`STATUS.${s.toUpperCase()}`);
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${translatedStatus}</span>`;
    }
    renderBoolean(value) {
      return value ? '<i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mx-auto"></i>' : '<i data-lucide="x-circle" class="w-5 h-5 text-gray-300 mx-auto"></i>';
    }
    renderCurrency(amount, currency) {
      return `<span class="font-medium text-gray-900 dark:text-gray-100">${currency || 'EGP'} ${Number(amount).toLocaleString()}</span>`;
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    onFilterChange(activeFilters) {
      this.hasActiveFilters = Object.keys(activeFilters).length > 0;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/broker/policies', event.data.id]);
          break;
        case 'download':
          console.log('Download policy', event.data.id);
          // Implement download logic here
          break;
        case 'more':
          console.log('More actions for', event.data.id);
          break;
      }
    }
    onExport() {
      console.log('Exporting policies...');
      // Implement export logic here using this.filteredData
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
      this.ɵfac = function BrokerPoliciesComponent_Factory(t) {
        return new (t || BrokerPoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_0__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: BrokerPoliciesComponent,
        selectors: [["app-broker-policies"]],
        decls: 23,
        vars: 14,
        consts: [[1, "space-y-6"], [1, "bg-indigo-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-indigo-500", "to-indigo-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "shield", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "gap-2"], ["class", "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize border border-gray-200 hover:bg-gray-50 shadow-sm", 3, "bg-indigo-600", "text-white", "bg-white", "text-gray-600", "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-end"], [3, "visibleColumnsChange", "columns", "pageId"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "pageSize", "currentPage", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-all", "duration-300", "capitalize", "border", "border-gray-200", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions", "pageSize", "currentPage"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function BrokerPoliciesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6)(8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, BrokerPoliciesComponent_button_15_Template, 3, 11, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "app-column-toggle", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("visibleColumnsChange", function BrokerPoliciesComponent_Template_app_column_toggle_visibleColumnsChange_18_listener($event) {
              return ctx.onVisibleColumnsChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, BrokerPoliciesComponent_div_19_Template, 3, 3, "div", 14)(20, BrokerPoliciesComponent_div_20_Template, 2, 0, "div", 15)(21, BrokerPoliciesComponent_app_dynamic_table_with_filters_21_Template, 1, 6, "app-dynamic-table-with-filters", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, BrokerPoliciesComponent_app_pagination_22_Template, 1, 3, "app-pagination", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 9, "BROKER.POLICIES.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 11, "BROKER.POLICIES.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](13, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("columns", ctx.allColumns)("pageId", "broker-policies-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent, _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_7__.ColumnToggleComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerPoliciesComponent;
})();

/***/ }),

/***/ 1439:
/*!********************************************************************************!*\
  !*** ./src/app/broker/pages/policy-details/broker-policy-details.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerPolicyDetailsComponent: () => (/* binding */ BrokerPolicyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/quote.service */ 7244);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/chat-box/chat-box.component */ 2911);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3955);















const _c0 = (a0, a1, a2) => ({
  "bg-green-100 text-green-800": a0,
  "bg-yellow-100 text-yellow-800": a1,
  "bg-red-100 text-red-800": a2
});
const _c1 = a0 => ({
  "font-semibold bg-gray-50": a0
});
function BrokerPolicyDetailsComponent_div_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 39);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 39);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 39);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_63_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 94)(1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("width", 100 - ctx_r1.policy.daysToRenew / 365 * 100, "%");
  }
}
function BrokerPolicyDetailsComponent_div_1_div_63_app_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_div_63_app_button_30_Template_app_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.handleRenewPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.renewalLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getRenewalButtonText(), " ");
  }
}
function BrokerPolicyDetailsComponent_div_1_div_63_span_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(", ctx_r1.policy.vehicle.roadSideProgram, ")");
  }
}
function BrokerPolicyDetailsComponent_div_1_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "details", 42)(3, "summary", 43)(4, "div", 44)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i-lucide", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div")(8, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i-lucide", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 50)(16, "div", 51)(17, "div", 52)(18, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 54)(22, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, BrokerPolicyDetailsComponent_div_1_div_63_div_29_Template, 3, 2, "div", 57)(30, BrokerPolicyDetailsComponent_div_1_div_63_app_button_30_Template, 2, 2, "app-button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 59)(32, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 60)(36, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 60)(42, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 60)(48, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 64)(54, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "i-lucide", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 68)(63, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "i-lucide", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 71)(68, "div", 72)(69, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 72)(75, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 72)(81, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 72)(87, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 76)(93, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "i-lucide", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](96, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 68)(100, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](101, "i-lucide", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](103, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 35)(105, "div")(106, "h4", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](107, "i-lucide", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 82)(111, "div", 83)(112, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 83)(117, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div", 83)(122, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "div", 83)(127, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "div", 83)(132, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "Plate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "div", 83)(137, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "div", 83)(142, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](143, "Body Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "div", 83)(147, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](148, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 83)(152, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](153, "Fuel Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "div", 83)(157, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "Engine CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "div")(162, "h4", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](163, "i-lucide", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, " Technical & Coverage Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "div", 88)(166, "div", 83)(167, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "Chassis Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "div", 83)(172, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "Engine Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "div", 83)(177, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "div", 83)(182, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](183, "Sum Insured");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](186, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "div", 83)(188, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, "Roadside Assistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "div", 91)(191, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](193, BrokerPolicyDetailsComponent_div_1_div_63_span_193_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("open", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 50, "DETAILS.POLICY.HIGHLIGHTS.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 52, "DETAILS.POLICY.HIGHLIGHTS.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 54, "DETAILS.POLICY.HIGHLIGHTS.RENEWAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 56, "DETAILS.POLICY.HIGHLIGHTS.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](92, _c0, ctx_r1.policy.daysToRenew > 30, ctx_r1.policy.daysToRenew <= 30 && ctx_r1.policy.daysToRenew > 0, ctx_r1.policy.daysToRenew <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.daysToRenew > 0 ? ctx_r1.policy.daysToRenew + " " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 58, "DETAILS.POLICY.HIGHLIGHTS.DAYS_LEFT") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](28, 60, "DETAILS.POLICY.HIGHLIGHTS.EXPIRED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r1.policy == null ? null : ctx_r1.policy.daysToRenew) !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.canRenew());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](34, 62, "DETAILS.POLICY.HIGHLIGHTS.IMPORTANT_DATES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](38, 64, "DETAILS.POLICY.HIGHLIGHTS.START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.policy.coverage.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](44, 66, "DETAILS.POLICY.HIGHLIGHTS.END_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.policy.coverage.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](50, 68, "DETAILS.POLICY.HIGHLIGHTS.ISSUE_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.policy.issueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](58, 70, "DETAILS.POLICY.HIGHLIGHTS.FULLY_PAID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](61, 72, "DETAILS.POLICY.HIGHLIGHTS.ALL_SETTLED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](66, 74, "DETAILS.POLICY.HOLDER.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](71, 76, "DETAILS.POLICY.HOLDER.FULL_NAME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", ctx_r1.policy.policyHolder.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.policy.policyHolder.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](77, 78, "DETAILS.POLICY.HOLDER.NATIONAL_ID"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.policyHolder.nationalId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](83, 80, "DETAILS.POLICY.HOLDER.GROUP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.policyHolder.group, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](89, 82, "DETAILS.POLICY.HOLDER.ACTIVITY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.policyHolder.activity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](96, 84, "DETAILS.POLICY.HOLDER.ADDRESS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.policyHolder.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](103, 86, "DETAILS.POLICY.VEHICLE.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](109, 88, "DETAILS.POLICY.VEHICLE.GENERAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.make, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.vehicle.plateNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.bodyType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.seats, " Persons");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.fuelType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.cc, " CC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.vehicle.chassisNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.vehicle.engineNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.vehicle.usage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](186, 90, ctx_r1.policy.vehicle.estimatedValue), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.policy.vehicle.roadSide === "Included" ? "text-green-600 bg-green-50 border-green-200" : "text-gray-500 bg-gray-50 border-gray-200");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.vehicle.roadSide, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.policy.vehicle.roadSide === "Included");
  }
}
function BrokerPolicyDetailsComponent_div_1_div_64_div_1_div_21_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cover_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("SI: ", ctx_r1.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, cover_r4.si_now), "");
  }
}
function BrokerPolicyDetailsComponent_div_1_div_64_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 110)(1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 112)(4, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, BrokerPolicyDetailsComponent_div_1_div_64_div_1_div_21_p_7_Template, 3, 4, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cover_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](cover_r4.cover_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 4, cover_r4.net_premium), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", cover_r4.si_now > 0);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 41)(1, "details", 42)(2, "summary", 43)(3, "div", 44)(4, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i-lucide", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div")(7, "h3", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 44)(12, "div", 105)(13, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Cover Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i-lucide", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 50)(20, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, BrokerPolicyDetailsComponent_div_1_div_64_div_1_div_21_Template, 8, 6, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const risk_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("open", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Risk #", i_r6 + 1, " Coverage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", risk_r5.vehicle_make_name, " ", risk_r5.vehicle_model_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 7, ctx_r1.getRiskCoverAmount(risk_r5)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", risk_r5.risk_covers);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_64_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i-lucide", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const condition_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](condition_r7.condition_name);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BrokerPolicyDetailsComponent_div_1_div_64_div_1_Template, 22, 9, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 41)(3, "details", 42)(4, "summary", 43)(5, "div", 44)(6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i-lucide", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div")(9, "h3", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Policy Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Terms and clauses applicable to this policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "i-lucide", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 50)(15, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BrokerPolicyDetailsComponent_div_1_div_64_div_16_Template, 4, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.policy.coverage.risks);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("open", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.policy.coverage.conditions);
  }
}
function BrokerPolicyDetailsComponent_div_1_div_65_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123)(1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const charge_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c1, charge_r8.charge_code === "10001" || charge_r8.charge_code === "10002"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](charge_r8.charge_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, charge_r8.charge_value), "");
  }
}
function BrokerPolicyDetailsComponent_div_1_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 117)(1, "details", 42)(2, "summary", 43)(3, "div", 44)(4, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i-lucide", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div")(7, "h3", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Gross Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Total payable amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 44)(12, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i-lucide", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 50)(17, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, BrokerPolicyDetailsComponent_div_1_div_65_div_18_Template, 6, 8, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("open", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r1.policy.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 4, ctx_r1.policy.premium.total), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.policy.premium.breakdown);
  }
}
function BrokerPolicyDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 5)(4, "div", 6)(5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i-lucide", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i-lucide", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div")(16, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 16)(21, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i-lucide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "i-lucide", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i-lucide", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 22)(33, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "i-lucide", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_Template_app_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.handleDownloadPdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "i-lucide", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_Template_app_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.endorsePolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 28)(45, "nav", 29)(46, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setActiveTab("overview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "i-lucide", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, BrokerPolicyDetailsComponent_div_1_div_50_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setActiveTab("coverage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "i-lucide", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, BrokerPolicyDetailsComponent_div_1_div_55_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_1_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setActiveTab("premium"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "i-lucide", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, BrokerPolicyDetailsComponent_div_1_div_60_Template, 1, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 35)(62, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, BrokerPolicyDetailsComponent_div_1_div_63_Template, 194, 96, "div", 36)(64, BrokerPolicyDetailsComponent_div_1_div_64_Template, 17, 3, "div", 36)(65, BrokerPolicyDetailsComponent_div_1_div_65_Template, 19, 6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "app-chat-box", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 27, "DETAILS.POLICY.BREADCRUMB"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.policy.policyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.policy.policyHolder.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Policy #", ctx_r1.policy.policyNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.transactionType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.branchName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" Effective: ", ctx_r1.policy.effectiveDate, " - ", ctx_r1.policy.expiryDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.policy.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.downloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.downloading ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 29, "DETAILS.POLICY.DOWNLOADING") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](40, 31, "DETAILS.POLICY.DOWNLOAD_PDF"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 33, "DETAILS.POLICY.CREATE_ENDORSEMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.activeTab === "overview" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 35, "DETAILS.POLICY.TABS.OVERVIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.activeTab === "coverage" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](54, 37, "DETAILS.POLICY.TABS.COVERAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.activeTab === "premium" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](59, 39, "DETAILS.POLICY.TABS.PREMIUM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("modelName", "insurance.policy")("recordId", ctx_r1.policy.id);
  }
}
function BrokerPolicyDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading-spinner", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", true)("message", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "DETAILS.POLICY.LOADING"));
  }
}
function BrokerPolicyDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125)(1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i-lucide", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "app-button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerPolicyDetailsComponent_div_3_Template_app_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i-lucide", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 3, "DETAILS.POLICY.ERROR_LOADING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 5, "DETAILS.POLICY.BACK_TO_POLICIES"), " ");
  }
}
let BrokerPolicyDetailsComponent = /*#__PURE__*/(() => {
  class BrokerPolicyDetailsComponent {
    constructor(route, router, policyService, quoteService, crmService, authService, notificationService) {
      this.route = route;
      this.router = router;
      this.policyService = policyService;
      this.quoteService = quoteService;
      this.crmService = crmService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.policyId = '';
      this.policy = null;
      this.loading = true;
      this.error = null;
      this.activeTab = 'overview';
      this.downloading = false;
      this.renewalRequest = null;
      this.renewalLoading = false;
      this.renewalError = null;
    }
    ngOnInit() {
      this.policyId = this.route.snapshot.params['id'];
      this.loadPolicyDetails();
    }
    loadPolicyDetails() {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.policyId) return;
        try {
          _this.loading = true;
          _this.error = null;
          const res = yield _this.policyService.getPolicy(Number(_this.policyId)).toPromise();
          const apiData = res?.result?.data || res?.data || res;
          if (!apiData) {
            _this.error = 'No policy data found';
            _this.loading = false;
            return;
          }
          const riskData = apiData.policy_risks?.[0] || {};
          const premiumSummary = apiData.policy_premium_summary?.[0] || {};
          const riskPremiumSummary = apiData.policy_risk_premium_summary?.[0] || {};
          // Map policy data
          // Map policy data
          _this.policy = {
            id: apiData.policy_number || apiData.parent_policy_number || apiData.id || _this.policyId,
            policyNumber: apiData.policy_number || apiData.parent_policy_number || 'Draft',
            status: (apiData.policy_state || 'draft').toLowerCase(),
            transactionType: apiData.transaction_type || 'N/A',
            issueDate: apiData.issue_date || 'N/A',
            approveDate: apiData.approve_date || 'N/A',
            effectiveDate: apiData.effective_from_date || 'N/A',
            expiryDate: apiData.effective_to_date || 'N/A',
            lob: 'Motor Insurance',
            productName: apiData.product_name || 'N/A',
            branchName: apiData.issuing_branch || 'N/A',
            salesPerson: apiData.sales_person || 'N/A',
            salesTeam: apiData.sales_team || 'N/A',
            currency: apiData.currency || 'EGP',
            policyHolder: {
              name: apiData.customer_name || apiData.insured_name || 'N/A',
              nationalId: apiData.customer_national_id || 'N/A',
              dateOfBirth: riskData.date_of_birth || 'N/A',
              phone: riskData.phone || 'N/A',
              email: riskData.email || 'N/A',
              address: apiData.customer_address || 'N/A',
              group: apiData.customer_group || 'N/A',
              activity: apiData.customer_activity || 'N/A'
            },
            vehicle: {
              make: riskData.vehicle_make_name || riskData.vehicle_make || 'N/A',
              model: riskData.vehicle_model_name || riskData.vehicle_model || 'N/A',
              year: riskData.vehicle_manufacturing_year || 'N/A',
              category: riskData.vehicle_category_name || riskData.vehicle_category || 'N/A',
              plateNumber: riskData.plate_number || riskData.vehicle_plate_number || 'N/A',
              chassisNumber: riskData.vehicle_chassis_number || 'N/A',
              engineNumber: riskData.vehicle_engine_number || 'N/A',
              color: riskData.vehicle_color || 'N/A',
              bodyType: riskData.vehicle_body_type_name || riskData.vehicle_body_type || 'N/A',
              fuelType: riskData.vehicle_fuel_type_name || riskData.vehicle_fuel_type || 'N/A',
              cc: riskData.vehicle_cc_name || riskData.vehicle_cc || 'N/A',
              seats: riskData.vehicle_number_of_seats || 5,
              usage: riskData.vehicle_usage_name || riskData.vehicle_usage || 'N/A',
              estimatedValue: riskData.vehicle_sum_insured || 0,
              kilometres: riskData.vehicle_kilometres || 0,
              roadSide: riskData.vehicle_has_road_side_program ? 'Included' : 'Not Included',
              roadSideProgram: riskData.vehicle_road_side_program_name || 'N/A'
            },
            coverage: {
              type: apiData.product_name || 'Comprehensive',
              sumInsured: riskData.vehicle_sum_insured || 0,
              deductible: riskData.deductible || 0,
              startDate: apiData.effective_from_date || 'N/A',
              endDate: apiData.effective_to_date || 'N/A',
              duration: apiData.policy_period_in_days ? `${apiData.policy_period_in_days} Days` : '12 Months',
              extensions: apiData.policy_conditions?.map(c => c.condition_name || c.name).filter(Boolean) || [],
              risks: apiData.policy_risks || [],
              conditions: apiData.policy_conditions || []
            },
            premium: {
              base: premiumSummary.net_premium || riskPremiumSummary.net_premium || 0,
              discounts: [],
              loadings: [],
              taxes: [],
              fees: apiData.issue_fees || 0,
              total: (() => {
                let t = apiData.gross_premium || premiumSummary.gross_premium || 0;
                // Fallback: Try to find Gross Premium in charges
                if (!t && apiData.policy_charges) {
                  const gross = apiData.policy_charges.find(c => c.charge_name?.toLowerCase() === 'gross premium');
                  if (gross) t = gross.charge_value;
                }
                return t;
              })(),
              breakdown: (() => {
                // Deduplicate charges based on charge_code
                const charges = apiData.policy_charges || [];
                const unique = new Map();
                charges.forEach(c => {
                  // Use code if available, else name
                  const key = c.charge_code || c.charge_name;
                  if (key && !unique.has(key)) {
                    unique.set(key, c);
                  }
                });
                return Array.from(unique.values());
              })()
            },
            payments: [],
            history: [],
            invoicePaid: apiData.payment_status === 'paid',
            current: apiData.is_current || false,
            isRenewal: apiData.policy_renewal_version > 0,
            parentPolicyNumber: apiData.parent_policy_number || null,
            policyVersion: apiData.policy_version || 1,
            daysToRenew: _this.calculateDaysToRenew(apiData.effective_to_date),
            broker: apiData.broker_name || 'N/A',
            paymentStatus: apiData.payment_status || 'outstanding'
          };
          // Fetch renewal requests
          // await this.loadRenewalRequests();
          _this.loading = false;
        } catch (err) {
          console.error('Error fetching policy details:', err);
          _this.error = err?.message || 'Failed to load policy details';
          _this.loading = false;
        }
      })();
    }
    loadRenewalRequests() {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const user = _this2.authService.currentUserValue;
        if (!user?.id) return;
        try {
          _this2.renewalLoading = true;
          _this2.renewalError = null;
          const response = yield _this2.crmService.getRenewalRequests({
            user_id: user.id,
            user_type: 'broker',
            limit: 10,
            offset: 0,
            domain: JSON.stringify([['policy_id', '=', _this2.policyId]])
          }).toPromise();
          const renewalData = response?.result?.data || response?.data || response;
          if (Array.isArray(renewalData)) {
            const policyRenewal = renewalData.find(r => r.policy_id === _this2.policyId || r.policy_number === _this2.policy.policyNumber);
            _this2.renewalRequest = policyRenewal || null;
          } else if (renewalData) {
            _this2.renewalRequest = renewalData;
          }
        } catch (err) {
          console.error('Error fetching renewal requests:', err);
          _this2.renewalError = err?.message || 'Failed to load renewal information';
        } finally {
          _this2.renewalLoading = false;
        }
      })();
    }
    calculateDaysToRenew(endDate) {
      if (!endDate) return null;
      try {
        const expiryDate = new Date(endDate);
        const currentDate = new Date();
        const diffTime = expiryDate.getTime() - currentDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      } catch (e) {
        console.error('Error calculating days to renewal:', e);
        return null;
      }
    }
    handleDownloadPdf() {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          _this3.downloading = true;
          const blob = yield _this3.policyService.downloadPolicyPdf(Number(_this3.policyId)).toPromise();
          // Create blob and download
          if (blob) {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Policy_${_this3.policy?.policyNumber || _this3.policyId}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);
          }
        } catch (error) {
          console.error('Error downloading policy PDF:', error);
          _this3.notificationService.error('Failed to download policy PDF. Please try again.');
        } finally {
          _this3.downloading = false;
        }
      })();
    }
    handleRenewPolicy() {
      var _this4 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          _this4.renewalLoading = true;
          _this4.renewalError = null;
          const response = yield _this4.policyService.renewPolicy(_this4.policy.policyNumber).toPromise();
          const result = response?.result || response;
          if (result && result.success === true) {
            _this4.notificationService.success(`Renewal Request Created Successfully!`);
            window.location.reload();
          } else {
            const errorMessage = result?.error || result?.message || 'Failed to create renewal request';
            _this4.notificationService.error(errorMessage);
            _this4.renewalError = errorMessage;
          }
        } catch (err) {
          console.error('Error creating renewal request:', err);
          const backendError = err?.error?.result?.error || err?.error?.error || err?.error?.message || err?.message || 'Failed to create renewal request';
          _this4.notificationService.error(backendError);
          _this4.renewalError = backendError;
        } finally {
          _this4.renewalLoading = false;
        }
      })();
    }
    goBack() {
      this.router.navigate(['/dashboard/broker/policies']);
    }
    setActiveTab(tab) {
      this.activeTab = tab;
    }
    endorsePolicy() {
      this.router.navigate(['/dashboard/broker/endorsement', this.policyId]);
    }
    calculateNetPremium() {
      if (!this.policy) return 0;
      let net = this.policy.premium.base;
      this.policy.premium.discounts.forEach(d => net += d.amount);
      this.policy.premium.loadings.forEach(l => net += l.amount);
      return net;
    }
    getRenewalButtonText() {
      if (this.renewalLoading) return 'Processing...';
      if (this.renewalRequest) return 'Renewal Requested';
      return 'Renew Policy';
    }
    canRenew() {
      return !this.renewalRequest && !this.renewalLoading;
    }
    getRiskCoverAmount(risk) {
      // Try to find specific Comprehensive cover first
      const compCover = risk.risk_covers?.find(c => c.cover_name?.toLowerCase().includes('comprehensive') || c.cover_name?.toLowerCase().includes('own damage'));
      return compCover ? compCover.si_now : risk.vehicle_sum_insured || 0;
    }
    static {
      this.ɵfac = function BrokerPolicyDetailsComponent_Factory(t) {
        return new (t || BrokerPolicyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_1__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_quote_service__WEBPACK_IMPORTED_MODULE_2__.QuoteService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_3__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: BrokerPolicyDetailsComponent,
        selectors: [["app-broker-policy-details"]],
        decls: 4,
        vars: 3,
        consts: [["class", "space-y-6", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], [1, "space-y-6"], [1, "mb-8", "animate-fadeIn", "relative", "overflow-hidden", "rounded-2xl", "p-4", "-m-4"], [1, "absolute", "inset-0", "pointer-events-none", "z-0", 2, "background-image", "url('assets/img/backgrounds/policy-header.svg')", "background-repeat", "no-repeat", "background-position", "center", "background-size", "cover"], [1, "relative", "z-10"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-200", "mb-4"], [1, "hover:text-white", "transition-all", "duration-300", 3, "click"], ["name", "chevron-right", 1, "w-4", "h-4"], [1, "text-white", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "w-14", "h-14", "bg-white/10", "backdrop-blur-sm", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "shadow-lg", "border", "border-white/20"], ["name", "user", 1, "w-7", "h-7"], [1, "text-3xl", "font-bold", "text-white", "mb-1"], [1, "text-lg", "text-gray-200", "font-medium", "mb-2"], [1, "flex", "flex-wrap", "items-center", "gap-3", "text-sm", "text-gray-200"], [1, "flex", "items-center", "gap-1", "bg-white/20", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", "uppercase", "text-white"], [1, "flex", "items-center", "gap-1"], ["name", "package", 1, "w-3.5", "h-3.5"], ["name", "map-pin", 1, "w-3.5", "h-3.5"], ["name", "calendar", 1, "w-3.5", "h-3.5"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "px-4", "py-2", "bg-green-100", "text-green-800", "rounded-full", "text-sm", "font-semibold", "capitalize", "flex", "items-center", "gap-2", "animate-slideIn"], ["name", "check-circle", 1, "w-4", "h-4"], ["variant", "outline", 1, "hover:scale-105", "transition-transform", 3, "click", "disabled"], ["name", "download", 1, "w-4", "h-4", "mr-2"], ["variant", "primary", 3, "click"], [1, "border-b", "border-gray-200", "mb-6", "animate-fadeIn", 2, "animation-delay", "100ms"], [1, "flex", "gap-8", "overflow-x-auto"], [1, "pb-4", "px-2", "text-sm", "font-medium", "capitalize", "transition-all", "relative", "whitespace-nowrap", "flex", "items-center", "gap-2", 3, "click", "ngClass"], ["name", "file-text", 1, "w-4", "h-4"], ["class", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-full animate-slideIn", 4, "ngIf"], ["name", "shield", 1, "w-4", "h-4"], ["name", "dollar-sign", 1, "w-4", "h-4"], [1, "space-y-8"], ["class", "space-y-6 animate-fadeIn", 4, "ngIf"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 animate-fadeIn group overflow-hidden", 4, "ngIf"], [3, "modelName", "recordId"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-0.5", "bg-gradient-to-r", "from-blue-500", "to-blue-600", "rounded-t-full", "animate-slideIn"], [1, "space-y-6", "animate-fadeIn"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "group", 3, "open"], [1, "flex", "items-center", "justify-between", "p-6", "cursor-pointer", "hover:bg-gray-50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "bg-indigo-100", "dark:bg-indigo-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-indigo-600"], ["name", "info", 1, "w-5", "h-5"], [1, "font-bold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500"], ["name", "chevron-down", 1, "w-5", "h-5", "text-gray-400", "transition-transform", "group-open:rotate-180"], [1, "px-6", "pb-6", "pt-0", "border-t", "border-gray-100", "dark:border-gray-700"], [1, "mt-6", "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "space-y-4", "p-4", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg"], [1, "font-bold", "text-sm", "text-gray-900", "dark:text-white", "mb-2"], [1, "flex", "items-center", "justify-between"], [1, "text-gray-600", "dark:text-gray-300", "text-xs"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], ["class", "relative pt-1", 4, "ngIf"], ["variant", "primary", "size", "sm", "class", "w-full", 3, "disabled", "click", 4, "ngIf"], [1, "space-y-3", "p-4", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg"], [1, "flex", "justify-between", "text-xs"], [1, "text-gray-600", "dark:text-gray-300"], [1, "font-medium"], [1, "font-medium", "text-primary"], [1, "p-4", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg", "text-center", "flex", "flex-col", "justify-center", "items-center"], [1, "inline-flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-green-100", "text-green-600", "mb-2"], [1, "font-bold", "text-sm", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300", "group"], [1, "font-bold", "text-gray-900", "dark:text-white", "mb-4", "flex", "items-center", "gap-2", "border-b", "border-gray-100", "dark:border-gray-700", "pb-2"], ["name", "user", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "text-sm"], [1, "space-y-1", "min-w-0"], [1, "text-xs", "font-semibold", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wider"], [1, "font-medium", "text-gray-900", "dark:text-white", "truncate", 3, "title"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "space-y-1", "md:col-span-2", "lg:col-span-4", "min-w-0"], [1, "text-xs", "font-semibold", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wider", "flex", "items-center", "gap-1"], ["name", "map-pin", 1, "w-3", "h-3"], ["name", "car", 1, "w-5", "h-5", "text-primary"], [1, "text-xs", "font-bold", "text-primary", "uppercase", "tracking-wider", "mb-4", "flex", "items-center", "gap-1", "opacity-80"], ["name", "info", 1, "w-3", "h-3"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "xl:grid-cols-5", "gap-6", "text-sm"], [1, "space-y-1"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "font-bold", "text-gray-900", "dark:text-white", "bg-gray-50", "px-2", "py-0.5", "rounded", "inline-block", "border", "border-gray-200"], ["name", "settings", 1, "w-3", "h-3"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-4", "gap-6", "text-sm"], [1, "font-mono", "font-medium", "text-gray-900", "dark:text-white", "text-xs", "select-all", "bg-gray-50", "p-1.5", "rounded", "border", "border-gray-100"], [1, "font-bold", "text-green-600", "dark:text-green-400"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", "border", 3, "ngClass"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "relative", "pt-1"], [1, "overflow-hidden", "h-1.5", "mb-1", "text-xs", "flex", "rounded", "bg-blue-200"], [1, "shadow-none", "flex", "flex-col", "text-center", "whitespace-nowrap", "text-white", "justify-center", "bg-primary"], ["variant", "primary", "size", "sm", 1, "w-full", 3, "click", "disabled"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden", 4, "ngFor", "ngForOf"], ["name", "file-text", 1, "w-5", "h-5"], [1, "font-bold", "text-navy", "dark:text-white"], [1, "mt-4", "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], ["class", "flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg", 4, "ngFor", "ngForOf"], [1, "w-10", "h-10", "bg-blue-100", "dark:bg-blue-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-primary"], ["name", "shield", 1, "w-5", "h-5"], [1, "text-right", "mr-2", "hidden", "sm:block"], [1, "text-xs", "text-gray-500", "uppercase", "font-semibold"], [1, "font-bold", "text-primary"], [1, "mt-4", "grid", "gap-3"], ["class", "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-3", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg"], [1, "text-sm", "font-medium", "text-navy", "dark:text-white"], [1, "text-right"], [1, "text-sm", "font-bold", "text-navy", "dark:text-white"], [1, "flex", "items-start", "gap-3", "p-3", "bg-gray-50", "dark:bg-gray-700/30", "rounded-lg"], ["name", "check-circle", 1, "w-4", "h-4", "text-indigo-500", "mt-0.5", "flex-shrink-0"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300", "animate-fadeIn", "group", "overflow-hidden"], [1, "w-10", "h-10", "bg-green-100", "dark:bg-green-900/30", "rounded-lg", "flex", "items-center", "justify-center", "text-green-600"], ["name", "dollar-sign", 1, "w-5", "h-5"], [1, "text-2xl", "font-bold", "text-primary"], [1, "mt-4", "space-y-4"], ["class", "flex justify-between items-center py-2 text-sm border-b border-gray-50 last:border-0 hover:bg-gray-50 px-2 rounded transition-colors", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "py-2", "text-sm", "border-b", "border-gray-50", "last:border-0", "hover:bg-gray-50", "px-2", "rounded", "transition-colors", 3, "ngClass"], [1, "font-medium", "text-navy", "dark:text-white"], [1, "flex", "items-center", "justify-center", "h-96"], [3, "loading", "message"], [1, "text-center"], ["name", "alert-circle", 1, "h-12", "w-12", "text-red-500", "mx-auto", "mb-4"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-300", "mb-4"], [3, "click"], ["name", "chevron-left", 1, "w-4", "h-4", "mr-2"]],
        template: function BrokerPolicyDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, BrokerPolicyDetailsComponent_div_1_Template, 67, 41, "div", 0)(2, BrokerPolicyDetailsComponent_div_2_Template, 3, 4, "div", 1)(3, BrokerPolicyDetailsComponent_div_3_Template, 12, 7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.policy);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.error);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__.LoadingSpinnerComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_13__.LucideAngularComponent, _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_9__.ChatBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe]
      });
    }
  }
  return BrokerPolicyDetailsComponent;
})();

/***/ }),

/***/ 5527:
/*!********************************************************************!*\
  !*** ./src/app/broker/pages/premiums/broker-premiums.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerPremiumsComponent: () => (/* binding */ BrokerPremiumsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/broker.service */ 621);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 3955);












function BrokerPremiumsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, ctx_r0.error), " ");
  }
}
function BrokerPremiumsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BrokerPremiumsComponent_app_dynamic_table_with_filters_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filteredDataChange", function BrokerPremiumsComponent_app_dynamic_table_with_filters_20_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onFilteredDataChange($event));
    })("filterChange", function BrokerPremiumsComponent_app_dynamic_table_with_filters_20_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onFilterChange($event));
    })("exportData", function BrokerPremiumsComponent_app_dynamic_table_with_filters_20_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onExport());
    })("action", function BrokerPremiumsComponent_app_dynamic_table_with_filters_20_Template_app_dynamic_table_with_filters_action_0_listener($event) {
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
function BrokerPremiumsComponent_app_pagination_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-pagination", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function BrokerPremiumsComponent_app_pagination_21_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r0.onPageChange($event));
    })("pageSizeChange", function BrokerPremiumsComponent_app_pagination_21_Template_app_pagination_pageSizeChange_0_listener($event) {
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
let BrokerPremiumsComponent = /*#__PURE__*/(() => {
  class BrokerPremiumsComponent {
    constructor(appTranslate, brokerService, authService, notificationService) {
      this.appTranslate = appTranslate;
      this.brokerService = brokerService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.columns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      // Pagination (server-side)
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 0;
      this.paymentStatus = 'paid';
      // Caching mechanism
      this.cachedData = [];
      this.loadedPages = new Set();
      this.hasActiveFilters = false;
      this.setupColumns();
    }
    ngOnInit() {
      this.loadFirstPage();
      this.loadAllInBackground();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.columns = [{
        key: 'id',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.PAYMENT_ID'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'policyNumber',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.POLICY_NO'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'partnerName',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.CLIENT_NAME'),
        filterable: true,
        filterType: 'text'
      }, {
        key: 'productName',
        label: 'Product',
        filterable: true
      }, {
        key: 'premiumAmount',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.AMOUNT'),
        filterable: false,
        render: row => `<span class="font-medium text-gray-900 dark:text-gray-100">$${row.premiumAmount ? row.premiumAmount.toLocaleString() : '0'}</span>`
      }, {
        key: 'paymentStatus',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.STATUS'),
        filterable: true,
        render: row => this.renderStatus(row.paymentStatus)
      }, {
        key: 'date',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.DATE'),
        filterable: true,
        filterType: 'date'
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.PAYMENTS.COLUMNS.ACTIONS'),
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
      const translatedStatus = this.appTranslate.instant(`STATUS.${s.toUpperCase()}`);
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${translatedStatus}</span>`;
    }
    loadFirstPage() {
      this.isLoading = true;
      this.error = null;
      const currentUser = this.authService.currentUserValue;
      if (!currentUser || !currentUser.id) {
        this.handleUserError();
        return;
      }
      const agentId = currentUser.id;
      // Load page 1 immediately
      this.brokerService.getPremiums(agentId, this.paymentStatus, this.pageSize, 0).subscribe({
        next: response => {
          if (response.result?.data) {
            const mappedData = this.mapPremiumData(response.result.data);
            // Populate first page cache
            mappedData.forEach((item, index) => {
              this.cachedData[index] = item;
            });
            this.data = mappedData;
            // Initial total estimate (will be corrected by background load)
            if (this.totalRecords === 0) {
              this.totalRecords = response.result.total_count || 100; // Fallback
            }
          } else {
            this.data = [];
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
      const agentId = currentUser.id;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      const fetchNextBatch = () => {
        this.brokerService.getPremiums(agentId, this.paymentStatus, batchSize, offset).subscribe({
          next: response => {
            const batchData = response.result?.data || [];
            const mappedBatch = this.mapPremiumData(batchData);
            allData = [...allData, ...mappedBatch];
            // Update cache progressively (optional, or wait until end)
            // Here waiting until end for simplicity, or could update this.cachedData
            // If we received a full batch, assume there's more and fetch next
            if (batchData.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              // Finished loading all data
              this.cachedData = allData;
              this.totalRecords = allData.length;
              // Refresh current view if needed
              if (this.currentPage === 1 && this.data.length === 0 && allData.length > 0) {
                this.displayCurrentPage();
              }
              console.log(`✓ Cached all ${allData.length} premiums recursively.`);
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    handleUserError() {
      this.error = 'ERROR.USER_NOT_FOUND';
      this.isLoading = false;
      this.notificationService.error(this.appTranslate.instant('ERROR.USER_NOT_FOUND'));
    }
    mapPremiumData(apiData) {
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
      console.error('Error loading premiums:', error);
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
      console.log('Exporting premiums...');
      // TODO: Implement export functionality
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
      this.ɵfac = function BrokerPremiumsComponent_Factory(t) {
        return new (t || BrokerPremiumsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_0__.AppTranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_broker_service__WEBPACK_IMPORTED_MODULE_1__.BrokerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: BrokerPremiumsComponent,
        selectors: [["app-broker-premiums"]],
        decls: 22,
        vars: 13,
        consts: [[1, "space-y-6"], [1, "bg-cyan-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-cyan-500", "to-cyan-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "credit-card", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], ["variant", "primary"], ["data-lucide", "download", 1, "w-4", "h-4", "mr-2"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"]],
        template: function BrokerPremiumsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5)(7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, BrokerPremiumsComponent_div_18_Template, 3, 3, "div", 11)(19, BrokerPremiumsComponent_div_19_Template, 2, 0, "div", 12)(20, BrokerPremiumsComponent_app_dynamic_table_with_filters_20_Template, 1, 4, "app-dynamic-table-with-filters", 13)(21, BrokerPremiumsComponent_app_pagination_21_Template, 1, 3, "app-pagination", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 7, "BROKER.PAYMENTS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 9, "BROKER.PAYMENTS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 11, "BROKER.PAYMENTS.DOWNLOAD_REPORT"), " ");
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
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_4__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return BrokerPremiumsComponent;
})();

/***/ }),

/***/ 1815:
/*!**************************************************************************************!*\
  !*** ./src/app/broker/pages/quotation-details/broker-quotation-details.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerQuotationDetailsComponent: () => (/* binding */ BrokerQuotationDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _core_services_utils_quotation_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/utils/quotation-transformer */ 7675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/quote.service */ 7244);
/* harmony import */ var _core_services_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/policy.service */ 2166);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 9081);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3955);















function BrokerQuotationDetailsComponent_div_1_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openLostModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i-lucide", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "DETAILS.QUOTATION.MARK_LOST"), " ");
  }
}
function BrokerQuotationDetailsComponent_div_1_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.editQuotation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i-lucide", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 1, "DETAILS.QUOTATION.EDIT_QUOTE"), " ");
  }
}
function BrokerQuotationDetailsComponent_div_1_i_lucide_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i-lucide", 91);
  }
}
function BrokerQuotationDetailsComponent_div_1_i_lucide_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i-lucide", 92);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_157_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 99)(1, "div", 100)(2, "h4", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 103)(7, "div")(8, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Net Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div")(18, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div")(23, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Deductible");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div")(28, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div")(33, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const proposal_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r1.getProposalStateClass(proposal_r6.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", proposal_r6.state || "Pending", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.netPremium);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.coverage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.deductible);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.taxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](proposal_r6.fees);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_157_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BrokerQuotationDetailsComponent_div_1_div_157_div_7_div_1_Template, 37, 10, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.proposals);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_div_157_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.isProposalsCollapsed = !ctx_r1.isProposalsCollapsed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i-lucide", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i-lucide", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, BrokerQuotationDetailsComponent_div_1_div_157_div_7_Template, 2, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 6, "DETAILS.QUOTATION.PROPOSALS"), " (", ctx_r1.proposals.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("rotate-180", !ctx_r1.isProposalsCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r1.isProposalsCollapsed ? "chevron-down" : "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isProposalsCollapsed);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_158_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i-lucide", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const condition_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](condition_r8);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_158_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BrokerQuotationDetailsComponent_div_1_div_158_div_7_div_1_Template, 4, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.displayData.conditions);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_div_158_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.isPolicyConditionsCollapsed = !ctx_r1.isPolicyConditionsCollapsed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i-lucide", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i-lucide", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, BrokerQuotationDetailsComponent_div_1_div_158_div_7_Template, 2, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 5, "DETAILS.QUOTATION.CONDITIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("rotate-180", !ctx_r1.isPolicyConditionsCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r1.isPolicyConditionsCollapsed ? "chevron-down" : "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isPolicyConditionsCollapsed);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_159_div_7_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BrokerQuotationDetailsComponent_div_1_div_159_div_7_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function BrokerQuotationDetailsComponent_div_1_div_159_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 116)(1, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, BrokerQuotationDetailsComponent_div_1_div_159_div_7_div_1_span_3_Template, 2, 0, "span", 118)(4, BrokerQuotationDetailsComponent_div_1_div_159_div_7_div_1_span_4_Template, 2, 0, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](doc_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", doc_r10.status === "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", doc_r10.status === "Pending");
  }
}
function BrokerQuotationDetailsComponent_div_1_div_159_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BrokerQuotationDetailsComponent_div_1_div_159_div_7_div_1_Template, 5, 3, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.displayData.documents);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41)(1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_div_159_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.isRequiredDocumentsCollapsed = !ctx_r1.isRequiredDocumentsCollapsed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i-lucide", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "i-lucide", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, BrokerQuotationDetailsComponent_div_1_div_159_div_7_Template, 2, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 7, "DETAILS.QUOTATION.DOCUMENTS"), " (", ctx_r1.getUploadedCount(), " of ", ctx_r1.displayData.documents.length, " uploaded) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("rotate-180", !ctx_r1.isRequiredDocumentsCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r1.isRequiredDocumentsCollapsed ? "chevron-down" : "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isRequiredDocumentsCollapsed);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_224_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "DETAILS.QUOTATION.NO_MESSAGES"), " ");
  }
}
function BrokerQuotationDetailsComponent_div_1_div_225_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i-lucide", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](message_r11.attachment);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 123)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i-lucide", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 126)(4, "div", 127)(5, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, BrokerQuotationDetailsComponent_div_1_div_225_div_11_Template, 4, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](message_r11.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](message_r11.timestamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](message_r11.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", message_r11.attachment);
  }
}
function BrokerQuotationDetailsComponent_div_1_i_lucide_235_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i-lucide", 134);
  }
}
function BrokerQuotationDetailsComponent_div_1_i_lucide_236_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i-lucide", 92);
  }
}
function BrokerQuotationDetailsComponent_div_1_div_240_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i-lucide", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_div_240_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.removeFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i-lucide", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.selectedFile.name);
  }
}
function BrokerQuotationDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 16)(4, "div", 17)(5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i-lucide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 21)(12, "div", 22)(13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "i-lucide", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div")(16, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 26)(19, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "i-lucide", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i-lucide", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i-lucide", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 31)(29, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "i-lucide", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, BrokerQuotationDetailsComponent_div_1_button_32_Template, 4, 3, "button", 34)(33, BrokerQuotationDetailsComponent_div_1_button_33_Template, 4, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.downloadQuotation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, BrokerQuotationDetailsComponent_div_1_i_lucide_35_Template, 1, 0, "i-lucide", 37)(36, BrokerQuotationDetailsComponent_div_1_i_lucide_36_Template, 1, 0, "i-lucide", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 39)(40, "div", 40)(41, "div", 41)(42, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "i-lucide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 44)(47, "div", 45)(48, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 45)(54, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "i-lucide", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 45)(61, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "i-lucide", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 41)(68, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "i-lucide", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 52)(73, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 44)(77, "div", 45)(78, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "Make");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 45)(83, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 45)(88, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 45)(93, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "div", 45)(98, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99, "Body Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 45)(103, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 52)(108, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](110, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 44)(112, "div", 45)(113, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Plate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 45)(118, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, "Chassis Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "div", 45)(123, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "Engine Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div")(128, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](130, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "div", 44)(132, "div", 45)(133, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](134, "Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "div", 45)(138, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "div", 45)(143, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](144, "Fuel Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 45)(148, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "div", 45)(153, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](154, "Sum Insured");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](156);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](157, BrokerQuotationDetailsComponent_div_1_div_157_Template, 8, 8, "div", 56)(158, BrokerQuotationDetailsComponent_div_1_div_158_Template, 8, 7, "div", 56)(159, BrokerQuotationDetailsComponent_div_1_div_159_Template, 8, 9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "div", 13)(161, "div", 57)(162, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](164, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "div", 59)(166, "div", 60)(167, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](168);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](169, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "div", 60)(173, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](175, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](178, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 60)(180, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](182, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "div", 64)(186, "div", 65)(187, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](189, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "div", 57)(193, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](194, "i-lucide", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](195);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](196, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "div", 68)(198, "div", 69)(199, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](200);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](201, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "div", 69)(205, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](207, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](208, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "div", 69)(211, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](213, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](216, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "div", 70)(218, "div", 71)(219, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](220, "i-lucide", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](221);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](222, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](224, BrokerQuotationDetailsComponent_div_1_div_224_Template, 3, 3, "div", 75)(225, BrokerQuotationDetailsComponent_div_1_div_225_Template, 12, 4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "div", 77)(227, "div", 78)(228, "input", 79, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function BrokerQuotationDetailsComponent_div_1_Template_input_change_228_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_Template_button_click_230_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const fileInput_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](229);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](fileInput_r12.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](231, "i-lucide", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](233, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BrokerQuotationDetailsComponent_div_1_Template_input_ngModelChange_232_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function BrokerQuotationDetailsComponent_div_1_Template_input_keyup_enter_232_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](234, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_1_Template_button_click_234_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](235, BrokerQuotationDetailsComponent_div_1_i_lucide_235_Template, 1, 0, "i-lucide", 84)(236, BrokerQuotationDetailsComponent_div_1_i_lucide_236_Template, 1, 0, "i-lucide", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](237, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](238);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](239, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](240, BrokerQuotationDetailsComponent_div_1_div_240_Template, 6, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 67, "DETAILS.QUOTATION.BREADCRUMB"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.header.opportunityNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.header.opportunityNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.displayData.customer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.displayData.header.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.displayData.header.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.displayData.header.stage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isStageLostAllowed());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isStageNew());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.downloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.downloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.downloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 69, ctx_r1.downloading ? "DETAILS.QUOTATION.DOWNLOADING" : "DETAILS.QUOTATION.DOWNLOAD_PDF"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 71, "DETAILS.QUOTATION.CUSTOMER_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](50, 73, "DETAILS.QUOTATION.FULL_NAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](57, 75, "DETAILS.QUOTATION.EMAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](64, 77, "DETAILS.QUOTATION.PHONE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.customer.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](71, 79, "DETAILS.QUOTATION.VEHICLE_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](75, 81, "DETAILS.QUOTATION.BASIC_INFO"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.displayData.vehicle.bodyType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.displayData.vehicle.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](110, 83, "DETAILS.QUOTATION.IDENTIFICATION"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.displayData.vehicle.plateNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.chassisNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.engineNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](130, 85, "DETAILS.QUOTATION.SPECIFICATIONS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.usage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.displayData.vehicle.fuelType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.displayData.vehicle.condition, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.vehicle.sumInsured);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.proposals && ctx_r1.proposals.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.displayData.conditions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.displayData.documents.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](164, 87, "DETAILS.QUOTATION.SUMMARY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](169, 89, "DETAILS.QUOTATION.PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.header.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](175, 91, "DETAILS.QUOTATION.POLICY_TERM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](178, 93, "DETAILS.QUOTATION.ONE_YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](182, 95, "DETAILS.QUOTATION.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.header.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](189, 97, "DETAILS.QUOTATION.TOTAL_PREMIUM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.pricing.grossPremium);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](196, 99, "DETAILS.QUOTATION.IMPORTANT_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](201, 101, "DETAILS.QUOTATION.QUOTE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.header.opportunityNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](207, 103, "DETAILS.QUOTATION.CREATED_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.displayData.header.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](213, 105, "DETAILS.QUOTATION.VALID_UNTIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](216, 107, "DETAILS.QUOTATION.DAYS_30"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](222, 109, "DETAILS.QUOTATION.MESSAGES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.messages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](233, 111, "DETAILS.QUOTATION.TYPE_MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.newMessage.trim() || ctx_r1.sendingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.sendingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.sendingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](239, 113, "DETAILS.QUOTATION.SEND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedFile);
  }
}
function BrokerQuotationDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loading-spinner", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", true)("message", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "DETAILS.QUOTATION.LOADING"));
  }
}
function BrokerQuotationDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 139)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i-lucide", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h2", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_div_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.loadQuotation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "i-lucide", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 3, "DETAILS.QUOTATION.ERROR_LOADING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 5, "DETAILS.QUOTATION.TRY_AGAIN"), " ");
  }
}
function BrokerQuotationDetailsComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", reason_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](reason_r15.name);
  }
}
let BrokerQuotationDetailsComponent = /*#__PURE__*/(() => {
  class BrokerQuotationDetailsComponent {
    constructor(route, router, crmService, quoteService, policyService, notificationService) {
      this.route = route;
      this.router = router;
      this.crmService = crmService;
      this.quoteService = quoteService;
      this.policyService = policyService;
      this.notificationService = notificationService;
      this.quotationId = '';
      this.quotation = null;
      this.proposals = [];
      this.loading = true;
      this.error = null;
      // Transformed display data
      this.displayData = null;
      // Chat functionality
      this.messages = [];
      this.newMessage = '';
      this.selectedFile = null;
      this.sendingMessage = false;
      // Mark as Lost state
      this.isLostModalOpen = false;
      this.lostReasons = [];
      this.selectedLostReason = null;
      this.lostFeedback = '';
      this.lostLoading = false;
      // Collapse states
      this.isPolicyConditionsCollapsed = true;
      this.isRequiredDocumentsCollapsed = true;
      this.isProposalsCollapsed = false;
      this.downloading = false;
    }
    ngOnInit() {
      this.quotationId = this.route.snapshot.params['id'];
      this.loadQuotation();
    }
    loadQuotation() {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.quotationId) return;
        _this.loading = true;
        _this.error = null;
        try {
          // Fetch quotation details
          const quoteRes = yield _this.crmService.getQuotation(Number(_this.quotationId)).toPromise();
          _this.quotation = quoteRes?.result?.data || quoteRes?.data || quoteRes;
          // Transform the raw API response to display-ready format
          if (_this.quotation) {
            _this.displayData = (0,_core_services_utils_quotation_transformer__WEBPACK_IMPORTED_MODULE_1__.transformQuotationData)(_this.quotation);
          }
          // Fetch proposals from API response
          if (_this.quotation && _this.quotation.opportunity_proposal) {
            // Map opportunity_proposal to display format
            _this.proposals = _this.quotation.opportunity_proposal.map((prop, index) => ({
              company: prop.proposal_company_name || `Insurance Provider ${index + 1}`,
              type: prop.proposal_type || 'Standard',
              premium: _this.formatCurrency(prop.proposal_gross_premium),
              netPremium: _this.formatCurrency(prop.proposal_net_premium),
              coverage: _this.formatCurrency(prop.proposal_sum_insured),
              deductible: prop.proposal_deductible ? _this.formatCurrency(prop.proposal_deductible) : 'N/A',
              taxes: _this.formatCurrency(prop.proposal_tax_amount),
              fees: _this.formatCurrency(prop.proposal_fees),
              state: prop.proposal_state || prop.state || 'Pending'
            }));
          } else {
            _this.proposals = [];
          }
        } catch (err) {
          console.error('Failed to load quotation details', err);
          _this.error = 'Failed to load quotation details. Please try again.';
        } finally {
          _this.loading = false;
        }
      })();
    }
    downloadQuotation() {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this2.quotation?.opportunity_proposal?.length) {
          _this2.notificationService.warning('No proposal documents available to download.');
          return;
        }
        const proposal = _this2.quotation.opportunity_proposal[0];
        const proposalId = proposal.id || proposal.proposal_id;
        if (!proposalId) {
          _this2.notificationService.error('Analysis failed: Proposal ID is missing.');
          return;
        }
        try {
          _this2.downloading = true;
          const blob = yield _this2.quoteService.downloadProposalPdf(Number(proposalId)).toPromise();
          // Create blob and download
          if (blob) {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Quotation_${_this2.displayData?.header?.opportunityNumber || _this2.quotationId}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);
          }
        } catch (error) {
          console.error('Error downloading quotation PDF:', error);
          console.error('Error Details:', {
            status: error.status,
            statusText: error.statusText,
            url: error.url,
            headers: error.headers ? error.headers.keys() : 'N/A'
          });
          _this2.notificationService.error('Failed to download quotation PDF. Please try again.');
        } finally {
          _this2.downloading = false;
        }
      })();
    }
    goBack() {
      this.router.navigate(['/dashboard/broker/quotations']);
    }
    isStageNew() {
      return this.displayData?.header?.stage?.toLowerCase() === 'new';
    }
    isStageLostAllowed() {
      const stage = this.displayData?.header?.stage?.toLowerCase();
      return stage !== 'won' && stage !== 'approved';
    }
    loadLostReasons() {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const res = yield _this3.crmService.getLostReasons().toPromise();
          const raw = res?.result?.data || res?.data || res;
          // Map list similar to quote flow
          if (Array.isArray(raw)) {
            _this3.lostReasons = raw;
          } else if (raw && typeof raw === 'object') {
            if (raw.items && Array.isArray(raw.items)) _this3.lostReasons = raw.items;else if (raw.data && Array.isArray(raw.data)) _this3.lostReasons = raw.data;else {
              const key = Object.keys(raw).find(k => Array.isArray(raw[k]));
              if (key) _this3.lostReasons = raw[key];else _this3.lostReasons = [];
            }
          } else {
            _this3.lostReasons = [];
          }
          // Normalize structure
          _this3.lostReasons = _this3.lostReasons.map(item => ({
            id: item.id,
            name: item.item || item.name || item.value || item.display || item.label
          }));
        } catch (err) {
          console.error('Failed to load lost reasons', err);
          _this3.notificationService.error('Failed to load lost reasons');
        }
      })();
    }
    openLostModal() {
      this.isLostModalOpen = true;
      if (this.lostReasons.length === 0) {
        this.loadLostReasons();
      }
    }
    closeLostModal() {
      this.isLostModalOpen = false;
      this.selectedLostReason = null;
      this.lostFeedback = '';
    }
    submitMarkAsLost() {
      var _this4 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this4.quotationId || !_this4.selectedLostReason) return;
        _this4.lostLoading = true;
        try {
          yield _this4.crmService.markLost(Number(_this4.quotationId), _this4.selectedLostReason, _this4.lostFeedback).toPromise();
          _this4.closeLostModal();
          _this4.notificationService.success('Quotation marked as lost successfully');
          // Reload quotation to update status
          _this4.loadQuotation();
        } catch (err) {
          console.error('Failed to mark as lost', err);
          _this4.notificationService.error('Failed to mark as lost. Please try again.');
        } finally {
          _this4.lostLoading = false;
        }
      })();
    }
    editQuotation() {
      // Navigate to quote flow with the quotation ID to continue editing
      this.router.navigate(['/dashboard/broker/quote/new'], {
        queryParams: {
          quotationId: this.quotationId,
          edit: true
        }
      });
    }
    getUploadedCount() {
      if (!this.displayData || !this.displayData.documents) return 0;
      return this.displayData.documents.filter(doc => doc.status === 'Uploaded').length;
    }
    formatCurrency(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return '0 EGP';
      }
      const formatted = value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return `${formatted} EGP`;
    }
    getStatusClass(status) {
      const classes = {
        'draft': 'bg-gray-100 text-gray-800',
        'sent': 'bg-blue-100 text-blue-800',
        'accepted': 'bg-green-100 text-green-800',
        'rejected': 'bg-red-100 text-red-800',
        'expired': 'bg-gray-100 text-gray-800'
      };
      return classes[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
    }
    getProposalStateClass(state) {
      const stateClasses = {
        'pending': 'bg-yellow-100 text-yellow-800',
        'approved': 'bg-green-100 text-green-800',
        'rejected': 'bg-red-100 text-red-800',
        'draft': 'bg-gray-100 text-gray-800',
        'sent': 'bg-blue-100 text-blue-800',
        'accepted': 'bg-green-100 text-green-800'
      };
      return stateClasses[state?.toLowerCase()] || 'bg-yellow-100 text-yellow-800';
    }
    // Chat methods
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
      }
    }
    removeFile() {
      this.selectedFile = null;
    }
    sendMessage() {
      var _this5 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this5.newMessage.trim() || _this5.sendingMessage) return;
        _this5.sendingMessage = true;
        try {
          // Prepare attachments if file is selected
          const attachments = [];
          if (_this5.selectedFile) {
            const base64 = yield _this5.fileToBase64(_this5.selectedFile);
            attachments.push({
              name: _this5.selectedFile.name,
              datas: base64,
              mimetype: _this5.selectedFile.type
            });
          }
          // Call the API
          const response = yield _this5.crmService.postChatterMessage(Number(_this5.quotationId), _this5.newMessage, attachments).toPromise();
          // Check for error in 200 OK response
          if (response && (response.error || response.result && response.result.error || response.success === false)) {
            let errorMessage = response.error || response.result && response.result.error || 'Failed to send message';
            if (typeof errorMessage === 'string' && errorMessage.includes('security restrictions')) {
              errorMessage = 'You do not have permission to perform this action.';
            }
            _this5.notificationService.error(errorMessage);
            return;
          }
          // Add message to local list
          _this5.messages.push({
            userName: 'You',
            timestamp: new Date().toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            message: _this5.newMessage,
            attachment: _this5.selectedFile ? _this5.selectedFile.name : null
          });
          _this5.newMessage = '';
          _this5.selectedFile = null;
        } finally {
          _this5.sendingMessage = false;
        }
      })();
    }
    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = error => reject(error);
      });
    }
    static {
      this.ɵfac = function BrokerQuotationDetailsComponent_Factory(t) {
        return new (t || BrokerQuotationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_2__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_quote_service__WEBPACK_IMPORTED_MODULE_3__.QuoteService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_policy_service__WEBPACK_IMPORTED_MODULE_4__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: BrokerQuotationDetailsComponent,
        selectors: [["app-broker-quotation-details"]],
        decls: 22,
        vars: 10,
        consts: [["fileInput", ""], ["class", "space-y-6", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], ["title", "Mark as Lost", 3, "close", "isOpen"], [1, "p-6", "space-y-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], [1, "w-full", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "3", "placeholder", "Add any additional context...", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "mt-6"], [1, "px-4", "py-2", "text-gray-700", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-red-600", "hover:bg-red-700", "text-white", "rounded-lg", "font-medium", "transition-colors", "disabled:bg-gray-400", 3, "click", "disabled"], [1, "space-y-6"], [1, "mb-8", "animate-fadeIn", "relative", "overflow-hidden", "rounded-2xl", "p-4", "-m-4"], [1, "absolute", "inset-0", "pointer-events-none", "z-0", 2, "background-image", "url('assets/img/backgrounds/quotation-header.svg')", "background-repeat", "no-repeat", "background-position", "center", "background-size", "cover"], [1, "relative", "z-10"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-200", "mb-4"], [1, "hover:text-white", "transition-all", "duration-300", 3, "click"], ["name", "chevron-right", 1, "w-4", "h-4"], [1, "text-white", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "w-14", "h-14", "bg-white/10", "backdrop-blur-sm", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "shadow-lg", "border", "border-white/20"], ["name", "file-text", 1, "w-7", "h-7"], [1, "text-3xl", "font-bold", "text-white", "mb-1"], [1, "flex", "flex-wrap", "items-center", "gap-3", "text-sm", "text-gray-200"], [1, "flex", "items-center", "gap-1"], ["name", "user", 1, "w-3.5", "h-3.5"], ["name", "shield", 1, "w-3.5", "h-3.5"], ["name", "calendar", 1, "w-3.5", "h-3.5"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "px-4", "py-2", "bg-blue-100", "text-blue-800", "rounded-full", "text-sm", "font-semibold", "capitalize", "flex", "items-center", "gap-2", "animate-slideIn"], ["name", "check-circle", 1, "w-4", "h-4"], ["class", "px-4 py-2 border border-red-300 text-red-600 rounded-lg flex items-center gap-2 hover:bg-red-50 transition-colors", 3, "click", 4, "ngIf"], ["class", "px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors", 3, "click", 4, "ngIf"], [1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "flex", "items-center", "gap-2", "hover:bg-gray-50", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], ["name", "download", "class", "w-4 h-4", 4, "ngIf"], ["name", "loader-2", "class", "w-4 h-4 animate-spin", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-md", "transition-all", "duration-300", "group"], [1, "font-bold", "text-navy", "dark:text-white", "mb-4", "flex", "items-center", "gap-2"], ["name", "user", 1, "w-5", "h-5", "text-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "text-sm"], [1, "space-y-1"], [1, "text-gray-500", "dark:text-gray-400"], [1, "font-medium", "text-navy", "dark:text-white"], [1, "text-gray-500", "dark:text-gray-400", "flex", "items-center", "gap-1"], ["name", "mail", 1, "w-3.5", "h-3.5"], ["name", "phone", 1, "w-3.5", "h-3.5"], ["name", "car", 1, "w-5", "h-5", "text-primary"], [1, "mb-6"], [1, "text-xs", "font-semibold", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wider", "mb-3"], [1, "font-medium", "text-navy", "dark:text-white", "font-mono", "text-xs"], [1, "font-medium", "text-primary"], ["class", "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 group", 4, "ngIf"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "font-bold", "text-navy", "dark:text-white", "mb-4"], [1, "space-y-3", "pb-4", "border-b", "border-gray-100", "dark:border-gray-700", "text-sm"], [1, "flex", "justify-between"], [1, "text-gray-600", "dark:text-gray-300"], [1, "font-medium"], [1, "font-medium", "text-primary", "capitalize"], [1, "pt-4"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-xl", "font-bold", "text-primary"], ["name", "info", 1, "w-5", "h-5", "text-primary"], [1, "space-y-3", "text-sm"], [1, "flex", "justify-between", "py-2", "border-b", "border-gray-100", "last:border-0"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "p-6", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "font-bold", "text-navy", "dark:text-white", "flex", "items-center", "gap-2"], ["name", "message-circle", 1, "w-5", "h-5", "text-primary"], [1, "p-4", "max-h-96", "overflow-y-auto", "space-y-3"], ["class", "text-center py-8 text-gray-500 dark:text-gray-400 text-sm", 4, "ngIf"], ["class", "flex gap-3", 4, "ngFor", "ngForOf"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700"], [1, "flex", "gap-2"], ["type", "file", 1, "hidden", 3, "change"], ["title", "Attach file", 1, "p-2", "text-gray-400", "hover:text-primary", "hover:bg-gray-100", "dark:hover:bg-gray-700", "rounded-lg", "transition-colors", 3, "click"], ["name", "paperclip", 1, "w-5", "h-5"], ["type", "text", 1, "flex-1", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "bg-white", "dark:bg-gray-900", "text-gray-700", "dark:text-gray-300", "placeholder:text-gray-400", "dark:placeholder:text-gray-500", "focus:outline-none", "focus:ring-2", "focus:ring-primary/30", "focus:border-primary", "transition-colors", "text-sm", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "transition-colors", "font-medium", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["name", "send", "class", "w-4 h-4", 4, "ngIf"], [1, "text-sm"], ["class", "mt-2 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-2 rounded", 4, "ngIf"], [1, "px-4", "py-2", "border", "border-red-300", "text-red-600", "rounded-lg", "flex", "items-center", "gap-2", "hover:bg-red-50", "transition-colors", 3, "click"], ["name", "x-circle", 1, "w-4", "h-4"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "flex", "items-center", "gap-2", "hover:bg-primary/90", "transition-colors", 3, "click"], ["name", "edit", 1, "w-4", "h-4"], ["name", "download", 1, "w-4", "h-4"], ["name", "loader-2", 1, "w-4", "h-4", "animate-spin"], [1, "w-full", "flex", "items-center", "justify-between", "text-left", "mb-4", 3, "click"], ["name", "award", 1, "w-5", "h-5", "text-primary"], [1, "w-5", "h-5", "text-gray-400", "transition-transform", 3, "name"], ["class", "space-y-3", 4, "ngIf"], [1, "space-y-3"], ["class", "border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "border", "border-gray-200", "dark:border-gray-600", "rounded-lg", "p-4", "hover:border-primary", "transition-all", "duration-300"], [1, "flex", "items-center", "gap-3", "mb-3"], [1, "font-semibold", "text-navy", "dark:text-white"], [1, "px-2", "py-1", "rounded", "text-xs", "font-medium"], [1, "grid", "grid-cols-3", "gap-4", "text-sm"], [1, "text-gray-500", "dark:text-gray-400", "block", "mb-1"], [1, "font-semibold", "text-primary"], [1, "w-full", "flex", "items-center", "justify-between", "text-left", 3, "click"], ["name", "file-text", 1, "w-5", "h-5", "text-primary"], ["class", "space-y-2 mt-4", 4, "ngIf"], [1, "space-y-2", "mt-4"], ["class", "flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-700", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-2", "p-3", "bg-green-50", "dark:bg-green-900/30", "rounded-lg", "border", "border-green-100", "dark:border-green-700"], ["name", "check-circle", 1, "w-4", "h-4", "text-green-600", "mt-0.5", "flex-shrink-0"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["name", "paperclip", 1, "w-5", "h-5", "text-primary"], ["class", "flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-3", "rounded-lg", "bg-gray-50", "dark:bg-gray-700/50"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["class", "px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium", 4, "ngIf"], ["class", "px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium", 4, "ngIf"], [1, "px-2", "py-1", "bg-green-100", "text-green-700", "rounded", "text-xs", "font-medium"], [1, "px-2", "py-1", "bg-gray-200", "text-gray-600", "rounded", "text-xs", "font-medium"], [1, "text-center", "py-8", "text-gray-500", "dark:text-gray-400", "text-sm"], [1, "flex", "gap-3"], [1, "w-8", "h-8", "bg-primary/10", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0"], ["name", "user", 1, "w-4", "h-4", "text-primary"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-sm", "font-semibold", "text-navy", "dark:text-white"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-sm", "text-gray-700", "dark:text-gray-300", "mb-2"], ["class", "flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "text-xs", "text-gray-500", "dark:text-gray-400"], ["name", "paperclip", 1, "w-3", "h-3"], ["name", "send", 1, "w-4", "h-4"], [1, "mt-2", "flex", "items-center", "gap-2", "text-xs", "text-gray-600", "dark:text-gray-400", "bg-gray-50", "dark:bg-gray-700/50", "p-2", "rounded"], ["name", "file", 1, "w-3", "h-3"], [1, "ml-auto", "text-red-500", "hover:text-red-700", 3, "click"], ["name", "x", 1, "w-3", "h-3"], [1, "flex", "items-center", "justify-center", "h-96"], [3, "loading", "message"], [1, "text-center"], ["name", "alert-circle", 1, "h-12", "w-12", "text-red-500", "mx-auto", "mb-4"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-300", "mb-4"], [1, "px-4", "py-2", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "transition-colors", 3, "click"], ["name", "refresh-cw", 1, "w-4", "h-4", "mr-2", "inline"], [3, "value"]],
        template: function BrokerQuotationDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, BrokerQuotationDetailsComponent_div_1_Template, 241, 115, "div", 1)(2, BrokerQuotationDetailsComponent_div_2_Template, 3, 4, "div", 2)(3, BrokerQuotationDetailsComponent_div_3_Template, 12, 7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "app-modal", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("close", function BrokerQuotationDetailsComponent_Template_app_modal_close_4_listener() {
              return ctx.closeLostModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "div")(7, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Reason for loss ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BrokerQuotationDetailsComponent_Template_select_ngModelChange_9_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.selectedLostReason, $event) || (ctx.selectedLostReason = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Select a reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, BrokerQuotationDetailsComponent_option_12_Template, 2, 2, "option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div")(14, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, " Feedback (Optional) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "textarea", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function BrokerQuotationDetailsComponent_Template_textarea_ngModelChange_16_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.lostFeedback, $event) || (ctx.lostFeedback = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 10)(18, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_Template_button_click_18_listener() {
              return ctx.closeLostModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrokerQuotationDetailsComponent_Template_button_click_20_listener() {
              return ctx.submitMarkAsLost();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.displayData);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("isOpen", ctx.isLostModalOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedLostReason);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.lostReasons);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.lostFeedback);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.selectedLostReason || ctx.lostLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.lostLoading ? "Processing..." : "Confirm Lost", " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__.DashboardLayoutComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__.LoadingSpinnerComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_13__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe]
      });
    }
  }
  return BrokerQuotationDetailsComponent;
})();

/***/ }),

/***/ 2119:
/*!************************************************************************!*\
  !*** ./src/app/broker/pages/quotations/broker-quotations.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerQuotationsComponent: () => (/* binding */ BrokerQuotationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/app-translate.service */ 1672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/customer-selection-modal/customer-selection-modal.component */ 3861);
/* harmony import */ var _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dynamic-table-with-filters/dynamic-table-with-filters.component */ 4373);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 4815);
/* harmony import */ var _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/column-toggle/column-toggle.component */ 6117);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3955);














const _c0 = () => ["week", "month", "year"];
function BrokerQuotationsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerQuotationsComponent_button_16_Template_button_click_0_listener() {
      const period_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.setSelectedPeriod(period_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("bg-blue-600", ctx_r2.selectedPeriod === period_r2)("text-white", ctx_r2.selectedPeriod === period_r2)("bg-white", ctx_r2.selectedPeriod !== period_r2)("text-gray-600", ctx_r2.selectedPeriod !== period_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 9, "BROKER.DASHBOARD.PERFORMANCE." + period_r2.toUpperCase()), " ");
  }
}
function BrokerQuotationsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r2.error), " ");
  }
}
function BrokerQuotationsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function BrokerQuotationsComponent_app_dynamic_table_with_filters_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-dynamic-table-with-filters", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("filteredDataChange", function BrokerQuotationsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_filteredDataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onFilteredDataChange($event));
    })("filterChange", function BrokerQuotationsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_filterChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onFilterChange($event));
    })("exportData", function BrokerQuotationsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_exportData_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onExport());
    })("action", function BrokerQuotationsComponent_app_dynamic_table_with_filters_26_Template_app_dynamic_table_with_filters_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.handleTableAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r2.getDisplayData())("columns", ctx_r2.visibleColumns)("showExport", true)("maxSelectOptions", 10)("pageSize", ctx_r2.pageSize)("currentPage", ctx_r2.currentPage);
  }
}
function BrokerQuotationsComponent_app_pagination_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function BrokerQuotationsComponent_app_pagination_27_Template_app_pagination_pageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onPageChange($event));
    })("pageSizeChange", function BrokerQuotationsComponent_app_pagination_27_Template_app_pagination_pageSizeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onPageSizeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentPage", ctx_r2.currentPage)("pageSize", ctx_r2.pageSize)("totalRecords", ctx_r2.totalRecords);
  }
}
function BrokerQuotationsComponent_app_customer_selection_modal_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-customer-selection-modal", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("close", function BrokerQuotationsComponent_app_customer_selection_modal_28_Template_app_customer_selection_modal_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.isCustomerModalOpen = false);
    })("selectCustomer", function BrokerQuotationsComponent_app_customer_selection_modal_28_Template_app_customer_selection_modal_selectCustomer_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.onCustomerSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isOpen", ctx_r2.isCustomerModalOpen);
  }
}
let BrokerQuotationsComponent = /*#__PURE__*/(() => {
  class BrokerQuotationsComponent {
    constructor(crmService, authService, router, route, appTranslate) {
      this.crmService = crmService;
      this.authService = authService;
      this.router = router;
      this.route = route;
      this.appTranslate = appTranslate;
      this.allColumns = [];
      this.visibleColumns = [];
      this.data = [];
      this.filteredData = [];
      this.isLoading = true;
      this.error = null;
      this.isCustomerModalOpen = false;
      this.currentFilters = {};
      // Pagination
      this.currentPage = 1;
      this.pageSize = 25;
      this.totalRecords = 1000; // Initial estimate, will be updated after fetch
      // Caching mechanism
      // Caching mechanism
      this.cachedData = [];
      this.isBackgroundLoading = false;
      this.hasActiveFilters = false;
      this.currentDomain = [];
      this.pageTitle = 'SIDEBAR.QUOTATIONS';
      // Date Filter Logic
      this.selectedPeriod = 'month';
      this.lastActivePage = 1;
      this.setupColumns();
      // Listen to route data changes to update title and filter
      this.route.data.subscribe(data => {
        const filterType = data['filterType'];
        this.currentDomain = this.getDomainFromFilterType(filterType);
        if (filterType === 'renewal') this.pageTitle = 'SIDEBAR.RENEWAL_REQUESTS';else if (filterType === 'endorsement') this.pageTitle = 'SIDEBAR.ENDORSEMENT_REQUESTS';else if (filterType === 'lost') this.pageTitle = 'SIDEBAR.LOST_REQUESTS';else this.pageTitle = 'SIDEBAR.ALL_QUOTATIONS';
        // Reset pagination and cache when route changes
        this.currentPage = 1;
        this.clearCache();
        this.loadFirstPage();
      });
    }
    ngOnInit() {
      // Initial load handled in constructor subscription
    }
    getDomainFromFilterType(type) {
      switch (type) {
        case 'renewal':
          return [['policy_services_type', '=', 'renewal']];
        case 'endorsement':
          return [['policy_services_type', '=', 'end']];
        case 'lost':
          return [['active', '=', false]];
        default:
          return [];
      }
    }
    // Old methods removed
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
    setupColumns() {
      this.allColumns = [{
        key: 'quoteNumber',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.QUOTE_NUMBER'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'title',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.TITLE'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'date',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.DATE'),
        filterable: true,
        filterType: 'date',
        sortable: true
      }, {
        key: 'customerName',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.CUSTOMER_NAME'),
        filterable: true,
        filterType: 'text',
        sortable: true
      }, {
        key: 'stage',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.STAGE'),
        filterable: true,
        render: row => this.renderStatus(row)
      }, {
        key: 'type',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.TYPE'),
        filterable: true,
        filterType: 'select',
        render: row => this.renderType(row)
      }, {
        key: 'actions',
        label: this.appTranslate.instant('BROKER.QUOTATIONS.COLUMNS.ACTIONS'),
        filterable: false,
        mandatory: true,
        render: row => `
                    <div class="flex items-center gap-2">
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="view" data-id="${row.id}" title="View Details">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        <button class="p-1 text-gray-400 hover:text-primary transition-colors" data-action="download" data-id="${row.id}" title="Download Quote">
                            <i data-lucide="file-text" class="w-4 h-4"></i>
                        </button>
                    </div>
                `
      }];
      // Initialize visibleColumns with allColumns by default, 
      // the toggle component will emit the correct list on init based on prefs
      this.visibleColumns = [...this.allColumns];
    }
    onVisibleColumnsChange(columns) {
      this.visibleColumns = columns;
    }
    renderStatus(row) {
      // Use rawStage for styling logic, fallback to 'draft'
      const s = row.rawStage || 'draft';
      let classes = '';
      // Assign unique color to each stage value
      switch (s) {
        case 'new':
          classes = 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
          break;
        case 'draft':
          classes = 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
          break;
        case 'sent':
          classes = 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300';
          break;
        case 'pending':
        case 'review':
          classes = 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
          break;
        case 'negotiation':
          classes = 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300';
          break;
        case 'accepted':
        case 'approved':
          classes = 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
          break;
        case 'won':
          classes = 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300';
          break;
        case 'rejected':
        case 'lost':
          classes = 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
          break;
        case 'expired':
          classes = 'bg-slate-100 dark:bg-slate-900/30 text-slate-800 dark:text-slate-300';
          break;
        default:
          classes = 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      }
      // Use pre-translated stage for display
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${row.stage}</span>`;
    }
    renderType(row) {
      // Use rawType for styling logic, fallback to 'new'
      const t = row.rawType || 'new';
      let classes = '';
      // Assign unique color to each type value
      switch (t) {
        case 'new':
          classes = 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300';
          break;
        case 'renewal':
          classes = 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300';
          break;
        case 'endorsement':
        case 'end':
          classes = 'bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300';
          break;
        case 'cancellation':
        case 'cancel':
          classes = 'bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300';
          break;
        case 'modification':
        case 'non_technical':
        case 'technical_refund':
        case 'technical_add':
        case 'technical_borndead':
          classes = 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300';
          break;
        default:
          classes = 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
      }
      // Use pre-translated type for display
      return `<span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}">${row.type}</span>`;
    }
    mapQuotation(q) {
      // Pre-process Stage/Status
      const rawStage = q.stage_name ? q.stage_name.replace(/^STATUS\./i, '').toLowerCase() : 'draft';
      const stageDisplay = this.appTranslate.instant(`STATUS.${rawStage.toUpperCase()}`);
      // Pre-process Type
      const rawType = q.opportunity_type ? q.opportunity_type.replace(/^TYPES\./i, '').toLowerCase() : 'new';
      const typeDisplay = this.appTranslate.instant(`TYPES.${rawType.toUpperCase()}`);
      return {
        id: q.opportunity_id,
        quoteNumber: q.opportunity_number || 'N/A',
        title: q.name ? q.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') : 'N/A',
        date: q.opportunity_date || 'N/A',
        customerName: q.contact_name ? q.contact_name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') : 'N/A',
        stage: stageDisplay,
        rawStage: rawStage,
        type: typeDisplay,
        rawType: rawType
      };
    }
    displayPageFromCache() {
      // Display from cache immediately
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      // Filter cached data for current page
      const pageData = this.cachedData.slice(startIndex, endIndex);
      this.data = pageData;
      this.isLoading = false;
    }
    clearCache() {
      this.cachedData = [];
      this.isBackgroundLoading = false;
    }
    setSelectedPeriod(period) {
      if (this.selectedPeriod === period) {
        this.selectedPeriod = 'all';
        // Restore previous page if valid
        const validCount = this.cachedData.filter(q => q !== undefined).length;
        const maxPage = Math.ceil(validCount / this.pageSize) || 1;
        if (this.lastActivePage > maxPage) {
          this.currentPage = 1;
        } else {
          this.currentPage = this.lastActivePage;
        }
      } else {
        // Store current page before switching filter
        this.lastActivePage = this.currentPage;
        this.selectedPeriod = period;
        this.currentPage = 1;
      }
      this.displayCurrentPage();
    }
    displayCurrentPage() {
      let validItems = this.cachedData.filter(q => q !== undefined);
      // Apply Date Filter Client-Side
      if (this.selectedPeriod !== 'all') {
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        if (this.selectedPeriod === 'week') {
          const day = start.getDay();
          const diff = (day + 1) % 7;
          start.setDate(now.getDate() - diff);
        } else if (this.selectedPeriod === 'month') {
          start.setDate(1);
        } else if (this.selectedPeriod === 'year') {
          start.setMonth(0, 1);
        }
        validItems = validItems.filter(q => {
          if (!q.date || q.date === 'N/A') return false;
          const d = new Date(q.date);
          return d >= start && d <= now;
        });
      }
      this.totalRecords = validItems.length;
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.data = validItems.slice(startIndex, endIndex);
      this.isLoading = false;
    }
    getDisplayData() {
      let validItems = this.cachedData.filter(q => q !== undefined);
      if (this.selectedPeriod !== 'all') {
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0);
        if (this.selectedPeriod === 'week') {
          const day = start.getDay();
          const diff = (day + 1) % 7;
          start.setDate(now.getDate() - diff);
        } else if (this.selectedPeriod === 'month') {
          start.setDate(1);
        } else if (this.selectedPeriod === 'year') {
          start.setMonth(0, 1);
        }
        validItems = validItems.filter(q => {
          if (!q.date || q.date === 'N/A') return false;
          const d = new Date(q.date);
          return d >= start && d <= now;
        });
      }
      return validItems;
    }
    // formatDate removed
    // getDateDomain removed
    loadFirstPage() {
      this.isLoading = true;
      const user = this.authService.currentUserValue;
      if (!user) return;
      // Ensure currentDomain is array (Route Filters)
      let domainArray = [];
      if (Array.isArray(this.currentDomain)) {
        domainArray = [...this.currentDomain];
      } else if (typeof this.currentDomain === 'string' && this.currentDomain !== '[]') {
        domainArray = [];
      }
      // NO date domain in API call
      const finalDomain = [...domainArray];
      this.crmService.listOpportunities({
        user_id: user.id,
        user_type: 'broker',
        limit: this.pageSize,
        offset: 0,
        domain: finalDomain
      }).subscribe({
        next: response => {
          const quotes = Array.isArray(response) ? response : response.data || [];
          if (response.total_count || response.count) {
            this.totalRecords = response.total_count || response.count;
          } else {
            this.totalRecords = 0;
          }
          const mappedQuotes = quotes.map(q => this.mapQuotation(q));
          this.cachedData = [...mappedQuotes];
          // Apply initial filter
          this.displayCurrentPage();
          console.log(`✓ Page 1 loaded. Starting background loading...`);
          // Start background loading
          this.loadAllInBackground(finalDomain);
        },
        error: err => {
          console.error('Error loading quotations:', err);
          this.error = 'BROKER.QUOTATIONS.ERROR_LOADING';
          this.isLoading = false;
        }
      });
    }
    loadAllInBackground(finalDomain = []) {
      const user = this.authService.currentUserValue;
      if (!user) return;
      const batchSize = 1000;
      let offset = 0;
      let allData = [];
      // If domain argument missing, reconstruct
      if (!finalDomain || finalDomain.length === 0) {
        let domainArray = [];
        if (Array.isArray(this.currentDomain)) {
          domainArray = [...this.currentDomain];
        }
        finalDomain = [...domainArray];
      }
      const fetchNextBatch = () => {
        this.crmService.listOpportunities({
          user_id: user.id,
          user_type: 'broker',
          limit: batchSize,
          offset: offset,
          domain: finalDomain
        }).subscribe({
          next: response => {
            const quotes = Array.isArray(response) ? response : response.data || [];
            const mappedQuotes = quotes.map(q => this.mapQuotation(q));
            allData = [...allData, ...mappedQuotes];
            if (!Array.isArray(response) && (response.total_count || response.count)) {
              this.totalRecords = response.total_count || response.count;
            }
            if (quotes.length === batchSize) {
              offset += batchSize;
              fetchNextBatch();
            } else {
              // Finished loading
              this.cachedData = allData;
              this.totalRecords = allData.length;
              // Refresh view
              this.displayCurrentPage();
            }
          },
          error: err => console.error('Background load failed', err)
        });
      };
      fetchNextBatch();
    }
    onFilteredDataChange(filteredData) {
      this.filteredData = filteredData;
    }
    onFilterChange(activeFilters) {
      this.hasActiveFilters = Object.keys(activeFilters).length > 0;
    }
    handleTableAction(event) {
      switch (event.action) {
        case 'view':
          this.router.navigate(['/dashboard/broker/quotations', event.data.id]);
          break;
        case 'download':
          console.log('Download', event.data.id);
          break;
      }
    }
    onExport() {
      console.log('Exporting quotations...');
    }
    openCustomerModal() {
      this.isCustomerModalOpen = true;
    }
    onCustomerSelected(customer) {
      this.isCustomerModalOpen = false;
      this.router.navigate(['/dashboard/broker/quote/new'], {
        state: {
          customer: customer
        }
      });
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
      this.ɵfac = function BrokerQuotationsComponent_Factory(t) {
        return new (t || BrokerQuotationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_0__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_app_translate_service__WEBPACK_IMPORTED_MODULE_2__.AppTranslateService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: BrokerQuotationsComponent,
        selectors: [["app-broker-quotations"]],
        decls: 29,
        vars: 18,
        consts: [[1, "space-y-6"], [1, "bg-blue-50", "px-7", "py-6", "border-b", "border-gray-200"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "bg-gradient-to-br", "from-blue-500", "to-blue-600", "p-3", "rounded-lg", "shadow-sm", "flex-shrink-0"], ["data-lucide", "file-text", 1, "w-6", "h-6", "text-white"], [1, "flex-1"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "flex", "gap-2"], ["class", "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize border border-gray-200 hover:bg-gray-50 shadow-sm", 3, "bg-blue-600", "text-white", "bg-white", "text-gray-600", "click", 4, "ngFor", "ngForOf"], ["variant", "primary", 3, "click"], ["data-lucide", "plus", 1, "w-4", "h-4", "mr-2"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "overflow-hidden"], [1, "p-4", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-end"], [3, "visibleColumnsChange", "columns", "pageId"], ["class", "p-8 text-center text-red-500", 4, "ngIf"], ["class", "p-12 flex justify-center", 4, "ngIf"], [3, "data", "columns", "showExport", "maxSelectOptions", "pageSize", "currentPage", "filteredDataChange", "filterChange", "exportData", "action", 4, "ngIf"], [3, "currentPage", "pageSize", "totalRecords", "pageChange", "pageSizeChange", 4, "ngIf"], [3, "isOpen", "close", "selectCustomer", 4, "ngIf"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "transition-all", "duration-300", "capitalize", "border", "border-gray-200", "hover:bg-gray-50", "shadow-sm", 3, "click"], [1, "p-8", "text-center", "text-red-500"], [1, "p-12", "flex", "justify-center"], [3, "filteredDataChange", "filterChange", "exportData", "action", "data", "columns", "showExport", "maxSelectOptions", "pageSize", "currentPage"], [3, "pageChange", "pageSizeChange", "currentPage", "pageSize", "totalRecords"], [3, "close", "selectCustomer", "isOpen"]],
        template: function BrokerQuotationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6)(8, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, BrokerQuotationsComponent_button_16_Template, 3, 11, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "app-button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerQuotationsComponent_Template_app_button_click_17_listener() {
              return ctx.openCustomerModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "app-column-toggle", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("visibleColumnsChange", function BrokerQuotationsComponent_Template_app_column_toggle_visibleColumnsChange_23_listener($event) {
              return ctx.onVisibleColumnsChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, BrokerQuotationsComponent_div_24_Template, 3, 3, "div", 17)(25, BrokerQuotationsComponent_div_25_Template, 2, 0, "div", 18)(26, BrokerQuotationsComponent_app_dynamic_table_with_filters_26_Template, 1, 6, "app-dynamic-table-with-filters", 19)(27, BrokerQuotationsComponent_app_pagination_27_Template, 1, 3, "app-pagination", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, BrokerQuotationsComponent_app_customer_selection_modal_28_Template, 1, 1, "app-customer-selection-modal", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 11, ctx.pageTitle));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 13, "BROKER.QUOTATIONS.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 15, "BROKER.QUOTATIONS.CREATE_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("columns", ctx.allColumns)("pageId", "broker-quotations-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.totalRecords > 0 && !ctx.hasActiveFilters);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isCustomerModalOpen);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, _shared_components_customer_selection_modal_customer_selection_modal_component__WEBPACK_IMPORTED_MODULE_6__.CustomerSelectionModalComponent, _shared_components_dynamic_table_with_filters_dynamic_table_with_filters_component__WEBPACK_IMPORTED_MODULE_7__.DynamicTableWithFiltersComponent, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__.PaginationComponent, _shared_components_column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_9__.ColumnToggleComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe]
      });
    }
  }
  return BrokerQuotationsComponent;
})();

/***/ }),

/***/ 3067:
/*!*****************************************************************!*\
  !*** ./src/app/broker/pages/quote-flow/quote-flow.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteFlowComponent: () => (/* binding */ QuoteFlowComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/quote.service */ 7244);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/customer.service */ 5680);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modal/modal.component */ 9081);
/* harmony import */ var _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/stepper/stepper.component */ 6501);
/* harmony import */ var _shared_components_collapsible_section_collapsible_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/collapsible-section/collapsible-section.component */ 8481);
/* harmony import */ var _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/selection-modal/selection-modal.component */ 2209);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _components_program_selector_program_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/program-selector/program-selector.component */ 5187);


















const _c0 = () => ({
  code: "new",
  name: "New",
  icon: "\u2728",
  description: "Brand new vehicle"
});
const _c1 = () => ({
  code: "used",
  name: "Used",
  icon: "\uD83D\uDE97",
  description: "Pre-owned vehicle"
});
const _c2 = (a0, a1) => [a0, a1];
const _c3 = (a0, a1) => ({
  "border-blue-600 bg-blue-50 dark:bg-blue-900/20": a0,
  "border-gray-200 dark:border-gray-700": a1
});
const _c4 = () => ["/dashboard/broker/quotations"];
function QuoteFlowComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 16)(1, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Create New Insurance Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Follow the steps below to create a new insurance quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function QuoteFlowComponent_app_modern_stepper_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-modern-stepper", 19);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("steps", ctx_r0.steps)("currentStep", ctx_r0.currentStep);
  }
}
function QuoteFlowComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21)(1, "app-collapsible-section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toggle", function QuoteFlowComponent_div_4_div_1_Template_app_collapsible_section_toggle_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.toggleSection("selection"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 23)(3, "div")(4, "app-selection-modal", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_1_Template_app_selection_modal_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.make, $event) || (ctx_r0.vehicleForm.make = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("valueChange", function QuoteFlowComponent_div_4_div_1_Template_app_selection_modal_valueChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onMakeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div")(6, "app-selection-modal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_1_Template_app_selection_modal_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.model, $event) || (ctx_r0.vehicleForm.model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("valueChange", function QuoteFlowComponent_div_4_div_1_Template_app_selection_modal_valueChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onModelChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div")(8, "app-selection-modal", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_1_Template_app_selection_modal_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.year, $event) || (ctx_r0.vehicleForm.year = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "app-collapsible-section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toggle", function QuoteFlowComponent_div_4_div_1_Template_app_collapsible_section_toggle_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.toggleSection("identification"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 28)(11, "div")(12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, " Chassis No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_div_4_div_1_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.chassisNo, $event) || (ctx_r0.vehicleForm.chassisNo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div")(18, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Engine No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_div_4_div_1_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.engineNo, $event) || (ctx_r0.vehicleForm.engineNo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "app-collapsible-section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toggle", function QuoteFlowComponent_div_4_div_1_Template_app_collapsible_section_toggle_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.toggleSection("financial"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 28)(25, "div")(26, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, " Sum Insured (EGP) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_div_4_div_1_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.sumInsured, $event) || (ctx_r0.vehicleForm.sumInsured = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div")(32, "app-selection-modal", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_1_Template_app_selection_modal_valueChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.vehicle_state, $event) || (ctx_r0.vehicleForm.vehicle_state = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("expanded", ctx_r0.isSectionOpen("selection"))("isComplete", ctx_r0.isSelectionComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.make);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.makers)("title", "Select Vehicle Make")("subtitle", "Choose the manufacturer")("placeholder", "Choose vehicle make")("layout", "grid")("gridCols", 4)("required", true)("imageKey", "risk_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.models)("title", "Select Vehicle Model")("subtitle", "Choose the model")("placeholder", !ctx_r0.vehicleForm.make ? "Select make first" : "Choose model")("layout", "grid")("gridCols", 4)("disabled", !ctx_r0.vehicleForm.make)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.years)("title", "Select Manufacturing Year")("subtitle", "Choose the year")("placeholder", !ctx_r0.vehicleForm.model ? "Select model first" : "Choose year")("layout", "grid")("gridCols", 5)("disabled", !ctx_r0.vehicleForm.model)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("expanded", ctx_r0.isSectionOpen("identification"))("isComplete", ctx_r0.isIdentificationComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.vehicleForm.chassisNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.vehicleForm.engineNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("expanded", ctx_r0.isSectionOpen("financial"))("isComplete", ctx_r0.isFinancialComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.vehicleForm.sumInsured);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.vehicle_state);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](44, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](43, _c1)))("title", "Select Vehicle Condition")("subtitle", "Is the vehicle new or used?")("placeholder", "Choose condition")("layout", "list");
  }
}
function QuoteFlowComponent_div_4_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_4_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "No coverage plans available for the selected vehicle criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function QuoteFlowComponent_div_4_div_2_div_6_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_4_div_2_div_6_div_1_i_lucide_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i-lucide", 62);
  }
}
function QuoteFlowComponent_div_4_div_2_div_6_div_1_i_lucide_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i-lucide", 63);
  }
}
function QuoteFlowComponent_div_4_div_2_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_div_4_div_2_div_6_div_1_Template_div_click_0_listener() {
      const proposal_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.selectProposal(proposal_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, QuoteFlowComponent_div_4_div_2_div_6_div_1_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 47)(3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Proposal Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 50)(8, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Gross Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 53)(14, "div", 54)(15, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Net Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 54)(21, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 54)(26, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 54)(32, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](36, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "app-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_div_4_div_2_div_6_div_1_Template_app_button_click_37_listener($event) {
      const proposal_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.downloadProposalPdf(proposal_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, QuoteFlowComponent_div_4_div_2_div_6_div_1_i_lucide_38_Template, 1, 0, "i-lucide", 58)(39, QuoteFlowComponent_div_4_div_2_div_6_div_1_i_lucide_39_Template, 1, 0, "i-lucide", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const proposal_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](24, _c3, (ctx_r0.selectedProposal == null ? null : ctx_r0.selectedProposal.id) === proposal_r4.id, (ctx_r0.selectedProposal == null ? null : ctx_r0.selectedProposal.id) !== proposal_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r0.selectedProposal == null ? null : ctx_r0.selectedProposal.id) === proposal_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", proposal_r4.proposal_reference || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](12, 12, proposal_r4.proposal_gross_premium, "EGP "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](19, 15, proposal_r4.proposal_net_premium, "EGP "));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", proposal_r4.proposal_net_rate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](30, 18, proposal_r4.proposal_tax_amount, "EGP "));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](36, 21, proposal_r4.proposal_issue_fees, "EGP "));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r0.downloadingProposalId === proposal_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.downloadingProposalId !== proposal_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.downloadingProposalId === proposal_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.downloadingProposalId === proposal_r4.id ? "Downloading..." : "Download PDF", " ");
  }
}
function QuoteFlowComponent_div_4_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, QuoteFlowComponent_div_4_div_2_div_6_div_1_Template, 41, 27, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.proposals);
  }
}
function QuoteFlowComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Select Coverage Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, QuoteFlowComponent_div_4_div_2_div_4_Template, 2, 0, "div", 37)(5, QuoteFlowComponent_div_4_div_2_div_5_Template, 4, 0, "div", 38)(6, QuoteFlowComponent_div_4_div_2_div_6_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.proposals.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.proposals.length > 0);
  }
}
function QuoteFlowComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21)(1, "app-collapsible-section", 64)(2, "div", 65)(3, "div")(4, "app-selection-modal", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_3_Template_app_selection_modal_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.category, $event) || (ctx_r0.vehicleForm.category = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div")(6, "app-selection-modal", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_3_Template_app_selection_modal_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.bodyType, $event) || (ctx_r0.vehicleForm.bodyType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div")(8, "app-selection-modal", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_3_Template_app_selection_modal_valueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.color, $event) || (ctx_r0.vehicleForm.color = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div")(10, "app-selection-modal", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_3_Template_app_selection_modal_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.fuelType, $event) || (ctx_r0.vehicleForm.fuelType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div")(12, "app-selection-modal", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_3_Template_app_selection_modal_valueChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.usage, $event) || (ctx_r0.vehicleForm.usage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div")(14, "app-selection-modal", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("valueChange", function QuoteFlowComponent_div_4_div_3_Template_app_selection_modal_valueChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.cc, $event) || (ctx_r0.vehicleForm.cc = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div")(16, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, " Number of Seats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_div_4_div_3_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.seats, $event) || (ctx_r0.vehicleForm.seats = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div")(22, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, " Plate No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_div_4_div_3_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.plateNo, $event) || (ctx_r0.vehicleForm.plateNo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div")(28, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, " Kilometers Driven ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_div_4_div_3_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.kilometers, $event) || (ctx_r0.vehicleForm.kilometers = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "app-collapsible-section", 74)(32, "app-program-selector", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("includeRoadsideChange", function QuoteFlowComponent_div_4_div_3_Template_app_program_selector_includeRoadsideChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.hasRoadSide, $event) || (ctx_r0.vehicleForm.hasRoadSide = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    })("selectedProgramChange", function QuoteFlowComponent_div_4_div_3_Template_app_program_selector_selectedProgramChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r0.vehicleForm.roadSideProgram, $event) || (ctx_r0.vehicleForm.roadSideProgram = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("programSelected", function QuoteFlowComponent_div_4_div_3_Template_app_program_selector_programSelected_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onProgramSelected($event));
    })("roadsideToggled", function QuoteFlowComponent_div_4_div_3_Template_app_program_selector_roadsideToggled_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onRoadsideToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("expanded", true)("isComplete", ctx_r0.isSpecificationsComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.categories)("title", "Select Vehicle Category")("subtitle", "Choose the category")("placeholder", !ctx_r0.vehicleForm.model ? "Select model first" : "Choose category")("layout", "list")("disabled", !ctx_r0.vehicleForm.model)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.bodyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.bodyTypes)("title", "Select Body Type")("subtitle", "Choose the vehicle body type")("placeholder", "Choose body type")("layout", "grid")("gridCols", 3)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.colors)("title", "Select Vehicle Color")("subtitle", "Choose the color")("placeholder", "Choose color")("layout", "grid")("gridCols", 4)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.fuelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.fuelTypes)("title", "Select Fuel Type")("subtitle", "Choose the fuel type")("placeholder", "Choose fuel type")("layout", "list")("required", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.usage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.usages)("title", "Select Vehicle Usage")("subtitle", "Choose how the vehicle is used")("placeholder", "Choose usage type")("layout", "list")("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("value", ctx_r0.vehicleForm.cc);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("options", ctx_r0.ccs)("title", "Select Engine CC")("subtitle", "Choose the engine capacity")("placeholder", "Choose engine CC")("layout", "grid")("gridCols", 3)("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.vehicleForm.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.vehicleForm.plateNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.vehicleForm.kilometers);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("expanded", true)("isComplete", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("includeRoadside", ctx_r0.vehicleForm.hasRoadSide)("selectedProgram", ctx_r0.vehicleForm.roadSideProgram);
  }
}
function QuoteFlowComponent_div_4_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "No documents required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function QuoteFlowComponent_div_4_div_4_div_6_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_4_div_4_div_6_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_4_div_4_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_4_div_4_div_6_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_4_div_4_div_6_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const doc_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((tmp_5_0 = ctx_r0.uploadedDocuments.get(doc_r7.id)) == null ? null : tmp_5_0.file_name);
  }
}
function QuoteFlowComponent_div_4_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div")(6, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, QuoteFlowComponent_div_4_div_4_div_6_span_8_Template, 2, 0, "span", 84)(9, QuoteFlowComponent_div_4_div_4_div_6_span_9_Template, 2, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, QuoteFlowComponent_div_4_div_4_div_6_span_10_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 87)(12, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function QuoteFlowComponent_div_4_div_4_div_6_Template_input_change_12_listener($event) {
      const doc_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onFileSelected($event, doc_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, QuoteFlowComponent_div_4_div_4_div_6_span_14_Template, 2, 0, "span", 3)(15, QuoteFlowComponent_div_4_div_4_div_6_span_15_Template, 2, 1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r0.uploadedDocuments.has(doc_r7.id) ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-lucide", ctx_r0.uploadedDocuments.has(doc_r7.id) ? "check" : "file-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](doc_r7.item || doc_r7.document_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", doc_r7.required_document && !ctx_r0.uploadedDocuments.has(doc_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.uploadedDocuments.has(doc_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", doc_r7.required_document && !ctx_r0.uploadedDocuments.has(doc_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("id", "file-", doc_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("for", "file-", doc_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r0.uploadedDocuments.has(doc_r7.id) ? "border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.uploadedDocuments.has(doc_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.uploadedDocuments.has(doc_r7.id));
  }
}
function QuoteFlowComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Upload Required Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, QuoteFlowComponent_div_4_div_4_div_4_Template, 4, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, QuoteFlowComponent_div_4_div_4_div_6_Template, 16, 13, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.requiredDocuments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.requiredDocuments);
  }
}
function QuoteFlowComponent_div_4_div_5_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "div")(3, "h4", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Gross Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 109)(10, "div")(11, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Net Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div")(16, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div")(21, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.selectedProposal.proposal_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" EGP ", (ctx_r0.selectedProposal.proposal_gross_premium || 0).toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("EGP ", (ctx_r0.selectedProposal.proposal_net_premium || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("EGP ", (ctx_r0.selectedProposal.proposal_tax_amount || 0).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("EGP ", (ctx_r0.selectedProposal.proposal_issue_fees || 0).toLocaleString(), "");
  }
}
function QuoteFlowComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Review & Issue Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 95)(5, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Customer Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 97)(8, "div")(9, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div")(14, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div")(19, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div")(24, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 95)(29, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Vehicle Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 97)(32, "div")(33, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Make & Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div")(38, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div")(43, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44, "Chassis No");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div")(48, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Sum Insured");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "div", 100)(53, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Selected Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, QuoteFlowComponent_div_4_div_5_div_55_Template, 25, 5, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 102)(57, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_div_4_div_5_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.issuePolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.name) || (ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.full_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"]((ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.nationalId) || (ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.identification_number) || (ctx_r0.selectedCustomer == null ? null : ctx_r0.selectedCustomer.national_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r0.makeName, " ", ctx_r0.modelName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.yearName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.vehicleForm.chassisNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("EGP ", (+ctx_r0.vehicleForm.sumInsured).toLocaleString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.selectedProposal);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Issuing Policy..." : "Issue Policy", " ");
  }
}
function QuoteFlowComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, QuoteFlowComponent_div_4_div_1_Template, 33, 47, "div", 20)(2, QuoteFlowComponent_div_4_div_2_Template, 7, 3, "div", 4)(3, QuoteFlowComponent_div_4_div_3_Template, 33, 55, "div", 20)(4, QuoteFlowComponent_div_4_div_4_Template, 7, 2, "div", 4)(5, QuoteFlowComponent_div_4_div_5_Template, 60, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 4);
  }
}
function QuoteFlowComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 119)(1, "h3", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Policy Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 28)(4, "div")(5, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Policy State");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div")(10, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div")(15, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Opportunity Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div")(20, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Won Proposal");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "p", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r0.issuanceResponseData.policy_state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.issuanceResponseData.policy_state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.issuanceResponseData.opportunity_number || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r0.issuanceResponseData.won_proposal, " ");
  }
}
function QuoteFlowComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34)(1, "div", 110)(2, "div", 111)(3, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h2", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Policy Issued Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " The policy has been created and is now active. You can find it in the policies list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, QuoteFlowComponent_div_5_div_9_Template, 24, 4, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 102)(11, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, " Back to Quote List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.issuanceResponseData);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](2, _c4));
  }
}
function QuoteFlowComponent_div_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_div_6_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.previousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r0.loading);
  }
}
function QuoteFlowComponent_div_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_div_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.openLostModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Mark as Lost ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function QuoteFlowComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_div_6_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r0.canProceed() || ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Processing..." : "Next", " ");
  }
}
function QuoteFlowComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 124)(1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, QuoteFlowComponent_div_6_button_2_Template, 3, 1, "button", 126)(3, QuoteFlowComponent_div_6_button_3_Template, 3, 0, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, QuoteFlowComponent_div_6_button_4_Template, 3, 2, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.opportunityId && ctx_r0.currentStep > 0 && ctx_r0.currentStep < ctx_r0.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.currentStep < ctx_r0.steps.length - 1);
  }
}
function QuoteFlowComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reason_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", reason_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](reason_r12.name);
  }
}
let QuoteFlowComponent = /*#__PURE__*/(() => {
  class QuoteFlowComponent {
    constructor(router, route, quoteService, crmService, customerService, authService, notificationService) {
      this.router = router;
      this.route = route;
      this.quoteService = quoteService;
      this.crmService = crmService;
      this.customerService = customerService;
      this.authService = authService;
      this.notificationService = notificationService;
      this.currentStep = 0;
      this.loading = false;
      this.error = null;
      // Wizard steps
      // Wizard steps
      this.steps = [{
        id: 1,
        title: 'Vehicle Details',
        description: 'Enter vehicle information'
      }, {
        id: 2,
        title: 'Coverage Selection',
        description: 'Choose coverage plan'
      }, {
        id: 3,
        title: 'Additional Details',
        description: 'Complete vehicle specification'
      }, {
        id: 4,
        title: 'Documents',
        description: 'Upload required documents'
      }, {
        id: 5,
        title: 'Review & Issue',
        description: 'Review and issue policy'
      }];
      // Customer Selection Modal (Removed from flow, handled by parent/overlay)
      this.isCustomerModalOpen = false;
      this.selectedCustomer = null;
      // Vehicle Details Form
      this.vehicleForm = {
        make: '',
        model: '',
        year: '',
        category: '',
        chassisNo: '',
        engineNo: '',
        plateNo: '',
        color: '',
        bodyType: '',
        fuelType: 'Petrol',
        cc: '',
        seats: '5',
        usage: 'Private',
        sumInsured: '',
        vehicle_state: 'new',
        kilometers: '0',
        hasRoadSide: true,
        roadSideProgram: ''
      };
      // Collapsible Sections State
      this.openSections = {
        selection: true,
        identification: false,
        specifications: false,
        financial: false,
        coverage: false
      };
      // LOV Data
      this.makers = [];
      this.models = [];
      this.categories = [];
      this.years = [];
      this.bodyTypes = [];
      this.usages = [];
      this.ccs = [];
      this.fuelTypes = [];
      this.colors = [];
      this.roadSidePrograms = [];
      // Quotation Data
      this.opportunityId = null;
      this.proposals = [];
      this.selectedProposal = null;
      this.quotationData = null;
      // Documents
      this.requiredDocuments = [];
      this.uploadedDocuments = new Map();
      // Mark as Lost state
      this.isLostModalOpen = false;
      this.lostReasons = [];
      this.selectedLostReason = null;
      this.lostFeedback = '';
      this.lostLoading = false;
      this.downloadingProposalId = null;
      // Issuance Success State
      this.issuanceSuccess = false;
      this.issuanceResponseData = null;
      this.isEditMode = false;
    }
    ngOnInit() {
      var _this = this;
      // Check for edit mode from query parameters
      this.route.queryParams.subscribe(/*#__PURE__*/function () {
        var _ref = (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          const quotationId = params['quotationId'];
          const isEdit = params['edit'] === 'true';
          _this.isEditMode = isEdit;
          // Always load LOV data first
          yield _this.loadLOVData();
          if (quotationId && isEdit) {
            // Edit mode - load existing quotation after LOV data is loaded
            yield _this.loadExistingQuotation(quotationId);
          } else {
            // New quotation mode - check for customer data
            const navigation = _this.router.getCurrentNavigation();
            const state = navigation?.extras?.state || history.state;
            if (state && state.customer) {
              _this.selectedCustomer = state.customer;
            } else {
              // Redirect back if no customer selected
              console.warn('No customer data found in state, redirecting to quotations');
              _this.router.navigate(['/dashboard/broker/quotations']);
              return;
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    loadExistingQuotation(quotationId) {
      var _this2 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.loading = true;
        try {
          // Fetch quotation details
          const quoteRes = yield _this2.crmService.getQuotation(Number(quotationId)).toPromise();
          const quotation = quoteRes?.result?.data || quoteRes?.data || quoteRes;
          console.log('Loaded quotation for editing:', quotation);
          if (!quotation) {
            console.error('No quotation data found');
            _this2.router.navigate(['/dashboard/broker/quotations']);
            return;
          }
          // Set customer data from quotation (national_id not available in API response)
          _this2.selectedCustomer = {
            name: quotation.name,
            email: quotation.email,
            phone: quotation.phone,
            nationalId: quotation.customer_national_id || '',
            passportId: quotation.customer_passport_id || '',
            taxId: quotation.customer_tax_id || '',
            dateOfBirth: '',
            gender: 'male'
          };
          console.log('Customer data set:', _this2.selectedCustomer);
          // Set opportunity ID
          _this2.opportunityId = quotation.opportunity_id || Number(quotationId);
          // Pre-fill vehicle form from quotation data
          const risk = quotation.opportunity_risks?.[0];
          console.log('Risk data:', risk);
          console.log('Available LOV data:', {
            usages: _this2.usages,
            colors: _this2.colors,
            bodyTypes: _this2.bodyTypes,
            fuelTypes: _this2.fuelTypes,
            ccs: _this2.ccs,
            roadSidePrograms: _this2.roadSidePrograms
          });
          if (risk) {
            // Don't extract - use the full sequence_number values as they are
            // The dropdowns expect the full format like "BODY TYPE/0001"
            const formData = {
              make: risk.vehicle_make_sequence_number || risk.vehicle_make || '',
              model: risk.vehicle_model_sequence_number || risk.vehicle_model || '',
              year: String(risk.vehicle_manufacturing_year || ''),
              category: risk.vehicle_category_sequence_number || risk.vehicle_category || '',
              chassisNo: risk.vehicle_chassis_number || '',
              engineNo: risk.vehicle_engine_number || '',
              plateNo: risk.vehicle_plate_number || risk.plate_number || '',
              color: risk.vehicle_color_sequence_number || risk.vehicle_color || '',
              bodyType: risk.vehicle_body_type_sequence_number || risk.vehicle_body_type || '',
              fuelType: risk.vehicle_fuel_type_sequence_number || risk.vehicle_fuel_type || '',
              cc: risk.vehicle_cc_sequence_number || risk.vehicle_cc || '',
              seats: String(risk.vehicle_number_of_seats || risk.vehicle_seats || '5'),
              usage: risk.vehicle_usage_sequence_number || risk.vehicle_usage || '',
              sumInsured: String(risk.vehicle_sum_insured || ''),
              vehicle_state: risk.vehicle_state || 'new',
              kilometers: String(risk.vehicle_number_of_kilometers || '0'),
              hasRoadSide: risk.vehicle_has_road_side || false,
              roadSideProgram: risk.vehicle_road_side_program_sequence_number || risk.vehicle_road_side_program || ''
            };
            console.log('Form data to set:', formData);
            // Set independent fields immediately
            _this2.vehicleForm.chassisNo = formData.chassisNo;
            _this2.vehicleForm.engineNo = formData.engineNo;
            _this2.vehicleForm.plateNo = formData.plateNo;
            _this2.vehicleForm.color = formData.color;
            _this2.vehicleForm.bodyType = formData.bodyType;
            _this2.vehicleForm.fuelType = formData.fuelType;
            _this2.vehicleForm.cc = formData.cc;
            _this2.vehicleForm.seats = formData.seats;
            _this2.vehicleForm.usage = formData.usage;
            _this2.vehicleForm.sumInsured = formData.sumInsured;
            _this2.vehicleForm.vehicle_state = formData.vehicle_state;
            _this2.vehicleForm.kilometers = formData.kilometers;
            _this2.vehicleForm.hasRoadSide = formData.hasRoadSide;
            _this2.vehicleForm.roadSideProgram = formData.roadSideProgram;
            // Handle dependent fields with proper sequencing
            // 1. Set make and load models
            _this2.vehicleForm.make = formData.make;
            if (formData.make) {
              yield _this2.onMakeChange();
              // 2. Set model after models are loaded
              setTimeout(() => {
                _this2.vehicleForm.model = formData.model;
                // 3. Load years/categories after model is set
                if (formData.model) {
                  setTimeout(/*#__PURE__*/(0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    yield _this2.onModelChange();
                    // 4. Set year and category after they're loaded
                    setTimeout(() => {
                      console.log('Setting year:', formData.year, 'Available years:', _this2.years);
                      console.log('Setting category:', formData.category);
                      // Find the matching year from the years array
                      const yearValue = String(risk.vehicle_manufacturing_year || formData.year);
                      const matchedYear = _this2.years.find(y => String(y.name) === yearValue || String(y.code) === yearValue || y.name?.toString().includes(yearValue));
                      _this2.vehicleForm.year = matchedYear?.code || yearValue;
                      _this2.vehicleForm.category = formData.category;
                      console.log('Year matched:', matchedYear, 'Year set to:', _this2.vehicleForm.year);
                      console.log('All dependent fields set');
                    }, 200);
                  }), 200);
                }
              }, 200);
            }
          }
          // Load proposals if available
          if (quotation.opportunity_proposal && quotation.opportunity_proposal.length > 0) {
            _this2.proposals = quotation.opportunity_proposal;
          }
          _this2.loading = false;
        } catch (err) {
          console.error('Failed to load quotation for editing', err);
          _this2.notificationService.error('Failed to load quotation data. Redirecting to quotations list.');
          _this2.router.navigate(['/dashboard/broker/quotations']);
        }
      })();
    }
    ngAfterViewChecked() {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    }
    loadLOVData() {
      var _this3 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          // Load makers
          const makersRes = yield _this3.quoteService.getVehicleMakers().toPromise();
          _this3.makers = _this3.mapList(makersRes);
          // Load other LOVs in parallel
          const [bodyRes, usageRes, ccRes, fuelRes, colorRes, roadRes] = yield Promise.all([_this3.quoteService.getVehicleBodyTypes().toPromise(), _this3.quoteService.getVehicleUsages().toPromise(), _this3.quoteService.getVehicleCcs().toPromise(), _this3.quoteService.getVehicleFuelTypes().toPromise(), _this3.quoteService.getVehicleColors().toPromise(), _this3.quoteService.getRoadSidePrograms().toPromise()]);
          _this3.bodyTypes = _this3.mapList(bodyRes);
          _this3.usages = _this3.mapList(usageRes);
          _this3.ccs = _this3.mapList(ccRes);
          _this3.fuelTypes = _this3.mapList(fuelRes);
          _this3.colors = _this3.mapList(colorRes);
          _this3.roadSidePrograms = _this3.mapList(roadRes);
        } catch (err) {
          console.error('Failed to load LOV data', err);
          _this3.notificationService.error('Failed to load form data. Please refresh the page.');
        }
      })();
    }
    mapList(response) {
      const raw = response?.result?.data || response?.data || response;
      let list = [];
      if (Array.isArray(raw)) {
        list = raw;
      } else if (raw && typeof raw === 'object') {
        if (raw.items && Array.isArray(raw.items)) list = raw.items;else if (raw.data && Array.isArray(raw.data)) list = raw.data;else {
          const key = Object.keys(raw).find(k => Array.isArray(raw[k]));
          if (key) list = raw[key];
        }
      }
      return list.map(item => {
        // Process risk_image if present - assume base64 if no prefix
        let image = item.risk_image || item.image;
        if (image) {
          let imageStr = String(image).trim();
          // 1. Check for standard prefixes/schemes
          if (imageStr.startsWith('data:') || imageStr.startsWith('http') || imageStr.startsWith('https')) {
            image = imageStr;
          }
          // 2. Check for path-like strings
          else if (imageStr.startsWith('/') || imageStr.startsWith('./') || imageStr.startsWith('assets/')) {
            image = imageStr;
          }
          // 3. Check for specific image extensions
          else if (/\.(png|jpg|jpeg|svg|gif|webp)(\?.*)?$/i.test(imageStr)) {
            image = imageStr;
          }
          // 4. Fallback for raw Base64 (must be long enough to be an image)
          else if (imageStr.length > 50) {
            // Strip whitespace
            // Assume it's base64 if it's long. 
            // The template (error) handler will hide it if it's invalid.
            // We strip whitespace just in case.
            const cleanStr = imageStr.replace(/\s/g, '');
            image = `data:image/png;base64,${cleanStr}`;
          } else {
            // Too short to be a base64 image, likely a name or code
            image = '';
          }
        }
        // DEBUG: Log the first image to see what we're sending
        if (list.indexOf(item) === 0 && image) {
          console.log('QuoteFlow: First processed image starts with:', String(image).substring(0, 100) + '...');
        }
        return {
          code: item.sequence_number || item.code || item.id || item.value || item.year,
          name: item.item || item.name || item.value || item.display || item.label || item.year || item,
          id: item.id,
          risk_image: image
        };
      });
    }
    onMakeChange() {
      var _this4 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this4.vehicleForm.make) {
          _this4.models = [];
          return;
        }
        try {
          const res = yield _this4.quoteService.getVehicleModels(_this4.vehicleForm.make).toPromise();
          _this4.models = _this4.mapList(res);
          _this4.vehicleForm.model = '';
          _this4.vehicleForm.year = '';
          _this4.vehicleForm.category = '';
        } catch (err) {
          console.error('Failed to load models', err);
          _this4.notificationService.error('Failed to load vehicle models');
        }
      })();
    }
    onModelChange() {
      var _this5 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this5.vehicleForm.model) {
          _this5.categories = [];
          _this5.years = [];
          return;
        }
        try {
          // Load categories
          const catRes = yield _this5.quoteService.getVehicleModelCategories(_this5.vehicleForm.model).toPromise();
          _this5.categories = _this5.mapList(catRes);
          // Load years - need to find model ID
          const selectedModel = _this5.models.find(m => m.code === _this5.vehicleForm.model);
          const param = selectedModel?.id || _this5.vehicleForm.model;
          const yearRes = yield _this5.quoteService.getVehicleModelYears(param).toPromise();
          _this5.years = _this5.mapList(yearRes);
          _this5.vehicleForm.year = '';
          _this5.vehicleForm.category = '';
        } catch (err) {
          console.error('Failed to load categories/years', err);
          _this5.notificationService.error('Failed to load vehicle options');
        }
      })();
    }
    loadLostReasons() {
      var _this6 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          const res = yield _this6.crmService.getLostReasons().toPromise();
          _this6.lostReasons = _this6.mapList(res);
        } catch (err) {
          console.error('Failed to load lost reasons', err);
          _this6.notificationService.error('Failed to load lost reasons');
        }
      })();
    }
    openLostModal() {
      this.isLostModalOpen = true;
      if (this.lostReasons.length === 0) {
        this.loadLostReasons();
      }
    }
    closeLostModal() {
      this.isLostModalOpen = false;
      this.selectedLostReason = null;
      this.lostFeedback = '';
    }
    submitMarkAsLost() {
      var _this7 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this7.opportunityId || !_this7.selectedLostReason) return;
        _this7.lostLoading = true;
        try {
          yield _this7.crmService.markLost(_this7.opportunityId, _this7.selectedLostReason, _this7.lostFeedback).toPromise();
          _this7.closeLostModal();
          _this7.notificationService.success('Quotation marked as lost successfully');
          _this7.router.navigate(['/dashboard/broker/quotations']);
        } catch (err) {
          console.error('Failed to mark as lost', err);
          _this7.notificationService.error('Failed to mark as lost. Please try again.');
        } finally {
          _this7.lostLoading = false;
        }
      })();
    }
    toggleSection(section, isOpen) {
      this.openSections[section] = isOpen !== undefined ? isOpen : !this.openSections[section];
    }
    isSectionOpen(section) {
      return !!this.openSections[section];
    }
    get isSelectionComplete() {
      return !!(this.vehicleForm.make && this.vehicleForm.model && this.vehicleForm.year);
    }
    get isIdentificationComplete() {
      return !!(this.vehicleForm.chassisNo && this.vehicleForm.engineNo);
    }
    get isSpecificationsComplete() {
      return !!(this.vehicleForm.bodyType && this.vehicleForm.color && this.vehicleForm.cc && this.vehicleForm.seats);
    }
    get isFinancialComplete() {
      return !!(this.vehicleForm.sumInsured && this.vehicleForm.vehicle_state);
    }
    get isAdditionalDetailsValid() {
      return !!(this.vehicleForm.category && this.vehicleForm.bodyType && this.vehicleForm.color && this.vehicleForm.usage && this.vehicleForm.cc && this.vehicleForm.seats && this.vehicleForm.plateNo && this.vehicleForm.sumInsured); // Some might be redundant if checked in steps, but good for safety
    }
    get makeName() {
      if (!this.vehicleForm.make) return '';
      const item = this.makers.find(m => m.code === this.vehicleForm.make || m.id === this.vehicleForm.make);
      return item ? item.name : this.vehicleForm.make;
    }
    get modelName() {
      if (!this.vehicleForm.model) return '';
      const item = this.models.find(m => m.code === this.vehicleForm.model || m.id === this.vehicleForm.model);
      return item ? item.name : this.vehicleForm.model;
    }
    get yearName() {
      if (!this.vehicleForm.year) return '';
      const item = this.years.find(y => String(y.code) === String(this.vehicleForm.year) || String(y.id) === String(this.vehicleForm.year));
      return item ? item.name : this.vehicleForm.year;
    }
    onCustomerSelected(customer) {
      this.selectedCustomer = customer;
      this.isCustomerModalOpen = false;
      this.nextStep();
    }
    onProgramSelected(programId) {
      this.vehicleForm.roadSideProgram = programId;
      console.log('Program selected:', programId);
    }
    onRoadsideToggled(included) {
      this.vehicleForm.hasRoadSide = included;
      if (!included) {
        this.vehicleForm.roadSideProgram = '';
      }
      console.log('Roadside toggled:', included);
    }
    submitVehicleDetails() {
      var _this8 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this8.loading = true;
        _this8.error = null;
        try {
          if (_this8.isEditMode) {
            console.log('Edit mode: Skipping new quotation request');
            if (_this8.proposals.length === 0) {
              _this8.notificationService.warning('No proposals found for this quotation.');
            }
            _this8.currentStep++;
            _this8.loading = false;
            return;
          }
          const user = _this8.authService.currentUserValue;
          // Format codes with prefixes
          const formatWithPrefix = (value, prefix) => {
            if (!value) return '';
            if (String(value).includes('/')) return value;
            return `${prefix}/${value}`;
          };
          // Get resolved year value
          const selectedYear = _this8.years.find(y => y.code === _this8.vehicleForm.year);
          const yearValue = selectedYear ? selectedYear.name : _this8.vehicleForm.year;
          const payload = {
            user_id: user?.id || 2,
            user_type: 'broker',
            product_code: '40020',
            lead_source: 'Web Portal',
            customer_info: {
              customer_name: _this8.selectedCustomer.name || _this8.selectedCustomer.clientName,
              phone: _this8.selectedCustomer.phone,
              email: _this8.selectedCustomer.email,
              national_id: _this8.selectedCustomer.nationalId || _this8.selectedCustomer.national_id || _this8.selectedCustomer.identification_number,
              customer_date_of_birth: _this8.selectedCustomer.dateOfBirth || _this8.selectedCustomer.date_of_birth || '',
              gender: _this8.selectedCustomer.gender || 'male',
              is_foreign_customer: _this8.selectedCustomer.isForeignCustomer || _this8.selectedCustomer.is_foreign || false,
              passport_id: _this8.selectedCustomer.passportId || _this8.selectedCustomer.passport_id || '',
              tax_id: _this8.selectedCustomer.taxId || '',
              street: _this8.selectedCustomer.street || '',
              city: _this8.selectedCustomer.city || '',
              state_name: _this8.selectedCustomer.stateName || _this8.selectedCustomer.state || '',
              country_name: _this8.selectedCustomer.countryName || _this8.selectedCustomer.country || 'Egypt',
              customer_branch_codes: ['100'],
              customer_activity_code: 'ACTIVITY/0001'
            },
            risk_info: {
              vehicle_make: formatWithPrefix(_this8.vehicleForm.make, 'MAKER'),
              vehicle_model: formatWithPrefix(_this8.vehicleForm.model, 'CAR MODEL'),
              vehicle_manufacturing_year: String(yearValue || ''),
              vehicle_usage: _this8.vehicleForm.usage || '',
              vehicle_sum_insured: Number(_this8.vehicleForm.sumInsured || 0),
              vehicle_chassis_number: _this8.vehicleForm.chassisNo,
              vehicle_engine_number: _this8.vehicleForm.engineNo,
              vehicle_state: _this8.vehicleForm.vehicle_state || 'new',
              vehicle_number_of_kilometers: Number(_this8.vehicleForm.kilometers || 0),
              vehicle_road_side_program: formatWithPrefix(_this8.vehicleForm.roadSideProgram, 'ROAD SIDE PROGRAM'),
              // Added missing fields from React
              vehicle_plate_number: _this8.vehicleForm.plateNo || '',
              vehicle_color: _this8.vehicleForm.color || '',
              vehicle_body_type: _this8.vehicleForm.bodyType || '',
              vehicle_fuel_type: _this8.vehicleForm.fuelType || '',
              vehicle_cc: _this8.vehicleForm.cc || '',
              vehicle_seats: _this8.vehicleForm.seats || '5',
              vehicle_category: _this8.vehicleForm.category || ''
            }
          };
          const quotationResponse = yield _this8.quoteService.requestQuotation(payload).toPromise();
          // Check for errors
          if (quotationResponse?.result?.error) {
            _this8.notificationService.error(quotationResponse.result.error);
            _this8.loading = false;
            return;
          }
          // Extract opportunity ID
          _this8.opportunityId = quotationResponse?.result?.opportunity_id || quotationResponse?.result?.data?.opportunity_id || quotationResponse?.data?.opportunity_id || quotationResponse?.opportunity_id;
          _this8.quotationData = quotationResponse?.result?.data || quotationResponse?.result || quotationResponse?.data || quotationResponse;
          // Get proposals
          if (quotationResponse?.result?.proposals && Array.isArray(quotationResponse.result.proposals)) {
            _this8.proposals = quotationResponse.result.proposals;
          } else if (_this8.opportunityId) {
            try {
              yield _this8.quoteService.generateProposals(_this8.opportunityId).toPromise();
              const proposalsRes = yield _this8.quoteService.getProposals(_this8.opportunityId).toPromise();
              _this8.proposals = proposalsRes?.result?.proposals || proposalsRes?.data?.proposals || proposalsRes?.proposals || [];
            } catch (propErr) {
              console.error('Failed to fetch proposals', propErr);
            }
          }
          _this8.loading = false;
          // Extract Roadside Info if available
          console.log('Checking for roadside info in response:', quotationResponse);
          // Check in risks array or flat structure
          const riskData = quotationResponse?.result?.data?.risks?.[0] || quotationResponse?.result?.risks?.[0] || quotationResponse?.data?.risks?.[0] || quotationResponse?.risks?.[0];
          if (riskData) {
            if (riskData.vehicle_has_road_side !== undefined) {
              _this8.vehicleForm.hasRoadSide = riskData.vehicle_has_road_side;
            }
            if (riskData.vehicle_road_side_program_name || riskData.vehicle_road_side_program) {
              // Extract program name or code
              const programName = String(riskData.vehicle_road_side_program_name || riskData.vehicle_road_side_program);
              // Normalize to match selector IDs (egy, egy-vip, euro, euro-vip)
              // Assumption: API returns "EGY", "EGY VIP", "EURO", "EURO VIP"
              _this8.vehicleForm.roadSideProgram = programName.toLowerCase().replace(/\s+/g, '-');
            }
            console.log('Updated roadside info from response:', {
              has: _this8.vehicleForm.hasRoadSide,
              program: _this8.vehicleForm.roadSideProgram
            });
          }
          _this8.loading = false;
          // Move to next step manually to avoid loop in nextStep()
          _this8.currentStep++;
        } catch (err) {
          console.error('Failed to request quotation', err);
          const errorMessage = err?.response?.data?.result?.error || err?.response?.data?.error || err?.message || 'Failed to request quotation. Please try again.';
          _this8.notificationService.error(errorMessage || 'Request failed');
          _this8.loading = false;
        }
      })();
    }
    selectProposal(proposal) {
      this.selectedProposal = proposal;
    }
    loadRequiredDocuments() {
      var _this9 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this9.opportunityId) return;
        try {
          // Use getCRMDocuments from QuoteService instead
          const res = yield _this9.quoteService.getCRMDocuments().toPromise();
          _this9.requiredDocuments = res?.crm_documents || res?.result?.data || res?.data || [];
          console.log('Loaded required documents:', _this9.requiredDocuments);
        } catch (err) {
          console.error('Failed to load required documents', err);
          _this9.notificationService.error('Failed to load document requirements');
        }
      })();
    }
    onFileSelected(event, documentId) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result.split(',')[1];
          this.uploadedDocuments.set(documentId, {
            file_name: file.name,
            file_data: base64,
            document_id: documentId
          });
        };
        reader.readAsDataURL(file);
      }
    }
    issuePolicy() {
      var _this0 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this0.selectedProposal || !_this0.opportunityId) return;
        _this0.loading = true;
        _this0.error = null;
        try {
          const user = _this0.authService.currentUserValue;
          // Helper function to format codes with prefix
          // Helper function to format codes with prefix
          const formatWithPrefix = (code, prefix) => {
            if (!code) return '';
            if (String(code).includes('/')) return code;
            return `${prefix}/${String(code).padStart(4, '0')}`;
          };
          // Get resolved year value
          const selectedYear = _this0.years.find(y => y.code === _this0.vehicleForm.year);
          const yearValue = selectedYear ? selectedYear.name : _this0.vehicleForm.year;
          // Format CRM documents array according to backend requirements
          const crmDocuments = Array.from(_this0.uploadedDocuments.entries()).map(([docId, docData]) => {
            // Find the document from requiredDocuments to get the LOV name
            const doc = _this0.requiredDocuments.find(d => String(d.id) === String(docId));
            // Use the CRM Document LOV name (e.g., "CRM Document/0001")
            // Priority: sequence_number (correct format) > code > name
            const documentName = doc?.sequence_number || doc?.code || doc?.name || doc?.item || '';
            console.log('Document mapping:', {
              docId,
              doc,
              documentName
            });
            return {
              document_name: documentName,
              files: [docData.file_data]
            };
          });
          const payload = {
            opportunity_id: _this0.opportunityId,
            selected_proposal_id: _this0.selectedProposal.id || _this0.selectedProposal.proposal_id,
            payment_info: {
              payment_method: 'Payment Method/0001',
              payment_reference: '',
              payment_reference_file_content: ''
            },
            crm_documents: crmDocuments,
            risk_info: {
              vehicle_state: _this0.vehicleForm.vehicle_state || 'new',
              vehicle_manufacturing_year: String(yearValue || ''),
              vehicle_make: formatWithPrefix(_this0.vehicleForm.make, 'MAKER'),
              vehicle_model: formatWithPrefix(_this0.vehicleForm.model, 'CAR MODEL'),
              vehicle_category: formatWithPrefix(_this0.vehicleForm.category, 'CAR CATEGORY'),
              vehicle_color: formatWithPrefix(_this0.vehicleForm.color, 'CAR COLOR'),
              vehicle_body_type: formatWithPrefix(_this0.vehicleForm.bodyType, 'BODY TYPE'),
              vehicle_fuel_type: formatWithPrefix(_this0.vehicleForm.fuelType, 'FUEL TYPE'),
              vehicle_usage: formatWithPrefix(_this0.vehicleForm.usage, 'USAGE'),
              vehicle_cc: formatWithPrefix(_this0.vehicleForm.cc, 'CC'),
              vehicle_number_of_seats: Number(_this0.vehicleForm.seats || 5),
              vehicle_sum_insured: Number(_this0.vehicleForm.sumInsured || 0),
              vehicle_chassis_number: _this0.vehicleForm.chassisNo,
              vehicle_plate_number: _this0.vehicleForm.plateNo || '',
              vehicle_engine_number: _this0.vehicleForm.engineNo,
              vehicle_has_road_side: _this0.vehicleForm.hasRoadSide || false,
              vehicle_road_side_program: _this0.vehicleForm.hasRoadSide ? formatWithPrefix(_this0.vehicleForm.roadSideProgram, 'ROAD SIDE PROGRAM') : ''
            }
          };
          console.log('Issuance payload:', payload);
          const response = yield _this0.quoteService.requestIssuance(payload).toPromise();
          if (response?.result?.error) {
            _this0.notificationService.error(response.result.error || 'Issuance failed');
            _this0.loading = false;
            return;
          }
          const policyId = response?.result?.policy_id || response?.data?.policy_id;
          _this0.notificationService.success('Policy issued successfully!');
          // Show Success View instead of redirecting
          _this0.issuanceSuccess = true;
          _this0.issuanceResponseData = {
            policy_id: policyId,
            policy_number: response?.result?.policy_number || response?.data?.policy_number || 'Pending',
            policy_state: response?.result?.policy_state || response?.data?.policy_state || response?.result?.state || response?.data?.state || 'Active',
            opportunity_number: response?.result?.opportunity_number || response?.data?.opportunity_number,
            won_proposal: response?.result?.won_proposal || response?.data?.won_proposal || _this0.selectedProposal?.proposal_reference || 'N/A'
          };
          _this0.loading = false;
        } catch (err) {
          console.error('Failed to issue policy', err);
          const errorMessage = err?.response?.data?.result?.error || err?.response?.data?.error || err?.message || 'Failed to issue policy. Please try again.';
          _this0.notificationService.error(errorMessage || 'Issuance failed');
          _this0.loading = false;
        }
      })();
    }
    nextStep() {
      if (this.currentStep === 0 && this.isVehicleFormValid()) {
        this.submitVehicleDetails();
      } else if (this.currentStep === 1 && !this.selectedProposal) {
        this.notificationService.warning('Please select a coverage plan');
      } else if (this.currentStep === 1) {
        // Moving from Coverage to Additional Details
        this.currentStep++;
      } else if (this.currentStep === 2) {
        // Moving from Additional Details to Documents
        if (!this.isAdditionalDetailsValid) {
          this.notificationService.warning('Please complete all required fields');
          return;
        }
        this.loadRequiredDocuments();
        this.currentStep++;
      } else if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    }
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        // No need to clear error as we use toasts
      }
    }
    isVehicleFormValid() {
      return this.isSelectionComplete && this.isIdentificationComplete && this.isFinancialComplete;
    }
    canProceed() {
      switch (this.currentStep) {
        case 0:
          // Vehicle Step
          return this.isVehicleFormValid();
        case 1:
          // Coverage Step
          return !!this.selectedProposal;
        case 2:
          // Additional Details Step
          return this.isAdditionalDetailsValid;
        case 3:
          // Documents Step
          return this.requiredDocuments.every(doc => !doc.required_document || this.uploadedDocuments.has(doc.id));
        case 4:
          // Review Step
          return true;
        default:
          return true;
      }
    }
    downloadProposalPdf(proposal) {
      var _this1 = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const proposalId = proposal.id || proposal.proposal_id;
        if (!proposalId) {
          console.error('Analysis failed: Proposal ID is missing.');
          return;
        }
        try {
          _this1.downloadingProposalId = proposalId;
          // Use the same service method as in BrokerQuotationDetailsComponent
          const blob = yield _this1.quoteService.downloadProposalPdf(Number(proposalId)).toPromise();
          // Create blob and download
          if (blob) {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Proposal_${proposal.proposal_reference || proposalId}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);
          }
        } catch (error) {
          console.error('Error downloading proposal PDF:', error);
          _this1.notificationService.error('Failed to download proposal PDF. Please try again.');
        } finally {
          _this1.downloadingProposalId = null;
        }
      })();
    }
    static {
      this.ɵfac = function QuoteFlowComponent_Factory(t) {
        return new (t || QuoteFlowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_quote_service__WEBPACK_IMPORTED_MODULE_1__.QuoteService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_2__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: QuoteFlowComponent,
        selectors: [["app-quote-flow"]],
        decls: 25,
        vars: 12,
        consts: [[1, "max-w-7xl", "mx-auto"], ["class", "mb-8 max-w-4xl mx-auto text-center", 4, "ngIf"], [3, "steps", "currentStep", 4, "ngIf"], [4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "flex justify-between mt-8", 4, "ngIf"], ["title", "Mark as Lost", 3, "close", "isOpen"], [1, "p-6", "space-y-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], [1, "w-full", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "3", "placeholder", "Add any additional context...", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "mt-6"], [1, "px-4", "py-2", "text-gray-700", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-red-600", "hover:bg-red-700", "text-white", "rounded-lg", "font-medium", "transition-colors", "disabled:bg-gray-400", 3, "click", "disabled"], [1, "mb-8", "max-w-4xl", "mx-auto", "text-center"], [1, "text-3xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-300"], [3, "steps", "currentStep"], ["class", "space-y-4", 4, "ngIf"], [1, "space-y-4"], ["title", "Vehicle Selection", "icon", "car", 3, "toggle", "expanded", "isComplete"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], ["label", "Make", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "gridCols", "required", "imageKey"], ["label", "Model", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "gridCols", "disabled", "required"], ["label", "Year", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "gridCols", "disabled", "required"], ["title", "Identification", "icon", "hash", 3, "toggle", "expanded", "isComplete"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "text-red-500"], ["type", "text", "required", "", 1, "block", "w-full", "h-11", "px-4", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-gray-100", "focus:ring-2", "focus:ring-primary", "focus:border-primary", 3, "ngModelChange", "ngModel"], ["title", "Financial & Condition", "icon", "dollar-sign", 3, "toggle", "expanded", "isComplete"], ["type", "number", "min", "0", "step", "1000", "placeholder", "e.g., 500000", "required", "", 1, "block", "w-full", "h-11", "px-4", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-gray-100", "focus:ring-2", "focus:ring-primary", "focus:border-primary", 3, "ngModelChange", "ngModel"], ["label", "Vehicle Condition", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout"], [1, "space-y-6"], [1, "bg-white", "dark:bg-gray-800", "p-8", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-6"], ["class", "flex justify-center py-12", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-3 gap-6", 4, "ngIf"], [1, "flex", "justify-center", "py-12"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-blue-600"], [1, "text-center", "py-12"], ["data-lucide", "shield", 1, "w-16", "h-16", "text-gray-400", "mx-auto", "mb-4"], ["class", "relative border rounded-xl p-6 cursor-pointer transition-all duration-200", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "relative", "border", "rounded-xl", "p-6", "cursor-pointer", "transition-all", "duration-200", 3, "click", "ngClass"], ["class", "absolute -top-3 -right-3 bg-blue-600 text-white p-1 rounded-full shadow-md", 4, "ngIf"], [1, "mb-4", "pb-4", "border-b", "border-gray-200", "dark:border-gray-700/50"], [1, "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "text-lg", "font-bold", "text-navy", "dark:text-white"], [1, "mb-4"], [1, "text-xs", "text-gray-500"], [1, "text-3xl", "font-bold", "text-blue-600", "dark:text-blue-400"], [1, "space-y-3", "mb-6", "bg-white/50", "dark:bg-black/20", "p-4", "rounded-lg"], [1, "flex", "justify-between", "items-center", "text-sm"], [1, "text-gray-600", "dark:text-gray-400"], [1, "font-medium", "text-navy", "dark:text-white"], ["variant", "outline", 1, "w-full", 3, "click", "disabled"], ["name", "download", "class", "w-4 h-4 mr-2", 4, "ngIf"], ["name", "loader-2", "class", "w-4 h-4 mr-2 animate-spin", 4, "ngIf"], [1, "absolute", "-top-3", "-right-3", "bg-blue-600", "text-white", "p-1", "rounded-full", "shadow-md"], ["data-lucide", "check", 1, "w-4", "h-4"], ["name", "download", 1, "w-4", "h-4", "mr-2"], ["name", "loader-2", 1, "w-4", "h-4", "mr-2", "animate-spin"], ["title", "Specifications", "icon", "file-text", 3, "expanded", "isComplete"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["label", "Category", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "disabled", "required"], ["label", "Body Type", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "gridCols", "required"], ["label", "Color", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "gridCols", "required"], ["label", "Fuel Type", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "required"], ["label", "Vehicle Usage", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "required"], ["label", "Engine CC", 3, "valueChange", "value", "options", "title", "subtitle", "placeholder", "layout", "gridCols", "required"], ["type", "number", "min", "1", "max", "50", "required", "", 1, "block", "w-full", "h-11", "px-4", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-gray-100", "focus:ring-2", "focus:ring-primary", "focus:border-primary", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "e.g., 50000", 1, "block", "w-full", "h-11", "px-4", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-800", "text-gray-900", "dark:text-gray-100", "focus:ring-2", "focus:ring-primary", "focus:border-primary", 3, "ngModelChange", "ngModel"], ["title", "Additional Coverage", "icon", "shield", 3, "expanded", "isComplete"], [3, "includeRoadsideChange", "selectedProgramChange", "programSelected", "roadsideToggled", "includeRoadside", "selectedProgram"], ["class", "p-5 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-gray-800", 4, "ngFor", "ngForOf"], ["data-lucide", "file-text", 1, "w-16", "h-16", "text-gray-400", "mx-auto", "mb-4"], [1, "p-5", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "hover:border-blue-300", "dark:hover:border-blue-700", "transition-colors", "bg-white", "dark:bg-gray-800"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", 3, "ngClass"], [1, "w-5", "h-5"], [1, "font-bold", "text-navy", "dark:text-white", "block", "text-sm"], ["class", "text-xs text-gray-500 dark:text-gray-400", 4, "ngIf"], ["class", "text-xs text-green-600 dark:text-green-400 font-medium", 4, "ngIf"], ["class", "text-red-500 font-bold text-lg", "title", "Required", 4, "ngIf"], [1, "relative"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "hidden", 3, "change", "id"], [1, "flex", "items-center", "justify-center", "w-full", "px-4", "py-3", "border-2", "border-dashed", "rounded-lg", "cursor-pointer", "transition-colors", "text-sm", "font-medium", 3, "for", "ngClass"], ["class", "truncate px-2", 4, "ngIf"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "text-xs", "text-green-600", "dark:text-green-400", "font-medium"], ["title", "Required", 1, "text-red-500", "font-bold", "text-lg"], [1, "truncate", "px-2"], [1, "mb-6", "pb-6", "border-b", "border-gray-200", "dark:border-gray-700"], [1, "font-bold", "text-lg", "mb-4"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "text-sm"], [1, "text-gray-500", "mb-1"], [1, "font-medium"], [1, "mb-6"], ["class", "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-700", 4, "ngIf"], [1, "flex", "justify-center"], [1, "px-8", "py-3", "bg-green-600", "hover:bg-green-700", "text-white", "rounded-lg", "font-semibold", "transition-colors", "disabled:bg-gray-400", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["data-lucide", "check-circle", 1, "w-5", "h-5"], [1, "bg-gradient-to-br", "from-blue-50", "to-indigo-50", "dark:from-blue-900/20", "dark:to-indigo-900/20", "p-6", "rounded-xl", "border", "border-blue-100", "dark:border-blue-700"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "font-bold", "text-xl", "text-navy", "dark:text-white"], [1, "text-3xl", "font-bold", "text-primary"], [1, "grid", "grid-cols-3", "gap-4", "text-sm"], [1, "bg-white", "dark:bg-gray-800", "p-12", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "text-center"], [1, "mb-8", "flex", "justify-center"], [1, "w-24", "h-24", "rounded-full", "bg-green-100", "dark:bg-green-900/30", "flex", "items-center", "justify-center", "animate-bounce-short"], ["data-lucide", "check-circle", 1, "w-12", "h-12", "text-green-600", "dark:text-green-400"], [1, "text-3xl", "font-bold", "text-navy", "dark:text-white", "mb-4"], [1, "text-lg", "text-gray-600", "dark:text-gray-300", "mb-10", "max-w-lg", "mx-auto"], ["class", "max-w-3xl mx-auto bg-gray-50 dark:bg-gray-700/30 rounded-xl p-8 mb-10 text-left", 4, "ngIf"], [1, "px-8", "py-4", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "transition-all", "font-semibold", "shadow-lg", "hover:shadow-xl", "flex", "items-center", "gap-3", 3, "routerLink"], ["data-lucide", "list", 1, "w-5", "h-5"], [1, "max-w-3xl", "mx-auto", "bg-gray-50", "dark:bg-gray-700/30", "rounded-xl", "p-8", "mb-10", "text-left"], [1, "font-bold", "text-lg", "text-navy", "dark:text-white", "mb-6", "border-b", "border-gray-200", "dark:border-gray-600", "pb-2"], [1, "text-gray-500", "dark:text-gray-400", "mb-1", "text-sm"], [1, "font-bold", "text-lg", "text-navy", "dark:text-white"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-green-100", "text-green-800", "dark:bg-green-900", "dark:text-green-200"], [1, "flex", "justify-between", "mt-8"], [1, "flex", "gap-3"], ["class", "px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], ["class", "px-6 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2", 3, "click", 4, "ngIf"], ["class", "px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 ml-auto", 3, "disabled", "click", 4, "ngIf"], [1, "px-6", "py-3", "border", "border-gray-300", "dark:border-gray-600", "text-gray-700", "dark:text-gray-300", "rounded-lg", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["data-lucide", "chevron-left", 1, "w-4", "h-4"], [1, "px-6", "py-3", "border", "border-red-300", "text-red-600", "rounded-lg", "hover:bg-red-50", "transition-colors", "flex", "items-center", "gap-2", 3, "click"], ["data-lucide", "x-circle", 1, "w-4", "h-4"], [1, "px-6", "py-3", "bg-primary", "text-white", "rounded-lg", "hover:bg-primary/90", "transition-colors", "disabled:bg-gray-400", "disabled:cursor-not-allowed", "flex", "items-center", "gap-2", "ml-auto", 3, "click", "disabled"], ["data-lucide", "chevron-right", 1, "w-4", "h-4"], [3, "value"]],
        template: function QuoteFlowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, QuoteFlowComponent_div_2_Template, 5, 0, "div", 1)(3, QuoteFlowComponent_app_modern_stepper_3_Template, 1, 2, "app-modern-stepper", 2)(4, QuoteFlowComponent_div_4_Template, 6, 5, "div", 3)(5, QuoteFlowComponent_div_5_Template, 14, 3, "div", 4)(6, QuoteFlowComponent_div_6_Template, 5, 3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "app-modal", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("close", function QuoteFlowComponent_Template_app_modal_close_7_listener() {
              return ctx.closeLostModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 7)(9, "div")(10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, " Reason for loss ");
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_Template_select_ngModelChange_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.selectedLostReason, $event) || (ctx.selectedLostReason = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Select a reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, QuoteFlowComponent_option_15_Template, 2, 2, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div")(17, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, " Feedback (Optional) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "textarea", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function QuoteFlowComponent_Template_textarea_ngModelChange_19_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.lostFeedback, $event) || (ctx.lostFeedback = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 13)(21, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_Template_button_click_21_listener() {
              return ctx.closeLostModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QuoteFlowComponent_Template_button_click_23_listener() {
              return ctx.submitMarkAsLost();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.issuanceSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.issuanceSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.issuanceSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.issuanceSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.issuanceSuccess);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isOpen", ctx.isLostModalOpen);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedLostReason);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.lostReasons);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.lostFeedback);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx.selectedLostReason || ctx.lostLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.lostLoading ? "Processing..." : "Confirm Lost", " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_6__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_9__.ModernStepperComponent, _shared_components_collapsible_section_collapsible_section_component__WEBPACK_IMPORTED_MODULE_10__.CollapsibleSectionComponent, _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_11__.SelectionModalComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_17__.LucideAngularComponent, _components_program_selector_program_selector_component__WEBPACK_IMPORTED_MODULE_12__.ProgramSelectorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CurrencyPipe],
        styles: ["\n\n\n@keyframes _ngcontent-%COMP%_scaleIn {\n    from {\n        transform: scale(0) rotate(-45deg);\n        opacity: 0;\n    }\n    to {\n        transform: scale(1) rotate(0);\n        opacity: 1;\n    }\n}\n\n.animate-scaleIn[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from { opacity: 0; transform: translateY(10px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n.animate-fadeIn[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out forwards;\n}"]
      });
    }
  }
  return QuoteFlowComponent;
})();

/***/ }),

/***/ 5187:
/*!***************************************************************************!*\
  !*** ./src/app/components/program-selector/program-selector.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramSelectorComponent: () => (/* binding */ ProgramSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-angular */ 8516);








const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  "ring-1": a0,
  "border-blue-500 bg-blue-50 ring-blue-500": a1,
  "border-purple-500 bg-purple-50 ring-purple-500": a2,
  "border-indigo-500 bg-indigo-50 ring-indigo-500": a3,
  "border-rose-500 bg-rose-50 ring-rose-500": a4,
  "border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800": a5,
  "hover:border-blue-200": a6,
  "hover:border-purple-200": a7,
  "hover:border-indigo-200": a8,
  "hover:border-rose-200": a9
});
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  "bg-blue-100 text-blue-600": a0,
  "bg-purple-100 text-purple-600": a1,
  "bg-indigo-100 text-indigo-600": a2,
  "bg-rose-100 text-rose-600": a3,
  "bg-blue-500 text-white shadow-lg shadow-blue-500/25": a4,
  "bg-purple-500 text-white shadow-lg shadow-purple-500/25": a5,
  "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25": a6,
  "bg-rose-500 text-white shadow-lg shadow-rose-500/25": a7
});
const _c2 = (a0, a1, a2, a3, a4) => ({
  "bg-blue-500 text-white shadow-lg shadow-blue-500/25": a0,
  "bg-purple-500 text-white shadow-lg shadow-purple-500/25": a1,
  "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25": a2,
  "bg-rose-500 text-white shadow-lg shadow-rose-500/25": a3,
  "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600": a4
});
const _c3 = (a0, a1, a2, a3) => ({
  "bg-blue-500": a0,
  "bg-purple-500": a1,
  "bg-indigo-500": a2,
  "bg-rose-500": a3
});
const _c4 = (a0, a1, a2, a3) => ({
  "text-blue-500": a0,
  "text-purple-500": a1,
  "text-indigo-500": a2,
  "text-rose-500": a3
});
function ProgramSelectorComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lucide-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MOST POPULAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const program_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c3, program_r2.colorClass === "blue", program_r2.colorClass === "purple", program_r2.colorClass === "indigo", program_r2.colorClass === "rose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", ctx_r2.Star);
  }
}
function ProgramSelectorComponent_div_15_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lucide-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    const program_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", ctx_r2.Check)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c4, program_r2.colorClass === "blue", program_r2.colorClass === "purple", program_r2.colorClass === "indigo", program_r2.colorClass === "rose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r4);
  }
}
function ProgramSelectorComponent_div_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProgramSelectorComponent_div_15_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProgramSelectorComponent_div_15_lucide_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lucide-icon", 28);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", ctx_r2.Check);
  }
}
function ProgramSelectorComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgramSelectorComponent_div_15_Template_div_click_0_listener() {
      const program_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectProgram(program_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgramSelectorComponent_div_15_div_1_Template, 3, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "lucide-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProgramSelectorComponent_div_15_li_10_Template, 4, 8, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProgramSelectorComponent_div_15_span_12_Template, 2, 0, "span", 22)(13, ProgramSelectorComponent_div_15_span_13_Template, 2, 0, "span", 22)(14, ProgramSelectorComponent_div_15_lucide_icon_14_Template, 1, 1, "lucide-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const program_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](11, _c0, [ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside, ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "blue", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "purple", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "indigo", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "rose", ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside, program_r2.colorClass === "blue" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), program_r2.colorClass === "purple" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), program_r2.colorClass === "indigo" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), program_r2.colorClass === "rose" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside)]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", program_r2.popular);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction8"](22, _c1, program_r2.colorClass === "blue" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), program_r2.colorClass === "purple" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), program_r2.colorClass === "indigo" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), program_r2.colorClass === "rose" && (ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside), ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "blue", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "purple", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "indigo", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "rose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", program_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](program_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](program_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", program_r2.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](31, _c2, ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "blue", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "purple", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "indigo", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside && program_r2.colorClass === "rose", ctx_r2.selectedProgram !== program_r2.id || !ctx_r2.includeRoadside));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedProgram === program_r2.id && ctx_r2.includeRoadside);
  }
}
let ProgramSelectorComponent = /*#__PURE__*/(() => {
  class ProgramSelectorComponent {
    constructor() {
      this.programSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.roadsideToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.includeRoadsideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.selectedProgramChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.includeRoadside = false;
      this.selectedProgram = 'egy';
      // Icons for template usage
      this.Shield = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Shield;
      this.Zap = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Zap;
      this.Check = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Check;
      this.Star = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Star;
      this.MapPin = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.MapPin;
      this.Award = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Award;
      this.Car = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Car;
      this.Crown = lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Crown;
      this.programs = [{
        id: 'egy',
        name: 'EGY',
        description: 'Basic roadside assistance for Egypt',
        features: ['24/7 Support', 'Towing Service', 'Battery Jump Start', 'Tire Change', 'Fuel Delivery'],
        colorClass: 'blue',
        icon: lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Car
      }, {
        id: 'egy-vip',
        name: 'EGY VIP',
        description: 'Premium protection with extra perks',
        features: ['All EGY Features', 'Hotel Accommodation', 'Replacement Car', 'Unlimited Towing', 'Priority Service', 'Key Replacement', 'International Coverage'],
        popular: true,
        colorClass: 'purple',
        icon: lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Crown
      }, {
        id: 'euro',
        name: 'EURO',
        description: 'Standard European coverage',
        features: ['EU Wide Coverage', 'Towing Service', 'Legal Assistance', 'Medical Assistance', 'Repatriation', 'Hotel Stay'],
        colorClass: 'indigo',
        icon: lucide_angular__WEBPACK_IMPORTED_MODULE_1__.MapPin
      }, {
        id: 'euro-vip',
        name: 'EURO VIP',
        description: 'Complete peace of mind in Europe',
        features: ['All EURO Features', 'Replacement Luxury Car', 'Flight Tickets', 'VIP Lounge Access', 'Concierge Service', 'Extended Hotel Stay', 'Valet Parking', 'Zero Deductible'],
        colorClass: 'rose',
        icon: lucide_angular__WEBPACK_IMPORTED_MODULE_1__.Crown
      }];
    }
    onToggleChange() {
      this.includeRoadsideChange.emit(this.includeRoadside);
      this.roadsideToggled.emit(this.includeRoadside);
      if (this.includeRoadside && this.selectedProgram) {
        this.programSelected.emit(this.selectedProgram);
      }
    }
    selectProgram(programId) {
      this.selectedProgram = programId;
      this.selectedProgramChange.emit(programId);
      if (!this.includeRoadside) {
        this.includeRoadside = true;
        this.includeRoadsideChange.emit(true);
        this.roadsideToggled.emit(true);
      }
      this.programSelected.emit(programId);
    }
    static {
      this.ɵfac = function ProgramSelectorComponent_Factory(t) {
        return new (t || ProgramSelectorComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgramSelectorComponent,
        selectors: [["app-program-selector"]],
        inputs: {
          includeRoadside: "includeRoadside",
          selectedProgram: "selectedProgram"
        },
        outputs: {
          programSelected: "programSelected",
          roadsideToggled: "roadsideToggled",
          includeRoadsideChange: "includeRoadsideChange",
          selectedProgramChange: "selectedProgramChange"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 16,
        vars: 7,
        consts: [[1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "border", "border-gray-100", "dark:border-gray-700", "p-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "mb-8", "gap-4"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-500", "dark:text-gray-400"], [1, "relative", "inline-flex", "items-center", "cursor-pointer", "group"], ["type", "checkbox", 1, "sr-only", "peer", 3, "ngModelChange", "change", "ngModel"], [1, "w-14", "h-7", "bg-gray-200", "peer-focus:outline-none", "peer-focus:ring-4", "peer-focus:ring-primary/20", "dark:peer-focus:ring-primary/30", "rounded-full", "peer", "dark:bg-gray-700", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-0.5", "after:left-[4px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-6", "after:w-6", "after:transition-all", "dark:border-gray-600", "peer-checked:bg-primary"], [1, "ml-3", "flex", "items-center", "gap-2"], [1, "w-5", "h-5", "text-gray-500", "group-hover:text-primary", "transition-colors", 3, "img"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-gray-300", "group-hover:text-primary", "transition-colors"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], ["class", "relative rounded-xl border-2 p-5 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl flex flex-col group", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "relative", "rounded-xl", "border-2", "p-5", "transition-all", "duration-300", "cursor-pointer", "hover:-translate-y-1", "hover:shadow-xl", "flex", "flex-col", "group", 3, "click", "ngClass"], ["class", "absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap z-10", 3, "ngClass", 4, "ngIf"], [1, "mb-4", "mt-2"], [1, "w-12", "h-12", "rounded-lg", "flex", "items-center", "justify-center", "mb-3", "transition-colors", "duration-300", 3, "ngClass"], [1, "w-6", "h-6", 3, "img"], [1, "text-lg", "font-bold", "text-navy", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1", "min-h-[40px]"], [1, "space-y-3", "mb-6", "flex-grow"], ["class", "flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300", 4, "ngFor", "ngForOf"], [1, "w-full", "py-2.5", "px-4", "rounded-lg", "font-medium", "text-sm", "transition-all", "duration-200", "flex", "items-center", "justify-center", "gap-2", 3, "ngClass"], [4, "ngIf"], ["class", "w-4 h-4", 3, "img", 4, "ngIf"], [1, "absolute", "-top-3", "left-1/2", "-translate-x-1/2", "text-white", "text-xs", "font-bold", "px-3", "py-1", "rounded-full", "flex", "items-center", "gap-1", "shadow-md", "whitespace-nowrap", "z-10", 3, "ngClass"], [1, "w-3", "h-3", "fill-current", 3, "img"], [1, "flex", "items-start", "gap-2", "text-sm", "text-gray-600", "dark:text-gray-300"], [1, "w-4", "h-4", "mt-0.5", "shrink-0", 3, "img", "ngClass"], [1, "w-4", "h-4", 3, "img"]],
        template: function ProgramSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Roadside Assistance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select a protection plan for your journey");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4)(8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ProgramSelectorComponent_Template_input_ngModelChange_8_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.includeRoadside, $event) || (ctx.includeRoadside = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProgramSelectorComponent_Template_input_change_8_listener() {
              return ctx.onToggleChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "lucide-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Include Roadside");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProgramSelectorComponent_div_15_Template, 15, 37, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.includeRoadside);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", ctx.Shield);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opacity-50", !ctx.includeRoadside)("pointer-events-none", !ctx.includeRoadside);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programs);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, lucide_angular__WEBPACK_IMPORTED_MODULE_1__.LucideAngularModule, lucide_angular__WEBPACK_IMPORTED_MODULE_1__.LucideAngularComponent],
        styles: ["\n\n[_nghost-%COMP%] {\n    display: block;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.animate-fadeIn[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out forwards;\n}\n\n\n\n.toggle-checkbox[_ngcontent-%COMP%]:checked {\n    right: 0;\n    border-color: #68D391;\n}\n\n.toggle-checkbox[_ngcontent-%COMP%]:checked + .toggle-label[_ngcontent-%COMP%] {\n    background-color: #68D391;\n}\n\n\n\n.grid[_ngcontent-%COMP%] {\n    transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;\n}"]
      });
    }
  }
  return ProgramSelectorComponent;
})();

/***/ }),

/***/ 2540:
/*!******************************************************!*\
  !*** ./src/app/core/services/endorsement.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndorsementService: () => (/* binding */ EndorsementService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8810);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 6344);




let EndorsementService = /*#__PURE__*/(() => {
  class EndorsementService {
    constructor(api) {
      this.api = api;
    }
    /**
     * Get Endorsement Types - Matches React app's getEndorsementTypes method
     */
    getEndorsementTypes() {
      return this.api.get('/v1/lov/endorsement-sub-types').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        // Check specifically for the key 'endorsement_sub_types' as per API response
        const data = response?.endorsement_sub_types || response?.result?.endorsement_sub_types || response?.result?.data || response?.data || [];
        return data.map(item => ({
          id: item.id,
          code: item.code || item.sequence_number,
          name: item.name || item.item
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
        console.error('Failed to fetch endorsement types', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }));
    }
    /**
     * Get Endorsement Reasons - Matches React app's getEndorsementReasons method
     */
    getEndorsementReasons(subTypeCode) {
      return this.api.get('/v1/get-endorsement-subtype-reasons', {
        params: {
          end_subtype_seq_number: subTypeCode
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        // Try plausible keys for reasons, fallback to standard structures
        const data = response?.endorsement_sub_type_reasons || response?.endorsement_subtype_reasons || response?.endorsement_reasons || response?.reasons || response?.result?.data || response?.data || [];
        return data.map(item => ({
          id: item.id,
          name: item.name || item.item,
          title: item.title
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
        console.error('Failed to fetch endorsement reasons', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }));
    }
    /**
     * Create Endorsement - Matches React app's createEndorsement method
     */
    createEndorsement(payload) {
      return this.api.post('/v1/policy/endorsement', payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        return response;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
        console.error('Failed to create endorsement', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }));
    }
    static {
      this.ɵfac = function EndorsementService_Factory(t) {
        return new (t || EndorsementService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: EndorsementService,
        factory: EndorsementService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EndorsementService;
})();

/***/ }),

/***/ 7675:
/*!**************************************************************!*\
  !*** ./src/app/core/services/utils/quotation-transformer.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalizeText: () => (/* binding */ capitalizeText),
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatPercentage: () => (/* binding */ formatPercentage),
/* harmony export */   transformQuotationData: () => (/* binding */ transformQuotationData)
/* harmony export */ });
/**
 * Quotation Data Transformation Utilities
 * Transforms raw API response to display-ready format
 */
// ============================================================================
// TRANSFORMATION FUNCTIONS
// ============================================================================
/**
 * Main transformation function
 * Converts raw API response to display-ready format
 */
function transformQuotationData(apiResponse) {
  return {
    header: extractHeaderInfo(apiResponse),
    customer: extractCustomerInfo(apiResponse),
    vehicle: extractVehicleInfo(apiResponse),
    pricing: extractPricingInfo(apiResponse),
    conditions: extractConditions(apiResponse),
    documents: extractDocuments(apiResponse)
  };
}
/**
 * Extract header information
 */
function extractHeaderInfo(data) {
  return {
    opportunityNumber: data.opportunity_number || 'N/A',
    date: formatDate(data.opportunity_date),
    stage: capitalizeText(data.stage) || 'N/A',
    product: data.product_name || 'N/A'
  };
}
/**
 * Extract customer information
 */
function extractCustomerInfo(data) {
  return {
    name: capitalizeText(data.name) || 'N/A',
    email: data.email || 'N/A',
    phone: data.phone || 'N/A'
  };
}
/**
 * Extract vehicle information
 */
function extractVehicleInfo(data) {
  const vehicle = data.opportunity_risks?.[0];
  if (!vehicle) {
    return getEmptyVehicleInfo();
  }
  return {
    make: capitalizeText(vehicle.vehicle_make) || 'N/A',
    model: capitalizeText(vehicle.vehicle_model) || 'N/A',
    year: vehicle.vehicle_manufacturing_year || 0,
    plateNumber: vehicle.plate_number?.toUpperCase() || 'N/A',
    color: capitalizeText(vehicle.vehicle_color) || 'N/A',
    bodyType: capitalizeText(vehicle.vehicle_body_type) || 'N/A',
    category: capitalizeText(vehicle.vehicle_category) || 'N/A',
    usage: capitalizeText(vehicle.vehicle_usage) || 'N/A',
    seats: vehicle.vehicle_number_of_seats || 0,
    condition: capitalizeText(vehicle.vehicle_state) || 'N/A',
    sumInsured: formatCurrency(vehicle.vehicle_sum_insured),
    chassisNumber: vehicle.vehicle_chassis_number?.toUpperCase() || 'N/A',
    engineNumber: vehicle.vehicle_engine_number?.toUpperCase() || 'N/A',
    fuelType: capitalizeText(vehicle.vehicle_fuel_type) || 'N/A'
  };
}
/**
 * Extract pricing information
 */
function extractPricingInfo(data) {
  const proposal = data.opportunity_proposal?.[0];
  if (!proposal) {
    return getEmptyPricingInfo();
  }
  return {
    sumInsured: formatCurrency(proposal.proposal_sum_insured),
    netPremium: formatCurrency(proposal.proposal_net_premium),
    fees: formatCurrency(proposal.proposal_fees),
    stampDuty: formatCurrency(proposal.proposal_stamp_duty),
    issueFees: formatCurrency(proposal.proposal_issue_fees),
    taxAmount: formatCurrency(proposal.proposal_tax_amount),
    taxPercentage: formatPercentage(proposal.proposal_tax_percentage),
    grossPremium: formatCurrency(proposal.proposal_gross_premium)
  };
}
/**
 * Extract policy conditions
 */
function extractConditions(data) {
  if (!data.opportunity_conditions || data.opportunity_conditions.length === 0) {
    return [];
  }
  return data.opportunity_conditions.map(condition => condition.condition_name).filter(name => name && name.trim() !== '');
}
/**
 * Extract documents with status
 */
function extractDocuments(data) {
  if (!data.opportunity_documents || data.opportunity_documents.length === 0) {
    return [];
  }
  return data.opportunity_documents.map(doc => ({
    name: doc.document_name || 'Unnamed Document',
    status: doc.files && doc.files.length > 0 ? 'Uploaded' : 'Pending'
  }));
}
// ============================================================================
// FORMATTING UTILITIES
// ============================================================================
/**
 * Format number as Egyptian currency (EGP)
 * Uses comma separators for thousands
 */
function formatCurrency(value) {
  if (value === null || value === undefined || isNaN(value)) {
    return '0 EGP';
  }
  // Format with commas using toLocaleString
  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${formatted} EGP`;
}
/**
 * Format percentage value
 */
function formatPercentage(value) {
  if (value === null || value === undefined || isNaN(value)) {
    return '0%';
  }
  return `${value}%`;
}
/**
 * Format date to readable format
 * Converts ISO date string to DD/MM/YYYY format
 */
function formatDate(dateString) {
  if (!dateString) {
    return 'N/A';
  }
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (error) {
    return dateString; // Return original on error
  }
}
/**
 * Capitalize text (first letter of each word)
 */
function capitalizeText(text) {
  if (!text) {
    return '';
  }
  return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
/**
 * Get empty vehicle info structure
 */
function getEmptyVehicleInfo() {
  return {
    make: 'N/A',
    model: 'N/A',
    year: 0,
    plateNumber: 'N/A',
    color: 'N/A',
    bodyType: 'N/A',
    category: 'N/A',
    usage: 'N/A',
    seats: 0,
    condition: 'N/A',
    sumInsured: '0 EGP',
    chassisNumber: 'N/A',
    engineNumber: 'N/A',
    fuelType: 'N/A'
  };
}
/**
 * Get empty pricing info structure
 */
function getEmptyPricingInfo() {
  return {
    sumInsured: '0 EGP',
    netPremium: '0 EGP',
    fees: '0 EGP',
    stampDuty: '0 EGP',
    issueFees: '0 EGP',
    taxAmount: '0 EGP',
    taxPercentage: '0%',
    grossPremium: '0 EGP'
  };
}

/***/ })

}]);