<template>
  <header>
    <!-- Navbar -->
    <!-- PC -->
    <MDBNavbar v-if="screenSize >= 992" expand="lg" light bg="white" container position="sticky">
      <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0" center>
        <MDBNavbarItem to="#" class="pt-3 w-100px" :class="{ menu_active: $route.name == 'Home' }">
          <router-link to="/"> HOME </router-link>
        </MDBNavbarItem>
        <MDBNavbarItem 
          to="#" 
          class="pt-3 pr-5 w-100px product" 
          @mouseover="showProductSubMenu1" 
          @mouseleave="hideProductSubMenu1"
        > 

          <span :class="{ menu_active: $route.name == 'Product' }">PRODUCTS</span> 

          <ul v-if="showProductSubMenuFlag1" class="sub-menu clearfix">
            <li 
              @mouseover="showProductSubMenu2(1)" 
              @mouseleave="hideProductSubMenu2(1)"
              style="position: relative;"
            >
              <a href="javascript:void(0)">
                INTERNAL BLINDS 
                <i class="fas fa-angle-right" style="transform: translateY(1px);"></i>
              </a>
              <ul v-if="showProductSubMenuFlag2.internal_blinds" class="sub-menu2">
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'roller_blinds' }}">ROLLER BLINDS</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'vertical_blinds' }}">VERTICAL BLINDS</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'roman_blinds' }}">ROMAN BLINDS</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'venetian_blinds' }}">VENETIAN BLINDS</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'panel_glide_blind' }}">PANEL GLIDE BLINDS</router-link>
                  </a>
                </li>
              </ul>
            </li>
            <li 
              @mouseover="showProductSubMenu2(2)" 
              @mouseleave="hideProductSubMenu2(2)"
              style="position: relative;"
            >
              <a href="javascript:void(0)">
                CURTAINS
                <i class="fas fa-angle-right" style="transform: translateY(1px);"></i>
              </a>
              <ul v-if="showProductSubMenuFlag2.curtains" class="sub-menu2">
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'wave_fold' }}">S-FOLD/WAVE-FOLD</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'pleated' }}">PLEATED</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'eyelet' }}">EYELET</router-link>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/indoor">
                <router-link :to="{ name: 'Product', params: { id: 'plantation_shutters' }}">PLANTATION SHUTTERS</router-link>
              </a>
            </li>
            <li 
              @mouseover="showProductSubMenu2(3)" 
              @mouseleave="hideProductSubMenu2(3)"
              style="position: relative;"
            >
              <a href="javascript:void(0)">
                EXTERNAL AWNINGS
                <i class="fas fa-angle-right" style="transform: translateY(1px);"></i>
              </a>
              <ul v-if="showProductSubMenuFlag2.external_awings" class="sub-menu2">
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'zipscreen' }}">ZIPSCREENS</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'folding' }}">FOLDING</router-link>
                  </a>
                </li>
                <li>
                  <a href="/indoor">
                    <router-link :to="{ name: 'Product', params: { id: 'awnings' }}">AWNINGS</router-link>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/indoor">
                <router-link :to="{ name: 'Product', params: { id: 'roller_shutters' }}">ROLLER SHUTTERS</router-link>
              </a>
            </li>
            <li>
              <a href="/indoor">
                <router-link :to="{ name: 'Product', params: { id: 'security_door' }}">SECURITY DOORS/FLY DOORS</router-link>
              </a>
            </li>
            <li>
              <a href="/indoor">
                <router-link :to="{ name: 'Product', params: { id: 'security_windows' }}">SECURITY WINDOWS</router-link>
              </a>
            </li>
            <li>
              <a href="/indoor">
                <router-link :to="{ name: 'Product', params: { id: 'fly_screen' }}">FLY SCREENS</router-link>
              </a>
            </li>
          </ul>
        </MDBNavbarItem>
        <MDBNavbarItem to="#" class="w-300px">
          <router-link to="/"> <img src="@/assets/logo.png"> </router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="#" class="pt-3 w-100px" :class="{ menu_active: $route.name == 'Gallery' }"> 
          <router-link to="/gallery"> GALLERY </router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="#" class="pt-3 w-100px" :class="{ menu_active: $route.name == 'Contact' }"> 
          <router-link to="/contact"> CONTACT </router-link>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBNavbar>

    <!-- Mobile, Ipad -->
    <MDBNavbar v-if="screenSize < 992" expand="lg" light bg="white" container position="sticky">
      <!-- <img src="@/assets/logo.png" style="margin-left:10%"> -->
      <router-link to="/"> <img src="@/assets/logo.png" style="margin-left:10%"> </router-link>
      <button 
        class="navbar-toggler btn-navbar-toggler" 
        type="button"
        @click="handleShowMobileMenu"
      >
        <i class="fas fa-bars"></i>
      </button>
      <MDBListGroup>
        <MDBListGroupItem tag="a" :class="{ menu_active: $route.name == 'Home' }" action>
          <router-link to="/"> Home </router-link>
        </MDBListGroupItem>
        <MDBListGroupItem 
          tag="a" 
          action  
          style="cursor: pointer;"
        >
          <span 
            @click="handleShowMobileSubMenu" 
            :class="{ menu_active: $route.name == 'Product' }"
          >
            Products
          </span>
          <span 
            @click="handleShowMobileSubMenu" 
            class="fas fa-angle-right mobile-submenu-btn" style="font-size: 12px;float:right;margin-top:-8px;padding:15px;margin-right:-15px;">
          </span>
          <ul style="list-style:none" class="mobile-submenu">
            <li>
              <span href="#" @click="handleShowMobileSubMenu2('internal_blinds')">
                INTERNAL BLINDS <i class="fas fa-angle-right mobile-submenu-btn2 internal_blinds" style="font-size: 12px;"></i>
              </span>
              <ul style="list-style:none" class="mobile-submenu2 internal_blinds">
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'roller_blinds' }}">ROLLER BINDS</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'vertical_blinds' }}">VERTICAL BINDS</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'roman_blinds' }}">ROMAN BINDS</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'venetian_blinds' }}">VENETIAN BINDS</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'panel_glide_blind' }}">PANEL GLIDE BIND</router-link>
                </li>
              </ul>
            </li>
            <li>
              <span href="#" @click="handleShowMobileSubMenu2('curtains')">
                CURTAINS <i class="fas fa-angle-right mobile-submenu-btn2 curtains" style="font-size: 12px;"></i>
              </span>
              <ul style="list-style:none" class="mobile-submenu2 curtains">
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'wave_fold' }}">S-FOLD/WAVE-FOLD</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'pleated' }}">PLEATED</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'eyelet' }}">EYELET</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'plantation_shutters' }}">PLANTATION SHUTTERS</router-link>
            </li>
            <li>
              <span href="#" @click="handleShowMobileSubMenu2('external_awings')">
                EXTERNAL AWINGS <i class="fas fa-angle-right mobile-submenu-btn2 external_awings" style="font-size: 12px;"></i>
              </span>
              <ul style="list-style:none" class="mobile-submenu2 external_awings">
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'zipscreen' }}">ZIPSCREENS</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'folding' }}">FOLDING</router-link>
                </li>
                <li>
                  <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'awnings' }}">AWNINGS</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'roller_shutters' }}">ROLLER SHUTTERS</router-link>
            </li>
            <li>
              <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'security_door' }}">SECURITY DOORS/FLY DOORS</router-link>
            </li>
            <li>
              <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'security_windows' }}">SECURITY WINDOWS</router-link>
            </li>
            <li>
              <router-link @click="handleShowMobileMenu" :to="{ name: 'Product', params: { id: 'fly_screen' }}">FLY SCREENS</router-link>
            </li>
          </ul>
        </MDBListGroupItem>
        <MDBListGroupItem :class="{ menu_active: $route.name == 'Gallery' }" tag="a" action>
          <router-link to="/gallery"> Gallery </router-link>
        </MDBListGroupItem>
        <MDBListGroupItem :class="{ menu_active: $route.name == 'Contact' }" tag="a" action>
          <router-link to="/contact"> Contact </router-link>
        </MDBListGroupItem>
      </MDBListGroup>
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

  </header>
</template>

<script>
import {
  //   MDBBtn,
  MDBNavbar,
  //MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBListGroup, 
  MDBListGroupItem
} from "mdb-vue-ui-kit";
import $ from 'jquery'

export default {
  name: "Header",
  components: {
    // MDBBtn,
    MDBNavbar,
    //MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBListGroup,
    MDBListGroupItem
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleResponsive);
  },
  data() {
    return {
      scrollPosition: 0,
      screenSize: 0,
      //flag for show submenu PC
      showProductSubMenuFlag1: false,
      showProductSubMenuFlag2: {
        internal_blinds: false,
        curtains: false,
        external_awings: false,
      },
      //flag for show submenu Mobile
      showMobileMenu: false,
      showMobileSubMenu: false,
      showMobileSubMenu2: false,
      currentSubmenu2Class: '',
    }
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY;
      var element = document.querySelector('nav.navbar.navbar-light.bg-white.navbar-expand-lg.sticky-top');
      if (this.screenSize > 992) {
        if (this.scrollPosition >= 120 && this.scrollPosition < 230) {
          element.classList.remove('down');
          element.classList.remove('down2');
          element.classList.add('up');   
        } else if (this.scrollPosition >= 230) {
          element.classList.remove('up');
          element.classList.remove('down');
          element.classList.add('down2'); 
        } else {
          element.classList.remove('up');
          element.classList.remove('down2');
          if (this.$route.name == 'Gallery') {
            element.classList.add('down2'); 
          } else {
            element.classList.add('down'); 
          }
        }
      }
    },
    showProductSubMenu1() {
      this.showProductSubMenuFlag1 = true;
    },
    hideProductSubMenu1() {
      this.showProductSubMenuFlag1 = false;
    },
    showProductSubMenu2(index) {
      if (index == 1) {
        this.showProductSubMenuFlag2.internal_blinds = true;
      } else if (index == 2) {
        this.showProductSubMenuFlag2.curtains = true;
      } else if (index == 3) {
        this.showProductSubMenuFlag2.external_awings = true;
      }
    },
    hideProductSubMenu2(index) {
      if (index == 1) {
        this.showProductSubMenuFlag2.internal_blinds = false;
      } else if (index == 2) {
        this.showProductSubMenuFlag2.curtains = false;
      } else if (index == 3) {
        this.showProductSubMenuFlag2.external_awings = false;
      }
    },
    handleResponsive () {
      this.screenSize = window.innerWidth;
    },
    handleShowMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu;
      if (this.showMobileMenu) {
        $('ul.list-group').slideDown();
      } else {
        $('ul.list-group').slideUp();
      }
    },
    handleShowMobileSubMenu () {
      this.showMobileSubMenu = !this.showMobileSubMenu;
      if (this.showMobileSubMenu) {
        $('ul.mobile-submenu').slideDown();
        $('.mobile-submenu-btn').removeClass('fa-angle-right');
        $('.mobile-submenu-btn').addClass('fa-angle-down');
      } else {
        $('ul.mobile-submenu').slideUp();
        $('.mobile-submenu-btn').removeClass('fa-angle-down');
        $('.mobile-submenu-btn').addClass('fa-angle-right');
      }
    },
    handleShowMobileSubMenu2(class_name) {
      if (this.currentSubmenu2Class !== class_name) {
        this.currentSubmenu2Class = class_name;
        this.showMobileSubMenu2 = false;
      }
      this.showMobileSubMenu2 = !this.showMobileSubMenu2;
      $('ul.mobile-submenu2').slideUp();
      $('.mobile-submenu-btn2').removeClass('fa-angle-down');
      $('.mobile-submenu-btn2').addClass('fa-angle-right');
      if (this.showMobileSubMenu2) {
        $('ul.mobile-submenu2.' + class_name).slideDown();
        $('.mobile-submenu-btn2.' + class_name).removeClass('fa-angle-right');
        $('.mobile-submenu-btn2.' + class_name).addClass('fa-angle-down');
      } else {
        $('ul.mobile-submenu2.' + class_name).slideUp();
        $('.mobile-submenu-btn2.' + class_name).removeClass('fa-angle-down');
        $('.mobile-submenu-btn2.' + class_name).addClass('fa-angle-right');
      }
    }
  },
  mounted() {
    this.handleScroll();
    this.handleResponsive();  
  },
};
</script>

<style lang="scss">
  @media screen and (max-width: 768px) {
    .indoor-background {
      height: 300px;
      margin-bottom: 20px;
      position: relative;
      p {
        position: absolute;
        top: 40%;
        right: 30% !important;
        color: #ffffff;
        font-size: 40px !important;
        font-weight: 100;
      }
    }
  }
  .slide-banner {
    .carousel-inner {
      // height: 100vh;
      img {
        max-height: 100vh;
      }
      .carousel-caption {
        bottom: 50%;
        h5 {
          font-size: 40px;
          // color: #4e4d4d;
        }
        p {
          // color: #4e4d4d;
          font-size: 17px;
        }
      }
    }
    .carousel-indicators {
      bottom: 35%;
    }
  }
  .list-group-item-action {
    border-bottom: 1px solid #eaeaea;
    a {
      color: #262626;
    }
  }
  nav.navbar.navbar-light.bg-white.navbar-expand-lg.sticky-top {
    background: rgba(0,0,0,0.4) !important;
    position: fixed;
    width: 100%;
    height: 100px;
    a.router-link-active.router-link-exact-active.nav-link {
      color: #ffffff;
      text-transform: uppercase;
      font-size: 17px;
      font-weight: 100;
      a {
        color: #ffffff;
      }
    }
    .w-300px {
      width: 300px;
    }
    .w-100px {
      width: 100px;
    }
    .menu_active a {
      color: #d80808 !important;
    }
    span.menu_active {
      color: #d80808 !important;
    }
    a:hover {
      color: #d80808 !important;
    }
    li.product {
      position: relative;

    }
    ul.sub-menu {
      width: 280px;
      background: rgba(0,0,0,0.62);
      position: absolute;
      top: 70px;
      left: -15px;
      display: block;
      list-style: unset;
      padding-top: 15px;
      padding-bottom: 15px;
      li {
        text-align: left;
        line-height: 35px;
        a {
          color: white;
        }
      }
    }
    ul.sub-menu2 {
      position: absolute;
      left: 247px;
      width: 250px;
      background: rgba(0,0,0,0.62);
      list-style: unset;
      top: 0px;
    }
    .btn-navbar-toggler {
      position: fixed;
      right: 10%;
      top: 20px;
      color: white;
    }
    ul.list-group {
      position: absolute;
      top: 100px;
      left: 0px;
      width: 100%;
      text-align: left;
      display: none;
      a {
        font-weight: 100;
        text-transform: uppercase;
        font-size: 14px;
      }
      ul.mobile-submenu {
        display: none;
        margin-top: 12px;
        li {
          margin-bottom: 5px;
        }
        ul.mobile-submenu2 {
          display: none;
        }
      }
      a:hover {
        color: black !important;
      }
    }
  }
  .product:hover .sub-menu {
    display: block;
  }
  nav.navbar.navbar-light.bg-white.navbar-expand-lg.sticky-top.up {
    top: -200px;
    transition: 1s;
  }
  nav.navbar.navbar-light.bg-white.navbar-expand-lg.sticky-top.down {
    top: 0px;
    transition: 1s;
  }
  nav.navbar.navbar-light.bg-white.navbar-expand-lg.sticky-top.down2 {
    top: 0px;
    transition: 2s;
    background: #bfbfbf !important;
  }
  .list-group-item-action:hover, .list-group-item-action:focus {
    background-color: white;
  }
</style>