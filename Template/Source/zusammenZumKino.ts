namespace Template {
    export async function zusammenZumKino(): Template.ƒS.SceneReturn {
        await ƒS.Location.show(bg.kino);
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Leider sind Dina und " + dataForSave.protagonist.name + " zu spät gekommen. Der Film hat bereits angefangen und man weigert sich die beiden noch in das Kino zu lassen.");
        let kinoDecision = {
            aufgeregt: "Mit Dina einen Streit anfangen und sich über den Tag beschweren",
            entspannt: "Ruhig bleiben und vorschlagen direkt etwas essen zu gehen."
        }

        let kinoDecisionElement = await Template.ƒS.Menu.getInput(kinoDecision, "button");

        switch (kinoDecisionElement) {
            case kinoDecision.aufgeregt:
                beAngry();
                dataForSave.protagonist.dinaLovesYou = false;
                await Template.ƒS.Character.show(char.Dina, char.Dina.pose.angry, getCharPosPerc(CHARACTERS.DINA));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(char.Dina.name, "Weißt du was? Ich mach das nichtmehr mit!");
                await Template.ƒS.Speech.tell(char.Dina.name, "Immer geht es nur um dich und deine Probleme.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, char.Dina.name + " lässt " + dataForSave.protagonist.name + " alleine zurück und macht sich auf den Heimweg.");
                await Template.ƒS.Character.hide(char.Dina);
                await Template.ƒS.update(0.1);
                return "alleinEssen";
            case kinoDecision.entspannt:
                beChill();
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Dina und " + dataForSave.protagonist.name + " gehen weiter zum Restaurant, dass Dina herausgesucht hatte");
                await ƒS.Location.show(bg.brokomet);
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " stockt kurz der Atem als er den Namen des Restaurants ließt");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Brokomet, das beste Vegane Resataurant der Zeit");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Da fällt " + dataForSave.protagonist.name + " wieder ein, dass Dina sich ausschließlich vegan ernährt, also nur von Pflanzen.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "leicht genervt bestellt sich " + dataForSave.protagonist.name + " eine Suppe.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Trotz des anstrengenden Tages haben die beiden einen wunderschönen Abend zusammen und unterhalten sich über viele Dinge");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Als die Suppe ankommt und " + dataForSave.protagonist.name + " eine Schuppe in der Suppe entdeckt");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "lässt " + dataForSave.protagonist.name + " sich nicht davon aufbringen und ist einfach nur froh Dina bei sich zu haben.");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Dina beugt ihren langen Hals herunter, was wirklich seeeeeehr lange dauert um" + dataForSave.protagonist.name + " einen Kuss zu geben");
                Template.ƒS.Sound.play(sounds.komet, 0.2, false);
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Kurz bevor die beiden sich Küssen, schrecken beide auf");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein ohrenbetäubender Knall ist zu hören");
                await Template.ƒS.Speech.tell(char.Erzahler.name, "vor lauter Panik laufen die beiden und mehrere andere Gäste auf hinaus auf die Straße um nachzuschauen was passiert ist.");
                await Template.ƒS.Character.hideAll();
                return "introEnde";
        }
    }
}