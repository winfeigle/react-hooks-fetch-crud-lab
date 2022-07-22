import React, {useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionList, setQuestionList] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then(res => res.json())
      .then(questions => setQuestionList(questions))
  }, []);

  const onDeleteQuestion = (id) => {
    setQuestionList((prevQuestionList) => {
      const newQuestionList = prevQuestionList.filter(question => {
        return question.id !== id;
      })
      return newQuestionList;
    })
  }


  const questionItems = questionList.map(question => {
    return <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} />;
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questionItems }</ul>
    </section>
  );
}

export default QuestionList;
