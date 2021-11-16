/// <reference types="react-scripts" />
import React from 'react';
import logo from "./logo.svg";
import './DemoNavigation.css';
var demos = [
    {
        pathname: '/flight-booking',
        label: 'Flight Booking'
    },
    {
        pathname: '/fashion-ecommerce',
        label: 'Fashion eCommerce'
    },
    {
        pathname: '/smart-home',
        label: 'Smart Home'
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
var actions = [
    {
        url: 'https://www.speechly.com/contact/',
        label: 'Contact Sales',
        type: 'secondary'
    },
    {
        url: 'https://github.com/speechly/speechly',
        label: 'View on GitHub',
        type: 'secondary'
    },
    {
        url: 'https://api.speechly.com/dashboard/',
        label: 'Start Developing',
        type: 'primary'
    },
];
var urlRef = '?ref=demoNav';
var handleSelect = function (e) {
    var value = e.currentTarget.value + urlRef;
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
                React.createElement("img", { src: logo, alt: "Speechly" })),
            React.createElement("select", { className: "DemoNavigation__menu", name: "cars", id: "cars", onChange: handleSelect, value: resolveCurrentDemo() },
                React.createElement("option", { value: "default", disabled: true }, "Speechly Demos"),
                demos.map(function (demo) {
                    return React.createElement("option", { key: demo.pathname, value: demo.pathname }, demo.label);
                }),
                React.createElement("option", { className: "DemoNavigation__mobileOnly", disabled: true }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
                actions.map(function (action) {
                    return React.createElement("option", { key: 'opt' + action.url, value: action.url, className: "DemoNavigation__mobileOnly" }, action.label);
                })),
            React.createElement("div", { className: "DemoNavigation__buttons" }, actions.map(function (action) {
                return React.createElement("a", { key: 'btn' + action.url, href: action.url + urlRef, className: "DemoNavigation__button DemoNavigation__button-" + action.type }, action.label);
            })))));
};
