<!--
@Author: Mohammed Cherbatji <mo>
@Date:   2019-10-13T12:02:13+01:00
@Filename: ModalEditPage.vue
@Last modified by:   mo
@Last modified time: 2019-10-16T18:59:40+01:00
-->



<template>
	<StackLayout class="p-20" backgroundColor="white">
		<Label marginTop="30" class="h1 text-center title" :text="item.name" />

    <Label marginTop="50" class="h2 text-left" :text="title" />
    <Label class="h3 text-left" :text="message" />

    <TextView marginTop="30" autocorrect="true" returnKeyType="return" editable="true" ref="textView" class="h3 text-left text-view" v-model="textViewValue" />

      <FlexboxLayout justifyContent="space-around">
        <Button class="btn btn-primary" text="Cancel" @tap="$modal.close()" />
        <Button class="btn btn-outline" text="Save" @tap="editStateText()" />
      </FlexboxLayout>
	</StackLayout>
</template>

<script>
import { mapActions } from 'vuex'

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
        title: "",
        message: "",
        textViewValue: ""
      };
  },
  created() {

    this.textViewValue = this.item.text;

    setTimeout(() => {
      this.$refs.textView.nativeView.focus();
    }, 600);


    if (!this.item.edited) {
      this.title = "Enter a question";
      this.message = "Please enter a question of your choice";
    }
    else {
      this.title = "Enter a new question";
      this.message = "Please enter a new question of your choice. Please note: Entering a new question resets the daily counter to 0";
    }

  },
  methods: {

    ...mapActions([
      'addUserText',
      'editUserText',
    ]),

    editStateText() {

      this.textViewValue = this.textViewValue.replace(/\s\s+/g, ' ');

      if (this.textViewValue.length <= 20) {
        alert({
          title: "Question Not Long Enough",
          message: "Question text is too short. Please input a longer question (above 20 characters)",
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

          // prompt({
          //   title: "Enter a Question",
          //   message: "Please enter a question of your choice",
          //   okButtonText: "save",
          //   cancelButtonText: "cancel",
          //   defaultText: this.item.text,
          // }).then(result => {
          //   console.log(`Dialog result: ${result.result}, text: ${result.text}`)
          //
          //   if (result.result) {
          //
          //     // this.item.text = result.text;
          //     this.addUserText([this.item, result.text]).catch(() => {
          //       alert("An error occurred while adding new question.");
          //     });
          //   }

          // });
        }
        // else if (this.item.count == 66) {
        else {
          // this.editUserText([this.item, this.textViewValue]).catch(() => {
          //   alert("An error occurred while editing the text.");
          // });
          this.addUserText([this.item, this.textViewValue]).catch(() => {
            alert("An error occurred while editing the text.");
          });


            // prompt({
            //   title: "Enter a new Question",
            //   message: "Please enter a new question of your choice. Please note: Entering a new question resets the daily counter to 0",
            //   okButtonText: "save",
            //   cancelButtonText: "cancel",
            //   defaultText: this.item.text,
            // }).then(result => {
            //   console.log(`Dialog result: ${result.result}, text: ${result.text}`)
            //
            //   if (result.result) {
            //
            //     // this.item.text = result.text;
            //     this.editUserText([this.item, result.text]).catch(() => {
            //       alert("An error occurred while editing the text.");
            //     });
            //   }

            // });
        }

        this.$modal.close();
      }

    }

  }
};
</script>

<style>

.text-view {
  background: #ffffff;
}
</style>
