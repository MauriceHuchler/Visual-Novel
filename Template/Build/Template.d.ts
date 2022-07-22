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
    function updateFuror(): void;
    function beAngry(): Promise<void>;
    function beChill(): Promise<void>;
}
declare namespace Template {
    enum ANIMATION {
        ERZAHLERSLIDEIN = 0,
        DINASLIDEIN = 1
    }
    function getAnimation(ani: ANIMATION): {
        start: {
            translation: ƒ.Vector2;
        };
        end: {
            translation: ƒ.Vector2;
        };
        duration: number;
        playmode: ƒ.ANIMATION_PLAYMODE;
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
        arbeitSortiert: {
            name: string;
            background: string;
        };
        arbeitUnsortiert: {
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
        brokomet: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    enum CHARACTERS {
        ERZAHLER = 0,
        DINA = 1,
        DONALD = 2
    }
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
    function getCharPosPerc(char: CHARACTERS): ƒ.Vector2;
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
        work: string;
        relax: string;
        restaurant: string;
        roar: string;
        boom: string;
        komet: string;
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
