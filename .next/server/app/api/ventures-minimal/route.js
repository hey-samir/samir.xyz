/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/ventures-minimal/route";
exports.ids = ["app/api/ventures-minimal/route"];
exports.modules = {

/***/ "(rsc)/./app/api/ventures-minimal/route.ts":
/*!*******************************************!*\
  !*** ./app/api/ventures-minimal/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./app/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/**\n * Ventures Minimal API Route\n * \n * This API route provides just the minimal data needed for the Ventures grid\n * - Only name, logoUrl, and brief description fields are returned for faster loading\n */ \n\nasync function GET() {\n    try {\n        console.log('Fetching minimal ventures data...');\n        // Get only the essential fields needed for minimal display\n        const ventures = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.venture.findMany({\n            select: {\n                id: true,\n                name: true,\n                logoUrl: true,\n                description: true,\n                website: true\n            },\n            orderBy: {\n                name: 'asc'\n            }\n        });\n        console.log(`Successfully retrieved ${ventures.length} ventures (minimal data)`);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(ventures);\n    } catch (error) {\n        console.error('Error fetching minimal ventures data:', error);\n        const errorMessage = error instanceof Error ? error.message : 'Unknown error';\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: 'Failed to fetch minimal ventures data',\n            details: errorMessage\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZlbnR1cmVzLW1pbmltYWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FFcUM7QUFDSztBQUVwQyxlQUFlRTtJQUNwQixJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLDJEQUEyRDtRQUMzRCxNQUFNQyxXQUFXLE1BQU1MLCtDQUFNQSxDQUFDTSxPQUFPLENBQUNDLFFBQVEsQ0FBQztZQUM3Q0MsUUFBUTtnQkFDTkMsSUFBSTtnQkFDSkMsTUFBTTtnQkFDTkMsU0FBUztnQkFDVEMsYUFBYTtnQkFDYkMsU0FBUztZQUNYO1lBQ0FDLFNBQVM7Z0JBQ1BKLE1BQU07WUFDUjtRQUNGO1FBRUFQLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QixFQUFFQyxTQUFTVSxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDL0UsT0FBT2QscURBQVlBLENBQUNlLElBQUksQ0FBQ1g7SUFDM0IsRUFBRSxPQUFPWSxPQUFPO1FBQ2RkLFFBQVFjLEtBQUssQ0FBQyx5Q0FBeUNBO1FBQ3ZELE1BQU1DLGVBQWVELGlCQUFpQkUsUUFBUUYsTUFBTUcsT0FBTyxHQUFHO1FBRTlELE9BQU9uQixxREFBWUEsQ0FBQ2UsSUFBSSxDQUN0QjtZQUNFQyxPQUFPO1lBQ1BJLFNBQVNIO1FBQ1gsR0FDQTtZQUFFSSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcHAvYXBpL3ZlbnR1cmVzLW1pbmltYWwvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWZW50dXJlcyBNaW5pbWFsIEFQSSBSb3V0ZVxuICogXG4gKiBUaGlzIEFQSSByb3V0ZSBwcm92aWRlcyBqdXN0IHRoZSBtaW5pbWFsIGRhdGEgbmVlZGVkIGZvciB0aGUgVmVudHVyZXMgZ3JpZFxuICogLSBPbmx5IG5hbWUsIGxvZ29VcmwsIGFuZCBicmllZiBkZXNjcmlwdGlvbiBmaWVsZHMgYXJlIHJldHVybmVkIGZvciBmYXN0ZXIgbG9hZGluZ1xuICovXG5cbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIG1pbmltYWwgdmVudHVyZXMgZGF0YS4uLicpO1xuICAgIFxuICAgIC8vIEdldCBvbmx5IHRoZSBlc3NlbnRpYWwgZmllbGRzIG5lZWRlZCBmb3IgbWluaW1hbCBkaXNwbGF5XG4gICAgY29uc3QgdmVudHVyZXMgPSBhd2FpdCBwcmlzbWEudmVudHVyZS5maW5kTWFueSh7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgIGxvZ29Vcmw6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLCAvLyBXZSdsbCB0cnVuY2F0ZSB0aGlzIGluIHRoZSBjb21wb25lbnQgaWYgbmVlZGVkXG4gICAgICAgIHdlYnNpdGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBuYW1lOiAnYXNjJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgXG4gICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSByZXRyaWV2ZWQgJHt2ZW50dXJlcy5sZW5ndGh9IHZlbnR1cmVzIChtaW5pbWFsIGRhdGEpYCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHZlbnR1cmVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtaW5pbWFsIHZlbnR1cmVzIGRhdGE6JywgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3InO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIG1pbmltYWwgdmVudHVyZXMgZGF0YScsXG4gICAgICAgIGRldGFpbHM6IGVycm9yTWVzc2FnZSBcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsIk5leHRSZXNwb25zZSIsIkdFVCIsImNvbnNvbGUiLCJsb2ciLCJ2ZW50dXJlcyIsInZlbnR1cmUiLCJmaW5kTWFueSIsInNlbGVjdCIsImlkIiwibmFtZSIsImxvZ29VcmwiLCJkZXNjcmlwdGlvbiIsIndlYnNpdGUiLCJvcmRlckJ5IiwibGVuZ3RoIiwianNvbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGV0YWlscyIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ventures-minimal/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/prisma.ts":
/*!***************************!*\
  !*** ./app/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Prisma Client Singleton\n * \n * This module creates a single instance of PrismaClient to be used throughout the application.\n * It prevents multiple instances of PrismaClient in development environment when\n * the application hot-reloads.\n * \n * In development, we attach the PrismaClient instance to the global object,\n * which ensures only one connection is created.\n */ \n// Define a global type for PrismaClient\nconst globalForPrisma = global;\n// Create a singleton instance of PrismaClient\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        'query',\n        'error',\n        'warn'\n    ] : 0\n});\n// Save PrismaClient to the global object in non-production environments\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7O0NBU0MsR0FFNkM7QUFFOUMsd0NBQXdDO0FBQ3hDLE1BQU1DLGtCQUFrQkM7QUFFeEIsOENBQThDO0FBQ3ZDLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRyxDQUFTO0FBQ3RGLEdBQUc7QUFFTCx3RUFBd0U7QUFDeEUsSUFBSUEsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9saWIvcHJpc21hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJpc21hIENsaWVudCBTaW5nbGV0b25cbiAqIFxuICogVGhpcyBtb2R1bGUgY3JlYXRlcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBQcmlzbWFDbGllbnQgdG8gYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBhcHBsaWNhdGlvbi5cbiAqIEl0IHByZXZlbnRzIG11bHRpcGxlIGluc3RhbmNlcyBvZiBQcmlzbWFDbGllbnQgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgd2hlblxuICogdGhlIGFwcGxpY2F0aW9uIGhvdC1yZWxvYWRzLlxuICogXG4gKiBJbiBkZXZlbG9wbWVudCwgd2UgYXR0YWNoIHRoZSBQcmlzbWFDbGllbnQgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QsXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgb25lIGNvbm5lY3Rpb24gaXMgY3JlYXRlZC5cbiAqL1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbi8vIERlZmluZSBhIGdsb2JhbCB0eXBlIGZvciBQcmlzbWFDbGllbnRcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuLy8gQ3JlYXRlIGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFByaXNtYUNsaWVudFxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFsncXVlcnknLCAnZXJyb3InLCAnd2FybiddIDogWydlcnJvciddLFxuICB9KTtcblxuLy8gU2F2ZSBQcmlzbWFDbGllbnQgdG8gdGhlIGdsb2JhbCBvYmplY3QgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures-minimal%2Froute&page=%2Fapi%2Fventures-minimal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures-minimal%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures-minimal%2Froute&page=%2Fapi%2Fventures-minimal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures-minimal%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_workspace_app_api_ventures_minimal_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/ventures-minimal/route.ts */ \"(rsc)/./app/api/ventures-minimal/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ventures-minimal/route\",\n        pathname: \"/api/ventures-minimal\",\n        filename: \"route\",\n        bundlePath: \"app/api/ventures-minimal/route\"\n    },\n    resolvedPagePath: \"/home/runner/workspace/app/api/ventures-minimal/route.ts\",\n    nextConfigOutput,\n    userland: _home_runner_workspace_app_api_ventures_minimal_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ2ZW50dXJlcy1taW5pbWFsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ2ZW50dXJlcy1taW5pbWFsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdmVudHVyZXMtbWluaW1hbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGcnVubmVyJTJGd29ya3NwYWNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNRO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvdmVudHVyZXMtbWluaW1hbC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdmVudHVyZXMtbWluaW1hbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZlbnR1cmVzLW1pbmltYWxcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZlbnR1cmVzLW1pbmltYWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FwcC9hcGkvdmVudHVyZXMtbWluaW1hbC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures-minimal%2Froute&page=%2Fapi%2Fventures-minimal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures-minimal%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fventures-minimal%2Froute&page=%2Fapi%2Fventures-minimal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fventures-minimal%2Froute.ts&appDir=%2Fhome%2Frunner%2Fworkspace%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2Fworkspace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();