(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular/localize/fesm2015/init.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/localize/fesm2015/init.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license Angular v10.0.4
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const __globalThis = typeof globalThis !== 'undefined' && globalThis;
const __window = typeof window !== 'undefined' && window;
const __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
const __global = typeof global !== 'undefined' && global;
// Always use __globalThis if available; this is the spec-defined global variable across all
// environments.
// Then fallback to __global first; in Node tests both __global and __window may be defined.
const _global = __globalThis || __global || __window || __self;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Tag a template literal string for localization.
 *
 * For example:
 *
 * ```ts
 * $localize `some string to localize`
 * ```
 *
 * **Providing meaning, description and id**
 *
 * You can optionally specify one or more of `meaning`, `description` and `id` for a localized
 * string by pre-pending it with a colon delimited block of the form:
 *
 * ```ts
 * $localize`:meaning|description@@id:source message text`;
 *
 * $localize`:meaning|:source message text`;
 * $localize`:description:source message text`;
 * $localize`:@@id:source message text`;
 * ```
 *
 * This format is the same as that used for `i18n` markers in Angular templates. See the
 * [Angular 18n guide](guide/i18n#template-translations).
 *
 * **Naming placeholders**
 *
 * If the template literal string contains expressions, then the expressions will be automatically
 * associated with placeholder names for you.
 *
 * For example:
 *
 * ```ts
 * $localize `Hi ${name}! There are ${items.length} items.`;
 * ```
 *
 * will generate a message-source of `Hi {$PH}! There are {$PH_1} items`.
 *
 * The recommended practice is to name the placeholder associated with each expression though.
 *
 * Do this by providing the placeholder name wrapped in `:` characters directly after the
 * expression. These placeholder names are stripped out of the rendered localized string.
 *
 * For example, to name the `items.length` expression placeholder `itemCount` you write:
 *
 * ```ts
 * $localize `There are ${items.length}:itemCount: items`;
 * ```
 *
 * **Escaping colon markers**
 *
 * If you need to use a `:` character directly at the start of a tagged string that has no
 * metadata block, or directly after a substitution expression that has no name you must escape
 * the `:` by preceding it with a backslash:
 *
 * For example:
 *
 * ```ts
 * // message has a metadata block so no need to escape colon
 * $localize `:some description::this message starts with a colon (:)`;
 * // no metadata block so the colon must be escaped
 * $localize `\:this message starts with a colon (:)`;
 * ```
 *
 * ```ts
 * // named substitution so no need to escape colon
 * $localize `${label}:label:: ${}`
 * // anonymous substitution so colon must be escaped
 * $localize `${label}\: ${}`
 * ```
 *
 * **Processing localized strings:**
 *
 * There are three scenarios:
 *
 * * **compile-time inlining**: the `$localize` tag is transformed at compile time by a
 * transpiler, removing the tag and replacing the template literal string with a translated
 * literal string from a collection of translations provided to the transpilation tool.
 *
 * * **run-time evaluation**: the `$localize` tag is a run-time function that replaces and
 * reorders the parts (static strings and expressions) of the template literal string with strings
 * from a collection of translations loaded at run-time.
 *
 * * **pass-through evaluation**: the `$localize` tag is a run-time function that simply evaluates
 * the original template literal string without applying any translations to the parts. This
 * version is used during development or where there is no need to translate the localized
 * template literals.
 * @param messageParts a collection of the static parts of the template string.
 * @param expressions a collection of the values of each placeholder in the template string.
 * @returns the translated string, with the `messageParts` and `expressions` interleaved together.
 */
const $localize = function (messageParts, ...expressions) {
    if ($localize.translate) {
        // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
        const translation = $localize.translate(messageParts, expressions);
        messageParts = translation[0];
        expressions = translation[1];
    }
    let message = stripBlock(messageParts[0], messageParts.raw[0]);
    for (let i = 1; i < messageParts.length; i++) {
        message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
    }
    return message;
};
const BLOCK_MARKER = ':';
/**
 * Strip a delimited "block" from the start of the `messagePart`, if it is found.
 *
 * If a marker character (:) actually appears in the content at the start of a tagged string or
 * after a substitution expression, where a block has not been provided the character must be
 * escaped with a backslash, `\:`. This function checks for this by looking at the `raw`
 * messagePart, which should still contain the backslash.
 *
 * @param messagePart The cooked message part to process.
 * @param rawMessagePart The raw message part to check.
 * @returns the message part with the placeholder name stripped, if found.
 * @throws an error if the block is unterminated
 */
function stripBlock(messagePart, rawMessagePart) {
    return rawMessagePart.charAt(0) === BLOCK_MARKER ?
        messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) :
        messagePart;
}
/**
 * Find the end of a "marked block" indicated by the first non-escaped colon.
 *
 * @param cooked The cooked string (where escaped chars have been processed)
 * @param raw The raw string (where escape sequences are still in place)
 *
 * @returns the index of the end of block marker
 * @throws an error if the block is unterminated
 */
function findEndOfBlock(cooked, raw) {
    /***********************************************************************************************
     * This function is repeated in `src/utils/messages.ts` and the two should be kept in sync.
     * The reason is that this file is marked as having side-effects, and if we import `messages.ts`
     * into it, the whole of `src/utils` will be included in this bundle and none of the functions
     * will be tree shaken.
     ***********************************************************************************************/
    for (let cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
        if (raw[rawIndex] === '\\') {
            rawIndex++;
        }
        else if (cooked[cookedIndex] === BLOCK_MARKER) {
            return cookedIndex;
        }
    }
    throw new Error(`Unterminated $localize metadata block in "${raw}".`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Attach $localize to the global context, as a side-effect of this module.
_global.$localize = $localize;
//# sourceMappingURL=init.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/add/addgallery.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/add/addgallery.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Category</label>\r\n                <!--<input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">-->\r\n                <select class=\"form-control\" id=category placeholder=\"\" formControlName=\"category\">\r\n                  <option>Living</option>\r\n                  <option>Appartment</option>\r\n                  <option>Shop</option>\r\n                  <option>Office</option>\r\n                </select>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/gallery.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/gallery.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Bahrain</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"Category\" (sort)=\"onSort($event)\"> Category </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.category}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/homepage/add/addhome.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/homepage/add/addhome.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Activar Bahrain</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"homeForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/homepage/home.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/homepage/home.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Bahrain</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Home Page</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.homePageID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/service/add/addservice.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/service/add/addservice.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Activar Bahrain</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"serviceForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/service/service.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/service/service.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Bahrain</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Services</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.serviceID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/add/addgallery.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/add/addgallery.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Category</label>\r\n                <!--<input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">-->\r\n                <select class=\"form-control\" id=category placeholder=\"\" formControlName=\"category\">\r\n                  <option>Living</option>\r\n                  <option>Appartment</option>\r\n                  <option>Shop</option>\r\n                  <option>Office</option>\r\n                </select>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/gallery.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/gallery.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"Category\" (sort)=\"onSort($event)\"> Category </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.category}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/homepage/add/addhome.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/homepage/add/addhome.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"homeForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Home</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/homepage/home.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/homepage/home.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Home Page</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.homePageID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/service/add/addservice.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/service/add/addservice.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"serviceForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/service/service.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/service/service.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Services</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.serviceID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <!-- <div class=\"row\">\r\n    <div class=\"col-md-9 form-group\">\r\n        <label>Select Date</label>\r\n        <ngbd-datepicker-range-popup></ngbd-datepicker-range-popup>\r\n    </div>\r\n    <div class=\"col-md-3 form-group text-right\">\r\n        <button class=\"btn btn-primary mt-4\" (click)=\"Filter()\" type=\"submit\">Search</button>\r\n    </div>\r\n</div> -->\r\n\r\n<!-- Page Heading -->\r\n\r\n\r\n<div class=\"row d-sm-flex align-items-center justify-content-between mb-4\">\r\n    <div class=\"col-md-6\">\r\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n    </div>\r\n    <div class=\" col-md-6 d-flex justify-content-end\">\r\n        <ngbd-datepicker-range-popup></ngbd-datepicker-range-popup>\r\n        <!-- <button class=\"btn btn-primary ml-2\" type=\"submit\"  (click)=\"GetDataDashboard()\">Search</button> -->\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n    <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n\r\n</div> -->\r\n\r\n<!-- Content Row -->\r\n<div class=\"row\">\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-orange text-uppercase mb-1\">Total Sales</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{dashboardSummary.sales | number:'1.2-2'}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-success shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Net Sales</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{dashboardSummary.netSales | number:'1.2-2'}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Pending Requests Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-warning shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Total Tax</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{dashboardSummary.totalTax | number:'1.2-2'}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-info shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Total Orders</div>\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{dashboardSummary.totalOrders | number:'1.2-2'}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<!-- Content Row -->\r\n\r\n<div class=\"row\">\r\n\r\n    <!-- Area Chart -->\r\n    <div class=\"col-xl-8 col-lg-7\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Earnings Overview</h6>\r\n                <div class=\"dropdown no-arrow\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                        <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <div class=\"chart-area\">\r\n\r\n                    <div style=\"text-align:center\">\r\n                        <!-- <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [xaxis]=\"chartOptions.xaxis\" [title]=\"chartOptions.title\"></apx-chart> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Pie Chart -->\r\n    <div class=\"col-xl-4 col-lg-5\">\r\n        <div class=\"card shadow mb-4 \">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Revenue Periodic</h6>\r\n                <div class=\"dropdown no-arrow\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                        <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <!--<div class=\"chart-pie \"   style=\"height: auto !important;\">\r\n                    <div id=\"chart\">\r\n                        <apx-chart [series]=\"chartOptionsDonut.series\" [chart]=\"chartOptionsDonut.chart\" [labels]=\"chartOptionsDonut.labels\" [responsive]=\"chartOptionsDonut.responsive\"></apx-chart>\r\n                    </div>\r\n                </div>-->\r\n                <div class=\"mt-4 text-center small\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/add/addgallery.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/add/addgallery.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Projects</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Category</label>\r\n                <!--<input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">-->\r\n                <select class=\"form-control\" id=category placeholder=\"\" formControlName=\"category\">\r\n                  <option>Living</option>\r\n                  <option>Appartment</option>\r\n                  <option>Shop</option>\r\n                  <option>Office</option>\r\n                </select>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/gallery.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/gallery.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Projects</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"Category\" (sort)=\"onSort($event)\"> Category </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.category}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/homepage/add/addhome.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/homepage/add/addhome.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"homeForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/homepage/home.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/homepage/home.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Home Page</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.homePageID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/service/add/addservice.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/service/add/addservice.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"serviceForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/service/service.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/service/service.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Services</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.serviceID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/add/addgallery.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/add/addgallery.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Category</label>\r\n                <!--<input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">-->\r\n                <select class=\"form-control\" id=category placeholder=\"\" formControlName=\"category\">\r\n                  <option>Living</option>\r\n                  <option>Appartment</option>\r\n                  <option>Shop</option>\r\n                  <option>Office</option>\r\n                </select>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/gallery.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/gallery.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"Category\" (sort)=\"onSort($event)\"> Category </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.category}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/homepage/add/addhome.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/homepage/add/addhome.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"homeForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Home</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/homepage/home.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/homepage/home.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Home Page</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.homePageID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/service/add/addservices.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/service/add/addservices.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"serviceForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/service/service.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/service/service.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n  <div class=\"card-header py-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n        <h6 class=\"m-0 font-weight-bold text-orange\">Services</h6>\r\n      </div>\r\n      <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n        <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n          <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n        <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n      </div>\r\n\r\n      <div class=\"col-md-3 form-group text-right\">\r\n        <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n          <span translate>Export</span>\r\n        </button>\r\n        <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n          Add\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"tile-body p-0 table-responsive \">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr class=\"table-header\">\r\n            <th width=\"10%\">IMAGE</th>\r\n            <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n            <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n            <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n            <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n            <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n            <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n            <th width=\"10%\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of data$ | async \">\r\n            <td>\r\n              <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n              <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n            </td>\r\n            <td> {{item.title}} </td>\r\n            <td> {{item.arabicTitle}} </td>\r\n            <td> {{item.description}} </td>\r\n            <td> {{item.arabicDescription}} </td>\r\n            <td> {{item.displayOrder}} </td>\r\n            <td>\r\n              <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n              </ngb-highlight>\r\n            </td>\r\n            <td>\r\n              <a (click)=\"Edit(item.serviceID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n              <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <p class=\"pagination-count\">\r\n          Showing\r\n          <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n          <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n          <strong>{{(total$ | async)!}}</strong> results\r\n        </p>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n        <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n        </ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Add News and Events</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"newsandeventForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">News & Event Details</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=name placeholder=\"\" formControlName=\"name\">\r\n                <div *ngIf=\"f.name.invalid && (f.name.dirty || f.name.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.name.errors.required\">\r\n                    Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=name placeholder=\"\" formControlName=\"arabicName\">\r\n                <div *ngIf=\"f.arabicName.invalid && (f.arabicName.dirty || f.arabicName.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicName.errors.required\">\r\n                    Arabic Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputFirstName\">Page Name</label>\r\n                  <!--<input type=\"text\" class=\"form-control\" id=pagename placeholder=\"\" formControlName=\"pagename\">-->\r\n                  <select type=\"text\" class=\"form-control\" id=pagename placeholder=\"\" formControlName=\"pagename\">\r\n                    <option>Home</option>\r\n                    <option>News</option>\r\n                    <option>Events</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Description</label>\r\n                  <textarea class=\"form-control\" formControlName=\"description\" height=\"100px\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Arabic Description</label>\r\n                  <textarea class=\"form-control\" formControlName=\"arabicDescription\" height=\"100px\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/newsevent.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/newsevent.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Group</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">News & Events</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-2 text-right\"> <button [routerLink]=\"['add']\" class=\"btn btn-primary \">\r\n                Add Category\r\n            </button></div>-->\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Name </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> ArabicName </th>\r\n                        <th width=\"30%\" sortable=\"Description\" (sort)=\"onSort($event)\">Description </th>\r\n                        <th width=\"15%\" sortable=\"PageName\" (sort)=\"onSort($event)\">Page Name</th>\r\n\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.name}} </td>\r\n                        <td> {{item.arabicName}} </td>\r\n                        <td> {{item.description}} </td>\r\n                        <td> {{item.pagename}} </td>\r\n                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.newsEventID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/add/addgallery.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/add/addgallery.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Project</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Category</label>\r\n                <!--<input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">-->\r\n                <select class=\"form-control\" id=category placeholder=\"\" formControlName=\"category\">\r\n                  <option>Living</option>\r\n                  <option>Appartment</option>\r\n                  <option>Shop</option>\r\n                  <option>Office</option>\r\n                </select>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/gallery.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/gallery.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Projects</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"Category\" (sort)=\"onSort($event)\"> Category </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.category}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/homepage/add/addhome.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/homepage/add/addhome.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"homeForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Home</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/homepage/home.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/homepage/home.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Home Page</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.homePageID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/service/add/addservice.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/service/add/addservice.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"serviceForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Service</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=description placeholder=\"\" formControlName=\"description\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Description</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicDescription placeholder=\"\" formControlName=\"arabicDescription\">\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <!--<div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\" style=\"font-size: 20px;\"> Icon Image</label>\r\n                <app-imageupload formControlName=\"iconImage\" ></app-imageupload>\r\n              </div>-->\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\" style=\"font-size: 20px;\"> Main Image</label>\r\n                <app-imageupload formControlName=\"imagePath\" ></app-imageupload>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/service/service.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/service/service.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Services</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr class=\"table-header\">\r\n                    <th width=\"10%\">IMAGE</th>\r\n                    <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                    <th width=\"20%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                    <th width=\"20%\" sortable=\"Description\" (sort)=\"onSort($event)\"> Description </th>\r\n                    <th width=\"20%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\"> Arabic Description </th>\r\n                    <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                    <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                    <th width=\"10%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.imagePath !== ''\" [src]=\"item.imagePath\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.imagePath === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.description}} </td>                        \r\n                        <td> {{item.arabicDescription}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.serviceID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\r\n\r\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/datepicker-range/datepicker-range-popup.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datepicker-range/datepicker-range-popup.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-inline\">\r\n    <div class=\"form-group hidden\">\r\n        <div class=\"input-group\">\r\n            <input name=\"datepicker\" class=\"form-control\" ngbDatepicker #datepicker=\"ngbDatepicker\" [autoClose]=\"'outside'\" (dateSelect)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" outsideDays=\"hidden\" [startDate]=\"fromDate!\">\r\n            <ng-template #t let-date let-focused=\"focused\">\r\n                <span class=\"custom-day\" [class.focused]=\"focused\" [class.range]=\"isRange(date)\" [class.faded]=\"isHovered(date) || isInside(date)\" (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\r\n          {{ date.day }}\r\n        </span>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input #dpFromDate class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dpFromDate\" [value]=\"formatter.format(fromDate)\" (input)=\"fromDate = validateInput(fromDate, dpFromDate.value)\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"datepicker.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group ml-2\">\r\n        <div class=\"input-group\">\r\n            <input #dpToDate class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dpToDate\" [value]=\"formatter.format(toDate)\" (input)=\"toDate = validateInput(toDate, dpToDate.value)\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary \" (click)=\"datepicker.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageupload/imageupload.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageupload/imageupload.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"group-gap mt-4\">\r\n\r\n    <div class=\"avatar-upload\">\r\n        <div class=\"avatar-edit\">\r\n            <input type='file' id=\"imageUpload\" accept=\".png, .jpg, .jpeg\" #fileInput (change)=\"onFileChange($event)\" />\r\n        </div>\r\n        <div class=\"avatar-preview\">\r\n            <div id=\"imagePreview\" [style.backgroundImage]=\"'url('+ imageUrl +')'\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Submit Button -->\r\n\r\n<button type=\"button\" class=\"file-upload-btn\" (click)=\"fileInput.click()\">Upload Image</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body id=\"page-top\">\r\n  <!-- Page Wrapper -->\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n\r\n      <!-- Sidebar - Brand -->\r\n      <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" [routerLink]=\"['dashboard']\">\r\n        <div class=\"sidebar-brand-icon\">\r\n          <img src=\"../../assets/img/FaviconLayout.png\" style=\"width: 40%;\" />\r\n        </div>\r\n      </a>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider my-0\">\r\n\r\n      <!-- Nav Item - Dashboard -->\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['dashboard']\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n      </li>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider\">\r\n\r\n      <!-- Heading -->\r\n      <div class=\"sidebar-heading\">\r\n        Companies\r\n      </div>\r\n      <!-- Nav Item - Utilities Collapse Menu -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseCompany\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Planera Group</span>\r\n        </a>\r\n        <div id=\"collapseCompany\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/newsevent']\">News & Event</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseplaneraint\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Planera Interior</span>\r\n        </a>\r\n        <div id=\"collapseplaneraint\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planerainterior/homepage']\">Home Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planerainterior/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planerainterior/gallery']\">Project Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseActivarBh\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Activar Bahrain</span>\r\n        </a>\r\n        <div id=\"collapseActivarBh\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activarbahrain/homepage']\">Home Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activarbahrain/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activarbahrain/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseHarmanoCont\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Harmano Contracting</span>\r\n        </a>\r\n        <div id=\"collapseHarmanoCont\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanocontract/homepage']\">Home Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanocontract/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanocontract/gallery']\">Project Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#ActivarDB\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Activar Dubai</span>\r\n        </a>\r\n        <div id=\"ActivarDB\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activardubai/homepage']\">Home Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activardubai/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activardubai/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#HarmanoRP\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Harmano Repair</span>\r\n        </a>\r\n        <div id=\"HarmanoRP\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanorepair/homepage']\">Home Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanorepair/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanorepair/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <hr class=\"sidebar-divider\">\r\n      <!-- Sidebar Toggler (Sidebar) -->\r\n      <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n      </div>\r\n    </ul>\r\n    <!-- End of Sidebar -->\r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n      <!-- Main Content -->\r\n      <div id=\"content\">\r\n        <!-- Topbar -->\r\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n\r\n          <!-- Sidebar Toggle (Topbar) -->\r\n          <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n          <!-- Topbar Search -->\r\n          <div class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100\">\r\n            <strong>Branch Name</strong> : {{branchname}} |\r\n            <strong>Email</strong> : {{email}}\r\n          </div>\r\n\r\n          <!-- Topbar Navbar -->\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <!-- Nav Item - User Information -->\r\n            <li class=\"nav-item dropdown no-arrow\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Administrator</span>\r\n                <img class=\"img-profile rounded-circle\" src=\"https://user-images.githubusercontent.com/16608864/35882949-bbe13aa0-0bab-11e8-859c-ceda3b213818.jpeg\">\r\n              </a>\r\n              <!-- Dropdown - User Information -->\r\n              <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"Logout()\">\r\n                  <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i> Logout\r\n                </a>\r\n              </div>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n        </nav>\r\n        <!-- End of Topbar -->\r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n      <!-- End of Main Content -->\r\n      <!-- Footer -->\r\n      <footer class=\"sticky-footer bg-white\">\r\n        <div class=\"container my-auto\">\r\n          <div class=\"copyright text-center my-auto\">\r\n            <span>Copyright &copy; PlaneraBH 2022</span>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n      <!-- End of Footer -->\r\n\r\n    </div>\r\n    <!-- End of Content Wrapper -->\r\n\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n    <!-- Outer Row -->\r\n    <div class=\"row justify-content-center\">\r\n\r\n        <div class=\"col-xl-10 col-lg-12 col-md-9\">\r\n\r\n            <div class=\"card o-hidden border-0 shadow-lg my-5\">\r\n                <div class=\"card-body p-0\">\r\n                    <!-- Nested Row within Card Body -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\r\n                        <div class=\"col-lg-6\">\r\n                            <div class=\"p-5\">\r\n                                <div class=\"text-center mb-4\">\r\n                                    <img src=\"../../assets/img/favicon.png\" style=\"height:150px\" />\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <h1 class=\"h4 text-gray-900 mb-4\">Welcome Back!</h1>\r\n                                </div>\r\n                                <form [formGroup]=\"loginForm\" class=\"user\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"email\" formControlName=\"username\" class=\"form-control form-control-user\" id=\"username\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email Address...\">\r\n                                        <div *ngIf=\"f.username.invalid && (f.username.dirty || f.username.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"f.username.errors.required\">\r\n                                                username is required.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"password\" class=\"form-control form-control-user\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n                                        <div *ngIf=\"f.password.invalid && (f.password.dirty || f.password.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"f.password.errors.required\">\r\n                                                password is required.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <button class=\"btn btn-primary btn-user btn-block\">\r\n                                      Login\r\n                                  </button>\r\n                                    <hr>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">PlaneraAdmin</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/ExportExcel/excel.service.ts":
/*!******************************************!*\
  !*** ./src/ExportExcel/excel.service.ts ***!
  \******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
};
ExcelService.ctorParameters = () => [];
ExcelService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ExcelService);



/***/ }),

/***/ "./src/app/_directives/sortable.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/_directives/sortable.directive.ts ***!
  \***************************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
let NgbdSortableHeader = class NgbdSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
};
NgbdSortableHeader.propDecorators = {
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
NgbdSortableHeader = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: 'th[sortable]',
        host: {
            '[class.asc]': 'direction === "asc"',
            '[class.desc]': 'direction === "desc"',
            '(click)': 'rotate()'
        }
    })
], NgbdSortableHeader);



/***/ }),

/***/ "./src/app/_models/Dashboard.ts":
/*!**************************************!*\
  !*** ./src/app/_models/Dashboard.ts ***!
  \**************************************/
/*! exports provided: DashboardSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSummary", function() { return DashboardSummary; });
class DashboardSummary {
}


/***/ }),

/***/ "./src/app/_services/actbahgallery.ts":
/*!********************************************!*\
  !*** ./src/app/_services/actbahgallery.ts ***!
  \********************************************/
/*! exports provided: ActBahGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActBahGalleryService", function() { return ActBahGalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let ActBahGalleryService = class ActBahGalleryService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/activarbahrain/gallery/${id}`);
    }
    ExportList() {
        return this.http.get(`api/activarbahrain/all`);
    }
    getAllData() {
        const url = `api/activarbahrain/all`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/activarbahrain/insert`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/activarbahrain/update`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/planerainterior/delete`, deleteData);
    }
};
ActBahGalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActBahGalleryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActBahGalleryService);



/***/ }),

/***/ "./src/app/_services/actbahhome.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/actbahhome.service.ts ***!
  \*************************************************/
/*! exports provided: ActBahHomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActBahHomePageService", function() { return ActBahHomePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let ActBahHomePageService = class ActBahHomePageService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/activarbahrain/home/${id}`);
    }
    ExportList() {
        return this.http.get(`api/activarbahrain/homeall`);
    }
    getAllData() {
        const url = `api/activarbahrain/homeall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.homepage = res;
                this._data$.next(this.homepage);
                this._allData$.next(this.homepage);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.homepage, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        return this.http.post(`api/activarbahrain/inserthome`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/activarbahrain/updatehome`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        return this.http.post(`api/activarbahrain/deletehome`, deleteData);
    }
};
ActBahHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActBahHomePageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActBahHomePageService);



/***/ }),

/***/ "./src/app/_services/actbahservice.ts":
/*!********************************************!*\
  !*** ./src/app/_services/actbahservice.ts ***!
  \********************************************/
/*! exports provided: ActBahServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActBahServiceService", function() { return ActBahServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let ActBahServiceService = class ActBahServiceService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/activarbahrain/service/${id}`);
    }
    ExportList() {
        return this.http.get(`api/activarbahrain/serviceall`);
    }
    getAllData() {
        const url = `api/activarbahrain/serviceall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/activarbahrain/insertservice`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/activarbahrain/updateservice`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/activarbahrain/deleteservice`, deleteData);
    }
};
ActBahServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActBahServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActBahServiceService);



/***/ }),

/***/ "./src/app/_services/actdubgallery.ts":
/*!********************************************!*\
  !*** ./src/app/_services/actdubgallery.ts ***!
  \********************************************/
/*! exports provided: ActDubGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActDubGalleryService", function() { return ActDubGalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let ActDubGalleryService = class ActDubGalleryService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/activardubai/gallery/${id}`);
    }
    ExportList() {
        return this.http.get(`api/activardubai/all`);
    }
    getAllData() {
        const url = `api/activardubai/all`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/activardubai/insert`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/activardubai/update`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/activardubai/delete`, deleteData);
    }
};
ActDubGalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActDubGalleryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActDubGalleryService);



/***/ }),

/***/ "./src/app/_services/actdubhome.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/actdubhome.service.ts ***!
  \*************************************************/
/*! exports provided: ActDubHomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActDubHomePageService", function() { return ActDubHomePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let ActDubHomePageService = class ActDubHomePageService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/activardubai/home/${id}`);
    }
    ExportList() {
        return this.http.get(`api/activardubai/homeall`);
    }
    getAllData() {
        const url = `api/activardubai/homeall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.homepage = res;
                this._data$.next(this.homepage);
                this._allData$.next(this.homepage);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.homepage, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        return this.http.post(`api/activardubai/inserthome`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/activardubai/updatehome`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        return this.http.post(`api/activardubai/deletehome`, deleteData);
    }
};
ActDubHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActDubHomePageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActDubHomePageService);



/***/ }),

/***/ "./src/app/_services/actdubservice.ts":
/*!********************************************!*\
  !*** ./src/app/_services/actdubservice.ts ***!
  \********************************************/
/*! exports provided: ActDubServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActDubServiceService", function() { return ActDubServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let ActDubServiceService = class ActDubServiceService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/activardubai/service/${id}`);
    }
    ExportList() {
        return this.http.get(`api/activardubai/serviceall`);
    }
    getAllData() {
        const url = `api/activardubai/serviceall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/activardubai/insertservice`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/activardubai/updateservice`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/activardubai/deleteservice`, deleteData);
    }
};
ActDubServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActDubServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActDubServiceService);



/***/ }),

/***/ "./src/app/_services/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboadService", function() { return DashboadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DashboadService = class DashboadService {
    constructor(http) {
        this.http = http;
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    GetDashboard(locationID, date) {
        var today = date;
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + dd + '-' + mm;
        return this.http.get(`api/dashboard/get/${locationID}/${today}`);
    }
    GetDashboardRange(locationID, fdate, tdate) {
        return this.http.get(`api/dashboard/range/get/${locationID}/${fdate}/${tdate}`);
    }
};
DashboadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DashboadService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DashboadService);



/***/ }),

/***/ "./src/app/_services/hrcntgallery.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/hrcntgallery.service.ts ***!
  \***************************************************/
/*! exports provided: HrCntGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCntGalleryService", function() { return HrCntGalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let HrCntGalleryService = class HrCntGalleryService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/harmanocontract/gallery/${id}`);
    }
    ExportList() {
        return this.http.get(`api/harmanocontract/all`);
    }
    getAllData() {
        const url = `api/harmanocontract/all`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/harmanocontract/insert`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/harmanocontract/update`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/harmanocontract/delete`, deleteData);
    }
};
HrCntGalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HrCntGalleryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HrCntGalleryService);



/***/ }),

/***/ "./src/app/_services/hrcnthome.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/hrcnthome.service.ts ***!
  \************************************************/
/*! exports provided: HrCntHomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCntHomePageService", function() { return HrCntHomePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let HrCntHomePageService = class HrCntHomePageService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/harmanocontract/home/${id}`);
    }
    ExportList() {
        return this.http.get(`api/harmanocontract/homeall`);
    }
    getAllData() {
        const url = `api/harmanocontract/homeall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.homepage = res;
                this._data$.next(this.homepage);
                this._allData$.next(this.homepage);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.homepage, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        return this.http.post(`api/harmanocontract/inserthome`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/harmanocontract/updatehome`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        return this.http.post(`api/harmanocontract/deletehome`, deleteData);
    }
};
HrCntHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HrCntHomePageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HrCntHomePageService);



/***/ }),

/***/ "./src/app/_services/hrcntservices.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/hrcntservices.service.ts ***!
  \****************************************************/
/*! exports provided: HrCntServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCntServiceService", function() { return HrCntServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let HrCntServiceService = class HrCntServiceService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/harmanocontract/service/${id}`);
    }
    ExportList() {
        return this.http.get(`api/harmanocontract/serviceall`);
    }
    getAllData() {
        const url = `api/harmanocontract/serviceall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/harmanocontract/insertservice`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/harmanocontract/updateservice`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/harmanocontract/deleteservice`, deleteData);
    }
};
HrCntServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HrCntServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HrCntServiceService);



/***/ }),

/***/ "./src/app/_services/hrrprgallery.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/hrrprgallery.service.ts ***!
  \***************************************************/
/*! exports provided: HrRprGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRprGalleryService", function() { return HrRprGalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let HrRprGalleryService = class HrRprGalleryService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/harmanorepair/gallery/${id}`);
    }
    ExportList() {
        return this.http.get(`api/harmanorepair/all`);
    }
    getAllData() {
        const url = `api/harmanorepair/all`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        return this.http.post(`api/harmanorepair/insert`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/harmanorepair/update`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/harmanorepair/delete`, deleteData);
    }
};
HrRprGalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HrRprGalleryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HrRprGalleryService);



/***/ }),

/***/ "./src/app/_services/hrrprhome.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/hrrprhome.service.ts ***!
  \************************************************/
/*! exports provided: HrRprHomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRprHomePageService", function() { return HrRprHomePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let HrRprHomePageService = class HrRprHomePageService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/harmanorepair/home/${id}`);
    }
    ExportList() {
        return this.http.get(`api/harmanorepair/homeall`);
    }
    getAllData() {
        const url = `api/harmanorepair/homeall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.homepage = res;
                this._data$.next(this.homepage);
                this._allData$.next(this.homepage);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.homepage, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        return this.http.post(`api/harmanorepair/inserthome`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/harmanorepair/updatehome`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        return this.http.post(`api/harmanorepair/deletehome`, deleteData);
    }
};
HrRprHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HrRprHomePageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], HrRprHomePageService);



/***/ }),

/***/ "./src/app/_services/hrrprservices.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/hrrprservices.service.ts ***!
  \****************************************************/
/*! exports provided: hrrprservices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrrprservices", function() { return hrrprservices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let hrrprservices = class hrrprservices {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/harmanorepair/service/${id}`);
    }
    ExportList() {
        return this.http.get(`api/harmanorepair/serviceall`);
    }
    getAllData() {
        const url = `api/harmanorepair/serviceall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.services = res;
                this._data$.next(this.services);
                this._allData$.next(this.services);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.services, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        return this.http.post(`api/harmanorepair/insertservice`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/harmanorepair/updateservice`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(updateData) {
        return this.http.post(`api/harmanorepair/deleteservice`, updateData);
    }
};
hrrprservices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
hrrprservices = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], hrrprservices);



/***/ }),

/***/ "./src/app/_services/local-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/local-storage.service.ts ***!
  \****************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LocalStorageService = class LocalStorageService {
    constructor() {
    }
    setSelectedBrand(brand) {
        sessionStorage.setItem('_autheticatedUser', JSON.stringify(brand));
    }
    setSelectedLocation(location) {
        sessionStorage.setItem('selectedLocation', JSON.stringify(location));
    }
    getSelectedLocation() {
        return JSON.parse(sessionStorage.getItem('selectedLocation'));
    }
    setLocation(location) {
        sessionStorage.setItem('_Locations', JSON.stringify(location));
    }
    getLocation() {
        return JSON.parse(sessionStorage.getItem('_Locations'));
    }
    getSelectedBrand() {
        return JSON.parse(sessionStorage.getItem('_autheticatedUser'));
    }
    getSelectedUser() {
        let userInfo = JSON.parse(sessionStorage.getItem("currentUser"));
        if (userInfo !== null) {
            userInfo = JSON.parse(userInfo.data);
            return userInfo;
        }
    }
};
LocalStorageService.ctorParameters = () => [];
LocalStorageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], LocalStorageService);



/***/ }),

/***/ "./src/app/_services/login.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/login.service.ts ***!
  \********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('_autheticatedUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.get(`api/login/authenticate/${username}/${password}`);
    }
    getAllLocations(brandId) {
        return this.http.get(`api/location/all/${brandId}`);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/_services/plngrpnewsalert.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/plngrpnewsalert.service.ts ***!
  \******************************************************/
/*! exports provided: PlnGrpNewAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlnGrpNewAlertService", function() { return PlnGrpNewAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.name.toLowerCase().includes(term.toLowerCase());
}
let PlnGrpNewAlertService = class PlnGrpNewAlertService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/planeragroup/news/${id}`);
    }
    ExportList() {
        return this.http.get(`api/planeragroup/all`);
    }
    getAllData() {
        const url = `api/planeragroup/all`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/planeragroup/insert`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/planeragroup/updatenews`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/planeragroup/deletenews`, deleteData);
    }
};
PlnGrpNewAlertService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlnGrpNewAlertService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PlnGrpNewAlertService);



/***/ }),

/***/ "./src/app/_services/plnintgallery.ts":
/*!********************************************!*\
  !*** ./src/app/_services/plnintgallery.ts ***!
  \********************************************/
/*! exports provided: PlnIntGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlnIntGalleryService", function() { return PlnIntGalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let PlnIntGalleryService = class PlnIntGalleryService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/planerainterior/gallery/${id}`);
    }
    ExportList() {
        return this.http.get(`api/planerainterior/all`);
    }
    getAllData() {
        const url = `api/planerainterior/all`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.newsevent = res;
                this._data$.next(this.newsevent);
                this._allData$.next(this.newsevent);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.newsevent, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/planerainterior/insert`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/planerainterior/updatenews`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        return this.http.post(`api/planerainterior/delete`, deleteData);
    }
};
PlnIntGalleryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlnIntGalleryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PlnIntGalleryService);



/***/ }),

/***/ "./src/app/_services/plninthome.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/plninthome.service.ts ***!
  \*************************************************/
/*! exports provided: PlnIntHomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlnIntHomePageService", function() { return PlnIntHomePageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let PlnIntHomePageService = class PlnIntHomePageService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/planerainterior/home/${id}`);
    }
    ExportList() {
        return this.http.get(`api/planerainterior/homeall`);
    }
    getAllData() {
        const url = `api/planerainterior/homeall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.homepage = res;
                this._data$.next(this.homepage);
                this._allData$.next(this.homepage);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.homepage, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/planerainterior/inserthome`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/planerainterior/updatehome`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/planerainterior/deletehome`, deleteData);
    }
};
PlnIntHomePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlnIntHomePageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PlnIntHomePageService);



/***/ }),

/***/ "./src/app/_services/plnintservice.ts":
/*!********************************************!*\
  !*** ./src/app/_services/plnintservice.ts ***!
  \********************************************/
/*! exports provided: PlnIntServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlnIntServiceService", function() { return PlnIntServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(data, column, direction) {
    if (direction === '' || column === '') {
        return data;
    }
    else {
        return [...data].sort((a, b) => {
            const res = compare(`${a[column]}`, `${b[column]}`);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(data, term) {
    return data.title.toLowerCase().includes(term.toLowerCase());
}
let PlnIntServiceService = class PlnIntServiceService {
    constructor(http) {
        this.http = http;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    get data$() {
        return this._data$.asObservable();
    }
    get allData$() {
        return this._allData$.asObservable();
    }
    getById(id) {
        return this.http.get(`api/planerainterior/home/${id}`);
    }
    ExportList() {
        return this.http.get(`api/planerainterior/serviceall`);
    }
    getAllData() {
        const url = `api/planerainterior/serviceall`;
        console.log(url);
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(true)),
            this.http.get(url).subscribe(res => {
                this.service = res;
                this._data$.next(this.service);
                this._allData$.next(this.service);
                this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this._loading$.next(false))).subscribe(result => {
                    this._data$.next(result.data);
                    this._total$.next(result.total);
                });
                this._search$.next();
            });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let sortedData = sort(this.service, sortColumn, sortDirection);
        //// 2. filter
        sortedData = sortedData.filter(data => matches(data, searchTerm));
        const total = sortedData.length;
        // 3. paginate
        const data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ data, total });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this._search$.next();
        this._data$.next(null);
        this._allData$.next(null);
        this._total$.next(null);
        this._loading$.next(null);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
    }
    insert(data) {
        debugger;
        return this.http.post(`api/planerainterior/insertservice`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    update(updateData) {
        return this.http.post(`api/planerainterior/updateservice`, updateData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log(res);
            return res;
        }));
    }
    delete(deleteData) {
        debugger;
        return this.http.post(`api/planerainterior/deleteservice`, deleteData);
    }
};
PlnIntServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlnIntServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PlnIntServiceService);



/***/ }),

/***/ "./src/app/_services/toastservice.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/toastservice.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ToastService = class ToastService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(_title, _message) {
        this.toastr.success(_title, _message, {
            timeOut: 3000,
        });
    }
    showError(_title, _message) {
        this.toastr.error(_title, _message, {
            timeOut: 3000,
        });
    }
    showWarning(_title, _message) {
        this.toastr.warning(_title, _message, {
            timeOut: 3000,
        });
    }
};
ToastService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"] }
];
ToastService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
], ToastService);



/***/ }),

/***/ "./src/app/admin/activarbahrain/gallery/add/addgallery.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/activarbahrain/gallery/add/addgallery.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddGalleryActBahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGalleryActBahComponent", function() { return AddGalleryActBahComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/actbahgallery */ "./src/app/_services/actbahgallery.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddGalleryActBahComponent = class AddGalleryActBahComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.galleryForm.controls; }
    createForm() {
        this.galleryForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: [''],
            statusID: [true],
            galleryID: 0,
            imagePath: [''],
            displayOrder: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.galleryID.setValue(obj.galleryID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.category.setValue(obj.category);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.galleryID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.galleryForm.markAllAsTouched();
        this.submitted = true;
        if (this.galleryForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.galleryID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.galleryForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/activarbahrain/gallery']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.galleryForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/activarbahrain/gallery']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddGalleryActBahComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_6__["ActBahGalleryService"] }
];
AddGalleryActBahComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddGalleryActBahComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addgallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/add/addgallery.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_6__["ActBahGalleryService"]])
], AddGalleryActBahComponent);



/***/ }),

/***/ "./src/app/admin/activarbahrain/gallery/gallery.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/activarbahrain/gallery/gallery.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActBahGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActBahGalleryComponent", function() { return ActBahGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/actbahgallery */ "./src/app/_services/actbahgallery.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ActBahGalleryComponent = class ActBahGalleryComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/activarbahrain/gallery/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
ActBahGalleryComponent.ctorParameters = () => [
    { type: src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_7__["ActBahGalleryService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ActBahGalleryComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
ActBahGalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/gallery.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_7__["ActBahGalleryService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActBahGalleryComponent);



/***/ }),

/***/ "./src/app/admin/activarbahrain/homepage/add/addhome.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/activarbahrain/homepage/add/addhome.component.ts ***!
  \************************************************************************/
/*! exports provided: AddHomeAcBahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHomeAcBahComponent", function() { return AddHomeAcBahComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_actbahhome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/actbahhome.service */ "./src/app/_services/actbahhome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddHomeAcBahComponent = class AddHomeAcBahComponent {
    constructor(formBuilder, router, route, ls, ts, homeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.homeService = homeService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.homeForm.controls; }
    createForm() {
        this.homeForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            homePageID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.homePageID.setValue(obj.homePageID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.homePageID.setValue(sid);
                this.homeService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.homeForm.markAllAsTouched();
        this.submitted = true;
        if (this.homeForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.homePageID.value) === 0) {
            //Insert category
            this.homeService.insert(this.homeForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/activarbahrain/homepage']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.homeService.update(this.homeForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/activarbahrain/homepage']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddHomeAcBahComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_actbahhome_service__WEBPACK_IMPORTED_MODULE_6__["ActBahHomePageService"] }
];
AddHomeAcBahComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddHomeAcBahComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addhome',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/homepage/add/addhome.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_actbahhome_service__WEBPACK_IMPORTED_MODULE_6__["ActBahHomePageService"]])
], AddHomeAcBahComponent);



/***/ }),

/***/ "./src/app/admin/activarbahrain/homepage/home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/activarbahrain/homepage/home.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActBahHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActBahHomeComponent", function() { return ActBahHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_actbahhome_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/actbahhome.service */ "./src/app/_services/actbahhome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ActBahHomeComponent = class ActBahHomeComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.home = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(home) {
        this.router.navigate(["admin/activarbahrain/homepage/edit", home]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
ActBahHomeComponent.ctorParameters = () => [
    { type: src_app_services_actbahhome_service__WEBPACK_IMPORTED_MODULE_7__["ActBahHomePageService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ActBahHomeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
ActBahHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/homepage/home.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_actbahhome_service__WEBPACK_IMPORTED_MODULE_7__["ActBahHomePageService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActBahHomeComponent);



/***/ }),

/***/ "./src/app/admin/activarbahrain/service/add/addservice.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/activarbahrain/service/add/addservice.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddServiceActBahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceActBahComponent", function() { return AddServiceActBahComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_actbahservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/actbahservice */ "./src/app/_services/actbahservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddServiceActBahComponent = class AddServiceActBahComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.serviceForm.controls; }
    createForm() {
        this.serviceForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            serviceID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.serviceID.setValue(obj.serviceID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.serviceID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.serviceForm.markAllAsTouched();
        this.submitted = true;
        if (this.serviceForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.serviceID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.serviceForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/activarbahrain/service']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.serviceForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/activarbahrain/service']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddServiceActBahComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_actbahservice__WEBPACK_IMPORTED_MODULE_6__["ActBahServiceService"] }
];
AddServiceActBahComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddServiceActBahComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addservice',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/service/add/addservice.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_actbahservice__WEBPACK_IMPORTED_MODULE_6__["ActBahServiceService"]])
], AddServiceActBahComponent);



/***/ }),

/***/ "./src/app/admin/activarbahrain/service/service.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/activarbahrain/service/service.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActBahServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActBahServiceComponent", function() { return ActBahServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_actbahservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/actbahservice */ "./src/app/_services/actbahservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ActBahServiceComponent = class ActBahServiceComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/activarbahrain/service/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
ActBahServiceComponent.ctorParameters = () => [
    { type: src_app_services_actbahservice__WEBPACK_IMPORTED_MODULE_7__["ActBahServiceService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ActBahServiceComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
ActBahServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/service/service.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_actbahservice__WEBPACK_IMPORTED_MODULE_7__["ActBahServiceService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActBahServiceComponent);



/***/ }),

/***/ "./src/app/admin/activardubai/gallery/add/addgallery.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/activardubai/gallery/add/addgallery.component.ts ***!
  \************************************************************************/
/*! exports provided: AddGalleryActDubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGalleryActDubComponent", function() { return AddGalleryActDubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/actdubgallery */ "./src/app/_services/actdubgallery.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddGalleryActDubComponent = class AddGalleryActDubComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.galleryForm.controls; }
    createForm() {
        this.galleryForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: [''],
            statusID: [true],
            galleryID: 0,
            imagePath: [''],
            displayOrder: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.galleryID.setValue(obj.galleryID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.category.setValue(obj.category);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.galleryID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.galleryForm.markAllAsTouched();
        this.submitted = true;
        if (this.galleryForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.galleryID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.galleryForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/activardubai/gallery']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.galleryForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/activardubai/gallery']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddGalleryActDubComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_6__["ActDubGalleryService"] }
];
AddGalleryActDubComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddGalleryActDubComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addgallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/add/addgallery.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_6__["ActDubGalleryService"]])
], AddGalleryActDubComponent);



/***/ }),

/***/ "./src/app/admin/activardubai/gallery/gallery.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/activardubai/gallery/gallery.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActDubGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActDubGalleryComponent", function() { return ActDubGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/actdubgallery */ "./src/app/_services/actdubgallery.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ActDubGalleryComponent = class ActDubGalleryComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/activardubai/gallery/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
ActDubGalleryComponent.ctorParameters = () => [
    { type: src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_7__["ActDubGalleryService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ActDubGalleryComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
ActDubGalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/gallery.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_7__["ActDubGalleryService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActDubGalleryComponent);



/***/ }),

/***/ "./src/app/admin/activardubai/homepage/add/addhome.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/activardubai/homepage/add/addhome.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddHomeAcDubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHomeAcDubComponent", function() { return AddHomeAcDubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_actdubhome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/actdubhome.service */ "./src/app/_services/actdubhome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddHomeAcDubComponent = class AddHomeAcDubComponent {
    constructor(formBuilder, router, route, ls, ts, homeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.homeService = homeService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.homeForm.controls; }
    createForm() {
        this.homeForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            homePageID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.homePageID.setValue(obj.homePageID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.homePageID.setValue(sid);
                this.homeService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.homeForm.markAllAsTouched();
        this.submitted = true;
        if (this.homeForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.homePageID.value) === 0) {
            //Insert category
            this.homeService.insert(this.homeForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/activardubai/homepage']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.homeService.update(this.homeForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/activardubai/homepage']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddHomeAcDubComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_actdubhome_service__WEBPACK_IMPORTED_MODULE_6__["ActDubHomePageService"] }
];
AddHomeAcDubComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddHomeAcDubComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addhome',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/homepage/add/addhome.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_actdubhome_service__WEBPACK_IMPORTED_MODULE_6__["ActDubHomePageService"]])
], AddHomeAcDubComponent);



/***/ }),

/***/ "./src/app/admin/activardubai/homepage/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/activardubai/homepage/home.component.ts ***!
  \***************************************************************/
/*! exports provided: ActDubHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActDubHomeComponent", function() { return ActDubHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_actdubhome_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/actdubhome.service */ "./src/app/_services/actdubhome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ActDubHomeComponent = class ActDubHomeComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.home = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(home) {
        this.router.navigate(["admin/activardubai/homepage/edit", home]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
ActDubHomeComponent.ctorParameters = () => [
    { type: src_app_services_actdubhome_service__WEBPACK_IMPORTED_MODULE_7__["ActDubHomePageService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ActDubHomeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
ActDubHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/homepage/home.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_actdubhome_service__WEBPACK_IMPORTED_MODULE_7__["ActDubHomePageService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActDubHomeComponent);



/***/ }),

/***/ "./src/app/admin/activardubai/service/add/addservice.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/activardubai/service/add/addservice.component.ts ***!
  \************************************************************************/
/*! exports provided: AddServiceActDubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceActDubComponent", function() { return AddServiceActDubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_actdubservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/actdubservice */ "./src/app/_services/actdubservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddServiceActDubComponent = class AddServiceActDubComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.serviceForm.controls; }
    createForm() {
        this.serviceForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            serviceID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.serviceID.setValue(obj.serviceID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.serviceID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.serviceForm.markAllAsTouched();
        this.submitted = true;
        if (this.serviceForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.serviceID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.serviceForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/activardubai/service']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.serviceForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/activardubai/service']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddServiceActDubComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_actdubservice__WEBPACK_IMPORTED_MODULE_6__["ActDubServiceService"] }
];
AddServiceActDubComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddServiceActDubComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addservice',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/service/add/addservice.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_actdubservice__WEBPACK_IMPORTED_MODULE_6__["ActDubServiceService"]])
], AddServiceActDubComponent);



/***/ }),

/***/ "./src/app/admin/activardubai/service/service.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/activardubai/service/service.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActDubServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActDubServiceComponent", function() { return ActDubServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_actdubservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/actdubservice */ "./src/app/_services/actdubservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ActDubServiceComponent = class ActDubServiceComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/activardubai/service/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
ActDubServiceComponent.ctorParameters = () => [
    { type: src_app_services_actdubservice__WEBPACK_IMPORTED_MODULE_7__["ActDubServiceService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ActDubServiceComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
ActDubServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/service/service.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_actdubservice__WEBPACK_IMPORTED_MODULE_7__["ActDubServiceService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ActDubServiceComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-body{\r\n    padding: 20px;\r\n}\r\n\r\n  .advanced-pie-legend-wrapper{display: none !important;}\r\n\r\n  .dashboard-labels{\r\n      font-size: 13px;\r\n  }\r\n\r\n  ngx-charts-advanced-pie-chart:first-child{\r\nheight:200px ;\r\n  }\r\n\r\n  .content-wrapper-padding{\r\n    padding-top: 4rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7RUFFRSw2QkFBNkIsd0JBQXdCLENBQUM7O0VBRXREO01BQ0ksZUFBZTtFQUNuQjs7RUFDQTtBQUNGLGFBQWE7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4gIC5hZHZhbmNlZC1waWUtbGVnZW5kLXdyYXBwZXJ7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O31cclxuXHJcbiAgLmRhc2hib2FyZC1sYWJlbHN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgbmd4LWNoYXJ0cy1hZHZhbmNlZC1waWUtY2hhcnQ6Zmlyc3QtY2hpbGR7XHJcbmhlaWdodDoyMDBweCA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC13cmFwcGVyLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/dashboard.service */ "./src/app/_services/dashboard.service.ts");
/* harmony import */ var src_app_models_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_models/Dashboard */ "./src/app/_models/Dashboard.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/datepicker-range/datepicker-range-popup */ "./src/app/datepicker-range/datepicker-range-popup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const now = new Date();
let DashboardComponent = class DashboardComponent {
    constructor(service, ls) {
        this.service = service;
        this.ls = ls;
        this.selectedLocations = [];
        this.dashboardSummary = new src_app_models_Dashboard__WEBPACK_IMPORTED_MODULE_3__["DashboardSummary"]();
    }
    ngOnInit() {
        const date = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDate"](now.getFullYear(), now.getMonth() + 1, 1);
        this._datepicker.fromDate = date;
        //this.GetDataDashboard();
    }
    BindTodaysSales(sales, timeSlot) {
        this.chartOptions = {
            series: [
                {
                    name: "Sales",
                    data: sales
                }
            ],
            chart: {
                height: 300,
                type: "bar"
            },
            title: {
                text: ""
            },
            xaxis: {
                categories: timeSlot
            }
        };
    }
    BindMAEN(maen) {
        this.chartOptionsDonut = {
            series: [maen.morning, maen.afterNoon, maen.evening, maen.night],
            chart: {
                type: "donut"
            },
            labels: ["Morning", "Evening", "Afternoon", "Night"],
            responsive: [
                {
                    breakpoint: 250,
                    options: {
                        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
                        chart: {
                            width: 100
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
    }
    GetDashboard() {
        this.service.GetDashboard(this.ls.getSelectedLocation().locationID, new Date()).subscribe((res) => {
            this.dashboardSummary = res.summarysales;
            this.BindTodaysSales(res.todaysales.sales, res.todaysales.timeSlot);
            this.BindMAEN(res.maensales);
        }, error => {
        });
    }
    GetDataDashboard() {
        this.service.GetDashboardRange(this.ls.getSelectedLocation().locationID, this.parseDate(this._datepicker.fromDate), this.parseDate(this._datepicker.toDate)).subscribe((res) => {
            this.dashboardSummary = res.summarysales;
            this.BindTodaysSales(res.todaysales.sales, res.todaysales.timeSlot);
            this.BindMAEN(res.maensales);
        }, error => {
        });
    }
    parseDate(obj) {
        return obj.year + "-" + obj.month + "-" + obj.day;
        ;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboadService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
DashboardComponent.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["chart",] }],
    _datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_6__["NgbdDatepickerRangePopup"], { static: true },] }]
};
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")).default]
    }),
    __metadata("design:paramtypes", [src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboadService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/admin/harmanocontract/gallery/add/addgallery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/harmanocontract/gallery/add/addgallery.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddGalleryHrCntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGalleryHrCntComponent", function() { return AddGalleryHrCntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/hrcntgallery.service */ "./src/app/_services/hrcntgallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddGalleryHrCntComponent = class AddGalleryHrCntComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.galleryForm.controls; }
    createForm() {
        this.galleryForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: [''],
            statusID: [true],
            galleryID: 0,
            imagePath: [''],
            displayOrder: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.galleryID.setValue(obj.galleryID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.category.setValue(obj.category);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.galleryID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.galleryForm.markAllAsTouched();
        this.submitted = true;
        if (this.galleryForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.galleryID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.galleryForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/harmanocontract/gallery']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.galleryForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/harmanocontract/gallery']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddGalleryHrCntComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrCntGalleryService"] }
];
AddGalleryHrCntComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddGalleryHrCntComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addgallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/add/addgallery.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrCntGalleryService"]])
], AddGalleryHrCntComponent);



/***/ }),

/***/ "./src/app/admin/harmanocontract/gallery/gallery.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/harmanocontract/gallery/gallery.component.ts ***!
  \********************************************************************/
/*! exports provided: HrCntGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCntGalleryComponent", function() { return HrCntGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/hrcntgallery.service */ "./src/app/_services/hrcntgallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let HrCntGalleryComponent = class HrCntGalleryComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/harmanocontract/gallery/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
HrCntGalleryComponent.ctorParameters = () => [
    { type: src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrCntGalleryService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HrCntGalleryComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
HrCntGalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/gallery.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrCntGalleryService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HrCntGalleryComponent);



/***/ }),

/***/ "./src/app/admin/harmanocontract/homepage/add/addhome.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/harmanocontract/homepage/add/addhome.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddHomeHrCntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHomeHrCntComponent", function() { return AddHomeHrCntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_hrcnthome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/hrcnthome.service */ "./src/app/_services/hrcnthome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddHomeHrCntComponent = class AddHomeHrCntComponent {
    constructor(formBuilder, router, route, ls, ts, homeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.homeService = homeService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.homeForm.controls; }
    createForm() {
        this.homeForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            homePageID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.homePageID.setValue(obj.homePageID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.homePageID.setValue(sid);
                this.homeService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.homeForm.markAllAsTouched();
        this.submitted = true;
        if (this.homeForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.homePageID.value) === 0) {
            //Insert category
            this.homeService.insert(this.homeForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/harmanocontract/homepage']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.homeService.update(this.homeForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/harmanocontract/homepage']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddHomeHrCntComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_hrcnthome_service__WEBPACK_IMPORTED_MODULE_6__["HrCntHomePageService"] }
];
AddHomeHrCntComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddHomeHrCntComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addhome',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/homepage/add/addhome.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_hrcnthome_service__WEBPACK_IMPORTED_MODULE_6__["HrCntHomePageService"]])
], AddHomeHrCntComponent);



/***/ }),

/***/ "./src/app/admin/harmanocontract/homepage/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/harmanocontract/homepage/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HrCntHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCntHomeComponent", function() { return HrCntHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_hrcnthome_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/hrcnthome.service */ "./src/app/_services/hrcnthome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let HrCntHomeComponent = class HrCntHomeComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.home = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(home) {
        this.router.navigate(["admin/harmanocontract/homepage/edit", home]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
HrCntHomeComponent.ctorParameters = () => [
    { type: src_app_services_hrcnthome_service__WEBPACK_IMPORTED_MODULE_7__["HrCntHomePageService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HrCntHomeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
HrCntHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/homepage/home.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_hrcnthome_service__WEBPACK_IMPORTED_MODULE_7__["HrCntHomePageService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HrCntHomeComponent);



/***/ }),

/***/ "./src/app/admin/harmanocontract/service/add/addservice.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/harmanocontract/service/add/addservice.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddServiceHrCntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceHrCntComponent", function() { return AddServiceHrCntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_hrcntservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/hrcntservices.service */ "./src/app/_services/hrcntservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddServiceHrCntComponent = class AddServiceHrCntComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.serviceForm.controls; }
    createForm() {
        this.serviceForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            serviceID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.serviceID.setValue(obj.serviceID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.serviceID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.serviceForm.markAllAsTouched();
        this.submitted = true;
        if (this.serviceForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.serviceID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.serviceForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/harmanocontract/service']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.serviceForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/harmanocontract/service']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddServiceHrCntComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_hrcntservices_service__WEBPACK_IMPORTED_MODULE_6__["HrCntServiceService"] }
];
AddServiceHrCntComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddServiceHrCntComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addservice',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/service/add/addservice.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_hrcntservices_service__WEBPACK_IMPORTED_MODULE_6__["HrCntServiceService"]])
], AddServiceHrCntComponent);



/***/ }),

/***/ "./src/app/admin/harmanocontract/service/service.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/harmanocontract/service/service.component.ts ***!
  \********************************************************************/
/*! exports provided: HrCntServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCntServiceComponent", function() { return HrCntServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_hrcntservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/hrcntservices.service */ "./src/app/_services/hrcntservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let HrCntServiceComponent = class HrCntServiceComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/harmanocontract/service/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
HrCntServiceComponent.ctorParameters = () => [
    { type: src_app_services_hrcntservices_service__WEBPACK_IMPORTED_MODULE_7__["HrCntServiceService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HrCntServiceComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
HrCntServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/service/service.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_hrcntservices_service__WEBPACK_IMPORTED_MODULE_7__["HrCntServiceService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HrCntServiceComponent);



/***/ }),

/***/ "./src/app/admin/harmanorepair/gallery/add/addgallery.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/harmanorepair/gallery/add/addgallery.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddGalleryHrRprComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGalleryHrRprComponent", function() { return AddGalleryHrRprComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/hrrprgallery.service */ "./src/app/_services/hrrprgallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddGalleryHrRprComponent = class AddGalleryHrRprComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.galleryForm.controls; }
    createForm() {
        this.galleryForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: [''],
            statusID: [true],
            galleryID: 0,
            imagePath: [''],
            displayOrder: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.galleryID.setValue(obj.galleryID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.category.setValue(obj.category);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.galleryID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.galleryForm.markAllAsTouched();
        this.submitted = true;
        if (this.galleryForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.galleryID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.galleryForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/harmanorepair/gallery']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.galleryForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/harmanorepair/gallery']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddGalleryHrRprComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrRprGalleryService"] }
];
AddGalleryHrRprComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddGalleryHrRprComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addgallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/add/addgallery.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrRprGalleryService"]])
], AddGalleryHrRprComponent);



/***/ }),

/***/ "./src/app/admin/harmanorepair/gallery/gallery.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/harmanorepair/gallery/gallery.component.ts ***!
  \******************************************************************/
/*! exports provided: HrRprGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRprGalleryComponent", function() { return HrRprGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/hrrprgallery.service */ "./src/app/_services/hrrprgallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let HrRprGalleryComponent = class HrRprGalleryComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/harmanorepair/gallery/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
HrRprGalleryComponent.ctorParameters = () => [
    { type: src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrRprGalleryService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HrRprGalleryComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
HrRprGalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/gallery.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrRprGalleryService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HrRprGalleryComponent);



/***/ }),

/***/ "./src/app/admin/harmanorepair/homepage/add/addhome.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/harmanorepair/homepage/add/addhome.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddHomeHrRprComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHomeHrRprComponent", function() { return AddHomeHrRprComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_hrrprhome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/hrrprhome.service */ "./src/app/_services/hrrprhome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddHomeHrRprComponent = class AddHomeHrRprComponent {
    constructor(formBuilder, router, route, ls, ts, homeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.homeService = homeService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.homeForm.controls; }
    createForm() {
        this.homeForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            homePageID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.homePageID.setValue(obj.homePageID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.homePageID.setValue(sid);
                this.homeService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.homeForm.markAllAsTouched();
        this.submitted = true;
        if (this.homeForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.homePageID.value) === 0) {
            //Insert category
            this.homeService.insert(this.homeForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/harmanorepair/homepage']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.homeService.update(this.homeForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/harmanorepair/homepage']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddHomeHrRprComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_hrrprhome_service__WEBPACK_IMPORTED_MODULE_6__["HrRprHomePageService"] }
];
AddHomeHrRprComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddHomeHrRprComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addhome',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/homepage/add/addhome.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_hrrprhome_service__WEBPACK_IMPORTED_MODULE_6__["HrRprHomePageService"]])
], AddHomeHrRprComponent);



/***/ }),

/***/ "./src/app/admin/harmanorepair/homepage/home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/harmanorepair/homepage/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HrRprHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRprHomeComponent", function() { return HrRprHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_hrrprhome_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/hrrprhome.service */ "./src/app/_services/hrrprhome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let HrRprHomeComponent = class HrRprHomeComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.home = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(home) {
        this.router.navigate(["admin/harmanorepair/homepage/edit", home]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
HrRprHomeComponent.ctorParameters = () => [
    { type: src_app_services_hrrprhome_service__WEBPACK_IMPORTED_MODULE_7__["HrRprHomePageService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HrRprHomeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
HrRprHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/homepage/home.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_hrrprhome_service__WEBPACK_IMPORTED_MODULE_7__["HrRprHomePageService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HrRprHomeComponent);



/***/ }),

/***/ "./src/app/admin/harmanorepair/service/add/addservices.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/harmanorepair/service/add/addservices.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddServiceHrRprComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceHrRprComponent", function() { return AddServiceHrRprComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_hrrprservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/hrrprservices.service */ "./src/app/_services/hrrprservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddServiceHrRprComponent = class AddServiceHrRprComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.serviceForm.controls; }
    createForm() {
        this.serviceForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            serviceID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.serviceID.setValue(obj.serviceID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.serviceID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.serviceForm.markAllAsTouched();
        this.submitted = true;
        if (this.serviceForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.serviceID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.serviceForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/harmanorepair/service']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.serviceForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/harmanorepair/service']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddServiceHrRprComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_hrrprservices_service__WEBPACK_IMPORTED_MODULE_6__["hrrprservices"] }
];
AddServiceHrRprComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddServiceHrRprComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addservices',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addservices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/service/add/addservices.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_hrrprservices_service__WEBPACK_IMPORTED_MODULE_6__["hrrprservices"]])
], AddServiceHrRprComponent);



/***/ }),

/***/ "./src/app/admin/harmanorepair/service/service.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/harmanorepair/service/service.component.ts ***!
  \******************************************************************/
/*! exports provided: HrRprServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRprServiceComponent", function() { return HrRprServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var _services_hrrprservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/hrrprservices.service */ "./src/app/_services/hrrprservices.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let HrRprServiceComponent = class HrRprServiceComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/harmanorepair/service/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
HrRprServiceComponent.ctorParameters = () => [
    { type: _services_hrrprservices_service__WEBPACK_IMPORTED_MODULE_7__["hrrprservices"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HrRprServiceComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
HrRprServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/service/service.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [_services_hrrprservices_service__WEBPACK_IMPORTED_MODULE_7__["hrrprservices"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HrRprServiceComponent);



/***/ }),

/***/ "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BsYW5lcmFncm91cC9uZXdzZXZlbnQvYWRkbmV3c2V2ZW50L2FkZG5ld3NldmVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddnewseventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewseventComponent", function() { return AddnewseventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/plngrpnewsalert.service */ "./src/app/_services/plngrpnewsalert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddnewseventComponent = class AddnewseventComponent {
    constructor(formBuilder, router, route, ls, ts, newseventService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.newseventService = newseventService;
        this.submitted = false;
        this.loading = false;
        this.loadingCategory = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedCategory();
    }
    get f() { return this.newsandeventForm.controls; }
    createForm() {
        this.newsandeventForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pagename: [''],
            description: [''],
            arabicDescription: [''],
            statusID: [true],
            newsEventID: 0,
            image: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.name.setValue(obj.name);
        this.f.arabicName.setValue(obj.arabicName);
        this.f.pagename.setValue(obj.pagename);
        this.f.newsEventID.setValue(obj.newsEventID);
        this.f.image.setValue(obj.image);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.image;
    }
    setSelectedCategory() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingCategory = true;
                this.f.newsEventID.setValue(sid);
                this.newseventService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingCategory = false;
                });
            }
        });
    }
    onSubmit() {
        this.newsandeventForm.markAllAsTouched();
        this.submitted = true;
        if (this.newsandeventForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.image.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.newsEventID.value) === 0) {
            //Insert category
            this.newseventService.insert(this.newsandeventForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/planeragroup/newsevent']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.newseventService.update(this.newsandeventForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/planeragroup/newsevent']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddnewseventComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_6__["PlnGrpNewAlertService"] }
];
AddnewseventComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddnewseventComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addnewsevent',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addnewsevent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./addnewsevent.component.css */ "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_6__["PlnGrpNewAlertService"]])
], AddnewseventComponent);



/***/ }),

/***/ "./src/app/admin/planeragroup/newsevent/newsevent.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/planeragroup/newsevent/newsevent.component.ts ***!
  \*********************************************************************/
/*! exports provided: newseventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newseventComponent", function() { return newseventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/plngrpnewsalert.service */ "./src/app/_services/plngrpnewsalert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let newseventComponent = class newseventComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.categories = [];
        // this.selectedBrand = this.ls.getSelectedBrand().brandID;
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(newsevent) {
        this.router.navigate(["admin/planeragroup/newsevent/edit", newsevent]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
newseventComponent.ctorParameters = () => [
    { type: src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_7__["PlnGrpNewAlertService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
newseventComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
newseventComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-newsevent',
        template: __importDefault(__webpack_require__(/*! raw-loader!./newsevent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/newsevent.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_7__["PlnGrpNewAlertService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], newseventComponent);



/***/ }),

/***/ "./src/app/admin/planerainterior/gallery/add/addgallery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/planerainterior/gallery/add/addgallery.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGalleryComponent", function() { return AddGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/plnintgallery */ "./src/app/_services/plnintgallery.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddGalleryComponent = class AddGalleryComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.galleryForm.controls; }
    createForm() {
        this.galleryForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: [''],
            statusID: [true],
            galleryID: 0,
            imagePath: [''],
            displayOrder: [''],
            category: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.galleryID.setValue(obj.galleryID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.category.setValue(obj.category);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.galleryID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        debugger;
        this.galleryForm.markAllAsTouched();
        this.submitted = true;
        if (this.galleryForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.galleryID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.galleryForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/planerainterior/gallery']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.galleryForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/planerainterior/gallery']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddGalleryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_6__["PlnIntGalleryService"] }
];
AddGalleryComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddGalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addgallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/add/addgallery.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_6__["PlnIntGalleryService"]])
], AddGalleryComponent);



/***/ }),

/***/ "./src/app/admin/planerainterior/gallery/gallery.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/planerainterior/gallery/gallery.component.ts ***!
  \********************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/plnintgallery */ "./src/app/_services/plnintgallery.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let GalleryComponent = class GalleryComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/planerainterior/gallery/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
GalleryComponent.ctorParameters = () => [
    { type: src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_7__["PlnIntGalleryService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GalleryComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
GalleryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/gallery.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_7__["PlnIntGalleryService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], GalleryComponent);



/***/ }),

/***/ "./src/app/admin/planerainterior/homepage/add/addhome.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/planerainterior/homepage/add/addhome.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddHomePlnIntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHomePlnIntComponent", function() { return AddHomePlnIntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_plninthome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/plninthome.service */ "./src/app/_services/plninthome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddHomePlnIntComponent = class AddHomePlnIntComponent {
    constructor(formBuilder, router, route, ls, ts, homeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.homeService = homeService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.homeForm.controls; }
    createForm() {
        this.homeForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            homePageID: 0,
            imagePath: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.homePageID.setValue(obj.homePageID);
        this.f.imagePath.setValue(obj.imagePath);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.imagePath;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.homePageID.setValue(sid);
                this.homeService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.homeForm.markAllAsTouched();
        this.submitted = true;
        if (this.homeForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        if (parseInt(this.f.homePageID.value) === 0) {
            //Insert category
            this.homeService.insert(this.homeForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/planerainterior/homepage']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.homeService.update(this.homeForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/planerainterior/homepage']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddHomePlnIntComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_plninthome_service__WEBPACK_IMPORTED_MODULE_6__["PlnIntHomePageService"] }
];
AddHomePlnIntComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddHomePlnIntComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addhome',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/homepage/add/addhome.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_plninthome_service__WEBPACK_IMPORTED_MODULE_6__["PlnIntHomePageService"]])
], AddHomePlnIntComponent);



/***/ }),

/***/ "./src/app/admin/planerainterior/homepage/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/planerainterior/homepage/home.component.ts ***!
  \******************************************************************/
/*! exports provided: PlnIntHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlnIntHomeComponent", function() { return PlnIntHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_plninthome_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/plninthome.service */ "./src/app/_services/plninthome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let PlnIntHomeComponent = class PlnIntHomeComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.home = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(home) {
        this.router.navigate(["admin/planerainterior/homepage/edit", home]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
PlnIntHomeComponent.ctorParameters = () => [
    { type: src_app_services_plninthome_service__WEBPACK_IMPORTED_MODULE_7__["PlnIntHomePageService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PlnIntHomeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
PlnIntHomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/homepage/home.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_plninthome_service__WEBPACK_IMPORTED_MODULE_7__["PlnIntHomePageService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PlnIntHomeComponent);



/***/ }),

/***/ "./src/app/admin/planerainterior/service/add/addservice.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/planerainterior/service/add/addservice.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddServicePlnIntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicePlnIntComponent", function() { return AddServicePlnIntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var src_app_services_plnintservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/plnintservice */ "./src/app/_services/plnintservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let AddServicePlnIntComponent = class AddServicePlnIntComponent {
    constructor(formBuilder, router, route, ls, ts, galleryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.ls = ls;
        this.ts = ts;
        this.galleryService = galleryService;
        this.submitted = false;
        this.loading = false;
        this.loadingGallery = false;
        this.ButtonText = "Save";
        this.createForm();
    }
    ngOnInit() {
        this.setSelectedGallery();
    }
    get f() { return this.serviceForm.controls; }
    createForm() {
        this.serviceForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            arabicDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            statusID: [true],
            serviceID: 0,
            imagePath: [''],
            //iconImage: [''],
            displayOrder: [''],
        });
    }
    editForm(obj) {
        this.f.title.setValue(obj.title);
        this.f.arabicTitle.setValue(obj.arabicTitle);
        this.f.description.setValue(obj.description);
        this.f.arabicDescription.setValue(obj.arabicDescription);
        this.f.serviceID.setValue(obj.serviceID);
        this.f.imagePath.setValue(obj.imagePath);
        //this.f.iconImage.setValue(obj.iconImage);
        this.f.displayOrder.setValue(obj.displayOrder);
        this.f.statusID.setValue(obj.statusID === 1 ? true : false);
        this.imgComp.imageUrl = obj.image;
        //this.image.imageUrl = obj.iconImage;
    }
    setSelectedGallery() {
        this.route.paramMap.subscribe(param => {
            const sid = +param.get('id');
            if (sid) {
                this.loadingGallery = true;
                this.f.serviceID.setValue(sid);
                this.galleryService.getById(sid).subscribe(res => {
                    //Set Forms
                    this.editForm(res);
                    this.loadingGallery = false;
                });
            }
        });
    }
    onSubmit() {
        this.serviceForm.markAllAsTouched();
        this.submitted = true;
        if (this.serviceForm.invalid) {
            return;
        }
        this.loading = true;
        this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
        this.f.imagePath.setValue(this.imgComp.imageUrl);
        //this.f.iconImage.setValue(this.image.imageUrl);
        if (parseInt(this.f.serviceID.value) === 0) {
            //Insert category
            this.galleryService.insert(this.serviceForm.value).subscribe(data => {
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record added successfully.");
                    this.router.navigate(['/admin/planerainterior/service']);
                }
                this.loading = false;
            }, error => {
                this.ts.showError("Error", "Failed to insert record.");
                this.loading = false;
            });
        }
        else {
            //Update category
            this.galleryService.update(this.serviceForm.value).subscribe(data => {
                this.loading = false;
                if (data != 0) {
                    this.ts.showSuccess("Success", "Record updated successfully.");
                    this.router.navigate(['/admin/planerainterior/service']);
                }
            }, error => {
                this.ts.showError("Error", "Failed to update record.");
                this.loading = false;
            });
        }
    }
};
AddServicePlnIntComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: src_app_services_plnintservice__WEBPACK_IMPORTED_MODULE_6__["PlnIntServiceService"] }
];
AddServicePlnIntComponent.propDecorators = {
    imgComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], { static: true },] }]
};
AddServicePlnIntComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addservice',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addservice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/service/add/addservice.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        src_app_services_plnintservice__WEBPACK_IMPORTED_MODULE_6__["PlnIntServiceService"]])
], AddServicePlnIntComponent);



/***/ }),

/***/ "./src/app/admin/planerainterior/service/service.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/planerainterior/service/service.component.ts ***!
  \********************************************************************/
/*! exports provided: PlnIntServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlnIntServiceComponent", function() { return PlnIntServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/sortable.directive */ "./src/app/_directives/sortable.directive.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/ExportExcel/excel.service */ "./src/ExportExcel/excel.service.ts");
/* harmony import */ var src_app_services_plnintservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/plnintservice */ "./src/app/_services/plnintservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let PlnIntServiceComponent = class PlnIntServiceComponent {
    constructor(service, excelService, ls, ts, tss, router) {
        this.service = service;
        this.excelService = excelService;
        this.ls = ls;
        this.ts = ts;
        this.tss = tss;
        this.router = router;
        this.gallery = [];
        this.loading$ = service.loading$;
        this.submit = false;
    }
    ngOnInit() {
        this.getData();
    }
    exportAsXLSX() {
        this.service.ExportList().subscribe((res) => {
            this.excelService.exportAsExcelFile(res, 'Report_Export');
        }, error => {
            this.ts.showError("Error", "Failed to export");
        });
    }
    getData() {
        this.service.getAllData();
        this.data$ = this.service.data$;
        this.total$ = this.service.total$;
        this.loading$ = this.service.loading$;
    }
    onSort({ column, direction }) {
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    Edit(gallery) {
        this.router.navigate(["admin/planerainterior/service/edit", gallery]);
    }
    Delete(obj) {
        this.service.delete(obj).subscribe((res) => {
            if (res != 0) {
                this.ts.showSuccess("Success", "Record deleted successfully.");
                this.getData();
            }
            else {
                this.ts.showError("Error", "Failed to delete record.");
            }
        }, error => {
            this.ts.showError("Error", "Failed to delete record.");
        });
    }
};
PlnIntServiceComponent.ctorParameters = () => [
    { type: src_app_services_plnintservice__WEBPACK_IMPORTED_MODULE_7__["PlnIntServiceService"] },
    { type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] },
    { type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PlnIntServiceComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"],] }]
};
PlnIntServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/service/service.component.html")).default,
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
    }),
    __metadata("design:paramtypes", [src_app_services_plnintservice__WEBPACK_IMPORTED_MODULE_7__["PlnIntServiceService"],
        src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
        src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
        src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PlnIntServiceComponent);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./imageupload/imageupload.component */ "./src/app/imageupload/imageupload.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./datepicker-range/datepicker-range-popup */ "./src/app/datepicker-range/datepicker-range-popup.ts");
/* harmony import */ var _admin_planeragroup_newsevent_newsevent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/planeragroup/newsevent/newsevent.component */ "./src/app/admin/planeragroup/newsevent/newsevent.component.ts");
/* harmony import */ var _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/planeragroup/newsevent/addnewsevent/addnewsevent.component */ "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.ts");
/* harmony import */ var _admin_harmanorepair_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/harmanorepair/gallery/gallery.component */ "./src/app/admin/harmanorepair/gallery/gallery.component.ts");
/* harmony import */ var _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/harmanorepair/gallery/add/addgallery.component */ "./src/app/admin/harmanorepair/gallery/add/addgallery.component.ts");
/* harmony import */ var _admin_harmanorepair_service_service_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/harmanorepair/service/service.component */ "./src/app/admin/harmanorepair/service/service.component.ts");
/* harmony import */ var _admin_harmanorepair_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/harmanorepair/service/add/addservices.component */ "./src/app/admin/harmanorepair/service/add/addservices.component.ts");
/* harmony import */ var _admin_harmanocontract_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/harmanocontract/gallery/gallery.component */ "./src/app/admin/harmanocontract/gallery/gallery.component.ts");
/* harmony import */ var _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/harmanocontract/gallery/add/addgallery.component */ "./src/app/admin/harmanocontract/gallery/add/addgallery.component.ts");
/* harmony import */ var _admin_planerainterior_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ././admin/planerainterior/gallery/gallery.component */ "./src/app/admin/planerainterior/gallery/gallery.component.ts");
/* harmony import */ var _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ././admin/planerainterior/gallery/add/addgallery.component */ "./src/app/admin/planerainterior/gallery/add/addgallery.component.ts");
/* harmony import */ var _admin_planerainterior_service_service_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ././admin/planerainterior/service/service.component */ "./src/app/admin/planerainterior/service/service.component.ts");
/* harmony import */ var _admin_planerainterior_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ././admin/planerainterior/service/add/addservice.component */ "./src/app/admin/planerainterior/service/add/addservice.component.ts");
/* harmony import */ var _admin_activarbahrain_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/activarbahrain/gallery/gallery.component */ "./src/app/admin/activarbahrain/gallery/gallery.component.ts");
/* harmony import */ var _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/activarbahrain/gallery/add/addgallery.component */ "./src/app/admin/activarbahrain/gallery/add/addgallery.component.ts");
/* harmony import */ var _admin_activarbahrain_service_service_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/activarbahrain/service/service.component */ "./src/app/admin/activarbahrain/service/service.component.ts");
/* harmony import */ var _admin_activarbahrain_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/activarbahrain/service/add/addservice.component */ "./src/app/admin/activarbahrain/service/add/addservice.component.ts");
/* harmony import */ var _admin_activarbahrain_homepage_home_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/activarbahrain/homepage/home.component */ "./src/app/admin/activarbahrain/homepage/home.component.ts");
/* harmony import */ var _admin_activarbahrain_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/activarbahrain/homepage/add/addhome.component */ "./src/app/admin/activarbahrain/homepage/add/addhome.component.ts");
/* harmony import */ var _admin_activardubai_service_service_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/activardubai/service/service.component */ "./src/app/admin/activardubai/service/service.component.ts");
/* harmony import */ var _admin_activardubai_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/activardubai/service/add/addservice.component */ "./src/app/admin/activardubai/service/add/addservice.component.ts");
/* harmony import */ var _admin_activardubai_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/activardubai/gallery/gallery.component */ "./src/app/admin/activardubai/gallery/gallery.component.ts");
/* harmony import */ var _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/activardubai/gallery/add/addgallery.component */ "./src/app/admin/activardubai/gallery/add/addgallery.component.ts");
/* harmony import */ var _admin_harmanocontract_service_service_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ././admin/harmanocontract/service/service.component */ "./src/app/admin/harmanocontract/service/service.component.ts");
/* harmony import */ var _admin_harmanocontract_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ././admin/harmanocontract/service/add/addservice.component */ "./src/app/admin/harmanocontract/service/add/addservice.component.ts");
/* harmony import */ var _admin_planerainterior_homepage_home_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ././admin/planerainterior/homepage/home.component */ "./src/app/admin/planerainterior/homepage/home.component.ts");
/* harmony import */ var _admin_planerainterior_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ././admin/planerainterior/homepage/add/addhome.component */ "./src/app/admin/planerainterior/homepage/add/addhome.component.ts");
/* harmony import */ var _admin_activardubai_homepage_home_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ././admin/activardubai/homepage/home.component */ "./src/app/admin/activardubai/homepage/home.component.ts");
/* harmony import */ var _admin_activardubai_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ././admin/activardubai/homepage/add/addhome.component */ "./src/app/admin/activardubai/homepage/add/addhome.component.ts");
/* harmony import */ var _admin_harmanocontract_homepage_home_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ././admin/harmanocontract/homepage/home.component */ "./src/app/admin/harmanocontract/homepage/home.component.ts");
/* harmony import */ var _admin_harmanocontract_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ././admin/harmanocontract/homepage/add/addhome.component */ "./src/app/admin/harmanocontract/homepage/add/addhome.component.ts");
/* harmony import */ var _admin_harmanorepair_homepage_home_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ././admin/harmanorepair/homepage/home.component */ "./src/app/admin/harmanorepair/homepage/home.component.ts");
/* harmony import */ var _admin_harmanorepair_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ././admin/harmanorepair/homepage/add/addhome.component */ "./src/app/admin/harmanorepair/homepage/add/addhome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























//import { PlnGrpServiceComponent } from '././admin/planeragroup/service/service.component';
//import { AddServicePlnGrpComponent } from '././admin/planeragroup/service/add/addservice.component';






























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_16__["ImageuploadComponent"],
            _datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__["NgbdDatepickerRangePopup"],
            _admin_planeragroup_newsevent_newsevent_component__WEBPACK_IMPORTED_MODULE_22__["newseventComponent"],
            _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__["AddnewseventComponent"],
            //PlnGrpServiceComponent,
            _admin_harmanorepair_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_24__["HrRprGalleryComponent"],
            _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_25__["AddGalleryHrRprComponent"],
            _admin_planerainterior_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"],
            _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__["AddGalleryComponent"],
            _admin_activarbahrain_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__["ActBahGalleryComponent"],
            _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__["AddGalleryActBahComponent"],
            _admin_activardubai_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_42__["ActDubGalleryComponent"],
            _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_43__["AddGalleryActDubComponent"],
            _admin_harmanocontract_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_28__["HrCntGalleryComponent"],
            _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__["AddGalleryHrCntComponent"],
            _admin_activarbahrain_service_service_component__WEBPACK_IMPORTED_MODULE_36__["ActBahServiceComponent"],
            _admin_activarbahrain_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_37__["AddServiceActBahComponent"],
            _admin_activardubai_service_service_component__WEBPACK_IMPORTED_MODULE_40__["ActDubServiceComponent"],
            _admin_activardubai_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_41__["AddServiceActDubComponent"],
            _admin_planerainterior_service_service_component__WEBPACK_IMPORTED_MODULE_32__["PlnIntServiceComponent"],
            _admin_planerainterior_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_33__["AddServicePlnIntComponent"],
            _admin_harmanocontract_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_45__["AddServiceHrCntComponent"],
            _admin_harmanocontract_service_service_component__WEBPACK_IMPORTED_MODULE_44__["HrCntServiceComponent"],
            _admin_harmanorepair_service_service_component__WEBPACK_IMPORTED_MODULE_26__["HrRprServiceComponent"],
            _admin_harmanorepair_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_27__["AddServiceHrRprComponent"],
            _admin_planerainterior_homepage_home_component__WEBPACK_IMPORTED_MODULE_46__["PlnIntHomeComponent"],
            _admin_planerainterior_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_47__["AddHomePlnIntComponent"],
            _admin_activarbahrain_homepage_home_component__WEBPACK_IMPORTED_MODULE_38__["ActBahHomeComponent"],
            _admin_activarbahrain_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_39__["AddHomeAcBahComponent"],
            _admin_activardubai_homepage_home_component__WEBPACK_IMPORTED_MODULE_48__["ActDubHomeComponent"],
            _admin_activardubai_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_49__["AddHomeAcDubComponent"],
            _admin_harmanocontract_homepage_home_component__WEBPACK_IMPORTED_MODULE_50__["HrCntHomeComponent"],
            _admin_harmanocontract_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_51__["AddHomeHrCntComponent"],
            _admin_harmanorepair_homepage_home_component__WEBPACK_IMPORTED_MODULE_52__["HrRprHomeComponent"],
            _admin_harmanorepair_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_53__["AddHomeHrRprComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__["NgApexchartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], pathMatch: 'full' },
                {
                    path: 'admin', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
                    children: [
                        { path: 'dashboard', component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
                        { path: 'planeragroup/newsevent', component: _admin_planeragroup_newsevent_newsevent_component__WEBPACK_IMPORTED_MODULE_22__["newseventComponent"] },
                        { path: 'planeragroup/newsevent/add', component: _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__["AddnewseventComponent"] },
                        { path: 'planeragroup/newsevent/edit/:id', component: _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__["AddnewseventComponent"] },
                        //{ path: 'planeragroup/service', component: PlnGrpServiceComponent },
                        //{ path: 'planeragroup/service/add', component: AddServicePlnGrpComponent },
                        //{ path: 'planeragroup/service/edit/:id', component: AddServicePlnGrpComponent },
                        { path: 'harmanorepair/gallery', component: _admin_harmanorepair_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_24__["HrRprGalleryComponent"] },
                        { path: 'harmanorepair/gallery/add', component: _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_25__["AddGalleryHrRprComponent"] },
                        { path: 'harmanorepair/gallery/edit/:id', component: _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_25__["AddGalleryHrRprComponent"] },
                        { path: 'harmanorepair/service', component: _admin_harmanorepair_service_service_component__WEBPACK_IMPORTED_MODULE_26__["HrRprServiceComponent"] },
                        { path: 'harmanorepair/service/add', component: _admin_harmanorepair_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_27__["AddServiceHrRprComponent"] },
                        { path: 'harmanorepair/service/edit/:id', component: _admin_harmanorepair_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_27__["AddServiceHrRprComponent"] },
                        { path: 'harmanocontract/service', component: _admin_harmanocontract_service_service_component__WEBPACK_IMPORTED_MODULE_44__["HrCntServiceComponent"] },
                        { path: 'harmanocontract/service/add', component: _admin_harmanocontract_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_45__["AddServiceHrCntComponent"] },
                        { path: 'harmanocontract/service/edit/:id', component: _admin_harmanocontract_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_45__["AddServiceHrCntComponent"] },
                        { path: 'planerainterior/gallery', component: _admin_planerainterior_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"] },
                        { path: 'planerainterior/gallery/add', component: _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__["AddGalleryComponent"] },
                        { path: 'planerainterior/gallery/edit/:id', component: _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__["AddGalleryComponent"] },
                        { path: 'planerainterior/service', component: _admin_planerainterior_service_service_component__WEBPACK_IMPORTED_MODULE_32__["PlnIntServiceComponent"] },
                        { path: 'planerainterior/service/add', component: _admin_planerainterior_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_33__["AddServicePlnIntComponent"] },
                        { path: 'planerainterior/service/edit/:id', component: _admin_planerainterior_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_33__["AddServicePlnIntComponent"] },
                        { path: 'planerainterior/homepage', component: _admin_planerainterior_homepage_home_component__WEBPACK_IMPORTED_MODULE_46__["PlnIntHomeComponent"] },
                        { path: 'planerainterior/homepage/add', component: _admin_planerainterior_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_47__["AddHomePlnIntComponent"] },
                        { path: 'planerainterior/homepage/edit/:id', component: _admin_planerainterior_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_47__["AddHomePlnIntComponent"] },
                        { path: 'activarbahrain/gallery', component: _admin_activarbahrain_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__["ActBahGalleryComponent"] },
                        { path: 'activarbahrain/gallery/add', component: _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__["AddGalleryActBahComponent"] },
                        { path: 'activarbahrain/gallery/edit/:id', component: _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__["AddGalleryActBahComponent"] },
                        { path: 'activarbahrain/service', component: _admin_activarbahrain_service_service_component__WEBPACK_IMPORTED_MODULE_36__["ActBahServiceComponent"] },
                        { path: 'activarbahrain/service/add', component: _admin_activarbahrain_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_37__["AddServiceActBahComponent"] },
                        { path: 'activarbahrain/service/edit/:id', component: _admin_activarbahrain_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_37__["AddServiceActBahComponent"] },
                        { path: 'activarbahrain/homepage', component: _admin_activarbahrain_homepage_home_component__WEBPACK_IMPORTED_MODULE_38__["ActBahHomeComponent"] },
                        { path: 'activarbahrain/homepage/add', component: _admin_activarbahrain_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_39__["AddHomeAcBahComponent"] },
                        { path: 'activarbahrain/homepage/edit/:id', component: _admin_activarbahrain_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_39__["AddHomeAcBahComponent"] },
                        { path: 'activardubai/gallery', component: _admin_activardubai_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_42__["ActDubGalleryComponent"] },
                        { path: 'activardubai/gallery/add', component: _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_43__["AddGalleryActDubComponent"] },
                        { path: 'activardubai/gallery/edit/:id', component: _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_43__["AddGalleryActDubComponent"] },
                        { path: 'activardubai/service', component: _admin_activardubai_service_service_component__WEBPACK_IMPORTED_MODULE_40__["ActDubServiceComponent"] },
                        { path: 'activardubai/service/add', component: _admin_activardubai_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_41__["AddServiceActDubComponent"] },
                        { path: 'activardubai/service/edit/:id', component: _admin_activardubai_service_add_addservice_component__WEBPACK_IMPORTED_MODULE_41__["AddServiceActDubComponent"] },
                        { path: 'harmanocontract/gallery', component: _admin_harmanocontract_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_28__["HrCntGalleryComponent"] },
                        { path: 'harmanocontract/gallery/add', component: _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__["AddGalleryHrCntComponent"] },
                        { path: 'harmanocontract/gallery/edit/:id', component: _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__["AddGalleryHrCntComponent"] },
                        { path: 'activardubai/homepage', component: _admin_activardubai_homepage_home_component__WEBPACK_IMPORTED_MODULE_48__["ActDubHomeComponent"] },
                        { path: 'activardubai/homepage/add', component: _admin_activardubai_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_49__["AddHomeAcDubComponent"] },
                        { path: 'activardubai/homepage/edit/:id', component: _admin_activardubai_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_49__["AddHomeAcDubComponent"] },
                        { path: 'harmanocontract/homepage', component: _admin_harmanocontract_homepage_home_component__WEBPACK_IMPORTED_MODULE_50__["HrCntHomeComponent"] },
                        { path: 'harmanocontract/homepage/add', component: _admin_harmanocontract_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_51__["AddHomeHrCntComponent"] },
                        { path: 'harmanocontract/homepage/edit/:id', component: _admin_harmanocontract_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_51__["AddHomeHrCntComponent"] },
                        { path: 'harmanorepair/homepage', component: _admin_harmanorepair_homepage_home_component__WEBPACK_IMPORTED_MODULE_52__["HrRprHomeComponent"] },
                        { path: 'harmanorepair/homepage/add', component: _admin_harmanorepair_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_53__["AddHomeHrRprComponent"] },
                        { path: 'harmanorepair/homepage/edit/:id', component: _admin_harmanorepair_homepage_add_addhome_component__WEBPACK_IMPORTED_MODULE_53__["AddHomeHrRprComponent"] },
                    ]
                }
            ]),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ],
        providers: [],
        exports: [_datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__["NgbdDatepickerRangePopup"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__["NgbdDatepickerRangePopup"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/datepicker-range/datepicker-range-popup.ts":
/*!************************************************************!*\
  !*** ./src/app/datepicker-range/datepicker-range-popup.ts ***!
  \************************************************************/
/*! exports provided: NgbdDatepickerRangePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerRangePopup", function() { return NgbdDatepickerRangePopup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let NgbdDatepickerRangePopup = class NgbdDatepickerRangePopup {
    constructor(calendar, formatter) {
        //var date = new Date();
        //this.fromDate = new NgbDate(date.getFullYear(), date.getMonth(), 1);
        //this.toDate = new NgbDate(date.getFullYear(), date.getMonth() + 1 ,0);
        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
    }
};
NgbdDatepickerRangePopup.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] }
];
NgbdDatepickerRangePopup = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'ngbd-datepicker-range-popup',
        template: __importDefault(__webpack_require__(/*! raw-loader!./datepicker-range-popup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/datepicker-range/datepicker-range-popup.html")).default,
        styles: ["\n    .form-group.hidden {\n      width: 0;\n      margin: 0;\n      border: none;\n      padding: 0;\n    }\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n  "]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]])
], NgbdDatepickerRangePopup);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/imageupload/imageupload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/imageupload/imageupload.component.ts ***!
  \******************************************************/
/*! exports provided: ImageuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageuploadComponent", function() { return ImageuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ImageuploadComponent = class ImageuploadComponent {
    constructor(fb, cd) {
        this.fb = fb;
        this.cd = cd;
        this.imageUrl = "https://marnpossastorage.blob.core.windows.net/marnpos-v2-images/default-product.PNG";
        this.editFile = true;
        this.removeUpload = false;
        this.currentFile = null;
        this.registrationForm = this.fb.group({
            file: [null]
        });
    }
    onFileChange(event) {
        let reader = new FileReader(); // HTML5 FileReader API
        let file = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file);
            // When file uploads set it to file formcontrol
            reader.onload = () => {
                this.imageUrl = reader.result;
                this.registrationForm.patchValue({
                    file: reader.result
                });
                this.editFile = false;
                this.removeUpload = true;
            };
            // ChangeDetectorRef since file is loading outside the zone
            this.cd.markForCheck();
        }
    }
};
ImageuploadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
ImageuploadComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-imageupload',
        template: __importDefault(__webpack_require__(/*! raw-loader!./imageupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageupload/imageupload.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], ImageuploadComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-bar-inner-spaces{\r\n  display: -webkit-box;  \r\n}\r\n\r\n.horizontal-menu .bottom-navbar .page-navigation > .nav-item{\r\n    margin-right: 10px;\r\n}\r\n\r\n.flag-icon-us {\r\n  font-size: 17PX !important;\r\n}\r\n\r\n.flag-icon-sa {\r\n  font-size: 17PX !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXItaW5uZXItc3BhY2Vze1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgXHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLW1lbnUgLmJvdHRvbS1uYXZiYXIgLnBhZ2UtbmF2aWdhdGlvbiA+IC5uYXYtaXRlbXtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZmxhZy1pY29uLXVzIHtcclxuICBmb250LXNpemU6IDE3UFggIWltcG9ydGFudDtcclxufVxyXG4uZmxhZy1pY29uLXNhIHtcclxuICBmb250LXNpemU6IDE3UFggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import { LocationsService } from '../_services/locations.service';

let LayoutComponent = class LayoutComponent {
    constructor(router
    //, public service: LocationsService
    , ls) {
        this.router = router;
        this.ls = ls;
        this._Langname = "";
        this.branchname = "";
        this.email = "";
        //this.branchname = this.ls.getSelectedBrand().name;
        //this.email = this.ls.getSelectedBrand().email;
    }
    ngOnInit() {
        var data = this.ls.getSelectedBrand();
        //this.loadLocations();
        // if (data == null)
        //   this.router.navigate(["/"]);
    }
    Logout() {
        sessionStorage.clear();
        this.router.navigate(['/']);
    }
    loadLocations() {
        // var loc = this.ls.getLocation();
        // if (loc != null) {
        //   this.Locations = this.ls.getLocation();
        //   this.locationID = this.ls.getSelectedLocation().locationID;
        // }
        // else {
        //   this.service.getAllLocations(this.ls.getSelectedBrand().brandID).subscribe((res: any) => {
        //     debugger
        //     if (res.length > 0) {
        //       this.ls.setLocation(res);
        //       this.ls.setSelectedLocation(res[0]);
        //       this.locationID =res[0].locationID;
        //       this.Locations =res;
        //     }
        //     else {
        //       this.router.navigate(['/']);
        //     }
        //   });
        // }
        //this.Locations = this.ls.getLocation();
        //this.locationID = this.ls.getSelectedLocation().locationID;
    }
    changeloc(LocObj) {
        //this.locationID = this.ls.selectedLocation().locationID;
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
LayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-layout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        //, public service: LocationsService
        ,
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
], LayoutComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/login.service */ "./src/app/_services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/local-storage.service */ "./src/app/_services/local-storage.service.ts");
/* harmony import */ var _services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/toastservice */ "./src/app/_services/toastservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let LoginComponent = class LoginComponent {
    constructor(formBuilder, service, ts, router, ls) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.ts = ts;
        this.router = router;
        this.ls = ls;
    }
    ngOnInit() {
        this.createForm();
    }
    onSubmit() {
        this.loginForm.markAllAsTouched();
        if (this.loginForm.invalid) {
            return;
        }
        this.service.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            if (data != null) {
                this.router.navigate(["/admin/dashboard"]);
            }
            else {
                this.ts.showError("Error", "Username or password is not correct.");
            }
        }, error => {
            this.ts.showError("Error", "Something went wrong.");
        });
    }
    get f() { return this.loginForm.controls; }
    createForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/localize/init */ "./node_modules/@angular/localize/fesm2015/init.js");
/* harmony import */ var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_localize_init__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\PlaneraAdmin\ClientApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map