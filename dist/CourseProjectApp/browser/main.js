"use strict";
(self["webpackChunkCourseProjectApp"] = self["webpackChunkCourseProjectApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_recipes_recipes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recipes/recipes.module */ 7776)).then(m => m.RecipesModule)
    },
    {
        path: 'shopping-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shopping-list_shopping-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shopping-list/shopping-list.module */ 6673)).then(m => m.ShoppingListModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules, initialNavigation: 'enabledBlocking' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/store/auth.actions */ 8379);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logging.service */ 9102);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








class AppComponent {
    constructor(store, loggingService, platformId) {
        this.store = store;
        this.loggingService = loggingService;
        this.platformId = platformId;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AutoLogin());
        }
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.AutoLogin());
        this.loggingService.printlog('Hello from AppComponent ngOnInit');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 1538);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ 5811);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/app.reducer */ 5754);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/store/auth.effects */ 2416);
/* harmony import */ var _recipes_store_recipe_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/store/recipe.effects */ 8139);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/router-store */ 25);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_5__.appReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_6__.AuthEffects, _recipes_store_recipe_effects__WEBPACK_IMPORTED_MODULE_7__.RecipeEffects]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule.instrument({ logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__.StoreRouterConnectingModule.forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__.StoreDevtoolsModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__.StoreRouterConnectingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule] }); })();


/***/ }),

/***/ 2458:
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);




class AuthInterceptorService {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select('auth').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(authState => {
            return authState.user;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/auth.actions */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);



// export interface AuthResponseData {
//   kind?: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
//   registered?: boolean;
// }
class AuthService {
    constructor(store) {
        this.store = store;
    }
    setLogoutTimer(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.Logout());
        }, expirationDuration);
    }
    clearLogoutTimer() {
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8379:
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_START": () => (/* binding */ LOGIN_START),
/* harmony export */   "SIGNUP_START": () => (/* binding */ SIGNUP_START),
/* harmony export */   "AUTHENTICATE_SUCCESS": () => (/* binding */ AUTHENTICATE_SUCCESS),
/* harmony export */   "AUTHENTICATE_FAIL": () => (/* binding */ AUTHENTICATE_FAIL),
/* harmony export */   "CLEAR_ERROR": () => (/* binding */ CLEAR_ERROR),
/* harmony export */   "AUTO_LOGIN": () => (/* binding */ AUTO_LOGIN),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT),
/* harmony export */   "LoginStart": () => (/* binding */ LoginStart),
/* harmony export */   "SignupStart": () => (/* binding */ SignupStart),
/* harmony export */   "AuthenticateSuccess": () => (/* binding */ AuthenticateSuccess),
/* harmony export */   "AuthenticateFail": () => (/* binding */ AuthenticateFail),
/* harmony export */   "ClearError": () => (/* binding */ ClearError),
/* harmony export */   "AutoLogin": () => (/* binding */ AutoLogin),
/* harmony export */   "Logout": () => (/* binding */ Logout)
/* harmony export */ });
const LOGIN_START = '[Auth] Login Start';
const SIGNUP_START = '[Auth] Signup Start';
const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
const CLEAR_ERROR = '[Auth] Clear Error';
const AUTO_LOGIN = '[Auth] Auto Login';
const LOGOUT = '[Auth] Logout';
class LoginStart {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_START;
    }
}
class SignupStart {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGNUP_START;
    }
}
class AuthenticateSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_SUCCESS;
    }
}
class AuthenticateFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_FAIL;
    }
}
class ClearError {
    constructor() {
        this.type = CLEAR_ERROR;
    }
}
class AutoLogin {
    constructor() {
        this.type = AUTO_LOGIN;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}


/***/ }),

/***/ 2416:
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 8379);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.model */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 384);












const handleAuthentication = (expiresIn, email, userId, token) => {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new _user_model__WEBPACK_IMPORTED_MODULE_2__.User(email, userId, token, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthenticateSuccess({
        email: email,
        userId: userId,
        token: token,
        expirationDate: expirationDate,
        redirect: true
    });
};
const handleError = (errorRes) => {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthenticateFail(errorMessage));
    }
    switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMessage = 'This email already exists.';
            break;
        case 'EMAIL_NOT_FOUND':
            errorMessage = "This email doesn't exists.";
            break;
        case 'INVALID_PASSWORD':
            errorMessage = "This password isn't correct.";
            break;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthenticateFail(errorMessage));
};
class AuthEffects {
    constructor(actions$, http, router, auth) {
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.authSignup = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.SIGNUP_START), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((signupAction) => {
            return this.http
                .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseAPIKey, {
                email: signupAction.payload.email,
                password: signupAction.payload.password,
                returnSecureToken: true,
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((resData) => {
                this.auth.setLogoutTimer(+resData.expiresIn * 1000);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((resData) => {
                return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)((errorRes) => {
                return handleError(errorRes);
            }));
        }));
        this.authLogin = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LOGIN_START), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((authData) => {
            return this.http
                .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseAPIKey, {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true,
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((resData) => {
                this.auth.setLogoutTimer(+resData.expiresIn * 1000);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((resData) => {
                return handleAuthentication(+resData.expiresIn, resData.email, resData.localId, resData.idToken);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)((errorRes) => {
                return handleError(errorRes);
            }));
        }));
        this.authRedirect = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.AUTHENTICATE_SUCCESS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((authSuccessAction) => {
            if (authSuccessAction.payload.redirect) {
                this.router.navigate(['/']);
            }
        }));
        // authSuccess = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofType(AuthActions.LOGIN),
        //     tap(() => {
        //       this.router.navigate(['/']);
        //     })
        //   );
        // })
        this.autoLogin = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.AUTO_LOGIN), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
            const userData = JSON.parse(localStorage.getItem('userData'));
            if (!userData) {
                return { type: 'DUMMY' };
            }
            const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_2__.User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
            if (loadedUser.token) {
                const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                    new Date().getTime();
                this.auth.setLogoutTimer(expirationDuration);
                return new _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AuthenticateSuccess({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    expirationDate: new Date(userData._tokenExpirationDate),
                    redirect: false
                });
                // const expirationDuration =
                //   new Date(userData._tokenExpirationDate).getTime() -
                //   new Date().getTime();
                //   this.autoLogout(expirationDuration);
            }
            return { type: 'DUMMY' };
        }));
        this.authLogout = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LOGOUT), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
            this.auth.clearLogoutTimer();
            localStorage.removeItem('userData');
            this.router.navigate(['/auth']);
        }));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)()
], AuthEffects.prototype, "authSignup", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)()
], AuthEffects.prototype, "authLogin", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)({ dispatch: false })
], AuthEffects.prototype, "authRedirect", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)()
], AuthEffects.prototype, "autoLogin", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Effect)({ dispatch: false })
], AuthEffects.prototype, "authLogout", void 0);


/***/ }),

/***/ 8030:
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user.model */ 3935);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 8379);


const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    authError: null,
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AUTHENTICATE_SUCCESS:
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return Object.assign(Object.assign({}, state), { user: user, isAuthenticated: true, authError: null, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__.LOGOUT:
            return Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false, authError: null, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__.LOGIN_START:
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__.SIGNUP_START:
            return Object.assign(Object.assign({}, state), { authError: null, loading: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__.AUTHENTICATE_FAIL:
            return Object.assign(Object.assign({}, state), { authError: action.payload, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__.CLEAR_ERROR:
            return Object.assign(Object.assign({}, state), { authError: null });
        default:
            return state;
    }
}


/***/ }),

/***/ 3935:
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ 1538:
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ 2458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        // ShoppingListService,  // no needed anymore, after adding shopping-list redusers (ngrx)
        // RecipeService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
            useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptorService,
            multi: true
        }
    ] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/store/auth.actions */ 8379);
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes/store/recipe.actions */ 2876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dropdown.directive */ 1300);








function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Authenticate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 18)(5, "li")(6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.onSaveData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Save Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li")(9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.onFetchData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fetch Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSub = this.store.select('auth').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(authState => authState.user)).subscribe(user => {
            this.isAuthenticated = !!user; // this is the same - !user ? false : true
            console.log(!user);
            console.log(!!user);
        });
    }
    onSaveData() {
        // this.DataStorageService.storeRecipes();
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_1__.StoreRecipes());
    }
    onFetchData() {
        // this.DataStorageService.fetchRecipes().subscribe();
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_1__.FetchRecipes());
    }
    onLogOut() {
        // this.authService.logout();
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.Logout());
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 4, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active"], ["routerLink", "/shopping-list"], [1, "nav", "navbar-nav", "navbar-right"], [4, "ngIf"], ["class", "dropdown", "appDropdown", "", 4, "ngIf"], ["routerLink", "/recipes"], ["routerLink", "/auth"], [2, "cursor", "pointer", 3, "click"], ["appDropdown", "", 1, "dropdown"], ["role", "button", 1, "dropdown-toggle", 2, "cursor", "pointer"], [1, "caret"], [1, "dropdown-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Recipe Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 11, 0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9102:
/*!************************************!*\
  !*** ./src/app/logging.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingService": () => (/* binding */ LoggingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoggingService {
    printlog(message) {
        console.log(message);
        console.log(this.lastlog);
        this.lastlog = message;
    }
}
LoggingService.ɵfac = function LoggingService_Factory(t) { return new (t || LoggingService)(); };
LoggingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggingService, factory: LoggingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2876:
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_RECIPES": () => (/* binding */ SET_RECIPES),
/* harmony export */   "FETCH_RECIPES": () => (/* binding */ FETCH_RECIPES),
/* harmony export */   "ADD_RECIPE": () => (/* binding */ ADD_RECIPE),
/* harmony export */   "UPDATE_RECIPE": () => (/* binding */ UPDATE_RECIPE),
/* harmony export */   "DELETE_RECIPE": () => (/* binding */ DELETE_RECIPE),
/* harmony export */   "STORE_RECIPES": () => (/* binding */ STORE_RECIPES),
/* harmony export */   "SetRecipes": () => (/* binding */ SetRecipes),
/* harmony export */   "FetchRecipes": () => (/* binding */ FetchRecipes),
/* harmony export */   "AddRecipe": () => (/* binding */ AddRecipe),
/* harmony export */   "UpdateRecipe": () => (/* binding */ UpdateRecipe),
/* harmony export */   "DeleteRecipe": () => (/* binding */ DeleteRecipe),
/* harmony export */   "StoreRecipes": () => (/* binding */ StoreRecipes)
/* harmony export */ });
const SET_RECIPES = '[Recipes] Set Recipes';
const FETCH_RECIPES = '[Recipes] Fetch Recipes';
const ADD_RECIPE = '[Recipes] Add Recipe';
const UPDATE_RECIPE = '[Recipes] Update Recipe';
const DELETE_RECIPE = '[Recipes] Delete Recipe';
const STORE_RECIPES = '[Recipes] Store Recipes';
class SetRecipes {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RECIPES;
    }
}
class FetchRecipes {
    constructor() {
        this.type = FETCH_RECIPES;
    }
}
class AddRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_RECIPE;
    }
}
class UpdateRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_RECIPE;
    }
}
class DeleteRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_RECIPE;
    }
}
class StoreRecipes {
    constructor() {
        this.type = STORE_RECIPES;
    }
}


/***/ }),

/***/ 8139:
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.effects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeEffects": () => (/* binding */ RecipeEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 538);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.actions */ 2876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5585);








class RecipeEffects {
    constructor(actions$, http, store) {
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.fetchRecipes = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.FETCH_RECIPES), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => {
            return this.http.get('https://recipe-book-ce84b-default-rtdb.firebaseio.com/recipes.json');
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(recipes => {
            return new _recipe_actions__WEBPACK_IMPORTED_MODULE_0__.SetRecipes(recipes);
        }));
        this.storeRecipes = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.STORE_RECIPES), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(this.store.select('recipes')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(([actionData, recipesState]) => {
            return this.http.put('https://recipe-book-ce84b-default-rtdb.firebaseio.com/recipes.json', recipesState.recipes);
        }));
    }
}
RecipeEffects.ɵfac = function RecipeEffects_Factory(t) { return new (t || RecipeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
RecipeEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RecipeEffects, factory: RecipeEffects.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Effect)()
], RecipeEffects.prototype, "fetchRecipes", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Effect)({ dispatch: false })
], RecipeEffects.prototype, "storeRecipes", void 0);


/***/ }),

/***/ 9606:
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.reducer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recipeReducer": () => (/* binding */ recipeReducer)
/* harmony export */ });
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.actions */ 2876);

const initialState = {
    recipes: []
};
function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__.SET_RECIPES:
            return Object.assign(Object.assign({}, state), { recipes: [...action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
            return Object.assign(Object.assign({}, state), { recipes: [...state.recipes, action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_RECIPE:
            const updatedRecipes = Object.assign(Object.assign({}, state.recipes[action.payload.index]), action.payload.newRecipe);
            const updatedRecipesList = [...state.recipes];
            updatedRecipesList[action.payload.index] = updatedRecipes;
            return Object.assign(Object.assign({}, state), { recipes: updatedRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_0__.DELETE_RECIPE:
            return Object.assign(Object.assign({}, state), { recipes: state.recipes.filter((recipe, index) => {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ 8549:
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onClose() {
        this.close.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { message: "message" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "backdrop", 3, "click"], [1, "alert-box"], [1, "alert-box-actions"], [1, "btn", "btn-primary", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 50;\n}\n\n.alert-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30vh;\n  left: 20vw;\n  width: 60vw;\n  padding: 16px;\n  background: white;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n}\n\n.alert-box-actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNzUpO1xuICB6LWluZGV4OiA1MDtcbn1cblxuLmFsZXJ0LWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzMHZoO1xuICBsZWZ0OiAyMHZ3O1xuICB3aWR0aDogNjB2dztcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4yNik7XG59XG5cbi5hbGVydC1ib3gtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"] });


/***/ }),

/***/ 1300:
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownDirective": () => (/* binding */ DropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler() { return ctx.toggleOpen(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
    } } });


/***/ }),

/***/ 9985:
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ingredient": () => (/* binding */ Ingredient)
/* harmony export */ });
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ 2152:
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 2, vars: 0, consts: [[1, "lds-circle"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: translateZ(1px);\n}\n\n.lds-circle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  background: #00ffbf;\n  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n@keyframes lds-circle {\n  0%, 100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdFQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLHVEQUFBO0VBR0Y7RUFEQTtJQUNFLHdCQUFBO0VBR0Y7RUFEQTtJQUNFLDJCQUFBO0lBQ0EsdURBQUE7RUFHRjtFQURBO0lBQ0UsMkJBQUE7RUFHRjtBQUNGIiwiZmlsZSI6ImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtY2lyY2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMXB4KTtcbn1cbi5sZHMtY2lyY2xlID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjU1LCAxOTEpO1xuICBhbmltYXRpb246IGxkcy1jaXJjbGUgMi40cyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBsZHMtY2lyY2xlIHtcbiAgMCUsIDEwMCUge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUsIDAsIDEsIDAuNSk7XG4gIH1cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODAwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjAwZGVnKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 402:
/*!*************************************************************!*\
  !*** ./src/app/shared/placeholder/placeholder.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceholderDirective": () => (/* binding */ PlaceholderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PlaceholderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
PlaceholderDirective.ɵfac = function PlaceholderDirective_Factory(t) { return new (t || PlaceholderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
PlaceholderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlaceholderDirective, selectors: [["", "appPlaceholder", ""]] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../logging.service */ 9102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ 1300);
/* harmony import */ var _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder/placeholder.directive */ 402);
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ 2152);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert.component */ 8549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_logging_service__WEBPACK_IMPORTED_MODULE_0__.LoggingService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent,
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent,
        _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__.PlaceholderDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule], exports: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent,
        _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent,
        _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_2__.PlaceholderDirective,
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownDirective,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule] }); })();


/***/ }),

/***/ 3584:
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.actions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_INGREDIENT": () => (/* binding */ ADD_INGREDIENT),
/* harmony export */   "ADD_INGREDIENTS": () => (/* binding */ ADD_INGREDIENTS),
/* harmony export */   "UPDATE_INGREDIENT": () => (/* binding */ UPDATE_INGREDIENT),
/* harmony export */   "DELETE_INGREDIENT": () => (/* binding */ DELETE_INGREDIENT),
/* harmony export */   "START_EDIT": () => (/* binding */ START_EDIT),
/* harmony export */   "STOP_EDIT": () => (/* binding */ STOP_EDIT),
/* harmony export */   "AddIngredient": () => (/* binding */ AddIngredient),
/* harmony export */   "AddIngredients": () => (/* binding */ AddIngredients),
/* harmony export */   "UpdateIngredient": () => (/* binding */ UpdateIngredient),
/* harmony export */   "DeleteIngredient": () => (/* binding */ DeleteIngredient),
/* harmony export */   "StartEdit": () => (/* binding */ StartEdit),
/* harmony export */   "StopEdit": () => (/* binding */ StopEdit)
/* harmony export */ });
const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
const START_EDIT = '[Shopping List] Start Edit';
const STOP_EDIT = '[Shopping List] Stop Edit';
class AddIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
}
class AddIngredients {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
}
class UpdateIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
}
class DeleteIngredient {
    constructor() {
        this.type = DELETE_INGREDIENT;
    }
}
class StartEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
}
class StopEdit {
    constructor() {
        this.type = STOP_EDIT;
    }
}


/***/ }),

/***/ 5177:
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.reducer.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shoppingListReducer": () => (/* binding */ shoppingListReducer)
/* harmony export */ });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredient.model */ 9985);
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.actions */ 3584);


const initialState = {
    ingredients: [
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__.Ingredient('Apples', 5),
        new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__.Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function shoppingListReducer(state = initialState, action) {
    switch (action.type) {
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_INGREDIENT:
            return Object.assign(Object.assign({}, state), { ingredients: [...state.ingredients, action.payload] });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_INGREDIENTS:
            return Object.assign(Object.assign({}, state), { ingredients: [...state.ingredients, ...action.payload] });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = Object.assign(Object.assign({}, ingredient), action.payload);
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return Object.assign(Object.assign({}, state), { ingredients: updatedIngredients, editedIngredientIndex: -1, editedIngredient: null });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.DELETE_INGREDIENT:
            return Object.assign(Object.assign({}, state), { ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }), editedIngredientIndex: -1, editedIngredient: null });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.START_EDIT:
            return Object.assign(Object.assign({}, state), { editedIngredientIndex: action.payload, editedIngredient: Object.assign({}, state.ingredients[action.payload]) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.STOP_EDIT:
            return Object.assign(Object.assign({}, state), { editedIngredient: null, editedIngredientIndex: -1 });
        default:
            return state;
    }
}


/***/ }),

/***/ 5754:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": () => (/* binding */ appReducer)
/* harmony export */ });
/* harmony import */ var _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.reducer */ 5177);
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/store/auth.reducer */ 8030);
/* harmony import */ var _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes/store/recipe.reducer */ 9606);



const appReducer = {
    shoppingList: _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_0__.shoppingListReducer,
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authReducer,
    recipes: _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_2__.recipeReducer
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseAPIKey: 'AIzaSyDxkvLWruusRFjvrlQ_eEogVgRjNasVjKo'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map