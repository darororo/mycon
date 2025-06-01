<template>
  <div>
    <Button
      :dt="button"
      :pt="{
        root: {
          style: 'font-weight: 500; font-size: 14px; font-family: Montserrat, san serif',
        },
      }"
      label="Comment"
      @click="CommentVisible = true"
    >
    </Button>

    <Dialog
      v-model:visible="CommentVisible"
      modal
      header="Comment"
      :style="{ width: '800px', height: '600px' }"
      :pt="{
        content: {
          style: 'padding: 0;',
        },
        header: {
          style: 'border-bottom: 1px solid #ccc;',
        },
      }"
      :dt="{
        background: 'white',
        color: 'black',
        header: {
          padding: '10px 30px',
        },
        border: {
          radius: '20px',
        },
      }"
    >
      <CommentPop />

      <template #footer>
        <div style="width: 100%; display: flex; gap: 10px; align-items: center; margin-top: 10px">
          <div style="display: flex; gap: 14px; align-items: center; width: 100%; padding: 0 6px">
            <img
              style="height: 30px; border-radius: 100%"
              src="https://i.pinimg.com/736x/ee/ef/ac/eeefac433aafc6cc01712e1fe1a79531.jpg"
            />
            <InputText
              v-model="inputText"
              placeholder="Write a comment..."
              style="flex: 1; font-size: 13px; font-family: 'Montserrat', sans-serif; color: black"
              :dt="{
                background: 'white',
                border: {
                  color: '#ccc',
                  radius: '10px',
                },
                hover: {
                  border: {
                    color: '#ccc',
                  },
                },
                focus: {
                  border: {
                    color: '#ccc',
                  },
                  color: 'black',
                },
              }"
            />
          </div>
          <Button
            label="Submit"
            :pt="{
              root: {
                style: `
        background-color: #3b82f6;
        color: white;
        padding: 8px 20px;
        font-size: 14px;
        font-weight: 600;
        font-family: Montserrat, sans-serif;
        border-radius: 8px;
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.2s ease;
      `,
              },
            }"
            :dt="{
              hover: {
                background: '#2563eb',
              },
              active: {
                background: '#1d4ed8',
              },
            }"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import CommentPop from '~/components/timeline/popup/CommentPop.vue'

const CommentVisible = ref(false)

const button = {
  primary: {
    background: '#222831',
    color: 'white',
    border: {
      color: 'none',
    },
    hover: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
    active: {
      background: '#222831',
      color: 'white',
      border: {
        color: 'none',
      },
    },
  },
  border: {
    radius: '12px',
  },
  padding: {
    x: '20px',
    y: '10px',
  },
}
</script>
