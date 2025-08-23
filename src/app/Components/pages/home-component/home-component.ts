import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPostsService, IBlogPosts } from '../../../Services/blog-posts';


@Component({
  selector: 'app-home-component',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent{
  blogPosts:IBlogPosts[] = [];
  _blogPostsService: BlogPostsService = inject(BlogPostsService);
  constructor(){
    this.blogPosts = this._blogPostsService.getAllBlogPosts();
  }
}
