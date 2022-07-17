namespace Template {
    export async function dinasHaus(): ƒS.SceneReturn {
        await ƒS.Speech.tell(char.Erzahler.name, "Dina sieht man schon von weitem.");
        await ƒS.Speech.tell(char.Erzahler.name, "ihr wunderschöner langer Hals kann man sehr schön erkennen");
        await ƒS.Speech.tell(char.Erzahler.name, "Ihre wundervollen rundlich geformten Beine und der lange Schwanz lassen Sie von den anderen Artgenossen abheben.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Anfänglich denkt Name, dass Dina früher doch noch größer war");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Je näher Name aber an Dina herankommt fällt dir auf wie Sie stetig wächst und wächst und immer größer wird.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Angekommen bei Dina, zeigt sich ihre wahre Größe.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Namens Nacken tut leicht wenn er/sie versucht ihr in die Augen zu schauen.");
        await Template.ƒS.Character.show(char.Dina, char.Dina.pose.normal, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.Speech.tell(char.Dina.name, "Hi Schatz!");
        await Template.ƒS.Speech.tell(char.Dina.name, "Danke dass du mich abholst!");
        await Template.ƒS.Speech.tell(char.Dina.name, "aber sag mal...");
        await Template.ƒS.Speech.tell(char.Dina.name, "Du weißt dass ich ein Brachiosaurus bin.. und dadurch auch größere Sachen gewohnt bist.");
        await Template.ƒS.Speech.tell(char.Dina.name, "ich glaube nicht, dass ich ins Auto passe.");

        let dinaDecision = {
            aufregen: "Mit Dina einen Streit anfangen und dich über deinen Tag beschweren.",
            entspannt: "Fehler eingestehen und zusammen nach einer Lösung suchen."
        }

        let dinaDecisionElement = await Template.ƒS.Menu.getInput(dinaDecision, "button");

        switch (dinaDecisionElement) {
            case dinaDecision.aufregen:
                dataForSave.protagonist.dinaLovesYou = false;
                dataForSave.protagonist.furor += 1;
                //TODO: Dina angry einblenden
                await Template.ƒS.Speech.tell(char.Dina.name, "weißt Du was? Ich mach das nichtmehr mit!");
                await Template.ƒS.Speech.tell(char.Dina.name, "immer gehts nur um dich und deine Probleme!");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Dina dreht wieder um und geht zurück ins Haus.");
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Immernoch leicht wütend aber auch leicht traurig macht sich " + dataForSave.protagonist.name + " auf den Weg zum Kino.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "vielleicht kann der Film ihn/sie ein bisschen ablenken.");
                return "alleinAbHaus";
            case dinaDecision.entspannt:
                dataForSave.protagonist.furor -= 1;
                await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " und Dina unterhalten sich und versuchen eine Lösung für das ganze Problem zu finden.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Die beiden kommen auf die Lösung zusammen zum Kino zu laufen und machen sich auf den Weg.");
                return "zusammenZumKino";
        }




    }
}