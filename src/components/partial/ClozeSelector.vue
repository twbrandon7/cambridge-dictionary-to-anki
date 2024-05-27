<script setup lang="ts">
import Tokenizer, { Token, TokenData } from '@/lib/tokenizer';
import { defineProps, onMounted, ref, watch } from 'vue';

const props = withDefaults(defineProps<{
    targetWord: string;
    sentence: string;
    value: Token[];
}>(), {
    value: () => [],
});

const tokens = ref<Array<Token>>([]);
const generateTokens = () => {
    const tokens = Tokenizer.tokenize(props.sentence);
    tokens.forEach(token => {
        if (token.isWord() && token.getValue().toLowerCase() === props.targetWord.toLowerCase()) {
            token.toggleSelect();
        }
    });
    return tokens;
};

onMounted(() => {
    tokens.value = generateTokens();
});

watch(() => props.sentence, () => {
    tokens.value = generateTokens();
});

const emit = defineEmits<{
    'update:modelValue': [value: TokenData[]];
}>();

watch(() => tokens.value, () => {
    emit('update:modelValue', tokens.value.map(token => token.getData()));
});
</script>

<template>
    <template v-for="token of tokens">
        <button v-if="token.isWord()" type="button"
            :class="{ 'reset-button': true, 'candidate-word': true, 'selected-word': token.isSelected() }"
            @click="token.toggleSelect()">{{ token.getValue() }}</button>
        <span v-else-if="!token.isHtmlTag()">{{ token.getValue() }}</span>
    </template>
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

.candidate-word {
    border-radius: 5px;
    margin: 0 2px 0 2px;
    padding: 2px 4px 2px 4px !important;
    background-color: #f0f0f0;
}

.candidate-word:hover {
    background-color: #e0e0e0;
}

.candidate-word.selected-word {
    background-color: #0580e8 !important;
    color: white;
}
</style>
