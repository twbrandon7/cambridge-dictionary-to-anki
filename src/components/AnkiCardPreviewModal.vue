<script setup lang="ts">
import { ref, onMounted, watch, defineEmits } from 'vue';
import { Modal } from 'bootstrap';
import { CardInformation } from '@/lib/information-collector';
import ClozeSelector from '@/components/partial/ClozeSelector.vue';

const props = defineProps<{
  show: boolean;
  info: CardInformation | null;
}>();

const emit = defineEmits<{
  'update:show': [value: boolean];
}>();

const modal = ref<HTMLElement | null>(null);
const modalObject = ref<Modal | null>(null);

onMounted(() => {
  const modalElement = modal.value;
  if (modalElement) {
    modalObject.value = new Modal(modalElement);
    modalElement.addEventListener('hide.bs.modal', () => {
      emit('update:show', false);
    });
  }
});

watch(() => props.show, (show) => {
  if (show) {
    modalObject.value?.show();
  } else {
    modalObject.value?.hide();
  }
});

</script>

<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create new card</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <template v-if="info">
            <cloze-selector :target-word="info.word" :sentence="info.englishExample"></cloze-selector>
            <div class="example-translation"> {{ info.exampleTranslation }} </div>
            <hr />
            <div class="word-head">
              <div class="target-word">{{ info.word }}</div>
              <div class="word-info">
                <div class="part-of-speech">{{ info.partOfSpeech }}</div>
                <div class="tag-container">
                  <span class="cefr-level" v-if="info.cefrLevel">{{ info.cefrLevel }}</span>
                  <span>{{ info.code }}</span>
                </div>
              </div>
            </div>
            <div class="en-definition">{{ info.englishDefinition }}</div>
            <div class="definition-translation"> {{ info.definitionTranslation }} </div>
          </template>
          <template v-else>
            <p>Failed to get card information</p>
          </template>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.word-head {
  display: flex;
  gap: 40px;
}

.word-head .word-info {
  flex-direction: column;
  gap: 5px;
}

.target-word {
  word-break: break-word;
  visibility: visible;
  font-family: Arial, Helvetica, "Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  font-size: 36px;
  color: #1d2a57;
  font-weight: 400;
  box-sizing: border-box;
}

.part-of-speech {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  word-break: break-word;
  visibility: visible;
  font-family: Arial, Helvetica, "Microsoft JhengHei", sans-serif;
  color: #1d2a57;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 14px;
  font-style: italic;
  font-weight: 700;
}

.en-definition {
  word-break: break-word;
  visibility: visible;
  font-family: Arial, Helvetica, "Microsoft JhengHei", sans-serif;
  color: #1d2a57;
  box-sizing: border-box;
  font-weight: 700;
  margin-top: 10px;
  font-size: 18px;
  line-height: 1.5;
  display: block;
}

.definition-translation {
  padding: 10px 0 10px 0;
  visibility: visible;
  box-sizing: border-box;
  color: #0580e8;
  word-break: break-word;
  display: block;
  font-family: Arial, Helvetica, "Microsoft JhengHei", sans-serif;
  font-size: 17px;
}

.english-example {
  word-break: break-word;
  visibility: visible;
  color: #1d2a57;
  line-height: 1.4;
  font-size: 17px;
  box-sizing: border-box;
  font-style: italic;
}

.example-translation {
  visibility: visible;
  line-height: 1.4;
  font-size: 17px;
  box-sizing: border-box;
  display: block;
  color: #0580e8;
  word-break: break-word;
  margin-top: 10px;
}

.cefr-level {
  word-break: keep-all;
  visibility: visible;
  box-sizing: border-box;
  margin-right: 3px;
  padding: 2px 6px;
  color: #fff;
  font-weight: 700;
  font-size: .75rem;
  text-align: center;
  background-color: #1d2956;
  border-radius: 50px;
}

.tag-container {
  display: flex;
  gap: 5px;
}
</style>
