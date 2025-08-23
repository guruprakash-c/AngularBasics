import { Component } from '@angular/core';

@Component({
  selector: 'app-error-component',
  imports: [],
  template: `
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yE6rU3wKRRwuGG6PiyxqjQ.png" alt="Not found"/> 
    <h1 class="display-5 fw-bold text-body-emphasis">Oops ;(</h1>
    <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Something went wrong, please try after sometime.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
          <a role="button" class="btn btn-primary btn-lg px-4 gap-3" href="/">
            <i class="bi bi-house me-1"></i>Go to Home
          </a>
          <a role="button" class="btn btn-secondary btn-lg px-4" href="/">
            Contact Us<i class="bi bi-arrow-right-short ms-1"></i>
          </a> 
        </div>
    </div>
  </div>
  `,
  styles: ''
})
export class ErrorComponent {

}
