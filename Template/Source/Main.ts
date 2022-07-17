namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    protagonist: {
      name: "",
      furor: 0,
      dinaLovesYou: true
    }
  }
  window.addEventListener("load", start);


  function start(_event: Event): void {

    ƒS.Speech.hide();
    let scenes: ƒS.Scenes = [
      { scene: intro, name: "intro", id: "intro" },
      { scene: morgen, name: "morgen", id: "morgen" },
      { scene: arbeit, name: "arbeit", id: "arbeit" },
      { scene: dinasHaus, name: "dinasHaus", id: "dinasHaus" },
      { scene: alleinAbHaus, name: "alleinAbHaus", id: "alleinAbHaus" },
      { scene: zusammenZumKino, name: "zusammenZumKino", id: "zusammenZumKino" },
      { scene: alleinEssen, name: "alleinEssen", id: "alleinEssen" }
    ];
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}