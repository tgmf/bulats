<template>
  <form
    method="POST"
    data-netlify="true"
    name="contact"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />

    <div>
      <label for="name" class="capitalize block mb-2">{{
        $t('components.page.form.name')
      }}</label>
      <input
        id="name"
        v-model="name"
        class="w-full md:w-5/8 border border-blue-480 text-blue-480 p-2 mb-5"
        type="text"
        name="name"
        required
      />
    </div>

    <div>
      <label for="email" class="capitalize block mb-2">{{
        $t('components.page.form.email')
      }}</label>
      <input
        id="email"
        v-model="email"
        class="w-full md:w-5/8 border border-blue-480 text-blue-480 p-2 mb-5"
        type="email"
        name="email"
        required
      />
    </div>

    <div>
      <label for="message" class="capitalize block mb-2">{{
        $t('components.page.form.message')
      }}</label>
      <textarea
        id="message"
        v-model="message"
        class="w-full md:w-7/8 border border-blue-480 text-blue-480 p-2 mb-5"
        name="message"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      class="capitalize mb-3 bg-white text-blue-480 py-2 px-4"
    >
      {{ $t('components.page.form.submit') }}
    </button>

    <p v-if="submitted">{{ $t('components.page.form.thankyou') }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Form data
const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

// Form submission handler
const handleSubmit = async () => {
  const data = new FormData()
  data.append('form-name', 'contact')
  data.append('name', name.value)
  data.append('email', email.value)
  data.append('message', message.value)

  try {
    const response = await fetch('/', {
      method: 'POST',
      body: data,
    })

    if (response.ok) {
      // Reset form
      name.value = ''
      email.value = ''
      message.value = ''

      // Show confirmation message
      submitted.value = true
    } else {
      // Show error message
      submitted.value = false
    }
  } catch (error) {
    // Handle error
    submitted.value = false
  }
}
</script>
