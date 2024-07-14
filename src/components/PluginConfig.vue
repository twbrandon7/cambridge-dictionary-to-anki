<script setup lang="ts">
import { ref, onMounted, watch, defineEmits } from 'vue';
import { Modal } from 'bootstrap';
import ConfigStorage from '@/lib/config-storage';
import AuthTokenManager from "@/lib/auth-token-manager";

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  'update:show': [value: boolean];
}>();

const modal = ref<HTMLElement | null>(null);
const modalObject = ref<Modal | null>(null);
const backendUrl = ref<string>('');
const connectionChecked = ref<boolean>(false);

onMounted(async () => {
  const modalElement = modal.value;
  if (modalElement) {
    modalObject.value = new Modal(modalElement);
    modalElement.addEventListener('hide.bs.modal', () => {
      emit('update:show', false);
    });
  }

  backendUrl.value = await ConfigStorage.getInstance().get(ConfigStorage.KEY_BACKEND_URL);
});

watch(() => props.show, (show) => {
  if (show) {
    modalObject.value?.show();
  } else {
    modalObject.value?.hide();
  }
});

const save = async () => {
  await ConfigStorage.getInstance().set(ConfigStorage.KEY_BACKEND_URL, backendUrl.value);
  emit('update:show', false);
};

const testConnection = async () => {
  await ConfigStorage.getInstance().set(ConfigStorage.KEY_BACKEND_URL, backendUrl.value);
  const manager = AuthTokenManager.getInstance();
  const token = await manager.tryRefreshingToken();
  if (token !== null) {
    connectionChecked.value = true;
  } else {
    let error = false;
    try {
      await manager.interactiveLogin();
    } catch (e) {
      error = true;
      connectionChecked.value = false;
    }
    if (!error) {
      connectionChecked.value = true;
    }
  }
}
</script>

<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Config</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="backendUrlText" class="form-label">Backend URL</label>
              <div class="input-group mb-3">
                <input type="text" :class="{'form-control': true, 'is-valid': connectionChecked}" id="backendUrlText" aria-describedby="button-addon2" v-model="backendUrl">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="testConnection">Login / Test Connection</button>
              </div>
              <div class="form-text">The backend url to upload cards to AnkiWeb.</div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="() => emit('update:show', false)">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="save">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>