import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import { Post } from './../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	posts: Post[]

  constructor(private blogService: BlogService) { }

	ngOnInit() {
		this.posts = this.blogService.getAllPosts();
	}

	filtrarCat(value) {

		if (value != "todos") {
			this.posts = this.blogService.getPostsByCategoria(value);
		}
		else {
			this.posts = this.blogService.getAllPosts();
		}
 	}

}
