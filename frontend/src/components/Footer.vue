<template>
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__brand">
          <h1 class="footer__title">Top Speed Service</h1>
          <img class="footer__logo" src="../components/images/vector-11-3.webp" alt="Vector 11" />
        </div>
        <div class="footer__contact">
          <div class="footer__section-title">Detalii de contact</div>
          <div class="footer__contact-item">
            <img src="../components/images/group-1000001780-2@2x.webp" alt="Contact" />
            <a href="tel:+40788990011">0788 990 011</a>
          </div>
          <div class="footer__contact-item">
            <img src="../components/images/vector-8@2x.webp" alt="Email" />
            <a href="mailto:contact@topspeedservice.ro">contact@topspeedservice.ro</a>
          </div>
          <div class="footer__contact-item">
            <img src="../components/images/vector-9@2x.webp" alt="Address" />
            <a href="https://maps.app.goo.gl/rg6mR3coquFgzpYi6">Sos. Clinceni, DJ401A 6, Bragadiru 077025</a>
          </div>
        </div>
        <!-- <div class="footer__section">
          <div class="footer__section-title">Companie</div>
          <div>About</div>
          <div>Contact</div>
        </div> -->
        <div class="footer__section">
          <div class="footer__section-title">Legal</div>
          <div><router-link class="link" :to="{name: 'privacy'}">Privacy Policy</router-link></div>
          <!-- <div>Terms &amp; Services</div>
          <div>Terms of Use</div> -->
          <div><router-link class="link" :to="{name: 'cookies'}">Cookies</router-link></div>
        </div>
        <div class="footer__section">
          <div class="footer__section-title">Acces rapid</div>
          <div><router-link class="link" :to="{name: 'flota'}">Flota</router-link></div>
          <div><router-link class="link" :to="{name: 'servicii'}">Servicii</router-link></div>
          <div><router-link class="link" :to="{name: 'about'}">Despre noi</router-link></div>
          <div><router-link class="link" :to="{name: 'contact'}">Contact</router-link></div>
        </div>
      </div>
    </footer>
  </template>


<script>

</script>


<style scoped lang="scss">
.footer {
  background-color: var(--receptie-theme-3syslighttertiary);
  color: var(--receptie-theme-3white);
  width: 100%;
  padding: 20px;
  position: absolute;
  left: 0px;

  .footer__content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }

  .footer__brand,
  .footer__contact,
  .footer__section {
    flex: 1;
    min-width: fit-content;
  }

  .footer__title {
    font-family: var(--font-family-inter);
    font-size: 55.4px;
    font-weight: 700;
    text-shadow: 0px 4px 4px #00000040;
  }

  .footer__logo {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }

  .footer__section-title {
    font-family: var(--font-family-poppins);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .footer__contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .footer__contact-item img {
    width: 20px;
    height: auto;
  }

  a {
    color: var(--receptie-theme-3white);
  }

  @media (max-width: 360px) {
    min-width: 360px;
  }
}
</style>