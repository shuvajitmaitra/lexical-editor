import { createEditor } from "lexical";
import { describe, expect, test } from "vitest";
import { $createBeautifulMentionNode, BeautifulMentionNode, } from "./MentionNode";
const editorConfig = {
    nodes: [BeautifulMentionNode],
};
export function exportJSON(trigger, value, data) {
    let node = undefined;
    const editor = createEditor(editorConfig);
    editor.update(() => {
        node = $createBeautifulMentionNode(trigger, value, data);
    });
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!node) {
        throw new Error("Node is undefined");
    }
    return node.exportJSON();
}
describe("BeautifulMentionNode", () => {
    test("should include a data prop when exporting to JSON and data is provided when creating the node", () => {
        const node = exportJSON("@", "Jane", {
            email: "jane@example.com",
        });
        expect(node).toStrictEqual({
            trigger: "@",
            type: "beautifulMention",
            value: "Jane",
            data: {
                email: "jane@example.com",
            },
            version: 1,
        });
    });
    test("should not include a data prop when exporting to JSON if no data is provided when creating the node", () => {
        const node = exportJSON("@", "Jane");
        expect(node).toStrictEqual({
            trigger: "@",
            type: "beautifulMention",
            value: "Jane",
            version: 1,
        });
    });
});
//# sourceMappingURL=MentionNode.spec.js.map