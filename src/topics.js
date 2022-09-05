import launchAddState from "./images/guide/launchAddState.png";
import selectAndSaveState from "./images/guide/selectAndSaveState.png";
import groupAssessmentStart from "./images/guide/groupAssessmentStart.png";

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

import asPerMeansOfVerification from "./images/guide/full/4-1-asPerMeansOfVerification.png";
import remarks from "./images/guide/full/4-2-remarks.png";
import completionOfME from "./images/guide/full/4-3-completionOfME.png";

import checkAssessmentCompletion from "./images/guide/full/5-1-checkAssessmentCompletion.png";
import checkAssessmentCompletionDepartments from "./images/guide/full/5-2-checkAssessmentCompletionDepartments.png";
import checkReports from "./images/guide/full/5-3-checkReports.png";

import fillAssessmentSubmissionDetails from "./images/guide/full/6-1-fillAssessmentSubmissionDetails.png";
import submitAssessment from "./images/guide/full/6-2-submitAssessment.png";

import downloadReport from "./images/guide/full/7-1-downloadReport.png";

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
        heading: "Step 4: Marking of compliance",
        description: "",
        steps: [
            {
                imageSrc: asPerMeansOfVerification,
                quote: "Compliance of each measuring elements under checkpoints must be filled as per guidelines. Means of verification need to be consider before marking compliance (0,1,2)."
            },
            {
                imageSrc: remarks,
                quote: "Remarks must be added as per SOPs, and it is mandatory to add."
            },
            {
                imageSrc: completionOfME,
                quote: "On marking all measuring elements of a particular standards click finish and proceed further"
            }
        ]
    },
    {
        heading: "Step 5: Complete Assessment",
        description: "",
        steps: [
            {
                imageSrc: checkAssessmentCompletion,
                quote: "Check the status of the ongoing assessment. You can see the Assessment status (100% complete). Name and Type of facility is also mentioned."
            },
            {
                imageSrc: checkAssessmentCompletionDepartments,
                quote: "Check for all department if they are assessed. Assessment status must be 100% before completion of assessment."
            },
            {
                imageSrc: checkAssessmentCompletionDepartments,
                quote: "Tap COMPLETE ASSESSMENT. The scorecard will generate automatically. Submission of assessment will only be possible after generation of scorecard."
            },
            {
                imageSrc: checkReports,
                quote: "Check for all Area of Concern, Department and Standards by shuffling among them simply by clicking the options."
            }
        ]
    },
    {
        heading: "Step 6: Submit Assessment",
        description: "This step will remain same for all three LaQshya, MusQan and Kayakalp assessments also.",
        steps: [
            {
                imageSrc: fillAssessmentSubmissionDetails,
                quote: "Generation of Scorecard lead to activation of SUBMIT ASSESSMENT button. You can enter an assessment number for your own reference or use the generated reference number."
            },
            {
                imageSrc: submitAssessment,
                quote: "Check for all department if they are assessed. Assessment status must be 100% before completion of assessment. Assessment can also be submitted by going on ONGOING tab."
            }
        ]
    },
    {
        heading: "Step 7: Sharing of report",
        description: "As per SOPs all the assessment reports need to be submitted to respective state consultant at NHSRC, New Delhi and RRC-NE. Once you click on Complete Assessment, scorecard will generate automatically.",
        steps: [
            {
                imageSrc: downloadReport,
                quote: "On the upper right corner, you can see Export/Download button. By clicking on download option, a drop-down list showing this screen. Export area of concern wise, Department wise, Standard wise or whole checklist. This file can be shared in the form of .csv & .png via Email I.D with the concerned authority. After download the share application option will be shown."
            }
        ]
    },
    {
        heading: "Submit assessment in a group",
        description: "When there are multiple assessors, performing assessment of the same facility, you can divide multiple departments among yourself and still create single assessment. Please follow the steps below to understand how this can be done. Please note that if you are using different assessment programs (like LAQSHYA and NQAS), or different assessment types (like State and External) then the merging of assessments wouldn't happen - as they will are separate assessment.",
        steps: [
            {
                imageSrc: groupAssessmentStart,
                quote: "All assessors must choose same facility, assessment tool, and assessment type (i.e. internal, state, external etc)"
            },
            {
                imageSrc: submitAssessment,
                quote: "When submitting the assessment the users must enter the same unique number. Hint: you can follow year-number/year-month-number format. If you are doing assessment in March 2021 then the numbers could be 2021-01/2021-03-01 respectively."
            }]
    },
    {
        heading: "Download assessment tools and facilities list for another state",
        description: "If you installed the GUNAK application and chose one state and not if you want to perform assessment in another state, then you can follow the steps given below instead of reinstalling the app again.",
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
