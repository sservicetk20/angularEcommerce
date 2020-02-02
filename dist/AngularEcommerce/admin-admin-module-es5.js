function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/layout.js":
  /*!*****************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/layout.js ***!
    \*****************************************************/

  /*! exports provided: LayoutModule, BreakpointObserver, Breakpoints, MediaMatcher */

  /***/
  function node_modulesAngularCdkEsm2015LayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function () {
      return BreakpointObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoints", function () {
      return Breakpoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMatcher", function () {
      return MediaMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{}]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Global registry for all dynamically-created, injected media queries.
     * @type {?}
     */

    var mediaQueriesForWebkitCompatibility = new Set();
    /**
     * Style tag that holds all of the dynamically-created media queries.
     * @type {?}
     */

    var mediaQueryStyleNode;
    /**
     * A utility for calling matchMedia queries.
     */

    var MediaMatcher =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _platform
       */
      function MediaMatcher(_platform) {
        _classCallCheck(this, MediaMatcher);

        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
        // call it from a different scope.
        window.matchMedia.bind(window) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       * @param {?} query
       * @return {?}
       */


      _createClass(MediaMatcher, [{
        key: "matchMedia",
        value: function matchMedia(query) {
          if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
          }

          return this._matchMedia(query);
        }
      }]);

      return MediaMatcher;
    }();

    MediaMatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MediaMatcher.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };
    /** @nocollapse */


    MediaMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaMatcher_Factory() {
        return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      },
      token: MediaMatcher,
      providedIn: "root"
    });
    /**
     * For Webkit engines that only trigger the MediaQueryListListener when
     * there is at least one CSS selector for the respective media query.
     * @param {?} query
     * @return {?}
     */

    function createEmptyStyleRule(query) {
      if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
      }

      try {
        if (!mediaQueryStyleNode) {
          mediaQueryStyleNode = document.createElement('style');
          mediaQueryStyleNode.setAttribute('type', 'text/css');

          /** @type {?} */
          document.head.appendChild(mediaQueryStyleNode);
        }

        if (mediaQueryStyleNode.sheet) {
          /** @type {?} */
          mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
          mediaQueriesForWebkitCompatibility.add(query);
        }
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * No-op matchMedia replacement for non-browser platforms.
     * @param {?} query
     * @return {?}
     */


    function noopMatchMedia(query) {
      // Use `as any` here to avoid adding additional necessary properties for
      // the noop matcher.
      return (
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {}
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Utility for checking the matching state of \@media queries.
     */


    var BreakpointObserver =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _mediaMatcher
       * @param {?} _zone
       */
      function BreakpointObserver(_mediaMatcher, _zone) {
        _classCallCheck(this, BreakpointObserver);

        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */

        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */

        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Completes the active subject, signalling to all other observables to complete.
       * @return {?}
       */


      _createClass(BreakpointObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject.next();

          this._destroySubject.complete();
        }
        /**
         * Whether one or more media queries match the current viewport size.
         * @param {?} value One or more media queries to check.
         * @return {?} Whether any of the media queries match.
         */

      }, {
        key: "isMatched",
        value: function isMatched(value) {
          var _this = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          return queries.some(
          /**
          * @param {?} mediaQuery
          * @return {?}
          */
          function (mediaQuery) {
            return _this._registerQuery(mediaQuery).mql.matches;
          });
        }
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param {?} value One or more media queries to check.
         * @return {?} A stream of matches for the given queries.
         */

      }, {
        key: "observe",
        value: function observe(value) {
          var _this2 = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          /** @type {?} */

          var observables = queries.map(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            return _this2._registerQuery(query).observable;
          });
          /** @type {?} */

          var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

          stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
          return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} breakpointStates
          * @return {?}
          */
          function (breakpointStates) {
            /** @type {?} */
            var response = {
              matches: false,
              breakpoints: {}
            };
            breakpointStates.forEach(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              response.matches = response.matches || state.matches;
              response.breakpoints[state.query] = state.matches;
            });
            return response;
          }));
        }
        /**
         * Registers a specific query to be listened for.
         * @private
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "_registerQuery",
        value: function _registerQuery(query) {
          var _this3 = this;

          // Only set up a new MediaQueryList if it is not already being listened for.
          if (this._queries.has(query)) {
            return (
              /** @type {?} */
              this._queries.get(query)
            );
          }
          /** @type {?} */


          var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.

          /** @type {?} */


          var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.

            /** @type {?} */
            var handler =
            /**
            * @param {?} e
            * @return {?}
            */
            function handler(e) {
              return _this3._zone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(e);
              });
            };

            mql.addListener(handler);
            return (
              /**
              * @return {?}
              */
              function () {
                mql.removeListener(handler);
              }
            );
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} nextMql
          * @return {?}
          */
          function (nextMql) {
            return {
              query: query,
              matches: nextMql.matches
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject)); // Add the MediaQueryList to the set of queries.

          /** @type {?} */

          var output = {
            observable: queryObservable,
            mql: mql
          };

          this._queries.set(query, output);

          return output;
        }
      }]);

      return BreakpointObserver;
    }();

    BreakpointObserver.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    BreakpointObserver.ctorParameters = function () {
      return [{
        type: MediaMatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    BreakpointObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function BreakpointObserver_Factory() {
        return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: BreakpointObserver,
      providedIn: "root"
    });
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     * @param {?} queries
     * @return {?}
     */

    function splitQueries(queries) {
      return queries.map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.split(',');
      }).reduce(
      /**
      * @param {?} a1
      * @param {?} a2
      * @return {?}
      */
      function (a1, a2) {
        return a1.concat(a2);
      }).map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // PascalCase is being used as Breakpoints is used like an enum.
    // tslint:disable-next-line:variable-name

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var Breakpoints = {
      XSmall: '(max-width: 599.99px)',
      Small: '(min-width: 600px) and (max-width: 959.99px)',
      Medium: '(min-width: 960px) and (max-width: 1279.99px)',
      Large: '(min-width: 1280px) and (max-width: 1919.99px)',
      XLarge: '(min-width: 1920px)',
      Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
      Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
      HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
      TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
      WebPortrait: '(min-width: 840px) and (orientation: portrait)',
      HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
      TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=layout.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/divider.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/divider.js ***!
    \***********************************************************/

  /*! exports provided: MatDivider, MatDividerModule */

  /***/
  function node_modulesAngularMaterialEsm2015DividerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
      return MatDivider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
      return MatDividerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDivider =
    /*#__PURE__*/
    function () {
      function MatDivider() {
        _classCallCheck(this, MatDivider);

        this._vertical = false;
        this._inset = false;
      }
      /**
       * Whether the divider is vertically aligned.
       * @return {?}
       */


      _createClass(MatDivider, [{
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the divider is an inset divider.
         * @return {?}
         */

      }, {
        key: "inset",
        get: function get() {
          return this._inset;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatDivider;
    }();

    MatDivider.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-divider',
        host: {
          'role': 'separator',
          '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
          '[class.mat-divider-vertical]': 'vertical',
          '[class.mat-divider-horizontal]': '!vertical',
          '[class.mat-divider-inset]': 'inset',
          'class': 'mat-divider'
        },
        template: '',
        styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    MatDivider.propDecorators = {
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatDividerModule = function MatDividerModule() {
      _classCallCheck(this, MatDividerModule);
    };

    MatDividerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        declarations: [MatDivider]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=divider.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/grid-list.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/grid-list.js ***!
    \*************************************************************/

  /*! exports provided: MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, ɵa11 */

  /***/
  function node_modulesAngularMaterialEsm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa11", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatGridTile =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      _createClass(MatGridTile, [{
        key: "_setStyle",

        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }, {
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
      }]);

      return MatGridTile;
    }();

    MatGridTile.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-tile',
        exportAs: 'matGridTile',
        host: {
          'class': 'mat-grid-tile'
        },
        template: "<figure class=\"mat-figure\"><ng-content></ng-content></figure>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatGridTileText =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);

      return MatGridTileText;
    }();

    MatGridTileText.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-tile-header, mat-grid-tile-footer',
        template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"]]
      }]
    };
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    };

    MatGridAvatarCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-grid-avatar], [matGridAvatar]',
        host: {
          'class': 'mat-grid-avatar'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    };

    MatGridTileHeaderCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-grid-tile-header',
        host: {
          'class': 'mat-grid-tile-header'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    };

    MatGridTileFooterCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-grid-tile-footer',
        host: {
          'class': 'mat-grid-tile-footer'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */

    var TileCoordinator =
    /*#__PURE__*/
    function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles
         * @return {?}
         */
        value: function update(numColumns, tiles) {
          var _this4 = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this4._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition =
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler =
    /*#__PURE__*/
    function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler =
    /*#__PURE__*/
    function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this5;

        _classCallCheck(this, FixedTileStyler);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FixedTileStyler).call(this));
        _this5.fixedRowHeight = fixedRowHeight;
        return _this5;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler =
    /*#__PURE__*/
    function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this6;

        _classCallCheck(this, RatioTileStyler);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(RatioTileStyler).call(this));

        _this6._parseRatio(value);

        return _this6;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler =
    /*#__PURE__*/
    function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _possibleConstructorReturn(this, _getPrototypeOf(FitTileStyler).apply(this, arguments));
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",

        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      _createClass(MatGridList, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this7 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this7;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this7._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }, {
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
      }]);

      return MatGridList;
    }();

    MatGridList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-list',
        exportAs: 'matGridList',
        template: "<div><ng-content></ng-content></div>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
        host: {
          'class': 'mat-grid-list'
        },
        providers: [{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatGridListModule = function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    };

    MatGridListModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
        exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
        declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=grid-list.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/list.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/list.js ***!
    \********************************************************/

  /*! exports provided: MatListModule, MatNavList, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatListItem, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatSelectionListChange, MatListOption, MatSelectionList */

  /***/
  function node_modulesAngularMaterialEsm2015ListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListModule", function () {
      return MatListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNavList", function () {
      return MatNavList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatList", function () {
      return MatList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListAvatarCssMatStyler", function () {
      return MatListAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListIconCssMatStyler", function () {
      return MatListIconCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListSubheaderCssMatStyler", function () {
      return MatListSubheaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListItem", function () {
      return MatListItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECTION_LIST_VALUE_ACCESSOR", function () {
      return MAT_SELECTION_LIST_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectionListChange", function () {
      return MatSelectionListChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatListOption", function () {
      return MatListOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectionList", function () {
      return MatSelectionList;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatList.

    /**
     * \@docs-private
     */


    var MatListBase = function MatListBase() {
      _classCallCheck(this, MatListBase);
    };
    /** @type {?} */


    var _MatListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatListBase); // Boilerplate for applying mixins to MatListItem.

    /**
     * \@docs-private
     */


    var MatListItemBase = function MatListItemBase() {
      _classCallCheck(this, MatListItemBase);
    };
    /** @type {?} */


    var _MatListItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatListItemBase);

    var MatNavList =
    /*#__PURE__*/
    function (_MatListMixinBase2) {
      _inherits(MatNavList, _MatListMixinBase2);

      function MatNavList() {
        var _this8;

        _classCallCheck(this, MatNavList);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(MatNavList).apply(this, arguments));
        /**
         * Emits when the state of the list changes.
         */

        _this8._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(MatNavList, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }]);

      return MatNavList;
    }(_MatListMixinBase);

    MatNavList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-nav-list',
        exportAs: 'matNavList',
        host: {
          'role': 'navigation',
          'class': 'mat-nav-list mat-list-base'
        },
        template: "<ng-content></ng-content>",
        styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"],
        inputs: ['disableRipple'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];

    var MatList =
    /*#__PURE__*/
    function (_MatListMixinBase3) {
      _inherits(MatList, _MatListMixinBase3);

      /**
       * @param {?} _elementRef
       */
      function MatList(_elementRef) {
        var _this9;

        _classCallCheck(this, MatList);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(MatList).call(this));
        _this9._elementRef = _elementRef;
        /**
         * Emits when the state of the list changes.
         */

        _this9._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

        if (_this9._getListType() === 'action-list') {
          _elementRef.nativeElement.classList.add('mat-action-list');
        }

        return _this9;
      }
      /**
       * @return {?}
       */


      _createClass(MatList, [{
        key: "_getListType",
        value: function _getListType() {
          /** @type {?} */
          var nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();

          if (nodeName === 'mat-list') {
            return 'list';
          }

          if (nodeName === 'mat-action-list') {
            return 'action-list';
          }

          return null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }]);

      return MatList;
    }(_MatListMixinBase);

    MatList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-list, mat-action-list',
        exportAs: 'matList',
        template: "<ng-content></ng-content>",
        host: {
          'class': 'mat-list mat-list-base'
        },
        styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"],
        inputs: ['disableRipple'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatListAvatarCssMatStyler = function MatListAvatarCssMatStyler() {
      _classCallCheck(this, MatListAvatarCssMatStyler);
    };

    MatListAvatarCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-list-avatar], [matListAvatar]',
        host: {
          'class': 'mat-list-avatar'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatListIconCssMatStyler = function MatListIconCssMatStyler() {
      _classCallCheck(this, MatListIconCssMatStyler);
    };

    MatListIconCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-list-icon], [matListIcon]',
        host: {
          'class': 'mat-list-icon'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatListSubheaderCssMatStyler = function MatListSubheaderCssMatStyler() {
      _classCallCheck(this, MatListSubheaderCssMatStyler);
    };

    MatListSubheaderCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-subheader], [matSubheader]',
        host: {
          'class': 'mat-subheader'
        }
      }]
    }];
    /**
     * An item within a Material Design list.
     */

    var MatListItem =
    /*#__PURE__*/
    function (_MatListItemMixinBase2) {
      _inherits(MatListItem, _MatListItemMixinBase2);

      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?=} navList
       * @param {?=} list
       */
      function MatListItem(_element, _changeDetectorRef, navList, list) {
        var _this10;

        _classCallCheck(this, MatListItem);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(MatListItem).call(this));
        _this10._element = _element;
        _this10._isInteractiveList = false;
        _this10._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this10._isInteractiveList = !!(navList || list && list._getListType() === 'action-list');
        _this10._list = navList || list; // If no type attributed is specified for <button>, set it to "button".
        // If a type attribute is already specified, do nothing.

        /** @type {?} */

        var element = _this10._getHostElement();

        if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
          element.setAttribute('type', 'button');
        }

        if (_this10._list) {
          // React to changes in the state of the parent list since
          // some of the item's properties depend on it (e.g. `disableRipple`).
          _this10._list._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this10._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _changeDetectorRef.markForCheck();
          });
        }

        return _this10;
      }
      /**
       * @return {?}
       */


      _createClass(MatListItem, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Whether this list item should show a ripple effect when clicked.
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return !this._isInteractiveList || this.disableRipple || !!(this._list && this._list.disableRipple);
        }
        /**
         * Retrieves the DOM element of the component host.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
      }]);

      return MatListItem;
    }(_MatListItemMixinBase);

    MatListItem.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
        exportAs: 'matListItem',
        host: {
          'class': 'mat-list-item',
          // @breaking-change 8.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
          '[class.mat-list-item-avatar]': '_avatar || _icon',
          '[class.mat-list-item-with-avatar]': '_avatar || _icon'
        },
        inputs: ['disableRipple'],
        template: "<div class=\"mat-list-item-content\"><div class=\"mat-list-item-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"_isRippleDisabled()\"></div><ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\"></ng-content><div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content></div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatListItem.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: MatNavList,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: MatList,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatListItem.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
          descendants: true
        }]
      }],
      _avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatListAvatarCssMatStyler, {
          static: false
        }]
      }],
      _icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatListIconCssMatStyler, {
          static: false
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */

    var MatSelectionListBase = function MatSelectionListBase() {
      _classCallCheck(this, MatSelectionListBase);
    };
    /** @type {?} */


    var _MatSelectionListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatSelectionListBase);
    /**
     * \@docs-private
     */


    var MatListOptionBase = function MatListOptionBase() {
      _classCallCheck(this, MatListOptionBase);
    };
    /** @type {?} */


    var _MatListOptionMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatListOptionBase);
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSelectionList;
      }),
      multi: true
    };
    /**
     * Change event that is being fired whenever the selected state of an option changes.
     */

    var MatSelectionListChange =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatSelectionListChange(source, option) {
      _classCallCheck(this, MatSelectionListChange);

      this.source = source;
      this.option = option;
    };
    /**
     * Component for list-options of selection-list. Each list-option can automatically
     * generate a checkbox and can put current item into the selectionModel of selection-list
     * if the current item is selected.
     */


    var MatListOption =
    /*#__PURE__*/
    function (_MatListOptionMixinBa) {
      _inherits(MatListOption, _MatListOptionMixinBa);

      /**
       * @param {?} _element
       * @param {?} _changeDetector
       * @param {?} selectionList
       */
      function MatListOption(_element, _changeDetector, selectionList) {
        var _this11;

        _classCallCheck(this, MatListOption);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(MatListOption).call(this));
        _this11._element = _element;
        _this11._changeDetector = _changeDetector;
        _this11.selectionList = selectionList;
        _this11._selected = false;
        _this11._disabled = false;
        _this11._hasFocus = false;
        /**
         * Whether the label should appear before or after the checkbox. Defaults to 'after'
         */

        _this11.checkboxPosition = 'after';
        return _this11;
      }
      /**
       * Theme color of the list option. This sets the color of the checkbox.
       * @return {?}
       */


      _createClass(MatListOption, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this12 = this;

          /** @type {?} */
          var list = this.selectionList;

          if (list._value && list._value.some(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return list.compareWith(value, _this12._value);
          })) {
            this._setSelected(true);
          }
          /** @type {?} */


          var wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
          // control. This is because it takes some time until the selection-list knows about all
          // available options. Also it can happen that the ControlValueAccessor has an initial value
          // that should be used instead. Deferring the value change report to the next tick ensures
          // that the form control value is not being overwritten.

          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            if (_this12._selected || wasSelected) {
              _this12.selected = true;

              _this12._changeDetector.markForCheck();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this13 = this;

          if (this.selected) {
            // We have to delay this until the next tick in order
            // to avoid changed after checked errors.
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this13.selected = false;
            });
          }
          /** @type {?} */


          var hadFocus = this._hasFocus;
          /** @type {?} */

          var newActiveItem = this.selectionList._removeOptionFromList(this); // Only move focus if this option was focused at the time it was destroyed.


          if (hadFocus && newActiveItem) {
            newActiveItem.focus();
          }
        }
        /**
         * Toggles the selection state of the option.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.selected = !this.selected;
        }
        /**
         * Allows for programmatic focusing of the option.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._element.nativeElement.focus();
        }
        /**
         * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          return this._text ? this._text.nativeElement.textContent || '' : '';
        }
        /**
         * Whether this list item should show a ripple effect when clicked.
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return this.disabled || this.disableRipple || this.selectionList.disableRipple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (!this.disabled) {
            this.toggle(); // Emit a change event if the selected state of the option changed through user interaction.

            this.selectionList._emitChangeEvent(this);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          this.selectionList._setFocusedOption(this);

          this._hasFocus = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleBlur",
        value: function _handleBlur() {
          this.selectionList._onTouched();

          this._hasFocus = false;
        }
        /**
         * Retrieves the DOM element of the component host.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
        /**
         * Sets the selected state of the option. Returns whether the value has changed.
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          if (selected === this._selected) {
            return false;
          }

          this._selected = selected;

          if (selected) {
            this.selectionList.selectedOptions.select(this);
          } else {
            this.selectionList.selectedOptions.deselect(this);
          }

          this._changeDetector.markForCheck();

          return true;
        }
        /**
         * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
         * used to trigger an update of the list option if the disabled state of the selection list
         * changed.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          this._changeDetector.markForCheck();
        }
      }, {
        key: "color",
        get: function get() {
          return this._color || this.selectionList.color;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._color = newValue;
        }
        /**
         * Value of the option
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          if (this.selected && newValue !== this.value) {
            this.selected = false;
          }

          this._value = newValue;
        }
        /**
         * Whether the option is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.selectionList && this.selectionList.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._changeDetector.markForCheck();
          }
        }
        /**
         * Whether the option is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this.selectionList.selectedOptions.isSelected(this);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var isSelected = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);

          if (isSelected !== this._selected) {
            this._setSelected(isSelected);

            this.selectionList._reportValueChange();
          }
        }
      }]);

      return MatListOption;
    }(_MatListOptionMixinBase);

    MatListOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-list-option',
        exportAs: 'matListOption',
        inputs: ['disableRipple'],
        host: {
          'role': 'option',
          'class': 'mat-list-item mat-list-option',
          '(focus)': '_handleFocus()',
          '(blur)': '_handleBlur()',
          '(click)': '_handleClick()',
          'tabindex': '-1',
          '[class.mat-list-item-disabled]': 'disabled',
          '[class.mat-list-item-with-avatar]': '_avatar || _icon',
          // Manually set the "primary" or "warn" class if the color has been explicitly
          // set to "primary" or "warn". The pseudo checkbox picks up these classes for
          // its theme.
          '[class.mat-primary]': 'color === "primary"',
          // Even though accent is the default, we need to set this class anyway, because the  list might
          // be placed inside a parent that has one of the other colors with a higher specificity.
          '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
          '[class.mat-warn]': 'color === "warn"',
          '[attr.aria-selected]': 'selected',
          '[attr.aria-disabled]': 'disabled'
        },
        template: "<div class=\"mat-list-item-content\" [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\"><div mat-ripple class=\"mat-list-item-ripple\" [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"_isRippleDisabled()\"></div><mat-pseudo-checkbox [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox><div class=\"mat-list-text\" #text><ng-content></ng-content></div><ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\"></ng-content></div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatListOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: MatSelectionList,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatSelectionList;
          })]
        }]
      }];
    };

    MatListOption.propDecorators = {
      _avatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatListAvatarCssMatStyler, {
          static: false
        }]
      }],
      _icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatListIconCssMatStyler, {
          static: false
        }]
      }],
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"]]
      }],
      _text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['text', {
          static: false
        }]
      }],
      checkboxPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * Material Design list component where each item is a selectable option. Behaves as a listbox.
     */

    var MatSelectionList =
    /*#__PURE__*/
    function (_MatSelectionListMixi) {
      _inherits(MatSelectionList, _MatSelectionListMixi);

      /**
       * @param {?} _element
       * @param {?} tabIndex
       */
      function MatSelectionList(_element, tabIndex) {
        var _this14;

        _classCallCheck(this, MatSelectionList);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(MatSelectionList).call(this));
        _this14._element = _element;
        /**
         * Emits a change event whenever the selected state of an option changes.
         */

        _this14.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Tabindex of the selection list.
         */

        _this14.tabIndex = 0;
        /**
         * Theme color of the selection list. This sets the checkbox color for all list options.
         */

        _this14.color = 'accent';
        /**
         * Function used for comparing an option against the selected value when determining which
         * options should appear as selected. The first argument is the value of an options. The second
         * one is a value from the selected value. A boolean must be returned.
         */

        _this14.compareWith =
        /**
        * @param {?} a1
        * @param {?} a2
        * @return {?}
        */
        function (a1, a2) {
          return a1 === a2;
        };

        _this14._disabled = false;
        /**
         * The currently selected options.
         */

        _this14.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true);
        /**
         * View to model callback that should be called whenever the selected options change.
         */

        _this14._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * Emits when the list has been destroyed.
         */


        _this14._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * View to model callback that should be called if the list or its options lost focus.
         */

        _this14._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this14.tabIndex = parseInt(tabIndex) || 0;
        return _this14;
      }
      /**
       * Whether the selection list is disabled.
       * @return {?}
       */


      _createClass(MatSelectionList, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusKeyManager"](this.options).withWrap().withTypeAhead() // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
          // screenreader users, that allows reading the different options of the list.
          .skipPredicate(
          /**
          * @return {?}
          */
          function () {
            return false;
          }).withAllowedModifierKeys(['shiftKey']);

          if (this._value) {
            this._setOptionsFromValues(this._value);
          } // Sync external changes to the model back to the options.


          this.selectedOptions.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event.added) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = event.added[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;
                  item.selected = true;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }

            if (event.removed) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = event.removed[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _item2 = _step2.value;
                  _item2.selected = false;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var disableRippleChanges = changes['disableRipple'];
          /** @type {?} */

          var colorChanges = changes['color'];

          if (disableRippleChanges && !disableRippleChanges.firstChange || colorChanges && !colorChanges.firstChange) {
            this._markOptionsForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._isDestroyed = true;
        }
        /**
         * Focuses the selection list.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._element.nativeElement.focus(options);
        }
        /**
         * Selects all of the options.
         * @return {?}
         */

      }, {
        key: "selectAll",
        value: function selectAll() {
          this._setAllOptionsSelected(true);
        }
        /**
         * Deselects all of the options.
         * @return {?}
         */

      }, {
        key: "deselectAll",
        value: function deselectAll() {
          this._setAllOptionsSelected(false);
        }
        /**
         * Sets the focused option of the selection-list.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_setFocusedOption",
        value: function _setFocusedOption(option) {
          this._keyManager.updateActiveItem(option);
        }
        /**
         * Removes an option from the selection list and updates the active item.
         * @param {?} option
         * @return {?} Currently-active item.
         */

      }, {
        key: "_removeOptionFromList",
        value: function _removeOptionFromList(option) {
          /** @type {?} */
          var optionIndex = this._getOptionIndex(option);

          if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
            // Check whether the option is the last item
            if (optionIndex > 0) {
              this._keyManager.updateActiveItem(optionIndex - 1);
            } else if (optionIndex === 0 && this.options.length > 1) {
              this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
            }
          }

          return this._keyManager.activeItem;
        }
        /**
         * Passes relevant key presses to our key manager.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;
          /** @type {?} */

          var previousFocusIndex = manager.activeItemIndex;
          /** @type {?} */

          var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event);

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
              if (!hasModifier) {
                this._toggleFocusedOption(); // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["HOME"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["END"]:
              if (!hasModifier) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["A"]:
              if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event, 'ctrlKey')) {
                this.options.find(
                /**
                * @param {?} option
                * @return {?}
                */
                function (option) {
                  return !option.selected;
                }) ? this.selectAll() : this.deselectAll();
                event.preventDefault();
              }

              break;

            default:
              manager.onKeydown(event);
          }

          if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]) && event.shiftKey && manager.activeItemIndex !== previousFocusIndex) {
            this._toggleFocusedOption();
          }
        }
        /**
         * Reports a value change to the ControlValueAccessor
         * @return {?}
         */

      }, {
        key: "_reportValueChange",
        value: function _reportValueChange() {
          // Stop reporting value changes after the list has been destroyed. This avoids
          // cases where the list might wrongly reset its value once it is removed, but
          // the form control is still live.
          if (this.options && !this._isDestroyed) {
            /** @type {?} */
            var value = this._getSelectedOptionValues();

            this._onChange(value);

            this._value = value;
          }
        }
        /**
         * Emits a change event if the selected state of an option changed.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent(option) {
          this.selectionChange.emit(new MatSelectionListChange(this, option));
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(values) {
          this._value = values;

          if (this.options) {
            this._setOptionsFromValues(values || []);
          }
        }
        /**
         * Implemented as a part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Sets the selected options based on the specified values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_setOptionsFromValues",
        value: function _setOptionsFromValues(values) {
          var _this15 = this;

          this.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option._setSelected(false);
          });
          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            /** @type {?} */
            var correspondingOption = _this15.options.find(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              // Skip options that are already in the model. This allows us to handle cases
              // where the same primitive value is selected multiple times.
              return option.selected ? false : _this15.compareWith(option.value, value);
            });

            if (correspondingOption) {
              correspondingOption._setSelected(true);
            }
          });
        }
        /**
         * Returns the values of the selected options.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSelectedOptionValues",
        value: function _getSelectedOptionValues() {
          return this.options.filter(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.selected;
          }).map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.value;
          });
        }
        /**
         * Toggles the state of the currently focused option if enabled.
         * @private
         * @return {?}
         */

      }, {
        key: "_toggleFocusedOption",
        value: function _toggleFocusedOption() {
          /** @type {?} */
          var focusedIndex = this._keyManager.activeItemIndex;

          if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
            /** @type {?} */
            var focusedOption = this.options.toArray()[focusedIndex];

            if (focusedOption && !focusedOption.disabled) {
              focusedOption.toggle(); // Emit a change event because the focused option changed its state through user
              // interaction.

              this._emitChangeEvent(focusedOption);
            }
          }
        }
        /**
         * Sets the selected state on all of the options
         * and emits an event if anything changed.
         * @private
         * @param {?} isSelected
         * @return {?}
         */

      }, {
        key: "_setAllOptionsSelected",
        value: function _setAllOptionsSelected(isSelected) {
          // Keep track of whether anything changed, because we only want to
          // emit the changed event when something actually changed.

          /** @type {?} */
          var hasChanged = false;
          this.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if (option._setSelected(isSelected)) {
              hasChanged = true;
            }
          });

          if (hasChanged) {
            this._reportValueChange();
          }
        }
        /**
         * Utility to ensure all indexes are valid.
         * @private
         * @param {?} index The index to be checked.
         * @return {?} True if the index is valid for our list of options.
         */

      }, {
        key: "_isValidIndex",
        value: function _isValidIndex(index) {
          return index >= 0 && index < this.options.length;
        }
        /**
         * Returns the index of the specified list option.
         * @private
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_getOptionIndex",
        value: function _getOptionIndex(option) {
          return this.options.toArray().indexOf(option);
        }
        /**
         * Marks all the options to be checked in the next change detection run.
         * @private
         * @return {?}
         */

      }, {
        key: "_markOptionsForCheck",
        value: function _markOptionsForCheck() {
          if (this.options) {
            this.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option._markForCheck();
            });
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
          // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
          // changed its state. Since we know that a change to `disabled` property of the list affects
          // the state of the options, we manually mark each option for check.

          this._markOptionsForCheck();
        }
      }]);

      return MatSelectionList;
    }(_MatSelectionListMixinBase);

    MatSelectionList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-selection-list',
        exportAs: 'matSelectionList',
        inputs: ['disableRipple'],
        host: {
          'role': 'listbox',
          '[tabIndex]': 'tabIndex',
          'class': 'mat-selection-list mat-list-base',
          '(blur)': '_onTouched()',
          '(keydown)': '_keydown($event)',
          'aria-multiselectable': 'true',
          '[attr.aria-disabled]': 'disabled.toString()'
        },
        template: '<ng-content></ng-content>',
        styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatSelectionList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatSelectionList.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatListOption, {
          descendants: true
        }]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatListModule = function MatListModule() {
      _classCallCheck(this, MatListModule);
    };

    MatListModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
        exports: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]],
        declarations: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=list.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/menu.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/menu.js ***!
    \********************************************************/

  /*! exports provided: MatMenu, MAT_MENU_DEFAULT_OPTIONS, _MatMenu, _MatMenuBase, MatMenuItem, MatMenuTrigger, MAT_MENU_SCROLL_STRATEGY, MAT_MENU_PANEL, _MatMenuDirectivesModule, MatMenuModule, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, ɵa22, ɵb22, ɵc22 */

  /***/
  function node_modulesAngularMaterialEsm2015MenuJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenu", function () {
      return MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function () {
      return MAT_MENU_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenu", function () {
      return _MatMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function () {
      return _MatMenuBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuItem", function () {
      return MatMenuItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function () {
      return MatMenuTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function () {
      return MAT_MENU_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function () {
      return MAT_MENU_PANEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function () {
      return _MatMenuDirectivesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuModule", function () {
      return MatMenuModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function () {
      return matMenuAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInItems", function () {
      return fadeInItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformMenu", function () {
      return transformMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMenuContent", function () {
      return MatMenuContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa22", function () {
      return MAT_MENU_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb22", function () {
      return MAT_MENU_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc22", function () {
      return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the mat-menu component.
     * Animation duration and timing values are based on:
     * https://material.io/guidelines/components/menus.html#menus-usage
     * \@docs-private
     * @type {?}
     */


    var matMenuAnimations = {
      /**
       * This animation controls the menu panel's entry and exit from the page.
       *
       * When the menu panel is added to the DOM, it scales in and fades in its border.
       *
       * When the menu panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */
      transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformMenu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0.8)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.mat-menu-content, .mat-mdc-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      }))])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })))]),

      /**
       * This animation fades in the background color and content of the menu panel
       * after its containing element is scaled in.
       */
      fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
      // now. Remove next time we do breaking changes.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var fadeInItems = matMenuAnimations.fadeInItems;
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var transformMenu = matMenuAnimations.transformMenu;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Menu content that will be rendered lazily once the menu is opened.
     */

    var MatMenuContent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _template
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _injector
       * @param {?} _viewContainerRef
       * @param {?} _document
       * @param {?=} _changeDetectorRef
       */
      function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        _classCallCheck(this, MatMenuContent);

        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when the menu content has been attached.
         */

        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }
      /**
       * Attaches the content with a particular context.
       * \@docs-private
       * @param {?=} context
       * @return {?}
       */


      _createClass(MatMenuContent, [{
        key: "attach",
        value: function attach() {
          var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._template, this._viewContainerRef);
          }

          this.detach();

          if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
          }
          /** @type {?} */


          var element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
          // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
          // risk it staying attached to a pane that's no longer in the DOM.

          /** @type {?} */
          element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
          // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
          // by Angular. This causes the `@ContentChildren` for menu items within the menu to
          // not be updated by Angular. By explicitly marking for check here, we tell Angular that
          // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
          // @breaking-change 9.0.0 Make change detector ref required

          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }

          this._portal.attach(this._outlet, context);

          this._attached.next();
        }
        /**
         * Detaches the content.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._portal.isAttached) {
            this._portal.detach();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._outlet) {
            this._outlet.dispose();
          }
        }
      }]);

      return MatMenuContent;
    }();

    MatMenuContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'ng-template[matMenuContent]'
      }]
    }];
    /** @nocollapse */

    MatMenuContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuMissingError() {
      throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
    }
    /**
     * Throws an exception for the case when menu's x-position value isn't valid.
     * In other words, it doesn't match 'before' or 'after'.
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuInvalidPositionX() {
      throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
    }
    /**
     * Throws an exception for the case when menu's y-position value isn't valid.
     * In other words, it doesn't match 'above' or 'below'.
     * \@docs-private
     * @return {?}
     */


    function throwMatMenuInvalidPositionY() {
      throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide the parent menu to menu-specific components.
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatMenuItem.

    /**
     * \@docs-private
     */

    var MatMenuItemBase = function MatMenuItemBase() {
      _classCallCheck(this, MatMenuItemBase);
    };
    /** @type {?} */


    var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatMenuItemBase));
    /**
     * This directive is intended to be used inside an mat-menu tag.
     * It exists mostly to set the role attribute.
     */


    var MatMenuItem =
    /*#__PURE__*/
    function (_MatMenuItemMixinBase2) {
      _inherits(MatMenuItem, _MatMenuItemMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?=} document
       * @param {?=} _focusMonitor
       * @param {?=} _parentMenu
       */
      function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this16;

        _classCallCheck(this, MatMenuItem);

        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(MatMenuItem).call(this));
        _this16._elementRef = _elementRef;
        _this16._focusMonitor = _focusMonitor;
        _this16._parentMenu = _parentMenu;
        /**
         * ARIA role for the menu item.
         */

        _this16.role = 'menuitem';
        /**
         * Stream that emits when the menu item is hovered.
         */

        _this16._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Whether the menu item is highlighted.
         */

        _this16._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */

        _this16._triggersSubmenu = false;

        if (_focusMonitor) {
          // Start monitoring the element so it gets the appropriate focused classes. We want
          // to show the focus style for menu items only when the focus was not caused by a
          // mouse or touch interaction.
          _focusMonitor.monitor(_this16._elementRef, false);
        }

        if (_parentMenu && _parentMenu.addItem) {
          _parentMenu.addItem(_assertThisInitialized(_this16));
        }

        _this16._document = document;
        return _this16;
      }
      /**
       * Focuses the menu item.
       * @param {?=} origin
       * @param {?=} options
       * @return {?}
       */


      _createClass(MatMenuItem, [{
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
          } else {
            this._getHostElement().focus(options);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }

          if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
          }

          this._hovered.complete();
        }
        /**
         * Used to set the `tabindex`.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Returns the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Prevents the default element actions if it is disabled.
         * @param {?} event
         * @return {?}
         */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

      }, {
        key: "_checkDisabled",
        value: function _checkDisabled(event) {
          if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
          }
        }
        /**
         * Emits to the hover stream.
         * @return {?}
         */
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

      }, {
        key: "_handleMouseEnter",
        value: function _handleMouseEnter() {
          this._hovered.next(this);
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var textNodeType = this._document ? this._document.TEXT_NODE : 3;
          /** @type {?} */

          var output = '';

          if (element.childNodes) {
            /** @type {?} */
            var length = element.childNodes.length; // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.

            for (var i = 0; i < length; i++) {
              if (element.childNodes[i].nodeType === textNodeType) {
                output += element.childNodes[i].textContent;
              }
            }
          }

          return output.trim();
        }
      }]);

      return MatMenuItem;
    }(_MatMenuItemMixinBase);

    MatMenuItem.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: '[mat-menu-item]',
        exportAs: 'matMenuItem',
        inputs: ['disabled', 'disableRipple'],
        host: {
          '[attr.role]': 'role',
          'class': 'mat-menu-item',
          '[class.mat-menu-item-highlighted]': '_highlighted',
          '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
          '[attr.tabindex]': '_getTabIndex()',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.disabled]': 'disabled || null'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        template: "<ng-content></ng-content><div class=\"mat-menu-ripple\" matRipple [matRippleDisabled]=\"disableRipple || disabled\" [matRippleTrigger]=\"_getHostElement()\"></div>"
      }]
    }];
    /** @nocollapse */

    MatMenuItem.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_PANEL]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatMenuItem.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _checkDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }],
      _handleMouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseenter']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token to be used to override the default options for `mat-menu`.
     * @type {?}
     */

    var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
      providedIn: 'root',
      factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
      return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop'
      };
    }
    /**
     * Start elevation for the menu panel.
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_BASE_ELEVATION = 4;
    /**
     * Base class with all of the `MatMenu` functionality.
     */
    // tslint:disable-next-line:class-name

    var _MatMenuBase =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} _defaultOptions
       */
      function _MatMenuBase(_elementRef, _ngZone, _defaultOptions) {
        _classCallCheck(this, _MatMenuBase);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Only the direct descendant menu items.
         */

        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        /**
         * Subscription to tab events on the menu panel
         */

        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */

        this._classList = {};
        /**
         * Current state of the panel animation.
         */

        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */

        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Class to be added to the backdrop element.
         */

        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 8.0.0
         */

        this.close = this.closed;
      }
      /**
       * Position of the menu in the X axis.
       * @return {?}
       */


      _createClass(_MatMenuBase, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.setPositionClasses();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this17 = this;

          this._updateDirectDescendants();

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._directDescendantItems).withWrap().withTypeAhead();
          this._tabSubscription = this._keyManager.tabOut.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this17.closed.emit('tab');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._directDescendantItems.destroy();

          this._tabSubscription.unsubscribe();

          this.closed.complete();
        }
        /**
         * Stream that emits whenever the hovered menu item changes.
         * @return {?}
         */

      }, {
        key: "_hovered",
        value: function _hovered() {
          // Coerce the `changes` property because Angular types it as `Observable<any>`

          /** @type {?} */
          var itemChanges =
          /** @type {?} */
          this._directDescendantItems.changes;
          return itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._hovered;
            })));
          }));
        }
        /*
           * Registers a menu item with the menu.
           * @docs-private
           * @deprecated No longer being used. To be removed.
           * @breaking-change 9.0.0
           */

        /**
         * @param {?} _item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(_item) {}
        /**
         * Removes an item from the menu.
         * \@docs-private
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 9.0.0
         * @param {?} _item
         * @return {?}
         */

      }, {
        key: "removeItem",
        value: function removeItem(_item) {}
        /**
         * Handle a keyboard event from the menu, delegating to the appropriate action.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
                event.preventDefault();
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["LEFT_ARROW"]:
              if (this.parentMenu && this.direction === 'ltr') {
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["RIGHT_ARROW"]:
              if (this.parentMenu && this.direction === 'rtl') {
                this.closed.emit('keydown');
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["HOME"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["END"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
              }

              break;

            default:
              if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]) {
                manager.setFocusOrigin('keyboard');
              }

              manager.onKeydown(event);
          }
        }
        /**
         * Focus the first item in the menu.
         * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
         * @return {?}
         */

      }, {
        key: "focusFirstItem",
        value: function focusFirstItem() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';

          /** @type {?} */
          var manager = this._keyManager; // When the content is rendered lazily, it takes a bit before the items are inside the DOM.

          if (this.lazyContent) {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return manager.setFocusOrigin(origin).setFirstItemActive();
            });
          } else {
            manager.setFocusOrigin(origin).setFirstItemActive();
          } // If there's no active item at this point, it means that all the items are disabled.
          // Move focus to the menu panel so keyboard events like Escape still work. Also this will
          // give _some_ feedback to screen readers.


          if (!manager.activeItem && this._directDescendantItems.length) {
            /** @type {?} */
            var element = this._directDescendantItems.first._getHostElement().parentElement; // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.


            while (element) {
              if (element.getAttribute('role') === 'menu') {
                element.focus();
                break;
              } else {
                element = element.parentElement;
              }
            }
          }
        }
        /**
         * Resets the active item in the menu. This is used when the menu is opened, allowing
         * the user to start from the first option when pressing the down arrow.
         * @return {?}
         */

      }, {
        key: "resetActiveItem",
        value: function resetActiveItem() {
          this._keyManager.setActiveItem(-1);
        }
        /**
         * Sets the menu panel elevation.
         * @param {?} depth Number of parent menus that come before the menu.
         * @return {?}
         */

      }, {
        key: "setElevation",
        value: function setElevation(depth) {
          // The elevation starts at the base and increases by one for each level.

          /** @type {?} */
          var newElevation = "mat-elevation-z".concat(MAT_MENU_BASE_ELEVATION + depth);
          /** @type {?} */

          var customElevation = Object.keys(this._classList).find(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return c.startsWith('mat-elevation-z');
          });

          if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
              this._classList[this._previousElevation] = false;
            }

            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
          }
        }
        /**
         * Adds classes to the menu panel based on its position. Can be used by
         * consumers to add specific styling based on the position.
         * \@docs-private
         * @param {?=} posX Position of the menu along the x axis.
         * @param {?=} posY Position of the menu along the y axis.
         * @return {?}
         */

      }, {
        key: "setPositionClasses",
        value: function setPositionClasses() {
          var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.xPosition;
          var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPosition;

          /** @type {?} */
          var classes = this._classList;
          classes['mat-menu-before'] = posX === 'before';
          classes['mat-menu-after'] = posX === 'after';
          classes['mat-menu-above'] = posY === 'above';
          classes['mat-menu-below'] = posY === 'below';
        }
        /**
         * Starts the enter animation.
         * @return {?}
         */

      }, {
        key: "_startAnimation",
        value: function _startAnimation() {
          // @breaking-change 8.0.0 Combine with _resetAnimation.
          this._panelAnimationState = 'enter';
        }
        /**
         * Resets the panel animation to its initial state.
         * @return {?}
         */

      }, {
        key: "_resetAnimation",
        value: function _resetAnimation() {
          // @breaking-change 8.0.0 Combine with _startAnimation.
          this._panelAnimationState = 'void';
        }
        /**
         * Callback that is invoked when the panel animation completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          this._animationDone.next(event);

          this._isAnimating = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
          // because we move focus to the first item while it's still being animated, which can throw
          // the browser off when it determines the scroll position. Alternatively we can move focus
          // when the animation is done, however moving focus asynchronously will interrupt screen
          // readers which are in the process of reading out the menu already. We take the `element`
          // from the `event` since we can't use a `ViewChild` to access the pane.

          if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
          }
        }
        /**
         * Sets up a stream that will keep track of any newly-added menu items and will update the list
         * of direct descendants. We collect the descendants this way, because `_allItems` can include
         * items that are part of child menus, and using a custom way of registering items is unreliable
         * when it comes to maintaining the item order.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDirectDescendants",
        value: function _updateDirectDescendants() {
          var _this18 = this;

          this._allItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this._allItems)).subscribe(
          /**
          * @param {?} items
          * @return {?}
          */
          function (items) {
            _this18._directDescendantItems.reset(items.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._parentMenu === _this18;
            }));

            _this18._directDescendantItems.notifyOnChanges();
          });
        }
      }, {
        key: "xPosition",
        get: function get() {
          return this._xPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== 'before' && value !== 'after') {
            throwMatMenuInvalidPositionX();
          }

          this._xPosition = value;
          this.setPositionClasses();
        }
        /**
         * Position of the menu in the Y axis.
         * @return {?}
         */

      }, {
        key: "yPosition",
        get: function get() {
          return this._yPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== 'above' && value !== 'below') {
            throwMatMenuInvalidPositionY();
          }

          this._yPosition = value;
          this.setPositionClasses();
        }
        /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */

      }, {
        key: "overlapTrigger",
        get: function get() {
          return this._overlapTrigger;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the menu has a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        }
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */

      }, {
        key: "panelClass",
        set: function set(classes) {
          var _this19 = this;

          /** @type {?} */
          var previousPanelClass = this._previousPanelClass;

          if (previousPanelClass && previousPanelClass.length) {
            previousPanelClass.split(' ').forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this19._classList[className] = false;
            });
          }

          this._previousPanelClass = classes;

          if (classes && classes.length) {
            classes.split(' ').forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this19._classList[className] = true;
            });
            this._elementRef.nativeElement.className = '';
          }
        }
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "classList",
        get: function get() {
          return this.panelClass;
        }
        /**
         * @param {?} classes
         * @return {?}
         */
        ,
        set: function set(classes) {
          this.panelClass = classes;
        }
      }]);

      return _MatMenuBase;
    }();
    /** @nocollapse */


    _MatMenuBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_DEFAULT_OPTIONS]
        }]
      }];
    };

    _MatMenuBase.propDecorators = {
      _allItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatMenuItem, {
          descendants: true
        }]
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      xPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      yPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      templateRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], {
          static: false
        }]
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatMenuItem]
      }],
      lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatMenuContent, {
          static: false
        }]
      }],
      overlapTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['class']
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      close: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * \@docs-private We show the "_MatMenu" class as "MatMenu" in the docs.
     */

    var MatMenu =
    /*#__PURE__*/
    function (_MatMenuBase2) {
      _inherits(MatMenu, _MatMenuBase2);

      function MatMenu() {
        _classCallCheck(this, MatMenu);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatMenu).apply(this, arguments));
      }

      return MatMenu;
    }(_MatMenuBase); // Note on the weird inheritance setup: we need three classes, because the MDC-based menu has to
    // extend `MatMenu`, however keeping a reference to it will cause the inlined template and styles
    // to be retained as well. The MDC menu also has to provide itself as a `MatMenu` in order for
    // queries and DI to work correctly, while still not referencing the actual menu class.
    // Class responsibility is split up as follows:
    // * _MatMenuBase - provides all the functionality without any of the Angular metadata.
    // * MatMenu - keeps the same name symbol name as the current menu and
    // is used as a provider for DI and query purposes.
    // * _MatMenu - the actual menu component implementation with the Angular metadata that should
    // be tree shaken away for MDC.

    /**
     * \@docs-public MatMenu
     */
    // tslint:disable-next-line:class-name


    var _MatMenu =
    /*#__PURE__*/
    function (_MatMenu2) {
      _inherits(_MatMenu, _MatMenu2);

      /**
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} defaultOptions
       */
      function _MatMenu(elementRef, ngZone, defaultOptions) {
        _classCallCheck(this, _MatMenu);

        return _possibleConstructorReturn(this, _getPrototypeOf(_MatMenu).call(this, elementRef, ngZone, defaultOptions));
      }

      return _MatMenu;
    }(MatMenu);

    _MatMenu.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-menu',
        template: "<ng-template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.start)=\"_onAnimationStart($event)\" (@transformMenu.done)=\"_onAnimationDone($event)\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-menu-content\"><ng-content></ng-content></div></div></ng-template>",
        styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}@media (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}@media (-ms-high-contrast:active){.mat-menu-item-highlighted,.mat-menu-item.cdk-keyboard-focused,.mat-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'matMenu',
        animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
        providers: [{
          provide: MAT_MENU_PANEL,
          useExisting: MatMenu
        }, {
          provide: MatMenu,
          useExisting: _MatMenu
        }]
      }]
    }];
    /** @nocollapse */

    _MatMenu.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_DEFAULT_OPTIONS]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that determines the scroll handling while the menu is open.
     * @type {?}
     */


    var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_MENU_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
      useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Default top padding of the menu panel.
     * @type {?}
     */

    var MENU_PANEL_TOP_PADDING = 8;
    /**
     * Options for binding a passive event listener.
     * @type {?}
     */

    var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({
      passive: true
    }); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

    /**
     * This directive is intended to be used in conjunction with an mat-menu tag.  It is
     * responsible for toggling the display of the provided menu instance.
     */

    var MatMenuTrigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _element
       * @param {?} _viewContainerRef
       * @param {?} scrollStrategy
       * @param {?} _parentMenu
       * @param {?} _menuItemInstance
       * @param {?} _dir
       * @param {?=} _focusMonitor
       */
      function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        var _this20 = this;

        _classCallCheck(this, MatMenuTrigger);

        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */

        this._handleTouchStart =
        /**
        * @return {?}
        */
        function () {
          return _this20._openedBy = 'touch';
        }; // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard


        this._openedBy = null;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */

        this.restoreFocus = true;
        /**
         * Event emitted when the associated menu is opened.
         */

        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */

        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onMenuClose = this.menuClosed;

        _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

        if (_menuItemInstance) {
          _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }

        this._scrollStrategy = scrollStrategy;
      }
      /**
       * @deprecated
       * \@breaking-change 8.0.0
       * @return {?}
       */


      _createClass(MatMenuTrigger, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._checkMenu();

          this._handleHover();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._overlayRef = null;
          }

          this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

          this._menuCloseSubscription.unsubscribe();

          this._closingActionsSubscription.unsubscribe();

          this._hoverSubscription.unsubscribe();
        }
        /**
         * Whether the menu is open.
         * @return {?}
         */

      }, {
        key: "triggersSubmenu",

        /**
         * Whether the menu triggers a sub-menu or a top-level one.
         * @return {?}
         */
        value: function triggersSubmenu() {
          return !!(this._menuItemInstance && this._parentMenu);
        }
        /**
         * Toggles the menu between the open and closed states.
         * @return {?}
         */

      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          return this._menuOpen ? this.closeMenu() : this.openMenu();
        }
        /**
         * Opens the menu.
         * @return {?}
         */

      }, {
        key: "openMenu",
        value: function openMenu() {
          var _this21 = this;

          if (this._menuOpen) {
            return;
          }

          this._checkMenu();
          /** @type {?} */


          var overlayRef = this._createOverlay();
          /** @type {?} */


          var overlayConfig = overlayRef.getConfig();

          this._setPosition(
          /** @type {?} */
          overlayConfig.positionStrategy);

          overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop;
          overlayRef.attach(this._getPortal());

          if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
          }

          this._closingActionsSubscription = this._menuClosingActions().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this21.closeMenu();
          });

          this._initMenu();

          if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
          }
        }
        /**
         * Closes the menu.
         * @return {?}
         */

      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menu.close.emit();
        }
        /**
         * Focuses the menu trigger.
         * @param {?=} origin Source of the menu trigger's focus.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin, options);
          } else {
            this._element.nativeElement.focus(options);
          }
        }
        /**
         * Closes the menu and does the necessary cleanup.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyMenu",
        value: function _destroyMenu() {
          var _this22 = this;

          if (!this._overlayRef || !this.menuOpen) {
            return;
          }
          /** @type {?} */


          var menu = this.menu;

          this._closingActionsSubscription.unsubscribe();

          this._overlayRef.detach();

          if (menu instanceof MatMenu) {
            menu._resetAnimation();

            if (menu.lazyContent) {
              // Wait for the exit animation to finish before detaching the content.
              menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                return event.toState === 'void';
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), // Interrupt if the content got re-attached.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(menu.lazyContent._attached)).subscribe({
                next:
                /**
                * @return {?}
                */
                function next() {
                  return (
                    /** @type {?} */
                    menu.lazyContent.detach()
                  );
                },
                // No matter whether the content got re-attached, reset the menu.
                complete:
                /**
                * @return {?}
                */
                function complete() {
                  return _this22._setIsMenuOpen(false);
                }
              });
            } else {
              this._setIsMenuOpen(false);
            }
          } else {
            this._setIsMenuOpen(false);

            if (menu.lazyContent) {
              menu.lazyContent.detach();
            }
          }

          this._restoreFocus();
        }
        /**
         * This method sets the menu state to open and focuses the first item if
         * the menu was opened via the keyboard.
         * @private
         * @return {?}
         */

      }, {
        key: "_initMenu",
        value: function _initMenu() {
          this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
          this.menu.direction = this.dir;

          this._setMenuElevation();

          this._setIsMenuOpen(true);

          this.menu.focusFirstItem(this._openedBy || 'program');
        }
        /**
         * Updates the menu elevation based on the amount of parent menus that it has.
         * @private
         * @return {?}
         */

      }, {
        key: "_setMenuElevation",
        value: function _setMenuElevation() {
          if (this.menu.setElevation) {
            /** @type {?} */
            var depth = 0;
            /** @type {?} */

            var parentMenu = this.menu.parentMenu;

            while (parentMenu) {
              depth++;
              parentMenu = parentMenu.parentMenu;
            }

            this.menu.setElevation(depth);
          }
        }
        /**
         * Restores focus to the element that was focused before the menu was open.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          // We should reset focus if the user is navigating using a keyboard or
          // if we have a top-level trigger which might cause focus to be lost
          // when clicking on the backdrop.
          if (this.restoreFocus) {
            if (!this._openedBy) {
              // Note that the focus style will show up both for `program` and
              // `keyboard` so we don't have to specify which one it is.
              this.focus();
            } else if (!this.triggersSubmenu()) {
              this.focus(this._openedBy);
            }
          }

          this._openedBy = null;
        } // set state rather than toggle to support triggers sharing a menu

        /**
         * @private
         * @param {?} isOpen
         * @return {?}
         */

      }, {
        key: "_setIsMenuOpen",
        value: function _setIsMenuOpen(isOpen) {
          this._menuOpen = isOpen;
          this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

          if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
          }
        }
        /**
         * This method checks that a valid instance of MatMenu has been passed into
         * matMenuTriggerFor. If not, an exception is thrown.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkMenu",
        value: function _checkMenu() {
          if (!this.menu) {
            throwMatMenuMissingError();
          }
        }
        /**
         * This method creates the overlay from the provided menu's template and saves its
         * OverlayRef so that it can be attached to the DOM when openMenu is called.
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          if (!this._overlayRef) {
            /** @type {?} */
            var config = this._getOverlayConfig();

            this._subscribeToPositions(
            /** @type {?} */
            config.positionStrategy);

            this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
            // Ideally we'd also have our keyboard event logic in here, however doing so will
            // break anybody that may have implemented the `MatMenuPanel` themselves.

            this._overlayRef.keydownEvents().subscribe();
          }

          return this._overlayRef;
        }
        /**
         * This method builds the configuration object needed to create the overlay, the OverlayState.
         * @private
         * @return {?} OverlayConfig
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
            positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
          });
        }
        /**
         * Listens to changes in the position of the overlay and sets the correct classes
         * on the menu based on the new position. This ensures the animation origin is always
         * correct, even if a fallback position is used for the overlay.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_subscribeToPositions",
        value: function _subscribeToPositions(position) {
          var _this23 = this;

          if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              /** @type {?} */
              var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
              /** @type {?} */

              var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

              /** @type {?} */
              _this23.menu.setPositionClasses(posX, posY);
            });
          }
        }
        /**
         * Sets the appropriate positions on a position strategy
         * so the overlay connects with the trigger correctly.
         * @private
         * @param {?} positionStrategy Strategy whose position to update.
         * @return {?}
         */

      }, {
        key: "_setPosition",
        value: function _setPosition(positionStrategy) {
          var _ref = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
              _ref2 = _slicedToArray(_ref, 2),
              originX = _ref2[0],
              originFallbackX = _ref2[1];

          var _ref3 = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
              _ref4 = _slicedToArray(_ref3, 2),
              overlayY = _ref4[0],
              overlayFallbackY = _ref4[1];

          var originY = overlayY,
              originFallbackY = overlayFallbackY;
          var overlayX = originX,
              overlayFallbackX = originFallbackX;
          /** @type {?} */

          var offsetY = 0;

          if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
          } else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
          }

          positionStrategy.withPositions([{
            originX: originX,
            originY: originY,
            overlayX: overlayX,
            overlayY: overlayY,
            offsetY: offsetY
          }, {
            originX: originFallbackX,
            originY: originY,
            overlayX: overlayFallbackX,
            overlayY: overlayY,
            offsetY: offsetY
          }, {
            originX: originX,
            originY: originFallbackY,
            overlayX: overlayX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }, {
            originX: originFallbackX,
            originY: originFallbackY,
            overlayX: overlayFallbackX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }]);
        }
        /**
         * Returns a stream that emits whenever an action that should close the menu occurs.
         * @private
         * @return {?}
         */

      }, {
        key: "_menuClosingActions",
        value: function _menuClosingActions() {
          var _this24 = this;

          /** @type {?} */
          var backdrop =
          /** @type {?} */
          this._overlayRef.backdropClick();
          /** @type {?} */


          var detachments =
          /** @type {?} */
          this._overlayRef.detachments();
          /** @type {?} */


          var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
          /** @type {?} */

          var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @param {?} active
          * @return {?}
          */
          function (active) {
            return active !== _this24._menuItemInstance;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this24._menuOpen;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
        }
        /**
         * Handles mouse presses on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleMousedown",
        value: function _handleMousedown(event) {
          if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : null; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.

            if (this.triggersSubmenu()) {
              event.preventDefault();
            }
          }
        }
        /**
         * Handles key presses on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;

          if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["RIGHT_ARROW"] && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["LEFT_ARROW"] && this.dir === 'rtl')) {
            this.openMenu();
          }
        }
        /**
         * Handles click events on the trigger.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(event) {
          if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
          } else {
            this.toggleMenu();
          }
        }
        /**
         * Handles the cases where the user hovers over the trigger.
         * @private
         * @return {?}
         */

      }, {
        key: "_handleHover",
        value: function _handleHover() {
          var _this25 = this;

          // Subscribe to changes in the hovered item in order to toggle the panel.
          if (!this.triggersSubmenu()) {
            return;
          }

          this._hoverSubscription = this._parentMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
          // with different data and triggers), we have to delay it by a tick to ensure that
          // it won't be closed immediately after it is opened.
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @param {?} active
          * @return {?}
          */
          function (active) {
            return active === _this25._menuItemInstance && !active.disabled;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"])).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.

            if (_this25.menu instanceof MatMenu && _this25.menu._isAnimating) {
              // We need the `delay(0)` here in order to avoid
              // 'changed after checked' errors in some cases. See #12194.
              _this25.menu._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this25._parentMenu._hovered())).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this25.openMenu();
              });
            } else {
              _this25.openMenu();
            }
          });
        }
        /**
         * Gets the portal that should be attached to the overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPortal",
        value: function _getPortal() {
          // Note that we can avoid this check by keeping the portal on the menu panel.
          // While it would be cleaner, we'd have to introduce another required method on
          // `MatMenuPanel`, making it harder to consume.
          if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
          }

          return this._portal;
        }
      }, {
        key: "_deprecatedMatMenuTriggerFor",
        get: function get() {
          return this.menu;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this.menu = v;
        }
        /**
         * References the menu instance that the trigger is associated with.
         * @return {?}
         */

      }, {
        key: "menu",
        get: function get() {
          return this._menu;
        }
        /**
         * @param {?} menu
         * @return {?}
         */
        ,
        set: function set(menu) {
          var _this26 = this;

          if (menu === this._menu) {
            return;
          }

          this._menu = menu;

          this._menuCloseSubscription.unsubscribe();

          if (menu) {
            this._menuCloseSubscription = menu.close.asObservable().subscribe(
            /**
            * @param {?} reason
            * @return {?}
            */
            function (reason) {
              _this26._destroyMenu(); // If a click closed the menu, we should close the entire chain of nested menus.


              if ((reason === 'click' || reason === 'tab') && _this26._parentMenu) {
                _this26._parentMenu.closed.emit(reason);
              }
            });
          }
        }
      }, {
        key: "menuOpen",
        get: function get() {
          return this._menuOpen;
        }
        /**
         * The text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
      }]);

      return MatMenuTrigger;
    }();

    MatMenuTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
        host: {
          'class': 'mat-menu-trigger',
          'aria-haspopup': 'true',
          '[attr.aria-expanded]': 'menuOpen || null',
          '(mousedown)': '_handleMousedown($event)',
          '(keydown)': '_handleKeydown($event)',
          '(click)': '_handleClick($event)'
        },
        exportAs: 'matMenuTrigger'
      }]
    }];
    /** @nocollapse */

    MatMenuTrigger.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_MENU_SCROLL_STRATEGY]
        }]
      }, {
        type: MatMenu,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: MatMenuItem,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
      }];
    };

    MatMenuTrigger.propDecorators = {
      _deprecatedMatMenuTriggerFor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['mat-menu-trigger-for']
      }],
      menu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerFor']
      }],
      menuData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerData']
      }],
      restoreFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matMenuTriggerRestoreFocus']
      }],
      menuOpened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onMenuOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      menuClosed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      onMenuClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
     * to declare the menu-related directives.
     */
    // tslint:disable-next-line:class-name

    var _MatMenuDirectivesModule = function _MatMenuDirectivesModule() {
      _classCallCheck(this, _MatMenuDirectivesModule);
    };

    _MatMenuDirectivesModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
        declarations: [MatMenuTrigger, MatMenuContent],
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }];

    var MatMenuModule = function MatMenuModule() {
      _classCallCheck(this, MatMenuModule);
    };

    MatMenuModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule],
        exports: [_MatMenu, MatMenuItem, _MatMenuDirectivesModule],
        declarations: [_MatMenu, MatMenuItem],
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=menu.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/paginator.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/paginator.js ***!
    \*************************************************************/

  /*! exports provided: MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER */

  /***/
  function node_modulesAngularMaterialEsm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
      return MatPaginatorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
      return PageEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
      return MatPaginator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
      return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
      return MatPaginatorIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
      return MAT_PAGINATOR_INTL_PROVIDER;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
     * include it in a custom provider
     */


    var MatPaginatorIntl = function MatPaginatorIntl() {
      _classCallCheck(this, MatPaginatorIntl);

      /**
       * Stream to emit from when labels are changed. Use this to notify components when the labels have
       * changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      /**
       * A label for the page size selector.
       */

      this.itemsPerPageLabel = 'Items per page:';
      /**
       * A label for the button that increments the current page.
       */

      this.nextPageLabel = 'Next page';
      /**
       * A label for the button that decrements the current page.
       */

      this.previousPageLabel = 'Previous page';
      /**
       * A label for the button that moves to the first page.
       */

      this.firstPageLabel = 'First page';
      /**
       * A label for the button that moves to the last page.
       */

      this.lastPageLabel = 'Last page';
      /**
       * A label for the range of items within the current page and the length of the whole list.
       */

      this.getRangeLabel =
      /**
      * @param {?} page
      * @param {?} pageSize
      * @param {?} length
      * @return {?}
      */
      function (page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
          return "0 of ".concat(length);
        }

        length = Math.max(length, 0);
        /** @type {?} */

        var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

        /** @type {?} */

        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
      };
    };

    MatPaginatorIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatPaginatorIntl_Factory() {
        return new MatPaginatorIntl();
      },
      token: MatPaginatorIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatPaginatorIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_PAGINATOR_INTL_PROVIDER = {
      // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
      provide: MatPaginatorIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The default page size if there is no page size and there are no provided page size options.
     * @type {?}
     */

    var DEFAULT_PAGE_SIZE = 50;
    /**
     * Change event object that is emitted when the user selects a
     * different page size or navigates to another page.
     */

    var PageEvent = function PageEvent() {
      _classCallCheck(this, PageEvent);
    }; // Boilerplate for applying mixins to MatPaginator.

    /**
     * \@docs-private
     */


    var MatPaginatorBase = function MatPaginatorBase() {
      _classCallCheck(this, MatPaginatorBase);
    };
    /** @type {?} */


    var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinInitialized"])(MatPaginatorBase));
    /**
     * Component to provide navigation between paged information. Displays the size of the current
     * page, user-selectable options to change that size, what items are being shown, and
     * navigational button to go to the previous or next page.
     */


    var MatPaginator =
    /*#__PURE__*/
    function (_MatPaginatorBase2) {
      _inherits(MatPaginator, _MatPaginatorBase2);

      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       */
      function MatPaginator(_intl, _changeDetectorRef) {
        var _this27;

        _classCallCheck(this, MatPaginator);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(MatPaginator).call(this));
        _this27._intl = _intl;
        _this27._changeDetectorRef = _changeDetectorRef;
        _this27._pageIndex = 0;
        _this27._length = 0;
        _this27._pageSizeOptions = [];
        _this27._hidePageSize = false;
        _this27._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */

        _this27.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this27._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this27._changeDetectorRef.markForCheck();
        });
        return _this27;
      }
      /**
       * The zero-based page index of the displayed list of items. Defaulted to 0.
       * @return {?}
       */


      _createClass(MatPaginator, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._initialized = true;

          this._updateDisplayedPageSizeOptions();

          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();
        }
        /**
         * Advances to the next page if it exists.
         * @return {?}
         */

      }, {
        key: "nextPage",
        value: function nextPage() {
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex++;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move back to the previous page if it exists.
         * @return {?}
         */

      }, {
        key: "previousPage",
        value: function previousPage() {
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex--;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the first page if not already there.
         * @return {?}
         */

      }, {
        key: "firstPage",
        value: function firstPage() {
          // hasPreviousPage being false implies at the start
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = 0;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the last page if not already there.
         * @return {?}
         */

      }, {
        key: "lastPage",
        value: function lastPage() {
          // hasNextPage being false implies at the end
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = this.getNumberOfPages() - 1;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Whether there is a previous page.
         * @return {?}
         */

      }, {
        key: "hasPreviousPage",
        value: function hasPreviousPage() {
          return this.pageIndex >= 1 && this.pageSize != 0;
        }
        /**
         * Whether there is a next page.
         * @return {?}
         */

      }, {
        key: "hasNextPage",
        value: function hasNextPage() {
          /** @type {?} */
          var maxPageIndex = this.getNumberOfPages() - 1;
          return this.pageIndex < maxPageIndex && this.pageSize != 0;
        }
        /**
         * Calculate the number of pages
         * @return {?}
         */

      }, {
        key: "getNumberOfPages",
        value: function getNumberOfPages() {
          if (!this.pageSize) {
            return 0;
          }

          return Math.ceil(this.length / this.pageSize);
        }
        /**
         * Changes the page size so that the first item displayed on the page will still be
         * displayed using the new page size.
         *
         * For example, if the page size is 10 and on the second page (items indexed 10-19) then
         * switching so that the page size is 5 will set the third page as the current page so
         * that the 10th item will still be displayed.
         * @param {?} pageSize
         * @return {?}
         */

      }, {
        key: "_changePageSize",
        value: function _changePageSize(pageSize) {
          // Current page needs to be updated to reflect the new page size. Navigate to the page
          // containing the previous page's first item.

          /** @type {?} */
          var startIndex = this.pageIndex * this.pageSize;
          /** @type {?} */

          var previousPageIndex = this.pageIndex;
          this.pageIndex = Math.floor(startIndex / pageSize) || 0;
          this.pageSize = pageSize;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Checks whether the buttons for going forwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_nextButtonsDisabled",
        value: function _nextButtonsDisabled() {
          return this.disabled || !this.hasNextPage();
        }
        /**
         * Checks whether the buttons for going backwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_previousButtonsDisabled",
        value: function _previousButtonsDisabled() {
          return this.disabled || !this.hasPreviousPage();
        }
        /**
         * Updates the list of page size options to display to the user. Includes making sure that
         * the page size is an option and that the list is sorted.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDisplayedPageSizeOptions",
        value: function _updateDisplayedPageSizeOptions() {
          if (!this._initialized) {
            return;
          } // If no page size is provided, use the first page size option or the default page size.


          if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
          }

          this._displayedPageSizeOptions = this.pageSizeOptions.slice();

          if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
          } // Sort the numbers using a number-specific sort function.


          this._displayedPageSizeOptions.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a - b;
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits an event notifying that a change of the paginator's properties has been triggered.
         * @private
         * @param {?} previousPageIndex
         * @return {?}
         */

      }, {
        key: "_emitPageEvent",
        value: function _emitPageEvent(previousPageIndex) {
          this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
          });
        }
      }, {
        key: "pageIndex",
        get: function get() {
          return this._pageIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */

      }, {
        key: "length",
        get: function get() {
          return this._length;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */

      }, {
        key: "pageSize",
        get: function get() {
          return this._pageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */

      }, {
        key: "pageSizeOptions",
        get: function get() {
          return this._pageSizeOptions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSizeOptions = (value || []).map(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(p);
          });

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */

      }, {
        key: "hidePageSize",
        get: function get() {
          return this._hidePageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */

      }, {
        key: "showFirstLastButtons",
        get: function get() {
          return this._showFirstLastButtons;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatPaginator;
    }(_MatPaginatorBase);

    MatPaginator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-paginator',
        exportAs: 'matPaginator',
        template: "<div class=\"mat-paginator-outer-container\"><div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" [color]=\"color\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [disabled]=\"disabled\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div></div>",
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
        inputs: ['disabled'],
        host: {
          'class': 'mat-paginator'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatPaginator.ctorParameters = function () {
      return [{
        type: MatPaginatorIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    MatPaginator.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      length: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hidePageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showFirstLastButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      page: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatPaginatorModule = function MatPaginatorModule() {
      _classCallCheck(this, MatPaginatorModule);
    };

    MatPaginatorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]],
        exports: [MatPaginator],
        declarations: [MatPaginator],
        providers: [MAT_PAGINATOR_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=paginator.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/sidenav.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/sidenav.js ***!
    \***********************************************************/

  /*! exports provided: MatSidenavModule, throwMatDuplicatedDrawerError, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, matDrawerAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015SidenavJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function () {
      return MatSidenavModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function () {
      return throwMatDuplicatedDrawerError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function () {
      return MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function () {
      return MAT_DRAWER_DEFAULT_AUTOSIZE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function () {
      return MatDrawerContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawer", function () {
      return MatDrawer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function () {
      return MatDrawerContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function () {
      return MatSidenavContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenav", function () {
      return MatSidenav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function () {
      return MatSidenavContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function () {
      return matDrawerAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material drawers.
     * \@docs-private
     * @type {?}
     */


    var matDrawerAnimations = {
      /**
       * Animation that slides a drawer in and out.
       */
      transformDrawer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
      // 1. Having a transform can cause elements with ripples or an animated
      //    transform to shift around in Chrome with an RTL layout (see #10023).
      // 2. 3d transforms causes text to appear blurry on IE and Edge.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'transform': 'none',
        'visibility': 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        // Avoids the shadow showing up when closed in SSR.
        'box-shadow': 'none',
        'visibility': 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception when two MatDrawer are matching the same position.
     * \@docs-private
     * @param {?} position
     * @return {?}
     */

    function throwMatDuplicatedDrawerError(position) {
      throw Error("A drawer was already declared for 'position=\"".concat(position, "\"'"));
    }
    /**
     * Configures whether drawers should use auto sizing by default.
     * @type {?}
     */


    var MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('MAT_DRAWER_DEFAULT_AUTOSIZE', {
      providedIn: 'root',
      factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
      return false;
    }

    var MatDrawerContent =
    /*#__PURE__*/
    function (_angular_cdk_scrollin) {
      _inherits(MatDrawerContent, _angular_cdk_scrollin);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _container
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       */
      function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
        var _this28;

        _classCallCheck(this, MatDrawerContent);

        _this28 = _possibleConstructorReturn(this, _getPrototypeOf(MatDrawerContent).call(this, elementRef, scrollDispatcher, ngZone));
        _this28._changeDetectorRef = _changeDetectorRef;
        _this28._container = _container;
        return _this28;
      }
      /**
       * @return {?}
       */


      _createClass(MatDrawerContent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this29 = this;

          this._container._contentMarginChanges.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this29._changeDetectorRef.markForCheck();
          });
        }
      }]);

      return MatDrawerContent;
    }(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkScrollable"]);

    MatDrawerContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-drawer-content',
        template: '<ng-content></ng-content>',
        host: {
          'class': 'mat-drawer-content',
          '[style.margin-left.px]': '_container._contentMargins.left',
          '[style.margin-right.px]': '_container._contentMargins.right'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatDrawerContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
      }, {
        type: MatDrawerContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatDrawerContainer;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
      }];
    };
    /**
     * This component corresponds to a drawer that can be opened on the drawer container.
     */


    var MatDrawer =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _focusMonitor
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _doc
       */
      function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc) {
        var _this30 = this;

        _classCallCheck(this, MatDrawer);

        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._focusMonitor = _focusMonitor;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._doc = _doc;
        this._elementFocusedBeforeDrawerWasOpened = null;
        /**
         * Whether the drawer is initialized. Used for disabling the initial animation.
         */

        this._enableAnimations = false;
        this._position = 'start';
        this._mode = 'over';
        this._disableClose = false;
        this._autoFocus = true;
        /**
         * Emits whenever the drawer has started animating.
         */

        this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Emits whenever the drawer is done animating.
         */

        this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Current state of the sidenav animation.
         */
        // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
        // metadata is not inherited by child classes, instead the host binding data is defined in a way
        // that can be inherited.
        // tslint:disable:no-host-decorator-in-concrete

        this._animationState = 'void';
        /**
         * Event emitted when the drawer open state is changed.
         */

        this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"](
        /* isAsync */
        true);
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Event emitted when the drawer's position changes.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * An observable that emits when the drawer mode changes. This is used by the drawer container to
         * to know when to when the mode changes so it can adapt the margins on the content.
         */

        this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._opened = false;
        this.openedChange.subscribe(
        /**
        * @param {?} opened
        * @return {?}
        */
        function (opened) {
          if (opened) {
            if (_this30._doc) {
              _this30._elementFocusedBeforeDrawerWasOpened =
              /** @type {?} */
              _this30._doc.activeElement;
            }

            if (_this30._isFocusTrapEnabled && _this30._focusTrap) {
              _this30._trapFocus();
            }
          } else {
            _this30._restoreFocus();
          }
        });
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
         * and we don't have close disabled.
         */

        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(_this30._elementRef.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"] && !_this30.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this30._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this30._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this30.close();

              event.stopPropagation();
              event.preventDefault();
            });
          });
        }); // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


        this._animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          var fromState = event.fromState,
              toState = event.toState;

          if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
            _this30.openedChange.emit(_this30._opened);
          }
        });
      }
      /**
       * The side that the drawer is attached to.
       * @return {?}
       */


      _createClass(MatDrawer, [{
        key: "_trapFocus",

        /**
         * Traps focus inside the drawer.
         * @private
         * @return {?}
         */
        value: function _trapFocus() {
          var _this31 = this;

          if (!this.autoFocus) {
            return;
          }

          this._focusTrap.focusInitialElementWhenReady().then(
          /**
          * @param {?} hasMovedFocus
          * @return {?}
          */
          function (hasMovedFocus) {
            // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
            // still works. We need to check that `focus` is a function due to Universal.
            if (!hasMovedFocus && typeof _this31._elementRef.nativeElement.focus === 'function') {
              _this31._elementRef.nativeElement.focus();
            }
          });
        }
        /**
         * If focus is currently inside the drawer, restores it to where it was before the drawer
         * opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          if (!this.autoFocus) {
            return;
          }
          /** @type {?} */


          var activeEl = this._doc && this._doc.activeElement;

          if (activeEl && this._elementRef.nativeElement.contains(activeEl)) {
            if (this._elementFocusedBeforeDrawerWasOpened instanceof HTMLElement) {
              this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
            } else {
              this._elementRef.nativeElement.blur();
            }
          }

          this._elementFocusedBeforeDrawerWasOpened = null;
          this._openedVia = null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

          this._updateFocusTrapState();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Enable the animations after the lifecycle hooks have run, in order to avoid animating
          // drawers that are open by default. When we're on the server, we shouldn't enable the
          // animations, because we don't want the drawer to animate the first time the user sees
          // the page.
          if (this._platform.isBrowser) {
            this._enableAnimations = true;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._focusTrap) {
            this._focusTrap.destroy();
          }

          this._animationStarted.complete();

          this._animationEnd.complete();

          this._modeChanged.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Whether the drawer is opened. We overload this because we trigger an event when it
         * starts or end.
         * @return {?}
         */

      }, {
        key: "open",

        /**
         * Open the drawer.
         * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
         * Used for focus management after the sidenav is closed.
         * @return {?}
         */
        value: function open(openedVia) {
          return this.toggle(true, openedVia);
        }
        /**
         * Close the drawer.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          return this.toggle(false);
        }
        /**
         * Toggle this drawer.
         * @param {?=} isOpen Whether the drawer should be open.
         * @param {?=} openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
         * Used for focus management after the sidenav is closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          var _this32 = this;

          var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.opened;
          var openedVia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'program';
          this._opened = isOpen;

          if (isOpen) {
            this._animationState = this._enableAnimations ? 'open' : 'open-instant';
            this._openedVia = openedVia;
          } else {
            this._animationState = 'void';

            this._restoreFocus();
          }

          this._updateFocusTrapState();

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this32.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
            /**
            * @param {?} open
            * @return {?}
            */
            function (open) {
              return resolve(open ? 'open' : 'close');
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "_updateFocusTrapState",

        /**
         * Updates the enabled state of the focus trap.
         * @private
         * @return {?}
         */
        value: function _updateFocusTrapState() {
          if (this._focusTrap) {
            this._focusTrap.enabled = this._isFocusTrapEnabled;
          }
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationStartListener",
        value: function _animationStartListener(event) {
          this._animationStarted.next(event);
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationDoneListener",
        value: function _animationDoneListener(event) {
          this._animationEnd.next(event);
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Make sure we have a valid value.
          value = value === 'end' ? 'end' : 'start';

          if (value != this._position) {
            this._position = value;
            this.onPositionChanged.emit();
          }
        }
        /**
         * Mode of the drawer; one of 'over', 'push' or 'side'.
         * @return {?}
         */

      }, {
        key: "mode",
        get: function get() {
          return this._mode;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._mode = value;

          this._updateFocusTrapState();

          this._modeChanged.next();
        }
        /**
         * Whether the drawer can be closed with the escape key or by clicking on the backdrop.
         * @return {?}
         */

      }, {
        key: "disableClose",
        get: function get() {
          return this._disableClose;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the drawer should focus the first focusable element automatically when opened.
         * @return {?}
         */

      }, {
        key: "autoFocus",
        get: function get() {
          return this._autoFocus;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Event emitted when the drawer has been opened.
         * @return {?}
         */

      }, {
        key: "_openedStream",
        get: function get() {
          return this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} o
          * @return {?}
          */
          function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * Event emitted when the drawer has started opening.
         * @return {?}
         */

      }, {
        key: "openedStart",
        get: function get() {
          return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e.fromState !== e.toState && e.toState.indexOf('open') === 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * Event emitted when the drawer has been closed.
         * @return {?}
         */

      }, {
        key: "_closedStream",
        get: function get() {
          return this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} o
          * @return {?}
          */
          function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * Event emitted when the drawer has started closing.
         * @return {?}
         */

      }, {
        key: "closedStart",
        get: function get() {
          return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e.fromState !== e.toState && e.toState === 'void';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(
          /**
          * @return {?}
          */
          function () {}));
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isFocusTrapEnabled",
        get: function get() {
          // The focus trap is only enabled when the drawer is open in any mode other than side.
          return this.opened && this.mode !== 'side';
        }
      }, {
        key: "opened",
        get: function get() {
          return this._opened;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.toggle(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value));
        }
      }, {
        key: "_width",
        get: function get() {
          return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
        }
      }]);

      return MatDrawer;
    }();

    MatDrawer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-drawer',
        exportAs: 'matDrawer',
        template: "<div class=\"mat-drawer-inner-container\"><ng-content></ng-content></div>",
        animations: [matDrawerAnimations.transformDrawer],
        host: {
          'class': 'mat-drawer',
          // must prevent the browser from aligning text based on value
          '[attr.align]': 'null',
          '[class.mat-drawer-end]': 'position === "end"',
          '[class.mat-drawer-over]': 'mode === "over"',
          '[class.mat-drawer-push]': 'mode === "push"',
          '[class.mat-drawer-side]': 'mode === "side"',
          '[class.mat-drawer-opened]': 'opened',
          'tabIndex': '-1'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatDrawer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusTrapFactory"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
        }]
      }];
    };

    MatDrawer.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      disableClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      autoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      _animationState: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["HostBinding"],
        args: ['@transform']
      }],
      openedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      _openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['opened']
      }],
      openedStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      _closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['closed']
      }],
      closedStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      onPositionChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['positionChanged']
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      _animationStartListener: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["HostListener"],
        args: ['@transform.start', ['$event']]
      }],
      _animationDoneListener: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["HostListener"],
        args: ['@transform.done', ['$event']]
      }]
    };
    /**
     * `<mat-drawer-container>` component.
     *
     * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
     * and coordinates the backdrop and content styling.
     */

    var MatDrawerContainer =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _dir
       * @param {?} _element
       * @param {?} _ngZone
       * @param {?} _changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} defaultAutosize
       * @param {?=} _animationMode
       */
      function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler) {
        var _this33 = this;

        var defaultAutosize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        var _animationMode = arguments.length > 6 ? arguments[6] : undefined;

        _classCallCheck(this, MatDrawerContainer);

        this._dir = _dir;
        this._element = _element;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /**
         * Event emitted when the drawer backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Emits on every ngDoCheck. Used for debouncing reflows.
         */

        this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Margins to be applied to the content. These are used to push / shrink the drawer content when a
         * drawer is open. We use margin rather than transform even for push mode because transform breaks
         * fixed position elements inside of the transformed element.
         */

        this._contentMargins = {
          left: null,
          right: null
        };
        this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"](); // If a `Dir` directive exists up the tree, listen direction changes
        // and update the left/right properties to point to the proper start/end.

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this33._validateDrawers();

            _this33.updateContentMargins();
          });
        } // Since the minimum width of the sidenav depends on the viewport width,
        // we need to recompute the margins if the viewport changes.


        viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this33.updateContentMargins();
        });
        this._autosize = defaultAutosize;
      }
      /**
       * The drawer child with the `start` position.
       * @return {?}
       */


      _createClass(MatDrawerContainer, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this34 = this;

          this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this34._validateDrawers();

            _this34._drawers.forEach(
            /**
            * @param {?} drawer
            * @return {?}
            */
            function (drawer) {
              _this34._watchDrawerToggle(drawer);

              _this34._watchDrawerPosition(drawer);

              _this34._watchDrawerMode(drawer);
            });

            if (!_this34._drawers.length || _this34._isDrawerOpen(_this34._start) || _this34._isDrawerOpen(_this34._end)) {
              _this34.updateContentMargins();
            }

            _this34._changeDetectorRef.markForCheck();
          });

          this._doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(10), // Arbitrary debounce time, less than a frame at 60fps
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this34.updateContentMargins();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._contentMarginChanges.complete();

          this._doCheckSubject.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Calls `open` of both start and end drawers
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this._drawers.forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return drawer.open();
          });
        }
        /**
         * Calls `close` of both start and end drawers
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this._drawers.forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return drawer.close();
          });
        }
        /**
         * Recalculates and updates the inline styles for the content. Note that this should be used
         * sparingly, because it causes a reflow.
         * @return {?}
         */

      }, {
        key: "updateContentMargins",
        value: function updateContentMargins() {
          var _this35 = this;

          // 1. For drawers in `over` mode, they don't affect the content.
          // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
          //    left margin (for left drawer) or right margin (for right the drawer).
          // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
          //    adding to the left or right margin and simultaneously subtracting the same amount of
          //    margin from the other side.

          /** @type {?} */
          var left = 0;
          /** @type {?} */

          var right = 0;

          if (this._left && this._left.opened) {
            if (this._left.mode == 'side') {
              left += this._left._width;
            } else if (this._left.mode == 'push') {
              /** @type {?} */
              var width = this._left._width;
              left += width;
              right -= width;
            }
          }

          if (this._right && this._right.opened) {
            if (this._right.mode == 'side') {
              right += this._right._width;
            } else if (this._right.mode == 'push') {
              /** @type {?} */
              var _width = this._right._width;
              right += _width;
              left -= _width;
            }
          } // If either `right` or `left` is zero, don't set a style to the element. This
          // allows users to specify a custom size via CSS class in SSR scenarios where the
          // measured widths will always be zero. Note that we reset to `null` here, rather
          // than below, in order to ensure that the types in the `if` below are consistent.


          left = left ||
          /** @type {?} */
          null;
          right = right ||
          /** @type {?} */
          null;

          if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = {
              left: left,
              right: right
            }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
            // to do it only when something changed, otherwise we can end up hitting the zone too often.

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this35._contentMarginChanges.next(_this35._contentMargins);
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this36 = this;

          // If users opted into autosizing, do a check every change detection cycle.
          if (this._autosize && this._isPushed()) {
            // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return _this36._doCheckSubject.next();
            });
          }
        }
        /**
         * Subscribes to drawer events in order to set a class on the main container element when the
         * drawer is open and the backdrop is visible. This ensures any overflow on the container element
         * is properly hidden.
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_watchDrawerToggle",
        value: function _watchDrawerToggle(drawer) {
          var _this37 = this;

          drawer._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.fromState !== event.toState;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // Set the transition class on the container so that the animations occur. This should not
            // be set initially because animations should only be triggered via a change in state.
            if (event.toState !== 'open-instant' && _this37._animationMode !== 'NoopAnimations') {
              _this37._element.nativeElement.classList.add('mat-drawer-transition');
            }

            _this37.updateContentMargins();

            _this37._changeDetectorRef.markForCheck();
          });

          if (drawer.mode !== 'side') {
            drawer.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this37._setContainerClass(drawer.opened);
            });
          }
        }
        /**
         * Subscribes to drawer onPositionChanged event in order to
         * re-validate drawers when the position changes.
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_watchDrawerPosition",
        value: function _watchDrawerPosition(drawer) {
          var _this38 = this;

          if (!drawer) {
            return;
          } // NOTE: We need to wait for the microtask queue to be empty before validating,
          // since both drawers may be swapping positions at the same time.


          drawer.onPositionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._drawers.changes)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this38._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this38._validateDrawers();
            });
          });
        }
        /**
         * Subscribes to changes in drawer mode so we can run change detection.
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_watchDrawerMode",
        value: function _watchDrawerMode(drawer) {
          var _this39 = this;

          if (drawer) {
            drawer._modeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._drawers.changes, this._destroyed))).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this39.updateContentMargins();

              _this39._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element.
         * @private
         * @param {?} isAdd
         * @return {?}
         */

      }, {
        key: "_setContainerClass",
        value: function _setContainerClass(isAdd) {
          /** @type {?} */
          var classList = this._element.nativeElement.classList;
          /** @type {?} */

          var className = 'mat-drawer-container-has-open';

          if (isAdd) {
            classList.add(className);
          } else {
            classList.remove(className);
          }
        }
        /**
         * Validate the state of the drawer children components.
         * @private
         * @return {?}
         */

      }, {
        key: "_validateDrawers",
        value: function _validateDrawers() {
          var _this40 = this;

          this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

          this._drawers.forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            if (drawer.position == 'end') {
              if (_this40._end != null) {
                throwMatDuplicatedDrawerError('end');
              }

              _this40._end = drawer;
            } else {
              if (_this40._start != null) {
                throwMatDuplicatedDrawerError('start');
              }

              _this40._start = drawer;
            }
          });

          this._right = this._left = null; // Detect if we're LTR or RTL.

          if (this._dir && this._dir.value === 'rtl') {
            this._left = this._end;
            this._right = this._start;
          } else {
            this._left = this._start;
            this._right = this._end;
          }
        }
        /**
         * Whether the container is being pushed to the side by one of the drawers.
         * @private
         * @return {?}
         */

      }, {
        key: "_isPushed",
        value: function _isPushed() {
          return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBackdropClicked",
        value: function _onBackdropClicked() {
          this.backdropClick.emit();

          this._closeModalDrawer();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_closeModalDrawer",
        value: function _closeModalDrawer() {
          var _this41 = this;

          // Close all open drawers where closing is not disabled and the mode is not `side`.
          [this._start, this._end].filter(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return drawer && !drawer.disableClose && _this41._canHaveBackdrop(drawer);
          }).forEach(
          /**
          * @param {?} drawer
          * @return {?}
          */
          function (drawer) {
            return (
              /** @type {?} */
              drawer.close()
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isShowingBackdrop",
        value: function _isShowingBackdrop() {
          return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
        }
        /**
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_canHaveBackdrop",
        value: function _canHaveBackdrop(drawer) {
          return drawer.mode !== 'side' || !!this._backdropOverride;
        }
        /**
         * @private
         * @param {?} drawer
         * @return {?}
         */

      }, {
        key: "_isDrawerOpen",
        value: function _isDrawerOpen(drawer) {
          return drawer != null && drawer.opened;
        }
      }, {
        key: "start",
        get: function get() {
          return this._start;
        }
        /**
         * The drawer child with the `end` position.
         * @return {?}
         */

      }, {
        key: "end",
        get: function get() {
          return this._end;
        }
        /**
         * Whether to automatically resize the container whenever
         * the size of any of its drawers changes.
         *
         * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
         * the drawers on every change detection cycle. Can be configured globally via the
         * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
         * @return {?}
         */

      }, {
        key: "autosize",
        get: function get() {
          return this._autosize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autosize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the drawer container should have a backdrop while one of the sidenavs is open.
         * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
         * mode as well.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          if (this._backdropOverride == null) {
            return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
          }

          return this._backdropOverride;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._backdropOverride = value == null ? null : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Reference to the CdkScrollable instance that wraps the scrollable content.
         * @return {?}
         */

      }, {
        key: "scrollable",
        get: function get() {
          return this._userContent || this._content;
        }
      }]);

      return MatDrawerContainer;
    }();

    MatDrawerContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-drawer-container',
        exportAs: 'matDrawerContainer',
        template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\" [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div><ng-content select=\"mat-drawer\"></ng-content><ng-content select=\"mat-drawer-content\"></ng-content><mat-drawer-content *ngIf=\"!_content\"><ng-content></ng-content></mat-drawer-content>",
        styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}@media (-ms-high-contrast:active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}@media (-ms-high-contrast:active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media (-ms-high-contrast:active){.mat-drawer.mat-drawer-end,[dir=rtl] .mat-drawer{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
        host: {
          'class': 'mat-drawer-container',
          '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatDrawerContainer.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
          args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatDrawerContainer.propDecorators = {
      _drawers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
        args: [MatDrawer]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
        args: [MatDrawerContent, {
          static: false
        }]
      }],
      _userContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: [MatDrawerContent, {
          static: false
        }]
      }],
      autosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSidenavContent =
    /*#__PURE__*/
    function (_MatDrawerContent) {
      _inherits(MatSidenavContent, _MatDrawerContent);

      /**
       * @param {?} changeDetectorRef
       * @param {?} container
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       */
      function MatSidenavContent(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
        _classCallCheck(this, MatSidenavContent);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatSidenavContent).call(this, changeDetectorRef, container, elementRef, scrollDispatcher, ngZone));
      }

      return MatSidenavContent;
    }(MatDrawerContent);

    MatSidenavContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-sidenav-content',
        template: '<ng-content></ng-content>',
        host: {
          'class': 'mat-drawer-content mat-sidenav-content',
          '[style.margin-left.px]': '_container._contentMargins.left',
          '[style.margin-right.px]': '_container._contentMargins.right'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatSidenavContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
      }, {
        type: MatSidenavContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatSidenavContainer;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
      }];
    };

    var MatSidenav =
    /*#__PURE__*/
    function (_MatDrawer) {
      _inherits(MatSidenav, _MatDrawer);

      function MatSidenav() {
        var _this42;

        _classCallCheck(this, MatSidenav);

        _this42 = _possibleConstructorReturn(this, _getPrototypeOf(MatSidenav).apply(this, arguments));
        _this42._fixedInViewport = false;
        _this42._fixedTopGap = 0;
        _this42._fixedBottomGap = 0;
        return _this42;
      }
      /**
       * Whether the sidenav is fixed in the viewport.
       * @return {?}
       */


      _createClass(MatSidenav, [{
        key: "fixedInViewport",
        get: function get() {
          return this._fixedInViewport;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fixedInViewport = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
         * mode.
         * @return {?}
         */

      }, {
        key: "fixedTopGap",
        get: function get() {
          return this._fixedTopGap;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fixedTopGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
        }
        /**
         * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
         * fixed mode.
         * @return {?}
         */

      }, {
        key: "fixedBottomGap",
        get: function get() {
          return this._fixedBottomGap;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._fixedBottomGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
        }
      }]);

      return MatSidenav;
    }(MatDrawer);

    MatSidenav.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-sidenav',
        exportAs: 'matSidenav',
        template: "<div class=\"mat-drawer-inner-container\"><ng-content></ng-content></div>",
        animations: [matDrawerAnimations.transformDrawer],
        host: {
          'class': 'mat-drawer mat-sidenav',
          'tabIndex': '-1',
          // must prevent the browser from aligning text based on value
          '[attr.align]': 'null',
          '[class.mat-drawer-end]': 'position === "end"',
          '[class.mat-drawer-over]': 'mode === "over"',
          '[class.mat-drawer-push]': 'mode === "push"',
          '[class.mat-drawer-side]': 'mode === "side"',
          '[class.mat-drawer-opened]': 'opened',
          '[class.mat-sidenav-fixed]': 'fixedInViewport',
          '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
          '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None
      }]
    }];
    MatSidenav.propDecorators = {
      fixedInViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      fixedTopGap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      fixedBottomGap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }]
    };

    var MatSidenavContainer =
    /*#__PURE__*/
    function (_MatDrawerContainer) {
      _inherits(MatSidenavContainer, _MatDrawerContainer);

      function MatSidenavContainer() {
        _classCallCheck(this, MatSidenavContainer);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatSidenavContainer).apply(this, arguments));
      }

      return MatSidenavContainer;
    }(MatDrawerContainer);

    MatSidenavContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-sidenav-container',
        exportAs: 'matSidenavContainer',
        template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\" [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div><ng-content select=\"mat-sidenav\"></ng-content><ng-content select=\"mat-sidenav-content\"></ng-content><mat-sidenav-content *ngIf=\"!_content\" cdkScrollable><ng-content></ng-content></mat-sidenav-content>",
        styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}@media (-ms-high-contrast:active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}@media (-ms-high-contrast:active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media (-ms-high-contrast:active){.mat-drawer.mat-drawer-end,[dir=rtl] .mat-drawer{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
        host: {
          'class': 'mat-drawer-container mat-sidenav-container',
          '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None
      }]
    }];
    MatSidenavContainer.propDecorators = {
      _drawers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
        args: [MatSidenav]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
        args: [MatSidenavContent, {
          static: false
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSidenavModule = function MatSidenavModule() {
      _classCallCheck(this, MatSidenavModule);
    };

    MatSidenavModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"]],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
        declarations: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=sidenav.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/sort.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/sort.js ***!
    \********************************************************/

  /*! exports provided: MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015SortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
      return MatSortModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
      return MatSortHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
      return MatSortHeaderIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSort", function () {
      return MatSort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
      return matSortAnimations;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @param {?} id
     * @return {?}
     */


    function getSortDuplicateSortableIdError(id) {
      return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderNotContainedWithinSortError() {
      return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderMissingIdError() {
      return Error("MatSortHeader must be provided with a unique id.");
    }
    /**
     * \@docs-private
     * @param {?} direction
     * @return {?}
     */


    function getSortInvalidDirectionError(direction) {
      return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatSort.

    /**
     * \@docs-private
     */


    var MatSortBase = function MatSortBase() {
      _classCallCheck(this, MatSortBase);
    };
    /** @type {?} */


    var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
    /**
     * Container for MatSortables to manage the sort state and provide default sort parameters.
     */


    var MatSort =
    /*#__PURE__*/
    function (_MatSortMixinBase2) {
      _inherits(MatSort, _MatSortMixinBase2);

      function MatSort() {
        var _this43;

        _classCallCheck(this, MatSort);

        _this43 = _possibleConstructorReturn(this, _getPrototypeOf(MatSort).apply(this, arguments));
        /**
         * Collection of all registered sortables that this directive manages.
         */

        _this43.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */

        _this43._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */

        _this43.start = 'asc';
        _this43._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */

        _this43.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this43;
      }
      /**
       * The sort direction of the currently active MatSortable.
       * @return {?}
       */


      _createClass(MatSort, [{
        key: "register",

        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         * @param {?} sortable
         * @return {?}
         */
        value: function register(sortable) {
          if (!sortable.id) {
            throw getSortHeaderMissingIdError();
          }

          if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
          }

          this.sortables.set(sortable.id, sortable);
        }
        /**
         * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
         * collection of contained MatSortables.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(sortable) {
          this.sortables.delete(sortable.id);
        }
        /**
         * Sets the active sort id and determines the new sort direction.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(sortable) {
          if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
          } else {
            this.direction = this.getNextSortDirection(sortable);
          }

          this.sortChange.emit({
            active: this.active,
            direction: this.direction
          });
        }
        /**
         * Returns the next sort direction of the active sortable, checking for potential overrides.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortable) {
          if (!sortable) {
            return '';
          } // Get the sort direction cycle with the potential sortable overrides.

          /** @type {?} */


          var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
          /** @type {?} */

          var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

          /** @type {?} */

          var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

          if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
          }

          return sortDirectionCycle[nextDirectionIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "direction",
        get: function get() {
          return this._direction;
        }
        /**
         * @param {?} direction
         * @return {?}
         */
        ,
        set: function set(direction) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
          }

          this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         * @return {?}
         */

      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSort;
    }(_MatSortMixinBase);

    MatSort.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matSort]',
        exportAs: 'matSort',
        inputs: ['disabled: matSortDisabled']
      }]
    }];
    MatSort.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortActive']
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortStart']
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDirection']
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDisableClear']
      }],
      sortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['matSortChange']
      }]
    };
    /**
     * Returns the sort direction cycle to use given the provided parameters of order and clear.
     * @param {?} start
     * @param {?} disableClear
     * @return {?}
     */

    function getSortDirectionCycle(start, disableClear) {
      /** @type {?} */
      var sortOrder = ['asc', 'desc'];

      if (start == 'desc') {
        sortOrder.reverse();
      }

      if (!disableClear) {
        sortOrder.push('');
      }

      return sortOrder;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
    /**
     * Animations used by MatSort.
     * \@docs-private
     * @type {?}
     */

    var matSortAnimations = {
      /**
       * Animation that moves the sort indicator.
       */
      indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0px)'
      })), // 10px is the height of the sort indicator, minus the width of the pointers
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(10px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the left pointer of the indicator based on the sorting direction.
       */
      leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the right pointer of the indicator based on the sorting direction.
       */
      rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that controls the arrow opacity.
       */
      arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: .54
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0
      })), // Transition between all states except for immediate transitions
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation for the translation of the arrow as a whole. States are separated into two
       * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
       * peek, and active. The other states define a specific animation (source-to-destination)
       * and are determined as a function of their prev user-perceived state and what the next state
       * should be.
       */
      arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Below
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      })]))), // Hidden Below => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Above
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }))]),

      /**
       * Necessary trigger that calls animate on children animations.
       */
      allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), {
        optional: true
      })])])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
     * include it in a custom provider.
     */

    var MatSortHeaderIntl = function MatSortHeaderIntl() {
      _classCallCheck(this, MatSortHeaderIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      /**
       * ARIA label for the sorting button.
       */

      this.sortButtonLabel =
      /**
      * @param {?} id
      * @return {?}
      */
      function (id) {
        return "Change sorting for ".concat(id);
      };
    };

    MatSortHeaderIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MatSortHeaderIntl_Factory() {
        return new MatSortHeaderIntl();
      },
      token: MatSortHeaderIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatSortHeaderIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SORT_HEADER_INTL_PROVIDER = {
      // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
      provide: MatSortHeaderIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatSortHeaderIntl]],
      useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to the sort header.

    /**
     * \@docs-private
     */

    var MatSortHeaderBase = function MatSortHeaderBase() {
      _classCallCheck(this, MatSortHeaderBase);
    };
    /** @type {?} */


    var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
    /**
     * Applies sorting behavior (click to change sort) and styles to an element, including an
     * arrow to display the current sort direction.
     *
     * Must be provided with an id and contained within a parent MatSort directive.
     *
     * If used on header cells in a CdkTable, it will automatically default its id from its containing
     * column definition.
     */


    var MatSortHeader =
    /*#__PURE__*/
    function (_MatSortHeaderMixinBa) {
      _inherits(MatSortHeader, _MatSortHeaderMixinBa);

      /**
       * @param {?} _intl
       * @param {?} changeDetectorRef
       * @param {?} _sort
       * @param {?} _columnDef
       */
      function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
        var _this44;

        _classCallCheck(this, MatSortHeader);

        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _this44 = _possibleConstructorReturn(this, _getPrototypeOf(MatSortHeader).call(this));
        _this44._intl = _intl;
        _this44._sort = _sort;
        _this44._columnDef = _columnDef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */

        _this44._showIndicatorHint = false;
        /**
         * The direction the arrow should be facing according to the current state.
         */

        _this44._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */

        _this44._disableViewStateAnimation = false;
        /**
         * Sets the position of the arrow that displays when sorted.
         */

        _this44.arrowPosition = 'after';

        if (!_sort) {
          throw getSortHeaderNotContainedWithinSortError();
        }

        _this44._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this44._isSorted()) {
            _this44._updateArrowDirection();
          } // If this header was recently active and now no longer sorted, animate away the arrow.


          if (!_this44._isSorted() && _this44._viewState && _this44._viewState.toState === 'active') {
            _this44._disableViewStateAnimation = false;

            _this44._setAnimationTransitionState({
              fromState: 'active',
              toState: _this44._arrowDirection
            });
          }

          changeDetectorRef.markForCheck();
        });
        return _this44;
      }
      /**
       * Overrides the disable clear value of the containing MatSort for this MatSortable.
       * @return {?}
       */


      _createClass(MatSortHeader, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
          } // Initialize the direction of the arrow and set the view state to be immediately that state.


          this._updateArrowDirection();

          this._setAnimationTransitionState({
            toState: this._isSorted() ? 'active' : this._arrowDirection
          });

          this._sort.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._sort.deregister(this);

          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         * @param {?} visible
         * @return {?}
         */

      }, {
        key: "_setIndicatorHintVisible",
        value: function _setIndicatorHintVisible(visible) {
          // No-op if the sort header is disabled - should not make the hint visible.
          if (this._isDisabled() && visible) {
            return;
          }

          this._showIndicatorHint = visible;

          if (!this._isSorted()) {
            this._updateArrowDirection();

            if (this._showIndicatorHint) {
              this._setAnimationTransitionState({
                fromState: this._arrowDirection,
                toState: 'hint'
              });
            } else {
              this._setAnimationTransitionState({
                fromState: 'hint',
                toState: this._arrowDirection
              });
            }
          }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         * @param {?} viewState
         * @return {?}
         */

      }, {
        key: "_setAnimationTransitionState",
        value: function _setAnimationTransitionState(viewState) {
          this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
          // remove the fromState so that it jumps right to the toState.

          if (this._disableViewStateAnimation) {
            this._viewState = {
              toState: viewState.toState
            };
          }
        }
        /**
         * Triggers the sort on this sort header and removes the indicator hint.
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (this._isDisabled()) {
            return;
          }

          this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


          if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
          } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
          // the direction it is facing.

          /** @type {?} */


          var viewState = this._isSorted() ? {
            fromState: this._arrowDirection,
            toState: 'active'
          } : {
            fromState: 'active',
            toState: this._arrowDirection
          };

          this._setAnimationTransitionState(viewState);

          this._showIndicatorHint = false;
        }
        /**
         * Whether this MatSortHeader is currently sorted in either ascending or descending order.
         * @return {?}
         */

      }, {
        key: "_isSorted",
        value: function _isSorted() {
          return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /**
         * Returns the animation state for the arrow direction (indicator and pointers).
         * @return {?}
         */

      }, {
        key: "_getArrowDirectionState",
        value: function _getArrowDirectionState() {
          return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
        }
        /**
         * Returns the arrow position state (opacity, translation).
         * @return {?}
         */

      }, {
        key: "_getArrowViewState",
        value: function _getArrowViewState() {
          /** @type {?} */
          var fromState = this._viewState.fromState;
          return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
        }
        /**
         * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
         * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
         * active sorted direction. The reason this is updated through a function is because the direction
         * should only be changed at specific times - when deactivated but the hint is displayed and when
         * the sort is active and the direction changes. Otherwise the arrow's direction should linger
         * in cases such as the sort becoming deactivated but we want to animate the arrow away while
         * preserving its direction, even though the next sort direction is actually different and should
         * only be changed once the arrow displays again (hint or activation).
         * @return {?}
         */

      }, {
        key: "_updateArrowDirection",
        value: function _updateArrowDirection() {
          this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled() {
          return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         * @return {?}
         */

      }, {
        key: "_getAriaSortAttribute",
        value: function _getAriaSortAttribute() {
          if (!this._isSorted()) {
            return null;
          }

          return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /**
         * Whether the arrow inside the sort header should be rendered.
         * @return {?}
         */

      }, {
        key: "_renderArrow",
        value: function _renderArrow() {
          return !this._isDisabled() || this._isSorted();
        }
      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSortHeader;
    }(_MatSortHeaderMixinBase);

    MatSortHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: '[mat-sort-header]',
        exportAs: 'matSortHeader',
        template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" *ngIf=\"_renderArrow()\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
        host: {
          '(click)': '_handleClick()',
          '(mouseenter)': '_setIndicatorHintVisible(true)',
          '(mouseleave)': '_setIndicatorHintVisible(false)',
          '[attr.aria-sort]': '_getAriaSortAttribute()',
          '[class.mat-sort-header-disabled]': '_isDisabled()'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled'],
        animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      }]
    }];
    /** @nocollapse */

    MatSortHeader.ctorParameters = function () {
      return [{
        type: MatSortHeaderIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatSort,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['MAT_SORT_HEADER_COLUMN_DEF']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSortHeader.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-sort-header']
      }],
      arrowPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSortModule = function MatSortModule() {
      _classCallCheck(this, MatSortModule);
    };

    MatSortModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [MatSort, MatSortHeader],
        declarations: [MatSort, MatSortHeader],
        providers: [MAT_SORT_HEADER_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=sort.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/tooltip.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/tooltip.js ***!
    \***********************************************************/

  /*! exports provided: MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015TooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
      return MatTooltipModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
      return getMatTooltipInvalidPositionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
      return SCROLL_THROTTLE_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
      return TOOLTIP_PANEL_CLASS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
      return MatTooltip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
      return matTooltipAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatTooltip.
     * \@docs-private
     * @type {?}
     */


    var matTooltipAnimations = {
      /**
       * Animation that transitions a tooltip in and out.
       */
      tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.5,
        transform: 'scale(0.99)',
        offset: 0.5
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1)',
        offset: 1
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle repositioning after scroll events.
     * @type {?}
     */

    var SCROLL_THROTTLE_MS = 20;
    /**
     * CSS class that will be attached to the overlay panel.
     * @type {?}
     */

    var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
    /**
     * Creates an error to be thrown if the user supplied an invalid tooltip position.
     * \@docs-private
     * @param {?} position
     * @return {?}
     */

    function getMatTooltipInvalidPositionError(position) {
      return Error("Tooltip position \"".concat(position, "\" is invalid."));
    }
    /**
     * Injection token that determines the scroll handling while a tooltip is visible.
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["InjectionToken"]('mat-tooltip-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
          });
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Injection token to be used to override the default options for `matTooltip`.
     * @type {?}
     */

    var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["InjectionToken"]('mat-tooltip-default-options', {
      providedIn: 'root',
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
      return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500
      };
    }
    /**
     * Directive that attaches a material design tooltip to the host element. Animates the showing and
     * hiding of a tooltip provided position (defaults to below the element).
     *
     * https://material.io/design/components/tooltips.html
     */


    var MatTooltip =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _elementRef
       * @param {?} _scrollDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _ngZone
       * @param {?} platform
       * @param {?} _ariaDescriber
       * @param {?} _focusMonitor
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _defaultOptions
       * @param {?=} hammerLoader
       */
      function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, hammerLoader) {
        var _this45 = this;

        _classCallCheck(this, MatTooltip);

        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */

        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */

        this.hideDelay = this._defaultOptions.hideDelay;
        this._message = '';
        this._manualListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this._scrollStrategy = scrollStrategy;
        /** @type {?} */

        var element = _elementRef.nativeElement;
        /** @type {?} */

        var hasGestures = typeof window === 'undefined' ||
        /** @type {?} */
        window.Hammer || hammerLoader; // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.

        if (!platform.IOS && !platform.ANDROID) {
          this._manualListeners.set('mouseenter',
          /**
          * @return {?}
          */
          function () {
            return _this45.show();
          }).set('mouseleave',
          /**
          * @return {?}
          */
          function () {
            return _this45.hide();
          });
        } else if (!hasGestures) {
          // If Hammerjs isn't loaded, fall back to showing on `touchstart`, otherwise
          // there's no way for the user to trigger the tooltip on a touch device.
          this._manualListeners.set('touchstart',
          /**
          * @return {?}
          */
          function () {
            return _this45.show();
          });
        }

        this._manualListeners.forEach(
        /**
        * @param {?} listener
        * @param {?} event
        * @return {?}
        */
        function (listener, event) {
          return element.addEventListener(event, listener);
        });

        _focusMonitor.monitor(_elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          // Note that the focus monitor runs outside the Angular zone.
          if (!origin) {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this45.hide(0);
            });
          } else if (origin === 'keyboard') {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this45.show();
            });
          }
        });

        if (_defaultOptions && _defaultOptions.position) {
          this.position = _defaultOptions.position;
        }
      }
      /**
       * Allows the user to define the position of the tooltip relative to the parent element
       * @return {?}
       */


      _createClass(MatTooltip, [{
        key: "ngOnInit",

        /**
         * Setup styling-specific things
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var elementStyle =
          /** @type {?} */
          element.style;

          if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            // When we bind a gesture event on an element (in this case `longpress`), HammerJS
            // will add some inline styles by default, including `user-select: none`. This is
            // problematic on iOS and in Safari, because it will prevent users from typing in inputs.
            // Since `user-select: none` is not needed for the `longpress` event and can cause unexpected
            // behavior for text fields, we always clear the `user-select` to avoid such issues.
            elementStyle.webkitUserSelect = elementStyle.userSelect = elementStyle.msUserSelect = '';
          } // Hammer applies `-webkit-user-drag: none` on all elements by default,
          // which breaks the native drag&drop. If the consumer explicitly made
          // the element draggable, clear the `-webkit-user-drag`.


          if (element.draggable && elementStyle.webkitUserDrag === 'none') {
            elementStyle.webkitUserDrag = '';
          }
        }
        /**
         * Dispose the tooltip when destroyed.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this46 = this;

          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._tooltipInstance = null;
          } // Clean up the event listeners set in the constructor


          this._manualListeners.forEach(
          /**
          * @param {?} listener
          * @param {?} event
          * @return {?}
          */
          function (listener, event) {
            _this46._elementRef.nativeElement.removeEventListener(event, listener);
          });

          this._manualListeners.clear();

          this._destroyed.next();

          this._destroyed.complete();

          this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message);

          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this47 = this;

          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

          if (this.disabled || !this.message || this._isTooltipVisible() && !
          /** @type {?} */
          this._tooltipInstance._showTimeoutId && !
          /** @type {?} */
          this._tooltipInstance._hideTimeoutId) {
            return;
          }
          /** @type {?} */


          var overlayRef = this._createOverlay();

          this._detach();

          this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
          this._tooltipInstance = overlayRef.attach(this._portal).instance;

          this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this47._detach();
          });

          this._setTooltipClass(this._tooltipClass);

          this._updateTooltipMessage();

          /** @type {?} */
          this._tooltipInstance.show(delay);
        }
        /**
         * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

          if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
          }
        }
        /**
         * Shows/hides the tooltip
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this._isTooltipVisible() ? this.hide() : this.show();
        }
        /**
         * Returns true if the tooltip is currently visible to the user
         * @return {?}
         */

      }, {
        key: "_isTooltipVisible",
        value: function _isTooltipVisible() {
          return !!this._tooltipInstance && this._tooltipInstance.isVisible();
        }
        /**
         * Handles the keydown events on the host element.
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(e) {
          if (this._isTooltipVisible() && e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(e)) {
            e.preventDefault();
            e.stopPropagation();
            this.hide(0);
          }
        }
        /**
         * Handles the touchend events on the host element.
         * @return {?}
         */

      }, {
        key: "_handleTouchend",
        value: function _handleTouchend() {
          this.hide(this._defaultOptions.touchendHideDelay);
        }
        /**
         * Create the overlay config and position strategy
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this48 = this;

          if (this._overlayRef) {
            return this._overlayRef;
          }
          /** @type {?} */


          var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.

          /** @type {?} */


          var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

          strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            if (_this48._tooltipInstance) {
              if (change.scrollableViewProperties.isOverlayClipped && _this48._tooltipInstance.isVisible()) {
                // After position changes occur and the overlay is clipped by
                // a parent scrollable then close the tooltip.
                _this48._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this48.hide(0);
                });
              }
            }
          });
          this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
          });

          this._updatePosition();

          this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this48._detach();
          });

          return this._overlayRef;
        }
        /**
         * Detaches the currently-attached tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
          }

          this._tooltipInstance = null;
        }
        /**
         * Updates the position of the current tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var position =
          /** @type {?} */

          /** @type {?} */
          this._overlayRef.getConfig().positionStrategy;
          /** @type {?} */


          var origin = this._getOrigin();
          /** @type {?} */


          var overlay = this._getOverlayPosition();

          position.withPositions([Object.assign({}, origin.main, overlay.main), Object.assign({}, origin.fallback, overlay.fallback)]);
        }
        /**
         * Returns the origin position and a fallback position based on the user's position preference.
         * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
         * @return {?}
         */

      }, {
        key: "_getOrigin",
        value: function _getOrigin() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var originPosition;

          if (position == 'above' || position == 'below') {
            originPosition = {
              originX: 'center',
              originY: position == 'above' ? 'top' : 'bottom'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            originPosition = {
              originX: 'start',
              originY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            originPosition = {
              originX: 'end',
              originY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
              x = _this$_invertPosition.x,
              y = _this$_invertPosition.y;

          return {
            main: originPosition,
            fallback: {
              originX: x,
              originY: y
            }
          };
        }
        /**
         * Returns the overlay position and a fallback position based on the user's preference
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var overlayPosition;

          if (position == 'above') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'bottom'
            };
          } else if (position == 'below') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'top'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            overlayPosition = {
              overlayX: 'end',
              overlayY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            overlayPosition = {
              overlayX: 'start',
              overlayY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
              x = _this$_invertPosition2.x,
              y = _this$_invertPosition2.y;

          return {
            main: overlayPosition,
            fallback: {
              overlayX: x,
              overlayY: y
            }
          };
        }
        /**
         * Updates the tooltip message and repositions the overlay according to the new message length
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTooltipMessage",
        value: function _updateTooltipMessage() {
          var _this49 = this;

          // Must wait for the message to be painted to the tooltip so that the overlay can properly
          // calculate the correct positioning based on the size of the text.
          if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;

            this._tooltipInstance._markForCheck();

            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this49._tooltipInstance) {
                /** @type {?} */
                _this49._overlayRef.updatePosition();
              }
            });
          }
        }
        /**
         * Updates the tooltip class
         * @private
         * @param {?} tooltipClass
         * @return {?}
         */

      }, {
        key: "_setTooltipClass",
        value: function _setTooltipClass(tooltipClass) {
          if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;

            this._tooltipInstance._markForCheck();
          }
        }
        /**
         * Inverts an overlay position.
         * @private
         * @param {?} x
         * @param {?} y
         * @return {?}
         */

      }, {
        key: "_invertPosition",
        value: function _invertPosition(x, y) {
          if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
              y = 'bottom';
            } else if (y === 'bottom') {
              y = 'top';
            }
          } else {
            if (x === 'end') {
              x = 'start';
            } else if (x === 'start') {
              x = 'end';
            }
          }

          return {
            x: x,
            y: y
          };
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._position) {
            this._position = value;

            if (this._overlayRef) {
              this._updatePosition();

              if (this._tooltipInstance) {
                /** @type {?} */
                this._tooltipInstance.show(0);
              }

              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * Disables the display of the tooltip.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

          if (this._disabled) {
            this.hide(0);
          }
        }
        /**
         * The message to be displayed in the tooltip
         * @return {?}
         */

      }, {
        key: "message",
        get: function get() {
          return this._message;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this50 = this;

          this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


          this._message = value != null ? "".concat(value).trim() : '';

          if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
          } else {
            this._updateTooltipMessage();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The `AriaDescriber` has some functionality that avoids adding a description if it's the
              // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
              // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
              // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this50._ariaDescriber.describe(_this50._elementRef.nativeElement, _this50.message);
              });
            });
          }
        }
        /**
         * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
         * @return {?}
         */

      }, {
        key: "tooltipClass",
        get: function get() {
          return this._tooltipClass;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._tooltipClass = value;

          if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
          }
        }
      }]);

      return MatTooltip;
    }();

    MatTooltip.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"],
      args: [{
        selector: '[matTooltip]',
        exportAs: 'matTooltip',
        host: {
          '(longpress)': 'show()',
          '(keydown)': '_handleKeydown($event)',
          '(touchend)': '_handleTouchend()'
        }
      }]
    }];
    /** @nocollapse */

    MatTooltip.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [MAT_TOOLTIP_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]
        }]
      }];
    };

    MatTooltip.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipDisabled']
      }],
      showDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipShowDelay']
      }],
      hideDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipHideDelay']
      }],
      message: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltip']
      }],
      tooltipClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipClass']
      }]
    };
    /**
     * Internal component that wraps the tooltip's content.
     * \@docs-private
     */

    var TooltipComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _breakpointObserver
       */
      function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
        _classCallCheck(this, TooltipComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */

        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */

        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */

        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */

        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset);
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
       * @return {?}
       */


      _createClass(TooltipComponent, [{
        key: "show",
        value: function show(delay) {
          var _this51 = this;

          // Cancel the delayed hide if it is scheduled
          if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
          } // Body interactions should cancel the tooltip if there is a delay in showing.


          this._closeOnInteraction = true;
          this._showTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this51._visibility = 'visible';
            _this51._showTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this51._markForCheck();
          }, delay);
        }
        /**
         * Begins the animation to hide the tooltip after the provided delay in ms.
         * @param {?} delay Amount of milliseconds to delay showing the tooltip.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(delay) {
          var _this52 = this;

          // Cancel the delayed show if it is scheduled
          if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
          }

          this._hideTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this52._visibility = 'hidden';
            _this52._hideTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this52._markForCheck();
          }, delay);
        }
        /**
         * Returns an observable that notifies when the tooltip has been hidden from view.
         * @return {?}
         */

      }, {
        key: "afterHidden",
        value: function afterHidden() {
          return this._onHide.asObservable();
        }
        /**
         * Whether the tooltip is being displayed.
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._visibility === 'visible';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._onHide.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_animationStart",
        value: function _animationStart() {
          this._closeOnInteraction = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationDone",
        value: function _animationDone(event) {
          /** @type {?} */
          var toState =
          /** @type {?} */
          event.toState;

          if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
          }

          if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
          }
        }
        /**
         * Interactions on the HTML body should close the tooltip immediately as defined in the
         * material design spec.
         * https://material.io/design/components/tooltips.html#behavior
         * @return {?}
         */

      }, {
        key: "_handleBodyInteraction",
        value: function _handleBodyInteraction() {
          if (this._closeOnInteraction) {
            this.hide(0);
          }
        }
        /**
         * Marks that the tooltip needs to be checked in the next change detection run.
         * Mainly used for rendering the initial text before positioning a tooltip, which
         * can be problematic in components with OnPush change detection.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          this._changeDetectorRef.markForCheck();
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"],
      args: [{
        selector: 'mat-tooltip-component',
        template: "<div class=\"mat-tooltip\" [ngClass]=\"tooltipClass\" [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\" [@state]=\"_visibility\" (@state.start)=\"_animationStart()\" (@state.done)=\"_animationDone($event)\">{{message}}</div>",
        styles: [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush,
        animations: [matTooltipAnimations.tooltipState],
        host: {
          // Forces the element to have a layout in IE and Edge. This fixes issues where the element
          // won't be rendered if the animations are disabled or there is no web animations polyfill.
          '[style.zoom]': '_visibility === "visible" ? 1 : null',
          '(body:click)': 'this._handleBodyInteraction()',
          'aria-hidden': 'true'
        }
      }]
    }];
    /** @nocollapse */

    TooltipComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTooltipModule = function MatTooltipModule() {
      _classCallCheck(this, MatTooltipModule);
    };

    MatTooltipModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
      args: [{
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"]],
        exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"]],
        declarations: [MatTooltip, TooltipComponent],
        entryComponents: [TooltipComponent],
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, {
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"],
          useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["GestureConfig"]
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=tooltip.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/dashboard/dashboard.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/dashboard/dashboard.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/form-product/form-product.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/form-product/form-product.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsFormProductFormProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"saveProduct($event)\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Producto</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <input placeholder=\"Id\" formControlName=\"id\" matInput type=\"text\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <input placeholder=\"Title\" formControlName=\"title\" matInput type=\"text\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <input placeholder=\"Price\" formControlName=\"price\" matInput type=\"number\">\n            </mat-form-field>\n            <div *ngIf=\"priceField.errors && priceField.dirty\">\n              <p *ngIf=\"priceField.hasError('price_invalid')\">no te debes pasar de 10000</p>\n              <p *ngIf=\"priceField.hasError('required')\">el campo es requerido</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <textarea placeholder=\"Text\" formControlName=\"description\" matInput></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\">Guardar</button>\n      </mat-card-actions>\n    </mat-card>\n    \n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/nav/nav.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/nav/nav.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/admin/create\">Crear producto</a>\n      <a mat-list-item routerLink=\"/admin\">Home</a>\n      <a mat-list-item routerLink=\"/admin/table\">Inventario</a>\n      <a mat-list-item routerLink=\"/admin/products\">Lista productos</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>platzi-store</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-edit/product-edit.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-edit/product-edit.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsProductEditProductEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"saveProduct($event)\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Producto</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <input placeholder=\"Title\" formControlName=\"title\" matInput type=\"text\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <input placeholder=\"Price\" formControlName=\"price\" matInput type=\"number\">\n            </mat-form-field>\n            <div *ngIf=\"priceField.errors && priceField.dirty\">\n              <p *ngIf=\"priceField.hasError('price_invalid')\">no te debes pasar de 10000</p>\n              <p *ngIf=\"priceField.hasError('required')\">el campo es requerido</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs\">\n            <mat-form-field>\n              <textarea placeholder=\"Text\" formControlName=\"description\" matInput></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n      <mat-card-actions>\n        <button [disabled]=\"form.invalid\" mat-raised-button type=\"submit\">Guardar</button>\n      </mat-card-actions>\n    </mat-card>\n    \n  </form>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-form/product-form.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-form/product-form.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsProductFormProductFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"addressForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Shipping Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Company\" formControlName=\"company\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n              First name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n              Last name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n            <mat-error *ngIf=\"addressForm.controls['address'].hasError('required')\">\n              Address is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!hasUnitNumber\">\n        <div class=\"col\">\n          <button mat-button type=\"button\" (click)=\"hasUnitNumber = !hasUnitNumber\">\n            + Add C/O, Apt, Suite, Unit\n          </button>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"hasUnitNumber\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"City\" formControlName=\"city\">\n            <mat-error *ngIf=\"addressForm.controls['city'].hasError('required')\">\n              City is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"State\" formControlName=\"state\">\n              <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                {{ state.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"addressForm.controls['state'].hasError('required')\">\n              State is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" type=\"number\" formControlName=\"postalCode\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-radio-group formControlName=\"shipping\">\n            <mat-radio-button value=\"free\">Free Shipping</mat-radio-button>\n            <mat-radio-button value=\"priority\">Priority Shipping</mat-radio-button>\n            <mat-radio-button value=\"nextday\">Next Day Shipping</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-list/product-list.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-list/product-list.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a mat-raised-button routerLink=\"create\">Crear nuevo producto</a>\n<table mat-table [dataSource]=\"products\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef>Id.</th>\n    <td mat-cell *matCellDef=\"let product\">{{ product.id }}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>titulo.</th>\n    <td mat-cell *matCellDef=\"let product\">{{ product.title }}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef>Precio.</th>\n    <td mat-cell *matCellDef=\"let product\">{{ product.price }}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef>Actions.</mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <button mat-raised-button>DETAILS</button>\n      <button mat-raised-button routerLink=\"edit/{{row.id}}\">Editar</button>\n      <button mat-raised-button color=\"warn\" (click)=\"DeleteProduct(row.id)\">DELETE</button>\n    </mat-cell>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/table/table.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/table/table.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminComponentsTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-elevation-z8\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n      [length]=\"dataSource?.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing-module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing-module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/admin/components/nav/nav.component.ts");
    /* harmony import */


    var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/product-form/product-form.component */
    "./src/app/admin/components/product-form/product-form.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/admin/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/table/table.component */
    "./src/app/admin/components/table/table.component.ts");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/admin/components/product-list/product-list.component.ts");
    /* harmony import */


    var _components_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/form-product/form-product.component */
    "./src/app/admin/components/form-product/form-product.component.ts");
    /* harmony import */


    var _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/product-edit/product-edit.component */
    "./src/app/admin/components/product-edit/product-edit.component.ts");

    var routes = [{
      path: '',
      component: _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"],
      children: [{
        path: 'create',
        component: _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductFormComponent"]
      }, {
        path: '',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
      }, {
        path: 'table',
        component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]
      }, {
        path: 'products',
        component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"]
      }, {
        path: 'products/create',
        component: _components_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_8__["FormProductComponent"]
      }, {
        path: 'products/edit/:id',
        component: _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditComponent"]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/product-form/product-form.component */
    "./src/app/admin/components/product-form/product-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/admin/components/nav/nav.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _components_table_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/table/table.component */
    "./src/app/admin/components/table/table.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/admin/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin-routing-module */
    "./src/app/admin/admin-routing-module.ts");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/admin/components/product-list/product-list.component.ts");
    /* harmony import */


    var _components_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/form-product/form-product.component */
    "./src/app/admin/components/form-product/form-product.component.ts");
    /* harmony import */


    var _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/product-edit/product-edit.component */
    "./src/app/admin/components/product-edit/product-edit.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_3__["ProductFormComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_13__["TableComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_22__["ProductListComponent"], _components_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_23__["FormProductComponent"], _components_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_24__["ProductEditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_21__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/components/dashboard/dashboard.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/components/dashboard/dashboard.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXHhhbXBwXFxodGRvY3NcXEFuZ3VsYXJFY29tbWVyY2Uvc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var DashboardComponent = function DashboardComponent(breakpointObserver) {
      _classCallCheck(this, DashboardComponent);

      this.breakpointObserver = breakpointObserver;
      /** Based on the screen size, switch from standard to one column per row */

      this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref5) {
        var matches = _ref5.matches;

        if (matches) {
          return [{
            title: 'Card 1',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 2',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 3',
            cols: 1,
            rows: 1
          }, {
            title: 'Card 4',
            cols: 1,
            rows: 1
          }];
        }

        return [{
          title: 'Card 1',
          cols: 2,
          rows: 1
        }, {
          title: 'Card 2',
          cols: 1,
          rows: 1
        }, {
          title: 'Card 3',
          cols: 1,
          rows: 2
        }, {
          title: 'Card 4',
          cols: 1,
          rows: 1
        }];
      }));
    };

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/admin/components/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/form-product/form-product.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/components/form-product/form-product.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsFormProductFormProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvZm9ybS1wcm9kdWN0L2Zvcm0tcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/components/form-product/form-product.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/components/form-product/form-product.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FormProductComponent */

  /***/
  function srcAppAdminComponentsFormProductFormProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormProductComponent", function () {
      return FormProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/products.service */
    "./src/app/core/services/products.service.ts");
    /* harmony import */


    var _utils_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../utils/validation */
    "./src/app/utils/validation.ts");

    var FormProductComponent =
    /*#__PURE__*/
    function () {
      function FormProductComponent(formBuilder, productsService, router) {
        _classCallCheck(this, FormProductComponent);

        this.formBuilder = formBuilder;
        this.productsService = productsService;
        this.router = router;
        this.buildForm();
      }

      _createClass(FormProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveProduct",
        value: function saveProduct(event) {
          var _this53 = this;

          event.preventDefault();

          if (this.form.valid) {
            var product = this.form.value;
            this.productsService.createProduct(product).subscribe(function (newProduct) {
              console.log(newProduct);

              _this53.router.navigate(['./admin/products']);
            });
          }
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.form = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _utils_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidators"].isPriceValid]],
            image: [''],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "priceField",
        get: function get() {
          return this.form.get('price');
        }
      }]);

      return FormProductComponent;
    }();

    FormProductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    FormProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/form-product/form-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-product.component.scss */
      "./src/app/admin/components/form-product/form-product.component.scss")).default]
    })], FormProductComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/nav/nav.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/admin/components/nav/nav.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsNavNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9uYXYvQzpcXHhhbXBwXFxodGRvY3NcXEFuZ3VsYXJFY29tbWVyY2Uvc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/nav/nav.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/components/nav/nav.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppAdminComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var NavComponent = function NavComponent(breakpointObserver) {
      _classCallCheck(this, NavComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    };

    NavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.scss */
      "./src/app/admin/components/nav/nav.component.scss")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/product-edit/product-edit.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/components/product-edit/product-edit.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsProductEditProductEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/components/product-edit/product-edit.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/components/product-edit/product-edit.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductEditComponent */

  /***/
  function srcAppAdminComponentsProductEditProductEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function () {
      return ProductEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/products.service */
    "./src/app/core/services/products.service.ts");
    /* harmony import */


    var _utils_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../utils/validation */
    "./src/app/utils/validation.ts");

    var ProductEditComponent =
    /*#__PURE__*/
    function () {
      function ProductEditComponent(formBuilder, productsService, router, activatedRoute) {
        _classCallCheck(this, ProductEditComponent);

        this.formBuilder = formBuilder;
        this.productsService = productsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.buildForm();
      }

      _createClass(ProductEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this54.id = params.id;

            _this54.productsService.getProduct(_this54.id).subscribe(function (product) {
              _this54.form.patchValue(product);
            });
          });
        }
      }, {
        key: "saveProduct",
        value: function saveProduct(event) {
          var _this55 = this;

          event.preventDefault();

          if (this.form.valid) {
            var product = this.form.value;
            this.productsService.updateProduct(this.id, product).subscribe(function (newProduct) {
              console.log(newProduct);

              _this55.router.navigate(['./admin/products']);
            });
          }
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.form = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _utils_validation__WEBPACK_IMPORTED_MODULE_5__["MyValidators"].isPriceValid]],
            image: [''],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "priceField",
        get: function get() {
          return this.form.get('price');
        }
      }]);

      return ProductEditComponent;
    }();

    ProductEditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-edit/product-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-edit.component.scss */
      "./src/app/admin/components/product-edit/product-edit.component.scss")).default]
    })], ProductEditComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/product-form/product-form.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/components/product-form/product-form.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsProductFormProductFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.col {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9kdWN0LWZvcm0vQzpcXHhhbXBwXFxodGRvY3NcXEFuZ3VsYXJFY29tbWVyY2Uvc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxwcm9kdWN0LWZvcm1cXHByb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hpcHBpbmctY2FyZCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/components/product-form/product-form.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/components/product-form/product-form.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductFormComponent */

  /***/
  function srcAppAdminComponentsProductFormProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function () {
      return ProductFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProductFormComponent =
    /*#__PURE__*/
    function () {
      function ProductFormComponent(fb) {
        _classCallCheck(this, ProductFormComponent);

        this.fb = fb;
        this.addressForm = this.fb.group({
          company: null,
          firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address2: null,
          city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)])],
          shipping: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.states = [{
          name: 'Alabama',
          abbreviation: 'AL'
        }, {
          name: 'Alaska',
          abbreviation: 'AK'
        }, {
          name: 'American Samoa',
          abbreviation: 'AS'
        }, {
          name: 'Arizona',
          abbreviation: 'AZ'
        }, {
          name: 'Arkansas',
          abbreviation: 'AR'
        }, {
          name: 'California',
          abbreviation: 'CA'
        }, {
          name: 'Colorado',
          abbreviation: 'CO'
        }, {
          name: 'Connecticut',
          abbreviation: 'CT'
        }, {
          name: 'Delaware',
          abbreviation: 'DE'
        }, {
          name: 'District Of Columbia',
          abbreviation: 'DC'
        }, {
          name: 'Federated States Of Micronesia',
          abbreviation: 'FM'
        }, {
          name: 'Florida',
          abbreviation: 'FL'
        }, {
          name: 'Georgia',
          abbreviation: 'GA'
        }, {
          name: 'Guam',
          abbreviation: 'GU'
        }, {
          name: 'Hawaii',
          abbreviation: 'HI'
        }, {
          name: 'Idaho',
          abbreviation: 'ID'
        }, {
          name: 'Illinois',
          abbreviation: 'IL'
        }, {
          name: 'Indiana',
          abbreviation: 'IN'
        }, {
          name: 'Iowa',
          abbreviation: 'IA'
        }, {
          name: 'Kansas',
          abbreviation: 'KS'
        }, {
          name: 'Kentucky',
          abbreviation: 'KY'
        }, {
          name: 'Louisiana',
          abbreviation: 'LA'
        }, {
          name: 'Maine',
          abbreviation: 'ME'
        }, {
          name: 'Marshall Islands',
          abbreviation: 'MH'
        }, {
          name: 'Maryland',
          abbreviation: 'MD'
        }, {
          name: 'Massachusetts',
          abbreviation: 'MA'
        }, {
          name: 'Michigan',
          abbreviation: 'MI'
        }, {
          name: 'Minnesota',
          abbreviation: 'MN'
        }, {
          name: 'Mississippi',
          abbreviation: 'MS'
        }, {
          name: 'Missouri',
          abbreviation: 'MO'
        }, {
          name: 'Montana',
          abbreviation: 'MT'
        }, {
          name: 'Nebraska',
          abbreviation: 'NE'
        }, {
          name: 'Nevada',
          abbreviation: 'NV'
        }, {
          name: 'New Hampshire',
          abbreviation: 'NH'
        }, {
          name: 'New Jersey',
          abbreviation: 'NJ'
        }, {
          name: 'New Mexico',
          abbreviation: 'NM'
        }, {
          name: 'New York',
          abbreviation: 'NY'
        }, {
          name: 'North Carolina',
          abbreviation: 'NC'
        }, {
          name: 'North Dakota',
          abbreviation: 'ND'
        }, {
          name: 'Northern Mariana Islands',
          abbreviation: 'MP'
        }, {
          name: 'Ohio',
          abbreviation: 'OH'
        }, {
          name: 'Oklahoma',
          abbreviation: 'OK'
        }, {
          name: 'Oregon',
          abbreviation: 'OR'
        }, {
          name: 'Palau',
          abbreviation: 'PW'
        }, {
          name: 'Pennsylvania',
          abbreviation: 'PA'
        }, {
          name: 'Puerto Rico',
          abbreviation: 'PR'
        }, {
          name: 'Rhode Island',
          abbreviation: 'RI'
        }, {
          name: 'South Carolina',
          abbreviation: 'SC'
        }, {
          name: 'South Dakota',
          abbreviation: 'SD'
        }, {
          name: 'Tennessee',
          abbreviation: 'TN'
        }, {
          name: 'Texas',
          abbreviation: 'TX'
        }, {
          name: 'Utah',
          abbreviation: 'UT'
        }, {
          name: 'Vermont',
          abbreviation: 'VT'
        }, {
          name: 'Virgin Islands',
          abbreviation: 'VI'
        }, {
          name: 'Virginia',
          abbreviation: 'VA'
        }, {
          name: 'Washington',
          abbreviation: 'WA'
        }, {
          name: 'West Virginia',
          abbreviation: 'WV'
        }, {
          name: 'Wisconsin',
          abbreviation: 'WI'
        }, {
          name: 'Wyoming',
          abbreviation: 'WY'
        }];
      }

      _createClass(ProductFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          alert('Thanks!');
        }
      }]);

      return ProductFormComponent;
    }();

    ProductFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-form/product-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-form.component.scss */
      "./src/app/admin/components/product-form/product-form.component.scss")).default]
    })], ProductFormComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/product-list/product-list.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/components/product-list/product-list.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsProductListProductListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 96%;\n  margin: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXEFuZ3VsYXJFY29tbWVyY2Uvc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBtYXJnaW46MiU7XHJcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAyJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/product-list/product-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/components/product-list/product-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppAdminComponentsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/products.service */
    "./src/app/core/services/products.service.ts");

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(Api) {
        _classCallCheck(this, ProductListComponent);

        this.Api = Api;
        this.products = [];
        this.product = [];
        this.displayedColumns = ['id', 'title', 'price', 'actions'];
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchProducts();
        }
      }, {
        key: "fetchProducts",
        value: function fetchProducts() {
          var _this56 = this;

          this.Api.getAllProducts().subscribe(function (data) {
            _this56.products = data;
            console.log(_this56.products);
          });
        }
      }, {
        key: "fetchProduct",
        value: function fetchProduct(id) {
          var _this57 = this;

          this.Api.getProduct(id).subscribe(function (data) {
            _this57.product = data;
            console.log('info un producto', _this57.product);
          });
        }
      }, {
        key: "UpdateProduct",
        value: function UpdateProduct() {
          var newProduct = {
            id: '222',
            title: 'nuevo producto 4',
            image: 'assets/images/mug.png',
            price: 190000,
            description: "descripcion producto"
          };
          this.Api.updateProduct(newProduct.id, newProduct).subscribe(function (data) {
            console.log('producto creado');
          });
        }
      }, {
        key: "DeleteProduct",
        value: function DeleteProduct(id) {
          console.log(id);
          this.Api.deleteProduct(id).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }];
    };

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.scss */
      "./src/app/admin/components/product-list/product-list.component.scss")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/admin/components/table/table-datasource.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/components/table/table-datasource.ts ***!
    \************************************************************/

  /*! exports provided: TableDataSource */

  /***/
  function srcAppAdminComponentsTableTableDatasourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDataSource", function () {
      return TableDataSource;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // TODO: replace this with real data from your application


    var EXAMPLE_DATA = [{
      id: 1,
      name: 'Hydrogen'
    }, {
      id: 2,
      name: 'Helium'
    }, {
      id: 3,
      name: 'Lithium'
    }, {
      id: 4,
      name: 'Beryllium'
    }, {
      id: 5,
      name: 'Boron'
    }, {
      id: 6,
      name: 'Carbon'
    }, {
      id: 7,
      name: 'Nitrogen'
    }, {
      id: 8,
      name: 'Oxygen'
    }, {
      id: 9,
      name: 'Fluorine'
    }, {
      id: 10,
      name: 'Neon'
    }, {
      id: 11,
      name: 'Sodium'
    }, {
      id: 12,
      name: 'Magnesium'
    }, {
      id: 13,
      name: 'Aluminum'
    }, {
      id: 14,
      name: 'Silicon'
    }, {
      id: 15,
      name: 'Phosphorus'
    }, {
      id: 16,
      name: 'Sulfur'
    }, {
      id: 17,
      name: 'Chlorine'
    }, {
      id: 18,
      name: 'Argon'
    }, {
      id: 19,
      name: 'Potassium'
    }, {
      id: 20,
      name: 'Calcium'
    }];
    /**
     * Data source for the Table view. This class should
     * encapsulate all logic for fetching and manipulating the displayed data
     * (including sorting, pagination, and filtering).
     */

    var TableDataSource =
    /*#__PURE__*/
    function (_angular_cdk_collecti) {
      _inherits(TableDataSource, _angular_cdk_collecti);

      function TableDataSource() {
        var _this58;

        _classCallCheck(this, TableDataSource);

        _this58 = _possibleConstructorReturn(this, _getPrototypeOf(TableDataSource).call(this));
        _this58.data = EXAMPLE_DATA;
        return _this58;
      }
      /**
       * Connect this data source to the table. The table will only update when
       * the returned stream emits new items.
       * @returns A stream of the items to be rendered.
       */


      _createClass(TableDataSource, [{
        key: "connect",
        value: function connect() {
          var _this59 = this;

          // Combine everything that affects the rendered data into one update
          // stream for the data-table to consume.
          var dataMutations = [Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data), this.paginator.page, this.sort.sortChange];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this59.getPagedData(_this59.getSortedData(_toConsumableArray(_this59.data)));
          }));
        }
        /**
         *  Called when the table is being destroyed. Use this function, to clean up
         * any open connections or free any held resources that were set up during connect.
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
        /**
         * Paginate the data (client-side). If you're using server-side pagination,
         * this would be replaced by requesting the appropriate data from the server.
         */

      }, {
        key: "getPagedData",
        value: function getPagedData(data) {
          var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
          return data.splice(startIndex, this.paginator.pageSize);
        }
        /**
         * Sort the data (client-side). If you're using server-side sorting,
         * this would be replaced by requesting the appropriate data from the server.
         */

      }, {
        key: "getSortedData",
        value: function getSortedData(data) {
          var _this60 = this;

          if (!this.sort.active || this.sort.direction === '') {
            return data;
          }

          return data.sort(function (a, b) {
            var isAsc = _this60.sort.direction === 'asc';

            switch (_this60.sort.active) {
              case 'name':
                return compare(a.name, b.name, isAsc);

              case 'id':
                return compare(+a.id, +b.id, isAsc);

              default:
                return 0;
            }
          });
        }
      }]);

      return TableDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);
    /** Simple sort comparator for example ID/Name columns (for client-side sorting). */


    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    /***/

  },

  /***/
  "./src/app/admin/components/table/table.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/admin/components/table/table.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminComponentsTableTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width-table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90YWJsZS9DOlxceGFtcHBcXGh0ZG9jc1xcQW5ndWxhckVjb21tZXJjZS9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/components/table/table.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/components/table/table.component.ts ***!
    \***********************************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppAdminComponentsTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _table_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./table-datasource */
    "./src/app/admin/components/table/table-datasource.ts");

    var TableComponent =
    /*#__PURE__*/
    function () {
      function TableComponent() {
        _classCallCheck(this, TableComponent);

        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name'];
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _table_datasource__WEBPACK_IMPORTED_MODULE_5__["TableDataSource"]();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.table.dataSource = this.dataSource;
        }
      }]);

      return TableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], TableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: false
    })], TableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], {
      static: false
    })], TableComponent.prototype, "table", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/table/table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table.component.scss */
      "./src/app/admin/components/table/table.component.scss")).default]
    })], TableComponent);
    /***/
  },

  /***/
  "./src/app/utils/validation.ts":
  /*!*************************************!*\
    !*** ./src/app/utils/validation.ts ***!
    \*************************************/

  /*! exports provided: MyValidators */

  /***/
  function srcAppUtilsValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyValidators", function () {
      return MyValidators;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MyValidators =
    /*#__PURE__*/
    function () {
      function MyValidators() {
        _classCallCheck(this, MyValidators);
      }

      _createClass(MyValidators, null, [{
        key: "isPriceValid",
        value: function isPriceValid(control) {
          var value = control.value;
          console.log(value);

          if (value > 10000) {
            return {
              price_invalid: true
            };
          }

          return null;
        }
      }]);

      return MyValidators;
    }();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map