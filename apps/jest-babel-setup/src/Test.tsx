import React, { useState } from "react";
import { Button } from "@poc/shared";

type Props = {};

export default function Test({}: Props) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-4">
      <h1>Jest App</h1>
      <Button onClick={() => setClicked(true)}>Click me</Button>
      {clicked && <p>Clicked!</p>}
    </div>
  );
}
