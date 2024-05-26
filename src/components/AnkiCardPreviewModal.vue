<script setup lang="ts">
import { ref, onMounted, watch, defineEmits } from 'vue';
import { Modal } from 'bootstrap';
import { CardInformation } from '@/lib/information-collector';

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
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
