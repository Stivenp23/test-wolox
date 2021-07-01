import {Component, HostListener} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    classHeader;
    classMenuBtn;
    classMenuItems;
    classMenuOpen;
    logo = '../assets/img/logo-header.svg'
    items = [
        {
            label: 'Inicio',
            link: '#banner'
        },
        {
            label: 'Beneficios',
            link: '#benefits'
        }
    ];

    menu() {
        this.classMenuBtn = this.classMenuBtn ? '' : 'open'
        if (this.classMenuItems) {
            this.classMenuItems = ''
            this.classMenuOpen = ''
        } else {
            this.classMenuItems = 'site-nav--open'
            this.classMenuOpen = 'menu-open'
        }
    }

    @HostListener('window:scroll', [])
    public onScrollEvent(): void {
        if (window.scrollY > 60) {
            this.classHeader = 'fixed-header'
        } else {
            this.classHeader = ''
        }
    }

    anchor(idElement) {
        if (idElement?.indexOf('#') === 0 && idElement?.length > 1) {
            event.preventDefault()
            const node = document.querySelector(idElement)
            const header = document.querySelector('header')
            const heightHeader = header?.offsetHeight || 100
            if (node) {
                node.scrollIntoView(true)
                const scrolledY = window.scrollY
                this.classMenuItems = ''
                this.classMenuOpen = ''
              this.classMenuBtn = ''
                if (scrolledY) {
                    window.scrollTo({
                        top: scrolledY === 0 ? scrolledY : scrolledY - heightHeader,
                        behavior: 'smooth'
                    })
                }
            }
        }
    }
}
