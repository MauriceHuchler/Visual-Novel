"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        protagonist: {
            name: "",
            furor: 0
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        Template.ƒS.Speech.hide();
        let scenes = [
            { scene: Template.intro, name: "intro", id: "intro" },
            { scene: Template.morgen, name: "morgen", id: "morgen" },
            { scene: Template.arbeit, name: "arbeit", id: "arbeit" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function arbeit() {
        await Template.ƒS.Location.show(Template.bg.bad);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Bei der Arbeit laufen die Dinge ganz gut.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + "sitz in sienem/ihrem Büro an einem Schreibtisch");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "und sortiert einige lose Blätter die ünber die Wochen liegen geblieben sind.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Plötzlich macht es einen gewaltigen rums.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Dadurch wirbeln all deine sorgfältig sortierten Blätter auf und flattern durch die Luft.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Die Tür fliegt auf und " + Template.dataForSave.protagonist.name + "s' Chef kommt durch die Tür gestampft.");
        await Template.ƒS.Speech.tell(Template.char.Donald.name, Template.dataForSave.protagonist.name.toLocaleUpperCase());
        await Template.ƒS.Speech.tell(Template.char.Donald.name, "WIR HABEN EIN GROßES PROBLEM!!!!");
    }
    Template.arbeit = arbeit;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.bg = {
        schlafzimmer: {
            name: "schlafzimmer",
            background: "./Images/bg2.png",
            foreground: ""
        },
        bad: {
            name: "bad",
            background: "./Images/bg2.png"
        },
        arbeit: {
            name: "arbeit",
            background: "./Images/bg2.png"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.char = {
        Erzahler: {
            name: "Erzähler",
            text: {
                T001: "Bevor die Geschichte starten kann",
                T002: "Muss ich erst von Dir wissen",
                T003: "Wie lautet dein Name?",
                T004: "Gut, da du nun zufrieden bist, geht es los!",
                T005: Template.dataForSave.protagonist.name
            }
        },
        Protagonist: {
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "",
                angry: "",
                relaxed: ""
            }
        },
        Dina: {
            name: "Dina",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "",
                angry: ""
            }
        },
        Donald: {
            name: "Donald",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: ""
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function intro() {
        await Template.ƒS.Location.show(Template.bg.schlafzimmer);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.char.Erzahler.text.T001);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.char.Erzahler.text.T002);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.char.Erzahler.text.T003);
        console.log(Template.dataForSave.protagonist.name);
        Template.dataForSave.protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update(0.5);
        console.log(Template.dataForSave.protagonist.name);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + "... so also?");
        let testDecision = {
            ja: "ja",
            nein: "nein"
        };
        let testDecisionElemenet = await Template.ƒS.Menu.getInput(testDecision, "button");
        switch (testDecisionElemenet) {
            case testDecision.ja:
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.char.Erzahler.text.T004);
                break;
            case testDecision.nein:
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Pech gehabt! Auf los gehts los!");
                break;
            default:
                break;
        }
        Template.ƒS.Character.hideAll();
        return "morgen";
    }
    Template.intro = intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function morgen() {
        await Template.ƒS.Location.show(Template.bg.bad);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " wacht an einem wunderschönen Tag auf.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "reckt und streckt sich und gähnt einmal ganz laut.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ein ganz normaler Tag für " + Template.dataForSave.protagonist.name + ".");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Als T-Rex hat man es nicht immer ganz so einfach im Leben. Die kurzen Arme machen manchmal das Leben ganz schön schwer.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "So macht " + Template.dataForSave.protagonist.name + " sich auf den Weg um sein/ihr morgentliches Ritual zu beginnen.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ganz klassisch fängt er/sie mit dem Zähneputzen an");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "*schrub* *schrub* *schrub*");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "*krack*");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Da scheint " + Template.dataForSave.protagonist.name + " wohl zu viel Druck auf seiner Zahnbürste gehabt zu haben und diese ist abgebrochen.");
        let zahnbuersteDecision = {
            aufregen: "Aufregen und wie ein wildes Tier, an der Spitze der Nahrungskette, herumfluchen!",
            entspannt: "Ganz entspannt bleiben, sowas kann jedem mal passieren, auch den besten der Besten."
        };
        let zahnbuersteDecisionElement = await Template.ƒS.Menu.getInput(zahnbuersteDecision, "button");
        switch (zahnbuersteDecisionElement) {
            case zahnbuersteDecision.aufregen:
                Template.dataForSave.protagonist.furor += 1;
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "schon leicht genervt greift er/sie zum Kamm");
                break;
            case zahnbuersteDecision.entspannt:
                Template.dataForSave.protagonist.furor -= 1;
                break;
        }
        Template.ƒS.Speech.clear();
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " kämmt und kämmt sich die Haare");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "doch die paar vereinzelten Haare wollen heute einfach nicht so.");
        await Template.ƒS.update(1);
        let kammDecision = {
            aufregen2: "Kamm in den Müll schmeißen.",
            entspannt2: "eine Mütze aufziehen."
        };
        let kammDecisionElement = await Template.ƒS.Menu.getInput(kammDecision, "button");
        switch (kammDecisionElement) {
            case kammDecision.aufregen2:
                Template.dataForSave.protagonist.furor += 1;
                break;
            case kammDecision.entspannt2:
                Template.dataForSave.protagonist.furor -= 1;
                break;
        }
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Naja denkt sich" + Template.dataForSave.protagonist.name + "." + " Heute ist wohl einfach nicht sein/ihr Tag.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "*brrr* *brrrr*");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + "s' Handy klingelt. Es ist Dina.");
        await Template.ƒS.Character.show(Template.char.Dina, Template.char.Dina.pose.normal, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Hey Süßer/Süße, na wie war dein Tag?");
        let tagDecision = {
            aufregen: "über den bisherigen Tag beschweren",
            entspannt: "in ruhiger Stimme erklären, dass es schon bessere Tage gegeben hat und es nicht dein Tag ist."
        };
        let tagDecisionElement = await Template.ƒS.Menu.getInput(tagDecision, "button");
        switch (tagDecisionElement) {
            case tagDecision.aufregen:
                Template.dataForSave.protagonist.furor += 1;
                break;
            case tagDecision.entspannt:
                Template.dataForSave.protagonist.furor -= 1;
                break;
        }
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Oh, das Tut mir Leid! Ich würde gern was gutes tun.");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Ich freue mich auf heute Aebnd. Ich hab uns extra ein tolles Restaurant rausgesucht, da gibt es leckeres Essen.");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Ich hab dich lieb und wünsche Dir noch einen schönen Arbeitstag, wir sehen uns heute Abend!");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " legt auf und setzt sich in sein/ihr Auto und fährt zur Arbeit");
        Template.ƒS.Character.hideAll();
        return "arbeit";
    }
    Template.morgen = morgen;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map