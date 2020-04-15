import React from "react"

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "./styles.css"

export default function Contact() {
  return (
    <div id="#contact" className="container contact">
      <h3>Vamos construir algo incrível juntos?</h3>
      <div className="contact-section">
        <div className="contact-info">
          <p>+55 (48) 999-101-220</p>
          <p>+55 (48) 999-208-659</p>
          <p>contato@devpizza.com.br</p>
          <p>Localizado em Florianópolis</p>
          <div className="social-icons">
            <OutboundLink href="https://github.com/impuls-e">
              <FaGithub />
            </OutboundLink>
            <OutboundLink href="https://www.instagram.com/impulse.works/">
              <FaInstagram />
            </OutboundLink>
            <OutboundLink href="https://www.linkedin.com/company/impuls-e/">
              <FaLinkedinIn />
            </OutboundLink>
          </div>
        </div>
        <div className="contact-form">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>

            <div className="first-row">
              <label>
                <p>Nome</p>
                <div className="input">
                  <input type="text" name="name" id="name" />
                </div>
              </label>

              <label>
                <p>Telefone</p>
                <div className="input">
                  <input type="text" name="phone" id="phone" />
                </div>
              </label>
            </div>

            <label>
              <p>Email</p>
              <div className="input">
                <input type="email" name="email" id="email" />
              </div>
            </label>

            <label>
              <p>Mensagem</p>
              <div className="input">
                <textarea name="message" id="message" rows="5" />
              </div>
            </label>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
