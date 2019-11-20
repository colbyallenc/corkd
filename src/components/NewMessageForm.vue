<template>
  <div>
    <h1>Corkd'd</h1>
    <input
    type="text"
    data-test="messageText"
    />
    <button type="submit">Save</button>
    <button
      data-test="saveButton"
    >
      Save
    </button>

  </div>
</template>

<script>
export default {
  name: 'NewMessageForm',
};
</script>
