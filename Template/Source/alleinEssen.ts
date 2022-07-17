namespace Template {
    export async function alleinEssen() {
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " hat jetzt keine Lust mehr auf das vegane Restaurant")
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " er/sie brauchen was richtiges zwischen den Zähnen")
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + "irgendwas mit Biss und nicht essen für Herbi-Erbis")
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " was auch immer " + dataForSave.protagonist.name + " mit diesem Schimpfwort meint.")
        await Template.ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " doch plötzlich schreckt " + dataForSave.protagonist.name + " auf.");
        return "introEnde";

    }
}