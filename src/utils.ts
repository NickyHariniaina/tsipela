import fs from "fs/promises";
export async function readJsonFile(filePath: string) {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
}

export async function readTextFile(filePath: string) {
    const data = await fs.readFile(filePath, "utf8");
    return data;
}
