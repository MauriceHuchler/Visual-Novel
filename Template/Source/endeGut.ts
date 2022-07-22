namespace Template {
    export async function endeGut(): ƒS.SceneReturn {
        await ƒS.Location.show(bg.vulkan);
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, getCharPosPerc(CHARACTERS.ERZAHLER));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " kann heute nichtsmehr erschüttern.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Vor lauter Freude und Glück, die ganze Ereignisse heute gemeistert zu haben und immer entspannt zu bleiben,");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "strahlt " + dataForSave.protagonist.name + " bis über beide T-Rex-Ohren.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Aus unerklärlichen Gründen merkt der Komet,");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "dass er heute keinen Schaden anrichten kann.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "So denkt dieser sich: 'Heute nicht.' und macht einen großen Bogen um die Erde.");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
}