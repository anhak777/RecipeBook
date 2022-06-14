"use strict";
(self["webpackChunkCourseProjectApp"] = self["webpackChunkCourseProjectApp"] || []).push([["src_app_shopping-list_shopping-list_module_ts"],{

/***/ 51:
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingEditComponent": () => (/* binding */ ShoppingEditComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ingredient.model */ 9985);
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/shopping-list.actions */ 3584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






const _c0 = ["f"];
function ShoppingEditComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingEditComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ShoppingEditComponent {
    constructor(store) {
        this.store = store;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscribtion = this.store.select('shoppingList').subscribe(stateData => {
            if (stateData.editedIngredientIndex > -1) {
                this.editMode = true;
                this.editedItem = stateData.editedIngredient;
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount,
                });
            }
            else {
                this.editMode = false;
            }
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newIngredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__.Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateIngredient(newIngredient));
        }
        else {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.AddIngredient(newIngredient));
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.StopEdit());
    }
    onDelete() {
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteIngredient());
        this.onClear();
    }
    ngOnDestroy() {
        this.subscribtion.unsubscribe();
        this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.StopEdit());
    }
}
ShoppingEditComponent.ɵfac = function ShoppingEditComponent_Factory(t) { return new (t || ShoppingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
ShoppingEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShoppingEditComponent, selectors: [["app-shopping-edit"]], viewQuery: function ShoppingEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slForm = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "row"], [1, "col-xs-12"], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-sm-5", "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], [1, "col-sm-2", "form-group"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount", "ngModel", "", "required", "", "pattern", "^[1-9]+[0-9]*$", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ShoppingEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ShoppingEditComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 0)(14, "div", 1)(15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ShoppingEditComponent_button_17_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingEditComponent_Template_button_click_18_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.editMode ? "Update" : "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2136:
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListComponent": () => (/* binding */ ShoppingListComponent)
/* harmony export */ });
/* harmony import */ var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/shopping-list.actions */ 3584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logging.service */ 9102);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ 51);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function ShoppingListComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShoppingListComponent_a_5_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r3.onEditItem(i_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ingredient_r1.name, " (", ingredient_r1.amount, ") ");
  }
}

class ShoppingListComponent {
  constructor(loggingService, store) {
    this.loggingService = loggingService;
    this.store = store;
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    this.store.select('shoppingList').subscribe();
    this.loggingService.printlog('Hello from ShoppingListComponent ngOnInit');
  }

  onEditItem(index) {
    this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__.StartEdit(index));
  }

  ngOnDestroy() {}

}

ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) {
  return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_logging_service__WEBPACK_IMPORTED_MODULE_1__.LoggingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};

ShoppingListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ShoppingListComponent,
  selectors: [["app-shopping-list"]],
  decls: 7,
  vars: 3,
  consts: [[1, "row"], [1, "col-xs-10"], [1, "list-group"], ["class", "list-group-item", "style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 2, "cursor", "pointer", 3, "click"]],
  template: function ShoppingListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-shopping-edit")(3, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ShoppingListComponent_a_5_Template, 2, 2, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx.ingredients).ingredients);
    }
  },
  directives: [_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingEditComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 6673:
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListModule": () => (/* binding */ ShoppingListModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ 51);
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.component */ 2136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class ShoppingListModule {
}
ShoppingListModule.ɵfac = function ShoppingListModule_Factory(t) { return new (t || ShoppingListModule)(); };
ShoppingListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShoppingListModule });
ShoppingListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                { path: '', component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingListComponent }
            ]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShoppingListModule, { declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingListComponent,
        _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_1__.ShoppingEditComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_shopping-list_shopping-list_module_ts.js.map