namespace Template {
    export async function endeGut(): ƒS.SceneReturn {
        //TODO: background = brokomet
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(15, 80));
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " kann heute nichtsmehr erschüttern");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "vor lauter Glück, all die schlechten Dinge heute so hinzunehmen wie sie sind und immer entspannt zu bleiben");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "strahlt Name mit einem riesigen lächeln");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "aus unerklärlichen Gründen merkt der Komet,");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "dass er heute keinen Schaden anrichten kann.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "und macht einen großen Bogen um die Erde.");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
}