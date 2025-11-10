const colorTemplate = {
  // UI Colors
  background: "", // Editor background
  foreground: "", // Default text color
  ui_background: "", // Panes, sidebar, etc.
  ui_border: "", // Borders for UI elements
  focus: "", // Focus color for UI elements
  selection: "", // Text selection background
  selection_alpha: "", // Text selection with transparency

  // Syntax & Status Colors
  accent1: "", // Primary accent (e.g., keywords, functions)
  accent2: "", // Secondary accent (e.g., strings, numbers)
  accent3: "", // Tertiary accent
  text_secondary: "", // Less important text (e.g., comments)
  error: "", // Errors
  warning: "", // Warnings
  info: "", // Info messages

  // Git Status
  git_added: "",
  git_modified: "",
  git_deleted: "",
  git_untracked: "",
  git_ignored: "",

  // Common colors
  white: "#ffffff",
  black: "#000000",
  transparent: "#00000000",
};

const python = {
  ...colorTemplate,
  background: "#010806",
  foreground: "#EAEAEA",
  ui_background: "#0A1A14",
  ui_border: "#1A472A",
  focus: "#1A472A",
  selection: "#2E4D3E",
  selection_alpha: "#2E4D3E40",

  accent1: "#50C878",
  accent2: "#C0C0C0",
  accent3: "#A9A9A9",
  text_secondary: "#5C5C5C",
  error: "#B22222",
  warning: "#F0E68C",
  info: "#C0C0C0",

  git_added: "#50C878",
  git_modified: "#C0C0C0",
  git_deleted: "#B22222",
  git_untracked: "#50C878",
  git_ignored: "#5C5C5C",
};

const gopher = {
  ...colorTemplate,
  background: "#050A1F",
  foreground: "#EAEAEA",
  ui_background: "#0E1A40",
  ui_border: "#223B80",
  focus: "#223B80",
  selection: "#3D528C",
  selection_alpha: "#3D528C40",

  accent1: "#61AFEF",
  accent2: "#946B2D",
  accent3: "#AE9980",
  text_secondary: "#8A96A8",
  error: "#C74646",
  warning: "#D4A26A",
  info: "#61AFEF", // Tied to accent1

  git_added: "#6AB588",
  git_modified: "#61AFEF", // Tied to accent1
  git_deleted: "#C74646",
  git_untracked: "#6AB588",
  git_ignored: "#8A96A8", // Tied to text_secondary
};

const camel = {
  ...colorTemplate,
  background: "#121212",
  foreground: "#FFFACD",
  ui_background: "#2A220F",
  ui_border: "#9c7c38",
  focus: "#9c7c38",
  selection: "#4d4021",
  selection_alpha: "#4d402140",

  accent1: "#FFDB58",
  accent2: "#BDBDBD",
  accent3: "#A8A8A8",
  text_secondary: "#808080",
  error: "#FF5252",
  warning: "#FFC107",
  info: "#BDBDBD",

  git_added: "#A6E22E",
  git_modified: "#FFDB58",
  git_deleted: "#FF5252",
  git_untracked: "#A6E22E",
  git_ignored: "#808080",
};

const ruby = {
  ...colorTemplate,
  background: "#1A1414",
  foreground: "#FAEBD7",
  ui_background: "#300002",
  ui_border: "#4a0004",
  focus: "#4a0004",
  selection: "#5c1f21",
  selection_alpha: "#5c1f2140",

  accent1: "#D3A625",
  accent2: "#C44D56",
  accent3: "#B0884B",
  text_secondary: "#887979",
  error: "#FF5555",
  warning: "#FFD700",
  info: "#D3A625",

  git_added: "#A5D6A7",
  git_modified: "#D3A625",
  git_deleted: "#EF5350",
  git_untracked: "#A5D6A7",
  git_ignored: "#887979", // Tied to comments
};

function createTheme(palette) {
  return {
    colors: palette,
    styles: { fontStyle: "italic" },
  };
}

function createNoItalicsTheme(palette) {
  return {
    colors: palette,
    styles: { fontStyle: "" },
  };
}

const houseOfPython = createTheme(python);
const houseOfPythonNoItalics = createNoItalicsTheme(python);
const houseOfGopher = createTheme(gopher);
const houseOfGopherNoItalics = createNoItalicsTheme(gopher);
const houseOfCamel = createTheme(camel);
const houseOfCamelNoItalics = createNoItalicsTheme(camel);
const houseOfRuby = createTheme(ruby);
const houseOfRubyNoItalics = createNoItalicsTheme(ruby);

function schema({ name, colors, styles }) {
  return `{
    "name": "${name}",
    "type": "dark",
    "colors": {
      "focusBorder": "${colors.transparent}",
      "foreground": "${colors.foreground}",
      "widget.shadow": "${colors.black}30",
      "selection.background": "${colors.selection}",
      "descriptionForeground": "${colors.foreground}b3",
      "errorForeground": "${colors.error}",
      "icon.foreground": "${colors.accent3}",
      "sash.hoverBorder": "${colors.transparent}",

      "button.background": "${colors.focus}90",
      "button.foreground": "${colors.white}",
      "button.hoverBackground": "${colors.focus}",
      "checkbox.background": "${colors.ui_background}",
      "checkbox.border": "${colors.ui_border}",

      "dropdown.background": "${colors.ui_background}",
      "dropdown.border": "${colors.ui_border}",
      "dropdown.foreground": "${colors.foreground}",
      "dropdown.list.background": "${colors.ui_background}",

      "input.background": "${colors.black}30",
      "input.border": "${colors.ui_border}",
      "input.foreground": "${colors.foreground}",
      "input.placeholderForeground": "${colors.foreground}80",
      "inputOption.activeBackground": "${colors.focus}",
      "inputValidation.errorBackground": "${colors.ui_background}",
      "inputValidation.errorBorder": "${colors.error}",
      "inputValidation.infoBackground": "${colors.focus}",
      "inputValidation.infoBorder": "${colors.info}",
      "inputValidation.warningBackground": "${colors.ui_background}",
      "inputValidation.warningBorder": "${colors.warning}",

      "scrollbar.shadow": "${colors.transparent}",
      "scrollbarSlider.activeBackground": "${colors.focus}",
      "scrollbarSlider.background": "${colors.ui_border}",
      "scrollbarSlider.hoverBackground": "${colors.focus}",

      "badge.background": "${colors.focus}",
      "badge.foreground": "${colors.foreground}",
      "progressBar.background": "${colors.accent1}",

      "list.activeSelectionBackground": "${colors.focus}80",
      "list.activeSelectionForeground": "${colors.foreground}",
      "list.dropBackground": "${colors.focus}",
      "list.focusBackground": "${colors.focus}80",
      "list.focusForeground": "${colors.foreground}",
      "list.highlightForeground": "${colors.accent1}",
      "list.hoverBackground": "${colors.focus}80",
      "list.hoverForeground": "${colors.foreground}",
      "list.inactiveSelectionBackground": "${colors.focus}80",
      "list.inactiveSelectionForeground": "${colors.foreground}",
      "list.errorForeground": "${colors.error}",
      "list.warningForeground": "${colors.warning}",

      "activityBar.background": "${colors.ui_background}",
      "activityBar.dropBorder": "${colors.accent3}",
      "activityBar.foreground": "${colors.accent3}",
      "activityBar.inactiveForeground": "${colors.accent3}66",
      "activityBarBadge.background": "${colors.focus}",
      "activityBarBadge.foreground": "${colors.foreground}",

      "sideBar.background": "${colors.ui_background}",
      "sideBar.foreground": "${colors.accent3}",
      "sideBar.border": "${colors.ui_border}",
      "sideBarTitle.foreground": "${colors.foreground}",
      "sideBarSectionHeader.background": "${colors.ui_background}",
      "sideBarSectionHeader.foreground": "${colors.foreground}",
      "sideBarSectionHeader.border": "${colors.ui_border}",

      "minimap.findMatchHighlight": "${colors.accent1}",
      "minimap.selectionHighlight": "${colors.selection}",
      "minimap.errorHighlight": "${colors.error}",
      "minimap.warningHighlight": "${colors.warning}",
      "minimap.background": "${colors.ui_background}",
      "minimapGutter.addedBackground": "${colors.git_added}80",
      "minimapGutter.modifiedBackground": "${colors.git_modified}80",
      "minimapGutter.deletedBackground": "${colors.git_deleted}80",

      "editorGroup.border": "${colors.ui_border}",
      "editorGroup.dropBackground": "${colors.focus}80",
      "editorGroupHeader.noTabsBackground": "${colors.background}",
      "editorGroupHeader.tabsBackground": "${colors.ui_background}",
      "editorGroupHeader.tabsBorder": "${colors.ui_border}",
      "editorGroupHeader.border": "${colors.ui_border}",
      "tab.activeBackground": "${colors.focus}80",
      "tab.activeForeground": "${colors.foreground}",
      "tab.border": "${colors.transparent}",
      "tab.activeBorder": "${colors.transparent}",
      "tab.unfocusedActiveBorder": "${colors.transparent}",
      "tab.inactiveBackground": "${colors.ui_background}",
      "tab.inactiveForeground": "${colors.accent3}",
      "tab.unfocusedActiveForeground": "${colors.accent3}",
      "tab.unfocusedInactiveForeground": "${colors.accent3}80",
      "tab.hoverBackground": "${colors.focus}80",
      "tab.unfocusedHoverBackground": "${colors.focus}80",

      "editor.background": "${colors.background}",
      "editor.foreground": "${colors.foreground}",
      "editorLineNumber.foreground": "${colors.text_secondary}",
      "editorLineNumber.activeForeground": "${colors.accent3}",
      "editorCursor.foreground": "${colors.accent1}",

      "editor.selectionBackground": "${colors.selection}",
      "editor.inactiveSelectionBackground": "${colors.selection_alpha}",
      "editor.selectionHighlightBackground": "${colors.transparent}",
      "editor.selectionHighlightBorder": "${colors.accent1}80",

      "editor.wordHighlightBackground": "${colors.accent2}20",
      "editor.wordHighlightStrongBackground": "${colors.accent2}40",

      "editor.findMatchBackground": "${colors.accent2}40",
      "editor.findMatchHighlightBackground": "${colors.accent2}40",
      "editor.findRangeHighlightBackground": "${colors.accent2}40",

      "editor.hoverHighlightBackground": "${colors.focus}",
      "editor.lineHighlightBackground": "${colors.selection_alpha}",
      "editor.lineHighlightBorder": "${colors.transparent}",
      "editorLink.activeForeground": "${colors.accent1}",
      "editor.rangeHighlightBackground": "${colors.focus}",
      "editorWhitespace.foreground": "${colors.text_secondary}50",
      "editorIndentGuide.background": "${colors.text_secondary}30",
      "editorIndentGuide.activeBackground": "${colors.text_secondary}70",
      "editorRuler.foreground": "${colors.ui_border}",
      "editorCodeLens.foreground": "${colors.text_secondary}",

      "editorBracketMatch.background": "${colors.transparent}",
      "editorBracketMatch.border": "${colors.accent3}60",

      "editorOverviewRuler.border": "${colors.transparent}",
      "editorOverviewRuler.findMatchForeground": "${colors.accent1}",
      "editorOverviewRuler.rangeHighlightForeground": "${colors.accent1}",
      "editorOverviewRuler.selectionHighlightForeground": "${colors.accent1}",
      "editorOverviewRuler.wordHighlightForeground": "${colors.accent2}",
      "editorOverviewRuler.wordHighlightStrongForeground": "${colors.accent2}",
      "editorOverviewRuler.modifiedForeground": "${colors.git_modified}99",
      "editorOverviewRuler.addedForeground": "${colors.git_added}99",
      "editorOverviewRuler.deletedForeground": "${colors.git_deleted}99",
      "editorOverviewRuler.errorForeground": "${colors.error}b3",
      "editorOverviewRuler.warningForeground": "${colors.warning}",
      "editorOverviewRuler.infoForeground": "${colors.info}",

      "editorError.foreground": "${colors.error}",
      "editorWarning.foreground": "${colors.warning}",
      "editorInfo.foreground": "${colors.info}",
      "editorHint.foreground": "${colors.accent3}b3",

      "editorGutter.background": "${colors.background}",
      "editorGutter.modifiedBackground": "${colors.git_modified}40",
      "editorGutter.addedBackground": "${colors.git_added}40",
      "editorGutter.deletedBackground": "${colors.git_deleted}40",

      "diffEditor.insertedTextBackground": "${colors.git_added}15",
      "diffEditor.removedTextBackground": "${colors.git_deleted}20",

      "editorWidget.background": "${colors.ui_background}",
      "editorWidget.border": "${colors.ui_border}",
      "editorSuggestWidget.background": "${colors.ui_background}",
      "editorSuggestWidget.border": "${colors.ui_border}",
      "editorSuggestWidget.foreground": "${colors.foreground}",
      "editorSuggestWidget.highlightForeground": "${colors.accent1}",
      "editorSuggestWidget.selectedBackground": "${colors.focus}",
      "editorHoverWidget.background": "${colors.ui_background}",
      "editorHoverWidget.border": "${colors.ui_border}",
      "debugToolBar.background": "${colors.focus}",
      "peekView.border": "${colors.ui_border}",
      "peekViewEditor.background": "${colors.focus}30",
      "peekViewEditorGutter.background": "${colors.focus}30",
      "peekViewResult.background": "${colors.focus}30",
      "peekViewTitle.background": "${colors.focus}30",
      "peekViewTitleDescription.foreground": "${colors.accent3}",
      "peekViewTitleLabel.foreground": "${colors.foreground}",

      "panel.background": "${colors.ui_background}",
      "panel.border": "${colors.ui_border}",
      "panel.dropBorder": "${colors.accent3}",
      "panelTitle.activeBorder": "${colors.accent1}",
      "panelTitle.activeForeground": "${colors.foreground}",
      "panelTitle.inactiveForeground": "${colors.accent3}",

      "statusBar.background": "${colors.ui_background}",
      "statusBar.foreground": "${colors.accent3}",
      "statusBar.border": "${colors.ui_border}",
      "statusBar.debuggingBackground": "${colors.focus}",
      "statusBar.debuggingForeground": "${colors.foreground}",
      "statusBar.noFolderBackground": "${colors.ui_background}",
      "statusBarItem.activeBackground": "${colors.focus}",
      "statusBarItem.hoverBackground": "${colors.focus}80",
      "statusBarItem.prominentBackground": "${colors.focus}",
      "statusBarItem.prominentHoverBackground": "${colors.focus}80",
      "statusBarItem.remoteBackground": "${colors.focus}",
      "statusBarItem.remoteForeground": "${colors.foreground}",

      "titleBar.activeBackground": "${colors.ui_background}",
      "titleBar.activeForeground": "${colors.foreground}",
      "titleBar.inactiveBackground": "${colors.ui_background}",
      "titleBar.inactiveForeground": "${colors.accent3}",
      "titleBar.border": "${colors.ui_border}",

      "terminal.ansiBlack": "${colors.ui_background}",
      "terminal.ansiBlue": "${colors.info}",
      "terminal.ansiBrightBlack": "${colors.accent3}",
      "terminal.ansiBrightBlue": "${colors.info}",
      "terminal.ansiBrightCyan": "${colors.info}",
      "terminal.ansiBrightGreen": "${colors.accent1}",
      "terminal.ansiBrightMagenta": "${colors.accent2}",
      "terminal.ansiBrightRed": "${colors.error}",
      "terminal.ansiBrightWhite": "${colors.white}",
      "terminal.ansiBrightYellow": "${colors.warning}",
      "terminal.ansiCyan": "${colors.info}",
      "terminal.ansiGreen": "${colors.accent1}",
      "terminal.ansiMagenta": "${colors.accent2}",
      "terminal.ansiRed": "${colors.error}",
      "terminal.ansiWhite": "${colors.white}",
      "terminal.ansiYellow": "${colors.warning}",
      "terminal.foreground": "${colors.foreground}",
      "terminal.selectionBackground": "${colors.selection}",

      "gitDecoration.addedResourceForeground": "${colors.git_added}",
      "gitDecoration.modifiedResourceForeground": "${colors.git_modified}",
      "gitDecoration.deletedResourceForeground": "${colors.git_deleted}",
      "gitDecoration.untrackedResourceForeground": "${colors.git_untracked}",
      "gitDecoration.ignoredResourceForeground": "${colors.git_ignored}",
      "gitDecoration.conflictingResourceForeground": "${colors.error}",
      "gitDecoration.submoduleResourceForeground": "${colors.info}",

      "textLink.activeForeground": "${colors.accent1}",
      "textLink.foreground": "${colors.accent1}",
      "textBlockQuote.background": "${colors.focus}30",
      "textBlockQuote.border": "${colors.ui_border}",
      "textCodeBlock.background": "${colors.focus}30",

      "breadcrumb.foreground": "${colors.accent3}",
      "breadcrumb.focusForeground": "${colors.foreground}",
      "breadcrumb.activeSelectionForeground": "${colors.foreground}",
      "breadcrumbPicker.background": "${colors.ui_background}",

      "pickerGroup.border": "${colors.ui_border}",
      "pickerGroup.foreground": "${colors.accent1}",

      "tree.indentGuidesStroke": "${colors.text_secondary}"
    },
    "tokenColors": [
      {
        "scope": ["comment", "punctuation.definition.comment"],
        "settings": {
          "foreground": "${colors.text_secondary}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["variable.other", "support.type.object"],
        "settings": {
          "foreground": "${colors.foreground}"
        }
      },
      {
        "scope": ["variable.other.constant", "variable.other.readwrite", "meta.import variable.other.readwrite"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["variable.other.object.property", "variable.other.property", "support.variable.property"],
        "settings": {
          "foreground": "${colors.foreground}"
        }
      },
      {
        "scope": ["entity.name.function.method", "string.unquoted", "meta.object.member"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["keyword.control.flow"],
        "settings": {
          "foreground": "${colors.accent1}c0"
        }
      },
      {
        "scope": ["keyword.operator.new", "keyword.control.new", "variable.language.this", "storage.modifier.async", "storage.modifier", "variable.language.super", "support.class.component", "entity.name.tag", "markup.deleted.git_gutter"],
        "settings": {
          "foreground": "${colors.accent1}"
        }
      },
      {
        "scope": ["support.class.error", "keyword.control.trycatch", "keyword.operator.expression.delete", "keyword.operator.expression.void", "keyword.operator.void", "keyword.operator.delete", "constant.language.null", "constant.language.boolean.false", "constant.language.undefined", "invalid", "invalid.illegal", "invalid.deprecated"],
        "settings": {
          "foreground": "${colors.error}"
        }
      },
      {
        "scope": ["variable.parameter", "variable.other.readwrite.js", "meta.definition.variable variable.other.constant", "meta.definition.variable variable.other.readwrite"],
        "settings": {
          "foreground": "${colors.foreground}"
        }
      },
      {
        "scope": ["constant.other.color"],
        "settings": {
          "foreground": "${colors.foreground}"
        }
      },
      {
        "scope": ["keyword.control", "keyword"],
        "settings": {
          "foreground": "${colors.accent3}"
        }
      },
      {
        "scope": ["keyword.operator", "storage.type"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["keyword.control.module", "keyword.control.import", "keyword.control.export", "keyword.control.default", "meta.import", "meta.export"],
        "settings": {
          "foreground": "${colors.accent1}"
        }
      },
      {
        "scope": ["Keyword", "Storage"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["keyword-meta.export"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["meta.brace", "punctuation", "keyword.operator.existential"],
        "settings": {
          "foreground": "${colors.accent3}"
        }
      },
      {
        "scope": ["constant.other.color", "meta.tag", "punctuation.definition.tag", "punctuation.separator.inheritance.php", "punctuation.definition.tag.html", "punctuation.section.embedded", "keyword.other.template", "keyword.other.substitution", "meta.objectliteral"],
        "settings": {
          "foreground": "${colors.foreground}"
        }
      },
      {
        "scope": ["punctuation.definition.tag.begin.html", "punctuation.definition.tag.end.html"],
        "settings": {
          "foreground": "${colors.accent3}"
        }
      },
      {
        "name": "Function Call",
        "scope": "variable.function, source meta.function-call entity.name.function, source meta.function-call entity.name.function, source meta.method-call entity.name.function, meta.class meta.group.braces.curly meta.function-call variable.function, meta.class meta.field.declaration meta.function-call entity.name.function, variable.function.constructor, meta.block meta.var.expr meta.function-call entity.name.function, support.function.console, meta.function-call support.function, meta.property.class variable.other.class, punctuation.definition.entity.css",
        "settings": {
          "foreground": "${colors.foreground}d0"
        }
      },
      {
        "name": "Function/Class Name",
        "scope": "entity.name.function, meta.class entity.name.class, meta.class entity.name.type.class, meta.class meta.function-call variable.function, keyword.other.important",
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["support.other.variable", "string.other.link"],
        "settings": {
          "foreground": "${colors.accent1}"
        }
      },
      {
        "scope": ["constant.numeric", "support.constant", "constant.character", "constant.escape", "keyword.other.unit", "keyword.other", "string", "constant.language", "constant.other.symbol", "constant.other.key", "markup.heading", "markup.inserted.git_gutter", "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"],
        "settings": {
          "foreground": "${colors.accent1}"
        }
      },
      {
        "scope": ["entity.other.inherited-class", "meta.type.declaration"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["keyword.control.as", "entity.name.type", "support.type"],
        "settings": {
          "foreground": "${colors.accent3}C0"
        }
      },
      {
        "scope": ["support.class", "support.constant", "variable.other.constant.object"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["source.css support.type.property-name", "source.sass support.type.property-name", "source.scss support.type.property-name", "source.less support.type.property-name", "source.stylus support.type.property-name", "source.postcss support.type.property-name"],
        "settings": {
          "foreground": "${colors.accent2}"
        }
      },
      {
        "scope": ["entity.name.module.js", "variable.import.parameter.js", "variable.other.class.js"],
        "settings": {
          "foreground": "${colors.foreground}"
        }
      },
      {
        "scope": ["variable.language"],
        "settings": {
          "foreground": "${colors.accent2}",
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["markup.italic", "markup.strike"],
        "settings": {
          "fontStyle": "${styles.fontStyle}"
        }
      },
      {
        "scope": ["markup.bold", "markup.bold string"],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": ["*url*", "*link*", "*uri*"],
        "settings": {
          "foreground": "${colors.accent2}",
          "fontStyle": "underline"
        }
      }
    ]
  }
  `;
}

function svg({ colors }) {
  const circle = (color, i) => `
    <circle
      r="4"
      cy="${Math.ceil((i + 1) / 4) * 10}"
      cx="${((i % 4) + 1) * 10}"
      fill="${color}"
    />`;
  return `
  <svg width="200" height="250" viewBox="0 0 50 ${
    Math.ceil(Object.keys(colors).length / 4) * 12
  }" xmlns="http://www.w3.org/2000/svg">
    ${Object.values(colors).map(circle).join("")}
  </svg>
  `;
}

module.exports = {
  schema,
  houseOfPython,
  houseOfPythonNoItalics,
  houseOfGopher,
  houseOfGopherNoItalics,
  houseOfCamel,
  houseOfCamelNoItalics,
  houseOfRuby,
  houseOfRubyNoItalics,
  svg,
};
