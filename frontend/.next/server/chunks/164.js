exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 8274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Banner() {
    const [bannerOpen, setBannerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: bannerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-slate-500 inline-flex",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "font-medium hover:underline text-emerald-400",
                            href: "https://github.com/TheManWhoLikesToCode/PlanetPoints",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                                "Check us out ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: " on GitHub"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700",
                        onClick: ()=>setBannerOpen(false),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "w-4 h-4 shrink-0 fill-current",
                                viewBox: "0 0 16 16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 5510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const mobileNav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // close the mobile menu on click outside
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const clickHandler = ({ target  })=>{
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return ()=>document.removeEventListener("click", clickHandler);
    });
    // close the mobile menu if the esc key is pressed
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const keyHandler = ({ keyCode  })=>{
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return ()=>document.removeEventListener("keydown", keyHandler);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                ref: trigger,
                className: `hamburger ${mobileNavOpen && "active"}`,
                "aria-controls": "mobile-nav",
                "aria-expanded": mobileNavOpen,
                onClick: ()=>setMobileNavOpen(!mobileNavOpen),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: "Menu"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        className: "w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                y: "4",
                                width: "24",
                                height: "2",
                                rx: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                y: "11",
                                width: "24",
                                height: "2",
                                rx: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                y: "18",
                                width: "24",
                                height: "2",
                                rx: "1"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                id: "mobile-nav",
                ref: mobileNav,
                className: "absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",
                style: mobileNavOpen ? {
                    maxHeight: mobileNav.current?.scrollHeight,
                    opacity: 1
                } : {
                    maxHeight: 0,
                    opacity: 0.8
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "bg-gray-800 px-4 py-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/signin",
                                className: "flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center",
                                onClick: ()=>setMobileNavOpen(false),
                                children: "Sign in"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/signup",
                                className: "font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out",
                                onClick: ()=>setMobileNavOpen(false),
                                children: "Sign up"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7914, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5110, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3682, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1390, 23))

/***/ }),

/***/ 2208:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8274));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4027, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5510))

/***/ }),

/***/ 6924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3146);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter","display":"swap"}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_ = __webpack_require__(4257);
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Architects_Daughter","arguments":[{"subsets":["latin"],"variable":"--font-architects-daughter","weight":"400","display":"swap"}],"variableName":"architects_daughter"}
var layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_ = __webpack_require__(2724);
var layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_);
// EXTERNAL MODULE: ./app/css/style.css
var style = __webpack_require__(1893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./components/ui/mobile-menu.tsx

const proxy = (0,module_proxy.createProxy)("/Users/blackhat/Documents/GitHub/PlanetPoints/frontend/components/ui/mobile-menu.tsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const mobile_menu = (proxy.default);

;// CONCATENATED MODULE: ./components/ui/header.tsx



function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "absolute w-full z-30",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between h-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "shrink-0 mr-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            className: "block",
                            "aria-label": "Cruip",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "./images/logo.png",
                                width: 60,
                                height: 60,
                                alt: "Logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("nav", {
                        className: "hidden md:flex md:grow",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "flex grow justify-end flex-wrap items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/signin",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Sign in"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/signup",
                                        className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                                        children: "Sign up"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(mobile_menu, {})
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/banner.tsx

const banner_proxy = (0,module_proxy.createProxy)("/Users/blackhat/Documents/GitHub/PlanetPoints/frontend/components/banner.tsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: banner_esModule, $$typeof: banner_$$typeof } = banner_proxy;
/* harmony default export */ const banner = (banner_proxy.default);

;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime.jsx("body", {
            className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default()).variable} ${(layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_default()).variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col min-h-screen overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime.jsx(banner, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 1893:
/***/ (() => {



/***/ })

};
;