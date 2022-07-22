namespace Template {
    export async function endeSchlecht(): ƒS.SceneReturn {
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "'Jetzt reichts!' denkt sich " + dataForSave.protagonist.name);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Komplett außer Rand und Band rennt " + dataForSave.protagonist.name + " davon.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "So könne der Tag nicht enden.");
        await Template.ƒS.Location.show(bg.vulkan);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "An einem Vulkan angekommen nennt " + dataForSave.protagonist.name + " ein geheimes Codewort.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Daraufhin öffnet sich eine Schleuse und " + dataForSave.protagonist.name + " verschwindet in das Innere des Vulkans.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Von außen hört man lautes Rumpeln und Poltern, ab und zu übertönt durch ein lautes Fluchen.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Kurze Zeit später erhebt sich aus dem oberen Teil des Vulkanes eine Plattform.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Es ist " + dataForSave.protagonist.name + " der/die auf einem Gerät sitzt, das an eine riesige futuristische Kanone erinnert.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein Todesstrahl.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Nach ein zwei lauten Lachern,feuert " + dataForSave.protagonist.name + " den Strahl ab.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Der Komet zerbricht in Millionen kleine Teile.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Ein atemberaubendes Feuerwerk findet statt.");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
}