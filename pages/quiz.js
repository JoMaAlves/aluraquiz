/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question_${questionIndex}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}

        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        src={question.image}
        style={{
          width: '100%',
          height: 150,
          objectFit: 'cover',
        }}
        alt="Question representation"
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative_${index}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />

                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>

    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuention, setCurrentQuention] = React.useState(0);
  const questionIndex = currentQuention;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  const handleSubmit = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuention(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            onSubmit={handleSubmit}
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Voce acertou X questões, parabéns</div>}

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/JoMaAlves" />
    </QuizBackground>
  );
}
