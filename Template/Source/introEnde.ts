namespace Template {
    export async function introEnde(): Template.ƒS.SceneReturn {
        if (dataForSave.protagonist.furor > 4) {
            return "endeSchlecht";
        }
        if (dataForSave.protagonist.furor < -3) {
            return "endeGut";
        }
        if (dataForSave.protagonist.furor >= -3 && dataForSave.protagonist.furor <= 3) {
            return "endeNeutral";
        }
    }
}