/// <reference types="react-scripts" />
import React from 'react';
import logo from "./logo.svg";
import './DemoNavigation.css';
var demos = [
    {
        pathname: '/booking/',
        label: 'Flight Booking'
    },
    {
        pathname: '/fashion/',
        label: 'Fashion Ecommerce'
    },
    {
        pathname: '/smart-home/',
        label: 'Smart Home'
    },
    {
        pathname: '/speech-to-text/',
        label: 'Speech-to-Text'
    }
];
var actions = [
    {
        url: 'https://www.speechly.com/contact/',
        label: 'Contact us',
        type: 'secondary'
    },
    {
        url: 'https://github.com/speechly/speechly',
        label: 'View GitHub',
        type: 'secondary'
    },
    {
        url: 'https://api.speechly.com/dashboard/',
        label: 'Start building',
        type: 'primary'
    },
];
var urlRef = '?ref=demoNav';
var canHover = matchMedia('(hover: hover)').matches;
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
            React.createElement("a", { href: "https://www.speechly.com/", className: "DemoNavigation__logo", tabIndex: -1 },
                React.createElement("img", { src: logo, alt: "Speechly" })),
            React.createElement("select", { className: "DemoNavigation__menu", onChange: handleSelect, value: resolveCurrentDemo(), tabIndex: -1 },
                React.createElement("option", { value: "default", disabled: true }, "Speechly Demos"),
                demos.map(function (demo) {
                    return React.createElement("option", { key: demo.pathname, value: demo.pathname }, demo.label);
                }),
                !canHover && React.createElement("option", { className: "DemoNavigation__mobileOnly", disabled: true }, "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"),
                !canHover && actions.map(function (action) {
                    return React.createElement("option", { key: 'opt' + action.url, value: action.url, className: "DemoNavigation__mobileOnly" }, action.label);
                })),
            React.createElement("div", { className: "DemoNavigation__buttons" }, actions.map(function (action) {
                return React.createElement("a", { key: 'btn' + action.url, href: action.url + urlRef, className: "DemoNavigation__button DemoNavigation__button-" + action.type, tabIndex: -1 }, action.label);
            })))));
};
