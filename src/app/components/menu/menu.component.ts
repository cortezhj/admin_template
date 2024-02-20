import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})

export class MenuComponent implements OnInit{

  model: any[] = []

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'UI Components',
        items: [
          { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/'] },
          { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/'] },
          { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/'] },
          { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/'] },
          { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/'] },
          { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/'] },
          { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/'] },
          { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/'] },
          { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/'] },
          { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/'] },
          { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/'] },
          { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
          { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/'] },
          { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/'] },
          { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/'] },
          { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/'] }
        ]
      },
      {
        label: 'Prime Blocks',
        items: [
          { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/'], badge: 'NEW' },
          { label: 'All Blocks', icon: 'pi pi-fw pi-globe' },
        ]
      },
      {
        label: 'Utilities',
        items: [
          { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/'] },
          { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop' },
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Landing',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['/']
          },
          {
            label: 'Auth',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Login',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/']
              },
              {
                label: 'Error',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/']
              },
              {
                label: 'Access Denied',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/']
              }
            ]
          },
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/']
          },
          {
            label: 'Timeline',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/']
          },
          {
            label: 'Not Found',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/']
          },
          {
            label: 'Empty',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/']
          },
        ]
      },
      {
        label: 'Hierarchy',
        items: [
          {
            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                ]
              },
              {
                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                ]
              },
            ]
          },
          {
            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                ]
              },
              {
                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                ]
              },
            ]
          }
        ]
      },
      {
        label: 'Get Started',
        items: [
          {
            label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/']
          },
          {
            label: 'View Source', icon: 'pi pi-fw pi-search'
          }
        ]
      }
    ]
  }
}