<!--
@Author: Mohammed Cherbatji <mo>
@Date:   2019-10-13T12:02:13+01:00
@Filename: ModalTrophyPage.vue
@Last modified by:   mo
@Last modified time: 2019-10-16T18:10:21+01:00
-->



<template>
  <!-- <FlexboxLayout> -->
  <FlexboxLayout @loaded="trophyLoaded" flexDirection="row" alignContent="center" alignItems="center" >
    <GridLayout>
  <AbsoluteLayout verticalAlignment="middle" horizontalAlignment="center" class="m-x-auto m-y-auto" @tap="$modal.close()">

    <FlexboxLayout android:marginTop="10%" paddingBottom="100" flexDirection="column" justifyContent="space-around"
      class="settings-card"
    >

      <Label class="settings-title" text="Congratulations"
        alignSelf="flex-center"
        marginTop="30"
      />
      <Label class="settings-subtitle" text="You officially have a new habit!"
        alignSelf="flex-center"
        marginTop="8"
      />
      <!-- <Label class="settings-message" textWrap="true" :text="notificationMsg"
        alignSelf="flex-start"
        marginTop="20"
        marginBottom="5"
        marginLeft="25"
        marginRight="25"
      /> -->

    </FlexboxLayout>

    <GridLayout android:marginTop="10%" @tap="$modal.close()" ios:left="120" ios:top="130" android:left="108" android:top="132" ios:height="100" ios:width="110" android:height="120" android:width="135" android:padding="15">
      <RadRadialGauge :class="radialClasses">
        <RadialScale v-tkRadialGaugeScales startAngle="-90" sweepAngle="360">
          <ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0">
          </ScaleStyle>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillBackgroundColor" cap="Round" barWidth="0.25">
            </BarIndicatorStyle>
          </RadialBarIndicator>

          <RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100" isAnimated="true">
            <BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillColor" cap="Round" barWidth="0.25">
            </BarIndicatorStyle>
          </RadialBarIndicator>
        </RadialScale>
      </RadRadialGauge>


      <FlexboxLayout justifyContent="space-around" :class="counterConClasses" backgroundColor="#fff"
                col="0" row="1" android:height="80" android:width="80">
        <!-- <label
          alignSelf="center"
          class="ic orange"
          color="#000000"
          ref="counterRef"
          :text="'ic-trophy' | fonticon"
        /> -->

        <Label
          class="ic orange trophyCounter"
          :text="'ic-trophy' | fonticon"
          alignSelf="center"
          letterSpacing="-0.022"
          color="#fda458"
          fontSize="40px"
        />

      </FlexboxLayout>

      <!-- <Label android:paddingTop="12" ios:marginTop="5" android:marginTop="5" android:width="68" android:height="68"
        class="ic bigger top-icon counter m-x-auto m-y-auto orange"
        :text="'ic-trophy' | fonticon"
      /> -->
    </GridLayout>

</AbsoluteLayout>
</GridLayout>
</FlexboxLayout>
<!-- </FlexboxLayout> -->

</template>

<script>
import { mapActions } from 'vuex'
import {screen} from "tns-core-modules/platform/platform"

export default {
  name: "state-modal",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
      return {
        size: 100,
        textColor: "#bfbfc4",
        fillColor: "#FDA458",
        fillBackgroundColor: "#efeff4",
        radialClasses: "counterContainer trophyRadial",
        counterConClasses: "counterCon"
      };
  },

  computed: {
    height() {
        return Math.min(this.size, 250);
    }
  },
  created() {

  },
  methods: {
    trophyLoaded(){
      if (screen.mainScreen.widthPixels <= 751) {
        this.radialClasses = "counterContainer trophyRadial sm_margin";
        this.counterConClasses = "counterCon sm_margin";
      }
    },
  }
};
</script>

<style scoped>

.settings-title {
  color: #000000;
  font-size: 22px;
  font-family: "Inter";
  font-weight: 700;

}

.settings-subtitle {
  color: #808080;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 600;
}

.settings-link {
  color: #808080;
  font-size: 16px;
  font-family: "Inter";
  font-weight: 700;

}

.settings-url {
  color: #000000;
  font-size: 15px;
  font-family: "Inter";
  font-weight: 400;
}

.settings-message {
  font-size: 18px;
  color:#000000;
}

.android .settings-link {
  font-family: "Inter-Bold";
}

.android .settings-title {
  font-family: "Inter-Bold";
}
.android .settings-subtitle {
  font-family: "Inter-Medium";
}

.end {
  margin-bottom: 50px;
  padding-bottom: 50px;
}

.text-view {
  background: #ffffff;
}

.orange {
  color: #FDA458;
}

/* .bigger {
  font-size: 40px;
  padding:15px;
  text-align: center;
  vertical-align: middle;
} */

/* .android .bigger {
  text-align: center;
  font-size: 50px;
  margin-top: 15px;
  vertical-align: middle;
} */


.m-x-auto {
  horizontal-align: center;
}

.m-y-auto {
  vertical-align: center;
}


.counterCon {
  z-index:1 !important;
  background: white;
  border-radius: 50%;
  width: 90%;
  text-align: center;
}




.counter {
  z-index:2 !important;
  font-family: Inter-ExtraBold, Inter;
  font-weight: 900;
  /* text-overflow: clip; */


  font-size: 10rem;
}

.trophyCounter {
  margin-left: 0px;
  background: white;
  border-radius: 50%;
  width: 90%;

}

.android .trophyCounter {
  margin-left: 0px;
  border-radius: 50%;

}


.android .counterCon {
  z-index:1 !important;
  background: green;
  border-radius: 50%;
  text-align: center;
  margin-left: -30px;
}

.top-icon{
  margin-bottom: 5%;
  color: #000000;
}

.trophyRadial {
}

.sm_margin {
  margin-left: -25px;
}

</style>
