<template>
  <div class="container">
    <div class="frame">
    <img class="unsplash" alt="Unsplash" src="../components/images/service_1.png" />
    <img class="unsplash" alt="Unsplash" src="../components/images/service_2.png" />
    <img class="unsplash" alt="Unsplash" src="../components/images/autocar.png" />
    <img class="unsplash" alt="Unsplash" src="../components/images/service_3.png" /> 
  </div>
    <p class="text-wrapper">
      Din 2001, Top Speed Service SRL a evoluat constant, adaptându-se celor mai recente tehnologii și standarde din
      industrie. Astăzi, suntem un service auto modern, dotat cu echipamente de ultimă generație și o echipă de
      specialiști pasionați de ceea ce fac. Oferim o gamă completă de servicii, de la întreținerea periodică până la
      reparațiile complexe, toate la cele mai înalte standarde de calitate. Alegeți Top Speed Service și
      beneficiați de experiența noastră, de profesionalismul echipei noastre și de prețuri competitive.
    </p>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="scss">
.container {
  align-items: center;
  background-color: #cdeec5ec;
  display: flex;
  flex-wrap: wrap;
  gap: 140px 21px;
  justify-content: center;
  padding: 160px 50px 60px;
  position: relative;
  min-width: 360px;


  .frame {
    position: relative;
    width: 512px;
    background: rgb(255, 255, 250);
    border-radius: 25px;
    height: auto;
    padding: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    align-items: center;
    display: flex;  
    flex-wrap: wrap;  
    gap: 0px 0px;  
    justify-content: center;  
   

    .unsplash {
    height: auto;
    position: relative;
    width: 50%;
    }


    @media(max-width:720px){
      width: 80%;
      height: auto;
    }
  }

  .text-wrapper {
    color: #000000;
    font-family: "Roboto-Bold", Helvetica;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: 950px;
    
    @media (max-width: 1280px) {
      flex: auto;
      width: fit-content;
  }

    @media (max-width: 720px){
      font-size: 24px;
    }

  }

  @media(max-width:720px){
    
    padding: 60px 12px 50px;
    gap: 50px ;
  }

  
}


</style>





