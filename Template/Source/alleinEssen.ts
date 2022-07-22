namespace Template {
    export async function alleinEssen() {
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " hat jetzt keine Lust mehr auf das vegane Restaurant")
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " brauch etwas richtiges zwischen den Zähnen.")
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Irgendwas mit Biss und nicht essen für Herbi-Erbis.")
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Was auch immer " + dataForSave.protagonist.name + " mit diesem Schimpfwort meint.")
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Doch plötzlich schreckt " + dataForSave.protagonist.name + " auf.");
        Template.ƒS.Sound.play(sounds.komet, 0.2, false);
        return "introEnde";

    }
}