"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useChat } from "ai/react";
import { ArrowRightCircle, Copy, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { MarkdownRenderer } from "@/app/components/MarkdownRenderer";

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: handleTextSubmit,
    isLoading,
  } = useChat();
  
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [newMessages, setNewMessages] = useState(messages);

  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

  const handleImageSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({ prediction });
      setPrediction(prediction);
    }
  };

  const handleCombinedSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // setNewMessages([])

    // Call both textSubmit and handleImageSubmit
    handleTextSubmit(e);
    // await handleImageSubmit(e);
  };

  const handleCopyClick = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  const showCopyButton = messages.length > 0;

  return (
    <div className="flex items-start justify-between gap-8 w-full min-h-[80vh] mx-auto text-white px-12 pb-52">
      {showCopyButton && (
        <div className="relative border-2 border-white rounded-xl min-w-[50%] min-h-[50vh] p-5">
          <Copy
            className="h-4 w-4 absolute top-3 right-3 cursor-pointer"
            onClick={() => handleCopyClick(messages[1]?.content)}
          />
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "assistant" && <MarkdownRenderer content={m.content}/>}
            </div>
          ))}
        </div>
      )}

      {error && <div>{error}</div>}

      {prediction && (
        <div className="relative border-2 border-white rounded-xl min-w-[50%] min-h-[50vh] p-5">
          {/* @ts-ignore */}
          {prediction.output && (
            <div className="relative">
              <Image
                fill
                // @ts-ignore
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes="100vw"
              />
            </div>
          )}
          {/* @ts-ignore */}
          <p>status: {prediction.status}</p>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 p-4 bg-[rgb(20,20,20)] border-t shadow-sm">
        <form
          onSubmit={handleCombinedSubmit}
          className="flex flex-col gap-2 max-w-xl mx-auto border rounded-2xl p-4 ring-offset-background focus-within:ring-2 ring-offset-2 ring-ring"
        >
          <textarea
            name="prompt"
            className="resize-none overflow-hidden bg-[rgb(25,25,25)] text-sm font-medium focus:outline-none p-3"
            onChange={handleInputChange}
            value={input}
            spellCheck
            placeholder="Input your prompt here..."
          />
          <div className="self-end">
            <Button
              type="submit"
              className="bg-white hover:bg-white text-black rounded-xl"
              disabled={isLoading}
            >
              Send{" "}
              {isLoading ? (
                <Loader2 className="h-4 w-4 ml-2 animate-spin" />
              ) : (
                <ArrowRightCircle className="h-4 w-4 ml-2" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
