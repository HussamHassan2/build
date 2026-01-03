"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[206],{

/***/ 621:
/*!*************************************************!*\
  !*** ./src/app/core/services/broker.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerService: () => (/* binding */ BrokerService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 6344);



let BrokerService = /*#__PURE__*/(() => {
  class BrokerService {
    constructor(api) {
      this.api = api;
    }
    /**
     * Get Commissions
     */
    getCommissions(agentId, paymentStatus = 'paid', limit, offset) {
      const params = {
        agent_id: agentId,
        payment_status: paymentStatus
      };
      if (limit !== undefined) params.limit = limit;
      if (offset !== undefined) params.offset = offset;
      return this.api.get('/v1/broker/commissions', {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        if (response.error && response.error.message && response.error.message.includes('No commission lines found')) {
          return {
            result: {
              data: []
            }
          };
        }
        return response;
      }));
    }
    /**
     * Get Premiums
     */
    getPremiums(agentId, paymentStatus = 'paid', limit, offset) {
      const params = {
        agent_id: agentId,
        payment_status: paymentStatus
      };
      if (limit !== undefined) params.limit = limit;
      if (offset !== undefined) params.offset = offset;
      return this.api.get('/v1/broker/premiums', {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        if (response.error && response.error.message && response.error.message.includes('No premiums found')) {
          return {
            result: {
              data: []
            }
          };
        }
        return response;
      }));
    }
    static {
      this.ɵfac = function BrokerService_Factory(t) {
        return new (t || BrokerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: BrokerService,
        factory: BrokerService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return BrokerService;
})();

/***/ }),

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

/***/ 2166:
/*!*************************************************!*\
  !*** ./src/app/core/services/policy.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PolicyService: () => (/* binding */ PolicyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 6344);


let PolicyService = /*#__PURE__*/(() => {
  class PolicyService {
    constructor(api) {
      this.api = api;
    }
    /**
     * List Policies - Matches React app's listPolicies method
     */
    listPolicies(params) {
      const domainStr = Array.isArray(params.domain) ? JSON.stringify(params.domain) : params.domain || '[]';
      const apiParams = {
        user_id: params.user_id,
        user_type: params.user_type,
        domain: domainStr
      };
      // Only include limit and offset if they are defined
      if (params.limit !== undefined) {
        apiParams.limit = params.limit;
      }
      if (params.offset !== undefined) {
        apiParams.offset = params.offset;
      }
      return this.api.get('/v1/policy/list-policies', {
        params: apiParams
      });
    }
    /**
     * Get Policy Details - Matches React app's getPolicy method
     */
    getPolicy(policyId) {
      return this.api.get('/v1/crm/get-policy', {
        params: {
          policy_id: policyId
        }
      });
    }
    /**
     * Download Policy PDF - Matches React app's downloadPolicyPdf method
     */
    downloadPolicyPdf(policyId) {
      return this.api.get(`/v1/crm/download-policy-pdf?policy_id=${policyId}`, {
        responseType: 'blob'
      });
    }
    /**
     * Renew Policy - Matches React app's renewPolicy method
     */
    renewPolicy(policyNumber) {
      return this.api.post('/v1/policy/renewal', {
        params: {
          data: {
            policy_number: policyNumber
          }
        }
      });
    }
    static {
      this.ɵfac = function PolicyService_Factory(t) {
        return new (t || PolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PolicyService,
        factory: PolicyService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PolicyService;
})();

/***/ }),

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

/***/ })

}]);