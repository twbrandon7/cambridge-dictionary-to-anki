<script setup lang="ts">
import { computed, ref, watch } from "vue";
import AnkiCardPreviewModal from "./components/AnkiCardPreviewModal.vue";
import Example from "@/lib/example";
import InformationCollector, { CardInformation } from "./lib/information-collector";
import EventBus, { EventType, Event, OpenAnkiCardModalEvent } from "./lib/event";

const show = ref<boolean>(false);
const exampleBlock = ref<Example | null>(null);

const cardInformation = computed<CardInformation | null>(() => {
  if (exampleBlock.value) {
    return new InformationCollector(exampleBlock.value as Example).getCardInformation();
  }
  return null;
});

EventBus.getInstance().subscribe(EventType.OPEN_ANKI_CARD_MODAL, (event: Event) => {
    if (!(event instanceof OpenAnkiCardModalEvent)) {
        return;
    }
    const example = event.example;
    exampleBlock.value = example;
    show.value = true;
});
</script>

<template>
  <anki-card-preview-modal v-model:show="show" :info="cardInformation" />
</template>

<style scoped></style>
