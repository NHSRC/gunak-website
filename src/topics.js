import launchAddState from "./images/guide/launchAddState.png";
import selectAndSaveState from "./images/guide/selectAndSaveState.png";
import groupAssessmentStart from "./images/guide/groupAssessmentStart.png";
import groupAssessmentSubmit from "./images/guide/groupAssessmentSubmit.png";

const topics = [
  {
    heading: "Submit assessment in a group",
    description: "When there are multiple assessors, performing assessment of the same facility, you can divide multiple departments among yourself and still create single assessment. Please follow the steps below to understand how this can be done",
    steps: [
      {
        imageSrc: groupAssessmentStart,
        quote: "All assessors must choose same facility, assessment tool, and assessment type (i.e. internal, state, external etc)"
      },
      {
        imageSrc: groupAssessmentSubmit,
        quote: "When submitting the assessment the users must enter the same unique number. Hint: you can follow year-number/year-month-number format. If you are doing assessment in March 2021 then the numbers could be 2021-01/2021-03-01 respectively."
      }]
  },
  {
    heading: "Download assessment tools and facilities list for another state",
    description: "If you installed the Gunak application and chose one state and not if you want to perform assessment in another state, then you can follow the steps given below instead of reinstalling the app again.",
    steps: [
      {
        imageSrc: launchAddState,
        quote: "Go to home screen and tap on 'Add State' button"
      },
      {
        imageSrc: selectAndSaveState,
        quote: "The states already loaded will not be displayed on the screen. These states are also mentioned below the Submit button. You can select another state and press SAVE."
      }]
  }
];

export default topics;
