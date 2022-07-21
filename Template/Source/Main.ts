namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    protagonist: {
      name: "Ferdinand",
      furor: 0,
      dinaLovesYou: true
    }
  }

  let gameMenu: ƒS.Menu;
  let inGameMenu = {
    soundUp: "+",
    soundDown: "-",
    save: "Save",
    load: "Load",
    close: "Close"
  };
  let menu: boolean = false;
  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    gameMenu.close();
    ƒS.Speech.hide();
    let scenes: ƒS.Scenes = [
      { scene: intro, name: "intro", id: "intro" },
      { scene: morgen, name: "morgen", id: "morgen" },
      { scene: arbeit, name: "arbeit", id: "arbeit" },
      { scene: dinasHaus, name: "dinasHaus", id: "dinasHaus" },
      { scene: alleinAbHaus, name: "alleinAbHaus", id: "alleinAbHaus" },
      { scene: zusammenZumKino, name: "zusammenZumKino", id: "zusammenZumKino" },
      { scene: alleinEssen, name: "alleinEssen", id: "alleinEssen" },
      { scene: introEnde, name: "introEnde", id: "introEnde" },
      { scene: endeGut, name: "endeGut", id: "endeGut" },
      { scene: endeNeutral, name: "endeNeutral", id: "endeNeutral" },
      { scene: endeSchlecht, name: "endeSchlecht", id: "endeSchlecht" },
      { scene: credits, name: "credits", id: "credits" }
    ];
    // start the sequence
    ƒS.Progress.go(scenes);
  }

  document.addEventListener("keydown", hndKeyPress);

  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("game is saved");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        console.log("load sucesfully");
        break;
    }

  }

  export function updateFuror() {
    let furor = document.getElementById("furor");
    furor.textContent = dataForSave.protagonist.furor.toString();
  }

  export function beAngry() {
    ƒS.Sound.fade(sounds.roar, 0.5, 0.1, false);
    dataForSave.protagonist.furor += 1;
    updateFuror();
  }

  export function beChill() {
    ƒS.Sound.fade(sounds.relax, 0.5, 0.1, false);
    dataForSave.protagonist.furor -= 1;
    updateFuror();
  }


  async function buttonFunctionalities(_option: string): Promise<void> {
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
    }


  }
}