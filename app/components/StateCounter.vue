<!--
@Author: Mohammed Cherbatji <mo>
@Date:   2019-10-13T12:02:13+01:00
@Filename: StateCounter.vue
@Last modified by:   mo
@Last modified time: 2019-10-16T17:21:11+01:00
-->



<template>
  <GridLayout @loaded="counterLoaded" :height="height" :width="height" @tap="countUp"
  class="margin-auto testerClass"
  >
  <!-- <GridLayout :height="height" :width="height" @touch="touched"> -->
    <RadRadialGauge class="counterContainer">
      <RadialScale v-tkRadialGaugeScales startAngle="-90" sweepAngle="360">
        <ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0">
        </ScaleStyle>

        <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100">
          <BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillBackgroundColor" cap="Round" barWidth="0.25">
          </BarIndicatorStyle>
        </RadialBarIndicator>

        <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" :maximum="value" isAnimated="true">
          <BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillColor" cap="Round" barWidth="0.25">
          </BarIndicatorStyle>
        </RadialBarIndicator>
      </RadialScale>
    </RadRadialGauge>
    <!-- <Label :text="text" :color="textColor" :fontSize="textSize" class="m-x-auto m-y-auto" :marginTop="offset">


    </Label> -->

    <FlexboxLayout justifyContent="space-around" class="counterCon" backgroundColor="#fff">
      <label
        alignSelf="center"
        :class="counterClasses"
        color="#000000"
        ref="counterRef"
        :text="count"
      />
    </FlexboxLayout>



  </GridLayout>


  <!-- <AbsoluteLayout
  class="circle-count m-x-auto m-y-auto"
  ref="circleCount"
  >
  <ios>
    <label
      class="counter m-x-auto m-y-auto"
      :text="formatCount(count)"
    />
  </ios>

  <android>
    <label
      class="counter m-x-auto m-y-auto"
      :text="formatCount(count)"
    />
  </android>
  </AbsoluteLayout> -->

</template>

<script>
// require("nativescript-ui-gauge/vue");
// import { mapActions } from 'vuex'
import { mapGetters, mapActions } from 'vuex';
import {screen} from "tns-core-modules/platform/platform"

export default {
  name: "state-counter",
  props: {
    count: {
      required: true
    }
  },
  data() {
    return {
      size: 100,
      progress: 0,
      offset: 0,
      counterClasses: "counter",
      textColor: "#bfbfc4",
      fillColor: "#FDA458",
      fillBackgroundColor: "#efeff4",
    }
  },
  computed: {
      height() {
          return Math.min(this.size, 250);
      },
      value() {
          return Math.min(Math.floor((this.count/66)*98), 100);
      },

      // text() {
      //     return `${this.value.toFixed()}`;
      // },
      // textSize() {
      //     return;
      //     this.height / 3.5;
      // }

      // count() {
      //   console.log("count: "+this.$store.getters.getState(this.id).count);
      //   return this.$store.getters.getState(this.id).count;
      // },

      // countFormatted() {
      //   // console.log("formatted count: "+ this.formatCount(this.count));
      //   return this.formatCount(this.count);
      // }
  },
  mounted() {

  },
  methods: {

    counterLoaded(){
      if (screen.mainScreen.widthPixels <= 751) {
        this.counterClasses = "counter counter_small";
      }
    },

    formatCount(count){
      // let count = this.count;

      let str = count;

      console.log("COUNT in COUNTER: " + str);

      if (count <= 9) {
        str = '0' + count;
      }

      return str;
    },

    countUp(){
      this.$emit('count-up');
      // this.$refs.counterRef.resetNativeView();
      // this.$forceUpdate();
    },
    touched(args){

      if (args.action === "down") {
        console.log("down from counter");
        this.$emit('count-down')
      }
      else if (args.action === "up") {
        this.$emit('count-up');
      }

    }
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

.sum_count {
  background-color: #0000ff;
  padding: 15px;
}

.margin-auto {
  margin-left: auto;
  margin-right: auto;
}





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

/* .card{
    background-color: #181f31;
    border-radius: 6;
    margin: 200 15 40;
} */


</style>
