const fs = require("fs");
const filewatcher = require("filewatcher");
const sharp = require("sharp");

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

async function generateTheme() {
  console.log("Generating themes...");
  const {
    schema,
    svg,
    houseOfPython,
    houseOfPythonNoItalics,
    houseOfGopher,
    houseOfGopherNoItalics,
    houseOfCamel,
    houseOfCamelNoItalics,
    houseOfRuby,
    houseOfRubyNoItalics,
  } = requireUncached("./theme");

  const themes = [
    {
      name: "House of Python",
      theme: houseOfPython,
      filename: "house-of-python",
    },
    {
      name: "House of Python (No Italics)",
      theme: houseOfPythonNoItalics,
      filename: "house-of-python-no-italics",
    },
    {
      name: "House of Gopher",
      theme: houseOfGopher,
      filename: "house-of-gopher",
    },
    {
      name: "House of Gopher (No Italics)",
      theme: houseOfGopherNoItalics,
      filename: "house-of-gopher-no-italics",
    },
    { name: "House of Camel", theme: houseOfCamel, filename: "house-of-camel" },
    {
      name: "House of Camel (No Italics)",
      theme: houseOfCamelNoItalics,
      filename: "house-of-camel-no-italics",
    },
    { name: "House of Ruby", theme: houseOfRuby, filename: "house-of-ruby" },
    {
      name: "House of Ruby (No Italics)",
      theme: houseOfRubyNoItalics,
      filename: "house-of-ruby-no-italics",
    },
  ];

  console.log("Writing theme files...");
  const writePromises = themes.map(({ name, theme, filename }) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `themes/${filename}.json`,
        schema({ ...theme, name }),
        (err) => {
          if (err) {
            console.error(`Error writing ${filename}.json:`, err);
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  });

  await Promise.all(writePromises);
  console.log("Theme files written");

  const { colors: python } = houseOfPython;
  const { colors: gopher } = houseOfGopher;
  const { colors: camel } = houseOfCamel;
  const { colors: ruby } = houseOfRuby;

  const combinedColors = {
    ...python,
    gopher_bg: gopher.background,
    gopher_accent1: gopher.accent1,
    gopher_accent2: gopher.accent2,
    camel_bg: camel.background,
    camel_accent1: camel.accent1,
    camel_accent2: camel.accent2,
    ruby_bg: ruby.background,
    ruby_accent1: ruby.accent1,
    ruby_accent2: ruby.accent2,
  };

  delete combinedColors.black;
  delete combinedColors.transparent;

  console.log("Generating PNG...");
  try {
    const svgBuffer = Buffer.from(svg({ colors: combinedColors }).trim());
    await sharp(svgBuffer, { density: 400 }).png().toFile("assets/dots.png");
    console.log("assets saved ...");
  } catch (err) {
    console.error("Error generating dots.png:", err);
    throw err;
  }
}

async function main() {
  try {
    await generateTheme();

    // Check if --watch flag is provided
    const shouldWatch = process.argv.includes("--watch");

    if (!shouldWatch) {
      console.log(
        "Generation complete. Use --watch flag to enable file watching."
      );
      process.exit(0);
    }

    console.log(
      "Watching for changes in src/theme.js... (Press Ctrl+C to exit)"
    );

    const watcher = filewatcher();
    watcher.add("src/theme.js");

    watcher.on("change", function (file) {
      console.log(`\n${file} modified`);
      generateTheme().catch((err) => {
        console.error("Error generating theme:", err);
      });
    });
  } catch (err) {
    console.error("Error generating theme:", err);
    process.exit(1);
  }
}

main();
