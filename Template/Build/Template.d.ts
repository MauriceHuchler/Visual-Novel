declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        protagonist: {
            name: string;
            furor: number;
            dinaLovesYou: boolean;
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
        kino: {
            name: string;
            background: string;
        };
        dinasHaus: {
            name: string;
            background: string;
        };
        vulkan: {
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
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
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
        Donald: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
            };
        };
    };
}
declare namespace Template {
    function credits(): ƒS.SceneReturn;
}
declare namespace Template {
    function dinasHaus(): ƒS.SceneReturn;
}
declare namespace Template {
    function intro(): ƒS.SceneReturn;
}
declare namespace Template {
    function morgen(): ƒS.SceneReturn;
}
declare namespace Template {
    let sounds: {
        jungle: string;
        krack: string;
    };
}
declare namespace Template {
    function alleinAbHaus(): ƒS.SceneReturn;
}
declare namespace Template {
    function alleinEssen(): Promise<string>;
}
declare namespace Template {
    function endeGut(): ƒS.SceneReturn;
}
declare namespace Template {
    function endeNeutral(): ƒS.SceneReturn;
}
declare namespace Template {
    function endeSchlecht(): ƒS.SceneReturn;
}
declare namespace Template {
    function introEnde(): Template.ƒS.SceneReturn;
}
declare namespace Template {
    function zusammenZumKino(): Template.ƒS.SceneReturn;
}
