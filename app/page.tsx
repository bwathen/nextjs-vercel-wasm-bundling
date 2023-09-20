"use client"

import { FormEvent } from "react";
import Image from "next/image";

export default function Home() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    console.log(formData.get("file"));

    const response = await fetch("./api", {
      method: "POST",
      body: formData,
    })

    console.log(await response.json())
  }

  return (
    <main>
      <p>Use this image in the input below</p>
    
      <Image alt="sample image" src="/cosmic.png" width={500} height={500} />

      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button type="submit">Submit me</button>
      </form>
    </main>
  )
}
