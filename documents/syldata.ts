export let value = {
  components: [
    {
      label: "Name",
      placeholder: "your name",
      description: "Please enter your name",
      tooltip: "Seriously just put your name",
      prefix: "syl",
      suffix: "yte",
      autofocus: true,
      tableView: true,
      validate: {
        required: true,
      },
      key: "sylname",
      type: "textfield",
      input: true,
    },
    {
      label: "About Me",
      placeholder: "Describe yourself",
      description: "go on",
      tooltip: "dont be shy",
      prefix: "just",
      suffix: "do it",
      autoExpand: false,
      tableView: true,
      key: "aboutMe",
      type: "textarea",
      input: true,
    },
    {
      label: "fav number",
      placeholder: "eg 82",
      description: "random works",
      tooltip: "any number",
      prefix: "1",
      suffix: "0",
      mask: false,
      spellcheck: true,
      tableView: false,
      delimiter: false,
      requireDecimal: false,
      inputFormat: "plain",
      key: "favNumber",
      type: "number",
      input: true,
    },
    {
      label: "Password",
      tableView: false,
      key: "password",
      type: "password",
      input: true,
      protected: true,
    },
    {
      label: "Checkbox",
      description: "fav books",
      tooltip: "select some",
      shortcut: "F",
      tableView: false,
      persistent: false,
      key: "Harry potter",
      type: "checkbox",
      input: true,
      defaultValue: true,
    },
    {
      label: "Witcher",
      tableView: false,
      key: "witcher",
      type: "checkbox",
      input: true,
      defaultValue: false,
    },
    {
      label: "Fav movies",
      optionsLabelPosition: "right",
      tableView: false,
      values: [
        {
          label: "madmax",
          value: "madmax",
          shortcut: "M",
        },
        {
          label: "casino royale",
          value: "casinoRoyale",
          shortcut: "C",
        },
        {
          label: "lotr",
          value: "lotr",
          shortcut: "L",
        },
        {
          label: "man of steel",
          value: "manOfSteel",
          shortcut: "S",
        },
      ],
      key: "favMovies",
      type: "selectboxes",
      input: true,
      inputType: "checkbox",
      defaultValue: {
        "": false,
      },
    },
    {
      label: "Sex",
      tableView: true,
      data: {
        values: [
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Female",
            value: "female",
          },
          {
            label: "I dont want to disclose",
            value: "iDontWantToDisclose",
          },
        ],
      },
      selectThreshold: 0.3,
      key: "sex",
      type: "select",
      indexeddb: {
        filter: {},
      },
      input: true,
    },
    {
      label: "Click Me",
      showValidations: false,
      leftIcon: "info",
      rightIcon: "heart",
      shortcut: "J",
      tableView: false,
      key: "clickMe",
      type: "button",
      input: true,
    },
    {
      label: "User",
      optionsLabelPosition: "right",
      description: "do you use this site freq",
      tooltip: "hola?",
      inline: false,
      tableView: false,
      values: [
        {
          label: "new",
          value: "new",
          shortcut: "",
        },
        {
          label: "old",
          value: "old",
          shortcut: "",
        },
      ],
      key: "user",
      type: "radio",
      input: true,
      defaultValue: "new",
    },
    {
      type: "button",
      label: "Submit",
      key: "submit",
      disableOnInvalid: true,
      input: true,
      tableView: false,
    },
  ],
};