namespace Template {
    export async function endeNeutral(): ƒS.SceneReturn {
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, getCharPosPerc(CHARACTERS.ERZAHLER));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Völlig geschockt bleibt " + dataForSave.protagonist.name + " stehen.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Komplett aufgewühlt durch den Tag weiß " + dataForSave.protagonist.name + " nicht was zu tun ist.");

        if (dataForSave.protagonist.dinaLovesYou) {
            await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " nimmt Dina in den Arm und sagt ihr, dass er/sie sie liebt.");
        }
        else {
            await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " versucht Dina anzurufen und ihr zu sagen, dass alles ein Fehler war und ihm/ihr fürchterlich Leid tut.");

        }

        await Template.ƒS.Speech.tell(char.Erzahler.name, "Die Erde bebt.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Der Komet ist nun mittlerweile auf der Erde aufgeschlagen.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Alles was noch vor ein paar Sekunden standhaft war, steht jetzt nichtmehr oder liegt auf dem Boden.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " nimmt nur noch war wie es ganz warm wird und immer heller und heller...");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
}