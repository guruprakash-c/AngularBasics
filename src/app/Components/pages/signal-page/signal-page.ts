import { Component, computed, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-signal-page',
  imports: [],
  templateUrl: './signal-page.html',
  styleUrl: './signal-page.scss'
})
export class SignalPage {
  blogName = signal('DEVstoc');
  blogPostTitle = signal<string>('Creating Angular Guardrails: A Guide to Custom Cursor Rules for Better Code');
  blogSlug = computed(() =>{
    return this.blogPostTitle() 
                      .replace(/[^a-zA-Z0-9 ]/g, '')
                      .replaceAll(' ','-')
                      .toLowerCase();
  });
  setSignalValue(){
    this.blogPostTitle.set('');
    setTimeout(()=>{
      this.blogPostTitle.set('Generating Your First Rules with Cursor for Your Angular Project');
    }, 5000);
  }
  updateSignalValue(){
     this.blogPostTitle.set('');
    setTimeout(()=>{
      this.blogPostTitle.update((v) => 'Bundle Size Exceeded in Angular? Here’s Why It Happens & 15+ Proven Ways to Fix It');
    }, 5000);
  }
  effectSignalValue(){
  
    prompt('In next Commit > ',`Current Blog post title: ${this.blogPostTitle()} and the URL is https://devstoc.com/p/${this.blogSlug()}/`);
  }
}
