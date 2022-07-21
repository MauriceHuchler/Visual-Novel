namespace Template {
    export async function alleinAbHaus(): ƒS.SceneReturn {
        await Template.ƒS.Location.show(bg.kino);
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Der Film war schlecht.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "wieder nur so ein Actionfilm, indem die Erde droht zu explodieren, weil ein riesiger Komet auf die Erde zurast.");
        await Template.ƒS.Character.hideAll();
        return "alleinEssen";
    }
}