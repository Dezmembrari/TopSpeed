<template>
  <div class="steps-container">
    <h1 class="title">Așa gestionăm fiecare etapă pentru tine:</h1>

    <div class="steps">
      <div class="pas" id="pas1">
        <div class="content">
          <div class="number">
            <div class="text-wrapper">1</div>
          </div>
          <div class="headline-and-details">
            <h1 class="div">Contactați-ne</h1>
            <p class="p">
              Ne contactati telefonic sau prin email imediat ce ați fost implicat într-un accident sau ați întâmpinat o problemă cu masina dumneavoastra.
            </p>
          </div>
        </div>
      </div>

      <div class="pas" id="pas2">
        <div class="content">
          <div class="number">
            <div class="text-wrapper">2</div>
          </div>
          <div class="headline-and-details">
            <h1 class="div">Mașina la schimb și transport</h1>
            <p class="p">
              In cazul in care masina dumneavoastra nu este deplasabila, putem organiza transportul acesteia catre 
              service-ul nostru cu ajutorul platformei. Pe toata perioada reparatiei oferim masina la schimb.
            </p>
          </div>
        </div>
      </div>

      <div class="pas" id="pas3">
        <div class="content">
          <div class="number">
            <div class="text-wrapper">3</div>
          </div>
          <div class="headline-and-details">
            <h1 class="div">Constatare daune și întocmire amiabilă</h1>
            <p class="p">
              La centrul nostru se va efectua constatarea daunelor si, daca este necesar, va asistam in intocmirea amiabilei. 
              Fiind un centru autorizat, ne ocupăm de toate formalitățile și documentele necesare.
            </p>
          </div>
        </div>
      </div>

      <div class="pas" id="pas4">
        <div class="content">
          <div class="number">
            <div class="text-wrapper">4</div>
          </div>
          <div class="headline-and-details">
            <h1 class="div">Întocmirea și depunerea dosarului</h1>
            <p class="p">
              Echipa noastră se ocupă de întocmirea și depunerea dosarului către constatatorul de daune, 
              gestionând totul în relație cu compania de asigurări pentru dumneavoastra.
            </p>
          </div>
        </div>
      </div>

      <div class="pas" id="pas5">
        <div class="content">
          <div class="number">
            <div class="text-wrapper">5</div>
          </div>
          <div class="headline-and-details">
            <h1 class="div">Reparația</h1>
            <p class="p">
              După aprobarea dosarului, specialiștii noștri vor începe reparația mașinii dvs., 
              folosind piese de calitate, originale și echipamente de ultimă generație, 
              asigurându-ne că mașina este gata cât mai curând.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.steps-container {
  position: relative;
  padding: 20px;
  height: auto;
  background-color: var(--receptie-theme-3syslightsurface-container-lowest);
  min-width: 360px;

  

  .title {
    align-self: stretch;
    background-color: transparent;
    color: var(--receptie-theme-3black);
    font-style: normal;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    padding: 12px 0 12px 0;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 20px; // Space between steps
    align-items: flex-start;
    width: 100%; // Ensure steps take up the full width of the container
    // background-color: red;
    
    @media (min-width:1140px) {
    max-width: 1140px;
    margin: 0 auto; // Center the steps horizontally above 1280px
    }

    .pas {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 12.84px;
      padding: 20.54px 30.8px;
      position: relative;
      background-color: #ffffff;
      border-radius: 15.4px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
      // width: 40%; // Take full width of container
      max-width: 1200px; // Set a max-width to limit width on larger screens

      .content {
        display: inline-flex;
        align-items: center;
        gap: 20.54px;
        position: relative;
        // flex: 0 0 auto;
      }

      .number {
        position: relative;
        width: 41.07px;
        height: 41.07px;
        background-color: var(--receptie-theme-3syslighttertiary-container);
        border-radius: 20.54px;
        flex: none;

        .text-wrapper {
          position: relative;
          height: 29px;
          top: 8px;
          left: 14px;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          color: var(--receptie-theme-3white);
          font-size: 23.1px;
        }
      }

      .headline-and-details {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 7.7px;
        position: relative;
        width: 90%;
        // flex: 0 0 auto;
        // height: auto;
        .div {
          position: relative;
          width: stretch;
          margin-top: -1.28px;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          color: black;
          font-size: 30px;
          line-height: 32.1px;
          // white-space: nowrap;
          // overflow: hidden;
          // text-overflow: ellipsis;
          display: -webkit-box;
          // -webkit-line-clamp: 1;
          // line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .p {
          position: relative;
          width: stretch;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          color: #666666;
          font-size: 24px;
          letter-spacing: 0.45px;
          line-height: 21.4px;
        }
      }
    }
  // Media Queries for responsive design
  @media (min-width: 720px) {
      .pas {
        width: 90%; // Adjust card width for larger screens
      }
    }

    @media (min-width: 1024px) {
      .pas {
        width: 60%; // Further adjust card width for even larger screens
      }
    }

    // @media (max-width: 600px) {
    //   .pas {
    //     min-height: auto; // Ensure card height adjusts to content
    //   }
    // }

    // Targeting individual cards by ID
    #pas2,
    #pas4 {
      align-self: flex-end; /* Aligns the content to the right */
    }

    #pas1,
    #pas3,
    #pas5 {
      align-self: flex-start; /* Aligns the content to the left */
    }
  }
}


</style>
