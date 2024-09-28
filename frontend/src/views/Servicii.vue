<template>
  <div class="screen">
    <div class="servicii">
      <h1 style="text-align: center; padding: 12px; font-size:38px">Servicii oferite:</h1>
      
      <TwoRow
        :title1="'Tinichigerie'"
        :text1="'Oferim servicii profesioniste de tinichigerie pentru autoturisme. Utilizăm echipamente moderne și tehnologie de vârf pentru a repara caroseria vehiculului dumneavoastră, asigurându-ne că acesta revine la forma sa originală cu soluții rapide și eficiente.'"
        :imageClass1="'tinichigerie-image'"
        :showFirstRow="true"
        :showSecondRow="true"
        :title2="'Vopsitorie'"
        :text2="'Oferim vopsitorie profesională pentru autoturisme și vehicule mari, cu două cabine dedicate: una pentru autoturisme și una pentru camioane și autocare. Garantăm finisaje excelente și durabile pentru toate tipurile de vehicule.'"
        :imageClass2="'vopsitorie-image'"
      />
      
      <div class="verde">
        <TwoRow
          :title1="'Mecanică și Diagnoză Computerizată'"
          :text1="'Oferim servicii de mecanică auto și diagnoză computerizată pentru identificarea precisă a defecțiunilor. Cu echipamente moderne și expertiză tehnică, ne asigurăm că vehiculul tău funcționează optim în cel mai scurt timp posibil.'"
          :imageClass1="'mecanica-image'"
          :showFirstRow="true"
          :showSecondRow="true"
          :title2="'Reîncărcare Freon'"
          :text2="'Oferim servicii de reîncărcare pentru toate tipurile de freon utilizate în sistemele de climatizare auto: R134a, R1234yf și R12. Indiferent de modelul vehiculului tău, asigurăm reîncărcarea corectă și eficientă a freonului, folosind echipamente moderne pentru a garanta performanța optimă a climatizării.'"
          :imageClass2="'aer-image'"
        />
      </div>

      <TwoRow id="masina" 
        :title1="'Mașină la Schimb'"
        :text1="'Pentru clienții care își repară autoturismul la noi, oferim o mașină similară din parcul nostru auto, pe toată durata reparației. Dacă programul nu vă permite deplasarea, vă punem la dispoziție serviciul de ridicare a vehiculului din locația indicată și livrarea mașinii la schimb la aceeași adresă.'"
        :imageClass1="'pexels-image'"
        :showFirstRow="true"
        :showSecondRow="true"
        :title2="'Transport cu Platforma'"
        :text2="'În cazul unui accident, vă putem prelua vehiculul de la locul incidentului sau de la locația indicată de dumneavoastră și îl transportăm direct la service pentru reparații și constatare. De asemenea, putem aduce mașina la schimb la locația dorită, asigurându-ne că aveți un mijloc de transport disponibil în timpul reparațiilor.'"
        :imageClass2="'mercedes-platforma-image'"
      />
   
      <div class="verde">
        <TwoRow id="dosar"
          :title1="'Întocmirea Dosarului de Daună'"
          :text1="'Ne ocupăm complet de documentația necesară și întocmirea dosarului de daună, gestionând toate demersurile cu constatatorul. Vă oferim, de asemenea, consiliere pentru completarea constatării amiabile și pașii care decurg din aceasta.'"
          :imageClass1="'hands-image'"
          :showFirstRow="true"
          :showSecondRow="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TwoRow from '@/components/TwoRow.vue';
//import Stepper from '../components/Stepper.vue';

// Your existing script code...
</script>

<style lang="scss">
.screen {
  background: var(--background-1);
  min-width: 360px;
  
  .servicii {
    padding-top: 90px;
    margin: 0px;
    position: relative;
    color: black;

    .verde {
      background: var(--background-2);
    }
  }
}

// Image classes
.tinichigerie-image { background-image: url('../components/images/tinichigerie.webp'); }
.vopsitorie-image { background-image: url('../components/images/vopsitorie.webp'); }
.mecanica-image { background-image: url('../components/images/mecanica.webp'); }
.aer-image { background-image: url('../components/images/aer.webp'); }
.pexels-image { background-image: url('../components/images/pexels.webp'); }
.mercedes-platforma-image { background-image: url('../components/images/mercedes-platforma.webp'); }
.hands-image { background-image: url('../components/images/hands.webp'); }

// Common styles for all images
[class$="-image"] {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px; // Adjust as needed
  width: 100%;
}
</style>