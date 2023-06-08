<script setup>
import Editor from 'ckeditor5-custom-build/src/ckeditor'
import CommentInput from '../components/CommentInput.vue'
import CommentEditor from 'ckeditor5-custom-build/src/comment'
import { ref } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'
const text = ref('')
const show = ref(false)
const commentConfig = ref({
    toolbar: {
        items: ['bold', 'italic', 'link', '|', 'code', 'codeBlock', 'undo', 'redo']
    },
    removePlugins: [
        'Alignment', 'Autoformat', 'BlockQuote', 'CloudServices', 'FontSize', 'Image', 'ImageCaption', 'ImageInsert', 'ImageResize', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'Indent', 'List', 'MediaEmbed', 'PasteFromOffice', 'Table', 'TableCaption', 'TableCellProperties', 'TableColumnResize', 'TableToolbar', 'TextTransformation'
    ]
})
</script>
<template>
    <Ckeditor :editor="Editor" v-model="text" :config="commentConfig" />
    <button @click="() => { show = !show; hljs.highlightAll() }">Show</button>
    <div v-html="text" v-show="show"></div>
</template>