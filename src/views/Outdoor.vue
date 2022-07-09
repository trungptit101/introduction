<template>
    <Header />
    <div class="indoor-background"
        :style="{ backgroundImage: 'url(' + require(`@/assets/image/banner-indoor.jpg`) + ')' }">
        <p>OUTDOOR</p>
    </div>
    <div style="width: 70%; margin: 0px auto;">
        <MDBRow>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/gallery/awnings/gallery1.jpg" style="width: 100%;" />
                    <p class="title">AWNINGS</p>
                    <p>is used to protect your house and family from harsh Melbourne climate by eliminating sunlight, heat and glare on to your window. Our custom made awnings offer you all kinds of delightful design and finishing options to suit your specific needs.</p>
                    <p>You can choose from the finest quality canvas, sunscreen or acrylic materials in a traditional striped designs or plain fashion colour</p>
                    <p>You can select from a wide range of styles : the traditional automatic awnings, straight drop awnings, fixed guide awnings, wire-guide awnings</p>
                    <p>Those awnings can be operated either manually, with rope and pulley or crank-wider. You can also choose the motorised awnings for a completed ease of use</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/gallery/screen/gallery1.jpg" style="width: 100%;" />
                    <p class="title">ZIPSCREEN </p>
                    <p>The Zipscreen System is the ultimate external screening solution for any outdoor areas and windows. Specifically designed for alfresco entertaining areas such as pergolas, verandahs and balconies, it offers privacy and protection from the sun, wind, rain and insects all year around.</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/gallery/folding/gallery1.jpg" style="width: 100%;" />
                    <p class="title">FOLDING ARM AWNINGS</p>
                    <p>Unlikely other awning designs, the Folding Arm Awning extends horizontally and not vertically, therefore, it is the ideal to be used for decks, patios and balconies.</p>
                    <p>Folding arm awnings can be operated manually using a crank handle.</p>
                    <p>Alternatively, they can be operated by electric powered motors, controlled by hand held remote or by wall mounted switch</p>
                    <p>Optional sun, rain and wind sensors can be incorporated for total ease of use</p>
                </div>
            </MDBCol>
        </MDBRow>
    </div>
    <div class="contact">
        <div>
            <p class="action-content" style="color:#ffffff;">
                <span class="text-react">Reach Out to us now!</span> 
                <span>
                    <router-link 
                        to="/contact"
                        class="btn-contact" 
                        style="border-style: solid; border-width: 2px; border-color: rgb(255, 255, 255); background-color: inherit; color: rgb(255, 255, 255);"
                    > CONTACT 
                    </router-link>
                </span>
            </p>
        </div>
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
        background: center bottom fixed;
        height: 300px;
        margin-bottom: 20px;
        position: relative;
        p {
            position: absolute;
            top: 40%;
            right: 42%;
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
    .contact {
        background-color: #d80808;
        height: 150px;
        .action-content {
            line-height: 150px;
            .text-react {
                font-size: 30px;
                font-weight: 100;
            }
            .btn-contact {
                border-style: solid;
                border-width: 2px;
                border-color: rgb(255, 255, 255);
                background-color: inherit;
                color: rgb(255, 255, 255);
                font-size: 14px;
                line-height: 14px;
                padding: 15px 20px;
                margin-left: 40px;
                font-weight: 200;
                border-radius: 3px;
            }
            .btn-contact:hover {
                background-color: rgb(0 0 0) !important;
                border-color: rgb(0 0 0) !important;
            }
        }
    }
</style>