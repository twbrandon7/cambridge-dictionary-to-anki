<script setup lang="ts">
import { computed, ref, watch } from "vue";
import AnkiCardPreviewModal from "./components/AnkiCardPreviewModal.vue";
import PluginConfig from "./components/PluginConfig.vue";
import LoginModal from "./components/LoginModal.vue";
import Example from "@/lib/example";
import InformationCollector, { CardInformation } from "./lib/information-collector";
import EventBus, { EventType, Event, OpenAnkiCardModalEvent, OpenConfigModalEvent, OpenLoginModalEvent } from "./lib/events/event";

const show = ref<boolean>(false);
const showConfig = ref<boolean>(false);
const showLogin = ref<boolean>(false);
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

EventBus.getInstance().subscribe(EventType.OPEN_CONFIG_MODAL, (event: Event) => {
  if (!(event instanceof OpenConfigModalEvent)) {
    return;
  }
  showConfig.value = true;
});

EventBus.getInstance().subscribe(EventType.OPEN_LOGIN_MODAL, (event: Event) => {
  if (!(event instanceof OpenLoginModalEvent)) {
    return;
  }
  showLogin.value = true;
});
</script>

<template>
  <anki-card-preview-modal v-model:show="show" :info="cardInformation" />
  <plugin-config v-model:show="showConfig" />
  <login-modal v-model:show="showLogin" />
</template>

<style scoped></style>
