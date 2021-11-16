/// <reference types="react-scripts" />
import React from 'react';
import logo from "./logo.svg";
import './DemoNavigation.css';

const demos = [
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
]

const actions = [
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
]

const urlRef = '?ref=demoNav'

const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
  const value: string = e.currentTarget.value + urlRef
  window.open(value, '_self');
}

const resolveCurrentDemo = () => {
  const pathname: string = window.location.pathname;
  const current = demos.find(d => d.pathname === pathname);
  return current?.pathname || 'default';
}

export const DemoNavigation: React.FC = () => {
  return (
    <div className="DemoNavigation">
      <div className="DemoNavigation__inner">
        <a href="https://www.speechly.com/" className="DemoNavigation__logo" tabIndex={-1}>
          <img src={logo} alt="Speechly" />
        </a>
        <select className="DemoNavigation__menu" onChange={handleSelect} value={resolveCurrentDemo()} tabIndex={-1}>
          <option value="default" disabled>Speechly Demos</option>
          {demos.map(demo =>
            <option key={demo.pathname} value={demo.pathname}>
              {demo.label}
            </option>
          )}
          <option className="DemoNavigation__mobileOnly" disabled>──────────</option>
          {actions.map(action =>
            <option key={'opt' + action.url} value={action.url} className="DemoNavigation__mobileOnly">
              {action.label}
            </option>
          )}
        </select>
        <div className="DemoNavigation__buttons">
          {actions.map(action =>
            <a key={'btn' + action.url} href={action.url + urlRef} className={`DemoNavigation__button DemoNavigation__button-${action.type}`} tabIndex={-1}>
              {action.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
