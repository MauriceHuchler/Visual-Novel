namespace Template {
    export async function zusammenZumKino(): Template.ƒS.SceneReturn {
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "durch die ganze Sache hat sich alles verzögert, sodass sie nichtmehr in den Film gelassen werden, da dieser schon angefangen hat.");
        let kinoDecision = {
            aufgeregt: "Mit Dina einen Streit anfangen und sich über den Tag beschweren",
            entspannt: "Ruhig bleiben und vorschlagen direkt etwas essen zu gehen."
        }

        let kinoDecisionElement = await Template.ƒS.Menu.getInput(kinoDecision, "button");

        switch (kinoDecisionElement) {
            case kinoDecision.aufgeregt:
                dataForSave.protagonist.furor += 1;
                dataForSave.protagonist.dinaLovesYou = false;
                //TODO: Diana einblenden
                await Template.ƒS.Speech.tell(char.Dina.name, "Weißt du was? Ich mach das nichtmehr mit!");
                await Template.ƒS.Speech.tell(char.Dina.name, "Immer geht es nur um dich und deine Probleme.");
                //TODO: diana ausblenden
                await Template.ƒS.Speech.tell(char.Erzahler.name, char.Dina.name + " lässt " + dataForSave.protagonist.name + " alleine zurück und macht sich auf den Heimweg.");
                return "alleinEssen";
            case kinoDecision.entspannt:
                dataForSave.protagonist.furor -= 1;
                break;
        }






        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");

    }
}