import React from 'react';
import { ReactComponent as Logo } from "./logo.svg";
import './DemoNavigation.css';
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
export var DemoNavigation = function () {
    return (React.createElement("div", { className: "DemoNavigation" },
        React.createElement("div", { className: "DemoNavigation__inner" },
            React.createElement("a", { href: "https://www.speechly.com/", className: "DemoNavigation__logo" },
                React.createElement(Logo, null)),
            React.createElement("select", { className: "DemoNavigation__menu", name: "cars", id: "cars", onChange: handleSelect, value: resolveCurrentDemo() },
                React.createElement("option", { value: "default", disabled: true }, "Speechly Demos"),
                demos.map(function (demo) { return React.createElement("option", { key: demo.pathname, value: demo.pathname }, demo.label); }),
                React.createElement("option", { className: "DemoNavigation__mobileOnly", disabled: true }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
                React.createElement("option", { className: "DemoNavigation__mobileOnly", value: "https://www.speechly.com/contact/" }, "Contact Sales"),
                React.createElement("option", { className: "DemoNavigation__mobileOnly", value: "https://github.com/speechly/speechly" }, "View on GitHub"),
                React.createElement("option", { className: "DemoNavigation__mobileOnly", value: "https://api.speechly.com/dashboard/" }, "Start Developing")),
            React.createElement("div", { className: "DemoNavigation__buttons" },
                React.createElement("a", { href: "https://www.speechly.com/contact/", className: "DemoNavigation__button DemoNavigation__button-secondary" }, "Contact Sales"),
                React.createElement("a", { href: "https://github.com/speechly/speechly", className: "DemoNavigation__button DemoNavigation__button-secondary" }, "View on GitHub"),
                React.createElement("a", { href: "https://api.speechly.com/dashboard/", className: "DemoNavigation__button DemoNavigation__button-primary" }, "Start Developing")))));
};
