namespace Template {
    export async function introEnde(): Template.ƒS.SceneReturn {
        ƒS.Sound.fade(sounds.jungle, 0.5, 1, true);
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Als " + dataForSave.protagonist.name + " nach oben blickt kann er/sie seinen Augen kaum glauben...");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Es ist ein riesiger Komet");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "so groß dass selbst " + dataForSave.protagonist.name + ", der/die Probleme mit der Distanz hat ihn als riesig beschreibt");
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);

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