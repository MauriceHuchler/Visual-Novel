"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        protagonist: {
            name: "Ferdinand",
            furor: 0,
            dinaLovesYou: true
        }
    };
    let gameMenu;
    let inGameMenu = {
        soundUp: "+",
        soundDown: "-",
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let menu = false;
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        gameMenu.close();
        Template.ƒS.Speech.hide();
        let scenes = [
            { scene: Template.intro, name: "intro", id: "intro" },
            { scene: Template.morgen, name: "morgen", id: "morgen" },
            { scene: Template.arbeit, name: "arbeit", id: "arbeit" },
            { scene: Template.dinasHaus, name: "dinasHaus", id: "dinasHaus" },
            { scene: Template.alleinAbHaus, name: "alleinAbHaus", id: "alleinAbHaus" },
            { scene: Template.zusammenZumKino, name: "zusammenZumKino", id: "zusammenZumKino" },
            { scene: Template.alleinEssen, name: "alleinEssen", id: "alleinEssen" },
            { scene: Template.introEnde, name: "introEnde", id: "introEnde" },
            { scene: Template.endeGut, name: "endeGut", id: "endeGut" },
            { scene: Template.endeNeutral, name: "endeNeutral", id: "endeNeutral" },
            { scene: Template.endeSchlecht, name: "endeSchlecht", id: "endeSchlecht" },
            { scene: Template.credits, name: "credits", id: "credits" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("game is saved");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                await Template.ƒS.Progress.load();
                console.log("load sucesfully");
                break;
        }
    }
    function updateFuror() {
        let furor = document.getElementById("furor");
        furor.textContent = Template.dataForSave.protagonist.furor.toString();
    }
    Template.updateFuror = updateFuror;
    function beAngry() {
        Template.ƒS.Sound.fade(Template.sounds.roar, 0.5, 0.1, false);
        Template.dataForSave.protagonist.furor += 1;
        updateFuror();
    }
    Template.beAngry = beAngry;
    function beChill() {
        Template.ƒS.Sound.fade(Template.sounds.relax, 0.5, 0.1, false);
        Template.dataForSave.protagonist.furor -= 1;
        updateFuror();
    }
    Template.beChill = beChill;
    async function buttonFunctionalities(_option) {
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function arbeit() {
        await Template.ƒS.Location.show(Template.bg.arbeitSortiert);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        Template.ƒS.Sound.fade(Template.sounds.work, 0.5, 1, true);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Bei der Arbeit laufen die Dinge ganz gut.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " sitz in seinem/ihrem Büro an einem Schreibtisch");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "und sortiert einige lose Blätter die ünber die Wochen liegen geblieben sind.");
        Template.ƒS.Sound.fade(Template.sounds.boom, 0.5, 0.1, false);
        await Template.ƒS.Location.show(Template.bg.arbeitUnsortiert);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Plötzlich macht es einen gewaltigen rums.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Dadurch wirbeln alle eben sorgfältig sortierten Blätter auf und flattern durch die Luft.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Die Tür fliegt auf und " + Template.dataForSave.protagonist.name + "s' Chef kommt durch die Tür gestampft.");
        await Template.ƒS.Character.show(Template.char.Donald, Template.char.Donald.pose.angry, Template.ƒS.positionPercent(80, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.char.Donald.name, Template.dataForSave.protagonist.name.toLocaleUpperCase());
        await Template.ƒS.Speech.tell(Template.char.Donald.name, "WIR HABEN EIN GROßES PROBLEM!!!!");
        await Template.ƒS.Speech.tell(Template.char.Donald.name, "WENN ES NICHT BALD NEUE FOSSILE BRENNSTOFFE GIBT");
        await Template.ƒS.Speech.tell(Template.char.Donald.name, "DANN GEHEN UNS DIE RESERVEN AUS UND WIR KÖNNEN NICHTMEHR LIEFERN");
        await Template.ƒS.Speech.tell(Template.char.Donald.name, "DAS SCHLIMMSTE IST, ICH GEHE PLEITE!");
        let bossDecision = {
            aufregen: "ihm mitteilen, dass er deine ganze Arbeit durcheinander gebracht hat und er Schuld daran ist",
            entspannt: "versuchen zu erklären, dass es vielleicht falsch berechnet wurde."
        };
        let bossDecisionElement = await Template.ƒS.Menu.getInput(bossDecision, "button");
        switch (bossDecisionElement) {
            case bossDecision.aufregen:
                Template.beAngry();
                break;
            case bossDecision.entspannt:
                Template.beChill();
                break;
        }
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Donald unterbricht " + Template.dataForSave.protagonist.name + " aufgebracht:");
        await Template.ƒS.Speech.tell(Template.char.Donald.name, "SIE HABEN EINE WOCHE ZEIT!");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " setzt seine/ihre Arbeit fort.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Aus unerklärlichen Gründen hat " + Template.dataForSave.protagonist.name + " es trotzdem noch geschafft seine Arbeit rechtzeitig zu erledigen und verlässt pünktlich die Arbeit.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " steigt in's Auto und fährt los um " + Template.char.Dina.name + " abzuholen.");
        await Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sounds.work, 0, 1, false);
        return "dinasHaus";
    }
    Template.arbeit = arbeit;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.bg = {
        schlafzimmer: {
            name: "schlafzimmer",
            background: "./Images/backgrounds/schlafzimmerFarbe.png",
            foreground: ""
        },
        bad: {
            name: "bad",
            background: "./Images/backgrounds/badFarbe.png"
        },
        arbeitSortiert: {
            name: "arbeit",
            background: "./Images/backgrounds/arbeitFarbeSortiert.png"
        },
        arbeitUnsortiert: {
            name: "arbeit",
            background: "./Images/backgrounds/arbeitFarbeUnsortiert.png"
        },
        kino: {
            name: "kino",
            background: "./Images/backgrounds/kinoFarbe.png"
        },
        dinasHaus: {
            name: "dinasHaus",
            background: "./Images/backgrounds/dinasHausFarbe.png"
        },
        vulkan: {
            name: "vulkan",
            background: "./Images/backgrounds/vulkanbaseFarbe.png"
        },
        brokomet: {
            name: "brokomet",
            background: "./Images/backgrounds/brokometFarbe.png"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.char = {
        Erzahler: {
            name: "Erzähler",
            text: {
                T001: "Bevor ich dir die Geschichte vorlese",
                T002: "Muss ich erst von Dir wissen",
                T003: "Wie lautet dein Name?",
                T004: "Gut, da du nun zufrieden bist, geht es los!",
                T005: Template.dataForSave.protagonist.name
            },
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/erzahlerTest.png",
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
                normal: "./Images/characters/dinaNormal.png",
                angry: "./Images/characters/dinaAngry.png"
            }
        },
        Donald: {
            name: "Donald",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/characters/donaldAngry.png"
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function credits() {
        let pages = "<h1>The End</h1> \
            <h2>und was lernen wir daraus? </h2> \
            <h3>Bleib ruhig und entspannt und dann ist dein Tag gerettet</h3> \
            <h2>Copyrights</h2> \
            <p>Story: Maurice Huchler</p> \
            <p>Backgrounds: Maurice Huchler</p> \
            <p>Characters: Maurice Huchler</p> \
        <p>Sounds: pixabay.com</p>";
        Template.ƒS.Text.setClass("credits");
        Template.ƒS.Text.print(pages);
    }
    Template.credits = credits;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function dinasHaus() {
        Template.ƒS.Sound.fade(Template.sounds.jungle, 0.5, 1, true);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.Location.show(Template.bg.dinasHaus);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Dina sieht man schon von weitem.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ihren wunderschöner langer Hals kann man schon von weitem erkennen");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Durch ihre wundervoll rundlich geformten Beine und der lange Schwanz hebt sie sich von den anderen Artgenossen ab.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Anfänglich denkt " + Template.dataForSave.protagonist.name + ", dass Dina früher doch noch größer war");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Je näher " + Template.dataForSave.protagonist.name + " aber an Sie herankommt, desto größer und größerscheint sie zu werden.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Angekommen bei Dina, zeigt sich ihre wahre Größe.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + "'s Nacken tut leicht weh, wenn er/sie versucht ihr in die Augen zu schauen.");
        await Template.ƒS.Character.show(Template.char.Dina, Template.char.Dina.pose.normal, Template.ƒS.positionPercent(85, 95));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Hi Schatz!");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Danke, dass du mich abholst!");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "aber sag mal...");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Du weißt dass ich ein Brachiosaurus bin.. und dadurch größere Sachen gewohnt bin.");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Ich glaube nicht, dass Ich ins Auto passe.");
        let dinaDecision = {
            aufregen: "Mit Dina einen Streit anfangen und dich über deinen Tag beschweren.",
            entspannt: "Fehler eingestehen und zusammen nach einer Lösung suchen."
        };
        let dinaDecisionElement = await Template.ƒS.Menu.getInput(dinaDecision, "button");
        switch (dinaDecisionElement) {
            case dinaDecision.aufregen:
                Template.beAngry();
                await Template.ƒS.Character.show(Template.char.Dina, Template.char.Dina.pose.angry, Template.ƒS.positionPercent(85, 95));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.char.Dina.name, "weißt Du was? Ich mach das nichtmehr mit!");
                await Template.ƒS.Speech.tell(Template.char.Dina.name, "immer gehts nur um dich und deine Probleme!");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Dina dreht wieder um und geht zurück ins Haus.");
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Immernoch leicht wütend aber auch leicht traurig macht sich " + Template.dataForSave.protagonist.name + " auf den Weg zum Kino.");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "vielleicht kann der Film ihn/sie ein bisschen ablenken.");
                await Template.ƒS.Character.hide(Template.char.Dina);
                await Template.ƒS.update(0.1);
                return "alleinAbHaus";
            case dinaDecision.entspannt:
                Template.beChill();
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " und Dina unterhalten sich und versuchen eine Lösung für das ganze Problem zu finden.");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Die beiden kommen auf die Lösung zusammen zum Kino zu laufen und machen sich auf den Weg.");
                await Template.ƒS.Character.hideAll();
                return "zusammenZumKino";
        }
    }
    Template.dinasHaus = dinasHaus;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function intro() {
        Template.ƒS.Sound.fade(Template.sounds.jungle, 0.5, 1, true);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.bg.schlafzimmer);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
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
        return "morgen";
    }
    Template.intro = intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function morgen() {
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " wacht an einem wunderschönen Tag auf.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "reckt und streckt sich und gähnt einmal ganz laut.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ein ganz normaler Tag für " + Template.dataForSave.protagonist.name + ".");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Als T-Rex hat man es nicht immer ganz so einfach im Leben. Die kurzen Arme machen manchmal das Leben ganz schön schwer.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "So macht " + Template.dataForSave.protagonist.name + " sich auf den Weg um sein/ihr morgentliches Ritual zu beginnen.");
        await Template.ƒS.Location.show(Template.bg.bad);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ganz klassisch fängt er/sie mit dem Zähneputzen an");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "*schrub* *schrub* *schrub*");
        Template.ƒS.Sound.fade(Template.sounds.krack, 0.5, 0, false);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "*krack*");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Da scheint " + Template.dataForSave.protagonist.name + " wohl zu viel Druck auf seiner Zahnbürste gehabt zu haben und diese ist abgebrochen.");
        let zahnbuersteDecision = {
            aufregen: "Aufregen und wie ein wildes Tier, an der Spitze der Nahrungskette, herumfluchen!",
            entspannt: "Ganz entspannt bleiben, sowas kann jedem mal passieren, auch den besten der Besten."
        };
        let zahnbuersteDecisionElement = await Template.ƒS.Menu.getInput(zahnbuersteDecision, "button");
        switch (zahnbuersteDecisionElement) {
            case zahnbuersteDecision.aufregen:
                Template.beAngry();
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "schon leicht genervt greift er/sie zum Kamm");
                break;
            case zahnbuersteDecision.entspannt:
                Template.beChill();
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
                Template.beAngry();
                break;
            case kammDecision.entspannt2:
                Template.beChill();
                break;
        }
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Naja denkt sich " + Template.dataForSave.protagonist.name + "." + " Heute ist wohl einfach nicht sein/ihr Tag.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "*brrr* *brrrr*");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + "s' Handy klingelt. Es ist Dina.");
        await Template.ƒS.Character.show(Template.char.Dina, Template.char.Dina.pose.normal, Template.ƒS.positionPercent(87, 95));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Hey Süßer/Süße, gut geschlafen?");
        let tagDecision = {
            aufregen: "über den bisherigen Tag beschweren",
            entspannt: "in ruhiger Stimme erklären, dass es schon bessere Tage gegeben hat und es nicht dein Tag ist."
        };
        let tagDecisionElement = await Template.ƒS.Menu.getInput(tagDecision, "button");
        switch (tagDecisionElement) {
            case tagDecision.aufregen:
                Template.beAngry();
                break;
            case tagDecision.entspannt:
                Template.beChill();
                break;
        }
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Oh, das Tut mir Leid! Ich würde gern was Gutes tun.");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Ich freue mich auf heute Abend. Ich hab uns extra ein tolles Restaurant rausgesucht, da gibt es leckeres Essen.");
        await Template.ƒS.Speech.tell(Template.char.Dina.name, "Ich hab dich lieb und wünsche Dir noch einen schönen Arbeitstag, wir sehen uns heute Abend!");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " legt auf und setzt sich in das Auto um zur Arbeit zu fahren");
        Template.ƒS.Character.hideAll();
        Template.ƒS.Sound.fade(Template.sounds.jungle, 0, 1, true);
        return "arbeit";
    }
    Template.morgen = morgen;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sounds = {
        jungle: "./Sounds/jungle.mp3",
        krack: "./Sounds/krack.mp3",
        work: "./Sounds/work.mp3",
        relax: "./Sounds/relax.mp3",
        restaurant: "./Sounds/restaurant.mp3",
        roar: "./Sounds/roar.mp3",
        boom: "./Sounds/boom.mp3"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function alleinAbHaus() {
        await Template.ƒS.Location.show(Template.bg.kino);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Der Film war schlecht.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "wieder nur so ein Actionfilm, indem die Erde droht zu explodieren, weil ein riesiger Komet auf die Erde zurast.");
        await Template.ƒS.Character.hideAll();
        return "alleinEssen";
    }
    Template.alleinAbHaus = alleinAbHaus;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function alleinEssen() {
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " hat jetzt keine Lust mehr auf das vegane Restaurant");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " brauch etwas richtiges zwischen den Zähnen.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Irgendwas mit Biss und nicht essen für Herbi-Erbis.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Was auch immer " + Template.dataForSave.protagonist.name + " mit diesem Schimpfwort meint.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Doch plötzlich schreckt " + Template.dataForSave.protagonist.name + " auf.");
        return "introEnde";
    }
    Template.alleinEssen = alleinEssen;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function endeGut() {
        await Template.ƒS.Location.show(Template.bg.vulkan);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(15, 80));
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " kann heute nichtsmehr erschüttern");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "vor lauter Freude und Glück die ganze Ereignisse heute gemeistert zu haben und immer entspannt zu bleiben");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "strahlt " + Template.dataForSave.protagonist.name + " bis über beide T-Rex-Ohren.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Aus unerklärlichen Gründen merkt der Komet,");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "dass er heute keinen Schaden anrichten kann.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "So denkt dieser sich: 'Heute nicht.' und macht einen großen Bogen um die Erde.");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
    Template.endeGut = endeGut;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function endeNeutral() {
        //TODO: background = Brokomet
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "völlig geschockt bleibt " + Template.dataForSave.protagonist.name + " stehen");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "komplett aufgewühlt durch den Tag weiß er/sie nicht was er/sie tun soll.");
        if (Template.dataForSave.protagonist.dinaLovesYou) {
            await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " nimmt Dina in den Arm und sagt ihr, dass er/sie sie liebt.");
        }
        else {
            await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " versucht Dina anzurufen und ihr zu sagen, dass ihm/ihr das alles fürchterlich Leid tut.");
        }
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "die Erde bebt.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Der Komet ist nun mittlerweile auf der Erde aufgeschlagen.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Alles was noch vor ein paar Sekunden standhaft war, steht jetzt nichtmehr oder liegt auf dem Boden");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + "nimmt nur noch war wie es ganz warm wird und immer heller und heller...");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
    Template.endeNeutral = endeNeutral;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function endeSchlecht() {
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(15, 80));
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "'jetzt reichts' denkt sich " + Template.dataForSave.protagonist.name);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "komplett außer Rand und Band rennt " + Template.dataForSave.protagonist.name + " davon");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "so könne der Tag nicht enden.");
        await Template.ƒS.Location.show(Template.bg.vulkan);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "An einem Vulkan angekommen nennt " + Template.dataForSave.protagonist.name + " ein geheimes Codewort");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "daraufhin öffnet sich eine Schleuse und " + Template.dataForSave.protagonist.name + " verschwindet in das innere des Vulkans");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Von außen hört man lautes rumpeln und poltern ab und zu übertönt durch ein lautes Fluchen");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "kurz Zeit später erhebt sich aus dem oberen Teil des Vulkanes eine Platform.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Es ist " + Template.dataForSave.protagonist.name + " der/die auf einem Gerät sitzt dass an eine riesige futuristische Kanone erinnert");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "einen Todesstrah.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "nach ein zwei lauten Lachern,feuert er/sie den Strahl ab.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "in einem riesigen Feuerwerk zerbricht der Komet in millionen von kleinen Teilen");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "und ein atemberaubendes Feuerwerk findet statt.");
        Template.ƒS.Character.hideAll();
        return "credits";
    }
    Template.endeSchlecht = endeSchlecht;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function introEnde() {
        Template.ƒS.Sound.fade(Template.sounds.jungle, 0.5, 1, true);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Als " + Template.dataForSave.protagonist.name + " nach oben blickt kann er/sie seinen Augen kaum glauben...");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Es ist ein riesiger Komet");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "so groß dass selbst " + Template.dataForSave.protagonist.name + ", der/die Probleme mit der Distanz hat ihn als riesig beschreibt");
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(0.1);
        if (Template.dataForSave.protagonist.furor > 4) {
            return "endeSchlecht";
        }
        if (Template.dataForSave.protagonist.furor < -3) {
            return "endeGut";
        }
        if (Template.dataForSave.protagonist.furor >= -3 && Template.dataForSave.protagonist.furor <= 3) {
            return "endeNeutral";
        }
    }
    Template.introEnde = introEnde;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function zusammenZumKino() {
        await Template.ƒS.Location.show(Template.bg.kino);
        await Template.ƒS.Character.show(Template.char.Erzahler, Template.char.Erzahler.pose.normal, Template.ƒS.positionPercent(10, 80));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ein bisschen erschöpft vom laufen, kommen die beiden am Kino an.");
        await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Leider sind Dina und " + Template.dataForSave.protagonist.name + " zu spät gekommen. Der Film hat bereits angefangen und man weigert sich die beiden noch in das Kino zu lassen.");
        let kinoDecision = {
            aufgeregt: "Mit Dina einen Streit anfangen und sich über den Tag beschweren",
            entspannt: "Ruhig bleiben und vorschlagen direkt etwas essen zu gehen."
        };
        let kinoDecisionElement = await Template.ƒS.Menu.getInput(kinoDecision, "button");
        switch (kinoDecisionElement) {
            case kinoDecision.aufgeregt:
                Template.beAngry();
                Template.dataForSave.protagonist.dinaLovesYou = false;
                await Template.ƒS.Character.show(Template.char.Dina, Template.char.Dina.pose.angry, Template.ƒS.positionPercent(85, 95));
                await Template.ƒS.update(0.1);
                await Template.ƒS.Speech.tell(Template.char.Dina.name, "Weißt du was? Ich mach das nichtmehr mit!");
                await Template.ƒS.Speech.tell(Template.char.Dina.name, "Immer geht es nur um dich und deine Probleme.");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.char.Dina.name + " lässt " + Template.dataForSave.protagonist.name + " alleine zurück und macht sich auf den Heimweg.");
                await Template.ƒS.Character.hide(Template.char.Dina);
                await Template.ƒS.update(0.1);
                return "alleinEssen";
            case kinoDecision.entspannt:
                Template.beChill();
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Dina und " + Template.dataForSave.protagonist.name + " gehen weiter zum Restaurant, dass Dina herausgesucht hatte");
                await Template.ƒS.Location.show(Template.bg.brokomet);
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, Template.dataForSave.protagonist.name + " stockt kurz der Atem als er den Namen des Restaurants ließt");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Brokomet, das beste Vegane Resataurant der Zeit");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Da fällt " + Template.dataForSave.protagonist.name + " wieder ein, dass Dina sich ausschließlich vegan ernährt, also nur von Pflanzen.");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "leicht genervt bestellt sich " + Template.dataForSave.protagonist.name + " eine Suppe.");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Trotz des anstrengenden Tages haben die beiden einen wunderschönen Abend zusammen und unterhalten sich über viele Dinge");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Als die Suppe ankommt und " + Template.dataForSave.protagonist.name + " eine Schuppe in der Suppe entdeckt");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "lässt " + Template.dataForSave.protagonist.name + " sich nicht davon aufbringen und ist einfach nur froh Dina bei sich zu haben.");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Dina beugt ihren langen Hals herunter, was wirklich seeeeeehr lange dauert um" + Template.dataForSave.protagonist.name + " einen Kuss zu geben");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Kurz bevor die beiden sich Küssen, schrecken beide auf");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "Ein ohrenbetäubender Knall ist zu hören");
                await Template.ƒS.Speech.tell(Template.char.Erzahler.name, "vor lauter Panik laufen die beiden und mehrere andere Gäste auf hinaus auf die Straße um nachzuschauen was passiert ist.");
                await Template.ƒS.Character.hideAll();
                return "introEnde";
        }
    }
    Template.zusammenZumKino = zusammenZumKino;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map