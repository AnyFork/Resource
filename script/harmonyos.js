/**
 * HarmonyOS 字体文件进行分割，统一字体名fontFamily: "HarmonyOS Sans SC"
 */
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { fontSplit } from 'cn-font-split';
import { traverseDirectory } from '../utils/index.js'
const __filename = fileURLToPath(import.meta.url);
//将original下面的PingFangSC目录下面的简体中文进行分片
const original = path.resolve(__filename, "../../fonts/original/HarmonyOS")
const division = path.resolve(__filename, "../../fonts/division/HarmonyOS")
traverseDirectory(original, async (filePath) => {
    const inputBuffer = new Uint8Array(
        fs.readFileSync(filePath).buffer,
    );
    const fileName = path.basename(filePath, path.extname(filePath))
    await fontSplit({
        input: inputBuffer,
        outDir: path.join(division, path.dirname(filePath).split("\\").slice(-1)[0], fileName),
        chunkSize: 100 * 1024,
        renameOutputFont: `${fileName}.[index].[ext]`,
        testHtml: false,
        reporter: false,
        css: {
            fontFamily: "HarmonyOS Sans SC",
            fileName: `${fileName}.css`
        }
    });
})
