"use strict";
exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 60980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/placeholder/placeholder.directive */ 20402);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/alert/alert.component */ 38549);
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/auth.actions */ 28379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 35585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ 12152);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);









function AuthComponent_ng_template_0_Template(rf, ctx) { }
function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8)(3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8)(7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div")(11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthComponent_form_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.isLoginMode ? "Login" : "Sign Up", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Switch to ", ctx_r2.isLoginMode ? "Sign Up" : "Login", " ");
} }
class AuthComponent {
    constructor(componentFactoryResolver, store) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.store = store;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        if (this.isLoginMode) {
            // var authObs = this.authService.login(email, password);
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__.LoginStart({ email: email, password: password }));
        }
        else {
            // var authObs = this.authService.signup(email, password);
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__.SignupStart({ email: email, password: password }));
        }
        // authObs.subscribe(
        //     {
        //       next: (resData) => {
        //         console.log(resData);
        //         this.isLoading = false;
        //         this.router.navigate(['/recipes']);
        //       },
        //       error: (errorMessage) => {
        //         console.log(errorMessage);
        //         this.error = errorMessage;
        //         this.showErrorAlert(errorMessage);
        //         this.isLoading = false;
        //       },
        //     }
        //   );
        form.reset();
    }
    onHandleError() {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_2__.ClearError());
    }
    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
    showErrorAlert(message) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            this.onHandleError();
            hostViewContainerRef.clear();
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], viewQuery: function AuthComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_0__.PlaceholderDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.alertHost = _t.first);
    } }, decls: 5, vars: 2, consts: [["appPlaceholder", ""], [1, "row"], [1, "col-xs-12", "col-md-6", "col-md-offset-3"], ["style", "text-align: center", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [2, "text-align", "center"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AuthComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AuthComponent_form_4_Template, 15, 3, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_0__.PlaceholderDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 60980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent }
            ]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

};
;
//# sourceMappingURL=674.js.map