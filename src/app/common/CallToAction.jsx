'use client';
import React, { useEffect, useState } from 'react';
import styles from './CallToAction.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab);

function Social(props) {
    return (
      <a rel="me" href={props.URL}><FontAwesomeIcon icon={['fab', props.Icon]} />{props.Name}</a>
    );
}

function Socials(props) {
    return (
      <section className={styles.social}>
        {props.socials.map((social, i) =>
          <Social key={i} {...social} />
        )}
      </section>
    );
}

function getRandomString(length) {
    var randomChars = '0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

export default function CallToAction(props) {
  const [email, setEmail] = useState();

  useEffect(() => setEmail(props.email.replace("SPAMSTOPPER", getRandomString(5))), []);

  return (
    <div className={styles.callToAction}>
      <div className={styles.ctaContent}>
        <h1 className={styles.noPrint}>Hey there!</h1>
        <h2><span className={styles.noPrint}>I'm </span>Evan Lihou</h2>
        {/* <h3 className={styles.noPrint}>I do <Typewriter
          options={{
            strings: [
              "custom web solutions",
              ".NET development",
              "freelancing"
            ],
            autoStart: true,
            loop: true,
            delay: 25
          }}
        /></h3> */}
        <a href={"mailto:" + email} className={styles.contact}>Get in touch</a>
        <span className={styles.contactText}>{email}</span>
        <Socials socials={props.socials}/>
      </div>
    </div>
  );
}
