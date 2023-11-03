import { useCallback } from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import { quiz } from './Quiz';
import { competitors } from './Competitors';
import { winners } from './Winners';
import { theme } from "./Theme";
import './index.css';
import 'survey-core/defaultV2.min.css';

function App() {

  //Breakdown competitor data
  const allDrivers = [];
  const allConstructors = [];
  const allNonWinners = [];
  for(const [constructor,drivers] of Object.entries(competitors)){
    allConstructors.push(constructor);
    drivers.forEach(driver => {
      allDrivers.push(driver);
    })
  }
  for(const [type,drivers] of Object.entries(winners)){
    if(type==='NonRaceWinners'){
      drivers.forEach(driver => {
        allNonWinners.push(driver);
      })
    }
  }

  //Intersect the real data in
  quiz.pages.forEach(page => {
    page.elements.forEach(question => {
      if(question.dataNeeded === 'driver'){
        question.choices = allDrivers;
      }else if(question.dataNeeded === 'constructor'){
        question.choices = allConstructors;
      }else if(question.dataNeeded === 'nonwinners'){
        question.choices = allNonWinners;
      }
    });
  });
  
  //Survey setup
  const survey = new Model(quiz);
  survey.applyTheme(theme);
  const surveyComplete = useCallback((sender) => {
    saveSurveyResults(sender.data);
  })
  survey.onComplete.add(surveyComplete);

  //Render
  return (
    <div className='container'>
      <h1>Formula One 2024 Season Predictor</h1>
      <Survey model={survey} />
    </div>
  );
}

function saveSurveyResults(json) {
  //Save to BigQuery!
  alert(JSON.stringify(json));
}

export default App;
