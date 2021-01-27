import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <img src={db.bg} width="100%" alt="Question representation" />
          <Widget.Content>
            <h1>Lorem ipsum</h1>
            <p>lorem ipsum dolor sit amet...</p>
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
