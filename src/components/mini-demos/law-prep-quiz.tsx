"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

const questions = [
  {
    question: "The 'Doctrine of Basic Structure' was first enunciated by the Supreme Court in which landmark case?",
    options: [
      "Golaknath v. State of Punjab",
      "Kesavananda Bharati v. State of Kerala",
      "Maneka Gandhi v. Union of India",
      "A.K. Gopalan v. State of Madras",
    ],
    answer: "Kesavananda Bharati v. State of Kerala",
  },
  {
    question: "Under the Indian Constitution, 'Right to Life and Personal Liberty' is a fundamental right guaranteed under which article?",
    options: [
        "Article 14",
        "Article 19",
        "Article 21",
        "Article 32",
    ],
    answer: "Article 21",
  }
];

export function LawPrepQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;

  const handleNext = () => {
    if (showResult) {
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
      setShowResult(false);
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // End of quiz
        alert(`Quiz finished! Your score: ${isCorrect ? score + 1 : score}/${questions.length}`);
        handleRestart();
      }
    } else {
        setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-transparent border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold leading-snug">{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption ?? ""}
          onValueChange={(value) => !showResult && setSelectedOption(value)}
          className="gap-3"
        >
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option;
            const isAnswer = currentQuestion.answer === option;

            return (
                <div key={option}>
                    <RadioGroupItem value={option} id={option} className="sr-only" />
                    <Label
                        htmlFor={option}
                        className={cn(
                        "flex items-center justify-between w-full p-3 rounded-md border text-sm cursor-pointer transition-all",
                        showResult
                            ? isAnswer
                            ? "border-green-500 bg-green-500/10 text-green-500" // Correct answer
                            : isSelected
                            ? "border-red-500 bg-red-500/10 text-red-500" // Incorrectly selected
                            : "border-muted-foreground/30" // Not selected
                            : isSelected
                            ? "border-primary bg-primary/10" // Selected before check
                            : "border-muted-foreground/30 hover:bg-accent" // Default state
                        )}
                    >
                       {option}
                        {showResult && isSelected && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500" />}
                        {showResult && !isSelected && isAnswer && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                    </Label>
                </div>
            );
          })}
        </RadioGroup>

      </CardContent>
      <CardFooter className="flex justify-between items-center mt-4">
        <p className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleRestart}>
                <RefreshCw className="h-4 w-4"/>
                <span className="sr-only">Restart Quiz</span>
            </Button>
            <Button onClick={handleNext} disabled={!selectedOption}>
                {showResult ? (currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish') : 'Check Answer'}
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
