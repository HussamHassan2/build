"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[527],{

/***/ 1183:
/*!***********************************************************!*\
  !*** ./src/app/public/pages/contact/contact.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);



function ContactComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-wataniya-contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ContactComponent_ng_template_1_div_16_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, detail_r2), " ");
  }
}
function ContactComponent_ng_template_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i-lucide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContactComponent_ng_template_1_div_16_p_7_Template, 3, 3, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const info_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", info_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", info_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, info_r3.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", info_r3.details);
  }
}
function ContactComponent_ng_template_1_i_lucide_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-lucide", 48);
  }
}
function ContactComponent_ng_template_1_i_lucide_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-lucide", 49);
  }
}
function ContactComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2)(2, "section", 3)(3, "div", 4)(4, "div", 5)(5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8)(12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 10)(14, "div", 11)(15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ContactComponent_ng_template_1_div_16_Template, 8, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "section", 14)(18, "div", 11)(19, "div", 15)(20, "div", 16)(21, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_ng_template_1_Template_form_ngSubmit_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19)(26, "div")(27, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_ng_template_1_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r3.formData.name, $event) || (ctx_r3.formData.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div")(33, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_ng_template_1_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r3.formData.email, $event) || (ctx_r3.formData.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19)(39, "div")(40, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_ng_template_1_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r3.formData.phone, $event) || (ctx_r3.formData.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_ng_template_1_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r3.formData.subject, $event) || (ctx_r3.formData.subject = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div")(52, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ContactComponent_ng_template_1_Template_textarea_ngModelChange_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r3.formData.message, $event) || (ctx_r3.formData.message = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ContactComponent_ng_template_1_i_lucide_58_Template, 1, 0, "i-lucide", 27)(59, ContactComponent_ng_template_1_i_lucide_59_Template, 1, 0, "i-lucide", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 29)(64, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "iframe", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 32)(67, "div", 33)(68, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "ul", 35)(72, "li", 36)(73, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i-lucide", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li", 36)(79, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i-lucide", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li", 36)(85, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i-lucide", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 27, "CONTACT.HERO.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 29, "CONTACT.HERO.DESC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.contactInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 31, "CONTACT.FORM.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 33, "CONTACT.FORM.NAME_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.formData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 35, "CONTACT.FORM.NAME_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 37, "CONTACT.FORM.EMAIL_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.formData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 39, "CONTACT.FORM.EMAIL_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 41, "CONTACT.FORM.PHONE_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.formData.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 43, "CONTACT.FORM.PHONE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 45, "CONTACT.FORM.SUBJECT_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.formData.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 47, "CONTACT.FORM.SUBJECT_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 49, "CONTACT.FORM.MESSAGE_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.formData.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 51, "CONTACT.FORM.MESSAGE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 53, "CONTACT.FORM.SENDING") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 55, "CONTACT.FORM.SUBMIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 57, "CONTACT.WHY_US.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](77, 59, "CONTACT.WHY_US.REASON_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](83, 61, "CONTACT.WHY_US.REASON_2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](89, 63, "CONTACT.WHY_US.REASON_3"));
  }
}
let ContactComponent = /*#__PURE__*/(() => {
  class ContactComponent {
    constructor(notificationService) {
      this.notificationService = notificationService;
      this.clientId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId;
      this.loading = false;
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
      this.contactInfo = [{
        icon: 'phone',
        title: 'CONTACT.INFO.PHONE',
        details: ['+971 4 123 4567', '+971 50 123 4567'],
        color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
      }, {
        icon: 'mail',
        title: 'CONTACT.INFO.EMAIL',
        details: ['info@orientinsurance.com', 'support@orientinsurance.com'],
        color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
      }, {
        icon: 'map-pin',
        title: 'CONTACT.INFO.ADDRESS',
        details: ['CONTACT.INFO.ADDRESS_DETAILS.CITY', 'CONTACT.INFO.ADDRESS_DETAILS.BUILDING'],
        color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
      }, {
        icon: 'clock',
        title: 'CONTACT.INFO.BUSINESS_HOURS',
        details: ['CONTACT.INFO.HOURS_DETAILS.WEEKDAYS', 'CONTACT.INFO.HOURS_DETAILS.WEEKEND'],
        color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
      }];
    }
    onSubmit() {
      this.loading = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Contact form submitted:', this.formData);
        this.notificationService.success('Thank you for contacting us! We will get back to you soon.');
        this.loading = false;
        this.resetForm();
      }, 1500);
    }
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }
    static {
      this.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 3,
        vars: 2,
        consts: [["orientTemplate", ""], [4, "ngIf", "ngIfElse"], [1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-navy", "text-white", "py-24", "relative", "overflow-hidden"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "relative", "z-10"], [1, "text-center"], [1, "text-4xl", "md:text-5xl", "font-extrabold", "mb-6"], [1, "text-xl", "text-blue-100", "max-w-2xl", "mx-auto", "opacity-90"], [1, "absolute", "top-0", "right-0", "w-96", "h-96", "bg-white/5", "rounded-full", "blur-3xl", "-mr-32", "-mt-32"], [1, "absolute", "bottom-0", "left-0", "w-96", "h-96", "bg-primary/20", "rounded-full", "blur-3xl", "-ml-32", "-mb-32"], [1, "py-12", "-mt-16"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100 dark:border-gray-700", 4, "ngFor", "ngForOf"], [1, "py-16"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-12"], [1, "bg-white", "dark:bg-gray-800", "rounded-3xl", "shadow-xl", "p-8", "md:p-10", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-8"], [1, "space-y-6", 3, "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300", "mb-2"], ["type", "text", "name", "name", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "focus:ring-4", "focus:ring-primary/10", "focus:border-primary", "transition-all", "outline-none", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "email", "name", "email", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "focus:ring-4", "focus:ring-primary/10", "focus:border-primary", "transition-all", "outline-none", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "tel", "name", "phone", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "focus:ring-4", "focus:ring-primary/10", "focus:border-primary", "transition-all", "outline-none", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "text", "name", "subject", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "focus:ring-4", "focus:ring-primary/10", "focus:border-primary", "transition-all", "outline-none", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "message", "rows", "5", "required", "", 1, "w-full", "px-4", "py-3", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white", "focus:ring-4", "focus:ring-primary/10", "focus:border-primary", "transition-all", "outline-none", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "w-full", "py-4", "bg-primary", "hover:bg-primary-dark", "text-white", "font-bold", "rounded-xl", "transition-all", "shadow-lg", "shadow-primary/20", "flex", "items-center", "justify-center", "gap-3", "disabled:opacity-70", "group", 3, "disabled"], ["name", "loader-2", "class", "w-5 h-5 animate-spin", 4, "ngIf"], ["name", "send", "class", "w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform", 4, "ngIf"], [1, "space-y-8"], [1, "bg-white", "dark:bg-gray-800", "rounded-3xl", "shadow-xl", "overflow-hidden", "h-72", "border", "border-gray-100", "dark:border-gray-700"], ["title", "Office Location", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.970177!2d55.27!3d25.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMjXCsDEyJzAwLjAiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1234567890`, "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", 1, "grayscale", "hover:grayscale-0", "transition-all", "duration-500", 2, "border", "0"], [1, "bg-navy", "rounded-3xl", "shadow-xl", "p-8", "md:p-10", "text-white", "relative", "overflow-hidden"], [1, "relative", "z-10"], [1, "text-2xl", "font-bold", "mb-6"], [1, "space-y-4"], [1, "flex", "items-start", "gap-4"], [1, "w-6", "h-6", "bg-white/10", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", "mt-1"], ["name", "check", 1, "w-3.5", "h-3.5", "text-primary"], [1, "text-blue-100"], [1, "absolute", "bottom-0", "right-0", "w-32", "h-32", "bg-primary/20", "rounded-full", "blur-2xl", "-mr-10", "-mb-10"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-lg", "p-6", "hover:shadow-xl", "hover:-translate-y-1", "transition-all", "duration-300", "group", "border", "border-gray-100", "dark:border-gray-700"], [1, "w-12", "h-12", "rounded-xl", "flex", "items-center", "justify-center", "mb-6", "transition-transform", "group-hover:scale-110", "duration-300", 3, "ngClass"], [1, "w-6", "h-6", 3, "name"], [1, "text-lg", "font-bold", "text-navy", "dark:text-white", "mb-3"], [1, "space-y-1"], ["class", "text-gray-500 dark:text-gray-400 text-sm leading-relaxed", 4, "ngFor", "ngForOf"], [1, "text-gray-500", "dark:text-gray-400", "text-sm", "leading-relaxed"], ["name", "loader-2", 1, "w-5", "h-5", "animate-spin"], ["name", "send", 1, "w-5", "h-5", "group-hover:translate-x-1", "group-hover:-translate-y-1", "transition-transform"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContactComponent_ng_container_0_Template, 2, 0, "ng-container", 1)(1, ContactComponent_ng_template_1_Template, 91, 65, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }
          if (rf & 2) {
            const orientTemplate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clientId === "wataniya")("ngIfElse", orientTemplate_r5);
          }
        },
        encapsulation: 2
      });
    }
  }
  return ContactComponent;
})();

/***/ }),

/***/ 3963:
/*!********************************************************************!*\
  !*** ./src/app/public/pages/contact/wataniya-contact.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WataniyaContactComponent: () => (/* binding */ WataniyaContactComponent)
/* harmony export */ });
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 1183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3955);







function WataniyaContactComponent_i_lucide_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i-lucide", 28);
  }
}
function WataniyaContactComponent_div_61_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, detail_r1));
  }
}
function WataniyaContactComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i-lucide", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WataniyaContactComponent_div_61_p_8_Template, 3, 3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const info_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", info_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, info_r2.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", info_r2.details);
  }
}
let WataniyaContactComponent = /*#__PURE__*/(() => {
  class WataniyaContactComponent extends _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent {
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵWataniyaContactComponent_BaseFactory;
        return function WataniyaContactComponent_Factory(t) {
          return (ɵWataniyaContactComponent_BaseFactory || (ɵWataniyaContactComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](WataniyaContactComponent)))(t || WataniyaContactComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: WataniyaContactComponent,
        selectors: [["app-wataniya-contact"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 64,
        vars: 52,
        consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-navy", "py-12", "border-b", "border-gray-800"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "text-4xl", "font-bold", "text-white", "mb-2"], [1, "text-gray-400", "text-lg"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "-mt-8"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "bg-white", "rounded-lg", "shadow-lg", "overflow-hidden"], [1, "p-8"], [1, "text-2xl", "font-bold", "text-navy", "mb-6", "border-b", "pb-2"], [1, "space-y-6", 3, "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-semibold", "text-gray-700", "mb-2"], ["type", "text", "name", "name", "required", "", 1, "w-full", "px-4", "py-3", "rounded", "border", "border-gray-300", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "outline-none", "transition", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "email", "name", "email", "required", "", 1, "w-full", "px-4", "py-3", "rounded", "border", "border-gray-300", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "outline-none", "transition", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "tel", "name", "phone", 1, "w-full", "px-4", "py-3", "rounded", "border", "border-gray-300", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "outline-none", "transition", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "text", "name", "subject", "required", "", 1, "w-full", "px-4", "py-3", "rounded", "border", "border-gray-300", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "outline-none", "transition", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "message", "rows", "6", "required", "", 1, "w-full", "px-4", "py-3", "rounded", "border", "border-gray-300", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "outline-none", "transition", "resize-y", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "justify-end"], ["type", "submit", 1, "bg-primary", "hover:bg-primary-dark", "text-white", "font-bold", "py-3", "px-8", "rounded", "shadow", "transition-transform", "transform", "active:scale-95", "disabled:opacity-70", "flex", "items-center", "gap-2", 3, "disabled"], ["name", "loader-2", "class", "w-5 h-5 animate-spin", 4, "ngIf"], [1, "lg:col-span-1", "space-y-6"], [1, "bg-white", "rounded-lg", "shadow-lg", "p-6"], [1, "font-bold", "text-lg", "text-navy", "mb-4", "border-l-4", "border-primary", "pl-3"], [1, "space-y-6"], ["class", "flex items-start gap-4", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "h-64", "border", "border-gray-200"], ["title", "Office Location", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.970177!2d55.27!3d25.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMjXCsDEyJzAwLjAiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1234567890`, "width", "100%", "height", "100%", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], ["name", "loader-2", 1, "w-5", "h-5", "animate-spin"], [1, "flex", "items-start", "gap-4"], [1, "w-10", "h-10", "rounded-full", "bg-blue-50", "flex", "items-center", "justify-center", "flex-shrink-0", "text-primary"], [1, "w-5", "h-5", 3, "name"], [1, "font-semibold", "text-gray-900"], [1, "space-y-0.5", "text-sm", "text-gray-500"], [4, "ngFor", "ngForOf"]],
        template: function WataniyaContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "h2", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function WataniyaContactComponent_Template_form_ngSubmit_17_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "div")(20, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaContactComponent_Template_input_ngModelChange_23_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.name, $event) || (ctx.formData.name = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaContactComponent_Template_input_ngModelChange_29_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.email, $event) || (ctx.formData.email = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11)(32, "div")(33, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaContactComponent_Template_input_ngModelChange_36_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.phone, $event) || (ctx.formData.phone = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div")(39, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaContactComponent_Template_input_ngModelChange_42_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.subject, $event) || (ctx.formData.subject = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div")(45, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "textarea", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaContactComponent_Template_textarea_ngModelChange_48_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.message, $event) || (ctx.formData.message = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 18)(51, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, WataniyaContactComponent_i_lucide_52_Template, 1, 0, "i-lucide", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 21)(57, "div", 22)(58, "h3", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Contact Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, WataniyaContactComponent_div_61_Template, 9, 5, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "iframe", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 22, "CONTACT.HERO.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 24, "CONTACT.HERO.DESC"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 26, "CONTACT.FORM.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 28, "CONTACT.FORM.NAME_LABEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 30, "CONTACT.FORM.NAME_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 32, "CONTACT.FORM.EMAIL_LABEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 34, "CONTACT.FORM.EMAIL_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 36, "CONTACT.FORM.PHONE_LABEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 38, "CONTACT.FORM.PHONE_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 40, "CONTACT.FORM.SUBJECT_LABEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.subject);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 42, "CONTACT.FORM.SUBJECT_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 44, "CONTACT.FORM.MESSAGE_LABEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 46, "CONTACT.FORM.MESSAGE_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 48, "CONTACT.FORM.SENDING") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 50, "CONTACT.FORM.SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contactInfo);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_5__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return WataniyaContactComponent;
})();

/***/ }),

/***/ 2639:
/*!***************************************************************************!*\
  !*** ./src/app/public/pages/forgot-password/forgot-password.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/form-inputs/text-input/text-input.component */ 2612);
/* harmony import */ var _shared_components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/auth-layout/auth-layout.component */ 8973);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3955);










function ForgotPasswordComponent_i_lucide_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i-lucide", 9);
  }
}
function ForgotPasswordComponent_i_lucide_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i-lucide", 10);
  }
}
let ForgotPasswordComponent = /*#__PURE__*/(() => {
  class ForgotPasswordComponent {
    // error: string = ''; // Removed as we use toasts
    constructor(authService, router, notificationService) {
      this.authService = authService;
      this.router = router;
      this.notificationService = notificationService;
      this.email = '';
      this.loading = false;
    }
    handleSubmit() {
      if (!this.email) {
        this.notificationService.warning('Email is required');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.notificationService.warning('Please enter a valid email address');
        return;
      }
      this.loading = true;
      // this.error = '';
      this.authService.requestOtp(this.email).subscribe({
        next: () => {
          this.loading = false;
          this.notificationService.success('Verification code sent successfully!');
          this.router.navigate(['/forgot-password/verify-otp'], {
            state: {
              email: this.email
            }
          });
        },
        error: err => {
          this.loading = false;
          console.error(err);
          // Error handled by global interceptor
        }
      });
    }
    static {
      this.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 18,
        vars: 25,
        consts: [[3, "title", "subtitle"], [1, "space-y-6", 3, "submit"], ["name", "email", "type", "email", "icon", "mail", 3, "ngModelChange", "label", "ngModel", "placeholder", "required"], ["type", "submit", 1, "w-full", "h-12", "flex", "items-center", "justify-center", "gap-2", "bg-primary", "hover:bg-primary/90", "text-white", "font-bold", "rounded-xl", "transition-all", "shadow-lg", "shadow-primary/20", "disabled:opacity-70", "disabled:cursor-not-allowed", 3, "disabled"], ["name", "loader-2", "class", "w-5 h-5 animate-spin", 4, "ngIf"], ["name", "mail", "class", "w-5 h-5", 4, "ngIf"], [1, "text-center"], ["routerLink", "/login", 1, "inline-flex", "items-center", "text-sm", "font-medium", "text-gray-500", "hover:text-primary", "transition-colors"], ["name", "arrow-left", 1, "w-4", "h-4", "mr-2"], ["name", "loader-2", 1, "w-5", "h-5", "animate-spin"], ["name", "mail", 1, "w-5", "h-5"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-auth-layout", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ForgotPasswordComponent_Template_form_submit_3_listener() {
              return ctx.handleSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-text-input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ForgotPasswordComponent_Template_app_text_input_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ForgotPasswordComponent_i_lucide_8_Template, 1, 0, "i-lucide", 4)(9, ForgotPasswordComponent_i_lucide_9_Template, 1, 0, "i-lucide", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i-lucide", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 11, "AUTH.FORGOT_PASSWORD.TITLE"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 13, "AUTH.FORGOT_PASSWORD.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 15, "AUTH.FORGOT_PASSWORD.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 17, "AUTH.FORGOT_PASSWORD.EMAIL_PLACEHOLDER"))("required", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 19, "AUTH.FORGOT_PASSWORD.SENDING") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 21, "AUTH.FORGOT_PASSWORD.SEND_RESET_LINK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 23, "AUTH.FORGOT_PASSWORD.BACK_TO_LOGIN"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__.TextInputComponent, _shared_components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__.AuthLayoutComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_8__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return ForgotPasswordComponent;
})();

/***/ }),

/***/ 6931:
/*!**************************************************************************!*\
  !*** ./src/app/public/pages/forgot-password/reset-password.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/form-inputs/text-input/text-input.component */ 2612);
/* harmony import */ var _shared_components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/auth-layout/auth-layout.component */ 8973);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3955);










const _c0 = (a0, a1, a2) => ({
  "text-red-600 dark:text-red-400": a0,
  "text-yellow-600 dark:text-yellow-400": a1,
  "text-green-600 dark:text-green-400": a2
});
const _c1 = (a0, a1, a2) => ({
  "bg-red-500": a0,
  "bg-yellow-500": a1,
  "bg-green-500": a2
});
const _c2 = (a0, a1, a2) => ({
  "bg-gray-200 dark:bg-gray-700": a0,
  "bg-yellow-500": a1,
  "bg-green-500": a2
});
const _c3 = (a0, a1) => ({
  "bg-gray-200 dark:bg-gray-700": a0,
  "bg-green-500": a1
});
function ResetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i-lucide", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i-lucide", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, "AUTH.RESET.REDIRECTING"), " ");
  }
}
function ResetPasswordComponent_form_6_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Password Strength:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 28)(11, "div", 28)(12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](11, _c0, ctx_r1.passwordStrength === "weak", ctx_r1.passwordStrength === "medium", ctx_r1.passwordStrength === "strong"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.passwordStrength === "weak" ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "AUTH.RESET.WEAK") : ctx_r1.passwordStrength === "medium" ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, "AUTH.RESET.MEDIUM") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, "AUTH.RESET.STRONG"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](15, _c1, ctx_r1.passwordStrength === "weak", ctx_r1.passwordStrength === "medium", ctx_r1.passwordStrength === "strong"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](19, _c2, ctx_r1.passwordStrength === "weak", ctx_r1.passwordStrength === "medium", ctx_r1.passwordStrength === "strong"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c3, ctx_r1.passwordStrength !== "strong", ctx_r1.passwordStrength === "strong"));
  }
}
function ResetPasswordComponent_form_6_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i-lucide", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.errors.form);
  }
}
function ResetPasswordComponent_form_6_i_lucide_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i-lucide", 32);
  }
}
function ResetPasswordComponent_form_6_i_lucide_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i-lucide", 33);
  }
}
function ResetPasswordComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ResetPasswordComponent_form_6_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i-lucide", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 13)(5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 15)(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div")(19, "app-text-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_form_6_Template_app_text_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.password, $event) || (ctx_r1.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_form_6_Template_app_text_input_ngModelChange_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.calculatePasswordStrength());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ResetPasswordComponent_form_6_div_21_Template, 13, 26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "app-text-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_form_6_Template_app_text_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ResetPasswordComponent_form_6_div_24_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ResetPasswordComponent_form_6_i_lucide_26_Template, 1, 0, "i-lucide", 21)(27, ResetPasswordComponent_form_6_i_lucide_27_Template, 1, 0, "i-lucide", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 20, "AUTH.RESET.REQUIREMENTS_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 22, "AUTH.RESET.REQ_LENGTH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 24, "AUTH.RESET.REQ_CASE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 26, "AUTH.RESET.REQ_SPECIAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 28, "AUTH.RESET.NEW_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "......")("required", true)("error", ctx_r1.errors.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.password && ctx_r1.passwordStrength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 30, "AUTH.RESET.CONFIRM_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", "......")("required", true)("error", ctx_r1.errors.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.errors.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 32, "AUTH.RESET.RESETTING") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 34, "AUTH.RESET.RESET_BTN"), " ");
  }
}
let ResetPasswordComponent = /*#__PURE__*/(() => {
  class ResetPasswordComponent {
    constructor(authService, router, notificationService) {
      this.authService = authService;
      this.router = router;
      this.notificationService = notificationService;
      this.email = '';
      this.token = '';
      this.password = '';
      this.confirmPassword = '';
      this.loading = false;
      this.success = false;
      this.errors = {};
      this.passwordStrength = null;
      const navigation = this.router.getCurrentNavigation();
      this.email = navigation?.extras.state?.['email'];
      this.token = navigation?.extras.state?.['token'];
    }
    ngOnInit() {
      if (!this.email || !this.token) {
        this.notificationService.error('Invalid password reset link. Please try again.');
        this.router.navigate(['/forgot-password']);
      }
    }
    calculatePasswordStrength() {
      if (!this.password) {
        this.passwordStrength = null;
        return;
      }
      let strength = 0;
      if (this.password.length >= 8) strength++;
      if (this.password.length >= 12) strength++;
      if (/[a-z]/.test(this.password) && /[A-Z]/.test(this.password)) strength++;
      if (/\d/.test(this.password)) strength++;
      if (/[^a-zA-Z\d]/.test(this.password)) strength++;
      if (strength <= 2) this.passwordStrength = 'weak';else if (strength <= 3) this.passwordStrength = 'medium';else this.passwordStrength = 'strong';
    }
    validate() {
      this.errors = {};
      let isValid = true;
      if (!this.password) {
        this.errors.password = 'Password is required';
        isValid = false;
      } else if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters';
        isValid = false;
      }
      if (!this.confirmPassword) {
        this.errors.confirmPassword = 'Please confirm your password';
        isValid = false;
      } else if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
      return isValid;
    }
    handleSubmit() {
      if (!this.validate()) return;
      this.loading = true;
      this.errors = {};
      this.authService.changePassword(this.email, this.token, this.password).subscribe({
        next: response => {
          this.loading = false;
          const result = response.result || response;
          if (result && result.status && result.status !== 'success') {
            const errorMessage = result.message || 'Failed to reset password';
            this.errors.form = errorMessage;
            this.notificationService.error(errorMessage);
            return;
          }
          this.success = true;
          this.notificationService.success('Password reset successful!');
          setTimeout(() => {
            this.router.navigate(['/login'], {
              state: {
                message: 'Password reset successful! Please login with your new password.'
              }
            });
          }, 2000);
        },
        error: err => {
          this.loading = false;
          console.error(err);
          // Handle specific error cases
          const errorResponse = err.error || err;
          let errorMessage = 'Failed to reset password. Please try again.';
          if (errorResponse.result?.status === 'error') {
            errorMessage = errorResponse.result.message || errorMessage;
          } else if (errorResponse.message) {
            errorMessage = errorResponse.message;
          }
          // Check for rate limiting
          if (errorMessage.toLowerCase().includes('too many attempts')) {
            errorMessage = 'Too many password reset attempts. Please try again later.';
            this.notificationService.warning(errorMessage, 7000);
          } else {
            this.notificationService.error(errorMessage);
          }
          this.errors.form = errorMessage;
        }
      });
    }
    static {
      this.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 7,
        vars: 12,
        consts: [[3, "title", "subtitle"], ["class", "text-center py-8", 4, "ngIf"], ["class", "space-y-6", 3, "submit", 4, "ngIf"], [1, "text-center", "py-8"], [1, "inline-flex", "items-center", "justify-center", "w-20", "h-20", "bg-green-100", "dark:bg-green-900/30", "rounded-full", "mb-6"], ["name", "check-circle", 1, "w-10", "h-10", "text-green-600", "dark:text-green-400"], [1, "mb-6", "text-lg", "font-medium", "text-gray-900", "dark:text-white"], [1, "flex", "justify-center"], ["name", "loader-2", 1, "h-8", "w-8", "animate-spin", "text-primary"], [1, "space-y-6", 3, "submit"], [1, "bg-blue-50", "dark:bg-blue-900/20", "border", "border-blue-200", "dark:border-blue-800", "rounded-lg", "p-4"], [1, "flex", "items-start", "gap-3"], ["name", "info", 1, "w-5", "h-5", "text-blue-600", "dark:text-blue-400", "mt-0.5", "flex-shrink-0"], [1, "text-sm", "text-blue-800", "dark:text-blue-300"], [1, "font-semibold", "mb-1"], [1, "list-disc", "list-inside", "space-y-0.5", "text-blue-700", "dark:text-blue-400"], ["name", "password", "type", "password", "icon", "lock", 3, "ngModelChange", "label", "ngModel", "placeholder", "required", "error"], ["class", "mt-2", 4, "ngIf"], ["name", "confirmPassword", "type", "password", "icon", "lock", 3, "ngModelChange", "label", "ngModel", "placeholder", "required", "error"], ["class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4", 4, "ngIf"], ["type", "submit", 1, "w-full", "h-12", "flex", "items-center", "justify-center", "gap-2", "bg-primary", "hover:bg-primary/90", "text-white", "font-bold", "rounded-xl", "transition-all", "shadow-lg", "shadow-primary/20", "disabled:opacity-70", "disabled:cursor-not-allowed", 3, "disabled"], ["name", "loader-2", "class", "w-5 h-5 animate-spin", 4, "ngIf"], ["name", "lock", "class", "w-5 h-5", 4, "ngIf"], [1, "mt-2"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "gap-1"], [1, "h-1.5", "flex-1", "rounded-full", "transition-all", 3, "ngClass"], [1, "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "rounded-lg", "p-4"], ["name", "alert-circle", 1, "w-5", "h-5", "text-red-600", "dark:text-red-400", "mt-0.5", "flex-shrink-0"], [1, "text-sm", "text-red-800", "dark:text-red-300", "font-medium"], ["name", "loader-2", 1, "w-5", "h-5", "animate-spin"], ["name", "lock", 1, "w-5", "h-5"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-auth-layout", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ResetPasswordComponent_div_5_Template, 8, 3, "div", 1)(6, ResetPasswordComponent_form_6_Template, 31, 36, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.success ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, "AUTH.RESET.SUCCESS_TITLE") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, "AUTH.RESET.TITLE"))("subtitle", ctx.success ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, "AUTH.RESET.SUCCESS_SUBTITLE") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 10, "AUTH.RESET.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.success);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.success);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _shared_components_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__.TextInputComponent, _shared_components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__.AuthLayoutComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_8__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return ResetPasswordComponent;
})();

/***/ }),

/***/ 5833:
/*!**********************************************************************!*\
  !*** ./src/app/public/pages/forgot-password/verify-otp.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyOtpComponent: () => (/* binding */ VerifyOtpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/auth-layout/auth-layout.component */ 8973);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3955);









function VerifyOtpComponent_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function VerifyOtpComponent_input_9_Template_input_ngModelChange_0_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.otp[i_r2], $event) || (ctx_r2.otp[i_r2] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function VerifyOtpComponent_input_9_Template_input_input_0_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleChange(i_r2, ctx_r2.otp[i_r2]));
    })("keydown", function VerifyOtpComponent_input_9_Template_input_keydown_0_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleKeyDown(i_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "otp-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.otp[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "otp-" + i_r2);
  }
}
function VerifyOtpComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerifyOtpComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleResend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-lucide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "AUTH.OTP.RESEND"), " ");
  }
}
function VerifyOtpComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-lucide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "AUTH.OTP.RESEND_IN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.countdown, "s");
  }
}
function VerifyOtpComponent_i_lucide_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i-lucide", 21);
  }
}
function VerifyOtpComponent_i_lucide_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i-lucide", 22);
  }
}
let VerifyOtpComponent = /*#__PURE__*/(() => {
  class VerifyOtpComponent {
    constructor(authService, router, notificationService) {
      this.authService = authService;
      this.router = router;
      this.notificationService = notificationService;
      this.email = '';
      this.otp = ['', '', '', '', '', ''];
      this.loading = false;
      this.countdown = 60;
      this.canResend = false;
      const navigation = this.router.getCurrentNavigation();
      this.email = navigation?.extras.state?.['email'];
    }
    ngOnInit() {
      if (!this.email) {
        this.router.navigate(['/forgot-password']);
        return;
      }
      this.startCountdown();
    }
    startCountdown() {
      this.countdown = 60;
      this.canResend = false;
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.canResend = true;
          clearInterval(this.timer);
        }
      }, 1000);
    }
    handleChange(index, value) {
      if (value.length > 1) return;
      if (!/^\d*$/.test(value)) return;
      this.otp[index] = value;
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
    handleKeyDown(index, event) {
      if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        prevInput?.focus();
      }
    }
    handlePaste(event) {
      event.preventDefault();
      const pastedData = event.clipboardData?.getData('text').slice(0, 6);
      if (!pastedData || !/^\d+$/.test(pastedData)) return;
      const digits = pastedData.split('');
      for (let i = 0; i < digits.length; i++) {
        this.otp[i] = digits[i];
      }
    }
    handleResend() {
      if (!this.canResend) return;
      this.otp = ['', '', '', '', '', ''];
      this.authService.requestOtp(this.email).subscribe({
        next: () => {
          this.notificationService.success('Verification code resent successfully!');
          this.startCountdown();
        },
        error: err => {
          console.error(err);
          // Handle specific error cases
          const errorResponse = err.error || err;
          let errorMessage = 'Failed to resend code. Please try again.';
          if (errorResponse.result?.status === 'error') {
            errorMessage = errorResponse.result.message || errorMessage;
          } else if (errorResponse.message) {
            errorMessage = errorResponse.message;
          }
          // Check for rate limiting
          if (errorMessage.toLowerCase().includes('too many attempts')) {
            errorMessage = 'Too many attempts. Please wait before requesting another code.';
            this.notificationService.warning(errorMessage, 7000);
          } else {
            // Handled by global interceptor
          }
          this.canResend = true;
        }
      });
    }
    handleSubmit() {
      const otpValue = this.otp.join('');
      if (otpValue.length !== 6) {
        this.notificationService.warning('Please enter the complete 6-digit code');
        return;
      }
      this.loading = true;
      this.authService.verifyOtp(this.email, otpValue).subscribe({
        next: response => {
          this.loading = false;
          const result = response.result || response;
          const token = result.token || result.data?.token || otpValue;
          this.notificationService.success('Code verified successfully!');
          this.router.navigate(['/forgot-password/reset'], {
            state: {
              email: this.email,
              token
            }
          });
        },
        error: err => {
          this.loading = false;
          console.error(err);
          // Handle specific error cases
          const errorResponse = err.error || err;
          let errorMessage = 'Invalid verification code. Please try again.';
          if (errorResponse.result?.status === 'error') {
            errorMessage = errorResponse.result.message || errorMessage;
          } else if (errorResponse.message) {
            errorMessage = errorResponse.message;
          }
          // Check for rate limiting
          if (errorMessage.toLowerCase().includes('too many attempts')) {
            errorMessage = 'Too many verification attempts. Please request a new code.';
            this.notificationService.warning(errorMessage, 7000);
          } else {
            // Handled by global interceptor
          }
          // this.error = errorMessage;
        }
      });
    }
    ngOnDestroy() {
      if (this.timer) clearInterval(this.timer);
    }
    static {
      this.ɵfac = function VerifyOtpComponent_Factory(t) {
        return new (t || VerifyOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: VerifyOtpComponent,
        selectors: [["app-verify-otp"]],
        decls: 25,
        vars: 23,
        consts: [[3, "title", "subtitle"], [1, "space-y-6", 3, "submit"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-3", "text-center"], [1, "flex", "gap-2", "justify-center", 3, "paste"], ["type", "text", "inputmode", "numeric", "maxLength", "1", "class", "w-12 h-12 text-center text-lg font-bold border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white dark:bg-gray-800 text-navy dark:text-white", 3, "id", "ngModel", "name", "ngModelChange", "input", "keydown", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "dark:bg-gray-800/50", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg", "p-4"], [1, "text-center", "text-sm"], ["type", "button", "class", "inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors", 3, "click", 4, "ngIf"], ["class", "flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400", 4, "ngIf"], ["type", "submit", 1, "w-full", "h-12", "flex", "items-center", "justify-center", "gap-2", "bg-primary", "hover:bg-primary/90", "text-white", "font-bold", "rounded-xl", "transition-all", "shadow-lg", "shadow-primary/20", "disabled:opacity-70", "disabled:cursor-not-allowed", 3, "disabled"], ["name", "loader-2", "class", "w-5 h-5 animate-spin", 4, "ngIf"], ["name", "shield-check", "class", "w-5 h-5", 4, "ngIf"], [1, "text-center"], ["routerLink", "/forgot-password", 1, "inline-flex", "items-center", "text-sm", "font-medium", "text-gray-500", "hover:text-primary", "transition-colors"], ["name", "arrow-left", 1, "w-4", "h-4", "mr-2"], ["type", "text", "inputmode", "numeric", "maxLength", "1", 1, "w-12", "h-12", "text-center", "text-lg", "font-bold", "border-2", "border-gray-200", "dark:border-gray-700", "rounded-xl", "focus:border-primary", "focus:ring-4", "focus:ring-primary/10", "outline-none", "transition-all", "bg-white", "dark:bg-gray-800", "text-navy", "dark:text-white", 3, "ngModelChange", "input", "keydown", "id", "ngModel", "name"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "font-semibold", "text-primary", "hover:text-primary/80", "transition-colors", 3, "click"], ["name", "refresh-cw", 1, "w-4", "h-4"], [1, "flex", "items-center", "justify-center", "gap-2", "text-gray-600", "dark:text-gray-400"], ["name", "clock", 1, "w-4", "h-4"], [1, "font-bold", "text-primary"], ["name", "loader-2", 1, "w-5", "h-5", "animate-spin"], ["name", "shield-check", 1, "w-5", "h-5"]],
        template: function VerifyOtpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-auth-layout", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function VerifyOtpComponent_Template_form_submit_3_listener() {
              return ctx.handleSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("paste", function VerifyOtpComponent_Template_div_paste_8_listener($event) {
              return ctx.handlePaste($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VerifyOtpComponent_input_9_Template, 1, 3, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VerifyOtpComponent_button_12_Template, 4, 3, "button", 7)(13, VerifyOtpComponent_div_13_Template, 7, 4, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VerifyOtpComponent_i_lucide_15_Template, 1, 0, "i-lucide", 10)(16, VerifyOtpComponent_i_lucide_16_Template, 1, 0, "i-lucide", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12)(21, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i-lucide", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 11, "AUTH.OTP.TITLE"))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 13, "AUTH.OTP.SUBTITLE_PREFIX") + ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 15, "AUTH.OTP.ENTER_CODE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.otp);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canResend);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.canResend);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading || ctx.otp.join("").length !== 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 17, "AUTH.OTP.VERIFYING") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 19, "AUTH.OTP.VERIFY_BTN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 21, "AUTH.OTP.CHANGE_EMAIL"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_7__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return VerifyOtpComponent;
})();

/***/ }),

/***/ 1823:
/*!*****************************************************!*\
  !*** ./src/app/public/pages/home/home.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _wataniya_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wataniya-home.component */ 6156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3955);







function HomeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-wataniya-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function HomeComponent_ng_template_1_div_96__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 57)(2, "circle", 58)(3, "circle", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_1_div_96__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_1_div_96__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 61)(2, "path", 62)(3, "path", 63)(4, "path", 64)(5, "path", 65)(6, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_1_div_96__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 67)(2, "polyline", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_1_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 47)(2, "div", 48)(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HomeComponent_ng_template_1_div_96__svg_svg_5_Template, 4, 0, "svg", 51)(6, HomeComponent_ng_template_1_div_96__svg_svg_6_Template, 2, 0, "svg", 51)(7, HomeComponent_ng_template_1_div_96__svg_svg_7_Template, 7, 0, "svg", 51)(8, HomeComponent_ng_template_1_div_96__svg_svg_8_Template, 3, 0, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", product_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "Motor Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "Medical Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "Travel Insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, "HOME.PRODUCTS." + ctx_r1.getProductKey(product_r3.name) + ".NAME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, "HOME.PRODUCTS." + ctx_r1.getProductKey(product_r3.name) + ".DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 12, "HOME.FEATURES.LEARN_MORE"), " ");
  }
}
function HomeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 12)(12, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18)(30, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_ng_template_1_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.scrollToProducts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "path", 22)(40, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "div", 26)(44, "div", 27)(45, "div")(46, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 31)(56, "div", 32)(57, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Ahmed Mohamed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 32)(63, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Mercedes-Benz C180");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 32)(69, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "12 Dec, 2025");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 35)(75, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "div", 37)(79, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "section", 39)(81, "div", 40)(82, "div", 41)(83, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "h2", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](93, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, HomeComponent_ng_template_1_div_96_Template, 18, 14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 19, "HOME.HERO." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 17, ctx_r1.clientId) + ".BADGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 23, "HOME.HERO." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 21, ctx_r1.clientId) + ".TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 27, "HOME.HERO." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 25, ctx_r1.clientId) + ".TITLE_HIGHLIGHT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 31, "HOME.HERO." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 29, ctx_r1.clientId) + ".DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 35, "HOME.HERO." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 33, ctx_r1.clientId) + ".GET_QUOTE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 39, "HOME.HERO." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 37, ctx_r1.clientId) + ".EXPLORE_SERVICES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 41, "HOME.HERO.ACTIVE_POLICY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 43, "HOME.HERO.COMPREHENSIVE_MOTOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 45, "HOME.HERO.ACTIVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 47, "HOME.HERO.POLICY_HOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 49, "HOME.HERO.VEHICLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](71, 51, "HOME.HERO.RENEWAL_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 53, "HOME.HERO.VIEW_DETAILS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](86, 57, "HOME.FEATURES." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 55, ctx_r1.clientId) + ".SECTION_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 61, "HOME.FEATURES." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 59, ctx_r1.clientId) + ".TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 65, "HOME.FEATURES." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](93, 63, ctx_r1.clientId) + ".DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.products);
  }
}
let HomeComponent = /*#__PURE__*/(() => {
  class HomeComponent {
    constructor() {
      this.clientId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId;
      this.products = [{
        name: 'Motor Insurance',
        path: '/products/motor'
      }, {
        name: 'Medical Insurance',
        path: '/products/medical'
      }, {
        name: 'Travel Insurance',
        path: '/products/travel'
      }, {
        name: 'Property Insurance',
        path: '/products/property'
      }, {
        name: 'Marine Insurance',
        path: '/products/marine'
      }, {
        name: 'Engineering Insurance',
        path: '/products/engineering'
      }];
    }
    getProductKey(name) {
      const map = {
        'Motor Insurance': 'MOTOR',
        'Medical Insurance': 'MEDICAL',
        'Travel Insurance': 'TRAVEL',
        'Property Insurance': 'PROPERTY',
        'Marine Insurance': 'MARINE',
        'Engineering Insurance': 'ENGINEERING'
      };
      return map[name] || 'MOTOR';
    }
    scrollToProducts() {
      const productsSection = document.getElementById('products-section');
      if (productsSection) {
        productsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    static {
      this.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 2,
        consts: [["orientTemplate", ""], [4, "ngIf", "ngIfElse"], [1, "min-h-screen"], [1, "relative", "bg-gradient-to-br", "from-navy", "via-primary", "to-primary-light", "overflow-hidden", "min-h-[600px]", "flex", "items-center"], [1, "absolute", "inset-0", "opacity-10"], [1, "absolute", "-top-24", "-right-24", "w-96", "h-96", "rounded-full", "bg-white", "blur-3xl"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-full", "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "relative", "z-10", "w-full", "py-16"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-12", "items-center"], [1, "text-white", "space-y-8"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "rounded-full", "bg-white/10", "backdrop-blur-sm", "border", "border-white/20"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "text-green-400"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["d", "m9 12 2 2 4-4"], [1, "text-sm", "font-medium"], [1, "text-5xl", "lg:text-6xl", "font-bold", "leading-tight"], [1, "text-blue-300"], [1, "text-xl", "text-blue-100", "max-w-lg", "leading-relaxed"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["routerLink", "/login", 1, "bg-white", "text-primary", "px-8", "py-4", "rounded-lg", "font-semibold", "text-lg", "hover:bg-blue-50", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl", "transform", "hover:-translate-y-1", "inline-flex", "items-center", "justify-center"], [1, "border-2", "border-white", "text-white", "px-8", "py-4", "rounded-lg", "font-semibold", "text-lg", "hover:bg-white/10", "transition-all", "duration-300", "flex", "items-center", "justify-center", "gap-2", "cursor-pointer", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-5", "w-5"], ["d", "M5 12h14"], ["d", "m12 5 7 7-7 7 7"], [1, "hidden", "lg:block", "relative"], [1, "relative", "z-10", "bg-white/5", "backdrop-blur-md", "rounded-2xl", "p-8", "border", "border-white/10", "shadow-2xl", "transform", "rotate-2", "hover:rotate-0", "transition-transform", "duration-500"], [1, "space-y-6"], [1, "flex", "items-center", "justify-between", "border-b", "border-white/10", "pb-4"], [1, "text-blue-200", "text-sm"], [1, "text-white", "font-bold", "text-xl"], [1, "bg-green-500/20", "text-green-400", "px-3", "py-1", "rounded-full", "text-xs", "font-bold"], [1, "space-y-4"], [1, "flex", "justify-between", "items-center"], [1, "text-blue-200"], [1, "text-white", "font-medium"], [1, "pt-4"], ["routerLink", "/login", 1, "block", "w-full", "text-center", "bg-blue-500", "hover:bg-blue-600", "text-white", "py-3", "rounded-lg", "font-semibold", "transition-colors"], [1, "absolute", "-top-10", "-right-10", "w-32", "h-32", "bg-orange-500", "rounded-full", "blur-3xl", "opacity-20"], [1, "absolute", "-bottom-10", "-left-10", "w-32", "h-32", "bg-blue-500", "rounded-full", "blur-3xl", "opacity-20"], ["id", "products-section", 1, "py-24", "bg-gray-50", "dark:bg-gray-900"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "text-center", "max-w-3xl", "mx-auto", "mb-16"], [1, "text-primary", "font-semibold", "tracking-wider", "uppercase", "text-sm"], [1, "text-3xl", "md:text-4xl", "font-bold", "text-navy", "dark:text-white", "mt-2", "mb-4"], [1, "text-gray-600", "dark:text-gray-400", "text-lg"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "group", "bg-white", "dark:bg-gray-800", "p-8", "rounded-2xl", "shadow-sm", "hover:shadow-xl", "transition-all", "duration-300", "border", "border-gray-100", "dark:border-gray-700", "hover:-translate-y-1", "cursor-pointer", "h-full"], [1, "w-14", "h-14", "bg-blue-50", "dark:bg-blue-900/30", "rounded-xl", "flex", "items-center", "justify-center", "mb-6", "group-hover:bg-primary", "transition-colors", "duration-300"], [3, "ngSwitch"], ["class", "h-7 w-7 text-primary group-hover:text-white transition-colors duration-300", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngSwitchCase"], ["class", "h-7 w-7 text-primary group-hover:text-white transition-colors duration-300", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngSwitchDefault"], [1, "text-xl", "font-bold", "text-navy", "dark:text-white", "mb-3", "group-hover:text-primary", "transition-colors"], [1, "text-gray-500", "dark:text-gray-400", "leading-relaxed", "mb-4"], [1, "text-primary", "font-semibold", "text-sm", "flex", "items-center", "gap-1", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "transform", "translate-x-[-10px]", "group-hover:translate-x-0"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-7", "w-7", "text-primary", "group-hover:text-white", "transition-colors", "duration-300"], ["d", "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], ["d", "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"], ["d", "M2 22h20"], ["d", "M12 2v20"], ["d", "M2 13h20"], ["d", "m5 6 7-3 7 3"], ["d", "m4 10 8-1 8 1"], ["d", "m3 16 9-1 9 1"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 2, 0, "ng-container", 1)(1, HomeComponent_ng_template_1_Template, 97, 67, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }
          if (rf & 2) {
            const orientTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientId === "wataniya")("ngIfElse", orientTemplate_r4);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _wataniya_home_component__WEBPACK_IMPORTED_MODULE_2__.WataniyaHomeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return HomeComponent;
})();

/***/ }),

/***/ 6156:
/*!**************************************************************!*\
  !*** ./src/app/public/pages/home/wataniya-home.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WataniyaHomeComponent: () => (/* binding */ WataniyaHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ 1765);






function WataniyaHomeComponent_a_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32)(1, "div", 33)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i-lucide", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Learn More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i-lucide", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", product_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", product_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.description, " ");
  }
}
let WataniyaHomeComponent = /*#__PURE__*/(() => {
  class WataniyaHomeComponent {
    constructor() {
      this.products = [{
        name: 'Motor Insurance',
        icon: 'car',
        path: '/products/motor',
        description: 'Comprehensive coverage for your vehicle.'
      }, {
        name: 'Medical Insurance',
        icon: 'heart',
        path: '/products/medical',
        description: 'Healthcare plans for you and your family.'
      }, {
        name: 'Travel Insurance',
        icon: 'plane',
        path: '/products/travel',
        description: 'Secure your trips and vacations.'
      }, {
        name: 'Property Insurance',
        icon: 'home',
        path: '/products/property',
        description: 'Protect your home and assets.'
      }, {
        name: 'Marine Insurance',
        icon: 'anchor',
        path: '/products/marine',
        description: 'Cargo and vessel insurance solutions.'
      }, {
        name: 'Engineering Insurance',
        icon: 'settings',
        path: '/products/engineering',
        description: 'Coverage for construction and machinery.'
      }];
    }
    scrollToProducts() {
      const element = document.getElementById('products-grid');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    static {
      this.ɵfac = function WataniyaHomeComponent_Factory(t) {
        return new (t || WataniyaHomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: WataniyaHomeComponent,
        selectors: [["app-wataniya-home"]],
        decls: 65,
        vars: 1,
        consts: [[1, "min-h-screen", "bg-gray-50", "flex", "flex-col"], [1, "bg-gradient-to-r", "from-brand-dark", "to-primary", "text-white", "py-20", "lg:py-32", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]", "opacity-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "relative", "z-10"], [1, "max-w-3xl"], [1, "inline-block", "bg-primary/10", "backdrop-blur-md", "rounded-lg", "px-4", "py-2", "mb-6", "border", "border-primary/20"], [1, "font-bold", "tracking-wider", "uppercase", "text-sm", "text-primary"], [1, "text-5xl", "lg:text-7xl", "font-extrabold", "tracking-tight", "leading-tight", "mb-6", "text-navy"], [1, "text-primary"], [1, "text-xl", "text-gray-600", "mb-10", "leading-relaxed", "max-w-2xl"], [1, "flex", "flex-wrap", "gap-4"], ["routerLink", "/login", 1, "bg-primary", "text-white", "px-8", "py-4", "rounded-xl", "font-bold", "text-lg", "hover:bg-primary-dark", "transition", "shadow-xl", "hover:shadow-2xl", "transform", "hover:-translate-y-1"], [1, "bg-transparent", "border-2", "border-primary", "px-8", "py-4", "rounded-xl", "font-bold", "text-lg", "text-primary", "hover:bg-primary", "hover:text-white", "transition", "flex", "items-center", "gap-2", 3, "click"], ["name", "chevron-down", 1, "w-5", "h-5"], [1, "absolute", "top-0", "right-0", "-mt-20", "-mr-20", "w-96", "h-96", "bg-white/5", "rounded-full", "blur-3xl"], [1, "absolute", "bottom-0", "right-1/4", "w-64", "h-64", "bg-blue-500/30", "rounded-full", "blur-3xl"], [1, "bg-white", "border-b", "border-gray-200", "py-8"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-8", "text-center"], [1, "text-3xl", "font-bold", "text-primary", "mb-1"], [1, "text-sm", "text-gray-500", "uppercase", "tracking-wide", "font-semibold"], ["id", "products-grid", 1, "py-24"], [1, "text-center", "mb-16"], [1, "text-primary", "font-bold", "tracking-wider", "uppercase"], [1, "text-4xl", "font-extrabold", "text-navy", "mt-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "group", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "bg-navy", "py-16", "text-white", "text-center"], [1, "max-w-4xl", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "mb-6"], [1, "text-gray-300", "mb-8", "text-lg"], ["routerLink", "/register", 1, "inline-block", "bg-primary", "hover:bg-red-700", "text-white", "px-10", "py-4", "rounded-xl", "font-bold", "text-lg", "transition", "shadow-lg"], [1, "group", 3, "routerLink"], [1, "bg-white", "rounded-2xl", "p-8", "shadow-sm", "hover:shadow-2xl", "transition-all", "duration-300", "border", "border-gray-100", "h-full", "flex", "flex-col", "hover:-translate-y-2"], [1, "w-16", "h-16", "bg-blue-50", "rounded-2xl", "flex", "items-center", "justify-center", "mb-6", "group-hover:bg-primary", "transition-colors", "duration-300"], [1, "w-8", "h-8", "text-primary", "group-hover:text-white", "transition-colors", 3, "name"], [1, "text-2xl", "font-bold", "text-navy", "mb-3", "group-hover:text-primary", "transition-colors"], [1, "text-gray-500", "leading-relaxed", "mb-6", "flex-grow"], [1, "flex", "items-center", "text-primary", "font-bold", "group-hover:gap-2", "transition-all"], ["name", "arrow-right", 1, "w-4", "h-4", "ml-2"]],
        template: function WataniyaHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "EST. 2020 - Cairo, Egypt");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Innovative Solutions for ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Your Lifestyle.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " The National Insurance Company offers innovative insurance solutions for individuals and businesses. We create solutions that become part of your lifestyle. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Get a Quote ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WataniyaHomeComponent_Template_button_click_19_listener() {
              return ctx.scrollToProducts();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Our Coverages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i-lucide", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 14)(23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "div")(28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "500M+");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Authorized Capital");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div")(33, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "2M+");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Customers");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div")(38, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "24/7");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div")(43, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "100%");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Digital");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "section", 21)(48, "div", 17)(49, "div", 22)(50, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Why Choose Us?");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h2", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Insurance That Fits Your Life");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, WataniyaHomeComponent_a_55_Template, 11, 4, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "section", 27)(57, "div", 28)(58, "h2", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Ready to get started?");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Join us today and experience insurance the way it should be.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Create Account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_5__.LucideAngularComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        encapsulation: 2
      });
    }
  }
  return WataniyaHomeComponent;
})();

/***/ }),

/***/ 5651:
/*!*******************************************************!*\
  !*** ./src/app/public/pages/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);







function LoginComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-wataniya-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function LoginComponent_ng_template_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-lucide", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getFieldError("email"), " ");
  }
}
function LoginComponent_ng_template_1_p_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i-lucide", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getFieldError("password"), " ");
  }
}
function LoginComponent_ng_template_1_i_lucide_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i-lucide", 53);
  }
}
function LoginComponent_ng_template_1_i_lucide_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i-lucide", 54);
  }
}
function LoginComponent_ng_template_1_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i-lucide", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 59)(5, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.formError);
  }
}
function LoginComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_template_1_Template_form_ngSubmit_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div")(16, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i-lucide", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoginComponent_ng_template_1_p_24_Template, 3, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div")(26, "div", 17)(27, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 12)(31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i-lucide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_ng_template_1_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i-lucide", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 23)(38, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, LoginComponent_ng_template_1_p_41_Template, 3, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, LoginComponent_ng_template_1_i_lucide_48_Template, 1, 0, "i-lucide", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, LoginComponent_ng_template_1_i_lucide_52_Template, 1, 0, "i-lucide", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, LoginComponent_ng_template_1_div_53_Template, 7, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 32)(55, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 35)(58, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 37)(62, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_ng_template_1_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onGoogleLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "div", 42)(69, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 44)(71, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 47)(74, "h1", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](81, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 50)(83, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](93, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 26, "AUTH.LOGIN.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 28, "AUTH.LOGIN.SUBTITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 30, "AUTH.LOGIN.CREATE_ACCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 32, "AUTH.LOGIN.EMAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 34, "AUTH.LOGIN.EMAIL_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.email == null ? null : ctx_r1.email.touched) && (ctx_r1.email == null ? null : ctx_r1.email.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 36, "AUTH.LOGIN.PASSWORD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 38, "AUTH.LOGIN.PASSWORD_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r1.showPassword ? "eye-off" : "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 40, "AUTH.LOGIN.FORGOT_PASSWORD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.password == null ? null : ctx_r1.password.touched) && (ctx_r1.password == null ? null : ctx_r1.password.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 42, "AUTH.LOGIN.REMEMBER_ME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 44, "AUTH.LOGIN.SIGNING_IN") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 46, "AUTH.LOGIN.SIGN_IN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.formError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 48, "AUTH.LOGIN.OR_SIGN_IN_WITH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 50, "AUTH.LOGIN.CONTINUE_WITH_GOOGLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 54, "AUTH.LOGIN.BRANDING." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 52, ctx_r1.clientId) + ".TAGLINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](81, 58, "AUTH.LOGIN.BRANDING." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 56, ctx_r1.clientId) + ".DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](86, 62, "AUTH.LOGIN.BRANDING." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 60, ctx_r1.clientId) + ".COPYRIGHT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 66, "AUTH.LOGIN.BRANDING." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 64, ctx_r1.clientId) + ".PRIVACY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 70, "AUTH.LOGIN.BRANDING." + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](93, 68, ctx_r1.clientId) + ".TERMS"));
  }
}
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(fb, authService, router, notificationService) {
      this.fb = fb;
      this.authService = authService;
      this.router = router;
      this.notificationService = notificationService;
      this.loading = false;
      this.formError = '';
      this.showPassword = false;
      this.clientId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId;
      this.loginForm = this.fb.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        rememberMe: [false]
      });
    }
    ngOnInit() {
      const rememberedEmail = localStorage.getItem('rememberedEmail');
      if (rememberedEmail) {
        this.loginForm.patchValue({
          email: rememberedEmail,
          rememberMe: true
        });
      }
    }
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
    get email() {
      return this.loginForm.get('email');
    }
    get password() {
      return this.loginForm.get('password');
    }
    getFieldError(fieldName) {
      const field = this.loginForm.get(fieldName);
      if (field?.hasError('required')) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field?.hasError('email')) {
        return 'Email is invalid';
      }
      return '';
    }
    fillDemoCredentials(role) {
      const credentials = {
        customer: {
          email: 'user@orient.com',
          password: 'password'
        },
        broker: {
          email: 'broker@orient.com',
          password: 'password'
        },
        surveyor: {
          email: 'surveyor@odoo.com',
          password: 'password'
        }
      };
      const creds = credentials[role];
      if (creds) {
        this.loginForm.patchValue({
          email: creds.email,
          password: creds.password
        });
      }
    }
    onSubmit() {
      if (this.loginForm.invalid) {
        Object.keys(this.loginForm.controls).forEach(key => {
          this.loginForm.get(key)?.markAsTouched();
        });
        this.notificationService.warning('Please fill in all required fields');
        return;
      }
      this.loading = true;
      this.formError = '';
      const {
        email,
        password,
        rememberMe
      } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }
          const user = this.authService.currentUserValue;
          if (user) {
            switch (user.role) {
              case 'broker':
                this.router.navigate(['/dashboard/broker']);
                break;
              case 'admin':
                this.router.navigate(['/dashboard/admin']);
                break;
              case 'surveyor':
                this.router.navigate(['/dashboard/surveyor'], {
                  queryParams: {
                    wizard: 'true'
                  }
                });
                break;
              default:
                this.router.navigate(['/dashboard/customer']);
            }
          } else {
            this.formError = 'Login successful but user data could not be retrieved.';
            this.loading = false;
          }
        },
        error: err => {
          this.formError = err.message || 'Failed to login. Please try again.';
          this.notificationService.error(this.formError);
          this.loading = false;
        }
      });
    }
    onGoogleLogin() {
      console.log('Google login initiated...');
      // TODO: Implement actual Google OAuth flow
      this.notificationService.info('Google login integration is coming soon!');
    }
    static {
      this.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 3,
        vars: 2,
        consts: [["orientTemplate", ""], [4, "ngIf", "ngIfElse"], [1, "flex", "h-screen", "w-full", "overflow-hidden", "bg-white"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "p-8", "lg:p-12", "overflow-y-auto"], [1, "w-full", "max-w-md", "space-y-8", "animate-fade-in"], [1, "text-center", "lg:text-left"], [1, "text-3xl", "font-extrabold", "text-navy", "dark:text-white", "mb-2"], [1, "text-gray-500", "dark:text-gray-400"], ["routerLink", "/register", 1, "font-semibold", "text-primary", "hover:text-primary-dark", "transition-colors"], [1, "mt-8", "space-y-6", 3, "ngSubmit", "formGroup"], [1, "space-y-4"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["name", "mail", 1, "h-5", "w-5", "text-gray-400"], ["id", "email", "type", "email", "formControlName", "email", 1, "w-full", "pl-10", "pr-4", "py-3", "border", "border-gray-300", "dark:border-gray-600", "rounded-xl", "focus:ring-2", "focus:ring-primary/20", "focus:border-primary", "transition-all", "dark:bg-gray-800", "dark:text-white", "placeholder-gray-400", 3, "placeholder"], ["class", "mt-1 text-sm text-red-500 flex items-center gap-1", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "mb-1"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], ["name", "lock", 1, "h-5", "w-5", "text-gray-400"], ["id", "password", "formControlName", "password", 1, "w-full", "pl-10", "pr-10", "py-3", "border", "border-gray-300", "dark:border-gray-600", "rounded-xl", "focus:ring-2", "focus:ring-primary/20", "focus:border-primary", "transition-all", "dark:bg-gray-800", "dark:text-white", "placeholder-gray-400", 3, "type", "placeholder"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-3", "flex", "items-center", "cursor-pointer", "hover:text-gray-600", 3, "click"], [1, "h-5", "w-5", "text-gray-400", 3, "name"], [1, "flex", "justify-end", "mt-1"], ["routerLink", "/forgot-password", 1, "text-sm", "font-medium", "text-primary", "hover:text-primary-dark"], [1, "flex", "items-center"], ["id", "remember-me", "name", "remember-me", "type", "checkbox", "formControlName", "rememberMe", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded", "cursor-pointer"], ["for", "remember-me", 1, "ml-2", "block", "text-sm", "text-gray-700", "dark:text-gray-300", "cursor-pointer"], ["type", "submit", 1, "w-full", "flex", "justify-center", "py-3.5", "px-4", "border", "border-transparent", "rounded-xl", "shadow-sm", "text-sm", "font-bold", "text-white", "bg-primary", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "transition-all", "disabled:opacity-70", "disabled:cursor-not-allowed", "group", 3, "disabled"], ["name", "loader-2", "class", "animate-spin -ml-1 mr-2 h-5 w-5", 4, "ngIf"], ["name", "chevron-right", "class", "ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all", 4, "ngIf"], ["class", "rounded-xl bg-red-50 p-4 border border-red-100 animate-slide-up", 4, "ngIf"], [1, "relative", "my-6"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-gray-200", "dark:border-gray-700"], [1, "relative", "flex", "justify-center", "text-sm"], [1, "px-2", "bg-white", "text-gray-500", "dark:bg-gray-900"], [1, "grid", "grid-cols-1", "gap-3"], ["type", "button", 1, "w-full", "inline-flex", "justify-center", "items-center", "py-2.5", "px-4", "border", "border-gray-300", "dark:border-gray-600", "rounded-xl", "shadow-sm", "bg-white", "dark:bg-gray-800", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors", 3, "click"], ["src", "https://www.svgrepo.com/show/475656/google-color.svg", "alt", "Google", 1, "h-5", "w-5"], [1, "ml-2"], [1, "hidden", "lg:block", "relative", "w-1/2", "bg-navy"], [1, "absolute", "inset-0", "bg-gradient-to-br", "from-navy", "via-primary", "to-primary-light", "opacity-90"], [1, "absolute", "inset-0", "opacity-10", "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"], [1, "relative", "z-10", "w-full", "flex", "flex-col", "justify-between", "p-12", "text-white"], ["routerLink", "/", 1, "flex", "items-center", "gap-2"], ["src", "assets/logo.png", "alt", "Insurance Portal", 1, "h-12", "object-contain", "brightness-0", "invert"], [1, "space-y-6", "max-w-lg"], [1, "text-4xl", "font-bold", "leading-tight", "text-white"], [1, "text-lg", "text-blue-100", "dark:text-gray-300"], [1, "flex", "gap-4", "text-sm", "text-blue-200", "dark:text-gray-400"], [1, "mt-1", "text-sm", "text-red-500", "flex", "items-center", "gap-1"], ["name", "alert-circle", 1, "h-3", "w-3"], ["name", "loader-2", 1, "animate-spin", "-ml-1", "mr-2", "h-5", "w-5"], ["name", "chevron-right", 1, "ml-2", "h-4", "w-4", "opacity-0", "-translate-x-2", "group-hover:opacity-100", "group-hover:translate-x-0", "transition-all"], [1, "rounded-xl", "bg-red-50", "p-4", "border", "border-red-100", "animate-slide-up"], [1, "flex"], [1, "flex-shrink-0"], ["name", "alert-circle", 1, "h-5", "w-5", "text-red-400"], [1, "ml-3"], [1, "text-sm", "font-medium", "text-red-800"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoginComponent_ng_container_0_Template, 2, 0, "ng-container", 1)(1, LoginComponent_ng_template_1_Template, 95, 72, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }
          if (rf & 2) {
            const orientTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientId === "wataniya")("ngIfElse", orientTemplate_r3);
          }
        }
      });
    }
  }
  return LoginComponent;
})();

/***/ }),

/***/ 1958:
/*!****************************************************************!*\
  !*** ./src/app/public/pages/login/wataniya-login.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WataniyaLoginComponent: () => (/* binding */ WataniyaLoginComponent)
/* harmony export */ });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 5651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3955);







function WataniyaLoginComponent_i_lucide_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i-lucide", 50);
  }
}
function WataniyaLoginComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i-lucide", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 55)(5, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formError);
  }
}
let WataniyaLoginComponent = /*#__PURE__*/(() => {
  class WataniyaLoginComponent extends _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent {
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵWataniyaLoginComponent_BaseFactory;
        return function WataniyaLoginComponent_Factory(t) {
          return (ɵWataniyaLoginComponent_BaseFactory || (ɵWataniyaLoginComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](WataniyaLoginComponent)))(t || WataniyaLoginComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WataniyaLoginComponent,
        selectors: [["app-wataniya-login"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 89,
        vars: 56,
        consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-50", "py-12", "px-4", "sm:px-6", "lg:px-8", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "z-0"], [1, "absolute", "top-0", "right-0", "w-2/3", "h-full", "bg-gradient-to-l", "from-blue-50", "to-transparent"], [1, "absolute", "bottom-0", "left-0", "w-1/3", "h-full", "bg-gradient-to-tr", "from-gray-100", "to-transparent"], [1, "absolute", "-top-24", "-right-24", "w-96", "h-96", "rounded-full", "bg-primary/5", "blur-3xl"], [1, "max-w-md", "w-full", "space-y-8", "relative", "z-10"], [1, "text-center"], ["routerLink", "/", 1, "inline-block", "mb-6"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "bg-navy", "p-2", "rounded-lg", "flex", "items-center", "justify-center"], ["src", "assets/wataniya-logo.png", "alt", "Al Wataniya", 1, "h-8", "w-auto", "object-contain"], [1, "text-2xl", "font-bold", "text-navy"], [1, "mt-6", "text-3xl", "font-extrabold", "text-gray-900"], [1, "mt-2", "text-sm", "text-gray-600"], ["routerLink", "/register", 1, "font-medium", "text-primary", "hover:text-primary-dark", "transition-colors"], [1, "bg-white", "py-8", "px-4", "shadow-xl", "sm:rounded-2xl", "sm:px-10", "border", "border-gray-100"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1", "relative", "rounded-md", "shadow-sm"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["name", "mail", 1, "h-5", "w-5", "text-gray-400"], ["id", "email", "type", "email", "formControlName", "email", 1, "block", "w-full", "pl-10", "pr-3", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "placeholder"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["name", "lock", 1, "h-5", "w-5", "text-gray-400"], ["id", "password", "formControlName", "password", 1, "block", "w-full", "pl-10", "pr-10", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "type", "placeholder"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-3", "flex", "items-center", "cursor-pointer", "hover:text-gray-600", 3, "click"], [1, "h-5", "w-5", "text-gray-400", 3, "name"], [1, "mt-1", "text-right"], ["routerLink", "/forgot-password", 1, "text-sm", "font-medium", "text-primary", "hover:text-primary-dark"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center"], ["id", "remember-me", "name", "remember-me", "type", "checkbox", "formControlName", "rememberMe", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded"], ["for", "remember-me", 1, "ml-2", "block", "text-sm", "text-gray-900"], ["type", "submit", 1, "w-full", "flex", "justify-center", "py-3", "px-4", "border", "border-transparent", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "text-white", "bg-primary", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary", "transition-all", "disabled:opacity-70", "disabled:cursor-not-allowed", 3, "disabled"], ["name", "loader-2", "class", "animate-spin -ml-1 mr-2 h-5 w-5", 4, "ngIf"], ["class", "rounded-md bg-red-50 p-4 animate-fade-in", 4, "ngIf"], [1, "mt-6"], [1, "relative"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-gray-300"], [1, "relative", "flex", "justify-center", "text-sm"], [1, "px-2", "bg-white", "text-gray-500"], ["type", "button", 1, "w-full", "inline-flex", "justify-center", "py-3", "px-4", "border", "border-gray-300", "rounded-lg", "shadow-sm", "bg-white", "text-sm", "font-medium", "text-gray-500", "hover:bg-gray-50", "transition-colors", 3, "click"], ["src", "https://www.svgrepo.com/show/475656/google-color.svg", "alt", "Google", 1, "h-5", "w-5"], [1, "ml-2"], [1, "mt-8", "text-center", "border-t", "border-gray-100", "pt-6"], [1, "text-xs", "text-gray-500", "leading-relaxed"], [1, "mt-4", "flex", "justify-center", "gap-4", "text-xs", "text-gray-400"], ["href", "#", 1, "hover:text-primary"], [1, "mt-4", "text-xs", "text-gray-400"], ["name", "loader-2", 1, "animate-spin", "-ml-1", "mr-2", "h-5", "w-5"], [1, "rounded-md", "bg-red-50", "p-4", "animate-fade-in"], [1, "flex"], [1, "flex-shrink-0"], ["name", "alert-circle", 1, "h-5", "w-5", "text-red-400"], [1, "ml-3"], [1, "text-sm", "font-medium", "text-red-800"]],
        template: function WataniyaLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "a", 7)(8, "div", 8)(9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Al Wataniya");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WataniyaLoginComponent_Template_form_ngSubmit_23_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div")(25, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18)(29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i-lucide", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div")(34, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 18)(38, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i-lucide", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WataniyaLoginComponent_Template_button_click_42_listener() {
              return ctx.togglePasswordVisibility();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i-lucide", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27)(45, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 29)(49, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div")(55, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, WataniyaLoginComponent_i_lucide_56_Template, 1, 0, "i-lucide", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, WataniyaLoginComponent_div_60_Template, 7, 1, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 36)(62, "div", 37)(63, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 40)(66, "span", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 36)(70, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WataniyaLoginComponent_Template_button_click_70_listener() {
              return ctx.onGoogleLogin();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 45)(76, "p", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 47)(80, "a", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 22, "AUTH.LOGIN.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 24, "AUTH.LOGIN.SUBTITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 26, "AUTH.LOGIN.CREATE_ACCOUNT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 28, "AUTH.LOGIN.EMAIL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 30, "AUTH.LOGIN.EMAIL_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 32, "AUTH.LOGIN.PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 34, "AUTH.LOGIN.PASSWORD_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.showPassword ? "eye-off" : "eye");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 36, "AUTH.LOGIN.FORGOT_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 38, "AUTH.LOGIN.REMEMBER_ME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 40, "AUTH.LOGIN.SIGNING_IN") : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 42, "AUTH.LOGIN.SIGN_IN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 44, "AUTH.LOGIN.OR_SIGN_IN_WITH"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 46, "AUTH.LOGIN.CONTINUE_WITH_GOOGLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](78, 48, "AUTH.LOGIN.BRANDING.WATANIYA.DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 50, "AUTH.LOGIN.BRANDING.WATANIYA.PRIVACY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 52, "AUTH.LOGIN.BRANDING.WATANIYA.TERMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](88, 54, "AUTH.LOGIN.BRANDING.WATANIYA.COPYRIGHT"));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, lucide_angular__WEBPACK_IMPORTED_MODULE_5__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return WataniyaLoginComponent;
})();

/***/ }),

/***/ 8140:
/*!************************************************************************************************!*\
  !*** ./src/app/public/pages/products/engineering-insurance/engineering-insurance.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineeringInsuranceComponent: () => (/* binding */ EngineeringInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function EngineeringInsuranceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, feature_r1));
  }
}
let EngineeringInsuranceComponent = /*#__PURE__*/(() => {
  class EngineeringInsuranceComponent {
    constructor() {
      this.features = ['PRODUCTS.ENGINEERING.FEATURES.0', 'PRODUCTS.ENGINEERING.FEATURES.1', 'PRODUCTS.ENGINEERING.FEATURES.2', 'PRODUCTS.ENGINEERING.FEATURES.3', 'PRODUCTS.ENGINEERING.FEATURES.4', 'PRODUCTS.ENGINEERING.FEATURES.5'];
    }
    static {
      this.ɵfac = function EngineeringInsuranceComponent_Factory(t) {
        return new (t || EngineeringInsuranceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EngineeringInsuranceComponent,
        selectors: [["app-engineering-insurance"]],
        decls: 19,
        vars: 13,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-gradient-to-r", "from-purple-600", "to-purple-800", "text-white", "py-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-xl", "mb-8"], ["routerLink", "/login", 1, "inline-block", "bg-white", "text-purple-600", "hover:bg-gray-100", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-16"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-8", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "p-6"], [1, "flex", "items-start", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-purple-600", "flex-shrink-0", "mt-1"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-900", "dark:text-white"]],
        template: function EngineeringInsuranceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EngineeringInsuranceComponent_div_18_Template, 7, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "PRODUCTS.ENGINEERING.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "PRODUCTS.ENGINEERING.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "PRODUCTS.COMMON.GET_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "PRODUCTS.COMMON.COVERAGE_BENEFITS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe]
      });
    }
  }
  return EngineeringInsuranceComponent;
})();

/***/ }),

/***/ 8988:
/*!**************************************************************************************!*\
  !*** ./src/app/public/pages/products/marine-insurance/marine-insurance.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarineInsuranceComponent: () => (/* binding */ MarineInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function MarineInsuranceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, feature_r1));
  }
}
let MarineInsuranceComponent = /*#__PURE__*/(() => {
  class MarineInsuranceComponent {
    constructor() {
      this.features = ['PRODUCTS.MARINE.FEATURES.0', 'PRODUCTS.MARINE.FEATURES.1', 'PRODUCTS.MARINE.FEATURES.2', 'PRODUCTS.MARINE.FEATURES.3', 'PRODUCTS.MARINE.FEATURES.4', 'PRODUCTS.MARINE.FEATURES.5'];
    }
    static {
      this.ɵfac = function MarineInsuranceComponent_Factory(t) {
        return new (t || MarineInsuranceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MarineInsuranceComponent,
        selectors: [["app-marine-insurance"]],
        decls: 19,
        vars: 13,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-gradient-to-r", "from-cyan-600", "to-cyan-800", "text-white", "py-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-xl", "mb-8"], ["routerLink", "/login", 1, "inline-block", "bg-white", "text-cyan-600", "hover:bg-gray-100", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-16"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-8", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "p-6"], [1, "flex", "items-start", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-cyan-600", "flex-shrink-0", "mt-1"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-900", "dark:text-white"]],
        template: function MarineInsuranceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MarineInsuranceComponent_div_18_Template, 7, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "PRODUCTS.MARINE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "PRODUCTS.MARINE.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "PRODUCTS.COMMON.GET_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "PRODUCTS.COMMON.COVERAGE_BENEFITS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe]
      });
    }
  }
  return MarineInsuranceComponent;
})();

/***/ }),

/***/ 5624:
/*!****************************************************************************************!*\
  !*** ./src/app/public/pages/products/medical-insurance/medical-insurance.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MedicalInsuranceComponent: () => (/* binding */ MedicalInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function MedicalInsuranceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, feature_r1));
  }
}
let MedicalInsuranceComponent = /*#__PURE__*/(() => {
  class MedicalInsuranceComponent {
    constructor() {
      this.features = ['PRODUCTS.MEDICAL.FEATURES.0', 'PRODUCTS.MEDICAL.FEATURES.1', 'PRODUCTS.MEDICAL.FEATURES.2', 'PRODUCTS.MEDICAL.FEATURES.3', 'PRODUCTS.MEDICAL.FEATURES.4', 'PRODUCTS.MEDICAL.FEATURES.5'];
    }
    static {
      this.ɵfac = function MedicalInsuranceComponent_Factory(t) {
        return new (t || MedicalInsuranceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MedicalInsuranceComponent,
        selectors: [["app-medical-insurance"]],
        decls: 19,
        vars: 13,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-gradient-to-r", "from-green-600", "to-green-800", "text-white", "py-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-xl", "mb-8"], ["routerLink", "/login", 1, "inline-block", "bg-white", "text-green-600", "hover:bg-gray-100", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-16"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-8", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "p-6"], [1, "flex", "items-start", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-green-600", "flex-shrink-0", "mt-1"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-900", "dark:text-white"]],
        template: function MedicalInsuranceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MedicalInsuranceComponent_div_18_Template, 7, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "PRODUCTS.MEDICAL.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "PRODUCTS.MEDICAL.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "PRODUCTS.COMMON.GET_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "PRODUCTS.COMMON.COVERAGE_BENEFITS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe]
      });
    }
  }
  return MedicalInsuranceComponent;
})();

/***/ }),

/***/ 2564:
/*!************************************************************************************!*\
  !*** ./src/app/public/pages/products/motor-insurance/motor-insurance.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotorInsuranceComponent: () => (/* binding */ MotorInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function MotorInsuranceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, feature_r1));
  }
}
let MotorInsuranceComponent = /*#__PURE__*/(() => {
  class MotorInsuranceComponent {
    constructor() {
      this.features = ['PRODUCTS.MOTOR.FEATURES.0', 'PRODUCTS.MOTOR.FEATURES.1', 'PRODUCTS.MOTOR.FEATURES.2', 'PRODUCTS.MOTOR.FEATURES.3', 'PRODUCTS.MOTOR.FEATURES.4', 'PRODUCTS.MOTOR.FEATURES.5'];
    }
    static {
      this.ɵfac = function MotorInsuranceComponent_Factory(t) {
        return new (t || MotorInsuranceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MotorInsuranceComponent,
        selectors: [["app-motor-insurance"]],
        decls: 69,
        vars: 55,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-gradient-to-r", "from-primary", "to-primary-dark", "text-white", "py-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-xl", "mb-8"], ["routerLink", "/login", 1, "inline-block", "bg-white", "text-primary", "hover:bg-gray-100", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-16"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-8", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "py-16"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "border-2", "border-gray-200", "dark:border-gray-700", "rounded-xl", "p-8", "hover:border-primary", "transition-colors"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "mb-4"], [1, "text-gray-600", "dark:text-gray-400", "mb-4"], [1, "text-3xl", "font-bold", "text-primary", "mb-4"], [1, "border-2", "border-primary", "bg-primary/5", "rounded-xl", "p-8"], [1, "inline-block", "bg-primary", "text-white", "px-3", "py-1", "rounded-full", "text-sm", "font-semibold", "mb-4"], [1, "bg-gradient-to-r", "from-primary", "to-primary-dark", "rounded-2xl", "shadow-xl", "p-12", "text-center", "text-white"], [1, "text-3xl", "font-bold", "mb-4"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "p-6"], [1, "flex", "items-start", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-primary", "flex-shrink-0", "mt-1"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-900", "dark:text-white"]],
        template: function MotorInsuranceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MotorInsuranceComponent_div_18_Template, 7, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "h3", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h3", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13)(49, "h3", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6)(59, "div", 19)(60, "h2", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 19, "PRODUCTS.MOTOR.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 21, "PRODUCTS.MOTOR.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 23, "PRODUCTS.COMMON.GET_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 25, "PRODUCTS.COMMON.WHATS_COVERED"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 27, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 29, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.COMPREHENSIVE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 31, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.COMPREHENSIVE.DESC"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 33, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.COMPREHENSIVE.PRICE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 35, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY_FIRE.POPULAR"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 37, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY_FIRE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 39, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY_FIRE.DESC"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 41, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY_FIRE.PRICE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 43, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 45, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY.DESC"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 47, "PRODUCTS.MOTOR.COVERAGE_OPTIONS.THIRD_PARTY.PRICE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 49, "PRODUCTS.COMMON.READY_TO_PROTECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 51, "PRODUCTS.COMMON.GET_PERSONALIZED_QUOTE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 53, "PRODUCTS.COMMON.GET_STARTED"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe]
      });
    }
  }
  return MotorInsuranceComponent;
})();

/***/ }),

/***/ 5926:
/*!******************************************************************************************!*\
  !*** ./src/app/public/pages/products/property-insurance/property-insurance.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyInsuranceComponent: () => (/* binding */ PropertyInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function PropertyInsuranceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, feature_r1));
  }
}
let PropertyInsuranceComponent = /*#__PURE__*/(() => {
  class PropertyInsuranceComponent {
    constructor() {
      this.features = ['PRODUCTS.PROPERTY.FEATURES.0', 'PRODUCTS.PROPERTY.FEATURES.1', 'PRODUCTS.PROPERTY.FEATURES.2', 'PRODUCTS.PROPERTY.FEATURES.3', 'PRODUCTS.PROPERTY.FEATURES.4', 'PRODUCTS.PROPERTY.FEATURES.5'];
    }
    static {
      this.ɵfac = function PropertyInsuranceComponent_Factory(t) {
        return new (t || PropertyInsuranceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PropertyInsuranceComponent,
        selectors: [["app-property-insurance"]],
        decls: 19,
        vars: 13,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-gradient-to-r", "from-orange-600", "to-orange-800", "text-white", "py-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-xl", "mb-8"], ["routerLink", "/login", 1, "inline-block", "bg-white", "text-orange-600", "hover:bg-gray-100", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-16"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-8", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "p-6"], [1, "flex", "items-start", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-orange-600", "flex-shrink-0", "mt-1"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-900", "dark:text-white"]],
        template: function PropertyInsuranceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PropertyInsuranceComponent_div_18_Template, 7, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "PRODUCTS.PROPERTY.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "PRODUCTS.PROPERTY.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "PRODUCTS.COMMON.GET_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "PRODUCTS.COMMON.COVERAGE_BENEFITS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe]
      });
    }
  }
  return PropertyInsuranceComponent;
})();

/***/ }),

/***/ 6716:
/*!**************************************************************************************!*\
  !*** ./src/app/public/pages/products/travel-insurance/travel-insurance.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TravelInsuranceComponent: () => (/* binding */ TravelInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function TravelInsuranceComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, feature_r1));
  }
}
let TravelInsuranceComponent = /*#__PURE__*/(() => {
  class TravelInsuranceComponent {
    constructor() {
      this.features = ['PRODUCTS.TRAVEL.FEATURES.0', 'PRODUCTS.TRAVEL.FEATURES.1', 'PRODUCTS.TRAVEL.FEATURES.2', 'PRODUCTS.TRAVEL.FEATURES.3', 'PRODUCTS.TRAVEL.FEATURES.4', 'PRODUCTS.TRAVEL.FEATURES.5'];
    }
    static {
      this.ɵfac = function TravelInsuranceComponent_Factory(t) {
        return new (t || TravelInsuranceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TravelInsuranceComponent,
        selectors: [["app-travel-insurance"]],
        decls: 19,
        vars: 13,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900"], [1, "bg-gradient-to-r", "from-blue-600", "to-blue-800", "text-white", "py-20"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-xl", "mb-8"], ["routerLink", "/login", 1, "inline-block", "bg-white", "text-pink-600", "hover:bg-gray-100", "font-semibold", "py-3", "px-8", "rounded-lg", "transition-colors"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-16"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-8", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "p-6"], [1, "flex", "items-start", "gap-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-blue-600", "flex-shrink-0", "mt-1"], ["d", "M20 6 9 17l-5-5"], [1, "text-gray-900", "dark:text-white"]],
        template: function TravelInsuranceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "h2", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TravelInsuranceComponent_div_18_Template, 7, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "PRODUCTS.TRAVEL.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "PRODUCTS.TRAVEL.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "PRODUCTS.COMMON.GET_QUOTE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "PRODUCTS.COMMON.COVERAGE_BENEFITS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe]
      });
    }
  }
  return TravelInsuranceComponent;
})();

/***/ }),

/***/ 9307:
/*!*************************************************************!*\
  !*** ./src/app/public/pages/register/register.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_national_id_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/national-id.utils */ 2451);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);





const _c0 = a0 => ({
  code: "male",
  name: a0,
  icon: "\uD83D\uDC68"
});
const _c1 = a0 => ({
  code: "female",
  name: a0,
  icon: "\uD83D\uDC69"
});
const _c2 = (a0, a1) => [a0, a1];
function RegisterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-wataniya-register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function RegisterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6)(5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9)(8, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17)(30, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_ng_template_1_Template_form_ngSubmit_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div")(41, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 23)(45, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i-lucide", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.name, $event) || (ctx_r1.formData.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div")(50, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 23)(54, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i-lucide", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.email, $event) || (ctx_r1.formData.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div")(59, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 23)(63, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "i-lucide", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.phone, $event) || (ctx_r1.formData.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div")(68, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 23)(71, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i-lucide", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_73_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.address, $event) || (ctx_r1.formData.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div")(75, "app-selection-modal", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("valueChange", function RegisterComponent_ng_template_1_Template_app_selection_modal_valueChange_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.gender, $event) || (ctx_r1.formData.gender = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div")(81, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.nationalId, $event) || (ctx_r1.formData.nationalId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_84_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onNationalIdChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 35)(86, "app-date-picker", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_app_date_picker_ngModelChange_86_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.dateOfBirth, $event) || (ctx_r1.formData.dateOfBirth = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div")(89, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 23)(93, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "i-lucide", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](96, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.password, $event) || (ctx_r1.formData.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div")(98, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 23)(102, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "i-lucide", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function RegisterComponent_ng_template_1_Template_input_ngModelChange_104_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.formData.confirmPassword, $event) || (ctx_r1.formData.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "path", 46)(117, "path", 47)(118, "path", 48)(119, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](121, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 36, "AUTH.LOGIN.BRANDING.TAGLINE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 38, "AUTH.LOGIN.BRANDING.DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 40, "AUTH.LOGIN.BRANDING.COPYRIGHT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 42, "AUTH.LOGIN.BRANDING.PRIVACY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 44, "AUTH.LOGIN.BRANDING.TERMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 46, "AUTH.REGISTER.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 48, "AUTH.REGISTER.SUBTITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 50, "AUTH.REGISTER.SIGN_IN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 52, "AUTH.REGISTER.FULL_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 54, "AUTH.REGISTER.FULL_NAME_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 56, "AUTH.REGISTER.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 58, "AUTH.REGISTER.EMAIL_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 60, "AUTH.REGISTER.PHONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 62, "AUTH.REGISTER.PHONE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 64, "PROFILE.GENDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("value", ctx_r1.formData.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](94, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](90, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](77, 66, "PROFILE.MALE")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](92, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](78, 68, "PROFILE.FEMALE"))))("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 70, "PROFILE.SELECT_GENDER"))("layout", "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 72, "PROFILE.NATIONAL_ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.nationalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.dateOfBirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](87, 74, "PROFILE.BIRTH_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](91, 76, "AUTH.REGISTER.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](96, 78, "AUTH.REGISTER.PASSWORD_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](100, 80, "AUTH.REGISTER.CONFIRM_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](105, 82, "AUTH.REGISTER.CONFIRM_PASSWORD_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 84, "AUTH.REGISTER.CREATE_ACCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](113, 86, "AUTH.REGISTER.OR_REGISTER_WITH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](121, 88, "AUTH.REGISTER.CONTINUE_WITH_GOOGLE"), " ");
  }
}
let RegisterComponent = /*#__PURE__*/(() => {
  class RegisterComponent {
    constructor(router, notificationService) {
      this.router = router;
      this.notificationService = notificationService;
      this.clientId = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.clientId;
      this.formData = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',
        gender: 'male',
        dateOfBirth: '',
        nationalId: '',
        role: 'customer'
      };
    }
    onNationalIdChange(value) {
      if (value) {
        const dob = (0,_shared_utils_national_id_utils__WEBPACK_IMPORTED_MODULE_0__.extractBirthDateFromNationalId)(value);
        if (dob) {
          this.formData.dateOfBirth = dob;
        }
      }
    }
    onSubmit() {
      if (!this.formData.name || !this.formData.email || !this.formData.password) {
        this.notificationService.warning('Please fill in all required fields');
        return;
      }
      if (this.formData.password !== this.formData.confirmPassword) {
        this.notificationService.warning('Passwords do not match');
        return;
      }
      console.log('Register:', this.formData);
      this.notificationService.success('Registration successful! Please login.');
      this.router.navigate(['/login']);
    }
    static {
      this.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 3,
        vars: 2,
        consts: [["orientTemplate", ""], [4, "ngIf", "ngIfElse"], [1, "min-h-screen", "flex", "bg-white", "dark:bg-gray-900", "transition-colors", "duration-300"], [1, "hidden", "lg:flex", "lg:w-1/2", "bg-navy", "dark:bg-gray-950", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "bg-gradient-to-br", "from-navy", "via-primary", "to-primary-light", "dark:from-gray-950", "dark:via-gray-900", "dark:to-gray-800", "opacity-90"], [1, "absolute", "inset-0", "bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')]", "bg-cover", "bg-center", "mix-blend-overlay"], [1, "relative", "z-10", "w-full", "flex", "flex-col", "justify-between", "p-12", "text-white"], ["routerLink", "/", 1, "flex", "items-center", "gap-2"], ["src", "assets/logo.png", "alt", "Orient Insurance", 1, "h-12", "object-contain", "brightness-0", "invert"], [1, "space-y-6", "max-w-lg"], [1, "text-4xl", "font-bold", "leading-tight"], [1, "text-lg", "text-blue-100", "dark:text-gray-300"], [1, "flex", "gap-4", "text-sm", "text-blue-200", "dark:text-gray-400"], [1, "flex-1", "flex", "flex-col", "justify-center", "py-12", "px-4", "sm:px-6", "lg:px-20", "xl:px-24", "bg-white", "dark:bg-gray-900", "overflow-y-auto"], [1, "mx-auto", "w-full", "max-w-md"], [1, "lg:hidden", "mb-8"], ["src", "assets/logo.png", "alt", "Orient Insurance", 1, "h-10", "object-contain"], [1, "mb-8"], [1, "text-3xl", "font-bold", "text-navy", "dark:text-white"], [1, "mt-2", "text-sm", "text-gray-600", "dark:text-gray-400"], ["routerLink", "/login", 1, "font-medium", "text-primary", "hover:text-primary-dark"], [1, "space-y-5", 3, "ngSubmit"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1.5"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-3", "flex", "items-center", "pointer-events-none"], ["name", "user", 1, "h-5", "w-5", "text-gray-400"], ["type", "text", "name", "name", "required", "", 1, "w-full", "pl-10", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "mail", 1, "h-5", "w-5", "text-gray-400"], ["type", "email", "name", "email", "required", "", 1, "w-full", "pl-10", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "phone", 1, "h-5", "w-5", "text-gray-400"], ["type", "tel", "name", "phone", 1, "w-full", "pl-10", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "building", 1, "h-5", "w-5", "text-gray-400"], ["type", "text", "name", "address", "placeholder", "12 Street 45, Nasr City, Cairo", 1, "w-full", "pl-10", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel"], [3, "valueChange", "label", "value", "options", "title", "layout"], ["type", "text", "name", "nationalId", "placeholder", "29908140123456", 1, "w-full", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "col-span-2"], ["name", "dateOfBirth", 3, "ngModelChange", "ngModel", "label"], ["name", "lock", 1, "h-5", "w-5", "text-gray-400"], ["type", "password", "name", "password", "required", "", 1, "w-full", "pl-10", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "password", "name", "confirmPassword", "required", "", 1, "w-full", "pl-10", "px-4", "py-2.5", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", "transition-colors", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "w-full", "bg-primary", "hover:bg-primary-dark", "text-white", "font-semibold", "py-3", "px-4", "rounded-lg", "transition-all", "shadow-lg", "hover:shadow-primary/30", "transform", "hover:-translate-y-0.5"], [1, "mt-8", "flex", "flex-col", "items-center"], [1, "w-full", "border-t", "border-gray-200", "dark:border-gray-700", "mb-4"], [1, "text-sm", "text-gray-500", "mb-4"], ["type", "button", 1, "w-full", "inline-flex", "justify-center", "items-center", "py-2.5", "px-4", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "shadow-sm", "bg-white", "dark:bg-gray-800", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "hover:bg-gray-50", "dark:hover:bg-gray-700", "transition-colors"], ["viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-3"], ["fill", "currentColor", "d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"], ["fill", "currentColor", "d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"], ["fill", "currentColor", "d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"], ["fill", "currentColor", "d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RegisterComponent_ng_container_0_Template, 2, 0, "ng-container", 1)(1, RegisterComponent_ng_template_1_Template, 122, 97, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }
          if (rf & 2) {
            const orientTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.clientId === "wataniya")("ngIfElse", orientTemplate_r3);
          }
        }
      });
    }
  }
  return RegisterComponent;
})();

/***/ }),

/***/ 5032:
/*!**********************************************************************!*\
  !*** ./src/app/public/pages/register/wataniya-register.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WataniyaRegisterComponent: () => (/* binding */ WataniyaRegisterComponent)
/* harmony export */ });
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 9307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);




let WataniyaRegisterComponent = /*#__PURE__*/(() => {
  class WataniyaRegisterComponent extends _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent {
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵWataniyaRegisterComponent_BaseFactory;
        return function WataniyaRegisterComponent_Factory(t) {
          return (ɵWataniyaRegisterComponent_BaseFactory || (ɵWataniyaRegisterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](WataniyaRegisterComponent)))(t || WataniyaRegisterComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WataniyaRegisterComponent,
        selectors: [["app-wataniya-register"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 55,
        vars: 5,
        consts: [[1, "min-h-screen", "bg-gray-50", "flex", "flex-col", "justify-center", "py-12", "sm:px-6", "lg:px-8"], [1, "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "text-center"], ["routerLink", "/", 1, "inline-block", "mb-6"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "bg-navy", "p-2", "rounded-lg", "flex", "items-center", "justify-center"], ["src", "assets/wataniya-logo.png", "alt", "Al Wataniya", 1, "h-8", "w-auto", "object-contain"], [1, "text-2xl", "font-bold", "text-navy"], [1, "mt-6", "text-3xl", "font-extrabold", "text-gray-900"], [1, "mt-2", "text-sm", "text-gray-600"], ["routerLink", "/login", 1, "font-medium", "text-primary", "hover:text-primary-dark", "transition-colors"], [1, "mt-8", "sm:mx-auto", "sm:w-full", "sm:max-w-md"], [1, "bg-white", "py-8", "px-4", "shadow-xl", "sm:rounded-2xl", "sm:px-10", "border", "border-gray-100"], [1, "space-y-6", 3, "ngSubmit"], [1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1"], ["name", "name", "type", "text", "required", "", 1, "appearance-none", "block", "w-full", "px-3", "py-3", "border", "border-gray-300", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "ngModelChange", "ngModel"], ["name", "email", "type", "email", "required", "", 1, "appearance-none", "block", "w-full", "px-3", "py-3", "border", "border-gray-300", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "ngModelChange", "ngModel"], ["name", "phone", "type", "tel", "required", "", 1, "appearance-none", "block", "w-full", "px-3", "py-3", "border", "border-gray-300", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "ngModelChange", "ngModel"], ["name", "password", "type", "password", "required", "", 1, "appearance-none", "block", "w-full", "px-3", "py-3", "border", "border-gray-300", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "ngModelChange", "ngModel"], ["name", "confirmPassword", "type", "password", "required", "", 1, "appearance-none", "block", "w-full", "px-3", "py-3", "border", "border-gray-300", "rounded-lg", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-primary", "focus:border-primary", "sm:text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], ["id", "terms", "name", "terms", "type", "checkbox", "required", "", 1, "h-4", "w-4", "text-primary", "focus:ring-primary", "border-gray-300", "rounded"], ["for", "terms", 1, "ml-2", "block", "text-sm", "text-gray-900"], ["href", "#", 1, "text-primary", "hover:text-primary-dark"], ["type", "submit", 1, "w-full", "flex", "justify-center", "py-3", "px-4", "border", "border-transparent", "rounded-lg", "shadow-sm", "text-sm", "font-medium", "text-white", "bg-primary", "hover:bg-primary-dark", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-primary"]],
        template: function WataniyaRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4)(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Al Wataniya");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Create your account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Already have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Sign in here ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function WataniyaRegisterComponent_Template_form_ngSubmit_17_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Full Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaRegisterComponent_Template_input_ngModelChange_22_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.formData.name, $event) || (ctx.formData.name = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15)(27, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaRegisterComponent_Template_input_ngModelChange_27_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.formData.email, $event) || (ctx.formData.email = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div")(29, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15)(32, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaRegisterComponent_Template_input_ngModelChange_32_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.formData.phone, $event) || (ctx.formData.phone = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div")(34, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15)(37, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaRegisterComponent_Template_input_ngModelChange_37_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.formData.password, $event) || (ctx.formData.password = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div")(39, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Confirm Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15)(42, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function WataniyaRegisterComponent_Template_input_ngModelChange_42_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.formData.confirmPassword, $event) || (ctx.formData.confirmPassword = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " I agree to the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Terms");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div")(53, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Registry ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.phone);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.confirmPassword);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        encapsulation: 2
      });
    }
  }
  return WataniyaRegisterComponent;
})();

/***/ }),

/***/ 4328:
/*!*******************************************************!*\
  !*** ./src/app/public/pages/support/faq.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-angular */ 8516);





function FaqComponent_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const faq_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", faq_r4.answer, " ");
  }
}
function FaqComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_div_9_Template_button_click_1_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleFaq(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i-lucide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FaqComponent_div_9_div_6_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](faq_r4.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", faq_r4.open ? "rotate-180 bg-primary/10 text-primary" : "text-gray-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", faq_r4.open);
  }
}
let FaqComponent = /*#__PURE__*/(() => {
  class FaqComponent {
    constructor() {
      this.faqs = [{
        question: 'How do I file a claim?',
        answer: 'You can file a claim by clicking on the "Create Claim" button on your dashboard and following the multi-step process. You will need to provide the chassis number and details about the loss.',
        open: false
      }, {
        question: 'How can I renew my policy?',
        answer: 'To renew your policy, go to the "Policies" section, find your soon-to-expire policy, and click the "Renew" button. Follow the prompts to complete the payment and renewal.',
        open: false
      }, {
        question: 'What documents are required for medical insurance?',
        answer: 'Typically, you need a valid National ID or Passport, any previous medical records if applicable, and a completed health questionnaire.',
        open: false
      }, {
        question: 'Can I add a driver to my motor insurance?',
        answer: 'Yes, you can add additional drivers to your policy. Go to your policy details and select "Add Driver", or contact our support team for assistance.',
        open: false
      }, {
        question: 'How long does it take to process a claim?',
        answer: 'Claim processing times vary depending on the complexity and type of claim. Generally, straightforward claims are processed within 5-7 business days of receiving all required documentation.',
        open: false
      }];
    }
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
    static {
      this.ɵfac = function FaqComponent_Factory(t) {
        return new (t || FaqComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FaqComponent,
        selectors: [["app-faq"]],
        decls: 20,
        vars: 1,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900", "py-16"], [1, "max-w-4xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "mb-12", "text-center"], [1, "text-4xl", "font-bold", "text-navy", "dark:text-white", "mb-4"], [1, "text-xl", "text-gray-600", "dark:text-gray-300"], [1, "space-y-4"], ["class", "bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "mt-16", "text-center", "bg-white", "dark:bg-gray-800", "p-8", "rounded-3xl", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-4"], [1, "text-gray-600", "dark:text-gray-400", "mb-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center"], ["routerLink", "/contact", 1, "px-8", "py-3", "bg-primary", "text-white", "font-bold", "rounded-xl", "hover:bg-primary-dark", "transition-all", "shadow-lg", "shadow-primary/20"], ["routerLink", "/support", 1, "px-8", "py-3", "bg-gray-100", "dark:bg-gray-700", "text-navy", "dark:text-white", "font-bold", "rounded-xl", "hover:bg-gray-200", "dark:hover:bg-gray-600", "transition-all"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", "overflow-hidden", "transition-all", "duration-300"], [1, "w-full", "px-8", "py-6", "flex", "items-center", "justify-between", "text-left", 3, "click"], [1, "text-lg", "font-bold", "text-navy", "dark:text-white"], [1, "w-10", "h-10", "rounded-full", "bg-gray-50", "dark:bg-gray-700", "flex", "items-center", "justify-center", "transition-all", "duration-300", 3, "ngClass"], ["name", "chevron-down", 1, "w-6", "h-6"], ["class", "px-8 pb-8 animate-fadeIn", 4, "ngIf"], [1, "px-8", "pb-8", "animate-fadeIn"], [1, "h-px", "bg-gray-100", "dark:bg-gray-700", "mb-6"], [1, "text-gray-600", "dark:text-gray-400", "text-lg", "leading-relaxed"]],
        template: function FaqComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Frequently Asked Questions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Find answers to common questions about our services.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FaqComponent_div_9_Template, 7, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Still have questions?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "If you couldn't find the answer you were looking for, please contact our support team.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Contact Support ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Support Center ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faqs);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_4__.LucideAngularComponent],
        encapsulation: 2
      });
    }
  }
  return FaqComponent;
})();

/***/ }),

/***/ 5704:
/*!*********************************************************!*\
  !*** ./src/app/public/pages/support/guide.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuideComponent: () => (/* binding */ GuideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3955);





function GuideComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i-lucide", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i-lucide", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const guide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", guide_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", guide_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, guide_r1.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, guide_r1.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "SUPPORT.GUIDE.READ_FULL"), " ");
  }
}
let GuideComponent = /*#__PURE__*/(() => {
  class GuideComponent {
    constructor() {
      this.guides = [{
        title: 'SUPPORT.GUIDE.CARDS.STARTED.TITLE',
        description: 'SUPPORT.GUIDE.CARDS.STARTED.DESC',
        icon: 'rocket',
        color: 'bg-blue-100 text-blue-600'
      }, {
        title: 'SUPPORT.GUIDE.CARDS.POLICY.TITLE',
        description: 'SUPPORT.GUIDE.CARDS.POLICY.DESC',
        icon: 'file-text',
        color: 'bg-green-100 text-green-600'
      }, {
        title: 'SUPPORT.GUIDE.CARDS.CLAIMS.TITLE',
        description: 'SUPPORT.GUIDE.CARDS.CLAIMS.DESC',
        icon: 'alert-circle',
        color: 'bg-orange-100 text-orange-600'
      }, {
        title: 'SUPPORT.GUIDE.CARDS.PAYMENTS.TITLE',
        description: 'SUPPORT.GUIDE.CARDS.PAYMENTS.DESC',
        icon: 'shield-check',
        color: 'bg-purple-100 text-purple-600'
      }];
    }
    static {
      this.ɵfac = function GuideComponent_Factory(t) {
        return new (t || GuideComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GuideComponent,
        selectors: [["app-guide"]],
        decls: 31,
        vars: 19,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900", "py-16"], [1, "max-w-5xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "mb-12"], [1, "text-4xl", "font-bold", "text-navy", "dark:text-white", "mb-4", "text-center"], [1, "text-xl", "text-gray-600", "dark:text-gray-300", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], ["class", "bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group", 4, "ngFor", "ngForOf"], [1, "mt-12", "bg-navy", "rounded-3xl", "p-10", "text-white", "relative", "overflow-hidden"], [1, "relative", "z-10", "flex", "flex-col", "md:flex-row", "items-center", "gap-10"], [1, "flex-1"], [1, "inline-block", "px-4", "py-1", "bg-primary", "text-xs", "font-bold", "uppercase", "tracking-wider", "rounded-full", "mb-4"], [1, "text-3xl", "font-bold", "mb-4"], [1, "text-blue-100", "text-lg", "opacity-90", "mb-8"], [1, "px-8", "py-4", "bg-white", "text-navy", "font-bold", "rounded-xl", "hover:bg-blue-50", "transition-all", "shadow-xl", "shadow-black/10", "flex", "items-center", "gap-3"], ["name", "play-circle", 1, "w-5", "h-5"], [1, "w-full", "md:w-1/3", "aspect-video", "bg-white/10", "rounded-2xl", "flex", "items-center", "justify-center", "border", "border-white/20"], ["name", "image", 1, "w-12", "h-12", "text-white/30"], [1, "absolute", "top-0", "right-0", "w-64", "h-64", "bg-primary/20", "rounded-full", "blur-3xl", "-mr-20", "-mt-20"], [1, "bg-white", "dark:bg-gray-800", "rounded-3xl", "p-8", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", "hover:shadow-xl", "transition-all", "duration-300", "group"], [1, "flex", "items-start", "gap-6"], [1, "w-16", "h-16", "rounded-2xl", "flex", "items-center", "justify-center", "flex-shrink-0", "transition-transform", "group-hover:scale-110", 3, "ngClass"], [1, "w-8", "h-8", 3, "name"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white", "mb-3", "group-hover:text-primary", "transition-colors"], [1, "text-gray-600", "dark:text-gray-400", "text-lg", "leading-relaxed", "mb-6"], [1, "flex", "items-center", "text-primary", "font-bold", "hover:gap-2", "transition-all"], ["name", "chevron-right", 1, "w-5", "h-5", "ml-1"]],
        template: function GuideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GuideComponent_div_11_Template, 15, 11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i-lucide", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i-lucide", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, "SUPPORT.GUIDE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, "SUPPORT.GUIDE.SUBTITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.guides);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, "SUPPORT.GUIDE.FEATURED.BADGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, "SUPPORT.GUIDE.FEATURED.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 15, "SUPPORT.GUIDE.FEATURED.DESC"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 17, "SUPPORT.GUIDE.FEATURED.BUTTON"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_3__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return GuideComponent;
})();

/***/ }),

/***/ 8975:
/*!***********************************************************!*\
  !*** ./src/app/public/pages/support/support.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportComponent: () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3955);






function SupportComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i-lucide", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i-lucide", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", option_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", option_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", option_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, option_r1.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, option_r1.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "SUPPORT.VIEW_DETAILS"), " ");
  }
}
function SupportComponent_div_41_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const faq_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", faq_r5.answer, " ");
  }
}
function SupportComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupportComponent_div_41_Template_button_click_1_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleFaq(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i-lucide", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SupportComponent_div_41_div_6_Template, 4, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](faq_r5.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", faq_r5.open ? "rotate-180 bg-primary/10 text-primary" : "text-gray-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", faq_r5.open);
  }
}
let SupportComponent = /*#__PURE__*/(() => {
  class SupportComponent {
    constructor() {
      this.supportOptions = [{
        icon: 'help-circle',
        title: 'SUPPORT.OPTIONS.FAQ.TITLE',
        description: 'SUPPORT.OPTIONS.FAQ.DESC',
        link: '/support/faq',
        color: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600'
      }, {
        icon: 'message-circle',
        title: 'SUPPORT.OPTIONS.CONTACT.TITLE',
        description: 'SUPPORT.OPTIONS.CONTACT.DESC',
        link: '/contact',
        color: 'bg-green-50 dark:bg-green-900/30 text-green-600'
      }, {
        icon: 'book-open',
        title: 'SUPPORT.OPTIONS.GUIDE.TITLE',
        description: 'SUPPORT.OPTIONS.GUIDE.DESC',
        link: '/support/guide',
        color: 'bg-purple-50 dark:bg-purple-900/30 text-purple-600'
      }];
      this.faqs = [{
        question: 'How do I file a claim?',
        answer: 'You can file a claim through your customer portal by navigating to the Claims section and clicking "File New Claim". Fill out the required information and upload any supporting documents.',
        open: false
      }, {
        question: 'How long does claim processing take?',
        answer: 'Most claims are processed within 5-7 business days. Complex claims may take longer. You can track your claim status in real-time through your portal.',
        open: false
      }, {
        question: 'Can I modify my policy coverage?',
        answer: 'Yes, you can request policy modifications through your portal or by contacting your broker. Changes will be reviewed and confirmed within 24-48 hours.',
        open: false
      }, {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit cards, debit cards, bank transfers, and direct debit. You can set up automatic payments through your portal for convenience.',
        open: false
      }, {
        question: 'How do I renew my policy?',
        answer: 'We will send you a renewal notice 30 days before your policy expires. You can renew online through your portal or contact us for assistance.',
        open: false
      }];
    }
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
    static {
      this.ɵfac = function SupportComponent_Factory(t) {
        return new (t || SupportComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SupportComponent,
        selectors: [["app-support"]],
        decls: 42,
        vars: 26,
        consts: [[1, "min-h-screen", "bg-gray-50", "dark:bg-gray-900", "py-16"], [1, "max-w-5xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "mb-12", "text-center", "md:text-left"], [1, "text-4xl", "font-bold", "text-navy", "dark:text-white", "mb-2"], [1, "text-xl", "text-gray-600", "dark:text-gray-300"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "mb-12"], ["class", "bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "bg-navy", "rounded-3xl", "p-8", "md:p-12", "text-white", "relative", "overflow-hidden", "mb-16"], [1, "relative", "z-10", "flex", "flex-col", "lg:flex-row", "items-center", "justify-between", "gap-10"], [1, "text-center", "lg:text-left"], [1, "text-3xl", "font-bold", "mb-4"], [1, "text-blue-200", "text-lg", "max-w-xl", "opacity-90"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "w-full", "sm:w-auto"], [1, "px-8", "py-4", "bg-white", "text-navy", "rounded-xl", "hover:bg-blue-50", "transition-all", "font-bold", "flex", "items-center", "justify-center", "gap-3", "shadow-lg", "shadow-black/10"], ["name", "phone", 1, "w-5", "h-5"], [1, "px-8", "py-4", "border-2", "border-white/30", "text-white", "rounded-xl", "hover:bg-white/10", "transition-all", "font-bold", "flex", "items-center", "justify-center", "gap-3"], ["name", "mail", 1, "w-5", "h-5"], [1, "absolute", "top-0", "right-0", "w-80", "h-80", "bg-white/5", "rounded-full", "blur-3xl", "-mr-20", "-mt-20"], [1, "absolute", "bottom-0", "left-0", "w-80", "h-80", "bg-primary/20", "rounded-full", "blur-3xl", "-ml-20", "-mb-20"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-2xl", "font-bold", "text-navy", "dark:text-white"], ["routerLink", "/support/faq", 1, "text-primary", "font-semibold", "hover:underline"], [1, "grid", "grid-cols-1", "gap-4"], ["class", "bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "bg-white", "dark:bg-gray-800", "p-8", "rounded-2xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "hover:shadow-xl", "hover:-translate-y-1", "transition-all", "duration-300", "group", 3, "routerLink"], [1, "w-14", "h-14", "rounded-2xl", "flex", "items-center", "justify-center", "mb-6", 3, "ngClass"], [1, "w-7", "h-7", 3, "name"], [1, "text-xl", "font-bold", "text-navy", "dark:text-white", "mb-3", "group-hover:text-primary", "transition-colors"], [1, "text-gray-500", "dark:text-gray-400", "mb-6", "leading-relaxed"], [1, "flex", "items-center", "text-sm", "font-semibold", "text-primary"], ["name", "chevron-right", 1, "w-4", "h-4", "ml-1", "group-hover:translate-x-1", "transition-transform"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "border", "border-gray-100", "dark:border-gray-700", "shadow-sm", "overflow-hidden", "transition-all", "duration-300"], [1, "w-full", "px-8", "py-6", "flex", "items-center", "justify-between", "text-left", 3, "click"], [1, "text-lg", "font-semibold", "text-navy", "dark:text-white"], [1, "w-8", "h-8", "rounded-full", "bg-gray-50", "dark:bg-gray-700", "flex", "items-center", "justify-center", "transition-all", "duration-300", 3, "ngClass"], [1, "w-5", "h-5", 3, "name"], ["class", "px-8 pb-8 animate-fadeIn", 4, "ngIf"], [1, "px-8", "pb-8", "animate-fadeIn"], [1, "h-px", "bg-gray-100", "dark:bg-gray-700", "mb-6"], [1, "text-gray-600", "dark:text-gray-400", "text-lg", "leading-relaxed"]],
        template: function SupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SupportComponent_a_11_Template, 13, 12, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "h2", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i-lucide", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i-lucide", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 17)(31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "div", 19)(34, "h2", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SupportComponent_div_41_Template, 7, 4, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, "SUPPORT.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, "SUPPORT.SUBTITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.supportOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, "SUPPORT.STILL_NEED_HELP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, "SUPPORT.HELP_DESC"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 18, "SUPPORT.CALL_SUPPORT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 20, "SUPPORT.EMAIL_US"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 22, "SUPPORT.FAQ_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 24, "SUPPORT.VIEW_ALL_FAQ"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.faqs);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_4__.LucideAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
        encapsulation: 2
      });
    }
  }
  return SupportComponent;
})();

/***/ }),

/***/ 6974:
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicRoutingModule: () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 1823);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ 5651);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ 9307);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ 1183);
/* harmony import */ var _pages_support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/support/support.component */ 8975);
/* harmony import */ var _pages_products_motor_insurance_motor_insurance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/motor-insurance/motor-insurance.component */ 2564);
/* harmony import */ var _pages_products_medical_insurance_medical_insurance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products/medical-insurance/medical-insurance.component */ 5624);
/* harmony import */ var _pages_products_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products/travel-insurance/travel-insurance.component */ 6716);
/* harmony import */ var _pages_products_property_insurance_property_insurance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/products/property-insurance/property-insurance.component */ 5926);
/* harmony import */ var _pages_products_marine_insurance_marine_insurance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/products/marine-insurance/marine-insurance.component */ 8988);
/* harmony import */ var _pages_products_engineering_insurance_engineering_insurance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products/engineering-insurance/engineering-insurance.component */ 8140);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 2639);
/* harmony import */ var _pages_forgot_password_verify_otp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/forgot-password/verify-otp.component */ 5833);
/* harmony import */ var _pages_forgot_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/forgot-password/reset-password.component */ 6931);
/* harmony import */ var _pages_support_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/support/faq.component */ 4328);
/* harmony import */ var _pages_support_guide_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/support/guide.component */ 5704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 7705);



















const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'register',
  component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
}, {
  path: 'contact',
  component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: 'support',
  component: _pages_support_support_component__WEBPACK_IMPORTED_MODULE_4__.SupportComponent
}, {
  path: 'products/motor',
  component: _pages_products_motor_insurance_motor_insurance_component__WEBPACK_IMPORTED_MODULE_5__.MotorInsuranceComponent
}, {
  path: 'products/medical',
  component: _pages_products_medical_insurance_medical_insurance_component__WEBPACK_IMPORTED_MODULE_6__.MedicalInsuranceComponent
}, {
  path: 'products/travel',
  component: _pages_products_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_7__.TravelInsuranceComponent
}, {
  path: 'products/property',
  component: _pages_products_property_insurance_property_insurance_component__WEBPACK_IMPORTED_MODULE_8__.PropertyInsuranceComponent
}, {
  path: 'products/marine',
  component: _pages_products_marine_insurance_marine_insurance_component__WEBPACK_IMPORTED_MODULE_9__.MarineInsuranceComponent
}, {
  path: 'products/engineering',
  component: _pages_products_engineering_insurance_engineering_insurance_component__WEBPACK_IMPORTED_MODULE_10__.EngineeringInsuranceComponent
}, {
  path: 'forgot-password',
  component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__.ForgotPasswordComponent
}, {
  path: 'forgot-password/verify-otp',
  component: _pages_forgot_password_verify_otp_component__WEBPACK_IMPORTED_MODULE_12__.VerifyOtpComponent
}, {
  path: 'forgot-password/reset',
  component: _pages_forgot_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__.ResetPasswordComponent
}, {
  path: 'support/faq',
  component: _pages_support_faq_component__WEBPACK_IMPORTED_MODULE_14__.FaqComponent
}, {
  path: 'support/guide',
  component: _pages_support_guide_component__WEBPACK_IMPORTED_MODULE_15__.GuideComponent
}];
let PublicRoutingModule = /*#__PURE__*/(() => {
  class PublicRoutingModule {
    static {
      this.ɵfac = function PublicRoutingModule_Factory(t) {
        return new (t || PublicRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: PublicRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
      });
    }
  }
  return PublicRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](PublicRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 7527:
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicModule: () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-routing.module */ 6974);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lucide-angular */ 8516);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 1823);
/* harmony import */ var _pages_home_wataniya_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/wataniya-home.component */ 6156);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 5651);
/* harmony import */ var _pages_login_wataniya_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/wataniya-login.component */ 1958);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ 9307);
/* harmony import */ var _pages_register_wataniya_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/register/wataniya-register.component */ 5032);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ 1183);
/* harmony import */ var _pages_contact_wataniya_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/wataniya-contact.component */ 3963);
/* harmony import */ var _pages_support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/support/support.component */ 8975);
/* harmony import */ var _pages_products_motor_insurance_motor_insurance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/products/motor-insurance/motor-insurance.component */ 2564);
/* harmony import */ var _pages_products_medical_insurance_medical_insurance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products/medical-insurance/medical-insurance.component */ 5624);
/* harmony import */ var _pages_products_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/products/travel-insurance/travel-insurance.component */ 6716);
/* harmony import */ var _pages_products_property_insurance_property_insurance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/products/property-insurance/property-insurance.component */ 5926);
/* harmony import */ var _pages_products_marine_insurance_marine_insurance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/products/marine-insurance/marine-insurance.component */ 8988);
/* harmony import */ var _pages_products_engineering_insurance_engineering_insurance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/products/engineering-insurance/engineering-insurance.component */ 8140);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 2639);
/* harmony import */ var _pages_forgot_password_verify_otp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/forgot-password/verify-otp.component */ 5833);
/* harmony import */ var _pages_forgot_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/forgot-password/reset-password.component */ 6931);
/* harmony import */ var _pages_support_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/support/faq.component */ 4328);
/* harmony import */ var _pages_support_guide_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/support/guide.component */ 5704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ 3955);
/* harmony import */ var _shared_components_form_inputs_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/components/form-inputs/date-picker/date-picker.component */ 3374);
/* harmony import */ var _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/components/selection-modal/selection-modal.component */ 2209);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ 3083);





// Pages





























let PublicModule = /*#__PURE__*/(() => {
  class PublicModule {
    static {
      this.ɵfac = function PublicModule_Factory(t) {
        return new (t || PublicModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
        type: PublicModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule, _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, lucide_angular__WEBPACK_IMPORTED_MODULE_28__.LucideAngularModule.pick({
          Phone: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Phone,
          Mail: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Mail,
          MapPin: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.MapPin,
          Clock: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Clock,
          Loader2: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Loader2,
          Send: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Send,
          Check: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Check,
          Rocket: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Rocket,
          FileText: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.FileText,
          AlertCircle: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.AlertCircle,
          ShieldCheck: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.ShieldCheck,
          ChevronRight: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.ChevronRight,
          PlayCircle: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.PlayCircle,
          Image: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.Image,
          HelpCircle: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.HelpCircle,
          MessageCircle: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.MessageCircle,
          BookOpen: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.BookOpen,
          ChevronDown: lucide_angular__WEBPACK_IMPORTED_MODULE_28__.ChevronDown
        })]
      });
    }
  }
  return PublicModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_home_wataniya_home_component__WEBPACK_IMPORTED_MODULE_3__.WataniyaHomeComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _pages_login_wataniya_login_component__WEBPACK_IMPORTED_MODULE_5__.WataniyaLoginComponent, _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent, _pages_register_wataniya_register_component__WEBPACK_IMPORTED_MODULE_7__.WataniyaRegisterComponent, _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent, _pages_contact_wataniya_contact_component__WEBPACK_IMPORTED_MODULE_9__.WataniyaContactComponent, _pages_support_support_component__WEBPACK_IMPORTED_MODULE_10__.SupportComponent, _pages_products_motor_insurance_motor_insurance_component__WEBPACK_IMPORTED_MODULE_11__.MotorInsuranceComponent, _pages_products_medical_insurance_medical_insurance_component__WEBPACK_IMPORTED_MODULE_12__.MedicalInsuranceComponent, _pages_products_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_13__.TravelInsuranceComponent, _pages_products_property_insurance_property_insurance_component__WEBPACK_IMPORTED_MODULE_14__.PropertyInsuranceComponent, _pages_products_marine_insurance_marine_insurance_component__WEBPACK_IMPORTED_MODULE_15__.MarineInsuranceComponent, _pages_products_engineering_insurance_engineering_insurance_component__WEBPACK_IMPORTED_MODULE_16__.EngineeringInsuranceComponent, _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__.ForgotPasswordComponent, _pages_forgot_password_verify_otp_component__WEBPACK_IMPORTED_MODULE_18__.VerifyOtpComponent, _pages_forgot_password_reset_password_component__WEBPACK_IMPORTED_MODULE_19__.ResetPasswordComponent, _pages_support_faq_component__WEBPACK_IMPORTED_MODULE_20__.FaqComponent, _pages_support_guide_component__WEBPACK_IMPORTED_MODULE_21__.GuideComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule, _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, lucide_angular__WEBPACK_IMPORTED_MODULE_28__.LucideAngularModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormControlName, lucide_angular__WEBPACK_IMPORTED_MODULE_28__.LucideAngularComponent, _pages_login_wataniya_login_component__WEBPACK_IMPORTED_MODULE_5__.WataniyaLoginComponent];
}, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_26__.UpperCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe];
});
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterLink, _shared_components_form_inputs_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_22__.DatePickerComponent, _shared_components_selection_modal_selection_modal_component__WEBPACK_IMPORTED_MODULE_23__.SelectionModalComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_28__.LucideAngularComponent, _pages_register_wataniya_register_component__WEBPACK_IMPORTED_MODULE_7__.WataniyaRegisterComponent];
}, function () {
  return [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe];
});
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__.NavbarComponent, lucide_angular__WEBPACK_IMPORTED_MODULE_28__.LucideAngularComponent, _pages_contact_wataniya_contact_component__WEBPACK_IMPORTED_MODULE_9__.WataniyaContactComponent];
}, function () {
  return [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslatePipe];
});

/***/ })

}]);