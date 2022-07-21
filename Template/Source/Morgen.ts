namespace Template {
    export async function morgen(): ƒS.SceneReturn {
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " wacht an einem wunderschönen Tag auf.");
        await ƒS.Speech.tell(char.Erzahler.name, "reckt und streckt sich und gähnt einmal ganz laut.");
        await ƒS.Speech.tell(char.Erzahler.name, "Ein ganz normaler Tag für " + dataForSave.protagonist.name + ".");
        await ƒS.Speech.tell(char.Erzahler.name, "Als T-Rex hat man es nicht immer ganz so einfach im Leben. Die kurzen Arme machen manchmal das Leben ganz schön schwer.");
        await ƒS.Speech.tell(char.Erzahler.name, "So macht " + dataForSave.protagonist.name + " sich auf den Weg um sein/ihr morgentliches Ritual zu beginnen.");
        await ƒS.Location.show(bg.bad);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(char.Erzahler.name, "Ganz klassisch fängt er/sie mit dem Zähneputzen an");
        await ƒS.Speech.tell(char.Erzahler.name, "*schrub* *schrub* *schrub*");
        ƒS.Sound.fade(sounds.krack, 0.5, 0, false);
        await ƒS.update(2);
        await ƒS.Speech.tell(char.Erzahler.name, "*krack*");
        await ƒS.Speech.tell(char.Erzahler.name, "Da scheint " + dataForSave.protagonist.name + " wohl zu viel Druck auf seiner Zahnbürste gehabt zu haben und diese ist abgebrochen.");

        let zahnbuersteDecision = {
            aufregen: "Aufregen und wie ein wildes Tier, an der Spitze der Nahrungskette, herumfluchen!",
            entspannt: "Ganz entspannt bleiben, sowas kann jedem mal passieren, auch den besten der Besten."
        }

        let zahnbuersteDecisionElement = await ƒS.Menu.getInput(zahnbuersteDecision, "button");

        switch (zahnbuersteDecisionElement) {
            case zahnbuersteDecision.aufregen:
                beAngry();
                await ƒS.Speech.tell(char.Erzahler.name, "schon leicht genervt greift er/sie zum Kamm");
                break;

            case zahnbuersteDecision.entspannt:
                beChill();
                break;

        }

        Template.ƒS.Speech.clear();

        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " kämmt und kämmt sich die Haare");

        await ƒS.Speech.tell(char.Erzahler.name, "doch die paar vereinzelten Haare wollen heute einfach nicht so.");
        await ƒS.update(1);

        let kammDecision = {
            aufregen2: "Kamm in den Müll schmeißen.",
            entspannt2: "eine Mütze aufziehen."
        }

        let kammDecisionElement = await ƒS.Menu.getInput(kammDecision, "button");

        switch (kammDecisionElement) {
            case kammDecision.aufregen2:
                beAngry();

                break;
            case kammDecision.entspannt2:
                beChill();
                break;
        }

        await ƒS.Speech.tell(char.Erzahler.name, "Naja denkt sich " + dataForSave.protagonist.name + "." + " Heute ist wohl einfach nicht sein/ihr Tag.");
        await ƒS.Speech.tell(char.Erzahler.name, "*brrr* *brrrr*");
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + "s' Handy klingelt. Es ist Dina.");
        await Template.ƒS.Character.show(char.Dina, char.Dina.pose.normal, Template.ƒS.positionPercent(87, 95));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(char.Erzahler.name, "Hey Süßer/Süße, gut geschlafen?");

        let tagDecision = {
            aufregen: "über den bisherigen Tag beschweren",
            entspannt: "in ruhiger Stimme erklären, dass es schon bessere Tage gegeben hat und es nicht dein Tag ist."
        }

        let tagDecisionElement = await ƒS.Menu.getInput(tagDecision, "button");

        switch (tagDecisionElement) {
            case tagDecision.aufregen:
                beAngry();

                break;
            case tagDecision.entspannt:
                beChill();
                break;
        }

        await ƒS.Speech.tell(char.Dina.name, "Oh, das Tut mir Leid! Ich würde gern was Gutes tun.");
        await ƒS.Speech.tell(char.Dina.name, "Ich freue mich auf heute Abend. Ich hab uns extra ein tolles Restaurant rausgesucht, da gibt es leckeres Essen.");
        await ƒS.Speech.tell(char.Dina.name, "Ich hab dich lieb und wünsche Dir noch einen schönen Arbeitstag, wir sehen uns heute Abend!");
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " legt auf und setzt sich in das Auto um zur Arbeit zu fahren");
        Template.ƒS.Character.hideAll();
        ƒS.Sound.fade(sounds.jungle, 0, 1, true);
        return "arbeit"




    }
}