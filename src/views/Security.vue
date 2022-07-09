<template>
    <Header />
    <div class="indoor-background"
        :style="{ backgroundImage: 'url(' + require(`@/assets/image/banner-indoor.jpg`) + ')' }">
        <p>SECURITY</p>
    </div>
    <div style="width: 70%; margin: 0px auto;">
        <MDBRow>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product1.jpg" style="width: 100%;" />
                    <p class="title">ROLLER SHUTTERS</p>
                    <p>The roller shutters offer the security, privacy, heat and cold control as well as the total light control.</p>
                    <p>Our roller shutter range is designed for use on windows, sliding doors, bay windows, corner windows and other applications. We currently have 15 colour range available for choice</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product2.jpg" style="width: 100%;" />
                    <p class="title">SECURITY DOORS AND FLY DOORS</p>
                    <p>Screen doors provide a visual deterrent and effective protection against uninvited guests and bothersome bugs. They can be hinged (security doors) or sliding (fly doors).</p>
                    <p>The wide range of grilles in colours and shapes are available to be fitted into all doors as the add-on safety and charming to the house</p>
                    <p>Mesh options include fiberglass, tuffs, aluminum and stainless steel.</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product3.jpg" style="width: 100%;" />
                    <p class="title">FLY SCREEN/INSECT SCREEN</p>
                    <p>Fly Screens are the perfect way to stay bug-free and can be fitted to many different types of windows and openings</p>
                    <p>Frames are 9mm or 11mm in thickness and available in a wide range of standard colorbond colors or can be powder coated in the colour of your choice to match or complement existing window frames at the additional price</p>
                    <p>Mesh options include fiberglass, tuffs, aluminum and stainless steel</p>
                </div>
            </MDBCol>
            <MDBCol sm="6" md="6" lg="6" xl="4">
                <div class="col-example">
                    <img src="@/assets/indoor/product4.jpg" style="width: 100%;" />
                    <p class="title">SECURITY WINDOWS (Security Grills)</p>
                    <p>Security window is non-removable; it offers security for the window openings. It is more economical option compared to the window roller shutters.</p>
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