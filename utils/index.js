import fs from 'fs';
import path from 'path'
export const traverseDirectory = (directory, fn) => {
    // 获取目录下的所有文件和文件夹
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        // 获取文件/文件夹的完整路径
        const filePath = path.join(directory, file);
        // 检查是否为文件夹
        if (fs.statSync(filePath).isDirectory()) {
            // 是文件夹，则递归遍历该文件夹
            traverseDirectory(filePath, fn);
        } else {
            // 是文件，则执行你想要的操作
            fn(filePath)
        }
    });
}