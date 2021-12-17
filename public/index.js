const { Tolgee, IcuFormatter } = window["@tolgee/core"]
const tg = Tolgee.use(IcuFormatter).init({
  apiUrl: "https://app.tolgee.io",
  apiKey: "s7tkvn0q2087otkgkd4l5okdmk",
  filesUrlPrefix: "/i18n/",
  defaultLanguage: "en",
  inputPrefix: "{{",
  inputSuffix: "}}",
  watch: true,
  ui: window["@tolgee/ui"].UI,
});

tg.run().then(() => {
  document.getElementById("languageSelect").value = tg.lang;
  document.getElementById("loading").style.display = "none";
  document.title = tg.instant("tolgee_example_title", undefined, true);
  translate();
});

document.getElementById("languageSelect").addEventListener("change", (e) => {
  tg.lang = e.target.value;
});

const translate = () => {
  // You can pass arguments to translate function
  tg.translate("tolgee_example_title", undefined, true).then((t) => {
    document.title = t;
  });

  tg.translate({
    key: "hello",
    defaultValue: "Hello {name} {surname}.",
    params: { name: "John", surname: "Doe" },
  }).then((t) => {
    document.getElementById("target").innerText = t;
  });
};

//refresh the texts when language is changed
tg.onLangChange.subscribe(() => {
  translate();
});
