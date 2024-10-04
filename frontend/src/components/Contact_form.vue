<template>
    <div class="screen">
      <div class="mobile-720-360">
        <div class="contact-mobile-gJwtjs" data-id="228:3455">
          <div class="contact-0FjsKs contact" data-id="228:3456">
            <div class="card-info-jSxk1B" data-id="228:3457">
              <div class="frame-1-j04gnn" data-id="228:3458">
                <img
                  class="rectangle-3841-uurO5n"
                  data-id="228:3459"
                  src="../components/images/rectangle-3841-4@2x.webp"
                  alt="Rectangle 3841"
                />
                <img
                  class="ellipse-794-uurO5n"
                  data-id="228:3460"
                  src="../components/images/ellipse-794-2@2x.webp"
                  alt="Ellipse 794"
                />
                <h1 class="title-uurO5n" data-id="228:3461">
                  Informatii contact
                </h1>
                <div class="ellipse-793-uurO5n" data-id="228:3462"></div>
                <div class="text-info-uurO5n" data-id="228:3463">
                  <div class="group-1000001773-xuonMF" data-id="228:3464">
                    <a href="tel:+40788990011">
                    <img
                      class="bxsphone-call-g2ApXA"
                      data-id="228:3465"
                      src="../components/images/bxs-phone-call-4@2x.webp"
                      alt="bxs:phone-call"
                    />
                    <div
                      class="x0788-990-011-g2ApXA x0788-990-011 inter-normal-white-15-4px"
                      data-id="228:3468"
                    >
                      0788 990 011
                    </div>
                    </a>
                  </div>
                  <a href="mailto: contact@topspeedservice.ro" style="color: white;">
                  <img
                    class="icsharp-email-xuonMF"
                    data-id="228:3469"
                    src="../components/images/ic-sharp-email-4@2x.webp"
                    alt="ic:sharp-email"
                  />
                  <div
                    class="officetopspeedserviceeu-xuonMF officetopspeedserviceeu inter-normal-white-15-4px"
                    data-id="228:3471"
                  >
                      contact@topspeedservice.ro
                  </div>
                </a>
                  <img
                    class="carbonlocation-filled-xuonMF"
                    data-id="228:3472"
                    src="../components/images/carbon-location-filled-4@2x.webp"
                    alt="carbon:location-filled"
                  />
                  <p
                    class="sos-clinceni-dj401-a-6-bragadiru-077025-xuonMF sos-clinceni-dj401-a-6-bragadiru-077025 inter-normal-white-15-4px"
                    data-id="228:3475"
                  >
                    Sos. Clinceni, DJ401A 6, Bragadiru 077025
                  </p>
                </div>
              </div>
            </div>
  
            <form @submit.prevent="submitForm" class="contact-form-jSxk1B" data-id="228:3476">
              <div class="name-FSbhl1" data-id="228:3477">
                <input
                  v-model="form.nume"
                  class="nume-Wmm1CL poppins-medium-stack-14-8px"
                  name="nume"
                  placeholder="Nume"
                  type="text"
                  required
                />
                <img
                  class="vector-4-Wmm1CL"
                  src="../components/images/vector-4-4@2x.webp"
                  alt="Vector 4"
                />
              </div>
              <div class="surname-FSbhl1" data-id="228:3480">
                <input
                  v-model="form.prenume"
                  class="prenume-a09DHC"
                  name="prenume"
                  placeholder="Prenume"
                  type="text"
                  required
                />
                <img
                  class="vector-5-a09DHC"
                  src="../components/images/vector-4-4@2x.webp"
                  alt="Vector 5"
                />
              </div>
              <div class="mail-FSbhl1" data-id="228:3483">
                <input
                  v-model="form.email"
                  class="email-gi4H8t poppins-medium-stack-14-8px"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
                <img
                  class="vector-6"
                  src="../components/images/vector-4-4@2x.webp"
                  alt="Vector 6"
                />
              </div>
              <div class="phone-FSbhl1" data-id="228:3486">
                <input
                  v-model="form.numar_de_telefon_optional"
                  class="numar-de-telefon-optional-5InFe1 poppins-medium-stack-14-8px"
                  name="numardetelefonoptional"
                  placeholder="Numar de telefon (optional)"
                  type="number"
                />
                <img
                  class="vector-7-5InFe1"
                  src="../components/images/vector-4-4@2x.webp"
                  alt="Vector 7"
                />
              </div>
              <div class="message-FSbhl1" data-id="228:3489">
                <textarea
                  v-model="form.mesaj"
                  class="mesaj-ZILdUA"
                  name="mesaj"
                  placeholder="Mesaj"
                  required
                ></textarea>
                <img
                  class="vector-6"
                  src="../components/images/vector-4-4@2x.webp"
                  alt="Vector 6"
                />
              </div>
              <input type="hidden" v-model="form.honeypot" name="honeypot" />
              <input type="hidden" v-model="form.recaptchaToken" name="recaptchaToken" />
  
              <button type="submit" class="button-FSbhl1 smart-layers-pointers" data-id="228:3492">
                <div class="trimite-mesaj-nbeqyD" data-id="228:3493">
                  Trimite Mesaj
                </div>
              </button>
  
              <small style="color: black;">
                This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and
                <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
              </small>
            </form>
          </div>
        </div>
      </div>
  
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.2774958081704!2d25.96845447464996!3d44.3658914764609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffb57a537def%3A0xb5be45e52dd86aef!2sTop%20Speed%20Service%20-%20Service%20Auto%20%C8%99i%20Centru%20de%20Constatare%20Daune%20Bragadiru!5e0!3m2!1sro!2sro!4v1725889184748!5m2!1sro!2sro"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const siteKey = '6LdZmFAqAAAAADJi2v5hylUGu4pQmDGM59_GRBRk'; // Your site key
  
  const form = ref({
    nume: '',
    prenume: '',
    email: '',
    numar_de_telefon_optional: '',
    mesaj: '',
    honeypot: '', // Honeypot field
    recaptchaToken: '', // Added reCAPTCHA token field
  });
  
  const submitForm = async () => {
    // Validate required fields
    if (!form.value.nume || !form.value.prenume || !form.value.email) {
      alert('Vă rugăm să completați toate câmpurile obligatorii.');
      return;
    }
  
    // Check if grecaptcha is available
    if (typeof grecaptcha === 'undefined' || !grecaptcha.enterprise) {
      alert('reCAPTCHA is not loaded. Please try again later.');
      return;
    }
  
    try {
      // Get the reCAPTCHA token
      const recaptchaToken = await grecaptcha.enterprise.execute(siteKey, { action: 'submit' });
      form.value.recaptchaToken = recaptchaToken; // Add token to form data
  
      const response = await fetch('https://test.topspeedservice.ro/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.value),
      });
  
      if (response.ok) {
        // Track Google Ads conversion
        gtag('event', 'conversion', {
          send_to: 'AW-16523511425/Z7fjCNijldcZEIGNg8c9', // Replace with your Conversion ID and Label
          event_callback: () => {
            console.log('Google Ads conversion tracked');
          }
        });
  
        // Clear form on success
        form.value = {
          nume: '',
          prenume: '',
          email: '',
          numar_de_telefon_optional: '',
          mesaj: '',
          honeypot: '',
          recaptchaToken: '',
        };
        alert('Mesajul dvs. a fost trimis cu succes!');
      } else {
        alert('A apărut o eroare. Vă rugăm să încercați din nou.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('A apărut o eroare. Vă rugăm să încercați din nou.');
    }
  };
  // Load the reCAPTCHA script
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=' + siteKey;
    script.async = true;
    document.head.appendChild(script);
  });
  </script>
  
  
  
  <style scoped lang="scss">
  .grecaptcha-badge { 
      visibility: hidden !important;
  }
  
  .screen {
    display: flex;
    width: 100%;
    height: fit-content;
    background-color: var(--receptie-theme-3syslightsurface-container-lowest);
    // padding-top: 100px;
  
    .mobile-720-360 {
      flex: 1;
      max-width: 50%;
      background-color: transparent;
      margin: 12px;
      
  
      .contact-mobile-gJwtjs {
        background: transparent;
      }
  
      .contact-0FjsKs {
        align-content: center;
        margin: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
  
      @media (max-width: 1350px) {
        flex-direction: column;
        align-content: center;
        justify-content: center;
        max-width: 80%;
        margin: 0; // Reset margins for vertical alignment
        margin: auto;
      }
    }
  
    .map {
      border-radius: 25px;
      border-width: 5px;
      border-color: rgba(0, 0, 0, 0.062);
      border-style: solid;
      margin: 30px;
      width: 50%;
      min-height: 10cm;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  
      iframe {
        flex-direction: column;
        align-content: center;
        width: 100%;
        /* Makes the iframe responsive */
        height: 100%;
        /* Adjusts height to fill the container */
        border: 0;
        /* Removes border */
        border-radius: 25px;
        min-height: 10cm;
      }
    }
  
    @media (max-width: 1350px) {
      flex-direction: column;
      align-content: center;
      justify-content: center;
  
      .map {
        max-width: auto;
        margin: auto;
        width: 650px;
      }
  
      @media (max-width: 835px) {
        .map {
          max-width: auto;
          margin: auto;
          width: 80%;
        }
      }
  
      @media (max-width: 420px) {
        .map {
          max-width: auto;
          margin: auto;
          width: 350px;
        }
      }
    }
  
    @media (max-width: 360px) {
      min-width: 360px;
    }
  }
  </style>
  