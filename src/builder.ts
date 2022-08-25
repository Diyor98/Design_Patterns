enum ImageFormat {
	Png = 'png',
	Jpeg = 'jpeg',
}

interface Resolution {
	width: number;
	height: number;
}

interface ImageConversion extends Resolution {
	format: ImageFormat;
}

class ImageBuilder {
	private resolutions: Resolution[] = [];
	private formats: ImageFormat[] = [];

	addPng() {
		if (!this.formats.includes(ImageFormat.Png)) {
			this.formats.push(ImageFormat.Png);
		}
		return this;
	}

	addJpeg() {
		if (!this.formats.includes(ImageFormat.Jpeg)) {
			this.formats.push(ImageFormat.Jpeg);
		}
		return this;
	}

	addResolution(width: number, height: number) {
		this.resolutions.push({ width, height });
		return this;
	}

	build() {
		const res: ImageConversion[] = [];
		for (const format of this.formats) {
			for (const resolution of this.resolutions) {
				res.push({
					format,
					...resolution,
				});
			}
		}

		return res;
	}
}

console.log(
	new ImageBuilder()
		.addJpeg()
		.addPng()
		.addResolution(100, 200)
		.addResolution(500, 400)
		.build()
);
