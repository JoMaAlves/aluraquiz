import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Input from '../src/components/Input';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {/* <BackLinkArrow href="/" /> */}
            <h3>
              Pergunta
              1
              de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>

          <img
            src={db.bg}
            style={{
              width: '100%',
              height: 150,
              objectFit: 'cover',
            }}
            alt="Question representation"
          />

          <Widget.Content>
            <h2>
              Titulo
            </h2>
            <p>
              Descrição
            </p>
            <form onSubmit="">
              <button type="submit">Lorem ipsum</button>
              <button type="submit">Lorem ipsum</button>
              <button type="submit">Lorem ipsum</button>
              <button type="submit">Lorem ipsum</button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
