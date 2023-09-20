import { NextResponse } from 'next/server';
import { createWorker } from "tesseract.js";

export async function POST(request: Request) {
    const data = await request.formData();
    const uploadedFile = data.get("file") as File;
    const imageBuffer = await getBufferFromFile(uploadedFile);
  
    const worker = await createWorker();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
  
    console.log("Parsing text from image...\n")
  
    const { data: { text } } = await worker.recognize(imageBuffer);
  
    console.log("Finished!\n")
  
    console.log(text);

    return NextResponse.json({
        test: "1234",
    })
}

const getBufferFromFile = async (file: File) => Buffer.from(await file.arrayBuffer());