<template>
    <Header />
    <div class="gallery">
        <p class="title-indoor">INDOOR</p>
        <p class="des-indoor">Roller blinds - Vertical blinds - Roman blinds - Venetian blinds - Panel glide blinds - Curtains - Plantation Shutters</p>
        <div>
            <p class="roller-bind">ROLLER BLINDS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" style="margin-bottom: 20px;"> -->
                        <vue-picture-swipe :items="imageRollers" class="image-swipe"></vue-picture-swipe>
                    <!-- </MDBCol> -->
                <!-- </MDBRow> -->
            </div>
        </div>
        <div>
            <p class="roller-bind">VERTICAL BLINDS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageVerticals" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageVerticals" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <div>
            <p class="roller-bind">ROMAN BLINDS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageRomans" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageRomans" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <div>
            <p class="roller-bind">VENETIAN BLINDS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageVenetians" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageVenetians" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <div>
            <p class="roller-bind">CURTAINS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageCurtains" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageCurtains" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <div>
            <p class="roller-bind">PLANTATION SHUTTERS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imagePlantinos" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imagePlantinos" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <p class="title-indoor">OUTDOOR</p>
        <p class="des-indoor">Awnings - Zipscreen - Folding Arm Awnings</p>
        <div>
            <p class="roller-bind">AWNINGS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageAwnings" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageAwnings" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <div>
            <p class="roller-bind">ZIPSCREEN</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageZipSreens" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageZipSreens" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <div>
            <p class="roller-bind">FOLDING ARM AWNINGS</p>
            <div style="width: 100%; margin-top: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageFoldAwnings" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageFoldAwnings" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
        <p class="title-indoor">SECURITY</p>
        <p class="des-indoor">Roller Shutters - Security doors and Fly door - Security window (Security Grills) - Crimsafe - Fly screen/ Insect Screen</p>
        <div>
            <div style="width: 100%; margin-top: 20px; margin-bottom: 20px;">
                <!-- <MDBRow>
                    <MDBCol sm="6" md="3" lg="3" xl="3" v-for="(image, key) in imageSecuritys" :key="key" style="margin-bottom: 20px;">
                        <div class="col-example">
                            <div class="bg-image hover-zoom">
                                <img :src="image.src" class="image-gallery-roller img-fluid" />
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> -->
                <vue-picture-swipe :items="imageSecuritys" class="image-swipe"></vue-picture-swipe>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
// import { MDBCol, MDBRow } from 'mdb-vue-ui-kit';
import VuePictureSwipe from 'vue-picture-swipe';
export default {
    name: "Home",
    components: { Header, Footer, VuePictureSwipe },
    data() {
        return {
            imageRollers: [
                { 
                    src: require("@/assets/gallery/roller/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/roller/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/roller/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/roller/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/roller/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/roller/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/roller/gallery4.jpg"),
                    thumbnail: require("@/assets/gallery/roller/gallery4.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageVerticals: [
                {
                    src: require("@/assets/gallery/vertical/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/vertical/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/vertical/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/vertical/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageRomans: [
                {
                    src: require("@/assets/gallery/roman/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/roman/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/roman/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/roman/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                {
                    src: require("@/assets/gallery/roman/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/roman/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageVenetians: [
                { 
                    src: require("@/assets/gallery/venetian/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/venetian/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                {
                    src: require("@/assets/gallery/venetian/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/venetian/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageCurtains: [
                {
                    src: require("@/assets/gallery/curtains/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/curtains/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/curtains/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/curtains/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/curtains/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/curtains/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/curtains/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/curtains/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imagePlantinos: [
                {
                    src: require("@/assets/gallery/palentino/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/palentino/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/palentino/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/palentino/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/palentino/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/palentino/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageAwnings: [
                { 
                    src: require("@/assets/gallery/awnings/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/awnings/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/awnings/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/awnings/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/awnings/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/awnings/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/awnings/gallery4.jpg"),
                    thumbnail: require("@/assets/gallery/awnings/gallery4.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageZipSreens: [
                { 
                    src: require("@/assets/gallery/screen/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/screen/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/screen/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/screen/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageFoldAwnings: [
                { 
                    src: require("@/assets/gallery/folding/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/folding/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/folding/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/folding/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                }
            ],
            imageSecuritys: [
                {
                    src: require("@/assets/gallery/security/gallery1.jpg"),
                    thumbnail: require("@/assets/gallery/security/gallery1.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/security/gallery2.jpg"),
                    thumbnail: require("@/assets/gallery/security/gallery2.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/security/gallery3.jpg"),
                    thumbnail: require("@/assets/gallery/security/gallery3.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
                { 
                    src: require("@/assets/gallery/security/gallery4.jpg"),
                    thumbnail: require("@/assets/gallery/security/gallery4.jpg"),
                    w: 600,
                    h: 400,
                    alt: 'some numbers on a grey background'
                },
            ],
        };
    },
};
</script>

<style lang="scss">
    @media (min-width: 992px) {
        .image-swipe {
            img {
                width: 23%;
            }
        }
    }
    @media (max-width : 991px) {
        .image-swipe {
            img {
                width: 47%;
                margin-bottom: 10px;
            }
        }
    }
    
</style>
<style lang="scss" scoped>
    .row {
        --mdb-gutter-x: 0;
    }
    .gallery {
        padding-top: 160px;
        text-align: center;
        .title-indoor {
            font-size: 36px;
            font-weight: 200;
            color: #1d1d1d
        }
        .des-indoor {
            color: #999999;
            font-size: 16px;
        }
        .roller-bind {
            color: #d80808;
            font-size: 22px;
            width: 100%;
            font-weight: 200;
        }
        .image-gallery-roller {
            cursor: pointer;
            width: 100%;
        }
        .col-example {
            padding: 0 10px;
        }
    }
</style>