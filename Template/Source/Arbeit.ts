namespace Template {
    export async function arbeit(): ƒS.SceneReturn {
        await ƒS.Location.show(bg.bad);
        await Template.ƒS.Character.show(char.Erzahler, char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await ƒS.update(0.5);

        await ƒS.Speech.tell(char.Erzahler.name, "Bei der Arbeit laufen die Dinge ganz gut.");
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " sitz in seinem/ihrem Büro an einem Schreibtisch");
        await ƒS.Speech.tell(char.Erzahler.name, "und sortiert einige lose Blätter die ünber die Wochen liegen geblieben sind.");
        await ƒS.Speech.tell(char.Erzahler.name, "Plötzlich macht es einen gewaltigen rums.");
        await ƒS.Speech.tell(char.Erzahler.name, "Dadurch wirbeln all deine sorgfältig sortierten Blätter auf und flattern durch die Luft.");
        await ƒS.Speech.tell(char.Erzahler.name, "Die Tür fliegt auf und " + dataForSave.protagonist.name + "s' Chef kommt durch die Tür gestampft.");
        await ƒS.Speech.tell(char.Donald.name, dataForSave.protagonist.name.toLocaleUpperCase());
        await ƒS.Speech.tell(char.Donald.name, "WIR HABEN EIN GROßES PROBLEM!!!!");
        await ƒS.Speech.tell(char.Donald.name, "WENN WIR NICHT BALD FOSSILE BRENNSTOFFE GIBT");
        await ƒS.Speech.tell(char.Donald.name, "DANN GEHEN UNS DIE RESERVEN AUS UND WIR KÖNNEN NICHTMEHR LIEFERN");
        await ƒS.Speech.tell(char.Donald.name, "DAS SCHLIMMSTE IST, ICH GEHE PLEITE!");

        let bossDecision = {
            aufregen: "ihm mitteilen, dass er deine ganze Arbeit durcheinander gebracht hat und er Schuld daran ist",
            entspannt: "versuchen zu erklären, dass es vielleicht falsch berechnet wurde."
        }

        let bossDecisionElement = await Template.ƒS.Menu.getInput(bossDecision, "button");

        switch (bossDecisionElement) {
            case bossDecision.aufregen:
                dataForSave.protagonist.furor += 1;
                break;
            case bossDecision.entspannt:
                dataForSave.protagonist.furor -= 1;
                break;
        }

        await ƒS.Speech.tell(char.Erzahler.name, "Donald lässt dich nicht ausreden und unterbicht dich mitten in deinem Satz mit:");
        await ƒS.Speech.tell(char.Donald.name, "SIE HABEN EINE WOCHE ZEIT!");
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + "setzt seine/ihre Arbeit fort.");
        await ƒS.Speech.tell(char.Erzahler.name, "aus unerklärlichen Gründen hat er/sie es trotzdem noch geschafft seine Arbeit innerhalb der Arbeitszeit auszuführen und verlässt pünktlich die Arbeit.");
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name + " steigt in sein/ihr Auto und fährt los um " + char.Dina.name + " abzuholen.");
        return "dinasHaus"












    }
}