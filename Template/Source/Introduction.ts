namespace Template {
    export async function intro(): ƒS.SceneReturn {
        await ƒS.Location.show(bg.schlafzimmer);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(char.Erzahler.name, char.Erzahler.text.T001)
        dataForSave.Protagonist.name = await ƒS.Speech.getInput();
    }

}
