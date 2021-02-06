const pg = new window["@tolgee/core"].Tolgee({
    apiUrl: "https://app.tolgee.io",
    //apiKey: "",
    filesUrlPrefix: "/i18n/",
    defaultLanguage: "en",
    inputPrefix: "{{",
    inputSuffix: "}}",
    watch: true,
    ui: window["@tolgee/ui"].UI,
});

pg.run().then(() => {
    document.getElementById("loading").style.display = "none";
    document.title = pg.instant("tolgee_example_title", undefined, true);
})

document.getElementById("languageSelect").addEventListener("change", (e) => {
    pg.lang = e.target.value;
});

pg.onLangChange.subscribe(() => {
    pg.translate("tolgee_example_title", undefined, true).then(t => {
        document.title = t;
    });
});
