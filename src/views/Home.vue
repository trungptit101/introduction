<template>
  <Header />
  <MDBCarousel v-model="carousel" :items="itemsBanners" :indicators="false" class="slide-banner" />
  <div class="about">
    <MDBRow>
      <MDBCol sm="12" md="6">
        <MDBCarousel v-model="carousel" :items="items" :indicators="false"/>
      </MDBCol>
      <MDBCol sm="12" md="6">
        <div class="col-example">
          <p style="font-size: 34px; font-weight: 200;">ABOUT US</p>
          <p class="description">B Window Covers is the family owned business in Melbourne with over 10 years experience and knowledge in the window furnishing industry.</p>
          <p class="description">We manufacture, supply and install a variety range of quality and modern window coverings includes</p>
          <p class="indoor"><router-link to="/indoor">INDOOR</router-link></p>
          <p class="indoor"><router-link to="/outdoor">OUTDOOR</router-link></p>
          <p class="indoor"><router-link to="/security">SECURITY</router-link></p>
        </div>
      </MDBCol>
    </MDBRow>
  </div>
  <div class="testimonails">
    <MDBRow>
      <MDBCol sm="12" md="6">
        <div class="col-example">
          <div class="special-heading align-center" style="text-align: center;">
            <p class="special-h-tag">TESTIMONIALS</p>
            <hr class="separator margin-bottom " style="margin: 0px auto; background-color: rgb(169 163 163); border-color:#e8e8e8;color:#e8e8e8;height:2px;width:170px;">
            <div style="width: 80%; margin: 0px auto;">
              <carousel :items-to-show="1">
                <slide v-for="(slide, index) in itemsReplys" :key="index">
                  <div>
                    <img src="@/assets/image/reply.png" width="130" height="100" style="margin-top: 20px;" />
                    <p class="content" style="margin-top: 20px;">{{ slide.content }}</p>
                    <p class="author" style="margin-top: 20px;">{{ slide.author }}</p>
                  </div>
                </slide>
                <template #addons>
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </MDBCol>
      <MDBCol sm="12" md="6">
        <MDBCarousel v-model="carousel" :items="itemsTeminals" :indicators="false"/>
      </MDBCol>
    </MDBRow>
  </div>
  <Footer />
</template>
<script>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import { MDBCol, MDBRow, MDBCarousel} from 'mdb-vue-ui-kit'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: "Home",
  components: { Header, Footer, MDBCol, MDBRow, MDBCarousel, Carousel,
    Slide,
    Pagination,},
  data() {
    return {
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
      itemsBanners: [
        {
          src: require("@/assets/banner-home/slide1.jpg"),
          interval: 2000,
          alt: "World Class Design",
          label: "WORLD CLASS DESIGN",
          color: "#e81010",
          caption:
            "A job is not complete to us until every single details is taken care of, thats we are rated the best globally",
        },
        {
          src: require("@/assets/banner-home/slide2.jpg"),
          interval: 2000,
          alt: "10 Year Experience",
          label: "10 YEAR EXPERIENCE",
          color: "#e81010",
          caption:
            "Simplicity is at the heart of our design, we make complex things look and feel simple",
        },
        {
          src: require("@/assets/banner-home/slide3.jpg"),
          interval: 2000,
          alt: "Stunning Window Covers",
          label: "STUNNING WINDOW COVERS",
          color: "#656463",
          caption:
            "Simplicity is at the heart of our design, we make complex things look and feel simple",
        },
      ],
      items: [
        {
          src: require("@/assets/banner-about/slide1.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-about/slide2.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-about/slide3.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-about/slide4.jpg"),
          interval: 2000,
        },
      ],
      itemsTeminals: [
        {
          src: require("@/assets/banner-teminal/slide1.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-teminal/slide2.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-teminal/slide3.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-teminal/slide4.jpg"),
          interval: 2000,
        },
        {
          src: require("@/assets/banner-teminal/slide5.jpg"),
          interval: 2000,
        },
      ],
      itemsReplys: [
        {
          content: 'Good communication and good workmanship. Thanks 27 July 2015',
          author: 'Tim from West Footscray, VIC'
        },
        {
          content: 'So very happy with the service, quality and most important price. Huan is a very nice person to deal with would definitely recommend to others! 6 August 2014',
          author: 'Tracey from Point Cook, VIC'
        },
        {
          content: '"Good job. Quality work fair price"',
          author: 'Hary'
        },
        {
          content: 'We hired Huan because of his profesional advice and prompt service. He could also have the blinds to us faster than any other company thank you Huan 3 March 2014',
          author: 'Mel and Ang from Blairgowrie, VIC'
        },
        {
          content: 'Good communication, job was done within a couple of days from contact.',
          author: 'Vicky'
        }
      ]
    }
  },
};
</script>

<style lang="scss">
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
  .content {
    font: 100 28px "Open Sans","Open Sans","Arial",sans-serif;
    color: #8c8c8c;
    /* line-height: 46px; */
    letter-spacing: 0px;
    text-transform: none;
    font-size: 17px;
    font-style: italic;
    font-weight: lighter;
  }
  .author {
    font-size: 18px;
  }
  .carousel__slide {
    cursor: pointer;
    // width: 400px;
    // height: 400px;
    // background-color: red;
  }
  .slide-reply {
    .carousel-control-prev, .carousel-control-next {
      display: none;
    }
    .carousel-indicators {
      bottom: -50px;
    }
  }
</style>
<style lang="scss" scoped>
  .row {
    --mdb-gutter-x: inherit;
  }
  .about {
    padding: 50px 0 0px 0;
    background: #f2f5f8;
    .col-example {
      padding: 60px 30px 60px 60px !important;
      text-align: left;
      .description {
        font-weight: 100;
      }
      h3 {
        margin-bottom: 15px;
        font: 300 31px "Open Sans","Open Sans","Arial",sans-serif;
        color: #222222;
        line-height: 52px;
        text-transform: none;
      }
      .indoor {
        a {
          font-weight: 100;
          color: #d80808 !important;
        }
      }
    }
  }
  .testimonails {
    // padding: 0px 0 40px 0;
    .col-example {
      padding: 10px 50px 10px 20px;
      h3 {
        margin-bottom: 15px;
        font: 300 31px "Open Sans","Open Sans","Arial",sans-serif;
        color: #222222;
        line-height: 52px;
        text-transform: none;
      }
      .indoor {
        color: #d80808;
      }
      .special-h-tag {
        font-size: 30px;
        font-weight: 100;
        margin-top: 20px;
      }
    }
  }
</style>