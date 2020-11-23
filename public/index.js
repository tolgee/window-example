const pg = new window["@polygloat/core"].Polygloat({
    apiUrl: "https://app.polygloat.io",
    apiKey: "",
    filesUrlPrefix: "/i18n/",
    defaultLanguage: "en",
    inputPrefix: "{{",
    inputSuffix: "}}",
    watch: true,
    ui: window["@polygloat/ui"].UI,
});

pg.run().then(() => {
    document.getElementById("loading").style.display = "none";
})

document.getElementById("languageSelect").addEventListener("change", (e) => {
    pg.lang = e.target.value;
});