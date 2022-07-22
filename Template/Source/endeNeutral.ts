namespace Template {
    export async function endeNeutral(): ƒS.SceneReturn {
        //TODO: background = Brokomet
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "völlig geschockt bleibt " + dataForSave.protagonist.name + " stehen");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "komplett aufgewühlt durch den Tag weiß er/sie nicht was er/sie tun soll.");

        if (dataForSave.protagonist.dinaLovesYou) {
            await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " nimmt Dina in den Arm und sagt ihr, dass er/sie sie liebt.");
        }
        else {
            await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " versucht Dina anzurufen und ihr zu sagen, dass ihm/ihr das alles fürchterlich Leid tut.");

        }

        await Template.ƒS.Speech.tell(char.Erzahler.name, "die Erde bebt.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Der Komet ist nun mittlerweile auf der Erde aufgeschlagen.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Alles was noch vor ein paar Sekunden standhaft war, steht jetzt nichtmehr oder liegt auf dem Boden");
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + "nimmt nur noch war wie es ganz warm wird und immer heller und heller...");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
}