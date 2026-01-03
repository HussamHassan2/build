"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[211],{

/***/ 7244:
/*!************************************************!*\
  !*** ./src/app/core/services/quote.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteService: () => (/* binding */ QuoteService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 6344);



let QuoteService = /*#__PURE__*/(() => {
  class QuoteService {
    constructor(api) {
      this.api = api;
    }
    /**
     * List Quotations
     */
    listQuotations(params) {
      const domainStr = Array.isArray(params.domain) ? JSON.stringify(params.domain) : params.domain || '[]';
      return this.api.get('/v1/quote/list-quotations', {
        params: {
          user_id: params.user_id,
          user_type: params.user_type,
          limit: params.limit,
          offset: params.offset,
          domain: domainStr
        }
      });
    }
    /**
     * Request Quotation - Matches React app's requestQuotation method
     */
    requestQuotation(quoteData) {
      return this.api.post('/v1/crm/request-quotation', {
        params: {
          data: quoteData
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Generate Proposals - Matches React app's generateProposals method
     */
    generateProposals(opportunityId) {
      return this.api.post('/v1/crm/generate-opportunity-proposals', {
        params: {
          opportunity_id: opportunityId
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Proposals - Matches React app's getProposals method
     */
    getProposals(opportunityId) {
      return this.api.get(`/v1/crm/get-crm-proposals?opportunity_id=${opportunityId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Makers - Matches React app's getVehicleMakers method
     */
    getVehicleMakers() {
      return this.api.get('/v1/lov/vehicle-makers').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Models - Matches React app's getVehicleModels method
     */
    getVehicleModels(makerCode) {
      return this.api.get(`/v1/lov/vehicle-models?maker_code=${encodeURIComponent(makerCode)}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Model Categories - Matches React app's getVehicleModelCategories method
     */
    getVehicleModelCategories(modelCode) {
      return this.api.get(`/v1/lov/vehicle-model-categories?model_code=${encodeURIComponent(modelCode)}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Model Years - Matches React app's getVehicleModelYears method
     */
    getVehicleModelYears(modelId) {
      return this.api.get(`/v1/lov/vehicle-model-years?model_id=${encodeURIComponent(modelId)}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Body Types - Matches React app's getVehicleBodyTypes method
     */
    getVehicleBodyTypes() {
      return this.api.get('/v1/lov/vehicle-body-types').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Usages - Matches React app's getVehicleUsages method
     */
    getVehicleUsages() {
      return this.api.get('/v1/lov/vehicle-usages').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle CCs - Matches React app's getVehicleCcs method
     */
    getVehicleCcs() {
      return this.api.get('/v1/lov/vehicle-ccs').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Fuel Types - Matches React app's getVehicleFuelTypes method
     */
    getVehicleFuelTypes() {
      return this.api.get('/v1/lov/vehicle-fuel-types').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Vehicle Colors - Matches React app's getVehicleColors method
     */
    getVehicleColors() {
      return this.api.get('/v1/lov/vehicle-colors').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Road Side Programs - Matches React app's getRoadSidePrograms method
     */
    getRoadSidePrograms() {
      return this.api.get('/v1/lov/road-side-programs').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Insurance Issuing Types - Matches React app's getInsuranceIssuingTypes method
     */
    getInsuranceIssuingTypes() {
      return this.api.get('/v1/lov/insurance-issuing-types').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Download Proposal PDF - Matches React app's downloadProposalPdf method
     */
    downloadProposalPdf(proposalId) {
      return this.api.get(`/v1/crm/download-proposal-pdf?proposal_id=${proposalId}`, {
        responseType: 'blob'
      });
    }
    /**
     * Request Issuance - Matches React app's requestIssuance method
     */
    requestIssuance(issuanceData) {
      return this.api.post('/v1/crm/request-issuance', {
        params: {
          data: issuanceData
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get CRM Documents - Matches React app's getCRMDocuments method
     */
    getCRMDocuments() {
      return this.api.get('/v1/lov/crm-documents').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    /**
     * Get Payment Methods - Matches React app's getPaymentMethods method
     */
    getPaymentMethods() {
      return this.api.get('/v1/lov/payment-methods').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    static {
      this.ɵfac = function QuoteService_Factory(t) {
        return new (t || QuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: QuoteService,
        factory: QuoteService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return QuoteService;
})();

/***/ }),

/***/ 1780:
/*!*************************************************************************************!*\
  !*** ./src/app/quote/components/coverage-selection/coverage-selection.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageSelectionComponent: () => (/* binding */ CoverageSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

let CoverageSelectionComponent = /*#__PURE__*/(() => {
  class CoverageSelectionComponent {
    static {
      this.ɵfac = function CoverageSelectionComponent_Factory(t) {
        return new (t || CoverageSelectionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CoverageSelectionComponent,
        selectors: [["app-coverage-selection"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 2,
        vars: 0,
        template: function CoverageSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "coverage-selection works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
      });
    }
  }
  return CoverageSelectionComponent;
})();

/***/ }),

/***/ 4164:
/*!*****************************************************************************!*\
  !*** ./src/app/quote/components/driver-details/driver-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverDetailsComponent: () => (/* binding */ DriverDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);




let DriverDetailsComponent = /*#__PURE__*/(() => {
  class DriverDetailsComponent {
    static {
      this.ɵfac = function DriverDetailsComponent_Factory(t) {
        return new (t || DriverDetailsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DriverDetailsComponent,
        selectors: [["app-driver-details"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 10,
        vars: 0,
        consts: [[1, "max-w-2xl", "mx-auto"], [1, "text-2xl", "font-semibold", "text-gray-900", "mb-6"], [1, "text-gray-600", "mb-6"], [1, "flex", "justify-between"], ["routerLink", "../vehicle", 1, "text-primary", "hover:text-primary-dark", "font-medium"], ["routerLink", "../coverage", 1, "bg-primary", "text-white", "px-4", "py-2", "rounded-md", "hover:bg-primary-dark"]],
        template: function DriverDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Driver Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Driver details form to be implemented.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Vehicle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Next: Coverage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink]
      });
    }
  }
  return DriverDetailsComponent;
})();

/***/ }),

/***/ 9000:
/*!***************************************************************************!*\
  !*** ./src/app/quote/components/motor-details/motor-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotorDetailsComponent: () => (/* binding */ MotorDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var src_app_core_services_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/quote.service */ 7244);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/selection-modal/selection-modal.component */ 2209);









function MotorDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-selection-modal", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function MotorDetailsComponent_div_10_Template_app_selection_modal_valueChange_1_listener($event) {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]((tmp_2_0 = ctx_r1.vehicleForm.get("model_category_code")) == null ? null : tmp_2_0.setValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.categories)("value", (tmp_2_0 = ctx_r1.vehicleForm.get("model_category_code")) == null ? null : tmp_2_0.value);
  }
}
let MotorDetailsComponent = /*#__PURE__*/(() => {
  class MotorDetailsComponent {
    constructor(fb, quoteService,
    // Ensure QuoteService is provided in root
    router) {
      this.fb = fb;
      this.quoteService = quoteService;
      this.router = router;
      this.loading = false;
      // Dropdown options
      this.makers = [];
      this.models = [];
      this.categories = [];
      this.years = [];
      this.vehicleForm = this.fb.group({
        maker_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        model_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        model_category_code: [''],
        model_year_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        vehicle_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
        // Add other common fields
        vehicle_usage: [''],
        body_type: ['']
      });
    }
    ngOnInit() {
      this.loadMakers();
      this.setupDependencyListeners();
    }
    loadMakers() {
      this.loading = true;
      this.quoteService.getVehicleMakers().subscribe({
        next: res => {
          console.log('API Response - Vehicle Makers:', res); // DEBUG LOG
          this.makers = (res || []).map(maker => {
            if (maker.risk_image) {
              let imageStr = String(maker.risk_image).trim();
              // 1. Check for standard prefixes/schemes
              if (imageStr.startsWith('data:') || imageStr.startsWith('http') || imageStr.startsWith('https')) {
                maker.risk_image = imageStr;
              }
              // 2. Check for path-like strings
              else if (imageStr.startsWith('/') || imageStr.startsWith('./') || imageStr.startsWith('assets/')) {
                maker.risk_image = imageStr;
              }
              // 3. Check for specific image extensions
              else if (/\.(png|jpg|jpeg|svg|gif|webp)(\?.*)?$/i.test(imageStr)) {
                maker.risk_image = imageStr;
              }
              // 4. Fallback for raw Base64 (must be long enough)
              else if (imageStr.length > 50) {
                // Strip whitespace
                const cleanStr = imageStr.replace(/\s/g, '');
                // Relaxed check - template handles error
                maker.risk_image = `data:image/png;base64,${cleanStr}`;
              } else {
                // Too short, assuming text/code - hide it
                maker.risk_image = '';
              }
            }
            return maker;
          });
          console.log('Processed Makers:', this.makers); // DEBUG LOG
          this.loading = false;
        },
        error: err => {
          console.error('Error loading makers', err);
          this.loading = false;
        }
      });
    }
    setupDependencyListeners() {
      this.vehicleForm.get('maker_code')?.valueChanges.subscribe(makerCode => {
        this.vehicleForm.patchValue({
          model_code: '',
          model_category_code: '',
          model_year_id: ''
        });
        this.models = [];
        this.categories = [];
        this.years = [];
        if (makerCode) this.loadModels(makerCode);
      });
      this.vehicleForm.get('model_code')?.valueChanges.subscribe(modelCode => {
        this.vehicleForm.patchValue({
          model_category_code: '',
          model_year_id: ''
        });
        this.categories = [];
        this.years = [];
        if (modelCode) this.loadCategories(modelCode);
        // Assuming we can derive years from model directly or category
        if (modelCode) this.loadYears(modelCode);
      });
    }
    loadModels(makerCode) {
      this.quoteService.getVehicleModels(makerCode).subscribe(res => this.models = res || []);
    }
    loadCategories(modelCode) {
      this.quoteService.getVehicleModelCategories(modelCode).subscribe(res => this.categories = res || []);
    }
    loadYears(modelId) {
      // API expects model_id. We might only have code. 
      // Need to ensure model object has ID.
      // If models array has objects with { id, code, name }, we should find the ID.
      // Since valueChanges gives us the value (code), we need to look it up.
      // Wait, if models are loaded, I can find the selected model.
      // But the subscription gives just the value.
      // I'll do the lookup in the subscription or a separate method.
      // Simplified here:
      const model = this.models.find(m => m.code === modelId); // assuming value is code
      if (model && model.id) {
        this.quoteService.getVehicleModelYears(model.id).subscribe(res => this.years = res || []);
      } else {
        // Fallback if APIs are using code everywhere or mixed
        this.quoteService.getVehicleModelYears(modelId).subscribe(res => this.years = res || []);
      }
    }
    onSubmit() {
      if (this.vehicleForm.valid) {
        console.log('Vehicle Data:', this.vehicleForm.value);
        // Persist data (Service/LocalState)
        localStorage.setItem('quote_vehicle_details', JSON.stringify(this.vehicleForm.value));
        this.router.navigate(['/quote/driver']);
      } else {
        this.vehicleForm.markAllAsTouched();
      }
    }
    static {
      this.ɵfac = function MotorDetailsComponent_Factory(t) {
        return new (t || MotorDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_quote_service__WEBPACK_IMPORTED_MODULE_1__.QuoteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MotorDetailsComponent,
        selectors: [["app-motor-details"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 24,
        vars: 18,
        consts: [[1, "max-w-2xl", "mx-auto"], [1, "text-2xl", "font-semibold", "text-gray-900", "mb-6"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mt-6", "space-y-6", 3, "ngSubmit", "formGroup"], ["label", "Vehicle Maker", "title", "Select Vehicle Maker", "subtitle", "Choose the manufacturer", "placeholder", "Select Maker", "valueKey", "code", "displayKey", "name", "layout", "grid", 3, "valueChange", "options", "value", "required", "gridCols", "imageKey"], ["label", "Vehicle Model", "title", "Select Vehicle Model", "subtitle", "Choose the model", "placeholder", "Select Model", "valueKey", "code", "displayKey", "name", "layout", "grid", 3, "valueChange", "options", "value", "required", "disabled", "gridCols"], [4, "ngIf"], ["label", "Model Year", "title", "Select Model Year", "subtitle", "Choose the year", "placeholder", "Select Year", "valueKey", "id", "displayKey", "year", "layout", "grid", 3, "valueChange", "options", "value", "required", "disabled", "gridCols"], ["for", "value", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1", "relative", "rounded-md", "shadow-sm"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3"], [1, "text-gray-500", "sm:text-sm"], ["type", "number", "id", "value", "formControlName", "vehicle_value", "placeholder", "0.00", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm"], [1, "flex", "justify-end", "pt-5"], ["type", "submit", 1, "ml-3", "inline-flex", "justify-center", "rounded-md", "border", "border-transparent", "bg-primary", "py-2", "px-4", "text-sm", "font-medium", "text-white", "shadow-sm", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-primary", "focus:ring-offset-2", "disabled:opacity-50", 3, "disabled"], ["label", "Model Category", "title", "Select Category", "subtitle", "Choose the category", "placeholder", "Select Category", "valueKey", "code", "displayKey", "name", 3, "valueChange", "options", "value"]],
        template: function MotorDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vehicle Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Complete the details below to get your quote.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MotorDetailsComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "app-selection-modal", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function MotorDetailsComponent_Template_app_selection_modal_valueChange_7_listener($event) {
              let tmp_0_0;
              return (tmp_0_0 = ctx.vehicleForm.get("maker_code")) == null ? null : tmp_0_0.setValue($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div")(9, "app-selection-modal", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function MotorDetailsComponent_Template_app_selection_modal_valueChange_9_listener($event) {
              let tmp_0_0;
              return (tmp_0_0 = ctx.vehicleForm.get("model_code")) == null ? null : tmp_0_0.setValue($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MotorDetailsComponent_div_10_Template, 2, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "app-selection-modal", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function MotorDetailsComponent_Template_app_selection_modal_valueChange_12_listener($event) {
              let tmp_0_0;
              return (tmp_0_0 = ctx.vehicleForm.get("model_year_id")) == null ? null : tmp_0_0.setValue($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div")(14, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Vehicle Value (Sum Insured)");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "SAR");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13)(22, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Next: Driver Details ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            let tmp_2_0;
            let tmp_7_0;
            let tmp_9_0;
            let tmp_13_0;
            let tmp_15_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.vehicleForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.makers)("value", (tmp_2_0 = ctx.vehicleForm.get("maker_code")) == null ? null : tmp_2_0.value)("required", true)("gridCols", 4)("imageKey", "risk_image");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.models)("value", (tmp_7_0 = ctx.vehicleForm.get("model_code")) == null ? null : tmp_7_0.value)("required", true)("disabled", !((tmp_9_0 = ctx.vehicleForm.get("maker_code")) == null ? null : tmp_9_0.value))("gridCols", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.categories.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.years)("value", (tmp_13_0 = ctx.vehicleForm.get("model_year_id")) == null ? null : tmp_13_0.value)("required", true)("disabled", !((tmp_15_0 = ctx.vehicleForm.get("model_code")) == null ? null : tmp_15_0.value))("gridCols", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.vehicleForm.invalid || ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_2__.SelectionModalComponent]
      });
    }
  }
  return MotorDetailsComponent;
})();

/***/ }),

/***/ 4762:
/*!*************************************************************************!*\
  !*** ./src/app/quote/components/quote-wizard/quote-wizard.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteWizardComponent: () => (/* binding */ QuoteWizardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);




const _c0 = () => ["vehicle"];
const _c1 = () => ({
  exact: true
});
const _c2 = () => ["driver"];
const _c3 = () => ["coverage"];
let QuoteWizardComponent = /*#__PURE__*/(() => {
  class QuoteWizardComponent {
    static {
      this.ɵfac = function QuoteWizardComponent_Factory(t) {
        return new (t || QuoteWizardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuoteWizardComponent,
        selectors: [["app-quote-wizard"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 29,
        vars: 8,
        consts: [[1, "min-h-screen", "bg-gray-50", "py-12"], [1, "max-w-4xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "mb-8"], [1, "flex", "items-center", "justify-between"], [1, "flex-1"], [1, "relative"], ["aria-hidden", "true", 1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-gray-200"], [1, "relative", "flex", "justify-between"], [1, "group", "flex", "flex-col", "items-center"], ["routerLinkActive", "border-primary bg-primary text-white", 1, "border-gray-300", "text-gray-500", "hover:border-gray-400", 3, "routerLink", "routerLinkActiveOptions"], ["data-lucide", "car", 1, "h-5", "w-5"], [1, "mt-2", "text-sm", "font-medium", "text-gray-900"], ["routerLinkActive", "border-primary bg-primary text-white", 1, "border-gray-300", "text-gray-500", "hover:border-gray-400", 3, "routerLink"], ["data-lucide", "user", 1, "h-5", "w-5"], [1, "mt-2", "text-sm", "font-medium", "text-gray-500"], ["data-lucide", "shield", 1, "h-5", "w-5"], [1, "bg-white", "shadow", "rounded-lg", "p-6"]],
        template: function QuoteWizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "span", 10)(11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uD83D\uDE97");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vehicle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "span", 13)(17, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83D\uDC64");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Driver");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9)(22, "span", 13)(23, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\uD83D\uDEE1\uFE0F");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Coverage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive]
      });
    }
  }
  return QuoteWizardComponent;
})();

/***/ }),

/***/ 6162:
/*!***********************************************!*\
  !*** ./src/app/quote/quote-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteRoutingModule: () => (/* binding */ QuoteRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _components_quote_wizard_quote_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/quote-wizard/quote-wizard.component */ 4762);
/* harmony import */ var _components_motor_details_motor_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/motor-details/motor-details.component */ 9000);
/* harmony import */ var _components_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/driver-details/driver-details.component */ 4164);
/* harmony import */ var _components_coverage_selection_coverage_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/coverage-selection/coverage-selection.component */ 1780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _components_quote_wizard_quote_wizard_component__WEBPACK_IMPORTED_MODULE_0__.QuoteWizardComponent,
  children: [{
    path: '',
    redirectTo: 'vehicle',
    pathMatch: 'full'
  }, {
    path: 'vehicle',
    component: _components_motor_details_motor_details_component__WEBPACK_IMPORTED_MODULE_1__.MotorDetailsComponent
  }, {
    path: 'driver',
    component: _components_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_2__.DriverDetailsComponent
  }, {
    path: 'coverage',
    component: _components_coverage_selection_coverage_selection_component__WEBPACK_IMPORTED_MODULE_3__.CoverageSelectionComponent
  }]
}];
let QuoteRoutingModule = /*#__PURE__*/(() => {
  class QuoteRoutingModule {
    static {
      this.ɵfac = function QuoteRoutingModule_Factory(t) {
        return new (t || QuoteRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: QuoteRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });
    }
  }
  return QuoteRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 7211:
/*!***************************************!*\
  !*** ./src/app/quote/quote.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteModule: () => (/* binding */ QuoteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _quote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote-routing.module */ 6162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);



let QuoteModule = /*#__PURE__*/(() => {
  class QuoteModule {
    static {
      this.ɵfac = function QuoteModule_Factory(t) {
        return new (t || QuoteModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: QuoteModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _quote_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuoteRoutingModule]
      });
    }
  }
  return QuoteModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuoteModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _quote_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuoteRoutingModule]
  });
})();

/***/ })

}]);