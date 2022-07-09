<template>
    <Header />
    <div class="indoor-background"
        :style="{ backgroundImage: 'url(' + require(`@/assets/image/banner-indoor.jpg`) + ')' }">
        <p>INDOOR</p>
    </div>
    <div style="width: 70%; margin: 0px auto;">
        <MDBRow>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product1.jpg" style="width: 100%;" />
                    <p class="title">ROLLER BLINDS</p>
                    <p>are practical and affordable. Choose or use combination a wide variety of 100% blockout, sheer and light filtering fabrics to achieve the highest level of light control and UV/heat protection.</p>
                    <p>Our Roller Blind system is chain driven that allows the up & down operation to be easy and smoothly. Chains are available in metal and stainlesssteel which are even stronger lasting than plastics. Alternatively, Roller Blind can be motorized and operated via remote control or wall switch.</p>
                    <p>The aluminum bottom rail in a wide range of colours is available to enhance the perfect look of the blind</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product2.jpg" style="width: 100%;" />
                    <p class="title">VERTICAL BLINDS </p>
                    <p>are elegant and durable. Available in a wide range of colours and fabrics, vertical blinds are a smart choice for sliding door and large windows as the blades can be pulled to either side or drawn all to one side to allow optimum light. Simplicity in operation, low maintenance and easy to clean are add-on feature of the vertical blinds</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product3.jpg" style="width: 100%;" />
                    <p class="title">ROMAN BLINDS</p>
                    <p>have the most elegant and classic look. A vast selection of colour, design and texture in fabrics is available to suit individual taste and every application.Cord-lock operation with wall-mounted cleat is preferred whereas chain drive with Metal Chain and Aluminium head rail can be as another option for ease of operation</p>
                    <p>Remote control motorised operation is also available for the convenient choice</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product4.jpg" style="width: 100%;" />
                    <p class="title">VENETIAN BLINDS</p>
                    <p>Our quality range of Venetian blinds provide you the option to choose from the most fashionable basswood timber, aluminium or timber-look material, a vast of beautiful colours and a variety of different slat widths to suit a variety of home environments.</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product5.jpg" style="width: 100%;" />
                    <p class="title">PANEL GLIDE BLIND</p>
                    <p>Panel blinds are a stylish modern alternative to vertical blinds and are an ideal choice for sliding doors and wide windows, and can also used as perfect room divider.</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product6.jpg" style="width: 100%;" />
                    <p class="title">CURTAINS</p>
                    <p>Curtains offer a diverse range of fabrics, colours, prints and floral. There are also no limitations on styles and shapes, from elegant and formal styles to pretty and casual to suit any room.</p>
                    <p>Adding on the decorator rods, pelmets, swags and tails, curtains are luxurious and bring a sense of style to any home</p>
                </div>
            </MDBCol>
        </MDBRow>
    </div>
    <Footer />
</template>
<script>
import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import { MDBCol, MDBRow } from 'mdb-vue-ui-kit';
export default {
    name: "Indoor",
    components: { Header, Footer, MDBCol, MDBRow },
    data() {
        return {
            
        };
    },
};
</script>

<style lang="scss" scoped>
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