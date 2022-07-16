namespace Template {
    export async function intro(): ƒS.SceneReturn {
        await ƒS.Location.show(bg.schlafzimmer);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T001);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T002);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T003);
        console.log(dataForSave.protagonist.name);
        dataForSave.protagonist.name = await ƒS.Speech.getInput();
        await ƒS.update(0.5);
        console.log(dataForSave.protagonist.name);
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + "... so also?");

        let testDecision = {
            ja: "ja",
            nein: "nein"
        };

        let testDecisionElemenet = await ƒS.Menu.getInput(testDecision, "button");

        switch (testDecisionElemenet) {
            case testDecision.ja:
                await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T004);
                break;
            case testDecision.nein:
                await ƒS.Speech.tell(char.Erzahler.name, "Pech gehabt! Auf los gehts los!");
                break;
            default:
                break;
        }

        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " wacht an einem wunderschönen Tag auf.");
        await ƒS.Speech.tell(char.Erzahler.name, "reckt und streckt sich und gähnt einmal ganz laut.");
        await ƒS.Speech.tell(char.Erzahler.name, "Ein ganz normaler Tag für " + dataForSave.protagonist.name + ".");
        await ƒS.Speech.tell(char.Erzahler.name, "Als T-Rex hat man es nicht immer ganz so einfach im Leben. Die kurzen Arme machen manchmal das Leben ganz schön schwer.");
        await ƒS.Speech.tell(char.Erzahler.name, "So macht " + dataForSave.protagonist.name + " sich auf den Weg um sein/ihr morgentliches Ritual zu beginnen.");
        await ƒS.Speech.tell(char.Erzahler.name, "Ganz klassisch fängt er/sie mit dem Zähneputzen an");
        await ƒS.Speech.tell(char.Erzahler.name, "*schrub* *schrub* *schrub*");
        await ƒS.Speech.tell(char.Erzahler.name, "*krack*");
        await ƒS.Speech.tell(char.Erzahler.name, "Da scheint " + dataForSave.protagonist.name + " wohl zu viel Druck auf seiner Zahnbürste gehabt zu haben und diese ist abgebrochen.");

        let zahnbuersteDecision = {
            aufregen: "Aufregen und wie ein wildes Tier, an der Spitze der Nahrungskette, herumfluchen!",
            entspannt: "Ganz entspannt bleiben, sowas kann jedem mal passieren, auch den besten der Besten."
        }

        let zahnbuersteDecisionElement = await ƒS.Menu.getInput(zahnbuersteDecision, "button");

        switch (zahnbuersteDecisionElement) {
            case zahnbuersteDecision.aufregen:
                dataForSave.protagonist.furor += 1;
                await ƒS.Speech.tell(char.Erzahler.name, "schon leicht genervt greift er/sie zum Kamm");
                break;

            case zahnbuersteDecision.entspannt:
                dataForSave.protagonist.furor -= 1;
                break;
        }

        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " kämmt und kämmt sich die Haare");

        await ƒS.Speech.tell(char.Erzahler.name, "doch die paar vereinzelten Haare wollen heute einfach nicht so.");

        let kammDecision: {
            aufregen: "Kamm in den Müll schmeißen."
            entspannt: "eine Mütze aufziehen."
        }

        let kammDecisionElement = await ƒS.Menu.getInput(kammDecision, "button");

        switch (kammDecisionElement) {
            case kammDecision.aufregen:
                dataForSave.protagonist.furor += 1
                break;
            case kammDecision.entspannt:
                dataForSave.protagonist.furor -= 1
                break;
        }



    }

}
