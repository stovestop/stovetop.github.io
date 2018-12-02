import { animation, animate, style } from "@angular/animations";

export const fade = animation([
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}',
    style({ opacity: '{{ end }}'}))
    ],
    { params: { time: '1.5s', start: 0, end: 1 }});

export const moveUp = animation([
    style({
        position: "relative",
        top: '{{ start }}',
    }),
    animate('{{ time }}',
    style({
        top: '{{ end }}'}))
    ],
    { params: { time: '0.5s ease-out', start: '40px', end: '0px'}}
);

export const slideDown = animation([
    style({ maxHeight: '0' }),
    animate('{{ time }}',
    style({ maxHeight: '200px'}))
    ],
    { params: { time: '2s ease-in'}}
);