declare namespace Template {
    let bg: {
        schlafzimmer: {
            name: string;
            background: string;
            foreground: string;
        };
    };
}
declare namespace Template {
    let char: {
        Erzahler: {
            name: string;
            text: {
                T001: string;
            };
        };
    };
}
declare namespace Template {
    function intro(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        Protagonist: {
            name: string;
            furor: number;
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
