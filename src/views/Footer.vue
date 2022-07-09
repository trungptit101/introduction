<template>
  <div>
    <MDBFooter>
      <div class="footer">
        Copyright B Window Covers {{ new Date().getFullYear() }}. All Rights Reserved					
      </div>
    </MDBFooter>
    <div v-if="positionHide" type="button" class="btn-to-top" @click="scrollToTop()">
      <MDBIcon icon="angle-up" iconStyle="fas" style="color: white; margin-top: 11px;" />
    </div>
  </div>
</template>

<script>
import { MDBFooter, MDBIcon } from 'mdb-vue-ui-kit';
export default {
  name: "Footer",
  components: {
    MDBFooter,
    MDBIcon
  },
  data() {
    return {
      scrollPosition: 0,
      positionHide: true
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 200) {
        this.positionHide = true
      } else {
        this.positionHide = false
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
};
</script>

<style lang="scss" scoped>
  .footer {
    background: #2c2e2e;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: left;
    color: #808080;
    font-size: 14px;
    padding-left: 30px;
  }
  .btn-to-top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #d80808 !important;
  }
</style>