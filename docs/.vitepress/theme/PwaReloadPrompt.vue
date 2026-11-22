<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="pwa-toast"
    role="alert"
    aria-live="polite"
  >
    <div class="pwa-message">
      <span v-if="offlineReady">
        App ready to work offline
      </span>
      <span v-else>
        New content available, click reload to update.
      </span>
    </div>
    <div class="pwa-actions">
      <button
        v-if="needRefresh"
        type="button"
        class="pwa-btn pwa-btn-primary"
        @click="updateServiceWorker()"
      >
        Reload
      </button>
      <button
        type="button"
        class="pwa-btn"
        @click="close"
      >
        Close
      </button>
    </div>
  </div>
</template>

<style scoped>
.pwa-toast {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 100;
  max-width: 340px;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  box-shadow: var(--vp-shadow-3);
  font-size: 14px;
}

.pwa-message {
  margin-bottom: 10px;
  line-height: 1.4;
}

.pwa-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.pwa-btn {
  padding: 5px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.pwa-btn:hover {
  border-color: var(--vp-c-brand-1);
}

.pwa-btn-primary {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.pwa-btn-primary:hover {
  background-color: var(--vp-c-brand-2);
}
</style>