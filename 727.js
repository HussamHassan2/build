"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[727],{

/***/ 5740:
/*!**********************************************!*\
  !*** ./src/app/core/services/crm.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrmService: () => (/* binding */ CrmService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 6344);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1626);




let CrmService = /*#__PURE__*/(() => {
  class CrmService {
    constructor(api, http) {
      this.api = api;
      this.http = http;
    }
    /**
     * Get Opportunity Details - Matches React app's getOpportunity method
     */
    getOpportunity(opportunityId) {
      return this.api.get('/v1/crm/get-opportunity', {
        params: {
          opportunity_id: opportunityId
        }
      });
    }
    /**
     * Get Quotation Details - Alias for getOpportunity
     */
    getQuotation(quotationId) {
      return this.getOpportunity(quotationId);
    }
    /**
     * List Opportunities - Matches React app's listOpportunities method
     */
    listOpportunities(params) {
      const domainStr = Array.isArray(params.domain) ? JSON.stringify(params.domain) : params.domain;
      return this.api.get('/v1/crm/list-opportunities', {
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
     * Get Renewal Requests - Matches React app's getRenewalRequests method
     */
    getRenewalRequests(params) {
      return this.api.get('/v1/crm/get-renewal-requests', {
        params: params
      });
    }
    /**
     * Request Policy Info - Matches React app's requestPolicyInfo method
     */
    requestPolicyInfo(opportunityId) {
      return this.api.get('/v1/crm/request-policy-info', {
        params: {
          opportunity_id: opportunityId
        }
      });
    }
    /**
     * Get Proposals - Matches React app's getProposals method
     */
    getProposals(opportunityId) {
      return this.api.get('/v1/crm/get-crm-proposals', {
        params: {
          opportunity_id: opportunityId
        }
      });
    }
    /**
     * Download Proposal PDF - Matches React app's downloadProposal method
     * Handles Base64 to Blob conversion
     */
    downloadProposal(proposalId) {
      const token = localStorage.getItem('authToken');
      return this.api.get('/v1/crm/download-proposal-pdf', {
        params: {
          proposal_id: proposalId
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        // Extract Base64 string from response
        const base64String = response?.result?.data || response?.data || response?.result || response;
        if (typeof base64String === 'string') {
          const cleanB64 = base64String.replace(/\s/g, '');
          return this.b64toBlob(cleanB64, 'application/pdf');
        }
        return response;
      }));
    }
    /**
     * Helper to convert Base64 to Blob - Matches React app's b64toBlob function
     */
    b64toBlob(b64Data, contentType = 'application/pdf', sliceSize = 512) {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      return new Blob(byteArrays, {
        type: contentType
      });
    }
    /**
     * Get Lost Reasons - Matches React app's getLostReasons method
     */
    getLostReasons() {
      return this.api.get('/v1/crm/lost-reasons', {
        params: {}
      });
    }
    /**
     * Generate Opportunity Proposals - Matches React app's generateProposals method
     */
    generateProposals(opportunityId) {
      return this.api.post('/v1/crm/generate-opportunity-proposals', {
        params: {
          opportunity_id: opportunityId
        }
      });
    }
    /**
     * Request Issuance - Matches React app's requestIssuance method
     */
    requestIssuance(data) {
      return this.api.post('/v1/crm/request-issuance', {
        params: {
          data: data
        }
      });
    }
    /**
     * Request Quotation - Matches React app's requestQuotation method
     */
    requestQuotation(data) {
      return this.api.post('/v1/crm/request-quotation', {
        params: {
          data: data
        }
      });
    }
    /**
     * Mark Opportunity as Lost - Matches React app's markLost method
     */
    markLost(opportunityId, lostReasonId, feedback) {
      return this.api.post('/v1/crm/mark-lost', {
        params: {
          opportunity_id: opportunityId,
          lost_reason_id: lostReasonId,
          lost_feedback: feedback
        }
      });
    }
    /**
     * Post Chatter Message - Matches Postman collection format
     */
    postChatterMessage(recordId, message, attachments = []) {
      return this.api.post('/v1/post-chatter-message', {
        params: {
          is_external_message: true,
          record_id: parseInt(recordId.toString()),
          model_name: "crm.lead",
          message: message,
          attachments: attachments
        }
      });
    }
    static {
      this.ɵfac = function CrmService_Factory(t) {
        return new (t || CrmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CrmService,
        factory: CrmService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CrmService;
})();

/***/ }),

/***/ 2847:
/*!******************************************************************************************************!*\
  !*** ./src/app/surveyor/components/add-estimation-item-modal/add-estimation-item-modal.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddEstimationItemModalComponent: () => (/* binding */ AddEstimationItemModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var src_app_core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/claim.service */ 4644);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);






function AddEstimationItemModalComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.name || item_r1.description, " ");
  }
}
function AddEstimationItemModalComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddEstimationItemModalComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r2.name || type_r2.value || type_r2.description || type_r2, " ");
  }
}
let AddEstimationItemModalComponent = /*#__PURE__*/(() => {
  class AddEstimationItemModalComponent {
    constructor(fb, claimService) {
      this.fb = fb;
      this.claimService = claimService;
      this.visible = false;
      this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.itemAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.itemTypes = [];
      this.availableItems = [];
      this.loading = false;
    }
    ngOnChanges(changes) {
      if (changes['visible']) {
        console.log('Modal visible changed:', changes['visible'].currentValue);
      }
    }
    ngOnInit() {
      console.log('Modal Initialized');
      this.initForm();
      this.fetchTypes();
      this.fetchAvailableItems();
    }
    fetchTypes() {
      this.claimService.getEstimationItemTypes().subscribe({
        next: res => this.itemTypes = res.data || res,
        error: err => console.error('Error loading types', err)
      });
    }
    fetchAvailableItems() {
      this.loading = true;
      this.claimService.listEstimationItems(100, 0).subscribe({
        next: res => {
          this.availableItems = res.data || res;
          this.loading = false;
        },
        error: err => {
          console.error('Error loading items', err);
          this.loading = false;
        }
      });
    }
    initForm() {
      this.itemForm = this.fb.group({
        id: [null],
        estimation_id: [this.estimationId],
        estimation_item_type: [''],
        estimation_item_type_id: [null],
        estimation_item_type_symbol: [''],
        spare_part_type: [''],
        estimation_item_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        estimation_item_state: ['Accepted'],
        salvage_state: ['pending_collection'],
        estimation_item: [''],
        estimation_item_id: [null],
        estimation_unit_amount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        adjustment_unit_amount: [0],
        estimation_amount: [0],
        adjustment_amount: [0],
        taxed_adjustment_amount: [0],
        taxed_estimation_amount: [0],
        difference_amount: [0],
        quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
        apply_tax: [false],
        post_comment: [false],
        pre_comment: [false],
        depreciation: [0],
        apply_depreciation_calculations: [false],
        apply_panorama_calculations: [false],
        is_excluded: [false],
        special_discount: [0],
        apply_damage_calculations: [false],
        apply_airbag_calculations: [false],
        pre_pics: [[]],
        post_pics: [[]]
      });
    }
    onItemSelect(event) {
      const selectedId = event.target.value;
      if (!selectedId || selectedId === "null") return;
      const selectedItem = this.availableItems.find(i => i.id == selectedId);
      if (selectedItem) {
        // Auto-fill fields
        this.itemForm.patchValue({
          estimation_item_description: selectedItem.name || selectedItem.description,
          estimation_item_id: selectedItem.id,
          estimation_unit_amount: selectedItem.price || selectedItem.unit_price || 0,
          estimation_item_type_id: selectedItem.estimation_spare_part_type_id || selectedItem.type_id || null,
          spare_part_type: selectedItem.code || selectedItem.reference || ''
        });
      }
    }
    onSave(action) {
      if (this.itemForm.invalid) {
        this.itemForm.markAllAsTouched();
        return;
      }
      const formValue = this.itemForm.value;
      // Map dropdown ID to type string if needed for display, 
      // but usually API handles saving by ID.
      // For now we just emit the form value.
      // In a real scenario, we might call an API here to save.
      // Since the user didn't give a "Create" API but said "use list-estimation-items",
      // IF that API was for Creating (unlikely), we'd call it.
      // Assuming we emit to parent to handle or just mock it.
      console.log('Adding Item:', formValue);
      this.itemAdded.emit({
        item: formValue,
        action
      });
      if (action === 'new') {
        this.itemForm.reset({
          estimation_id: this.estimationId,
          estimation_item_state: 'Accepted',
          quantity: 1,
          estimation_unit_amount: 0,
          depreciation: 0,
          special_discount: 0,
          apply_tax: false
        });
      } else {
        this.closeModal();
      }
    }
    closeModal() {
      this.visible = false;
      this.close.emit();
    }
    static {
      this.ɵfac = function AddEstimationItemModalComponent_Factory(t) {
        return new (t || AddEstimationItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_claim_service__WEBPACK_IMPORTED_MODULE_0__.ClaimService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddEstimationItemModalComponent,
        selectors: [["app-add-estimation-item-modal"]],
        inputs: {
          estimationId: "estimationId",
          visible: "visible"
        },
        outputs: {
          close: "close",
          itemAdded: "itemAdded"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 154,
        vars: 8,
        consts: [["aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "flex", "items-end", "justify-center", "min-h-screen", "pt-4", "px-4", "pb-20", "text-center", "sm:block", "sm:p-0"], ["aria-hidden", "true", 1, "fixed", "inset-0", "bg-gray-500", "bg-opacity-75", "transition-opacity", 3, "click"], ["aria-hidden", "true", 1, "hidden", "sm:inline-block", "sm:align-middle", "sm:h-screen"], [1, "inline-block", "align-bottom", "bg-white", "dark:bg-gray-800", "rounded-lg", "text-left", "overflow-hidden", "shadow-xl", "transform", "transition-all", "sm:my-8", "sm:align-middle", "sm:max-w-2xl", "sm:w-full"], [1, "bg-gray-50", "dark:bg-gray-700", "px-4", "py-3", "sm:px-6", "flex", "justify-between", "items-center"], ["id", "modal-title", 1, "text-lg", "leading-6", "font-medium", "text-gray-900", "dark:text-white"], ["type", "button", 1, "text-gray-400", "hover:text-gray-500", "focus:outline-none", 3, "click"], [1, "sr-only"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "flex-col", "h-full", 3, "formGroup"], [1, "px-4", "py-5", "sm:p-6", "space-y-8", "overflow-y-auto", "max-h-[70vh]"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-wider", "mb-4", "border-b", "border-gray-200", "dark:border-gray-700", "pb-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "col-span-1", "md:col-span-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["formControlName", "estimation_item_id", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "estimation_item_description", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["class", "mt-1 text-xs text-red-500", 4, "ngIf"], ["formControlName", "estimation_item_type_id", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "text", "formControlName", "spare_part_type", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "quantity", "min", "1", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], [1, "relative", "mt-1", "rounded-md", "shadow-sm"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3"], [1, "text-gray-500", "sm:text-sm"], ["type", "number", "formControlName", "estimation_unit_amount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "depreciation", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "special_discount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "estimation_amount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "taxed_estimation_amount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "adjustment_unit_amount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "adjustment_amount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "taxed_adjustment_amount", "min", "0", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], ["type", "number", "formControlName", "difference_amount", 1, "block", "w-full", "rounded-md", "border-gray-300", "pl-7", "pr-12", "focus:border-primary", "focus:ring-primary", "sm:text-sm", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], [1, "flex", "items-center", "p-3", "rounded-lg", "border", "border-gray-200", "dark:border-gray-700", "hover:bg-gray-50", "dark:hover:bg-gray-700", "cursor-pointer", "transition-colors"], ["type", "checkbox", "formControlName", "apply_tax", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded"], [1, "ml-2", "text-sm", "text-gray-700", "dark:text-gray-300"], ["type", "checkbox", "formControlName", "is_excluded", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded"], ["type", "checkbox", "formControlName", "apply_damage_calculations", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded"], ["type", "checkbox", "formControlName", "apply_airbag_calculations", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded"], [1, "bg-gray-50", "dark:bg-gray-700", "px-4", "py-3", "sm:px-6", "sm:flex", "sm:flex-row-reverse", "border-t", "border-gray-200", "dark:border-gray-600"], ["type", "button", 1, "w-full", "inline-flex", "justify-center", "rounded-md", "border", "border-transparent", "shadow-sm", "px-4", "py-2", "bg-primary", "text-base", "font-medium", "text-white", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "sm:ml-3", "sm:w-auto", "sm:text-sm", 3, "click"], ["type", "button", 1, "mt-3", "w-full", "inline-flex", "justify-center", "rounded-md", "border", "border-gray-300", "shadow-sm", "px-4", "py-2", "bg-white", "text-base", "font-medium", "text-gray-700", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "sm:mt-0", "sm:ml-3", "sm:w-auto", "sm:text-sm", "dark:bg-gray-800", "dark:text-white", "dark:border-gray-600", "dark:hover:bg-gray-700", 3, "click"], [1, "mt-1", "text-xs", "text-red-500"]],
        template: function AddEstimationItemModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEstimationItemModalComponent_Template_div_click_2_listener() {
              return ctx.closeModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u200B");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Add Estimation Item ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEstimationItemModalComponent_Template_button_click_9_listener() {
              return ctx.closeModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 11)(15, "div", 12)(16, "div")(17, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Item Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddEstimationItemModalComponent_Template_select_change_23_listener($event) {
              return ctx.onItemSelect($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select Item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddEstimationItemModalComponent_option_26_Template, 2, 2, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15)(28, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Description / Part Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddEstimationItemModalComponent_p_31_Template, 2, 0, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Item Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 22)(36, "option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Select Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddEstimationItemModalComponent_option_38_Template, 2, 2, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div")(40, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Reference / Subtype");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div")(44, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Quantity");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div")(48, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Unit Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25)(51, "div", 26)(52, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Financials");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14)(59, "div")(60, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Depreciation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25)(63, "div", 26)(64, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div")(68, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Special Discount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 25)(71, "div", 26)(72, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div")(76, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Est. Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 25)(79, "div", 26)(80, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div")(84, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Taxed Est.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 25)(87, "div", 26)(88, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div")(92, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Adjustments");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 14)(95, "div")(96, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Adj. Unit Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 25)(99, "div", 26)(100, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div")(104, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Adj. Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 25)(107, "div", 26)(108, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div")(112, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Taxed Adj.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 25)(115, "div", 26)(116, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div")(120, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Difference");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 25)(123, "div", 26)(124, "span", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div")(128, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Additional Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 37)(131, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Apply Tax");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Excluded");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Damage Calc");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Airbag Calc");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 44)(148, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEstimationItemModalComponent_Template_button_click_148_listener() {
              return ctx.onSave("close");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " Add & Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "button", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEstimationItemModalComponent_Template_button_click_150_listener() {
              return ctx.onSave("new");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Add & New ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEstimationItemModalComponent_Template_button_click_152_listener() {
              return ctx.closeModal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " Cancel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            let tmp_4_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.visible);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.itemForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.itemForm.get("estimation_item_description")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.itemForm.get("estimation_item_description")) == null ? null : tmp_4_0.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itemTypes);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName]
      });
    }
  }
  return AddEstimationItemModalComponent;
})();

/***/ }),

/***/ 3655:
/*!**************************************************************************************!*\
  !*** ./src/app/surveyor/components/claim-survey-form/claim-survey-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClaimSurveyFormComponent: () => (/* binding */ ClaimSurveyFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9417);




function ClaimSurveyFormComponent_div_41_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r3.name);
  }
}
function ClaimSurveyFormComponent_div_41_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClaimSurveyFormComponent_div_41_div_14_div_4_Template, 3, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.photos);
  }
}
function ClaimSurveyFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Photos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 21)(6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Drop files to Attach, or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClaimSurveyFormComponent_div_41_Template_input_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClaimSurveyFormComponent_div_41_div_14_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.data.photos == null ? null : ctx_r1.data.photos.length) > 0);
  }
}
let ClaimSurveyFormComponent = /*#__PURE__*/(() => {
  class ClaimSurveyFormComponent {
    constructor() {
      this.data = {};
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onDataChange() {
      this.dataChange.emit(this.data);
    }
    onFileChange(event) {
      if (event.target.files) {
        this.data.photos = Array.from(event.target.files);
        this.onDataChange();
      }
    }
    static {
      this.ɵfac = function ClaimSurveyFormComponent_Factory(t) {
        return new (t || ClaimSurveyFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClaimSurveyFormComponent,
        selectors: [["app-claim-survey-form"]],
        inputs: {
          data: "data"
        },
        outputs: {
          dataChange: "dataChange"
        },
        decls: 42,
        vars: 6,
        consts: [[1, "space-y-6"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "p-6", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-lg", "font-medium", "text-gray-900", "dark:text-white", "mb-4", "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mr-2", "text-primary"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "col-span-1", "md:col-span-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], [1, "text-red-500"], ["rows", "3", "placeholder", "Describe the damage in detail...", "required", "", 1, "w-full", "rounded-md", "border-gray-300", "dark:border-gray-600", "shadow-sm", "focus:border-primary", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", "sm:text-sm", "transition-colors", "py-2", "px-3", 3, "ngModelChange", "ngModel"], [1, "relative", "rounded-md", "shadow-sm"], ["type", "number", "placeholder", "e.g. 50000", 1, "block", "w-full", "rounded-md", "border-gray-300", "dark:border-gray-600", "pl-3", "pr-12", "focus:border-primary", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", "sm:text-sm", "py-2", 3, "ngModelChange", "ngModel"], [1, "pointer-events-none", "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3"], [1, "text-gray-500", "sm:text-sm"], [1, "pointer-events-none", "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3"], ["type", "number", "disabled", "", 1, "block", "w-full", "rounded-md", "border-gray-300", "bg-gray-50", "dark:border-gray-600", "dark:bg-gray-600", "pl-7", "focus:border-primary", "focus:ring-primary", "dark:text-gray-200", "sm:text-sm", "py-2", "cursor-not-allowed", 3, "ngModel"], ["rows", "2", "placeholder", "Final conclusion...", "required", "", 1, "w-full", "rounded-md", "border-gray-300", "dark:border-gray-600", "shadow-sm", "focus:border-primary", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", "sm:text-sm", "transition-colors", "py-2", "px-3", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Recommended action...", "required", "", 1, "w-full", "rounded-md", "border-gray-300", "dark:border-gray-600", "shadow-sm", "focus:border-primary", "focus:ring-primary", "dark:bg-gray-700", "dark:text-white", "sm:text-sm", "transition-colors", "py-2", "px-3", 3, "ngModelChange", "ngModel"], ["class", "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700", 4, "ngIf"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-lg", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "flex", "justify-center", "w-full", "h-32", "px-4", "transition", "bg-white", "dark:bg-gray-800", "border-2", "border-gray-300", "dark:border-gray-600", "border-dashed", "rounded-md", "appearance-none", "cursor-pointer", "hover:border-primary", "dark:hover:border-primary", "focus:outline-none"], [1, "flex", "items-center", "space-x-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6", "text-gray-600", "dark:text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-primary", "underline"], ["type", "file", "name", "file_upload", "multiple", "", 1, "hidden", 3, "change"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider", "mb-2"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], ["class", "relative group bg-gray-100 dark:bg-gray-700 rounded-lg p-2 flex items-center justify-center", 4, "ngFor", "ngForOf"], [1, "relative", "group", "bg-gray-100", "dark:bg-gray-700", "rounded-lg", "p-2", "flex", "items-center", "justify-center"], [1, "text-xs", "text-gray-700", "dark:text-gray-300", "truncate", "w-full", "text-center"]],
        template: function ClaimSurveyFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Assessment Details ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Damage Description ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ClaimSurveyFormComponent_Template_textarea_ngModelChange_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.damage_description, $event) || (ctx.data.damage_description = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClaimSurveyFormComponent_Template_textarea_ngModelChange_12_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div")(14, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Odometer Reading (KM)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ClaimSurveyFormComponent_Template_input_ngModelChange_17_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.odometer_reading, $event) || (ctx.data.odometer_reading = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClaimSurveyFormComponent_Template_input_ngModelChange_17_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "km");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div")(22, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Est. Repair Cost");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "div", 14)(26, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6)(30, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Conclusion ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ClaimSurveyFormComponent_Template_textarea_ngModelChange_34_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.conclusion, $event) || (ctx.data.conclusion = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClaimSurveyFormComponent_Template_textarea_ngModelChange_34_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6)(36, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Recommendation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ClaimSurveyFormComponent_Template_textarea_ngModelChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.recommendation, $event) || (ctx.data.recommendation = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClaimSurveyFormComponent_Template_textarea_ngModelChange_40_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ClaimSurveyFormComponent_div_41_Template, 15, 1, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.damage_description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.odometer_reading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.estimated_repair_cost);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.conclusion);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.recommendation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
        encapsulation: 2
      });
    }
  }
  return ClaimSurveyFormComponent;
})();

/***/ }),

/***/ 3715:
/*!********************************************************************************************!*\
  !*** ./src/app/surveyor/components/issuance-survey-form/issuance-survey-form.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssuanceSurveyFormComponent: () => (/* binding */ IssuanceSurveyFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9417);



let IssuanceSurveyFormComponent = /*#__PURE__*/(() => {
  class IssuanceSurveyFormComponent {
    constructor() {
      this.data = {};
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
      // Init defaults
      this.data.zero_price = this.data.zero_price || 0;
      this.data.market_value = this.data.market_value || 0;
    }
    onDataChange() {
      this.dataChange.emit(this.data);
    }
    onFileChange(event) {
      if (event.target.files) {
        // Convert FileList to Array
        this.data.photos = Array.from(event.target.files);
        this.onDataChange();
      }
    }
    static {
      this.ɵfac = function IssuanceSurveyFormComponent_Factory(t) {
        return new (t || IssuanceSurveyFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IssuanceSurveyFormComponent,
        selectors: [["app-issuance-survey-form"]],
        inputs: {
          data: "data"
        },
        outputs: {
          dataChange: "dataChange"
        },
        decls: 46,
        vars: 7,
        consts: [[1, "space-y-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "placeholder", "e.g. Good", "required", "", 1, "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], ["type", "number", "required", "", 1, "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "gap-6"], ["rows", "3", "required", "", 1, "w-full", "rounded-md", "border-gray-300", "shadow-sm", "focus:border-blue-500", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], [1, "bg-gray-50", "p-4", "rounded-lg", "border", "border-gray-200"], [1, "text-sm", "font-medium", "text-gray-900", "mb-2"], ["type", "file", "multiple", "", 1, "block", "w-full", "text-sm", "text-gray-500", "file:mr-4", "file:py-2", "file:px-4", "file:rounded-full", "file:border-0", "file:text-sm", "file:font-semibold", "file:bg-blue-50", "file:text-blue-700", "hover:file:bg-blue-100", 3, "change"], [1, "mt-2", "text-xs", "text-gray-500"], [1, "bg-yellow-50", "p-4", "rounded-md"], [1, "flex"], [1, "ml-3"], [1, "text-sm", "font-medium", "text-yellow-800"], [1, "mt-2", "text-sm", "text-yellow-700"], [1, "list-disc", "pl-5", "space-y-1"]],
        template: function IssuanceSurveyFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vehicle Condition *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_5_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.vehicle_condition, $event) || (ctx.data.vehicle_condition = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_5_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Odometer Reading (KM) *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_9_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.odometer_reading, $event) || (ctx.data.odometer_reading = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_9_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Market Value *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_13_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.market_value, $event) || (ctx.data.market_value = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_13_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div")(15, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zero Price *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_17_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.zero_price, $event) || (ctx.data.zero_price = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_input_ngModelChange_17_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5)(19, "div")(20, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Conclusion *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_textarea_ngModelChange_22_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.conclusion, $event) || (ctx.data.conclusion = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_textarea_ngModelChange_22_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div")(24, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Recommendation *");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_textarea_ngModelChange_26_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.data.recommendation, $event) || (ctx.data.recommendation = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssuanceSurveyFormComponent_Template_textarea_ngModelChange_26_listener() {
              return ctx.onDataChange();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7)(28, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Photos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IssuanceSurveyFormComponent_Template_input_change_30_listener($event) {
              return ctx.onFileChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "div", 12)(35, "div", 13)(36, "h3", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Checklist");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15)(39, "ul", 16)(40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Check Exterior condition");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Check Interior condition");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Verify WIN number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.vehicle_condition);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.odometer_reading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.market_value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.zero_price);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.conclusion);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.data.recommendation);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data.photos == null ? null : ctx.data.photos.length) || 0, " photos selected. ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
        encapsulation: 2
      });
    }
  }
  return IssuanceSurveyFormComponent;
})();

/***/ }),

/***/ 4331:
/*!**************************************************************************************!*\
  !*** ./src/app/surveyor/components/survey-exclusions/survey-exclusions.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyExclusionsComponent: () => (/* binding */ SurveyExclusionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 3887);
/* harmony import */ var _core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/surveyor.service */ 3371);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);










function SurveyExclusionsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyExclusionsComponent_div_2_Template_app_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "line", 10)(6, "line", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No ", ctx_r1.type === "issuance" ? "exclusions" : "damaged parts", " added yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Add ", ctx_r1.type === "issuance" ? "Exclusion" : "Part", " ");
  }
}
function SurveyExclusionsComponent_div_3_label_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 27)(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SurveyExclusionsComponent_div_3_label_14_Template_input_change_1_listener() {
      const type_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType(i_r4, type_r6.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.isTypeSelected(i_r4, type_r6.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", type_r6.name, " ");
  }
}
function SurveyExclusionsComponent_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No specific types listed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SurveyExclusionsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "circle", 17)(6, "line", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyExclusionsComponent_div_3_Template_button_click_9_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.removeExclusion(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "polyline", 22)(12, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SurveyExclusionsComponent_div_3_label_14_Template, 4, 2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SurveyExclusionsComponent_div_3_div_15_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exclusion_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exclusion_r7.exclusion_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", exclusion_r7.available_types);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", exclusion_r7.available_types.length === 0);
  }
}
function SurveyExclusionsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyExclusionsComponent_div_4_Template_app_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "line", 10)(4, "line", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Add Another ", ctx_r1.type === "issuance" ? "Exclusion" : "Part", " ");
  }
}
function SurveyExclusionsComponent_div_5_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading-spinner", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", true);
  }
}
function SurveyExclusionsComponent_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" No parts found matching \"", ctx_r1.searchQuery, "\" ");
  }
}
function SurveyExclusionsComponent_div_5_div_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyExclusionsComponent_div_5_div_17_button_1_Template_button_click_0_listener() {
      const part_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.addExclusion(part_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const part_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](part_r11.exclusion_name);
  }
}
function SurveyExclusionsComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SurveyExclusionsComponent_div_5_div_17_button_1_Template, 5, 1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredExclusionParts);
  }
}
function SurveyExclusionsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyExclusionsComponent_div_5_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u200B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36)(6, "div", 37)(7, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 39)(10, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SurveyExclusionsComponent_div_5_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyExclusionsComponent_div_5_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSearch($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SurveyExclusionsComponent_div_5_div_15_Template, 2, 1, "div", 45)(16, SurveyExclusionsComponent_div_5_div_16_Template, 2, 1, "div", 46)(17, SurveyExclusionsComponent_div_5_div_17_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 48)(19, "app-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyExclusionsComponent_div_5_Template_app_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Select ", ctx_r1.type === "issuance" ? "Exclusion" : "Damaged", " Part ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.filteredExclusionParts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
let SurveyExclusionsComponent = /*#__PURE__*/(() => {
  class SurveyExclusionsComponent {
    constructor(surveyorService) {
      this.surveyorService = surveyorService;
      this.type = 'issuance';
      this.exclusionsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
      this.allExclusionParts = [];
      this.filteredExclusionParts = [];
      this.selectedExclusions = [];
      this.loading = true;
      this.showSearchModal = false;
      this.searchQuery = '';
    }
    ngOnInit() {
      this.loadExclusions();
    }
    loadExclusions() {
      this.loading = true;
      this.surveyorService.getExclusions().subscribe({
        next: response => {
          // Determine if response is direct array or wrapped
          // New API structure is Array of {exclusion_name, exclusion_types}
          const apiData = Array.isArray(response) ? response : response.data || [];
          this.allExclusionParts = apiData.map(part => ({
            exclusion_name: part.exclusion_name,
            exclusion_types: (part.exclusion_types || []).map(t => ({
              name: t.name,
              code: t.code
            }))
          })).filter(part => part.exclusion_name && part.exclusion_types.length > 0); // Filter out invalid parts
          this.filteredExclusionParts = [...this.allExclusionParts];
          this.loading = false;
        },
        error: err => {
          console.error('Error loading exclusions:', err);
          this.loading = false;
        }
      });
    }
    openSearch() {
      this.showSearchModal = true;
      this.searchQuery = '';
      this.filteredExclusionParts = [...this.allExclusionParts];
    }
    closeSearch() {
      this.showSearchModal = false;
    }
    onSearch(query) {
      this.searchQuery = query;
      if (!query) {
        this.filteredExclusionParts = [...this.allExclusionParts];
      } else {
        const q = query.toLowerCase();
        this.filteredExclusionParts = this.allExclusionParts.filter(part => part.exclusion_name.toLowerCase().includes(q));
      }
    }
    addExclusion(part) {
      // Prevent duplicates
      if (!this.selectedExclusions.find(e => e.exclusion_name === part.exclusion_name)) {
        this.selectedExclusions.push({
          exclusion_name: part.exclusion_name,
          exclusion_type_codes: [],
          available_types: part.exclusion_types
        });
        this.emitChanges();
      }
      this.closeSearch();
    }
    removeExclusion(index) {
      this.selectedExclusions.splice(index, 1);
      this.emitChanges();
    }
    toggleType(exclusionIndex, typeCode) {
      const exclusion = this.selectedExclusions[exclusionIndex];
      const index = exclusion.exclusion_type_codes.indexOf(typeCode);
      if (index > -1) {
        exclusion.exclusion_type_codes.splice(index, 1);
      } else {
        exclusion.exclusion_type_codes.push(typeCode);
      }
      this.emitChanges();
    }
    isTypeSelected(exclusionIndex, typeCode) {
      return this.selectedExclusions[exclusionIndex].exclusion_type_codes.includes(typeCode);
    }
    emitChanges() {
      // Clean result for output (exclude metadata like available_types)
      const result = this.selectedExclusions.map(e => ({
        exclusion_name: e.exclusion_name,
        exclusion_type_codes: e.exclusion_type_codes
      })).filter(e => e.exclusion_type_codes.length > 0); // Only emit entries with selected types? 
      // Or user might want to report just "Front Bumper" without specific type?
      // But backend usually expects type codes if validation enforces it.
      // For now emitting all added parts, even if no type selected yet (user task to select).
      this.exclusionsChanged.emit(result);
    }
    static {
      this.ɵfac = function SurveyExclusionsComponent_Factory(t) {
        return new (t || SurveyExclusionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__.SurveyorService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SurveyExclusionsComponent,
        selectors: [["app-survey-exclusions"]],
        inputs: {
          type: "type"
        },
        outputs: {
          exclusionsChanged: "exclusionsChanged"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
        decls: 6,
        vars: 4,
        consts: [[1, "space-y-6"], [1, "space-y-4"], ["class", "text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg", 4, "ngIf"], ["class", "p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm", 4, "ngFor", "ngForOf"], ["class", "flex justify-end", 4, "ngIf"], ["class", "fixed inset-0 z-50 overflow-y-auto", "aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 4, "ngIf"], [1, "text-center", "py-8", "border-2", "border-dashed", "border-gray-300", "dark:border-gray-700", "rounded-lg"], [1, "text-gray-500", "dark:text-gray-400", "mb-2"], ["variant", "secondary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "mr-2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "p-4", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "shadow-sm"], [1, "flex", "items-center", "justify-between", "mb-3", "border-b", "border-gray-100", "dark:border-gray-700", "pb-2"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-red-100", "dark:bg-red-900", "flex", "items-center", "justify-center", "text-red-600", "dark:text-red-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "4.93", "y1", "4.93", "x2", "19.07", "y2", "19.07"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "p-2", "text-gray-400", "hover:text-red-500", "transition-colors", "rounded-full", "hover:bg-gray-100", "dark:hover:bg-gray-700", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-2", "pl-11"], ["class", "flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors", 4, "ngFor", "ngForOf"], ["class", "pl-11 text-sm text-gray-400 italic", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "cursor-pointer", "p-1.5", "rounded", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors"], ["type", "checkbox", 1, "w-4", "h-4", "text-primary", "rounded", "border-gray-300", "focus:ring-primary", "dark:border-gray-600", "dark:bg-gray-700", 3, "change", "checked"], [1, "text-sm", "text-gray-600", "dark:text-gray-300", "leading-tight"], [1, "pl-11", "text-sm", "text-gray-400", "italic"], [1, "flex", "justify-end"], ["aria-labelledby", "modal-title", "role", "dialog", "aria-modal", "true", 1, "fixed", "inset-0", "z-50", "overflow-y-auto"], [1, "flex", "items-end", "justify-center", "min-h-screen", "pt-4", "px-4", "pb-20", "text-center", "sm:block", "sm:p-0"], [1, "fixed", "inset-0", "bg-gray-500", "bg-opacity-75", "transition-opacity", 3, "click"], ["aria-hidden", "true", 1, "hidden", "sm:inline-block", "sm:align-middle", "sm:h-screen"], [1, "relative", "inline-block", "align-bottom", "bg-white", "dark:bg-gray-800", "rounded-lg", "text-left", "overflow-hidden", "shadow-xl", "transform", "transition-all", "sm:my-8", "sm:align-middle", "sm:max-w-lg", "w-full"], [1, "px-4", "pt-5", "pb-4", "sm:p-6", "sm:pb-4", "border-b", "border-gray-100", "dark:border-gray-700"], ["id", "modal-title", 1, "text-lg", "leading-6", "font-medium", "text-gray-900", "dark:text-white"], [1, "mt-4", "relative"], ["type", "text", "placeholder", "Search parts (e.g. Bumper, Door)...", "autofocus", "", 1, "w-full", "pl-10", "pr-4", "py-2", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["fill-rule", "evenodd", "d", "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", "clip-rule", "evenodd"], [1, "max-h-96", "overflow-y-auto"], ["class", "p-4 text-center", 4, "ngIf"], ["class", "p-8 text-center text-gray-500", 4, "ngIf"], ["class", "divide-y divide-gray-100 dark:divide-gray-700", 4, "ngIf"], [1, "bg-gray-50", "dark:bg-gray-700/50", "px-4", "py-3", "sm:px-6", "sm:flex", "sm:flex-row-reverse", "border-t", "border-gray-100", "dark:border-gray-700"], [1, "p-4", "text-center"], ["message", "Loading...", 3, "loading"], [1, "p-8", "text-center", "text-gray-500"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], ["class", "w-full text-left px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between group", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "text-left", "px-6", "py-3", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", "flex", "items-center", "justify-between", "group", 3, "click"], [1, "text-gray-900", "dark:text-white", "font-medium"], [1, "text-xs", "text-gray-400", "opacity-0", "group-hover:opacity-100", "transition-opacity", "bg-primary/10", "text-primary", "px-2", "py-1", "rounded"]],
        template: function SurveyExclusionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SurveyExclusionsComponent_div_2_Template, 8, 2, "div", 2)(3, SurveyExclusionsComponent_div_3_Template, 16, 3, "div", 3)(4, SurveyExclusionsComponent_div_4_Template, 6, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SurveyExclusionsComponent_div_5_Template, 21, 5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedExclusions.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedExclusions);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedExclusions.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSearchModal);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
      });
    }
  }
  return SurveyExclusionsComponent;
})();

/***/ }),

/***/ 8899:
/*!******************************************************************************!*\
  !*** ./src/app/surveyor/components/survey-wizard/survey-wizard.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyWizardComponent: () => (/* binding */ SurveyWizardComponent)
/* harmony export */ });
/* harmony import */ var _home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/surveyor.service */ 3371);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/crm.service */ 5740);
/* harmony import */ var _core_services_claim_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/claim.service */ 4644);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _survey_exclusions_survey_exclusions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../survey-exclusions/survey-exclusions.component */ 4331);
/* harmony import */ var _issuance_survey_form_issuance_survey_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../issuance-survey-form/issuance-survey-form.component */ 3715);
/* harmony import */ var _claim_survey_form_claim_survey_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../claim-survey-form/claim-survey-form.component */ 3655);
/* harmony import */ var _add_estimation_item_modal_add_estimation_item_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../add-estimation-item-modal/add-estimation-item-modal.component */ 2847);














const _c0 = (a0, a1, a2) => ({
  "bg-primary text-white": a0,
  "bg-green-500 text-white": a1,
  "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400": a2
});
const _c1 = (a0, a1) => ({
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200": a0,
  "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200": a1
});
const _c2 = (a0, a1) => ({
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200": a0,
  "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200": a1
});
const _c3 = a0 => ({
  "opacity-50 cursor-not-allowed": a0
});
function SurveyWizardComponent_div_0_div_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](step_r1);
  }
}
function SurveyWizardComponent_div_0_div_15__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "polyline", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_div_0_div_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 35);
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.currentStep > step_r1 ? "bg-green-500" : "bg-gray-200 dark:bg-gray-700");
  }
}
function SurveyWizardComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SurveyWizardComponent_div_0_div_15_span_3_Template, 2, 1, "span", 27)(4, SurveyWizardComponent_div_0_div_15__svg_svg_4_Template, 2, 0, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 29)(6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, SurveyWizardComponent_div_0_div_15_div_10_Template, 1, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](6, _c0, ctx_r1.currentStep === step_r1, ctx_r1.currentStep > step_r1, ctx_r1.currentStep < step_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentStep <= step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentStep > step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.stepTitles[i_r3], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.stepSubtitles[i_r3], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", i_r3 < ctx_r1.totalSteps - 1);
  }
}
function SurveyWizardComponent_div_0_div_16_div_12_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.customer_street);
  }
}
function SurveyWizardComponent_div_0_div_16_div_12_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.address || ctx_r1.survey.location);
  }
}
function SurveyWizardComponent_div_0_div_16_div_12_div_90_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Fuel Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.survey.risk_info.vehicle_fuel_type_name, " ");
  }
}
function SurveyWizardComponent_div_0_div_16_div_12_div_90_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.risk_info.vehicle_usage_name);
  }
}
function SurveyWizardComponent_div_0_div_16_div_12_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 88)(1, "h3", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 89)(4, "circle", 90)(5, "circle", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Vehicle Specifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 92)(8, "div")(9, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div")(14, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Body Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div")(19, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Vehicle State");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div")(24, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Motor Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, SurveyWizardComponent_div_0_div_16_div_12_div_90_div_28_Template, 5, 1, "div", 27)(29, SurveyWizardComponent_div_0_div_16_div_12_div_90_div_29_Template, 5, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.survey.risk_info.vehicle_color_name || ctx_r1.survey.risk_info.vehicle_color || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.risk_info.vehicle_body_type_name || ctx_r1.survey.risk_info.vehicle_body_type || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.risk_info.vehicle_state || "Used");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.risk_info.vehicle_motor_number || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.survey.risk_info.vehicle_fuel_type_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.survey.risk_info.vehicle_usage_name);
  }
}
function SurveyWizardComponent_div_0_div_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "div")(3, "div", 52)(4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 55)(7, "path", 56)(8, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 59)(12, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 61)(21, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 63)(24, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 66)(30, "div")(31, "h3", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "svg", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "path", 69)(34, "circle", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 71)(37, "div", 72)(38, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 75)(43, "div")(44, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div")(49, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, SurveyWizardComponent_div_0_div_16_div_12_div_53_Template, 5, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div")(55, "h3", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "svg", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "circle", 78)(58, "line", 79)(59, "line", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " Task Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 71)(62, "div", 75)(63, "div")(64, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Survey Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div")(69, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "Current Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 75)(76, "div")(77, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div")(84, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](88, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](89, SurveyWizardComponent_div_0_div_16_div_12_div_89_Template, 5, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](90, SurveyWizardComponent_div_0_div_16_div_12_div_90_Template, 30, 6, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", (ctx_r1.survey.risk_info == null ? null : ctx_r1.survey.risk_info.vehicle_make_name) || "Vehicle", " ", ctx_r1.survey.risk_info == null ? null : ctx_r1.survey.risk_info.vehicle_model_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx_r1.survey.risk_info == null ? null : ctx_r1.survey.risk_info.vehicle_plate_number) || "No Plate", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.risk_info == null ? null : ctx_r1.survey.risk_info.vehicle_manufacture_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Chassis: ", (ctx_r1.survey.risk_info == null ? null : ctx_r1.survey.risk_info.vehicle_chassis_number) || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](26, _c1, ctx_r1.survey.survey_type === "issuance", ctx_r1.survey.survey_type === "claim"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.survey.survey_type, " Survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](28, 20, ctx_r1.survey.assign_date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.survey.customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.customer_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", ctx_r1.survey.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.survey.customer_email || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.survey.customer_street);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.survey_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.survey.product_name || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.line_of_business);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](88, 23, ctx_r1.survey.due_date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.survey.address || ctx_r1.survey.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.survey.risk_info);
  }
}
function SurveyWizardComponent_div_0_div_16_div_13_div_14_app_loading_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loading-spinner", 102);
  }
}
function SurveyWizardComponent_div_0_div_16_div_13_div_14_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 105)(2, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, item_r6.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r6.value, " ");
  }
}
function SurveyWizardComponent_div_0_div_16_div_13_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveyWizardComponent_div_0_div_16_div_13_div_14_div_2_ng_container_2_Template, 7, 4, "ng-container", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.formattedDetails);
  }
}
function SurveyWizardComponent_div_0_div_16_div_13_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No additional details available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_div_0_div_16_div_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveyWizardComponent_div_0_div_16_div_13_div_14_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 100)(2, SurveyWizardComponent_div_0_div_16_div_13_div_14_div_2_Template, 3, 1, "div", 27)(3, SurveyWizardComponent_div_0_div_16_div_13_div_14_div_3_Template, 2, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.loadingDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.loadingDetails && ctx_r1.additionalDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.loadingDetails && !ctx_r1.additionalDetails);
  }
}
function SurveyWizardComponent_div_0_div_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_16_div_13_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleSection("additional"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 39)(3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "path", 42)(6, "polyline", 43)(7, "line", 95)(8, "line", 96)(9, "polyline", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "polyline", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, SurveyWizardComponent_div_0_div_16_div_13_div_14_Template, 4, 3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.isIssuanceSurvey ? "Opportunity Details" : "Claim Details", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate-180", ctx_r1.detailsExpanded["additional"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.detailsExpanded["additional"]);
  }
}
function SurveyWizardComponent_div_0_div_16_div_14_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i-lucide", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r8.condition_name || item_r8.name || item_r8);
  }
}
function SurveyWizardComponent_div_0_div_16_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 113)(1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveyWizardComponent_div_0_div_16_div_14_div_8_div_2_Template, 4, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.conditionsList);
  }
}
function SurveyWizardComponent_div_0_div_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 109)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_16_div_14_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleSection("conditions"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 39)(3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i-lucide", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Opportunity Conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i-lucide", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SurveyWizardComponent_div_0_div_16_div_14_div_8_Template, 3, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate-180", ctx_r1.detailsExpanded["conditions"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.detailsExpanded["conditions"]);
  }
}
function SurveyWizardComponent_div_0_div_16_div_15_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i-lucide", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r10.name || item_r10.display_name || item_r10);
  }
}
function SurveyWizardComponent_div_0_div_16_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 113)(1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveyWizardComponent_div_0_div_16_div_15_div_8_div_2_Template, 4, 1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.deductiblesList);
  }
}
function SurveyWizardComponent_div_0_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 109)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_16_div_15_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleSection("deductibles"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 39)(3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i-lucide", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Opportunity Deductibles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i-lucide", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SurveyWizardComponent_div_0_div_16_div_15_div_8_Template, 3, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate-180", ctx_r1.detailsExpanded["deductibles"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.detailsExpanded["deductibles"]);
  }
}
function SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 125)(1, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_span_3_Template, 2, 0, "span", 127)(4, SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_span_4_Template, 2, 0, "span", 128)(5, SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_span_5_Template, 2, 0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](doc_r12.document_name || doc_r12.name || doc_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", doc_r12.status === "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", doc_r12.status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !doc_r12.status);
  }
}
function SurveyWizardComponent_div_0_div_16_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 113)(1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveyWizardComponent_div_0_div_16_div_16_div_8_div_2_Template, 6, 4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.documentsList);
  }
}
function SurveyWizardComponent_div_0_div_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 109)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_16_div_16_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleSection("documents"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 39)(3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i-lucide", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Opportunity Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "i-lucide", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SurveyWizardComponent_div_0_div_16_div_16_div_8_Template, 3, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate-180", ctx_r1.detailsExpanded["documents"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.detailsExpanded["documents"]);
  }
}
function SurveyWizardComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_16_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleSection("survey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 39)(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 42)(7, "polyline", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Survey Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "polyline", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, SurveyWizardComponent_div_0_div_16_div_12_Template, 91, 29, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SurveyWizardComponent_div_0_div_16_div_13_Template, 15, 4, "div", 48)(14, SurveyWizardComponent_div_0_div_16_div_14_Template, 9, 3, "div", 49)(15, SurveyWizardComponent_div_0_div_16_div_15_Template, 9, 3, "div", 49)(16, SurveyWizardComponent_div_0_div_16_div_16_Template, 9, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate-180", ctx_r1.detailsExpanded["survey"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.detailsExpanded["survey"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.survey.lead_id || ctx_r1.survey.claim_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.conditionsList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.deductiblesList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.documentsList.length > 0);
  }
}
function SurveyWizardComponent_div_0_div_17_app_survey_exclusions_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-survey-exclusions", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("exclusionsChanged", function SurveyWizardComponent_div_0_div_17_app_survey_exclusions_3_Template_app_survey_exclusions_exclusionsChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onExclusionsChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "issuance");
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_app_loading_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loading-spinner", 139);
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 170)(1, "div", 171)(2, "div")(3, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div")(8, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Claim ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div")(13, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div")(18, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r1.estimationDetails.estimation_state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.estimationDetails.claim_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.estimationDetails.current_version ? "Current" : "Old");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.estimationDetails.active ? "Yes" : "No");
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r15.spare_part_type);
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getEstimationTypeName(item_r15.estimation_item_type_id) || item_r15.estimation_item_type || "N/A", " ");
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r15.estimation_item_type || "N/A", " ");
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 185)(1, "td", 186)(2, "div", 25)(3, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 188)(6, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_div_8_Template, 2, 1, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td", 186)(10, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_ng_container_11_Template, 2, 1, "ng-container", 27)(12, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_ng_container_12_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td", 192)(14, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", i_r16 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", item_r15.estimation_item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r15.estimation_item_description || item_r15.part_name || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r15.spare_part_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.estimationItemTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.estimationItemTypes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](18, _c2, !item_r15.estimation_item_state || item_r15.estimation_item_state === "Accepted", item_r15.estimation_item_state === "Rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r15.estimation_item_state || "Accepted", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r15.quantity || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 12, item_r15.estimation_unit_amount || item_r15.unit_price || 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" -", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 14, item_r15.depreciation || 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 16, item_r15.estimation_amount || item_r15.total || 0), " ");
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 174)(1, "table", 175)(2, "thead", 176)(3, "tr")(4, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " State");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "th", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "th", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Deprec.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "tbody", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_tr_19_Template, 27, 21, "tr", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "tfoot", 182)(21, "tr")(22, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Total Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.estimationItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 2, ctx_r1.estimationDetails.total_estimation || ctx_r1.estimationDetails.total_amount || 0), " ");
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 198)(1, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h3", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "No items added");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Get started by creating a new estimation item.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 204)(9, "button", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_17_div_4_div_2_div_63_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openAddItemModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "svg", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "path", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Add First Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 140)(2, "div", 141)(3, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Total Estimation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 145)(12, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Spare Parts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 147)(20, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Labor Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 148)(26, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Difference / Adjustment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](33, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 150)(35, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_17_div_4_div_2_Template_div_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleEstimationSection("general"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 152)(37, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "svg", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "path", 42)(40, "path", 155)(41, "path", 156)(42, "path", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div")(44, "h4", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](48, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "svg", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "polyline", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_51_Template, 22, 4, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 161)(53, "div", 162)(54, "h4", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " Estimation Lines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_div_0_div_17_div_4_div_2_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openAddItemModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "svg", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "path", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, " Add New Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_62_Template, 27, 4, "div", 168)(63, SurveyWizardComponent_div_0_div_17_div_4_div_2_div_63_Template, 13, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 18, ctx_r1.estimationDetails.total_estimation));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Taxed: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 20, ctx_r1.estimationDetails.total_estimation_taxed), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 22, ctx_r1.estimationDetails.total_spare_parts));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", (ctx_r1.estimationItems == null ? null : ctx_r1.estimationItems.length) || 0, " Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 24, ctx_r1.estimationDetails.total_labor));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.estimationDetails.total_difference < 0 ? "border-red-500" : "border-green-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.estimationDetails.total_difference < 0 ? "text-red-500" : "text-green-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 26, ctx_r1.estimationDetails.total_difference), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Adj: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](33, 28, ctx_r1.estimationDetails.total_adjustment), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Estimation #", ctx_r1.estimationDetails.estimation_number || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](48, 30, ctx_r1.estimationDetails.estimation_date, "mediumDate"), " \u2022 Work Order: ", ctx_r1.estimationDetails.work_order_number || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("rotate-180", ctx_r1.estimationSections["general"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.estimationSections["general"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx_r1.estimationItems == null ? null : ctx_r1.estimationItems.length) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.estimationItems && ctx_r1.estimationItems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.estimationItems || ctx_r1.estimationItems.length === 0);
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 207)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No estimation details found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function SurveyWizardComponent_div_0_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveyWizardComponent_div_0_div_17_div_4_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 137)(2, SurveyWizardComponent_div_0_div_17_div_4_div_2_Template, 64, 33, "div", 27)(3, SurveyWizardComponent_div_0_div_17_div_4_div_3_Template, 3, 0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.loadingEstimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.loadingEstimation && ctx_r1.estimationDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.loadingEstimation && !ctx_r1.estimationDetails);
  }
}
function SurveyWizardComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 133)(1, "h2", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SurveyWizardComponent_div_0_div_17_app_survey_exclusions_3_Template, 1, 1, "app-survey-exclusions", 135)(4, SurveyWizardComponent_div_0_div_17_div_4_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.isIssuanceSurvey ? "Vehicle Exclusions" : "Estimation Details", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isIssuanceSurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isClaimSurvey);
  }
}
function SurveyWizardComponent_div_0_div_18_div_4_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 226)(1, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 229)(4, "polyline", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](f_r20.name);
  }
}
function SurveyWizardComponent_div_0_div_18_div_4_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveyWizardComponent_div_0_div_18_div_4_div_22_div_1_Template, 9, 1, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", doc_r21.files);
  }
}
function SurveyWizardComponent_div_0_div_18_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No files selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_div_0_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 72)(1, "div", 209)(2, "div", 210)(3, "div", 39)(4, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 42)(7, "polyline", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div")(9, "h3", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 214)(14, "label", 215)(15, "span", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "svg", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "path", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 219)(19, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SurveyWizardComponent_div_0_div_18_div_4_Template_input_change_21_listener($event) {
      const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onDocumentFileSelected($event, i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, SurveyWizardComponent_div_0_div_18_div_4_div_22_Template, 2, 1, "div", 222)(23, SurveyWizardComponent_div_0_div_18_div_4_div_23_Template, 2, 0, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doc_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](doc_r21.document_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](doc_r21.document_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", doc_r21.files && doc_r21.files.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(doc_r21.files == null ? null : doc_r21.files.length));
  }
}
function SurveyWizardComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 133)(1, "h2", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Survey Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, SurveyWizardComponent_div_0_div_18_div_4_Template, 24, 4, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.formData.survey_documents);
  }
}
function SurveyWizardComponent_div_0_div_19_app_issuance_survey_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-issuance-survey-form", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("dataChange", function SurveyWizardComponent_div_0_div_19_app_issuance_survey_form_3_Template_app_issuance_survey_form_dataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.formData, $event) || (ctx_r1.formData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dataChange", function SurveyWizardComponent_div_0_div_19_app_issuance_survey_form_3_Template_app_issuance_survey_form_dataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onDataChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("data", ctx_r1.formData);
  }
}
function SurveyWizardComponent_div_0_div_19_app_claim_survey_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-claim-survey-form", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("dataChange", function SurveyWizardComponent_div_0_div_19_app_claim_survey_form_4_Template_app_claim_survey_form_dataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r1.formData, $event) || (ctx_r1.formData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("dataChange", function SurveyWizardComponent_div_0_div_19_app_claim_survey_form_4_Template_app_claim_survey_form_dataChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.onDataChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("data", ctx_r1.formData);
  }
}
function SurveyWizardComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 133)(1, "h2", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SurveyWizardComponent_div_0_div_19_app_issuance_survey_form_3_Template, 1, 1, "app-issuance-survey-form", 234)(4, SurveyWizardComponent_div_0_div_19_app_claim_survey_form_4_Template, 1, 1, "app-claim-survey-form", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.isIssuanceSurvey ? "Vehicle Inspection Assessment" : "Damage Assessment", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isIssuanceSurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isClaimSurvey);
  }
}
function SurveyWizardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Complete Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 12)(14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, SurveyWizardComponent_div_0_div_15_Template, 11, 10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, SurveyWizardComponent_div_0_div_16_Template, 17, 7, "div", 22)(17, SurveyWizardComponent_div_0_div_17_Template, 5, 3, "div", 23)(18, SurveyWizardComponent_div_0_div_18_Template, 5, 1, "div", 23)(19, SurveyWizardComponent_div_0_div_19_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.survey_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.isIssuanceSurvey ? "Vehicle Issuance Inspection" : "Claim Damage Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.stepsArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentStep === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentStep === 4);
  }
}
function SurveyWizardComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Conclusion");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.conclusion, " ");
  }
}
function SurveyWizardComponent_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Recommendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.formData.recommendation, " ");
  }
}
function SurveyWizardComponent_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Damage Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 75)(4, "div", 259)(5, "label", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Est. Repair Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 262)(11, "label", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Damaged Parts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 2, ctx_r1.formData.estimated_repair_cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r1.formData.survey_exclusions == null ? null : ctx_r1.formData.survey_exclusions.length) || 0);
  }
}
function SurveyWizardComponent_div_1_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 254)(1, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doc_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](doc_r24.document_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-green-600", (doc_r24.files == null ? null : doc_r24.files.length) > 0)("text-gray-400", !(doc_r24.files == null ? null : doc_r24.files.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (doc_r24.files == null ? null : doc_r24.files.length) || 0, " files ");
  }
}
function SurveyWizardComponent_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Valuation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 267)(4, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Market Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 1, ctx_r1.formData.market_value));
  }
}
function SurveyWizardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 236)(1, "h2", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Review & Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 237)(4, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "svg", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 240)(8, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "svg", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "circle", 78)(11, "path", 242)(12, "path", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div")(14, "h3", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Ready to Submit?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "p", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Please carefully review the summary below. Once submitted, this survey will be processed by the claims department. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 246)(19, "div", 247)(20, "h3", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Survey Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 250)(25, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, SurveyWizardComponent_div_1_div_26_Template, 5, 1, "div", 27)(27, SurveyWizardComponent_div_1_div_27_Template, 5, 1, "div", 27)(28, SurveyWizardComponent_div_1_div_28_Template, 15, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 251)(30, "div")(31, "h4", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "ul", 253)(34, "li", 254)(35, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Survey Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, SurveyWizardComponent_div_1_li_39_Template, 5, 6, "li", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, SurveyWizardComponent_div_1_div_40_Template, 9, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 257)(42, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "By clicking Submit, you confirm that all information provided is accurate and complete.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.survey.survey_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.formData.conclusion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.formData.recommendation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isClaimSurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((ctx_r1.formData.photos == null ? null : ctx_r1.formData.photos.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.formData.survey_documents);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isIssuanceSurvey || ctx_r1.formData.market_value);
  }
}
function SurveyWizardComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.previousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "svg", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "path", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Next Step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "svg", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r1.canProceedToNextStep)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](2, _c3, !ctx_r1.canProceedToNextStep));
  }
}
function SurveyWizardComponent_button_9__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "svg", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "polyline", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_button_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Submitting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_button_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Submit Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyWizardComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyWizardComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.submitSurvey());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveyWizardComponent_button_9__svg_svg_1_Template, 2, 0, "svg", 276)(2, SurveyWizardComponent_button_9_span_2_Template, 2, 0, "span", 27)(3, SurveyWizardComponent_button_9_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function SurveyWizardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading-spinner", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", true);
  }
}
let SurveyWizardComponent = /*#__PURE__*/(() => {
  class SurveyWizardComponent {
    get formattedDetails() {
      if (!this.additionalDetails) return [];
      return Object.keys(this.additionalDetails).filter(key => !this.excludedKeys.includes(key)).map(key => ({
        key: key.replace(/_/g, ' '),
        value: this.formatValue(this.additionalDetails[key])
      })).filter(item => item.value && item.value !== 'N/A' && item.value !== '[]' && item.value !== '{}');
    }
    formatValue(value) {
      if (value === null || value === undefined || value === '') return 'N/A';
      if (typeof value === 'boolean') return value ? 'Yes' : 'No';
      if (typeof value === 'string') {
        try {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed)) {
            if (parsed.length === 0) return 'N/A';
            return parsed.map(item => {
              if (typeof item === 'object') {
                return item.condition_name || item.name || item.display_name || JSON.stringify(item);
              }
              return item;
            }).join(', ');
          }
          if (typeof parsed === 'object') {
            return JSON.stringify(parsed);
          }
        } catch (e) {
          return value;
        }
        return value;
      }
      if (Array.isArray(value)) {
        if (value.length === 0) return 'N/A';
        return value.map(item => {
          if (typeof item === 'object') {
            return item.condition_name || item.name || item.display_name || JSON.stringify(item);
          }
          return item;
        }).join(', ');
      }
      if (typeof value === 'object') {
        const keys = Object.keys(value);
        if (keys.length === 0) return 'N/A';
        return JSON.stringify(value);
      }
      return String(value);
    }
    parseListField(key) {
      const value = this.additionalDetails?.[key];
      if (!value) return [];
      if (Array.isArray(value)) return value;
      if (typeof value === 'string') {
        try {
          const parsed = JSON.parse(value);
          return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
          return [];
        }
      }
      return [];
    }
    get conditionsList() {
      return this.parseListField('opportunity_conditions');
    }
    get deductiblesList() {
      return this.parseListField('opportunity_deductibles');
    }
    get documentsList() {
      return this.parseListField('opportunity_documents');
    }
    get isIssuanceSurvey() {
      return this.survey && (this.survey.survey_type === 'issuance' || this.survey.survey_type === 'Underwriting');
    }
    get isClaimSurvey() {
      // Include 'Before Repair' as a claim survey type
      return this.survey && (this.survey.survey_type === 'claim' || this.survey.survey_type === 'Before Repair' || this.survey.survey_type === 'after_repair');
    }
    constructor(surveyorService, notificationService, router, route, crmService, claimService) {
      this.surveyorService = surveyorService;
      this.notificationService = notificationService;
      this.router = router;
      this.route = route;
      this.crmService = crmService;
      this.claimService = claimService;
      this.currentStep = 1;
      this.totalSteps = 3;
      this.stepTitles = ['Review', 'Input Data', 'Submit'];
      this.stepSubtitles = ['Survey Details', 'Confirmation', 'Confirmation'];
      this.loading = false;
      this.survey = null;
      // Additional Details for Step 1
      this.additionalDetails = null;
      this.loadingDetails = false;
      this.detailsExpanded = {
        'survey': true,
        'additional': false,
        'conditions': false,
        'deductibles': false,
        'documents': false,
        'estimation': true
      };
      // Estimation Data
      this.estimationDetails = null;
      this.estimationItems = [];
      this.estimationItemTypes = []; // Added
      this.loadingEstimation = false;
      // Collapsible Sections for Estimation Header
      this.estimationSections = {
        'general': true,
        'financials': false,
        'adjustments': false
      };
      // Keys to exclude from the Additional Details view
      this.excludedKeys = ['id', 'image', 'write_date', 'create_date', 'write_uid', 'create_uid', '__last_update', 'display_name', 'partner_id', 'contact_name', 'email_from', 'phone', 'mobile', 'street', 'street2', 'city', 'state_id', 'country_id', 'zip', 'website', 'function', 'title', 'type', 'active', 'probability', 'team_id', 'user_id', 'company_id', 'lead_id', 'claim_id', 'opportunity_risks', 'risk_ids', 'risks', 'opportunity_exclusions', 'exclusion_ids', 'exclusions', 'opportunity_benefits', 'benefit_ids', 'benefits', 'opportunity_share_commission', 'share_commission', 'opportunity_application_form', 'application_form', 'opportunity_proposal', 'proposal_ids', 'proposals', 'proposal', 'opportunity_surveys', 'survey_ids', 'surveys', 'opportunity_conditions', 'opportunity_deductibles', 'opportunity_documents',
      // Additional user-requested exclusions
      'opportunity_number', 'name', 'email_from', 'team_id', 'product_name', 'product_id', 'issuing_type_sequence_number', 'broker_branches', 'customer_branches', 'lead_source_name', 'activity_sequence_number'];
      // Form data for step 2
      this.formData = {
        // Common fields
        conclusion: '',
        recommendation: '',
        photos: [],
        survey_documents: [],
        // Issuance-specific fields
        vehicle_condition: '',
        odometer_reading: '',
        exterior_condition: '',
        interior_condition: '',
        has_spare_tire: false,
        has_tools: false,
        has_fire_extinguisher: false,
        market_value: '',
        // Claim-specific fields
        damage_description: '',
        damage_location: '',
        damage_severity: '',
        estimated_repair_cost: '',
        cause_of_damage: '',
        liability_assessment: '',
        salvage_value: '',
        // Exclusions
        survey_exclusions: []
      };
      // Modal State
      this.showAddItemModal = false;
    }
    ngOnInit() {
      this.fetchEstimationItemTypes();
      if (!this.surveyId) {
        this.route.params.subscribe(params => {
          if (params['id']) {
            this.surveyId = params['id'];
            this.loadSurveyData();
          }
        });
      } else {
        this.loadSurveyData();
      }
    }
    fetchEstimationItemTypes() {
      this.claimService.getEstimationItemTypes().subscribe({
        next: response => {
          // Ensure we get an array
          if (Array.isArray(response)) {
            this.estimationItemTypes = response;
          } else if (response && Array.isArray(response.data)) {
            this.estimationItemTypes = response.data;
          } else {
            console.warn('Unexpected estimation item types format:', response);
            this.estimationItemTypes = [];
          }
        },
        error: err => console.error('Error fetching estimation item types:', err)
      });
    }
    toggleEstimationSection(section) {
      this.estimationSections[section] = !this.estimationSections[section];
    }
    // Modal Handlers
    openAddItemModal() {
      console.log('openAddItemModal called. Current showAddItemModal:', this.showAddItemModal);
      this.showAddItemModal = true;
      console.log('New showAddItemModal:', this.showAddItemModal);
    }
    closeAddItemModal() {
      this.showAddItemModal = false;
    }
    onItemAdded(event) {
      const newItem = {
        ...event.item,
        // id: Math.floor(Math.random() * 1000), // Remove mock ID
        estimation_amount: event.item.quantity * event.item.estimation_unit_amount - (event.item.depreciation || 0),
        estimation_item_type: this.getEstimationTypeName(event.item.estimation_item_type_id)
      };
      // Prepare payload for API
      const payload = {
        survey_id: Number(this.surveyId),
        estimation_lines: [newItem]
      };
      this.loading = true; // Show global loading or handle local loading state
      this.surveyorService.createSurveyEstimationLines(payload).subscribe({
        next: response => {
          this.loading = false;
          // Check if response contains JSON-RPC style error (sometimes successful HTTP 200 contains app error)
          if (response.result && response.result.error) {
            this.notificationService.error(response.result.error);
            return; // Stop here, do not close modal or add item
          }
          // If success
          this.notificationService.success('Item added successfully');
          // Add to local list to update UI immediately
          if (!this.estimationItems) {
            this.estimationItems = [];
          }
          // We might want to use the ID returned from backend if available, 
          // but for now pushing the item with calculated fields is fine for display until refresh
          this.estimationItems.push({
            ...newItem,
            isNew: false // It's now saved on backend
          });
          // Recalculate total
          const total = this.estimationItems.reduce((sum, item) => sum + (item.estimation_amount || 0), 0);
          this.formData.estimated_repair_cost = total;
          if (this.estimationDetails) {
            this.estimationDetails.total_estimation = total;
            this.estimationDetails.total_amount = total;
          }
          if (event.action === 'close') {
            this.closeAddItemModal();
          } else {
            // If 'Add & New', likely want to reset form in modal. 
            // The modal typically handles its own form reset on submit if designed so, 
            // or we might need to trigger it. Assuming modal handles it for now.
          }
        },
        error: err => {
          this.loading = false;
          console.error('Error adding estimation item:', err);
          // Handle JSON-RPC error format if it comes in error object
          if (err.error && err.error.result && err.error.result.error) {
            this.notificationService.error(err.error.result.error);
          } else if (err.error && err.error.error) {
            this.notificationService.error(err.error.error);
          } else {
            this.notificationService.error('Failed to add item. Please try again.');
          }
        }
      });
    }
    getEstimationTypeName(id) {
      if (!id || !this.estimationItemTypes || !Array.isArray(this.estimationItemTypes)) return '';
      const type = this.estimationItemTypes.find(t => t.id == id);
      return type ? type.name : '';
    }
    loadSurveyData() {
      this.loading = true;
      this.surveyorService.getSurveyDetails(this.surveyId).subscribe({
        next: response => {
          this.survey = response.data || response;
          // Initialize survey_documents if available
          if (this.survey.survey_documents) {
            this.formData.survey_documents = this.survey.survey_documents.map(doc => ({
              ...doc,
              files: []
            }));
          }
          // Update total steps based on survey type
          if (this.isIssuanceSurvey) {
            this.totalSteps = 5;
            this.stepTitles = ['Review', 'Exclusions', 'Documents', 'Technical View', 'Submit'];
            this.stepSubtitles = ['Survey Details', 'Vehicle Exclusions', 'Upload Documents', 'Technical View', 'Review & Submit'];
          } else if (this.isClaimSurvey) {
            this.totalSteps = 5;
            this.stepTitles = ['Review', 'Estimation Details', 'Documents', 'Technical View', 'Submit'];
            this.stepSubtitles = ['Survey Details', 'Estimation & Items', 'Upload Documents', 'Technical View', 'Review & Submit'];
          }
          // Fetch additional details if opportunity or claim
          if (this.survey.lead_id || this.survey.claim_id) {
            this.fetchAdditionalDetails();
          }
          this.loading = false;
        },
        error: err => {
          console.error('Error loading survey:', err);
          this.notificationService.error('Failed to load survey details');
          this.loading = false;
        }
      });
    }
    fetchAdditionalDetails() {
      this.loadingDetails = true;
      if (this.survey.lead_id) {
        // Fetch opportunity details
        this.crmService.getOpportunity(this.survey.lead_id).subscribe({
          next: response => {
            this.additionalDetails = response.data || response;
            this.loadingDetails = false;
          },
          error: err => {
            console.error('Error fetching opportunity details:', err);
            this.loadingDetails = false;
          }
        });
      } else if (this.survey.claim_id) {
        // Fetch claim details
        this.claimService.getClaim(this.survey.claim_id).subscribe({
          next: response => {
            this.additionalDetails = response.data || response;
            this.loadingDetails = false;
            console.log('Claim details loaded:', this.additionalDetails);
            // Check for estimation in claim_estimations array
            if (this.additionalDetails?.claim_estimations && Array.isArray(this.additionalDetails.claim_estimations) && this.additionalDetails.claim_estimations.length > 0) {
              const estimation = this.additionalDetails.claim_estimations[0];
              console.log('Found estimation in claim_estimations:', estimation);
              if (estimation.id) {
                console.log('Fetching estimation data for ID:', estimation.id);
                this.fetchEstimationData(estimation.id);
              }
            } else if (this.additionalDetails?.estimation_id) {
              // Fallback to estimation_id field if it exists
              console.log('Fetching estimation data for ID:', this.additionalDetails.estimation_id);
              this.fetchEstimationData(this.additionalDetails.estimation_id);
            } else {
              console.warn('No estimation found in claim details');
            }
          },
          error: err => {
            console.error('Error fetching claim details:', err);
            this.loadingDetails = false;
          }
        });
      }
    }
    fetchEstimationData(estimationId, forceRefresh = false) {
      // Prevent duplicate calls if already loading or data exists (unless forced)
      if (this.loadingEstimation || !forceRefresh && this.estimationDetails && this.estimationItems.length > 0) {
        console.log('Skipping duplicate fetch. Loading:', this.loadingEstimation, 'Data exists:', !!this.estimationDetails, 'Force:', forceRefresh);
        return;
      }
      this.loadingEstimation = true;
      console.log('Starting fetchEstimationData for ID:', estimationId);
      // Fetch estimation details (auth handled by AuthInterceptor)
      this.claimService.getEstimationDetails(estimationId).subscribe({
        next: response => {
          console.log('Raw estimation details response:', response);
          this.estimationDetails = response.data || response;
          // If response is the object itself (not wrapped in data)
          if (!response.data && response.id) {
            this.estimationDetails = response;
          }
          // Populate estimation items from the details response directly
          if (this.estimationDetails.estimation_lines) {
            // Filter out empty/mock lines (where description and part name are missing)
            this.estimationItems = this.estimationDetails.estimation_lines.filter(item => item.estimation_item_description || item.part_name);
            console.log('Set estimationItems from details:', this.estimationItems);
          }
          // Sync estimated_repair_cost with the total
          if (this.estimationDetails.total_estimation || this.estimationDetails.total_amount) {
            this.formData.estimated_repair_cost = this.estimationDetails.total_estimation || this.estimationDetails.total_amount;
            console.log('Synced estimated_repair_cost:', this.formData.estimated_repair_cost);
          }
          console.log('Set estimationDetails to:', this.estimationDetails);
          this.loadingEstimation = false; // Set loading to false here to ensure UI updates even if items fail
        },
        error: err => {
          console.error('Error fetching estimation details:', err);
          this.loadingEstimation = false;
        }
      });
    }
    toggleSection(section) {
      this.detailsExpanded[section] = !this.detailsExpanded[section];
      // Auto-fetch additional details when expanding
      if (section === 'additional' && this.detailsExpanded[section] && !this.additionalDetails && !this.loadingDetails) {
        this.fetchAdditionalDetails();
      }
    }
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        // If entering Step 2 (Estimation Details) for Claim Survey, force refresh estimation data
        if (this.isClaimSurvey && this.currentStep === 2) {
          // Determine estimation ID from details or additional details
          let estId = this.estimationDetails?.id;
          if (!estId && this.additionalDetails) {
            if (this.additionalDetails.claim_estimations && this.additionalDetails.claim_estimations.length > 0) {
              estId = this.additionalDetails.claim_estimations[0].id;
            } else if (this.additionalDetails.estimation_id) {
              estId = this.additionalDetails.estimation_id;
            }
          }
          if (estId) {
            console.log('Forcing refresh of estimation data for ID:', estId);
            this.fetchEstimationData(estId, true); // Force refresh
          }
        }
      }
    }
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    }
    goToStep(step) {
      if (step >= 1 && step <= this.totalSteps) {
        this.currentStep = step;
      }
    }
    onFilesSelected(eventOrFiles) {
      if (eventOrFiles instanceof Event || eventOrFiles.target && eventOrFiles.target.files) {
        const files = Array.from(eventOrFiles.target.files || []);
        this.formData.photos = files;
      } else if (Array.isArray(eventOrFiles)) {
        this.formData.photos = eventOrFiles;
      }
    }
    onExclusionsChanged(exclusions) {
      this.formData.survey_exclusions = exclusions;
    }
    onDataChanged(data) {
      this.formData = {
        ...this.formData,
        ...data
      };
    }
    onDocumentFileSelected(event, index) {
      const files = Array.from(event.target.files || []);
      if (this.formData.survey_documents[index]) {
        this.formData.survey_documents[index].files = files;
      }
    }
    submitSurvey() {
      var _this = this;
      return (0,_home_node_Insurance_Portal_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.loading = true;
        try {
          // Prepare survey submission data with correct field names
          const surveyData = {
            survey_id: Number(_this.surveyId),
            conclusion: _this.formData.conclusion,
            recommendation: _this.formData.recommendation,
            car_condition: _this.formData.vehicle_condition || '',
            market_value: Number(_this.formData.market_value) || 0,
            number_of_kilometers: Number(_this.formData.odometer_reading) || 0,
            zero_price: 0,
            survey_exclusions: _this.formData.survey_exclusions || [],
            survey_documents: _this.formData.survey_documents || [],
            estimation_lines: _this.estimationItems || []
          };
          // Submit survey
          yield _this.surveyorService.submitSurvey(surveyData).toPromise();
          // Handle Estimation Lines (Create New vs Update Existing)
          if (_this.estimationItems && _this.estimationItems.length > 0) {
            const newLines = _this.estimationItems.filter(i => i.isNew);
            const existingLines = _this.estimationItems.filter(i => !i.isNew);
            const linePromises = [];
            if (newLines.length > 0) {
              console.log('Creating new estimation lines:', newLines);
              linePromises.push(_this.surveyorService.createSurveyEstimationLines({
                survey_id: Number(_this.surveyId),
                estimation_lines: newLines
              }).toPromise());
            }
            if (existingLines.length > 0) {
              console.log('Updating existing estimation lines:', existingLines);
              linePromises.push(_this.surveyorService.updateSurveyEstimationLines({
                survey_id: Number(_this.surveyId),
                estimation_lines: existingLines
              }).toPromise());
            }
            if (linePromises.length > 0) {
              yield Promise.all(linePromises);
            }
          }
          // Update documents if photos OR survey documents are provided
          const allFilesToUpload = [];
          // 1. Process Photos (Step 4 - even if hidden, might have data)
          if (_this.formData.photos.length > 0) {
            for (const file of _this.formData.photos) {
              const base64 = yield _this.convertFileToBase64(file);
              allFilesToUpload.push({
                name: file.name,
                data: base64,
                type: 'photo' // flag for backend if needed, or just send flat
              });
            }
          }
          // 2. Process Survey Documents (Step 3)
          if (_this.formData.survey_documents && _this.formData.survey_documents.length > 0) {
            for (const doc of _this.formData.survey_documents) {
              if (doc.files && doc.files.length > 0) {
                for (const file of doc.files) {
                  const base64 = yield _this.convertFileToBase64(file);
                  allFilesToUpload.push({
                    name: file.name,
                    data: base64,
                    document_id: doc.document_id // Pass document type ID if relevant
                  });
                }
              }
            }
          }
          if (allFilesToUpload.length > 0) {
            const docsData = {
              survey_id: _this.surveyId,
              photos: allFilesToUpload // Using 'photos' key as per service, assuming it handles generic files too
            };
            yield _this.surveyorService.updateSurveyDocuments(docsData).toPromise();
          }
          _this.notificationService.success('Survey submitted successfully!');
          _this.loading = false;
          _this.router.navigate(['/dashboard/surveyor/pending']);
        } catch (error) {
          console.error('Error submitting survey:', error);
          _this.notificationService.error('Failed to submit survey');
          _this.loading = false;
        }
      })();
    }
    convertFileToBase64(file) {
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
    get canProceedToNextStep() {
      if (this.currentStep === 1) {
        return true; // Review step, always can proceed
      } else if (this.currentStep === 2) {
        // Step 2: Exclusions / Damaged Parts
        if (this.formData.survey_exclusions && this.formData.survey_exclusions.length > 0) {
          // If exclusions are selected, validate that each has at least one type selected
          return this.formData.survey_exclusions.every(exclusion => exclusion.exclusion_type_codes && exclusion.exclusion_type_codes.length > 0);
        }
        // If no exclusions selected, can proceed
        return true;
      } else if (this.currentStep === 3) {
        // Step 3: Documents - optional, always can proceed
        return true;
      } else if (this.currentStep === 4) {
        // Step 4: Technical Assessment
        if (this.isIssuanceSurvey) {
          return !!(this.formData.vehicle_condition && this.formData.market_value);
        } else if (this.isClaimSurvey) {
          return !!(this.formData.damage_description && this.formData.estimated_repair_cost);
        }
      }
      return true;
    }
    get stepsArray() {
      return Array.from({
        length: this.totalSteps
      }, (_, i) => i + 1);
    }
    static {
      this.ɵfac = function SurveyWizardComponent_Factory(t) {
        return new (t || SurveyWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__.SurveyorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_crm_service__WEBPACK_IMPORTED_MODULE_3__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_claim_service__WEBPACK_IMPORTED_MODULE_4__.ClaimService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: SurveyWizardComponent,
        selectors: [["app-survey-wizard"]],
        inputs: {
          surveyId: "surveyId",
          surveyData: "surveyData"
        },
        decls: 12,
        vars: 10,
        consts: [["class", "max-w-7xl mx-auto", 4, "ngIf"], ["class", "space-y-6 animate-fadeIn pb-4", 4, "ngIf"], [1, "mt-8", "flex", "justify-between", "items-center", "border-t", "border-gray-200", "dark:border-gray-700", "pt-6"], [1, "w-24"], ["type", "button", "class", "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600", 3, "click", 4, "ngIf"], [1, "text-sm", "text-gray-500"], [1, "w-24", "text-right"], ["type", "button", "class", "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "class", "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500", 3, "disabled", "click", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], [3, "close", "itemAdded", "visible", "estimationId"], [1, "max-w-7xl", "mx-auto"], [1, "mb-8"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-500", "mb-4"], ["routerLink", "/dashboard/surveyor/pending", 1, "hover:text-primary", "transition"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "m9 18 6-6-6-6"], [1, "text-gray-900", "dark:text-white", "font-medium"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-400"], [1, "flex", "items-center", "justify-between"], ["class", "flex items-center flex-1", 4, "ngFor", "ngForOf"], ["class", "space-y-4 animate-fadeIn", 4, "ngIf"], ["class", "space-y-6 animate-fadeIn", 4, "ngIf"], [1, "flex", "items-center", "flex-1"], [1, "flex", "items-center"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "font-semibold", "transition-all", 3, "ngClass"], [4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "ml-3", "hidden", "md:block"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], ["class", "flex-1 h-1 mx-4 rounded", 3, "ngClass", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "20 6 9 17 4 12"], [1, "flex-1", "h-1", "mx-4", "rounded", 3, "ngClass"], [1, "space-y-4", "animate-fadeIn"], [1, "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "p-4", "bg-gray-50", "dark:bg-gray-800", "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "p-1.5", "bg-blue-100", "text-blue-600", "rounded-md", "dark:bg-blue-900", "dark:text-blue-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"], ["points", "14 2 14 8 20 8"], [1, "text-base", "font-semibold", "text-gray-900", "dark:text-white"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "transition-transform", "duration-200"], ["points", "6 9 12 15 18 9"], ["class", "p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-8", 4, "ngIf"], ["class", "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden", 4, "ngIf"], ["class", "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mt-6", 4, "ngIf"], [1, "p-6", "border-t", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "space-y-8"], [1, "p-6", "rounded-lg", "border", "border-gray-100", "dark:border-gray-600", "flex", "flex-col", "md:flex-row", "justify-between", "gap-6"], [1, "flex", "items-center", "gap-3", "mb-2"], [1, "p-2", "bg-primary/10", "text-primary", "rounded-lg"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 16H9m10 4h3v-7.252a1 1 0 0 0-.555-.894l-3-1.448h-6l-3.22 1.932A2 2 0 0 0 9 14h.01"], ["d", "M14 16v3.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 .5-.5h9.237a.5.5 0 0 1 .456.29L14 11Zm0 0V11"], ["d", "M16 16v-3"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "flex", "items-center", "gap-4", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "bg-gray-100", "dark:bg-gray-600", "px-2", "py-1", "rounded", "text-gray-700", "dark:text-gray-200", "font-mono"], [1, "flex", "flex-col", "items-end", "gap-2"], [1, "px-3", "py-1", "rounded-full", "text-sm", "font-medium", "capitalize", 3, "ngClass"], [1, "text-right"], [1, "text-xs", "text-gray-500", "uppercase"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "flex", "items-center", "text-lg", "font-medium", "text-gray-900", "dark:text-white", "mb-4", "border-b", "border-gray-100", "dark:border-gray-700", "pb-2"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "mr-2", "text-gray-400"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "space-y-4", "pl-2"], [1, "group"], [1, "text-xs", "uppercase", "text-gray-400", "font-semibold", "tracking-wider"], [1, "text-base", "font-medium", "text-gray-900", "dark:text-white", "group-hover:text-primary", "transition-colors"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-gray-700", "dark:text-gray-300"], [1, "text-gray-700", "dark:text-gray-300", "truncate", 3, "title"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], [1, "text-base", "font-mono", "text-gray-700", "dark:text-gray-300"], [1, "mt-1", "flex", "items-center"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-green-500", "mr-2"], [1, "text-gray-900", "dark:text-white", "capitalize"], [1, "text-gray-900", "dark:text-white"], [1, "text-red-600", "dark:text-red-400", "font-medium"], ["class", "md:col-span-2 mt-4", 4, "ngIf"], [1, "md:col-span-2", "mt-4"], ["d", "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-6", "pl-2"], [1, "font-mono", "text-gray-900", "dark:text-white"], [1, "p-1.5", "bg-purple-100", "text-purple-600", "rounded-md", "dark:bg-purple-900", "dark:text-purple-300"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["class", "p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800", 4, "ngIf"], [1, "p-6", "border-t", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800"], ["message", "Loading details...", 4, "ngIf"], ["class", "text-center text-gray-500 py-4", 4, "ngIf"], ["message", "Loading details..."], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [4, "ngFor", "ngForOf"], [1, "break-words"], [1, "text-xs", "uppercase", "text-gray-500", "font-semibold", "tracking-wider"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white", "mt-1"], [1, "text-center", "text-gray-500", "py-4"], [1, "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "overflow-hidden", "mt-6"], ["name", "file-text", 1, "w-5", "h-5"], ["name", "chevron-down", 1, "w-5", "h-5", "text-gray-400", "transition-transform", "duration-200"], ["class", "p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 animate-fadeIn", 4, "ngIf"], [1, "p-6", "border-t", "border-gray-200", "dark:border-gray-700", "bg-white", "dark:bg-gray-800", "animate-fadeIn"], [1, "space-y-2"], ["class", "flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-700 hover:shadow-sm transition-all", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-2", "p-3", "bg-green-50", "dark:bg-green-900/30", "rounded-lg", "border", "border-green-100", "dark:border-green-700", "hover:shadow-sm", "transition-all"], ["name", "check-circle", 1, "w-4", "h-4", "text-green-600", "mt-0.5", "flex-shrink-0"], [1, "text-sm", "text-gray-700", "dark:text-gray-300"], ["name", "shield-alert", 1, "w-5", "h-5"], ["class", "flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-100 dark:border-red-700 hover:shadow-sm transition-all", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-2", "p-3", "bg-red-50", "dark:bg-red-900/30", "rounded-lg", "border", "border-red-100", "dark:border-red-700", "hover:shadow-sm", "transition-all"], ["name", "alert-circle", 1, "w-4", "h-4", "text-red-600", "mt-0.5", "flex-shrink-0"], ["name", "paperclip", 1, "w-5", "h-5"], ["class", "flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-3", "rounded-lg", "bg-gray-50", "dark:bg-gray-700/50", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["class", "px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium", 4, "ngIf"], ["class", "px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium", 4, "ngIf"], ["class", "px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium", 4, "ngIf"], [1, "px-2", "py-1", "bg-green-100", "text-green-700", "rounded", "text-xs", "font-medium"], [1, "px-2", "py-1", "bg-gray-200", "text-gray-600", "rounded", "text-xs", "font-medium"], [1, "px-2", "py-1", "bg-blue-100", "text-blue-700", "rounded", "text-xs", "font-medium"], [1, "space-y-6", "animate-fadeIn"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "mb-4"], [3, "type", "exclusionsChanged", 4, "ngIf"], [3, "exclusionsChanged", "type"], ["message", "Loading estimation...", 4, "ngIf"], ["class", "text-center text-gray-500 py-10 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700", 4, "ngIf"], ["message", "Loading estimation..."], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-6"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "p-4", "shadow-sm", "border-l-4", "border-blue-500"], [1, "text-xs", "font-medium", "text-gray-500", "uppercase"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white", "mt-1"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "p-4", "shadow-sm", "border-l-4", "border-indigo-500"], [1, "text-xs", "text-green-500", "mt-1", "font-medium"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "p-4", "shadow-sm", "border-l-4", "border-purple-500"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "p-4", "shadow-sm", "border-l-4", 3, "ngClass"], [1, "text-2xl", "font-bold", "mt-1", 3, "ngClass"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "mb-6"], [1, "flex", "items-center", "justify-between", "p-4", "cursor-pointer", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "p-1.5", "bg-gray-100", "dark:bg-gray-700", "rounded", "text-gray-600", "dark:text-gray-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16 13H8"], ["d", "M16 17H8"], ["d", "M10 9H8"], [1, "text-sm", "font-semibold", "text-gray-900", "dark:text-white"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400", "transition-transform"], ["class", "p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50", 4, "ngIf"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "shadow", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-200", "dark:border-gray-700", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "gap-4"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white", "flex", "items-center"], [1, "ml-2", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-800", "dark:bg-gray-700", "dark:text-gray-300"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "text-sm", "font-medium", "rounded-lg", "text-white", "bg-primary", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "shadow-sm", "transition-all", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "-ml-1", "mr-2", "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], ["class", "overflow-x-auto", 4, "ngIf"], ["class", "p-10 text-center", 4, "ngIf"], [1, "p-4", "border-t", "border-gray-100", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-800/50"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], [1, "font-medium", "text-sm", "text-blue-600"], [1, "font-medium", "text-sm"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200", "dark:divide-gray-700"], [1, "bg-gray-50", "dark:bg-gray-900/50"], ["scope", "col", 1, "px-6", "py-3", "text-left", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider"], ["scope", "col", 1, "px-6", "py-3", "text-center", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider"], ["scope", "col", 1, "px-6", "py-3", "text-right", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "dark:bg-gray-800", "divide-y", "divide-gray-200", "dark:divide-gray-700"], ["class", "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "dark:bg-gray-800", "border-t", "border-gray-200", "dark:border-gray-700"], ["colspan", "6", 1, "px-6", "py-4", "text-right", "text-sm", "font-medium", "text-gray-500"], [1, "px-6", "py-4", "text-right", "text-sm", "font-bold", "text-primary", "text-lg"], [1, "hover:bg-gray-50", "dark:hover:bg-gray-700/50", "transition-colors"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "flex-shrink-0", "h-8", "w-8", "rounded", "bg-gray-100", "dark:bg-gray-700", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-gray-500"], [1, "ml-4"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white", "truncate", "max-w-xs", 3, "title"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "text-sm", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4", "whitespace-nowrap", "text-center"], [1, "px-2", "py-1", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", 3, "ngClass"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "text-gray-500", "text-right", "font-medium"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "text-gray-500", "text-right"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "text-red-500", "text-right"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "font-bold", "text-gray-900", "dark:text-white", "text-right"], [1, "p-10", "text-center"], [1, "mx-auto", "h-12", "w-12", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "mt-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], [1, "mt-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "mt-6"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-white", "bg-primary", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "text-center", "text-gray-500", "py-10", "bg-gray-50", "dark:bg-gray-800", "rounded-lg", "border", "border-dashed", "border-gray-300", "dark:border-gray-700"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-lg", "p-5", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "hover:border-primary/50", "transition-all", "h-full", "flex", "flex-col"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "p-2", "rounded-lg", "bg-blue-50", "text-blue-600", "dark:bg-blue-900/30", "dark:text-blue-300"], [1, "font-semibold", "text-gray-900", "dark:text-white", "leading-tight"], [1, "text-xs", "text-gray-500", "font-mono", "mt-1"], [1, "flex-grow"], [1, "relative", "flex", "flex-col", "justify-center", "w-full", "h-32", "px-4", "transition", "bg-gray-50", "dark:bg-gray-700/50", "border-2", "border-gray-300", "dark:border-gray-600", "border-dashed", "rounded-lg", "appearance-none", "cursor-pointer", "hover:border-primary", "focus:outline-none"], [1, "flex", "items-center", "space-x-2", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300"], [1, "text-primary", "hover:underline"], ["type", "file", "multiple", "", 1, "hidden", 3, "change"], ["class", "mt-4 space-y-2", 4, "ngIf"], ["class", "mt-2 text-xs text-right text-gray-400", 4, "ngIf"], [1, "mt-4", "space-y-2"], ["class", "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded border border-gray-100 dark:border-gray-600", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-2", "bg-gray-50", "dark:bg-gray-700", "rounded", "border", "border-gray-100", "dark:border-gray-600"], [1, "flex", "items-center", "gap-2", "overflow-hidden"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-gray-400", "flex-shrink-0"], ["d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"], ["points", "13 2 13 9 20 9"], [1, "text-xs", "text-gray-700", "dark:text-gray-300", "truncate"], [1, "text-xs", "text-green-500", "font-medium"], [1, "mt-2", "text-xs", "text-right", "text-gray-400"], [3, "data", "dataChange", 4, "ngIf"], [3, "dataChange", "data"], [1, "space-y-6", "animate-fadeIn", "pb-4"], [1, "bg-blue-50", "dark:bg-blue-900/20", "border", "border-blue-200", "dark:border-blue-800", "rounded-lg", "p-4", "mb-6", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "p-4", "opacity-10"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100", "height", "100", "viewBox", "0 0 24 24", "fill", "currentColor"], [1, "flex", "items-start", "gap-4", "relative", "z-10"], [1, "p-2", "bg-blue-100", "text-blue-600", "rounded-full", "dark:bg-blue-800", "dark:text-blue-200"], ["d", "M12 16v-4"], ["d", "M12 8h.01"], [1, "text-lg", "font-bold", "text-blue-900", "dark:text-blue-200"], [1, "text-blue-700", "dark:text-blue-300", "mt-1", "max-w-2xl"], [1, "bg-white", "dark:bg-gray-800", "shadow-lg", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden"], [1, "bg-gray-50", "dark:bg-gray-900/50", "px-6", "py-4", "border-b", "border-gray-200", "dark:border-gray-700", "flex", "justify-between", "items-center"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white"], [1, "px-3", "py-1", "rounded-full", "bg-gray-200", "text-gray-700", "text-xs", "font-bold", "uppercase"], [1, "p-6", "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-6"], [1, "text-xs", "uppercase", "text-gray-500", "font-bold", "tracking-wider", "mb-2"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700", "border", "border-gray-100", "dark:border-gray-700", "rounded-lg"], [1, "p-3", "flex", "justify-between", "items-center", "hover:bg-gray-50", "dark:hover:bg-gray-700/50"], [1, "text-sm", "text-gray-600", "dark:text-gray-300"], ["class", "p-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "dark:bg-gray-900/50", "px-6", "py-4", "border-t", "border-gray-200", "dark:border-gray-700", "text-center"], [1, "text-gray-900", "dark:text-white", "bg-gray-50", "dark:bg-gray-700/30", "p-3", "rounded-lg", "border", "border-gray-100", "dark:border-gray-700"], [1, "bg-red-50", "dark:bg-red-900/20", "p-3", "rounded-lg", "border", "border-red-100", "dark:border-red-800"], [1, "text-xs", "text-red-600", "dark:text-red-400", "block"], [1, "text-lg", "font-bold", "text-red-700", "dark:text-red-300"], [1, "bg-orange-50", "dark:bg-orange-900/20", "p-3", "rounded-lg", "border", "border-orange-100", "dark:border-orange-800"], [1, "text-xs", "text-orange-600", "dark:text-orange-400", "block"], [1, "text-lg", "font-bold", "text-orange-700", "dark:text-orange-300"], [1, "text-sm", "text-gray-600", "dark:text-gray-300", "truncate", "max-w-[200px]"], [1, "font-medium"], [1, "flex", "justify-between", "items-center", "p-3", "bg-green-50", "dark:bg-green-900/20", "rounded-lg", "border", "border-green-100", "dark:border-green-800"], [1, "text-sm", "font-medium", "text-green-700", "dark:text-green-300"], [1, "text-xl", "font-bold", "text-green-800", "dark:text-green-200"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-gray-300", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-gray-700", "bg-white", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "dark:bg-gray-700", "dark:text-gray-200", "dark:border-gray-600", "dark:hover:bg-gray-600", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "mr-2"], ["d", "m15 18-6-6 6-6"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-white", "bg-primary", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", 3, "click", "disabled", "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "ml-2"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-transparent", "shadow-sm", "text-sm", "font-medium", "rounded-md", "text-white", "bg-green-600", "hover:bg-green-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-green-500", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "class", "mr-2", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "h-96"], ["message", "Loading survey...", 3, "loading"]],
        template: function SurveyWizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, SurveyWizardComponent_div_0_Template, 20, 7, "div", 0)(1, SurveyWizardComponent_div_1_Template, 44, 7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, SurveyWizardComponent_button_4_Template, 4, 0, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SurveyWizardComponent_button_8_Template, 4, 4, "button", 7)(9, SurveyWizardComponent_button_9_Template, 4, 4, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, SurveyWizardComponent_div_10_Template, 2, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "app-add-estimation-item-modal", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("close", function SurveyWizardComponent_Template_app_add_estimation_item_modal_close_11_listener() {
              return ctx.closeAddItemModal();
            })("itemAdded", function SurveyWizardComponent_Template_app_add_estimation_item_modal_itemAdded_11_listener($event) {
              return ctx.onItemAdded($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.survey);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentStep === ctx.totalSteps);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentStep > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" Step ", ctx.currentStep, " of ", ctx.totalSteps, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentStep < ctx.totalSteps);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.currentStep === ctx.totalSteps);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", ctx.showAddItemModal)("estimationId", ctx.estimationDetails == null ? null : ctx.estimationDetails.id);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_13__.LucideAngularComponent, _survey_exclusions_survey_exclusions_component__WEBPACK_IMPORTED_MODULE_6__.SurveyExclusionsComponent, _issuance_survey_form_issuance_survey_form_component__WEBPACK_IMPORTED_MODULE_7__.IssuanceSurveyFormComponent, _claim_survey_form_claim_survey_form_component__WEBPACK_IMPORTED_MODULE_8__.ClaimSurveyFormComponent, _add_estimation_item_modal_add_estimation_item_modal_component__WEBPACK_IMPORTED_MODULE_9__.AddEstimationItemModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [".animate-fadeIn[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}"]
      });
    }
  }
  return SurveyWizardComponent;
})();

/***/ }),

/***/ 239:
/*!********************************************************************!*\
  !*** ./src/app/surveyor/pages/claims/surveyor-claims.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyorClaimsComponent: () => (/* binding */ SurveyorClaimsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/data-table/data-table.component */ 4901);




let SurveyorClaimsComponent = /*#__PURE__*/(() => {
  class SurveyorClaimsComponent {
    constructor(router) {
      this.router = router;
      this.tableConfig = {
        columns: [],
        data: [],
        loading: true,
        pageSize: 10,
        showSearch: true,
        showExport: true,
        searchPlaceholder: 'Search claims...'
      };
      this.setupColumns();
    }
    ngOnInit() {
      this.loadClaims();
    }
    setupColumns() {
      this.tableConfig.columns = [{
        key: 'claim_number',
        label: 'Claim #',
        sortable: true
      }, {
        key: 'customer_name',
        label: 'Customer',
        sortable: true
      }, {
        key: 'policy_number',
        label: 'Policy',
        sortable: true
      }, {
        key: 'claim_type',
        label: 'Type',
        sortable: true
      }, {
        key: 'assigned_date',
        label: 'Assigned',
        sortable: true
      }, {
        key: 'priority',
        label: 'Priority',
        sortable: true
      }, {
        key: 'status',
        label: 'Status',
        sortable: true
      }];
    }
    loadClaims() {
      // Mock data
      this.tableConfig.data = [{
        id: 1,
        claim_number: 'CLM-2024-001',
        customer_name: 'John Doe',
        policy_number: 'POL-2024-001',
        claim_type: 'Accident',
        assigned_date: '2024-01-15',
        priority: 'High',
        status: 'Pending'
      }, {
        id: 2,
        claim_number: 'CLM-2024-002',
        customer_name: 'Jane Smith',
        policy_number: 'POL-2024-002',
        claim_type: 'Theft',
        assigned_date: '2024-01-16',
        priority: 'Medium',
        status: 'In Progress'
      }];
      this.tableConfig.loading = false;
    }
    onRowClick(claim) {
      this.router.navigate(['/dashboard/surveyor/surveys', claim.id]);
    }
    onExport() {
      console.log('Exporting claims...');
    }
    static {
      this.ɵfac = function SurveyorClaimsComponent_Factory(t) {
        return new (t || SurveyorClaimsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SurveyorClaimsComponent,
        selectors: [["app-surveyor-claims"]],
        decls: 8,
        vars: 1,
        consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], [3, "rowClick", "exportData", "config"]],
        template: function SurveyorClaimsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div")(3, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Claims Assessment");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage claim surveys and assessments");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-data-table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rowClick", function SurveyorClaimsComponent_Template_app_data_table_rowClick_7_listener($event) {
              return ctx.onRowClick($event);
            })("exportData", function SurveyorClaimsComponent_Template_app_data_table_exportData_7_listener() {
              return ctx.onExport();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.tableConfig);
          }
        },
        dependencies: [_shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__.DashboardLayoutComponent, _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_1__.DataTableComponent]
      });
    }
  }
  return SurveyorClaimsComponent;
})();

/***/ }),

/***/ 5373:
/*!**************************************************************************!*\
  !*** ./src/app/surveyor/pages/dashboard/surveyor-dashboard.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyorDashboardComponent: () => (/* binding */ SurveyorDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/surveyor.service */ 3371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);







function SurveyorDashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21)(3, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Select Your Workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Choose where you want to start today.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 24)(8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyorDashboardComponent_div_1_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleWizardSelect("issuance"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Issuance Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Perform pre-risk inspections for new policies.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyorDashboardComponent_div_1_Template_div_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleWizardSelect("claim"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Claim Survey");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Assess damages and validate claims.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Proceed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
}
let SurveyorDashboardComponent = /*#__PURE__*/(() => {
  class SurveyorDashboardComponent {
    constructor(authService, route, router, surveyorService) {
      this.authService = authService;
      this.route = route;
      this.router = router;
      this.surveyorService = surveyorService;
      this.user = null;
      this.showWizard = false;
      this.stats = {
        totalSurveys: 62,
        pending: 12,
        completed: 45,
        urgent: 2,
        inProgress: 5
      };
    }
    ngOnInit() {
      this.authService.currentUser.subscribe(user => {
        this.user = user;
      });
      // Check for wizard query param
      this.route.queryParams.subscribe(params => {
        if (params['wizard'] === 'true') {
          this.showWizard = true;
        }
      });
    }
    ngOnDestroy() {}
    openWizard() {
      this.showWizard = true;
    }
    closeWizard() {
      this.showWizard = false;
      // Clear query param so that clicking logo again works (triggers change)
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          wizard: null
        },
        queryParamsHandling: 'merge'
      });
    }
    handleWizardSelect(type) {
      this.showWizard = false;
      // Navigate to stages page with selected type
      this.router.navigate(['/dashboard/surveyor/stages'], {
        queryParams: {
          type: type
        }
      });
    }
    static {
      this.ɵfac = function SurveyorDashboardComponent_Factory(t) {
        return new (t || SurveyorDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__.SurveyorService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SurveyorDashboardComponent,
        selectors: [["app-surveyor-dashboard"]],
        decls: 52,
        vars: 6,
        consts: [["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm", 4, "ngIf"], [1, "mb-8"], [1, "flex", "justify-between", "items-center"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-400"], [1, "hidden", "md:flex", "px-4", "py-2", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-50", "dark:hover:bg-gray-700", "shadow-sm", "transition-colors", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "text-gray-500", "dark:text-gray-400"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mt-2"], [1, "p-4", "rounded-xl", "bg-blue-500", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-7", "w-7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"], [1, "p-4", "rounded-xl", "bg-yellow-500", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "p-4", "rounded-xl", "bg-green-500", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "p-4", "rounded-xl", "bg-red-500", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/60", "backdrop-blur-sm"], [1, "relative", "bg-white", "dark:bg-gray-800", "rounded-3xl", "shadow-2xl", "max-w-3xl", "w-full", "p-8", "overflow-hidden", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-center", "mb-8"], [1, "text-2xl", "md:text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2"], [1, "text-gray-500", "dark:text-gray-400"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "group", "relative", "overflow-hidden", "bg-gray-50", "dark:bg-gray-700/50", "p-6", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-600", "hover:border-primary/50", "dark:hover:border-primary/50", "hover:shadow-lg", "transition-all", "duration-300", "cursor-pointer", "text-center", "flex", "flex-col", "items-center", "justify-center", "h-full", 3, "click"], [1, "p-4", "rounded-full", "bg-blue-100", "dark:bg-gray-800", "mb-4", "group-hover:scale-110", "transition-transform", "duration-300"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-8", "h-8", "text-blue-600"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2", "group-hover:text-primary", "transition-colors"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mb-4"], [1, "mt-auto", "flex", "items-center", "text-primary", "font-medium", "text-sm", "opacity-0", "group-hover:opacity-100", "transform", "translate-y-2", "group-hover:translate-y-0", "transition-all", "duration-300"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "p-4", "rounded-full", "bg-red-100", "dark:bg-gray-800", "mb-4", "group-hover:scale-110", "transition-transform", "duration-300"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"]],
        template: function SurveyorDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SurveyorDashboardComponent_div_1_Template, 32, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Surveyor Overview");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyorDashboardComponent_Template_button_click_9_listener() {
              return ctx.openWizard();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Open Quick Select ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "app-card")(13, "div", 7)(14, "div")(15, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Total Surveys");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "svg", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "app-card")(23, "div", 7)(24, "div")(25, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Pending");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "svg", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "path", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "app-card")(33, "div", 7)(34, "div")(35, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Completed");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "svg", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "path", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "app-card")(43, "div", 7)(44, "div")(45, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Urgent");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "svg", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "path", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showWizard);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Welcome back, ", ctx.user == null ? null : ctx.user.name, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stats.totalSurveys);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stats.pending);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stats.completed);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stats.urgent);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__.DashboardLayoutComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent],
        encapsulation: 2
      });
    }
  }
  return SurveyorDashboardComponent;
})();

/***/ }),

/***/ 8851:
/*!**********************************************************************!*\
  !*** ./src/app/surveyor/pages/pending/surveyor-pending.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyorPendingComponent: () => (/* binding */ SurveyorPendingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/surveyor.service */ 3371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/data-table/data-table.component */ 4901);







function SurveyorPendingComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDCDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.customer_phone, " ");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDCCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.customer_street);
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Chassis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Motor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", item_r2.risk_info.vehicle_make_name, " ", item_r2.risk_info.vehicle_model_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.risk_info.vehicle_chassis_number || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.risk_info.vehicle_motor_number || "N/A", "");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" CRM: ", item_r2.crm_risk_id, " ");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Pol: ", item_r2.policy_risk_id, " ");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Clm: ", item_r2.claim_id, " ");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60)(1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Repair At");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.repair_center_name || item_r2.repair_center, " ");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_div_14_div_2_div_9_div_33_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onAccept($event, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 65)(4, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_div_14_div_2_div_9_div_33_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSuspend($event, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Suspend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_div_14_div_2_div_9_div_33_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onReject($event, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function SurveyorPendingComponent_div_14_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_div_14_div_2_div_9_Template_div_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onRowClick(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SurveyorPendingComponent_div_14_div_2_div_9_div_14_Template, 4, 1, "div", 31)(15, SurveyorPendingComponent_div_14_div_2_div_9_div_15_Template, 5, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 33)(17, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Vehicle & Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SurveyorPendingComponent_div_14_div_2_div_9_div_19_Template, 15, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SurveyorPendingComponent_div_14_div_2_div_9_span_21_Template, 2, 1, "span", 37)(22, SurveyorPendingComponent_div_14_div_2_div_9_span_22_Template, 2, 1, "span", 38)(23, SurveyorPendingComponent_div_14_div_2_div_9_span_23_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 40)(25, "div")(26, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_div_14_div_2_div_9_Template_div_click_28_listener($event) {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      ctx_r2.onRowClick(item_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SurveyorPendingComponent_div_14_div_2_div_9_div_32_Template, 5, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, SurveyorPendingComponent_div_14_div_2_div_9_div_33_Template, 8, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.survey_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 14, item_r2.assigned_date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", item_r2.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.survey_type, " Inspection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.customer_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.customer_street);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.risk_info);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.crm_risk_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.policy_risk_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.claim_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r2.getPriorityBadge(item_r2.priority), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r2.survey_type === "Claim" || item_r2.survey_type === "claim" || item_r2.claim_id) && (item_r2.repair_center_name || item_r2.repair_center));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", column_r5.id === "pending");
  }
}
function SurveyorPendingComponent_div_14_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68)(1, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SurveyorPendingComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SurveyorPendingComponent_div_14_div_2_div_9_Template, 34, 17, "div", 20)(10, SurveyorPendingComponent_div_14_div_2_div_10_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("w-3 h-3 rounded-full bg-" + column_r5.color + "-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](column_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", column_r5.items.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", column_r5.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", column_r5.items.length === 0);
  }
}
function SurveyorPendingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SurveyorPendingComponent_div_14_div_2_Template, 11, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.boardColumns);
  }
}
function SurveyorPendingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-data-table", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowClick", function SurveyorPendingComponent_div_15_Template_app_data_table_rowClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onRowClick($event));
    })("exportData", function SurveyorPendingComponent_div_15_Template_app_data_table_exportData_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onExport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx_r2.tableConfig);
  }
}
let SurveyorPendingComponent = /*#__PURE__*/(() => {
  class SurveyorPendingComponent {
    constructor(surveyorService, router, route) {
      this.surveyorService = surveyorService;
      this.router = router;
      this.route = route;
      this.viewMode = 'board';
      this.currentType = 'all';
      this.statusFilter = null;
      this.tableConfig = {
        columns: [],
        data: [],
        loading: true,
        pageSize: 10,
        showSearch: true,
        showExport: true,
        searchPlaceholder: 'Search surveys...'
      };
      // For Board View
      this.ALL_BOARD_COLUMNS = [{
        id: 'pending',
        title: 'Pending',
        color: 'yellow',
        items: [],
        states: ['pending', 'surveyor', 'reassign', 'new', 'surveyor assigned']
      }, {
        id: 'in_progress',
        title: 'In Progress',
        color: 'blue',
        items: [],
        states: ['in_progress', 'surveying']
      }, {
        id: 'suspended',
        title: 'Suspended',
        color: 'red',
        items: [],
        states: ['suspended']
      }, {
        id: 'completed',
        title: 'Completed',
        color: 'green',
        items: [],
        states: ['completed', 'submitted', 'accepted', 'rejected', 'report_rejected']
      }];
      this.boardColumns = [...this.ALL_BOARD_COLUMNS];
      this.setupColumns();
    }
    ngOnInit() {
      const path = this.route.snapshot.url[0]?.path;
      const subPath = this.route.snapshot.url[1]?.path;
      this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(50)).subscribe(params => {
        if (params['view']) {
          this.viewMode = params['view'];
        }
        if (params['type']) {
          this.currentType = params['type'];
        }
        // Reset filter first
        this.statusFilter = null;
        // Route path overrides query params for status
        if (path === 'suspended') {
          this.statusFilter = 'suspended';
          this.boardColumns = [this.ALL_BOARD_COLUMNS.find(c => c.id === 'suspended')];
        } else if (path === 'pending') {
          this.statusFilter = 'pending';
          this.boardColumns = [this.ALL_BOARD_COLUMNS.find(c => c.id === 'pending')];
        } else if (path === 'in-progress') {
          this.statusFilter = 'in_progress';
          this.boardColumns = [this.ALL_BOARD_COLUMNS.find(c => c.id === 'in_progress')];
          // Check for submenu paths
          if (subPath === 'issuance') {
            this.currentType = 'issuance';
          } else if (subPath === 'claims') {
            this.currentType = 'claim';
          }
        } else if (params['status']) {
          this.statusFilter = params['status'];
          // Try to find matching column for status, otherwise show all or default
          // This handles complex cases if needed later
        } else {
          // Default to Pending column if no specific route
          this.boardColumns = [this.ALL_BOARD_COLUMNS.find(c => c.id === 'pending')];
        }
        this.loadPendingSurveys();
      });
    }
    setupColumns() {
      this.tableConfig.columns = [{
        key: 'survey_number',
        label: 'Survey #',
        sortable: true
      }, {
        key: 'claim_number',
        label: 'Claim #',
        sortable: true
      }, {
        key: 'customer_name',
        label: 'Customer',
        sortable: true
      }, {
        key: 'survey_type',
        label: 'Type',
        sortable: true
      }, {
        key: 'assigned_date',
        label: 'Assigned',
        sortable: true
      }, {
        key: 'priority',
        label: 'Priority',
        sortable: true,
        render: row => this.getPriorityBadge(row.priority)
      }, {
        key: 'status',
        label: 'Status',
        sortable: true,
        render: row => this.getStatusBadge(row.status)
      }];
    }
    loadPendingSurveys() {
      this.tableConfig.loading = true;
      const params = {
        limit: 100,
        offset: 0
      };
      if (this.currentType !== 'all') {
        params.survey_type = this.currentType;
      }
      // Apply status filter if present
      if (this.statusFilter) {
        if (this.statusFilter === 'suspended') {
          params.domain = JSON.stringify([['state', '=', 'suspended']]);
        } else if (this.statusFilter === 'pending') {
          // Map 'pending' filter to 'surveyor' state in domain
          params.domain = JSON.stringify([['state', '=', 'surveyor']]);
        } else if (this.statusFilter === 'in_progress') {
          // Map 'in_progress' filter to 'surveying' or 'in_progress' states
          params.domain = JSON.stringify([['state', 'in', ['surveying', 'in_progress']]]);
        }
      } else if (this.viewMode !== 'board') {
        // Default to 'surveyor' (pending) state for table view if no filter
        params.domain = JSON.stringify([['state', '=', 'surveyor']]);
      }
      this.surveyorService.listSurveys(params).subscribe({
        next: response => {
          let rawData = [];
          // Handle different response structures
          if (response.surveys) {
            rawData = response.surveys;
          } else if (response.data && response.data.surveys) {
            rawData = response.data.surveys;
          } else if (response.data && response.data.result && response.data.result.data) {
            rawData = response.data.result.data;
          } else if (response.data && response.data.data) {
            rawData = response.data.data;
          } else if (response.data && Array.isArray(response.data)) {
            rawData = response.data;
          } else if (Array.isArray(response)) {
            rawData = response;
          }
          // Map API fields to Table columns
          const mappedData = rawData.map(item => ({
            ...item,
            assigned_date: item.assign_date,
            status: item.state || item.status,
            priority: item.priority || 'Medium',
            claim_number: item.claim_number || (item.claim_id ? item.claim_id : 'N/A')
          }));
          this.tableConfig.data = mappedData;
          if (this.viewMode === 'board') {
            this.organizeBoardData(mappedData);
          }
          this.tableConfig.loading = false;
        },
        error: err => {
          console.error('Error loading surveys:', err);
          this.tableConfig.loading = false;
        }
      });
    }
    organizeBoardData(data) {
      // Reset columns
      this.boardColumns.forEach(col => col.items = []);
      data.forEach(item => {
        const status = (item.state || item.status || 'pending').toLowerCase();
        // Check if status belongs to current visible columns
        const column = this.boardColumns.find(c => c.states && c.states.includes(status));
        if (column) {
          column.items.push(item);
        } else {
          // If status doesn't match visible columns, check ALL columns to be safe or ignore
          // In single column view, we only show items for that column.
          // However, we might have mixed data if API filter isn't perfect. 
          // We will just ignore items that don't fit the visible column.
        }
      });
    }
    getPriorityBadge(priority) {
      const badges = {
        'high': '🔴 High',
        'medium': '🟡 Medium',
        'low': '🟢 Low'
      };
      return badges[priority?.toLowerCase()] || priority;
    }
    getStatusBadge(status) {
      const badges = {
        'pending': '🟡 Pending',
        'surveyor': '🟡 Pending',
        'suspended': '🔴 Suspended',
        'in_progress': '🔵 In Progress',
        'completed': '🟢 Completed'
      };
      return badges[status?.toLowerCase()] || status;
    }
    onRowClick(survey) {
      this.router.navigate(['/dashboard/surveyor/surveys', survey.id]);
    }
    onExport() {
      console.log('Exporting surveys...');
    }
    toggleView(mode) {
      this.viewMode = mode;
      this.loadPendingSurveys();
    }
    onAccept(event, survey) {
      event.stopPropagation();
      this.surveyorService.acceptSurvey(survey.id).subscribe({
        next: () => {
          this.loadPendingSurveys();
        },
        error: err => console.error('Error accepting survey:', err)
      });
    }
    onSuspend(event, survey) {
      event.stopPropagation();
      this.surveyorService.suspendSurvey(survey.id).subscribe({
        next: () => {
          this.loadPendingSurveys();
        },
        error: err => console.error('Error suspending survey:', err)
      });
    }
    onReject(event, survey) {
      event.stopPropagation();
      this.surveyorService.rejectSurvey(survey.id).subscribe({
        next: () => {
          this.loadPendingSurveys();
        },
        error: err => console.error('Error rejecting survey:', err)
      });
    }
    get title() {
      let statusText = '';
      if (this.statusFilter === 'pending') {
        statusText = 'Pending';
      } else if (this.statusFilter === 'suspended') {
        statusText = 'Suspended';
      } else if (this.statusFilter === 'in_progress') {
        statusText = 'In Progress';
      } else {
        statusText = 'Pending'; // Default
      }
      // Add survey type to title if filtered
      let typeText = '';
      if (this.currentType === 'issuance') {
        typeText = ' Issuance';
      } else if (this.currentType === 'claim') {
        typeText = ' Claim';
      }
      return `${statusText}${typeText} Surveys`;
    }
    get description() {
      if (this.statusFilter === 'pending') {
        return 'Review and complete assigned surveys';
      } else if (this.statusFilter === 'suspended') {
        return 'Surveys suspended for another time';
      } else if (this.statusFilter === 'in_progress') {
        return 'Surveys currently being processed';
      }
      return 'Review and complete assigned surveys'; // Default
    }
    static {
      this.ɵfac = function SurveyorPendingComponent_Factory(t) {
        return new (t || SurveyorPendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_0__.SurveyorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SurveyorPendingComponent,
        selectors: [["app-surveyor-pending"]],
        decls: 16,
        vars: 29,
        consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], [1, "flex", "bg-gray-100", "dark:bg-gray-700", "p-1", "rounded-lg"], [1, "px-4", "py-2", "rounded-md", "text-sm", "font-medium", "transition-all", "duration-200", 3, "click"], ["class", "flex justify-center items-center h-64", 4, "ngIf"], ["class", "overflow-x-auto pb-4", 4, "ngIf"], [4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-64"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-primary"], [1, "overflow-x-auto", "pb-4"], [1, "flex", "gap-6", "min-w-[1000px]"], ["class", "flex-1 min-w-[300px]", 4, "ngFor", "ngForOf"], [1, "flex-1", "min-w-[300px]"], [1, "flex", "items-center", "justify-between", "mb-4", "p-2", "bg-gray-50", "dark:bg-gray-800", "rounded-lg"], [1, "flex", "items-center", "gap-2"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "bg-gray-200", "dark:bg-gray-700", "text-gray-700", "dark:text-gray-300", "px-2", "py-0.5", "rounded", "text-xs"], [1, "space-y-4"], ["class", "bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/50 cursor-pointer transition-all duration-200 group", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl", 4, "ngIf"], [1, "bg-white", "dark:bg-gray-800", "p-4", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "hover:shadow-lg", "hover:border-primary/50", "cursor-pointer", "transition-all", "duration-200", "group", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-4"], [1, "md:col-span-4", "border-b", "md:border-b-0", "md:border-r", "border-gray-100", "dark:border-gray-700", "pb-3", "md:pb-0", "md:pr-3"], [1, "flex", "justify-between", "items-start", "mb-2"], [1, "px-2", "py-0.5", "bg-gray-100", "dark:bg-gray-700", "text-[10px]", "font-mono", "font-medium", "rounded", "text-gray-600", "dark:text-gray-300"], [1, "text-[10px]", "text-gray-400", "dark:text-gray-500"], [1, "font-bold", "text-gray-900", "dark:text-white", "text-sm", "mb-0.5", "group-hover:text-primary", "transition-colors", "line-clamp-2", 3, "title"], [1, "text-[10px]", "font-medium", "text-primary/80", "dark:text-primary/70", "uppercase", "tracking-wide", "mb-3"], [1, "space-y-1.5"], ["class", "flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400", 4, "ngIf"], ["class", "flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400", 4, "ngIf"], [1, "md:col-span-5", "border-b", "md:border-b-0", "md:border-r", "border-gray-100", "dark:border-gray-700", "pb-3", "md:pb-0", "md:px-3"], [1, "text-[10px]", "font-semibold", "text-gray-400", "dark:text-gray-500", "uppercase", "mb-2"], ["class", "bg-gray-50/50 dark:bg-gray-700/20 rounded-lg p-2.5 mb-3 border border-gray-100 dark:border-gray-700/50", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-1.5"], ["class", "px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800", 4, "ngIf"], ["class", "px-1.5 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-100 dark:border-purple-800", 4, "ngIf"], ["class", "px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-100 dark:border-amber-800", 4, "ngIf"], [1, "md:col-span-3", "flex", "flex-col", "justify-between"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-xs", "scale-90", "origin-left", 3, "innerHTML"], [1, "text-[10px]", "font-medium", "text-primary", "hover:underline", "flex", "items-center", "gap-0.5", "cursor-pointer", 3, "click"], ["class", "mb-3 p-1.5 bg-red-50 dark:bg-red-900/10 rounded border border-red-100 dark:border-red-800/30 text-center", 4, "ngIf"], ["class", "flex flex-col gap-1.5 mt-auto", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "w-4", "h-4", "flex", "items-center", "justify-center", "bg-gray-50", "dark:bg-gray-700", "rounded-full", "text-[10px]"], [1, "flex", "items-start", "gap-2", "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "w-4", "h-4", "flex-shrink-0", "flex", "items-center", "justify-center", "bg-gray-50", "dark:bg-gray-700", "rounded-full", "text-[10px]", "mt-0.5"], [1, "line-clamp-2", "leading-tight"], [1, "bg-gray-50/50", "dark:bg-gray-700/20", "rounded-lg", "p-2.5", "mb-3", "border", "border-gray-100", "dark:border-gray-700/50"], [1, "grid", "grid-cols-2", "gap-2", "text-xs"], [1, "col-span-2"], [1, "text-gray-900", "dark:text-gray-100", "font-medium"], [1, "text-[10px]", "text-gray-400"], [1, "font-mono", "text-[11px]", "text-gray-600", "dark:text-gray-400", "truncate"], [1, "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-medium", "bg-blue-50", "text-blue-700", "dark:bg-blue-900/30", "dark:text-blue-300", "border", "border-blue-100", "dark:border-blue-800"], [1, "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-medium", "bg-purple-50", "text-purple-700", "dark:bg-purple-900/30", "dark:text-purple-300", "border", "border-purple-100", "dark:border-purple-800"], [1, "px-1.5", "py-0.5", "rounded", "text-[10px]", "font-medium", "bg-amber-50", "text-amber-700", "dark:bg-amber-900/30", "dark:text-amber-300", "border", "border-amber-100", "dark:border-amber-800"], [1, "mb-3", "p-1.5", "bg-red-50", "dark:bg-red-900/10", "rounded", "border", "border-red-100", "dark:border-red-800/30", "text-center"], [1, "text-[9px]", "text-red-500", "uppercase", "font-bold"], [1, "text-[10px]", "font-semibold", "text-gray-800", "dark:text-gray-200", "line-clamp-1"], [1, "flex", "flex-col", "gap-1.5", "mt-auto"], [1, "w-full", "py-1", "bg-green-50", "text-green-700", "hover:bg-green-100", "border", "border-green-200", "rounded", "text-xs", "font-semibold", "transition-all", "dark:bg-green-900/20", "dark:text-green-400", "dark:border-green-800", 3, "click"], [1, "flex", "gap-1.5"], [1, "flex-1", "py-1", "bg-yellow-50", "text-yellow-700", "hover:bg-yellow-100", "border", "border-yellow-200", "rounded", "text-xs", "font-semibold", "transition-all", "dark:bg-yellow-900/20", "dark:text-yellow-400", "dark:border-yellow-800", 3, "click"], [1, "flex-1", "py-1", "bg-red-50", "text-red-700", "hover:bg-red-100", "border", "border-red-200", "rounded", "text-xs", "font-semibold", "transition-all", "dark:bg-red-900/20", "dark:text-red-400", "dark:border-red-800", 3, "click"], [1, "text-center", "py-8", "border-2", "border-dashed", "border-gray-200", "dark:border-gray-700", "rounded-xl"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [3, "rowClick", "exportData", "config"]],
        template: function SurveyorPendingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_Template_button_click_9_listener() {
              return ctx.toggleView("board");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Board ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyorPendingComponent_Template_button_click_11_listener() {
              return ctx.toggleView("table");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " List ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SurveyorPendingComponent_div_13_Template, 2, 0, "div", 6)(14, SurveyorPendingComponent_div_14_Template, 3, 1, "div", 7)(15, SurveyorPendingComponent_div_15_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-white", ctx.viewMode === "board")("dark:bg-gray-600", ctx.viewMode === "board")("shadow-sm", ctx.viewMode === "board")("text-gray-900", ctx.viewMode === "board")("dark:text-white", ctx.viewMode === "board")("text-gray-500", ctx.viewMode !== "board");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-white", ctx.viewMode === "table")("dark:bg-gray-600", ctx.viewMode === "table")("shadow-sm", ctx.viewMode === "table")("text-gray-900", ctx.viewMode === "table")("dark:text-white", ctx.viewMode === "table")("text-gray-500", ctx.viewMode !== "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tableConfig.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.tableConfig.loading && ctx.viewMode === "board");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.tableConfig.loading && ctx.viewMode === "table");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent, _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__.DataTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe]
      });
    }
  }
  return SurveyorPendingComponent;
})();

/***/ }),

/***/ 5192:
/*!******************************************************************!*\
  !*** ./src/app/surveyor/pages/stages/survey-stages.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyStagesComponent: () => (/* binding */ SurveyStagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/surveyor.service */ 3371);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);








function SurveyStagesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading stages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SurveyStagesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyStagesComponent_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleStageClick("pending"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Pending Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Surveys that need acceptance or rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyStagesComponent_div_11_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleStageClick("suspended"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12)(16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "circle", 23)(19, "line", 24)(20, "line", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Suspended Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Surveys suspended for another time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.currentStats.pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.currentStats.suspended);
  }
}
let SurveyStagesComponent = /*#__PURE__*/(() => {
  class SurveyStagesComponent {
    constructor(router, route, surveyorService, authService) {
      this.router = router;
      this.route = route;
      this.surveyorService = surveyorService;
      this.authService = authService;
      this.loading = true;
      this.surveyType = 'issuance';
      this.stats = {
        issuance: {
          pending: 0,
          suspended: 0
        },
        claim: {
          pending: 0,
          suspended: 0
        }
      };
      this.user = null;
    }
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params['type']) {
          this.surveyType = params['type'];
          this.fetchStats();
        }
      });
      this.authService.currentUser.subscribe(user => {
        this.user = user;
        if (user && !this.stats[this.surveyType].pending) {// Initial load if not loaded
          // this.fetchStats(); // Removed duplicate call, param subscription handles it or we call it if params exist
        }
        if (user) {
          this.fetchStats();
        }
      });
    }
    fetchStats() {
      this.loading = true;
      const isIssuance = this.surveyType === 'issuance';
      const method = isIssuance ? this.surveyorService.listSurveys.bind(this.surveyorService) : this.surveyorService.listClaims.bind(this.surveyorService);
      const statusCounts = {
        pending: 0,
        suspended: 0
      };
      // Fetch pending surveys (state = 'surveyor')
      method({
        limit: 100,
        domain: JSON.stringify([['state', '=', 'surveyor']])
      }).subscribe({
        next: response => {
          let surveys = [];
          // Handle different response structures
          if (response.surveys) {
            surveys = response.surveys;
          } else if (response.data && response.data.surveys) {
            surveys = response.data.surveys;
          } else if (response.data && response.data.result && response.data.result.data) {
            surveys = response.data.result.data;
          } else if (response.data && response.data.data) {
            surveys = response.data.data;
          } else if (response.data && Array.isArray(response.data)) {
            surveys = response.data;
          } else if (Array.isArray(response)) {
            surveys = response;
          }
          statusCounts.pending = surveys.length;
          // Fetch suspended surveys (state = 'suspended')
          method({
            limit: 100,
            domain: JSON.stringify([['state', '=', 'suspended']])
          }).subscribe({
            next: suspendedResponse => {
              let suspendedSurveys = [];
              // Handle different response structures
              if (suspendedResponse.surveys) {
                suspendedSurveys = suspendedResponse.surveys;
              } else if (suspendedResponse.data && suspendedResponse.data.surveys) {
                suspendedSurveys = suspendedResponse.data.surveys;
              } else if (suspendedResponse.data && suspendedResponse.data.result && suspendedResponse.data.result.data) {
                suspendedSurveys = suspendedResponse.data.result.data;
              } else if (suspendedResponse.data && suspendedResponse.data.data) {
                suspendedSurveys = suspendedResponse.data.data;
              } else if (suspendedResponse.data && Array.isArray(suspendedResponse.data)) {
                suspendedSurveys = suspendedResponse.data;
              } else if (Array.isArray(suspendedResponse)) {
                suspendedSurveys = suspendedResponse;
              }
              statusCounts.suspended = suspendedSurveys.length;
              this.stats[this.surveyType] = statusCounts;
              this.loading = false;
            },
            error: err => {
              console.error('Error fetching suspended survey stats:', err);
              this.stats[this.surveyType] = statusCounts;
              this.loading = false;
            }
          });
        },
        error: err => {
          console.error('Error fetching pending survey stats:', err);
          this.loading = false;
        }
      });
    }
    handleStageClick(stage) {
      let route = '/dashboard/surveyor/pending';
      let queryParams = {
        type: this.surveyType
      };
      if (stage === 'suspended') {
        route = '/dashboard/surveyor/suspended';
      } else if (stage === 'pending') {
        route = '/dashboard/surveyor/pending';
      } else {
        // Fallback for other potential stages
        queryParams.status = stage;
      }
      this.router.navigate([route], {
        queryParams: queryParams
      });
    }
    get currentStats() {
      return this.stats[this.surveyType];
    }
    get title() {
      return this.surveyType === 'issuance' ? 'Issuance Survey Stages' : 'Claim Survey Stages';
    }
    get description() {
      return this.surveyType === 'issuance' ? 'Track pre-risk inspections by stage' : 'Track claim inspections by stage';
    }
    static {
      this.ɵfac = function SurveyStagesComponent_Factory(t) {
        return new (t || SurveyStagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_1__.SurveyorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SurveyStagesComponent,
        selectors: [["app-survey-stages"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
        decls: 12,
        vars: 4,
        consts: [[1, "mb-8"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2"], [1, "text-gray-600", "dark:text-gray-400"], [1, "px-4", "py-2", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-50", "dark:hover:bg-gray-700", "shadow-sm", "transition-colors", 3, "click"], ["class", "text-center py-12", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 gap-6", 4, "ngIf"], [1, "text-center", "py-12"], [1, "inline-block", "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-primary"], [1, "mt-4", "text-gray-600", "dark:text-gray-400"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "group", "relative", "overflow-hidden", "bg-white", "dark:bg-gray-800", "p-6", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "hover:border-primary/50", "dark:hover:border-primary/50", "hover:shadow-lg", "transition-all", "duration-300", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "p-3", "rounded-lg", "bg-yellow-100", "dark:bg-gray-700"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-6", "h-6", "text-yellow-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5", "text-gray-400", "group-hover:text-primary", "group-hover:translate-x-1", "transition-all", "duration-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [1, "text-lg", "font-bold", "text-gray-900", "dark:text-white", "mb-1"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mb-4"], [1, "text-3xl", "font-bold", "text-primary"], [1, "p-3", "rounded-lg", "bg-red-100", "dark:bg-gray-700"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6", "text-red-600"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "10", "x2", "10", "y1", "15", "y2", "9"], ["x1", "14", "x2", "14", "y1", "15", "y2", "9"]],
        template: function SurveyStagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyStagesComponent_Template_button_click_8_listener() {
              return ctx.router.navigate(["/dashboard/surveyor"]);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Back to Overview ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SurveyStagesComponent_div_10_Template, 4, 0, "div", 5)(11, SurveyStagesComponent_div_11_Template, 29, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLayoutComponent]
      });
    }
  }
  return SurveyStagesComponent;
})();

/***/ }),

/***/ 8501:
/*!***************************************************************************!*\
  !*** ./src/app/surveyor/pages/survey-details/survey-details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyDetailsComponent: () => (/* binding */ SurveyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/surveyor.service */ 3371);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/file-upload/file-upload.component */ 4317);
/* harmony import */ var _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/selection-modal/selection-modal.component */ 2209);
/* harmony import */ var _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/chat-box/chat-box.component */ 2911);
/* harmony import */ var _components_survey_wizard_survey_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/survey-wizard/survey-wizard.component */ 8899);














const _c0 = (a0, a1, a2, a3) => ({
  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200": a0,
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200": a1,
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200": a2,
  "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200": a3
});
const _c1 = () => ({
  value: "excellent",
  label: "Excellent"
});
const _c2 = () => ({
  value: "good",
  label: "Good"
});
const _c3 = () => ({
  value: "fair",
  label: "Fair"
});
const _c4 = () => ({
  value: "poor",
  label: "Poor"
});
const _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function SurveyDetailsComponent_app_survey_wizard_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-survey-wizard", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("surveyId", ctx_r0.surveyId)("surveyData", ctx_r0.survey);
  }
}
function SurveyDetailsComponent_div_2_app_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_app_button_44_Template_app_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onReject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyDetailsComponent_div_2_app_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_app_button_45_Template_app_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onSuspend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Suspend");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyDetailsComponent_div_2_app_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_app_button_46_Template_app_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onAccept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyDetailsComponent_div_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 55);
  }
}
function SurveyDetailsComponent_div_2_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 55);
  }
}
function SurveyDetailsComponent_div_2_button_63_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 55);
  }
}
function SurveyDetailsComponent_div_2_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_button_63_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.setActiveTab("documents"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "path", 56)(3, "polyline", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Documents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, SurveyDetailsComponent_div_2_button_63_div_5_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.activeTab === "documents" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "documents");
  }
}
function SurveyDetailsComponent_div_2_button_64_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 55);
  }
}
function SurveyDetailsComponent_div_2_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_button_64_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.setActiveTab("actions"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "path", 57)(3, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, SurveyDetailsComponent_div_2_button_64_div_5_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.activeTab === "actions" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "actions");
  }
}
function SurveyDetailsComponent_div_2_div_66_app_card_67_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h4", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Conclusion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.survey.conclusion, "");
  }
}
function SurveyDetailsComponent_div_2_div_66_app_card_67_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "h4", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Recommendation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.survey.recommendation, "");
  }
}
function SurveyDetailsComponent_div_2_div_66_app_card_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-card", 77)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveyDetailsComponent_div_2_div_66_app_card_67_div_2_Template, 5, 1, "div", 78)(3, SurveyDetailsComponent_div_2_div_66_app_card_67_div_3_Template, 5, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.conclusion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.recommendation);
  }
}
function SurveyDetailsComponent_div_2_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "app-card", 61)(3, "div", 62)(4, "div", 63)(5, "div")(6, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Survey Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div")(11, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Sequence");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div")(17, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Assign Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div")(23, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "app-card", 67)(29, "div", 62)(30, "div")(31, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div")(36, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div")(43, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "app-card", 71)(48, "div", 62)(49, "div", 72)(50, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Zero Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](54, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 72)(56, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Market Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](60, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 72)(62, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Salvage Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](66, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, SurveyDetailsComponent_div_2_div_66_app_card_67_Template, 4, 2, "app-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "app-chat-box", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.survey.survey_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.survey_type_sequence);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](21, 15, ctx_r0.survey.assign_date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.due_date ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](27, 18, ctx_r0.survey.due_date, "medium") : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.survey.customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.survey.customer_phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r0.survey.customer_street, " ", ctx_r0.survey.state_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](54, 21, ctx_r0.survey.zero_price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](60, 23, ctx_r0.survey.market_value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](66, 25, ctx_r0.survey.salvage_amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.conclusion || ctx_r0.survey.recommendation);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("modelName", "insurance.survey")("recordId", ctx_r0.survey.id);
  }
}
function SurveyDetailsComponent_div_2_div_67_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyDetailsComponent_div_2_div_67_div_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyDetailsComponent_div_2_div_67_div_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Roadside");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SurveyDetailsComponent_div_2_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 82)(1, "app-card", 83)(2, "div", 84)(3, "div", 85)(4, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Make & Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 85)(9, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Plate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 85)(14, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Chassis Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 85)(19, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Motor Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 85)(24, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 85)(29, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, SurveyDetailsComponent_div_2_div_67_div_1_span_34_Template, 2, 0, "span", 90)(35, SurveyDetailsComponent_div_2_div_67_div_1_span_35_Template, 2, 0, "span", 91)(36, SurveyDetailsComponent_div_2_div_67_div_1_span_36_Template, 2, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "app-card", 93)(38, "div", 62)(39, "div")(40, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Driver Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div")(45, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "License");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div")(52, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r0.survey.risk_info.vehicle_make_name, " - ", ctx_r0.survey.risk_info.vehicle_model_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.survey.risk_info.vehicle_plate_number || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.vehicle_chassis_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.vehicle_motor_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.vehicle_manufacture_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.vehicle_color_name || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.risk_info.vehicle_has_radio);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.risk_info.vehicle_has_conditioning);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.risk_info.vehicle_has_roadside);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.driver_name || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.driver_license_number || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Expires: ", ctx_r0.survey.risk_info.driver_license_expiry || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.risk_info.driver_date_of_birth || "N/A");
  }
}
function SurveyDetailsComponent_div_2_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveyDetailsComponent_div_2_div_67_div_1_Template, 56, 14, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.risk_info);
  }
}
function SurveyDetailsComponent_div_2_div_68_div_2_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\"", doc_r8.comment, "\"");
  }
}
function SurveyDetailsComponent_div_2_div_68_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 112)(1, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const doc_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", doc_r8.files.length, " files");
  }
}
function SurveyDetailsComponent_div_2_div_68_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 101)(1, "div", 102)(2, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "svg", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "path", 105)(5, "polyline", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 106)(7, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, SurveyDetailsComponent_div_2_div_68_div_2_p_11_Template, 2, 1, "p", 109)(12, SurveyDetailsComponent_div_2_div_68_div_2_div_12_Template, 3, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const doc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", doc_r8.document_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](doc_r8.document_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](doc_r8.document_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", doc_r8.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", doc_r8.files && doc_r8.files.length);
  }
}
function SurveyDetailsComponent_div_2_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 98)(1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SurveyDetailsComponent_div_2_div_68_div_2_Template, 13, 5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.survey.survey_documents);
  }
}
function SurveyDetailsComponent_div_2_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 98)(1, "app-card", 114)(2, "form", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function SurveyDetailsComponent_div_2_div_69_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.submitAssessment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div")(4, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Vehicle Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "app-selection-modal", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("valueChange", function SurveyDetailsComponent_div_2_div_69_Template_app_selection_modal_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.assessmentForm.condition, $event) || (ctx_r0.assessmentForm.condition = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div")(8, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Estimated Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function SurveyDetailsComponent_div_2_div_69_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.assessmentForm.estimatedValue, $event) || (ctx_r0.assessmentForm.estimatedValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div")(12, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Recommendations");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "textarea", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("ngModelChange", function SurveyDetailsComponent_div_2_div_69_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx_r0.assessmentForm.recommendations, $event) || (ctx_r0.assessmentForm.recommendations = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div")(16, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Upload Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "app-file-upload", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("filesSelected", function SurveyDetailsComponent_div_2_div_69_Template_app_file_upload_filesSelected_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.onFilesSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 121)(20, "app-button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Submit Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](11, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](7, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("value", ctx_r0.assessmentForm.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.assessmentForm.estimatedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.assessmentForm.recommendations);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("accept", "image/*")("multiple", true);
  }
}
function SurveyDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 13)(12, "div", 14)(13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "path", 17)(16, "polyline", 18)(17, "path", 19)(18, "path", 20)(19, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div")(21, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 24)(26, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "rect", 28)(31, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "rect", 30)(36, "line", 31)(37, "line", 32)(38, "line", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 34)(42, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, SurveyDetailsComponent_div_2_app_button_44_Template, 2, 0, "app-button", 36)(45, SurveyDetailsComponent_div_2_app_button_45_Template, 2, 0, "app-button", 37)(46, SurveyDetailsComponent_div_2_app_button_46_Template, 2, 0, "app-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 39)(48, "nav", 40)(49, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.setActiveTab("overview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "path", 17)(52, "polyline", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, " Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](54, SurveyDetailsComponent_div_2_div_54_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SurveyDetailsComponent_div_2_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r0.setActiveTab("risk"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "path", 44)(58, "path", 45)(59, "path", 46)(60, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, " Risk Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, SurveyDetailsComponent_div_2_div_62_Template, 1, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, SurveyDetailsComponent_div_2_button_63_Template, 6, 2, "button", 48)(64, SurveyDetailsComponent_div_2_button_64_Template, 6, 2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, SurveyDetailsComponent_div_2_div_66_Template, 69, 27, "div", 50)(67, SurveyDetailsComponent_div_2_div_67_Template, 2, 1, "div", 50)(68, SurveyDetailsComponent_div_2_div_68_Template, 3, 1, "div", 51)(69, SurveyDetailsComponent_div_2_div_69_Template, 22, 16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.survey.survey_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r0.survey.surveyor_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Survey #", ctx_r0.survey.survey_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.survey.survey_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.survey.product_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Due: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](40, 21, ctx_r0.survey.due_date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](24, _c0, ctx_r0.survey.state === "pending" || ctx_r0.survey.state === "surveyor assigned", ctx_r0.survey.state === "in_progress", ctx_r0.survey.state === "completed" || ctx_r0.survey.state === "accepted", ctx_r0.survey.state === "rejected" || ctx_r0.survey.state === "suspended"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.survey.state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.state === "surveyor assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.state === "surveyor assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.state === "surveyor assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.activeTab === "overview" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r0.activeTab === "risk" ? "text-primary" : "text-gray-500 dark:text-gray-400 hover:text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.survey_documents && ctx_r0.survey.survey_documents.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.survey.state !== "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "actions");
  }
}
function SurveyDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-loading-spinner", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", true);
  }
}
let SurveyDetailsComponent = /*#__PURE__*/(() => {
  class SurveyDetailsComponent {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
    constructor(route, router, surveyorService, notificationService) {
      this.route = route;
      this.router = router;
      this.surveyorService = surveyorService;
      this.notificationService = notificationService;
      this.surveyId = '';
      this.survey = null;
      this.loading = true;
      this.assessmentForm = {
        condition: '',
        estimatedValue: '',
        recommendations: '',
        photos: []
      };
      this.activeTab = 'overview';
      this.showWizard = false;
    }
    ngOnInit() {
      this.surveyId = this.route.snapshot.params['id'];
      this.loadSurvey();
    }
    loadSurvey() {
      this.loading = true;
      this.surveyorService.getSurveyDetails(this.surveyId).subscribe({
        next: response => {
          // Assuming response might be wrapped or direct
          this.survey = response.data || response;
          // Show wizard if survey is in progress or surveying state
          const state = (this.survey.state || '').toLowerCase();
          this.showWizard = state === 'in_progress' || state === 'surveying';
          this.loading = false;
        },
        error: err => {
          console.error('Error loading survey details:', err);
          this.notificationService.error('Failed to load survey details');
          this.loading = false;
        }
      });
    }
    onFilesSelected(files) {
      this.assessmentForm.photos = files;
    }
    goBack() {
      this.router.navigate(['/dashboard/surveyor/pending']);
    }
    onAccept() {
      this.loading = true;
      this.surveyorService.acceptSurvey(this.surveyId).subscribe({
        next: () => {
          this.notificationService.success('Survey accepted successfully');
          this.loadSurvey();
        },
        error: err => {
          console.error('Error accepting survey:', err);
          this.notificationService.error('Failed to accept survey');
          this.loading = false;
        }
      });
    }
    onSuspend() {
      this.loading = true;
      this.surveyorService.suspendSurvey(this.surveyId).subscribe({
        next: () => {
          this.notificationService.success('Survey suspended successfully');
          this.loadSurvey();
        },
        error: err => {
          console.error('Error suspending survey:', err);
          this.notificationService.error('Failed to suspend survey');
          this.loading = false;
        }
      });
    }
    onReject() {
      if (confirm('Are you sure you want to reject this survey?')) {
        this.loading = true;
        this.surveyorService.rejectSurvey(this.surveyId).subscribe({
          next: () => {
            this.notificationService.success('Survey rejected successfully');
            this.router.navigate(['/dashboard/surveyor/pending']);
          },
          error: err => {
            console.error('Error rejecting survey:', err);
            this.notificationService.error('Failed to reject survey');
            this.loading = false;
          }
        });
      }
    }
    submitAssessment() {
      console.log('Submitting assessment:', this.assessmentForm);
      this.notificationService.success('Assessment submitted successfully!');
      this.goBack();
    }
    static {
      this.ɵfac = function SurveyDetailsComponent_Factory(t) {
        return new (t || SurveyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_surveyor_service__WEBPACK_IMPORTED_MODULE_0__.SurveyorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: SurveyDetailsComponent,
        selectors: [["app-survey-details"]],
        decls: 4,
        vars: 3,
        consts: [[3, "surveyId", "surveyData", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "flex items-center justify-center h-96", 4, "ngIf"], [3, "surveyId", "surveyData"], [1, "space-y-6"], [1, "mb-8", "animate-fadeIn", "relative", "overflow-hidden", "rounded-2xl", "p-4", "-m-4"], [1, "absolute", "inset-0", "pointer-events-none", "z-0", 2, "background-image", "url('assets/img/backgrounds/survey-header.svg')", "background-repeat", "no-repeat", "background-position", "center", "background-size", "cover"], [1, "relative", "z-10"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-200", "mb-4"], [1, "hover:text-white", "transition-all", "duration-300", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "m9 18 6-6-6-6"], [1, "text-white", "font-medium"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-center", "justify-between", "gap-4"], [1, "flex", "items-start", "gap-4"], [1, "w-14", "h-14", "bg-white/10", "backdrop-blur-sm", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "shadow-lg", "border", "border-white/20"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z"], ["points", "14 2 14 8 20 8"], ["d", "M16 13H8"], ["d", "M16 17H8"], ["d", "M10 9H8"], [1, "text-3xl", "font-bold", "text-white", "mb-1"], [1, "text-lg", "text-gray-200", "font-medium", "mb-2"], [1, "flex", "flex-wrap", "items-center", "gap-3", "text-sm", "text-gray-200"], [1, "flex", "items-center", "gap-1", "bg-white/20", "px-2", "py-0.5", "rounded", "text-xs", "font-semibold", "uppercase", "text-white"], [1, "flex", "items-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "flex", "flex-wrap", "items-center", "gap-3"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-semibold", "capitalize", "flex", "items-center", "gap-2", 3, "ngClass"], ["variant", "danger", 3, "click", 4, "ngIf"], ["variant", "secondary", 3, "click", 4, "ngIf"], ["variant", "primary", 3, "click", 4, "ngIf"], [1, "border-b", "border-gray-200", "mb-6", "animate-fadeIn", 2, "animation-delay", "100ms"], [1, "flex", "gap-8", "overflow-x-auto"], [1, "pb-4", "px-2", "text-sm", "font-medium", "capitalize", "transition-all", "relative", "whitespace-nowrap", "flex", "items-center", "gap-2", 3, "click", "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-full", 4, "ngIf"], ["d", "m18.8 13.9 1.1-1.1c.3-.3.3-.8 0-1.1l-6.8-6.8a1.5 1.5 0 0 0-2.1 0l-6.8 6.8c-.3.3-.3.8 0 1.1l1.1 1.1"], ["d", "m8.3 11.4 1.4-2.8 5.7 5.7-2.8 1.4"], ["d", "m11.1 8.6 2.8 1.4"], ["d", "m9.7 7.2 2.8 1.4"], ["class", "pb-4 px-2 text-sm font-medium capitalize transition-all relative whitespace-nowrap flex items-center gap-2", 3, "ngClass", "click", 4, "ngIf"], [1, "space-y-8", "min-h-[400px]"], ["class", "space-y-6 animate-fadeIn", 4, "ngIf"], ["class", "animate-fadeIn", 4, "ngIf"], ["variant", "danger", 3, "click"], ["variant", "secondary", 3, "click"], ["variant", "primary", 3, "click"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-0.5", "bg-gradient-to-r", "from-blue-500", "to-blue-600", "rounded-t-full"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "space-y-6", "animate-fadeIn"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["title", "Survey Information"], [1, "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], [1, "text-xs", "text-gray-500", "dark:text-gray-400", "uppercase"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "border-t", "border-gray-100", "dark:border-gray-700", "py-2"], ["title", "Customer Information"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-900", "dark:text-white"], ["title", "Financials"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "font-bold", "text-gray-900", "dark:text-white"], ["title", "Conclusion & Recommendations", 4, "ngIf"], [3, "modelName", "recordId"], ["title", "Conclusion & Recommendations"], [4, "ngIf"], [1, "text-sm", "font-bold", "text-gray-900", "dark:text-white", "mb-1", "uppercase"], [1, "text-gray-600", "dark:text-gray-400", "bg-gray-50", "dark:bg-gray-800", "p-3", "rounded-lg", "text-sm"], ["class", "grid grid-cols-1 md:grid-cols-2 gap-6", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["title", "Vehicle Information"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6", "text-sm"], [1, "space-y-1"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "font-mono", "font-medium", "bg-gray-100", "dark:bg-gray-700", "px-2", "py-0.5", "rounded", "inline-block"], [1, "font-mono", "text-gray-900", "dark:text-white"], [1, "mt-4", "pt-4", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "flex-wrap", "gap-2"], ["class", "px-2 py-1 bg-green-100 text-green-800 rounded text-xs dark:bg-green-900 dark:text-green-200", 4, "ngIf"], ["class", "px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs dark:bg-blue-900 dark:text-blue-200", 4, "ngIf"], ["class", "px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs dark:bg-purple-900 dark:text-purple-200", 4, "ngIf"], ["title", "Driver Information"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "px-2", "py-1", "bg-green-100", "text-green-800", "rounded", "text-xs", "dark:bg-green-900", "dark:text-green-200"], [1, "px-2", "py-1", "bg-blue-100", "text-blue-800", "rounded", "text-xs", "dark:bg-blue-900", "dark:text-blue-200"], [1, "px-2", "py-1", "bg-purple-100", "text-purple-800", "rounded", "text-xs", "dark:bg-purple-900", "dark:text-purple-200"], [1, "animate-fadeIn"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4"], ["class", "bg-white dark:bg-gray-800 p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-md transition", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "p-4", "border", "border-gray-100", "dark:border-gray-700", "rounded-xl", "hover:shadow-md", "transition"], [1, "flex", "items-start", "gap-3", "mb-2"], [1, "p-2", "bg-blue-100", "text-blue-600", "rounded-lg", "dark:bg-blue-900", "dark:text-blue-300"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], [1, "flex-1", "overflow-hidden"], [1, "font-medium", "text-gray-900", "dark:text-white", "truncate", 3, "title"], [1, "text-xs", "text-gray-500", "truncate"], ["class", "text-xs text-gray-500 italic mt-2 line-clamp-2", 4, "ngIf"], ["class", "flex gap-2 mt-3", 4, "ngIf"], [1, "text-xs", "text-gray-500", "italic", "mt-2", "line-clamp-2"], [1, "flex", "gap-2", "mt-3"], [1, "text-xs", "text-blue-600", "bg-blue-50", "px-2", "py-1", "rounded", "dark:bg-blue-900/30", "dark:text-blue-300"], ["title", "Submit Assessment"], [1, "space-y-6", 3, "ngSubmit"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], ["label", "Vehicle Condition", "title", "Select Vehicle Condition", "subtitle", "Choose the condition of the vehicle", "placeholder", "Select condition", "valueKey", "value", "displayKey", "label", 3, "valueChange", "options", "value", "required"], ["type", "number", "name", "estimatedValue", "required", "", "placeholder", "0.00", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], ["name", "recommendations", "required", "", "rows", "5", "placeholder", "Enter your recommendations...", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [3, "filesSelected", "accept", "multiple"], [1, "flex", "justify-end"], ["type", "submit", "variant", "primary"], [1, "flex", "items-center", "justify-center", "h-96"], ["message", "Loading survey details...", 3, "loading"]],
        template: function SurveyDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-dashboard-layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SurveyDetailsComponent_app_survey_wizard_1_Template, 1, 2, "app-survey-wizard", 0)(2, SurveyDetailsComponent_div_2_Template, 70, 29, "div", 1)(3, SurveyDetailsComponent_div_3_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showWizard && !ctx.loading && ctx.survey);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showWizard && !ctx.loading && ctx.survey);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent, _shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__.FileUploadComponent, _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_7__.SelectionModalComponent, _shared_components_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__.ChatBoxComponent, _components_survey_wizard_survey_wizard_component__WEBPACK_IMPORTED_MODULE_9__.SurveyWizardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe]
      });
    }
  }
  return SurveyDetailsComponent;
})();

/***/ }),

/***/ 6574:
/*!*****************************************************!*\
  !*** ./src/app/surveyor/surveyor-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyorRoutingModule: () => (/* binding */ SurveyorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_dashboard_surveyor_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/surveyor-dashboard.component */ 5373);
/* harmony import */ var _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pending/surveyor-pending.component */ 8851);
/* harmony import */ var _pages_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/survey-details/survey-details.component */ 8501);
/* harmony import */ var _pages_claims_surveyor_claims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/claims/surveyor-claims.component */ 239);
/* harmony import */ var _pages_stages_survey_stages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/stages/survey-stages.component */ 5192);
/* harmony import */ var _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pages/profile/profile.component */ 1855);
/* harmony import */ var _shared_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pages/settings/settings.component */ 4879);
/* harmony import */ var _components_survey_wizard_survey_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/survey-wizard/survey-wizard.component */ 8899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7705);











const routes = [{
  path: '',
  component: _pages_dashboard_surveyor_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SurveyorDashboardComponent
}, {
  path: 'stages',
  component: _pages_stages_survey_stages_component__WEBPACK_IMPORTED_MODULE_4__.SurveyStagesComponent
}, {
  path: 'pending',
  component: _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_1__.SurveyorPendingComponent
}, {
  path: 'suspended',
  component: _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_1__.SurveyorPendingComponent
}, {
  path: 'in-progress',
  component: _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_1__.SurveyorPendingComponent
}, {
  path: 'in-progress/issuance',
  component: _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_1__.SurveyorPendingComponent
}, {
  path: 'in-progress/claims',
  component: _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_1__.SurveyorPendingComponent
}, {
  path: 'surveys/:id',
  component: _pages_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_2__.SurveyDetailsComponent
}, {
  path: 'wizard/:id',
  component: _components_survey_wizard_survey_wizard_component__WEBPACK_IMPORTED_MODULE_7__.SurveyWizardComponent
}, {
  path: 'claims',
  component: _pages_claims_surveyor_claims_component__WEBPACK_IMPORTED_MODULE_3__.SurveyorClaimsComponent
}, {
  path: 'profile',
  component: _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent
}, {
  path: 'settings',
  component: _shared_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent
}];
let SurveyorRoutingModule = /*#__PURE__*/(() => {
  class SurveyorRoutingModule {
    static {
      this.ɵfac = function SurveyorRoutingModule_Factory(t) {
        return new (t || SurveyorRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: SurveyorRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      });
    }
  }
  return SurveyorRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SurveyorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 6727:
/*!*********************************************!*\
  !*** ./src/app/surveyor/surveyor.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyorModule: () => (/* binding */ SurveyorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _surveyor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surveyor-routing.module */ 6574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _pages_dashboard_surveyor_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/surveyor-dashboard.component */ 5373);
/* harmony import */ var _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pending/surveyor-pending.component */ 8851);
/* harmony import */ var _pages_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/survey-details/survey-details.component */ 8501);
/* harmony import */ var _pages_claims_surveyor_claims_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/claims/surveyor-claims.component */ 239);
/* harmony import */ var _components_survey_wizard_survey_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/survey-wizard/survey-wizard.component */ 8899);
/* harmony import */ var _components_survey_exclusions_survey_exclusions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/survey-exclusions/survey-exclusions.component */ 4331);
/* harmony import */ var _components_issuance_survey_form_issuance_survey_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/issuance-survey-form/issuance-survey-form.component */ 3715);
/* harmony import */ var _components_claim_survey_form_claim_survey_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/claim-survey-form/claim-survey-form.component */ 3655);
/* harmony import */ var _components_add_estimation_item_modal_add_estimation_item_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-estimation-item-modal/add-estimation-item-modal.component */ 2847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7705);















let SurveyorModule = /*#__PURE__*/(() => {
  class SurveyorModule {
    static {
      this.ɵfac = function SurveyorModule_Factory(t) {
        return new (t || SurveyorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: SurveyorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _surveyor_routing_module__WEBPACK_IMPORTED_MODULE_0__.SurveyorRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _components_survey_exclusions_survey_exclusions_component__WEBPACK_IMPORTED_MODULE_7__.SurveyExclusionsComponent]
      });
    }
  }
  return SurveyorModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SurveyorModule, {
    declarations: [_pages_dashboard_surveyor_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.SurveyorDashboardComponent, _pages_pending_surveyor_pending_component__WEBPACK_IMPORTED_MODULE_3__.SurveyorPendingComponent, _pages_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_4__.SurveyDetailsComponent, _pages_claims_surveyor_claims_component__WEBPACK_IMPORTED_MODULE_5__.SurveyorClaimsComponent, _components_survey_wizard_survey_wizard_component__WEBPACK_IMPORTED_MODULE_6__.SurveyWizardComponent, _components_issuance_survey_form_issuance_survey_form_component__WEBPACK_IMPORTED_MODULE_8__.IssuanceSurveyFormComponent, _components_claim_survey_form_claim_survey_form_component__WEBPACK_IMPORTED_MODULE_9__.ClaimSurveyFormComponent, _components_add_estimation_item_modal_add_estimation_item_modal_component__WEBPACK_IMPORTED_MODULE_10__.AddEstimationItemModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _surveyor_routing_module__WEBPACK_IMPORTED_MODULE_0__.SurveyorRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _components_survey_exclusions_survey_exclusions_component__WEBPACK_IMPORTED_MODULE_7__.SurveyExclusionsComponent]
  });
})();

/***/ }),

/***/ 8399:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 6129);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 152:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 3236);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 4360);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 3260:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 3961);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 7302:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 3260);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8198);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 7908);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 707:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 8399);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 3236:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 7302);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 707);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 8198:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=intervalProvider.js.map

/***/ })

}]);