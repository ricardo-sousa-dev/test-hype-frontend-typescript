function cov_15wa04z1lq() {
  var path = "/Users/ricardo/Downloads/hype-test-frontend/src/components/index.js";
  var hash = "97222cc2610dc4dd3c5df85a9c258dc13e367ce5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/ricardo/Downloads/hype-test-frontend/src/components/index.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "97222cc2610dc4dd3c5df85a9c258dc13e367ce5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15wa04z1lq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_15wa04z1lq();
import CardsHome from '../components/cards/CardsHome';
import Footer from './footer/Footer';
import HeaderHome from './header/HeaderHome';
import HeaderGeneric from './header/HeaderGeneric';
import HeaderSearchBar from '../components/header/HeaderSearchBar.jsx';
import HomeCardProduct from './cards/CardProduct';
import CartEmpt from '../components/cart/CartEmpt';
import CartPaymentMethod from '../components/cart/CartPaymentMethod';
import SelectQuantityProduct from './cards/CardSelectQuantityProduct';
import CartListProducts from '../components/cart/CartListProducts';
import CartShipping from './cart/CartShipping';
export { HomeCardProduct, CardsHome, Footer, HeaderHome, HeaderGeneric, HeaderSearchBar, CartEmpt, CartPaymentMethod, SelectQuantityProduct, CartListProducts, CartShipping };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYXJkc0hvbWUiLCJGb290ZXIiLCJIZWFkZXJIb21lIiwiSGVhZGVyR2VuZXJpYyIsIkhlYWRlclNlYXJjaEJhciIsIkhvbWVDYXJkUHJvZHVjdCIsIkNhcnRFbXB0IiwiQ2FydFBheW1lbnRNZXRob2QiLCJTZWxlY3RRdWFudGl0eVByb2R1Y3QiLCJDYXJ0TGlzdFByb2R1Y3RzIiwiQ2FydFNoaXBwaW5nIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ2FyZHNIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZHMvQ2FyZHNIb21lJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkZXJIb21lIGZyb20gJy4vaGVhZGVyL0hlYWRlckhvbWUnO1xuaW1wb3J0IEhlYWRlckdlbmVyaWMgZnJvbSAnLi9oZWFkZXIvSGVhZGVyR2VuZXJpYyc7XG5pbXBvcnQgSGVhZGVyU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclNlYXJjaEJhci5qc3gnO1xuaW1wb3J0IEhvbWVDYXJkUHJvZHVjdCBmcm9tICcuL2NhcmRzL0NhcmRQcm9kdWN0JztcbmltcG9ydCBDYXJ0RW1wdCBmcm9tICcuLi9jb21wb25lbnRzL2NhcnQvQ2FydEVtcHQnO1xuaW1wb3J0IENhcnRQYXltZW50TWV0aG9kIGZyb20gJy4uL2NvbXBvbmVudHMvY2FydC9DYXJ0UGF5bWVudE1ldGhvZCc7XG5pbXBvcnQgU2VsZWN0UXVhbnRpdHlQcm9kdWN0IGZyb20gJy4vY2FyZHMvQ2FyZFNlbGVjdFF1YW50aXR5UHJvZHVjdCc7XG5pbXBvcnQgQ2FydExpc3RQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL2NhcnQvQ2FydExpc3RQcm9kdWN0cyc7XG5pbXBvcnQgQ2FydFNoaXBwaW5nIGZyb20gJy4vY2FydC9DYXJ0U2hpcHBpbmcnO1xuXG5cbmV4cG9ydCB7XG4gIEhvbWVDYXJkUHJvZHVjdCxcbiAgQ2FyZHNIb21lLFxuICBGb290ZXIsXG4gIEhlYWRlckhvbWUsXG4gIEhlYWRlckdlbmVyaWMsXG4gIEhlYWRlclNlYXJjaEJhcixcbiAgQ2FydEVtcHQsXG4gIENhcnRQYXltZW50TWV0aG9kLFxuICBTZWxlY3RRdWFudGl0eVByb2R1Y3QsXG4gIENhcnRMaXN0UHJvZHVjdHMsXG4gIENhcnRTaGlwcGluZyxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZOzs7Ozs7Ozs7QUFkWixPQUFPQSxTQUFQLE1BQXNCLCtCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsaUJBQW5CO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixxQkFBdkI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLHdCQUExQjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsMENBQTVCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixxQkFBNUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDZCQUFyQjtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLHNDQUE5QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLG1DQUFsQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFDQUE3QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBR0EsU0FDRUwsZUFERixFQUVFTCxTQUZGLEVBR0VDLE1BSEYsRUFJRUMsVUFKRixFQUtFQyxhQUxGLEVBTUVDLGVBTkYsRUFPRUUsUUFQRixFQVFFQyxpQkFSRixFQVNFQyxxQkFURixFQVVFQyxnQkFWRixFQVdFQyxZQVhGIn0=