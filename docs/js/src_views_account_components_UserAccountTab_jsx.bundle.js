"use strict";
(self["webpackChunkecommerce_react"] = self["webpackChunkecommerce_react"] || []).push([["src_views_account_components_UserAccountTab_jsx"],{

/***/ "./src/views/account/components/UserAccountTab.jsx":
/*!*********************************************************!*\
  !*** ./src/views/account/components/UserAccountTab.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common */ "./src/components/common/index.js");
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/routes */ "./src/constants/routes.js");
/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* eslint-disable indent */








var UserProfile = function UserProfile(props) {
  var profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.profile;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(components_common__WEBPACK_IMPORTED_MODULE_0__.ImageLoader, {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: profile.banner
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(components_common__WEBPACK_IMPORTED_MODULE_0__.ImageLoader, {
    alt: "Avatar",
    className: "user-profile-img",
    src: profile.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    className: "button button-small user-profile-edit",
    onClick: function onClick() {
      return props.history.push(constants_routes__WEBPACK_IMPORTED_MODULE_1__.ACCOUNT_EDIT);
    },
    type: "button"
  }, "Edit Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", {
    className: "user-profile-name"
  }, profile.fullname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.address) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Address not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.mobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, profile.mobile.value) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Mobile not set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Date Joined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("br", null), profile.dateJoined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", null, (0,helpers_utils__WEBPACK_IMPORTED_MODULE_2__.displayDate)(profile.dateJoined)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Not available"))));
};

UserProfile.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    push: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)(UserProfile));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3ZpZXdzX2FjY291bnRfY29tcG9uZW50c19Vc2VyQWNjb3VudFRhYl9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0VBQzdCLElBQU1DLE9BQU8sR0FBR0osd0RBQVcsQ0FBQyxVQUFDSyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxPQUFqQjtFQUFBLENBQUQsQ0FBM0I7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGlEQUFDLDBEQUFEO0lBQ0UsR0FBRyxFQUFDLFFBRE47SUFFRSxTQUFTLEVBQUMseUJBRlo7SUFHRSxHQUFHLEVBQUVBLE9BQU8sQ0FBQ0U7RUFIZixFQURGLENBREYsZUFRRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGlEQUFDLDBEQUFEO0lBQ0UsR0FBRyxFQUFDLFFBRE47SUFFRSxTQUFTLEVBQUMsa0JBRlo7SUFHRSxHQUFHLEVBQUVGLE9BQU8sQ0FBQ0c7RUFIZixFQURGLENBUkYsZUFlRTtJQUNFLFNBQVMsRUFBQyx1Q0FEWjtJQUVFLE9BQU8sRUFBRTtNQUFBLE9BQU1KLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUFkLENBQW1CYiwwREFBbkIsQ0FBTjtJQUFBLENBRlg7SUFHRSxJQUFJLEVBQUM7RUFIUCxrQkFmRixDQURGLGVBd0JFO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0U7SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUFtQ1EsT0FBTyxDQUFDTSxRQUEzQyxDQURGLGVBRUUsdUVBRkYsZUFHRSw0REFIRixlQUlFLDZEQUFLTixPQUFPLENBQUNPLEtBQWIsQ0FKRixlQUtFLHlFQUxGLGVBTUUsNERBTkYsRUFPR1AsT0FBTyxDQUFDUSxPQUFSLGdCQUNDLDZEQUFLUixPQUFPLENBQUNRLE9BQWIsQ0FERCxnQkFHQztJQUFJLFNBQVMsRUFBQztFQUFkLHFCQVZKLGVBWUUsd0VBWkYsZUFhRSw0REFiRixFQWNHUixPQUFPLENBQUNTLE1BQVIsZ0JBQ0MsNkRBQUtULE9BQU8sQ0FBQ1MsTUFBUixDQUFlQyxLQUFwQixDQURELGdCQUdDO0lBQUksU0FBUyxFQUFDO0VBQWQsb0JBakJKLGVBbUJFLDZFQW5CRixlQW9CRSw0REFwQkYsRUFxQkdWLE9BQU8sQ0FBQ1csVUFBUixnQkFDQyw2REFBS2xCLDBEQUFXLENBQUNPLE9BQU8sQ0FBQ1csVUFBVCxDQUFoQixDQURELGdCQUdDO0lBQUksU0FBUyxFQUFDO0VBQWQsbUJBeEJKLENBeEJGLENBREYsQ0FERjtBQXdERCxDQTNERDs7QUE2REFiLFdBQVcsQ0FBQ2MsU0FBWixHQUF3QjtFQUN0QlIsT0FBTyxFQUFFVix1REFBQSxDQUFlO0lBQ3RCVyxJQUFJLEVBQUVYLHdEQUFhb0I7RUFERyxDQUFmLEVBRU5DO0FBSG1CLENBQXhCO0FBTUEsaUVBQWVsQiw0REFBVSxDQUFDQyxXQUFELENBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXJlYWN0Ly4vc3JjL3ZpZXdzL2FjY291bnQvY29tcG9uZW50cy9Vc2VyQWNjb3VudFRhYi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uJztcbmltcG9ydCB7IEFDQ09VTlRfRURJVCB9IGZyb20gJ2NvbnN0YW50cy9yb3V0ZXMnO1xuaW1wb3J0IHsgZGlzcGxheURhdGUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCBQcm9wVHlwZSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgVXNlclByb2ZpbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcHJvZmlsZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZmlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYmFubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYmFubmVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZUxvYWRlclxuICAgICAgICAgICAgICBhbHQ9XCJCYW5uZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYmFubmVyLWltZ1wiXG4gICAgICAgICAgICAgIHNyYz17cHJvZmlsZS5iYW5uZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWF2YXRhci13cmFwcGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2VMb2FkZXJcbiAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWltZ1wiXG4gICAgICAgICAgICAgIHNyYz17cHJvZmlsZS5hdmF0YXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tc21hbGwgdXNlci1wcm9maWxlLWVkaXRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGlzdG9yeS5wdXNoKEFDQ09VTlRfRURJVCl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFZGl0IEFjY291bnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWRldGFpbHNcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLW5hbWVcIj57cHJvZmlsZS5mdWxsbmFtZX08L2gyPlxuICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxoNT57cHJvZmlsZS5lbWFpbH08L2g1PlxuICAgICAgICAgIDxzcGFuPkFkZHJlc3M8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3Byb2ZpbGUuYWRkcmVzcyA/IChcbiAgICAgICAgICAgIDxoNT57cHJvZmlsZS5hZGRyZXNzfTwvaDU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPkFkZHJlc3Mgbm90IHNldDwvaDU+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3Bhbj5Nb2JpbGU8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge3Byb2ZpbGUubW9iaWxlID8gKFxuICAgICAgICAgICAgPGg1Pntwcm9maWxlLm1vYmlsZS52YWx1ZX08L2g1PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdWJ0bGUgdGV4dC1pdGFsaWNcIj5Nb2JpbGUgbm90IHNldDwvaDU+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3Bhbj5EYXRlIEpvaW5lZDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICB7cHJvZmlsZS5kYXRlSm9pbmVkID8gKFxuICAgICAgICAgICAgPGg1PntkaXNwbGF5RGF0ZShwcm9maWxlLmRhdGVKb2luZWQpfTwvaDU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPk5vdCBhdmFpbGFibGU8L2g1PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Vc2VyUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG4gIGhpc3Rvcnk6IFByb3BUeXBlLnNoYXBlKHtcbiAgICBwdXNoOiBQcm9wVHlwZS5mdW5jXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVXNlclByb2ZpbGUpO1xuIl0sIm5hbWVzIjpbIkltYWdlTG9hZGVyIiwiQUNDT1VOVF9FRElUIiwiZGlzcGxheURhdGUiLCJQcm9wVHlwZSIsIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJ3aXRoUm91dGVyIiwiVXNlclByb2ZpbGUiLCJwcm9wcyIsInByb2ZpbGUiLCJzdGF0ZSIsImJhbm5lciIsImF2YXRhciIsImhpc3RvcnkiLCJwdXNoIiwiZnVsbG5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJtb2JpbGUiLCJ2YWx1ZSIsImRhdGVKb2luZWQiLCJwcm9wVHlwZXMiLCJzaGFwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==