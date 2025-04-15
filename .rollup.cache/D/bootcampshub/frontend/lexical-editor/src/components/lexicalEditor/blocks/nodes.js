import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { HashtagNode } from '@lexical/hashtag';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { OverflowNode } from '@lexical/overflow';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ParagraphNode, TextNode, } from 'lexical';
import { AutocompleteNode } from '../components/nodes/autocomplete-node';
import { CollapsibleContainerNode } from '../components/nodes/collapsible-container-node';
import { CollapsibleContentNode } from '../components/nodes/collapsible-content-node';
import { CollapsibleTitleNode } from '../components/nodes/collapsible-title-node';
import { FigmaNode } from '../components/nodes/embeds/figma-node';
import { TweetNode } from '../components/nodes/embeds/tweet-node';
import { YouTubeNode } from '../components/nodes/embeds/youtube-node';
import { EmojiNode } from '../components/nodes/emoji-node';
import { EquationNode } from '../components/nodes/equation-node';
import { ExcalidrawNode } from '../components/nodes/excalidraw-node';
import { ImageNode } from '../components/nodes/image-node';
import { InlineImageNode } from '../components/nodes/inline-image-node';
import { KeywordNode } from '../components/nodes/keyword-node';
import { LayoutContainerNode } from '../components/nodes/layout-container-node';
import { LayoutItemNode } from '../components/nodes/layout-item-node';
import { PageBreakNode } from '../components/nodes/page-break-node';
import { PollNode } from '../components/nodes/poll-node';
import { BeautifulMentionNode } from "../components/plugins/beautiful-mention";
export const nodes = [
    BeautifulMentionNode,
    HeadingNode,
    ParagraphNode,
    TextNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    LinkNode,
    OverflowNode,
    HashtagNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    CodeNode,
    CodeHighlightNode,
    HorizontalRuleNode,
    // MentionNode,
    PageBreakNode,
    ImageNode,
    InlineImageNode,
    EmojiNode,
    KeywordNode,
    ExcalidrawNode,
    PollNode,
    LayoutContainerNode,
    LayoutItemNode,
    EquationNode,
    CollapsibleContainerNode,
    CollapsibleContentNode,
    CollapsibleTitleNode,
    AutoLinkNode,
    FigmaNode,
    TweetNode,
    YouTubeNode,
    AutocompleteNode,
];
//# sourceMappingURL=nodes.js.map