import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

type FormAnswers = FormGroup<{ text: FormControl<string> }>;

type FormQuestions = FormGroup<{
  questionName: FormControl<string>,
  answers: FormArray<FormAnswers>
}>;

type FormG = FormGroup<{
  questions: FormArray<FormQuestions>
}>;

@Component({
  selector: 'app-dynamic-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-forms.html',
  styleUrl: './dynamic-forms.scss'
})
export class DynamicForms {
  // _fb = inject(NonNullableFormBuilder);
  // quizForm: FormG = this._fb.group({
  //   questions: this._fb.array<FormQuestions>([this.generateQuestion()])
  // });
  // generateQuestion(): FormQuestions{
  //   return this._fb.group({
  //     questionName: '',
  //     answers: this._fb.array<FormAnswers>([])
  //   });
  // }
  // AddQuestion():void{
  //   this.quizForm.controls.questions.push(this.generateQuestion());
  // }
  // AddAnswer(questionIndex:number):void{
  //   const newAnswer: FormAnswers = this._fb.group({
  //     text: ''
  //   });
  //   this.quizForm.controls.questions.at(questionIndex).controls?.answers?.push(newAnswer);
  // }
  // RemoveQuestion(questionIndex:number):void{
  //   this.quizForm.controls.questions.removeAt(questionIndex);
  // }
  // RemoveAnswer(questionIndex:number, answerIndex:number):void{
  //   this.quizForm.controls.questions.at(questionIndex).controls?.answers?.removeAt(answerIndex);
  // }
  // OnSubmit():void{
  //   console.log(this.quizForm.getRawValue());
  // }
}
