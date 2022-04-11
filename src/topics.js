import launchAddState from "./images/guide/launchAddState.png";
import selectAndSaveState from "./images/guide/selectAndSaveState.png";
import groupAssessmentStart from "./images/guide/groupAssessmentStart.png";
import groupAssessmentSubmit from "./images/guide/groupAssessmentSubmit.png";

import chooseState from "./images/guide/full/1-1-chooseState.png";
import downloadingStateData from "./images/guide/full/1-2-downloadingStateData.png";
import appHome from "./images/guide/full/1-3-appHome.png";

import selectDistrict from "./images/guide/full/2-1-selectDistrict.png";
import selectAssessmentTool from "./images/guide/full/2-2-selectAssessmentTool.png";
import selectFacilityType from "./images/guide/full/2-3-selectFacilityType.png";
import selectFacility from "./images/guide/full/2-4-selectFacility.png";
import selectAssessmentType from "./images/guide/full/2-5-selectAssessmentType.png";
import startNewAssessment from "./images/guide/full/2-6-startNewAssessment.png";
import newAssessmentMain from "./images/guide/full/2-7-newAssessmentMain.png";

import canGenerateScoreCardAndSubmitAssessment from "./images/guide/full/3-1-canGenerateScoreCardAndSubmitAssessment.png";
import areaOfConcerns from "./images/guide/full/3-2-areaOfConcerns.png";
import standards from "./images/guide/full/3-3-standards.png";
import checkpoints from "./images/guide/full/3-4-checkpoints.png";

const topics = [
    {
        heading: "Step 1: Selection of State/UTs",
        description: "Don't close the app at this point by pressing back button or closing the screen. The app will keep the screen on while it downloading.",
        steps: [
            {
                imageSrc: chooseState,
                quote: "We have chosen Rajasthan from the drop-down list as my state for assessment. Press the SAVE button."
            },
            {
                imageSrc: downloadingStateData,
                quote: "Download will start which you can see from the progress bar above the SAVE button"
            },
            {
                imageSrc: appHome,
                quote: "Once download is complete, main screen of application will appear"
            }]
    },
    {
        heading: "Step 2: Assessment’s Selection",
        description: "As an example lets assume we have to perform Internal NQAS assessment of CHC Deogaon of Ajmer District in Rajasthan",
        steps: [
            {
                imageSrc: selectDistrict,
                quote: "Select district as Ajmer"
            },
            {
                imageSrc: selectAssessmentTool,
                quote: "Select COMMUNITY HEALTH CENTER (CHC) as assessment tool."
            },
            {
                imageSrc: selectFacilityType,
                quote: "Select Community Health Center as Facility type"
            },
            {
                imageSrc: selectFacility,
                quote: "Select Deogaon as facility"
            },
            {
                imageSrc: selectAssessmentType,
                quote: "Select Internal as Assessment Type"
            },
            {
                imageSrc: startNewAssessment,
                quote: "Tap START NEW ASSESSMENT"
            },
            {
                imageSrc: newAssessmentMain,
                quote: "The app will take you a new Assessment with your selected parameters."
            }]
    },
    {
        heading: "Step 3: Perform Assessment",
        description: "",
        steps: [
            {
                imageSrc: newAssessmentMain,
                quote: "All the details of assessment are shown. Department wise preloaded checklist will be available for the assessment. Status of assessment will be updated on real-time basis."
            },
            {
                imageSrc: canGenerateScoreCardAndSubmitAssessment,
                quote: "On the lower part of the window GENERATE SCORECARD and SUBMIT ASSESSMENT"
            },
            {
                imageSrc: newAssessmentMain,
                quote: "Tap on department that need to be assessed. Department can be assessed in any sequence."
            },
            {
                imageSrc: areaOfConcerns,
                quote: "After the selection of department, a list showing all 8 Area of Concern, will appear."
            },
            {
                imageSrc: standards,
                quote: "Clicking on Area of concern will lead to window containing list of standards needs to be check."
            },
            {
                imageSrc: checkpoints,
                quote: "Further selection of Standards will lead you to the Checkpoints where compliance (i.e., 0,1,2) need to be mark. Compliance need to be mark by looking at Means of Verification, Remarks are mandatory to fill."
            }
        ]
    },
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
