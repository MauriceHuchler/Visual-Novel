namespace Template {
    export enum CHARACTERS {
        ERZAHLER,
        DINA,
        DONALD
    }

    export let char = {
        Erzahler: {
            name: "Erzähler",
            text: {
                T001: "Bevor ich dir die Geschichte vorlese",
                T002: "Muss ich erst von Dir wissen",
                T003: "Wie lautet dein Name?",
                T004: "Gut, da du nun zufrieden bist, geht es los!",
                T005: dataForSave.protagonist.name
            },
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/erzahlerTest.png",
            }
        },
        Protagonist: {
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "",
                angry: "",
                relaxed: ""
            }
        },
        Dina: {
            name: "Dina",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/dinaNormal.png",
                angry: "./Images/characters/dinaAngry.png"
            }
        },
        Donald: {
            name: "Donald",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/characters/donaldAngry.png"
            }
        }
    }

    export function getCharPosPerc(char: CHARACTERS) {
        switch (char) {
            case CHARACTERS.DINA:
                return Template.ƒS.positionPercent(87, 95);
            case CHARACTERS.ERZAHLER:
                return Template.ƒS.positionPercent(10, 80);
            case CHARACTERS.DONALD:
                return Template.ƒS.positionPercent(80, 80);
        }
    }
}