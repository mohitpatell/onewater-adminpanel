import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-blog',
  templateUrl: './author-blog.component.html',
  styleUrls: ['./author-blog.component.scss']
})
export class AuthorBlogComponent implements OnInit {
  allblogs=[{
    title:'Lorem ipsum dolor  quis nostrud',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'approved'
  },
  {
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'pending'
  },
  {
    title:'Lorem ipsum dolor sit amet, quis nostrud',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'approved'
  },
  {
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'pending'
  },
  {
    title:'Lorem ipsum dolor sit amet, consectetur ',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'pending'
  },
  {
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'approved'
  },
  {
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    author:'Jack Johnson',
    img:'assets/images/big/img1.jpg',
    date:'28/10/2019',
    // likes:28,
    // comment:39,
    status:'approved'
  },

  ]
  constructor() { }

  ngOnInit() {
  }

}
