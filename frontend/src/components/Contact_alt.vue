<template>
    <div class="screen">
        <div class="mobile-container">
            <div class="contact-card">
                <div class="content-container">
                  
                    <div class="card-info">
                        <h1 class="title">Informatii contact</h1>
                        <div class="contact-details">
                            <a href="tel:+40788990011">
                                <div class="contact-item">
                                    <img src="../components/images/bxs-phone-call-4@2x.webp" alt="Phone" />
                                    <p>0788 990 011</p>
                                </div>
                            </a>
                            <a href="mailto:contact@topspeedservice.ro">
                                <div class="contact-item">
                                    <img src="../components/images/ic-sharp-email-4@2x.webp" alt="Email" />
                                    <p>contact@topspeedservice.ro</p>
                                </div>
                            </a>
                            <div class="contact-item">
                                <img src="../components/images/carbon-location-filled-4@2x.webp" alt="Location" />
                                <span>Sos. Clinceni, DJ401A 6, Bragadiru 077025</span>
                            </div>
                        </div>
                    </div>

                   
                    <div class="contact-form-container">
                        <form @submit.prevent="submitForm" class="contact-form">
                            <input v-model="form.nume" name="nume" placeholder="Nume" required />
                            <input v-model="form.prenume" name="prenume" placeholder="Prenume" required />
                            <input v-model="form.email" name="email" placeholder="Email" type="email" required />
                            <input v-model="form.numar_de_telefon_optional" name="numardetelefonoptional"
                                placeholder="Numar de telefon (optional)" type="number" />
                            <textarea v-model="form.mesaj" name="mesaj" placeholder="Mesaj" required></textarea>
                            <input type="hidden" v-model="form.honeypot" name="honeypot" />
                            <input type="hidden" v-model="form.recaptchaToken" name="recaptchaToken" />
                            <button type="submit">Trimite Mesaj</button>
                        </form>
                        <div class="recaptcha-disclaimer">
                            This site is protected by reCAPTCHA and the Google
                            <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and
                            <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.2774958081704!2d25.96845447464996!3d44.3658914764609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffb57a537def%3A0xb5be45e52dd86aef!2sTop%20Speed%20Service%20-%20Service%20Auto%20%C8%99i%20Centru%20de%20Constatare%20Daune%20Bragadiru!5e0!3m2!1sro!2sro!4v1725889184748!5m2!1sro!2sro"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useReCaptcha } from 'vue-recaptcha-v3';

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const form = ref({
    nume: '',
    prenume: '',
    email: '',
    numar_de_telefon_optional: '',
    mesaj: '',
    honeypot: '',
    recaptchaToken: ''
});

const submitForm = async () => {
    if (form.value.honeypot === '') {
        try {
            // Wait until reCAPTCHA has been loaded
            await recaptchaLoaded();

            // Execute reCAPTCHA to get the token
            form.value.recaptchaToken = await executeRecaptcha();

            // Send form data and reCAPTCHA token to Express backend
            const response = await axios.post('/api/contact', {
                nume: form.value.nume,
                prenume: form.value.prenume,
                email: form.value.email,
                numar_de_telefon_optional: form.value.numar_de_telefon_optional,
                mesaj: form.value.mesaj,
                recaptchaToken: form.value.recaptchaToken
            });

            console.log('Mesajul a fost trimis cu succes: ', response.data);
        } catch (error) {
            console.error('A fost intampinata o problema: ', error);
        }
    }
};
</script>

<style scoped lang="scss">
.screen {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    background-color: var(--receptie-theme-3syslightsurface-container-lowest);
}

a{
    color: white;
}

.mobile-container,
.map-container {
    flex: 1;
    max-width: 50%;
    max-width: 800px;
}

.contact-card {
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    border-radius: 25px;
    color: black;
}

.content-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
}

.card-info {
    flex: 1;
    background-color: var(--receptie-theme-3syslighttertiary-container);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.contact-form-container {
    flex: 1;
}

.title {
    font-size: 1.8rem;
    margin-bottom: 20px;
}

.contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-size: 1.2rem;

    img {
        width: 24px;
        height: 24px;
        margin-bottom: 5px; // Adds space between the icon and the text
    }

    a,
    span {
        color: white;
        text-decoration: none;
    }
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    input,
    textarea {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border-radius: 10px;
        border: 1px solid #ccc;
    }

    button {
        padding: 10px;
        background-color: var(--receptie-theme-3syslighttertiary-container);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background-color: var(--receptie-theme-3syslighttertiary-container);
        }
    }
}

.recaptcha-disclaimer {
    font-size: 0.9rem;
    margin-top: 10px;
    text-align: center;
    color: black;

    a {
        color: var(--receptie-theme-3syslighttertiary-container);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

@media (max-width: 1280px) {
    .content-container {
        flex-direction: column;
        align-items: center;
    }

    .card-info,
    .contact-form-container {
        max-width: 100%;
        max-height: 100%;
    }
}

.map-container {
    // min-height: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 25px;

    iframe {
        width: 100%;
        height: 100%;
        border-radius: 24px;

        @media (max-width: 720px) {
            height: 300px;
        }
    }
}

@media (max-width: 720px) {

    .screen {
        flex-direction: column;
    }

    .mobile-container,
    .map-container {
        max-width: 100%;
    }

    .contact-item {
        font-size: 0.9rem;
    }

    .contact-form {

        input,
        textarea {
            font-size: 0.9rem;
        }
    }

    .content-container {
        gap: 20px;
    }
}
</style>
