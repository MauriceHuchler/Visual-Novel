namespace Template {
    export async function intro(): ƒS.SceneReturn {
        ƒS.Sound.fade(sounds.jungle, 0.5, 1, true);
        await ƒS.update(1);
        await ƒS.Location.show(bg.schlafzimmer);
        await ƒS.update(0.5);
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
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
        return "morgen";


    }

}
