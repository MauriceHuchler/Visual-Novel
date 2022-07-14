namespace Template {
    export async function intro(): ƒS.SceneReturn {
        await ƒS.Location.show(bg.schlafzimmer);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T001);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T002);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T003);
        dataForSave.protagonist.name = await ƒS.Speech.getInput();
        await ƒS.update(0.5);
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
    }

}
