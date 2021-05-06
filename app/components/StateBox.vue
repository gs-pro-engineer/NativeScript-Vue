<!--
@Author: Mohammed Cherbatji <mo>
@Date:   2019-10-13T12:02:13+01:00
@Filename: StateBox.vue
@Last modified by:   mo
@Last modified time: 2019-10-16T18:58:38+01:00
-->

<template>

  <GridLayout
  horizontalAlignment="center"
  verticalAlignment="top"
  height="auto"
    columns="*, *" rows="auto, auto, auto"
    :class="'margin-auto insights-blue ' + item.color"
    ref="stateCard"
  >
      <Label
        class="ic big-white"
        :text="'ic-'+item.img | fonticon"
        row="0" col="0"
        verticalAlignment="top"
        horizontalAlignment="left"
        marginLeft="20" marginTop="20"
      />

      <!-- <Label
        v-if="editingMode"
        class="saveText"
        :text="btnText"
        row="0" col="1"
        verticalAlignment="top"
        horizontalAlignment="right"
        marginRight="20"
        marginTop="20"
        ref="saveBtn"
        @tap="editState()"
        style="color:#ffffff;"
      /> -->

      <!-- <Label
        row="0" col="1"
        verticalAlignment="top"
        horizontalAlignment="right"
        :key="saveTextMarginRight"
        :marginRight="saveTextMarginRight"
        :marginTop="saveTextMarginTop"
        @tap="editState()"
        style="color:#ffffff;"
        ref="editBtn"
      >
        <FormattedString>
          <Span :text="btnText" :class="saveTextClass" />
        </FormattedString>
        {{btnText}}
      </Label> -->

      <Label
        row="0" col="1"
        verticalAlignment="top"
        horizontalAlignment="right"
        marginRight="22"
        marginTop="20"
        @tap="showModal(item)"
        ref="editBtn"
        class="white"
      >
        <FormattedString style="color:#ffffff;">
          <Span text="..." class="dots white" style="color:#ffffff;" />
        </FormattedString>
      </Label>

      <!-- <Label
        v-else
        class="dots"
        :text="btnText"
        row="0" col="1"
        verticalAlignment="top"
        horizontalAlignment="right"
        marginRight="20"
        marginTop="20"
        @tap="editState()"
      /> -->
    <StackLayout
      row="1" col="0" colSpan="2"
      width="auto"
      verticalAlignment="top"
      horizontalAlignment="left"
      marginLeft="20" marginRight="20"
      marginTop="20" marginBottom="70"
      android:marginLeft="20"
      height="200"
    >
        <TextView editable="false"
        class="state-editable"
        textWrap="true"
        ref="editTextView"
        autocapitalizationType="sentences"
        v-model="itemText"
        style="text-align:left;vertical-align:top;"
        marginLeft="15"
        height="100%"
        verticalAlignment="top"
        >
          <!-- <FormattedString autocapitalizationType="sentences" textWrap="true" style="text-align:left;overflow-wrap: break-word;">
            <Span :text="itemText" />
          </FormattedString> -->
        </TextView>
    </StackLayout>

    <!-- <StackLayout
      row="1" col="0" colSpan="2"
      width="auto"
      autocapitalizationType="sentences"
      textWrap="false"
      verticalAlignment="top"
      horizontalAlignment="center"
      marginLeft="18" marginRight="20"
      marginTop="25" marginBottom="60"
      android:marginLeft="20"
      height="180"
    >
        <TextView :editable="editingMode"
        class="state-editable"
        ref="editTextView"
        v-model="textViewValue"
        >
          <FormattedString>
            <Span :text="item.text" />
          </FormattedString>
        </TextView>
    </StackLayout> -->

</GridLayout>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import ModalEditPage from "./ModalEditPage";

export default {
  name: "state-item",
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      editingMode: false,
      textViewValue: "",
      btnText: "EDIT",
      currentText: "",
    }
  },

  // watch: {
  // },
  computed: {
    itemText(){
      return this.$store.getters.getState(this.item.id).text;
    }
      // saveTextMarginRight: function () {
      //   return (this.editingMode) ? 28 : 21;
      // },
      //
      // saveTextMarginTop: function () {
      //   return (this.editingMode) ? 32 : 19;
      // },
      //
      // saveTextClass: function () {
      //   return (this.editingMode) ? 'saveText' : 'dots';
      // },
  },
  // components: { StateCounter },

  created() {
    this.btnText = "...";
  },
  // mounted() {
  // },

  methods: {

    ...mapActions([
      'addUserText',
      'editUserText',
    ]),

    editState() {

      // this.editingMode = true;
      this.currentText = this.item.text;

      if (this.editingMode) {
        this.btnText = "...";
        this.$refs.editTextView.nativeView.dismissSoftInput();
        // $event.object.dismissSoftInput()
        this.editingMode = false;
        this.editStateText();
        this.saveTextMargin = 20;
      }
      else {
        this.btnText = "SAVE";
        this.editingMode = true;
        this.$emit('set-editing');
        this.saveTextMargin = 50;

        setTimeout(() => {
          this.$refs.editTextView.nativeView.focus();
        }, 500);

      }

      // setTimeout(() => {
        this.$emit('refresh');
      // }, 600);



      // this.$forceUpdate();

    },

    editStateText() {

      if (this.textViewValue.length <= 10) {
        this.textViewValue = this.currentText;
        this.$refs.editTextView.nativeView.text = this.currentText;

        console.log(this.textViewValue);
        console.log(this.$refs.editTextView.nativeView.text);
        alert({
          title: "Question Not Long Enough",
          message: "Question text is too short. Please input a longer question",
          okButtonText: "Ok"
        }).then(() => {
          console.log("Alert dialog closed");

          // this.$modal.close();
        });
      }
      else {
        if (!this.item.edited) {

          this.addUserText([this.item, this.textViewValue]).catch(() => {
            alert("An error occurred while adding new question.");
          });
        }

        else {
          // this.editUserText([this.item, this.textViewValue]).catch(() => {
          //   alert("An error occurred while editing the text.");
          // });

          this.addUserText([this.item, this.textViewValue]).catch(() => {
            alert("An error occurred while editing the text.");
          });

        }
      }
    },

    showModal(state) {

      const modalOptions = {
          props: {item: state},
          fullscreen: true,
          animated: true,
          stretched: true,
          dimAmount: 0.5
        };

        this.$showModal(ModalEditPage, modalOptions);
    },
   }
}
</script>
<style scoped>

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

.circle-count {
  text-align: center;
}

.margin-auto {
  margin-left: auto;
  margin-right: auto;
}


/* .card{
    background-color: #181f31;
    border-radius: 6;
    margin: 200 15 40;
} */


.dots {
    color: #ffffff;
    font-size: 40px;
    letter-spacing: -0.022em;
    /*  line-height: 112px;*/
    /*line-height: 100%;*/
    font-weight: 900;
    /* float: right; */
}

.white {
  color: #ffffff;
}

</style>
