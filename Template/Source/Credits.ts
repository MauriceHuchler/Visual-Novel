namespace Template {
    export async function credits(): ƒS.SceneReturn {
        let pages: string =
            "<h1>The End</h1> \
            <h2>und was lernen wir daraus? </h2> \
            <h3>Bleib ruhig und entspannt und dann ist dein Tag gerettet</h3> \
            <h2>Copyrights</h2> \
            <p>Story: Maurice Huchler</p> \
            <p>Backgrounds: Maurice Huchler</p> \
            <p>Characters: Maurice Huchler</p> \
        <p>Sounds: pixabay.com</p>";
        ƒS.Text.setClass("credits");
        ƒS.Text.print(pages);
    }
}