import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: './pages/login/login.module', icon: 'mail' },
    { title: 'Consulta-medico', url: './pages/consulta-medico/consulta-medico.module', icon: 'paper-plane' },
    { title: 'Examen-medico', url: './pages/examen-medico/examen-medico.module', icon: 'heart' },
    /*{ title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
  ];
  public labels = ['Family', 'Friends', 'Notes' /*, 'Work', 'Travel', 'Reminders'*/];
  constructor() {}
}
