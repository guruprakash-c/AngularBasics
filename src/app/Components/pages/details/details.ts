import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostsService, IBlogPosts } from '../../../Services/blog-posts';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
type PostComments = {
  id:number,
  emailAddress: string,
  title: string,
  comments: string  
};
@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article class="card shadow-md">
      <img [src]="blogPost?.poster" class="card-img-top" [alt]="blogPost?.slug">
      <div class="card-body">
        <h5 class="card-title">{{ blogPost?.title }}</h5>
        <p class="card-text">{{ blogPost?.description }}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        <button type="button" class="btn btn-primary align-middle" data-bs-toggle="modal" data-bs-target="#commentForm">
          <i class="bi bi-pencil me-1"></i>Write Comments
        </button>
      </div>
    </article>
    <section class="container-fluid py-5">
      @if(userComments.length > 0){
        <div class="row g-3"> 
        <h2>Recently added Comments</h2>
        @for(userComment of userComments; track userComment.id){
          <div class="col-lg-4 mt-1 mb-1">
            <div class="card rounded-4 bg-white shadow p-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <i class="bi bi-person fs-4"></i>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h2 class="h5">{{ userComment.emailAddress }}</h2>
                  <h3 class="h2">{{ userComment.title }}</h3>
                  <p>{{ userComment.comments }}</p>
                </div>
              </div>
            </div>
          </div>
        }
        </div>
      } @else {
        <h5>No comments added yet.</h5>
      }
    </section>
    <div class="modal fade" id="commentForm" tabindex="-1" aria-labelledby="commentFormLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <form [formGroup]="commentForm" (submit)="onSubmit()">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="commentFormLabel"><i class="bi bi-pencil me-1"></i>Add your Comment</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <section class="container-fluid p-0 m-0">
                <div class="row g-4 justify-content-center">
                  <div class="col-lg-6">
                    <label class="form-label">Email address: </label>
                    <input type="email" class="form-control" placeholder="name@example.com" formControlName="emailAddress"/>
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label">Title: </label>
                    <input type="text" class="form-control" formControlName="title"/>
                  </div> 
                  <div class="col-lg-12">
                    <label class="form-label">Your Comments: </label>
                    <textarea class="form-control" formControlName="comments"></textarea>
                  </div>   
                </div>
              </section>
            </div>
            <div class="modal-footer">
              <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" [disabled]="this.commentForm.invalid">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrl: './details.scss'
})
export class DetailsComponent {
  routes:ActivatedRoute = inject(ActivatedRoute);
  blogPost?:IBlogPosts | undefined;
  _blogPostService: BlogPostsService = inject(BlogPostsService);
  commentForm = new FormGroup({
    emailAddress: new FormControl('', [Validators.email, Validators.required]),
    title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    comments: new FormControl('', [Validators.required, Validators.maxLength(300)])
  });
  userComments: PostComments[] = [];
  constructor(){
    const blogPostPerma = this.routes.snapshot.params['perma'];
    this.blogPost = this._blogPostService.getBlogPostBySlug(blogPostPerma);
  }
  onSubmit():void{
    if(this.commentForm.invalid) return;
    this.userComments.push({
      id: this.userComments.length + 1,
      emailAddress: this.commentForm.get('emailAddress')?.value ?? '',
      title: this.commentForm.get('title')?.value ?? '',
      comments: this.commentForm.get('comments')?.value ?? '',
    });
    this._blogPostService.SubmitComments(
      this.commentForm.value.emailAddress ?? '',
      this.commentForm.value.title ?? '',
      this.commentForm.value.comments ?? ''
    );
    this.commentForm.reset();
  }
}
