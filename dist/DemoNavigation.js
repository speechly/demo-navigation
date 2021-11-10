"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoNavigation = void 0;
var react_1 = __importDefault(require("react"));
var logo_svg_1 = require("./logo.svg");
require("./DemoNavigation.css");
var demos = [
    {
        pathname: '/flight-booking',
        label: 'Flight Booking'
    },
    {
        pathname: '/voice-picking',
        label: 'Voice Picking'
    },
    {
        pathname: '/fast-food',
        label: 'Fast Food'
    },
    {
        pathname: '/speech-to-text',
        label: 'Speech-to-Text'
    },
    {
        pathname: '/ecommerce-checkout',
        label: 'Ecommerce Checkout'
    }
];
var handleSelect = function (e) {
    var value = e.currentTarget.value;
    window.open(value, '_self');
};
var resolveCurrentDemo = function () {
    var pathname = window.location.pathname;
    var current = demos.find(function (d) { return d.pathname === pathname; });
    return (current === null || current === void 0 ? void 0 : current.pathname) || 'default';
};
var DemoNavigation = function () {
    return (react_1.default.createElement("div", { className: "DemoNavigation" },
        react_1.default.createElement("div", { className: "DemoNavigation__inner" },
            react_1.default.createElement("a", { href: "https://www.speechly.com/", className: "DemoNavigation__logo" },
                react_1.default.createElement(logo_svg_1.ReactComponent, null)),
            react_1.default.createElement("select", { className: "DemoNavigation__menu", name: "cars", id: "cars", onChange: handleSelect, value: resolveCurrentDemo() },
                react_1.default.createElement("option", { value: "default", disabled: true }, "Speechly Demos"),
                demos.map(function (demo) { return react_1.default.createElement("option", { key: demo.pathname, value: demo.pathname }, demo.label); }),
                react_1.default.createElement("option", { className: "DemoNavigation__mobileOnly", disabled: true }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
                react_1.default.createElement("option", { className: "DemoNavigation__mobileOnly", value: "https://www.speechly.com/contact/" }, "Contact Sales"),
                react_1.default.createElement("option", { className: "DemoNavigation__mobileOnly", value: "https://github.com/speechly/speechly" }, "View on GitHub"),
                react_1.default.createElement("option", { className: "DemoNavigation__mobileOnly", value: "https://api.speechly.com/dashboard/" }, "Start Developing")),
            react_1.default.createElement("div", { className: "DemoNavigation__buttons" },
                react_1.default.createElement("a", { href: "https://www.speechly.com/contact/", className: "DemoNavigation__button DemoNavigation__button-secondary" }, "Contact Sales"),
                react_1.default.createElement("a", { href: "https://github.com/speechly/speechly", className: "DemoNavigation__button DemoNavigation__button-secondary" }, "View on GitHub"),
                react_1.default.createElement("a", { href: "https://api.speechly.com/dashboard/", className: "DemoNavigation__button DemoNavigation__button-primary" }, "Start Developing")))));
};
exports.DemoNavigation = DemoNavigation;
