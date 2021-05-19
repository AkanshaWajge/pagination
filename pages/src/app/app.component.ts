import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: '1 - At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '2 - At the Forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '3 - At the City',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '4 - At the Snow',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '5 - At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '6 - At the Forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '7 - At the City',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '8 - At the Snow',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '9 - At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: '10 - At the Forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the City',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Snow',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the City',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Snow',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the City',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Snow',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the Forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'At the City',
      url:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
    },
    {
      title: 'last - At the Snow',
      url:
        'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60'
    }
  ];

}
