<template>
<GridLayout>
  <ScrollView animation="false">
    <StackLayout height="auto">

      <FlexboxLayout ref="firstCard" flexDirection="column" justifyContent="space-around"
        marginTop="1%"
        class="settings-card"
      >

        <Label class="settings-title" text="Notifications"
          alignSelf="flex-start"
          marginTop="30"
          marginLeft="25"
        />
        <Label class="settings-subtitle" text="(Recommended)"
          alignSelf="flex-start"
          marginLeft="25"
        />
        <Label class="settings-message" textWrap="true" :text="notificationMsg"
          alignSelf="flex-start"
          marginTop="20"
          marginBottom="5"
          marginLeft="25"
          marginRight="25"
        />


        <!-- <Button @tap="onTapRequestPermission" class="btn" text="Has Permission?"></Button> -->


        <TimePicker @loaded="onPickerLoaded" />

        <FlexboxLayout justifyContent="space-around">
          <Button width="50%" @tap="onTapScheduleNotification" class="btn" text="Schedule"></Button>
          <Button width="50%" @tap="onTapCancelAll" class="btn" text="Remove"></Button>
        </FlexboxLayout>
      </FlexboxLayout>


      <FlexboxLayout ref="secondCard" flexDirection="column" justifyContent="space-around"
        marginTop="50px"
        paddingBottom="50px"
        class="settings-card"
      >

        <Label class="settings-title" text="How to"
          alignSelf="flex-start"
          marginTop="30"
          marginLeft="25"
        />

        <ios>
          <Label
            alignSelf="flex-start"
            marginTop="20"
            marginBottom="5"
            marginLeft="25"
            marginRight="25"
            class="settings-message"
            textWrap="true"
            text="Watch this video to learn how to use Your 5 States app."
          >
            <!-- <FormattedString>
              <Span text="You can use text attributes such as " />
              <Span text="bold, " fontWeight="Bold" />
              <Span text="italic " fontStyle="Italic" />
              <Span text="and " />
              <Span text="underline." textDecoration="Underline" />
            </FormattedString> -->
          </Label>



          <YoutubePlayer id="player" apiKey="AIzaSyB5-ecyDJeRToyxoxvaK6peQzO7R3sph7o" src="IdQK5PsLyq4" height="190" width="100%"

            marginTop="5"
            marginLeft="25"
            marginRight="25"
          />
        </ios>


        <android>
          <Label
            alignSelf="flex-start"
            marginTop="20"
            marginBottom="5"
            marginLeft="25"
            marginRight="25"
            class="settings-message"
            textWrap="true"
            text="Click here to learn how to use the 5 States app."
            @tap="openURL('https://youtu.be/IdQK5PsLyq4')"
          >
          </Label>
        </android>


      </FlexboxLayout>

      <FlexboxLayout ref="thirdCard" flexDirection="column" justifyContent="space-around"
        marginTop="50px"
        paddingBottom="50px"
        class="settings-card end"
      >

        <Label class="settings-title" text="About"
          alignSelf="flex-start"
          marginTop="30"
          marginLeft="25"
        />

        <Label class="settings-subtitle" text="The 5 States"
          alignSelf="flex-start"
          marginLeft="25"
        />

        <Label editable="false"
          alignSelf="flex-start"
          marginTop="20"
          marginBottom="5"
          marginLeft="25"
          marginRight="25"
          class="settings-message"
          textWrap="true"
        >
          <FormattedString>
            <Span text="The 5 States are the qualities identified by " />
            <Span text="Brendan Foley" fontWeight="Bold" />
            <Span text=" as critical to creating meaningful success for people and teams." />
          </FormattedString>
        </Label>

        <Label class="settings-link" text="Web"
          alignSelf="flex-start"
          marginLeft="25"
          marginTop="25"
        />

        <Label class="settings-url" text="www.the5states.com"
          alignSelf="flex-start"
          marginLeft="25"
          @tap="openURL('http://www.the5states.com')"
        />

        <!-- <HtmlView class="settings-url"
        alignSelf="flex-start"
        marginLeft="24"
        html="<a style='color:black;font-size:16px;text-decoration:none;font-family:san-serif; '
        href='https://www.seachangenow.ie/'>www.seachangenow.ie</a>" /> -->

        <Label class="settings-link" text="Mail"
          alignSelf="flex-start"
          marginLeft="25"
          marginTop="20"
        />

        <Label class="settings-url" text="info@the5states.com"
          alignSelf="flex-start"
          marginLeft="25"
          @tap="openURL('mailto:info@the5states.com')"
        />

        <!-- <HtmlView class="settings-url"
        alignSelf="flex-start"
        marginLeft="24"
        html="<a style='color: black; font-size: 16px' href='mailto:info@seachangenow.ie'>info@seachangenow.ie</a>" /> -->
      </FlexboxLayout>



      <FlexboxLayout flexDirection="column" justifyContent="space-around"
        ios:marginTop="50px"
        android:marginTop="70px"
        paddingBottom="50px"
        class="settings-card"
      >
      </FlexboxLayout>

    </StackLayout>
  </ScrollView>
</GridLayout>
</template>

<script>
// require("nativescript-ui-gauge/vue");
import { mapActions } from 'vuex'
// require ("nativescript-local-notifications");
import { LocalNotifications } from "nativescript-local-notifications";

// import { UtilsModule } from "tns-core-modules/utils/utils";

var UtilsModule = require("tns-core-modules/utils/utils");

export default {
  name: "settings",
  props: {
    // count: {
    //   type: Number,
    //   required: true
    // }
  },

  data() {
    return {
      selectedTime: new Date(),
      notificationMsgOn: "Your daily reminder is set at:",
      notificationMsgOff: "You do not have a reminder scheduled. Select a time below and save to schedule a daily reminder.",
      notificationMsg: ""

      // size: 100,
    }
  },
  created(){

    console.log("Notification Scheduled is: " + this.notificationScheduled);

    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
      this.message = "Notification received: " + JSON.stringify(notificationData);
    });
  },
  computed: {

    notificationTime() {
      return this.$store.getters.getNotificationTime;
    },

    notificationScheduled() {

      const notifOn = this.$store.getters.getNotificationScheduled;

      if (notifOn) {
        this.notificationMsg = this.notificationMsgOn;
      }
      else {
        this.notificationMsg = this.notificationMsgOff;
      }

      return notifOn;
    }

    //
    // getHeight() {
    //   let first = this.$refs.firstCard.nativeView.getActualSize().height;
    //   let second = this.$refs.secondCard.nativeView.getActualSize().height;
    //   let third = this.$refs.thirdCard.nativeView.getActualSize().height;
    //
    //   return this.height = first + second + third + 90;
    // }


    // notificationTime() {
    //   return this.$store.getters.getNotificationTime
    // }
      // text() {
      //     return `${this.value.toFixed()}`;
      // },
      // textSize() {
      //     return;
      //     this.height / 3.5;
      // }
  },
  methods: {

    ...mapActions([
      'setNotificationTime',
      'setNotificationScheduled'
    ]),

    openURL(url){
      UtilsModule.openUrl(url);
    },

    onPickerLoaded(args){
      const timePicker = args.object;

      let time = new Date();

      if (this.notificationScheduled) {
        time = new Date(this.notificationTime);
      }

      timePicker.hour = time.getHours();
      timePicker.minute = time.getMinutes();

      timePicker.on("timeChange", (args) => {
        this.selectedTime = args.value;
      });
    },


    // goToPage(page) {
    //   this.$parent.goToPage(page);
    // }

    ///////////////////////////////
    ///////NOTIFICATIONS///////////
    ///////////////////////////////
    onTapScheduleNotification() {


      LocalNotifications.hasPermission().then(granted => {
          if (!granted) {
            alert({
              title: "Notifications Disabled",
              message: "It looks like you didn't allow notifications. Go to phone settings to allow notifications" ,
              okButtonText: "OK"
            });
          }
          else {
            var today = new Date();
            // today.setHours(21);
            // today.setMinutes(10);


            today.setHours(this.selectedTime.getHours());
            today.setMinutes(this.selectedTime.getMinutes());
            console.log(today);

            LocalNotifications.schedule(
                [{
                  id: 2,
                  title: '5 State Tracker',
                  subtitle: 'Have you tracked your states today?',
                  // body: 'The big brown Vue app jumped over the lazy Angular app. The big brown Vue app jumped over the lazy Angular app. The big brown Vue app jumped over the lazy Angular app. The big brown Vue app jumped over the lazy Angular app.',
                  bigTextStyle: false, // Allow more than 1 row of the 'body' text on Android, but setting this to true denies showing the 'image'
                  // color: new Color("green"),
                  // image: "https://images-na.ssl-images-amazon.com/images/I/61mx-VbrS0L.jpg",
                  // thumbnail: "https://2.bp.blogspot.com/-H_SZ3nAmNsI/VrJeARpbuSI/AAAAAAAABfc/szsV7_F609k/s200/emoji.jpg",
                  forceShowWhenInForeground: true,
                  channel: "vue-channel",
                  interval: 'day',
                  at: new Date(today), // 5 seconds from now
                  badge: 1,
                  actions: [{
                      id: "yes",
                      type: "button",
                      title: "Track now (launch app)",
                      launch: true
                    },
                    {
                      id: "no",
                      type: "button",
                      title: "Cancel",
                      launch: false
                    }
                  ]
                }])
              .then(() => {

                this.setNotificationTime(today).catch(() => {
                  alert("An error occurred while setting notification time.");
                });

                this.notificationMsg = this.notificationMsgOn;

                alert({
                  title: "Notification scheduled",
                  message: "You will be reminded to track your states daily at " + this.formatNumber(today.getHours()) + ":" + this.formatNumber(today.getMinutes()),
                  okButtonText: "OK, thanks"
                });
              })
              .catch(error => console.log("doSchedule error: " + error));
          }
        });
    },

    onTapCancelAll() {

      var today = new Date();
      today.setHours(this.selectedTime.getHours());
      today.setMinutes(this.selectedTime.getMinutes());


      LocalNotifications.cancelAll()
        .then(() => {
          alert({
            title: "Notification removed",
            message: "Your daily reminder at "+ this.formatNumber(today.getHours()) + ":" + this.formatNumber(today.getMinutes()) +" has been removed",
            okButtonText: "OK"
          });
          this.notificationMsg = this.notificationMsgOff;
        })
        .catch(error => console.log("doCancelAll error: " + error));
    },

    ///////////////////////////////
    ///////END NOTIFICATIONS///////
    ///////////////////////////////

    formatNumber(num){

      if (num <= 9) {
        num = '0' + num;
      }

      return num;

    }
  }
}
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

</style>
