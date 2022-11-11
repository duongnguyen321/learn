import React, { Component } from 'react'

import './Script';

export class Contact extends Component {

  render() {

    const mapIframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8838817214087!2d105.78977255085698!3d21.037331692791913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abcb66cd6aef%3A0x7e4b16cf67b0cbe0!2sTechSchool!5e0!3m2!1svi!2s!4v1660964037282!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    const mapObj = {
      __html: mapIframe
    }

    return (
      <>
      <h1>Contact Page</h1>
      <div dangerouslySetInnerHTML={mapObj} />
      </>
    )
  }
}

export default Contact