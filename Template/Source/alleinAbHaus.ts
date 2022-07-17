namespace Template {
    export async function alleinAbHaus(): ƒS.SceneReturn {
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Der Film war schlecht.");
        // await Template.ƒS.Speech.tell(char.Erzahler.name,)
        return "alleinEssen";
    }
}