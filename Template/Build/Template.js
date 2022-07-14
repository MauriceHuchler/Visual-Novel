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
            { scene: Template.intro, name: "intro", id: "intro" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.bg = {
        schlafzimmer: {
            name: "schlafzimmer",
            background: "./Images/bg2.png",
            foreground: ""
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
                T004: "Gut, da du nun zufrieden bist, geht es los!"
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
        Template.dataForSave.protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update(0.5);
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
    }
    Template.intro = intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map