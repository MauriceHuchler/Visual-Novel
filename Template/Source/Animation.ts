namespace Template {
    export enum ANIMATION {
        ERZAHLERSLIDEIN,
        DINASLIDEIN

    }


    export function getAnimation(ani: ANIMATION) {
        switch (ani) {
            case ANIMATION.ERZAHLERSLIDEIN:
                return {
                    start: { translation: Template.ƒS.positionPercent(-50, 80) },
                    end: { translation: getCharPosPerc(CHARACTERS.ERZAHLER) },
                    duration: 0.9,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                }
            case ANIMATION.DINASLIDEIN:
                return {
                    start: { translation: Template.ƒS.positionPercent(150, 80) },
                    end: { translation: getCharPosPerc(CHARACTERS.DINA) },
                    duration: 2,
                    playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                }

        }
    }


}
