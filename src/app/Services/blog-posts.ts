import { Injectable } from '@angular/core';

export interface IBlogPosts{
  id:number,
  slug:string,
  title:string,
  description:string,
  poster:string
}


@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  protected blogPosts:IBlogPosts[] = [];
  constructor() { 
    this.blogPosts = [
      {
        id:1, slug:'first-slide-label', title:'First slide label', description:'Some representative placeholder content for the first slide.',poster:'https://picsum.photos/800/400?grayscale'
      },
      {
        id:2, slug:'second-slide-label', title:'Second slide label', description:'Some representative placeholder content for the sencond slide.',poster:'https://picsum.photos/800/400?random=1'
      },
      {
        id:3, slug:'third-slide-label', title:'Third slide label', description:'Some representative placeholder content for the third slide.',poster:'https://picsum.photos/800/400?grayscale&random=2'
      }
    ];
  }
  getAllBlogPosts():IBlogPosts[]{
    return this.blogPosts;
  }
  getBlogPostBySlug(slug:string):IBlogPosts|undefined{
    return this.blogPosts.find(bp => bp.slug === slug);
  }
  SubmitComments(emailAddress:string, title: string, comments:string){
    console.log(`Email address: ${emailAddress}, Title: ${title}, Comments: ${comments}`);
  }
}
