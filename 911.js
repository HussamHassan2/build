"use strict";
(self["webpackChunkinsurance_portal"] = self["webpackChunkinsurance_portal"] || []).push([[911],{

/***/ 1574:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _pages_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/admin-dashboard.component */ 3469);
/* harmony import */ var _pages_users_admin_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/users/admin-users.component */ 3749);
/* harmony import */ var _pages_reports_admin_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/reports/admin-reports.component */ 6130);
/* harmony import */ var _pages_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings/admin-settings.component */ 2961);
/* harmony import */ var _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/pages/profile/profile.component */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7705);








const routes = [{
  path: '',
  component: _pages_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.AdminDashboardComponent
}, {
  path: 'users',
  component: _pages_users_admin_users_component__WEBPACK_IMPORTED_MODULE_1__.AdminUsersComponent
}, {
  path: 'reports',
  component: _pages_reports_admin_reports_component__WEBPACK_IMPORTED_MODULE_2__.AdminReportsComponent
}, {
  path: 'settings',
  component: _pages_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_3__.AdminSettingsComponent
}, {
  path: 'profile',
  component: _shared_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent
}];
let AdminRoutingModule = /*#__PURE__*/(() => {
  class AdminRoutingModule {
    static {
      this.ɵfac = function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });
    }
  }
  return AdminRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 4911:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 1574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _pages_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/admin-dashboard.component */ 3469);
/* harmony import */ var _pages_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/users/admin-users.component */ 3749);
/* harmony import */ var _pages_reports_admin_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reports/admin-reports.component */ 6130);
/* harmony import */ var _pages_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/settings/admin-settings.component */ 2961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);









let AdminModule = /*#__PURE__*/(() => {
  class AdminModule {
    static {
      this.ɵfac = function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
      });
    }
  }
  return AdminModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_pages_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent, _pages_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__.AdminUsersComponent, _pages_reports_admin_reports_component__WEBPACK_IMPORTED_MODULE_4__.AdminReportsComponent, _pages_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_5__.AdminSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 3469:
/*!********************************************************************!*\
  !*** ./src/app/admin/pages/dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);





function AdminDashboardComponent_app_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-card", 8)(1, "div", 9)(2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r1.value);
  }
}
let AdminDashboardComponent = /*#__PURE__*/(() => {
  class AdminDashboardComponent {
    constructor(authService) {
      this.authService = authService;
      this.user = null;
      this.stats = [{
        title: 'Total Users',
        value: '0'
      }, {
        title: 'Active Policies',
        value: '0'
      }, {
        title: 'System Health',
        value: '100%'
      }];
    }
    ngOnInit() {
      this.authService.currentUser.subscribe(user => {
        this.user = user;
      });
    }
    static {
      this.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminDashboardComponent,
        selectors: [["app-admin-dashboard"]],
        decls: 12,
        vars: 2,
        consts: [[1, "space-y-6"], [1, "bg-gradient-to-r", "from-primary", "to-primary-dark", "rounded-lg", "p-6", "text-white"], [1, "text-3xl", "font-bold", "mb-2"], [1, "text-blue-100"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [3, "hover", 4, "ngFor", "ngForOf"], ["title", "System Overview"], [1, "text-gray-600", "dark:text-gray-400"], [3, "hover"], [1, "text-center"], [1, "text-sm", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mt-2"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Admin Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminDashboardComponent_app_card_8_Template, 6, 3, "app-card", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-card", 6)(10, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Admin portal is ready. Manage users, view reports, and configure system settings.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome, ", (ctx.user == null ? null : ctx.user.name) || "Admin", "!");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.stats);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent],
        encapsulation: 2
      });
    }
  }
  return AdminDashboardComponent;
})();

/***/ }),

/***/ 6130:
/*!****************************************************************!*\
  !*** ./src/app/admin/pages/reports/admin-reports.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminReportsComponent: () => (/* binding */ AdminReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/data-table/data-table.component */ 4901);




let AdminReportsComponent = /*#__PURE__*/(() => {
  class AdminReportsComponent {
    constructor() {
      this.totalPolicies = 1250;
      this.totalClaims = 340;
      this.totalRevenue = 2500000;
      this.activeUsers = 890;
      this.tableConfig = {
        columns: [],
        data: [],
        loading: true,
        pageSize: 10,
        showSearch: true,
        showExport: true,
        searchPlaceholder: 'Search reports...'
      };
      this.setupColumns();
    }
    ngOnInit() {
      this.loadReports();
    }
    setupColumns() {
      this.tableConfig.columns = [{
        key: 'report_name',
        label: 'Report',
        sortable: true
      }, {
        key: 'generated_date',
        label: 'Generated',
        sortable: true
      }, {
        key: 'type',
        label: 'Type',
        sortable: true
      }, {
        key: 'records',
        label: 'Records',
        sortable: true
      }, {
        key: 'status',
        label: 'Status',
        sortable: true
      }];
    }
    loadReports() {
      // Mock data
      this.tableConfig.data = [{
        id: 1,
        report_name: 'Monthly Policies Report',
        generated_date: '2024-01-31',
        type: 'Policies',
        records: 125,
        status: 'Completed'
      }, {
        id: 2,
        report_name: 'Claims Analysis',
        generated_date: '2024-01-31',
        type: 'Claims',
        records: 45,
        status: 'Completed'
      }, {
        id: 3,
        report_name: 'Revenue Summary',
        generated_date: '2024-01-31',
        type: 'Financial',
        records: 1,
        status: 'Completed'
      }];
      this.tableConfig.loading = false;
    }
    onRowClick(report) {
      console.log('Report clicked:', report);
    }
    onExport() {
      console.log('Exporting reports...');
    }
    static {
      this.ɵfac = function AdminReportsComponent_Factory(t) {
        return new (t || AdminReportsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminReportsComponent,
        selectors: [["app-admin-reports"]],
        decls: 21,
        vars: 5,
        consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-6"], ["title", "Total Policies"], [1, "text-3xl", "font-bold", "text-primary"], ["title", "Total Claims"], [1, "text-3xl", "font-bold", "text-orange-600"], ["title", "Total Revenue"], [1, "text-3xl", "font-bold", "text-green-600"], ["title", "Active Users"], [1, "text-3xl", "font-bold", "text-blue-600"], [3, "rowClick", "exportData", "config"]],
        template: function AdminReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div")(3, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "System Reports");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "View and generate system reports");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "app-card", 4)(9, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "app-card", 6)(12, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "app-card", 8)(15, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "app-card", 10)(18, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-data-table", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowClick", function AdminReportsComponent_Template_app_data_table_rowClick_20_listener($event) {
              return ctx.onRowClick($event);
            })("exportData", function AdminReportsComponent_Template_app_data_table_exportData_20_listener() {
              return ctx.onExport();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalPolicies.toLocaleString());
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalClaims.toLocaleString());
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", (ctx.totalRevenue / 1000000).toFixed(1), "M");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeUsers.toLocaleString());
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.tableConfig);
          }
        },
        dependencies: [_shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__.DashboardLayoutComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__.DataTableComponent]
      });
    }
  }
  return AdminReportsComponent;
})();

/***/ }),

/***/ 2961:
/*!******************************************************************!*\
  !*** ./src/app/admin/pages/settings/admin-settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSettingsComponent: () => (/* binding */ AdminSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/card/card.component */ 9947);






let AdminSettingsComponent = /*#__PURE__*/(() => {
  class AdminSettingsComponent {
    constructor(notificationService) {
      this.notificationService = notificationService;
      this.settings = {
        siteName: 'Insurance Portal',
        supportEmail: 'support@insurance.com',
        maintenanceMode: false,
        allowRegistration: true,
        emailNotifications: true,
        smsNotifications: false
      };
    }
    saveSettings() {
      console.log('Saving settings:', this.settings);
      this.notificationService.success('Settings saved successfully!');
    }
    static {
      this.ɵfac = function AdminSettingsComponent_Factory(t) {
        return new (t || AdminSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AdminSettingsComponent,
        selectors: [["app-admin-settings"]],
        decls: 49,
        vars: 6,
        consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], ["title", "General Settings"], [1, "space-y-6", 3, "ngSubmit"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], ["type", "text", "name", "siteName", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "supportEmail", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:ring-2", "focus:ring-primary", "focus:border-transparent", "dark:bg-gray-700", "dark:text-white", 3, "ngModelChange", "ngModel"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between", "p-4", "border", "border-gray-200", "dark:border-gray-700", "rounded-lg"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-600", "dark:text-gray-400"], ["type", "checkbox", "name", "maintenanceMode", 1, "h-5", "w-5", "rounded", "border-gray-300", "text-primary", "focus:ring-primary", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "allowRegistration", 1, "h-5", "w-5", "rounded", "border-gray-300", "text-primary", "focus:ring-primary", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "emailNotifications", 1, "h-5", "w-5", "rounded", "border-gray-300", "text-primary", "focus:ring-primary", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "smsNotifications", 1, "h-5", "w-5", "rounded", "border-gray-300", "text-primary", "focus:ring-primary", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end"], ["type", "submit", "variant", "primary"]],
        template: function AdminSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div")(3, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "System Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Configure system preferences");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "app-card", 3)(8, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminSettingsComponent_Template_form_ngSubmit_8_listener() {
              return ctx.saveSettings();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Site Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.siteName, $event) || (ctx.settings.siteName = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div")(14, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Support Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_16_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.supportEmail, $event) || (ctx.settings.supportEmail = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "div")(20, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Maintenance Mode");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Temporarily disable public access");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_24_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.maintenanceMode, $event) || (ctx.settings.maintenanceMode = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 9)(26, "div")(27, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Allow Registration");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Enable new user registration");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_31_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.allowRegistration, $event) || (ctx.settings.allowRegistration = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9)(33, "div")(34, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Email Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Send email notifications to users");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_38_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.emailNotifications, $event) || (ctx.settings.emailNotifications = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 9)(40, "div")(41, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "SMS Notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Send SMS notifications to users");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AdminSettingsComponent_Template_input_ngModelChange_45_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.settings.smsNotifications, $event) || (ctx.settings.smsNotifications = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 16)(47, "app-button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Save Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.siteName);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.supportEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.maintenanceMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.allowRegistration);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.emailNotifications);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.settings.smsNotifications);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent]
      });
    }
  }
  return AdminSettingsComponent;
})();

/***/ }),

/***/ 3749:
/*!************************************************************!*\
  !*** ./src/app/admin/pages/users/admin-users.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUsersComponent: () => (/* binding */ AdminUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/dashboard-layout/dashboard-layout.component */ 9989);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/button/button.component */ 8219);
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/data-table/data-table.component */ 4901);





let AdminUsersComponent = /*#__PURE__*/(() => {
  class AdminUsersComponent {
    constructor(router) {
      this.router = router;
      this.tableConfig = {
        columns: [],
        data: [],
        loading: true,
        pageSize: 10,
        showSearch: true,
        showExport: true,
        searchPlaceholder: 'Search users...'
      };
      this.setupColumns();
    }
    ngOnInit() {
      this.loadUsers();
    }
    setupColumns() {
      this.tableConfig.columns = [{
        key: 'name',
        label: 'Name',
        sortable: true
      }, {
        key: 'email',
        label: 'Email',
        sortable: true
      }, {
        key: 'role',
        label: 'Role',
        sortable: true
      }, {
        key: 'created_date',
        label: 'Created',
        sortable: true
      }, {
        key: 'status',
        label: 'Status',
        sortable: true,
        render: row => row.status === 'active' ? '🟢 Active' : '⚫ Inactive'
      }];
    }
    loadUsers() {
      // Mock data for now
      this.tableConfig.data = [{
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Customer',
        created_date: '2024-01-15',
        status: 'active'
      }, {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Broker',
        created_date: '2024-02-20',
        status: 'active'
      }, {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'Surveyor',
        created_date: '2024-03-10',
        status: 'inactive'
      }];
      this.tableConfig.loading = false;
    }
    onRowClick(user) {
      this.router.navigate(['/dashboard/admin/users', user.id]);
    }
    onExport() {
      console.log('Exporting users...');
    }
    static {
      this.ɵfac = function AdminUsersComponent_Factory(t) {
        return new (t || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AdminUsersComponent,
        selectors: [["app-admin-users"]],
        decls: 14,
        vars: 1,
        consts: [[1, "space-y-6"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "text-gray-600", "dark:text-gray-400", "mt-1"], ["variant", "primary"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "mr-2"], ["d", "M5 12h14"], ["d", "M12 5v14"], [3, "rowClick", "exportData", "config"]],
        template: function AdminUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dashboard-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "User Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Manage system users and permissions");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "path", 6)(11, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Add User ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "app-data-table", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowClick", function AdminUsersComponent_Template_app_data_table_rowClick_13_listener($event) {
              return ctx.onRowClick($event);
            })("exportData", function AdminUsersComponent_Template_app_data_table_exportData_13_listener() {
              return ctx.onExport();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.tableConfig);
          }
        },
        dependencies: [_shared_components_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_0__.DashboardLayoutComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_2__.DataTableComponent]
      });
    }
  }
  return AdminUsersComponent;
})();

/***/ })

}]);