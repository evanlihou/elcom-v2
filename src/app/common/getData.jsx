import MarkdownCompiler from "marked";
import React from "react"

/**
 * Fetches and handles content from the data directory
 * Supported filetypes:
 * Json: Parses to object and returns
 * Markdown: Parses to HTML and returns
 * @param {string} filename the file in the data directory to fetch
 * 
 */
async function getData(filename) {
    try {
        var resp = await fetch(`/data/${filename}`);
        var type = resp.headers.get("content-type");

        if (type.match(/json/)) {
            return await resp.json();
        } else if (type.match(/markdown/)) {
            return <div dangerouslySetInnerHTML={{__html: MarkdownCompiler(await resp.text())}} />;
        } else {
            console.error("getData received an unknown content-type", type)
            return "UNDEF " + type;
        }
    } catch (e) {
        console.error(`Error fetching ${filename}`);
    }
}

export default getData;