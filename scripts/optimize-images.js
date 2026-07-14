import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public";

function convertToWebpInPlace(dir) {
	const items = fs.readdirSync(dir);

	for (const item of items) {
		const fullPath = path.join(dir, item);

		if (fs.lstatSync(fullPath).isDirectory()) {
			convertToWebpInPlace(fullPath);
		} else if (/\.(png|jpe?g)$/i.test(item)) {
			const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, ".webp");
			const tempPath = webpPath + ".tmp";

			sharp(fullPath)
				.webp({ quality: 80 })
				.toFile(tempPath)
				.then(() => {
					fs.unlinkSync(fullPath); 
					fs.renameSync(tempPath, webpPath); 
					console.log("Converted:", webpPath);
				})
				.catch((err) => console.error("Error:", err));
		}
	}
}

convertToWebpInPlace(inputDir);