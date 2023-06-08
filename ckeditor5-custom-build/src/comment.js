/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall.js';

class CommentEditor extends ClassicEditor { }

// Plugins to include in the build.
CommentEditor.builtinPlugins = [
    Bold,
    Code,
    CodeBlock,
    Essentials,
    Heading,
    Image,
    Italic,
    Link,
    Mention,
    SelectAll,
];

// Editor configuration.
CommentEditor.defaultConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            '|',
            'code',
            'codeBlock',
            'undo',
            'redo'
        ]
    },
    language: 'en',
};

export default CommentEditor;
