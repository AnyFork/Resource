import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { fontSplit } from 'cn-font-split';
import { traverseDirectory } from '../utils/index.js'
const __filename = fileURLToPath(import.meta.url);
//将original下面的Warick目录下面的简体中文进行分片
const original = path.resolve(__filename, "../../fonts/original/Warick")
const division = path.resolve(__filename, "../../fonts/division/Warick")
traverseDirectory(original, async (filePath) => {
    const inputBuffer = new Uint8Array(
        fs.readFileSync(filePath).buffer,
    );
    const fileName = path.basename(filePath, path.extname(filePath))
    await fontSplit({
        input: inputBuffer,
        outDir: division,
        chunkSize: 100 * 1024,
        renameOutputFont: `${fileName}.[index].[ext]`,
        testHtml: false,
        reporter: false,
        css: {
            fontFamily: "warick",
            fileName: `${fileName}.css`
        }
    });
})