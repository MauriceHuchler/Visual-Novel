"use strict";
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
                T001: "Ferdinooo"
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
        Template.dataForSave.Protagonist.name = await Template.ƒS.Speech.getInput();
    }
    Template.intro = intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    Template.dataForSave = {
        Protagonist: {
            name: "",
            furor: 0
        }
    };
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
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map