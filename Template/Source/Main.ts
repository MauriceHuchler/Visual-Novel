namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    protagonist: {
      name: "",
      furor: 0
    }
  }
  window.addEventListener("load", start);


  function start(_event: Event): void {

    ƒS.Speech.hide();
    let scenes: ƒS.Scenes = [
      { scene: intro, name: "intro", id: "intro" }
    ];
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}