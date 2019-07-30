import React from 'react';
import './Header.css';

function formatLink(input) {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function validatePhone(inputtxt) {
    var re = /^(\+?([0-9]{1,3})[-. ]?)?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(inputtxt)
  }

  if (validateEmail(input)) {
    return `mailto:${input}`
  }
  if (validatePhone(input)) {
    return `tel:${input}`
  }
  return input
}

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
        <div>
        {
          content.phones.map((phone, index) => (
            <a href={formatLink(phone)} key={index}>
            <div key={index}>
              { phone }
            </div>
            </a>
          ))
        }
        </div>
      </div>
      <div className="Emails">
        <div>
        {
          content.addresses.map((email, index) => (
            <a href={formatLink(email)} key={index}>
            <div key={index}>
              { email }
            </div>
            </a>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Header
