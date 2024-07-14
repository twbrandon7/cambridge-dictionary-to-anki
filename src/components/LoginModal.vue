<script setup lang="ts">
import { ref, onMounted, watch, defineEmits } from 'vue';
import { Modal } from 'bootstrap';
import ConfigStorage from '@/lib/config-storage';
import { login as loginApi } from '@/lib/login-api';
import EventBus, { LoginCancelledEvent, LoginFailedEvent, LoginSuccessEvent } from '@/lib/events/event';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  'update:show': [value: boolean];
}>();

const modal = ref<HTMLElement | null>(null);
const modalObject = ref<Modal | null>(null);
const apiKey = ref<string>('');

onMounted(async () => {
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

const login = async () => {
  let authToken = null;
  try {
    authToken = await loginApi(apiKey.value);
  } catch (error: Error | any) {
    alert('Login failed: ' + error.message);
    EventBus.getInstance().publish(new LoginFailedEvent(error.message))
    return;
  }
  if (authToken === null) {
    alert('Login failed');
    EventBus.getInstance().publish(new LoginFailedEvent('Login failed'));
    return;
  }
  EventBus.getInstance().publish(new LoginSuccessEvent(authToken));
  emit('update:show', false);
};

const cancel = () => {
  EventBus.getInstance().publish(new LoginCancelledEvent('Login canceled'));
  emit('update:show', false);
};
</script>

<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="apiKey" class="form-label">API key</label>
              <input type="password" class="form-control" id="apiKey" aria-describedby="apiKey" v-model="apiKey">
              <div id="apiKey" class="form-text">The API key to authenticate with the backend.</div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="cancel">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>