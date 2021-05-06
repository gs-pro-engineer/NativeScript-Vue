<!--
@Author: Mohammed Cherbatji <mo>
@Date:   2019-10-13T11:24:38+01:00
@Filename: App.vue
@Last modified by:   mo
@Last modified time: 2019-10-16T19:10:35+01:00
-->



<template>
    <Page @loaded="onPageLoaded" ref="page" actionBarHidden="true">
      <StackLayout class="container" ref="pagerContainer">
        <StackLayout width="auto" orientation="horizontal">
            <Label
              v-if="displayBackBtn"
              horizontalAlignment="left"
              class="ic big top-icon"
              :text="'ic-back' | fonticon"
              marginTop="20"
              android:marginTop="10"
              marginLeft="11"
              width="50%"
              @tap="goToPage(0)"
            />
            <Label
              v-else
              horizontalAlignment="left"
              class="ic big top-icon"
              text=""
              marginTop="20"
              android:marginTop="10"
              marginLeft="11"
              width="50%"
            />

          <ios>
            <Label
              v-if="displaySettingsBtn"
              horizontalAlignment="right"
              class="ic big top-icon"
              :text="'ic-settings' | fonticon"
              marginTop="20"
              marginLeft="33%"
              width="33%"
              @tap="goToPage(settingsPage)"
            />
            <Label
              v-else
              horizontalAlignment="right"
              class="ic big top-icon"
              text=""
              marginTop="20"
              marginLeft="33%"
              width="33%"
            />
          </ios>
          <android>
            <Label
              v-if="displaySettingsBtn"
              horizontalAlignment="right"
              class="ic big top-icon"
              :text="'ic-settings' | fonticon"
              marginTop="10"
              marginLeft="33%"
              width="33%"
              @tap="goToPage(settingsPage)"
            />
            <Label
              v-else
              horizontalAlignment="right"
              class="ic big top-icon"
              text=""
              marginTop="10"
              marginLeft="33%"
              width="33%"
            />
          </android>


        </StackLayout>




        <!-- <android>
          <SVGImage
            class="ic big settings-icon"
            src="settings.svg"
            horizontalAlignment="right"
            marginRight="20"
            marginTop="20"
          />
        </android>
        <ios>
          <Image
            class="ic big settings-icon"
            src="settings.png"
            horizontalAlignment="right"
            marginRight="20"
            marginTop="20"
          />
        </ios> -->



        <Label
          ref="titleView"
          class="title"
          :text="current.name"
          alignSelf=""
          letterSpacing="-0.022"
          marginLeft="20"
          android:marginTop="-20"
        />
        <StackLayout android:height="50" ref="subtitleContainer" class="subtitleContainer" >
          <Label
            ref="subtitleView"
            class="subtitle"
            :text="current.sub"
            alignSelf="left"
            letterSpacing="-0.001"
            marginTop="-4"
            marginLeft="14"
            marginRight="14"
            textWrap="true"

          />
        </StackLayout>


        <Pager cache="false" :class="mainPagerClasses" height="100%" v-bind:selectedIndex="currentPagerIndex"
        @selectedIndexChange="onIndexChanged($event)" transformer="none">
          <!-- <v-template>
          <GridLayout class="pager-item" rows="auto, *" columns="*">
            <Label :text="item.title"></Label>
            <Image stretch="fill" row="1" :src="item.image"></Image>
          </GridLayout> -->

           <!-- <PagerItem>

            <Label class="test" text="fff" />
            <Label class="ic big blue text-gradient" :text="'ic-i' | fonticon" />
            <Label class="ic big" :text="'ic-c' | fonticon" />
            <Button @tap="onTapHasPermission" class="btn" text="Has Permission?"></Button>
            <Button @tap="onTapScheduleNotification" class="btn" text="Schedule Notification"></Button>
            <Button @tap="onTapCancelAll" class="btn" text="Cancel notifications"></Button>
            <Label class="message" :text="message" textWrap="true"></Label>
          </PagerItem> -->
          <PagerItem>
            <StackLayout class="margin-auto">
              <StateSummary
                v-on:click="goToPage(1)"
                :url="svgFolder+state(1).img"
                :title="state(1).name"
                icon="ic-i"
                color="blue"
                :shadow="stateSummaryShadow"
                :count="formatCount(state(1).count)"
              />
              <StateSummary
                v-on:click="goToPage(2)"
                :url="svgFolder+state(2).img"
                :title="state(2).name"
                icon="ic-c"
                color="teale"
                :shadow="stateSummaryShadow"
                :count="formatCount(state(2).count)"
              />
              <StateSummary
                v-on:click="goToPage(3)"
                :url="svgFolder+state(3).img"
                :title="state(3).name"
                icon="ic-ce"
                color="green"
                :shadow="stateSummaryShadow"
                :count="formatCount(state(3).count)"
              />
              <StateSummary
                v-on:click="goToPage(4)"
                :url="svgFolder+state(4).img"
                :title="state(4).name"
                icon="ic-v"
                color="red"
                :shadow="stateSummaryShadow"
                :count="formatCount(state(4).count)"
              />
              <StateSummary
                v-on:click="goToPage(5)"
                :url="svgFolder+state(5).img"
                :title="state(5).name"
                icon="ic-s"
                color="purple"
                :shadow="stateSummaryShadow"
                :count="formatCount(state(5).count)"
              />
            </StackLayout>
            </PagerItem>
            <PagerItem>
              <StackLayout class="margin-auto">
                <StateBox :item="state(1)" ref="stateBox1"
                v-on:set-editing="setEditing(1)"
                marginBottom="-45"
                />
                <!-- v-on:refresh="reRender()" -->
                <StateCounter
                  v-shadow="stateCounterShadow"
                  :count="formatCount(state(1).count)"
                  class="countz"
                  v-on:count-up="countUp(1)"
                  v-on:count-down="countDown"
                />
              </StackLayout>
            </PagerItem>
            <PagerItem>
              <StackLayout class="margin-auto">
                <StateBox :item="state(2)" ref="stateBox2"
                v-on:set-editing="setEditing(2)"
                marginBottom="-45"
                />
                <StateCounter
                  v-shadow="stateCounterShadow"
                  :count="formatCount(state(2).count)"
                  class="countz"
                  v-on:count-up="countUp(2)"
                  v-on:count-down="countDown"
                />
              </StackLayout>
            </PagerItem>
            <PagerItem>
              <StackLayout class="margin-auto">
                <StateBox :item="state(3)" ref="stateBox3"
                v-on:set-editing="setEditing(3)"
                marginBottom="-45"
                />
                <StateCounter
                  v-shadow="stateCounterShadow"
                  :count="formatCount(state(3).count)"
                  class="countz"
                  v-on:count-up="countUp(3)"
                  v-on:count-down="countDown"
                />
              </StackLayout>
            </PagerItem>
            <PagerItem>
              <StackLayout class="margin-auto">
                <StateBox :item="state(4)" ref="stateBox4"
                v-on:set-editing="setEditing(4)"
                marginBottom="-45"
                />
                <StateCounter
                  v-shadow="stateCounterShadow"
                  :count="formatCount(state(4).count)"
                  class="countz"
                  v-on:count-up="countUp(4)"
                  v-on:count-down="countDown"
                />
              </StackLayout>
            </PagerItem>
            <PagerItem>
              <StackLayout class="margin-auto">
                <StateBox :item="state(5)" ref="stateBox5"
                v-on:set-editing="setEditing(5)"
                marginBottom="-45"
                />
                <StateCounter
                  alignSelf="center"
                  v-shadow="stateCounterShadow"
                  :count="formatCount(state(5).count)"
                  class="countz"
                  v-on:count-up="countUp(5)"
                  v-on:count-down="countDown"
                />
              </StackLayout>
            </PagerItem>
            <PagerItem>
              <Settings />
            </PagerItem>

            <!-- <PagerItem>
              <SVGImage src="~/assets/images/firefox.svg" />
            </PagerItem>
            <PagerItem>
              <Label class="" text="hello" textWrap="true"></Label>
            </PagerItem> -->

        </Pager>

      </StackLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<script>
import { alert } from "tns-core-modules/ui/dialogs";
import { Color } from "tns-core-modules/color";
import * as enums from "tns-core-modules/ui/enums";
import ModalTrophy from "./ModalTrophyPage";
import {screen} from "tns-core-modules/platform/platform"

// import * as utils from "utils/utils";
// import {screen} from "tns-core-modules/platform/platform"
// import platformModule from "tns-core-modules/platform";


// import { Pager } from "nativescript-pager/vue";

import StateBox from './StateBox.vue';
import StateCounter from "./StateCounter";

import StateSummary from './StateSummary.vue';
import { mapGetters, mapActions } from 'vuex';
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
// import { mapActions } from 'vuex'
import Settings from './SettingsPage.vue';

import { ShapeEnum } from "nativescript-vue-shadow";


import { Vibrate } from "nativescript-vibrate";

export default {
  components: {
    StateBox,
    StateSummary,
    Settings,
    StateCounter
  },
  data() {
    return {
      message: "Tap a button above..",
      currentPagerIndex: 0,
      summaryTitle: "My 5 States Tracker",
      summarySubtitle: "It takes between 60-90 days to create behavioural change - go for it!",
      svgFolder: "~/assets/images/",
      current: {
        name: "",
        sub: "",
        color: ""
      },
      settingsTitle: "Settings",
      settingsSubtitle: "Modify your app experience",
      settingsPage: 6,
      displayBackBtn: false,
      displaySettingsBtn: true,

      textAnimationBefore: null,
      textAnimationAfter: null,
      card1Size: { width: 0, height: 0},
      card2Size: { width: 0, height: 0},
      card3Size: { width: 0, height: 0},
      card4Size: { width: 0, height: 0},
      card5Size: { width: 0, height: 0},
      countMax: 66,
      today: new Date(),
      defaultElevation: 10,
      statesEditing: [0,0,0,0,0],
      pagerKey: 1,
      mainPagerClasses: "main-pager",

      stateCounterShadow: {
        elevation: 10,
        shape: ShapeEnum.OVAL
      },
      stateSummaryShadow: {
        elevation: 5,
        shape: ShapeEnum.RECTANGLE
      }
    };
  },

  watch: {
    currentPagerIndex: function () {
      if (this.currentPagerIndex === 0) {
        this.displayBackBtn = false;
        this.displaySettingsBtn = true;
      }
      else if (this.currentPagerIndex === this.settingsPage) {
        this.displayBackBtn = true;
        this.displaySettingsBtn = false;
      }
      else {
        this.displayBackBtn = true;
        this.displaySettingsBtn = true;
      }
    }
  },

  computed: {
    // ...mapGetters({
    //   statesList: 'getStates'
    // })
    state() {
      return id => this.$store.getters.getState(id)
    }
  },

  created() {

    this.current.name = this.summaryTitle;
    this.current.sub = this.summarySubtitle;
    this.current.color = this.state(1).color;

    this.stateCounterShadow.elevation = this.defaultElevation;

    // console.log(`SCREEN.mainScreen.scale ${platformModule.screen.mainScreen.scale}`);

  },

  mounted: function () {

  },


  methods: {

    onPageLoaded(){
      if (screen.mainScreen.widthPixels <= 751) {
        this.mainPagerClasses = "main-pager main-pager_small";
      }

    },

    showTrophy(state) {

      const modalOptions = {
          props: {item: state},
          fullscreen: false,
          animated: true,
          stretched: false,
          dimAmount: 0.5,
          dismissEnabled: true
        };

        this.$showModal(ModalTrophy, modalOptions);
    },

    countDown(){

      console.log("down from app");
      this.stateCounterShadow.elevation = 2;
    },

    getKey(stateNum){
      // console.log(`id_${this.state(stateNum).id}_${this.state(stateNum).count}`);
      return `id_${this.state(stateNum).id}_${this.state(stateNum).count}`
    },

    countUp(stateNum) {

      this.stateCounterShadow.elevation = this.defaultElevation;

      // this.animateCounterTap();

      let itemDate = new Date (this.state(stateNum).dateIncremented)

      this.today.setHours(0,0,0,0);
      console.log('Today: ', this.today);
      console.log('Item Date: ', itemDate);
      console.log('Greater? ', (itemDate < this.today));

      // this.updateCounter(this.item).catch(() => {
      //   alert("An error occurred while updating the counter.");
      // });

      // if (itemDate < this.today && this.state(stateNum).count < this.countMax) {
      //   this.updateCounter(this.state(stateNum)).catch(() => {
      //     alert("An error occurred while updating the counter.");
      //   });
      // }

      // if (this.state(stateNum).count < this.countMax) {

      if (itemDate < this.today && this.state(stateNum).count < this.countMax) {
        console.log(itemDate);
        this.updateCounter(this.state(stateNum)).catch(() => {
          alert("An error occurred while updating the counter.");
        });

        new Vibrate().vibrate(300);

        if (this.state(stateNum).count === this.countMax) {
          this.showTrophy(this.state(stateNum));
        }
      }
      else if (this.state(stateNum).count === this.countMax) {
        this.showTrophy(this.state(stateNum));
      }
      else {
        alert({
          title: "Already Tracked",
          message: "You have already tracked today's "+ this.state(stateNum).name +" progress",
          okButtonText: "Ok"
        }).then(() => {
          console.log("Alert dialog closed");
        });
      }

    },

    goToPage(page) {
      console.log(page);
      this.currentPagerIndex = page;
    },

    formatCount(count){

      if (count <= 9) {
        count = '0' + count;
      }

      return count;

    },

    setEditing(num){
      this.statesEditing[num-1] = 1;

      console.log(this.$refs.pagerContainer.nativeView);

      // this.$refs["stateBox"+num].$refs.editBtn.nativeView.text = "tester";
    },

    onIndexChanged(index) {

      for (var i = 0; i < 5; i++) {
        if (this.statesEditing[i]) {
          this.$refs["stateBox"+(i+1)].$refs.editTextView.nativeView.dismissSoftInput();
        }
      }

      this.currentPagerIndex = index;

      this.animateBackground();
      this.defineAnimations();



        // this.current = this.items[event.value];
        //
        // this.animateBackground();
        if (!this.textAnimationBefore.isPlaying) {
            this.textAnimationBefore.play()
                .then(() => {

                  if (this.currentPagerIndex === 0) {
                    this.current.name = this.summaryTitle;
                    this.current.sub = this.summarySubtitle;
                  }
                  else if (this.currentPagerIndex <= 5) {

                    console.log(this.currentPagerIndex);

                    this.current.name = this.state(this.currentPagerIndex).name;
                    this.current.sub = this.state(this.currentPagerIndex).sub;
                    this.current.color = this.state(this.currentPagerIndex).color;
                  }
                  else if (this.currentPagerIndex === this.settingsPage) {
                    this.current.name = this.settingsTitle;
                    this.current.sub = this.settingsSubtitle;
                  }
                  else {
                    this.current.name = "";
                    this.current.sub = "";
                    this.current.color = "#ffffff";
                  }


                })
                .then(() => {
                    this.textAnimationAfter.play();
                });
        }
    },


    defineAnimations() {
        const subtitleViewEl = this.$refs.subtitleView.nativeView;
        const titleViewEl = this.$refs.titleView.nativeView;
        const textAnimationDefinitionsBefore = new Array();
        const textAnimationDefinitionsAfter = new Array();

        const commonAnimationProps = {
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
        };

        textAnimationDefinitionsBefore.push({
            ...commonAnimationProps,
            target: titleViewEl,
            // translate: { x: 60, y: 0 },
            opacity: 0
        });

        textAnimationDefinitionsBefore.push({
            ...commonAnimationProps,
            target: subtitleViewEl,
            // scale: { x: 0, y: 0 },
            opacity: 0,
            // rotate: 60
        });

        textAnimationDefinitionsAfter.push({
            ...commonAnimationProps,
            target: titleViewEl,
            // translate: { x: 0, y: 0 },
            opacity: 1
        });

        textAnimationDefinitionsAfter.push({
            ...commonAnimationProps,
            target: subtitleViewEl,
            // scale: { x: 1, y: 1 },
            duration: 950,
            opacity: 1,
            // rotate: 0
        });


        this.textAnimationBefore = new Animation(textAnimationDefinitionsBefore);
        this.textAnimationAfter = new Animation(textAnimationDefinitionsAfter);
    },

    animateBackground() {
        // const pageViewEl = this.$refs.pagerContainer.nativeView;
        //
        // pageViewEl.animate({
        //     backgroundColor: new Color(this.current.color),
        //     duration: 500
        // });
    },

    reRender() {
      this.pagerKey++;
      // this.$forceUpdate();
    },

    ...mapActions([
      'updateCounter',
    ]),

    // getName(){
    //
    // }
  }


}
</script>

<style >
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message2 {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.title {
    font-size: 30px;
    margin-bottom: 0;
    font-weight: 700;
    color: #000;
}

.android .title {
  font-size: 24px;
}

.android .subtitleContainer {
  height: 180px;
}

.subtitleContainer {
    margin-top: 0px;
    width: auto;
    margin-left: 18px;
    float: left;
    margin-right: 20px;
    height: 130px;
    word-wrap: normal;
}

.android .subtitleContainer {
  height: 180px;
}

.subtitle {
    font-size: 18px;
    color: #808080;
    float: left;
    left: 0;
    font-weight: 500;
    word-wrap: normal;
    vertical-align: top;
}
.message {
  font-size: 14;
  margin: 16;
  color: #53ba82;
}

.big {
  font-size: 30px;
}

.container{
  background: #f0f4fa;
  /* font-family: "Inter"; */
  /* padding-left: 22px;
  padding-right: 22px; */
}

Button.btn {
  font-size: 14;
  border-radius: 3;
  border-width: 2;
  border-color: #63d4a5;
  color: #63d4a5;
  padding: 12;
  margin: 16;
}

.state-editable {
    text-align: left;
}


.counterContainer {
  z-index:10 !important;
  /* background: green;
  border-radius: 50%; */
  /* display: inline-block; */
  box-shadow: 0px 10px 20px rgba(54, 54, 177, 0.5);
  text-align: center;
}

.testerClass {
  /* background: white;
  border-radius: 50%;
  background-size:cover; */
  text-align: center;

  z-index: 999;
}


.counterCon {
  z-index:1 !important;
  background: white;
  border-radius: 50%;
  /* min-width: 100%; */
  text-align: center;
}


.counter {
  z-index:2 !important;
  font-family: Inter-ExtraBold, Inter;
  font-weight: 900;

  font-size: 24rem;
  font-size: 22vw;
}

.counter_small {

  font-size: 24rem;
  font-size: 22vw;
}

.ios .counter {
  /* font-size: 30px; */
  /* font-weight: 900; */
}

.android .counterContainer {
  width: inherit;
}

.android .counterCon {
  background: blue;
}

.saveText {
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  border: 1px white;
}


.countz {
  z-index: 999;
}

.main-pager {
    margin-top: 1.5%;
    /* padding-left: 70px; */
    /* padding-right: 22px; */
}

.main-pager_small {
    margin-top: 0.2%;
    /* padding-left: 70px; */
    /* padding-right: 22px; */
}

.android .main-pager_small {
    margin-top: 1%;
    /* padding-left: 70px; */
    /* padding-right: 22px; */
}

.white {
  color: #ffffff;
}



</style>
