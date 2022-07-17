declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        protagonist: {
            name: string;
            furor: number;
        };
    };
}
declare namespace Template {
    function arbeit(): ƒS.SceneReturn;
}
declare namespace Template {
    let bg: {
        schlafzimmer: {
            name: string;
            background: string;
            foreground: string;
        };
        bad: {
            name: string;
            background: string;
        };
        arbeit: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let char: {
        Erzahler: {
            name: string;
            text: {
                T001: string;
                T002: string;
                T003: string;
                T004: string;
                T005: string;
            };
        };
        Protagonist: {
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                relaxed: string;
            };
        };
        Dina: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
            };
        };
    };
}
declare namespace Template {
    function intro(): ƒS.SceneReturn;
}
declare namespace Template {
    function morgen(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
