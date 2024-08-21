const fs = require("fs");
const { schema } = require("@jsonresume/schema");
const { compile } = require("json-schema-to-typescript");
const { resolve } = require("path");

const typesDirectory = resolve(__dirname, '..', 'src', 'types');

if (!fs.existsSync(typesDirectory)) {
  fs.mkdirSync(typesDirectory, { recursive: true });
}

compile(schema, "JsonResume")
  .then((ts) => {
    fs.writeFileSync(resolve(typesDirectory, "json-schema.d.ts"), ts);
  })
  .catch((err) => {
    console.error(err);
  });
