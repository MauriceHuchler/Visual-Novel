namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  window.addEventListener("load", start);


  export let dataForSave = {
    Protagonist: {
      name: "",
      furor: 0
    }
  }
  function start(_event: Event): void {

    ƒS.Speech.hide();
    let scenes: ƒS.Scenes = [
      { scene: intro, name: "intro", id: "intro" }
    ];
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}