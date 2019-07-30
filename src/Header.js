import React from 'react';
import './Header.css';

function Header () {
  const content = {
    name: 'First Lastname',
    phones: [
      '202-555-0197',
      '+1-202-555-0122',
    ],
    addresses: [
      'name@company.com',
      'www.website.com',
    ],
  }

  return (
    <div className="Header">
      <div className="Name">
        { content.name }
      </div>
      <div className="Phones">
      {
        content.phones.map((phone, index) => (
          <div key={index}>
            { phone }
          </div>
        ))
      }
      </div>
      <div className="Emails">
      {
        content.addresses.map((email, index) => (
          <div key={index}>
            { email }
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Header
