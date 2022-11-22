(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./node_modules/@angular/localize/fesm2015/init.js":
    /*!*********************************************************!*\
      !*** ./node_modules/@angular/localize/fesm2015/init.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesAngularLocalizeFesm2015InitJs(module, exports) {
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
      var __globalThis = typeof globalThis !== 'undefined' && globalThis;

      var __window = typeof window !== 'undefined' && window;

      var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

      var __global = typeof global !== 'undefined' && global; // Always use __globalThis if available; this is the spec-defined global variable across all
      // environments.
      // Then fallback to __global first; in Node tests both __global and __window may be defined.


      var _global = __globalThis || __global || __window || __self;
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


      var $localize = function $localize(messageParts) {
        for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          expressions[_key - 1] = arguments[_key];
        }

        if ($localize.translate) {
          // Don't use array expansion here to avoid the compiler adding `__read()` helper unnecessarily.
          var translation = $localize.translate(messageParts, expressions);
          messageParts = translation[0];
          expressions = translation[1];
        }

        var message = stripBlock(messageParts[0], messageParts.raw[0]);

        for (var i = 1; i < messageParts.length; i++) {
          message += expressions[i - 1] + stripBlock(messageParts[i], messageParts.raw[i]);
        }

        return message;
      };

      var BLOCK_MARKER = ':';
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
        return rawMessagePart.charAt(0) === BLOCK_MARKER ? messagePart.substring(findEndOfBlock(messagePart, rawMessagePart) + 1) : messagePart;
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
        for (var cookedIndex = 1, rawIndex = 1; cookedIndex < cooked.length; cookedIndex++, rawIndex++) {
          if (raw[rawIndex] === '\\') {
            rawIndex++;
          } else if (cooked[cookedIndex] === BLOCK_MARKER) {
            return cookedIndex;
          }
        }

        throw new Error("Unterminated $localize metadata block in \"".concat(raw, "\"."));
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


      _global.$localize = $localize; //# sourceMappingURL=init.js.map

      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/add/addgallery.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/add/addgallery.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminActivarbahrainGalleryAddAddgalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/gallery.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/gallery.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminActivarbahrainGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Bahrain</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/add/addgallery.component.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/add/addgallery.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminActivardubaiGalleryAddAddgalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/gallery.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/gallery.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminActivardubaiGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Activar Dubai</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n <!-- <div class=\"row\">\r\n    <div class=\"col-md-9 form-group\">\r\n        <label>Select Date</label>\r\n        <ngbd-datepicker-range-popup></ngbd-datepicker-range-popup>\r\n    </div>\r\n    <div class=\"col-md-3 form-group text-right\">\r\n        <button class=\"btn btn-primary mt-4\" (click)=\"Filter()\" type=\"submit\">Search</button>\r\n    </div>\r\n</div> -->\r\n\r\n<!-- Page Heading -->\r\n\r\n\r\n<div class=\"row d-sm-flex align-items-center justify-content-between mb-4\">\r\n    <div class=\"col-md-6\">\r\n        <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n    </div>\r\n    <div class=\" col-md-6 d-flex justify-content-end\">\r\n        <ngbd-datepicker-range-popup></ngbd-datepicker-range-popup>\r\n        <!-- <button class=\"btn btn-primary ml-2\" type=\"submit\"  (click)=\"GetDataDashboard()\">Search</button> -->\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n    <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n\r\n</div> -->\r\n\r\n<!-- Content Row -->\r\n<div class=\"row\">\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-orange text-uppercase mb-1\">Total Sales</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{dashboardSummary.sales | number:'1.2-2'}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-success shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Net Sales</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{dashboardSummary.netSales | number:'1.2-2'}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Pending Requests Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-warning shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Total Tax</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{dashboardSummary.totalTax | number:'1.2-2'}}</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Earnings (Monthly) Card Example -->\r\n    <div class=\"col-xl-3 col-md-6 mb-4\">\r\n        <div class=\"card border-left-info shadow h-100 py-2\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                        <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Total Orders</div>\r\n                        <div class=\"row no-gutters align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                                <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{dashboardSummary.totalOrders | number:'1.2-2'}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<!-- Content Row -->\r\n\r\n<div class=\"row\">\r\n\r\n    <!-- Area Chart -->\r\n    <div class=\"col-xl-8 col-lg-7\">\r\n        <div class=\"card shadow mb-4\">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Earnings Overview</h6>\r\n                <div class=\"dropdown no-arrow\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                        <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <div class=\"chart-area\">\r\n\r\n                    <div style=\"text-align:center\">\r\n                        <!-- <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\" [xaxis]=\"chartOptions.xaxis\" [title]=\"chartOptions.title\"></apx-chart> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Pie Chart -->\r\n    <div class=\"col-xl-4 col-lg-5\">\r\n        <div class=\"card shadow mb-4 \">\r\n            <!-- Card Header - Dropdown -->\r\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Revenue Periodic</h6>\r\n                <div class=\"dropdown no-arrow\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                        <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Card Body -->\r\n            <div class=\"card-body\">\r\n                <!--<div class=\"chart-pie \"   style=\"height: auto !important;\">\r\n                    <div id=\"chart\">\r\n                        <apx-chart [series]=\"chartOptionsDonut.series\" [chart]=\"chartOptionsDonut.chart\" [labels]=\"chartOptionsDonut.labels\" [responsive]=\"chartOptionsDonut.responsive\"></apx-chart>\r\n                    </div>\r\n                </div>-->\r\n                <div class=\"mt-4 text-center small\">\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/add/addgallery.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/add/addgallery.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminHarmanocontractGalleryAddAddgalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Projects</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/gallery.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/gallery.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminHarmanocontractGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Contracting</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Projects</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/add/addgallery.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/add/addgallery.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminHarmanorepairGalleryAddAddgalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/gallery.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/gallery.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminHarmanorepairGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Harmano Repair</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlaneragroupNewseventAddnewseventAddnewseventComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Add News and Events</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"newsandeventForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">News & Event Details</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=name placeholder=\"\" formControlName=\"name\">\r\n                <div *ngIf=\"f.name.invalid && (f.name.dirty || f.name.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.name.errors.required\">\r\n                    Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=name placeholder=\"\" formControlName=\"arabicName\">\r\n                <div *ngIf=\"f.arabicName.invalid && (f.arabicName.dirty || f.arabicName.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicName.errors.required\">\r\n                    Arabic Name is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputFirstName\">Page Name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=pagename placeholder=\"\" formControlName=\"pagename\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Description</label>\r\n                  <textarea class=\"form-control\" formControlName=\"description\" height=\"100px\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Arabic Description</label>\r\n                  <textarea class=\"form-control\" formControlName=\"arabicDescription\" height=\"100px\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/newsevent.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/newsevent.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlaneragroupNewseventNewseventComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Group</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">News & Events</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-2 text-right\"> <button [routerLink]=\"['add']\" class=\"btn btn-primary \">\r\n                Add Category\r\n            </button></div>-->\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Name </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> ArabicName </th>\r\n                        <th width=\"30%\" sortable=\"Description\" (sort)=\"onSort($event)\">Description </th>\r\n                        <th width=\"15%\" sortable=\"PageName\" (sort)=\"onSort($event)\">Page Name</th>\r\n\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.name}} </td>\r\n                        <td> {{item.arabicName}} </td>\r\n                        <td> {{item.description}} </td>\r\n                        <td> {{item.pagename}} </td>\r\n                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.newsEventID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/service/add/addservices.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/service/add/addservices.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlaneragroupServiceAddAddservicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Add Services</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"servicesForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Services</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Description</label>\r\n                  <textarea class=\"form-control\" formControlName=\"description\" height=\"100px\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Arabic Description</label>\r\n                  <textarea class=\"form-control\" formControlName=\"arabicDescription\" height=\"100px\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Display Order</label>\r\n                <input type=\"number\" class=\"form-control\" id=displayOrder placeholder=\"\" formControlName=\"displayOrder\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/service/service.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/service/service.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlaneragroupServiceServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Group</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Service Page</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">Image</th>\r\n                        <th width=\"20%\" sortable=\"Title\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"30%\" sortable=\"ArabicTitle\" (sort)=\"onSort($event)\">Arabic Title </th>\r\n                        <th width=\"15%\" sortable=\"Description\" (sort)=\"onSort($event)\">Description</th>\r\n                        <th width=\"15%\" sortable=\"ArabicDescription\" (sort)=\"onSort($event)\">Arabic Description</th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>\r\n                        <td> {{item.description}} </td>\r\n                        <td> {{item.arabicDescription}} </td>                     \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID ==1?'Active':'Inactive'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.serviceID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/add/addgallery.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/add/addgallery.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlanerainteriorGalleryAddAddgalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<form [formGroup]=\"galleryForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-12\">\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-header\">Add Gallery</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=title placeholder=\"\" formControlName=\"title\">\r\n                <div *ngIf=\"f.title.invalid && (f.title.dirty || f.title.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.title.errors.required\">\r\n                    Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"small mb-1\" for=\"inputUsername\">Arabic Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=arabicTitle placeholder=\"\" formControlName=\"arabicTitle\">\r\n                <div *ngIf=\"f.arabicTitle.invalid && (f.arabicTitle.dirty || f.arabicTitle.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"f.arabicTitle.errors.required\">\r\n                    Arabic Title is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Form Row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label class=\"small mb-1\" for=\"inputLocation\">Display Order</label>\r\n                  <input class=\"form-control\" formControlName=\"displayOrder\" type=\"number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 text-center\">\r\n              <app-imageupload></app-imageupload>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"Item Status\">Status</label>\r\n              <div class=\"custom-control custom-switch custom-switch-md\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"statusID\" formControlName=\"statusID\">\r\n                <label class=\"custom-control-label\" for=\"statusID\"></label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Save changes button-->\r\n          <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/gallery.component.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/gallery.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlanerainteriorGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<h1 class=\"h3 mb-2 text-gray-800\">Planera Interior</h1>\r\n<p class=\"mb-4\"></p>\r\n\r\n<!-- DataTales Example -->\r\n<div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h6 class=\"m-0 font-weight-bold text-orange\">Gallery</h6>\r\n            </div>\r\n            <div class=\" col-lg-4 input-group mb-3\" style=\"padding-top: 25px;\">\r\n                <div class=\"input-group-prepend\" style=\"height: 39px;\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n                </div>\r\n                <input class=\"form-control search-filter\" placeholder=\"Filter by name\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\r\n            </div>\r\n           \r\n            <div class=\"col-md-3 form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-4 mr-1\" (click)=\"exportAsXLSX()\">\r\n                    <span translate>Export</span>\r\n                </button>\r\n                <button [routerLink]=\"['add']\" class=\"btn btn-primary mt-4 mr-1\">\r\n                    Add \r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"tile-body p-0 table-responsive \">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr class=\"table-header\">\r\n                        <th width=\"10%\">IMAGE</th>\r\n                        <th width=\"20%\" sortable=\"Name\" (sort)=\"onSort($event)\"> Title </th>\r\n                        <th width=\"20%\" sortable=\"ArabicName\" (sort)=\"onSort($event)\"> Arabic Title </th>\r\n                        <th width=\"20%\" sortable=\"DisplayOrder\" (sort)=\"onSort($event)\"> Display Order </th>\r\n                        <th width=\"15%\" sortable=\"Status\" (sort)=\"onSort($event)\">Status </th>\r\n                        <th width=\"10%\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of data$ | async \">\r\n                        <td>\r\n                            <img *ngIf=\"item.image !== ''\" [src]=\"item.image\" class=\"table-img\" alt=\"\" />\r\n                            <div *ngIf=\"item.image === ''\" class=\"image-replace\"></div>\r\n                        </td>\r\n                        <td> {{item.title}} </td>\r\n                        <td> {{item.arabicTitle}} </td>                        \r\n                        <td> {{item.displayOrder}} </td>                        \r\n                        <td>\r\n                            <ngb-highlight [ngClass]=\"{'btn-success': item.statusID === 1, 'btn-danger':item.statusID !== 1 }\" class=\"btn btn-sm\" [result]=\"item.statusID !==1?'InActive':'Active'\" [term]=\"service.searchTerm\">\r\n                            </ngb-highlight>\r\n                        </td>\r\n                        <td>\r\n                            <a (click)=\"Edit(item.galleryID)\"><i class=\"fas fa-fw fa-edit\"></i> </a>\r\n                            <a (click)=\"Delete(item)\"><i class=\"fas fa-fw fa-trash-alt\"></i> </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <p class=\"pagination-count\">\r\n                    Showing\r\n                    <strong>{{(service.pageSize * service.page)-9}}</strong> to\r\n                    <strong>{{(service.pageSize * service.page) > (total$ | async)!?(total$ | async)!:service.pageSize * service.page}}</strong> of\r\n                    <strong>{{(total$ | async)!}}</strong> results\r\n                </p>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <ngb-pagination [collectionSize]=\"(total$ | async)!\" class=\"float-right\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\" [maxSize]=\"3\" [rotate]=\"true\" [boundaryLinks]=\"true\">\r\n                </ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet>\r\n\r\n</router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/datepicker-range/datepicker-range-popup.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datepicker-range/datepicker-range-popup.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDatepickerRangeDatepickerRangePopupHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form class=\"form-inline\">\r\n    <div class=\"form-group hidden\">\r\n        <div class=\"input-group\">\r\n            <input name=\"datepicker\" class=\"form-control\" ngbDatepicker #datepicker=\"ngbDatepicker\" [autoClose]=\"'outside'\" (dateSelect)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" outsideDays=\"hidden\" [startDate]=\"fromDate!\">\r\n            <ng-template #t let-date let-focused=\"focused\">\r\n                <span class=\"custom-day\" [class.focused]=\"focused\" [class.range]=\"isRange(date)\" [class.faded]=\"isHovered(date) || isInside(date)\" (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\r\n          {{ date.day }}\r\n        </span>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n            <input #dpFromDate class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dpFromDate\" [value]=\"formatter.format(fromDate)\" (input)=\"fromDate = validateInput(fromDate, dpFromDate.value)\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"datepicker.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group ml-2\">\r\n        <div class=\"input-group\">\r\n            <input #dpToDate class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dpToDate\" [value]=\"formatter.format(toDate)\" (input)=\"toDate = validateInput(toDate, dpToDate.value)\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary \" (click)=\"datepicker.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFetchDataFetchDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/imageupload/imageupload.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageupload/imageupload.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImageuploadImageuploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"group-gap mt-4\">\r\n\r\n    <div class=\"avatar-upload\">\r\n        <div class=\"avatar-edit\">\r\n            <input type='file' id=\"imageUpload\" accept=\".png, .jpg, .jpeg\" #fileInput (change)=\"onFileChange($event)\" />\r\n        </div>\r\n        <div class=\"avatar-preview\">\r\n            <div id=\"imagePreview\" [style.backgroundImage]=\"'url('+ imageUrl +')'\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Submit Button -->\r\n\r\n<button type=\"button\" class=\"file-upload-btn\" (click)=\"fileInput.click()\">Upload Image</button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body id=\"page-top\">\r\n  <!-- Page Wrapper -->\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n\r\n      <!-- Sidebar - Brand -->\r\n      <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" [routerLink]=\"['dashboard']\">\r\n        <div class=\"sidebar-brand-icon\">\r\n          <img src=\"../../assets/img/FaviconLayout.png\" style=\"width: 40%;\" />\r\n        </div>\r\n      </a>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider my-0\">\r\n\r\n      <!-- Nav Item - Dashboard -->\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['dashboard']\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n      </li>\r\n\r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider\">\r\n\r\n      <!-- Heading -->\r\n      <div class=\"sidebar-heading\">\r\n        Companies\r\n      </div>\r\n      <!-- Nav Item - Utilities Collapse Menu -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseCompany\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Planera Group</span>\r\n        </a>\r\n        <div id=\"collapseCompany\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/newsevent']\">News & Event</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/service']\">Services Page</a>\r\n\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseplaneraint\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Planera Interior</span>\r\n        </a>\r\n        <div id=\"collapseplaneraint\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planerainterior/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseActivarBh\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Activar Bahrain</span>\r\n        </a>\r\n        <div id=\"collapseActivarBh\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activarbahrain/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseHarmanoCont\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Harmano Contracting</span>\r\n        </a>\r\n        <div id=\"collapseHarmanoCont\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanocontract/gallery']\">Project Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#ActivarDB\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Activar Dubai</span>\r\n        </a>\r\n        <div id=\"ActivarDB\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/planeragroup/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/activardubai/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#HarmanoRP\" aria-expanded=\"true\" aria-controls=\"collapseCompany\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Harmano Repair</span>\r\n        </a>\r\n        <div id=\"HarmanoRP\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanorepair/service']\">Services Page</a>\r\n            <a class=\"collapse-item\" [routerLink]=\"['/admin/harmanorepair/gallery']\">Gallery Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <hr class=\"sidebar-divider\">\r\n      <!-- Sidebar Toggler (Sidebar) -->\r\n      <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n      </div>\r\n    </ul>\r\n    <!-- End of Sidebar -->\r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n      <!-- Main Content -->\r\n      <div id=\"content\">\r\n        <!-- Topbar -->\r\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n\r\n          <!-- Sidebar Toggle (Topbar) -->\r\n          <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n          <!-- Topbar Search -->\r\n          <div class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100\">\r\n            <strong>Branch Name</strong> : {{branchname}} |\r\n            <strong>Email</strong> : {{email}}\r\n          </div>\r\n\r\n          <!-- Topbar Navbar -->\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <!-- Nav Item - User Information -->\r\n            <li class=\"nav-item dropdown no-arrow\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Administrator</span>\r\n                <img class=\"img-profile rounded-circle\" src=\"https://user-images.githubusercontent.com/16608864/35882949-bbe13aa0-0bab-11e8-859c-ceda3b213818.jpeg\">\r\n              </a>\r\n              <!-- Dropdown - User Information -->\r\n              <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"Logout()\">\r\n                  <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i> Logout\r\n                </a>\r\n              </div>\r\n            </li>\r\n\r\n          </ul>\r\n\r\n        </nav>\r\n        <!-- End of Topbar -->\r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n      <!-- End of Main Content -->\r\n      <!-- Footer -->\r\n      <footer class=\"sticky-footer bg-white\">\r\n        <div class=\"container my-auto\">\r\n          <div class=\"copyright text-center my-auto\">\r\n            <span>Copyright &copy; PlaneraBH 2022</span>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n      <!-- End of Footer -->\r\n\r\n    </div>\r\n    <!-- End of Content Wrapper -->\r\n\r\n  </div>\r\n</body>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n    <!-- Outer Row -->\r\n    <div class=\"row justify-content-center\">\r\n\r\n        <div class=\"col-xl-10 col-lg-12 col-md-9\">\r\n\r\n            <div class=\"card o-hidden border-0 shadow-lg my-5\">\r\n                <div class=\"card-body p-0\">\r\n                    <!-- Nested Row within Card Body -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\r\n                        <div class=\"col-lg-6\">\r\n                            <div class=\"p-5\">\r\n                                <div class=\"text-center mb-4\">\r\n                                    <img src=\"../../assets/img/favicon.png\" style=\"height:150px\" />\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <h1 class=\"h4 text-gray-900 mb-4\">Welcome Back!</h1>\r\n                                </div>\r\n                                <form [formGroup]=\"loginForm\" class=\"user\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"email\" formControlName=\"username\" class=\"form-control form-control-user\" id=\"username\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email Address...\">\r\n                                        <div *ngIf=\"f.username.invalid && (f.username.dirty || f.username.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"f.username.errors.required\">\r\n                                                username is required.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"password\" class=\"form-control form-control-user\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n                                        <div *ngIf=\"f.password.invalid && (f.password.dirty || f.password.touched)\" class=\"alert alert-danger\">\r\n                                            <div *ngIf=\"f.password.errors.required\">\r\n                                                password is required.\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <button class=\"btn btn-primary btn-user btn-block\">\r\n                                      Login\r\n                                  </button>\r\n                                    <hr>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">PlaneraAdmin</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
      /***/
    },

    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/ExportExcel/excel.service.ts":
    /*!******************************************!*\
      !*** ./src/ExportExcel/excel.service.ts ***!
      \******************************************/

    /*! exports provided: ExcelService */

    /***/
    function srcExportExcelExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExcelService", function () {
        return ExcelService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      "./node_modules/file-saver/dist/FileSaver.min.js");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! xlsx */
      "./node_modules/xlsx/xlsx.js");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      var EXCEL_EXTENSION = '.xlsx';

      var ExcelService = /*#__PURE__*/function () {
        function ExcelService() {
          _classCallCheck(this, ExcelService);
        }

        _createClass(ExcelService, [{
          key: "exportAsExcelFile",
          value: function exportAsExcelFile(json, excelFileName) {
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
            console.log('worksheet', worksheet);
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, {
              bookType: 'xlsx',
              type: 'array'
            }); //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

            this.saveAsExcelFile(excelBuffer, excelFileName);
          }
        }, {
          key: "saveAsExcelFile",
          value: function saveAsExcelFile(buffer, fileName) {
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
        }]);

        return ExcelService;
      }();

      ExcelService.ctorParameters = function () {
        return [];
      };

      ExcelService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [])], ExcelService);
      /***/
    },

    /***/
    "./src/app/_directives/sortable.directive.ts":
    /*!***************************************************!*\
      !*** ./src/app/_directives/sortable.directive.ts ***!
      \***************************************************/

    /*! exports provided: NgbdSortableHeader */

    /***/
    function srcApp_directivesSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function () {
        return NgbdSortableHeader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _rotate = {
        'asc': 'desc',
        'desc': '',
        '': 'asc'
      };

      var NgbdSortableHeader = /*#__PURE__*/function () {
        function NgbdSortableHeader() {
          _classCallCheck(this, NgbdSortableHeader);

          this.sortable = '';
          this.direction = '';
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(NgbdSortableHeader, [{
          key: "rotate",
          value: function rotate() {
            this.direction = _rotate[this.direction];
            this.sort.emit({
              column: this.sortable,
              direction: this.direction
            });
          }
        }]);

        return NgbdSortableHeader;
      }();

      NgbdSortableHeader.propDecorators = {
        sortable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      NgbdSortableHeader = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: 'th[sortable]',
        host: {
          '[class.asc]': 'direction === "asc"',
          '[class.desc]': 'direction === "desc"',
          '(click)': 'rotate()'
        }
      })], NgbdSortableHeader);
      /***/
    },

    /***/
    "./src/app/_models/Dashboard.ts":
    /*!**************************************!*\
      !*** ./src/app/_models/Dashboard.ts ***!
      \**************************************/

    /*! exports provided: DashboardSummary */

    /***/
    function srcApp_modelsDashboardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardSummary", function () {
        return DashboardSummary;
      });

      var DashboardSummary = function DashboardSummary() {
        _classCallCheck(this, DashboardSummary);
      };
      /***/

    },

    /***/
    "./src/app/_services/actbahgallery.ts":
    /*!********************************************!*\
      !*** ./src/app/_services/actbahgallery.ts ***!
      \********************************************/

    /*! exports provided: ActBahGalleryService */

    /***/
    function srcApp_servicesActbahgalleryTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActBahGalleryService", function () {
        return ActBahGalleryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      }

      var ActBahGalleryService = /*#__PURE__*/function () {
        function ActBahGalleryService(http) {
          _classCallCheck(this, ActBahGalleryService);

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

        _createClass(ActBahGalleryService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("api/activarbahrain/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/activarbahrain/all");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this = this;

            var url = "api/activarbahrain/all";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this.newsevent = res;

              _this._data$.next(_this.newsevent);

              _this._allData$.next(_this.newsevent);

              _this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this._loading$.next(false);
              })).subscribe(function (result) {
                _this._data$.next(result.data);

                _this._total$.next(result.total);
              });

              _this._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state = this._state,
                sortColumn = _this$_state.sortColumn,
                sortDirection = _this$_state.sortDirection,
                pageSize = _this$_state.pageSize,
                page = _this$_state.page,
                searchTerm = _this$_state.searchTerm; // 1. sort

            var sortedData = sort(this.newsevent, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/activarbahrain/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/activarbahrain/update", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(deleteData) {
            debugger;
            return this.http.post("api/planerainterior/delete", deleteData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return ActBahGalleryService;
      }();

      ActBahGalleryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ActBahGalleryService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ActBahGalleryService);
      /***/
    },

    /***/
    "./src/app/_services/actdubgallery.ts":
    /*!********************************************!*\
      !*** ./src/app/_services/actdubgallery.ts ***!
      \********************************************/

    /*! exports provided: ActDubGalleryService */

    /***/
    function srcApp_servicesActdubgalleryTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActDubGalleryService", function () {
        return ActDubGalleryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      }

      var ActDubGalleryService = /*#__PURE__*/function () {
        function ActDubGalleryService(http) {
          _classCallCheck(this, ActDubGalleryService);

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

        _createClass(ActDubGalleryService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("api/activardubai/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/activardubai/all");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this2 = this;

            var url = "api/activardubai/all";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this2._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this2.newsevent = res;

              _this2._data$.next(_this2.newsevent);

              _this2._allData$.next(_this2.newsevent);

              _this2._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this2._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this2._loading$.next(false);
              })).subscribe(function (result) {
                _this2._data$.next(result.data);

                _this2._total$.next(result.total);
              });

              _this2._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state2 = this._state,
                sortColumn = _this$_state2.sortColumn,
                sortDirection = _this$_state2.sortDirection,
                pageSize = _this$_state2.pageSize,
                page = _this$_state2.page,
                searchTerm = _this$_state2.searchTerm; // 1. sort

            var sortedData = sort(this.newsevent, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/activardubai/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/activardubai/update", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(deleteData) {
            debugger;
            return this.http.post("api/activardubai/delete", deleteData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return ActDubGalleryService;
      }();

      ActDubGalleryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ActDubGalleryService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ActDubGalleryService);
      /***/
    },

    /***/
    "./src/app/_services/dashboard.service.ts":
    /*!************************************************!*\
      !*** ./src/app/_services/dashboard.service.ts ***!
      \************************************************/

    /*! exports provided: DashboadService */

    /***/
    function srcApp_servicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboadService", function () {
        return DashboadService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DashboadService = /*#__PURE__*/function () {
        function DashboadService(http) {
          _classCallCheck(this, DashboadService);

          this.http = http;
          this._allData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        }

        _createClass(DashboadService, [{
          key: "GetDashboard",
          value: function GetDashboard(locationID, date) {
            var today = date;
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

            var yyyy = today.getFullYear();
            today = yyyy + '-' + dd + '-' + mm;
            return this.http.get("api/dashboard/get/".concat(locationID, "/").concat(today));
          }
        }, {
          key: "GetDashboardRange",
          value: function GetDashboardRange(locationID, fdate, tdate) {
            return this.http.get("api/dashboard/range/get/".concat(locationID, "/").concat(fdate, "/").concat(tdate));
          }
        }]);

        return DashboadService;
      }();

      DashboadService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      DashboadService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DashboadService);
      /***/
    },

    /***/
    "./src/app/_services/hrcntgallery.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/_services/hrcntgallery.service.ts ***!
      \***************************************************/

    /*! exports provided: HrCntGalleryService */

    /***/
    function srcApp_servicesHrcntgalleryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrCntGalleryService", function () {
        return HrCntGalleryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      }

      var HrCntGalleryService = /*#__PURE__*/function () {
        function HrCntGalleryService(http) {
          _classCallCheck(this, HrCntGalleryService);

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

        _createClass(HrCntGalleryService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("api/harmanocontract/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/harmanocontract/all");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this3 = this;

            var url = "api/harmanocontract/all";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this3._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this3.newsevent = res;

              _this3._data$.next(_this3.newsevent);

              _this3._allData$.next(_this3.newsevent);

              _this3._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this3._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this3._loading$.next(false);
              })).subscribe(function (result) {
                _this3._data$.next(result.data);

                _this3._total$.next(result.total);
              });

              _this3._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state3 = this._state,
                sortColumn = _this$_state3.sortColumn,
                sortDirection = _this$_state3.sortDirection,
                pageSize = _this$_state3.pageSize,
                page = _this$_state3.page,
                searchTerm = _this$_state3.searchTerm; // 1. sort

            var sortedData = sort(this.newsevent, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/harmanocontract/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/harmanocontract/update", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(deleteData) {
            debugger;
            return this.http.post("api/harmanocontract/delete", deleteData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return HrCntGalleryService;
      }();

      HrCntGalleryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      HrCntGalleryService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], HrCntGalleryService);
      /***/
    },

    /***/
    "./src/app/_services/hrrprgallery.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/_services/hrrprgallery.service.ts ***!
      \***************************************************/

    /*! exports provided: HrRprGalleryService */

    /***/
    function srcApp_servicesHrrprgalleryServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrRprGalleryService", function () {
        return HrRprGalleryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      }

      var HrRprGalleryService = /*#__PURE__*/function () {
        function HrRprGalleryService(http) {
          _classCallCheck(this, HrRprGalleryService);

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

        _createClass(HrRprGalleryService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("api/harmanorepair/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/harmanorepair/all");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this4 = this;

            var url = "api/harmanorepair/all";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this4._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this4.newsevent = res;

              _this4._data$.next(_this4.newsevent);

              _this4._allData$.next(_this4.newsevent);

              _this4._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this4._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this4._loading$.next(false);
              })).subscribe(function (result) {
                _this4._data$.next(result.data);

                _this4._total$.next(result.total);
              });

              _this4._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state4 = this._state,
                sortColumn = _this$_state4.sortColumn,
                sortDirection = _this$_state4.sortDirection,
                pageSize = _this$_state4.pageSize,
                page = _this$_state4.page,
                searchTerm = _this$_state4.searchTerm; // 1. sort

            var sortedData = sort(this.newsevent, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/harmanorepair/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/harmanorepair/update", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(deleteData) {
            debugger;
            return this.http.post("api/harmanorepair/delete", deleteData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return HrRprGalleryService;
      }();

      HrRprGalleryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      HrRprGalleryService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], HrRprGalleryService);
      /***/
    },

    /***/
    "./src/app/_services/local-storage.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/_services/local-storage.service.ts ***!
      \****************************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function srcApp_servicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService() {
          _classCallCheck(this, LocalStorageService);
        }

        _createClass(LocalStorageService, [{
          key: "setSelectedBrand",
          value: function setSelectedBrand(brand) {
            sessionStorage.setItem('_autheticatedUser', JSON.stringify(brand));
          }
        }, {
          key: "setSelectedLocation",
          value: function setSelectedLocation(location) {
            sessionStorage.setItem('selectedLocation', JSON.stringify(location));
          }
        }, {
          key: "getSelectedLocation",
          value: function getSelectedLocation() {
            return JSON.parse(sessionStorage.getItem('selectedLocation'));
          }
        }, {
          key: "setLocation",
          value: function setLocation(location) {
            sessionStorage.setItem('_Locations', JSON.stringify(location));
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            return JSON.parse(sessionStorage.getItem('_Locations'));
          }
        }, {
          key: "getSelectedBrand",
          value: function getSelectedBrand() {
            return JSON.parse(sessionStorage.getItem('_autheticatedUser'));
          }
        }, {
          key: "getSelectedUser",
          value: function getSelectedUser() {
            var userInfo = JSON.parse(sessionStorage.getItem("currentUser"));

            if (userInfo !== null) {
              userInfo = JSON.parse(userInfo.data);
              return userInfo;
            }
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ctorParameters = function () {
        return [];
      };

      LocalStorageService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], LocalStorageService);
      /***/
    },

    /***/
    "./src/app/_services/login.service.ts":
    /*!********************************************!*\
      !*** ./src/app/_services/login.service.ts ***!
      \********************************************/

    /*! exports provided: LoginService */

    /***/
    function srcApp_servicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('_autheticatedUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(LoginService, [{
          key: "login",
          value: function login(username, password) {
            return this.http.get("api/login/authenticate/".concat(username, "/").concat(password));
          }
        }, {
          key: "getAllLocations",
          value: function getAllLocations(brandId) {
            return this.http.get("api/location/all/".concat(brandId));
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LoginService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LoginService);
      /***/
    },

    /***/
    "./src/app/_services/plngrpnewsalert.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/_services/plngrpnewsalert.service.ts ***!
      \******************************************************/

    /*! exports provided: PlnGrpNewAlertService */

    /***/
    function srcApp_servicesPlngrpnewsalertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlnGrpNewAlertService", function () {
        return PlnGrpNewAlertService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.name.toLowerCase().includes(term.toLowerCase());
      }

      var PlnGrpNewAlertService = /*#__PURE__*/function () {
        function PlnGrpNewAlertService(http) {
          _classCallCheck(this, PlnGrpNewAlertService);

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

        _createClass(PlnGrpNewAlertService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("api/planeragroup/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/planeragroup/all");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this5 = this;

            var url = "api/planeragroup/all";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this5._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this5.newsevent = res;

              _this5._data$.next(_this5.newsevent);

              _this5._allData$.next(_this5.newsevent);

              _this5._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this5._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this5._loading$.next(false);
              })).subscribe(function (result) {
                _this5._data$.next(result.data);

                _this5._total$.next(result.total);
              });

              _this5._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state5 = this._state,
                sortColumn = _this$_state5.sortColumn,
                sortDirection = _this$_state5.sortDirection,
                pageSize = _this$_state5.pageSize,
                page = _this$_state5.page,
                searchTerm = _this$_state5.searchTerm; // 1. sort

            var sortedData = sort(this.newsevent, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/planeragroup/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/planeragroup/updatenews", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(deleteData) {
            debugger;
            return this.http.post("api/planeragroup/deletenews", deleteData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return PlnGrpNewAlertService;
      }();

      PlnGrpNewAlertService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PlnGrpNewAlertService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], PlnGrpNewAlertService);
      /***/
    },

    /***/
    "./src/app/_services/plngrpservices.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/_services/plngrpservices.service.ts ***!
      \*****************************************************/

    /*! exports provided: PlnGrpServicesService */

    /***/
    function srcApp_servicesPlngrpservicesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlnGrpServicesService", function () {
        return PlnGrpServicesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      }

      var PlnGrpServicesService = /*#__PURE__*/function () {
        function PlnGrpServicesService(http) {
          _classCallCheck(this, PlnGrpServicesService);

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

        _createClass(PlnGrpServicesService, [{
          key: "getById",
          value: function getById(id) {
            debugger;
            return this.http.get("api/planeragroup/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/planeragroup/serviceall");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this6 = this;

            debugger;
            var url = "api/planeragroup/serviceall";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this6._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this6.services = res;

              _this6._data$.next(_this6.services);

              _this6._allData$.next(_this6.services);

              _this6._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this6._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this6._loading$.next(false);
              })).subscribe(function (result) {
                _this6._data$.next(result.data);

                _this6._total$.next(result.total);
              });

              _this6._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state6 = this._state,
                sortColumn = _this$_state6.sortColumn,
                sortDirection = _this$_state6.sortDirection,
                pageSize = _this$_state6.pageSize,
                page = _this$_state6.page,
                searchTerm = _this$_state6.searchTerm; // 1. sort

            var sortedData = sort(this.services, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/planeragroup/insertservice", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/planeragroup/updateservice", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(updateData) {
            return this.http.post("api/planeragroup/deleteservice", updateData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return PlnGrpServicesService;
      }();

      PlnGrpServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PlnGrpServicesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], PlnGrpServicesService);
      /***/
    },

    /***/
    "./src/app/_services/plnintgallery.ts":
    /*!********************************************!*\
      !*** ./src/app/_services/plnintgallery.ts ***!
      \********************************************/

    /*! exports provided: PlnIntGalleryService */

    /***/
    function srcApp_servicesPlnintgalleryTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlnIntGalleryService", function () {
        return PlnIntGalleryService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      function sort(data, column, direction) {
        if (direction === '' || column === '') {
          return data;
        } else {
          return _toConsumableArray(data).sort(function (a, b) {
            var res = compare("".concat(a[column]), "".concat(b[column]));
            return direction === 'asc' ? res : -res;
          });
        }
      }

      function matches(data, term) {
        return data.title.toLowerCase().includes(term.toLowerCase());
      }

      var PlnIntGalleryService = /*#__PURE__*/function () {
        function PlnIntGalleryService(http) {
          _classCallCheck(this, PlnIntGalleryService);

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

        _createClass(PlnIntGalleryService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("api/planerainterior/".concat(id));
          }
        }, {
          key: "ExportList",
          value: function ExportList() {
            return this.http.get("api/planerainterior/all");
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this7 = this;

            var url = "api/planerainterior/all";
            console.log(url);
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this7._loading$.next(true);
            }), this.http.get(url).subscribe(function (res) {
              _this7.newsevent = res;

              _this7._data$.next(_this7.newsevent);

              _this7._allData$.next(_this7.newsevent);

              _this7._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                return _this7._search();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                return _this7._loading$.next(false);
              })).subscribe(function (result) {
                _this7._data$.next(result.data);

                _this7._total$.next(result.total);
              });

              _this7._search$.next();
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
        }, {
          key: "_search",
          value: function _search() {
            var _this$_state7 = this._state,
                sortColumn = _this$_state7.sortColumn,
                sortDirection = _this$_state7.sortDirection,
                pageSize = _this$_state7.pageSize,
                page = _this$_state7.page,
                searchTerm = _this$_state7.searchTerm; // 1. sort

            var sortedData = sort(this.newsevent, sortColumn, sortDirection); //// 2. filter

            sortedData = sortedData.filter(function (data) {
              return matches(data, searchTerm);
            });
            var total = sortedData.length; // 3. paginate

            var data = sortedData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              data: data,
              total: total
            });
          }
        }, {
          key: "clear",
          value: function clear() {
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
        }, {
          key: "insert",
          value: function insert(data) {
            debugger;
            return this.http.post("api/planerainterior/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "update",
          value: function update(updateData) {
            return this.http.post("api/planerainterior/updatenews", updateData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(deleteData) {
            debugger;
            return this.http.post("api/planerainterior/deletenews", deleteData);
          }
        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set: function set(page) {
            this._set({
              page: page
            });
          }
        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          }
        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "data$",
          get: function get() {
            return this._data$.asObservable();
          }
        }, {
          key: "allData$",
          get: function get() {
            return this._allData$.asObservable();
          }
        }]);

        return PlnIntGalleryService;
      }();

      PlnIntGalleryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PlnIntGalleryService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], PlnIntGalleryService);
      /***/
    },

    /***/
    "./src/app/_services/toastservice.ts":
    /*!*******************************************!*\
      !*** ./src/app/_services/toastservice.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function srcApp_servicesToastserviceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastr) {
          _classCallCheck(this, ToastService);

          this.toastr = toastr;
        }

        _createClass(ToastService, [{
          key: "showSuccess",
          value: function showSuccess(_title, _message) {
            this.toastr.success(_title, _message, {
              timeOut: 3000
            });
          }
        }, {
          key: "showError",
          value: function showError(_title, _message) {
            this.toastr.error(_title, _message, {
              timeOut: 3000
            });
          }
        }, {
          key: "showWarning",
          value: function showWarning(_title, _message) {
            this.toastr.warning(_title, _message, {
              timeOut: 3000
            });
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]
        }];
      };

      ToastService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])], ToastService);
      /***/
    },

    /***/
    "./src/app/admin/activarbahrain/gallery/add/addgallery.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/admin/activarbahrain/gallery/add/addgallery.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AddGalleryActBahComponent */

    /***/
    function srcAppAdminActivarbahrainGalleryAddAddgalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGalleryActBahComponent", function () {
        return AddGalleryActBahComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/actbahgallery */
      "./src/app/_services/actbahgallery.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddGalleryActBahComponent = /*#__PURE__*/function () {
        function AddGalleryActBahComponent(formBuilder, router, route, ls, ts, galleryService) {
          _classCallCheck(this, AddGalleryActBahComponent);

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

        _createClass(AddGalleryActBahComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedGallery();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.galleryForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              statusID: [true],
              galleryID: 0,
              imagePath: [''],
              displayOrder: ['']
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
            this.f.title.setValue(obj.title);
            this.f.arabicTitle.setValue(obj.arabicTitle);
            this.f.galleryID.setValue(obj.galleryID);
            this.f.imagePath.setValue(obj.imagePath);
            this.f.displayOrder.setValue(obj.displayOrder);
            this.f.statusID.setValue(obj.statusID === 1 ? true : false);
            this.imgComp.imageUrl = obj.imagePath;
          }
        }, {
          key: "setSelectedGallery",
          value: function setSelectedGallery() {
            var _this8 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this8.loadingGallery = true;

                _this8.f.galleryID.setValue(sid);

                _this8.galleryService.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this8.editForm(res);

                  _this8.loadingGallery = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

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
              this.galleryService.insert(this.galleryForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this9.ts.showSuccess("Success", "Record added successfully.");

                  _this9.router.navigate(['/admin/activarbahrain/gallery']);
                }

                _this9.loading = false;
              }, function (error) {
                _this9.ts.showError("Error", "Failed to insert record.");

                _this9.loading = false;
              });
            } else {
              //Update category
              this.galleryService.update(this.galleryForm.value).subscribe(function (data) {
                _this9.loading = false;

                if (data != 0) {
                  _this9.ts.showSuccess("Success", "Record updated successfully.");

                  _this9.router.navigate(['/admin/activarbahrain/gallery']);
                }
              }, function (error) {
                _this9.ts.showError("Error", "Failed to update record.");

                _this9.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.galleryForm.controls;
          }
        }]);

        return AddGalleryActBahComponent;
      }();

      AddGalleryActBahComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_6__["ActBahGalleryService"]
        }];
      };

      AddGalleryActBahComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddGalleryActBahComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addgallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/add/addgallery.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_6__["ActBahGalleryService"]])], AddGalleryActBahComponent);
      /***/
    },

    /***/
    "./src/app/admin/activarbahrain/gallery/gallery.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/admin/activarbahrain/gallery/gallery.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ActBahGalleryComponent */

    /***/
    function srcAppAdminActivarbahrainGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActBahGalleryComponent", function () {
        return ActBahGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/actbahgallery */
      "./src/app/_services/actbahgallery.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ActBahGalleryComponent = /*#__PURE__*/function () {
        function ActBahGalleryComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, ActBahGalleryComponent);

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

        _createClass(ActBahGalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this10 = this;

            this.service.ExportList().subscribe(function (res) {
              _this10.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this10.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.data$ = this.service.data$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref) {
            var column = _ref.column,
                direction = _ref.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(gallery) {
            this.router.navigate(["admin/activarbahrain/gallery/edit", gallery]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this11 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this11.ts.showSuccess("Success", "Record deleted successfully.");

                _this11.getData();
              } else {
                _this11.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this11.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return ActBahGalleryComponent;
      }();

      ActBahGalleryComponent.ctorParameters = function () {
        return [{
          type: src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_7__["ActBahGalleryService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ActBahGalleryComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      ActBahGalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./gallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activarbahrain/gallery/gallery.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_actbahgallery__WEBPACK_IMPORTED_MODULE_7__["ActBahGalleryService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ActBahGalleryComponent);
      /***/
    },

    /***/
    "./src/app/admin/activardubai/gallery/add/addgallery.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/admin/activardubai/gallery/add/addgallery.component.ts ***!
      \************************************************************************/

    /*! exports provided: AddGalleryActDubComponent */

    /***/
    function srcAppAdminActivardubaiGalleryAddAddgalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGalleryActDubComponent", function () {
        return AddGalleryActDubComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/actdubgallery */
      "./src/app/_services/actdubgallery.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddGalleryActDubComponent = /*#__PURE__*/function () {
        function AddGalleryActDubComponent(formBuilder, router, route, ls, ts, galleryService) {
          _classCallCheck(this, AddGalleryActDubComponent);

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

        _createClass(AddGalleryActDubComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedGallery();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.galleryForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              statusID: [true],
              galleryID: 0,
              imagePath: [''],
              displayOrder: ['']
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
            this.f.title.setValue(obj.title);
            this.f.arabicTitle.setValue(obj.arabicTitle);
            this.f.galleryID.setValue(obj.galleryID);
            this.f.imagePath.setValue(obj.imagePath);
            this.f.displayOrder.setValue(obj.displayOrder);
            this.f.statusID.setValue(obj.statusID === 1 ? true : false);
            this.imgComp.imageUrl = obj.imagePath;
          }
        }, {
          key: "setSelectedGallery",
          value: function setSelectedGallery() {
            var _this12 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this12.loadingGallery = true;

                _this12.f.galleryID.setValue(sid);

                _this12.galleryService.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this12.editForm(res);

                  _this12.loadingGallery = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

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
              this.galleryService.insert(this.galleryForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this13.ts.showSuccess("Success", "Record added successfully.");

                  _this13.router.navigate(['/admin/activardubai/gallery']);
                }

                _this13.loading = false;
              }, function (error) {
                _this13.ts.showError("Error", "Failed to insert record.");

                _this13.loading = false;
              });
            } else {
              //Update category
              this.galleryService.update(this.galleryForm.value).subscribe(function (data) {
                _this13.loading = false;

                if (data != 0) {
                  _this13.ts.showSuccess("Success", "Record updated successfully.");

                  _this13.router.navigate(['/admin/activardubai/gallery']);
                }
              }, function (error) {
                _this13.ts.showError("Error", "Failed to update record.");

                _this13.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.galleryForm.controls;
          }
        }]);

        return AddGalleryActDubComponent;
      }();

      AddGalleryActDubComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_6__["ActDubGalleryService"]
        }];
      };

      AddGalleryActDubComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddGalleryActDubComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addgallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/add/addgallery.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_6__["ActDubGalleryService"]])], AddGalleryActDubComponent);
      /***/
    },

    /***/
    "./src/app/admin/activardubai/gallery/gallery.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/admin/activardubai/gallery/gallery.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ActDubGalleryComponent */

    /***/
    function srcAppAdminActivardubaiGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActDubGalleryComponent", function () {
        return ActDubGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/actdubgallery */
      "./src/app/_services/actdubgallery.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ActDubGalleryComponent = /*#__PURE__*/function () {
        function ActDubGalleryComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, ActDubGalleryComponent);

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

        _createClass(ActDubGalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this14 = this;

            this.service.ExportList().subscribe(function (res) {
              _this14.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this14.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.data$ = this.service.data$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref2) {
            var column = _ref2.column,
                direction = _ref2.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(gallery) {
            this.router.navigate(["admin/activardubai/gallery/edit", gallery]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this15 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this15.ts.showSuccess("Success", "Record deleted successfully.");

                _this15.getData();
              } else {
                _this15.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this15.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return ActDubGalleryComponent;
      }();

      ActDubGalleryComponent.ctorParameters = function () {
        return [{
          type: src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_7__["ActDubGalleryService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ActDubGalleryComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      ActDubGalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./gallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/activardubai/gallery/gallery.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_actdubgallery__WEBPACK_IMPORTED_MODULE_7__["ActDubGalleryService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ActDubGalleryComponent);
      /***/
    },

    /***/
    "./src/app/admin/dashboard/dashboard.component.css":
    /*!*********************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-body{\r\n    padding: 20px;\r\n}\r\n\r\n  .advanced-pie-legend-wrapper{display: none !important;}\r\n\r\n  .dashboard-labels{\r\n      font-size: 13px;\r\n  }\r\n\r\n  ngx-charts-advanced-pie-chart:first-child{\r\nheight:200px ;\r\n  }\r\n\r\n  .content-wrapper-padding{\r\n    padding-top: 4rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7RUFFRSw2QkFBNkIsd0JBQXdCLENBQUM7O0VBRXREO01BQ0ksZUFBZTtFQUNuQjs7RUFDQTtBQUNGLGFBQWE7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4gIC5hZHZhbmNlZC1waWUtbGVnZW5kLXdyYXBwZXJ7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O31cclxuXHJcbiAgLmRhc2hib2FyZC1sYWJlbHN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgbmd4LWNoYXJ0cy1hZHZhbmNlZC1waWUtY2hhcnQ6Zmlyc3QtY2hpbGR7XHJcbmhlaWdodDoyMDBweCA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC13cmFwcGVyLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/admin/dashboard/dashboard.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /* harmony import */


      var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/dashboard.service */
      "./src/app/_services/dashboard.service.ts");
      /* harmony import */


      var src_app_models_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_models/Dashboard */
      "./src/app/_models/Dashboard.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/datepicker-range/datepicker-range-popup */
      "./src/app/datepicker-range/datepicker-range-popup.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var now = new Date();

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(service, ls) {
          _classCallCheck(this, DashboardComponent);

          this.service = service;
          this.ls = ls;
          this.selectedLocations = [];
          this.dashboardSummary = new src_app_models_Dashboard__WEBPACK_IMPORTED_MODULE_3__["DashboardSummary"]();
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var date = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDate"](now.getFullYear(), now.getMonth() + 1, 1);
            this._datepicker.fromDate = date; //this.GetDataDashboard();
          }
        }, {
          key: "BindTodaysSales",
          value: function BindTodaysSales(sales, timeSlot) {
            this.chartOptions = {
              series: [{
                name: "Sales",
                data: sales
              }],
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
        }, {
          key: "BindMAEN",
          value: function BindMAEN(maen) {
            this.chartOptionsDonut = {
              series: [maen.morning, maen.afterNoon, maen.evening, maen.night],
              chart: {
                type: "donut"
              },
              labels: ["Morning", "Evening", "Afternoon", "Night"],
              responsive: [{
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
              }]
            };
          }
        }, {
          key: "GetDashboard",
          value: function GetDashboard() {
            var _this16 = this;

            this.service.GetDashboard(this.ls.getSelectedLocation().locationID, new Date()).subscribe(function (res) {
              _this16.dashboardSummary = res.summarysales;

              _this16.BindTodaysSales(res.todaysales.sales, res.todaysales.timeSlot);

              _this16.BindMAEN(res.maensales);
            }, function (error) {});
          }
        }, {
          key: "GetDataDashboard",
          value: function GetDataDashboard() {
            var _this17 = this;

            this.service.GetDashboardRange(this.ls.getSelectedLocation().locationID, this.parseDate(this._datepicker.fromDate), this.parseDate(this._datepicker.toDate)).subscribe(function (res) {
              _this17.dashboardSummary = res.summarysales;

              _this17.BindTodaysSales(res.todaysales.sales, res.todaysales.timeSlot);

              _this17.BindMAEN(res.maensales);
            }, function (error) {});
          }
        }, {
          key: "parseDate",
          value: function parseDate(obj) {
            return obj.year + "-" + obj.month + "-" + obj.day;
            ;
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboadService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }];
      };

      DashboardComponent.propDecorators = {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["chart"]
        }],
        _datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_6__["NgbdDatepickerRangePopup"], {
            "static": true
          }]
        }]
      };
      DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./dashboard.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./dashboard.component.css */
        "./src/app/admin/dashboard/dashboard.component.css"))["default"]]
      }), __metadata("design:paramtypes", [src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboadService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])], DashboardComponent);
      /***/
    },

    /***/
    "./src/app/admin/harmanocontract/gallery/add/addgallery.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/admin/harmanocontract/gallery/add/addgallery.component.ts ***!
      \***************************************************************************/

    /*! exports provided: AddGalleryHrCntComponent */

    /***/
    function srcAppAdminHarmanocontractGalleryAddAddgalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGalleryHrCntComponent", function () {
        return AddGalleryHrCntComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/hrcntgallery.service */
      "./src/app/_services/hrcntgallery.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddGalleryHrCntComponent = /*#__PURE__*/function () {
        function AddGalleryHrCntComponent(formBuilder, router, route, ls, ts, galleryService) {
          _classCallCheck(this, AddGalleryHrCntComponent);

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

        _createClass(AddGalleryHrCntComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedGallery();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.galleryForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              statusID: [true],
              galleryID: 0,
              imagePath: [''],
              displayOrder: ['']
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
            this.f.title.setValue(obj.title);
            this.f.arabicTitle.setValue(obj.arabicTitle);
            this.f.galleryID.setValue(obj.galleryID);
            this.f.imagePath.setValue(obj.imagePath);
            this.f.displayOrder.setValue(obj.displayOrder);
            this.f.statusID.setValue(obj.statusID === 1 ? true : false);
            this.imgComp.imageUrl = obj.imagePath;
          }
        }, {
          key: "setSelectedGallery",
          value: function setSelectedGallery() {
            var _this18 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this18.loadingGallery = true;

                _this18.f.galleryID.setValue(sid);

                _this18.galleryService.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this18.editForm(res);

                  _this18.loadingGallery = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this19 = this;

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
              this.galleryService.insert(this.galleryForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this19.ts.showSuccess("Success", "Record added successfully.");

                  _this19.router.navigate(['/admin/harmanocontract/gallery']);
                }

                _this19.loading = false;
              }, function (error) {
                _this19.ts.showError("Error", "Failed to insert record.");

                _this19.loading = false;
              });
            } else {
              //Update category
              this.galleryService.update(this.galleryForm.value).subscribe(function (data) {
                _this19.loading = false;

                if (data != 0) {
                  _this19.ts.showSuccess("Success", "Record updated successfully.");

                  _this19.router.navigate(['/admin/harmanocontract/gallery']);
                }
              }, function (error) {
                _this19.ts.showError("Error", "Failed to update record.");

                _this19.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.galleryForm.controls;
          }
        }]);

        return AddGalleryHrCntComponent;
      }();

      AddGalleryHrCntComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrCntGalleryService"]
        }];
      };

      AddGalleryHrCntComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddGalleryHrCntComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addgallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/add/addgallery.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrCntGalleryService"]])], AddGalleryHrCntComponent);
      /***/
    },

    /***/
    "./src/app/admin/harmanocontract/gallery/gallery.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admin/harmanocontract/gallery/gallery.component.ts ***!
      \********************************************************************/

    /*! exports provided: HrCntGalleryComponent */

    /***/
    function srcAppAdminHarmanocontractGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrCntGalleryComponent", function () {
        return HrCntGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/hrcntgallery.service */
      "./src/app/_services/hrcntgallery.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var HrCntGalleryComponent = /*#__PURE__*/function () {
        function HrCntGalleryComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, HrCntGalleryComponent);

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

        _createClass(HrCntGalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this20 = this;

            this.service.ExportList().subscribe(function (res) {
              _this20.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this20.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.data$ = this.service.data$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref3) {
            var column = _ref3.column,
                direction = _ref3.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(gallery) {
            this.router.navigate(["admin/harmanocontract/gallery/edit", gallery]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this21 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this21.ts.showSuccess("Success", "Record deleted successfully.");

                _this21.getData();
              } else {
                _this21.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this21.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return HrCntGalleryComponent;
      }();

      HrCntGalleryComponent.ctorParameters = function () {
        return [{
          type: src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrCntGalleryService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      HrCntGalleryComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      HrCntGalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./gallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanocontract/gallery/gallery.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_hrcntgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrCntGalleryService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HrCntGalleryComponent);
      /***/
    },

    /***/
    "./src/app/admin/harmanorepair/gallery/add/addgallery.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/harmanorepair/gallery/add/addgallery.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AddGalleryHrRprComponent */

    /***/
    function srcAppAdminHarmanorepairGalleryAddAddgalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGalleryHrRprComponent", function () {
        return AddGalleryHrRprComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/hrrprgallery.service */
      "./src/app/_services/hrrprgallery.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddGalleryHrRprComponent = /*#__PURE__*/function () {
        function AddGalleryHrRprComponent(formBuilder, router, route, ls, ts, galleryService) {
          _classCallCheck(this, AddGalleryHrRprComponent);

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

        _createClass(AddGalleryHrRprComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedGallery();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.galleryForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              statusID: [true],
              galleryID: 0,
              imagePath: [''],
              displayOrder: ['']
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
            this.f.title.setValue(obj.title);
            this.f.arabicTitle.setValue(obj.arabicTitle);
            this.f.galleryID.setValue(obj.galleryID);
            this.f.imagePath.setValue(obj.imagePath);
            this.f.displayOrder.setValue(obj.displayOrder);
            this.f.statusID.setValue(obj.statusID === 1 ? true : false);
            this.imgComp.imageUrl = obj.imagePath;
          }
        }, {
          key: "setSelectedGallery",
          value: function setSelectedGallery() {
            var _this22 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this22.loadingGallery = true;

                _this22.f.galleryID.setValue(sid);

                _this22.galleryService.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this22.editForm(res);

                  _this22.loadingGallery = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this23 = this;

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
              this.galleryService.insert(this.galleryForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this23.ts.showSuccess("Success", "Record added successfully.");

                  _this23.router.navigate(['/admin/harmanorepair/gallery']);
                }

                _this23.loading = false;
              }, function (error) {
                _this23.ts.showError("Error", "Failed to insert record.");

                _this23.loading = false;
              });
            } else {
              //Update category
              this.galleryService.update(this.galleryForm.value).subscribe(function (data) {
                _this23.loading = false;

                if (data != 0) {
                  _this23.ts.showSuccess("Success", "Record updated successfully.");

                  _this23.router.navigate(['/admin/harmanorepair/gallery']);
                }
              }, function (error) {
                _this23.ts.showError("Error", "Failed to update record.");

                _this23.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.galleryForm.controls;
          }
        }]);

        return AddGalleryHrRprComponent;
      }();

      AddGalleryHrRprComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrRprGalleryService"]
        }];
      };

      AddGalleryHrRprComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddGalleryHrRprComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addgallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/add/addgallery.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_6__["HrRprGalleryService"]])], AddGalleryHrRprComponent);
      /***/
    },

    /***/
    "./src/app/admin/harmanorepair/gallery/gallery.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/admin/harmanorepair/gallery/gallery.component.ts ***!
      \******************************************************************/

    /*! exports provided: HrRprGalleryComponent */

    /***/
    function srcAppAdminHarmanorepairGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HrRprGalleryComponent", function () {
        return HrRprGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/hrrprgallery.service */
      "./src/app/_services/hrrprgallery.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var HrRprGalleryComponent = /*#__PURE__*/function () {
        function HrRprGalleryComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, HrRprGalleryComponent);

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

        _createClass(HrRprGalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this24 = this;

            this.service.ExportList().subscribe(function (res) {
              _this24.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this24.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.data$ = this.service.data$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref4) {
            var column = _ref4.column,
                direction = _ref4.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(gallery) {
            this.router.navigate(["admin/harmanorepair/gallery/edit", gallery]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this25 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this25.ts.showSuccess("Success", "Record deleted successfully.");

                _this25.getData();
              } else {
                _this25.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this25.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return HrRprGalleryComponent;
      }();

      HrRprGalleryComponent.ctorParameters = function () {
        return [{
          type: src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrRprGalleryService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      HrRprGalleryComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      HrRprGalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./gallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/harmanorepair/gallery/gallery.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_hrrprgallery_service__WEBPACK_IMPORTED_MODULE_7__["HrRprGalleryService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HrRprGalleryComponent);
      /***/
    },

    /***/
    "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.css":
    /*!**************************************************************************************!*\
      !*** ./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminPlaneragroupNewseventAddnewseventAddnewseventComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BsYW5lcmFncm91cC9uZXdzZXZlbnQvYWRkbmV3c2V2ZW50L2FkZG5ld3NldmVudC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddnewseventComponent */

    /***/
    function srcAppAdminPlaneragroupNewseventAddnewseventAddnewseventComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddnewseventComponent", function () {
        return AddnewseventComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/plngrpnewsalert.service */
      "./src/app/_services/plngrpnewsalert.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddnewseventComponent = /*#__PURE__*/function () {
        function AddnewseventComponent(formBuilder, router, route, ls, ts, newseventService) {
          _classCallCheck(this, AddnewseventComponent);

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

        _createClass(AddnewseventComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedCategory();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.newsandeventForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              pagename: [''],
              description: [''],
              arabicDescription: [''],
              statusID: [true],
              newsEventID: 0,
              image: [''],
              displayOrder: ['']
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
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
        }, {
          key: "setSelectedCategory",
          value: function setSelectedCategory() {
            var _this26 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this26.loadingCategory = true;

                _this26.f.newsEventID.setValue(sid);

                _this26.newseventService.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this26.editForm(res);

                  _this26.loadingCategory = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this27 = this;

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
              this.newseventService.insert(this.newsandeventForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this27.ts.showSuccess("Success", "Record added successfully.");

                  _this27.router.navigate(['/admin/planeragroup/newsevent']);
                }

                _this27.loading = false;
              }, function (error) {
                _this27.ts.showError("Error", "Failed to insert record.");

                _this27.loading = false;
              });
            } else {
              //Update category
              this.newseventService.update(this.newsandeventForm.value).subscribe(function (data) {
                _this27.loading = false;

                if (data != 0) {
                  _this27.ts.showSuccess("Success", "Record updated successfully.");

                  _this27.router.navigate(['/admin/planeragroup/newsevent']);
                }
              }, function (error) {
                _this27.ts.showError("Error", "Failed to update record.");

                _this27.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.newsandeventForm.controls;
          }
        }]);

        return AddnewseventComponent;
      }();

      AddnewseventComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_6__["PlnGrpNewAlertService"]
        }];
      };

      AddnewseventComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddnewseventComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addnewsevent',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addnewsevent.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./addnewsevent.component.css */
        "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.css"))["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_6__["PlnGrpNewAlertService"]])], AddnewseventComponent);
      /***/
    },

    /***/
    "./src/app/admin/planeragroup/newsevent/newsevent.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/admin/planeragroup/newsevent/newsevent.component.ts ***!
      \*********************************************************************/

    /*! exports provided: newseventComponent */

    /***/
    function srcAppAdminPlaneragroupNewseventNewseventComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "newseventComponent", function () {
        return newseventComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/plngrpnewsalert.service */
      "./src/app/_services/plngrpnewsalert.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var newseventComponent = /*#__PURE__*/function () {
        function newseventComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, newseventComponent);

          this.service = service;
          this.excelService = excelService;
          this.ls = ls;
          this.ts = ts;
          this.tss = tss;
          this.router = router;
          this.categories = []; // this.selectedBrand = this.ls.getSelectedBrand().brandID;

          this.loading$ = service.loading$;
          this.submit = false;
        }

        _createClass(newseventComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this28 = this;

            this.service.ExportList().subscribe(function (res) {
              _this28.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this28.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.data$ = this.service.data$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref5) {
            var column = _ref5.column,
                direction = _ref5.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(newsevent) {
            this.router.navigate(["admin/planeragroup/newsevent/edit", newsevent]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this29 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this29.ts.showSuccess("Success", "Record deleted successfully.");

                _this29.getData();
              } else {
                _this29.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this29.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return newseventComponent;
      }();

      newseventComponent.ctorParameters = function () {
        return [{
          type: src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_7__["PlnGrpNewAlertService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      newseventComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      newseventComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-newsevent',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./newsevent.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/newsevent/newsevent.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_plngrpnewsalert_service__WEBPACK_IMPORTED_MODULE_7__["PlnGrpNewAlertService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], newseventComponent);
      /***/
    },

    /***/
    "./src/app/admin/planeragroup/service/add/addservices.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/admin/planeragroup/service/add/addservices.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AddServiceComponent */

    /***/
    function srcAppAdminPlaneragroupServiceAddAddservicesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function () {
        return AddServiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_plngrpservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/plngrpservices.service */
      "./src/app/_services/plngrpservices.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddServiceComponent = /*#__PURE__*/function () {
        function AddServiceComponent(formBuilder, router, route, ls, ts, Service) {
          _classCallCheck(this, AddServiceComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.route = route;
          this.ls = ls;
          this.ts = ts;
          this.Service = Service;
          this.submitted = false;
          this.loading = false;
          this.loadingService = false;
          this.ButtonText = "Save";
          this.createForm();
        }

        _createClass(AddServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedService();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.servicesForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              description: [''],
              arabicDescription: [''],
              displayOrder: [''],
              statusID: [true],
              serviceID: 0
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
            this.f.title.setValue(obj.title);
            this.f.arabicTitle.setValue(obj.arabicTitle);
            this.f.serviceID.setValue(obj.serviceID);
            this.f.description.setValue(obj.description);
            this.f.arabicDescription.setValue(obj.arabicDescription);
            this.f.statusID.setValue(obj.statusID === 1 ? true : false);
            this.imgComp.imageUrl = obj.imagePath;
          }
        }, {
          key: "setSelectedService",
          value: function setSelectedService() {
            var _this30 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this30.loadingService = true;

                _this30.f.ServiceID.setValue(sid);

                _this30.Service.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this30.editForm(res);

                  _this30.loadingService = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this31 = this;

            debugger;
            this.servicesForm.markAllAsTouched();
            this.submitted = true;

            if (this.servicesForm.invalid) {
              return;
            }

            this.loading = true;
            this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
            /*    this.f.imagePath.setValue(this.imgComp.imageUrl);*/

            if (parseInt(this.f.serviceID.value) === 0) {
              //Insert category
              this.Service.insert(this.servicesForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this31.ts.showSuccess("Success", "Record added successfully.");

                  _this31.router.navigate(['/admin/planeragroup/service']);
                }

                _this31.loading = false;
              }, function (error) {
                _this31.ts.showError("Error", "Failed to insert record.");

                _this31.loading = false;
              });
            } else {
              //Update category
              this.Service.update(this.servicesForm.value).subscribe(function (data) {
                _this31.loading = false;

                if (data != 0) {
                  _this31.ts.showSuccess("Success", "Record updated successfully.");

                  _this31.router.navigate(['/admin/planeragroup/service']);
                }
              }, function (error) {
                _this31.ts.showError("Error", "Failed to update record.");

                _this31.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.servicesForm.controls;
          }
        }]);

        return AddServiceComponent;
      }();

      AddServiceComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_plngrpservices_service__WEBPACK_IMPORTED_MODULE_6__["PlnGrpServicesService"]
        }];
      };

      AddServiceComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddServiceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addservices',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addservices.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/service/add/addservices.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_plngrpservices_service__WEBPACK_IMPORTED_MODULE_6__["PlnGrpServicesService"]])], AddServiceComponent);
      /***/
    },

    /***/
    "./src/app/admin/planeragroup/service/service.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/admin/planeragroup/service/service.component.ts ***!
      \*****************************************************************/

    /*! exports provided: serviceComponent */

    /***/
    function srcAppAdminPlaneragroupServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "serviceComponent", function () {
        return serviceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_plngrpservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/plngrpservices.service */
      "./src/app/_services/plngrpservices.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var serviceComponent = /*#__PURE__*/function () {
        function serviceComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, serviceComponent);

          this.service = service;
          this.excelService = excelService;
          this.ls = ls;
          this.ts = ts;
          this.tss = tss;
          this.router = router;
          this.services = [];
          this.loading$ = service.loading$;
          this.submit = false;
        }

        _createClass(serviceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this32 = this;

            this.service.ExportList().subscribe(function (res) {
              _this32.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this32.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.service$ = this.service.allData$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref6) {
            var column = _ref6.column,
                direction = _ref6.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(service) {
            this.router.navigate(["admin/planeragroup/service/edit", service]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this33 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this33.ts.showSuccess("Success", "Record deleted successfully.");

                _this33.getData();
              } else {
                _this33.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this33.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return serviceComponent;
      }();

      serviceComponent.ctorParameters = function () {
        return [{
          type: src_app_services_plngrpservices_service__WEBPACK_IMPORTED_MODULE_7__["PlnGrpServicesService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      serviceComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      serviceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-service',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./service.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planeragroup/service/service.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_plngrpservices_service__WEBPACK_IMPORTED_MODULE_7__["PlnGrpServicesService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], serviceComponent);
      /***/
    },

    /***/
    "./src/app/admin/planerainterior/gallery/add/addgallery.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/admin/planerainterior/gallery/add/addgallery.component.ts ***!
      \***************************************************************************/

    /*! exports provided: AddGalleryComponent */

    /***/
    function srcAppAdminPlanerainteriorGalleryAddAddgalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddGalleryComponent", function () {
        return AddGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/plnintgallery */
      "./src/app/_services/plnintgallery.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AddGalleryComponent = /*#__PURE__*/function () {
        function AddGalleryComponent(formBuilder, router, route, ls, ts, galleryService) {
          _classCallCheck(this, AddGalleryComponent);

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

        _createClass(AddGalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSelectedGallery();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.galleryForm = this.formBuilder.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              arabicTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              statusID: [true],
              galleryID: 0,
              imagePath: [''],
              displayOrder: ['']
            });
          }
        }, {
          key: "editForm",
          value: function editForm(obj) {
            this.f.title.setValue(obj.title);
            this.f.arabicTitle.setValue(obj.arabicTitle);
            this.f.galleryID.setValue(obj.galleryID);
            this.f.imagePath.setValue(obj.imagePath);
            this.f.displayOrder.setValue(obj.displayOrder);
            this.f.statusID.setValue(obj.statusID === 1 ? true : false);
            this.imgComp.imageUrl = obj.imagePath;
          }
        }, {
          key: "setSelectedGallery",
          value: function setSelectedGallery() {
            var _this34 = this;

            this.route.paramMap.subscribe(function (param) {
              var sid = +param.get('id');

              if (sid) {
                _this34.loadingGallery = true;

                _this34.f.galleryID.setValue(sid);

                _this34.galleryService.getById(sid).subscribe(function (res) {
                  //Set Forms
                  _this34.editForm(res);

                  _this34.loadingGallery = false;
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this35 = this;

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
              this.galleryService.insert(this.galleryForm.value).subscribe(function (data) {
                if (data != 0) {
                  _this35.ts.showSuccess("Success", "Record added successfully.");

                  _this35.router.navigate(['/admin/planerinterior/gallery']);
                }

                _this35.loading = false;
              }, function (error) {
                _this35.ts.showError("Error", "Failed to insert record.");

                _this35.loading = false;
              });
            } else {
              //Update category
              this.galleryService.update(this.galleryForm.value).subscribe(function (data) {
                _this35.loading = false;

                if (data != 0) {
                  _this35.ts.showSuccess("Success", "Record updated successfully.");

                  _this35.router.navigate(['/admin/planerainterior/gallery']);
                }
              }, function (error) {
                _this35.ts.showError("Error", "Failed to update record.");

                _this35.loading = false;
              });
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.galleryForm.controls;
          }
        }]);

        return AddGalleryComponent;
      }();

      AddGalleryComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_6__["PlnIntGalleryService"]
        }];
      };

      AddGalleryComponent.propDecorators = {
        imgComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_2__["ImageuploadComponent"], {
            "static": true
          }]
        }]
      };
      AddGalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-addgallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./addgallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/add/addgallery.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_6__["PlnIntGalleryService"]])], AddGalleryComponent);
      /***/
    },

    /***/
    "./src/app/admin/planerainterior/gallery/gallery.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admin/planerainterior/gallery/gallery.component.ts ***!
      \********************************************************************/

    /*! exports provided: GalleryComponent */

    /***/
    function srcAppAdminPlanerainteriorGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
        return GalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_directives/sortable.directive */
      "./src/app/_directives/sortable.directive.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/ExportExcel/excel.service */
      "./src/ExportExcel/excel.service.ts");
      /* harmony import */


      var src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/plnintgallery */
      "./src/app/_services/plnintgallery.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var GalleryComponent = /*#__PURE__*/function () {
        function GalleryComponent(service, excelService, ls, ts, tss, router) {
          _classCallCheck(this, GalleryComponent);

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

        _createClass(GalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this36 = this;

            this.service.ExportList().subscribe(function (res) {
              _this36.excelService.exportAsExcelFile(res, 'Report_Export');
            }, function (error) {
              _this36.ts.showError("Error", "Failed to export");
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            this.service.getAllData();
            this.data$ = this.service.data$;
            this.total$ = this.service.total$;
            this.loading$ = this.service.loading$;
          }
        }, {
          key: "onSort",
          value: function onSort(_ref7) {
            var column = _ref7.column,
                direction = _ref7.direction;
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          }
        }, {
          key: "Edit",
          value: function Edit(gallery) {
            this.router.navigate(["admin/planerainterior/gallery/edit", gallery]);
          }
        }, {
          key: "Delete",
          value: function Delete(obj) {
            var _this37 = this;

            this.service["delete"](obj).subscribe(function (res) {
              if (res != 0) {
                _this37.ts.showSuccess("Success", "Record deleted successfully.");

                _this37.getData();
              } else {
                _this37.ts.showError("Error", "Failed to delete record.");
              }
            }, function (error) {
              _this37.ts.showError("Error", "Failed to delete record.");
            });
          }
        }]);

        return GalleryComponent;
      }();

      GalleryComponent.ctorParameters = function () {
        return [{
          type: src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_7__["PlnIntGalleryService"]
        }, {
          type: src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      GalleryComponent.propDecorators = {
        headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [src_app_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["NgbdSortableHeader"]]
        }]
      };
      GalleryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-gallery',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./gallery.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/planerainterior/gallery/gallery.component.html"))["default"],
        providers: [src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]]
      }), __metadata("design:paramtypes", [src_app_services_plnintgallery__WEBPACK_IMPORTED_MODULE_7__["PlnIntGalleryService"], src_ExportExcel_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"], src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], src_app_services_toastservice__WEBPACK_IMPORTED_MODULE_4__["ToastService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], GalleryComponent);
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nav-menu/nav-menu.component */
      "./src/app/nav-menu/nav-menu.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./counter/counter.component */
      "./src/app/counter/counter.component.ts");
      /* harmony import */


      var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./fetch-data/fetch-data.component */
      "./src/app/fetch-data/fetch-data.component.ts");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./admin/dashboard/dashboard.component */
      "./src/app/admin/dashboard/dashboard.component.ts");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layout/layout.component */
      "./src/app/layout/layout.component.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./imageupload/imageupload.component */
      "./src/app/imageupload/imageupload.component.ts");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./datepicker-range/datepicker-range-popup */
      "./src/app/datepicker-range/datepicker-range-popup.ts");
      /* harmony import */


      var _admin_planeragroup_newsevent_newsevent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./admin/planeragroup/newsevent/newsevent.component */
      "./src/app/admin/planeragroup/newsevent/newsevent.component.ts");
      /* harmony import */


      var _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./admin/planeragroup/newsevent/addnewsevent/addnewsevent.component */
      "./src/app/admin/planeragroup/newsevent/addnewsevent/addnewsevent.component.ts");
      /* harmony import */


      var _admin_planeragroup_service_service_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ././admin/planeragroup/service/service.component */
      "./src/app/admin/planeragroup/service/service.component.ts");
      /* harmony import */


      var _admin_planeragroup_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ././admin/planeragroup/service/add/addservices.component */
      "./src/app/admin/planeragroup/service/add/addservices.component.ts");
      /* harmony import */


      var _admin_harmanorepair_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./admin/harmanorepair/gallery/gallery.component */
      "./src/app/admin/harmanorepair/gallery/gallery.component.ts");
      /* harmony import */


      var _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./admin/harmanorepair/gallery/add/addgallery.component */
      "./src/app/admin/harmanorepair/gallery/add/addgallery.component.ts");
      /* harmony import */


      var _admin_harmanocontract_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./admin/harmanocontract/gallery/gallery.component */
      "./src/app/admin/harmanocontract/gallery/gallery.component.ts");
      /* harmony import */


      var _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./admin/harmanocontract/gallery/add/addgallery.component */
      "./src/app/admin/harmanocontract/gallery/add/addgallery.component.ts");
      /* harmony import */


      var _admin_planerainterior_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ././admin/planerainterior/gallery/gallery.component */
      "./src/app/admin/planerainterior/gallery/gallery.component.ts");
      /* harmony import */


      var _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ././admin/planerainterior/gallery/add/addgallery.component */
      "./src/app/admin/planerainterior/gallery/add/addgallery.component.ts");
      /* harmony import */


      var _admin_activarbahrain_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./admin/activarbahrain/gallery/gallery.component */
      "./src/app/admin/activarbahrain/gallery/gallery.component.ts");
      /* harmony import */


      var _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./admin/activarbahrain/gallery/add/addgallery.component */
      "./src/app/admin/activarbahrain/gallery/add/addgallery.component.ts");
      /* harmony import */


      var _admin_activardubai_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./admin/activardubai/gallery/gallery.component */
      "./src/app/admin/activardubai/gallery/gallery.component.ts");
      /* harmony import */


      var _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./admin/activardubai/gallery/add/addgallery.component */
      "./src/app/admin/activardubai/gallery/add/addgallery.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"], _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"], _imageupload_imageupload_component__WEBPACK_IMPORTED_MODULE_16__["ImageuploadComponent"], _datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__["NgbdDatepickerRangePopup"], _admin_planeragroup_newsevent_newsevent_component__WEBPACK_IMPORTED_MODULE_22__["newseventComponent"], _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__["AddnewseventComponent"], _admin_planeragroup_service_service_component__WEBPACK_IMPORTED_MODULE_24__["serviceComponent"], _admin_planeragroup_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_25__["AddServiceComponent"], //HRRepairServiceComponent,
        //AddHRRepairServiceComponent,
        _admin_harmanorepair_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__["HrRprGalleryComponent"], _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_27__["AddGalleryHrRprComponent"], _admin_planerainterior_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"], _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__["AddGalleryComponent"], _admin_activarbahrain_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_32__["ActBahGalleryComponent"], _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_33__["AddGalleryActBahComponent"], _admin_activardubai_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__["ActDubGalleryComponent"], _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__["AddGalleryActDubComponent"], _admin_harmanocontract_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_28__["HrCntGalleryComponent"], _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__["AddGalleryHrCntComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: 'ng-cli-universal'
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_18__["NgApexchartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: '',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
          pathMatch: 'full'
        }, {
          path: 'admin',
          component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
          children: [{
            path: 'dashboard',
            component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
          }, {
            path: 'planeragroup/newsevent',
            component: _admin_planeragroup_newsevent_newsevent_component__WEBPACK_IMPORTED_MODULE_22__["newseventComponent"]
          }, {
            path: 'planeragroup/newsevent/add',
            component: _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__["AddnewseventComponent"]
          }, {
            path: 'planeragroup/newsevent/edit/:id',
            component: _admin_planeragroup_newsevent_addnewsevent_addnewsevent_component__WEBPACK_IMPORTED_MODULE_23__["AddnewseventComponent"]
          }, {
            path: 'planeragroup/service',
            component: _admin_planeragroup_service_service_component__WEBPACK_IMPORTED_MODULE_24__["serviceComponent"]
          }, {
            path: 'planeragroup/service/add',
            component: _admin_planeragroup_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_25__["AddServiceComponent"]
          }, {
            path: 'planeragroup/service/edit/:id',
            component: _admin_planeragroup_service_add_addservices_component__WEBPACK_IMPORTED_MODULE_25__["AddServiceComponent"]
          }, {
            path: 'harmanorepair/gallery',
            component: _admin_harmanorepair_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_26__["HrRprGalleryComponent"]
          }, {
            path: 'harmanorepair/gallery/add',
            component: _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_27__["AddGalleryHrRprComponent"]
          }, {
            path: 'harmanorepair/gallery/edit/:id',
            component: _admin_harmanorepair_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_27__["AddGalleryHrRprComponent"]
          }, {
            path: 'planerainterior/gallery',
            component: _admin_planerainterior_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_30__["GalleryComponent"]
          }, {
            path: 'planerainterior/gallery/add',
            component: _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__["AddGalleryComponent"]
          }, {
            path: 'planerainterior/gallery/edit/:id',
            component: _admin_planerainterior_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_31__["AddGalleryComponent"]
          }, {
            path: 'activarbahrain/gallery',
            component: _admin_activarbahrain_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_32__["ActBahGalleryComponent"]
          }, {
            path: 'activarbahrain/gallery/add',
            component: _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_33__["AddGalleryActBahComponent"]
          }, {
            path: 'activarbahrain/gallery/edit/:id',
            component: _admin_activarbahrain_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_33__["AddGalleryActBahComponent"]
          }, {
            path: 'activardubai/gallery',
            component: _admin_activardubai_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_34__["ActDubGalleryComponent"]
          }, {
            path: 'activardubai/gallery/add',
            component: _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__["AddGalleryActDubComponent"]
          }, {
            path: 'activardubai/gallery/edit/:id',
            component: _admin_activardubai_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_35__["AddGalleryActDubComponent"]
          }, {
            path: 'harmanocontract/gallery',
            component: _admin_harmanocontract_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_28__["HrCntGalleryComponent"]
          }, {
            path: 'harmanocontract/gallery/add',
            component: _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__["AddGalleryHrCntComponent"]
          }, {
            path: 'harmanocontract/gallery/edit/:id',
            component: _admin_harmanocontract_gallery_add_addgallery_component__WEBPACK_IMPORTED_MODULE_29__["AddGalleryHrCntComponent"]
          }]
        }]), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]],
        providers: [],
        exports: [_datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__["NgbdDatepickerRangePopup"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _datepicker_range_datepicker_range_popup__WEBPACK_IMPORTED_MODULE_21__["NgbdDatepickerRangePopup"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/counter/counter.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/counter/counter.component.ts ***!
      \**********************************************/

    /*! exports provided: CounterComponent */

    /***/
    function srcAppCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
        return CounterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var CounterComponent = /*#__PURE__*/function () {
        function CounterComponent() {
          _classCallCheck(this, CounterComponent);

          this.currentCount = 0;
        }

        _createClass(CounterComponent, [{
          key: "incrementCounter",
          value: function incrementCounter() {
            this.currentCount++;
          }
        }]);

        return CounterComponent;
      }();

      CounterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./counter.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html"))["default"]
      })], CounterComponent);
      /***/
    },

    /***/
    "./src/app/datepicker-range/datepicker-range-popup.ts":
    /*!************************************************************!*\
      !*** ./src/app/datepicker-range/datepicker-range-popup.ts ***!
      \************************************************************/

    /*! exports provided: NgbdDatepickerRangePopup */

    /***/
    function srcAppDatepickerRangeDatepickerRangePopupTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDatepickerRangePopup", function () {
        return NgbdDatepickerRangePopup;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var NgbdDatepickerRangePopup = /*#__PURE__*/function () {
        function NgbdDatepickerRangePopup(calendar, formatter) {
          _classCallCheck(this, NgbdDatepickerRangePopup);

          //var date = new Date();
          //this.fromDate = new NgbDate(date.getFullYear(), date.getMonth(), 1);
          //this.toDate = new NgbDate(date.getFullYear(), date.getMonth() + 1 ,0);
          this.calendar = calendar;
          this.formatter = formatter;
          this.hoveredDate = null;
          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
        }

        _createClass(NgbdDatepickerRangePopup, [{
          key: "onDateSelection",
          value: function onDateSelection(date) {
            if (!this.fromDate && !this.toDate) {
              this.fromDate = date;
            } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
              this.toDate = date;
            } else {
              this.toDate = null;
              this.fromDate = date;
            }
          }
        }, {
          key: "isHovered",
          value: function isHovered(date) {
            return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
          }
        }, {
          key: "isInside",
          value: function isInside(date) {
            return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
          }
        }, {
          key: "isRange",
          value: function isRange(date) {
            return date.equals(this.fromDate) || this.toDate && date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
          }
        }, {
          key: "validateInput",
          value: function validateInput(currentValue, input) {
            var parsed = this.formatter.parse(input);
            return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
          }
        }]);

        return NgbdDatepickerRangePopup;
      }();

      NgbdDatepickerRangePopup.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]
        }];
      };

      NgbdDatepickerRangePopup = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'ngbd-datepicker-range-popup',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./datepicker-range-popup.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/datepicker-range/datepicker-range-popup.html"))["default"],
        styles: ["\n    .form-group.hidden {\n      width: 0;\n      margin: 0;\n      border: none;\n      padding: 0;\n    }\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n  "]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]])], NgbdDatepickerRangePopup);
      /***/
    },

    /***/
    "./src/app/fetch-data/fetch-data.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/fetch-data/fetch-data.component.ts ***!
      \****************************************************/

    /*! exports provided: FetchDataComponent */

    /***/
    function srcAppFetchDataFetchDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function () {
        return FetchDataComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FetchDataComponent = function FetchDataComponent(http, baseUrl) {
        var _this38 = this;

        _classCallCheck(this, FetchDataComponent);

        http.get(baseUrl + 'weatherforecast').subscribe(function (result) {
          _this38.forecasts = result;
        }, function (error) {
          return console.error(error);
        });
      };

      FetchDataComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['BASE_URL']
          }]
        }];
      };

      FetchDataComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./fetch-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])], FetchDataComponent);
      /***/
    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var HomeComponent = function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      };

      HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./home.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"]
      })], HomeComponent);
      /***/
    },

    /***/
    "./src/app/imageupload/imageupload.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/imageupload/imageupload.component.ts ***!
      \******************************************************/

    /*! exports provided: ImageuploadComponent */

    /***/
    function srcAppImageuploadImageuploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageuploadComponent", function () {
        return ImageuploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var ImageuploadComponent = /*#__PURE__*/function () {
        function ImageuploadComponent(fb, cd) {
          _classCallCheck(this, ImageuploadComponent);

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

        _createClass(ImageuploadComponent, [{
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this39 = this;

            var reader = new FileReader(); // HTML5 FileReader API

            var file = event.target.files[0];

            if (event.target.files && event.target.files[0]) {
              reader.readAsDataURL(file); // When file uploads set it to file formcontrol

              reader.onload = function () {
                _this39.imageUrl = reader.result;

                _this39.registrationForm.patchValue({
                  file: reader.result
                });

                _this39.editFile = false;
                _this39.removeUpload = true;
              }; // ChangeDetectorRef since file is loading outside the zone


              this.cd.markForCheck();
            }
          }
        }]);

        return ImageuploadComponent;
      }();

      ImageuploadComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      ImageuploadComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-imageupload',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./imageupload.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/imageupload/imageupload.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], ImageuploadComponent);
      /***/
    },

    /***/
    "./src/app/layout/layout.component.css":
    /*!*********************************************!*\
      !*** ./src/app/layout/layout.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".nav-bar-inner-spaces{\r\n  display: -webkit-box;  \r\n}\r\n\r\n.horizontal-menu .bottom-navbar .page-navigation > .nav-item{\r\n    margin-right: 10px;\r\n}\r\n\r\n.flag-icon-us {\r\n  font-size: 17PX !important;\r\n}\r\n\r\n.flag-icon-sa {\r\n  font-size: 17PX !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXItaW5uZXItc3BhY2Vze1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgXHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLW1lbnUgLmJvdHRvbS1uYXZiYXIgLnBhZ2UtbmF2aWdhdGlvbiA+IC5uYXYtaXRlbXtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZmxhZy1pY29uLXVzIHtcclxuICBmb250LXNpemU6IDE3UFggIWltcG9ydGFudDtcclxufVxyXG4uZmxhZy1pY29uLXNhIHtcclxuICBmb250LXNpemU6IDE3UFggIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/layout/layout.component.ts":
    /*!********************************************!*\
      !*** ./src/app/layout/layout.component.ts ***!
      \********************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      /*import { LocationsService } from '../_services/locations.service';*/


      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(router
        /*    , public service: LocationsService*/
        , ls) {
          _classCallCheck(this, LayoutComponent);

          this.router = router;
          this.ls = ls;
          this._Langname = "";
          this.branchname = "";
          this.email = ""; //this.branchname = this.ls.getSelectedBrand().userName;
          //this.email = this.ls.getSelectedBrand().email;
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var data = this.ls.getSelectedBrand();
            this.loadLocations();
            if (data == null) this.router.navigate(["/"]);
          }
        }, {
          key: "Logout",
          value: function Logout() {
            sessionStorage.clear();
            this.router.navigate(['/']);
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
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
            this.Locations = this.ls.getLocation();
            this.locationID = this.ls.getSelectedLocation().locationID;
          }
        }, {
          key: "changeloc",
          value: function changeloc(LocObj) {
            this.locationID = this.ls.selectedLocation().locationID;
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }];
      };

      LayoutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-layout',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./layout.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./layout.component.css */
        "./src/app/layout/layout.component.css"))["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      /*    , public service: LocationsService*/
      , _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], LayoutComponent);
      /***/
    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/login.service */
      "./src/app/_services/login.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/local-storage.service */
      "./src/app/_services/local-storage.service.ts");
      /* harmony import */


      var _services_toastservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/toastservice */
      "./src/app/_services/toastservice.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, service, ts, router, ls) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.service = service;
          this.ts = ts;
          this.router = router;
          this.ls = ls;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this40 = this;

            this.loginForm.markAllAsTouched();

            if (this.loginForm.invalid) {
              return;
            }

            this.service.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
              if (data != null) {
                _this40.loadLocations(); //this.ls.setSelectedBrand(data);           

              } else {
                _this40.ts.showError("Error", "Username or password is not correct.");
              }
            }, function (error) {
              _this40.ts.showError("Error", "Something went wrong.");
            });
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            this.router.navigate(["/admin/dashboard"]); // this.service.getAllLocations(bid).subscribe((res: any) => {
            //   if(res.length>0){
            //     this.ls.setLocation(res);
            //     this.ls.setSelectedLocation(res[0]);
            //     this.router.navigate(["/admin/dashboard"]);
            //   }
            //   else{
            //     this.ls.setLocation(null);
            //     this.ls.setSelectedLocation(null);
            //   }
            // });
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./login.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_toastservice__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])], LoginComponent);
      /***/
    },

    /***/
    "./src/app/nav-menu/nav-menu.component.css":
    /*!*************************************************!*\
      !*** ./src/app/nav-menu/nav-menu.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/nav-menu/nav-menu.component.ts":
    /*!************************************************!*\
      !*** ./src/app/nav-menu/nav-menu.component.ts ***!
      \************************************************/

    /*! exports provided: NavMenuComponent */

    /***/
    function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
        return NavMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var NavMenuComponent = /*#__PURE__*/function () {
        function NavMenuComponent() {
          _classCallCheck(this, NavMenuComponent);

          this.isExpanded = false;
        }

        _createClass(NavMenuComponent, [{
          key: "collapse",
          value: function collapse() {
            this.isExpanded = false;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isExpanded = !this.isExpanded;
          }
        }]);

        return NavMenuComponent;
      }();

      NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(
        /*! raw-loader!./nav-menu.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
        styles: [__importDefault(__webpack_require__(
        /*! ./nav-menu.component.css */
        "./src/app/nav-menu/nav-menu.component.css"))["default"]]
      })], NavMenuComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! exports provided: getBaseUrl */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
        return getBaseUrl;
      });
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/localize/init */
      "./node_modules/@angular/localize/fesm2015/init.js");
      /* harmony import */


      var _angular_localize_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_localize_init__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /***************************************************************************************************
       * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
       */


      function getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
      }

      var providers = [{
        provide: 'BASE_URL',
        useFactory: getBaseUrl,
        deps: []
      }];

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Projects\PlaneraAdmin\ClientApp\src\main.ts */
      "./src/main.ts");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** stream (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map