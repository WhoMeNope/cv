import React from 'react';
import './Header.css';

function formatLink(input) {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function validatePhone(inputtxt) {
    const re = /^(\+[0-9]{1,3})?([-. ]?[0-9]{3,4}){3}$/
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

function Header ({ content }) {
  console.log(content)

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
