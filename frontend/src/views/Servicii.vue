<template>
    <div class="screen">
    <div class="servicii">
      <TwoRow
      :title1="'Tinichigerie'"
      :text1="'Oferim servicii profesioniste de tinichigerie pentru autoturisme. Utilizăm echipamente moderne și tehnologie de vârf pentru a repara caroseria vehiculului dumneavoastră, asigurându-ne că acesta revine la forma sa originală cu soluții rapide și eficiente.'"
      :image1="'/assets/tinichigerie-BTOF1Iq6.webp'"
      :showFirstRow="true"
      :showSecondRow="true"
      :title2="'Vopsitorie'"
      :text2="'Oferim vopsitorie profesională pentru autoturisme și vehicule mari, cu două cabine dedicate: una pentru autoturisme și una pentru camioane și autocare. Garantăm finisaje excelente și durabile pentru toate tipurile de vehicule.'"
      :image2="'/assets/vopsitorie-BTDrA_nV.webp'"
      >
      </TwoRow>

        <div class="cards" id="masina">
            <Stepper :cards="cardData1" />
            <div class="txt-img">
                <h1>Masina la schimb</h1>
                <img src="../components/images/pexels.webp"/>
            </div>    
        </div>

        <div class="cards" id="platforma">
            <div class="txt-img">
                <h1>Transport cu platforma</h1>
                <img src="../components/images/mercedes-platforma.webp"/>
            </div>
            <Stepper :cards="cardData2" />
        </div>
        
        <div class="cards" id="dosar">
            <Stepper :cards="cardData3"/>
            <div class="txt-img">
                <h1 >Intocmirea dosarului</h1>
                <img src="../components/images/hands.webp"/>
            </div>
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
}


  .servicii{
    padding-top: 90px;
    margin: 0px;
    position: relative;
    color: black;

    .cards{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: auto;
        background-color:var(--background-2);
        border-radius: 0px;
        // margin-bottom: 24px;

        
        
        .txt-img{
        display: flex;
        position: relative;
        flex-direction: column-reverse;
        width: 100%;
        align-items: center;

        img{
            margin: 12px;
            border-radius: 25px;
            width: 350px;
            height: auto;
            border: 2px solid #ffffff; /* Add border */
            box-shadow: 0 4px 8px rgb(0, 0, 0,0.3), 0 6px 20px rgb(0, 0, 0,0.4); /* Add drop shadow */
            
            // @media (max-width: 880px) {
            //     display: none;
                
            // }

            @media (max-width:768px) {
              width: 57%;
              height: auto;
            }
        }
        }

        &:nth-child(4){
            background-color: transparent;
        }

        @media (max-width: 880px) {
            flex-direction:column ;

            &:nth-child(3),
            &:nth-child(5){
            flex-direction: column-reverse;
            }
        }
    }  
    }

    
    
    

</style>