<script setup lang="ts">
import Tokenizer from '@/lib/tokenizer';
import {computed, defineProps} from 'vue';

const props = defineProps<{
    sentence: string;
}>();

const words = computed<Array<string>>(() => {
    return Tokenizer.tokenize(props.sentence);
});

const isWord = (word: string) => {
    return /^[a-zA-Z]+$/.test(word);
};
</script>

<template>
    <button type="button" v-for="word of words" :class="{'reset-button': true, word: isWord(word)}" :disabled="!isWord(word)">{{ word }}</button>
</template>

<style scoped>
.reset-button {
    background-color: transparent;
    border: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.word {
    border-radius: 5px;
    margin: 0 2px 0 2px;
    padding: 2px;
    background-color: #f0f0f0;
}

.word:hover {
    background-color: #e0e0e0;
}
</style>
