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
      <MDBCarousel v-model="carousel" :items="items" fade dark />
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
        {
          src:
            "http://bwindowcovers.com.au/wp-content/uploads/2016/07/slide3.jpg",
          interval: 5000,
          alt: "World Class Design",
          label: "WORLD CLASS DESIGN",
          caption:
            "A job is not complete to us until every single details is taken care of, thats we are rated the best globally",
        },
        {
          src:
            "http://bwindowcovers.com.au/wp-content/uploads/2016/07/slide4.jpg",
          interval: 5000,
          alt: "10 Year Experience",
          label: "10 YEAR EXPERIENCE",
          caption:
            "Simplicity is at the heart of our design, we make complex things look and feel simple",
        },
        {
          src:
            "http://bwindowcovers.com.au/wp-content/uploads/2016/07/slide5.jpg",
          interval: 5000,
          alt: "Stunning Window Covers",
          label: "STUNNING WINDOW COVERS",
          caption:
            "Simplicity is at the heart of our design, we make complex things look and feel simple",
        },
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