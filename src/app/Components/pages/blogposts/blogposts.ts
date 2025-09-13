import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blogposts',
  imports: [],
  templateUrl: './blogposts.html',
  styleUrl: './blogposts.scss'
})
export class BlogpostsPage {
postId = input.required<string>();
category = input.required<string>();
}
