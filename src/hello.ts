const world = 'word!!';

export function Hello(w: string = world): string {
    return `hello ${w}!!`;
}

Hello();
