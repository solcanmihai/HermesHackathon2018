import {Component} from '@angular/core';
import {BreadcrumbService} from '../../breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        .docs h1 {
            margin-top: 30px;
        }

        .docs pre {
            font-family: monospace;
            background-color: #0C2238;
            color: #dddddd;
            padding: 1em;
            font-size: 14px;
            border-radius: 3px;
            overflow: auto;
        }

        .docs p {
            line-height: 1.5;
        }
        `
    ]
})
export class DocumentationComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Documentation'}
        ]);
    }

}
