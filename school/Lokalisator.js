const selector = document.querySelector(".Selector");
const outputText = document.getElementById("outputtext");
let string = "";

selector.addEventListener("change", function (event) {
    const selectedValue = event.target.value;

    const Objekt = {
        Land: "Unser Ziel ist ein Land",
        Region: "Unser Ziel ist eine Region",
        Stadt: "Unser Ziel ist eine Stadt",
        Punkt: "Unser Ziel ist ein Punkt",
    };

    const Halbkugel = {
        Südhalbkugel: "auf der Südhalbkugel",
        Nordhalbkugel: "auf der Nordhalbkugel",
        AufdemÄquator: "auf dem Äquator",
    };

    const Nullmeridian = {
        Westlich: "und westlich vom Nullmeridian",
        Östlich: "und östlich vom Nullmeridian",
        AufdemNullmeridian: "und auf dem Nullmeridian",
    };

    const Klimazone = {
        Polarzone: "Es liegt in der Polarzone",
        Subpolarzone: "Es liegt in der Subpolarzone",
        Gemäßigtezone: "Es liegt in der Gemäßigtenzone",
        Subtropischezone: "Es liegt in der Subtropischenzone",
        Tropischezone: "Es liegt in der Tropischenzone",
    };

    const Kontinent = {
        Asien: "auf dem Kontinent Asien",
        Afrika: "auf dem Kontinent Afrika",
        Nordamerika: "auf dem Kontinent Nordamerika",
        Südamerika: "auf dem Kontinent Südamerika",
        Antarktika: "auf dem Kontinent Antarktika",
        Europa: "auf dem Kontinent Europa",
        Australien: "auf dem Kontinent Australien",
    };

    // Ergänze den Text Schritt für Schritt
    if (selectedValue in Objekt) {
        string = string + Objekt[selectedValue] + " ";
    }
    if (selectedValue in Halbkugel) {
        string = string + Halbkugel[selectedValue] + " ";
    }
    if (selectedValue in Nullmeridian) {
        string = string + Nullmeridian[selectedValue] + ".";
    }
    if (selectedValue in Klimazone) {
        string = string + " " + Klimazone[selectedValue] + " ";
    }
    if (selectedValue in Kontinent) {
        string = string + " " + Kontinent[selectedValue] + " ";
    }

    outputText.textContent = string || "Ausgabe erscheint hier!";
});
