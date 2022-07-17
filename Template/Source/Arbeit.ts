namespace Template {
    export async function arbeit(): ƒS.SceneReturn {
        await ƒS.Location.show(bg.bad);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(char.Erzahler.name, "Bei der Arbeit laufen die Dinge ganz gut.");
        await ƒS.Speech.tell(char.Erzahler.name, dataForSave.protagonist.name+"sitz in sienem/ihrem Büro an einem Schreibtisch");
        await ƒS.Speech.tell(char.Erzahler.name, "und sortiert einige lose Blätter die ünber die Wochen liegen geblieben sind.");
        await ƒS.Speech.tell(char.Erzahler.name, "Plötzlich macht es einen gewaltigen rums.");
        await ƒS.Speech.tell(char.Erzahler.name, "Dadurch wirbeln all deine sorgfältig sortierten Blätter auf und flattern durch die Luft.");
        await ƒS.Speech.tell(char.Erzahler.name, "Die Tür fliegt auf und "+ dataForSave.protagonist.name + "s' Chef kommt durch die Tür gestampft.");
        await ƒS.Speech.tell(char.Donald.name,dataForSave.protagonist.name.toLocaleUpperCase());
        await ƒS.Speech.tell(char.Donald.name,"WIR HABEN EIN GROßES PROBLEM!!!!");




    }
}