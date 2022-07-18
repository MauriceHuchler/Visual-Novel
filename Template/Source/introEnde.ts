namespace Template {
    export async function introEnde(): Template.ƒS.SceneReturn {
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Als " + dataForSave.protagonist.name + " nach oben blickt kann er/sie seinen Augen kaum glauben...");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Es ist ein riesiger Komet");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "so groß dass selbst " + dataForSave.protagonist.name + ", der/die Probleme mit der Distanz hat ihn als riesig beschreibt");

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