import React from 'react';
import { ReactComponent as Logo} from "./logo.svg";
import './DemoNavigation.css';

const demos = [
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
]

const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
  var value: string = e.currentTarget.value;
  window.open(value, '_self');
}

const resolveCurrentDemo = () => {
  const pathname: string = window.location.pathname;
  const current = demos.find(d => d.pathname === pathname);
  return current?.pathname || 'default';
}

export const DemoNavigation = () => {
  return (
    <div className="DemoNavigation">
      <div className="DemoNavigation__inner">
        <a href="https://www.speechly.com/" className="DemoNavigation__logo">
          <Logo />
        </a>
        <select className="DemoNavigation__menu" name="cars" id="cars" onChange={handleSelect} value={resolveCurrentDemo()}>
          <option value="default" disabled>Speechly Demos</option>
          {demos.map(demo => <option key={demo.pathname} value={demo.pathname}>{demo.label}</option>)}
          <option className="DemoNavigation__mobileOnly" disabled>──────────</option>
          <option className="DemoNavigation__mobileOnly" value="https://www.speechly.com/contact/">Contact Sales</option>
          <option className="DemoNavigation__mobileOnly" value="https://github.com/speechly/speechly">View on GitHub</option>
          <option className="DemoNavigation__mobileOnly" value="https://api.speechly.com/dashboard/">Start Developing</option>
        </select>
        <div className="DemoNavigation__buttons">
          <a href="https://www.speechly.com/contact/" className="DemoNavigation__button DemoNavigation__button-secondary">Contact Sales</a>
          <a href="https://github.com/speechly/speechly" className="DemoNavigation__button DemoNavigation__button-secondary">View on GitHub</a>
          <a href="https://api.speechly.com/dashboard/" className="DemoNavigation__button DemoNavigation__button-primary">Start Developing</a>
        </div>
      </div>
    </div>
  );
}
