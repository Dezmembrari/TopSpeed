<template>
    <div class="container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <h2>{{ card.title }}</h2>
        <span>{{ card.spanText }}</span>
        <p>{{ card.paragraph }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define the props to accept customizable card content
  const props = defineProps({
    cards: {
      type: Array,
      default: () => [
        {
          title: 'Card 1',
          spanText: 'Detalii card 1',
          paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt similique voluptate fuga minima iusto nobis quis, temporibus tempore dicta consectetur accusamus dolores exercitationem nam sed aut, nulla eum odit distinctio?',
        },
        {
          title: 'Card 2',
          spanText: 'Detalii card 2',
          paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt similique voluptate fuga minima iusto nobis quis, temporibus tempore dicta consectetur accusamus dolores exercitationem nam sed aut, nulla eum odit distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Card 3',
          spanText: 'Detalii card 3',
          paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt similique voluptate fuga minima iusto nobis quis, temporibus tempore dicta consectetur accusamus dolores exercitationem nam sed aut, nulla eum odit distinctio?',
        },
        {
          title: 'Card 4',
          spanText: 'Detalii card 4',
          paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt similique voluptate fuga minima iusto nobis quis, temporibus tempore dicta consectetur accusamus dolores exercitationem nam sed aut, nulla eum odit distinctio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem temporibus provident, ad obcaecati repudiandae corporis! Non perferendis ducimus voluptatum numquam aliquid eum tempora, esse, libero animi nostrum autem iste.',
        },
      ],
    },
  });
  </script>
  
  <!-- <style lang="scss" scoped>
  .container {
    width: 100%;
    position: relative;
    height: 300px;
    overflow-y: auto;
    padding: 12px;
  
    .card {
      position: sticky;
      top: 15px; // Adjust this as needed for sticky effect
      background: white;
      color: black;
      max-width: 600px;
      min-width: 200px;
      width: 100%;
      height: fit-content;
      padding: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.3);
  
      span {
        color: rgba(65, 65, 65, 0.5);
      }
    }
  
    @media (max-width: 720px) {
      padding: 2px;
      margin: auto;
      min-width: 200px;
    }
  }
  </style> -->

<!-- <template>
    <div class="container">
        <div class="card">
            <h2>Card 1</h2>
            <span> Detalii card 1</span>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                similique voluptate fuga minima iusto nobis quis, temporibus tempore 
                dicta consectetur accusamus dolores exercitationem nam sed aut, nulla 
                eum odit distinctio?
            </p>
        </div>
        <div class="card">
            <h2>Card 2</h2>
            <span> Detalii card 2</span>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                similique voluptate fuga minima iusto nobis quis, temporibus tempore 
                dicta consectetur accusamus dolores exercitationem nam sed aut, nulla 
                eum odit distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>
        <div class="card">
            <h2>Card 3</h2>
            <span> Detalii card 3</span>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                similique voluptate fuga minima iusto nobis quis, temporibus tempore 
                dicta consectetur accusamus dolores exercitationem nam sed aut, nulla 
                eum odit distinctio?
            </p>
        </div>
        <div class="card">
            <h2>Card 4</h2>
            <span> Detalii card 4</span>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                similique voluptate fuga minima iusto nobis quis, temporibus tempore 
                dicta consectetur accusamus dolores exercitationem nam sed aut, nulla 
                eum odit distinctio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem temporibus provident, ad obcaecati repudiandae corporis! Non perferendis ducimus voluptatum numquam aliquid eum tempora, esse, libero animi nostrum autem iste.
            </p>
        </div>
    </div>
</template>
-->

<style lang="scss" scoped>


.container{
   
    width: 100%;
    position: relative;
    height: 300px;
    overflow-y: auto;
    padding: 12px;

    .card{
    position: sticky;
    top:15px;
    background: white;
    color: black;
    max-width: 600px;
    min-width: 200px;
    width: 100%;
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding: 10px;
    margin: auto;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.3);

    &:nth-child(2){
        top: 30px;
    }

    &:nth-child(3){
        top: 45px;
    }

    &:nth-child(4){
        top: 70px;
    }


    span{
        color: rgba(65, 65, 65, 0.5);
    }
}

@media (max-width:720px) {
        .container{
        padding: 2px;
        margin: 10px;
        min-width: 200px;

        }
    }

}
</style> 