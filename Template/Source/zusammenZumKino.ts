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
                //TODO: Dina angry einblenden
                // await Template.ƒS.Character.show(char.Dina, char.Dina.pose.angry, Template.ƒS.positionPercent())
                await Template.ƒS.Speech.tell(char.Dina.name, "Weißt du was? Ich mach das nichtmehr mit!");
                await Template.ƒS.Speech.tell(char.Dina.name, "Immer geht es nur um dich und deine Probleme.");
                //TODO: dina ausblenden
                await Template.ƒS.Speech.tell(char.Erzahler.name, char.Dina.name + " lässt " + dataForSave.protagonist.name + " alleine zurück und macht sich auf den Heimweg.");
                return "alleinEssen";
            case kinoDecision.entspannt:
                dataForSave.protagonist.furor -= 1;
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Dina und " + dataForSave.protagonist.name + " gehen weiter zum Restaurant, dass Dina herausgesucht hatte");
                await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " stockt kurz der Atem als er den Namen des Restaurants ließt");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Brokomet, das beste Vegane Resataurant der Zeit");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Da fällt Name wieder ein, dass Dina sich ausschließlich vegan ernährt, also nur von Pflanzen.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "leicht genervt bestellt sich " + dataForSave.protagonist.name + " eine Suppe.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "trotz des anstrengenden Tages haben die beiden einen wunderschönen Abend zusammen und unterhalten sich über viele Dinge");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Als die Suppe ankommt und Name eine Schuppe in der Suppe entdeckt");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "lässt er/sie sich nicht davon aufbringen und ist einfach nur froh Dina an seiner/ihrer Seite zu haben.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Dina beugt ihren langen Hals herunter, was wirklich sehr lange dauert um Name einen Kuss zu geben");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Kurz bevor die beiden sich Küssen, schrecken beide auf");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "ein ohrenbetäubender Knall ist zu hören");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "vor lauter Panik laufen die beiden und mehrere andere Gäste auf hinauas auf die Straße um nachzuschauen was passiert ist.");
                return "introEnde";
        }
    }
}