"use client";

import { useState } from "react";

export default function SearchBar() {
    const [text, setText] = useState("");

    return (
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search..."
        />
    );
}