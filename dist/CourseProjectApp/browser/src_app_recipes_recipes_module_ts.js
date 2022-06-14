"use strict";
(self["webpackChunkCourseProjectApp"] = self["webpackChunkCourseProjectApp"] || []).push([["src_app_recipes_recipes_module_ts"],{

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);





class AuthGuard {
    constructor(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        return this.store.select('auth').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(authState => {
            return authState.user;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9603:
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailComponent": () => (/* binding */ RecipeDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../recipes/store/recipe.actions */ 2876);
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shopping-list/store/shopping-list.actions */ 3584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/dropdown.directive */ 1300);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);








function RecipeDetailComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ingredient_r1.name, " - ", ingredient_r1.amount, " ");
} }
class RecipeDetailComponent {
    constructor(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.route.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(params => {
            return +params['id'];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(id => {
            this.id = id;
            return this.store.select('recipes');
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(recipesState => {
            return recipesState.recipes.find((recipe, index) => {
                return index === this.id;
            });
        }))
            .subscribe(recipe => {
            this.recipe = recipe;
        });
    }
    onAddToShoppingList() {
        // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
        this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__.AddIngredients(this.recipe.ingredients));
    }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    onDeleteRecipe() {
        // this.recipeService.deleteRecipe(this.id);
        this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.DeleteRecipe(this.id));
        this.router.navigate(['/recipes']);
    }
}
RecipeDetailComponent.ɵfac = function RecipeDetailComponent_Factory(t) { return new (t || RecipeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
RecipeDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RecipeDetailComponent, selectors: [["app-recipe-detail"]], decls: 30, vars: 5, consts: [[1, "row"], [1, "col-xs-12"], [1, "img-responsive", 2, "max-height", "300px", 3, "src", "alt"], ["appDropdown", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], [2, "cursor", "pointer", 3, "click"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function RecipeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 0)(8, "div", 1)(9, "div", 3)(10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Manage Recipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 6)(14, "li")(15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_15_listener() { return ctx.onAddToShoppingList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "To Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li")(18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_18_listener() { return ctx.onEditRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Edit Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li")(21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_21_listener() { return ctx.onDeleteRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Delete Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 0)(24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 0)(27, "div", 1)(28, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RecipeDetailComponent_li_29_Template, 2, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.recipe.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
    } }, directives: [_shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1126:
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeEditComponent": () => (/* binding */ RecipeEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/recipe.actions */ 2876);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function RecipeEditComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20)(6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeEditComponent_div_33_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onDeleteIngredient(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r3);
} }
class RecipeEditComponent {
    constructor(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.editMode = false;
    }
    get ingredientsControls() {
        return this.recipeForm.get('ingredients').controls;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }
    onDeleteIngredient(index) {
        this.recipeForm.get('ingredients').removeAt(index);
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    onSubmit() {
        if (this.editMode) {
            // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.UpdateRecipe({ index: this.id, newRecipe: this.recipeForm.value }));
        }
        else {
            // this.recipeService.addRecipe(this.recipeForm.value);
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.AddRecipe(this.recipeForm.value));
        }
        this.onCancel();
    }
    onAddIngredient() {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    }
    ngOnDestroy() {
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
    initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([]);
        if (this.editMode) {
            // const recipe = this.recipeService.getRecipe(this.id);
            this.storeSub = this.store.select('recipes').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(recipeState => {
                return recipeState.recipes.find((recipe, index) => {
                    return index === this.id;
                });
            }))
                .subscribe(recipe => {
                recipeName = recipe.name;
                recipeImagePath = recipe.imagePath;
                recipeDescription = recipe.description;
                if (recipe['ingredients']) {
                    for (let ingredient of recipe.ingredients) {
                        recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
                            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
                            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(ingredient.amount, [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        }));
                    }
                }
            });
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            'imagePath': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            'ingredients': recipeIngredients
        });
    }
}
RecipeEditComponent.ɵfac = function RecipeEditComponent_Factory(t) { return new (t || RecipeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
RecipeEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeEditComponent, selectors: [["app-recipe-edit"]], decls: 39, vars: 4, consts: [[1, "row"], [1, "col-xs-12"], [3, "formGroup", "ngSubmit"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "imagePath"], ["type", "text", "id", "imagePath", "formControlName", "imagePath", 1, "form-control"], ["imagePath", ""], [1, "img-responsive", 3, "src"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "rows", "6", 1, "form-control"], ["formArrayName", "ingredients", 1, "col-xs-12"], ["class", "row", "style", "margin-top: 10px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "row", 2, "margin-top", "10px", 3, "formGroupName"], [1, "col-xs-8"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col-xs-2"], ["type", "number", "formControlName", "amount", 1, "form-control"]], template: function RecipeEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RecipeEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_7_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 5)(12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0)(16, "div", 1)(17, "div", 5)(18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 0)(23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 0)(26, "div", 1)(27, "div", 5)(28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 0)(32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RecipeEditComponent_div_33_Template, 8, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 0)(36, "div", 1)(37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_37_listener() { return ctx.onAddIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Add Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.recipeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.recipeForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _r0.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ingredientsControls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor], styles: [".btn[_ngcontent-%COMP%] {\n  margin: 0 10px 15px 0;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08), 0 0 8px rgba(233, 102, 102, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7QUFDSiIsImZpbGUiOiJyZWNpcGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIG1hcmdpbjogMCAxMHB4IDE1cHggMCA7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCwgdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYigwIDAgMCAvIDglKSwgMCAwIDhweCByZ2JhKDIzMywgMTAyLCAxMDIsIDAuNik7XG5cbn0iXX0= */"] });


/***/ }),

/***/ 8214:
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeItemComponent": () => (/* binding */ RecipeItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function (a0) { return [a0]; };
class RecipeItemComponent {
    ngOnInit() {
    }
}
RecipeItemComponent.ɵfac = function RecipeItemComponent_Factory(t) { return new (t || RecipeItemComponent)(); };
RecipeItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeItemComponent, selectors: [["app-recipe-item"]], inputs: { recipe: "recipe", index: "index" }, decls: 8, vars: 7, consts: [["data-aos", "fade-right", "data-aos-delay", "10", "data-aos-easing", "new-easing", "routerLinkActive", "active", 1, "list-group-item", "clearfix", 2, "cursor", "pointer", 3, "routerLink"], ["data-aos", "fade-right", "data-aos-delay", "700", 1, "pull-left"], [1, "list-group-item-heading"], [1, "list-group-item-text"], ["data-aos", "fade-left", "data-aos-delay", "300", 1, "pull-right"], [1, "img-responsive", 2, "max-height", "50px", 3, "src", "alt"]], template: function RecipeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.index));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".list-group-item[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJyZWNpcGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 9111:
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeListComponent": () => (/* binding */ RecipeListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ 8214);






function RecipeListComponent_app_recipe_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-recipe-item", 4);
} if (rf & 2) {
    const recipeEl_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("recipe", recipeEl_r1)("index", i_r2);
} }
class RecipeListComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.subscription = this.store.select('recipes')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(recipesState => recipesState.recipes))
            .subscribe((recipes) => {
            this.recipes = recipes;
        });
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) { return new (t || RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
RecipeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeListComponent, selectors: [["app-recipe-list"]], decls: 8, vars: 1, consts: [[1, "row"], [1, "col-xs-12"], [1, "btn", "btn-success", 3, "click"], [3, "recipe", "index", 4, "ngFor", "ngForOf"], [3, "recipe", "index"]], template: function RecipeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipeListComponent_Template_button_click_2_listener() { return ctx.onNewRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0)(6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RecipeListComponent_app_recipe_item_7_Template, 1, 2, "app-recipe-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_0__.RecipeItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1841:
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeStartComponent": () => (/* binding */ RecipeStartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecipeStartComponent.ɵfac = function RecipeStartComponent_Factory(t) { return new (t || RecipeStartComponent)(); };
RecipeStartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeStartComponent, selectors: [["app-recipe-start"]], decls: 2, vars: 0, template: function RecipeStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a Recipe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5496:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeService": () => (/* binding */ RecipeService)
/* harmony export */ });
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ 228);
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.actions */ 3584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 5585);




class RecipeService {
    constructor(store) {
        this.store = store;
        this.recipesChanged = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // private recipes: Recipe[] = [
        //   new Recipe(
        //     'Tasty Schnitzel',
        //     'A super-tasty Schnitzel - just awesome!',
        //     '../../../assets/pexels-photo-schnitzel.jpeg',
        //     [
        //       new Ingredient('Boneless pork chops', 2),
        //       new Ingredient('All-purpose flour', 1/25),
        //       new Ingredient('Garlic salt', 1),
        //       new Ingredient('Paprika', 1/2),
        //       new Ingredient('Black pepper', 1/2),
        //       new Ingredient('Large eggs', 3),
        //       new Ingredient('Panko bread crumbs', 2),
        //       new Ingredient('Olive oil', 1),
        //       new Ingredient('Lemon wedges', 3),
        //       new Ingredient('French Fries', 20),
        //       new Ingredient('Ketchup', 1),
        //       new Ingredient('Marole', 1)
        //     ]
        //   ),
        //   new Recipe(
        //     'Baked Salmon',
        //     'Baked Salmon with Garlic is juicy and flaky, yum!',
        //     '../../../assets/Baked-Salmon.jpg',
        //     [
        //       new Ingredient('1/2 lb salmon filet', 1),
        //       new Ingredient('Fresh parsley, chopped', 2),
        //       new Ingredient('Light olive oil', 2),
        //       new Ingredient('Fresh lemon juice', 2),
        //       new Ingredient('Garlic cloves, pressed', 3),
        //       new Ingredient('Dijon mustard', 1/2),
        //       new Ingredient('Sea salt', 1/2),
        //       new Ingredient('Black pepper', 1/8),
        //       new Ingredient('Lemon, sliced into 4 rings', 1/2),
        //     ]
        //   ),
        //   new Recipe(
        //     'Big Fat Burger',
        //     'What else you need to say?',
        //     '../../../assets/pexels-photo-burger.jpeg',
        //     [
        //       new Ingredient('Ground beef', 2),
        //       new Ingredient('Black Pepper', 1),
        //       new Ingredient('Cheddar cheese', 4),
        //       new Ingredient('Mayonnaise', 1/25),
        //       new Ingredient('Yellow mustard', 1),
        //       new Ingredient('Burger buns', 4),
        //       new Ingredient('Iceberg lettuce', 2),
        //       new Ingredient('Large tomato', 1),
        //       new Ingredient('Red onion', 1/2),
        //       new Ingredient('Dill Pickles', 2),
        //     ]
        //   ),
        //   new Recipe(
        //     'Fish Taco',
        //     'Don’t skip the best taco sauce – a garlic lime crema',
        //     '../../../assets/Fish-Tacos.jpg',
        //     [
        //       new Ingredient('Small white corn tortillas', 24),
        //       new Ingredient('Tilapia', 1),
        //       new Ingredient('Ground cumin', 1/2),
        //       new Ingredient('Cayenne pepper', 1/2),
        //       new Ingredient('Salt', 1),
        //       new Ingredient('Black pepper', 1/4),
        //       new Ingredient('Olive oil', 1),
        //       new Ingredient('Unsalted butter', 1),
        //     ]
        //   ),
        //   new Recipe(
        //     'Easy Crepe',
        //     'This blender crepe recipe couldn’t be easier',
        //     '../../../assets/Crepe.jpg',
        //     [
        //       new Ingredient('Lukewarm water', 1/2),
        //       new Ingredient('Warm milk', 1),
        //       new Ingredient('Large eggs', 4),
        //       new Ingredient('Unsalted butter, melted', 4),
        //       new Ingredient('All-purpose flour', 1),
        //       new Ingredient('Granulated sugar', 2),
        //       new Ingredient('Sea salt', 1),
        //     ]
        //   ),
        // ];
        this.recipes = [];
    }
    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    ;
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients) {
        this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_0__.AddIngredients(ingredients));
    }
    /**
     * @param  {Recipe} recipe
     *
     * * This is an important text
     * ! Alert comment
     * ? idk, some question
     * TODO: remember this
     *
     *
     * this is a link to other function, just hover over this funcName {@link getRecipe}
     */
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
RecipeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac });


/***/ }),

/***/ 6364:
/*!*****************************************************!*\
  !*** ./src/app/recipes/recipes-resolver.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesResolverService": () => (/* binding */ RecipesResolverService)
/* harmony export */ });
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipes/store/recipe.actions */ 2876);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 5585);







class RecipesResolverService {
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
    }
    resolve(route, state) {
        return this.store.select('recipes').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(recipesState => {
            return recipesState.recipes;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(recipes => {
            if (recipes.length === 0) {
                this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.FetchRecipes());
                return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_0__.SET_RECIPES), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(recipes);
            }
        }));
    }
}
RecipesResolverService.ɵfac = function RecipesResolverService_Factory(t) { return new (t || RecipesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions)); };
RecipesResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: RecipesResolverService, factory: RecipesResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8969:
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesRoutingModule": () => (/* binding */ RecipesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ 9603);
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ 1126);
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ 1841);
/* harmony import */ var _recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes-resolver.service */ 6364);
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes.component */ 5735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: '',
        component: _recipes_component__WEBPACK_IMPORTED_MODULE_5__.RecipesComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            { path: '', component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_3__.RecipeStartComponent },
            { path: 'new', component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent },
            { path: ':id', component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailComponent, resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__.RecipesResolverService] },
            { path: ':id/edit', component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent, resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_4__.RecipesResolverService] }
        ]
    },
];
class RecipesRoutingModule {
}
RecipesRoutingModule.ɵfac = function RecipesRoutingModule_Factory(t) { return new (t || RecipesRoutingModule)(); };
RecipesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RecipesRoutingModule });
RecipesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecipesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5735:
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesComponent": () => (/* binding */ RecipesComponent)
/* harmony export */ });
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.service */ 5496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ 9111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class RecipesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) { return new (t || RecipesComponent)(); };
RecipesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipesComponent, selectors: [["app-recipes"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService])], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-md-5"], [1, "col-md-7"]], template: function RecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-recipe-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, directives: [_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__.RecipeListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7776:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesModule": () => (/* binding */ RecipesModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes-routing.module */ 8969);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ 9603);
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ 1126);
/* harmony import */ var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-list/recipe-item/recipe-item.component */ 8214);
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ 9111);
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ 1841);
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes.component */ 5735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











class RecipesModule {
}
RecipesModule.ɵfac = function RecipesModule_Factory(t) { return new (t || RecipesModule)(); };
RecipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RecipesModule });
RecipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _recipes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecipesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RecipesModule, { declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__.RecipesComponent,
        _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__.RecipeListComponent,
        _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__.RecipeDetailComponent,
        _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__.RecipeItemComponent,
        _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__.RecipeStartComponent,
        _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__.RecipeEditComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _recipes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecipesRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__.RecipesComponent,
        _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__.RecipeListComponent,
        _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__.RecipeDetailComponent,
        _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__.RecipeItemComponent,
        _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__.RecipeStartComponent,
        _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__.RecipeEditComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_recipes_recipes_module_ts.js.map