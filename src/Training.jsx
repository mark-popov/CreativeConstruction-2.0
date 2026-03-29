import { useState } from "react";

function Training() {
    const [text, setText] = useState("");

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            <p>You typed: {text}</p>
        </div>
    );
}

export default Training;