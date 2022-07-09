<template>
    <Header />
    <div class="indoor-background"
        :style="{ backgroundImage: 'url(' + require(`@/assets/image/banner-indoor.jpg`) + ')' }">
        <p>PRODUCTS</p>
    </div>
    <p class="title">{{ itemsBanners.title }}</p>
    <div class="product_carousel">
        <MDBCarousel v-model="carousel" :items="itemsBanners.data" :indicators="false" class="slide-banner-product" v-if="itemsBanners.data" />
    </div>
    <br><br>
    <div class="col-example" style="width: 70%; margin: 0px auto;">
        <p>{{ itemsBanners.description }}</p>
    </div>
    <br>
    <Footer />
</template>
<script>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import { MDBCarousel } from 'mdb-vue-ui-kit'
export default {
    name: "Indoor",
    components: { Header, Footer, MDBCarousel },
    data() {
        return {
            itemsBanners: {
                title: 'ROLLER BLINDS',
                description: 'are practical and affordable. Choose or use combination a wide variety of 100% blockout, sheer and light filtering fabrics to achieve the highest level of light control and UV/heat protection. Our Roller Blind system is chain driven that allows the up & down operation to be easy and smoothly. Chains are available in metal and stainlesssteel which are even stronger lasting than plastics. Alternatively, Roller Blind can be motorized and operated via remote control or wall switch. The aluminum bottom rail in a wide range of colours is available to enhance the perfect look of the blind',
                data: [
                    {
                        src: require("@/assets/gallery/roller/gallery1.jpg"),
                        interval: 2000,
                    },
                    {
                        src: require("@/assets/gallery/roller/gallery2.jpg"),
                        interval: 2000,
                    },
                    {
                        src: require("@/assets/gallery/roller/gallery3.jpg"),
                        interval: 2000,
                    },
                    {
                        src: require("@/assets/gallery/roller/gallery4.jpg"),
                        interval: 2000,
                    }
                ]
            },
            key: 0
        };
    },
    mounted(){
        this.getListCarousel()
    },
    watch: { 
        '$route.params.id': function() {
            this.getListCarousel()
        }
    },
    methods: {
        getListCarousel() {
            switch (this.$route.params.id) {
                case 'roller_blinds':
                    this.itemsBanners = {
                        title: 'ROLLER BLINDS',
                        description: 'are practical and affordable. Choose or use combination a wide variety of 100% blockout, sheer and light filtering fabrics to achieve the highest level of light control and UV/heat protection. Our Roller Blind system is chain driven that allows the up & down operation to be easy and smoothly. Chains are available in metal and stainlesssteel which are even stronger lasting than plastics. Alternatively, Roller Blind can be motorized and operated via remote control or wall switch. The aluminum bottom rail in a wide range of colours is available to enhance the perfect look of the blind',
                        data: [
                            {
                                src: require("@/assets/gallery/roller/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/roller/gallery2.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/roller/gallery3.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/roller/gallery4.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'vertical_blinds':
                    this.itemsBanners = {
                        title: 'VERTICAL BLINDS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/gallery/vertical/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/vertical/gallery2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'roman_blinds':
                    this.itemsBanners = {
                        description: 'Panel blinds are a stylish modern alternative to vertical blinds and are an ideal choice for sliding doors and wide windows, and can also used as perfect room divider.',
                        title: 'ROMAN BLINDS',
                        data: [
                            {
                                src: require("@/assets/gallery/roman/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/roman/gallery2.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/roman/gallery3.jpg"),
                                interval: 2000,
                            },
                        ]
                    }
                    break;
                case 'venetian_blinds':
                    this.itemsBanners = {
                        title: 'VENETIAN BLINDS',
                        description: 'have the most elegant and classic look. A vast selection of colour, design and texture in fabrics is available to suit individual taste and every application.Cord-lock operation with wall-mounted cleat is preferred whereas chain drive with Metal Chain and Aluminium head rail can be as another option for ease of operation. Remote control motorised operation is also available for the convenient choice',
                        data: [
                            {
                                src: require("@/assets/gallery/venetian/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/venetian/gallery2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'panel_glide_blind':
                    this.itemsBanners = {
                        title: 'PANEL GLIDE BLINDS',
                        description: 'Panel blinds are a stylish modern alternative to vertical blinds and are an ideal choice for sliding doors and wide windows, and can also used as perfect room divider.',
                        data: [
                            {
                                src: require("@/assets/panel/picture1.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'wave_fold':
                    this.itemsBanners = {
                        title: 'S-FOLD/WAVE-FOLD',
                        description: 'Unlikely other awning designs, the Folding Arm Awning extends horizontally and not vertically, therefore, it is the ideal to be used for decks, patios and balconies. Folding arm awnings can be operated manually using a crank handle. Alternatively, they can be operated by electric powered motors, controlled by hand held remote or by wall mounted switch. Optional sun, rain and wind sensors can be incorporated for total ease of use',
                        data: [
                            {
                                src: require("@/assets/wave/picture1.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'pleated':
                    this.itemsBanners = {
                        title: 'PLEATED',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/pleated/picture1.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'eyelet':
                    this.itemsBanners = {
                        title: 'EYELET',
                        description: 'The Zipscreen System is the ultimate external screening solution for any outdoor areas and windows. Specifically designed for alfresco entertaining areas such as pergolas, verandahs and balconies, it offers privacy and protection from the sun, wind, rain and insects all year around.',
                        data: [
                            {
                                src: require("@/assets/eyelet/picture1.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'plantation_shutters':
                    this.itemsBanners = {
                        title: 'PLANTATION SHUTTERS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/gallery/palentino/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/palentino/gallery2.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/palentino/gallery3.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'zipscreen':
                    this.itemsBanners = {
                        title: 'ZIPSCREENS',
                        description: 'You can select from a wide range of styles : the traditional automatic awnings, straight drop awnings, fixed guide awnings, wire-guide awnings. Those awnings can be operated either manually, with rope and pulley or crank-wider. You can also choose the motorised awnings for a completed ease of use',
                        data: [
                            {
                                src: require("@/assets/gallery/screen/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/screen/gallery2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'folding':
                    this.itemsBanners = {
                        title: 'FOLDING',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/gallery/folding/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/folding/gallery2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'awnings':
                    this.itemsBanners = {
                        title: 'AWNINGS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/gallery/folding/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/folding/gallery2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'roller_shutters':
                    this.itemsBanners = {
                        title: 'ROLLER SHUTTERS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/shutter/picture1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/shutter/picture2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'security_door':
                    this.itemsBanners = {
                        title: 'SECURITY DOORS/FLY DOORS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/gallery/security/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/security/gallery2.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/security/gallery3.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/security/gallery4.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'security_windows':
                    this.itemsBanners = {
                        title: 'SECURITY WINDOWS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/gallery/security/gallery1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/security/gallery2.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/security/gallery3.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/gallery/security/gallery4.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                case 'fly_screen':
                    this.itemsBanners = {
                        title: 'FLY SCREENS',
                        description: 'Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room. Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home',
                        data: [
                            {
                                src: require("@/assets/fly/picture1.jpg"),
                                interval: 2000,
                            },
                            {
                                src: require("@/assets/fly/picture2.jpg"),
                                interval: 2000,
                            }
                        ]
                    }
                    break;
                default:
                    break;
            }
        }
    }
};
</script>
<style lang="scss">
    .slide-banner-product {
        img {
            width: 1000px !important;
            max-height: 600px !important;
            margin: 0px auto;
        }
    }
</style>
<style lang="scss" scoped>
    .product_carousel {
        min-height: 400px;
        width: 100%;
    }
    @media screen and (min-width: 1000px) {
        .product_carousel {
            width: 1000px;
            margin: 0px auto;
        }
    }
    .title {
        text-align: center;
        font-size: 50px;
        font-weight: 100;
    }
    .indoor-background {
        height: 300px;
        margin-bottom: 20px;
        position: relative;
        p {
            position: absolute;
            top: 40%;
            right: 43%;
            color: #ffffff;
            font-size: 50px;
            font-weight: 100;
        }
    }
    .col-example {
        .title {
            margin-top: 20px;
            font-weight: 500;
        }
        p {
            font-weight: 100;
        }
    }
</style>