<template>
    <div class="screen">
    <div class="servicii">

      <h1 style="text-align: center; padding: 12px; font-size:38px">Servicii oferite:</h1>

      
      <TwoRow
      :title1="'Tinichigerie'"
      :text1="'Oferim servicii profesioniste de tinichigerie pentru autoturisme. Utilizăm echipamente moderne și tehnologie de vârf pentru a repara caroseria vehiculului dumneavoastră, asigurându-ne că acesta revine la forma sa originală cu soluții rapide și eficiente.'"
      :image1="'/assets/tinichigerie-BTOF1Iq6.webp'"
      :showFirstRow="true"
      :showSecondRow="true"
      :title2="'Vopsitorie'"
      :text2="'Oferim vopsitorie profesională pentru autoturisme și vehicule mari, cu două cabine dedicate: una pentru autoturisme și una pentru camioane și autocare. Garantăm finisaje excelente și durabile pentru toate tipurile de vehicule.'"
      :image2="'/assets/vopsitorie-BTDrA_nV.webp'"
      />
      
      <div class="verde">
      <TwoRow
      :title1="'Mecanică și Diagnoză Computerizată'"
      :text1="'Oferim servicii de mecanică auto și diagnoză computerizată pentru identificarea precisă a defecțiunilor. Cu echipamente moderne și expertiză tehnică, ne asigurăm că vehiculul tău funcționează optim în cel mai scurt timp posibil.'"
      :image1="'/assets/mecanica-IqAVDPB6.webp'"
      :showFirstRow="true"
      :showSecondRow="true"
      :title2="'Reîncărcare Freon'"
      :text2="'Oferim servicii de reîncărcare pentru toate tipurile de freon utilizate în sistemele de climatizare auto: R134a, R1234yf și R12. Indiferent de modelul vehiculului tău, asigurăm reîncărcarea corectă și eficientă a freonului, folosind echipamente moderne pentru a garanta performanța optimă a climatizării.'"
      :image2="'/assets/aer-Bj9APm4C.webp'"
      />
     </div>


      <TwoRow id="masina" 
      :title1="'Mașină la Schimb'"
      :text1="'Pentru clienții care își repară autoturismul la noi, oferim o mașină similară din parcul nostru auto, pe toată durata reparației. Dacă programul nu vă permite deplasarea, vă punem la dispoziție serviciul de ridicare a vehiculului din locația indicată și livrarea mașinii la schimb la aceeași adresă.'"
      :image1="'/assets/pexels-Cj0xXAfz.webp'"
      :showFirstRow="true"
      :showSecondRow="true"
      :title2="'Transport cu Platforma'"
      :text2="'În cazul unui accident, vă putem prelua vehiculul de la locul incidentului sau de la locația indicată de dumneavoastră și îl transportăm direct la service pentru reparații și constatare. De asemenea, putem aduce mașina la schimb la locația dorită, asigurându-ne că aveți un mijloc de transport disponibil în timpul reparațiilor.'"
      :image2="'/assets/mercedes-platforma-D3-s_S5L.webp'"
      />
   
      <div class="verde">
      <TwoRow id="dosar"
      :title1="'Întocmirea Dosarului de Daună'"
      :text1="'Ne ocupăm complet de documentația necesară și întocmirea dosarului de daună, gestionând toate demersurile cu constatatorul. Vă oferim, de asemenea, consiliere pentru completarea constatării amiabile și pașii care decurg din aceasta.'"
      :image1="'/assets/hands-DdFxnlZM.webp'"
      :showFirstRow="true"
      :showSecondRow="false"
      />
     </div>


        

    </div>
    </div>
  </template>
  
  <script setup>
  import TwoRow from '@/components/TwoRow.vue';
import Stepper from '../components/Stepper.vue';
  
  const cardData1 = [
  {
    title: 'Custom Card 1',
    spanText: 'Custom detail 1',
    paragraph: 'Custom paragraph content for card 1.',
  },
  {
    title: 'Custom Card 2',
    spanText: 'Custom detail 2',
    paragraph: 'Custom paragraph content for card 2.',
  },
  {
    title: 'Custom Card 3',
    spanText: 'Custom detail 3',
    paragraph: 'Custom paragraph content for card 3.',
  },
  {
    title: 'Custom Card 4',
    spanText: 'Custom detail 4',
    paragraph: 'Custom paragraph content for card 4.',
  },
    ];

    const cardData2 = [
  {
    title: 'Custom Card 1',
    spanText: 'Custom detail 1',
    paragraph: 'Custom paragraph content for card 1.',
  },
  {
    title: 'Custom Card 2',
    spanText: 'Custom detail 2',
    paragraph: 'Custom paragraph content for card 2.',
  },
  {
    title: 'Custom Card 3',
    spanText: 'Custom detail 3',
    paragraph: 'Custom paragraph content for card 3.',
  },
  {
    title: 'Custom Card 4',
    spanText: 'Custom detail 4',
    paragraph: 'Custom paragraph content for card 4.',
  },
    ];

    const cardData3 = [
  {
    title: 'Custom Card 1',
    spanText: 'Custom detail 1',
    paragraph: 'Custom paragraph content for card 1.',
  },
  {
    title: 'Custom Card 2',
    spanText: 'Custom detail 2',
    paragraph: 'Custom paragraph content for card 2.',
  },
  {
    title: 'Custom Card 3',
    spanText: 'Custom detail 3',
    paragraph: 'Custom paragraph content for card 3.',
  },
  {
    title: 'Custom Card 4',
    spanText: 'Custom detail 4',
    paragraph: 'Custom paragraph content for card 4.',
  },
    ];

  </script>


<style lang="scss">

.screen{
    background: var(--background-1);
    min-width: 360px;
    
    .servicii{
    padding-top: 90px;
    margin: 0px;
    position: relative;
    color: black;

    .verde{
      background: var(--background-2);
    }
    }
    
    
  } 
</style>