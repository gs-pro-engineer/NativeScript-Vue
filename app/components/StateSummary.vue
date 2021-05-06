<!--
@Author: Mohammed Cherbatji <mo>
@Date:   2019-05-06T16:28:52+01:00
@Filename: StateSummary.vue
@Last modified by:   mo
@Last modified time: 2019-10-16T13:06:29+01:00
-->



<template>
  <!-- <GridLayout
    columns="*,*,*" rows="auto,auto,auto,auto,auto"
    height="auto"
    horizontalAlignment="center"
    verticalAlignment="center"
  > -->
  <GridLayout columns="1*,3*,1*" rows="80"
  verticalAlignment="center"
  >

  <!-- <android>
    <SVGImage
      class="sum_img"
      :src="url+'.svg'"
      col="0"
      width="50%"
      marginTop="5%"
      marginLeft="5%"
      @tap="$emit('click')"
    />
  </android>
  <ios>
    <Image
      class="sum_img"
      :src="url+'.png'"
      col="0"
      width="50"
      marginTop="5%"
      marginLeft="8%"
      @tap="$emit('click')"
    />
  </ios> -->



  <AbsoluteLayout :class="'icons ic-sum m-x-auto m-y-auto' + ' ' + color"
    col="0"
    width="55"
    height="55"
    ios:marginLeft="7%" android:marginLeft="6%"
    @tap="$emit('click')"
   >



    <Label
      class="ic white ic-sum"
      :text="icon | fonticon"
      fontSize="40px"
      marginLeft="8"
      marginTop="2"
    />
  </AbsoluteLayout>




    <Label
      class="sum_title"
      :text="title"
      col="1"
      verticalAlignment="center"
      ios:marginLeft="5%" android:marginLeft="5%"
      letterSpacing="-0.019"
      @tap="$emit('click')"
    />


    <Label
      v-if="count < 66"
      class="sum_count"
      :text="count"
      col="2"
      verticalAlignment="center"
      marginLeft="0%"
      letterSpacing="-0.022"
      @tap="$emit('click')"
    />

    <Label
      v-else
      class="ic orange"
      :text="'ic-trophy' | fonticon"
      col="2"
      verticalAlignment="center"
      marginLeft="1.3%"
      letterSpacing="-0.022"
      color="#fda458"
      fontSize="40px"
    />


  </GridLayout>
</template>

<script>
// require("nativescript-ui-gauge/vue");
// import { mapActions } from 'vuex'

export default {
  name: "state-summary",
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    count: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    shadow: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // goToPage(page) {
    //   this.$parent.goToPage(page);
    // }
  }
}
</script>
<style scoped>


/*
.sum_svg
{
  width: 20px;
  height: 20px;
}

.sum_title
{
  text-align: left;
} */

.sum_img {
  /* padding-top: 10px; */
}

/* .sum_title {
  color: red;
  font-size: 26px;
  letter-spacing: -0.019em;
  line-height: 34px;
  font-weight: 400 !important;
} */

/* .sum_count {
  background-color: #0000ff;
} */

.tap-target {
  padding-top: 13;
  padding-bottom: 13;
  padding-left: 16;

  label {
    min-width: 200;
  }
}

.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}


.icons {
    padding-top: 8px;
    width: 80px;
    height: 80px;
    border-radius: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 14px 20px rgba(48, 65, 154, 0.4);
    box-sizing: border-box;
    font-size: 52px;
    transition: 0.3s;

    font-family: 'SeachangeNow';
}

.ic-sum{
  text-align: center;
}

/* .card{
    background-color: #181f31;
    border-radius: 6;
    margin: 200 15 40;
} */

.orange {
  color: #fda458;
  background-color: #fda458;
}

</style>
