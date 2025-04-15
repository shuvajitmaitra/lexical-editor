"use client";
import LexicalJsonRenderer from '@/components/lexicalEditor/renderer/JsonRenderer';
import React, { useState, useEffect } from 'react';
let contentId = '123'; // Example content ID, replace with actual ID from your database
// Example component to fetch and render Lexical JSON from database
const DBContentRenderer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [content, setContent] = useState(null);
    useEffect(() => {
        // Mock API call (replace with your actual database fetch)
        const fetchContent = async () => {
            try {
                setLoading(true);
                // In a real app, this would be a fetch to your API
                // const response = await fetch(`/api/content/${contentId}`);
                // const data = await response.json();
                // For demo, simulate API delay and return sample data
                await new Promise(resolve => setTimeout(resolve, 1000));
                // Sample Lexical JSON that would come from your database
                const sampleData = {
                    "root": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "detail": 0,
                                                "format": 0,
                                                "mode": "normal",
                                                "style": "",
                                                "text": "sdfsdffdg",
                                                "type": "text",
                                                "version": 1
                                            }
                                        ],
                                        "direction": "ltr",
                                        "format": "",
                                        "indent": 0,
                                        "type": "link",
                                        "version": 1,
                                        "rel": "noreferrer",
                                        "target": null,
                                        "title": null,
                                        "url": "https://drghrthy.com"
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1,
                                "textFormat": 0,
                                "textStyle": ""
                            },
                            {
                                "type": "page-break",
                                "version": 1
                            },
                            {
                                "children": [
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "font-family: Verdana;",
                                        "text": "f",
                                        "type": "text",
                                        "version": 1
                                    },
                                    {
                                        "detail": 0,
                                        "format": 0,
                                        "mode": "normal",
                                        "style": "background-color: #942b2b;font-family: Verdana;",
                                        "text": "dgdfg",
                                        "type": "text",
                                        "version": 1
                                    }
                                ],
                                "direction": "ltr",
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1,
                                "textStyle": "font-family: Verdana;",
                                "textFormat": 0
                            },
                            {
                                "type": "horizontalrule",
                                "version": 1
                            },
                            {
                                "children": [],
                                "direction": null,
                                "format": "",
                                "indent": 0,
                                "type": "paragraph",
                                "version": 1,
                                "textFormat": 0,
                                "textStyle": ""
                            }
                        ],
                        "direction": "ltr",
                        "format": "",
                        "indent": 0,
                        "type": "root",
                        "version": 1,
                        "textStyle": "font-family: Verdana;"
                    }
                };
                setContent(sampleData);
                setError(null);
            }
            catch (err) {
                console.error('Error fetching content:', err);
                setError(err === null || err === void 0 ? void 0 : err.message);
            }
            finally {
                setLoading(false);
            }
        };
        if (contentId) {
            fetchContent();
        }
    }, [contentId]);
    if (loading) {
        return <div className="p-4 animate-pulse bg-gray-100 h-32 rounded">Loading content...</div>;
    }
    if (error) {
        return <div className="p-4 text-red-500">Error: {error}</div>;
    }
    if (!content) {
        return <div className="p-4">No content found</div>;
    }
    return (<div className="border-l-4 border-blue-500 pl-4 py-2">
            <LexicalJsonRenderer lexicalState={content} className="prose max-w-none" showTOC/>
        </div>);
};
export default DBContentRenderer;
//# sourceMappingURL=page.jsx.map