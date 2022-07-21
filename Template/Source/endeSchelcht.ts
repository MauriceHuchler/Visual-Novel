namespace Template {
    export async function endeSchlecht(): ƒS.SceneReturn {
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(15, 80));
        await Template.ƒS.Speech.tell(char.Erzahler.name, "'jetzt reichts' denkt sich Name" + dataForSave.protagonist.name);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "komplett außer Rand und Band rennt " + dataForSave.protagonist.name + " davon");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "so könne der Tag nicht enden.");
        await Template.ƒS.Location.show(bg.vulkan);
        await Template.ƒS.Speech.tell(char.Erzahler.name, "An einem Vulkan angekommen nennt " + dataForSave.protagonist.name + " ein geheimes Codewort");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "daraufhin öffnet sich eine Schleuse und " + dataForSave.protagonist.name + " verschwindet in das innere des Vulkans");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Von außen hört man lautes rumpeln und poltern ab und zu übertönt durch ein lautes Fluchen");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "kurz Zeit später erhebt sich aus dem oberen Teil des Vulkanes eine Platform.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "Es ist " + dataForSave.protagonist.name + " der/die auf einem Gerät sitzt dass an eine riesige futuristische Kanone erinnert");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "einen Todesstrah.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "nach ein zwei lauten Lachern,feuert er/sie den Strahl ab.");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "in einem riesigen Feuerwerk zerbricht der Komet in millionen von kleinen Teilen");
        await Template.ƒS.Speech.tell(char.Erzahler.name, "und ein atemberaubendes Feuerwerk findet statt.");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
}