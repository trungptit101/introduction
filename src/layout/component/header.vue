<template>
    <header>
      <!-- Navbar -->
      <MDBNavbar expand="lg" light bg="white" container position="sticky">
        <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
        <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
          <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
          <MDBNavbarItem to="#"> Products </MDBNavbarItem>
          <MDBNavbarItem to="#"> Gallery </MDBNavbarItem>
          <MDBNavbarItem to="#"> Contact </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBNavbar>
      <!-- Navbar -->
  
      <!-- Background image -->
      <!-- <div
        class="p-5 text-center bg-image"
        style="
          background-image: url('http://bwindowcovers.com.au/wp-content/uploads/2016/07/slide3.jpg');
          height: 700px;
        "
      >
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.2)">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">Heading</h1>
              <h4 class="mb-3">Subheading</h4>
              <MDBBtn tag="a" lg outline="light" href="#!" role="button"
                >Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Background image -->
  
      <!-- Carousel -->
      <MDBCarousel v-model="carousel" :items="items"/>
    </header>
  </template>
  
  <script>
  import { ref } from "vue";
  import {
    //   MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCarousel,
  } from "mdb-vue-ui-kit";
  export default {
    name: "Header",
    components: {
      // MDBBtn,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCarousel,
    },
    setup() {
      const items = [
        
      ];
      const carousel = ref(0);
  
      return {
        items,
        carousel,
      };
    },
  };
  </script>
  
  <style lang="scss">
  .carousel-inner {
    max-height: 600px;
    img {
      max-height: 600px;
    }
    .carousel-caption {
      bottom: 40%;
    }
  }
  .carousel-indicators {
    bottom: 35%;
  }
  </style>