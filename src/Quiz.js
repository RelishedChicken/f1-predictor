export const quiz = {
    pages:[{
        elements: [            
            {
                type: "html",
                html: "<p>You are about to start the predictor.</p><p>Once you have completed the quiz, your answers will be saved against your nickname.</p><p>Enter your nickname (make sure its identifyable) below and click <b>Start Quiz</b> to begin.</p>"
            },
            {
                name: "Nickname",
                title: "Enter your nickname:",
                type: "text",
                isRequired: true
            }]
    },
    {
        elements: [
            {
                dataNeeded: "driver",
                name: "WorldDriversChampion",
                type: "radiogroup",
                title: "Who wins the World Drivers Chamionship (WDC)?",
                isRequired: true
            }
        ]
    },
    {
        elements: [
            {
                dataNeeded: "constructor",
                name: "WorldConstructorsChampion",
                type: "radiogroup",
                title: "Who wins the World Constructors Chamionship (WCC)?",
                isRequired: true
            }
        ]
    },
    {
        elements: [
            {
                dataNeeded: "driver",
                name: "SummerBreakLead",
                type: "radiogroup",
                title: "Who leads the WDC into the summer break?",
                isRequired: true
            }
        ]
    },
    {
        elements: [
            {
                dataNeeded: "driver",
                name: "DriverOfTheDayAwards",
                type: "radiogroup",
                title: "Who gets awarded the most 'Driver of the Day' awards?",
                isRequired: true
            }
        ]
    },
    {
        elements: [
            {
                dataNeeded: "driver",
                name: "DNFs",
                type: "radiogroup",
                title: "Who ends the season with the most DNFs (Did Not Finish)?",
                isRequired: true
            }
        ]
    },
    {
        elements: [
            {
                dataNeeded: "nonwinners",
                name: "FirstWin",
                type: "radiogroup",
                title: "Who gets their first Grand Prix win?",
                isRequired: true
            }
        ]
    },
    {
        elements: [
            {
                dataNeeded: "nonwinners",
                name: "SelfPrediction",
                type: "text",
                title: "Finally, what is your own prediction?",
                isRequired: true
            }
        ]
    }]
};